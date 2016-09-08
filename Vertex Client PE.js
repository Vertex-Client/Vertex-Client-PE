/**
 * ###############################################################
 * @name Vertex Client PE
 * @version v1.2
 * @author peacestorm (@AgameR_Modder)
 * @credits _TXMO, MyNameIsTriXz, Godsoft029, ArceusMatt, LPMG
 *
 * Thanks to NoCopyrightSounds and all artists for the music!
 *
 * ###############################################################
 */

// #####################
// # ANDROID FUNCTIONS #
// #####################

var widget = android.widget;
var graphics = android.graphics;
var view = android.view;
var animation = view.animation;
var LinearLayout = widget.LinearLayout;
var ScrollView = widget.ScrollView;
var Button = widget.Button;
var EditText = widget.EditText;
var SeekBar = widget.SeekBar;
var Point = graphics.Point;
var KeyEvent = view.KeyEvent;
var AnimationUtils = animation.AnimationUtils;
var TranslateAnimation = animation.TranslateAnimation;
var AccelerateInterpolator = animation.AccelerateInterpolator;
var ViewPager = android.support.v4.view.ViewPager;
var Color = graphics.Color;
var javascript = org.mozilla.javascript;
var ScriptableObject = javascript.ScriptableObject;
var Scriptable = javascript.Scriptable;
var Context = javascript.Context;
var Function = javascript.Function;
var Runnable = java.lang.Runnable;
var Thread = java.lang.Thread;
var io = java.io;
var File = io.File;
var util = java.util;
var Scanner = util.Scanner;
var nio = java.nio;
var ByteBuffer = nio.ByteBuffer;
var FloatBuffer = nio.FloatBuffer;
var ByteOrder = nio.ByteOrder;
var ShortBuffer = nio.ShortBuffer;
var opengl = android.opengl;
var GLSurfaceView = opengl.GLSurfaceView;
var Renderer = GLSurfaceView.Renderer;
var GLU = opengl.GLU;
var opengles = javax.microedition.khronos.opengles;
var GL10 = opengles.GL10;
var PopupWindow = widget.PopupWindow;
var RelativeLayout = widget.RelativeLayout;
var Gravity = view.Gravity;
var PixelFormat = graphics.PixelFormat;
var ScriptManager = net.zhuoweizhang.mcpelauncher.ScriptManager;

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var display = new android.util.DisplayMetrics();
com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
var size = new Point();
ctx.getWindowManager().getDefaultDisplay().getRealSize(size);
var screenWidth = size.x;
var screenHeight = size.y;

//android.app.Activity.requestWindowFeature(android.view.Window.FEATURE_CUSTOM_TITLE);
//android.app.Activity.setContentView(R.layout.main);
/* ctx.runOnUiThread(new java.lang.Runnable({
	run: function() {
		// var test = new android.app.Activity();
		// test.setContentView(android.R.layout.main);
		// ctx.startActivity(new android.content.Intent(ctx, test.class));
		// test.setOnCreateListener(new android.app.Activity.OnCreateListener() {
			
		// });
		//var appClass = net.zhuoweizhang.mcpelauncher.ui.LauncherActivity;
		try {
			//var appClass = com.mojang.minecraftpe.MainActivity;
			//appClass.setTaskDescription(new android.app.ActivityManager.TaskDescription("Lol"));
			//appClass.setTitle("Vertex Client PE");
			ctx.setTitle("Vertex Client PE");
		} catch(e) {
			print(e);
		}
	}
})); */

//android.getActivity().setTitle("Vertex Client PE");

var topBarHeight = screenHeight / 10;

var customHeight = topBarHeight / 2;

var sharedPref = ctx.getPreferences(ctx.MODE_PRIVATE);
var editor = sharedPref.edit();

var Launcher = {
	isBlockLauncher: function() {
		return (ctx.getPackageName() == "net.zhuoweizhang.mcpelauncher" || ctx.getPackageName() == "net.zhuoweizhang.mcpelauncher.pro");
	},
	isToolbox: function() {
		return ctx.getPackageName() == "io.mrarm.mctoolbox";
	},
	isMcpeMaster: function() {
		return ctx.getPackageName() == "com.mcbox.pesdkb.mcpelauncher";
	}
};

var ScreenType = {
	start_screen: "start_screen",
	hud: "hud_screen",
	ingame: "in_game_play_screen",
	survival_inv: "survival_inventory_screen",
	creative_inv: "creative_inventory_screen",
	pause_screen: "pause_screen",
	options_screen: "options_screen"
};

var currentScreen = Launcher.isToolbox()?ScreenType.ingame:null;

function screenChangeHook(screenName) {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	currentScreen = screenName;
	if(screenName == ScreenType.hud || screenName == ScreenType.ingame) {
		if((hacksList == null || !hacksList.isShowing()) && !VertexClientPE.menuIsShowing) {
			showHacksList();
			showTabGUI();
		}
	} else {
		if(hacksList != null) {
			ctx.runOnUiThread(new java.lang.Runnable({
				run: function() {
					hacksList.dismiss();
				}
			}));
		}
		if(tabGUI != null) {
			ctx.runOnUiThread(new java.lang.Runnable({
				run: function() {
					tabGUI.dismiss();
				}
			}));
		}
	}
}

// ####################
// # CLIENT FUNCTIONS #
// ####################

//Don't copy anything without my permission!

String.prototype.replaceAll = function (target, replacement, insensitive) {
	if (insensitive) {
		return this.replace(new RegExp(target.replace(/[\\\^\$\.\[\]\|\(\)\?\*\+\{\}\-]/g, ""), "gi"), replacement);
	} else {
		return this.split(target).join(replacement);
	}
};

var isSupported = true;
var isAuthorized = true;

var oldYaw = 0;
var newYaw = 0;

var VertexClientPE = {
	name: "Vertex Client PE",
	getName: function() {
		return VertexClientPE.name;
	},
	author: "peacestorm",
	isDev: false,
	isDevMode: function() {
		return VertexClientPE.isDev;
	},
	isSupported: function() {
		return isSupported;
	},
	accounts: new org.json.JSONArray(),
	currentWorld: {
		deathX: -1,
		deathY: -1,
		deathZ: -1
	},
	latestReleaseDownloadCount: null,
	Utils: {
		chests: [],
		fov: 70,
		world: {
			chatMessages: []
		}
	},
	CombatUtils: {
		aimAtEnt: function(ent) {
			if(Entity.getEntityTypeId(ent) == EntityType.VILLAGER || Entity.getEntityTypeId(ent) == EntityType.PLAYER || Player.isPlayer(ent)) {
				// Credits to Godsoft0329 aka the developer of DragOP
				var velocity = 1;
				var posX = Entity.getX(ent) - Player.getX();
				var posY = Entity.getEntityTypeId(ent) == EntityType.PLAYER ? Entity.getY(ent) - Player.getY() : Entity.getY(ent) + 1 - Player.getY();
				var posZ = Entity.getZ(ent) - Player.getZ();
				var realYaw = (Math.atan2(posZ, posX) * 180 / Math.PI) - 90;
				var y2 = Math.sqrt(posX * posX + posZ * posZ);
				var g = 0.007;
				var tmp = (velocity * velocity * velocity * velocity - g * (g * (y2 * y2) + 2 * posY * (velocity * velocity)));
				var pitch = -(180 / Math.PI) * (Math.atan((velocity * velocity - Math.sqrt(tmp)) / (g * y2)));
				if(pitch < 89 && pitch > -89) {

					/* imYannic's code */

					oldYaw = newYaw;
					newYaw = realYaw;

					var dist = Math.sqrt(Math.pow(posX, 2) + Math.pow(posY, 2) + Math.pow(posZ, 2));

					yaw = realYaw+(newYaw - oldYaw) * (dist*dist/dist)/(120/45);

					Entity.setRot(getPlayerEnt(), yaw, pitch);

					/* ---- */
				}
			}
		}
	}
};

VertexClientPE.menuIsShowing = false;

VertexClientPE.Utils.loadChests = function() {
	VertexClientPE.Utils.chests = [];
	try {
		var x = getPlayerX();
		var y = getPlayerY();
		var z = getPlayerZ();
		var newX;
		var newY;
		var newZ;
		for(var blockX = - chestESPRange; blockX <= chestESPRange; blockX++) {
			for(var blockY = - chestESPRange; blockY <= chestESPRange; blockY++) {
				for(var blockZ = - chestESPRange; blockZ <= chestESPRange; blockZ++) {
					newX = x + blockX;
					newY = y + blockY;
					newZ = z + blockZ;
					if(getTile(newX, newY, newZ) == 54) {
						VertexClientPE.Utils.chests.push({
							x: newX,
							y: newY,
							z: newZ
						});
					}
				}
			}
		}
	} catch(e) {
		//an error occured
	} finally {
		VertexClientPE.toast("Successfully (re)loaded chests!");
	}
}

VertexClientPE.Utils.getChests = function() {
	return VertexClientPE.Utils.chests;
}

var _0x199a=["\x69\x73\x50\x72\x6F","\x67\x65\x74\x50\x72\x65\x66\x65\x72\x65\x6E\x63\x65\x73","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x69\x73\x50\x72\x6F","\x67\x65\x74\x53\x74\x72\x69\x6E\x67","\x73\x65\x74\x49\x73\x50\x72\x6F","\x54\x68\x69\x73\x49\x73\x53\x70\x61\x72\x74\x61"];VertexClientPE[_0x199a[0]]=function(){var _0xf36dx1=ctx[_0x199a[1]](ctx.MODE_PRIVATE);return _0xf36dx1[_0x199a[3]](_0x199a[2],null)};VertexClientPE[_0x199a[4]]=function(){var _0xf36dx2=_0x199a[5];return _0xf36dx2}

var _0xda74=["\x68\x61\x73\x45\x61\x72\x6E\x65\x64\x50\x72\x6F\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x67\x65\x74\x50\x72\x65\x66\x65\x72\x65\x6E\x63\x65\x73","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x68\x61\x73\x45\x61\x72\x6E\x65\x64\x50\x72\x6F\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x67\x65\x74\x53\x74\x72\x69\x6E\x67","\x74\x72\x75\x65"];VertexClientPE[_0xda74[0]]= function(){var _0xdb22x1=ctx[_0xda74[1]](ctx.MODE_PRIVATE);if(_0xdb22x1[_0xda74[3]](_0xda74[2],null)== _0xda74[4]){return true}else {return false}}

var _0xb21b=["\x67\x65\x74\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x67\x65\x74\x50\x72\x65\x66\x65\x72\x65\x6E\x63\x65\x73","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x76\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x67\x65\x74\x49\x6E\x74"];VertexClientPE[_0xb21b[0]]= function(){var _0x602dx1=ctx[_0xb21b[1]](ctx.MODE_PRIVATE);var _0x602dx2=_0x602dx1[_0xb21b[3]](_0xb21b[2],0);return _0x602dx2}

var _0xe844=["\x67\x69\x76\x65\x50\x72\x6F\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x68\x61\x73\x45\x61\x72\x6E\x65\x64\x50\x72\x6F\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x67\x65\x74\x50\x72\x65\x66\x65\x72\x65\x6E\x63\x65\x73","\x65\x64\x69\x74","\x67\x65\x74\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x76\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x70\x75\x74\x49\x6E\x74","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x68\x61\x73\x45\x61\x72\x6E\x65\x64\x50\x72\x6F\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x74\x72\x75\x65","\x70\x75\x74\x53\x74\x72\x69\x6E\x67","\x63\x6F\x6D\x6D\x69\x74","\x69\x73\x44\x65\x76\x4D\x6F\x64\x65","\x47\x61\x76\x65\x20\x70\x72\x6F\x20\x63\x61\x73\x68","\x41\x6C\x72\x65\x61\x64\x79\x20\x67\x61\x76\x65\x20\x70\x72\x6F\x20\x63\x61\x73\x68"];VertexClientPE[_0xe844[0]]= function(){if(!VertexClientPE[_0xe844[1]]()){var _0x3b1cx1=ctx[_0xe844[2]](ctx.MODE_PRIVATE);var _0x3b1cx2=_0x3b1cx1[_0xe844[3]]();var _0x3b1cx3=VertexClientPE[_0xe844[4]]();_0x3b1cx2[_0xe844[6]](_0xe844[5],_0x3b1cx3+ 500);_0x3b1cx2[_0xe844[9]](_0xe844[7],_0xe844[8]);_0x3b1cx2[_0xe844[10]]();if(VertexClientPE[_0xe844[11]]()){print(_0xe844[12])}}else {if(VertexClientPE[_0xe844[11]]()){print(_0xe844[13])}}}

var _0xc116=["\x73\x65\x74\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x76\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x70\x75\x74\x49\x6E\x74","\x63\x6F\x6D\x6D\x69\x74"];VertexClientPE[_0xc116[0]]= function(_0x5824x1){editor[_0xc116[2]](_0xc116[1],_0x5824x1);editor[_0xc116[3]]()}

VertexClientPE.isRemote = false;
VertexClientPE.playerIsInGame = false;

VertexClientPE.currentVersion = "1.2";
VertexClientPE.currentVersionDesc = "The Music Player Update";
VertexClientPE.targetVersion = "MCPE v0.15.x alpha";
VertexClientPE.minVersion = "0.15.0";
VertexClientPE.latestVersion;
VertexClientPE.latestVersionDesc;
var latestPocketEditionVersion;
var news;

var movementMenuLayout;
var favMenuLayout;
var menuBtn;
var logoViewer2;
var chestUI;
var lsdMenu;
var lsdLayout;
var menuMiddleLayout;
var menuRightLayout;

var flightMsgShown = false;

var stackDropState = false;
var fancyChatState = false;
var delaySpammerState = false;
var autoSwordState = false;
var yesCheatPlusState = false;

var showingMenu = false;

var setupColor = "green";

var f = 0;

VertexClientPE.font = (android.os.Build.VERSION.SDK_INT > 16)?android.graphics.Typeface.create("sans-serif-thin", android.graphics.Typeface.NORMAL):android.graphics.Typeface.DEFAULT;
VertexClientPE.tileFont = (ModPE.getMinecraftVersion() >= "0.15.0" && ModPE.getMinecraftVersion() <= "0.15.7")?new android.graphics.Typeface.createFromAsset(ctx.getAssets(), "fonts/SegoeWP.ttf"):VertexClientPE.font;

VertexClientPE.getDeviceName = function() {
	var manufacturer = android.os.Build.MANUFACTURER;
	var model = android.os.Build.MODEL;
	if (model.startsWith(manufacturer)) {
		return model;
	} else {
		return manufacturer + " " + model;
	}
}

var tts = new android.speech.tts.TextToSpeech(ctx, new android.speech.tts.TextToSpeech.OnInitListener({
	onInit: function(status) {
		tts.setLanguage(java.util.Locale.US);
	}
}));

/**
 * ########
 *  RENDER
 * ########
 */

VertexClientPE.Render = {};

VertexClientPE.Render.getFloatBuffer = function(floatArray) {
	var byteBuffer = ByteBuffer.allocateDirect(floatArray.length * 4);
    byteBuffer.order(ByteOrder.nativeOrder());
    
    var floatBuffer = byteBuffer.asFloatBuffer();
    floatBuffer.put(floatArray);
    floatBuffer.position(0);
     
    return floatBuffer;
}
 
VertexClientPE.Render.getShortBuffer = function(shortArray) {
    var byteBuffer = ByteBuffer.allocateDirect(shortArray.length * 2);
    byteBuffer.order(ByteOrder.nativeOrder());
    
    var shortBuffer = byteBuffer.asShortBuffer();
    shortBuffer.put(shortArray);
    shortBuffer.position(0);
     
    return shortBuffer;
}

var virtualWorldView;
 
var parentView = ctx.getWindow().getDecorView();
 
var width, height;

VertexClientPE.Render.renderer = new Renderer({
    onSurfaceCreated : function(gl, config) {
        gl.glClearColor(0, 0, 0, 0);
         
        gl.glShadeModel(GL10.GL_SMOOTH);
 
        gl.glClearDepthf(1.0);
 
        gl.glEnable(GL10.GL_DEPTH_TEST);
 
        gl.glDepthFunc(GL10.GL_LEQUAL);
 
        gl.glHint(GL10.GL_PERSPECTIVE_CORRECTION_HINT, GL10.GL_NICEST);
    },
     
    onSurfaceChanged : function(gl, w, h) {
        width = w;
        height = h;
         
        gl.glMatrixMode(GL10.GL_PROJECTION);
 
        gl.glLoadIdentity();
         
        GLU.gluPerspective(gl, VertexClientPE.Utils.getFov(), width / height, 0.1, 100);
 
        gl.glMatrixMode(GL10.GL_MODELVIEW);
 
        gl.glLoadIdentity();
    },
     
    onDrawFrame : function(gl) {
         
        gl.glClear(GL10.GL_COLOR_BUFFER_BIT | GL10.GL_DEPTH_BUFFER_BIT);
         
        gl.glLoadIdentity();
         
        gl.glDisable(GL10.GL_LIGHTING);
         
        var yaw = getYaw() % 360;
        var pitch = getPitch() % 360;
         
        var eyeX = getPlayerX(0);
        var eyeY = getPlayerY(1) + 1;
        var eyeZ = getPlayerZ(2);
         
        var dCenterX = Math.sin(yaw / 180 * Math.PI);
        var dCenterZ = Math.cos(yaw / 180 * Math.PI);
        var dCenterY = Math.sqrt(dCenterX * dCenterX + dCenterZ * dCenterZ) * Math.tan((pitch - 180) / 180 * Math.PI);
         
        var centerX = eyeX - dCenterX;
        var centerZ = eyeZ + dCenterZ;
        var centerY = eyeY - dCenterY;
         
        GLU.gluLookAt(gl, eyeX, eyeY, eyeZ, centerX, centerY, centerZ, 0, 1, 0);
         
        VertexClientPE.modules.forEach(function(element, index, array) {
			if(element.state && element.onRender) {
				element.onRender(gl);
			}
		});
    },
});

VertexClientPE.Render.initViews = function() {
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			virtualWorldView = new GLSurfaceView(ctx);
			virtualWorldView.setZOrderOnTop(true);
			virtualWorldView.setEGLConfigChooser(8, 8, 8, 8, 16, 0);
			virtualWorldView.getHolder().setFormat(PixelFormat.TRANSLUCENT);
			virtualWorldView.setRenderer(VertexClientPE.Render.renderer);
			 
			parentView.addView(virtualWorldView);
		}
	});
}

VertexClientPE.Render.deinitViews = function() {
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			if(virtualWorldView != null && virtualWorldView != undefined) {
				parentView.removeView(virtualWorldView);
			}
		}
	});
}

VertexClientPE.drawCubeShapedBox = function(gl, x, y, z) {
    var vertex = [
        0, 0, 0,
        1.0, 0, 0,
        0, 0, 1.0,
        1.0, 0, 1.0,
 
        0, 1.0, 0,
        1.0, 1.0, 0,
        0, 1.0, 1.0,
        1.0, 1.0, 1.0,
    ];
 
    var index = [
        0, 1,
		0, 2,
		0, 4,

		3, 1,
		3, 2,
		3, 7,

		5, 4,
		5, 7,
		5, 1,

		6, 4,
		6, 7,
		6, 2
    ];
	
	var vertexBuffer = VertexClientPE.Render.getFloatBuffer(vertex);
    var indexBuffer = VertexClientPE.Render.getShortBuffer(index);
	
	gl.glTranslatef(x, y, z);
	gl.glFrontFace(GL10.GL_CCW);
	gl.glEnable(GL10.GL_BLEND);
	gl.glLineWidth(4); 
	gl.glColor4f(0.0, 1.0, 0.0, 0.0);
	gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
	gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
	gl.glDrawElements(GL10.GL_LINES, index.length, GL10.GL_UNSIGNED_SHORT, indexBuffer);
	//gl.glDeptMask(true);
	gl.glTranslatef(-x, -y, -z);
}

/**
 * ##########
 *  SETTINGS
 * ##########
 */
 
var hacksListModeSetting = "on";
var mainButtonPositionSetting = "top-left";
var healthTagsSetting = "off";
var themeSetting = "green";
var spamMessage = "Spam!!!!!";
var showNewsSetting = "on";
var menuAnimationsSetting = "on";
var nukerMode = "cube";
var playMusicSetting = "off";
var timerSpeed = 2;
var themeSetup = "off";
var nukerRange = 3;
var nukerRange = 3;
var killAuraRange = 4;
var spamDelayTime = 3;
var sizeSetting = "normal";
var fancyChatMode = "default";
var tapNukerRange = 3;
var menuType = "normal";
var chestTracersRange = 10;
var tabGUIModeSetting = "on";
var chestTracersGroundMode = "on";
var chestTracersParticle = "flame";
var antiLagDropRemoverSetting = "on";
var useLightThemeSetting = "off";
var buttonStyleSetting = "normal";
var mcpeGUISetting = "default";
var chestESPRange = 25;
//---------------------------
var cmdPrefix = ".";
//---------------------------
var combatName = "Combat";
var buildingName = "Building";
var movementName = "Movement";
var chatName = "Chat";
var miscName = "Misc";
//End of settings

var userIsNewToCurrentVersion = false;

var GUI;
var menu;
var exitUI;
var exitWebBrowserUI;
var reloadWebBrowserUI;
var exitDashboardUI;
var vertexclientpemiscmenu;
var dashboardMenu;
var musicPlayerMenu;
var updateCenterMenu;
var shopMenu;
var settingsMenu;
var addonMenu;
var updateCenterMenu;
var webBrowserMenu;
var playerCustomizerMenu;
var optiFineMenu;
var informationMenu;
var menuBar;

/**
 * #########
 *  MODULES
 * #########
 */

VertexClientPE.favourites = [];

VertexClientPE.addView = function(layout, modButtonView) {
	try {
		var isFavourite;
		for(var fav in VertexClientPE.favourites) {
			if(VertexClientPE.favourites[fav] == modButtonView.getName()) {
				favMenuLayout.addView(modButtonView.getLayout());
				isFavourite = true;
				break;
			}
		}
		if(!isFavourite) {
			layout.addView(modButtonView.getLayout());
		}
	} catch(e) {
		clientMessage("Error: " + e);
		VertexClientPE.showBugReportDialog(e);
	}
};

VertexClientPE.category = {
	COMBAT: 0,
	BUILDING: 1,
	MOVEMENT: 2,
	CHAT: 3,
	MISC: 4,
	toName: function(category) {
		switch(category) {
			case VertexClientPE.category.COMBAT:
				return combatName;
			case VertexClientPE.category.BUILDING:
				return buildingName;
			case VertexClientPE.category.MOVEMENT:
				return movementName;
			case VertexClientPE.category.CHAT:
				return chatName;
			case VertexClientPE.category.MISC:
				return miscName;
		}
	},
	toRealName: function(category) {
		switch(category) {
			case VertexClientPE.category.COMBAT:
				return "Combat";
			case VertexClientPE.category.BUILDING:
				return "Building";
			case VertexClientPE.category.MOVEMENT:
				return "Movement";
			case VertexClientPE.category.CHAT:
				return "Chat";
			case VertexClientPE.category.MISC:
				return "Miscellaneous";
		}
	}
};

VertexClientPE.shopFeatures = [];

VertexClientPE.modules = [];

VertexClientPE.addons = [];

VertexClientPE.loadAddons = function() {
	if(Launcher.isBlockLauncher() || Launcher.isToolbox()) {
		net.zhuoweizhang.mcpelauncher.ScriptManager.callScriptMethod("addonLoadHook", []);
	}
	if(Launcher.isMcpeMaster()) {
		com.mcbox.pesdk.mcpelauncher.ScriptManager.callScriptMethod("addonLoadHook", []);
	}
};

VertexClientPE.registerShopFeature = function(obj) {
	VertexClientPE.shopFeatures.push(obj);
};

VertexClientPE.initShopFeatures = function() {
	VertexClientPE.shopFeatures.forEach(function(element, index, array) {
		if(element.bought == "true") {
			element.onUnlock();
		}
	});
};

var inventoryPlusPlus = {
	name: "Inventory++",
	shortName: "Inventory++",
	desc: "None.",
	price: 500,
	onUnlock: function() {
		VertexClientPE.toast("Not available yet!");
	}
};

var optiFine = {
	name: "OptiFine",
	shortName: "OptiFine",
	desc: "More (mostly) performance/lag related settings.",
	price: 200,
	onUnlock: function() {
		//VertexClientPE.toast("Not available yet!");
	}
};

var playerCustomizer = {
	name: "Player Customizer",
	shortName: "PlayerCustomizer",
	desc: "A screen where you can customize your player.",
	price: 1000,
	onUnlock: function() {
		//VertexClientPE.toast("Not available yet!");
	}
};

var webBrowser = {
	name: "Webbrowser",
	shortName: "Webbrowser",
	desc: "Browse the internet within Minecraft PE.",
	price: 500,
	onUnlock: function() {
		//VertexClientPE.toast("Not available yet!");
	}
};

//VertexClientPE.registerShopFeature(inventoryPlusPlus);
VertexClientPE.registerShopFeature(optiFine);
VertexClientPE.registerShopFeature(playerCustomizer);
VertexClientPE.registerShopFeature(webBrowser);

VertexClientPE.registerModule = function(obj) {
	VertexClientPE.modules.push(obj);
};

VertexClientPE.drawTracer = function(x, y, z, groundMode, particleName) {
	var particleType = ParticleType.flame;
	if(particleName == "redstone") {
		particleType = ParticleType.redstone;
	} else if(particleName == "critical") {
		particleType = ParticleType.crit;
	}
	for(var count = 0; count <= 25; count++) {
		Level.addParticle(particleType, x, y, z, (getPlayerX() - x) / count, groundMode?0:((getPlayerY() - y) / count), (getPlayerZ() - z) / count, 2);
	}
};

var shownAddonProDialog = false;

function registerAddon(name, desc, current_version, target_version, mods) {
	var shouldMessage = true;
	if(!VertexClientPE.isPro()) {
		if(!shownAddonProDialog) {
			VertexClientPE.showProDialog("Loading addons");
			shownAddonProDialog = true;
		}
		return;
	}
	try {
		VertexClientPE.addons.push({
			name: name,
			desc: desc,
			current_version: current_version,
			target_version: target_version
		});
		registerModulesFromAddon(mods);
	} catch(e) {
		shouldMessage = false;
		VertexClientPE.toast("An error occured while loading addons: " + e);
	}
	
	if(shouldMessage) {
		VertexClientPE.toast("Successfully loaded the " + name + " addon!");
	}
}

function registerModulesFromAddon(modArray) {
	modArray.forEach(function (element, index, array) {
		if(element != null) {
			VertexClientPE.registerModule(element);
		}
	});
}

VertexClientPE.getCommandCount = function() {
	var commandCount = 0;
	VertexClientPE.modules.forEach(function(element, index, array) {
		if(element.type == "Command") {
			commandCount++;
		}
	});
	return commandCount;
};

VertexClientPE.getFeatureCount = function() {
	return VertexClientPE.modules.length;
};

var panic = {
	name: "Panic",
	desc: "Disables all modules at once.",
	category: VertexClientPE.category.MISC,
	type: "Mod",
	isStateMod: function() {
		return false;
	},
	onToggle: function() {
		VertexClientPE.modules.forEach(function (element, index, array) {
			if(element.isStateMod() && element.state) {
				element.onToggle();
			}
		});
		if(menuBar != null) {
			if(menuBar.isShowing()) {
				VertexClientPE.closeMenu();
				VertexClientPE.showMenu();
			}
		}
		if(tabGUI != null) {
			if(tabGUI.isShowing()) {
				tabGUI.dismiss();
				showTabGUI();
			}
		}
	}
};

var yesCheatPlus = {
	name: "YesCheat+",
	desc: "Blocks mods that cannot bypass common anti cheat plugins.",
	category: VertexClientPE.category.MISC,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		yesCheatPlusState = this.state;
		if(menuBar != null) {
			if(menuBar.isShowing()) {
				VertexClientPE.closeMenu();
				VertexClientPE.showMenu();
			}
		}
		if(tabGUI != null) {
			if(tabGUI.isShowing()) {
				tabGUI.dismiss();
				showTabGUI();
			}
		}
	}
};

var switchGamemode = {
	name: "Switch Gamemode",
	desc: "Switches your gamemode.",
	category: VertexClientPE.category.MISC,
	type: "Mod",
	isStateMod: function() {
		return false;
	},
	onToggle: function() {
		if(Level.getGameMode() == 0) {
			Level.setGameMode(1);
		} else if(Level.getGameMode() == 1) {
			Level.setGameMode(0);
		}
	}
};

var killAura = {
	name: "Killaura",
	desc: "Automatically kills all the near entities.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	getSettingsLayout: function() {
		var killAuraSettingsLayout = new LinearLayout(ctx);
		killAuraSettingsLayout.setOrientation(1);
		var killAuraRangeTitle = clientTextView("Range: | " + killAuraRange);
		var killAuraRangeSlider = new SeekBar(ctx);
		killAuraRangeSlider.setProgress(killAuraRange);
		killAuraRangeSlider.setMax(10);
		killAuraRangeSlider.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				killAuraRange = killAuraRangeSlider.getProgress();
				killAuraRangeTitle.setText("Range: | " + killAuraRange);
			}
		});
		var space = clientTextView("\n");
		killAuraSettingsLayout.addView(killAuraRangeTitle);
		killAuraSettingsLayout.addView(killAuraRangeSlider);
		killAuraSettingsLayout.addView(space);
		return killAuraSettingsLayout;
	},
	onModDialogDismiss: function() {
		VertexClientPE.saveMainSettings();
	},
	isStateMod: function() {
		return true;
	},
	canBypassYesCheatPlus: function() {
		return false;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		var mobs = Entity.getAll();
		for(var i = 0; i < mobs.length; i++) {
			var x = Entity.getX(mobs[i]) - getPlayerX();
			var y = Entity.getY(mobs[i]) - getPlayerY();
			var z = Entity.getZ(mobs[i]) - getPlayerZ();
			if(x*x+y*y+z*z<=killAuraRange*killAuraRange && mobs[i] != getPlayerEnt() && Entity.getEntityTypeId(mobs[i]) != EntityType.ARROW && Entity.getEntityTypeId(mobs[i]) != EntityType.BOAT && Entity.getEntityTypeId(mobs[i]) != EntityType.EGG && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_ORB && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_POTION && Entity.getEntityTypeId(mobs[i]) != EntityType.FALLING_BLOCK && Entity.getEntityTypeId(mobs[i]) != EntityType.FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.FISHING_HOOK && Entity.getEntityTypeId(mobs[i]) != EntityType.ITEM && Entity.getEntityTypeId(mobs[i]) != EntityType.LIGHTNING_BOLT && Entity.getEntityTypeId(mobs[i]) != EntityType.MINECART && Entity.getEntityTypeId(mobs[i]) != EntityType.PAINTING && Entity.getEntityTypeId(mobs[i]) != EntityType.PRIMED_TNT && Entity.getEntityTypeId(mobs[i]) != EntityType.SMALL_FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.SNOWBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.THROWN_POTION && Entity.getHealth(mobs[i]) != 0) {
				/*if(getPitch() >= -90 && getPitch() <= 90) {
					Entity.setRot(getPlayerEnt(), (Math.atan2(z, x) - 90) * Math.PI / 180, getPitch());
				}
				var dCenterY = Math.sqrt(x * x + z * z) * Math.tan((getPitch() - 180) / 180 * Math.PI);
				Entity.setRot(getPlayerEnt(), dCenterY, getPitch());*/
				if(autoSwordState) {
					VertexClientPE.autoSword(getPlayerEnt(), mobs[i]);
				}
				switch(Entity.getEntityTypeId(mobs[i])) {
					case EntityType.COW:
						Level.playSoundEnt(mobs[i], "mob.cowhurt");
						break;
					case EntityType.CHICKEN:
						Level.playSoundEnt(mobs[i], "mob.chickenhurt");
						break;
					case EntityType.ZOMBIE:
						Level.playSoundEnt(mobs[i], "mob.zombiehurt");
						break;
					case EntityType.SKELETON:
						Level.playSoundEnt(mobs[i], "mob.skeletonhurt");
						break;
					case EntityType.PIG_ZOMBIE:
						Level.playSoundEnt(mobs[i], "mob.zombiepig.zpighurt");
						break;
					default:
						Level.playSoundEnt(mobs[i], "random.hurt");
						break;
				}
				Entity.setHealth(mobs[i], 0);
				break;
			}
		}
	}
};

var freezeAura = {
	name: "FreezeAura",
	desc: "Automatically freezes all the near entities.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	canBypassYesCheatPlus: function() {
		return false;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		var mobs = Entity.getAll();
		for(var i = 0; i < mobs.length; i++) {
			var x = Entity.getX(mobs[i]) - getPlayerX();
			var y = Entity.getY(mobs[i]) - getPlayerY();
			var z = Entity.getZ(mobs[i]) - getPlayerZ();
			if(x*x+y*y+z*z<=4*4 && mobs[i] != getPlayerEnt() && Entity.getEntityTypeId(mobs[i]) != EntityType.ARROW && Entity.getEntityTypeId(mobs[i]) != EntityType.BOAT && Entity.getEntityTypeId(mobs[i]) != EntityType.EGG && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_ORB && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_POTION && Entity.getEntityTypeId(mobs[i]) != EntityType.FALLING_BLOCK && Entity.getEntityTypeId(mobs[i]) != EntityType.FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.FISHING_HOOK && Entity.getEntityTypeId(mobs[i]) != EntityType.ITEM && Entity.getEntityTypeId(mobs[i]) != EntityType.LIGHTNING_BOLT && Entity.getEntityTypeId(mobs[i]) != EntityType.MINECART && Entity.getEntityTypeId(mobs[i]) != EntityType.PAINTING && Entity.getEntityTypeId(mobs[i]) != EntityType.PRIMED_TNT && Entity.getEntityTypeId(mobs[i]) != EntityType.SMALL_FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.SNOWBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.THROWN_POTION) {
				//setRot(getPlayerEnt(), (Math.atan2(z, x) - 90) * Math.pi / 180, getPitch());
				/*if(Entity.loadExtraData(mobs[i], "frozen") 
				Entity.saveExtraData(mobs[i], "");*/
				Entity.setImmobile(mobs[i], true);
			}
		}
	}
};

var fireAura = {
	name: "FireAura",
	desc: "Sets all the near entities on fire.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	canBypassYesCheatPlus: function() {
		return false;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		var mobs = Entity.getAll();
		for(var i = 0; i < mobs.length; i++) {
			var x = Entity.getX(mobs[i]) - getPlayerX();
			var y = Entity.getY(mobs[i]) - getPlayerY();
			var z = Entity.getZ(mobs[i]) - getPlayerZ();
			if(x*x+y*y+z*z<=4*4 && mobs[i] != getPlayerEnt() && Entity.getEntityTypeId(mobs[i]) != EntityType.ARROW && Entity.getEntityTypeId(mobs[i]) != EntityType.BOAT && Entity.getEntityTypeId(mobs[i]) != EntityType.EGG && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_ORB && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_POTION && Entity.getEntityTypeId(mobs[i]) != EntityType.FALLING_BLOCK && Entity.getEntityTypeId(mobs[i]) != EntityType.FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.FISHING_HOOK && Entity.getEntityTypeId(mobs[i]) != EntityType.ITEM && Entity.getEntityTypeId(mobs[i]) != EntityType.LIGHTNING_BOLT && Entity.getEntityTypeId(mobs[i]) != EntityType.MINECART && Entity.getEntityTypeId(mobs[i]) != EntityType.PAINTING && Entity.getEntityTypeId(mobs[i]) != EntityType.PRIMED_TNT && Entity.getEntityTypeId(mobs[i]) != EntityType.SMALL_FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.SNOWBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.THROWN_POTION) {
				Entity.setFireTicks(mobs[i], 100);
			}
		}
	}
};

var autoSword = {
	name: "AutoSword",
	desc: "Automatically chooses the best sword for you when attacking entities if available.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		autoSwordState = this.state;
	},
	onAttack: function(a, v) {
		VertexClientPE.autoSword(a, v);
	}
};

var homeCommand = {
	name: "/home",
	desc: "Runs the /home command if the server or world you're on has it.",
	category: VertexClientPE.category.CHAT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return false;
	},
	onToggle: function() {
		Server.sendChat("/home");
	}
};

var timer = {
	name: "Timer",
	desc: "Makes the speed of the game faster.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	getSettingsLayout: function() {
		var timerSettingsLayout = new LinearLayout(ctx);
		timerSettingsLayout.setOrientation(1);
		var timerSpeedTitle = clientTextView("Speed: | " + timerSpeed + " * 20 ticks");
		var timerSpeedSlider = new SeekBar(ctx);
		timerSpeedSlider.setProgress(timerSpeed);
		timerSpeedSlider.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				timerSpeed = timerSpeedSlider.getProgress();
				timerSpeedTitle.setText("Speed: | " + timerSpeed + " * 20 ticks");
				if(this.state) {
					ModPE.setGameSpeed(20 * timerSpeed);
				}
			}
		});
		var space = clientTextView("\n");
		timerSettingsLayout.addView(timerSpeedTitle);
		timerSettingsLayout.addView(timerSpeedSlider);
		timerSettingsLayout.addView(space);
		return timerSettingsLayout;
	},
	onModDialogDismiss: function() {
		VertexClientPE.saveMainSettings();
	},
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		if(this.state) {
			ModPE.setGameSpeed(20 * timerSpeed);
		} else {
			ModPE.setGameSpeed(20);
		}
	}
};

var nuker = {
	name: "Nuker",
	desc: "Automatically destroys blocks around you. Can be used on servers when YesCheat+ is enabled.",
	category: VertexClientPE.category.BUILDING,
	type: "Mod",
	state: false,
	getSettingsLayout: function() {
		var nukerSettingsLayout = new LinearLayout(ctx);
		nukerSettingsLayout.setOrientation(1);
		var nukerRangeTitle = clientTextView("Range: | " + nukerRange);
		var nukerRangeSlider = new SeekBar(ctx);
		nukerRangeSlider.setProgress(nukerRange);
		nukerRangeSlider.setMax(10);
		nukerRangeSlider.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				nukerRange = nukerRangeSlider.getProgress();
				nukerRangeTitle.setText("Range: | " + nukerRange);
			}
		});
		var nukerModeTitle = clientTextView("\nMode:");
		var nukerModeCubeButton = clientButton("Cube", "Normal mode which destroys blocks in the shape of a cube");
		nukerModeCubeButton.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 6, display.heightPixels / 10));
		var nukerModeFlatButton = clientButton("Flat", "Flat mode which flats the ground");
		nukerModeFlatButton.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 6, display.heightPixels / 10));
		var nukerModeSmashButton = clientButton("Smash", "Smash mode which only breaks blocks with a destroy time of 0");
		nukerModeSmashButton.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 6, display.heightPixels / 10));
		
		var nukerRangeTitle = clientTextView("Range: | " + nukerRange);
		var nukerModeLayout = new LinearLayout(ctx);
		nukerModeLayout.setOrientation(LinearLayout.HORIZONTAL);
		
		var nukerModeLayoutLeft = new LinearLayout(ctx);
		nukerModeLayoutLeft.setOrientation(1);
		nukerModeLayoutLeft.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
		nukerModeLayoutLeft.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
		nukerModeLayout.addView(nukerModeLayoutLeft);
		
		var nukerModeLayoutCenter = new LinearLayout(ctx);
		nukerModeLayoutCenter.setOrientation(1);
		nukerModeLayoutCenter.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
		nukerModeLayoutCenter.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
		nukerModeLayout.addView(nukerModeLayoutCenter);
		
		var nukerModeLayoutRight = new LinearLayout(ctx);
		nukerModeLayoutRight.setOrientation(1);
		nukerModeLayoutRight.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
		nukerModeLayoutRight.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
		nukerModeLayout.addView(nukerModeLayoutRight);
		
		nukerModeLayoutLeft.addView(nukerModeCubeButton);
		nukerModeLayoutCenter.addView(nukerModeFlatButton);
		nukerModeLayoutRight.addView(nukerModeSmashButton);
		if(nukerMode == "cube") {
			nukerModeCubeButton.setTextColor(Color.GREEN);
		}if(nukerMode == "flat") {
			nukerModeFlatButton.setTextColor(Color.GREEN);
		}if(nukerMode == "smash") {
			nukerModeSmashButton.setTextColor(Color.GREEN);
		}
		nukerModeCubeButton.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(view) {
				nukerMode = "cube";
				nukerModeCubeButton.setTextColor(Color.GREEN);
				nukerModeFlatButton.setTextColor(Color.WHITE);
				nukerModeSmashButton.setTextColor(Color.WHITE);
				VertexClientPE.saveMainSettings();
				VertexClientPE.loadMainSettings();
			}
		});
		nukerModeFlatButton.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(view) {
				nukerMode = "flat";
				nukerModeCubeButton.setTextColor(Color.WHITE);
				nukerModeFlatButton.setTextColor(Color.GREEN);
				nukerModeSmashButton.setTextColor(Color.WHITE);
				VertexClientPE.saveMainSettings();
				VertexClientPE.loadMainSettings();
			}
		});
		nukerModeSmashButton.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(view) {
				nukerMode = "smash";
				nukerModeCubeButton.setTextColor(Color.WHITE);
				nukerModeFlatButton.setTextColor(Color.WHITE);
				nukerModeSmashButton.setTextColor(Color.GREEN);
				VertexClientPE.saveMainSettings();
				VertexClientPE.loadMainSettings();
			}
		});
		var space = clientTextView("\n");
		nukerSettingsLayout.addView(nukerRangeTitle);
		nukerSettingsLayout.addView(nukerRangeSlider);
		nukerSettingsLayout.addView(nukerModeTitle);
		nukerSettingsLayout.addView(nukerModeLayout);
		nukerSettingsLayout.addView(space);
		return nukerSettingsLayout;
	},
	onModDialogDismiss: function() {
		VertexClientPE.saveMainSettings();
	},
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		var x = getPlayerX();
		var y = getPlayerY();
		var z = getPlayerZ();
		VertexClientPE.nuker(x, y, z, nukerRange);
	}
};

var fancyChatMsg;
var fancyChatEndChar;

var fancyChat = {
	name: "FancyChat",
	desc: "Replaces characters in sent chat messages by fancy unicode characters. Can be used to bypass curse word filters on some servers.",
	category: VertexClientPE.category.CHAT,
	type: "Mod",
	state: false,
	settings: {
		mode: "normal"
	},
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		fancyChatState = this.state;
	},
	onChat: function(msg) {
		preventDefault();
		if(Launcher.isBlockLauncher()) {
			com.mojang.minecraftpe.MainActivity.currentMainActivity.get().nativeSetTextboxText("");
			com.mojang.minecraftpe.MainActivity.currentMainActivity.get().updateTextboxText("");
		}
		VertexClientPE.fancyChat(msg);
	}
};

var noHurt = {
	name: "NoHurt",
	desc: "Prevents you from getting hurt.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onHurt: function(a, v) {
		if(v == getPlayerEnt()) {
			preventDefault();
		}
	}
};

var ride = {
	name: "Ride",
	desc: "Automatically makes you ride an entity on tap.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onAttack: function(a, v) {
		preventDefault();
		if(getPlayerEnt() == a) {
			VertexClientPE.ride(v);
		}
	}
};

var onlyDay = {
	name: "OnlyDay",
	desc: "Sets the time to day all the time.",
	category: VertexClientPE.category.MISC,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function(a, v) {
		Level.setTime(1000);
	}
};

var flight = {
	name: "Flight",
	desc: "Makes you able to fly, even when you're in survival.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		Player.setFlying(this.state?1:0);
		Player.setCanFly(this.state?1:Level.getGameMode());
	},
	onTick: function() {
		Player.setFlying(1);
	}
};

var autoTeleporter = {
	name: "AutoTeleporter",
	desc: "Teleports you to the block you're pointing at.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		if(getTile(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ()) != 0) {
			VertexClientPE.teleporter(Player.getPointedBlockX(), Player.getPointedBlockY() + 3, Player.getPointedBlockZ());
		}
	}
};

var tapTeleporter = {
	name: "TapTeleporter",
	desc: "Teleports you wherever you tap.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onUseItem: function(x, y, z, itemId, blockId, side, blockDamage) {
		if(getTile(x, y, z) != 0) {
			VertexClientPE.teleporter(x, y + 3, z);
		}
	}
};

var wallHack = {
	name: "Wallhack",
	desc: "Makes you able to walk through walls.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		Entity.setCollisionSize(Player.getEntity(), this.state?0:0.6, this.state?0:1.8);
	}
};

var fastBreak = {
	name: "FastBreak",
	desc: "Makes block destroy times as if you were in creative mode.",
	category: VertexClientPE.category.BUILDING,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		this.state?Block.setDestroyTimeAll(0):Block.setDestroyTimeDefaultAll();
	}
};

var chatSpeak = {
	name: "ChatSpeak",
	desc: "Automatically says all the received chat messages out loud.",
	category: VertexClientPE.category.CHAT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onChatReceive: function(msg, sender) {
		if(!this.state) return;
		if(sender != Player.getName(getPlayerEnt())) {
			tts.speak(msg, android.speech.tts.TextToSpeech.QUEUE_FLUSH, null);
		}
	}
};

var chatRepeatStage = 0;

var chatRepeat = {
	name: "ChatRepeat",
	desc: "Automatically repeats all the received chat messages. Can be very annoying.",
	category: VertexClientPE.category.CHAT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onChatReceive: function(msg, sender) {
		if(!this.state) return;
		if(sender != Player.getName(getPlayerEnt()) && chatRepeatStage == 0) {
			chatRepeatStage = 1;
			Server.sendChat(msg);
			chatRepeatStage = 0;
		}
	}
};

var autoSpammer = {
	name: "AutoSpammer",
	desc: "Automatically spams the chat.",
	category: VertexClientPE.category.CHAT,
	type: "Mod",
	state: false,
	getSettingsLayout: function() {
		var autoSpammerMessageLayout = new LinearLayout(ctx);
		autoSpammerMessageLayout.setOrientation(1);
		var autoSpammerMessageTitle = clientTextView("Message:");
		var spamMessageInput = new EditText(ctx);
		var autoSpammerMessageEnter = clientTextView("\n");
		spamMessageInput.setText(spamMessage);
		spamMessageInput.setTextColor(Color.WHITE);
		spamMessageInput.setHint("Spam message");
		spamMessageInput.addTextChangedListener(new android.text.TextWatcher() {
			onTextChanged: function() {
				spamMessage = spamMessageInput.getText();
			}
		});
		autoSpammerMessageLayout.addView(autoSpammerMessageTitle);
		autoSpammerMessageLayout.addView(spamMessageInput);
		autoSpammerMessageLayout.addView(autoSpammerMessageEnter);
		return autoSpammerMessageLayout;
	},
	isStateMod: function() {
		return true;
	},
	onModDialogDismiss: function() {
		VertexClientPE.saveMainSettings();
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		if(fancyChatState) {
			VertexClientPE.fancyChat(spamMessage);
		} else {
			Server.sendChat(spamMessage);
		}
		/*if(yesCheatPlusState) {
			Server.sendChat(" ");
		}*/
	}
}

var delaySpammer = {
	name: "DelaySpammer",
	desc: "Automatically spams the chat with a delay and randomly generated messages.",
	category: VertexClientPE.category.CHAT,
	type: "Mod",
	state: false,
	getSettingsLayout: function() {
		var delaySpammerDelayTimeLayout = new LinearLayout(ctx);
		delaySpammerDelayTimeLayout.setOrientation(1);
		var delaySpammerDelayTimeTitle = clientTextView("Delay time: | " + spamDelayTime + " seconds");
		var delaySpammerDelayTimeSlider = new widget.SeekBar(ctx);
		delaySpammerDelayTimeSlider.setProgress(spamDelayTime);
		delaySpammerDelayTimeSlider.setMax(60);
		delaySpammerDelayTimeLayout.addView(delaySpammerDelayTimeTitle);
		delaySpammerDelayTimeLayout.addView(delaySpammerDelayTimeSlider);
		delaySpammerDelayTimeSlider.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				spamDelayTime = delaySpammerDelayTimeSlider.getProgress();
				delaySpammerDelayTimeTitle.setText("Delay time: | " + spamDelayTime + " seconds");
			}
		});
		return delaySpammerDelayTimeLayout;
	},
	isStateMod: function() {
		return true;
	},
	onModDialogDismiss: function() {
		VertexClientPE.saveMainSettings();
	},
	onToggle: function() {
		this.state = !this.state;
		delaySpammerState = this.state;
	}
}

var tpAuraStage = 0;

var tpAura = {
	name: "TP-Aura",
	desc: "Automatically teleports you behind entities to prevent you from getting hurt by others.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onInterval: function() {
		if(tpAuraStage == 0) {
			tpAuraStage = 1;
			var mobs = Entity.getAll();
			for(var i = 0; i < mobs.length; i++) {
				var x = Entity.getX(mobs[i]) - getPlayerX();
				var y = Entity.getY(mobs[i]) - getPlayerY();
				var z = Entity.getZ(mobs[i]) - getPlayerZ();
				if(x*x+y*y+z*z<=4*4 && mobs[i] != getPlayerEnt() && Entity.getEntityTypeId(mobs[i]) != EntityType.ARROW && Entity.getEntityTypeId(mobs[i]) != EntityType.BOAT && Entity.getEntityTypeId(mobs[i]) != EntityType.EGG && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_ORB && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_POTION && Entity.getEntityTypeId(mobs[i]) != EntityType.FALLING_BLOCK && Entity.getEntityTypeId(mobs[i]) != EntityType.FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.FISHING_HOOK && Entity.getEntityTypeId(mobs[i]) != EntityType.ITEM && Entity.getEntityTypeId(mobs[i]) != EntityType.LIGHTNING_BOLT && Entity.getEntityTypeId(mobs[i]) != EntityType.MINECART && Entity.getEntityTypeId(mobs[i]) != EntityType.PAINTING && Entity.getEntityTypeId(mobs[i]) != EntityType.PRIMED_TNT && Entity.getEntityTypeId(mobs[i]) != EntityType.SMALL_FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.SNOWBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.THROWN_POTION && Entity.getHealth(mobs[i]) != 0) {
					var playerPos = new Array(getPlayerX(), getPlayerY() + 0.5, getPlayerZ());
					var victimPos = new Array(Entity.getX(mobs[i]), Entity.getY(mobs[i]), Entity.getZ(mobs[i]));
					var diffPos = new Array(victimPos[0] - playerPos[0], null, victimPos[2] - playerPos[2]);
					playerPos[0] += diffPos[0] * 2;
					playerPos[2] += diffPos[2] * 2;
					
					if (getTile(playerPos[0], playerPos[1], playerPos[2]) == 0 && getTile(playerPos[0], playerPos[1] - 1, playerPos[2]) == 0 && getTile(playerPos[0], playerPos[1] - 2, playerPos[2]) == 0) {
						Entity.setPosition(Player.getEntity(), playerPos[0], playerPos[1], playerPos[2]);
					}
					
					VertexClientPE.CombatUtils.aimAtEnt(mobs[i]);
					
					break;
				}
			}
			tpAuraStage = 0;
		}
	},
	onAttack: function(a, v) {
		if(a == getPlayerEnt()) {
			var x = Entity.getX(v) - getPlayerX();
			var z = Entity.getZ(v) - getPlayerZ();
			var playerPos = new Array(getPlayerX(), getPlayerY() + 0.5, getPlayerZ());
			var victimPos = new Array(Entity.getX(v), Entity.getY(v), Entity.getZ(v));
			var diffPos = new Array(victimPos[0] - playerPos[0], null, victimPos[2] - playerPos[2]);
			playerPos[0] += diffPos[0] * 2;
			playerPos[2] += diffPos[2] * 2;
			
			if(getTile(playerPos[0], playerPos[1], playerPos[2]) == 0 && getTile(playerPos[0], playerPos[1] - 1, playerPos[2]) == 0 && getTile(playerPos[0], playerPos[1] - 2, playerPos[2]) == 0) {
				Entity.setPosition(Player.getEntity(), playerPos[0], playerPos[1], playerPos[2]);
			}
			
			VertexClientPE.CombatUtils.aimAtEnt(mobs[i]);
		}
	}
}

var powerExplosionsStage = 0;

var powerExplosions = {
	name: "PowerExplosions",
	desc: "Makes explosions more powerful.",
	category: VertexClientPE.category.BUILDING,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onExplode: function(entity, x, y, z, power, onFire) {
		if(powerExplosionsStage == 0) {
			powerExplosionsStage = 1;
			preventDefault();
			Level.explode(x, y, z, 10);
			powerExplosionsStage = 0;
		}
	}
}

var tapExplosion = {
	name: "TapExplosion",
	desc: "Makes blocks explode wherever you tap.",
	category: VertexClientPE.category.BUILDING,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onUseItem: function(x, y, z, itemId, blockId, side, blockDamage) {
		Level.explode(x, y, z, 4);
	}
}

var signX, signY, signZ;

var signEditor = {
	name: "SignEditor",
	desc: "Allows you to edit signs.",
	category: VertexClientPE.category.BUILDING,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onUseItem: function(x, y, z, itemId, blockId, side, blockDamage) {
		if(blockId == 63 || blockId == 68) {
			preventDefault();
			signX = x;
			signY = y;
			signZ = z;
			VertexClientPE.showSignEditorDialog();
		}
	}
}

var instaKill = {
	name: "InstaKill",
	desc: "Makes you able to kill an entity in one hit.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onAttack: function(a, v) {
		if(getPlayerEnt() == a) {
			Entity.setHealth(v, 1);
		}
	}
}

var derp = {
	name: "Derp",
	desc: "Rotates the player all the time.",
	category: VertexClientPE.category.MISC,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		var player = getPlayerEnt();
		var yaw = Math.floor(Entity.getYaw(player));
		var pitch = Math.floor(Entity.getPitch(player));
		Entity.setRot(player, yaw + 3, pitch);
	}
}

var glide = {
	name: "Glide",
	desc: "Reduces fall damage by slowing the player down when falling.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		if(Entity.getVelY(getPlayerEnt()) <= 0 && Player.isFlying() == false) {
			setVelY(Player.getEntity(), - 0.07);
		}
	}
}

var autoMine = {
	name: "AutoMine",
	desc: "Automatically mines the block you're looking at.",
	category: VertexClientPE.category.BUILDING,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		if(getTile(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ()) != 0) {
			Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ());
		}
	}
}

var followStage = 0;

var follow = {
	name: "Follow",
	desc: "Automatically follow nearby entities.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	requiresPro: function() {
		return true;
	},
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		if(followStage == 0) {
			followStage = 1;
			var mobs = Entity.getAll();
			for(var i = 0; i < mobs.length; i++) {
				var x = Entity.getX(mobs[i]) - getPlayerX();
				var y = Entity.getY(mobs[i]) - getPlayerY();
				var z = Entity.getZ(mobs[i]) - getPlayerZ();
				if(x*x+y*y+z*z<=10*10 && mobs[i] != getPlayerEnt() && Entity.getEntityTypeId(mobs[i]) != EntityType.ARROW && Entity.getEntityTypeId(mobs[i]) != EntityType.BOAT && Entity.getEntityTypeId(mobs[i]) != EntityType.EGG && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_ORB && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_POTION && Entity.getEntityTypeId(mobs[i]) != EntityType.FALLING_BLOCK && Entity.getEntityTypeId(mobs[i]) != EntityType.FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.FISHING_HOOK && Entity.getEntityTypeId(mobs[i]) != EntityType.ITEM && Entity.getEntityTypeId(mobs[i]) != EntityType.LIGHTNING_BOLT && Entity.getEntityTypeId(mobs[i]) != EntityType.MINECART && Entity.getEntityTypeId(mobs[i]) != EntityType.PAINTING && Entity.getEntityTypeId(mobs[i]) != EntityType.PRIMED_TNT && Entity.getEntityTypeId(mobs[i]) != EntityType.SMALL_FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.SNOWBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.THROWN_POTION) {
					if(x*x+y*y+z*z>=2*2) {
						setVelX(getPlayerEnt(), x * 0.05);
						setVelZ(getPlayerEnt(), z * 0.05);
						setVelY(getPlayerEnt(), y * 0.05);
					}
					followStage = 0;
					break;
				}
			}
		}
	}
}

var tapNuker = {
	name: "TapNuker",
	desc: "Destroys blocks wherever you tap.",
	category: VertexClientPE.category.BUILDING,
	type: "Mod",
	state: false,
	getSettingsLayout: function() {
		var tapNukerSettingsLayout = new LinearLayout(ctx);
		tapNukerSettingsLayout.setOrientation(1);
		var tapNukerRangeTitle = clientTextView("Range: | " + tapNukerRange);
		var tapNukerRangeSlider = new SeekBar(ctx);
		tapNukerRangeSlider.setProgress(tapNukerRange);
		tapNukerRangeSlider.setMax(10);
		tapNukerRangeSlider.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				tapNukerRange = tapNukerRangeSlider.getProgress();
				tapNukerRangeTitle.setText("Range: | " + tapNukerRange);
			}
		});
		
		var space = clientTextView("\n");
		tapNukerSettingsLayout.addView(tapNukerRangeTitle);
		tapNukerSettingsLayout.addView(tapNukerRangeSlider);
		tapNukerSettingsLayout.addView(space);
		return tapNukerSettingsLayout;
	},
	onModDialogDismiss: function() {
		VertexClientPE.saveMainSettings();
	},
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onUseItem: function(x, y, z, itemId, blockId, side, blockDamage) {
		VertexClientPE.nuker(x, y, z, tapNukerRange, "cube");
	}
}

var tapRemover = {
	name: "TapRemover",
	desc: "Removes blocks and entities on tap.",
	category: VertexClientPE.category.BUILDING,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onUseItem: function(x, y, z, itemId, blockId, side, blockDamage) {
		preventDefault();
		setTile(x, y, z, 0);
	},
	onAttack: function(a, v) {
		if(getPlayerEnt() == a) {
			preventDefault();
			Entity.remove(v);
		}
	}
}

var autoPlace = {
	name: "AutoPlace",
	desc: "Automatically places the block you're holding wherever you look.",
	category: VertexClientPE.category.BUILDING,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		var x = Player.getPointedBlockX();
		var y = Player.getPointedBlockY();
		var z = Player.getPointedBlockZ();
		var side = Player.getPointedBlockSide();
		var blockId = Player.getCarriedItem();
		var blockData = Player.getCarriedItemData();
		if(getTile(x, y, z) != 0) {
			if(blockId <= 256) {
				setTile(x-(side==4?1:0)+(side==5?1:0),y-(side==0?1:0)+(side==1?1:0),z-(side==2?1:0)+(side==3?1:0), blockId, blockData);
			}
		}
	}
}

var regen = {
	name: "Regen",
	desc: "Instantly refills your health.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		if(Entity.getHealth(getPlayerEnt()) < Entity.getMaxHealth(getPlayerEnt())) {
			Player.setHealth(Entity.getMaxHealth(getPlayerEnt()));
		}
	}
}

var godMode = {
	name: "God Mode",
	desc: "Gives you many hearts.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		Entity.setMaxHealth(getPlayerEnt(), this.state?10000:20);
	},
	onTick: function() {
		Player.setHealth(10000);
	}
}

var criticals = {
	name: "Criticals",
	desc: "Automatically jumps to make the second attack critical, make sure you attack again after hitting an entity and before hitting the ground to make it work.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onAttack: function(a, v) {
		//if(Launcher.isBlockLauncher() || Launcher.isToolbox()) {
			Entity.setVelY(getPlayerEnt(), 0.64);
		/*}
		if(Launcher.isMcpeMaster()) {
			com.mcbox.pesdk.launcher.playerJump();
		}*/
	}
}

var arrowGun = {
	name: "ArrowGun",
	desc: "Automatically shoots arrows wherever you look.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onInterval: function() {
		var p = ((Entity.getPitch(getPlayerEnt()) + 90) * Math.PI) / 180;
		var y = ((Entity.getYaw(getPlayerEnt()) + 90) * Math.PI) / 180;
		var xx = Math.sin(p) * Math.cos(y);
		var yy = Math.sin(p) * Math.sin(y);
		var zz = Math.cos(p);
		var arrow = Level.spawnMob(Player.getX() + xx, Player.getY() + zz, Player.getZ() + yy, 80);
		setVelX(arrow, xx);
		setVelY(arrow, zz);
		setVelZ(arrow, yy);
	}
}

var orderAPizza = {
	name: "Order a Pizza",
	desc: "Order a pizza of Domino's.",
	category: VertexClientPE.category.MISC,
	type: "Mod",
	isStateMod: function() {
		return false;
	},
	onToggle: function() {
		pizzaOrderDialog();
	}
}

var zoom = {
	name: "Zoom",
	desc: "Changes the FOV to zoom in.",
	category: VertexClientPE.category.MISC,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		this.state?ModPE.setFov(10):ModPE.resetFov();
	}
}

var coordsDisplay = {
	name: "CoordsDisplay",
	desc: "Displays the player's coordinates.",
	category: VertexClientPE.category.MISC,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		var x = parseInt(getPlayerX());
		var y = parseInt(getPlayerY());
		var z = parseInt(getPlayerZ());
		ModPE.showTipMessage("\n\n\n" + "X: " + parseInt(x) + " Y: " + parseInt(y) + " Z: " + parseInt(z));
	}
}

var itemGiver = {
	name: "ItemGiver",
	desc: "Adds items to your inventory.",
	category: VertexClientPE.category.MISC,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return false;
	},
	onToggle: function() {
		VertexClientPE.showItemGiverDialog();
	}
}

var healthTags = {
	name: "HealthTags",
	desc: "Displays an entity's name and health in its nametag.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		var mobs = Entity.getAll();
		/*for(var i = 0; i < mobs.length; i++) {
			var entity = mobs[i];
			if(entity != getPlayerEnt()) {
				if(Entity.getExtraData(entity, "vertex.clientpe.hasusedhealthtags") == null || Entity.getExtraData(entity, "vertex.clientpe.hasusedhealthtags") == "false") {
					Entity.setExtraData(entity, "vertex.clientpe.hasusedhealthtags", "true");
					Entity.setExtraData(entity, "vertex.clientpe.lasthealth", Entity.getHealth(entity).toString());
					Entity.setExtraData(entity, "vertex.clientpe.lastnametag", Entity.getNameTag(entity).toString());
					Entity.setExtraData(entity, "vertex.clientpe.fulllastnametag", Entity.getNameTag(entity) + Entity.getHealth(entity) + "/" + Entity.getMaxHealth(entity));
					Entity.setNameTag(entity, Entity.getNameTag(entity) + "\n" + ChatColor.RED + Entity.getHealth(entity) + "/" + Entity.getMaxHealth(entity));
				} else if(Entity.getExtraData(entity, "vertex.clientpe.hasusedhealthtags") == "true") {
					Entity.setExtraData(entity, "vertex.clientpe.lasthealth", Entity.getHealth(entity).toString());
					Entity.setNameTag(entity, Entity.getExtraData(entity, "vertex.clientpe.lastnametag") + "\n" + ChatColor.RED + Entity.getHealth(entity) + "/" + Entity.getMaxHealth(entity));
				}
			}
		}*/
		VertexClientPE.healthTags();
	}
}

var autoSwitch = {
	name: "AutoSwitch",
	desc: "Switches the item in your hand all the time.",
	category: VertexClientPE.category.MISC,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		if(Player.getSelectedSlotId() != 7) {
			Player.setSelectedSlotId(Player.getSelectedSlotId() + 1);
		} else {
			Player.setSelectedSlotId(0);
		}
	}
}

function toDirectionalVector(vector, yaw, pitch) { //some parts of this function are made by @zhuowei
    vector[0] = Math.cos(yaw) * Math.cos(pitch);
    vector[1] = Math.sin(pitch);
    vector[2] = Math.sin(yaw) * Math.cos(pitch);
}

var playerDir = [0, 0, 0];
var DEG_TO_RAD = Math.PI / 180;
var playerWalkSpeed = 0.2;

var autoWalk = {
	name: "AutoWalk",
	desc: "Makes your player walk automatically.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);
		var player = getPlayerEnt();
		setVelX(player, playerWalkSpeed * playerDir[0]);
		if(Player.isFlying()) {
			setVelY(player, playerWalkSpeed * playerDir[1]);	
		}
		setVelZ(player, playerWalkSpeed * playerDir[2]);
	}
}

var enderProjectiles = {
	name: "EnderProjectiles",
	desc: "Turns every projectile into an Ender Pearl.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onProjectileHitBlock: function(projectile, blockX, blockY, blockZ, side) {
		Entity.setPosition(getPlayerEnt(), blockX, blockY, blockZ);
		while(getTile(getPlayerX(), getPlayerY()-2, getPlayerZ()) != 0) {
			Entity.setPosition(getPlayerEnt(), getPlayerX(), getPlayerY()+1, getPlayerZ());
		}
	}
}

var stackDrop = {
	name: "StackDrop",
	desc: "Makes every block drop itself 64 times.",
	category: VertexClientPE.category.BUILDING,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		stackDropState = this.state;
	}
}

var liquidWalk = {
	name: "LiquidWalk",
	desc: "Makes you able to walk on liquids.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		if(Level.getTile(getPlayerX(), getPlayerY() - 2, getPlayerZ()) == 8 || Level.getTile(getPlayerX(), getPlayerY() - 2, getPlayerZ()) == 9 || Level.getTile(getPlayerX(), getPlayerY() - 2, getPlayerZ()) == 10 || Level.getTile(getPlayerX(), getPlayerY() - 2, getPlayerZ()) == 10) {
			setVelY(Player.getEntity(), 0);
		}
	}
}

var highJump = {
	name: "HighJump",
	desc: "Allows you to jump 2 blocks high.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	count: 0,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		if(!Player.isFlying()) {
			if(Entity.getVelY(Player.getEntity()) > 0.06) {
				Entity.setVelY(Player.getEntity(), 0.54);
				this.count++;
			}
			if(this.count == 1) {
				Entity.setVelY(Player.getEntity(), 0.48);
			}
			if(this.count == 2) {
				Entity.setVelY(Player.getEntity(), 0.42);
			}
			if(this.count == 3) {
				Entity.setVelY(Player.getEntity(), 0.36);
			}
			if(this.count == 4) {
				Entity.setVelY(Player.getEntity(), 0.31);
			}
			if(this.count == 5) {
				Entity.setVelY(Player.getEntity(), 0.26);
			}
			if(this.count == 6) {
				Entity.setVelY(Player.getEntity(), 0.22);
			}
			if(this.count == 7) {
				Entity.setVelY(Player.getEntity(), -0.078);
				this.count = 0;
			}
		}
	}
}

var f = 0;

var fastWalk = {
	name: "FastWalk",
	desc: "Makes you walk faster.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	count: 0,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		f = this.state?1:0;
	},
	onTick: function() {
		if(f == 1) {
            Xpos = getPlayerX();
            Zpos = getPlayerZ();
            f = f + 1;
        } else if(f == 3) {
            f = 1;
            Xdiff = getPlayerX() - Xpos;
            Zdiff = getPlayerZ() - Zpos;
            setVelX(getPlayerEnt(), Xdiff);
            setVelZ(getPlayerEnt(), Zdiff);
            Xdiff = 0;
            Zdiff = 0;
        }
        if(f != 1) {
            f = f + 1;
        }
	}
}

var aimbot = {
	name: "Aimbot",
	desc: "Makes you point at entities.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		if(this.state) {
			//TODO: Fix y pointing
			VertexClientPE.toast("Warning! This feature is not finished (yet). Use it with caution.");
		}
	},
	onTick: function() {
		var mobs = Entity.getAll();
		for(var i = 0; i < mobs.length; i++) {
			var ent = mobs[i];
			if(Entity.getEntityTypeId(ent) != EntityType.ITEM && Entity.getEntityTypeId(ent) != EntityType.ARROW && ent != getPlayerEnt()) {
				VertexClientPE.CombatUtils.aimAtEnt(ent);
			}
		}
	}
}

var chestTracers = {
	name: "ChestTracers",
	desc: "Allows you to find chests more easily by moving particles from the chest to underneath you.",
	category: VertexClientPE.category.MISC,
	type: "Mod",
	state: false,
	requiresPro: function() {
		return true;
	},
	getSettingsLayout: function() {
		var chestTracersSettingsLayout = new LinearLayout(ctx);
		chestTracersSettingsLayout.setOrientation(1);
		var chestTracersRangeTitle = clientTextView("Range: | " + chestTracersRange);
		var chestTracersRangeSlider = new SeekBar(ctx);
		chestTracersRangeSlider.setProgress(chestTracersRange);
		chestTracersRangeSlider.setMax(25);
		chestTracersRangeSlider.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				chestTracersRange = chestTracersRangeSlider.getProgress();
				chestTracersRangeTitle.setText("Range: | " + chestTracersRange);
			}
		});
		
		var chestTracersParticleTitle = clientTextView("\nParticle:");
		var chestTracersFlameButton = clientButton("Flame", "Flame particles.");
		chestTracersFlameButton.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 6, display.heightPixels / 10));
		var chestTracersRedstoneButton = clientButton("Redstone", "Redstone particles.");
		chestTracersRedstoneButton.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 6, display.heightPixels / 10));
		var chestTracersCriticalButton = clientButton("Critical", "Critical hit particles.");
		chestTracersCriticalButton.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 6, display.heightPixels / 10));
		
		var chestTracersParticleLayout = new LinearLayout(ctx);
		chestTracersParticleLayout.setOrientation(LinearLayout.HORIZONTAL);
		
		var chestTracersParticleLayoutLeft = new LinearLayout(ctx);
		chestTracersParticleLayoutLeft.setOrientation(1);
		chestTracersParticleLayoutLeft.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
		chestTracersParticleLayoutLeft.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
		chestTracersParticleLayout.addView(chestTracersParticleLayoutLeft);
		
		var chestTracersParticleLayoutCenter = new LinearLayout(ctx);
		chestTracersParticleLayoutCenter.setOrientation(1);
		chestTracersParticleLayoutCenter.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
		chestTracersParticleLayoutCenter.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
		chestTracersParticleLayout.addView(chestTracersParticleLayoutCenter);
		
		var chestTracersParticleLayoutRight = new LinearLayout(ctx);
		chestTracersParticleLayoutRight.setOrientation(1);
		chestTracersParticleLayoutRight.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
		chestTracersParticleLayoutRight.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
		chestTracersParticleLayout.addView(chestTracersParticleLayoutRight);
		
		if(chestTracersParticle == "flame") {
			chestTracersFlameButton.setTextColor(Color.GREEN);
		}if(chestTracersParticle == "redstone") {
			chestTracersRedstoneButton.setTextColor(Color.GREEN);
		}if(chestTracersParticle == "critical") {
			chestTracersCriticalButton.setTextColor(Color.GREEN);
		}
		chestTracersFlameButton.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(view) {
				chestTracersParticle = "flame";
				chestTracersFlameButton.setTextColor(Color.GREEN);
				chestTracersRedstoneButton.setTextColor(Color.WHITE);
				chestTracersCriticalButton.setTextColor(Color.WHITE);
				VertexClientPE.saveMainSettings();
				VertexClientPE.loadMainSettings();
			}
		});
		chestTracersRedstoneButton.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(view) {
				chestTracersParticle = "redstone";
				chestTracersFlameButton.setTextColor(Color.WHITE);
				chestTracersRedstoneButton.setTextColor(Color.GREEN);
				chestTracersCriticalButton.setTextColor(Color.WHITE);
				VertexClientPE.saveMainSettings();
				VertexClientPE.loadMainSettings();
			}
		});
		chestTracersCriticalButton.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(view) {
				chestTracersParticle = "critical";
				chestTracersFlameButton.setTextColor(Color.WHITE);
				chestTracersRedstoneButton.setTextColor(Color.WHITE);
				chestTracersCriticalButton.setTextColor(Color.GREEN);
				VertexClientPE.saveMainSettings();
				VertexClientPE.loadMainSettings();
			}
		});
		
		chestTracersParticleLayoutLeft.addView(chestTracersFlameButton);
		chestTracersParticleLayoutCenter.addView(chestTracersRedstoneButton);
		chestTracersParticleLayoutRight.addView(chestTracersCriticalButton);
		
		var groundModeCheckBox = new widget.CheckBox(ctx);
		groundModeCheckBox.setChecked(chestTracersGroundMode == "on");
		groundModeCheckBox.setText("Ground Mode");
		if(themeSetting == "white") {
			groundModeCheckBox.setTextColor(Color.BLACK);
		} else {
			groundModeCheckBox.setTextColor(Color.WHITE);
		}
		groundModeCheckBox.setTypeface(VertexClientPE.font);
		groundModeCheckBox.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v) {
				chestTracersGroundMode = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});
		
		var space = clientTextView("\n");
		var space1 = clientTextView("\n");
		chestTracersSettingsLayout.addView(chestTracersRangeTitle);
		chestTracersSettingsLayout.addView(chestTracersRangeSlider);
		chestTracersSettingsLayout.addView(chestTracersParticleTitle);
		chestTracersSettingsLayout.addView(chestTracersParticleLayout);
		chestTracersSettingsLayout.addView(space);
		chestTracersSettingsLayout.addView(groundModeCheckBox);
		chestTracersSettingsLayout.addView(space1);
		return chestTracersSettingsLayout;
	},
	onModDialogDismiss: function() {
		VertexClientPE.saveMainSettings();
	},
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onInterval: function() {
		var x = getPlayerX();
		var y = getPlayerY();
		var z = getPlayerZ();
		var newX;
		var newY;
		var newZ;
		for(var blockX = - chestTracersRange; blockX <= chestTracersRange; blockX++) {
			for(var blockY = - chestTracersRange; blockY <= chestTracersRange; blockY++) {
				for(var blockZ = - chestTracersRange; blockZ <= chestTracersRange; blockZ++) {
					newX = x + blockX;
					newY = y + blockY;
					newZ = z + blockZ;
					if(getTile(newX, newY, newZ) == 54) {
						VertexClientPE.drawTracer(newX, newY, newZ, chestTracersGroundMode=="on"?true:false, chestTracersParticle);
					}
				}
			}
		}
	}
}

var remoteView = {
	name: "RemoteView",
	desc: "Allows you to see the world as someone else (an entity).",
	category: VertexClientPE.category.MISC,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		if(!this.state) {
			ModPE.setCamera(getPlayerEnt());
		}
	},
	onAttack: function(a, v) {
		if(a == getPlayerEnt()) {
			preventDefault();
			ModPE.setCamera(v);
		}
	}
}

var antiAFK = {
	name: "AntiAFK",
	desc: "Makes the player shock, rotate and walk around to prevent you from getting disconnected.",
	category: VertexClientPE.category.MISC,
	type: "Mod",
	state: false,
	timer: 0,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		if(this.timer < 3) {
			this.timer += 0.05;
		} else if(this.timer >= 3 && this.timer < 6) {
			toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);
			var player = getPlayerEnt();
			var yaw = Math.floor(Entity.getYaw(player));
			var pitch = Math.floor(Entity.getPitch(player));
			Entity.setRot(player, yaw + 90, pitch);
			setVelX(player, playerWalkSpeed * playerDir[0]);
			setVelZ(player, playerWalkSpeed * playerDir[2]);
			this.timer = 0;
			setVelX(player, 0);
			setVelZ(player, 0);
		}
	}
}

var autoLeave = {
	name: "AutoLeave",
	desc: "Makes the player shock, rotate and walk around to prevent you from getting disconnected.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onInterval: function() {
		/*if(Entity.getHealth(getPlayerEnt()) <= 8 && autoLeaveStage == 0) {
			autoLeaveStage = 1;
			if(Launcher.isBlockLauncher()) {
				net.zhuoweizhang.mcpelauncher.ScriptManager.nativeScreenChooserSetScreen(1);
			}
			autoLeaveStage = 2;
		} else if(autoLeaveStage == 2) {
			if(Launcher.isBlockLauncher()) {
				net.zhuoweizhang.mcpelauncher.ScriptManager.nativeLeaveGame(false);
			}
		}*/
		if(Entity.getHealth(getPlayerEnt()) <= 8) {
			ModPE.restart();
		}
	}
}

var noDownGlide = {
	name: "NoDownGlide",
	desc: "Prevents you from flying upwards and downwards (and falling).",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	yCoord: 0,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.yCoord = getPlayerY();
		this.state = !this.state;
	},
	onTick: function() {
		Entity.setVelY(getPlayerEnt(), -0.000000000001);
		Entity.setPosition(getPlayerEnt(), getPlayerX(), this.yCoord, getPlayerZ());
	}
}

var teleport = {
	name: "Teleport",
	desc: "Teleports you to the given coordinates.",
	category: VertexClientPE.category.MISC,
	type: "Mod",
	isStateMod: function() {
		return false;
	},
	onToggle: function() {
		VertexClientPE.showTeleportDialog();
	}
}

var antiKnockback = {
	name: "AntiKnockback",
	desc: "Prevents you from getting knockback while being attacked.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onHurt: function(a, v) {
		if(v == getPlayerEnt()) {
			if(this.x && this.y && this.z) {
				Entity.setPosition(getPlayerEnt(), this.x, this.y, this.z);
			}
			this.x = getPlayerX();
			this.y = getPlayerY();
			this.z = getPlayerZ();
		}
	}
}

var antiBurn = {
	name: "AntiBurn",
	desc: "Prevents you from getting burned down.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		var x = getPlayerX();
		var y = getPlayerY();
		var z = getPlayerZ();
		var blockOne = getTile(x, y, z);
		var blockTwo = getTile(x, y - 1, z);
		var blockThree = getTile(x, y - 2, z);
		setTile(x, y, z, 9);
		setTile(x, y - 1, z, 9);
		setTile(x, y - 2, z, 9);
		setTile(x, y, z, blockOne);
		setTile(x, y - 1, z, blockTwo);
		setTile(x, y - 2, z, blockThree);
		Entity.setFireTicks(getPlayerEnt(), 0);
	}
}

var lifeSaver = {
	name: "LifeSaver",
	desc: "Prevents you from getting in touch with dangerous blocks.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		//coming soon
	}
}

var autoBuild = {
	name: "AutoBuild",
	desc: "Automatically build structures.",
	category: VertexClientPE.category.BUILDING,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		//coming soon
	}
}

var speedHack = {
	name: "SpeedHack",
	desc: "Allows you to walk really fast on the ground.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	frictionArray: [],
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		if(this.state) {
			for(var i = 0; i <= 256; i++) {
				if(this.frictionArray[i] == null || this.frictionArray[i] == undefined) {
					this.frictionArray[i] = Block.getFriction(i);
				}
				Block.setFriction(i, 0.1);
			}
		} else {
			for(var i = 0; i <= 256; i++) {
				if(this.frictionArray[i] != null && this.frictionArray[i] != undefined) {
					Block.setFriction(i, this.frictionArray[i]);
				}
			}
		}
	}
}

var chestESP = {
	name: "ChestESP",
	desc: "Allows you to find chests easily by showing boxes around them.",
	category: VertexClientPE.category.MISC,
	type: "Mod",
	state: false,
	requiresPro: function() {
		return true;
	},
	getSettingsLayout: function() {
		var chestESPSettingsLayout = new LinearLayout(ctx);
		chestESPSettingsLayout.setOrientation(1);
		var chestESPRangeTitle = clientTextView("Range: | " + chestESPRange);
		var chestESPRangeSlider = new SeekBar(ctx);
		chestESPRangeSlider.setProgress(chestESPRange);
		chestESPRangeSlider.setMax(25);
		chestESPRangeSlider.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				chestESPRange = chestESPRangeSlider.getProgress();
				chestESPRangeTitle.setText("Range: | " + chestESPRange);
			}
		});
		
		chestESPSettingsLayout.addView(chestESPRangeTitle);
		chestESPSettingsLayout.addView(chestESPRangeSlider);
		return chestESPSettingsLayout;
	},
	onModDialogDismiss: function() {
		VertexClientPE.saveMainSettings();
	},
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		if(this.state) {
			VertexClientPE.Utils.loadFov();
			VertexClientPE.Utils.loadChests();
		}
	},
	onRender: function(gl) {
		VertexClientPE.Utils.getChests().forEach(function(element, index, array) {
			VertexClientPE.drawCubeShapedBox(gl, element.x, element.y, element.z);
		});
	}
}

var twerk = {
	name: "Twerk",
	desc: "Automatically makes you twerk all the time.",
	category: VertexClientPE.category.MISC,
	type: "Mod",
	state: false,
	timer: 0,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		this.timer = 0;
	},
	onTick: function() {
		if(this.timer <= 20) {
			Entity.setSneaking(getPlayerEnt(), true);
			this.timer++;
		} else if(this.timer <= 21) {
			Entity.setSneaking(getPlayerEnt(), false);
			this.timer = 0;
		}
	}
}

var chatLog = {
	name: "ChatLog",
	desc: "Automatically logs all the chat messages and allows you to view them.",
	category: VertexClientPE.category.CHAT,
	type: "Special",
	isStateMod: function() {
		return false;
	},
	onToggle: function() {
		var chatString = "";
		var chatMessages = VertexClientPE.Utils.world.chatMessages;
		if(chatMessages.length != 0) {
			VertexClientPE.Utils.world.chatMessages.forEach(function(element, index, array) {
				if(index != 0) {
					chatString += "\n"
				}
				chatString += element;
			});
		} else {
			chatString = "Nothing to see here, once you send or receive chat messages they'll be displayed here.";
		}
		VertexClientPE.showBasicDialog("ChatLog - Display", clientTextView(chatString));
	},
	onChatReceive: function(message, sender) {
		VertexClientPE.Utils.world.chatMessages.push("<" + sender + "> " + message);
	}
}

//COMBAT
//VertexClientPE.registerModule(antiKnockback);
//VertexClientPE.registerModule(antiBurn);
VertexClientPE.registerModule(arrowGun);
VertexClientPE.registerModule(aimbot);
VertexClientPE.registerModule(autoLeave);
VertexClientPE.registerModule(autoSword);
VertexClientPE.registerModule(criticals);
VertexClientPE.registerModule(fireAura);
VertexClientPE.registerModule(follow);
VertexClientPE.registerModule(freezeAura);
VertexClientPE.registerModule(godMode);
VertexClientPE.registerModule(healthTags);
VertexClientPE.registerModule(instaKill);
VertexClientPE.registerModule(killAura);
//VertexClientPE.registerModule(lifeSaver);
VertexClientPE.registerModule(noHurt);
VertexClientPE.registerModule(regen);
VertexClientPE.registerModule(tpAura);
//MOVEMENT
VertexClientPE.registerModule(autoTeleporter);
VertexClientPE.registerModule(autoWalk);
VertexClientPE.registerModule(enderProjectiles);
//VertexClientPE.registerModule(fastBridge);
VertexClientPE.registerModule(fastWalk);
VertexClientPE.registerModule(flight);
VertexClientPE.registerModule(glide);
VertexClientPE.registerModule(highJump);
VertexClientPE.registerModule(liquidWalk);
VertexClientPE.registerModule(noDownGlide);
VertexClientPE.registerModule(ride);
VertexClientPE.registerModule(speedHack);
VertexClientPE.registerModule(tapTeleporter);
VertexClientPE.registerModule(timer);
VertexClientPE.registerModule(wallHack);
//BUILDING
//VertexClientPE.registerModule(autoBuild);
VertexClientPE.registerModule(autoMine);
VertexClientPE.registerModule(autoPlace);
VertexClientPE.registerModule(fastBreak);
VertexClientPE.registerModule(nuker);
VertexClientPE.registerModule(powerExplosions);
VertexClientPE.registerModule(signEditor);
VertexClientPE.registerModule(stackDrop);
VertexClientPE.registerModule(tapExplosion);
VertexClientPE.registerModule(tapNuker);
VertexClientPE.registerModule(tapRemover);
//CHAT
VertexClientPE.registerModule(autoSpammer);
VertexClientPE.registerModule(chatLog);
VertexClientPE.registerModule(chatRepeat);
VertexClientPE.registerModule(chatSpeak);
VertexClientPE.registerModule(delaySpammer);
VertexClientPE.registerModule(fancyChat);
VertexClientPE.registerModule(homeCommand);
//MISC
VertexClientPE.registerModule(panic);
VertexClientPE.registerModule(switchGamemode);
VertexClientPE.registerModule(antiAFK);
VertexClientPE.registerModule(autoSwitch);
VertexClientPE.registerModule(chestESP);
VertexClientPE.registerModule(chestTracers);
VertexClientPE.registerModule(coordsDisplay);
VertexClientPE.registerModule(derp);
VertexClientPE.registerModule(itemGiver);
VertexClientPE.registerModule(onlyDay);
VertexClientPE.registerModule(orderAPizza);
VertexClientPE.registerModule(remoteView);
VertexClientPE.registerModule(teleport);
//VertexClientPE.registerModule(tracers);
VertexClientPE.registerModule(twerk);
VertexClientPE.registerModule(yesCheatPlus);
VertexClientPE.registerModule(zoom);

function modTick() {
	VertexClientPE.playerIsInGame = true;
	VertexClientPE.modules.forEach(function(element, index, array) {
		if(element.isStateMod() && element.state && element.onTick) {
			if(yesCheatPlusState && element.canBypassYesCheatPlus) {
				if(!element.canBypassYesCheatPlus()) {
					return;
				}
			}
			element.onTick();
		}
	});
}

function attackHook(a, v) {
	VertexClientPE.modules.forEach(function(element, index, array) {
		if(element.isStateMod() && element.state && element.onAttack) {
			if(yesCheatPlusState && element.canBypassYesCheatPlus) {
				if(!element.canBypassYesCheatPlus()) {
					return;
				}
			}
			element.onAttack(a, v);
		}
	});
}

function entityHurtHook(a, v) {
	VertexClientPE.modules.forEach(function(element, index, array) {
		if(element.isStateMod() && element.state && element.onHurt) {
			if(yesCheatPlusState && element.canBypassYesCheatPlus) {
				if(!element.canBypassYesCheatPlus()) {
					return;
				}
			}
			element.onHurt(a, v);
		}
	});
}

function entityAddedHook(entity) {
	VertexClientPE.modules.forEach(function(element, index, array) {
		if(element.isStateMod() && element.state && element.onEntityAdded) {
			if(yesCheatPlusState && element.canBypassYesCheatPlus) {
				if(!element.canBypassYesCheatPlus()) {
					return;
				}
			}
			element.onEntityAdded(entity);
		}
	});
}

function useItem(x, y, z, itemId, blockId, side, blockDamage) {
	VertexClientPE.modules.forEach(function(element, index, array) {
		if(element.isStateMod() && element.state && element.onUseItem) {
			if(yesCheatPlusState && element.canBypassYesCheatPlus) {
				if(!element.canBypassYesCheatPlus()) {
					return;
				}
			}
			element.onUseItem(x, y, z, itemId, blockId, side, blockDamage);
		}
	});
	if(blockId == 54) {
		new java.lang.Thread(new Runnable({
			run: function() {
				VertexClientPE.toast("Reloading chests...");
				java.lang.Thread.sleep(1200);
				VertexClientPE.Utils.loadChests();
			}
		})).start();
	}
}

function explodeHook(entity, x, y, z, power, onFire) {
	VertexClientPE.modules.forEach(function(element, index, array) {
		if(element.isStateMod() && element.state && element.onExplode) {
			if(yesCheatPlusState && element.canBypassYesCheatPlus) {
				if(!element.canBypassYesCheatPlus()) {
					return;
				}
			}
			element.onExplode(entity, x, y, z, power, onFire);
		}
	});
}

function projectileHitBlockHook(projectile, blockX, blockY, blockZ, side) {
	VertexClientPE.modules.forEach(function(element, index, array) {
		if(element.isStateMod() && element.state && element.onProjectileHitBlock) {
			if(yesCheatPlusState && element.canBypassYesCheatPlus) {
				if(!element.canBypassYesCheatPlus()) {
					return;
				}
			}
			element.onProjectileHitBlock(projectile, blockX, blockY, blockZ, side);
		}
	});
}

function chatReceiveHook(text, sender) {
	VertexClientPE.modules.forEach(function(element, index, array) {
		if(element.onChatReceive) {
			if(yesCheatPlusState && element.canBypassYesCheatPlus) {
				if(!element.canBypassYesCheatPlus()) {
					return;
				}
			}
			element.onChatReceive(text, sender);
		}
	});
}

function textPacketReceiveHook(type, sender, message) {
	//print(type);
	if(type != 0) {
		VertexClientPE.modules.forEach(function(element, index, array) {
			if(element.isStateMod() && element.state && element.onChatReceive) {
				if(yesCheatPlusState && element.canBypassYesCheatPlus) {
					if(!element.canBypassYesCheatPlus()) {
						return;
					}
				}
				element.onChatReceive(message, sender);
			}
		});
	}
}

function chatHook(text) {
	if(text.startsWith(cmdPrefix)) {
		preventDefault();
		if(Launcher.isBlockLauncher()) {
			com.mojang.minecraftpe.MainActivity.currentMainActivity.get().nativeSetTextboxText("");
			com.mojang.minecraftpe.MainActivity.currentMainActivity.get().updateTextboxText("");
		}
		VertexClientPE.commandManager(text.substring(1, text.length));
	} else {
		if(text.charAt(0) != "/") {
			VertexClientPE.modules.forEach(function(element, index, array) {
				if(element.isStateMod() && element.state && element.onChat) {
					if(yesCheatPlusState && element.canBypassYesCheatPlus) {
						if(!element.canBypassYesCheatPlus()) {
							return;
						}
					}
					element.onChat(text);
				}
			});
		}
	}
}

/**
 *  ############
 *	# COMMANDS #
 *	############
 */
 
VertexClientPE.getHighestPageNumber = function() {
	var commands = [];
	VertexClientPE.modules.forEach(function(element, index, array) {
		if(element != null && element.syntax != null && element.type == "Command") {
			commands.push(element);
		}
	});
	var i = 0;
	var page = 1;
	while(commands[i] != null) {
		i++;
		while(i > 8*page) {
			page++;
		}
	}
	return page;
}
 
VertexClientPE.showHelpPage = function(page) {
	var commands = [];
	VertexClientPE.clientMessage("Showing help page " + page + "/" + VertexClientPE.getHighestPageNumber());
	VertexClientPE.modules.forEach(function(element, index, array) {
		if(element != null && element.syntax != null && element.type == "Command") {
			commands.push(element);
		}
	});
	commands.forEach(function(element, index, array) {
		if(element.syntax != null) {
			if(index >= 8*(page-1) && index <= 8*page-1) {
				VertexClientPE.clientMessage(cmdPrefix + element.syntax);
			}
		}
	});
}

var help = {
	syntax: "help <page>",
	type: "Command",
	isStateMod: function() {
		return false;
	},
	onCall: function(cmd) {
		var commandSplit = cmd.split(" ");
		if(commandSplit[1] == undefined || commandSplit[1] == null || commandSplit[1] == "1") {
			VertexClientPE.showHelpPage("1");
		} else {
			if(commandSplit[1] != "1" && commandSplit[1] > 1 && commandSplit[1] <= VertexClientPE.getHighestPageNumber()) {
				VertexClientPE.showHelpPage(commandSplit[1]);
			} else if(commandSplit[1] <= 0) {
				VertexClientPE.clientMessage(ChatColor.RED + "Error: page number is too low!");
			} else {
				VertexClientPE.clientMessage(ChatColor.RED + "Error: page number is too high!");
			}
		}
	}
}

var toggle = {
	syntax: "toggle <module>",
	type: "Command",
	isStateMod: function() {
		return false;
	},
	onCall: function(cmd) {
		try {
			var commandSplit = cmd.split(" ");
			if (cmd.substring(2, cmd.length) != null && cmd.substring(2, cmd.length) != undefined && commandSplit[1] != null) {
				var shouldReturn = false;
				VertexClientPE.modules.forEach(function (element, index, array) {
					if(element.type != "Command") {
						if (element.name.toLowerCase() == cmd.substring(2, cmd.length).toLowerCase() && !shouldReturn) {
							if (element.isStateMod()) {
								if(element.requiresPro && element.requiresPro() && !VertexClientPE.isPro()) {
									VertexClientPE.showProDialog(element.name);
									return;
								}
								element.onToggle();
								if(hacksList != null && hacksList.isShowing()) {
									updateHacksList();
								}
								VertexClientPE.toast("Sucessfully toggled module " + element.name);
							} else {
								VertexClientPE.toast(element.name + " can't be toggled!");
							}
							shouldReturn = true;
						}
					}
				});
				if(shouldReturn) {
					return;
				}
				VertexClientPE.toast("Module " + cmd.substring(2, cmd.length) + " can't be found/toggled!");
			} else {
				throw new SyntaxError();
			}
		} catch(e) {
			if(e instanceof SyntaxError) {
				VertexClientPE.syntaxError(".toggle <module>");
			} else {
				VertexClientPE.showBugReportDialog(e);
			}
		}
	}
}

var t = {
	syntax: "t <module>",
	type: "Command",
	isStateMod: function() {
		return false;
	},
	onCall: function(cmd) {
		toggle.onCall(cmd);
	}
}

var say = {
	syntax: "say <message>",
	type: "Command",
	isStateMod: function() {
		return false;
	},
	onCall: function(cmd) {
		sayMsg = cmd.substring(4, cmd.length);
		if(fancyChatState) {
			VertexClientPE.fancyChat(sayMsg);
		} else {
			Server.sendChat(sayMsg);
		}
	}
}

var drop = {
	syntax: "drop [infinite]",
	type: "Command",
	isStateMod: function() {
		return false;
	},
	onCall: function(cmd) {
		var commandSplit = cmd.split(" ");
		try {
			if(commandSplit[1] == null || commandSplit[1] == undefined || commandSplit[1] == "infinite") {
				for(var i = 0; i <= 512; i++) {
					p = ((Entity.getPitch(getPlayerEnt()) + 90) * Math.PI) / 180;
					y = ((Entity.getYaw(getPlayerEnt()) + 90) * Math.PI) / 180;
					xx = Math.sin(p) * Math.cos(y);
					yy = Math.sin(p) * Math.sin(y);
					zz = Math.cos(p);
					Level.dropItem(Player.getX() + xx, Player.getY() + zz, Player.getZ() + yy, 1, i, 1);
				}
			} else {
				throw new SyntaxError();
			}
		} catch(e) {
			if(e instanceof SyntaxError) {
				VertexClientPE.syntaxError(".drop [infinite]");
			} else {
				VertexClientPE.showBugReportDialog(e);
			}
		}
	}
}

var give = {
	syntax: "give (<item_name|item_id>) [<amount>] [<data>]",
	type: "Command",
	isStateMod: function() {
		return false;
	},
	onCall: function(cmd) {
		var commandSplit = cmd.split(" ");
		try {
			if(commandSplit[1] != null) {
				if(Item.internalNameToId(commandSplit[1]) != null) {
					var itemId = Item.internalNameToId(commandSplit[1]);
				} else {
					var itemId = commandSplit[1];
				}
			} else {
				VertexClientPE.syntaxError(cmdPrefix + this.syntax);
				return;
			}
			if(commandSplit[2] != null) {
				var count = commandSplit[2];
			} else {
				var count = 1;
			}
			if(commandSplit[3] != null) {
				var data = commandSplit[3];
			} else {
				var data = 0;
			}
			if(Item.isValidItem(itemId)) {
				Player.addItemInventory(itemId, count, data);
			} else {
				VertexClientPE.syntaxError(cmdPrefix + this.syntax);
			}
		} catch(e) {
			//syntax?
		}
	}
}

var tp = {
	syntax: "tp <x> <y> <z>",
	type: "Command",
	isStateMod: function() {
		return false;
	},
	onCall: function(cmd) {
		var commandSplit = cmd.split(" ");
		try {
			if(commandSplit[1] != null) {
				var x = commandSplit[1];
			} else {
				VertexClientPE.syntaxError(cmdPrefix + this.syntax);
				return;
			}
			if(commandSplit[2] != null) {
				var y = commandSplit[2];
			} else {
				VertexClientPE.syntaxError(cmdPrefix + this.syntax);
				return;
			}
			if(commandSplit[3] != null) {
				var z = commandSplit[3];
			} else {
				VertexClientPE.syntaxError(cmdPrefix + this.syntax);
				return;
			}
			if(getTile(x, y, z) != null) {
				Entity.setPosition(getPlayerEnt(), x, y, z);
				VertexClientPE.clientMessage(ChatColor.GREEN + "Successfully teleported player to " + x + ", " + y + ", " + z + "!");
			} else {
				VertexClientPE.syntaxError(cmdPrefix + this.syntax);
			}
		} catch(e) {
			//syntax?
		}
	}
}

var version = {
	syntax: "version <current|target|latest>",
	type: "Command",
	isStateMod: function() {
		return false;
	},
	onCall: function(cmd) {
		var commandSplit = cmd.split(" ");
		try {
			if(typeof VertexClientPE.getVersion(commandSplit[1]) !== "undefined") {
				VertexClientPE.clientMessage(VertexClientPE.getVersion(commandSplit[1]));
			} else {
				VertexClientPE.syntaxError(cmdPrefix + this.syntax);
			}
		} catch(e) {
			//syntax?
		}
	}
}

var panic_cmd = {
	syntax: "panic",
	type: "Command",
	isStateMod: function() {
		return false;
	},
	onCall: function(cmd) {
		panic.onToggle();
		if(hacksList != null && hacksList.isShowing()) {
			updateHacksList();
		}
	}
}

var p = {
	syntax: "p",
	type: "Command",
	isStateMod: function() {
		return false;
	},
	onCall: function(cmd) {
		panic_cmd.onCall(cmd);
	}
}

var gamemode = {
	syntax: "gamemode",
	type: "Command",
	isStateMod: function() {
		return false;
	},
	onCall: function(cmd) {
		VertexClientPE.switchGameMode();
		VertexClientPE.clientMessage("Your gamemode has been updated!");
	}
}

var gm = {
	syntax: "gm",
	type: "Command",
	isStateMod: function() {
		return false;
	},
	onCall: function(cmd) {
		gamemode.onCall(cmd);
	}
}

var js = {
	syntax: "js",
	type: "Command",
	isStateMod: function() {
		return false;
	},
	onCall: function(cmd) {
		VertexClientPE.showJavascriptConsoleDialog();
	}
}

var rename = {
	syntax: "rename <name>",
	type: "Command",
	isStateMod: function() {
		return false;
	},
	onCall: function(cmd) {
		var renameName = cmd.substring(7, cmd.length);
		var renameSlot = Player.getSelectedSlotId();
		var renameItem = Player.getInventorySlot(renameSlot);
		if(renameName  != null && renameName.replaceAll(" ", "") != "" && renameItem != 0) {
			Player.setItemCustomName(renameSlot, renameName);
			VertexClientPE.clientMessage(ChatColor.GREEN + "Successfully renamed item to " + renameName + "!");
		} else if(renameName.replaceAll(" ", "") == "") {
			VertexClientPE.clientMessage(ChatColor.RED + "Error: please enter a valid name!");
		} else if(renameItem == 0) {
			VertexClientPE.clientMessage(ChatColor.RED + "Error: the selected inventory slot is empty!");
		}
	}
}

VertexClientPE.registerModule(help);
VertexClientPE.registerModule(drop);
VertexClientPE.registerModule(gamemode);
VertexClientPE.registerModule(give);
VertexClientPE.registerModule(gm);
VertexClientPE.registerModule(js);
VertexClientPE.registerModule(p);
VertexClientPE.registerModule(panic_cmd);
VertexClientPE.registerModule(rename);
VertexClientPE.registerModule(say);
VertexClientPE.registerModule(t);
VertexClientPE.registerModule(toggle);
VertexClientPE.registerModule(tp);
VertexClientPE.registerModule(version);

/**
 *  ##############
 *	# GUI & MORE #
 *	##############
 */

VertexClientPE.GUI = {
	floatingMenus: []
}

VertexClientPE.GUI.PopupWindow = function() {
	var popupWindow = new widget.PopupWindow();
}

VertexClientPE.GUI.registerFloatingMenu = function() {
	var floatingPopupWindowShown = false;
	var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
	
	VertexClientPE.loadMainSettings();

	var floatingPopupWindow = new VertexClientPE.GUI.PopupWindow();
	var floatingPopupWindowLayout1 = new LinearLayout(ctx);
	var floatingPopupWindowScrollView = new ScrollView(ctx);
	var floatingPopupWindowLayout = new LinearLayout(ctx);
	
	floatingPopupWindowLayout.setOrientation(1);
	floatingPopupWindowLayout1.setOrientation(1);
	
	floatingPopupWindowScrollView.addView(floatingPopupWindowLayout);
	
	var floatingCategoryTitle = new categoryTitle(VertexClientPE.category.toName(category), true);
	var floatingCategoryTitleSettings = floatingCategoryTitle.getLeftButton();
	var floatingCategoryTitleTitle = floatingCategoryTitle.getMiddleButton();
	var floatingCategoryTitleArrow = floatingCategoryTitle.getRightButton();
	
	floatingCategoryTitleSettings.setOnClickListener(new android.view.View.OnClickListener({
		onClick: function() {
			VertexClientPE.showCategoryDialog(floatingCategoryTitle, VertexClientPE.category.toName(category), 0);
		}
	}));
	
	VertexClientPE.addView(floatingPopupWindow, floatingCategoryTitle);
	
	if(floatingPopupWindowShown == true) {
		floatingCategoryTitleArrow.setText("\u25B3");
		floatingPopupWindowLayout1.addView(floatingPopupWindowScrollView);
	}else if(combatMenuShown == false) {
		floatingCategoryTitleArrow.setText("\u25BD");
	}
	VertexClientPE.GUI.floatingMenus.push(this);
}

VertexClientPE.showNotification = function(eventtext) {
	var mNM = ctx.getSystemService(android.content.Context.NOTIFICATION_SERVICE);
	var notification = new android.app.Notification(android.R.drawable.ic_menu_edit, "Text", java.lang.System.currentTimeMillis());

    // The PendingIntent to launch our activity if the user selects this
    // notification
    var contentIntent = android.app.PendingIntent.getActivity(ctx, 0, new android.content.Intent(ctx), 0);

    // Set the info for the views that show in the notification panel.
    notification.setLatestEventInfo(ctx, "Title", eventtext, contentIntent);

    // Send the notification.
    mNM.notify("Title", 0, notification);
}

var nameColor = "\u00A7b";
var healthColor = "\u00A7c";

var defaultDestroyTimeAll = [
    null, 1.5, 0.6, 0.5, 2, 2, 0, -1, null, null, null, null, 0.5, 0.6, 3, 3, 3, 2, 0.2, 0.6, 0.3, 3, 3, null, 0.8, null, 0.2, 0.7, null, null, 4, 0, 0, null, null, 0.8, null, 0, 0, 0, 0, 3, 5, 2, 2, 2, 0, 1.5, 2, 50, 0, 0, null, 2, 2.5, null, 3, 5, 2.5, 0, 0.6, 3.5, 3.5, 1, 3, 0.4, 0.7, 2, 1, null, null, 5, null, 3, 3, null, null, null, 0.1, 0.5, 0.2, 0.4, 0.6, 0, null, 2, 1, 0.4, 0.3, null, 1, 0.5, null, null, -1, 3, null, 1.5, null, null, 5, 0.3, 1, 0, 0, null, 2, 2, 1.5, null, null, 2, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null, 0.8, null, null, null, null, null, 2, 2, 2, null, null, 2, null, 0, 0, null, null, null, null, null, null, null, null, null, null, null, null, 0.8, 0.8, 2, 2, null, null, null, null, null, null, null, null, null, null, null, 0.5, 0.1, 5, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 3.5, 50, 5, 0.6, 0.6, 5, null, null, null, null, 0
];

Block.setDestroyTimeAll = function(destroyTime) {
    for(i = 0; i < 256; i++) {
        Block.setDestroyTime(i, destroyTime);
    }
}

Block.setDestroyTimeDefaultAll = function() {
    for(i = 0; i < 256; i++) {
        Block.setDestroyTime(i, defaultDestroyTimeAll[i]);
    }
}

var logoImage = " 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AAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSAWBdbwAAA/ZJREFUHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJgFzpi/57V30igAAAABJRU5ErkJggg== ";
var iconIcon = " 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AAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAA7aqGAAAAAABAu6ohAAAAAADQrmoIAAAAAAC0qxoCAAAAAADtqoYAAAAAAEC7qiEAAAAAANCuaggAAAAAALSrGgIAAAAAAO2qhgAAAAAAQLuqIQAAAAAA0K5qCAAAAAAAtKsaAgAAAAAAbYrO/w+EO5R7IbCWkAAAAABJRU5ErkJggg== ";
var iconIconClicked = " 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mgkAAAAAALRmAgAAAAAArZkAAAAAAEBrJgAAAAAA0JoJAAAAAAC0ZgIAAAAAAK2ZAAAAAABAayYAAAAAANCaCQAAAAAAtGYCAAAAAACtmQAAAAAAQGsmAAAAAADQmgkAAAAAALRmAgAAAAAArZkAAAAAAEBrJgAAAAAA0JoJAAAAAAC0ZgIAAAAAAK2ZAAAAAABAayYAAAAAANCaCQAAAAAAtGYCAAAAAACtmQAAAAAAQGsmAAAAAADQmgkAAAAAALRmAgAAAAAArZkAAAAAAEBrJgAAAAAA0JoJAAAAAAC0ZgIAAAAAAK2ZAAAAAABAayYAAAAAANCaCQAAAAAAtGYCAAAAAACtmQAAAAAAQGsmAAAAAADQmgkAAAAAALRmAgAAAAAArZkAAAAAAEBrJgAAAAAA0JoJAAAAAAC0ZgIAAAAAAK2ZAAAAAABAayYAAAAAANCaCQAAAAAAtGYCAAAAAACtmQAAAAAAQGsmAAAAAADQmgkAAAAAALRmAgAAAAAArZkAAAAAAEBrJgAAAAAA0JoJAAAAAAC0ZgIAAAAAAK2ZAAAAAABAayYAAAAAANCaCQAAAAAAtGYCAAAAAACtmQAAAAAAQGsmAAAAAADQmgkAAAAAALRmAgAAAAAArZkAAAAAAEBrJgAAAAAA0JoJAAAAAAC0ZgIAAAAAAK2ZAAAAAABAayYAAAAAANCaCQAAAAAAtGYCAAAAAACtmQAAAAAAQGsmAAAAAADQmgkAAAAAALRmAgAAAAAArZkAAAAAAEBrJgAAAAAA0JoJAAAAAAC0ZgIAAAAAAK2ZAAAAAABAayYAAAAAANCaCQAAAAAAtGYCAAAAAACtmQAAAAAAQGsmAAAAAADQmgkAAAAAALRmAgAAAAAArZkAAAAAAEBrJgAAAAAA0JoJAAAAAAC0ZgIAAAAAAK2ZAAAAAABAayYAAAAAANCaCQAAAAAAtGYCAAAAAACtmQAAAAAAQGsmAAAAAADQmgkAAAAAALRmAgAAAAAArZkAAAAAAEBrJgAAAAAA0JoJAAAAAAC0ZgIAAAAAAK2ZAAAAAABAayYAAAAAANCaCQAAAAAAtGYCAAAAAACtmQAAAAAAQGsmAAAAAADQmgkAAAAAALRmAgAAAAAArZkAAAAAAEBrJgAAAAAA0JoJAAAAAAC0ZgIAAAAAAK2ZAAAAAABAayYAAAAAANCaCQAAAAAAtGYCAAAAAACtmQAAAAAAQGsmAAAAAADQmgkAAAAAALRmAgAAAAAArZkAAAAAAEBrJgAAAAAA0JoJAAAAAAC0ZgIAAAAAAK2ZAAAAAABAayYAAAAAANCaCQAAAAAAtGYCAAAAAACtmQAAAAAAQGsmAAAAAADQmgkAAAAAALRmAgAAAAAArZkAAAAAAEBrJgAAAAAA0JoJAAAAAAC0ZgIAAAAAAK2ZAAAAAABAayYAAAAAANCaCQAAAAAAtGYCAAAAAACtmQAAAAAAQGsmAAAAAADQmgkAAAAAALRmAgAAAAAArZkAAAAAAEBrJgAAAAAA0JoJAAAAAACU7n2WPYB9NyFhpQAAAABJRU5ErkJggg== ";
var playPlayButton = " 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 ";
var playPlayButtonClicked = " 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 ";
var twitterTwitterButton = " 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 ";
var twitterTwitterButtonClicked = " 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 ";
var youTubeYouTubeButton = " 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 ";
var youTubeYouTubeButtonClicked = " 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 ";
var pathFont = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang";

Base64Decode(android.util.Base64.decode(iconIcon, 0), pathFont + "/clienticon_new.png");
Base64Decode(android.util.Base64.decode(iconIconClicked, 0), pathFont + "/clienticon_new_clicked.png");
Base64Decode(android.util.Base64.decode(playPlayButton, 0), pathFont + "/play_button.png");
Base64Decode(android.util.Base64.decode(playPlayButtonClicked, 0), pathFont + "/play_button_clicked.png");
Base64Decode(android.util.Base64.decode(twitterTwitterButton, 0), pathFont + "/twitter_button.png");
Base64Decode(android.util.Base64.decode(youTubeYouTubeButton, 0), pathFont + "/youtube_button.png");
Base64Decode(android.util.Base64.decode(twitterTwitterButtonClicked, 0), pathFont + "/twitter_button_clicked.png");
Base64Decode(android.util.Base64.decode(youTubeYouTubeButtonClicked, 0), pathFont + "/youtube_button_clicked.png");

var imgIcon = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/clienticon_new.png");
var imgIconClicked = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/clienticon_new_clicked.png");
var imgPlayButton = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/play_button.png");
var imgPlayButtonClicked = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/play_button_clicked.png");
var imgTwitterButton = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/twitter_button.png");
var imgYouTubeButton = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/youtube_button.png");
var imgTwitterButtonClicked = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/twitter_button_clicked.png");
var imgYouTubeButtonClicked = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/youtube_button_clicked.png");
var iconClientGUI = new android.graphics.drawable.BitmapDrawable(imgIcon);
var iconClickedClientGUI = new android.graphics.drawable.BitmapDrawable(imgIconClicked)
var playButtonClientGUI = new android.graphics.drawable.BitmapDrawable(imgPlayButton);
var playButtonClickedClientGUI = new android.graphics.drawable.BitmapDrawable(imgPlayButtonClicked);
var splashTwitterButtonClientGUI = new android.graphics.drawable.BitmapDrawable(imgTwitterButton);
var splashYouTubeButtonClientGUI = new android.graphics.drawable.BitmapDrawable(imgYouTubeButton);
var splashTwitterButtonClickedClientGUI = new android.graphics.drawable.BitmapDrawable(imgTwitterButtonClicked);
var splashYouTubeButtonClickedClientGUI = new android.graphics.drawable.BitmapDrawable(imgYouTubeButtonClicked);

function Base64Decode(byteArray, Path) {
    try {
        var File = new java.io.File(Path);
        if (!File.exists()) {
            File.createNewFile();
            var Stream = new java.io.FileOutputStream(File);
            Stream.write(byteArray);
            Stream.close();
        }
        
    } catch (err) {
        print(err);
    }
}

var getContext = function() {
    return com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
};

ModPE.goToURL = function(url) {
	var uri = android.net.Uri.parse(url);
	var intent = new android.content.Intent(android.content.Intent.ACTION_VIEW, uri);
	ctx.startActivity(intent);
};

ModPE.getAndroidVersion = function() {
	return com.mojang.minecraftpe.HardwareInformation.getAndroidVersion();
}

ModPE.getPlayerName = function() {
    var file = new java.io.File("/sdcard/games/com.mojang/minecraftpe/options.txt");
    var br = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file)));
    var read, username;
    while((read = br.readLine()) != null) {
        if(read.split(":")[0] == "mp_username") {
            username = read.split(":")[1];
            break;
        }
    }
    br.close();
    return username;
};

ModPE.getFov = function() {
    var file = new java.io.File("/sdcard/games/com.mojang/minecraftpe/options.txt");
    var br = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file)));
    var read, fov;
    while((read = br.readLine()) != null) {
        if(read.split(":")[0] == "gfx_field_of_view") {
            fov = read.split(":")[1];
            break;
        }
    }
    br.close();
    return fov;
};

ModPE.setPlayerName = function(username) {
	saveSetting("mp_username", username);
}

ModPE.changeClientId = function(clientId) {
	var fileOutputStream = new java.io.FileOutputStream(new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/clientId.txt"));
	var outputStreamWriter = new java.io.OutputStreamWriter(fileOutputStream);
	outputStreamWriter.write(clientId);
	outputStreamWriter.close();
	fileOutputStream.close();
};

ModPE.getClientId = function() {
    var file = new java.io.File("/sdcard/games/com.mojang/minecraftpe/clientid.txt");
    var br = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file)));
    var read, username;
    while((read = br.readLine()) != null) {
        username = read;
        break;
    }
    br.close();
    return username;
};

function saveSetting(article, value) {
	var fileInputStream = new java.io.FileInputStream(new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/options.txt"));
	var inputStreamReader = new java.io.InputStreamReader(fileInputStream);
	var bufferedReader = new java.io.BufferedReader(inputStreamReader);
	var tempRead, tempReadString;
	var tempSaved = "";
	while ((tempRead = bufferedReader.readLine()) != null) {
	tempReadString = tempRead.toString();
	if (tempReadString.split(":")[0] == article) continue;
	tempSaved += tempReadString + "\n"
	}
	fileInputStream.close();
	inputStreamReader.close();
	bufferedReader.close();
	var fileOutputStream = new java.io.FileOutputStream(new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/options.txt"));
	var outputStreamWriter = new java.io.OutputStreamWriter(fileOutputStream);
	outputStreamWriter.write(tempSaved + article + ":" + value);
	outputStreamWriter.close();
	fileOutputStream.close();
};

ModPE.getInfo = function(infoName) { //profileName, sessionId
	return android.preference.PreferenceManager.getDefaultSharedPreferences(ctx).getString(infoName, null);
}

ModPE.setSession = function(sessionId) {
	//ctx.setLoginInformation(ctx.getAccessToken(), ModPE.getClientId(), ctx.getProfileId(), username);
	/*var edit = android.preference.PreferenceManager.getDefaultSharedPreferences(ctx).edit();
	edit.putString("sessionId", sessionId);
	edit.commit();*/
	/*editor.putString("sessionId", sessionId);
	editor.commit();*/
	com.mojang.minecraftpe.MainActivity.setSession(sessionId);
}

ModPE.playerHasSplitControls = function() {
    var file = new java.io.File("/sdcard/games/com.mojang/minecraftpe/options.txt");
    var br = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file)));
    var read, splitcontrols;
    while((read = br.readLine()) != null) {
        if(read.split(":")[0] == "ctrl_usetouchjoypad") {
            splitcontrols = read.split(":")[1];
            break;
        }
    }
    br.close();
    return splitcontrols;
};

ModPE.getCurrentUsedSkin = function() {
    var file = new java.io.File("/sdcard/games/com.mojang/minecraftpe/options.txt");
    var br = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file)));
    var read, skin;
    while((read = br.readLine()) != null) {
        if(read.split(":")[0] == "game_skintypefull") {
            skin = read.split(":")[1];
            break;
        }
    }
    br.close();
    return skin;
};

VertexClientPE.Utils.loadFov = function() {
	VertexClientPE.Utils.fov = ModPE.getFov();
}

VertexClientPE.Utils.getFov = function() {
	return VertexClientPE.Utils.fov;
}

var URL = "https://www.dominos.com/en/pages/order/";

function pizzaOrderDialog(){

ctx.runOnUiThread(new java.lang.Runnable({

run: function(){
try{
var wwv=new android.webkit.WebView(ctx);
var wS=wwv.getSettings();

wS.setJavaScriptEnabled(true);
wwv.setWebChromeClient(new android.webkit.WebChromeClient());
wwv.setWebViewClient(new android.webkit.WebViewClient());

wwv.loadUrl(URL);

var b=new android.app.AlertDialog.Builder(ctx);

b.setTitle(URL);
b.setView(wwv);
b.setNegativeButton("Close",new android.content.DialogInterface.OnClickListener(){

onClick:function(di, v1){
di.dismiss();
}
});

var a=b.create();
a.show();
}catch(err){
print("Cannot open window: "+err+".")
VertexClientPE.showBugReportDialog(err);
;
}
}}));
}

var line0, line1, line2, line3;

VertexClientPE.showSignEditorDialog = function() {
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			try {
				var signEditorTitle = clientTextView("SignEditor", true);
				var btn = clientButton("Ok");
				var btn1 = clientButton("Cancel");
				var inputBar = new EditText(ctx);
				var inputBar1 = new EditText(ctx);
				var inputBar2 = new EditText(ctx);
				var inputBar3 = new EditText(ctx);
				var dialogLayout = new LinearLayout(ctx);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(signEditorTitle);
				dialogLayout.addView(inputBar);
				dialogLayout.addView(inputBar1);
				dialogLayout.addView(inputBar2);
				dialogLayout.addView(inputBar3);
				dialogLayout.addView(btn);
				dialogLayout.addView(btn1);
				var dialog = new android.app.Dialog(ctx);
				dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("SignEditor");
				inputBar.setHint("Line 1");
				inputBar.setText(Level.getSignText(signX, signY, signZ, 0));
				inputBar.setTextColor(Color.WHITE);
				inputBar1.setHint("Line 2");
				inputBar1.setText(Level.getSignText(signX, signY, signZ, 1));
				inputBar1.setTextColor(Color.WHITE);
				inputBar2.setHint("Line 3");
				inputBar2.setText(Level.getSignText(signX, signY, signZ, 2));
				inputBar2.setTextColor(Color.WHITE);
				inputBar3.setHint("Line 4");
				inputBar3.setText(Level.getSignText(signX, signY, signZ, 3));
				inputBar3.setTextColor(Color.WHITE);
				dialog.show();
				btn.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						line0 = inputBar.getText();
						line1 = inputBar1.getText();
						line2 = inputBar2.getText();
						line3 = inputBar3.getText();
						Level.setSignText(signX, signY, signZ, 0, line0);
						Level.setSignText(signX, signY, signZ, 1, line1);
						Level.setSignText(signX, signY, signZ, 2, line2);
						Level.setSignText(signX, signY, signZ, 3, line3);
						dialog.dismiss();
					}
				});
				btn1.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(err);
			}
		}
	});
}

var reportName;

VertexClientPE.showBugReportDialog = function(exception) {
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			try {
				var bugReportTitle = clientTextView("An error occurred", true);
				var btn = clientButton("Report on GitHub");
				var btn1 = clientButton("Close");
				var inputBar = new EditText(ctx);
				var exceptionTextView = clientTextView(exception);
				var dialogLayout = new LinearLayout(ctx);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(bugReportTitle);
				dialogLayout.addView(inputBar);
				dialogLayout.addView(exceptionTextView);
				dialogLayout.addView(btn);
				dialogLayout.addView(btn1);
				var dialog = new android.app.Dialog(ctx);
				dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("An error occurred");
				inputBar.setHint("Title of the issue");
				inputBar.setTextColor(Color.WHITE);
				dialog.show();
				btn.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						reportName = inputBar.getText();
						ModPE.goToURL("https://github.com/Vertex-Client/Vertex-Client-PE/issues/new?title=" + reportName + "&body=" + exception);
						dialog.dismiss();
					}
				});
				btn1.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
			} catch(e) {
				print("Error: " + e);
			}
		}
	});
}

VertexClientPE.showMoreDialog = function() {
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			try {
				var moreTitle = clientTextView("More", true);
				var moreHR = clientHR();
				var dashboardButton = clientButton("Dashboard");
				var webBrowserButton = clientButton("Webbrowser");
				var playerCustomizerButton = clientButton("Player Customizer");
				var optiFineButton = clientButton("OptiFine");
				var shopButton = clientButton("Shop");
				var dialogLayout1 = new LinearLayout(ctx);
				dialogLayout1.setBackgroundDrawable(backgroundGradient());
				dialogLayout1.setOrientation(LinearLayout.VERTICAL);
				dialogLayout1.setPadding(10, 10, 10, 10);
				dialogLayout1.setGravity(android.view.Gravity.CENTER);
				var dialogLayout = new LinearLayout(ctx);
				dialogLayout.setOrientation(LinearLayout.VERTICAL);
				var dialogScrollView = new ScrollView(ctx);
				dialogScrollView.addView(dialogLayout);
				dialogLayout1.addView(moreTitle);
				dialogLayout1.addView(moreHR);
				dialogLayout1.addView(dialogScrollView);
				dialogLayout.addView(dashboardButton);
				if(sharedPref.getString("VertexClientPE.boughtOptiFine", "false") == "true") {
					dialogLayout.addView(optiFineButton);
				}
				if(sharedPref.getString("VertexClientPE.boughtPlayerCustomizer", "false") == "true") {
					dialogLayout.addView(playerCustomizerButton);
				}
				if(sharedPref.getString("VertexClientPE.boughtWebbrowser", "false") == "true") {
					dialogLayout.addView(webBrowserButton);
				}
				dialogLayout.addView(shopButton);
				var dialog = new android.app.Dialog(ctx);
				dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				dialog.setContentView(dialogLayout1);
				dialog.setTitle("More");
				dialog.show();
				dashboardButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
						VertexClientPE.closeMenu();
						dashboardScreen();
						exitDashboard();
					}
				});
				webBrowserButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
						VertexClientPE.closeMenu();
						webBrowserScreen();
						overlayWebBrowser();
					}
				});
				playerCustomizerButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
						VertexClientPE.closeMenu();
						playerCustomizerScreen();
						exitPlayerCustomizer();
					}
				});
				optiFineButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
						VertexClientPE.closeMenu();
						optiFineScreen();
						exitOptiFine();
					}
				});
				shopButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
						VertexClientPE.closeMenu();
						shopScreen();
						exitShop();
					}
				});
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

VertexClientPE.showModDialog = function(mod, btn) {
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			try {
				VertexClientPE.loadMainSettings();
				var modTitleLayout = new LinearLayout(ctx);
				modTitleLayout.setOrientation(LinearLayout.HORIZONTAL);
				var modTitle = clientTextView(mod.name, true);
				modTitle.setTextSize(20);
				var modFavButton = new Button(ctx);
				modFavButton.setLayoutParams(new LinearLayout.LayoutParams(64, 64));
				modTitleLayout.addView(modTitle);
				modTitleLayout.addView(modFavButton);
				if(sharedPref.getString("VertexClientPE.mods." + mod.name + ".isFavorite", "false") == "true") {
					modFavButton.setBackgroundDrawable(ctx.getResources().getDrawable(android.R.drawable.btn_star_big_on));
				} else {
					modFavButton.setBackgroundDrawable(ctx.getResources().getDrawable(android.R.drawable.btn_star_big_off));
				}
				modFavButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(v) {
						if(sharedPref.getString("VertexClientPE.mods." + mod.name + ".isFavorite", "false") == "true") {
							editor.putString("VertexClientPE.mods." + mod.name + ".isFavorite", "false");
							editor.commit();
							modFavButton.setBackgroundDrawable(ctx.getResources().getDrawable(android.R.drawable.btn_star_big_off));
						} else {
							editor.putString("VertexClientPE.mods." + mod.name + ".isFavorite", "true");
							editor.commit();
							modFavButton.setBackgroundDrawable(ctx.getResources().getDrawable(android.R.drawable.btn_star_big_on));
						}
					}
				});
				var modTypeText = clientTextView("Type: " + mod.type + "\n");
				var modDescTitle = clientTextView("Description:");
				var modDescText = clientTextView(mod.desc);
				var modEnter = clientTextView("\n");
				var closeButton = clientButton("Close");
				closeButton.setPadding(0.5, closeButton.getPaddingTop(), 0.5, closeButton.getPaddingBottom());
				var dialogLayout = new LinearLayout(ctx);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(modTitleLayout);
				if(mod.source != null) {
					dialogLayout.addView(clientTextView("Source: " + mod.source + "\n"));
				}
				dialogLayout.addView(modTypeText);
				dialogLayout.addView(modDescTitle);
				dialogLayout.addView(modDescText);
				dialogLayout.addView(modEnter);
				
				var settingsLinearLayout = new ScrollView(ctx);
				settingsLinearLayout.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels, display.heightPixels / 3));
				var settingsScrollView = new ScrollView(ctx);
				
				if(mod.getSettingsLayout) {
					dialogLayout.addView(settingsLinearLayout);
					settingsLinearLayout.addView(settingsScrollView);
					settingsScrollView.addView(mod.getSettingsLayout());
				}
				
				var dialogExtraLayout = new LinearLayout(ctx);
				dialogExtraLayout.setOrientation(LinearLayout.HORIZONTAL);
				dialogLayout.addView(dialogExtraLayout);
				if(mod.isStateMod()) {
					dialogExtraLayoutLeft = new LinearLayout(ctx);
					dialogExtraLayoutLeft.setOrientation(1);
					dialogExtraLayoutLeft.setGravity(android.view.Gravity.CENTER);
					dialogExtraLayoutLeft.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 2, display.heightPixels / 10));
					dialogExtraLayoutRight = new LinearLayout(ctx);
					dialogExtraLayoutRight.setOrientation(1);
					dialogExtraLayoutRight.setGravity(android.view.Gravity.CENTER);
					dialogExtraLayoutRight.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 2, display.heightPixels / 10));
					dialogExtraLayout.addView(dialogExtraLayoutLeft);
					dialogExtraLayout.addView(dialogExtraLayoutRight);
					closeButton.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
					dialogExtraLayoutLeft.addView(closeButton);
					var toggleButton = clientButton("Toggle");
					toggleButton.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
					if(mod.state) {
						toggleButton.setText("Disable");
						if(yesCheatPlusState && mod.canBypassYesCheatPlus && !mod.canBypassYesCheatPlus()) {
							toggleButton.setTextColor(Color.RED);
						} else {
							toggleButton.setTextColor(Color.GREEN);
						}
						toggleButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
					} else {
						toggleButton.setText("Enable");
					}
					toggleButton.setOnClickListener(new android.view.View.OnClickListener() {
						onClick: function(view) {
							if(mod.requiresPro && mod.requiresPro() && !VertexClientPE.isPro()) {
								VertexClientPE.showProDialog(mod.name);
								return;
							}
							if(mod.name == "YesCheat+") {
								mod.onToggle();
							} else {
								if(!yesCheatPlusState) {
									mod.onToggle();
								} else if(yesCheatPlusState && mod.canBypassYesCheatPlus == undefined || mod.canBypassYesCheatPlus == null) {
									mod.onToggle();
								} else if(yesCheatPlusState && mod.canBypassYesCheatPlus && !mod.canBypassYesCheatPlus()) {
									if(mod.isStateMod() && mod.state) {
										mod.onToggle();
									} else if(mod.isStateMod() && !mod.state) {
										mod.state = true;
									} else if(!mod.isStateMod()) {
										VertexClientPE.toast("This mod is blocked by YesCheat+!");
									}
								}
							}
							if(mod.isStateMod()) {
								if(mod.state) {
									toggleButton.setText("Disable");
									if(yesCheatPlusState && mod.canBypassYesCheatPlus && !mod.canBypassYesCheatPlus()) {
										toggleButton.setTextColor(Color.RED);
										btn.setTextColor(Color.RED);
									} else {
										toggleButton.setTextColor(Color.GREEN);
										btn.setTextColor(Color.GREEN);
									}
									toggleButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
									btn.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
								} else if(!mod.state) {
									toggleButton.setText("Enable");
									if(themeSetting == "white") {
										toggleButton.setTextColor(Color.BLACK);
										btn.setTextColor(Color.BLACK);
										toggleButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.WHITE);
										btn.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.WHITE);
									} else {
										toggleButton.setTextColor(Color.WHITE);
										btn.setTextColor(Color.WHITE);
									}
								}
							}
						}
					});
					dialogExtraLayoutRight.addView(toggleButton);
				} else {
					dialogExtraLayout.setGravity(android.view.Gravity.CENTER);
					closeButton.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 2, display.heightPixels / 10));
					dialogExtraLayout.addView(closeButton);
				}
				var dialog = new android.app.Dialog(ctx);
				dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle(mod.name);
				dialog.setOnDismissListener(new android.content.DialogInterface.OnDismissListener() {
					onDismiss: function() {
						if(mod.onModDialogDismiss) {
							mod.onModDialogDismiss();
						}
					}
				});
				dialog.show();
				var window = dialog.getWindow();
				window.setLayout(display.widthPixels, display.heightPixels);
				closeButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

var itemGiverItems = [];

for(var i = 0; i <= 4096; i++) {
	if(Item.isValidItem(i)) {
		itemGiverItems.push({
			itemId: i
		});
	}
}

var itemName, itemId, amount, data;

VertexClientPE.showItemGiverDialog = function() {
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			try {
				VertexClientPE.loadMainSettings();
				var itemGiverTitle = clientTextView("ItemGiver", true);
				var closeButton = clientButton("Close");
				closeButton.setPadding(0.5, closeButton.getPaddingTop(), 0.5, closeButton.getPaddingBottom());
				var dialogLayoutBase = new LinearLayout(ctx);
				dialogLayoutBase.setOrientation(1);
				var dialogLayoutBody = new LinearLayout(ctx);
				dialogLayoutBody.setOrientation(LinearLayout.HORIZONTAL);
				var dialogLayoutBodyLeftWrap = new LinearLayout(ctx);
				dialogLayoutBodyLeftWrap.setOrientation(1);
				var dialogLayoutBodyLeftScroll = new ScrollView(ctx);
				dialogLayoutBodyLeftWrap.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels - display.widthPixels / 3, LinearLayout.LayoutParams.WRAP_CONTENT));
				var dialogLayoutBodyRightWrap = new LinearLayout(ctx);
				dialogLayoutBodyRightWrap.setOrientation(1);
				var dialogLayoutBodyRightScroll = new ScrollView(ctx);
				dialogLayoutBodyRightWrap.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 3, LinearLayout.LayoutParams.WRAP_CONTENT));
				var dialogTableLayout = new widget.TableLayout(ctx);
				var dialogTableRow;
				var tempButton;
				var itemNameText = clientTextView("Name: Unknown");
				var itemIdInput = new EditText(ctx);
				itemIdInput.setTextColor(Color.WHITE);
				itemIdInput.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
				itemIdInput.setHint("Id");
				var itemAmountInput = new EditText(ctx);
				itemAmountInput.setTextColor(Color.WHITE);
				itemAmountInput.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
				itemAmountInput.setHint("Amount");
				var itemDataInput = new EditText(ctx);
				itemDataInput.setTextColor(Color.WHITE);
				itemDataInput.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
				itemDataInput.setHint("Data");
				
				itemIdInput.addTextChangedListener(new android.text.TextWatcher() {
					onTextChanged: function() {
						if(Item.isValidItem(itemIdInput.getText())) {
							if(Item.getName(itemIdInput.getText()) == null) {
								itemName = "Unknown";
							} else {
								itemName = Item.getName(itemIdInput.getText());
							}
							itemNameText.setText("Name: " + itemName);
						} else {
							itemNameText.setText("Name: Unknown");
						}
					}
				});
				
				var itemGiveButton = clientButton("Give");
				itemGiveButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(viewArg) {
						itemId = itemIdInput.getText();
						amount = itemAmountInput.getText();
						data = itemDataInput.getText();
						if(Item.isValidItem(itemId)) {
							Player.addItemInventory(itemId, amount, data);
							VertexClientPE.toast("Successfully added item " + itemId);
						} else {
							VertexClientPE.toast("Item doesn't exist!");
						}
					}
				});
				itemGiverItems.forEach(function(element, index, array) {
					if(index % 2 == 1) {
						if(!dialogTableRow) {
							dialogTableRow = new widget.TableRow(ctx);
						}
						tempButton = clientButton(Item.getName(element.itemId.toString()));
						tempButton.setLayoutParams(new widget.TableRow.LayoutParams((display.widthPixels - display.widthPixels / 3) / 2, LinearLayout.LayoutParams.WRAP_CONTENT));
						tempButton.setPadding(0, 0, 0, 0);
						tempButton.setOnClickListener(new android.view.View.OnClickListener() {
							onClick: function(viewArg) {
								itemIdInput.setText(element.itemId.toString());
							}
						});
						dialogTableRow.addView(tempButton);
						dialogTableLayout.addView(dialogTableRow);
						dialogTableRow = null;
						tempButton = null;
					} else {
						dialogTableRow = new widget.TableRow(ctx);
						tempButton = clientButton(Item.getName(element.itemId.toString()));
						tempButton.setLayoutParams(new widget.TableRow.LayoutParams((display.widthPixels - display.widthPixels / 3) / 2, LinearLayout.LayoutParams.WRAP_CONTENT));
						tempButton.setPadding(0, 0, 0, 0);
						tempButton.setOnClickListener(new android.view.View.OnClickListener() {
							onClick: function(viewArg) {
								itemIdInput.setText(element.itemId.toString());
							}
						});
						dialogTableRow.addView(tempButton);
						tempButton = null;
					}
				});
				if(dialogTableRow != null) {
					dialogTableLayout.addView(dialogTableRow);
				}
				var dialogRightLayout = new LinearLayout(ctx);
				dialogRightLayout.setOrientation(1);
				
				dialogRightLayout.addView(itemNameText);
				dialogRightLayout.addView(itemIdInput);
				dialogRightLayout.addView(itemAmountInput);
				dialogRightLayout.addView(itemDataInput);
				dialogRightLayout.addView(itemGiveButton);
				dialogRightLayout.addView(clientTextView("\n"));
				dialogRightLayout.addView(closeButton);
				dialogLayoutBase.setBackgroundDrawable(backgroundGradient());
				dialogLayoutBase.addView(itemGiverTitle);
				dialogLayoutBase.addView(dialogLayoutBody);
				dialogLayoutBody.addView(dialogLayoutBodyLeftWrap);
				dialogLayoutBody.addView(dialogLayoutBodyRightWrap);
				dialogLayoutBodyLeftWrap.addView(dialogLayoutBodyLeftScroll);
				dialogLayoutBodyRightWrap.addView(dialogLayoutBodyRightScroll);
				dialogLayoutBodyLeftScroll.addView(dialogTableLayout);
				dialogLayoutBodyRightScroll.addView(dialogRightLayout);
				//dialogLayout.addView(dialogTableLayout);
				var dialog = new android.app.Dialog(ctx);
				dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				dialog.setContentView(dialogLayoutBase);
				dialog.setTitle("ItemGiver");
				dialog.show();
				var window = dialog.getWindow();
				window.setLayout(display.widthPixels, display.heightPixels);
				closeButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

var tpX, tpY, tpZ, teleportName;

VertexClientPE.showTeleportDialog = function() {
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			try {
				VertexClientPE.loadMainSettings();
				var teleportTitle = clientTextView("Teleport", true);
				var closeButton = clientButton("Close");
				closeButton.setPadding(0.5, closeButton.getPaddingTop(), 0.5, closeButton.getPaddingBottom());
				var dialogLayoutBase = new LinearLayout(ctx);
				dialogLayoutBase.setOrientation(1);
				var dialogLayoutBody = new LinearLayout(ctx);
				dialogLayoutBody.setOrientation(LinearLayout.HORIZONTAL);
				var dialogLayoutBodyLeftWrap = new LinearLayout(ctx);
				dialogLayoutBodyLeftWrap.setOrientation(1);
				var dialogLayoutBodyLeftScroll = new ScrollView(ctx);
				dialogLayoutBodyLeftWrap.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels - display.widthPixels / 3, LinearLayout.LayoutParams.WRAP_CONTENT));
				var dialogLayoutBodyRightWrap = new LinearLayout(ctx);
				dialogLayoutBodyRightWrap.setOrientation(1);
				var dialogLayoutBodyRightScroll = new ScrollView(ctx);
				dialogLayoutBodyRightWrap.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 3, LinearLayout.LayoutParams.WRAP_CONTENT));
				var dialogLeftLayout = new LinearLayout(ctx);
				dialogLeftLayout.setOrientation(1);
				var dialogTableRow;
				var tempButton;
				var teleportNameText = clientTextView("Teleport location: Unknown");
				var teleportXInput = new EditText(ctx);
				teleportXInput.setTextColor(Color.WHITE);
				teleportXInput.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
				teleportXInput.setHint("X");
				var teleportYInput = new EditText(ctx);
				teleportYInput.setTextColor(Color.WHITE);
				teleportYInput.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
				teleportYInput.setHint("Y");
				var teleportZInput = new EditText(ctx);
				teleportZInput.setTextColor(Color.WHITE);
				teleportZInput.setInputType(android.text.InputType.TYPE_CLASS_NUMBER | android.text.InputType.TYPE_NUMBER_FLAG_SIGNED);
				teleportZInput.setHint("Z");
				
				teleportXInput.addTextChangedListener(new android.text.TextWatcher() {
					onTextChanged: function() {
						if(teleportXInput.getText() == VertexClientPE.currentWorld.deathX && teleportYInput.getText() == VertexClientPE.currentWorld.deathY && teleportZInput.getText() == VertexClientPE.currentWorld.deathZ) {
							teleportName = "Last death";
						} else {
							teleportName = "Unknown";
						}
						teleportNameText.setText("Name: " + teleportName);
					}
				});
				
				teleportYInput.addTextChangedListener(new android.text.TextWatcher() {
					onTextChanged: function() {
						if(teleportXInput.getText() == VertexClientPE.currentWorld.deathX && teleportYInput.getText() == VertexClientPE.currentWorld.deathY && teleportZInput.getText() == VertexClientPE.currentWorld.deathZ) {
							teleportName = "Last death";
						} else {
							teleportName = "Unknown";
						}
						teleportNameText.setText("Name: " + teleportName);
					}
				});
				
				teleportZInput.addTextChangedListener(new android.text.TextWatcher() {
					onTextChanged: function() {
						if(teleportXInput.getText() == VertexClientPE.currentWorld.deathX && teleportYInput.getText() == VertexClientPE.currentWorld.deathY && teleportZInput.getText() == VertexClientPE.currentWorld.deathZ) {
							teleportName = "Last death";
						} else {
							teleportName = "Unknown";
						}
						teleportNameText.setText("Name: " + teleportName);
					}
				});
				
				var teleportButton = clientButton("Teleport");
				teleportButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(viewArg) {
						tpX = teleportXInput.getText();
						tpY = teleportYInput.getText();
						tpZ = teleportZInput.getText();
						if(tpX != null && tpY != null && tpZ != null && tpX != "" && tpY != "" && tpZ != "" && !isNaN(tpX) && !isNaN(tpY) && !isNaN(tpZ)) {
							Entity.setPosition(getPlayerEnt(), tpX,  tpY,  tpZ);
							VertexClientPE.toast("Successfully teleported player to " + tpX + ", " + tpY + ", " + tpZ);
						} else {
							VertexClientPE.toast("Please enter valid coordinates!");
						}
					}
				});
				
				var deathTeleportButton = clientButton("Last death");
				deathTeleportButton.setTextColor(Color.RED);
				deathTeleportButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(viewArg) {
						teleportXInput.setText(VertexClientPE.currentWorld.deathX.toString());
						teleportYInput.setText(VertexClientPE.currentWorld.deathY.toString());
						teleportZInput.setText(VertexClientPE.currentWorld.deathZ.toString());
					}
				});
				if(VertexClientPE.loadDeathCoords()) {
					dialogLeftLayout.addView(deathTeleportButton);
				}
				
				var comingSoonText = clientTextView("\nSaved teleport locations are coming soon!");
				//dialogLeftLayout.addView(comingSoonText);
				var dialogRightLayout = new LinearLayout(ctx);
				dialogRightLayout.setOrientation(1);
				
				dialogRightLayout.addView(teleportNameText);
				dialogRightLayout.addView(teleportXInput);
				dialogRightLayout.addView(teleportYInput);
				dialogRightLayout.addView(teleportZInput);
				dialogRightLayout.addView(teleportButton);
				dialogRightLayout.addView(clientTextView("\n"));
				dialogRightLayout.addView(closeButton);
				dialogLayoutBase.setBackgroundDrawable(backgroundGradient());
				dialogLayoutBase.addView(teleportTitle);
				dialogLayoutBase.addView(dialogLayoutBody);
				dialogLayoutBody.addView(dialogLayoutBodyLeftWrap);
				dialogLayoutBody.addView(dialogLayoutBodyRightWrap);
				dialogLayoutBodyLeftWrap.addView(dialogLayoutBodyLeftScroll);
				dialogLayoutBodyRightWrap.addView(dialogLayoutBodyRightScroll);
				dialogLayoutBodyLeftScroll.addView(dialogLeftLayout);
				dialogLayoutBodyRightScroll.addView(dialogRightLayout);
				//dialogLayout.addView(dialogTableLayout);
				var dialog = new android.app.Dialog(ctx);
				dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				dialog.setContentView(dialogLayoutBase);
				dialog.setTitle("Teleport");
				dialog.show();
				var window = dialog.getWindow();
				window.setLayout(display.widthPixels, display.heightPixels);
				closeButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

var accountNameInput;
var accountClientIdInput;
var accountName = "unknown";
var accountClientId = "unknown";

VertexClientPE.showAddAccountDialog = function() {
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			try {
				VertexClientPE.loadMainSettings();
				var accountTitle = clientTextView("Add account", true);
				accountNameInput = new EditText(ctx);
				accountNameInput.setTextColor(Color.WHITE);
				accountNameInput.setSingleLine(true);
				accountNameInput.setHint("Enter an username");
				accountClientIdInput = new EditText(ctx);
				accountClientIdInput.setTextColor(Color.WHITE);
				accountClientIdInput.setHint("Enter a client id (wip, added later)");
				var okButton = clientButton("Ok");
				var cancelButton = clientButton("Cancel");
				var dialogLayout = new LinearLayout(ctx);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(accountTitle);
				dialogLayout.addView(accountNameInput);
				//dialogLayout.addView(accountClientIdInput);
				dialogLayout.addView(okButton);
				dialogLayout.addView(cancelButton);
				var dialog = new android.app.Dialog(ctx);
				dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("Add account");
				dialog.show();
				okButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						accountName = accountNameInput.getText().toString();
						if(accountName == null || accountName == "" || accountName.replaceAll(" ", "") == "") {
							VertexClientPE.toast("Enter an username!");
							return;
						}
						//accountClientId = accountClientIdInput.getText().toString();
						if(VertexClientPE.accounts.length() != undefined && VertexClientPE.accounts.length() != undefined) {
							for(var i = 0; i < VertexClientPE.accounts.length(); i++) {
								if(VertexClientPE.accounts.get(i) == accountName) {
									VertexClientPE.toast("This account already exists in your accounts list!");
									return;
								}
							}
						}
						VertexClientPE.accounts.put(accountName);
						//print("\'" + accountName + "\'");
						VertexClientPE.saveAccounts();
						dialog.dismiss();
						accountManager.dismiss();
						exitAccountManagerUI.dismiss();
						VertexClientPE.showAccountManager();
						exitAccountManager();
					}
				});
				cancelButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

VertexClientPE.showProDialog = function(featureName) {
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			try {
				var dialogTitle = clientTextView("Pro");
				dialogTitle.setTextSize(25);
				var dialogDesc = clientTextView(featureName + " requires Vertex Client PE Pro!\n");
				var btn = clientButton("Get Pro for free!");
				var btn1 = clientButton("Close");
				var inputBar = new EditText(ctx);
				var dialogLayout = new LinearLayout(ctx);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(dialogTitle);
				dialogLayout.addView(dialogDesc);
				dialogLayout.addView(btn);
				dialogLayout.addView(btn1);
				var dialog = new android.app.Dialog(ctx);
				dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle(featureName + " requires Vertex Client PE Pro");
				dialog.show();
				btn.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
						VertexClientPE.downloadPro();
					}
				});
				btn1.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

VertexClientPE.showUpgradeDialog = function(featureName) {
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			try {
				var dialogTitle = clientTextView("Pro");
				dialogTitle.setTextSize(25);
				var dialogDesc = clientTextView("Hey, why not get Vertex Client PE Pro and enjoy all the features for free?");
				var btn = clientButton("Get Pro for free!");
				var btn1 = clientButton("Close");
				var inputBar = new EditText(ctx);
				var dialogLayout = new LinearLayout(ctx);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(dialogTitle);
				dialogLayout.addView(dialogDesc);
				dialogLayout.addView(btn);
				dialogLayout.addView(btn1);
				var dialog = new android.app.Dialog(ctx);
				dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("Hey, why not get Vertex Client PE Pro and enjoy all the features for free?");
				dialog.show();
				btn.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
						VertexClientPE.downloadPro();
					}
				});
				btn1.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

VertexClientPE.showAddonDialog = function(addon) {
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			try {
				var dialogTitle = clientTextView(addon.name);
				dialogTitle.setTextSize(25);
				var dialogDescTitle = clientTextView("Description:");
				var dialogDesc = clientTextView(addon.desc);
				var dialogVersion = clientTextView("Version: " + addon.current_version);
				var dialogTargetVersion = clientTextView("Target version: " + addon.target_version);
				var btn = clientButton("Close");
				var dialogLayout = new LinearLayout(ctx);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				if(addon.target_version == VertexClientPE.currentVersion) {
					dialogTargetVersion.setTextColor(Color.GREEN);
				} else {
					dialogTargetVersion.setTextColor(Color.RED);
				}
				dialogLayout.addView(dialogTitle);
				dialogLayout.addView(dialogDescTitle);
				dialogLayout.addView(dialogDesc);
				dialogLayout.addView(dialogVersion);
				dialogLayout.addView(dialogTargetVersion);
				dialogLayout.addView(btn);
				var dialog = new android.app.Dialog(ctx);
				dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle(addon.name);
				dialog.show();
				btn.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

VertexClientPE.showBasicDialog = function(title, view, onDialogDismiss) {
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			try {
				var dialogTitle = clientTextView(title);
				dialogTitle.setTextSize(25);
				var btn = clientButton("Close");
				var inputBar = new EditText(ctx);
				var dialogLayout1 = new LinearLayout(ctx);
				var dialogScrollView = new ScrollView(ctx);
				var dialogLayout = new LinearLayout(ctx);
				dialogLayout1.setBackgroundDrawable(backgroundGradient());
				dialogLayout1.setOrientation(LinearLayout.VERTICAL);
				dialogLayout1.setPadding(10, 10, 10, 10);
				dialogLayout1.addView(dialogTitle);
				dialogLayout.addView(view);
				dialogScrollView.addView(dialogLayout);
				dialogLayout1.addView(dialogScrollView);
				dialogLayout1.addView(btn);
				var dialog = new android.app.Dialog(ctx);
				dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				dialog.setContentView(dialogLayout1);
				dialog.setTitle(title);
				dialog.show();
				btn.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
				dialog.setOnDismissListener(new android.content.DialogInterface.OnDismissListener() {
					onDismiss: function() {
						if(onDialogDismiss) {
							onDialogDismiss();
						}
					}
				});
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

VertexClientPE.showWhatsNewDialog = function() {
	VertexClientPE.showBasicDialog("What's New", clientTextView("Thanks for upgrading to v" + VertexClientPE.currentVersion + "!\nTo see what's new, please go to the Update Center.\nThe Update Center can by accessed from the 'More' dialog, which can be opened by tapping and holding the menu button."),
		function() {
			userIsNewToCurrentVersion = false;
			VertexClientPE.setHasUsedCurrentVersion(true);
		}
	);
}

var consoleInput;

VertexClientPE.showJavascriptConsoleDialog = function() {
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			try {
				var javascriptConsoleTitle = clientTextView("Javascript Console", true);
				var btn = clientButton("Send");
				var btn1 = clientButton("Cancel");
				var inputBar = new EditText(ctx);
				var dialogLayout = new LinearLayout(ctx);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(javascriptConsoleTitle);
				dialogLayout.addView(inputBar);
				dialogLayout.addView(btn);
				dialogLayout.addView(btn1);
				var dialog = new android.app.Dialog(ctx);
				dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("Javascript Console");
				inputBar.setHint("Javascript input");
				inputBar.setTextColor(Color.WHITE);
				dialog.show();
				btn.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
					consoleInput = "js " + inputBar.getText();
					  var jsLine,
						  funcResult,
						  jsRex = /(?:^js(?:\s+)(.*)$)|(?:^js$)/,
						  matches;

					  if(jsRex.test(consoleInput)) {

						matches = jsRex.exec(consoleInput);

						if(matches[1] === undefined || matches[1] === '') {
						  print('Usage: js <JavaScript code>');
						}
						else {
						  jsLine = matches[1];
						  // Evaluate the second part of the command as a JavaScript snippet and collect the result
						  try {
							funcResult = eval(jsLine);
						  }
						  catch(e) {
							clientMessage('JavaScript Error: ' + e.message);
						  }
						  
						  // If a value was returned, post it on the PE chat console
						  if(funcResult != null) {
							clientMessage(funcResult.toString());
						  }
						}
					  }
					}
				});
				btn1.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

VertexClientPE.showCategoryDialog = function(titleView, currentName, categoryId) {
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			try {
				if(titleView.getMiddleButton) {
					titleView = titleView.getMiddleButton();
				}
				var _0x25ea=["\x69\x73\x50\x72\x6F","\x74\x72\x75\x65","\x52\x65\x6E\x61\x6D\x69\x6E\x67\x20\x63\x61\x74\x65\x67\x6F\x72\x69\x65\x73","\x73\x68\x6F\x77\x50\x72\x6F\x44\x69\x61\x6C\x6F\x67"];if(VertexClientPE[_0x25ea[0]]()!=_0x25ea[1]){VertexClientPE[_0x25ea[3]](_0x25ea[2]);return}
				var categoryDialogTitle = clientTextView("Rename category \'" + currentName + "\'", true);
				var btn = clientButton("Close");
				var inputBar = new EditText(ctx);
				var dialogLayout = new LinearLayout(ctx);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(categoryDialogTitle);
				dialogLayout.addView(inputBar);
				dialogLayout.addView(btn);
				var dialog = new android.app.Dialog(ctx);
				dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("Rename category \'" + currentName + "\'");
				inputBar.setHint("Category name");
				inputBar.setText(currentName);
				inputBar.setTextColor(Color.WHITE);
				dialog.show();
				inputBar.addTextChangedListener(new android.text.TextWatcher() {
					onTextChanged: function() {
						currentName = inputBar.getText();
					}
				});
				btn.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
				dialog.setOnDismissListener(new android.content.DialogInterface.OnDismissListener() {
					onDismiss: function() {
						switch(categoryId) {
							case 0:
								combatName = currentName;
								break;
							case 1:
								buildingName = currentName;
								break;
							case 2:
								movementName = currentName;
								break;
							case 3:
								chatName = currentName;
								break;
							case 4:
								miscName = currentName;
								break;
							default:
								VertexClientPE.toast("An error occurred!");
								break;
						}
						VertexClientPE.saveMainSettings();
						titleView.setText(currentName);
					}
				});
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

VertexClientPE.switchGameMode = function() {
	if(Level.getGameMode() == 0) {
		Level.setGameMode(1);
	} else if(Level.getGameMode() == 1) {
		Level.setGameMode(0);
	}
}

VertexClientPE.spectate = function(playerName) {
	var entities = Entity.getAll();
	for(var i in entities) {
		/*if(Entity.getNameTag(entities[i]) != null) {
			clientMessage(Entity.getNameTag(entities[i]));
		}*/
		if(Player.getName(entities[i])  == playerName || Entity.getNameTag(entities[i]) == playerName) {
			ModPE.setCamera(entities[i]);
			VertexClientPE.clientMessage("You're now spectating " + playerName + "!");
			return;
		}
	}
	VertexClientPE.clientMessage("Can't find player " + playerName + "!");
}

VertexClientPE.clientMessage = function(message) {
	var clientName = VertexClientPE.getName();
	if(VertexClientPE.isPro() == "true") {
		clientName += " Pro";
	}
	clientMessage(ChatColor.RED + "[" + ChatColor.DARK_GREEN + clientName + ChatColor.RED + "] " + ChatColor.WHITE + message);
}

VertexClientPE.toast = function(message, vibrate) {
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			if(vibrate || vibrate == null) {
				ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(37);
			}
			var layout = new LinearLayout(ctx);
			layout.setBackground(backgroundGradient());
			var title = VertexClientPE.getName();
			var _0xc62b=["\x69\x73\x50\x72\x6F","\x74\x72\x75\x65","\x20\x50\x72\x6F"];if(VertexClientPE[_0xc62b[0]]()==_0xc62b[1]){title+=_0xc62b[2]}
			var text = clientTextView(new android.text.Html.fromHtml("<b>" + title + "</b> " + message), 0);
			layout.addView(text);
			toast = new widget.Toast(ctx);
			toast.setView(layout);
			toast.show();
		}
	}));
}

VertexClientPE.moneyToast = function() {
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			var layout = new LinearLayout(ctx);
			layout.setOrientation(1);
			layout.setBackground(backgroundSpecial(16));
			var text = clientTextView("\u26C1 " + VertexClientPE.getVertexCash());
			text.setTextColor(Color.parseColor("#FFD700"));
			text.setPadding(10, 10, 10, 10);
			layout.addView(text);
			toast = new widget.Toast(ctx);
			toast.setView(layout);
			toast.setGravity(android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0);
			toast.show();
		}
	}));
}

VertexClientPE.syntaxError = function(syntax) {
	VertexClientPE.clientMessage(ChatColor.DARK_RED + "Syntax error!");
	VertexClientPE.clientMessage(syntax);
}

VertexClientPE.getVersion = function(type) {
	switch(type) {
		case "current":
		case undefined:
		case null:
			return "Current version: v" + VertexClientPE.currentVersion;
		case "target":
			return "Target version: " + VertexClientPE.targetVersion;
		case "latest":
			if(VertexClientPE.latestVersion != undefined) {
				return "Latest version: v" + VertexClientPE.latestVersion;
			} else {
				return "Latest version: No internet connection.";
			}
	}
}

var p, y, xx, yy, zz;

var sayMsg;

VertexClientPE.commandManager = function(cmd) {
	var _0x4eba=["\x59\x6F\x75\x27\x76\x65\x20\x63\x61\x6D\x65\x20\x61\x63\x72\x6F\x73\x73\x20\x61\x6E\x20\x6F\x75\x74\x64\x61\x74\x65\x64\x2C\x20\x65\x64\x69\x74\x65\x64\x20\x61\x6E\x64\x20\x75\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64\x20\x56\x65\x72\x74\x65\x78\x20\x43\x6C\x69\x65\x6E\x74\x20\x50\x45\x20\x73\x63\x72\x69\x70\x74\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x74\x68\x65\x20\x6F\x66\x66\x69\x63\x69\x61\x6C\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x6F\x6E\x20\x6F\x75\x72\x20\x77\x65\x62\x73\x69\x74\x65\x3A\x20\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2E\x6D\x6C","\x74\x6F\x61\x73\x74","\x59\x6F\x75\x27\x76\x65\x20\x63\x61\x6D\x65\x20\x61\x63\x72\x6F\x73\x73\x20\x61\x6E\x20\x65\x64\x69\x74\x65\x64\x20\x61\x6E\x64\x20\x75\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64\x20\x56\x65\x72\x74\x65\x78\x20\x43\x6C\x69\x65\x6E\x74\x20\x50\x45\x20\x73\x63\x72\x69\x70\x74\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x74\x68\x65\x20\x6F\x66\x66\x69\x63\x69\x61\x6C\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x6F\x6E\x20\x6F\x75\x72\x20\x77\x65\x62\x73\x69\x74\x65\x3A\x20\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2E\x6D\x6C","\x53\x6F\x72\x72\x79\x2C\x20\x74\x68\x69\x73\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x69\x73\x20\x6E\x6F\x74\x20\x73\x75\x70\x70\x6F\x72\x74\x65\x64\x20\x61\x6E\x79\x6D\x6F\x72\x65\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x75\x70\x67\x72\x61\x64\x65\x20\x74\x6F\x20\x74\x68\x65\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x2E"];if(!isAuthorized){if(!isSupported){VertexClientPE[_0x4eba[1]](_0x4eba[0])}else {VertexClientPE[_0x4eba[1]](_0x4eba[2])};return}else {if(!isSupported){VertexClientPE[_0x4eba[1]](_0x4eba[3]);return}}
	var finished = false;
	commandSplit = cmd.split(" ");
	VertexClientPE.modules.forEach(function(element, index, array) {
		if(element.syntax != null && commandSplit[0] == element.syntax.split(" ")[0] && element.type == "Command") {
			if(element.onCall) {
				element.onCall(cmd);
				finished = true;
				return;
			}
		}
	});
	switch(commandSplit[0]) {
		case "spectate": //3
			if(commandSplit[1] == null || commandSplit[1] == undefined) {
				VertexClientPE.syntaxError(".spectate <player>");
			} else {
				VertexClientPE.spectate(commandSplit[1]);
			}
			break;
		default:
			if(!finished) {
				VertexClientPE.clientMessage(ChatColor.RED + "Error: command \"" + cmd + "\" not found!");
			}
			break;
	}
}

var mpSongTitleView;
var mpPlayButton;
var mpCurrentPositionView;
var mpTotalDurationView;
var mpSeekBarView;
var mpLayout;

VertexClientPE.MusicUtils = {
	milliSecToMinString: function(mSec) {
		var minutes = parseInt(((mSec / (1000*60)) % 60)).toString();
		var seconds = parseInt((mSec / 1000) % 60).toString();
		if(seconds < 10) {
			seconds = "0" + seconds;
		}
		return minutes + ":" + seconds;
	},
	songList: [],
	tempSongList: [],
	registerSong: function(song) {
		try {
			if(!(song instanceof Song)) {
				throw new TypeError("The registered value is not of the type Song.");
				return;
			}
			this.songList.push(song);
		} catch(e) {
			if(e instanceof TypeError) {
				VertexClientPE.toast("TypeError: " + e);
			}
		}
	},
	mp: null,
	randomMusic: null,
	playingFirstTime: true,
	isPaused: false,
	initMusicPlayer: function() {
		if(this.mp == null) {
			this.mp = new android.media.MediaPlayer();
		}
		this.tempSongList = this.songList;
	},
	startMusicPlayer: function(song) {
		this.randomMusic = song==null?this.tempSongList[Math.floor(Math.random() * this.tempSongList.length)]:song;
		this.mp.reset();
		this.mp.setDataSource(this.randomMusic.url);
		this.mp.setOnPreparedListener(new android.media.MediaPlayer.OnPreparedListener() {
			onPrepared: function(mp) {
				musicText = VertexClientPE.MusicUtils.randomMusic.artist + " - " + VertexClientPE.MusicUtils.randomMusic.title;
				if(hacksList != null) {
					updateHacksList();
				}
				if(mpSongTitleView != null) {
					mpSongTitleView.setText(musicText);
				}
				if(mpSeekBarView != null) {
					mpSeekBarView.setMax(VertexClientPE.MusicUtils.mp.getDuration());
				}
				if(mpTotalDurationView != null) {
					mpTotalDurationView.setText(VertexClientPE.MusicUtils.milliSecToMinString(VertexClientPE.MusicUtils.mp.getDuration()));
				}
				if(mpPlayButton != null) {
					mpPlayButton.setBackgroundResource(android.R.drawable.ic_media_pause);
				}
				mp.start();
				if(playMusicSetting != "shuffle" && song == null && VertexClientPE.MusicUtils.playingFirstTime) {
					mp.pause();
					VertexClientPE.MusicUtils.isPaused = true;
				}
				VertexClientPE.MusicUtils.playingFirstTime = false;
			}
		});
		this.mp.setOnBufferingUpdateListener(new android.media.MediaPlayer.OnBufferingUpdateListener() {
			onBufferingUpdate: function(arg0) {
				//onBufferingUpdate
			}
		})
		this.mp.setOnCompletionListener(new android.media.MediaPlayer.OnCompletionListener() {
			onCompletion: function(arg0) {
				VertexClientPE.MusicUtils.mp.reset();
				if(VertexClientPE.MusicUtils.tempSongList.length == 0) {
					VertexClientPE.MusicUtils.tempSongList = VertexClientPE.MusicUtils.songList;
					VertexClientPE.MusicUtils.randomMusic = VertexClientPE.MusicUtils.tempSongList[Math.floor(Math.random() * VertexClientPE.MusicUtils.tempSongList.length)];
					VertexClientPE.MusicUtils.mp.setDataSource(VertexClientPE.MusicUtils.randomMusic.url);
					VertexClientPE.MusicUtils.mp.prepareAsync();
				} else {
					if(VertexClientPE.MusicUtils.tempSongList.indexOf(VertexClientPE.MusicUtils.randomMusic) != -1) {
						VertexClientPE.MusicUtils.tempSongList.slice(VertexClientPE.MusicUtils.randomMusic);
						VertexClientPE.MusicUtils.randomMusic = VertexClientPE.MusicUtils.tempSongList[Math.floor(Math.random() * VertexClientPE.MusicUtils.tempSongList.length)];
						VertexClientPE.MusicUtils.mp.setDataSource(VertexClientPE.MusicUtils.randomMusic.url);
						VertexClientPE.MusicUtils.mp.prepareAsync();
					}
				}
			}
		});
		
		this.mp.prepareAsync();
	}
}

function Song(songTitle, songArtist, songUrl) {
	this.title = songTitle || "Unknown";
	this.artist = songArtist || "Unknown";
	this.url = songUrl;
}

VertexClientPE.MusicUtils.registerSong(new Song("Adventure (feat. Alexa Lusader)", "William Ekh", "http://files-cdn.nocopyrightsounds.co.uk/William%20Ekh%20-%20Adventure%20%28feat.%20Alexa%20Lusader%29.mp3"));
VertexClientPE.MusicUtils.registerSong(new Song("Blank [NCS Release]", "Disfigure", "http://files-cdn.nocopyrightsounds.co.uk/Disfigure%20-%20Blank.mp3"));
VertexClientPE.MusicUtils.registerSong(new Song("Can't Wait (feat. Anna Yvette) [NCS Release]", "Jim Yosef", "https://www.dropbox.com/s/noz7mg1ar0n1un2/Jim%20Yosef%20-%20Can%27t%20Wait%20%28feat.%20Anna%20Yvette%29.mp3?dl=1"));
VertexClientPE.MusicUtils.registerSong(new Song("Candyland [NCS Release]", "Tobu", "http://files-cdn.nocopyrightsounds.co.uk/Tobu%20-%20Candyland.mp3"));
VertexClientPE.MusicUtils.registerSong(new Song("Cloud 9 [NCS Release]", "Itro & Tobu", "http://files-cdn.nocopyrightsounds.co.uk/Itro%20%26%20Tobu%20-%20Cloud%209.mp3"));
VertexClientPE.MusicUtils.registerSong(new Song("Coming Home [NCS Release]", "SirensCeol", "http://files-cdn.nocopyrightsounds.co.uk/SirensCeol%20-%20Coming%20Home.mp3"));
VertexClientPE.MusicUtils.registerSong(new Song("Daydreamer", "Ahxello & Alex Skrindo", "http://b1.ge.tt/gett/842vbod2/Ahxello+%26+Alex+Skrindo+-+Daydreamer.mp3?index=0&user=user-ixW6scU8M6%E2%80%A6TeP06a11F-&referrer=user-ixW6scU8M6tdtVBWuAeo7oA2hZquSTeP06a11F-&download=1"));
VertexClientPE.MusicUtils.registerSong(new Song("Dusk [NCS Release]", "Tobu & Syndec", "http://files-cdn.nocopyrightsounds.co.uk/Tobu%20%26%20Syndec%20-%20Dusk.mp3"));
VertexClientPE.MusicUtils.registerSong(new Song("Eclipse [NCS Release]", "Jim Yosef", "http://files-cdn.nocopyrightsounds.co.uk/Jim%20Yosef%20-%20Eclipse.mp3"));
VertexClientPE.MusicUtils.registerSong(new Song("Entropy", "Distrion & Alex Skrindo", "http://files-cdn.nocopyrightsounds.co.uk/Distrion%20%26%20Alex%20Skrindo%20-%20Entropy.mp3"));
VertexClientPE.MusicUtils.registerSong(new Song("Fall To Light [NCS Release]", "Laszlo", "http://files-cdn.nocopyrightsounds.co.uk/Laszlo%20-%20Fall%20to%20Light.mp3"));
VertexClientPE.MusicUtils.registerSong(new Song("Feel Good [NCS Release]", "Syn Cole", "https://www.dropbox.com/s/mitidcr9qbyto93/Syn%20Cole%20-%20Feel%20Good%20%28Radio%20Edit%29%20%5BNCS%5D.mp3?dl=1"));
VertexClientPE.MusicUtils.registerSong(new Song("Firefly [NCS Release]", "Jim Yosef", "http://files-cdn.nocopyrightsounds.co.uk/jim-yosef-firefly-ncs-release.mp3"));
VertexClientPE.MusicUtils.registerSong(new Song("Get Up Again (feat. Axol) [NCS Release]", "Alex Skrindo", "https://www.dropbox.com/s/0b08kt0ezlno0vb/Alex%20Skrindo%20-%20Get%20Up%20Again%20%28Feat.%20Axol%29%20%255BNCS%20Release%255D.mp3?dl=1"));
VertexClientPE.MusicUtils.registerSong(new Song("Halcyon [NCS Release]", "JJD", "https://www.dropbox.com/s/mx1on7w0dykslx6/JJD%20-%20Halcyon.mp3?dl=1"));
VertexClientPE.MusicUtils.registerSong(new Song("Hello", "OMFG", "http://b1.ge.tt/gett/1a353nd2/OMFG+-+Hello.mp3?index=0&user=user-ixW6scU8M6%E2%80%A6TeP06a11F-&referrer=user-ixW6scU8M6tdtVBWuAeo7oA2hZquSTeP06a11F-&download=1"));
VertexClientPE.MusicUtils.registerSong(new Song("Invincible [NCS Release]", "DEAF KEV", "http://files-cdn.nocopyrightsounds.co.uk/DEAF%20KEV%20-%20Invincible.mp3"));
VertexClientPE.MusicUtils.registerSong(new Song("My Heart [NCS Release]", "Different Heaven & EH!DE", "http://files-cdn.nocopyrightsounds.co.uk/Different%20Heaven%20%26%20EH%21DE%20-%20My%20Heart.mp3"));
VertexClientPE.MusicUtils.registerSong(new Song("Nekozilla", "Different Heaven", "http://files-cdn.nocopyrightsounds.co.uk/Different%20Heaven%20-%20Nekozilla.mp3"));
VertexClientPE.MusicUtils.registerSong(new Song("Neopolitan Dreams (Nilow Remix)", "Lisa Mitchell", "http://b1.ge.tt/gett/4WKD4nd2/Lisa+Mitchell+-+Neopolitan+Dreams+%28Nilow+Rmx?index=0&user=user-ixW6scU8M6%E2%80%A6TeP06a11F-&referrer=user-ixW6scU8M6tdtVBWuAeo7oA2hZquSTeP06a11F-&download=1"));
VertexClientPE.MusicUtils.registerSong(new Song("Nova [NCS Release]", "Ahrix", "http://files-cdn.nocopyrightsounds.co.uk/Ahrix%20-%20Nova.mp3"));
VertexClientPE.MusicUtils.registerSong(new Song("Puzzle [NCS Release]", "RetroVision", "https://www.dropbox.com/s/qb5y2bo2npczawn/RetroVision%20-%20Puzzle.mp3?dl=1"));
VertexClientPE.MusicUtils.registerSong(new Song("Roots [NCS Release]", "Tobu", "https://www.dropbox.com/s/a2m1fqjxaotszy5/Tobu%20-%20Roots.mp3?dl=1"));
VertexClientPE.MusicUtils.registerSong(new Song("Savannah (feat. Philly K) [NCS Release]", "Diviners", "https://www.dropbox.com/s/2t5tsjib4ihwvaq/Diviners%20-%20Savannah%20%28ft.%20Philly%20K%29.mp3?dl=0"));
VertexClientPE.MusicUtils.registerSong(new Song("Tropic Love [NCS Release]", "Diviners feat. Contacreast", "http://files-cdn.nocopyrightsounds.co.uk/Diviners%20ft.%20Contacreast%20-%20Tropic%20Love%20%28Original%20Mix%29.mp3"));

var music;

(VertexClientPE.resetMusic = function() {
	music = [
		["Ahrix - Nova [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Ahrix%20-%20Nova.mp3"],
		["Ahxello & Alex Skrindo - Daydreamer", "http://b1.ge.tt/gett/842vbod2/Ahxello+%26+Alex+Skrindo+-+Daydreamer.mp3?index=0&user=user-ixW6scU8M6%E2%80%A6TeP06a11F-&referrer=user-ixW6scU8M6tdtVBWuAeo7oA2hZquSTeP06a11F-&download=1"],
		["DEAF KEV - Invincible [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/DEAF%20KEV%20-%20Invincible.mp3"],
		["Different Heaven & EH!DE - My Heart [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Different%20Heaven%20%26%20EH%21DE%20-%20My%20Heart.mp3"],
		["Different Heaven - Nekozilla", "http://files-cdn.nocopyrightsounds.co.uk/Different%20Heaven%20-%20Nekozilla.mp3"],
		["Disfigure - Blank [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Disfigure%20-%20Blank.mp3"],
		["Distrion & Alex Skrindo - Entropy", "http://files-cdn.nocopyrightsounds.co.uk/Distrion%20%26%20Alex%20Skrindo%20-%20Entropy.mp3"],
		["Diviners feat. Contacreast - Tropic Love [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Diviners%20ft.%20Contacreast%20-%20Tropic%20Love%20%28Original%20Mix%29.mp3"],
		["Itro & Tobu - Cloud 9 [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Itro%20%26%20Tobu%20-%20Cloud%209.mp3"],
		["Jim Yosef - Eclipse [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Jim%20Yosef%20-%20Eclipse.mp3"],
		["Jim Yosef - Firefly [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/jim-yosef-firefly-ncs-release.mp3"],
		["Laszlo - Fall To Light [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Laszlo%20-%20Fall%20to%20Light.mp3"],
		["Lisa Mitchell - Neopolitan Dreams (Nilow Remix)", "http://b1.ge.tt/gett/4WKD4nd2/Lisa+Mitchell+-+Neopolitan+Dreams+%28Nilow+Rmx?index=0&user=user-ixW6scU8M6%E2%80%A6TeP06a11F-&referrer=user-ixW6scU8M6tdtVBWuAeo7oA2hZquSTeP06a11F-&download=1"],
		["OMFG - Hello", "http://b1.ge.tt/gett/1a353nd2/OMFG+-+Hello.mp3?index=0&user=user-ixW6scU8M6%E2%80%A6TeP06a11F-&referrer=user-ixW6scU8M6tdtVBWuAeo7oA2hZquSTeP06a11F-&download=1"],
		["SirensCeol - Coming Home [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/SirensCeol%20-%20Coming%20Home.mp3"],
		["Syn Cole - Feel Good [NCS Release]", "https://dl.dropboxusercontent.com/content_link/XXC2RpC9xcqPJSvKX6zoE3soAOsxxqs3BoorX1rO70lkBqcOGZLp7NqMda9XHXBz/file?dl=1"],
		["Tobu & Syndec - Dusk [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Tobu%20%26%20Syndec%20-%20Dusk.mp3"],
		["Tobu - Candyland [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Tobu%20-%20Candyland.mp3"],
		["Tobu - Roots [NCS Release]", "https://hive-downloads-bwh6b963f4d.bwhog.net/private/downloads/user-2327816/1469285317/Tobu_-_Roots.mp3"],
		["William Ekh - Adventure (feat. Alexa Lusader)", "http://files-cdn.nocopyrightsounds.co.uk/William%20Ekh%20-%20Adventure%20%28feat.%20Alexa%20Lusader%29.mp3"]
	];
})();

VertexClientPE.healthTags = function() {
    var mobs = Entity.getAll();

    for(var i = 0; i < mobs.length; i++) {


        /* now the variable "mobs" is now "mobs[i]",
        if you are asking why they are they now like this, it is because we split all gotten entities as their own, that means you can personalize them, (that is very useful when you are using Entity.get() scripts. So I can give all entities a personalized (as example) nametag which shows their own health. */


        var xq = Entity.getX(mobs[i]) - getPlayerX();

        var yq = Entity.getY(mobs[i]) - getPlayerY();

        var zq = Entity.getZ(mobs[i]) - getPlayerZ();



        if(xq * xq + yq * yq + zq * zq <= 14 * 14 && mobs[i] != getPlayerEnt()) {

            /* the 14 stands for, that the entities you want to give (as example) a nametag need to be in a radius of 14 blocks */

            /* You can disable it by removing the above script. */
            if(Entity.getEntityTypeId(mobs[i]) == 10) {
                Entity.setNameTag(mobs[i], nameColor + "Chicken " + healthColor + Entity.getHealth(mobs[i]) + "/4");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 11) {
                Entity.setNameTag(mobs[i], nameColor + "Cow " + healthColor + Entity.getHealth(mobs[i]) + "/10");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 12) {
                Entity.setNameTag(mobs[i], nameColor + "Pig " + healthColor + Entity.getHealth(mobs[i]) + "/10");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 13) {
                Entity.setNameTag(mobs[i], nameColor + "Sheep " + healthColor + Entity.getHealth(mobs[i]) + "/8");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 14) {
                Entity.setNameTag(mobs[i], nameColor + "Wolf " + healthColor + Entity.getHealth(mobs[i]) + "/8");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 15) {
                Entity.setNameTag(mobs[i], nameColor + "Villager " + healthColor + Entity.getHealth(mobs[i]) + "/20");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 16) {
                Entity.setNameTag(mobs[i], nameColor + "Mooshroom " + healthColor + Entity.getHealth(mobs[i]) + "/10");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 17) {
                Entity.setNameTag(mobs[i], nameColor + "Squid " + healthColor + Entity.getHealth(mobs[i]) + "/10");
            }
			if(Entity.getEntityTypeId(mobs[i]) == 18) {
                Entity.setNameTag(mobs[i], nameColor + "Rabbit " + healthColor + Entity.getHealth(mobs[i]) + "/3");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 19) {
                Entity.setNameTag(mobs[i], nameColor + "Bat " + healthColor + Entity.getHealth(mobs[i]) + "/6");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 20) {
                Entity.setNameTag(mobs[i], nameColor + "Iron Golem " + healthColor + Entity.getHealth(mobs[i]) + "/100");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 21) {
                Entity.setNameTag(mobs[i], nameColor + "Snow Golem " + healthColor + Entity.getHealth(mobs[i]) + "/10");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 22) {
                Entity.setNameTag(mobs[i], nameColor + "Ocelot " + healthColor + Entity.getHealth(mobs[i]) + "/10");
            }
			if(Entity.getEntityTypeId(mobs[i]) == 23) {
                Entity.setNameTag(mobs[i], nameColor + "Horse " + healthColor + Entity.getHealth(mobs[i]) + "/10");
            }
			if(Entity.getEntityTypeId(mobs[i]) == 24) {
                Entity.setNameTag(mobs[i], nameColor + "Donkey " + healthColor + Entity.getHealth(mobs[i]) + "/10"); //TODO: CHANGE HORSE MAX HEALTH
            }
			if(Entity.getEntityTypeId(mobs[i]) == 25) {
                Entity.setNameTag(mobs[i], nameColor + "Mule " + healthColor + Entity.getHealth(mobs[i]) + "/10");
            }
			if(Entity.getEntityTypeId(mobs[i]) == 26) {
                Entity.setNameTag(mobs[i], nameColor + "Skeleton Horse " + healthColor + Entity.getHealth(mobs[i]) + "/10");
            }
			if(Entity.getEntityTypeId(mobs[i]) == 27) {
                Entity.setNameTag(mobs[i], nameColor + "Zombie Horse " + healthColor + Entity.getHealth(mobs[i]) + "/10");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 32) {
                Entity.setNameTag(mobs[i], nameColor + "Zombie " + healthColor + Entity.getHealth(mobs[i]) + "/20");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 33) {
                Entity.setNameTag(mobs[i], nameColor + "Creeper " + healthColor + Entity.getHealth(mobs[i]) + "/20");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 34) {
                Entity.setNameTag(mobs[i], nameColor + "Skeleton " + healthColor + Entity.getHealth(mobs[i]) + "/20");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 35) {
                Entity.setNameTag(mobs[i], nameColor + "Spider " + healthColor + Entity.getHealth(mobs[i]) + "/16");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 36) {
                Entity.setNameTag(mobs[i], nameColor + "Zombie Pigman " + healthColor + Entity.getHealth(mobs[i]) + "/20");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 37) {
                Entity.setNameTag(mobs[i], nameColor + "Slime " + healthColor + Entity.getHealth(mobs[i]) + "/16");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 38) {
                Entity.setNameTag(mobs[i], nameColor + "Enderman " + healthColor + Entity.getHealth(mobs[i]) + "/40");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 39) {
                Entity.setNameTag(mobs[i], nameColor + "Silverfish " + healthColor + Entity.getHealth(mobs[i]) + "/8");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 40) {
                Entity.setNameTag(mobs[i], nameColor + "Cave Spider " + healthColor + Entity.getHealth(mobs[i]) + "/12");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 41) {
                Entity.setNameTag(mobs[i], nameColor + "Ghast " + healthColor + Entity.getHealth(mobs[i]) + "/10");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 42) {
                Entity.setNameTag(mobs[i], nameColor + "Magma Cube " + healthColor + Entity.getHealth(mobs[i]) + "/16");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 43) {
                Entity.setNameTag(mobs[i], nameColor + "Blaze " + healthColor + Entity.getHealth(mobs[i]) + "/20");
            }
			if(Entity.getEntityTypeId(mobs[i]) == 44) {
                Entity.setNameTag(mobs[i], nameColor + "Zombie Villager " + healthColor + Entity.getHealth(mobs[i]) + "/20");
            }
			if(Entity.getEntityTypeId(mobs[i]) == 45) {
                Entity.setNameTag(mobs[i], nameColor + "Witch " + healthColor + Entity.getHealth(mobs[i]) + "/26");
            }
			if(Entity.getEntityTypeId(mobs[i]) == 46) {
                Entity.setNameTag(mobs[i], nameColor + "Stray " + healthColor + Entity.getHealth(mobs[i]) + "/20");
            }
			if(Entity.getEntityTypeId(mobs[i]) == 47) {
                Entity.setNameTag(mobs[i], nameColor + "Husk " + healthColor + Entity.getHealth(mobs[i]) + "/20");
            }
        }
    }
}

VertexClientPE.nuker = function(x, y, z, range, mode) {
	mode = (mode==null)?"cube":mode;
	range = (range==null)?3:range;
	var destroyFunction = yesCheatPlusState?Level.destroyBlock:setTile;
	var destroyLastParam = yesCheatPlusState?false:0;
	if(mode == "cube") {
		for(var blockX = - range; blockX <= range; blockX++) {
			for(var blockY = - range; blockY <= range; blockY++) {
				for(var blockZ = - range; blockZ <= range; blockZ++) {
					if(getTile(x + blockX, y + blockY, z + blockZ) != 0) {
						destroyFunction(x + blockX, y + blockY, z + blockZ, destroyLastParam);
					}
				}
			}
		}
	}if(mode == "flat") {
		for(var blockX = - range; blockX <= range; blockX++) {
			for(var blockY = - 1; blockY <= range; blockY++) {
				for(var blockZ = - range; blockZ <= range; blockZ++) {
					if(getTile(x + blockX, y + blockY, z + blockZ) != 0) {
						destroyFunction(x + blockX, y + blockY, z + blockZ, destroyLastParam);
					}
				}
			}
		}
	}if(mode == "smash") {
		for(var blockX = - range; blockX <= range; blockX++) {
			for(var blockY = - range; blockY <= range; blockY++) {
				for(var blockZ = - range; blockZ <= range; blockZ++) {
					if(Block.getDestroyTime(getTile(x + blockX, y + blockY, z + blockZ)) == 0) {
						if(getTile(x + blockX, y + blockY, z + blockZ) != 0) {
							destroyFunction(x + blockX, y + blockY, z + blockZ, destroyLastParam);
						}
					}
				}
			}
		}
	}
}

var fancyChatMsg;
var fancyChatEndChar;

VertexClientPE.fancyChat = function(str) {
	fancyChatMsg = new java.lang.String(str);
	switch(fancyChatMode) {
		case "normal":
			fancyChatEndChar = 0xFEE0;
			break;
		default:
			fancyChatEndChar = null;
			break;
	}
	var newMsg = "";
	for(i in fancyChatMsg.toCharArray()) {
		var chr = fancyChatMsg.toCharArray()[i];
		if(chr >= 0x21 && chr <= 0x80) {
			newMsg += new java.lang.String(java.lang.Character.toChars(chr + fancyChatEndChar));
		} else {
			newMsg += chr;
		}
	}
	Server.sendChat(newMsg);
}

VertexClientPE.autoSword = function(a, v) {
	if(a == getPlayerEnt()) {
		for(var i = 0; i <= 36; i++) {
			var gCI = Player.getCarriedItem();
			var gCID = Player.getCarriedItemData();
			var gCIA = Player.getCarriedItemCount();
			if(Player.getInventorySlot(i) == 268) {
				Player.setInventorySlot(i, gCI, gCIA, gCID);
				Entity.setCarriedItem(getPlayerEnt(), 268, Player.getInventorySlotCount(i), Player.getInventorySlotData(i));
				break;
			}
		}
		for(var i = 0; i <= 36; i++) {
			var gCI = Player.getCarriedItem();
			var gCID = Player.getCarriedItemData();
			var gCIA = Player.getCarriedItemCount();
			if(Player.getInventorySlot(i) == 283) {
				Player.setInventorySlot(i, gCI, gCIA, gCID);
				Entity.setCarriedItem(getPlayerEnt(), 283, Player.getInventorySlotCount(i), Player.getInventorySlotData(i));
				break;
			}
		}
		for(var i = 0; i <= 36; i++) {
			var gCI = Player.getCarriedItem();
			var gCID = Player.getCarriedItemData();
			var gCIA = Player.getCarriedItemCount();
			if(Player.getInventorySlot(i) == 272) {
				Player.setInventorySlot(i, gCI, gCIA, gCID);
				Entity.setCarriedItem(getPlayerEnt(), 272, Player.getInventorySlotCount(i), Player.getInventorySlotData(i));
				break;
			}
		}
		for(var i = 0; i <= 36; i++) {
			var gCI = Player.getCarriedItem();
			var gCID = Player.getCarriedItemData();
			var gCIA = Player.getCarriedItemCount();
			if(Player.getInventorySlot(i) == 267) {
				Player.setInventorySlot(i, gCI, gCIA, gCID);
				Entity.setCarriedItem(getPlayerEnt(), 267, Player.getInventorySlotCount(i), Player.getInventorySlotData(i));
				break;
			}
		}
		for(var i = 0; i <= 36; i++) {
			var gCI = Player.getCarriedItem();
			var gCID = Player.getCarriedItemData();
			var gCIA = Player.getCarriedItemCount();
			if(Player.getInventorySlot(i) == 276) {
				Player.setInventorySlot(i, gCI, gCIA, gCID);
				Entity.setCarriedItem(getPlayerEnt(), 276, Player.getInventorySlotCount(i), Player.getInventorySlotData(i));
				break;
			}
		}
	}
}

VertexClientPE.ride = function(entity) {
	rideAnimal(getPlayerEnt(), entity);
}

VertexClientPE.delaySpammer = function() {
	var delaySpamMsg = Math.random().toString(36).replace(/[^a-z]+/g, '');
	var username = Player.getName(getPlayerEnt());
	Entity.setNameTag(getPlayerEnt(), "");
	if(fancyChatState) {
		VertexClientPE.fancyChat(delaySpamMsg);
	} else {
		Server.sendChat(delaySpamMsg);
	}
	Entity.setNameTag(getPlayerEnt(), username);
}

VertexClientPE.boatFly = function() { //some parts of this function are made by @zhuowei
	if(Entity.getRiding(getPlayerEnt()) != null/* && Entity.getEntityTypeId(Entity.getRiding(getPlayerEnt())) == EntityType.BOAT*/) {
		toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);
		/*var ent = Entity.getRiding(getPlayerEnt());
		setVelX(ent, playerWalkSpeed * playerDir[0]);
		setVelY(ent, playerWalkSpeed * playerDir[1]);
		setVelZ(ent, playerWalkSpeed * playerDir[2]);
		var ent = Entity.getRider(getPlayerEnt());
		setVelX(ent, playerWalkSpeed * playerDir[0]);
		setVelY(ent, playerWalkSpeed * playerDir[1]);
		setVelZ(ent, playerWalkSpeed * playerDir[2]);*/
		var ent = Entity.getRiding(getPlayerEnt());
		setVelX(ent, playerWalkSpeed * playerDir[0]);
		setVelY(ent, playerWalkSpeed * playerDir[1]);
		setVelZ(ent, playerWalkSpeed * playerDir[2]);
	}
}

var freecamEntity;

VertexClientPE.freecam = function(onOrOff) {
	switch(onOrOff) {
		case 0: {
			ModPE.setCamera(Player.getEntity());
			if(freecamEntity != null) {
				Entity.remove(freecamEntity);
			}
			freecamEntity = null;
			break;
		} case 1: {
			freecamEntity = Level.spawnMob(getPlayerX(), getPlayerY(), getPlayerZ(), EntityType.VILLAGER);
			ModPE.setCamera(freecamEntity);
			//Entity.setRenderType(freecamEntity, EntityRenderType.player2);
			break;
		}
	}
}

VertexClientPE.teleporter = function(x, y, z) {
	setPosition(getPlayerEnt(), x, y, z);
	while(getTile(getPlayerX(), getPlayerY()-2, getPlayerZ()) != 0) {
		Entity.setPosition(getPlayerEnt(), getPlayerX(), getPlayerY()+1, getPlayerZ());
	}
}

var settingsPath = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftpe/";
var worldsPath = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftWorlds/";

VertexClientPE.saveAutoSpammerMessage = function() {
    java.io.File(settingsPath).mkdirs();
    var newFile = new java.io.File(settingsPath, "vertexclientpe_spammessage.txt");
    newFile.createNewFile();
    var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
    outWrite.append(spamMessage.toString());

    outWrite.close();
}

VertexClientPE.loadAutoSpammerSettings = function() {
    if(!java.io.File(settingsPath + "vertexclientpe_spammessage.txt").exists())
        return;
    var file = new java.io.File(settingsPath + "vertexclientpe_spammessage.txt");
    var fos = new java.io.FileInputStream(file);
    var str = new java.lang.StringBuilder();
    var ch;
    while((ch = fos.read()) != -1)
        str.append(java.lang.Character(ch));
	if(str != null && str != undefined) {
		spamMessage = str.toString();
	}
    fos.close();
	return true;
}

VertexClientPE.saveCategorySettings = function() {
    java.io.File(settingsPath).mkdirs();
    var newFile = new java.io.File(settingsPath, "vertexclientpe_categories.txt");
    newFile.createNewFile();
    var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
    outWrite.append(combatName.toString());
    outWrite.append("," + buildingName.toString());
    outWrite.append("," + movementName.toString());
    outWrite.append("," + chatName.toString());
    outWrite.append("," + miscName.toString());

    outWrite.close();
}

VertexClientPE.loadCategorySettings = function() {
    if(!java.io.File(settingsPath + "vertexclientpe_categories.txt").exists())
        return;
    var file = new java.io.File(settingsPath + "vertexclientpe_categories.txt");
    var fos = new java.io.FileInputStream(file);
    var str = new java.lang.StringBuilder();
    var ch;
    while((ch = fos.read()) != -1)
        str.append(java.lang.Character(ch));
	if(str != null && str != undefined) {
		var _0xbbeb=["\x69\x73\x50\x72\x6F","\x74\x72\x75\x65","\x2C","\x73\x70\x6C\x69\x74"];if(VertexClientPE[_0xbbeb[0]]()==_0xbbeb[1]){combatName=str.toString()[_0xbbeb[3]](_0xbbeb[2])[0];buildingName=str.toString()[_0xbbeb[3]](_0xbbeb[2])[1];movementName=str.toString()[_0xbbeb[3]](_0xbbeb[2])[2];chatName=str.toString()[_0xbbeb[3]](_0xbbeb[2])[3];miscName=str.toString()[_0xbbeb[3]](_0xbbeb[2])[4]}
	}
    fos.close();
	return true;
}

VertexClientPE.saveAccounts = function() {
	java.io.File(settingsPath).mkdirs();
    var newFile = new java.io.File(settingsPath, "vertexclientpe_accounts.dat");
    newFile.createNewFile();
    var stream = new java.io.FileOutputStream(newFile);
	try {
		stream.write(VertexClientPE.accounts.toString().getBytes());
	} finally {
		stream.close();
	}
}

VertexClientPE.loadAccounts = function() {
	try {
		if(!java.io.File(settingsPath + "vertexclientpe_accounts.dat").exists())
			return;
		var file = new java.io.File(settingsPath + "vertexclientpe_accounts.dat");
		var readed = (new java.io.BufferedReader(new java.io.FileReader(file)));
		var data = new java.lang.StringBuilder();
		var string;
		while((string = readed.readLine()) != null) {
			data.append(string);
			data.append("\n");
		}
		VertexClientPE.accounts = new org.json.JSONArray(data.toString());
	} catch(e) {
		//error
	}
}

VertexClientPE.loadDeathCoords = function() {
    if(!java.io.File(worldsPath + Level.getWorldDir() + "/" + "death.dat").exists())
        return;
    var file = new java.io.File(worldsPath + Level.getWorldDir() + "/" + "death.dat");
    var fos = new java.io.FileInputStream(file);
    var str = new java.lang.StringBuilder();
    var ch;
    while((ch = fos.read()) != -1)
        str.append(java.lang.Character(ch));
	if(str.toString().split(",")[0] != null && str.toString().split(",")[0] != undefined) {
		VertexClientPE.currentWorld.deathX = parseInt(str.toString().split(",")[0]); //Here we split text by ","
	}
	if(str.toString().split(",")[1] != null && str.toString().split(",")[1] != undefined) {
		VertexClientPE.currentWorld.deathY = parseInt(str.toString().split(",")[1]); //Here we split text by ","
	}
	if(str.toString().split(",")[2] != null && str.toString().split(",")[2] != undefined) {
		VertexClientPE.currentWorld.deathZ = parseInt(str.toString().split(",")[2]); //Here we split text by ","
	}
    fos.close();
	return true;
}

VertexClientPE.saveDeathCoords = function() {
    java.io.File(settingsPath).mkdirs();
    var newFile = new java.io.File(worldsPath + Level.getWorldDir() + "/" + "death.dat");
    newFile.createNewFile();
    var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
    outWrite.append(VertexClientPE.currentWorld.deathX.toString());
    outWrite.append("," + VertexClientPE.currentWorld.deathY.toString());
    outWrite.append("," + VertexClientPE.currentWorld.deathZ.toString());

    outWrite.close();
	
	VertexClientPE.saveAutoSpammerMessage();
	VertexClientPE.saveCategorySettings();
}

VertexClientPE.saveMainSettings = function() {
    java.io.File(settingsPath).mkdirs();
    var newFile = new java.io.File(settingsPath, "vertexclientpe.txt");
    newFile.createNewFile();
    var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
    outWrite.append(hacksListModeSetting.toString());
    outWrite.append("," + mainButtonPositionSetting.toString());
    outWrite.append("," + healthTagsSetting.toString());
    outWrite.append("," + themeSetting.toString());
    outWrite.append("," + playMusicSetting.toString());
    outWrite.append("," + showNewsSetting.toString());
    outWrite.append("," + menuAnimationsSetting.toString());
    outWrite.append("," + nukerMode.toString());
    outWrite.append("," + timerSpeed.toString());
    outWrite.append("," + themeSetup.toString());
    outWrite.append("," + nukerRange.toString());
    outWrite.append("," + killAuraRange.toString());
    outWrite.append("," + spamDelayTime.toString());
	outWrite.append("," + sizeSetting.toString());
	outWrite.append("," + tapNukerRange.toString());
	outWrite.append("," + menuType.toString());
	outWrite.append("," + chestTracersRange.toString());
	outWrite.append("," + tabGUIModeSetting.toString());
	outWrite.append("," + chestTracersGroundMode.toString());
	outWrite.append("," + chestTracersParticle.toString());
	outWrite.append("," + antiLagDropRemoverSetting.toString());
	outWrite.append("," + useLightThemeSetting.toString());
	outWrite.append("," + buttonStyleSetting.toString());
	outWrite.append("," + mcpeGUISetting.toString());
	outWrite.append("," + chestESPRange.toString());
	//outWrite.append("," + cmdPrefix.toString());

    outWrite.close();
	
	VertexClientPE.saveAutoSpammerMessage();
	VertexClientPE.saveCategorySettings();
}

VertexClientPE.loadMainSettings = function() {
    if(!java.io.File(settingsPath + "vertexclientpe.txt").exists())
        return;
    var file = new java.io.File(settingsPath + "vertexclientpe.txt");
    var fos = new java.io.FileInputStream(file);
    var str = new java.lang.StringBuilder();
    var ch;
    while((ch = fos.read()) != -1)
        str.append(java.lang.Character(ch));
	if(str.toString().split(",")[0] != null && str.toString().split(",")[0] != undefined) {
		hacksListModeSetting = str.toString().split(",")[0]; //Here we split text by ","
	}
	if(str.toString().split(",")[1] != null && str.toString().split(",")[1] != undefined) {
		mainButtonPositionSetting = str.toString().split(",")[1]; //Here we split text by ","
	}
	if(str.toString().split(",")[2] != null && str.toString().split(",")[2] != undefined) {
		healthTagsSetting = str.toString().split(",")[2]; //Here we split text by ","
	}
	if(str.toString().split(",")[3] != null && str.toString().split(",")[3] != undefined) {
		themeSetting = str.toString().split(",")[3]; //Here we split text by ","
	}
	if(str.toString().split(",")[4] != null && str.toString().split(",")[4] != undefined) {
		playMusicSetting = str.toString().split(",")[4]; //Here we split text by ","
	}
	if(str.toString().split(",")[5] != null && str.toString().split(",")[5] != undefined) {
		showNewsSetting = str.toString().split(",")[5]; //Here we split text by ","
	}
	if(str.toString().split(",")[6] != null && str.toString().split(",")[6] != undefined) {
		menuAnimationsSetting = str.toString().split(",")[6]; //Here we split text by ","
	}
	if(str.toString().split(",")[7] != null && str.toString().split(",")[7] != undefined) {
		nukerMode = str.toString().split(",")[7]; //Here we split text by ","
	}
	if(str.toString().split(",")[8] != null && str.toString().split(",")[8] != undefined) {
		timerSpeed = str.toString().split(",")[8]; //Here we split text by ","
	}
	if(str.toString().split(",")[9] != null && str.toString().split(",")[9] != undefined) {
		themeSetup = str.toString().split(",")[9]; //Here we split text by ","
	}
	if(str.toString().split(",")[10] != null && str.toString().split(",")[10] != undefined) {
		nukerRange = str.toString().split(",")[10]; //Here we split text by ","
	}
	if(str.toString().split(",")[11] != null && str.toString().split(",")[11] != undefined) {
		killAuraRange = str.toString().split(",")[11]; //Here we split text by ","
	}
	if(str.toString().split(",")[12] != null && str.toString().split(",")[12] != undefined) {
		spamDelayTime = str.toString().split(",")[12]; //Here we split text by ","
	}
	if(str.toString().split(",")[13] != null && str.toString().split(",")[13] != undefined) {
		sizeSetting = str.toString().split(",")[13]; //Here we split text by ","
		if(sizeSetting == "normal") {
			customHeight = topBarHeight / 2;
		} else if(sizeSetting == "small") {
			customHeight = topBarHeight;
		}
	}
	if(str.toString().split(",")[14] != null && str.toString().split(",")[14] != undefined) {
		tapNukerRange = str.toString().split(",")[14]; //Here we split text by ","
	}
	if(str.toString().split(",")[15] != null && str.toString().split(",")[15] != undefined) {
		menuType = str.toString().split(",")[15]; //Here we split text by ","
	}
	if(str.toString().split(",")[16] != null && str.toString().split(",")[16] != undefined) {
		chestTracersRange = str.toString().split(",")[16]; //Here we split text by ","
	}
	if(str.toString().split(",")[17] != null && str.toString().split(",")[17] != undefined) {
		tabGUIModeSetting = str.toString().split(",")[17]; //Here we split text by ","
	}
	if(str.toString().split(",")[18] != null && str.toString().split(",")[18] != undefined) {
		chestTracersGroundMode = str.toString().split(",")[18]; //Here we split text by ","
	}
	if(str.toString().split(",")[19] != null && str.toString().split(",")[19] != undefined) {
		chestTracersParticle = str.toString().split(",")[19]; //Here we split text by ","
	}
	if(str.toString().split(",")[20] != null && str.toString().split(",")[20] != undefined) {
		antiLagDropRemoverSetting = str.toString().split(",")[20]; //Here we split text by ","
	}
	if(str.toString().split(",")[21] != null && str.toString().split(",")[21] != undefined) {
		useLightThemeSetting = str.toString().split(",")[21]; //Here we split text by ","
	}
	if(str.toString().split(",")[22] != null && str.toString().split(",")[22] != undefined) {
		buttonStyleSetting = str.toString().split(",")[22]; //Here we split text by ","
	}
	if(str.toString().split(",")[23] != null && str.toString().split(",")[23] != undefined) {
		mcpeGUISetting = str.toString().split(",")[23]; //Here we split text by ","
	}
	if(str.toString().split(",")[24] != null && str.toString().split(",")[24] != undefined) {
		chestESPRange = str.toString().split(",")[24]; //Here we split text by ","
	}
    fos.close();
	VertexClientPE.loadAutoSpammerSettings();
	VertexClientPE.loadCategorySettings();
	return true;
}

VertexClientPE.setupMCPEGUI = function() {
	VertexClientPE.loadMainSettings();
	if(mcpeGUISetting == "default") {
		ModPE.resetImages();
	}
	if(mcpeGUISetting == "green") {
		ModPE.overrideTexture("images/gui/spritesheet.png","http://i.imgur.com/BCA6vgv.png");
		ModPE.overrideTexture("images/gui/touchgui.png","http://i.imgur.com/dY3c1Jl.png");
	}
	if(mcpeGUISetting == "red") {
		ModPE.overrideTexture("images/gui/spritesheet.png","http://i.imgur.com/BxuGkEJ.png");
		ModPE.overrideTexture("images/gui/touchgui.png","http://i.imgur.com/S3qiQ01.png");
	}
	if(mcpeGUISetting == "blue") {
		ModPE.overrideTexture("images/gui/spritesheet.png","http://i.imgur.com/X5rCyoN.png");
		ModPE.overrideTexture("images/gui/touchgui.png","http://i.imgur.com/t6tGtMk.png");
	}
	if(mcpeGUISetting == "purple") {
		ModPE.overrideTexture("images/gui/spritesheet.png","http://i.imgur.com/3xsluNN.png");
		ModPE.overrideTexture("images/gui/touchgui.png","http://i.imgur.com/R9te7Bd.png");
	}
	if(mcpeGUISetting == "yellow") {
		ModPE.overrideTexture("images/gui/spritesheet.png","http://i.imgur.com/z1BGkj5.png");
		ModPE.overrideTexture("images/gui/touchgui.png","http://i.imgur.com/RXE3pbS.png");
	}
	if(mcpeGUISetting == "white") {
		ModPE.overrideTexture("images/gui/spritesheet.png","http://i.imgur.com/GlwhFt5.png");
		ModPE.overrideTexture("images/gui/touchgui.png","http://i.imgur.com/gsn6Qfp.png");
	}
	if(mcpeGUISetting == "black") {
		ModPE.overrideTexture("images/gui/spritesheet.png","http://i.imgur.com/l7nG7ZU.png");
		ModPE.overrideTexture("images/gui/touchgui.png","http://i.imgur.com/MZeX8XN.png");
	}
	ModPE.overrideTexture("images/gui/title.png","http://Vertex-Client.github.io/bootstrap/img/title.png");
}

VertexClientPE.setupMCPEGUI();

var createUiThread = function(func) {
    getContext().runOnUiThread(new java.lang.Runnable({
        run: function() {
            func(getContext());
        }
    }));
};

var GuiSize = android.util.TypedValue.applyDimension(android.util.TypedValue.COMPLEX_UNIT_DIP, 2, getContext().getResources().getDisplayMetrics());
var GetGui = function() {
    return android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/gui.png"));
};
var TrimImage = function(bitmap, x, y, width, height) {
    return android.graphics.Bitmap.createBitmap(bitmap, x, y, width, height);
};
var GetSpritesheet = function() {
    return android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/spritesheet.png"));
};
var GetTouchgui = function() {
    return android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/touchgui.png"));
};
var GetGui = function() {
    return android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/gui.png"));
};

var trimImage = function(bitmap, x, y, width, height) {
    return android.graphics.Bitmap.createBitmap(bitmap, x, y, width, height);
};

var getStretchedImage = function(bm, x, y, stretchWidth, stretchHeight, width, height) {
    var blank = android.graphics.Bitmap.createBitmap(width, height, android.graphics.Bitmap.Config.ARGB_8888);
    var Bitmap = android.graphics.Bitmap;
    var part1 = Bitmap.createBitmap(bm, 0, 0, x, y);
    var part2 = Bitmap.createBitmap(bm, x, 0, stretchWidth, y);
    var part3 = Bitmap.createBitmap(bm, x + stretchWidth, 0, bm.getWidth() - x - stretchWidth, y);
    var part4 = Bitmap.createBitmap(bm, 0, y, x, stretchHeight);
    var part5 = Bitmap.createBitmap(bm, x, y, stretchWidth, stretchHeight);
    var part6 = Bitmap.createBitmap(bm, x + stretchWidth, y, bm.getWidth() - x - stretchWidth, stretchHeight);
    var part7 = Bitmap.createBitmap(bm, 0, y + stretchHeight, x, bm.getHeight() - y - stretchHeight);
    var part8 = Bitmap.createBitmap(bm, x, y + stretchHeight, stretchWidth, bm.getHeight() - y - stretchHeight);
    var part9 = Bitmap.createBitmap(bm, x + stretchWidth, y + stretchHeight, bm.getWidth() - x - stretchWidth, bm.getHeight() - y - stretchHeight);
    var canvas = new android.graphics.Canvas(blank);
    canvas.drawBitmap(part1, 0, 0, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part2, width - bm.getWidth() + stretchWidth, y, false), x, 0, null);
    canvas.drawBitmap(part3, width - bm.getWidth() + stretchWidth + x, 0, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part4, x, height - bm.getHeight() + stretchHeight, false), 0, y, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part5, width - bm.getWidth() + stretchWidth, height - bm.getHeight() + stretchHeight, false), x, y, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part6, part3.getWidth(), height - bm.getHeight() + stretchHeight, false), width - bm.getWidth() + stretchWidth + x, y, null);
    canvas.drawBitmap(part7, 0, height - bm.getHeight() + stretchHeight + y, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part8, width - bm.getWidth() + stretchWidth, part7.getHeight(), false), x, height - bm.getHeight() + stretchHeight + y, null);
    canvas.drawBitmap(part9, width - bm.getWidth() + stretchWidth + x, height - bm.getHeight() + stretchHeight + y, null);

    return new android.graphics.drawable.BitmapDrawable(blank);
};

function clientButton(text, desc, color, round, forceLightColor, style) //menu buttons
{
	if(color == null) {
		color = themeSetting;
	}
	if(forceLightColor == null) {
		forceLightColor = useLightThemeSetting=="on";
	}
	if(style == null) {
		style = buttonStyleSetting;
	}
    var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var defaultButton = new Button(ctx);
    defaultButton.setText(text);
	if(color == "white") {
		defaultButton.setTextColor(Color.BLACK);
	} else {
		defaultButton.setTextColor(Color.WHITE);
	}
	defaultButton.setTypeface(VertexClientPE.font);
	if(desc != null && desc != undefined) {
		defaultButton.setOnLongClickListener(new android.view.View.OnLongClickListener() {
			onLongClick: function(v, t) {
				VertexClientPE.toast(desc);
				return true;
			}
		});
	}

	var bg = android.graphics.drawable.GradientDrawable();
	if(round == true) {
		bg.setCornerRadius(10);
	} else if(round != false && round != null) {
		var radiiFloatArray = java.lang.reflect.Array.newInstance(java.lang.Float.TYPE, 9);
		var radius = 0;
		if(round == "left") {
			for(var i = 0; i <= 7; i++) {
				if(i == 0 || i == 1 || i == 6 || i == 7) {
					radiiFloatArray[i] = 8;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
		} if(round == "right") {
			for(var i = 0; i <= 7; i++) {
				if(i == 2 || i == 3 || i == 4 || i == 5) {
					radiiFloatArray[i] = 8;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
		}
		bg.setCornerRadii(radiiFloatArray);
	}
	if(forceLightColor == true) {
		bg.setColor(Color.parseColor("#00994C"));
		bg.setStroke(dip2px(2), Color.parseColor("#00CC66"));
	} else {
		bg.setColor(Color.parseColor("#0B5B25"));
		bg.setStroke(dip2px(2), Color.parseColor("#0F8219"));
	}
	bg.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
	if(color == "red") {
		if(forceLightColor == true) {
			bg.setColor(Color.parseColor("#FF3333"));
			bg.setStroke(dip2px(2), Color.parseColor("#FF6666"));
		} else {
			bg.setColor(Color.parseColor("#5B0C0C"));
			bg.setStroke(dip2px(2), Color.parseColor("#821010"));
		}
	}if(color == "blue") {
		if(forceLightColor == true) {
			bg.setColor(Color.parseColor("#0080FF"));
			bg.setStroke(dip2px(2), Color.parseColor("#3399FF"));
		} else {
			bg.setColor(Color.parseColor("#0A175B"));
			bg.setStroke(dip2px(2), Color.parseColor("#0E3882"));
		}
	}if(color == "purple") {
		bg.setColor(Color.parseColor("#9F018C"));
		bg.setStroke(dip2px(2), Color.parseColor("#BC21AB"));
	}if(color == "yellow") {
		bg.setColor(Color.parseColor("#CCCC00"));
		bg.setStroke(dip2px(2), Color.parseColor("#FFFF00"));
	}if(color == "white") {
		bg.setColor(Color.parseColor("#E1E1E1"));
		bg.setStroke(dip2px(2), Color.parseColor("#FFFFFF"));
	}if(color == "black") {
		bg.setColor(Color.parseColor("#141414"));
		bg.setStroke(dip2px(2), Color.parseColor("#1E1E1E"));
	}
	
	if(style == "legacy") {
		bg.setColor(Color.parseColor("#000000"));
	}
	if(style == "legacy_inverted") {
		bg.setStroke(dip2px(2), Color.parseColor("#000000"));
	}
	if(style == "transparent") {
		bg.setColor(Color.TRANSPARENT);
	}
	
	defaultButton.setTransformationMethod(null);
    defaultButton.setOnTouchListener(new android.view.View.OnTouchListener() {
        onTouch: function(v, event) {
            var action = event.getActionMasked();
            if(action == android.view.MotionEvent.ACTION_CANCEL || action == android.view.MotionEvent.ACTION_UP) {
				if(forceLightColor == true) {
					bg.setColor(Color.parseColor("#00994C"));
				} else {
					bg.setColor(Color.parseColor("#0B5B25"));
				}
                if(color == "red") {
					if(forceLightColor == true) {
						bg.setColor(Color.parseColor("#FF3333"));
					} else {
						bg.setColor(Color.parseColor("#5B0C0C"));
					}
				}if(color == "blue") {
					if(forceLightColor == true) {
						bg.setColor(Color.parseColor("#0080FF"));
					} else {
						bg.setColor(Color.parseColor("#0A175B"));
					}
				}if(color == "purple") {
					bg.setColor(Color.parseColor("#9F018C"));
				}if(color == "yellow") {
					bg.setColor(Color.parseColor("#CCCC00"));
				}if(color == "white") {
					bg.setColor(Color.parseColor("#E1E1E1"));
				}if(color == "black") {
					bg.setColor(Color.parseColor("#141414"));
				}
				
				if(style == "legacy") {
					bg.setColor(Color.parseColor("#000000"));
				}
				if(style == "transparent") {
					bg.setColor(Color.TRANSPARENT);
				}
            } else {
				if(forceLightColor == true) {
					bg.setColor(Color.parseColor("#00CC66"));
				} else {
					bg.setColor(Color.parseColor("#0F8219"));
				}
                if(color == "red") {
					if(forceLightColor == true) {
						bg.setColor(Color.parseColor("#FF6666"));
					} else {
						bg.setColor(Color.parseColor("#821010"));
					}
				}if(color == "blue") {
					if(forceLightColor == true) {
						bg.setColor(Color.parseColor("#3399FF"));
					} else {
						bg.setColor(Color.parseColor("#0E3882"));
					}
				}if(color == "purple") {
					bg.setColor(Color.parseColor("#BC21AB"));
				}if(color == "yellow") {
					bg.setColor(Color.parseColor("#FFFF00"));
				}if(color == "white") {
					bg.setColor(Color.parseColor("#FFFFFF"));
				}if(color == "black") {
					bg.setColor(Color.parseColor("#1E1E1E"));
				}
				
				if(style == "legacy_inverted") {
					bg.setColor(Color.parseColor("#000000"));
				}
            }
            return false;
        }
    });

	defaultButton.setBackgroundDrawable(bg);
    defaultButton.setPaintFlags(defaultButton.getPaintFlags() | android.graphics.Paint.SUBPIXEL_TEXT_FLAG);
    defaultButton.setTextSize(15);
	if(color == "white") {
		defaultButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.WHITE);
	} else {
		defaultButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
	}
	defaultButton.setPadding(0, 0, 0, 0);
    defaultButton.setLineSpacing(0, 1.15);
    return defaultButton;
}

function shopFeatureButton(shopFeature, cashTextView) {
	var shopFeatureButtonText = (sharedPref.getString("VertexClientPE.bought" + shopFeature.shortName, "false")=="true")?"Purchased":shopFeature.price.toString();
	var shopFeatureLayout = new LinearLayout(ctx);
	shopFeatureLayout.setOrientation(LinearLayout.HORIZONTAL);
	var shopFeatureLayoutLeft = new LinearLayout(ctx);
	shopFeatureLayoutLeft.setOrientation(1);
	shopFeatureLayoutLeft.setGravity(android.view.Gravity.CENTER);
	shopFeatureLayoutLeft.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 2 - dip2px(10), display.heightPixels / 8));
	var shopFeatureLayoutRight = new LinearLayout(ctx);
	shopFeatureLayoutRight.setOrientation(1);
	shopFeatureLayoutRight.setGravity(android.view.Gravity.CENTER);
	shopFeatureLayoutRight.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 2 - dip2px(10), display.heightPixels / 8));
	shopFeatureLayout.addView(shopFeatureLayoutLeft);
	shopFeatureLayout.addView(shopFeatureLayoutRight);
	var shopFeatureText = clientTextView(shopFeature.name);
	shopFeatureLayoutLeft.addView(shopFeatureText);
	var shopFeatureClientButton = clientButton(shopFeatureButtonText);
	shopFeatureClientButton.setOnClickListener(new android.view.View.OnClickListener() {
		onClick: function(v) {
			if(sharedPref.getString("VertexClientPE.bought" + shopFeature.shortName, "false") != "true") {
				if(shopFeature.price <= VertexClientPE.getVertexCash()) {
					editor.putInt("VertexClientPE.vertexCash", VertexClientPE.getVertexCash() - shopFeature.price);
					editor.commit();
					cashTextView.setText("\u26C1 " + VertexClientPE.getVertexCash());
					editor.putString("VertexClientPE.bought" + shopFeature.shortName, "true");
					editor.commit();
					shopFeatureClientButton.setText("Purchased");
					shopFeature.onUnlock();
				} else {
					VertexClientPE.toast("You need " + (shopFeature.price - VertexClientPE.getVertexCash()).toString() + " more V€rt€xCash to buy this!");
				}
			}
		}
	});
	
	shopFeatureLayoutRight.addView(shopFeatureClientButton);
	return shopFeatureLayout;
}

function songButton(song, barLayout) {
	var songButtonText = song.artist + " - " + song.title;
	var songLayout = new LinearLayout(ctx);
	songLayout.setOrientation(1);
	var songClientButton = clientButton(songButtonText);
	songClientButton.setOnClickListener(new android.view.View.OnClickListener() {
		onClick: function(v) {
			VertexClientPE.MusicUtils.isPaused = false;
			barLayout.getLeftTimeView().setText("0:00");
			if(mpPlayButton != null) {
				mpPlayButton.setBackgroundResource(android.R.drawable.ic_media_pause);
			}
			VertexClientPE.MusicUtils.startMusicPlayer(song);
		}
	});
	
	songLayout.addView(songClientButton);
	return songLayout;
}

function musicBar() {
	var musicBarLayout1 = new LinearLayout(ctx);
	musicBarLayout1.setOrientation(1);
	var musicBarLayout = new LinearLayout(ctx);
	musicBarLayout.setBackgroundDrawable(backgroundSpecial());
	musicBarLayout.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels, LinearLayout.LayoutParams.WRAP_CONTENT));
	musicBarLayout.setOrientation(LinearLayout.HORIZONTAL);
	musicBarLayout.setGravity(android.view.Gravity.CENTER);
	var musicBarLayoutLeft = new LinearLayout(ctx);
	musicBarLayoutLeft.setOrientation(LinearLayout.HORIZONTAL);
	musicBarLayoutLeft.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 8, LinearLayout.LayoutParams.WRAP_CONTENT));
	var musicBarLayoutMiddle = new LinearLayout(ctx);
	musicBarLayoutMiddle.setOrientation(LinearLayout.HORIZONTAL);
	musicBarLayoutMiddle.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels - (display.widthPixels / 8) * 2, LinearLayout.LayoutParams.WRAP_CONTENT));
	var musicBarLayoutRight = new LinearLayout(ctx);
	musicBarLayoutRight.setOrientation(1);
	musicBarLayoutRight.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 8, LinearLayout.LayoutParams.WRAP_CONTENT));
	musicBarLayout.addView(musicBarLayoutLeft);
	musicBarLayout.addView(musicBarLayoutMiddle);
	musicBarLayout.addView(musicBarLayoutRight);
	var musicBarSongTitleView = new clientTextView(musicText);
	musicBarSongTitleView.setBackgroundDrawable(backgroundSpecial("top", themeSetting));
	musicBarSongTitleView.setGravity(android.view.Gravity.CENTER);
	musicBarSongTitleView.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
	musicBarSongTitleView.setMarqueeRepeatLimit(-1);
	musicBarSongTitleView.setSingleLine();
	musicBarSongTitleView.setHorizontallyScrolling(true);
	musicBarSongTitleView.setSelected(true);
	var musicBarSeekBar = new SeekBar(ctx);
	musicBarSeekBar.setLayoutParams(new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT, 1));
	if(VertexClientPE.MusicUtils.mp == null) {
		VertexClientPE.MusicUtils.initMusicPlayer();
	}
	var musicBarPlayButton = new Button(ctx);
	musicBarPlayButton.setPadding(0, 0, 0, 0);
	musicBarPlayButton.setBackgroundResource(android.R.drawable.ic_media_play);
	musicBarPlayButton.setLayoutParams(new LinearLayout.LayoutParams(dip2px(36), dip2px(36)));
	musicBarPlayButton.setText("");
	var musicBarLeftTimeView = new widget.TextView(ctx);
	musicBarLeftTimeView.setText("0:00");
	var musicBarRightTimeView = new widget.TextView(ctx);
	musicBarRightTimeView.setText("0:00");
	musicBarLayoutLeft.addView(musicBarPlayButton);
	musicBarLayoutLeft.addView(musicBarLeftTimeView);
	musicBarLayoutMiddle.addView(musicBarSeekBar);
	musicBarLayoutRight.addView(musicBarRightTimeView);
	
	musicBarLayout1.addView(musicBarSongTitleView);
	musicBarLayout1.addView(musicBarLayout);
	
	this.getSongTitleView = function() {
		return musicBarSongTitleView;
	}
	
	this.getPlayButton = function() {
		return musicBarPlayButton;
	}
	
	this.getLeftTimeView = function() {
		return musicBarLeftTimeView;
	}
	
	this.getSeekBar = function() {
		return musicBarSeekBar;
	}
	
	this.getRightTimeView = function() {
		return musicBarRightTimeView;
	}
	
	this.getBarLayout = function() {
		return musicBarLayout1;
	}
}

function updatePaneButton(updateVersion, updateDesc) {
	var updatePaneLayout = new LinearLayout(ctx);
	updatePaneLayout.setOrientation(LinearLayout.HORIZONTAL);
	updatePaneLayout.setGravity(android.view.Gravity.CENTER);
	updatePaneLayout.setBackground(backgroundSpecial(true));
	var updatePaneLayoutLeft = new LinearLayout(ctx);
	updatePaneLayoutLeft.setOrientation(1);
	updatePaneLayoutLeft.setGravity(android.view.Gravity.CENTER);
	updatePaneLayoutLeft.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 2 - dip2px(10), display.heightPixels / 4));
	var updatePaneLayoutRight = new LinearLayout(ctx);
	updatePaneLayoutRight.setOrientation(1);
	updatePaneLayoutRight.setGravity(android.view.Gravity.CENTER);
	updatePaneLayoutRight.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 2 - dip2px(10), display.heightPixels / 4));
	updatePaneLayout.addView(updatePaneLayoutLeft);
	updatePaneLayout.addView(updatePaneLayoutRight);
	var updatePaneText = clientTextView("v" + updateVersion);
	updatePaneText.setTypeface(VertexClientPE.font, android.graphics.Typeface.BOLD);
	var updatePaneDescText = clientTextView(updateDesc);
	updatePaneLayoutLeft.addView(updatePaneText);
	updatePaneLayoutLeft.addView(updatePaneDescText);
	var updatePaneDownloadButton = clientButton("Download");
	updatePaneDownloadButton.setCompoundDrawablesWithIntrinsicBounds(android.R.drawable.stat_sys_download, 0, 0, 0);
	updatePaneDownloadButton.setLayoutParams(new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, display.heightPixels / 8));
	updatePaneDownloadButton.setOnClickListener(new android.view.View.OnClickListener() {
		onClick: function(v) {
			var updateGithubVersion = updateVersion;
			if(updateGithubVersion.indexOf("Alpha") != -1 || updateGithubVersion.indexOf("Beta") != -1) {
				updateGithubVersion = updateGithubVersion.split(" ")[0] + "-" + updateGithubVersion.split(" ")[1];
			}
			ModPE.goToURL("https://github.com/Vertex-Client/Vertex-Client-PE/releases/download/v" + updateGithubVersion + "/Vertex_Client_PE.modpkg");
		}
	});
	var updatePaneInformationButton = clientButton("Info");
	updatePaneInformationButton.setCompoundDrawablesWithIntrinsicBounds(android.R.drawable.ic_menu_info_details, 0, 0, 0);
	updatePaneInformationButton.setLayoutParams(new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, display.heightPixels / 8));
	updatePaneInformationButton.setOnClickListener(new android.view.View.OnClickListener() {
		onClick: function(v) {
			var updateGithubVersion = updateVersion;
			if(updateGithubVersion.indexOf("Alpha") != -1 || updateGithubVersion.indexOf("Beta") != -1) {
				updateGithubVersion = updateGithubVersion.split(" ")[0] + "-" + updateGithubVersion.split(" ")[1];
			}
			ModPE.goToURL("https://github.com/Vertex-Client/Vertex-Client-PE/releases/tag/v" + updateGithubVersion);
		}
	});
	var updatePaneTypeText = clientTextView("Current")
	
	if(updateVersion != VertexClientPE.currentVersion) {
		updatePaneLayoutRight.addView(updatePaneDownloadButton);
	} else {
		updatePaneLayoutRight.addView(updatePaneTypeText);
	}
	
	updatePaneLayoutRight.addView(updatePaneInformationButton);
	
	return updatePaneLayout;
}

function tileButton(tileText, tileIcon, tileColor, forceLightColor) {
	var params = new widget.GridLayout.LayoutParams();
	params.setMargins(5, 5, 5, 5);
	params.width = display.widthPixels / 4 - dip2px(5);
	params.height = display.widthPixels / 4 - dip2px(5);
	
	var defaultTileButton = clientButton(tileText, null, tileColor, false, forceLightColor==null?true:forceLightColor, true);
	defaultTileButton.setTypeface(VertexClientPE.tileFont);
	defaultTileButton.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
	defaultTileButton.setMarqueeRepeatLimit(-1);
	defaultTileButton.setSingleLine();
	defaultTileButton.setHorizontallyScrolling(true);
	defaultTileButton.setSelected(true);
	defaultTileButton.setCompoundDrawablesWithIntrinsicBounds(0, tileIcon, 0, 0);
	defaultTileButton.setLayoutParams(params);
	
	return defaultTileButton;
}

function modButton(mod, buttonOnly) {
	if(mod.type == null) {
		mod.type = "Mod";
	}
	
	var modButtonName = mod.name;
	if(mod.requiresPro && mod.requiresPro() && !VertexClientPE.isPro()) modButtonName = "\uD83D\uDD12 " + mod.name;
	
	if(mod.state) {
		if(yesCheatPlusState && mod.canBypassYesCheatPlus && !mod.canBypassYesCheatPlus()) {
			mod.onToggle();
			mod.state = true;
		}
	}
	
	var modButtonLayout = new LinearLayout(ctx);
	modButtonLayout.setOrientation(LinearLayout.HORIZONTAL);
	if(menuType != "halfscreen") {
		modButtonLayout.setPadding(10, 5, 10, 5);
	}
	
	var modButtonLayoutLeft = new LinearLayout(ctx);
	modButtonLayoutLeft.setOrientation(1);
	if(menuType == "halfscreen") {
		modButtonLayoutLeft.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 2.5, display.heightPixels / 10));
	} else {
		modButtonLayoutLeft.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.heightPixels / 2.5 - 10, display.heightPixels / 12));
	}
	modButtonLayout.addView(modButtonLayoutLeft);
	
	var modButtonLayoutRight = new LinearLayout(ctx);
	modButtonLayoutRight.setOrientation(1);
	if(menuType == "halfscreen") {
		modButtonLayoutRight.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 2.2 - display.widthPixels / 2.5, display.heightPixels / 10));
	} else {
		modButtonLayoutRight.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.heightPixels / 2 - display.heightPixels / 2.5 - 10, display.heightPixels / 12));
	}
	modButtonLayout.addView(modButtonLayoutRight);
	
	var corner = buttonOnly==true?null:"left";
	var defaultClientButton = clientButton(modButtonName, mod.desc, null, corner);
	if(buttonOnly == null || !buttonOnly) {
		if(menuType == "halfscreen") {
			defaultClientButton.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 2.5, display.heightPixels / 10));
		} else {
			defaultClientButton.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.heightPixels / 2.5 - 10, display.heightPixels / 12));
		}
	} else if(buttonOnly) {
		defaultClientButton.setLayoutParams(new android.view.ViewGroup.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth() / 6, (ctx.getWindowManager().getDefaultDisplay().getHeight() / 3) / 5));
	}
	defaultClientButton.setAlpha(0.54);
	defaultClientButton.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
	defaultClientButton.setMarqueeRepeatLimit(-1);
	defaultClientButton.setSingleLine();
	defaultClientButton.setHorizontallyScrolling(true);
	defaultClientButton.setSelected(true);
	if(mod.isStateMod() && mod.state) {
		if(yesCheatPlusState && mod.canBypassYesCheatPlus && !mod.canBypassYesCheatPlus()) {
			defaultClientButton.setTextColor(Color.RED);
		} else {
			defaultClientButton.setTextColor(Color.GREEN);
		}
		defaultClientButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
	}
	defaultClientButton.setOnClickListener(new android.view.View.OnClickListener({
		onClick: function(viewarg) {
			var _0x4eba=["\x59\x6F\x75\x27\x76\x65\x20\x63\x61\x6D\x65\x20\x61\x63\x72\x6F\x73\x73\x20\x61\x6E\x20\x6F\x75\x74\x64\x61\x74\x65\x64\x2C\x20\x65\x64\x69\x74\x65\x64\x20\x61\x6E\x64\x20\x75\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64\x20\x56\x65\x72\x74\x65\x78\x20\x43\x6C\x69\x65\x6E\x74\x20\x50\x45\x20\x73\x63\x72\x69\x70\x74\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x74\x68\x65\x20\x6F\x66\x66\x69\x63\x69\x61\x6C\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x6F\x6E\x20\x6F\x75\x72\x20\x77\x65\x62\x73\x69\x74\x65\x3A\x20\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2E\x6D\x6C","\x74\x6F\x61\x73\x74","\x59\x6F\x75\x27\x76\x65\x20\x63\x61\x6D\x65\x20\x61\x63\x72\x6F\x73\x73\x20\x61\x6E\x20\x65\x64\x69\x74\x65\x64\x20\x61\x6E\x64\x20\x75\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64\x20\x56\x65\x72\x74\x65\x78\x20\x43\x6C\x69\x65\x6E\x74\x20\x50\x45\x20\x73\x63\x72\x69\x70\x74\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x74\x68\x65\x20\x6F\x66\x66\x69\x63\x69\x61\x6C\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x6F\x6E\x20\x6F\x75\x72\x20\x77\x65\x62\x73\x69\x74\x65\x3A\x20\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2E\x6D\x6C","\x53\x6F\x72\x72\x79\x2C\x20\x74\x68\x69\x73\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x69\x73\x20\x6E\x6F\x74\x20\x73\x75\x70\x70\x6F\x72\x74\x65\x64\x20\x61\x6E\x79\x6D\x6F\x72\x65\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x75\x70\x67\x72\x61\x64\x65\x20\x74\x6F\x20\x74\x68\x65\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x2E"];if(!isAuthorized){if(!isSupported){VertexClientPE[_0x4eba[1]](_0x4eba[0])}else {VertexClientPE[_0x4eba[1]](_0x4eba[2])};return}else {if(!isSupported){VertexClientPE[_0x4eba[1]](_0x4eba[3]);return}}
			if(mod.requiresPro && mod.requiresPro() && !VertexClientPE.isPro()) {
				VertexClientPE.showProDialog(mod.name);
				return;
			}
			if(mod.name == "YesCheat+") {
				mod.onToggle();
			} else {
				if(!yesCheatPlusState) {
					mod.onToggle();
				} else if(yesCheatPlusState && mod.canBypassYesCheatPlus == undefined || mod.canBypassYesCheatPlus == null) {
					mod.onToggle();
				} else if(yesCheatPlusState && mod.canBypassYesCheatPlus && !mod.canBypassYesCheatPlus()) {
					if(mod.isStateMod() && mod.state) {
						mod.onToggle();
					} else if(mod.isStateMod() && !mod.state) {
						mod.state = true;
					} else if(!mod.isStateMod()) {
						VertexClientPE.toast("This mod is blocked by YesCheat+!");
					}
				}
			}
			if(mod.isStateMod()) {
				if(mod.state) {
					if(yesCheatPlusState && mod.canBypassYesCheatPlus && !mod.canBypassYesCheatPlus()) {
						defaultClientButton.setTextColor(Color.RED);
					} else {
						defaultClientButton.setTextColor(Color.GREEN);
					}
					defaultClientButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
				} else if(!mod.state) {
					if(themeSetting == "white") {
						defaultClientButton.setTextColor(Color.BLACK);
						defaultClientButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.WHITE);
					} else {
						defaultClientButton.setTextColor(Color.WHITE);
						defaultClientButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
					}
				}
			}
			updateHacksList();
		}
	}));
	//var _0x9276=["\x69\x73\x50\x72\x6F","\x74\x72\x75\x65","\uD83D\uDD12\x20","\x73\x65\x74\x54\x65\x78\x74"];if(isProFeature&&VertexClientPE[_0x9276[0]]()!=_0x9276[1]){defaultClientButton[_0x9276[3]](_0x9276[2]+mod.name)}
	if(buttonOnly == null || !buttonOnly) {
		modButtonLayoutLeft.addView(defaultClientButton);
	}
	
	var defaultInfoButton = clientButton("...", mod.name + " settings", null, "right");
	if(menuType == "halfscreen") {
		defaultInfoButton.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 2.2 - display.widthPixels / 2.5, display.heightPixels / 10));
	} else {
		defaultInfoButton.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.heightPixels / 2 - display.heightPixels / 2.5 - 10, display.heightPixels / 12));
	}
	defaultInfoButton.setAlpha(0.54);
	defaultInfoButton.setOnClickListener(new android.view.View.OnClickListener({
	onClick: function(viewarg){
		VertexClientPE.showModDialog(mod, defaultClientButton);
	}
	}));
	modButtonLayoutRight.addView(defaultInfoButton);
	
	if(buttonOnly == null || !buttonOnly) {
		return modButtonLayout;
	} else if(buttonOnly) {
		return defaultClientButton;
	}
}

function addonButton(addon) {
	var addonButtonLayout = new LinearLayout(ctx);
	addonButtonLayout.setOrientation(1);
	addonButtonLayout.setGravity(android.view.Gravity.CENTER);
	
	var defaultClientButton = clientButton(addon.name + " v" + addon.current_version, addon.desc);
	defaultClientButton.setLayoutParams(new LinearLayout.LayoutParams(display.heightPixels / 2, display.heightPixels / 8));
	defaultClientButton.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
	defaultClientButton.setMarqueeRepeatLimit(-1);
	defaultClientButton.setSingleLine();
	defaultClientButton.setHorizontallyScrolling(true);
	defaultClientButton.setSelected(true);
	defaultClientButton.setOnClickListener(new android.view.View.OnClickListener({
		onClick: function(viewarg) {
			VertexClientPE.showAddonDialog(addon);
		}
	}));
	defaultClientButton.setOnLongClickListener(new android.view.View.OnLongClickListener() {
		onLongClick: function(viewArg) {
			VertexClientPE.toast(addon.desc);
			return true;
		}
	});
	//var _0x9276=["\x69\x73\x50\x72\x6F","\x74\x72\x75\x65","\uD83D\uDD12\x20","\x73\x65\x74\x54\x65\x78\x74"];if(isProFeature&&VertexClientPE[_0x9276[0]]()!=_0x9276[1]){defaultClientButton[_0x9276[3]](_0x9276[2]+mod.name)}
	addonButtonLayout.addView(defaultClientButton);
	
	return addonButtonLayout;
}

function categoryTab(category) {
	var categoryTabLayout = new LinearLayout(ctx);
	categoryTabLayout.setOrientation(1);
	categoryTabLayout.setGravity(android.view.Gravity.CENTER);

	var categoryName = VertexClientPE.category.toName(category);
	var categoryRealName = VertexClientPE.category.toRealName(category);
	
	var defaultClientButton = clientButton(categoryName);
	defaultClientButton.setAlpha(0.54);
	if(currentTab == categoryRealName) {
		defaultClientButton.setTextColor(Color.GREEN);
		defaultClientButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
	}
	defaultClientButton.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
	defaultClientButton.setMarqueeRepeatLimit(-1);
	defaultClientButton.setSingleLine();
	defaultClientButton.setHorizontallyScrolling(true);
	defaultClientButton.setSelected(true);
	defaultClientButton.setOnClickListener(new android.view.View.OnClickListener({
		onClick: function(viewarg) {
			if(currentTab != categoryRealName) {
				currentTab = categoryRealName;
				menuMiddleLayout.removeAllViews();
				menuRightLayout.removeAllViews();
				
				var tabTitle = new android.widget.TextView(ctx);
				tabTitle.setText(currentTab);
				tabTitle.setTextSize(20);
				tabTitle.setGravity(android.view.Gravity.CENTER);
				//menuRightLayout.addView(tabTitle);
				
				var categories = [VertexClientPE.category.COMBAT, VertexClientPE.category.BUILDING, VertexClientPE.category.MOVEMENT, VertexClientPE.category.CHAT, VertexClientPE.category.MISC];
	
				categories.forEach(function(element, index, array) {
					menuMiddleLayout.addView(new categoryTab(element));
				});
				
				VertexClientPE.modules.forEach(function(element, index, array) {
					if(VertexClientPE.category.toRealName(element.category) == currentTab && (element.type == "Mod" || element.type == "Special")) {
						menuRightLayout.addView(new modButton(element));
					}
				});
			}
		}
	}));
	defaultClientButton.setOnLongClickListener(new android.view.View.OnLongClickListener({
		onLongClick: function(v, t) {
			VertexClientPE.showCategoryDialog(defaultClientButton, VertexClientPE.category.toName(category), category);
			return true;
		}
	}));
	//var _0x9276=["\x69\x73\x50\x72\x6F","\x74\x72\x75\x65","\uD83D\uDD12\x20","\x73\x65\x74\x54\x65\x78\x74"];if(isProFeature&&VertexClientPE[_0x9276[0]]()!=_0x9276[1]){defaultClientButton[_0x9276[3]](_0x9276[2]+mod.name)}
	categoryTabLayout.addView(defaultClientButton);
	
	return categoryTabLayout;
}

var currentTabGUICategory;

function tabGUICategoryButton(category, layout, layoutToBeOpened, layoutMain) {
	var tabGUICategoryButtonLayout = new LinearLayout(ctx);
	tabGUICategoryButtonLayout.setOrientation(1);
	
	var categoryButton = clientButton(VertexClientPE.category.toName(category));
	categoryButton.setLayoutParams(new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, (ctx.getWindowManager().getDefaultDisplay().getHeight() / 3) / 5));
	categoryButton.setOnClickListener(new android.view.View.OnClickListener({
		onClick: function(viewarg) {
			if(categoryButton.getCurrentTextColor() != Color.GREEN) {
				categoryButton.setTextColor(Color.GREEN);
				categoryButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
				currentTabGUICategory = category;
			} else {
				if(themeSetting == "white") {
					categoryButton.setTextColor(Color.BLACK);
					categoryButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.WHITE);
				} else {
					categoryButton.setTextColor(Color.WHITE);
					categoryButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
				}
				currentTabGUICategory = null;
			}
			for(var i = 0; i < layout.getChildCount(); i++) {
				if(layout.getChildAt(i).getChildAt(0) != categoryButton) {
					if(themeSetting == "white") {
						layout.getChildAt(i).getChildAt(0).setTextColor(Color.BLACK);
						layout.getChildAt(i).getChildAt(0).setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.WHITE);
					} else {
						layout.getChildAt(i).getChildAt(0).setTextColor(Color.WHITE);
						layout.getChildAt(i).getChildAt(0).setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
					}
				}
			}
			if(currentTabGUICategory != null) {
				if(layoutMain.getChildCount() == 1) {
					layoutMain.addView(layoutToBeOpened);
					var layoutToBeOpenedScrollView = new ScrollView(ctx);
					var layoutToBeOpened1 = new LinearLayout(ctx);
					layoutToBeOpened1.setOrientation(1);
					layoutToBeOpened.addView(layoutToBeOpenedScrollView);
					layoutToBeOpenedScrollView.addView(layoutToBeOpened1);
					VertexClientPE.modules.forEach(function(element, index, array) {
						if(element.category == category && (element.type == "Mod" || element.type == "Special")) {
							layoutToBeOpened1.addView(new modButton(element, true));
						}
					});
					//print("Added right layout");
				} else if(layoutMain.getChildCount() == 2) {
					//layoutToBeOpened.addView for all modButtons
					layoutToBeOpened.removeAllViews();
					var layoutToBeOpenedScrollView = new ScrollView(ctx);
					var layoutToBeOpened1 = new LinearLayout(ctx);
					layoutToBeOpened1.setOrientation(1);
					layoutToBeOpened.addView(layoutToBeOpenedScrollView);
					layoutToBeOpenedScrollView.addView(layoutToBeOpened1);
					VertexClientPE.modules.forEach(function(element, index, array) {
						if(element.category == category && (element.type == "Mod" || element.type == "Special")) {
							layoutToBeOpened1.addView(new modButton(element, true));
						}
					});
					//print("Updated right layout");
				}
			} else {
				if(layoutMain.getChildCount() == 2) {
					layoutMain.removeViewAt(1);
					layoutToBeOpened.removeAllViews();
					//print("Removed right layout");
				}
			}
		}
	}));
	tabGUICategoryButtonLayout.addView(categoryButton);
	if(currentTabGUICategory == category) {
		categoryButton.performClick();
	}
	
	return tabGUICategoryButtonLayout;
}

function accountButton(account, layout) {
	var accountManagerAccountLayout = new LinearLayout(ctx);
	accountManagerAccountLayout.setOrientation(LinearLayout.HORIZONTAL);
	/*if(account.name == null || account.name == undefined) {
		return accountManagerAccountLayout;
	}
	if(account.clientId == null || account.clientId == undefined) {
		return accountManagerAccountLayout;
	}*/
	
	var accountManagerAccountLayoutLeft = new LinearLayout(ctx);
	accountManagerAccountLayoutLeft.setOrientation(1);
	accountManagerAccountLayoutLeft.setGravity(android.view.Gravity.CENTER_VERTICAL);
	accountManagerAccountLayoutLeft.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
	accountManagerAccountLayout.addView(accountManagerAccountLayoutLeft);
	
	var accountManagerAccountLayoutCenter = new LinearLayout(ctx);
	accountManagerAccountLayoutCenter.setOrientation(1);
	accountManagerAccountLayoutCenter.setGravity(android.view.Gravity.CENTER);
	accountManagerAccountLayoutCenter.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
	accountManagerAccountLayout.addView(accountManagerAccountLayoutCenter);
	
	var accountManagerAccountLayoutRight = new LinearLayout(ctx);
	accountManagerAccountLayoutRight.setOrientation(LinearLayout.HORIZONTAL);
	accountManagerAccountLayoutRight.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
	accountManagerAccountLayout.addView(accountManagerAccountLayoutRight);
	var usernameText = clientTextView(account);
	usernameText.setTextSize(15);
	accountManagerAccountLayoutLeft.addView(usernameText);
	/*var clientIdText = clientTextView(account.clientId);
	clientIdText.setTextSize(15);
	accountManagerAccountLayoutCenter.addView(clientIdText);*/
	var useButton = clientButton("Use");
	useButton.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
	useButton.setOnClickListener(new android.view.View.OnClickListener({
		onClick: function(viewarg) {
			var playerName = account.toString();
			//var playerClientId = account.clientId.toString();
			var shouldRestart = false;
			if(playerName != ModPE.getPlayerName()) {
				ModPE.setPlayerName(playerName);
				shouldRestart = true;
			}
			/*if(playerClientId != ModPE.getClientId()) {
				ModPE.changeClientId(playerClientId);
				shouldRestart = true;
			}*/
			if(shouldRestart) {
				ModPE.restart();
				return;
			}
			accountManager.dismiss();
			exitAccountManagerUI.dismiss();
			showMenuButton();
			showAccountManagerButton();
		}
	}));
	accountManagerAccountLayoutRight.addView(useButton);
	var deleteButton = clientButton("x");
	deleteButton.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 3 - display.widthPixels / 4, display.heightPixels / 10));
	deleteButton.setOnClickListener(new android.view.View.OnClickListener({
		onClick: function(viewarg) {
			VertexClientPE.removeAccount(account.toString(), layout, accountManagerAccountLayout);
			/*accountManager.dismiss();
			exitAccountManagerUI.dismiss();
			showMenuButton();
			showAccountManagerButton();*/
		}
	}));
	accountManagerAccountLayoutRight.addView(deleteButton);
	
	return accountManagerAccountLayout;
}

function clientTextButton(text, shadow) //menu buttons
{
    var defaultTextButton = new Button(ctx);
    defaultTextButton.setText(text);
	
	if(shadow == true && shadow != null && shadow != undefined) {
		if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
			defaultTextButton.setShadowLayer(1, Math.round(defaultTextButton.getLineHeight() / 8), Math.round(defaultTextButton.getLineHeight() / 8), Color.parseColor("#FF333333"));
		} else {
			defaultTextButton.setShadowLayer(0.0001, Math.round(defaultTextButton.getLineHeight() / 8), Math.round(defaultTextButton.getLineHeight() / 8), Color.parseColor("#FF333333"));
		}
	}
    defaultTextButton.setPadding(0, 0, 0, 0);
    defaultTextButton.setLineSpacing(0, 1.15);
    return defaultTextButton;
}

function clientTextView(text, shadow) //menu buttons
{
    var defaultTextView = new widget.TextView(ctx);
    defaultTextView.setText(text);
	if(themeSetting == "white") {
		defaultTextView.setTextColor(Color.BLACK);
	} else {
		defaultTextView.setTextColor(Color.WHITE);
	}
    defaultTextView.setTypeface(VertexClientPE.font);
	
	if(shadow == true && shadow != null && shadow != undefined) {
		if(themeSetting == "white") {
			defaultTextView.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.WHITE);
		} else {
			defaultTextView.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
		}
	}
    defaultTextView.setPadding(0, 0, 0, 0);
    defaultTextView.setLineSpacing(0, 1.15);
    return defaultTextView;
}

function clientSectionTitle(text, style) {
	var defaultTextView = new widget.TextView(ctx);
    defaultTextView.setText(text);
	defaultTextView.setTextColor(Color.WHITE);
	defaultTextView.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.BLACK);
    defaultTextView.setTypeface(VertexClientPE.font);
	
	if(style == "rainbow") {
		var rainbowInt = java.lang.reflect.Array.newInstance(java.lang.Integer.TYPE, 7);
		rainbowInt[0] = Color.RED;
		rainbowInt[1] = Color.MAGENTA;
		rainbowInt[2] = Color.BLUE;
		rainbowInt[3] = Color.CYAN;
		rainbowInt[4] = Color.GREEN;
		rainbowInt[5] = Color.YELLOW;
		rainbowInt[6] = Color.RED;
		var rainbowBg = new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, rainbowInt);
		defaultTextView.setBackgroundDrawable(rainbowBg);
	} else {
		if(themeSetting == "white") {
			defaultTextView.setTextColor(Color.BLACK);
			defaultTextView.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color.WHITE);
		}
		defaultTextView.setBackgroundDrawable(backgroundSpecial());
	}
    defaultTextView.setPadding(0, 0, 0, 0);
    defaultTextView.setLineSpacing(0, 1.15);
    return defaultTextView;
}

function clientHR() {//horizontal divider
	var defaultView = new android.view.View(ctx);
	defaultView.setLayoutParams(new LinearLayout.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, 5));
	defaultView.setBackgroundColor(Color.parseColor("#B3B3B3"));
	
    return defaultView;
}

function categoryTitle(text) {
	var categoryTitleLayout = new LinearLayout(ctx);
	categoryTitleLayout.setOrientation(LinearLayout.HORIZONTAL);
	
	var categoryTitleLayoutLeft = new LinearLayout(ctx);
	categoryTitleLayoutLeft.setOrientation(1);
	categoryTitleLayoutLeft.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.heightPixels / 3 - display.heightPixels / 4, display.heightPixels / 20));
	categoryTitleLayout.addView(categoryTitleLayoutLeft);
	
	var categoryTitleLayoutMiddle = new LinearLayout(ctx);
	categoryTitleLayoutMiddle.setOrientation(1);
	categoryTitleLayoutMiddle.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.heightPixels / 3, display.heightPixels / 20));
	categoryTitleLayout.addView(categoryTitleLayoutMiddle);
	
	var categoryTitleLayoutRight = new LinearLayout(ctx);
	categoryTitleLayoutRight.setOrientation(1);
	categoryTitleLayoutRight.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.heightPixels / 3 - display.heightPixels / 4, display.heightPixels / 20));
	categoryTitleLayout.addView(categoryTitleLayoutRight);
	
	var defaultSettingsButton = clientButton("\u270E", null, null, "left", null, true);
	defaultSettingsButton.setLayoutParams(new LinearLayout.LayoutParams(display.heightPixels / 3 - display.heightPixels / 4, display.heightPixels / 20));
	defaultSettingsButton.setAlpha(0.54);
	categoryTitleLayoutLeft.addView(defaultSettingsButton);
	
	var defaultTitle = coloredSubTitle(text);
	defaultTitle.setLayoutParams(new LinearLayout.LayoutParams(display.heightPixels / 3, display.heightPixels / 20));
	defaultTitle.setGravity(view.Gravity.CENTER);
	categoryTitleLayoutMiddle.addView(defaultTitle);
	
	var defaultArrowButton = clientButton("\u25BD", null, null, "right", null, true);
	defaultArrowButton.setLayoutParams(new LinearLayout.LayoutParams(display.heightPixels / 3 - display.heightPixels / 4, display.heightPixels / 20));
	defaultArrowButton.setAlpha(0.54);
	categoryTitleLayoutRight.addView(defaultArrowButton);
	
	this.getName = function() {
		return text;
	}
	
	this.getLeftButton = function() {
		return defaultSettingsButton;
	}
	
	this.getMiddleButton = function() {
		return defaultTitle;
	}
	
	this.getRightButton = function() {
		return defaultArrowButton;
	}
	
	this.getLayout = function() {
		return categoryTitleLayout;
	}
}

function coloredSubTitle(subtitle) // TextView with colored background (edited by peacestorm)
{
	var bg = android.graphics.drawable.GradientDrawable();
	if(useLightThemeSetting == "on") {
		bg.setColor(Color.parseColor("#00994C"));
		bg.setStroke(dip2px(2), Color.parseColor("#00CC66"));
	} else {
		bg.setColor(Color.parseColor("#0B5B25"));
		bg.setStroke(dip2px(2), Color.parseColor("#0F8219"));
	}
	if(themeSetting == "red") {
		if(useLightThemeSetting == "on") {
			bg.setColor(Color.parseColor("#FF3333"));
			bg.setStroke(dip2px(2), Color.parseColor("#FF6666"));
		} else {
			bg.setColor(Color.parseColor("#5B0C0C"));
			bg.setStroke(dip2px(2), Color.parseColor("#821010"));
		}
	}if(themeSetting == "blue") {
		if(useLightThemeSetting == "on") {
			bg.setColor(Color.parseColor("#0080FF"));
			bg.setStroke(dip2px(2), Color.parseColor("#3399FF"));
		} else {
			bg.setColor(Color.parseColor("#0A175B"));
			bg.setStroke(dip2px(2), Color.parseColor("#0E3882"));
		}
	}if(themeSetting == "purple") {
		bg.setColor(Color.parseColor("#9F018C"));
		bg.setStroke(dip2px(2), Color.parseColor("#BC21AB"));
	}if(themeSetting == "yellow") {
		bg.setColor(Color.parseColor("#CCCC00"));
		bg.setStroke(dip2px(2), Color.parseColor("#FFFF00"));
	}if(themeSetting == "white") {
		bg.setColor(Color.parseColor("#E1E1E1"));
		bg.setStroke(dip2px(2), Color.parseColor("#FFFFFF"));
	}if(themeSetting == "black") {
		bg.setColor(Color.parseColor("#141414"));
		bg.setStroke(dip2px(2), Color.parseColor("#1E1E1E"));
	}
	bg.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);

	var title = clientTextView(subtitle, true);
	title.setAlpha(0.54);
	title.setBackgroundDrawable(bg);

	return title;
}

function backgroundSpecial(round, color, showProLine, lightColor) {
	var bg = android.graphics.drawable.GradientDrawable();
	if(round == true) {
		bg.setCornerRadius(8);
	} else if(round != false && round != null) {
		var radiiFloatArray = java.lang.reflect.Array.newInstance(java.lang.Float.TYPE, 9);
		var radius = 0;
		if(round == "left") {
			for(var i = 0; i <= 7; i++) {
				if(i == 0 || i == 1 || i == 6 || i == 7) {
					radiiFloatArray[i] = 8;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "right") {
			for(var i = 0; i <= 7; i++) {
				if(i == 2 || i == 3 || i == 4 || i == 5) {
					radiiFloatArray[i] = 8;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "cornerleft") {
			for(var i = 0; i <= 7; i++) {
				if(i == 6 || i == 7) {
					radiiFloatArray[i] = 180;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "cornerright") {
			for(var i = 0; i <= 7; i++) {
				if(i == 4 || i == 5) {
					radiiFloatArray[i] = 180;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "bottom") {
			for(var i = 0; i <= 7; i++) {
				if(i >= 4) {
					radiiFloatArray[i] = 8;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "top") {
			for(var i = 0; i <= 7; i++) {
				if(i <= 3) {
					radiiFloatArray[i] = 8;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "invertcornerright") {
			for(var i = 0; i <= 7; i++) {
				if(i == 2 || i == 3) {
					radiiFloatArray[i] = -180;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round != false && round != null) {
			bg.setCornerRadius(round);
		}
	}
	if(color == null) {
		bg.setColor(Color.parseColor("#70151515"));
	} else if(color == "green") {
		if(useLightThemeSetting == "on") {
			bg.setColor(Color.parseColor("#7000994C"));
		} else {
			bg.setColor(Color.parseColor("#700B5B25"));
		}
	} else if(color == "red") {
		if(useLightThemeSetting == "on") {
			bg.setColor(Color.parseColor("#70FF3333"));
		} else {
			bg.setColor(Color.parseColor("#705B0C0C"));
		}
	} else if(color == "blue") {
		if(useLightThemeSetting == "on") {
			bg.setColor(Color.parseColor("#700080FF"));
		} else {
			bg.setColor(Color.parseColor("#700A175B"));
		}
	} else if(color == "purple") {
		bg.setColor(Color.parseColor("#709F018C"));
	} else if(color == "yellow") {
		bg.setColor(Color.parseColor("#70CCCC00"));
	} else if(color == "white") {
		bg.setColor(Color.parseColor("#70E1E1E1"));
	} else if(color == "black") {
		bg.setColor(Color.parseColor("#70141414"));
	}
	if(showProLine == true && VertexClientPE.isPro()) {
		bg.setStroke(dip2px(1), Color.parseColor("#70DAA520"));
	}
	bg.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);

	return bg;
}

function backgroundRainbow(round) {
	var bg = android.graphics.drawable.GradientDrawable();
	if(round == true) {
		bg.setCornerRadius(8);
	} else if(round != false && round != null) {
		var radiiFloatArray = java.lang.reflect.Array.newInstance(java.lang.Float.TYPE, 9);
		var radius = 0;
		if(round == "left") {
			for(var i = 0; i <= 7; i++) {
				if(i == 0 || i == 1 || i == 6 || i == 7) {
					radiiFloatArray[i] = 8;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "right") {
			for(var i = 0; i <= 7; i++) {
				if(i == 2 || i == 3 || i == 4 || i == 5) {
					radiiFloatArray[i] = 8;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "cornerleft") {
			for(var i = 0; i <= 7; i++) {
				if(i == 6 || i == 7) {
					radiiFloatArray[i] = 180;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "cornerright") {
			for(var i = 0; i <= 7; i++) {
				if(i == 4 || i == 5) {
					radiiFloatArray[i] = 180;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "bottom") {
			for(var i = 0; i <= 7; i++) {
				if(i >= 4) {
					radiiFloatArray[i] = 8;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "invertcornerright") {
			for(var i = 0; i <= 7; i++) {
				if(i == 2 || i == 3) {
					radiiFloatArray[i] = -180;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round != false && round != null) {
			bg.setCornerRadius(round);
		}
	}
	var rainbowInt = java.lang.reflect.Array.newInstance(java.lang.Integer.TYPE, 7);
	rainbowInt[0] = Color.RED;
	rainbowInt[1] = Color.MAGENTA;
	rainbowInt[2] = Color.BLUE;
	rainbowInt[3] = Color.CYAN;
	rainbowInt[4] = Color.GREEN;
	rainbowInt[5] = Color.YELLOW;
	rainbowInt[6] = Color.RED;
	var bg = new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, rainbowInt);
	bg.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);

	return bg;
}

function backgroundGradient(round) // TextView with colored background (edited by peacestorm)
{
	var bg = android.graphics.drawable.GradientDrawable();
	if(round == true) {
		var radiiFloatArray = java.lang.reflect.Array.newInstance(java.lang.Float.TYPE, 9);
		for(var i = 0; i <= 7; i++) {
			var radius = 0;
			if(i >= 4) {
				radiiFloatArray[i] = 16;
			} else {
				radiiFloatArray[i] = radius;
			}
		}
		bg.setCornerRadii(radiiFloatArray);
	} else if(round != false && round != null) {
		bg.setCornerRadius(round);
	}
	if(useLightThemeSetting == "on") {
		bg.setColor(Color.parseColor("#7000994C"));
		bg.setStroke(dip2px(2), Color.parseColor("#7000CC66"));
	} else {
		bg.setColor(Color.parseColor("#700B5B25"));
		bg.setStroke(dip2px(2), Color.parseColor("#700F8219"));
	}
	if(themeSetting == "red") {
		if(useLightThemeSetting == "on") {
			bg.setColor(Color.parseColor("#70FF3333"));
			bg.setStroke(dip2px(2), Color.parseColor("#70FF6666"));
		} else {
			bg.setColor(Color.parseColor("#705B0C0C"));
			bg.setStroke(dip2px(2), Color.parseColor("#70821010"));
		}
	}if(themeSetting == "blue") {
		if(useLightThemeSetting == "on") {
			bg.setColor(Color.parseColor("#700080FF"));
			bg.setStroke(dip2px(2), Color.parseColor("#703399FF"));
		} else {
			bg.setColor(Color.parseColor("#700A175B"));
			bg.setStroke(dip2px(2), Color.parseColor("#700E3882"));
		}
	}if(themeSetting == "purple") {
		bg.setColor(Color.parseColor("#709F018C"));
		bg.setStroke(dip2px(2), Color.parseColor("#70BC21AB"));
	}if(themeSetting == "yellow") {
		bg.setColor(Color.parseColor("#70CCCC00"));
		bg.setStroke(dip2px(2), Color.parseColor("#70FFFF00"));
	}if(themeSetting == "white") {
		bg.setColor(Color.parseColor("#70E1E1E1"));
		bg.setStroke(dip2px(2), Color.parseColor("#70FFFFFF"));
	}if(themeSetting == "black") {
		bg.setColor(Color.parseColor("#70141414"));
		bg.setStroke(dip2px(2), Color.parseColor("#701E1E1E"));
	}
	bg.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);

	return bg;
}

(VertexClientPE.editCopyrightText = function() {
	VertexClientPE.loadMainSettings();
	ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A72Vertex Client PE by peacestorm");
	if(themeSetting == "red") {
		ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A74Vertex Client PE by peacestorm");
	} if(themeSetting == "blue") {
		ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A71Vertex Client PE by peacestorm");
	} if(themeSetting == "purple") {
		ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A75Vertex Client PE by peacestorm");
	} if(themeSetting == "yellow") {
		ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A7eVertex Client PE by peacestorm");
	} if(themeSetting == "white") {
		ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A7fVertex Client PE by peacestorm");
	} if(themeSetting == "black") {
		ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A70Vertex Client PE by peacestorm");
	}
})();

function getRandomInt(min, max) {
	return Math.floor((Math.random() * max) + min);
}

VertexClientPE.checkForUpdates = function() {
    try {
        // download content
        var url = new java.net.URL("https://raw.githubusercontent.com/Vertex-Client/Vertex-Client-PE/update/Updater/Version");
        var connection = url.openConnection();

        // get content
        inputStream = connection.getInputStream();

        // read result
        var loadedVersion = "";
        var bufferedVersionReader = new java.io.BufferedReader(new java.io.InputStreamReader(inputStream));
        var rowVersion = "";
        while((rowVersion = bufferedVersionReader.readLine()) != null) {
            loadedVersion += rowVersion;
        }
		
		if(loadedVersion.split(" ")[1] == "Beta" || loadedVersion.split(" ")[1] == "Alpha") {
			VertexClientPE.latestVersion = loadedVersion.split(" ")[0] + " " + loadedVersion.split(" ")[1];
			latestPocketEditionVersion = loadedVersion.split(" ")[2];
		} else {
			VertexClientPE.latestVersion = loadedVersion.split(" ")[0];
			latestPocketEditionVersion = loadedVersion.split(" ")[1];
		}

        // close what needs to be closed
        bufferedVersionReader.close();

        // test
        //clientMessage(VertexClientPE.getVersion("current"); + " " + latestVersion);
    } catch(err) {
        VertexClientPE.clientMessage("Can't check for updates, please check your Internet connection.");
        ModPE.log("[Vertex Client PE] VertexClientPE.checkForUpdates() caught an error: " + err);
		if(sharedPref.getString("VertexClientPE.latestVersion", null) != null && sharedPref.getString("VertexClientPE.latestVersion", null) != undefined) {
			VertexClientPE.latestVersion = sharedPref.getString("VertexClientPE.latestVersion", null);
		} else {
			VertexClientPE.latestVersion = VertexClientPE.currentVersion;
		}
		return;
    }
	
	editor.putString("VertexClientPE.latestVersion", VertexClientPE.latestVersion);
	editor.commit();
	themeSetup = "off";
	VertexClientPE.setupMCPEGUI();
}

VertexClientPE.loadUpdateDescription = function() {
    try {
        // download content
        var url = new java.net.URL("https://raw.githubusercontent.com/Vertex-Client/Vertex-Client-PE/update/Updater/Version-Desc/" + VertexClientPE.latestVersion);
        var connection = url.openConnection();

        // get content
        inputStream = connection.getInputStream();

        // read result
        var loadedUpdateDesc = "";
        var bufferedUpdateDescReader = new java.io.BufferedReader(new java.io.InputStreamReader(inputStream));
        var rowUpdateDesc = "";
        while((rowUpdateDesc = bufferedUpdateDescReader.readLine()) != null) {
            loadedUpdateDesc += rowUpdateDesc;
        }
		
		VertexClientPE.latestVersionDesc = loadedUpdateDesc;

        // close what needs to be closed
        bufferedUpdateDescReader.close();

        // test
        //clientMessage(VertexClientPE.getVersion("current"); + " " + latestVersion);
    } catch(err) {
        ModPE.log("[Vertex Client PE] VertexClientPE.loadUpdateDescription() caught an error: " + err);
		if(sharedPref.getString("VertexClientPE.latestVersionDesc", null) != null && sharedPref.getString("VertexClientPE.latestVersionDesc", null) != undefined) {
			VertexClientPE.latestVersionDesc = sharedPref.getString("VertexClientPE.latestVersionDesc", null);
		} else {
			VertexClientPE.latestVersionDesc = "Unknown";
		}
		return;
    }
	
	editor.putString("VertexClientPE.latestVersionDesc", VertexClientPE.latestVersionDesc);
	editor.commit();
}

VertexClientPE.loadNews = function() {
    try {
        // download content
        var url = new java.net.URL("https://raw.githubusercontent.com/Vertex-Client/Vertex-Client-PE/news/News");
        var connection = url.openConnection();

        // get content
        newsInputStream = connection.getInputStream();

        // read result
        var loadedNews = "";
        var bufferedNewsReader = new java.io.BufferedReader(new java.io.InputStreamReader(newsInputStream));
        var rowNews = "";
        while((rowNews = bufferedNewsReader.readLine()) != null) {
            loadedNews += rowNews;
        }
		news = loadedNews.toString();

        // close what needs to be closed
        bufferedNewsReader.close();

        // test
        //clientMessage(VertexClientPE.getVersion("current"); + " " + latestVersion);
    } catch(err) {
		news = "News couldn't be loaded";
        ModPE.log("[Vertex Client PE] VertexClientPE.loadNews() caught an error: " + err);
    } finally {
		if(news == null || news == undefined) {
			news = "News couldn't be loaded";
		}
	}
}

VertexClientPE.loadSupport = function() {
    try {
        // download content
        var url = new java.net.URL("https://raw.githubusercontent.com/Vertex-Client/Vertex-Client-PE/update/Support/" + VertexClientPE.currentVersion + "/support");
        var connection = url.openConnection();

        // get content
        supportInputStream = connection.getInputStream();

        // read result
        var loadedSupport = "";
        var bufferedSupportReader = new java.io.BufferedReader(new java.io.InputStreamReader(supportInputStream));
        var rowSupport = "";
        while((rowSupport = bufferedSupportReader.readLine()) != null) {
            loadedSupport += rowSupport;
        }
		isSupported = loadedSupport.toString().split(" ")[0] =="unsupported"?false:true;

        // close what needs to be closed
        bufferedSupportReader.close();

        // test
        //clientMessage(VertexClientPE.getVersion("current"); + " " + latestVersion);
    } catch(err) {
		if(sharedPref.getString("VertexClientPE.isSupported_" + VertexClientPE.currentVersion, null) == "false") {
			isSupported = false;
		} else {
			isSupported = true;
		}
        ModPE.log("[Vertex Client PE] VertexClientPE.loadSupport() caught an error: " + err);
		return;
    }
	editor.putString("VertexClientPE.isSupported_" + VertexClientPE.currentVersion, isSupported.toString());
	editor.commit();
	//print(isSupported);
}

VertexClientPE.loadDownloadCount = function() {
    try {
        // download content
        var url = new java.net.URL("https://api.github.com/repos/Vertex-Client/Vertex-Client-PE/releases/latest");
        var connection = url.openConnection();

        // get content
        dlCountInputStream = connection.getInputStream();

        // read result
        var loadedDLCount = "";
        var bufferedDLCountReader = new java.io.BufferedReader(new java.io.InputStreamReader(dlCountInputStream));
        var rowDLCount = "";
        while((rowDLCount = bufferedDLCountReader.readLine()) != null) {
            loadedDLCount += rowDLCount;
        }
		VertexClientPE.latestReleaseDownloadCount = new org.json.JSONObject(loadedDLCount.toString()).getInt("download_count");
		print(VertexClientPE.latestReleaseDownloadCount);

        // close what needs to be closed
        bufferedDLCountReader.close();

        // test
        //clientMessage(VertexClientPE.getVersion("current"); + " " + latestVersion);
    } catch(err) {
		ModPE.log("[Vertex Client PE] VertexClientPE.loadDownloadCount() caught an error: " + err);
		return;
    }
	editor.putString("VertexClientPE.latestReleaseDownloadCount", VertexClientPE.latestReleaseDownloadCount.toString());
	editor.commit();
	//print(isSupported);
}

new java.lang.Thread(new java.lang.Runnable() {
	run: function() {
		VertexClientPE.loadMainSettings();
		VertexClientPE.loadNews();
		if(showNewsSetting == "on") {
			ctx.runOnUiThread(new java.lang.Runnable({
				run: function() {
					VertexClientPE.toast(news);
				}
			}));
		}
	}
}).start();

VertexClientPE.showSplashScreen = function() {
	var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
					/*ctx.getWindow().clearFlags(android.view.WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
					ctx.getWindow().setStatusBarColor(ctx.getResources().getColor(net.zhuoweizhang.mcpelauncher.R.color.off_white));
					ctx.getWindow().setNavigationBarColor(ctx.getResources().getColor(net.zhuoweizhang.mcpelauncher.R.color.off_white));
					ctx.getWindow().addFlags(android.view.WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);*/
                    var mainMenuListLayout = new LinearLayout(ctx);
                    mainMenuListLayout.setOrientation(1);
                    mainMenuListLayout.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
                    //--------Add Buttons-------//
					var mainMenuListLayoutTop = new LinearLayout(ctx);
					mainMenuListLayoutTop.setOrientation(1);
					mainMenuListLayoutTop.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight() / 6));
					var logo1 = android.util.Base64.decode(logoImage, 0);
					var logoViewer1 = new widget.ImageView(ctx);
					logoViewer1.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight() / 4));
					logoViewer1.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(logo1, 0, logo1.length));
					var VertexClientPEMainMenuText = "<font color='#008000'>" + VertexClientPE.getVersion("current") + "</font>";
					if(themeSetting == "red") {
						VertexClientPEMainMenuText = "<font color='#FF0000'>" + VertexClientPE.getVersion("current") + "</font>";
					}if(themeSetting == "blue") {
						VertexClientPEMainMenuText = "<font color='#0000FF'>" + VertexClientPE.getVersion("current") + "</font>";
					}if(themeSetting == "purple") {
						VertexClientPEMainMenuText = "<font color='#800080'>" + VertexClientPE.getVersion("current") + "</font>";
					}if(themeSetting == "yellow") {
						VertexClientPEMainMenuText = "<font color='#FFFF00'>" + VertexClientPE.getVersion("current") + "</font>";
					}if(themeSetting == "white") {
						VertexClientPEMainMenuText = "<font color='#FFFFFF'>" + VertexClientPE.getVersion("current") + "</font>";
					}if(themeSetting == "black") {
						VertexClientPEMainMenuText = "<font color='#000000'>" + VertexClientPE.getVersion("current") + "</font>";
					}
					// var hoverCarButton = ctx.getWindow().getDecorView()./*getContentView().*/findViewById(net.zhuoweizhang.mcpelauncher.R.id.hovercar_main_button);
					// hoverCarButton.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(logo1, 0, logo1.length));
					var text = VertexClientPEMainMenuText + " - Welcome back " + ModPE.getPlayerName() + "!";
					var TitleText = clientTextView(text, true);
					TitleText.setText(android.text.Html.fromHtml("<blink>" + text + "</blink>"), widget.TextView.BufferType.SPANNABLE);
					TitleText.setTextSize(18);
					TitleText.setGravity(android.view.Gravity.CENTER);
					TitleText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
					TitleText.setMarqueeRepeatLimit(-1);
					TitleText.setSingleLine();
					TitleText.setHorizontallyScrolling(true);
					TitleText.setSelected(true);
					var newLineText = new widget.TextView(ctx);
					newLineText.setText("\n\n\n");
					newLineText.setTextSize(10);
					var mainMenuListLayoutMiddle = new LinearLayout(ctx);
					mainMenuListLayoutMiddle.setOrientation(LinearLayout.HORIZONTAL);
					mainMenuListLayoutMiddle.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight() / 3));
					var mainMenuListLayoutMiddleLeft = new LinearLayout(ctx);
					mainMenuListLayoutMiddleLeft.setOrientation(1);
					mainMenuListLayoutMiddleLeft.setGravity(android.view.Gravity.RIGHT);
					mainMenuListLayoutMiddleLeft.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth() / 3, ctx.getWindowManager().getDefaultDisplay().getHeight() / 3));
					var mainMenuListLayoutMiddleMiddle = new LinearLayout(ctx);
					mainMenuListLayoutMiddleMiddle.setOrientation(1);
					mainMenuListLayoutMiddleMiddle.setGravity(android.view.Gravity.CENTER);
					mainMenuListLayoutMiddleMiddle.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth() / 3, ctx.getWindowManager().getDefaultDisplay().getHeight() / 3));
					var mainMenuListLayoutMiddleRight = new LinearLayout(ctx);
					mainMenuListLayoutMiddleRight.setOrientation(1);
					mainMenuListLayoutMiddleRight.setGravity(android.view.Gravity.LEFT);
					mainMenuListLayoutMiddleRight.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth() / 3, ctx.getWindowManager().getDefaultDisplay().getHeight() / 3));
					mainMenuListLayoutMiddle.addView(mainMenuListLayoutMiddleLeft);
					mainMenuListLayoutMiddle.addView(mainMenuListLayoutMiddleMiddle);
					mainMenuListLayoutMiddle.addView(mainMenuListLayoutMiddleRight);
					var youTubeButton = new Button(ctx);
					youTubeButton.setBackground(splashYouTubeButtonClientGUI);
					youTubeButton.setGravity(android.view.Gravity.CENTER);
					youTubeButton.setLayoutParams(new LinearLayout.LayoutParams(display.heightPixels / 5, display.heightPixels / 5));
					youTubeButton.setOnTouchListener(new android.view.View.OnTouchListener() {
						onTouch: function(v, event) {
							youTubeButton.setSoundEffectsEnabled(false);
							var action = event.getActionMasked();
							if(action == android.view.MotionEvent.ACTION_CANCEL || action == android.view.MotionEvent.ACTION_UP) {
								var bNP = splashYouTubeButtonClientGUI;
								bNP.setFilterBitmap(false);
								bNP.setAntiAlias(false);
								youTubeButton.setBackgroundDrawable(bNP);
								youTubeButton.setPadding(0, 0, 0, 0);
							} else {
								var bNP = splashYouTubeButtonClickedClientGUI;
								bNP.setFilterBitmap(false);
								bNP.setAntiAlias(false);
								youTubeButton.setBackgroundDrawable(bNP);
								youTubeButton.setPadding(0, Math.round(youTubeButton.getLineHeight() / 8), 0, 0);
							}
							return false;
						}
					});
					var playButton = new Button(ctx);
					playButton.setBackground(playButtonClientGUI);
					playButton.setGravity(android.view.Gravity.CENTER);
					playButton.setLayoutParams(new LinearLayout.LayoutParams(display.heightPixels / 3, display.heightPixels / 3));
					playButton.setOnTouchListener(new android.view.View.OnTouchListener() {
						onTouch: function(v, event) {
							playButton.setSoundEffectsEnabled(false);
							var action = event.getActionMasked();
							if(action == android.view.MotionEvent.ACTION_CANCEL || action == android.view.MotionEvent.ACTION_UP) {
								var bNP = playButtonClientGUI;
								bNP.setFilterBitmap(false);
								bNP.setAntiAlias(false);
								playButton.setBackgroundDrawable(bNP);
								playButton.setPadding(0, 0, 0, 0);
							} else {
								var bNP = playButtonClickedClientGUI;
								bNP.setFilterBitmap(false);
								bNP.setAntiAlias(false);
								playButton.setBackgroundDrawable(bNP);
								playButton.setPadding(0, Math.round(playButton.getLineHeight() / 8), 0, 0);
							}
							return false;
						}
					});
					var twitterButton = new Button(ctx);
					twitterButton.setBackgroundDrawable(splashTwitterButtonClientGUI);
					twitterButton.setGravity(android.view.Gravity.CENTER);
					twitterButton.setLayoutParams(new LinearLayout.LayoutParams(display.heightPixels / 5, display.heightPixels / 5));
					twitterButton.setOnTouchListener(new android.view.View.OnTouchListener() {
						onTouch: function(v, event) {
							twitterButton.setSoundEffectsEnabled(false);
							var action = event.getActionMasked();
							if(action == android.view.MotionEvent.ACTION_CANCEL || action == android.view.MotionEvent.ACTION_UP) {
								var bNP = splashTwitterButtonClientGUI;
								bNP.setFilterBitmap(false);
								bNP.setAntiAlias(false);
								twitterButton.setBackgroundDrawable(bNP);
								twitterButton.setPadding(0, 0, 0, 0);
							} else {
								var bNP = splashTwitterButtonClickedClientGUI;
								bNP.setFilterBitmap(false);
								bNP.setAntiAlias(false);
								twitterButton.setBackgroundDrawable(bNP);
								twitterButton.setPadding(0, Math.round(twitterButton.getLineHeight() / 8), 0, 0);
							}
							return false;
						}
					});
					
					youTubeButton.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function(viewarg) {
							mainMenuTextList.dismiss();
							showMenuButton();
							VertexClientPE.clientTick();
							VertexClientPE.specialTick();
							VertexClientPE.secondTick();
							showAccountManagerButton();
							if(userIsNewToCurrentVersion == true) {
								VertexClientPE.showWhatsNewDialog();
							}
							ModPE.goToURL("https://www.youtube.com/c/AgameRGaming");
					}}));
					playButton.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function(viewarg) {
							mainMenuTextList.dismiss();
							showMenuButton();
							VertexClientPE.clientTick();
							VertexClientPE.specialTick();
							VertexClientPE.secondTick();
							showAccountManagerButton();
							if(userIsNewToCurrentVersion == true) {
								VertexClientPE.showWhatsNewDialog();
							}
					}}));
					twitterButton.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function(viewarg) {
							mainMenuTextList.dismiss();
							showMenuButton();
							VertexClientPE.clientTick();
							VertexClientPE.specialTick();
							VertexClientPE.secondTick();
							showAccountManagerButton();
							if(userIsNewToCurrentVersion == true) {
								VertexClientPE.showWhatsNewDialog();
							}
							ModPE.goToURL("http://twitter.com/VertexHX");
					}}));

                    mainMenuListLayout.addView(mainMenuListLayoutTop);
                    mainMenuListLayoutTop.addView(TitleText);
                    mainMenuListLayout.addView(logoViewer1);
                    mainMenuListLayout.addView(newLineText);
                    mainMenuListLayout.addView(mainMenuListLayoutMiddle);
                    mainMenuListLayoutMiddleLeft.addView(youTubeButton);
                    mainMenuListLayoutMiddleMiddle.addView(playButton);
                    mainMenuListLayoutMiddleRight.addView(twitterButton);
					
					/* var logoAnimation = android.view.animation.AnimationUtils.loadAnimation(ctx, android.R.anim.fade_in);
					logoViewer1.startAnimation(logoAnimation); */
					
					VertexClientPE.MusicUtils.initMusicPlayer();
					VertexClientPE.MusicUtils.startMusicPlayer();

                    mainMenuTextList = new widget.PopupWindow(mainMenuListLayout, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
                    mainMenuTextList.setBackgroundDrawable(backgroundGradient());
                    mainMenuTextList.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
                } catch(error) {
                    print('An error occurred: ' + error);
                }
            }
        }));
}

VertexClientPE.showSetupScreen = function() {
	var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
					var setupScreenLayout = new LinearLayout(ctx);
					setupScreenLayout.setOrientation(1);
					setupScreenLayout.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					
					var setupScreenLayoutBottom = new LinearLayout(ctx);
					setupScreenLayoutBottom.setOrientation(LinearLayout.HORIZONTAL);
					
					var setupScreenLayoutBottomLeft = new LinearLayout(ctx);
					setupScreenLayoutBottomLeft.setOrientation(1);
					setupScreenLayoutBottomLeft.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					setupScreenLayoutBottomLeft.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 4, LinearLayout.LayoutParams.WRAP_CONTENT));
					setupScreenLayoutBottom.addView(setupScreenLayoutBottomLeft);
					
					var setupScreenLayoutBottomCenter = new LinearLayout(ctx);
					setupScreenLayoutBottomCenter.setOrientation(1);
					setupScreenLayoutBottomCenter.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					setupScreenLayoutBottomCenter.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 4, LinearLayout.LayoutParams.WRAP_CONTENT));
					setupScreenLayoutBottom.addView(setupScreenLayoutBottomCenter);
					
					var setupScreenLayoutBottomCenter1 = new LinearLayout(ctx);
					setupScreenLayoutBottomCenter1.setOrientation(1);
					setupScreenLayoutBottomCenter1.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					setupScreenLayoutBottomCenter1.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 4, LinearLayout.LayoutParams.WRAP_CONTENT));
					setupScreenLayoutBottom.addView(setupScreenLayoutBottomCenter1);
					
					var setupScreenLayoutBottomRight = new LinearLayout(ctx);
					setupScreenLayoutBottomRight.setOrientation(1);
					setupScreenLayoutBottomRight.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					setupScreenLayoutBottomRight.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 4, LinearLayout.LayoutParams.WRAP_CONTENT));
					setupScreenLayoutBottom.addView(setupScreenLayoutBottomRight);
					
					var logo3 = android.util.Base64.decode(logoImage, 0);
					var logoViewer3 = new widget.ImageView(ctx);
					logoViewer3.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(logo3, 0, logo3.length));
					logoViewer3.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth() / 4, ctx.getWindowManager().getDefaultDisplay().getWidth() / 16));
					setupScreenLayout.addView(logoViewer3);
					setupScreenLayout.addView(setupScreenLayoutBottom);
					
					var setupButtonGreen = clientButton("Green", null, "green");
					setupButtonGreen.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
					setupButtonGreen.setTextColor(Color.GREEN);
					setupButtonGreen.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function(viewarg) {
							setupColor = "green";
							setupButtonGreen.setTextColor(Color.GREEN);
							setupButtonRed.setTextColor(Color.WHITE);
							setupButtonBlue.setTextColor(Color.WHITE);
							setupButtonPurple.setTextColor(Color.WHITE);
						}
					}));
					setupScreenLayoutBottomLeft.addView(setupButtonGreen);
					
					var setupButtonRed = clientButton("Red", null, "red");
					setupButtonRed.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
					setupButtonRed.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function(viewarg) {
							setupColor = "red";
							setupButtonGreen.setTextColor(Color.WHITE);
							setupButtonRed.setTextColor(Color.GREEN);
							setupButtonBlue.setTextColor(Color.WHITE);
							setupButtonPurple.setTextColor(Color.WHITE);
						}
					}));
					setupScreenLayoutBottomCenter.addView(setupButtonRed);
					
					var setupButtonBlue = clientButton("Blue", null, "blue");
					setupButtonBlue.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
					setupButtonBlue.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function(viewarg) {
							setupColor = "blue";
							setupButtonGreen.setTextColor(Color.WHITE);
							setupButtonRed.setTextColor(Color.WHITE);
							setupButtonBlue.setTextColor(Color.GREEN);
							setupButtonPurple.setTextColor(Color.WHITE);
						}
					}));
					setupScreenLayoutBottomCenter1.addView(setupButtonBlue);
					
					var setupButtonPurple = clientButton("Purple", null, "purple");
					setupButtonPurple.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
					setupButtonPurple.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function(viewarg) {
							setupColor = "purple";
							setupButtonGreen.setTextColor(Color.WHITE);
							setupButtonRed.setTextColor(Color.WHITE);
							setupButtonBlue.setTextColor(Color.WHITE);
							setupButtonPurple.setTextColor(Color.GREEN);
						}
					}));
					setupScreenLayoutBottomRight.addView(setupButtonPurple);
					
					var setupText = clientTextView("You can always change the color on the settings screen.\nEven more colors are available there.");
					setupText.setGravity(android.view.Gravity.CENTER);
					setupScreenLayout.addView(setupText);
					
					setupScreen = new widget.PopupWindow(setupScreenLayout, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
					setupScreen.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.parseColor("#0080FF")));
					setupScreen.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
				} catch(error) {
					print('An error occurred: ' + error);
					VertexClientPE.showBugReportDialog(error);
			}
		}
	}));
}

var accountManager;
var accountManagerLayoutLeft;
var accountManagerLayoutCenter;
var accountManagerLayoutRight;

ModPE.restart = function() {
	if(Launcher.isBlockLauncher()) {
		new java.lang.Thread(new Runnable() {
			run: function() {
				VertexClientPE.toast("Restarting...");
				java.lang.Thread.sleep(1000);
				net.zhuoweizhang.mcpelauncher.ui.NerdyStuffActivity.forceRestart(ctx, 500, true);
			}
		}).start();
	} else {
		VertexClientPE.toast("Sorry, restarting only works with BlockLauncher at the moment!");
	}
}

VertexClientPE.addAccount = function(str) {
	var username = str.split(" ")[0];
	var clientId = str.split(" ")[1];
	VertexClientPE.accounts.push({
		username: username,
		clientId: clientId
	})
}

VertexClientPE.removeAccount = function(str, layout, view) {
	if(VertexClientPE.accounts.length() != null) {
		var tempAccounts = new org.json.JSONArray();
		for(var i = 0; i < VertexClientPE.accounts.length(); i++) {
			if(VertexClientPE.accounts.get(i) != str) {
				tempAccounts.put(VertexClientPE.accounts.get(i));
			}
		}
		VertexClientPE.accounts = tempAccounts;
	}
	if(layout != null && view != null) {
		try {
			layout.removeView(view);
		} catch(e) {
			//error
		}
	}
	VertexClientPE.saveAccounts();
}

VertexClientPE.showAccountManager = function() {
	VertexClientPE.loadAccounts();
	var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
					var accountManagerLayout = new LinearLayout(ctx);
					accountManagerLayout.setOrientation(1);
					accountManagerLayout.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					
					var accountManagerTitle = clientTextView("Account Manager", true);
					accountManagerTitle.setTextSize(25);
					accountManagerTitle.setGravity(android.view.Gravity.CENTER);
					accountManagerLayout.addView(accountManagerTitle);
					
					var addAccountButton = clientButton("Add account");
					addAccountButton.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
					addAccountButton.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function(viewarg) {
							//show add account dialog
							VertexClientPE.showAddAccountDialog();
						}
					}));
					accountManagerLayout.addView(addAccountButton);
					
					var accountManagerScrollView = new ScrollView(ctx);
					
					var accountManagerLayout1 = new LinearLayout(ctx);
					accountManagerLayout1.setOrientation(1);
					
					accountManagerScrollView.addView(accountManagerLayout1);
					accountManagerLayout.addView(accountManagerScrollView);
					
					var accountsLength = VertexClientPE.accounts.length();
					if(VertexClientPE.accounts != null && accountsLength != -1) {
						for(var i = 0; i < accountsLength; i++) {
							//if(VertexClientPE.accounts[i].username != null && VertexClientPE.accounts[i].username != undefined && VertexClientPE.accounts[i].username != " ") {
								var usernameLayout = accountButton(VertexClientPE.accounts.get(i), accountManagerLayout1);
								accountManagerLayout1.addView(usernameLayout);
							//}
						}
					}
					
					accountManager = new widget.PopupWindow(accountManagerLayout, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
					accountManager.setBackgroundDrawable(backgroundGradient());
					accountManager.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
				} catch(error) {
					print('An error occurred: ' + error);
				}
			}
		}));
}

VertexClientPE.downloadPro = function() {
	ModPE.goToURL("http://filecred.com/A8C1G574");
}

VertexClientPE.getHasUsedCurrentVersion = function() {
	return sharedPref.getString("VertexClientPE.lastUsedVersion", null) == VertexClientPE.currentVersion;
}

VertexClientPE.setHasUsedCurrentVersion = function(opt) {
	if(opt == true) {
		editor.putString("VertexClientPE.lastUsedVersion", VertexClientPE.currentVersion);
	}
	if(opt == false) {
		editor.putString("VertexClientPE.lastUsedVersion", null);
	}
	editor.commit();
}

VertexClientPE.setup = function() {
	/*if(VertexClientPE.UserUtils.playerIsBanned) {
		return;
	}*/
	VertexClientPE.loadSupport();
	VertexClientPE.checkForUpdates();
	VertexClientPE.loadUpdateDescription();
	VertexClientPE.loadDownloadCount();
	VertexClientPE.initShopFeatures();
	if(VertexClientPE.loadMainSettings() == null) {
		VertexClientPE.showSetupScreen();
		setupDone();
	} else {
		VertexClientPE.showSplashScreen();
		//tts.speak("Welcome back " + ModPE.getPlayerName() + "! Thanks for using Vertex Client PE!", android.speech.tts.TextToSpeech.QUEUE_FLUSH, null);
	}
	
	if(ModPE.getMinecraftVersion() < VertexClientPE.minVersion) {
		VertexClientPE.showBasicDialog("Compatibility", clientTextView("This version may not be compatible with MCPE v" + ModPE.getMinecraftVersion() + "!"));
	}
	
	if(!VertexClientPE.getHasUsedCurrentVersion()) {
		userIsNewToCurrentVersion = true;
	}
}

VertexClientPE.setup();

var coordsButton;

/*var keybind = new JavaAdapter(android.view.KeyEvent.Callback, {
    onKeyUp: function (keyCode, event) {
       switch(keyCode) {
			case KeyEvent.KEYCODE_D:
				print("test");
				return true;
			case KeyEvent.KEYCODE_F:
				moveShip(MOVE_RIGHT);
				return true;
			case KeyEvent.KEYCODE_J:
				fireMachineGun();
				return true;
			case KeyEvent.KEYCODE_K:
				fireMissile();
				return true;
	}
   }
});*/

VertexClientPE.getHighestBlockDifference = function() {
	var x = getPlayerX();
	var y = getPlayerY();
	var z = getPlayerZ();
	while(getTile(x, y, z) == 0) {
		y--;
	} if(getTile(x, y, z) != 0) {
		return getPlayerY() - 2 - y;
	}
}

var renderTypes = [
	EntityRenderType.arrow,
	EntityRenderType.bat,
	EntityRenderType.blaze,
	EntityRenderType.boat,
	//EntityRenderType.camera,
	EntityRenderType.chicken,
	EntityRenderType.cow,
	EntityRenderType.creeper,
	EntityRenderType.egg,
	EntityRenderType.enderman,
	EntityRenderType.expPotion,
	EntityRenderType.experienceOrb,
	//EntityRenderType.fallingTile,
	EntityRenderType.fireball,
	EntityRenderType.fishHook,
	EntityRenderType.ghast,
	EntityRenderType.human,
	EntityRenderType.ironGolem,
	//EntityRenderType.item,
	//EntityRenderType.lavaSlime,
	EntityRenderType.lightningBolt,
	//EntityRenderType.map,
	//EntityRenderType.minecart,
	EntityRenderType.mushroomCow,
	EntityRenderType.ocelot,
	//EntityRenderType.painting,
	//EntityRenderType.pig,
	EntityRenderType.player,
	EntityRenderType.rabbit,
	EntityRenderType.sheep,
	EntityRenderType.silverfish,
	EntityRenderType.skeleton,
	//EntityRenderType.slime,
	EntityRenderType.smallFireball,
	EntityRenderType.snowGolem,
	EntityRenderType.snowball,
	//EntityRenderType.spider,
	EntityRenderType.squid,
	EntityRenderType.thrownPotion,
	//EntityRenderType.tnt,
	//EntityRenderType.unknownItem,
	//EntityRenderType.villager,
	EntityRenderType.villagerZombie,
	EntityRenderType.witch,
	//EntityRenderType.wolf,
	EntityRenderType.zombie,
	EntityRenderType.zombiePigman
];

Entity.renderTypeToName = function(rT) {
	switch(rT) {
		case EntityRenderType.arrow:
			return "Arrow";
		case EntityRenderType.bat:
			return "Bat";
		case EntityRenderType.blaze:
			return "Blaze";
		case EntityRenderType.boat:
			return "Boat";
		case EntityRenderType.camera:
			return "Camera";
		case EntityRenderType.chicken:
			return "Chicken";
		case EntityRenderType.cow:
			return "Cow";
		case EntityRenderType.creeper:
			return "Creeper";
		case EntityRenderType.egg:
			return "Egg";
		case EntityRenderType.enderman:
			return "Enderman";
		case EntityRenderType.expPotion:
			return "Experience Potion";
		case EntityRenderType.experienceOrb:
			return "Experience Orb";
		case EntityRenderType.fallingTile:
			return "Falling Tile";
		case EntityRenderType.fireball:
			return "Fireball";
		case EntityRenderType.fishHook:
			return "Fish Hook";
		case EntityRenderType.ghast:
			return "Ghast";
		case EntityRenderType.human:
			return "Human (Zombie)";
		case EntityRenderType.ironGolem:
			return "Iron Golem";
		case EntityRenderType.item:
			return "Item";
		case EntityRenderType.lavaSlime:
			return "Magma Cube";
		case EntityRenderType.lightningBolt:
			return "Lightning Bolt";
		case EntityRenderType.map:
			return "Map";
		case EntityRenderType.minecart:
			return "Minecart";
		case EntityRenderType.mushroomCow:
			return "Mooshroom";
		case EntityRenderType.ocelot:
			return "Ocelot";
		case EntityRenderType.painting:
			return "Painting";
		case EntityRenderType.pig:
			return "Pig";
		case EntityRenderType.player:
			return "Player";
		case EntityRenderType.rabbit:
			return "Rabbit";
		case EntityRenderType.sheep:
			return "Sheep";
		case EntityRenderType.silverfish:
			return "Silverfish";
		case EntityRenderType.skeleton:
			return "Skeleton";
		case EntityRenderType.slime:
			return "Slime";
		case EntityRenderType.smallFireball:
			return "Small Fireball";
		case EntityRenderType.snowGolem:
			return "Snow Golem";
		case EntityRenderType.snowball:
			return "Snowball";
		case EntityRenderType.spider:
			return "Spider";
		case EntityRenderType.squid:
			return "Squid";
		case EntityRenderType.thrownPotion:
			return "Thrown Potion";
		case EntityRenderType.tnt:
			return "TNT";
		case EntityRenderType.unknownItem:
			return "Unknown Item";
		case EntityRenderType.villager:
			return "Villager";
		case EntityRenderType.villagerZombie:
			return "Zombie Villager";
		case EntityRenderType.witch:
			return "Witch";
		case EntityRenderType.wolf:
			return "Wolf";
		case EntityRenderType.zombie:
			return "Zombie";
		case EntityRenderType.zombiePigman:
			return "Zombie Pigman";
		default:
			return "Unknown";
	}
}

VertexClientPE.setPlayerModel = function(rT, layout) {
	Entity.setRenderType(getPlayerEnt(), rT);
	for(var i = 0; i < layout.getChildCount(); i++) {
		if(layout.getChildAt(i).getText() == Entity.renderTypeToName(rT)) {
			layout.getChildAt(i).setTextColor(Color.GREEN);
		} else {
			layout.getChildAt(i).setTextColor(Color.WHITE);
		}
	}
}

var hasLoadedAddons = false;

VertexClientPE.update = function() {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		var ru  = new java.lang.Runnable({ run: function() {
			try {
				var updateVersion = VertexClientPE.latestVersion;
				if(VertexClientPE.latestVersion.indexOf("Alpha") != -1 || VertexClientPE.latestVersion.indexOf("Beta") != -1) {
					updateVersion = VertexClientPE.latestVersion.split(" ")[0] + "-" + VertexClientPE.latestVersion.split(" ")[1];
				}
				var scriptUrl = new java.net.URL("https://github.com/Vertex-Client/Vertex-Client-PE/releases/download/v" + updateVersion + "/Vertex_Client_PE.modpkg");
				var connection = scriptUrl.openConnection();
				connection.setRequestMethod("GET");
				connection.setDoOutput(true);
				connection.connect();
				connection.getContentLength();
				var input = connection.getInputStream();
				var contents = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
				var bytesRead = 0;
				while((bytesRead = input.read(contents)) != -1) { 
					newScript += new java.lang.String(contents, 0, bytesRead);			   
				}
				var patchesFolder = ctx.getDir("modscripts", 0);
				var scriptFile = new java.io.File(patchesFolder, "Vertex_Client_PE.modpkg");
				var printWriter = new java.io.PrintWriter(scriptFile);
				printWriter.write(newScript);
				printWriter.flush();
				printWriter.close();
				try {
					if(GUI != null) {
						if(GUI.isShowing()) {
							GUI.dismiss();
						}
					}
					if(hacksList != null) {
						if(hacksList.isShowing()) {
							hacksList.dismiss();
						}
					}
					if(tabGUI != null) {
						if(tabGUI.isShowing()) {
							tabGUI.dismiss();
						}
					}
					function modTick() {};
					function useItem() {};
					function attackHook() {};
					function explodeHook() {};
					function chatHook() {};
					net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(scriptFile, false);
					net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(scriptFile, true);
				} catch(e) {
					//clientMessage("Error: Line 5489: " + e);
				}
			} catch(e) {
				clientMessage("Error: Line 5492: " + e);
			}
		}});
		var th = new java.lang.Thread(ru);
		th.start();
		}
	}));
}

function newLevel() {
	lagTimer = 0;
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			if(accountManager != null) {
				accountManager.dismiss();
				exitAccountManagerUI.dismiss();
			}
			if(accountManagerGUI != null) {
				accountManagerGUI.dismiss();
			}
		}
	});
	autoLeaveStage = 0;
	VertexClientPE.playerIsInGame = true;
	VertexClientPE.loadMainSettings();
	VertexClientPE.loadDeathCoords();
	VertexClientPE.Utils.loadFov();
	if(VertexClientPE.isPro()) {
		VertexClientPE.giveProVertexCash();
		if(!VertexClientPE.hasEarnedProVertexCash()) {
			VertexClientPE.toast("You just earned 500 V€rt€xCash because you activated Pro successfully!");
			VertexClientPE.moneyToast();
			if(shopCashText != null) {
				shopCashText.setText("\u26C1 " + VertexClientPE.getVertexCash());
			}
		}
	}
	if(!hasLoadedAddons) {
		hasLoadedAddons = true;
		VertexClientPE.loadAddons();
	}
	//VertexClientPE.initPlayerCustomizer();
	new java.lang.Thread(new java.lang.Runnable() {
		run: function() {
			VertexClientPE.checkForUpdates();
			if(VertexClientPE.latestVersion != VertexClientPE.currentVersion && VertexClientPE.latestVersion != undefined) {
				VertexClientPE.clientMessage("There is a new version available (v" + VertexClientPE.latestVersion + " for Minecraft Pocket Edition v" + latestPocketEditionVersion + ")!");
				if(!isSupported) {
					//VertexClientPE.update();
				}
			} else {
				ctx.runOnUiThread(new java.lang.Runnable() {
					run: function() {
						VertexClientPE.toast("You have the latest version");
					}
				});
			}
		}
	}).start();
	if(hacksList == null && !VertexClientPE.menuIsShowing) {
		showHacksList();
		showTabGUI();
	}if(hacksList != null && !VertexClientPE.menuIsShowing) {
		if(!hacksList.isShowing()) {
			showHacksList();
			showTabGUI();
		}
	}
	if(VertexClientPE.isDevMode()) {
		VertexClientPE.showBugReportDialog("Warning: Dev mode is enabled!");
	}
	if(!VertexClientPE.isPro()) {
		if(getRandomInt(0, 20) == 10) {
			VertexClientPE.showUpgradeDialog();
		}
	}
	VertexClientPE.Render.initViews();
	VertexClientPE.Utils.loadChests();
	VertexClientPE.Utils.world.chatMessages = [];
}

function deathHook(a, v) {
	if(v == getPlayerEnt()) {
		VertexClientPE.currentWorld.deathX = getPlayerX();
		VertexClientPE.currentWorld.deathY = getPlayerY();
		VertexClientPE.currentWorld.deathZ = getPlayerZ();
		VertexClientPE.saveDeathCoords();
	}
}

function leaveGame() {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
			if(hacksList != null) {
				hacksList.dismiss();
			}
			if(GUI != null) {
				GUI.dismiss();
			}
			if(tabGUI != null) {
				tabGUI.dismiss();
			}
			if(menuBar != null || menu != null) {
				VertexClientPE.closeMenu();
			}
			showMenuButton();
			showAccountManagerButton();
			VertexClientPE.saveMainSettings();
			VertexClientPE.editCopyrightText();
			VertexClientPE.Render.deinitViews();
			musicText = "None";
			VertexClientPE.playerIsInGame = false;
			VertexClientPE.isRemote = false;
		}
	}));
}

function settingsScreen() {
	VertexClientPE.menuIsShowing = true;
	var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                	if(GUI != null) {
                		if(GUI.isShowing()) {
                			GUI.dismiss();
                		}
                	}
                	if(hacksList != null) {
                		if(hacksList.isShowing()) {
                			hacksList.dismiss();
                		}
                	}
					if(tabGUI != null) {
                		if(tabGUI.isShowing()) {
                			tabGUI.dismiss();
                		}
                	}
					
                    var settingsMenuLayout = new LinearLayout(ctx);
                    settingsMenuLayout.setOrientation(1);
                    settingsMenuLayout.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					
					var settingsMenuScroll = new ScrollView(ctx);
					
					var settingsMenuLayout1 = new LinearLayout(ctx);
                    settingsMenuLayout1.setOrientation(1);
                    settingsMenuLayout1.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					
					var settingsTitle = clientTextView("Settings", true);
					settingsTitle.setTextSize(25);
					settingsTitle.setGravity(android.view.Gravity.CENTER);
					settingsMenuLayout1.addView(settingsTitle);
					
					settingsMenuScroll.addView(settingsMenuLayout);
					settingsMenuLayout1.addView(settingsMenuScroll);
					
					var generalTitle = clientSectionTitle("General", "rainbow");
					
					var hacksListModeSettingButton = clientButton("Hacks List Mode");
					if(hacksListModeSetting == "on") {
						hacksListModeSettingButton.setText("Hacks List Mode | Normal");
					} else if(hacksListModeSetting == "counter") {
						hacksListModeSettingButton.setText("Hacks List Mode | Counter");
					} else if(hacksListModeSetting == "off") {
						hacksListModeSettingButton.setText("Hacks List Mode | Hidden");
					}
					hacksListModeSettingButton.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function(viewarg){
							if(hacksListModeSetting == "off") {
								hacksListModeSetting = "on";
								hacksListModeSettingButton.setText("Hacks List Mode | Normal");
								VertexClientPE.saveMainSettings();
							} else if(hacksListModeSetting == "on"){
								hacksListModeSetting = "counter";
								hacksListModeSettingButton.setText("Hacks List Mode | Counter");
								VertexClientPE.saveMainSettings();
							} else if(hacksListModeSetting == "counter"){
								hacksListModeSetting = "off";
								hacksListModeSettingButton.setText("Hacks List Mode | Hidden");
								VertexClientPE.saveMainSettings();
							}
						}
					}));
					
					var tabGUIModeSettingButton = clientButton("TabGUI Mode");
					if(tabGUIModeSetting == "on") {
						tabGUIModeSettingButton.setText("TabGUI Mode | Shown");
					} else if(tabGUIModeSetting == "off") {
						tabGUIModeSettingButton.setText("TabGUI Mode | Hidden");
					}
					tabGUIModeSettingButton.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function(viewarg){
							if(tabGUIModeSetting == "on") {
								tabGUIModeSetting = "off";
								tabGUIModeSettingButton.setText("TabGUI Mode | Hidden");
								VertexClientPE.saveMainSettings();
							} else if(tabGUIModeSetting == "off"){
								tabGUIModeSetting = "on";
								tabGUIModeSettingButton.setText("TabGUI Mode | Shown");
								VertexClientPE.saveMainSettings();
							}
						}
					}));
					
					var mainButtonPositionSettingButton = clientButton("Main button position", "Sets the main menu's button position.");
					if(mainButtonPositionSetting == "top-right") {
						mainButtonPositionSettingButton.setText("Main button position | Top-right");
					} else {
						mainButtonPositionSettingButton.setText("Main button position | Top-left");
					}
					mainButtonPositionSettingButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						if(mainButtonPositionSetting == "top-right") {
							mainButtonPositionSetting = "top-left";
							mainButtonPositionSettingButton.setText("Main button position | Top-left");
							VertexClientPE.saveMainSettings();
						} else {
							mainButtonPositionSetting = "top-right";
							mainButtonPositionSettingButton.setText("Main button position | Top-right");
							VertexClientPE.saveMainSettings();
						}
					}
					}));
					
					var themeTitle = clientSectionTitle("Theme", "rainbow");
					
					var themeSettingButton = clientButton("Color", "Sets the Client's theme.");
					if(themeSetting == "green") {
						themeSettingButton.setText("Color | Green");
					} else if(themeSetting == "red") {
						themeSettingButton.setText("Color | Red");
					} else if(themeSetting == "blue") {
						themeSettingButton.setText("Color | Blue");
					} else if(themeSetting == "purple") {
						themeSettingButton.setText("Color | Purple");
					} else if(themeSetting == "yellow") {
						themeSettingButton.setText("Color | Yellow");
					} else if(themeSetting == "white") {
						themeSettingButton.setText("Color | White");
					} else if(themeSetting == "black") {
						themeSettingButton.setText("Color | Black");
					}
					themeSettingButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						if(themeSetting == "green") {
							themeSetting = "red";
							themeSettingButton.setText("Color | Red");
							VertexClientPE.saveMainSettings();
						} else if(themeSetting == "red") {
							themeSetting = "blue";
							themeSettingButton.setText("Color | Blue");
							VertexClientPE.saveMainSettings();
						} else if(themeSetting == "blue") {
							themeSetting = "purple";
							themeSettingButton.setText("Color | Purple");
							VertexClientPE.saveMainSettings();
						} else if(themeSetting == "purple") {
							themeSetting = "yellow";
							themeSettingButton.setText("Color | Yellow");
							VertexClientPE.saveMainSettings();
						} else if(themeSetting == "yellow") {
							themeSetting = "white";
							themeSettingButton.setText("Color | White");
							VertexClientPE.saveMainSettings();
						} else if(themeSetting == "white") {
							themeSetting = "black";
							themeSettingButton.setText("Color | Black");
							VertexClientPE.saveMainSettings();
						} else if(themeSetting == "black") {
							themeSetting = "green";
							themeSettingButton.setText("Color | Green");
							VertexClientPE.saveMainSettings();
						}
					}
					}));
					
					var useLightThemeSettingButton = clientButton("Lighter theme colors", "Use light theme colors if available.");
					if(useLightThemeSetting == "on") {
						useLightThemeSettingButton.setText("Lighter theme colors | ON");
					} else if(useLightThemeSetting == "off") {
						useLightThemeSettingButton.setText("Lighter theme colors | OFF");
					}
					useLightThemeSettingButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						if(useLightThemeSetting == "on") {
							useLightThemeSetting = "off";
							useLightThemeSettingButton.setText("Lighter theme colors | OFF");
							VertexClientPE.saveMainSettings();
						} else if(useLightThemeSetting == "off") {
							useLightThemeSetting = "on";
							useLightThemeSettingButton.setText("Lighter theme colors | ON");
							VertexClientPE.saveMainSettings();
						}
					}
					}));
					
					var buttonStyleSettingButton = clientButton("Button style", "Change the button style.");
					if(buttonStyleSetting == "normal") {
						buttonStyleSettingButton.setText("Button style | Normal");
					} else if(buttonStyleSetting == "legacy") {
						buttonStyleSettingButton.setText("Button style | Legacy");
					} else if(buttonStyleSetting == "legacy_inverted") {
						buttonStyleSettingButton.setText("Button style | Legacy (inverted)");
					} else if(buttonStyleSetting == "transparent") {
						buttonStyleSettingButton.setText("Button style | Transparent");
					}
					buttonStyleSettingButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						if(buttonStyleSetting == "transparent") {
							buttonStyleSetting = "normal";
							buttonStyleSettingButton.setText("Button style | Normal");
							VertexClientPE.saveMainSettings();
						} else if(buttonStyleSetting == "normal") {
							buttonStyleSetting = "legacy";
							buttonStyleSettingButton.setText("Button style | Legacy");
							VertexClientPE.saveMainSettings();
						}if(buttonStyleSetting == "legacy") {
							buttonStyleSetting = "legacy_inverted";
							buttonStyleSettingButton.setText("Button style | Legacy (inverted)");
							VertexClientPE.saveMainSettings();
						} else if(buttonStyleSetting == "legacy_inverted") {
							buttonStyleSetting = "transparent";
							buttonStyleSettingButton.setText("Button style | Transparent");
							VertexClientPE.saveMainSettings();
						}
					}
					}));
					
					var mcpeGUISettingButton = clientButton("MCPE GUI", "Change the MCPE GUI.");
					if(mcpeGUISetting == "default") {
						mcpeGUISettingButton.setText("MCPE GUI | Default");
					} else if(mcpeGUISetting == "green") {
						mcpeGUISettingButton.setText("MCPE GUI | Green");
					} else if(mcpeGUISetting == "red") {
						mcpeGUISettingButton.setText("MCPE GUI | Red");
					} else if(mcpeGUISetting == "blue") {
						mcpeGUISettingButton.setText("MCPE GUI | Blue");
					} else if(mcpeGUISetting == "purple") {
						mcpeGUISettingButton.setText("MCPE GUI | Purple");
					} else if(mcpeGUISetting == "yellow") {
						mcpeGUISettingButton.setText("MCPE GUI | Yellow");
					} else if(mcpeGUISetting == "white") {
						mcpeGUISettingButton.setText("MCPE GUI | White");
					} else if(mcpeGUISetting == "black") {
						mcpeGUISettingButton.setText("MCPE GUI | Black");
					}
					mcpeGUISettingButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						if(mcpeGUISetting == "default") {
							mcpeGUISetting = "green";
							mcpeGUISettingButton.setText("MCPE GUI | Green");
							VertexClientPE.saveMainSettings();
						} else if(mcpeGUISetting == "green") {
							mcpeGUISetting = "red";
							mcpeGUISettingButton.setText("MCPE GUI | Red");
							VertexClientPE.saveMainSettings();
						} else if(mcpeGUISetting == "red") {
							mcpeGUISetting = "blue";
							mcpeGUISettingButton.setText("MCPE GUI | Blue");
							VertexClientPE.saveMainSettings();
						} else if(mcpeGUISetting == "blue") {
							mcpeGUISetting = "purple";
							mcpeGUISettingButton.setText("MCPE GUI | Purple");
							VertexClientPE.saveMainSettings();
						} else if(mcpeGUISetting == "purple") {
							mcpeGUISetting = "yellow";
							mcpeGUISettingButton.setText("MCPE GUI | Yellow");
							VertexClientPE.saveMainSettings();
						} else if(mcpeGUISetting == "yellow") {
							mcpeGUISetting = "white";
							mcpeGUISettingButton.setText("MCPE GUI | White");
							VertexClientPE.saveMainSettings();
						} else if(mcpeGUISetting == "white") {
							mcpeGUISetting = "black";
							mcpeGUISettingButton.setText("MCPE GUI | Black");
							VertexClientPE.saveMainSettings();
						} else if(mcpeGUISetting == "black") {
							mcpeGUISetting = "default";
							mcpeGUISettingButton.setText("MCPE GUI | Default");
							VertexClientPE.saveMainSettings();
						}
						VertexClientPE.setupMCPEGUI();
						VertexClientPE.toast("Restart your MCPE launcher now!");
					}
					}));
					
					var menuTitle = clientSectionTitle("Menu", "rainbow");
					
					var menuTypeSettingButton = clientButton("Menu style", "Sets the Client's menu style.");
					if(menuType == "normal") {
						menuTypeSettingButton.setText("Menu style | Normal");
					} else if(menuType == "halfscreen") {
						menuTypeSettingButton.setText("Menu style | Retro");
					}
					menuTypeSettingButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						if(menuType == "normal") {
							menuType = "halfscreen";
							menuTypeSettingButton.setText("Menu style | Retro");
							VertexClientPE.saveMainSettings();
						} else if(menuType == "halfscreen") {
							menuType = "normal";
							menuTypeSettingButton.setText("Menu style | Normal");
							VertexClientPE.saveMainSettings();
						}
					}
					}));
					
					var sizeSettingButton = clientButton("Size setting", "Change menu size to fit your screen size better (this only works for the normal menu style).");
					if(sizeSetting == "normal") {
						sizeSettingButton.setText("Size setting | NORMAL");
					} else if(sizeSetting == "small") {
						sizeSettingButton.setText("Size setting | SMALL");
					}
					sizeSettingButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						if(sizeSetting == "normal") {
							sizeSetting = "small";
							customHeight = topBarHeight;
							sizeSettingButton.setText("Size setting | SMALL");
							VertexClientPE.saveMainSettings();
						} else if(sizeSetting == "small") {
							sizeSetting = "normal";
							customHeight = customHeight;
							sizeSettingButton.setText("Size setting | NORMAL");
							VertexClientPE.saveMainSettings();
						}
						VertexClientPE.toast("Now restart your launcher to make it work (this only works for the normal menu style)!");
					}
					}));
					
					var menuAnimationsSettingButton = clientButton("Menu animations", "Show menu animations.");
					if(menuAnimationsSetting == "on") {
						menuAnimationsSettingButton.setText("Menu animations | ON");
					} else if(menuAnimationsSetting == "off") {
						menuAnimationsSettingButton.setText("Menu animations | OFF");
					}
					menuAnimationsSettingButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						if(menuAnimationsSetting == "on") {
							menuAnimationsSetting = "off";
							menuAnimationsSettingButton.setText("Menu animations | OFF");
							VertexClientPE.saveMainSettings();
						} else if(menuAnimationsSetting == "off") {
							menuAnimationsSetting = "on";
							menuAnimationsSettingButton.setText("Menu animations | ON");
							VertexClientPE.saveMainSettings();
						}
					}
					}));
					
					var otherTitle = clientSectionTitle("Other", "rainbow");
					
					var showNewsSettingButton = clientButton("Show news", "Show news at start.");
					if(showNewsSetting == "on") {
						showNewsSettingButton.setText("Show news | ON");
					} else if(showNewsSetting == "off") {
						showNewsSettingButton.setText("Show news | OFF");
					}
					showNewsSettingButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						if(showNewsSetting == "on") {
							showNewsSetting = "off";
							showNewsSettingButton.setText("Show news | OFF");
							VertexClientPE.saveMainSettings();
						} else if(showNewsSetting == "off") {
							showNewsSetting = "on";
							showNewsSettingButton.setText("Show news | ON");
							VertexClientPE.saveMainSettings();
						}
					}
					}));
					
					var playMusicSettingButton = clientButton("Automatically play music", "Automatically play music.");
					if(playMusicSetting == "on") playMusicSetting = "off";
					/*if(playMusicSetting == "on") {
						playMusicSettingButton.setText("Automatically play music | NORMAL");
					} else */if(playMusicSetting == "shuffle") {
						playMusicSettingButton.setText("Automatically play music | SHUFFLE");
					} else if(playMusicSetting == "off") {
						playMusicSettingButton.setText("Automatically play music | OFF");
					}
					playMusicSettingButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						//if(playMusicSetting == "on") {
						if(playMusicSetting == "off") {
							playMusicSetting = "shuffle";
							playMusicSettingButton.setText("Automatically play music | SHUFFLE");
							VertexClientPE.saveMainSettings();
						} else if(playMusicSetting == "shuffle") {
							playMusicSetting = "off";
							playMusicSettingButton.setText("Automatically play music | OFF");
							VertexClientPE.saveMainSettings();
						}/* else if(playMusicSetting == "off") {
							playMusicSetting = "on";
							playMusicSettingButton.setText("Automatically play music | NORMAL");
							VertexClientPE.saveMainSettings();
							VertexClientPE.loadMainSettings();
							VertexClientPE.resetMusic();
							//VertexClientPE.playMusic();
							print("This mode is not ready yet!");
						}*/
					}
					}));
					
					settingsMenuLayout.addView(generalTitle);
					settingsMenuLayout.addView(hacksListModeSettingButton);
					settingsMenuLayout.addView(tabGUIModeSettingButton);
					settingsMenuLayout.addView(mainButtonPositionSettingButton);
					settingsMenuLayout.addView(themeTitle);
					settingsMenuLayout.addView(themeSettingButton);
					settingsMenuLayout.addView(useLightThemeSettingButton);
					settingsMenuLayout.addView(buttonStyleSettingButton);
					settingsMenuLayout.addView(mcpeGUISettingButton);
					settingsMenuLayout.addView(menuTitle);
					settingsMenuLayout.addView(menuTypeSettingButton);
					settingsMenuLayout.addView(sizeSettingButton);
					settingsMenuLayout.addView(menuAnimationsSettingButton);
					settingsMenuLayout.addView(otherTitle);
					settingsMenuLayout.addView(showNewsSettingButton);
					settingsMenuLayout.addView(playMusicSettingButton);

                    settingsMenu = new widget.PopupWindow(settingsMenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
                    settingsMenu.setBackgroundDrawable(backgroundGradient());
                    settingsMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
                } catch(error) {
                    print('An error occured: ' + error);
					VertexClientPE.showBugReportDialog(error);
                }
            }
        }));
}

function informationScreen() {
	VertexClientPE.menuIsShowing = true;
	var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                	if(GUI != null) {
                		if(GUI.isShowing()) {
                			GUI.dismiss();
                		}
                	}
                	if(hacksList != null) {
                		if(hacksList.isShowing()) {
                			hacksList.dismiss();
                		}
                	}
					if(tabGUI != null) {
                		if(tabGUI.isShowing()) {
                			tabGUI.dismiss();
                		}
                	}
					
					var informationMenuLayout1 = new LinearLayout(ctx);
					informationMenuLayout1.setOrientation(1);
                    informationMenuLayout1.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					
					var informationMenuScrollView = new ScrollView(ctx);

                    var informationMenuLayout = new LinearLayout(ctx);
                    informationMenuLayout.setOrientation(1);
                    informationMenuLayout.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					
					var informationTitle = clientTextView("Information", true);
					informationTitle.setTextSize(25);
					informationTitle.setGravity(android.view.Gravity.CENTER);
					
					informationMenuLayout1.addView(informationTitle);
					informationMenuLayout1.addView(clientTextView("\n"));
					informationMenuScrollView.addView(informationMenuLayout);
					informationMenuLayout1.addView(informationMenuScrollView);
					
					var informationText = clientTextView("\u00A9 peacestorm, MyNameIsTriXz, _TXMO and LPMG | 2015 - 2016. Some rights reserved.\nThanks to @Herqux_ and @MyNameIsTriXz for graphic designs.", true);
					
					var websiteButton = clientButton("Website", "Go to the official Vertex Client PE website");
					websiteButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						ModPE.goToURL("http://Vertex-Client.github.io/");
					}
					}));
					
					var enterOne = clientTextView("\n");
					var hrView = clientHR();
					var enterTwo = clientTextView("\n");
					
					informationMenuLayout.addView(informationText);
					informationMenuLayout.addView(websiteButton);
					informationMenuLayout.addView(enterOne);
					informationMenuLayout.addView(hrView);
					informationMenuLayout.addView(enterTwo);
					
					var minecraftInfoTitle = clientSectionTitle("Minecraft info");
				
					var minecraftVersion = ModPE.getMinecraftVersion();
					var minecraftVersionTextView = clientTextView("Version: " + minecraftVersion);
					
					var username = ModPE.getPlayerName();
					var usernameTextView = clientTextView("Username: " + username);
					
					var clientId = ModPE.getClientId();
					var clientIdTextView = clientTextView("Client ID: " + clientId);
					
					var vertexInfoTitle = clientSectionTitle("Vertex info");
					
					var vertexVersion = VertexClientPE.currentVersion;
					var vertexVersionTextView = clientTextView("Version: " + vertexVersion);
					
					var statusType = "normal user";
					if(ModPE.getPlayerName() == "peacestorm") {
						statusType = "developer";
					}
					var statusTextView = clientTextView("Status: " + statusType);
					
					var proType = "no";
					if(VertexClientPE.isPro()) {
						proType = "yes";
					}
					var proTextView = clientTextView("Pro: " + proType);
					
					var deviceInfoTitle = clientSectionTitle("Device info");
					
					var androidVersion = ModPE.getAndroidVersion();
					var androidVersionTextView = clientTextView("Android version: " + androidVersion);
					
					var deviceType = VertexClientPE.getDeviceName();
					var deviceTextView = clientTextView("Device: " + deviceType);
					
					informationMenuLayout.addView(minecraftInfoTitle);
					informationMenuLayout.addView(minecraftVersionTextView);
					informationMenuLayout.addView(usernameTextView);
					informationMenuLayout.addView(clientIdTextView);
					//-------------------------------------------
					informationMenuLayout.addView(vertexInfoTitle);
					informationMenuLayout.addView(vertexVersionTextView);
					informationMenuLayout.addView(statusTextView);
					informationMenuLayout.addView(proTextView);
					//-------------------------------------------
					informationMenuLayout.addView(deviceInfoTitle);
					informationMenuLayout.addView(androidVersionTextView);
					informationMenuLayout.addView(deviceTextView);

                    informationMenu = new widget.PopupWindow(informationMenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
                    informationMenu.setBackgroundDrawable(backgroundGradient());
                    informationMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
                } catch(error) {
                    print('An error occurred: ' + error);
                }
            }
        }));
}

function addonScreen() {
	VertexClientPE.menuIsShowing = true;
	var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                	if(GUI != null) {
                		if(GUI.isShowing()) {
                			GUI.dismiss();
                		}
                	}
                	if(hacksList != null) {
                		if(hacksList.isShowing()) {
                			hacksList.dismiss();
                		}
                	}
					if(tabGUI != null) {
                		if(tabGUI.isShowing()) {
                			tabGUI.dismiss();
                		}
                	}

					var addonMenuLayout = new LinearLayout(ctx);
                    addonMenuLayout.setOrientation(1);
                    addonMenuLayout.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					
					var addonMenuLayoutScroll = new ScrollView(ctx);
					
					var addonMenuLayout1 = new LinearLayout(ctx);
                    addonMenuLayout1.setOrientation(1);
                    addonMenuLayout1.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					
					addonMenuLayoutScroll.addView(addonMenuLayout);
					addonMenuLayout1.addView(addonMenuLayoutScroll);
					
					var addonTitle = clientTextView("Addons", true);
					addonTitle.setTextSize(25);
					addonTitle.setGravity(android.view.Gravity.CENTER);
					addonMenuLayout.addView(addonTitle);
					
					if(VertexClientPE.addons.length == 0) {
						var noAddonsText = clientTextView("You don't have any addons!");
						addonMenuLayout.addView(noAddonsText);
						noAddonsText.setGravity(android.view.Gravity.CENTER);
					}
					
					VertexClientPE.addons.forEach(function(element, index, array) {
						addonMenuLayout.addView(new addonButton(element));
					});

                    addonMenu = new widget.PopupWindow(addonMenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
                    addonMenu.setBackgroundDrawable(backgroundGradient());
                    addonMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
                } catch(error) {
                    print('An error occurred: ' + error);
                }
            }
        }));
}

/**
  * function playerCustomizerScreen()
  * @author peacestorm
  * @since v1.1
  * @todo Models/morphing, collision size, particles?
 */
function playerCustomizerScreen() {
	VertexClientPE.menuIsShowing = true;
	var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                	if(GUI != null) {
                		if(GUI.isShowing()) {
                			GUI.dismiss();
                		}
                	}
                	if(hacksList != null) {
                		if(hacksList.isShowing()) {
                			hacksList.dismiss();
                		}
                	}
					if(tabGUI != null) {
                		if(tabGUI.isShowing()) {
                			tabGUI.dismiss();
                		}
                	}

					var playCustomizerLayout = new LinearLayout(ctx);
                    playCustomizerLayout.setOrientation(1);
                    playCustomizerLayout.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					
					var playCustomizerLayoutScroll = new ScrollView(ctx);
					
					var playerCustomizerLayout1 = new LinearLayout(ctx);
                    playerCustomizerLayout1.setOrientation(1);
                    playerCustomizerLayout1.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					
					var playerCustomizerTitle = clientTextView("Player Customizer", true);
					playerCustomizerTitle.setTextSize(25);
					playerCustomizerTitle.setGravity(android.view.Gravity.CENTER);
					playerCustomizerLayout1.addView(playerCustomizerTitle);
					
					playCustomizerLayoutScroll.addView(playCustomizerLayout);
					playerCustomizerLayout1.addView(playCustomizerLayoutScroll);
					
					var playerCustomizerMorphingLayout = LinearLayout(ctx);
					playerCustomizerMorphingLayout.setOrientation(1);
					playCustomizerLayout.addView(playerCustomizerMorphingLayout);
					
					renderTypes.forEach(function(element, index, array) {
						var rTButton = clientButton(Entity.renderTypeToName(element));
						if(element == Entity.getRenderType(getPlayerEnt())) {
							rTButton.setTextColor(Color.GREEN);
						}
						rTButton.setOnClickListener(new android.view.View.OnClickListener() {
							onClick: function() {
								VertexClientPE.setPlayerModel(element, playerCustomizerMorphingLayout);
							}
						});
						if(Entity.renderTypeToName(element) != "Unknown") {
							playerCustomizerMorphingLayout.addView(rTButton);
						}
					});

                    playerCustomizerMenu = new widget.PopupWindow(playerCustomizerLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
                    playerCustomizerMenu.setBackgroundDrawable(backgroundGradient());
                    playerCustomizerMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
                } catch(error) {
                    print('An error occurred: ' + error);
                }
            }
        }));
}

function optiFineScreen() {
	VertexClientPE.menuIsShowing = true;
	var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                	if(GUI != null) {
                		if(GUI.isShowing()) {
                			GUI.dismiss();
                		}
                	}
                	if(hacksList != null) {
                		if(hacksList.isShowing()) {
                			hacksList.dismiss();
                		}
                	}
					if(tabGUI != null) {
                		if(tabGUI.isShowing()) {
                			tabGUI.dismiss();
                		}
                	}

					var optiFineLayout = new LinearLayout(ctx);
                    optiFineLayout.setOrientation(1);
                    optiFineLayout.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					
					var optiFineLayoutScroll = new ScrollView(ctx);
					
					var optiFineLayout1 = new LinearLayout(ctx);
                    optiFineLayout1.setOrientation(1);
                    optiFineLayout1.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					
					var optiFineTitle = clientTextView("OptiFine", true);
					optiFineTitle.setTextSize(25);
					optiFineTitle.setGravity(android.view.Gravity.CENTER);
					optiFineLayout1.addView(optiFineTitle);
					
					optiFineLayoutScroll.addView(optiFineLayout);
					optiFineLayout1.addView(optiFineLayoutScroll);
					
					var antiLagDropRemoverButton = new android.widget.Switch(ctx);
					antiLagDropRemoverButton.setText("Automatically remove dropped items to reduce lag");
					if(themeSetting == "white") {
						antiLagDropRemoverButton.setTextColor(Color.BLACK);
					} else {
						antiLagDropRemoverButton.setTextColor(Color.WHITE);
					}
					antiLagDropRemoverButton.setChecked(antiLagDropRemoverSetting=="on"?true:false);
					antiLagDropRemoverButton.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
						onCheckedChanged: function(){
							if(antiLagDropRemoverSetting == "off") {
								antiLagDropRemoverSetting = "on";
							} else if(antiLagDropRemoverSetting == "on") {
								antiLagDropRemoverSetting = "off";
							}
							lagTimer = 0;
							VertexClientPE.saveMainSettings();
						}
					}));
					optiFineLayout.addView(antiLagDropRemoverButton);

                    optiFineMenu = new widget.PopupWindow(optiFineLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
                    optiFineMenu.setBackgroundDrawable(backgroundGradient());
                    optiFineMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
                } catch(error) {
                    print('An error occurred: ' + error);
                }
            }
        }));
}

var shopCashText;

function shopScreen() {
	VertexClientPE.menuIsShowing = true;
	var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                	if(GUI != null) {
                		if(GUI.isShowing()) {
                			GUI.dismiss();
                		}
                	}
                	if(hacksList != null) {
                		if(hacksList.isShowing()) {
                			hacksList.dismiss();
                		}
                	}
					if(tabGUI != null) {
                		if(tabGUI.isShowing()) {
                			tabGUI.dismiss();
                		}
                	}

					var shopMenuLayout = new LinearLayout(ctx);
                    shopMenuLayout.setOrientation(1);
                    shopMenuLayout.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					
					var shopMenuLayoutScroll = new ScrollView(ctx);
					
					var shopMenuLayout1 = new LinearLayout(ctx);
                    shopMenuLayout1.setOrientation(1);
                    shopMenuLayout1.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					shopMenuLayout1.setPadding(10, 0, 10, 0);
					
					var shopTitle = clientTextView("Shop", true);
					shopTitle.setTextSize(25);
					shopTitle.setGravity(android.view.Gravity.CENTER);
					shopMenuLayout1.addView(shopTitle);
					
					var shopCashLayout = new LinearLayout(ctx);
					shopCashLayout.setOrientation(1);
					shopCashLayout.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.WRAP_CONTENT, android.view.ViewGroup.LayoutParams.WRAP_CONTENT));
					shopCashLayout.setBackground(backgroundSpecial(16));
					shopCashText = clientTextView("\u26C1 " + VertexClientPE.getVertexCash());
					shopCashText.setTextColor(Color.parseColor("#FFD700"));
					shopCashText.setGravity(android.view.Gravity.CENTER);
					shopCashText.setPadding(10, 10, 10, 10);
					shopCashLayout.addView(shopCashText);
					
					shopMenuLayout1.addView(shopCashLayout);
					shopMenuLayout1.addView(clientTextView("\n"));
					shopMenuLayoutScroll.addView(shopMenuLayout);
					shopMenuLayout1.addView(shopMenuLayoutScroll);
					
					VertexClientPE.shopFeatures.forEach(function(element, index, array) {
						shopMenuLayout.addView(new shopFeatureButton(element, shopCashText));
					});

                    shopMenu = new widget.PopupWindow(shopMenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
                    shopMenu.setBackgroundDrawable(backgroundGradient());
                    shopMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
                } catch(error) {
                    print('An error occurred: ' + error);
                }
            }
        }));
}

function updateCenterScreen() {
	VertexClientPE.menuIsShowing = true;
	var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                	if(GUI != null) {
                		if(GUI.isShowing()) {
                			GUI.dismiss();
                		}
                	}
                	if(hacksList != null) {
                		if(hacksList.isShowing()) {
                			hacksList.dismiss();
                		}
                	}
					if(tabGUI != null) {
                		if(tabGUI.isShowing()) {
                			tabGUI.dismiss();
                		}
                	}

					var updateCenterMenuLayout = new LinearLayout(ctx);
                    updateCenterMenuLayout.setOrientation(1);
                    updateCenterMenuLayout.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					
					var updateCenterMenuLayoutScroll = new ScrollView(ctx);
					
					var updateCenterMenuLayout1 = new LinearLayout(ctx);
                    updateCenterMenuLayout1.setOrientation(1);
                    updateCenterMenuLayout1.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					updateCenterMenuLayout1.setPadding(10, 0, 10, 0);
					
					var updateCenterTitle = clientTextView("Update Center", true);
					updateCenterTitle.setTextSize(25);
					updateCenterTitle.setGravity(android.view.Gravity.CENTER);
					
					updateCenterMenuLayout1.addView(updateCenterTitle);
					updateCenterMenuLayout1.addView(clientTextView("\n"));
					updateCenterMenuLayoutScroll.addView(updateCenterMenuLayout);
					updateCenterMenuLayout1.addView(updateCenterMenuLayoutScroll);
					
					var latestUpdateView = updatePaneButton(VertexClientPE.latestVersion, VertexClientPE.latestVersionDesc);
					var updateEnterView = new widget.TextView(ctx);
					updateEnterView.setText("\n");
					var currentUpdateView = updatePaneButton(VertexClientPE.currentVersion, VertexClientPE.currentVersionDesc);
					
					if(VertexClientPE.latestVersion != VertexClientPE.currentVersion) {
						updateCenterMenuLayout.addView(latestUpdateView);
						updateCenterMenuLayout.addView(updateEnterView);
					}
					updateCenterMenuLayout.addView(currentUpdateView);

                    updateCenterMenu = new widget.PopupWindow(updateCenterMenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
                    updateCenterMenu.setBackgroundDrawable(backgroundGradient());
                    updateCenterMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
                } catch(error) {
                    print('An error occurred: ' + error);
                }
            }
        }));
}

function musicPlayerScreen() {
	VertexClientPE.menuIsShowing = true;
	var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                	if(GUI != null) {
                		if(GUI.isShowing()) {
                			GUI.dismiss();
                		}
                	}
                	if(hacksList != null) {
                		if(hacksList.isShowing()) {
                			hacksList.dismiss();
                		}
                	}
					if(tabGUI != null) {
                		if(tabGUI.isShowing()) {
                			tabGUI.dismiss();
                		}
                	}

					var musicPlayerMenuLayout = new LinearLayout(ctx);
                    musicPlayerMenuLayout.setOrientation(1);
                    musicPlayerMenuLayout.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					
					var musicPlayerMenuLayoutScroll = new ScrollView(ctx);
					
					var musicPlayerMenuLayout1 = new LinearLayout(ctx);
                    musicPlayerMenuLayout1.setOrientation(1);
                    musicPlayerMenuLayout1.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					musicPlayerMenuLayout1.setPadding(10, 0, 10, 0);
					
					var musicPlayerTitle = clientTextView("Music Player", true);
					musicPlayerTitle.setTextSize(25);
					musicPlayerTitle.setGravity(android.view.Gravity.CENTER);
					
					var musicPlayerEnter = new widget.TextView(ctx);
					musicPlayerEnter.setText("\n");
					musicPlayerEnter.setTextSize(10);
					
					var musicPlayerBar = new musicBar();
					mpSongTitleView = musicPlayerBar.getSongTitleView();
					mpPlayButton = musicPlayerBar.getPlayButton();
					mpCurrentPositionView = musicPlayerBar.getLeftTimeView();
					mpTotalDurationView = musicPlayerBar.getRightTimeView();
					mpSeekBarView = musicPlayerBar.getSeekBar();
					mpLayout = musicPlayerBar.getBarLayout();
					if(VertexClientPE.MusicUtils.mp.isPlaying() || VertexClientPE.MusicUtils.isPaused) {
						if(VertexClientPE.MusicUtils.mp.isPlaying()) {
							mpPlayButton.setBackgroundResource(android.R.drawable.ic_media_pause);
						} else if(VertexClientPE.MusicUtils.isPaused) {
							mpPlayButton.setBackgroundResource(android.R.drawable.ic_media_play);
						}
						mpCurrentPositionView.setText(VertexClientPE.MusicUtils.milliSecToMinString(VertexClientPE.MusicUtils.mp.getCurrentPosition()));
						mpSeekBarView.setProgress(VertexClientPE.MusicUtils.mp.getCurrentPosition());
						mpSeekBarView.setMax(VertexClientPE.MusicUtils.mp.getDuration());
						mpTotalDurationView.setText(VertexClientPE.MusicUtils.milliSecToMinString(VertexClientPE.MusicUtils.mp.getDuration()));
					} else {
						mpPlayButton.setBackgroundResource(android.R.drawable.ic_media_play);
					}
					mpPlayButton.setOnClickListener(new android.view.View.OnClickListener() {
						onClick: function(v) {
							if(VertexClientPE.MusicUtils.mp.isPlaying() && !VertexClientPE.MusicUtils.isPaused) {
								VertexClientPE.MusicUtils.mp.pause();
								VertexClientPE.MusicUtils.isPaused = true;
								mpPlayButton.setBackgroundResource(android.R.drawable.ic_media_play);
							} else {
								VertexClientPE.MusicUtils.mp.start();
								VertexClientPE.MusicUtils.isPaused = false;
								mpPlayButton.setBackgroundResource(android.R.drawable.ic_media_pause);
							}
						}
					});
					mpSeekBarView.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
						onStopTrackingTouch: function(sB) {
							VertexClientPE.MusicUtils.mp.seekTo(mpSeekBarView.getProgress());
							mpCurrentPositionView.setText(VertexClientPE.MusicUtils.milliSecToMinString(VertexClientPE.MusicUtils.mp.getCurrentPosition()));
						}
					});
					
					musicPlayerMenuLayout1.addView(musicPlayerTitle);
					musicPlayerMenuLayout1.addView(musicPlayerEnter);
					musicPlayerMenuLayout1.addView(mpLayout);
					musicPlayerMenuLayoutScroll.addView(musicPlayerMenuLayout);
					musicPlayerMenuLayout1.addView(musicPlayerMenuLayoutScroll);
					
					VertexClientPE.MusicUtils.songList.forEach(function(element, index, array) {
						musicPlayerMenuLayout.addView(songButton(element, musicPlayerBar));
					});

                    musicPlayerMenu = new widget.PopupWindow(musicPlayerMenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
                    musicPlayerMenu.setBackgroundDrawable(backgroundGradient());
                    musicPlayerMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
                } catch(error) {
                    print('An error occurred: ' + error);
					clientMessage(error);
                }
            }
        }));
}

function dashboardScreen() {
	VertexClientPE.menuIsShowing = true;
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				if(GUI != null) {
					if(GUI.isShowing()) {
						GUI.dismiss();
					}
				}
				if(hacksList != null) {
					if(hacksList.isShowing()) {
						hacksList.dismiss();
					}
				}
				if(tabGUI != null) {
					if(tabGUI.isShowing()) {
						tabGUI.dismiss();
					}
				}

				var dashboardMenuLayout = new widget.GridLayout(ctx);
				dashboardMenuLayout.setColumnCount(4);
				dashboardMenuLayout.setRowCount(3);
				
				var dashboardMenuLayoutScroll = new ScrollView(ctx);
				
				var dashboardMenuLayout1 = new LinearLayout(ctx);
				dashboardMenuLayout1.setOrientation(1);
				dashboardMenuLayout1.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
				
				var dashboardTitle = clientTextView("Dashboard", true);
				dashboardTitle.setTextSize(25);
				dashboardTitle.setGravity(android.view.Gravity.CENTER);
				dashboardMenuLayout1.addView(dashboardTitle);
				
				//dashboardMenuLayout1.addView(clientTextView("\n"));
				dashboardMenuLayoutScroll.addView(dashboardMenuLayout);
				dashboardMenuLayout1.addView(dashboardMenuLayoutScroll);
				
				var settingsIconButton = tileButton("Settings", android.R.drawable.ic_menu_preferences, "green");
				//settingsIconButton.setBackgroundDrawable(rainbowBg);
				var informationIconButton = tileButton("Information", android.R.drawable.ic_menu_info_details, "yellow");
				var updateCenterIconButton = tileButton("Update Center", android.R.drawable.ic_menu_compass, "white");
				var shopIconButton = tileButton("Shop", android.R.drawable.stat_sys_download);
				var musicPlayerIconButton = tileButton("Music Player", android.R.drawable.ic_media_play, "blue", false);
				var addonsIconButton = tileButton("Addons", android.R.drawable.ic_menu_more, "blue");
				if(Launcher.isBlockLauncher()) {
					var blockLauncherSettingsIconButton = tileButton("BlockLauncher Settings", net.zhuoweizhang.mcpelauncher.R.drawable.ic_menu_settings_holo_light, "black");
				}
				var restartIconButton = tileButton("Restart", android.R.drawable.ic_menu_rotate, "green", false);
				var shutDownIconButton = tileButton("Shutdown", android.R.drawable.ic_lock_power_off, "red");
				
				settingsIconButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						exitDashboardUI.dismiss();
						dashboardMenu.dismiss();
						settingsScreen();
						exitSettings();
					}
				});
				
				informationIconButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						exitDashboardUI.dismiss();
						dashboardMenu.dismiss();
						informationScreen();
						exitInformation();
					}
				});
				
				updateCenterIconButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						exitDashboardUI.dismiss();
						dashboardMenu.dismiss();
						updateCenterScreen();
						exitUpdateCenter();
					}
				});
				
				musicPlayerIconButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						exitDashboardUI.dismiss();
						dashboardMenu.dismiss();
						musicPlayerScreen();
						exitMusicPlayer();
					}
				});
				
				addonsIconButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						exitDashboardUI.dismiss();
						dashboardMenu.dismiss();
						addonScreen();
						exitAddon();
					}
				});
				
				if(Launcher.isBlockLauncher()) {
					blockLauncherSettingsIconButton.setOnClickListener(new android.view.View.OnClickListener() {
						onClick: function(view) {
							var blIntent = new android.content.Intent(ctx, net.zhuoweizhang.mcpelauncher.ui.MainMenuOptionsActivity);
							ctx.startActivity(blIntent);
						}
					});
				}
				
				restartIconButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						ModPE.restart();
					}
				});
				
				shutDownIconButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						VertexClientPE.toast("See you later!");
						new java.lang.Thread(new java.lang.Runnable() {
							run: function() {
								java.lang.Thread.sleep(1000);
								java.lang.System.exit(0);
							}
						}).start();
					}
				});
				
				dashboardMenuLayout.addView(settingsIconButton);
				dashboardMenuLayout.addView(informationIconButton);
				dashboardMenuLayout.addView(updateCenterIconButton);
				//dashboardMenuLayout.addView(shopIconButton);
				dashboardMenuLayout.addView(musicPlayerIconButton);
				dashboardMenuLayout.addView(addonsIconButton);
				if(Launcher.isBlockLauncher()) {
					dashboardMenuLayout.addView(blockLauncherSettingsIconButton);
					dashboardMenuLayout.addView(restartIconButton);
				}
				dashboardMenuLayout.addView(shutDownIconButton);
				
				dashboardMenu = new widget.PopupWindow(dashboardMenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
				dashboardMenu.setBackgroundDrawable(backgroundGradient());
				dashboardMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
			} catch(error) {
				print('An error occurred: ' + error);
			}
		}
	}));
}

var webBrowserWebView;

function webBrowserScreen() {
	VertexClientPE.menuIsShowing = true;
	var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				if(GUI != null) {
					if(GUI.isShowing()) {
						GUI.dismiss();
					}
				}
				if(hacksList != null) {
					if(hacksList.isShowing()) {
						hacksList.dismiss();
					}
				}
				if(tabGUI != null) {
					if(tabGUI.isShowing()) {
						tabGUI.dismiss();
					}
				}

				var webBrowserMenuLayout = new LinearLayout(ctx);
				webBrowserMenuLayout.setOrientation(1);
				webBrowserMenuLayout.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
				
				var webBrowserTitle = clientTextView("Webbrowser", true);
				webBrowserTitle.setTextSize(25);
				webBrowserTitle.setGravity(android.view.Gravity.CENTER);
				webBrowserMenuLayout.addView(webBrowserTitle);
				
				webBrowserWebView = new android.webkit.WebView(ctx);
				var wS = webBrowserWebView.getSettings();

				wS.setJavaScriptEnabled(true);
				webBrowserWebView.setWebChromeClient(new android.webkit.WebChromeClient());
				webBrowserWebView.setWebViewClient(new android.webkit.WebViewClient());

				webBrowserWebView.loadUrl("https://google.com/");
				
				webBrowserMenuLayout.addView(webBrowserWebView);

				webBrowserMenu = new widget.PopupWindow(webBrowserMenuLayout, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight(), true);
				webBrowserMenu.setBackgroundDrawable(backgroundGradient());
				webBrowserMenu.setOnDismissListener(new widget.PopupWindow.OnDismissListener() {
					onDismiss: function() {
						/*if(reloadWebBrowserUI != null) {
							if(reloadWebBrowserUI.isShowing()) {
								reloadWebBrowserUI.dismiss();
							}
						}*/
						if(exitWebBrowserUI != null) {
							if(exitWebBrowserUI.isShowing()) {
								xWebBrowserButton.performClick();
							}
						}
					}
				});
				webBrowserMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
			} catch(error) {
				print('An error occurred: ' + error);
			}
		}
	}));
}

VertexClientPE.showMenuBar = function() {
	var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				var menuBarWidth = menuType=="normal"?ctx.getWindowManager().getDefaultDisplay().getWidth():ctx.getWindowManager().getDefaultDisplay().getWidth()/1.8;
				
				var menuBarLayout = new LinearLayout(ctx);
				menuBarLayout.setOrientation(1);
				
				var menuBarTextView = clientTextView(news, true);
				menuBarTextView.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
				menuBarTextView.setMarqueeRepeatLimit(-1);
				menuBarTextView.setSingleLine();
				menuBarTextView.setHorizontallyScrolling(true);
				menuBarTextView.setSelected(true);
				
				menuBarLayout.addView(menuBarTextView);
				
				menuBar = new widget.PopupWindow(menuBarLayout, menuBarWidth - dip2px(90), screenHeight / 20);
				menuBar.setBackgroundDrawable(backgroundSpecial("bottom"));
				menuBar.setTouchable(false);
				menuBar.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 90, 0);
			} catch(error) {
				print('An error occurred: ' + error);
			}
		}
	}));
}

/**
 * function VertexClientPE.showMenu()
 * @author peacestorm
 * @since v1.1
*/
VertexClientPE.showMenu = function() {
	var _0x4eba=["\x59\x6F\x75\x27\x76\x65\x20\x63\x61\x6D\x65\x20\x61\x63\x72\x6F\x73\x73\x20\x61\x6E\x20\x6F\x75\x74\x64\x61\x74\x65\x64\x2C\x20\x65\x64\x69\x74\x65\x64\x20\x61\x6E\x64\x20\x75\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64\x20\x56\x65\x72\x74\x65\x78\x20\x43\x6C\x69\x65\x6E\x74\x20\x50\x45\x20\x73\x63\x72\x69\x70\x74\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x74\x68\x65\x20\x6F\x66\x66\x69\x63\x69\x61\x6C\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x6F\x6E\x20\x6F\x75\x72\x20\x77\x65\x62\x73\x69\x74\x65\x3A\x20\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2E\x6D\x6C","\x74\x6F\x61\x73\x74","\x59\x6F\x75\x27\x76\x65\x20\x63\x61\x6D\x65\x20\x61\x63\x72\x6F\x73\x73\x20\x61\x6E\x20\x65\x64\x69\x74\x65\x64\x20\x61\x6E\x64\x20\x75\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64\x20\x56\x65\x72\x74\x65\x78\x20\x43\x6C\x69\x65\x6E\x74\x20\x50\x45\x20\x73\x63\x72\x69\x70\x74\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x74\x68\x65\x20\x6F\x66\x66\x69\x63\x69\x61\x6C\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x6F\x6E\x20\x6F\x75\x72\x20\x77\x65\x62\x73\x69\x74\x65\x3A\x20\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2E\x6D\x6C","\x53\x6F\x72\x72\x79\x2C\x20\x74\x68\x69\x73\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x69\x73\x20\x6E\x6F\x74\x20\x73\x75\x70\x70\x6F\x72\x74\x65\x64\x20\x61\x6E\x79\x6D\x6F\x72\x65\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x75\x70\x67\x72\x61\x64\x65\x20\x74\x6F\x20\x74\x68\x65\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x2E"];if(!isAuthorized){if(!isSupported){VertexClientPE[_0x4eba[1]](_0x4eba[0])}else {VertexClientPE[_0x4eba[1]](_0x4eba[2])};return}else {if(!isSupported){VertexClientPE[_0x4eba[1]](_0x4eba[3]);return}}
	menuBtn.setBackgroundDrawable(iconClickedClientGUI);
	if(menuType == "normal") {
		VertexClientPE.showCombatMenu();
		VertexClientPE.showBuildingMenu();
		VertexClientPE.showMovementMenu();
		VertexClientPE.showChatMenu();
		VertexClientPE.showMiscMenu();
		VertexClientPE.showMenuBar();
	} else if(menuType == "halfscreen") {
		mainMenu();
	}
	VertexClientPE.menuIsShowing = true;
}

/**
 * function VertexClientPE.closeMenu()
 * @author peacestorm
 * @since v1.1
*/
VertexClientPE.closeMenu = function() {
	if(menuType == "normal") {
		if(vertexclientpemiscmenu != null) {
			if(vertexclientpemiscmenu.isShowing()) {
				vertexclientpecombatmenu.dismiss();
				vertexclientpebuildingmenu.dismiss();
				vertexclientpemovementmenu.dismiss();
				vertexclientpechatmenu.dismiss();
				vertexclientpemiscmenu.dismiss();
			}
		}
		if(menuBar != null) {
			if(menuBar.isShowing()) {
				menuBar.dismiss();
			}
		}
	} else if(menuType == "halfscreen") {
		if(menu != null) {
			if(menu.isShowing()) {
				menu.dismiss();
			}
		}
	}
	if(GUI != null) {
		if(GUI.isShowing()) {
			menuBtn.setBackgroundDrawable(iconClientGUI);
		}
	}
}

var currentTab = "Combat";

/**
 * function mainMenu()
 * @author peacestorm
 * @since v1.0-pre
*/
function mainMenu() {
	VertexClientPE.loadMainSettings();
	var display = new android.util.DisplayMetrics();
    com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
    try{
    var menuLayout = new android.widget.LinearLayout(ctx);
	var menuMiddleScroll = new android.widget.ScrollView(ctx);
    var menuRightScroll = new android.widget.ScrollView(ctx);
	menuMiddleLayout = new android.widget.LinearLayout(ctx);
    menuRightLayout = new android.widget.LinearLayout(ctx);
	menuRightLayout.setGravity(android.view.Gravity.CENTER);
	menuLayout.setOrientation(android.widget.LinearLayout.HORIZONTAL);
	menuMiddleLayout.setOrientation(1);
    menuMiddleLayout.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 1.8 - display.widthPixels / 2.2, display.heightPixels / 1.23));
    menuRightLayout.setOrientation(1);
    menuRightLayout.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 2.2, display.heightPixels / 1.23));
	menuLayout.addView(menuMiddleScroll);
    menuMiddleScroll.addView(menuMiddleLayout);
    menuLayout.addView(menuRightScroll);
    menuRightScroll.addView(menuRightLayout);
    //--------Add Title--------//
	var tabTitle = new android.widget.TextView(ctx);
	tabTitle.setText(currentTab);
	tabTitle.setTextSize(20);
	tabTitle.setGravity(android.view.Gravity.CENTER);
	//menuRightLayout.addView(tabTitle);
	
	var categories = [VertexClientPE.category.COMBAT, VertexClientPE.category.BUILDING, VertexClientPE.category.MOVEMENT, VertexClientPE.category.CHAT, VertexClientPE.category.MISC];
	
	categories.forEach(function(element, index, array) {
		menuMiddleLayout.addView(new categoryTab(element));
	});
	
	VertexClientPE.modules.forEach(function(element, index, array) {
		if(VertexClientPE.category.toRealName(element.category) == currentTab && (element.type == "Mod" || element.type == "Special")) {
			menuRightLayout.addView(new modButton(element));
		}
	});
	
	/*var gradDraw = new android.widget.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.TOP_BOTTOM, colors); 
	gradDraw.setShape(android.widget.drawable.GradientDrawable.RECTANGLE); 
    gradDraw.setGradientRadius(Math.sqrt(2) * 60); 
    gradDraw.setCornerRadius(8);*/
     
    //More buttons...
    menu = new android.widget.PopupWindow(menuLayout, ctx.getWindowManager().getDefaultDisplay().getWidth() / 1.8, ctx.getWindowManager().getDefaultDisplay().getHeight());
    menu.setBackgroundDrawable(backgroundGradient());
    menu.setAnimationStyle(android.R.style.Animation_Translucent);
    menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
    }catch(error){
    print('An error occured: ' + error);
    }
    }}));
}

var vertexclientpemenu;
var menuBtn;

var combattpopx = screenWidth / 3, combattpopy = 0;
var combatmX, combatmY;
var combatdown = false;

var buildingtpopx = Math.floor(screenWidth / 3 + screenWidth / 3), buildingtpopy = screenHeight / 2 - customHeight;
var buildingmX, buildingmY;
var buildingdown = false;

var movementtpopx = screenWidth / 3, movementtpopy = screenHeight / 2 - customHeight;
var movementmX, movementmY;
var movementdown = false;

var chattpopx = 0, chattpopy = 0;
var chatmX, chatmY;
var chatdown = false;

var misctpopx = 0, misctpopy = screenHeight / 2 - customHeight;
var miscmX, miscmY;
var miscdown = false;

var favtpopx = Math.floor(screenWidth / 3 + screenWidth / 3), favtpopy = 0;
var favmX, favmY;
var favdown = false;

var combatMenuShown = false;

VertexClientPE.showCombatMenu = function() {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
				var display = new android.util.DisplayMetrics();
				com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
				
				VertexClientPE.loadMainSettings();

                vertexclientpecombatmenu = new widget.PopupWindow(ctx);
                var combatMenuLayout1 = new LinearLayout(ctx);
                var combatMenuScrollView = new ScrollView(ctx);
                var combatMenuLayout = new LinearLayout(ctx);
				
                combatMenuLayout.setOrientation(1);
                combatMenuLayout1.setOrientation(1);
				
				combatMenuScrollView.addView(combatMenuLayout);
				
				var combat = new categoryTitle(combatName, true);
				var combatSettings = combat.getLeftButton();
				var combatTitle = combat.getMiddleButton();
				var combatArrow = combat.getRightButton();
				
				combatSettings.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function() {
						VertexClientPE.showCategoryDialog(combat, combatName, 0);
					}
				}));
				
				VertexClientPE.addView(combatMenuLayout1, combat);
				
				if(combatMenuShown == true) {
					combatArrow.setText("\u25B3");
					combatMenuLayout1.addView(combatMenuScrollView);
				}else if(combatMenuShown == false) {
					combatArrow.setText("\u25BD");
				}
				
				combatArrow.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(viewarg) {
						if(combatMenuShown == true) {
							combatMenuLayout1.removeView(combatMenuScrollView);
							combatArrow.setText("\u25BD");
							combatMenuShown = false;
						}else if(combatMenuShown == false) {
							combatMenuLayout1.addView(combatMenuScrollView);
							combatArrow.setText("\u25B3");
							combatMenuShown = true;
						}
                    }
                });
                combatTitle.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                    onLongClick: function(v, t) {
                        combatdown = true;
                        VertexClientPE.toast("Now you can move the menu!");
                        return true;
                    }
                });
                combatTitle.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        if(!combatdown) {
                            combatmX = e.getX()
                            combatmY = e.getY()
                        }
                        if(combatdown) {
                            var a = e.getAction()
                            if(a == 2) {
                                var X = parseInt(e.getX() - combatmX) * -1 / 10;
                                var Y = parseInt(e.getY() - combatmY) * -1 / 10;
                                combattpopx = combattpopx + X;
                                combattpopy = combattpopy + Y;
                                vertexclientpecombatmenu.update(parseInt(combattpopx), parseInt(combattpopy), -1, -1);
                            }
                            if(a == 1) combatdown = false;
                        }
                        return false;
                    }
                }));

				VertexClientPE.modules.forEach(function(element, index, array) {
					if(element.category == VertexClientPE.category.COMBAT && (element.type == "Mod" || element.type == "Special")) {
						combatMenuLayout.addView(new modButton(element));
					}
				});

                vertexclientpecombatmenu.setContentView(combatMenuLayout1);
				vertexclientpecombatmenu.setBackgroundDrawable(backgroundSpecial(true));
                vertexclientpecombatmenu.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
				vertexclientpecombatmenu.setHeight(screenHeight / 2 - customHeight);
				if(menuAnimationsSetting == "on") {
					vertexclientpecombatmenu.setAnimationStyle(android.R.style.Animation_Dialog);
				}
                vertexclientpecombatmenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, combattpopx, combattpopy);

            } catch(error) {
                print("Error: " + error);
				VertexClientPE.showBugReportDialog(error);
            }
        }
    });
}

var buildingMenuShown = false;

VertexClientPE.showBuildingMenu = function() {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
				var display = new android.util.DisplayMetrics();
				com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
				
				VertexClientPE.loadMainSettings();

                vertexclientpebuildingmenu = new widget.PopupWindow(ctx);
                var buildingMenuLayout1 = new LinearLayout(ctx);
                var buildingMenuScrollView = new ScrollView(ctx);
                var buildingMenuLayout = new LinearLayout(ctx);
				
                buildingMenuLayout.setOrientation(1);
                buildingMenuLayout1.setOrientation(1);
				
				buildingMenuScrollView.addView(buildingMenuLayout);
				
				var building = new categoryTitle(buildingName, true);
				var buildingSettings = building.getLeftButton();
				var buildingTitle = building.getMiddleButton();
				var buildingArrow = building.getRightButton();
				
				buildingSettings.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function() {
						VertexClientPE.showCategoryDialog(building, buildingName, 1);
					}
				}));
				
				VertexClientPE.addView(buildingMenuLayout1, building);
				
				if(buildingMenuShown == true) {
					buildingArrow.setText("\u25B3");
					buildingMenuLayout1.addView(buildingMenuScrollView);
				}else if(buildingMenuShown == false) {
					buildingArrow.setText("\u25BD");
				}
				
				buildingArrow.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(viewarg) {
						if(buildingMenuShown == true) {
							buildingMenuLayout1.removeView(buildingMenuScrollView);
							buildingArrow.setText("\u25BD");
							buildingMenuShown = false;
						}else if(buildingMenuShown == false) {
							buildingMenuLayout1.addView(buildingMenuScrollView);
							buildingArrow.setText("\u25B3");
							buildingMenuShown = true;
						}
                    }
                });
                buildingTitle.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                    onLongClick: function(v, t) {
                        buildingdown = true;
                        VertexClientPE.toast("Now you can move the menu!");
                        return true;
                    }
                });
                buildingTitle.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        if(!buildingdown) {
                            buildingmX = e.getX()
                            buildingmY = e.getY()
                        }
                        if(buildingdown) {
                            var a = e.getAction()
                            if(a == 2) {
                                var X = parseInt(e.getX() - buildingmX) * -1 / 10;
                                var Y = parseInt(e.getY() - buildingmY) * -1 / 10;
                                buildingtpopx = buildingtpopx + X;
                                buildingtpopy = buildingtpopy + Y;
                                vertexclientpebuildingmenu.update(parseInt(buildingtpopx), parseInt(buildingtpopy), -1, -1);
                            }
                            if(a == 1) buildingdown = false;
                        }
                        return false;
                    }
                }));

                VertexClientPE.modules.forEach(function(element, index, array) {
					if(element.category == VertexClientPE.category.BUILDING && (element.type == "Mod" || element.type == "Special")) {
						buildingMenuLayout.addView(new modButton(element));
					}
				});


                vertexclientpebuildingmenu.setContentView(buildingMenuLayout1);
				vertexclientpebuildingmenu.setBackgroundDrawable(backgroundSpecial(true));
                vertexclientpebuildingmenu.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
                vertexclientpebuildingmenu.setHeight(screenHeight / 2 - customHeight);
				if(menuAnimationsSetting == "on") {
					vertexclientpebuildingmenu.setAnimationStyle(android.R.style.Animation_Dialog);
				}
                vertexclientpebuildingmenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, buildingtpopx, buildingtpopy);

            } catch(error) {
                print("Error: " + error);
				VertexClientPE.showBugReportDialog(error);
            }
        }
    });
}

var movementMenuShown = false;

VertexClientPE.showMovementMenu = function() {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
				var display = new android.util.DisplayMetrics();
				com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
				
				VertexClientPE.loadMainSettings();

                vertexclientpemovementmenu = new widget.PopupWindow(ctx);
                var movementMenuLayout1 = new LinearLayout(ctx);
                var movementMenuScrollView = new ScrollView(ctx);
                movementMenuLayout = new LinearLayout(ctx);
				
                movementMenuLayout.setOrientation(1);
                movementMenuLayout1.setOrientation(1);
				
				movementMenuScrollView.addView(movementMenuLayout);
				
				var movement = new categoryTitle(movementName, true);
				var movementSettings = movement.getLeftButton();
				var movementTitle = movement.getMiddleButton();
				var movementArrow = movement.getRightButton();
				
				movementSettings.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function() {
						VertexClientPE.showCategoryDialog(movement, movementName, 2);
					}
				}));
				
				VertexClientPE.addView(movementMenuLayout1, movement);
				
				if(movementMenuShown == true) {
					movementArrow.setText("\u25B3");
					movementMenuLayout1.addView(movementMenuScrollView);
				}else if(movementMenuShown == false) {
					movementArrow.setText("\u25BD");
				}
				
				movementArrow.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(viewarg) {
						if(movementMenuShown == true) {
							movementMenuLayout1.removeView(movementMenuScrollView);
							movementArrow.setText("\u25BD");
							movementMenuShown = false;
						}else if(movementMenuShown == false) {
							movementMenuLayout1.addView(movementMenuScrollView);
							movementArrow.setText("\u25B3");
							movementMenuShown = true;
						}
                    }
                });
                movementTitle.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                    onLongClick: function(v, t) {
                        movementdown = true;
                        VertexClientPE.toast("Now you can move the menu!");
                        return true;
                    }
                });
                movementTitle.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        if(!movementdown) {
                            movementmX = e.getX()
                            movementmY = e.getY()
                        }
                        if(movementdown) {
                            var a = e.getAction()
                            if(a == 2) {
                                var X = parseInt(e.getX() - movementmX) * -1 / 10;
                                var Y = parseInt(e.getY() - movementmY) * -1 / 10;
                                movementtpopx = movementtpopx + X;
                                movementtpopy = movementtpopy + Y;
                                vertexclientpemovementmenu.update(parseInt(movementtpopx), parseInt(movementtpopy), -1, -1);
                            }
                            if(a == 1) movementdown = false;
                        }
                        return false;
                    }
                }));

				VertexClientPE.modules.forEach(function(element, index, array) {
					if(element.category == VertexClientPE.category.MOVEMENT && (element.type == "Mod" || element.type == "Special")) {
						movementMenuLayout.addView(new modButton(element));
					}
				});

                vertexclientpemovementmenu.setContentView(movementMenuLayout1);
				vertexclientpemovementmenu.setBackgroundDrawable(backgroundSpecial(true));
                vertexclientpemovementmenu.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
                vertexclientpemovementmenu.setHeight(screenHeight / 2 - customHeight);
				if(menuAnimationsSetting == "on") {
					vertexclientpemovementmenu.setAnimationStyle(android.R.style.Animation_Dialog);
				}
                vertexclientpemovementmenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, movementtpopx, movementtpopy);

            } catch(error) {
                print("Error: " + error);
				VertexClientPE.showBugReportDialog(error);
            }
        }
    });
}

var chatMenuShown = false;

VertexClientPE.showChatMenu = function() {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
				var display = new android.util.DisplayMetrics();
				com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
				
				VertexClientPE.loadMainSettings();

                vertexclientpechatmenu = new widget.PopupWindow(ctx);
                var chatMenuLayout1 = new LinearLayout(ctx);
                var chatMenuScrollView = new ScrollView(ctx);
                var chatMenuLayout = new LinearLayout(ctx);
				
                chatMenuLayout.setOrientation(1);
                chatMenuLayout1.setOrientation(1);
				
				chatMenuScrollView.addView(chatMenuLayout);
				
				var chat = new categoryTitle(chatName, true);
				var chatSettings = chat.getLeftButton();
				var chatTitle = chat.getMiddleButton();
				var chatArrow = chat.getRightButton();
				
				chatSettings.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function() {
						VertexClientPE.showCategoryDialog(chat, chatName, 3);
					}
				}));
				
				VertexClientPE.addView(chatMenuLayout1, chat);
				
				if(chatMenuShown == true) {
					chatArrow.setText("\u25B3");
					chatMenuLayout1.addView(chatMenuScrollView);
				}else if(chatMenuShown == false) {
					chatArrow.setText("\u25BD");
				}

				chatArrow.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(viewarg) {
						if(chatMenuShown == true) {
							chatMenuLayout1.removeView(chatMenuScrollView);
							chatArrow.setText("\u25BD");
							chatMenuShown = false;
						}else if(chatMenuShown == false) {
							chatMenuLayout1.addView(chatMenuScrollView);
							chatArrow.setText("\u25B3");
							chatMenuShown = true;
						}
                    }
                });
                chatTitle.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                    onLongClick: function(v, t) {
                        chatdown = true;
                        VertexClientPE.toast("Now you can move the menu!");
                        return true;
                    }
                });
                chatTitle.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        if(!chatdown) {
                            chatmX = e.getX()
                            chatmY = e.getY()
                        }
                        if(chatdown) {
                            var a = e.getAction()
                            if(a == 2) {
                                var X = parseInt(e.getX() - chatmX) * -1 / 10;
                                var Y = parseInt(e.getY() - chatmY) * -1 / 10;
                                chattpopx = chattpopx + X;
                                chattpopy = chattpopy + Y;
                                vertexclientpechatmenu.update(parseInt(chattpopx), parseInt(chattpopy), -1, -1);
                            }
                            if(a == 1) chatdown = false;
                        }
                        return false;
                    }
                }));
				
				VertexClientPE.modules.forEach(function(element, index, array) {
					if(element.category == VertexClientPE.category.CHAT && (element.type == "Mod" || element.type == "Special")) {
						chatMenuLayout.addView(new modButton(element));
					}
				});

                vertexclientpechatmenu.setContentView(chatMenuLayout1);
                vertexclientpechatmenu.setBackgroundDrawable(backgroundSpecial(true));
                vertexclientpechatmenu.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
                vertexclientpechatmenu.setHeight(screenHeight / 2 - customHeight);
				if(menuAnimationsSetting == "on") {
					vertexclientpechatmenu.setAnimationStyle(android.R.style.Animation_Dialog);
				}
                vertexclientpechatmenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, chattpopx, chattpopy);

            } catch(error) {
                print("Error: " + error);
				VertexClientPE.showBugReportDialog(error);
            }
        }
    });
}

var miscMenuShown = false;

VertexClientPE.showMiscMenu = function() {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
				var display = new android.util.DisplayMetrics();
				com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
				
				VertexClientPE.loadMainSettings();

                vertexclientpemiscmenu = new widget.PopupWindow(ctx);
                var miscMenuLayout1 = new LinearLayout(ctx);
                var miscMenuScrollView = new ScrollView(ctx);
                var miscMenuLayout = new LinearLayout(ctx);
				
                miscMenuLayout.setOrientation(1);
                miscMenuLayout1.setOrientation(1);
				
				miscMenuScrollView.addView(miscMenuLayout);
				
				var misc = new categoryTitle(miscName, true);
				var miscSettings = misc.getLeftButton();
				var miscTitle = misc.getMiddleButton();
				var miscArrow = misc.getRightButton();
				
				miscSettings.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function() {
						VertexClientPE.showCategoryDialog(misc, miscName, 4);
					}
				}));
				
				VertexClientPE.addView(miscMenuLayout1, misc);
				
				if(miscMenuShown == true) {
					miscArrow.setText("\u25B3");
					miscMenuLayout1.addView(miscMenuScrollView);
				}else if(miscMenuShown == false) {
					miscArrow.setText("\u25BD");
				}

				miscArrow.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(viewarg) {
						if(miscMenuShown == true) {
							miscMenuLayout1.removeView(miscMenuScrollView);
							miscArrow.setText("\u25BD");
							miscMenuShown = false;
						}else if(miscMenuShown == false) {
							miscMenuLayout1.addView(miscMenuScrollView);
							miscArrow.setText("\u25B3");
							miscMenuShown = true;
						}
                    }
                });
                miscTitle.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                    onLongClick: function(v, t) {
                        miscdown = true;
                        VertexClientPE.toast("Now you can move the menu!");
                        return true;
                    }
                });
                miscTitle.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        if(!miscdown) {
                            miscmX = e.getX()
                            miscmY = e.getY()
                        }
                        if(miscdown) {
                            var a = e.getAction()
                            if(a == 2) {
                                var X = parseInt(e.getX() - miscmX) * -1 / 10;
                                var Y = parseInt(e.getY() - miscmY) * -1 / 10;
                                misctpopx = misctpopx + X;
                                misctpopy = misctpopy + Y;
                                vertexclientpemiscmenu.update(parseInt(misctpopx), parseInt(misctpopy), -1, -1);
                            }
                            if(a == 1) miscdown = false;
                        }
                        return false;
                    }
                }));

                VertexClientPE.modules.forEach(function(element, index, array) {
					if(element.category == VertexClientPE.category.MISC && (element.type == "Mod" || element.type == "Special")) {
						miscMenuLayout.addView(new modButton(element));
					}
				});

                vertexclientpemiscmenu.setContentView(miscMenuLayout1);
                vertexclientpemiscmenu.setBackgroundDrawable(backgroundSpecial(true));
                vertexclientpemiscmenu.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
                vertexclientpemiscmenu.setHeight(screenHeight / 2 - customHeight);
				if(menuAnimationsSetting == "on") {
					vertexclientpemiscmenu.setAnimationStyle(android.R.style.Animation_Dialog);
				}
                vertexclientpemiscmenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, misctpopx, misctpopy);

            } catch(error) {
                print("Error: " + error);
				VertexClientPE.showBugReportDialog(error);
            }
        }
    });
}

var favMenuShown = false;

VertexClientPE.showFavMenu = function() {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
				var display = new android.util.DisplayMetrics();
				com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
				
				VertexClientPE.loadMainSettings();

                vertexclientpefavmenu = new widget.PopupWindow(ctx);
                var favMenuLayout1 = new LinearLayout(ctx);
                var favMenuScrollView = new ScrollView(ctx);
                favMenuLayout = new LinearLayout(ctx);
				
                favMenuLayout.setOrientation(1);
                favMenuLayout1.setOrientation(1);
				
				favMenuScrollView.addView(favMenuLayout);
				
				var favTitleLayout = new LinearLayout(ctx);
				favTitleLayout.setOrientation(LinearLayout.HORIZONTAL);
				
				var favTitleLayoutLeft = new LinearLayout(ctx);
				favTitleLayoutLeft.setOrientation(1);
				favTitleLayoutLeft.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.heightPixels / 2.5, display.heightPixels / 20));
				favTitleLayout.addView(favTitleLayoutLeft);
				
				var favTitleLayoutRight = new LinearLayout(ctx);
				favTitleLayoutRight.setOrientation(1);
				favTitleLayoutRight.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.heightPixels / 2 - display.heightPixels / 2.5, display.heightPixels / 20));
				favTitleLayout.addView(favTitleLayoutRight);
				
				if(themeSetting == "green") {
					var favTitle = greenSubTitle("Favourite", true);
				}if(themeSetting == "red") {
					var favTitle = redSubTitle("Favourite", true);
				}if(themeSetting == "blue") {
					var favTitle = blueSubTitle("Favourite", true);
				}if(themeSetting == "purple") {
					var favTitle = purpleSubTitle("Favourite", true);
				}
				favTitle.setAlpha(0.54);
				favTitle.setGravity(android.view.Gravity.CENTER);
				favTitle.setLayoutParams(new LinearLayout.LayoutParams(display.heightPixels / 2.5, display.heightPixels / 20));
				favTitleLayoutLeft.addView(favTitle);
				
				var favArrow = clientButton("*");
				favArrow.setAlpha(0.54);
				favArrow.setGravity(android.view.Gravity.CENTER);
				favArrow.setLayoutParams(new LinearLayout.LayoutParams(display.heightPixels / 2 - display.heightPixels / 2.5, display.heightPixels / 20));
				favTitleLayoutRight.addView(favArrow);
				
				favMenuLayout1.addView(favTitleLayout);
				
				if(favMenuShown == true) {
					favArrow.setText("\u25B3");
					favMenuLayout1.addView(favMenuScrollView);
				}else if(favMenuShown == false) {
					favArrow.setText("\u25BD");
				}
				
				var favText = clientTextView("Not available yet!", true);

				favArrow.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(viewarg) {
						if(favMenuShown == true) {
							favMenuLayout1.removeView(favMenuScrollView);
							favArrow.setText("\u25BD");
							favMenuShown = false;
						}else if(favMenuShown == false) {
							favMenuLayout1.addView(favMenuScrollView);
							favArrow.setText("\u25B3");
							favMenuShown = true;
						}
                    }
                });
                favTitle.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                    onLongClick: function(v, t) {
                        favdown = true;
                        VertexClientPE.toast("Now you can move the menu!");
                        return true;
                    }
                });
                favTitle.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        if(!favdown) {
                            favmX = e.getX()
                            favmY = e.getY()
                        }
                        if(favdown) {
                            var a = e.getAction()
                            if(a == 2) {
                                var X = parseInt(e.getX() - favmX) * -1 / 10;
                                var Y = parseInt(e.getY() - favmY) * -1 / 10;
                                favtpopx = favtpopx + X;
                                favtpopy = favtpopy + Y;
                                vertexclientpefavmenu.update(parseInt(favtpopx), parseInt(favtpopy), -1, -1);
                            }
                            if(a == 1) favdown = false;
                        }
                        return false;
                    }
                }));

                favMenuLayout.addView(favText);

                vertexclientpefavmenu.setContentView(favMenuLayout1);
                vertexclientpefavmenu.setBackgroundDrawable(backgroundSpecial(true));
                vertexclientpefavmenu.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
                vertexclientpefavmenu.setHeight(screenHeight / 2 - customHeight);
				if(menuAnimationsSetting == "on") {
					vertexclientpefavmenu.setAnimationStyle(android.R.style.Animation_Dialog);
				}
                vertexclientpefavmenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, favtpopx, favtpopy);

            } catch(error) {
                print("Error: " + error);
				VertexClientPE.showBugReportDialog(error);
            }
        }
    });
}

function changeColor(view, color) {
	if(view != null) {
		view.setColorFilter(new android.graphics.LightingColorFilter(color, 0));
	}
}

function showMenuButton() {
	VertexClientPE.loadMainSettings();
	VertexClientPE.menuIsShowing = false;
	var layout = new LinearLayout(ctx);
    layout.setOrientation(1);
	layout.setGravity(android.view.Gravity.CENTER);
	var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    menuBtn = new Button(ctx);
    menuBtn.setTextColor(Color.WHITE); //Color
	menuBtn.setBackgroundDrawable(iconClientGUI);
	menuBtn.setAlpha(0.54);
    menuBtn.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
		if(VertexClientPE.playerIsInGame && !VertexClientPE.menuIsShowing) {
			if(!isSupported) {
				VertexClientPE.toast("Sorry, this version is not supported anymore! Please upgrade to the latest version.");
				return;
			}
			if(hacksList != null) {
				hacksList.dismiss();
			}
			if(tabGUI != null) {
				tabGUI.dismiss();
			}
			VertexClientPE.showMenu();
		} else {
			if(!VertexClientPE.playerIsInGame) {
				VertexClientPE.toast("You need to be in game to open the menu!");
			} else {
				VertexClientPE.closeMenu();
				VertexClientPE.menuIsShowing = false;
				if(!hacksList.isShowing() && !tabGUI.isShowing() && (currentScreen == ScreenType.ingame || currentScreen == ScreenType.hud)) {
					showHacksList();
					showTabGUI();
				}
			}
		}
    }
    }));
    menuBtn.setOnLongClickListener(new android.view.View.OnLongClickListener() {
        onLongClick: function(v, t) {
            VertexClientPE.showMoreDialog();
            return true;
        }
    });
    layout.addView(menuBtn);
     
    GUI = new widget.PopupWindow(layout, dip2px(40), dip2px(40));
	if(menuAnimationsSetting == "on") {
		GUI.setAnimationStyle(android.R.style.Animation_Translucent);
	}
	if(mainButtonPositionSetting == "top-right") {
		layout.setPadding(10, 0, 0, 10);
		GUI.setBackgroundDrawable(backgroundSpecial("cornerleft", themeSetting, true));
		GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
	} else {
		layout.setPadding(0, 0, 10, 10);
		GUI.setBackgroundDrawable(backgroundSpecial("cornerright", themeSetting, true));
		GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
	}
	
	if((currentScreen == ScreenType.ingame || currentScreen == ScreenType.hud) && VertexClientPE.playerIsInGame) {
		showHacksList();
		showTabGUI();
	}
}

function showAccountManagerButton() {
	VertexClientPE.loadMainSettings();
	var layout = new LinearLayout(ctx);
    layout.setOrientation(1);
	var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var menuBtn = clientButton("AM");
	menuBtn.setLayoutParams(new LinearLayout.LayoutParams(dip2px(40), dip2px(40)));
    menuBtn.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
	if(hacksList != null) {
		hacksList.dismiss();
	}
	if(tabGUI != null) {
		tabGUI.dismiss();
	}
	GUI.dismiss();
	accountManagerGUI.dismiss();
	VertexClientPE.showAccountManager();
	exitAccountManager();
    }
    }));
    layout.addView(menuBtn);
     
    accountManagerGUI = new widget.PopupWindow(layout, dip2px(40), dip2px(40));
	if(menuAnimationsSetting == "on") {
		accountManagerGUI.setAnimationStyle(android.R.style.Animation_Translucent);
	}
    accountManagerGUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
	if(mainButtonPositionSetting == "top-right") {
		accountManagerGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 90, 0);
	}if(mainButtonPositionSetting == "bottom-right") {
		accountManagerGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 90, 0);
	}
}

VertexClientPE.clientTick = function() {
	new java.lang.Thread(new java.lang.Runnable() {
		run: function() {
			java.lang.Thread.sleep(1000 / 70);
			ctx.runOnUiThread(new java.lang.Runnable({
				run: function() {
					try{
						var _0x43af=["\x61\x75\x74\x68\x6F\x72","\x70\x65\x61\x63\x65\x73\x74\x6F\x72\x6D"];if(VertexClientPE[_0x43af[0]]!= _0x43af[1]){isAuthorized= false}
						if(GUI != null && !GUI.isShowing() && (vertexclientpemiscmenu == null || !vertexclientpemiscmenu.isShowing()) && (menu == null || !menu.isShowing()) && (settingsMenu == null || !settingsMenu.isShowing()) && (informationMenu == null || !informationMenu.isShowing()) && (accountManager == null || !accountManager.isShowing()) && (addonMenu == null || !addonMenu.isShowing()) && (webBrowserMenu == null || !webBrowserMenu.isShowing()) && (playerCustomizerMenu == null || !playerCustomizerMenu.isShowing()) && (optiFineMenu == null || !optiFineMenu.isShowing()) && (shopMenu == null || !shopMenu.isShowing()) && (dashboardMenu == null || !dashboardMenu.isShowing()) && (updateCenterMenu == null || !updateCenterMenu.isShowing()) && (musicPlayerMenu == null || !musicPlayerMenu.isShowing())) {
							VertexClientPE.isRemote = true;
							if(Launcher.isBlockLauncher()) {
								net.zhuoweizhang.mcpelauncher.ScriptManager.isRemote = true;
								net.zhuoweizhang.mcpelauncher.ScriptManager.setLevelFakeCallback(true, false);
							}
						}
						if(Launcher.isToolbox()) {
							if(Level.isRemote()) {
								if(!VertexClientPE.playerIsInGame) {
									newLevel();
									VertexClientPE.playerIsInGame = true;
								}
								VertexClientPE.isRemote = true;
							}
						}
					} catch(e) {
						print("Use BlockLauncher v1.12.2 or above!");
						ModPE.log(e);
					}
					if(GUI != null && !GUI.isShowing() && (vertexclientpemiscmenu == null || !vertexclientpemiscmenu.isShowing()) && (menu == null || !menu.isShowing()) && (settingsMenu == null || !settingsMenu.isShowing()) && (informationMenu == null || !informationMenu.isShowing()) && (accountManager == null || !accountManager.isShowing()) && (addonMenu == null || !addonMenu.isShowing()) && (webBrowserMenu == null || !webBrowserMenu.isShowing()) && (playerCustomizerMenu == null || !playerCustomizerMenu.isShowing()) && (optiFineMenu == null || !optiFineMenu.isShowing()) && (shopMenu == null || !shopMenu.isShowing()) && (dashboardMenu == null || !dashboardMenu.isShowing()) && (updateCenterMenu == null || !updateCenterMenu.isShowing()) && (musicPlayerMenu == null || !musicPlayerMenu.isShowing())) {
						VertexClientPE.isRemote = true;
						showMenuButton();
					}
					if(!VertexClientPE.playerIsInGame) {
						if(hacksList != null) {
							if(hacksList.isShowing()) {
								hacksList.dismiss();
							}
						}
						if(tabGUI != null) {
							if(tabGUI.isShowing()) {
								tabGUI.dismiss();
							}
						}
					}
				}
			}));
			VertexClientPE.clientTick();
        }
    }).start();
}

VertexClientPE.specialTick = function() {
	new java.lang.Thread(new java.lang.Runnable() {
		run: function() {
			java.lang.Thread.sleep(1000 * spamDelayTime);
			if(VertexClientPE.playerIsInGame) {
				if(delaySpammerState) {
					VertexClientPE.delaySpammer();
				}
			}
			VertexClientPE.specialTick();
		}
    }).start();
}

var secondTickTimer = 0;
var lagTimer = 0;

VertexClientPE.secondTick = function() {
	new java.lang.Thread(new java.lang.Runnable() {
		run: function() {
			java.lang.Thread.sleep(1000);
			VertexClientPE.modules.forEach(function(element, index, array) {
				if(element.isStateMod() && element.state && element.onInterval) {
					element.onInterval();
				}
			});
			if(secondTickTimer == 60) {
				var extraCash = VertexClientPE.isPro()?20:10;
				VertexClientPE.setVertexCash(VertexClientPE.getVertexCash() + extraCash);
				secondTickTimer = 0;
				VertexClientPE.moneyToast();
				if(shopCashText != null) {
					ctx.runOnUiThread(new Runnable() {
						run: function() {
							shopCashText.setText("\u26C1 " + VertexClientPE.getVertexCash());
						}
					});
				}
			} else {
				secondTickTimer += 1;
			}
			
			if(antiLagDropRemoverSetting == "on" && VertexClientPE.playerIsInGame && !VertexClientPE.isRemote && sharedPref.getString("VertexClientPE.boughtOptiFine", "false") == "true") {
				if(lagTimer == 0) {
					VertexClientPE.clientMessage("Dropped items will be removed in " + ChatColor.RED + "two minutes" + ChatColor.WHITE + "!");
					lagTimer++;
				} else {
					if(lagTimer >= 1 && lagTimer < 120) {
						if(lagTimer == 60) {
							VertexClientPE.clientMessage("Dropped items will be removed in " + ChatColor.RED + "one minute" + ChatColor.WHITE + "!");
						}
						lagTimer++;
					} else if(lagTimer == 120) {
						Entity.getAll().forEach(function(element, index, array) {
							if(Entity.getEntityTypeId(element) == EntityType.ITEM) {
								try {
									Entity.remove(element);
								} catch(e) {
									print("An error occurred: " + e);
								}
							}
						});
						VertexClientPE.clientMessage("Successfully removed dropped items!");
						lagTimer = 0;
					}
				}
			}
			VertexClientPE.secondTick();
		}
	}).start();
	if(mpCurrentPositionView != null && mpSeekBarView != null) {
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function() {
				try{
						mpCurrentPositionView.setText(VertexClientPE.MusicUtils.milliSecToMinString(VertexClientPE.MusicUtils.mp.getCurrentPosition()));
						mpSeekBarView.setProgress(VertexClientPE.MusicUtils.mp.getCurrentPosition());
				} catch(e) {
					
				}
			}
		}));
	}
}
 
function dip2px(dips){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

var hacksList;
var tabGUI;
var statesTextView;
var musicTextView;

var enabledHacksCounter = 0;

var musicText = "None";

function showHacksList() {
	if(hacksList == null || !hacksList.isShowing()) {
		var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function() {
				try {
					var display = new android.util.DisplayMetrics();
					com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);

					enabledHacksCounter = 0;
					
					var hacksListLayout = new LinearLayout(ctx);
					hacksListLayout.setOrientation(LinearLayout.HORIZONTAL);
					hacksListLayout.setGravity(android.view.Gravity.CENTER_VERTICAL);
					
					var hacksListLayoutLeft = new LinearLayout(ctx);
					hacksListLayoutLeft.setOrientation(1);
					hacksListLayoutLeft.setLayoutParams(new android.view.ViewGroup.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth() / 4, ctx.getWindowManager().getDefaultDisplay().getWidth() / 15));
					hacksListLayout.addView(hacksListLayoutLeft);
					
					var hacksListLayoutRight = new LinearLayout(ctx);
					hacksListLayoutRight.setOrientation(1);
					hacksListLayoutRight.setLayoutParams(new android.view.ViewGroup.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth() / 4, ctx.getWindowManager().getDefaultDisplay().getWidth() / 15));
					hacksListLayout.addView(hacksListLayoutRight);
					
					var logo2 = android.util.Base64.decode(logoImage, 0);
					logoViewer2 = new widget.ImageView(ctx);
					logoViewer2.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(logo2, 0, logo2.length));
					logoViewer2.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth() / 4, ctx.getWindowManager().getDefaultDisplay().getWidth() / 16));

					var VertexClientPEHacksListText = "Vertex Client PE " + VertexClientPE.getVersion("current");
					var statesText = "";
					VertexClientPE.modules.forEach(function (element, index, array) {
						if(element.isStateMod() && element.state) {
							if(yesCheatPlusState && element.canBypassYesCheatPlus && !element.canBypassYesCheatPlus()) {
								return;
							}
							if(enabledHacksCounter != 0) {
								statesText += " - "
							}
							statesText += element.name;
							enabledHacksCounter++;
						}
					});
					
					statesTextView = clientTextView(statesText, true);
					if(hacksListModeSetting == "on") {
						statesTextView.setText(statesText);
					} else if(hacksListModeSetting == "counter") {
						statesTextView.setText(enabledHacksCounter.toString() + " mods enabled");
					}
					musicTextView = clientTextView("\u266B Currently playing: " + musicText, true);
					
					statesTextView.setTextSize(15);
					statesTextView.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
					statesTextView.setMarqueeRepeatLimit(-1);
					statesTextView.setSingleLine();
					statesTextView.setHorizontallyScrolling(true);
					statesTextView.setSelected(true);
					musicTextView.setTextSize(15);
					musicTextView.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
					musicTextView.setMarqueeRepeatLimit(-1);
					musicTextView.setSingleLine();
					musicTextView.setHorizontallyScrolling(true);
					musicTextView.setSelected(true);
					hacksListLayoutLeft.addView(logoViewer2);
					hacksListLayoutRight.addView(statesTextView);
					hacksListLayoutRight.addView(musicTextView);
					hacksList = new widget.PopupWindow(hacksListLayout, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getWidth() / 15);
					hacksList.setBackgroundDrawable(backgroundGradient(true));
					hacksList.setTouchable(false);
					if(hacksListModeSetting != "off") {
						hacksList.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0);
					}
				} catch(error) {
					print('An error occurred: ' + error);
					VertexClientPE.showBugReportDialog(error);
				}
			}
		}));
	}
}

function updateHacksList() {
        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
					enabledHacksCounter = 0;
					
					var statesText = "";
					VertexClientPE.modules.forEach(function (element, index, array) {
						if(element.isStateMod() && element.state) {
							if(yesCheatPlusState && element.canBypassYesCheatPlus && !element.canBypassYesCheatPlus()) {
								return;
							}
							if(enabledHacksCounter != 0) {
								statesText += " - "
							}
							statesText += element.name;
							enabledHacksCounter++;
						}
					});
					
					statesTextView.setText(statesText);
					if(hacksListModeSetting == "on") {
						statesTextView.setText(statesText);
					} else if(hacksListModeSetting == "counter") {
						statesTextView.setText(enabledHacksCounter.toString() + " mods enabled");
					}
					musicTextView.setText("\u266B Currently playing: " + musicText);
                } catch(error) {
                    print('An error occurred: ' + error);
					VertexClientPE.showBugReportDialog(error);
                }
            }
        }));
}

function showTabGUI() {
	if(tabGUI == null || !tabGUI.isShowing()) {
		var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function() {
				try {
					var display = new android.util.DisplayMetrics();
					com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);

					var tabGUILayout = new LinearLayout(ctx);
					tabGUILayout.setOrientation(LinearLayout.HORIZONTAL);
					tabGUILayout.setGravity(android.view.Gravity.CENTER_VERTICAL);
					
					var tabGUILayoutLeft = new LinearLayout(ctx);
					tabGUILayoutLeft.setOrientation(1);
					tabGUILayoutLeft.setLayoutParams(new android.view.ViewGroup.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth() / 6, android.view.ViewGroup.LayoutParams.WRAP_CONTENT));
					tabGUILayout.addView(tabGUILayoutLeft);
					
					var tabGUILayoutRight = new LinearLayout(ctx);
					tabGUILayoutRight.setOrientation(1);
					tabGUILayoutRight.setLayoutParams(new android.view.ViewGroup.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth() / 6, android.view.ViewGroup.LayoutParams.WRAP_CONTENT));
					if(currentTabGUICategory != null) {
						tabGUILayout.addView(tabGUILayoutRight);
					}
					
					/*var logo2 = android.util.Base64.decode(logoImage, 0);
					logoViewer2 = new widget.ImageView(ctx);
					logoViewer2.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(logo2, 0, logo2.length));
					logoViewer2.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth() / 4, ctx.getWindowManager().getDefaultDisplay().getWidth() / 16));*/

					var categories = [VertexClientPE.category.COMBAT, VertexClientPE.category.BUILDING, VertexClientPE.category.MOVEMENT, VertexClientPE.category.CHAT, VertexClientPE.category.MISC];
					
					categories.forEach(function (element, index, array) {
						tabGUILayoutLeft.addView(new tabGUICategoryButton(element, tabGUILayoutLeft, tabGUILayoutRight, tabGUILayout));
					});
					
					tabGUI = new widget.PopupWindow(tabGUILayout, LinearLayout.LayoutParams.WRAP_CONTENT, ctx.getWindowManager().getDefaultDisplay().getHeight() / 3);
					tabGUI.setBackgroundDrawable(/*backgroundGradient(true)*/new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
					if(tabGUIModeSetting != "off") {
						tabGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, dip2px(70));
					}
				} catch(error) {
					print('An error occurred: ' + error);
					VertexClientPE.showBugReportDialog(error);
				}
			}
		}));
	}
}

var itemSlot = 0;
var hasPushed = 0;
var isChestOpen = false;

VertexClientPE.stealChestContent = function(x, y, z) {
	new android.os.Handler()
		.postDelayed(new java.lang.Runnable({
			run: function() {
				var itemId = Level.getChestSlot(x, y, z, itemSlot);
				var itemCount = Level.getChestSlotCount(x, y, z, itemSlot);
				var itemData = Level.getChestSlotData(x, y, z, itemSlot);
				if(itemId != 0 && isChestOpen) {
					Level.setChestSlot(x, y, z, itemSlot, 0, 0, 0);
					Player.addItemInventory(itemId, itemCount, itemData);
				}
				itemSlot++;
				if(itemSlot <= 27) {
					VertexClientPE.stealChestContent(x, y, z);
				} else {
					itemSlot = 0;
				}
			}
		}), 500);
}

VertexClientPE.showChestUI = function(x, y, z) {
	ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                var chestLayout = new LinearLayout(ctx);
                var chestStealButton = clientButton("Steal");
				chestStealButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg) {
						hasPushed = true;
					}
				}));
                chestLayout.addView(chestStealButton);
                chestUI = new widget.PopupWindow(chestLayout, dip2px(40), dip2px(40));
                chestUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
                chestUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
            }
     }));
}

VertexClientPE.hideChestUI = function() {
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			chestUI.dismiss();
		}
	}));
}

function setupDone() {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				var doneLayout = new LinearLayout(ctx);
				var doneButton = new Button(ctx);
				doneButton.setText("\u2713");//Text
				doneButton.getBackground().setColorFilter(Color.parseColor("#008000"), android.graphics.PorterDuff.Mode.MULTIPLY);
				doneButton.setTextColor(Color.WHITE);
				doneButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						themeSetting = setupColor;
						VertexClientPE.saveMainSettings();
						VertexClientPE.editCopyrightText();
						doneUI.dismiss(); //Close
						setupScreen.dismiss();
						showMenuButton();
						showAccountManagerButton();
						VertexClientPE.setupMCPEGUI();
						if(userIsNewToCurrentVersion == true) {
							VertexClientPE.showWhatsNewDialog();
						}
					}
				}));
				doneLayout.addView(doneButton);
				
				doneUI = new widget.PopupWindow(doneLayout, dip2px(40), dip2px(40));
				doneUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				doneUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
			} catch(exception) {
				print(exception);
				VertexClientPE.showBugReportDialog(exception);
			}
		}
	}));
}
	
function exitAccountManager() {
    var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctxe.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				var xAccountManagerLayout = new LinearLayout(ctxe);
				var xAccountManagerButton = new Button(ctxe);
				xAccountManagerButton.setText('X');//Text
				xAccountManagerButton.getBackground().setColorFilter(Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
				xAccountManagerButton.setTextColor(Color.WHITE);
				xAccountManagerButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						exitAccountManagerUI.dismiss(); //Close
						accountManager.dismiss(); //Close
						showMenuButton();
						showAccountManagerButton();
					}
				}));
				xAccountManagerLayout.addView(xAccountManagerButton);
				
				exitAccountManagerUI = new widget.PopupWindow(xAccountManagerLayout, dip2px(40), dip2px(40));
				exitAccountManagerUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				exitAccountManagerUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
			} catch(exception) {
				print(exception);
				VertexClientPE.showBugReportDialog(exception);
			}
		}
	}));
}
	
function exitSettings() {
    var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctxe.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				var backSettingsLayout = new LinearLayout(ctxe);
				var backSettingsButton = new Button(ctxe);
				backSettingsButton.setText("<");//Text
				backSettingsButton.getBackground().setColorFilter(Color.parseColor("#00BFFF"), android.graphics.PorterDuff.Mode.MULTIPLY);
				backSettingsButton.setTextColor(Color.WHITE);
				backSettingsButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						backSettingsUI.dismiss(); //Close
						exitSettingsUI.dismiss(); //Close
						settingsMenu.dismiss(); //Close
						dashboardScreen();
						exitDashboard();
					}
				}));
				backSettingsLayout.addView(backSettingsButton);
				
				var xSettingsLayout = new LinearLayout(ctxe);
				var xSettingsButton = new Button(ctxe);
				xSettingsButton.setText("X");//Text
				xSettingsButton.getBackground().setColorFilter(Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
				xSettingsButton.setTextColor(Color.WHITE);
				xSettingsButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						backSettingsUI.dismiss(); //Close
						exitSettingsUI.dismiss(); //Close
						settingsMenu.dismiss(); //Close
						showMenuButton();
					}
				}));
				xSettingsLayout.addView(xSettingsButton);
				
				backSettingsUI = new widget.PopupWindow(backSettingsLayout, dip2px(40), dip2px(40));
				backSettingsUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				backSettingsUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
				
				exitSettingsUI = new widget.PopupWindow(xSettingsLayout, dip2px(40), dip2px(40));
				exitSettingsUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				exitSettingsUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
			} catch(exception) {
				print(exception);
				VertexClientPE.showBugReportDialog(exception);
			}
		}
	}));
}

function exitInformation() {
    var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctxe.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				var backInformationLayout = new LinearLayout(ctxe);
				var backInformationButton = new Button(ctxe);
				backInformationButton.setText("<");//Text
				backInformationButton.getBackground().setColorFilter(Color.parseColor("#00BFFF"), android.graphics.PorterDuff.Mode.MULTIPLY);
				backInformationButton.setTextColor(Color.WHITE);
				backInformationButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						backInformationUI.dismiss(); //Close
						exitInformationUI.dismiss(); //Close
						informationMenu.dismiss(); //Close
						dashboardScreen();
						exitDashboard();
					}
				}));
				backInformationLayout.addView(backInformationButton);
				
				var xInformationLayout = new LinearLayout(ctxe);
				var xInformationButton = new Button(ctxe);
				xInformationButton.setText("X");//Text
				xInformationButton.getBackground().setColorFilter(Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
				xInformationButton.setTextColor(Color.WHITE);
				xInformationButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						backInformationUI.dismiss(); //Close
						exitInformationUI.dismiss(); //Close
						informationMenu.dismiss(); //Close
						showMenuButton();
					}
				}));
				xInformationLayout.addView(xInformationButton);
				
				backInformationUI = new widget.PopupWindow(backInformationLayout, dip2px(40), dip2px(40));
				backInformationUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				backInformationUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
				
				exitInformationUI = new widget.PopupWindow(xInformationLayout, dip2px(40), dip2px(40));
				exitInformationUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				exitInformationUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
			} catch(exception) {
				print(exception);
				VertexClientPE.showBugReportDialog(exception);
			}
		}
	}));
}

function exitMusicPlayer() {
    var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctxe.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				var backMusicPlayerLayout = new LinearLayout(ctxe);
				var backMusicPlayerButton = new Button(ctxe);
				backMusicPlayerButton.setText("<");//Text
				backMusicPlayerButton.getBackground().setColorFilter(Color.parseColor("#00BFFF"), android.graphics.PorterDuff.Mode.MULTIPLY);
				backMusicPlayerButton.setTextColor(Color.WHITE);
				backMusicPlayerButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						backMusicPlayerUI.dismiss(); //Close
						exitMusicPlayerUI.dismiss(); //Close
						musicPlayerMenu.dismiss(); //Close
						dashboardScreen();
						exitDashboard();
						mpCurrentPositionView = null;
						mpSeekBarView = null;
						mpTotalDurationView = null;
					}
				}));
				backMusicPlayerLayout.addView(backMusicPlayerButton);
				
				var xMusicPlayerLayout = new LinearLayout(ctxe);
				var xMusicPlayerButton = new Button(ctxe);
				xMusicPlayerButton.setText("X");//Text
				xMusicPlayerButton.getBackground().setColorFilter(Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
				xMusicPlayerButton.setTextColor(Color.WHITE);
				xMusicPlayerButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						backMusicPlayerUI.dismiss(); //Close
						exitMusicPlayerUI.dismiss(); //Close
						musicPlayerMenu.dismiss(); //Close
						showMenuButton();
						mpCurrentPositionView = null;
						mpSeekBarView = null;
						mpTotalDurationView = null;
					}
				}));
				xMusicPlayerLayout.addView(xMusicPlayerButton);
				
				backMusicPlayerUI = new widget.PopupWindow(backMusicPlayerLayout, dip2px(40), dip2px(40));
				backMusicPlayerUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				backMusicPlayerUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
				
				exitMusicPlayerUI = new widget.PopupWindow(xMusicPlayerLayout, dip2px(40), dip2px(40));
				exitMusicPlayerUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				exitMusicPlayerUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
			} catch(exception) {
				print(exception);
				VertexClientPE.showBugReportDialog(exception);
			}
		}
	}));
}

function exitAddon() {
    var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctxe.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				var backAddonLayout = new LinearLayout(ctxe);
				var backAddonButton = new Button(ctxe);
				backAddonButton.setText("<");//Text
				backAddonButton.getBackground().setColorFilter(Color.parseColor("#00BFFF"), android.graphics.PorterDuff.Mode.MULTIPLY);
				backAddonButton.setTextColor(Color.WHITE);
				backAddonButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						backAddonUI.dismiss(); //Close
						exitAddonUI.dismiss(); //Close
						addonMenu.dismiss(); //Close
						dashboardScreen();
						exitDashboard();
					}
				}));
				backAddonLayout.addView(backAddonButton);
				
				var xAddonLayout = new LinearLayout(ctxe);
				var xAddonButton = new Button(ctxe);
				xAddonButton.setText("X");//Text
				xAddonButton.getBackground().setColorFilter(Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
				xAddonButton.setTextColor(Color.WHITE);
				xAddonButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						backAddonUI.dismiss(); //Close
						exitAddonUI.dismiss(); //Close
						addonMenu.dismiss(); //Close
						showMenuButton();
					}
				}));
				xAddonLayout.addView(xAddonButton);
				
				backAddonUI = new widget.PopupWindow(backAddonLayout, dip2px(40), dip2px(40));
				backAddonUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				backAddonUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
				
				exitAddonUI = new widget.PopupWindow(xAddonLayout, dip2px(40), dip2px(40));
				exitAddonUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				exitAddonUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
			} catch(exception) {
				print(exception);
				VertexClientPE.showBugReportDialog(exception);
			}
		}
	}));
}

function exitUpdateCenter() {
    var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctxe.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				var backUpdateCenterLayout = new LinearLayout(ctxe);
				var backUpdateCenterButton = new Button(ctxe);
				backUpdateCenterButton.setText("<");//Text
				backUpdateCenterButton.getBackground().setColorFilter(Color.parseColor("#00BFFF"), android.graphics.PorterDuff.Mode.MULTIPLY);
				backUpdateCenterButton.setTextColor(Color.WHITE);
				backUpdateCenterButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						backUpdateCenterUI.dismiss(); //Close
						exitUpdateCenterUI.dismiss(); //Close
						updateCenterMenu.dismiss(); //Close
						dashboardScreen();
						exitDashboard();
					}
				}));
				backUpdateCenterLayout.addView(backUpdateCenterButton);
				
				var xUpdateCenterLayout = new LinearLayout(ctxe);
				var xUpdateCenterButton = new Button(ctxe);
				xUpdateCenterButton.setText("X");//Text
				xUpdateCenterButton.getBackground().setColorFilter(Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
				xUpdateCenterButton.setTextColor(Color.WHITE);
				xUpdateCenterButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						backUpdateCenterUI.dismiss(); //Close
						exitUpdateCenterUI.dismiss(); //Close
						updateCenterMenu.dismiss(); //Close
						showMenuButton();
					}
				}));
				xUpdateCenterLayout.addView(xUpdateCenterButton);
				
				backUpdateCenterUI = new widget.PopupWindow(backUpdateCenterLayout, dip2px(40), dip2px(40));
				backUpdateCenterUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				backUpdateCenterUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
				
				exitUpdateCenterUI = new widget.PopupWindow(xUpdateCenterLayout, dip2px(40), dip2px(40));
				exitUpdateCenterUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				exitUpdateCenterUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
			} catch(exception) {
				print(exception);
				VertexClientPE.showBugReportDialog(exception);
			}
		}
	}));
}

var xWebBrowserButton;

function overlayWebBrowser() {
    var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctxe.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				var reloadWebBrowserLayout = new LinearLayout(ctxe);
				var reloadWebBrowserButton = new Button(ctxe);
				reloadWebBrowserButton.setText("\u21BB");//Text
				reloadWebBrowserButton.getBackground().setColorFilter(Color.parseColor("#0B6138"), android.graphics.PorterDuff.Mode.MULTIPLY);
				reloadWebBrowserButton.setTextColor(Color.WHITE);
				reloadWebBrowserButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg) {
						if(webBrowserWebView != null) {
							webBrowserWebView.reload();
						}
					}
				}));
				reloadWebBrowserLayout.addView(reloadWebBrowserButton);
				
				var xWebBrowserLayout = new LinearLayout(ctxe);
				xWebBrowserButton = new Button(ctxe);
				xWebBrowserButton.setText("X");//Text
				xWebBrowserButton.getBackground().setColorFilter(Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
				xWebBrowserButton.setTextColor(Color.WHITE);
				xWebBrowserButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg) {
						reloadWebBrowserUI.dismiss(); //Close
						exitWebBrowserUI.dismiss(); //Close
						webBrowserMenu.dismiss(); //Close
						showMenuButton();
					}
				}));
				xWebBrowserLayout.addView(xWebBrowserButton);
				
				reloadWebBrowserUI = new widget.PopupWindow(reloadWebBrowserLayout, dip2px(40), dip2px(40));
				reloadWebBrowserUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				reloadWebBrowserUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
				
				exitWebBrowserUI = new widget.PopupWindow(xWebBrowserLayout, dip2px(40), dip2px(40));
				exitWebBrowserUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				exitWebBrowserUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
			} catch(exception) {
				print(exception);
				VertexClientPE.showBugReportDialog(exception);
			}
		}
	}));
}

function exitPlayerCustomizer() {
    var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctxe.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				var xPlayerCustomizerLayout = new LinearLayout(ctxe);
				var xPlayerCustomizerButton = new Button(ctxe);
				xPlayerCustomizerButton.setText('X');//Text
				xPlayerCustomizerButton.getBackground().setColorFilter(Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
				xPlayerCustomizerButton.setTextColor(Color.WHITE);
				xPlayerCustomizerButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						exitPlayerCustomizerUI.dismiss(); //Close
						playerCustomizerMenu.dismiss(); //Close
						showMenuButton();
					}
				}));
				xPlayerCustomizerLayout.addView(xPlayerCustomizerButton);
				
				exitPlayerCustomizerUI = new widget.PopupWindow(xPlayerCustomizerLayout, dip2px(40), dip2px(40));
				exitPlayerCustomizerUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				exitPlayerCustomizerUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
			} catch(exception) {
				print(exception);
				VertexClientPE.showBugReportDialog(exception);
			}
		}
	}));
}

function exitOptiFine() {
    var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctxe.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				var xOptiFineLayout = new LinearLayout(ctxe);
				var xOptiFineButton = new Button(ctxe);
				xOptiFineButton.setText('X');//Text
				xOptiFineButton.getBackground().setColorFilter(Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
				xOptiFineButton.setTextColor(Color.WHITE);
				xOptiFineButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						exitOptiFineUI.dismiss(); //Close
						optiFineMenu.dismiss(); //Close
						showMenuButton();
					}
				}));
				xOptiFineLayout.addView(xOptiFineButton);
				
				exitOptiFineUI = new widget.PopupWindow(xOptiFineLayout, dip2px(40), dip2px(40));
				exitOptiFineUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				exitOptiFineUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
			} catch(exception) {
				print(exception);
				VertexClientPE.showBugReportDialog(exception);
			}
		}
	}));
}

function exitShop() {
    var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctxe.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				var xShopLayout = new LinearLayout(ctxe);
				var xShopButton = new Button(ctxe);
				xShopButton.setText('X');//Text
				xShopButton.getBackground().setColorFilter(Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
				xShopButton.setTextColor(Color.WHITE);
				xShopButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						exitShopUI.dismiss(); //Close
						shopMenu.dismiss(); //Close
						showMenuButton();
					}
				}));
				xShopLayout.addView(xShopButton);
				
				exitShopUI = new widget.PopupWindow(xShopLayout, dip2px(40), dip2px(40));
				exitShopUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				exitShopUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
			} catch(exception) {
				print(exception);
				VertexClientPE.showBugReportDialog(exception);
			}
		}
	}));
}

function exitDashboard() {
    var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctxe.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				var xDashboardLayout = new LinearLayout(ctxe);
				var xDashboardButton = new Button(ctxe);
				xDashboardButton.setText('X');//Text
				xDashboardButton.getBackground().setColorFilter(Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
				xDashboardButton.setTextColor(Color.WHITE);
				xDashboardButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg) {
						exitDashboardUI.dismiss(); //Close
						dashboardMenu.dismiss(); //Close
						showMenuButton();
					}
				}));
				xDashboardLayout.addView(xDashboardButton);
				
				exitDashboardUI = new widget.PopupWindow(xDashboardLayout, dip2px(40), dip2px(40));
				exitDashboardUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
				exitDashboardUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
			} catch(exception) {
				print(exception);
				VertexClientPE.showBugReportDialog(exception);
			}
		}
	}));
}
	
function destroyBlock(x, y, z, side) {
    var data = Level.getData(x, y, z);
    var tile = Level.getTile(x, y, z);
    var gamemode = Level.getGameMode();
    if(gamemode == 0) {
        if(stackDropState == true) {
            if(tile == 1 && getCarriedItem() == 270 || tile == 1 && getCarriedItem() == 257 || tile == 1 && getCarriedItem() == 274 || tile == 1 && getCarriedItem() == 278 || tile == 1 && getCarriedItem() == 285 || tile == 4 && getCarriedItem() == 270 || tile == 4 && getCarriedItem() == 257 || tile == 4 && getCarriedItem() == 274 || tile == 4 && getCarriedItem() == 278 || tile == 4 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 4, 63);
            } else if(tile == 1 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285 || tile == 4 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 4, 64);
            }
            if(tile == 2 || tile == 3) {
                Level.dropItem(x, y, z, 0.5, 3, 63);
            }
            if(tile == 5 || tile == 6 || tile == 12 || tile == 13) {
                Level.dropItem(x, y, z, 0.5, tile, 63, data);
            }
            if(tile == 14 && getCarriedItem() == 257 || tile == 14 && getCarriedItem() == 278 || tile == 14 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 14, 63);
            } else if(tile == 14 && getCarriedItem() != 257 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 14, 64);
            }
            if(tile == 15 && getCarriedItem() == 257 || tile == 15 && getCarriedItem() == 274 || tile == 15 && getCarriedItem() == 278 || tile == 15 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 15, 63);
            } else if(tile == 15 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 15, 64);
            }
            if(tile == 16 && getCarriedItem() == 270 || tile == 16 && getCarriedItem() == 257 || tile == 16 && getCarriedItem() == 274 || tile == 16 && getCarriedItem() == 278 || tile == 16 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 263, 63);
            } else if(tile == 16 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 263, 64);
            }
            if(tile == 17) {
                Level.dropItem(x, y, z, 0.5, 17, 63, data);
            }
            if(tile == 18 && getCarriedItem() == 359) {
                Level.dropItem(x, y, z, 0.5, 18, 63);
            } else if(tile == 18 && getCarriedItem() != 359) {
                Level.dropItem(x, y, z, 0.5, 18, 64);
            }
            if(tile == 19 || tile == 20) {
                Level.dropItem(x, y, z, 0.5, tile, 63, data);
            }
            if(tile == 21 && getCarriedItem() == 257 || tile == 21 && getCarriedItem() == 274 || tile == 21 && getCarriedItem() == 278 || tile == 21 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 21, 63);
            } else if(tile == 21 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 21, 64);
            }
            if(tile == 22 && getCarriedItem() == 257 || tile == 22 && getCarriedItem() == 274 || tile == 22 && getCarriedItem() == 278 || tile == 22 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 22, 63);
            } else if(tile == 22 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 22, 64);
            }
            if(tile == 24 && getCarriedItem() == 270 || tile == 24 && getCarriedItem() == 257 || tile == 24 && getCarriedItem() == 274 || tile == 24 && getCarriedItem() == 278 || tile == 24 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 24, 63);
            } else if(tile == 24 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 24, 64);
            }
            if(tile == 26) {
                Level.dropItem(x, y, z, 0.5, 26, 63, data);
            }
            if(tile == 27 && getCarriedItem() == 270 || tile == 27 && getCarriedItem() == 257 || tile == 27 && getCarriedItem() == 274 || tile == 27 && getCarriedItem() == 278 || tile == 27 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 27, 63);
            } else if(tile == 27 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 27, 64);
            }
            if(tile == 30 && getCarriedItem() == 359) {
                Level.dropItem(x, y, z, 0.5, 287, 63);
            } else if(tile == 30 && getCarriedItem() != 359) {
                Level.dropItem(x, y, z, 0.5, 287, 64);
            }
            if(tile == 31 && getCarriedItem() == 359 || tile == 32 & getCarriedItem() == 359) {
                Level.dropItem(x, y, z, 0.5, tile, 63, data);
            } else if(tile == 31 && getCarriedItem() != 359 || tile == 32 && getCarriedItem() != 359) {
                Level.dropItem(x, y, z, 0.5, tile, 64, data);
            }
            if(tile == 37 || tile == 38 || tile == 39 || tile == 40) {
                Level.dropItem(x, y, z, 0.5, tile, 63);
            }
            if(tile == 41 && getCarriedItem() == 257 || tile == 41 && getCarriedItem() == 278 || tile == 41 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 41, 63);
            } else if(tile == 41 && getCarriedItem() != 257 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 41, 64);
            }
            if(tile == 42 && getCarriedItem() == 257 || tile == 42 && getCarriedItem() == 274 || tile == 42 && getCarriedItem() == 278 || tile == 42 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 42, 63);
            } else if(tile == 42 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 42, 64);
            }
            if(tile == 44 && getCarriedItem() == 257 || tile == 44 && getCarriedItem() == 270 || tile == 44 && getCarriedItem() == 274 || tile == 44 && getCarriedItem() == 278 || tile == 44 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 44, 63);
            } else if(tile == 44 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 44, 64);
            }
            if(tile == 45 && getCarriedItem() == 270 || tile == 45 && getCarriedItem() == 257 || tile == 45 && getCarriedItem() == 274 || tile == 45 && getCarriedItem() == 278 || tile == 45 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 45, 63);
            } else if(tile == 45 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 45, 64);
            }
            if(tile == 47) {
                Level.dropItem(x, y, z, 0.5, 340, 61);
            }
            if(tile == 48 && getCarriedItem() == 270 || tile == 48 && getCarriedItem() == 257 || tile == 48 && getCarriedItem() == 274 || tile == 48 && getCarriedItem() == 278 || tile == 48 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 48, 63);
            } else if(tile == 48 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 48, 64);
            }
            if(tile == 49 && getCarriedItem() == 278 || tile == 246 && getCarriedItem() == 278) {
                Level.dropItem(x, y, z, 0.5, 49, 63);
            } else if(tile == 49 && getCarriedItem() != 278 || tile == 246 && getCarriedItem() != 278) {
                Level.dropItem(x, y, z, 0.5, 49, 64);
            }
            if(tile == 50 || tile == 53 || tile == 54) {
                Level.dropItem(x, y, z, 0.5, tile, 63);
            }
            if(tile == 56 && getCarriedItem() == 257 || tile == 57 && getCarriedItem() == 257 || tile == 56 && getCarriedItem() == 278 || tile == 57 && getCarriedItem() == 278 || tile == 56 && getCarriedItem() == 285 || tile == 57 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, tile, 63);
            } else if(tile == 56 && getCarriedItem() != 257 && getCarriedItem() != 278 && getCarriedItem() != 285 || tile == 57 && getCarriedItem() != 257 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, tile, 64);
            }
            if(tile == 61 && getCarriedItem() == 270 || tile == 61 && getCarriedItem() == 257 || tile == 61 && getCarriedItem() == 274 || tile == 61 && getCarriedItem() == 278 || tile == 61 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 61, 63);
            } else if(tile == 61 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 61, 64);
            }
            if(tile == 63 || tile == 64 || tile == 65 || tile == 66) {
                Level.dropItem(x, y, z, 0.5, tile, 63);
            }
            if(tile == 67 && getCarriedItem() == 270 || tile == 67 && getCarriedItem() == 257 || tile == 67 && getCarriedItem() == 274 || tile == 67 && getCarriedItem() == 278 || tile == 67 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 67, 63);
            } else if(tile == 67 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 67, 64);
            }
            if(tile == 73 && getCarriedItem() == 257 || tile == 73 && getCarriedItem() == 278 || tile == 73 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 331, 63);
            } else if(tile == 73 && getCarriedItem() != 257 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 331, 64);
            }
            if(tile == 78 && getCarriedItem() == 256 || tile == 78 && getCarriedItem() == 269 || tile == 78 && getCarriedItem() == 273 || tile == 78 && getCarriedItem() == 277 || tile == 78 && getCarriedItem() == 284) {
                Level.dropItem(x, y, z, 0.5, 332, 63);
            } else if(tile == 78 && getCarriedItem() != 256 && getCarriedItem() != 269 && getCarriedItem() != 273 && getCarriedItem() != 277 && getCarriedItem() != 284) {
                Level.dropItem(x, y, z, 0.5, 332, 64);
            }
            if(tile == 80 && getCarriedItem() == 256 || tile == 80 && getCarriedItem() == 269 || tile == 80 && getCarriedItem() == 273 || tile == 80 && getCarriedItem() == 277 || tile == 80 && getCarriedItem() == 284) {
                Level.dropItem(x, y, z, 0.5, 332, 60);
            } else if(tile == 80 && getCarriedItem() != 256 && getCarriedItem() != 269 && getCarriedItem() != 273 && getCarriedItem() != 277 && getCarriedItem() != 284) {
                Level.dropItem(x, y, z, 0.5, 332, 64);
            }
            if(tile == 81 || tile == 82 || tile == 83 || tile == 85 || tile == 86 || tile == 89 || tile == 91 || tile == 96 || tile == 102 || tile == 107) {
                Level.dropItem(x, y, z, 0.5, tile, 63);
            }
            if(tile == 87 && getCarriedItem() == 257 || tile == 87 && getCarriedItem() == 270 || tile == 87 && getCarriedItem() == 274 || tile == 87 && getCarriedItem() == 278 || tile == 87 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 87, 63);
            } else if(tile == 87 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 87, 64);
            }
            if(tile == 98 && getCarriedItem() == 257 || tile == 98 && getCarriedItem() == 270 || tile == 98 && getCarriedItem() == 274 || tile == 98 && getCarriedItem() == 278 || tile == 98 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 98, 63);
            } else if(tile == 98 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 98, 64);
            }
            if(tile == 101 && getCarriedItem() == 257 || tile == 101 && getCarriedItem() == 270 || tile == 101 && getCarriedItem() == 274 || tile == 101 && getCarriedItem() == 278 || tile == 101 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 101, 63);
            } else if(tile == 101 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 101, 64);
            }
            if(tile == 103) {
                Level.dropItem(x, y, z, 0.5, 360, 57);
            }
            if(tile == 108 && getCarriedItem() == 257 || tile == 108 && getCarriedItem() == 270 || tile == 108 && getCarriedItem() == 274 || tile == 108 && getCarriedItem() == 278 || tile == 108 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 108, 63);
            } else if(tile == 108 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 108, 64);
            }
            if(tile == 109 && getCarriedItem() == 257 || tile == 109 && getCarriedItem() == 270 || tile == 109 && getCarriedItem() == 274 || tile == 109 && getCarriedItem() == 278 || tile == 109 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 109, 63);
            } else if(tile == 109 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 109, 64);
            }
            if(tile == 112 && getCarriedItem() == 257 || tile == 112 && getCarriedItem() == 270 || tile == 112 && getCarriedItem() == 274 || tile == 112 && getCarriedItem() == 278 || tile == 112 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 112, 63);
            } else if(tile == 112 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 112, 64);
            }
            if(tile == 114 && getCarriedItem() == 257 || tile == 114 && getCarriedItem() == 270 || tile == 114 && getCarriedItem() == 274 || tile == 114 && getCarriedItem() == 278 || tile == 114 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 114, 63);
            } else if(tile == 114 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 114, 64);
            }
            if(tile == 128 && getCarriedItem() == 257 || tile == 128 && getCarriedItem() == 270 || tile == 128 && getCarriedItem() == 274 || tile == 128 && getCarriedItem() == 278 || tile == 128 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 128, 63);
            } else if(tile == 128 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 128, 64);
            }
            if(tile == 134 || tile == 135 || tile == 136 || tile == 158 || tile == 170 || tile == 171 || tile == 245 || tile == 247) {
                Level.dropItem(x, y, z, 0.5, tile, 63, data);
            }
            if(tile == 139 && getCarriedItem() == 257 || tile == 139 && getCarriedItem() == 270 || tile == 139 && getCarriedItem() == 274 || tile == 139 && getCarriedItem() == 278 || tile == 139 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 139, 63);
            } else if(tile == 139 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 139, 64);
            }
            if(tile == 155 && getCarriedItem() == 257 || tile == 155 && getCarriedItem() == 270 || tile == 155 && getCarriedItem() == 274 || tile == 155 && getCarriedItem() == 278 || tile == 155 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 155, 63);
            } else if(tile == 155 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 155, 64);
            }
            if(tile == 156 && getCarriedItem() == 257 || tile == 156 && getCarriedItem() == 270 || tile == 156 && getCarriedItem() == 274 || tile == 156 && getCarriedItem() == 278 || tile == 156 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 156, 63);
            } else if(tile == 156 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 156, 64);
            }
            if(tile == 173 && getCarriedItem() == 257 || tile == 173 && getCarriedItem() == 270 || tile == 173 && getCarriedItem() == 274 || tile == 173 && getCarriedItem() == 278 || tile == 173 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 173, 63);
            } else if(tile == 173 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 173, 64);
            }
            if(tile == 244 && getCarriedItem() == 257 || tile == 244 && getCarriedItem() == 270 || tile == 244 && getCarriedItem() == 274 || tile == 244 && getCarriedItem() == 278 || tile == 244 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 457, 63);
            } else if(tile == 244 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 457, 64);
            }
            if(tile == 250) {
                Level.dropItem(x, y, z, 0, 247, 64);
            }
            if(tile == 54) {
				new java.lang.Thread(new Runnable({
					run: function() {
						VertexClientPE.toast("Reloading chests...");
						java.lang.Thread.sleep(1200);
						VertexClientPE.Utils.loadChests();
					}
				})).start();
			}
        }
    }
}

function blockEventHook(x, y, z, e, d) {
	if(VertexClientPE.isDevMode()) {
		if(d == 1) {
			isChestOpen = true;
			if(chestUI == null || !chestUI.isShowing()) {
				VertexClientPE.showChestUI(x, y, z);
			}
		} if(d == 0) {
			isChestOpen = false;
			if(chestUI != null) {
				VertexClientPE.hideChestUI();
			}
			if(hasPushed) {
				VertexClientPE.stealChestContent(x, y, z);
			}
		}
	}
}

//What are you doing here? ;-)
