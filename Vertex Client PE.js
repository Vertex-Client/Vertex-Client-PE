/**
 * ##################################################################################################
 * @name Vertex Client PE
 * @version v2.3
 * @author peacestorm (@AgameR_Modder)
 * @credits _TXMO, MyNameIsTriXz, Godsoft029, ArceusMatt, LPMG, Astro36, AutoGrind, TimmyIsDa
 *
 * Thanks to NoCopyrightSounds and all artists for the music!
 *
 * Warning! You're not allowed to copy ANY code without permission from the Vertex development team!
 * Especially RJxModz is not allowed to copy anything!
 *
 * ##################################################################################################
 */

// #############
// # CONSTANTS #
// #############
// Underbar(_) is for preventing duplicate variables such as java.lang.String and String(Javascript)

const AlarmManager_ = android.app.AlarmManager,
	AlertDialog_ = android.app.AlertDialog,
	DownloadManager_ = android.app.DownloadManager,
	Dialog_ = android.app.Dialog,
	Notification_ = android.app.Notification,
	PendingIntent_ = android.app.PendingIntent,
	Context_ = android.content.Context,
	DialogInterface_ = android.content.DialogInterface,
	Intent_ = android.content.Intent,
	Bitmap_ = android.graphics.Bitmap,
	BitmapFactory_ = android.graphics.BitmapFactory,
	Canvas_ = android.graphics.Canvas,
	Color_ = android.graphics.Color,
	BitmapDrawable_ = android.graphics.drawable.BitmapDrawable,
	ColorDrawable_ = android.graphics.drawable.ColorDrawable,
	GradientDrawable_ = android.graphics.drawable.GradientDrawable,
	ScaleDrawable_ = android.graphics.drawable.ScaleDrawable,
	LightingColorFilter_ = android.graphics.LightingColorFilter,
	Paint_ = android.graphics.Paint,
	PixelFormat_ = android.graphics.PixelFormat,
	Point_ = android.graphics.Point,
	PorterDuff_ = android.graphics.PorterDuff,
	Typeface_ = android.graphics.Typeface,
	MediaPlayer_ = android.media.MediaPlayer,
	Uri_ = android.net.Uri,
	Build_ = android.os.Build,
	Environment_ = android.os.Environment,
	Handler_ = android.os.Handler,
	SystemClock_ = android.os.SystemClock,
	PreferenceManager_ = android.preference.PreferenceManager,
	TextToSpeech_ = android.speech.tts.TextToSpeech,
	ViewPager_ = android.support.v4.view.ViewPager,
	Html_ = android.text.Html,
	InputType_ = android.text.InputType,
	TextUtils_ = android.text.TextUtils,
	TextWatcher_ = android.text.TextWatcher,
	Base64_ = android.util.Base64,
	DisplayMetrics_ = android.util.DisplayMetrics,
	TypedValue_ = android.util.TypedValue,
	AlphaAnimation_ = android.view.animation.AlphaAnimation,
	RotateAnimation_ = android.view.animation.RotateAnimation,
	DecelerateInterpolator_ = android.view.animation.DecelerateInterpolator,
	LinearInterpolator_ = android.view.animation.LinearInterpolator,
	Gravity_ = android.view.Gravity,
	MotionEvent_ = android.view.MotionEvent,
	View_ = android.view.View,
	ViewGroup_ = android.view.ViewGroup,
	Window_ = android.view.Window,
	WebChromeClient_ = android.webkit.WebChromeClient,
	WebView_ = android.webkit.WebView,
	WebViewClient_ = android.webkit.WebViewClient,
	Button_ = android.widget.Button,
	CheckBox_ = android.widget.CheckBox,
	CompoundButton_ = android.widget.CompoundButton,
	FrameLayout_ = android.widget.FrameLayout,
	GridLayout_ = android.widget.GridLayout,
	ImageView_ = android.widget.ImageView,
	LinearLayout_ = android.widget.LinearLayout,
	PopupWindow_ = android.widget.PopupWindow,
	SeekBar_ = android.widget.SeekBar,
	ScrollView_ = android.widget.ScrollView,
	Switch_ = android.widget.Switch,
	TableLayout_ = android.widget.TableLayout,
	TableRow_ = android.widget.TableRow,
	TextView_ = android.widget.TextView,
	Toast_ = android.widget.Toast,
	ScriptManager_ = com.mcbox.pesdk.mcpelauncher.ScriptManager,
	HardwareInformation_ = com.mojang.minecraftpe.HardwareInformation,
	MainActivity_ = com.mojang.minecraftpe.MainActivity,
	BufferedReader_ = java.io.BufferedReader,
	File_ = java.io.File,
	FileInputStream_ = java.io.FileInputStream,
	FileOutputStream_ = java.io.FileOutputStream,
	FileReader_ = java.io.FileReader,
	InputStreamReader_ = java.io.InputStreamReader,
	OutputStreamWriter_ = java.io.OutputStreamWriter,
	PrintWriter_ = java.io.PrintWriter,
	Byte_ = java.lang.Byte,
	Character_ = java.lang.Character,
	Float_ = java.lang.Float,
	Integer_ = java.lang.Integer,
	Array_ = java.lang.reflect.Array,
	Runnable_ = java.lang.Runnable,
	String_ = java.lang.String,
	StringBuilder_ = java.lang.StringBuilder,
	System_ = java.lang.System,
	Thread_ = java.lang.Thread,
	URL_ = java.net.URL,
	Locale_ = java.util.Locale,
	ScriptManager__ = net.zhuoweizhang.mcpelauncher.ScriptManager,
	MainMenuOptionsActivity_ = net.zhuoweizhang.mcpelauncher.ui.MainMenuOptionsActivity,
	JSONArray_ = org.json.JSONArray,
	JSONObject_ = org.json.JSONObject,
	CONTEXT = MainActivity_.currentMainActivity.get(),
	GITHUB_URL = "https://github.com/Vertex-Client/Vertex-Client.github.io/raw/master/",
	PATH = "/sdcard/games/com.mojang/";

var ScrollView = android.widget.ScrollView;
var EditText = android.widget.EditText;
var KeyEvent = android.view.KeyEvent;
var Scanner = java.util.Scanner;
var ByteBuffer = java.nio.ByteBuffer;
var FloatBuffer = java.nio.FloatBuffer;
var ByteOrder = java.nio.ByteOrder;
var ShortBuffer = java.nio.ShortBuffer;
var GLSurfaceView = android.opengl.GLSurfaceView;
var Renderer = GLSurfaceView.Renderer;
var GLU = android.opengl.GLU;
var GL10 = javax.microedition.khronos.opengles.GL10;
var PopupWindow = android.widget.PopupWindow;
var RelativeLayout = android.widget.RelativeLayout;
var Gravity = android.view.Gravity;

EntityType.ENDER_PEARL = 87;

/* try {
	CONTEXT.setTitle("Vertex Client PE");
} catch(e) {
	print(e);
} */

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
var killAuraRange = 4;
var spamDelayTime = 3;
var normalMenuTypeSize = "normal";
var fancyChatMode = "default";
var tapNukerRange = 3;
var menuType = "normal";
var chestTracersRange = 10;
var tabGUIModeSetting = "off";
var chestTracersGroundMode = "on";
var chestTracersParticle = "flame";
var antiLagDropRemoverSetting = "off";
var useLightThemeSetting = "off";
var buttonStyleSetting = "normal";
var mcpeGUISetting = "default";
var chestESPRange = 25;
var transparentBgSetting = "on";
var aimbotUseKillauraRange = "off";
var screenshotModeSetting = "default";
var killToMorphSetting = "off";
var fontSetting = "default";
var mainButtonStyleSetting = "normal";
var webBrowserStartPageSetting = "https://google.com/";
var backgroundStyleSetting = "normal";
var modButtonColorBlockedSetting = "red";
var modButtonColorEnabledSetting = "green";
var modButtonColorDisabledSetting = "white";
var arrowGunMode = "slow";
var cmdPrefix = ".";
var commandsSetting = "on";
var shortcutSizeSetting = 32;
var aimbotRangeSetting = 4;
var speedHackFriction = 0.1;
var remoteViewTeleportSetting = "off";
var switchGamemodeSendCommandSetting = "off";
var betterPauseSetting = "off";
var shortcutUIHeightSetting = 3;
var mainButtonTapSetting = "menu";
var autoWalkDirection = "forward";
var dashboardTileSize = 5;
var spamUseRandomMsgSetting = "off";
var buttonStrokeThicknessSetting = 2;
var hacksListPosSetting = "top-center";
var targetMobsSetting = "on";
var targetPlayersSetting = "on";
var shortcutUIPosSetting = "right-center";
var hitboxesHitboxWidthSetting = 10;
var hitboxesHitboxHeightSetting = 10;
var showUpdateToastsSetting = "on";
var showSnowInWinterSetting = "off";
var preventDiggingSetting = "off";
var preventPlacingSetting = "off";
var preventAttacksSetting = "off";
var fastBreakDestroyTime = 0;
var strafeAuraRangeSetting = 5;
var strafeAuraDirectionSetting = "left";
var panicCombatSetting = "on";
var panicWorldSetting = "on";
var panicMovementSetting = "on";
var panicPlayerSetting = "on";
var panicMiscSetting = "on";
var buttonSoundSetting = "system";
var transparentSplashScreenSetting = "off";
var showIconsOnTileShortcutsSetting = "on";
var targetFriendsSetting = "off";
//------------------------------------
var antiAFKDistancePerTick = 0.25;
//------------------------------------
var combatName = "Combat";
var worldName = "World";
var movementName = "Movement";
var playerName = "Player";
var miscName = "Misc";
//------------------------------------
var customRGBRed = 0;
var customRGBGreen = 0;
var customRGBBlue = 0;
var customRGBRedStroke = 0;
var customRGBGreenStroke = 0;
var customRGBBlueStroke = 0;
//------------------------------------
var combatEnabled = "on";
var worldEnabled = "on";
var movementEnabled = "on";
var playerEnabled = "on";
var miscEnabled = "on";
var singleplayerEnabled = "on";
var combatSaveEnabled = "on";
var worldSaveEnabled = "on";
var movementSaveEnabled = "on";
var playerSaveEnabled = "on";
var miscSaveEnabled = "on";
var singleplayerSaveEnabled = "on";
//End of settings

var modButtonColorBlocked = Color_.RED;
var modButtonColorEnabled = Color_.GREEN;
var modButtonColorDisabled = Color_.WHITE;

var bypassModButtonView;
var panicModButtonView;

var display = new DisplayMetrics_();
CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
var size = new Point_();
CONTEXT.getWindowManager().getDefaultDisplay().getRealSize(size);
var screenWidth = size.x;
var screenHeight = size.y;

var topBarHeight = screenHeight / 10;

var customHeight = topBarHeight / 2;

var sharedPref = CONTEXT.getPreferences(CONTEXT.MODE_PRIVATE);
var editor = sharedPref.edit();

//MENU START
const combattpopx_def = screenWidth / 3, combattpopy_def = 0;
var combattpopx = combattpopx_def, combattpopy = combattpopy_def;
var combatmX, combatmY;
var combatdown = false;

const worldtpopx_def = Math.floor(screenWidth / 3 + screenWidth / 3), worldtpopy_def = screenHeight / 2 - customHeight;
var worldtpopx = worldtpopx_def, worldtpopy = worldtpopy_def;
var worldmX, worldmY;
var worlddown = false;

const movementtpopx_def = screenWidth / 3, movementtpopy_def = screenHeight / 2 - customHeight;
var movementtpopx = movementtpopx_def, movementtpopy = movementtpopy_def;
var movementmX, movementmY;
var movementdown = false;

const playertpopx_def = 0, playertpopy_def = 0;
var playertpopx = playertpopx_def, playertpopy = playertpopy_def;
var playermX, playermY;
var playerdown = false;

const misctpopx_def = 0, misctpopy_def = screenHeight / 2 - customHeight;
var misctpopx = misctpopx_def, misctpopy = misctpopy_def;
var miscmX, miscmY;
var miscdown = false;

var combatMenuShown = false;
var worldMenuShown = false;
var movementMenuShown = false;
var playerMenuShown = false;
var miscMenuShown = false;
//MENU END

var Launcher = {
	isBlockLauncher: function() {
		return (CONTEXT.getPackageName() == "net.zhuoweizhang.mcpelauncher" || CONTEXT.getPackageName() == "net.zhuoweizhang.mcpelauncher.pro");
	},
	isToolbox: function() {
		return CONTEXT.getPackageName() == "io.mrarm.mctoolbox";
	},
	isMcpeMaster: function() {
		return CONTEXT.getPackageName() == "com.mcbox.pesdkb.mcpelauncher";
	},
	isBLFree: function() {
		return CONTEXT.getPackageName() == "net.zhuoweizhang.mcpelauncher";
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

function Vector3(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
	this.Distance = function (vector2) {
		var deltax = this.x - vector2.x;
		var deltaz = this.z - vector2.z;
		var deltay = this.y - vector2.y;
		var distance = Math.sqrt(deltax * deltax + deltay * deltay + deltaz * deltaz);
		return distance;
	};
	this.updatePosition = function (x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	};
	this.getDistanceVector = function (vector) {
		return new Vector3(this.x - vector.x, this.y - vector.y, this.z - vector.z);
	};
	this.moveAlongPoint = function (otherVector, factor) {
		var distanceVector = this.getDistanceVector(otherVector);
		var newPoint = new Vector3(distanceVector.x * factor + this.x, distanceVector.y * factor + this.y, distanceVector.z * factor + this.z);
		return newPoint;
	};
	this.getNormalizedVector = function () {
		return new Vector3((this.x / this.getLength()), (this.y / this.getLength()), (this.z / this.getLength()));
	};
	this.getLength = function () {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
	};
	this.add = function (vector) {
		return new Vector3(this.x + vector.x, this.y + vector.y, this.z + vector.z);
	};
	this.multiplyWithNumber = function (num) {
		return new Vector3(this.x * num, this.y * num, this.z * num);
	};
	this.moveAlongDirectionalVector = function (dirvector, distance) {
		var normalizedVector = dirvector.getNormalizedVector();
		return this.add(normalizedVector.multiplyWithNumber(distance));
	};
	this.getYAngle = function () {
		var scalarprod = (this.y) / (this.getLength() * (new Vector3(0, 1, 0)).getLength());
		return Math.acos(scalarprod);
	};
	this.compare = function (vector) {
		if (Math.round(this.x) === Math.round(vector.x) && Math.round(this.y) === Math.round(vector.y) && Math.round(this.z) === Math.round(vector.z)) {
			return true;
		}
		return false;
	};
}

function VectorMathMCPE() {
	this.getDirectionalVectorFromEntity = function(ent){
		var mathPitch = ((Entity.getPitch(ent) + 90) * Math.PI) / 180;
		var mathYaw  = ((Entity.getYaw(ent) + 90)  * Math.PI) / 180;
		return new Vector3((Math.sin(mathPitch) * Math.cos(mathYaw)), (Math.cos(mathPitch)), (Math.sin(mathPitch) * Math.sin(mathYaw)));
	}
	this.extendPlayerFacing = function (distance) {
		var dirVector = this.getDirectionalVectorFromEntity(getPlayerEnt());
		var playerPos = new Vector3(getPlayerX(), getPlayerY(), getPlayerZ());
		var newPosition = playerPos.moveAlongDirectionalVector(dirVector, distance);
		return newPosition;
	}
}

function VectorLib() {
	this.getTile = function (vector, id, data) {
		Level.getTile(vector.x, vector.y, vector.z);
	}
	this.setTile = function (vector, id, data) {
		Level.setTile(vector.x, vector.y, vector.z, id, data);
	}
	this.setPlayerPos = function(position){
		Entity.setPosition(getPlayerEnt(), position.x, position.y, position.z);
	}
	this.getCoordsInFrontOfEnt = function(ent) {
		var yaw = Entity.getYaw(ent);
		var pitch = Entity.getPitch(ent);
		yaw *= Math.PI / 180;
		pitch *= Math.PI / 180 * -1;

		var x = Math.cos(yaw) * Math.cos(pitch);
		var y = Math.sin(pitch);
		var z = Math.sin(yaw) * Math.cos(pitch);
		
		return new Vector3(Entity.getX(ent) + x, Entity.getY(ent) + y, Entity.getZ(ent) + z);
	}
	this.getTileInFrontOfEnt = function(ent) {
		var vector = this.getCoordsInFrontOfEnt(ent);
		return getTile(vector.x, vector.y, vector.z);
	}
}

/**
 * @file ModPE widget library for providing color picker API.
 * @author Astro <astr36@naver.com>
 * @version 1.0
 * @license Apache-2.0
 * @see {@link https://github.com/Astro36/ModPE/blob/master/ColorPicker.js|Github}
 */
/** @namespace global */
($ => {
	"use strict";

	const Bitmap_ = android.graphics.Bitmap,
		Canvas_ = android.graphics.Canvas,
		Color_ = android.graphics.Color,
		LinearGradient_ = android.graphics.LinearGradient,
		Paint_ = android.graphics.Paint,
		Shader_ = android.graphics.Shader,
		BitmapDrawable_ = android.graphics.drawable.BitmapDrawable,
		ColorDrawable_ = android.graphics.drawable.ColorDrawable,
		Gravity_ = android.view.Gravity,
		MotionEvent_ = android.view.MotionEvent,
		View_ = android.view.View,
		LinearLayout_ = android.widget.LinearLayout,
		PopupWindow_ = android.widget.PopupWindow,
		TextView_ = android.widget.TextView,
		CONTEXT = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),
		DP = CONTEXT.getResources().getDisplayMetrics().density;

	/**
	 * Class representing a color picker.
	 * @since 2016-05-04
	 * @class
	 * @memberOf global
	 * @param {Number} [r=255] Red
	 * @param {Number} [g=0] Blue
	 * @param {Number} [b=0] Green
	 * @param {Function} [func=function(){}] Callback to be invoked when color was changed
	 */
	function ColorPicker(r, g, b, func) {
		r = r || 255;
		g = g || 0;
		b = b || 0;
		func = func || (() => {});
		let controller = this._controller = new TextView_(CONTEXT),
			picker = this._picker = new TextView_(CONTEXT),
			paint = new Paint_(),
			bitmapC = Bitmap_.createBitmap(40, 240, Bitmap_.Config.ARGB_8888),
			bitmapP = Bitmap_.createBitmap(240, 240, Bitmap_.Config.ARGB_8888),
			canvasC = new Canvas_(bitmapC),
			canvasP = new Canvas_(bitmapP),
			pickerX = 120,
			pickerY = 1;

		paint.setShader(new LinearGradient_(0, 0, 0, 40, Color_.rgb(255, 0, 0), Color_.rgb(255, 255, 0), Shader_.TileMode.CLAMP));
		canvasC.drawRect(0, 0, 40, 40, paint);
		paint.setShader(new LinearGradient_(0, 40, 0, 80, Color_.rgb(255, 255, 0), Color_.rgb(0, 255, 0), Shader_.TileMode.CLAMP));
		canvasC.drawRect(0, 40, 40, 80, paint);
		paint.setShader(new LinearGradient_(0, 80, 0, 120, Color_.rgb(0, 255, 0), Color_.rgb(0, 255, 255), Shader_.TileMode.CLAMP));
		canvasC.drawRect(0, 80, 40, 120, paint);
		paint.setShader(new LinearGradient_(0, 120, 0, 160, Color_.rgb(0, 255, 255), Color_.rgb(0, 0, 255), Shader_.TileMode.CLAMP));
		canvasC.drawRect(0, 120, 40, 160, paint);
		paint.setShader(new LinearGradient_(0, 160, 0, 200, Color_.rgb(0, 0, 255), Color_.rgb(255, 0, 255), Shader_.TileMode.CLAMP));
		canvasC.drawRect(0, 160, 40, 200, paint);
		paint.setShader(new LinearGradient_(0, 200, 0, 240, Color_.rgb(255, 0, 255), Color_.rgb(255, 0, 0), Shader_.TileMode.CLAMP));
		canvasC.drawRect(0, 200, 40, 240, paint);
		paint.setShader(new LinearGradient_(240, 0, 0, 0, Color_.rgb(r, g, b), Color_.WHITE, Shader_.TileMode.CLAMP));
		canvasP.drawRect(0, 0, 240, 240, paint);
		paint.setShader(new LinearGradient_(0, 0, 0, 240, Color_.TRANSPARENT, Color_.BLACK, Shader_.TileMode.CLAMP));
		canvasP.drawRect(0, 0, 240, 240, paint);

		controller.setBackgroundDrawable(new BitmapDrawable_(bitmapC));
		controller.setOnTouchListener(new View_.OnTouchListener({
			onTouch(view, event) {
				let action = event.getAction();
				if (action === MotionEvent_.ACTION_DOWN || action === MotionEvent_.ACTION_MOVE || action === MotionEvent_.ACTION_UP) {
					let x = Math.floor(event.getX() / DP),
						y = Math.floor(event.getY() / DP);
					if (x > 0 && x < 40 && y > 0 && y < 240) {
						paint.setShader(new LinearGradient_(240, 0, 0, 0, bitmapC.getPixel(0, y), Color_.WHITE, Shader_.TileMode.CLAMP));
						canvasP.drawRect(0, 0, 240, 240, paint);
						paint.setShader(new LinearGradient_(0, 0, 0, 240, Color_.TRANSPARENT, Color_.BLACK, Shader_.TileMode.CLAMP));
						canvasP.drawRect(0, 0, 240, 240, paint);
						picker.setBackgroundDrawable(new BitmapDrawable_(bitmapP));
						func(bitmapP.getPixel(pickerX, pickerY));
					}
				}
				return true;
			}
		}));

		picker.setBackgroundDrawable(new BitmapDrawable_(bitmapP));
		picker.setOnTouchListener(new View_.OnTouchListener({
			onTouch(view, event) {
				let action = event.getAction();
				if (action === MotionEvent_.ACTION_DOWN || action === MotionEvent_.ACTION_MOVE || action === MotionEvent_.ACTION_UP) {
					let x = Math.floor(event.getX() / DP),
						y = Math.floor(event.getY() / DP);
					if (x > 0 && x < 240 && y > 0 && y < 240) {
						pickerX = x;
						pickerY = y;
						func(bitmapP.getPixel(x, y));
					}
				}
				return true;
			}
		}));
	}

	/**
	 * Returns the widget of color picker.
	 * @since 2016-05-04
	 * @returns {android.widget.LinearLayout} the widget of color picker
	 */
	ColorPicker.prototype.show = function () {
		let layout = new LinearLayout_(CONTEXT);
		layout.addView(this._picker, DP * 240, DP * 240);
		layout.addView(this._controller, DP * 40, DP * 240);
		return layout;
	};



	/**
	 * Class representing a window that shows a color picker.
	 * @since 2016-05-04
	 * @class
	 * @memberOf global
	 * @param {Number} [r=255] Red
	 * @param {Number} [g=0] Green
	 * @param {Number} [b=0] Blue
	 * @param {Function} [func=function(){}] Callback to be invoked when color was changed
	 */
	function ColorPickerWindow(r, g, b, func, viewerFunc) {
		r = r || 255;
		g = g || 0;
		b = b || 0;
		func = func || (() => {});
		let viewer = this._viewer = new TextView_(CONTEXT);
		this._picker = new ColorPicker(r, g, b, color => {
			viewer.setBackgroundDrawable(new ColorDrawable_(color));
			func(color);
		});
		viewer.setBackgroundDrawable(new ColorDrawable_(Color_.rgb(r, g, b)));
		viewer.setGravity(Gravity_.CENTER);
		viewer.setText("Click to close");
		viewer.setTextColor(Color_.rgb(r, g, b));
		viewer.setTextSize(1, 18);
		this.viewerFunc = viewerFunc || (() => {});
	}

	/**
	 * Display the window of color picker.
	 * @since 2016-05-04
	 */
	ColorPickerWindow.prototype.show = function () {
		let thiz = this;
		CONTEXT.runOnUiThread({
			run() {
				let layout = new LinearLayout_(CONTEXT),
					window = new PopupWindow_(layout, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
				thiz._viewer.setOnClickListener(new View_.OnClickListener({
					onClick(view) {
						CONTEXT.runOnUiThread({
							run() {
								window.dismiss();
								window = null;
								thiz.viewerFunc();
							}
						})
					}
				}));
				layout.addView(thiz._picker.show(), DP * 280, DP * 240);
				layout.addView(thiz._viewer, DP * 280, DP * 100);
				layout.setGravity(Gravity_.CENTER);
				layout.setOrientation(1);
				window.setBackgroundDrawable(new ColorDrawable_(Color_.argb(127, 0, 0, 0)));
				window.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.CENTER, 0, 0);
			}
		});
	};

	$.ColorPicker = ColorPicker;
	$.ColorPickerWindow = ColorPickerWindow;
})(this);


/**
 * @file Snow effect library for providing showing snow effect on screen.
 * @author Astro <astr36@naver.com>
 * @version 1.0
 * @license Apache-2.0
 * @see {@link https://github.com/Astro36/ModPE/blob/master/SnowEffect.js|Github}
 */
/** @namespace global */
($ => {
	"use strict";

	const Bitmap_ = android.graphics.Bitmap,
		BitmapFactory_ = android.graphics.BitmapFactory,
		Base64_ = android.util.Base64,
		Gravity_ = android.view.Gravity,
		ImageView_ = android.widget.ImageView,
		PopupWindow_ = android.widget.PopupWindow,
		MainActivity_ = com.mojang.minecraftpe.MainActivity,
		Thread_ = java.lang.Thread,
		CONTEXT = MainActivity_.currentMainActivity.get(),
		DP = CONTEXT.getResources().getDisplayMetrics().density,
		DEVICE_WIDTH = CONTEXT.getScreenWidth(),
		DEVICE_HEIGHT = CONTEXT.getScreenHeight(),
		SCREEN = CONTEXT.getWindow().getDecorView();

	/**
	 * Class representing a snow effect.
	 * @since 2016-12-20
	 * @class
	 * @memberOf global
	 */
	function SnowEffect() {
		this._isRunning = false;
	}

	/**
	 * Finishes the snow effect.
	 * @since 2016-12-20
	 */
	SnowEffect.prototype.finish = function () {
		var particles = this._particles;
		this._isRunning = false;
	};

	/**
	 * Starts a snow effect.
	 * @since 2016-12-20
	 */
	SnowEffect.prototype.start = function () {
		var thiz = this;
		thiz._isRunning = true;
		new Thread_({
			run() {
				while (thiz._isRunning) {
					var particle = new SnowParticle();
					particle.create();
					Thread_.sleep(500);
				}
			}
		}).start();
	};



	/**
	 * Class representing a snow particle.
	 * @since 2016-12-20
	 * @class
	 */
	function SnowParticle() {
		this._isShowing = false;
	}

	/**
	 * Snow particle resource bitmap.
	 * @type {android.graphics.Bitmap}
	 * @see {@link https://thenounproject.com/term/snow/64/}
	 */
	SnowParticle.RESOURCE = (() => {
		var bytes = Base64_.decode("iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAABdoSURBVHja7J13lFX1tcc/w9BEEQt2EwuMICJExYqJvRsLGn3vaaIRIvg0lqgpGiNRY0vQmMQaS/Cp71kjUXwqRn2xBAugCCgMxAaJGAsKUqTs98fedznLMMzce8/5/U7Zn7Vm6WLmnvO755zv+bW9v7tBRHAywSbA9cBC4HTgfb8k8englyA6DcAwYBrwTeBY4HXgePudE/PmeA8SlS2Am4B9W/n9I8AI4F2/VN6DlO26fx94bRXiADgYmAqc4vfKe5Cy0Ae4Gdi9ys/9xYZizX4JXSBF5TDgHqBLjZ9fbHOUP/ml9CFWERlQhzgAutoxHBeI47hAHMcF4jguEMdxgTiOC8RxHBeI47hAHMcF4jguEMdxgTiOC8RxXCCO4wJxHBeI47hAHMdxgSTCbsA6OWx3Z+B7QJPfQhdIGmwB3A88h+aFn2EPXdZpAI4EpqAOKpOBHwCNfktdIEmwOnAJ6lU1xP5tHeDX9tAdTnb9q3YGngEeaNFzdAVG2b/39dvrAqnnzXscMB04n5XnkjcBDwJPAttlqO1bAv8DjAcGt/I3uwKvAD8COvrtdoFUww42lLoDtQRtiz2BCcBtwMYR272O9Q5voO4nbdEFuBx4Hujvt90F0l5G2Ru22h7nRJufXGhDs1B0sXnFTPtvpyo/vyMw0YaLjgskVboBI21o9p2Ur3EDcIzNj0YBa9dxrE7A1n77XCCh2AQYDbwE7JHC8Qfb0OhudIXNSQGfnKXP9sDTNpn/OKEJ+P18saLmuEAKwREJHee7fil9iOU4LhDHcYE4jgvEKQhL6vx8AwUrG1cUgWwMjEVXd5JY8rwSmFUiYcwBvg1cU+PnO6E1FV8FXgT+neo3KzNJ3gvoVOKlfgus1eItOAq4DFhQx7G7oGXSLgDWLKgwFgJXAL+y/6+W1YGhwNnAV7/0u9l2X35PMsvbLpAq2QC4gdaXT/+BBuLdCayo4zzrAxehuRRFGpKORoMw59Tw2Z7Aafazbht/+xkao3YNGgrjAgnAMcB17bg5AC+guRsv1HnOAcBVwD45F8azwFnAyzV+/odorFm3Kj8nwEPAUcAyF0g6NAJ3mUCq5Xbgx9az1DOk+6YN4XrnTBhv2sN9vz2stfJEnS+J1dBaiz5JT4FONYoDNHDwP+o8v6AFNLexcfcnObhm822o2Q+4r05xlA5f5q2Nz2241WRDvRUZbOMK4Ebr6a7M01vbBVIc/gmcCgwExmWoXeOArwEjgPf9NmVHIKsBZwIHZ/T7pjW8mAIcABwKzIj4/aZbGw4AXivZs7wD8IgNJztnTSCdgVPQZbyr0U27RyiXKYDY997WXhLzAp77I+B0O/fYks0zeqH59y8DB6EpxJNIKAenXoF0RMOvZ9hYvGU+9kH2FruaLzbxitqDfHl+co2N/X8HLE/xXMtQd5UmdFNuaYmEsb5955Xl3/dDc3BuR/fLggukAxpOMA24FdhsFQI6E83THk65vJg+RHfiBwCPpnD8ymraWdaDlIXu6D7MLHSjclU5Td82AZ1S67NXrUAqJmSvovsR7XXp64nuek9AHUCK3IN8mWnWmx6M7irXyzxgX9RgYUaJhNEJ+E8bxo8E1mjn59ay0c14YFDaAtkENSGr1SJmIPAUuh5ftjzq/wU+SOA4c4A/l+i6VYwppgHX2tCqFgahgZTrxZikV8tRqBPHJVW8CfLagzi1s7c91HeTTORCQ7VDrZj7IF3QYLnpaKi078k4LUcaj1pPOShmQ7LwUG4M/BfqZLiT9yClZnN7FiaheznRydJbexc04nY0ce07nfD0RLcDKqOJzGQlZnFY8x10deYnqBO59yDFZXXgPHTJ9kwyWE6iQ4Yv3KXoysWRFCzP2aEjcDK6P/YLMpyxmfWJ8RbosvITaBiF9yD10QP4SuQ2VIr53AhslPULlpeVo73RWha/i7yYMIJ8mhE0oLkw09GgvpjcBfTJy4XL09JqB9QgIFYP0g24HpgKfCtHw76+1gPfSZ1xSWWkWoEsoFzhDSsTVxNwD7ritleG29vNxveTrQcuO2+jQY1z0xTIPDTM5JRqT1QggVTYES299iianJQlDrWe7jwK4k9VBwvsOmxtLzZJUyCgIdU3oFv/F1Kf91TshzyJzx6AbmzdQfz4ss3QMgsPoZtuZUbQSPOtUI+0RaHnIAtQv6jeaBDZshJc8FVRKfh5DVUGxCVAZzSTbhpeRg3g/2wxYij1udgkMkmfi8bl9wPuLWEP0pJOaGbfLNSRMUQg5p7oCt/lVO9VVTT+hgbC7mW9evBJ+qpoRsOSdzYFl60HaUl3611nojkMacwDNkDjlp7CawvORz2/+qH7Zontd6WxzPuiKbgyUSxKD1LrQ3ytDX2OTeh6N5roKnFLZaaltdEvqd+dPohAKg/iWDRs+SRq839NgwPrmB/UI67eqLFAErvYfU10PSJcv0brHbPAnwlgbZT2RuFy1Li4CbX9jO1EeLgNBX9A9YFxZQ5TaQAOsbnOTpHb0gwcBuxHAGujUDvpi1Cb/V6oI+HnES9wD9Rbd6pd6AYXyCqp7Pc8TO2p1kkwDzWo6I8uYwe5H6FDTT5EPW37oPsGMR+63sAY1IVwWxfIv9ALTXV9kbhGG8ttSNmEWhwFfbnGisV6C7Vk2R54PPKDsI8NHa5vY35SFoGsB/wG9Qw4JnJbHkNtk04jGcOL3AikwivoTvR+JLRuXcd1GIEuy57dyvyk6AJZHfUImIX6ecUMUXkDtUk6EF0BjPpgZGVFYiTxw1bWRMuRTbUJfUMJBNIRGGaT30vIxipVZX8nOlkQSMUZfQxhLYDamp88aO0aUFCBNNgixWS0jmCWkpd+YUO8Y4mcVhBTIBsBt9jQKqtlzfax9t1A+PiqNKlEO4whu7vwm6N7R88Bu0Z7i0QowdbNxvk/snFvXliElnfIO9PQkIy8cQ+6l/ZmUQXSAY14vQy1MHWcaqk4519KoPISoQSyB7o5t4PfYycBPkQXdW4k5ZIPaQukCd1BP9LvqZMC04Fz0V1+yZNA1kHzIU7FUz6d9HnK5rWT8iCQwWiszNp+30rL27ReVCktBDgazQdJdOKcxrAqtDg+QMtxferPZlQWoLvwvdCcoCkBz91A7bVDggokJMvRuKGt0FTXrYCbcQfFGDyELh9X6jI+DWwHnEH8NIdSCqTlDfjY/m0u8D00RPs5f2aDMBcNajwcePdLv1vW4gV2iwskDO/aDdmb1hNmJgBfR+02Z/sznBq/R3fi722j134fjffaGXjJBZIOS4CL0ZTTtm5IZdL23/b3FwGL/XlOjBlojsjJLXrv9vAiWgdmGPBPF0hyPGjj258BC6v87GeowV3lTefUzjI04ncgtTvXrLDh1lY2/Fqe5S/cMeM3ZLpNvpNIqnrLhmZ7ouEKAyJ9p6dQI4taWAt4ljgxbH+1HiOplal5Nn+82YSyZyafQBFJ+udEqZ9PReRsEemcQvsQkUYRGS4iH0hYPheRrets+3mB2/ypiJwqIh1SuheISIOIHCsi79bZ1hFJty2LQ6w/WPc7ivTyj5ejcTxN1puE6uavQvMc6j3GW4Ha+ycb2l5rQ6PU3tNo/ntfNBCx1vv+cR56kPVE5GoRWVSl+l8SkV1SfEu19nOAiMwO8CZ+V0TWSKjNRwdo7032ZifCT28RebiKtj4vIrul0ZY0v+RGInKViCxs48u9LyJDU+7CW2vf3QGHKkclPCR5OkCbHxCRTSOJBBE5VERmrqJ9s+xlkZqQQ3zJDUVk1EqEskxEfi0iawW+6I02pv4koDgeTeEmfk1EVgRo+3wROcOuWwyRdLV512ct2vSRiJwpIl3SPn/IhKkNgHNQX9nxtjoV2rt3ezR9dseA5/wcNTtrTuHYN6GRAyGYaKtYEyLNTb+C+u/OQXPWPwpx0hgpt2uibtwhT1xxWz89wt7PJWjofxqsb8ILVUZ5BRprdQElCQyNIZCg3w8YYitVMdJ83wK2qWFzsxrORq2KQjLHXjZ/pOCBoUUWyOb2tjskYhsOt6XSNOlsm3dNEb7fw6jr4dtFfYg6FPA7deKLcmQxxfFwAHFU5jhnR/qOh9p1PoeCZo4WrQcZbJPw/pHbsRjdYAtlUdOAVtvdP+J3ngwMRxdgvAfJIE3AfRkQB8BdhPVvEtQcIyYDgOfRuKoOLpDs0YyWVbiCuPVHQC0ztwx8zuEZuAfjrAdfUZSHqqiT9F7omnlMu6Fn0AjVEA/LN4hbOLVStWssBVvVKuIkHdTCfwiadTg5Uhu+joZzp02jDWti8IktEPQnRW8q70HSf4CGoRt2PSNM1r+G5rWkObS6IfD3WoGm215ATjID89SDrIuunYeyBmoZ2n4VmhUXiq7AaNJLTFsbDbsIyVOoWcaIwOKoFBLtVVSBrIbuT8xCPaya0diexkDnn2fDgW1Qi5pQ7IzuE6TBSHvhhOBN4Ci0JEToYev2aJGlh9GqZN8lVN2QQNGzJ6wiW2xCWrH8bfzsLyJTA0XzLhGRbRNu/zYWER0imvfHFlUb+h5tKiKjW4lavk9E1k27DWkevMGSkV5t54243XI0Qt6Ajhb6/mGAB22iiHRK8NqOS7m9K0Tk1gj3BBHpLiIXtyOXaI6I7JtHgWxX4w2cLyLnppiL3trP1nbutBmZUHuPSLmdi0VknwjCaBSR74nIe1W2d1RauSFprGL1oP7iJtNtifSxlEeYXew8PyVM8cplNieZWOfEfyrpb0R+DFyOBnwuDHBtDkCjkmuNhJiM5vkkukmcxiQ9iclTHzS2aExKD0IDGmk7Fd15D1XZtSNwuwmzVs4izC792nZtZqFJbp1TOs+2dq8fpb4woQFptDGNHmQtknWXWGJvlstQE7h66Q9cDewbcXn9NWrPiNuJOLUS30IN+O4kGReYDVGnzJMSfFF3J+FS4nkQSIXZtlx6D7Xt2K4L/NzW7xtxauV1G5LWmiyVZhHXxAWSp1CTTdGywE9at9xeOqE1K5rRilcujvrYGrgfNaE+oIohdQfgBNTX9yJyUuE4j7FYe9pm0W/RUm+rYj/729/gFa+SZgebNzyN5uGsir2Al1FTwFxVOM5rsGIHNFxlBivfje9tE/zHyWdN8DzxDdQveCwagtKSvmhW5ZMr+V0uyNMcZFVMtGHUFBsfn4kXD43FPbYIcnyE+V6pJ+nt4RN0H8YpJ7mYpC8HFkW6QC6O8vIqsDQPc5D5wBZoaLlXdXLS5j1gqC0aLMnDHKQlG6Lr3SPQEAnHSYpFaFr1L5MeVoUUSIWNgB+j2W9d/N46dXI7cD4BCrSGTrnd2IRysgvFqYG/oLvwL4c6Yayc9E2An6DO5J1zdIOWuLCjMAs4Fy3mGvSBjbVROAfd6OsFXEd8H6u2qNRdL4Jr4EX2Js4D81A7oX5EMsqOvZM+G42P6o06cyzN2A2ai0ab7oTuFheBSWi4ztGEdX+shmWoI39vdNMx2gs0K6Em76I5Bz/MSHuWAleixURvo0BOgYagAYf9bE44P2Ptu8J6jg9jNyQrAhkMPGdvi9iMsQfnRxS/SMxiexibUJ+rrJiknY86U25XdoH0AR6w4cuukdsyFY3+PQKYWbJJ8Fx0ZXF71PcqC+yGrlZdR9tR24UTyAb2xacS1z8XNLPvNNQB8QnKzSuo79UR6MpRFl7gp9B61HbhBLIG8DN7Q59C3OSl5WhOSRNwLWEdF7M+PxmDGuydk5Fh5rqoO+Z41PSicALpaG+AZjTtdY3IF3wcMBCts/eRa2KlLAFGoStJ12dkoWKQieQWtIBp7gXSAByGmhTciMZmxeZYNFU0ZAnqeWhA3TsJHOt1e9mESin4J7rCODBDQ9CTbNj1fdLzPU5dIDujNSvGoJllWeFJwq7WVJZTb03ovBVn9T52zFBMQUu8XZuR+9gDTaWeiGY15kYgvdGssvHo7nNZ+Qdao+Ro+/803uxD7RpPCTg/+SBj13lbexHfgcb6ZVYg65miXwe+VfLx+018ER6RNs+iy7PnkIxvWF45DnXkPIcE4/uSEEg34Dx0WTD1MWHGaUbDOIZTv/1qNSy1CXVftJBpWVkDzQ95Fd3TiiqQRpssNaNFXLqX+MYsR50fBxK3VuBs670PIhv7GLHoizra3AdsFlogDcDB6KbSLWmM+3LGRHT58Tzi5eJ/mUdtbP5zsh8pnSZH8YUTZNcQAumOVvoZSzbqkcdkEZqjsLO9LLLYvpF2nx4v8X1aDfUAnkoNq6nVCqQH6pJXdir2p78i+zvwzcCBwDHA30t8z7YMIZDYfIyGn8c8/1DUGT5PY3wB7rUH5OXIbVmapwcuLwJZhobC9ybs5tiX+TeS2/CLwXwCGB20wUATqwskIf6I7in8gPhxU0tw6uVNG+59A01ldoHUyCSb7wyxcbRTLJ5BU5lPJJ1Ig8IK5O920Qah1vpOcVkBjEZTmy8mg06cWRLIInTdfiu7aCv8+SkNC9A8oT7AXS6Qf2U0mrg0knLHE5Wdd9CYqt2AF1wg6s80yIZUc/z5cIy/mkiOJ/KqWyyBzLLJ957kYCUjASqJYz0TONYmaMJXGeYnd9qw60LC1GqvWyAVI7VJNZ5vHpGd8iIwAE3xHUMyhSvXQmOtxpKtRLS0WIi6QW6FmlbXwgR0D+vhtAWyFN3J3sG6wLto385oxSAhulNeQNZH04wnoU4hSXMwmsp8DRFtcQIyB62SuxPwfDs/8wi6VbAjcDc1hAXVOsQSGyceB3zVViBai/N5CA2YO50MOOUFoAsaxNiM5o6nOYztaNd1pv23DHUZXwJ2R70F3l7FS7w/cAi6VVDzSCWJm/ceuoa9ObpDWsmHmIzGLB0GvFGSecaRwDTUtnTNgOde23qS16xnaSj4tRY0rXtrNM1gAVqf8gp7Dk8iIVOOtMof9ALesqFV0uyO7sLWynokn1e9nQ0d98jIA/QYWkcjDeeWkTZprpXVSH5DcAObqyTuMZxW9z8rJXFkjQ3RpLEJGRIH6CrXq6gDSc8S3Ie5pGTA3QGnFrqiBYCarTvP4pCmEfWzmgmcRb4KFWWGsglkCvWlxTagOd+vA5cS3yGyPfRAKw5Psflggz/2xRbIeHt7V7NUvAgtZ7A9tYeyDEJ3/u+xiWDeaEL3YsahezP1zG9m1PC5Feiyd64SphCRvP70E5Hx0jYPicjmdZxnYxH5gxSL5SJyo4isX+M16SwiZ4rIx+083yMisk0en7M8CwQRaRSRc0Rk8UpuymwRGSIiDTUeu5uIXCAin0lx+UREzhWRLjVeo54icq0JbmVMFpH98/yM5V0glZ8+IvJci7fj1SLSvY7jHSki70h5mCUiB9VxvfqLyOMtjveeiAyzF1iun61YZaDTWrU5GQ2TnljnsZ7O2LJtCMYCh9a5gHEwGoZ0Ndmre1gTRbIJXY7WsXAiTWdNZGN9FctxfJnXcRwXiOO4QDLBvWjcVr3cBjzol9MFUhQq+QvHoBHO9fI3NKx+b7Jpmu0CcdrFbNR0YBfguRSO/xQa/jIUzclxXCC54DO0HkUf1HQgTX+v5ahXcBNwCRk0XnOBFJOfUr0xhdgcowmtuBXShWMBcAH1Ga/N8tvuAmkvz6KJ/sOA99vx90+iWYXDiOszWzFe2wX1DGgP42yOdIbfdhdItcOXSo9wJSsPr5+B5ljsi2bwZYUXgMGo1c3bbQhj/5TmSC6QkvApmkvSsqzzR6iLSH/UtSWLAW2CWt30RfNnKrFRT6C11V0Y7aCjX4KqxuhDUD+w19FqU3lgMXA5un+yZRVDL8cFUhPP57Tdc+3H8SGW47hAHMcF4jguEMdxgTiOC8RxXCCO4wJxHMcF4jguEMdxgTiOC8RxXCCO4wJxHBeI47hAHMcF4iTCG8CyOj6/lHLUnHeBlJT70PoZL9fw2RfQGov3+WV0gRSZycCuwLm0z+htIVrGeTBaqdYJSJEqTOWR3sDNtF7N6nFgOMl4+jreg+SOmagJ9XDUXqjCR8AJwIEuDu9BHGVT4DobUp2BO5Bkgv8fANxn3fYlX3kgAAAAAElFTkSuQmCC", 0);
		return BitmapFactory_.decodeByteArray(bytes, 0, bytes.length);
	})();

	/**
	 * Creates a snow particle.
	 * @since 2016-12-20
	 */
	SnowParticle.prototype.create = function () {
		var thiz = this,
			size = Math.floor(Math.random() * 10 + 5) * DP,
			x = Math.floor(Math.random() * DEVICE_WIDTH - DEVICE_WIDTH / 2),
			particle = new ImageView_(CONTEXT);
		CONTEXT.runOnUiThread({
			run() {
				particle.setImageBitmap(Bitmap_.createScaledBitmap(SnowParticle.RESOURCE, DP * size, DP * size, false));
				thiz._window = new PopupWindow_(particle, -2, -2);
				thiz._window.showAtLocation(SCREEN, Gravity_.TOP, x, 0);
			}
		});
		thiz._isShowing = true;
		new Thread_({
			run() {
				var y = 5;
				while (thiz._isShowing && y < DEVICE_HEIGHT) {
					if (thiz._window !== null) {
						CONTEXT.runOnUiThread({
							run() {
								thiz._window.update(x, y, -2, -2);
							}
						});
					}
					Thread_.sleep(50);
					y += 5;
				}
				if (thiz._isShowing) {
					thiz._isShowing = false;
					if (thiz._window !== null) {
						CONTEXT.runOnUiThread({
							run() {
								thiz._window.dismiss();
								thiz._window = null;
							}
						});
					}
				}
			}
		}).start();
	};

	$.SnowEffect = SnowEffect;
	$.SnowParticle = SnowParticle;
})(this);

var currentScreen = ScreenType.start_screen;

function screenChangeHook(screenName) {
	if(screenName == ScreenType.start_screen || screenName == ScreenType.hud || screenName == ScreenType.ingame || screenName == ScreenType.pause_screen) {
		CONTEXT.runOnUiThread(new Runnable_({
			run: function() {
				if(GUI != null) {
					GUI.setTouchable(true);
					GUI.update();
				}
			}
		}));
	} else {
		if(!VertexClientPE.menuIsShowing) {
			CONTEXT.runOnUiThread(new Runnable_({
				run: function() {
					if(GUI != null) {
						GUI.setTouchable(false);
						GUI.update();
					}
				}
			}));
		}
	}
	if(screenName == ScreenType.hud || screenName == ScreenType.ingame) {
		if((hacksList == null || !hacksList.isShowing()) && !VertexClientPE.menuIsShowing) {
			showHacksList();
			showTabGUI();
			showShortcuts();
			if(healthDisplayState) {
				showHealthDisplay();
			}
			if(rotationPlusState) {
				showRotationPlus();
			}
		}
	} else {
		if(hacksList != null) {
			CONTEXT.runOnUiThread(new Runnable_({
				run: function() {
					hacksList.dismiss();
				}
			}));
		}
		if(tabGUI != null) {
			CONTEXT.runOnUiThread(new Runnable_({
				run: function() {
					tabGUI.dismiss();
				}
			}));
		}
		if(shortcutGUI != null) {
			CONTEXT.runOnUiThread(new Runnable_({
				run: function() {
					shortcutGUI.dismiss();
				}
			}));
		}
		if(healthDisplayUI != null) {
			CONTEXT.runOnUiThread(new Runnable_({
				run: function() {
					healthDisplayUI.dismiss();
				}
			}));
		}
		if(rotationPlusUI != null) {
			CONTEXT.runOnUiThread(new Runnable_({
				run: function() {
					rotationPlusUI.dismiss();
				}
			}));
		}
		if(screenName == ScreenType.start_screen) {
			if((mainMenuTextList == null || !mainMenuTextList.isShowing()) && !VertexClientPE.menuIsShowing && !VertexClientPE.playerIsInGame) {
				VertexClientPE.showStartScreenBar();
			}
			if((accountManagerGUI == null || !accountManagerGUI.isShowing()) && !VertexClientPE.menuIsShowing && !VertexClientPE.playerIsInGame) {
				CONTEXT.runOnUiThread(new Runnable_({
					run: function() {
						showAccountManagerButton();
					}
				}));
			}
		} else {
			if(mainMenuTextList != null) {
				if(mainMenuTextList.isShowing()) {
					CONTEXT.runOnUiThread(new Runnable_({
						run: function() {
							mainMenuTextList.dismiss();
						}
					}));
				}
			}
			if(accountManagerGUI != null) {
				if(accountManagerGUI.isShowing()) {
					CONTEXT.runOnUiThread(new Runnable_({
						run: function() {
							accountManagerGUI.dismiss();
						}
					}));
				}
			}
			//print(screenName);
		}
	}
	if(screenName == ScreenType.pause_screen) {
		VertexClientPE.isPaused = true;
		if(!VertexClientPE.menuIsShowing) {
			showPauseUtilities();
		}
	} else if(currentScreen == ScreenType.pause_screen) {
		if(screenName != ScreenType.options_screen) {
			VertexClientPE.isPaused = false;
		}
		if(pauseUtilitiesUI != null) {
			if(pauseUtilitiesUI.isShowing()) {
				CONTEXT.runOnUiThread(new Runnable_({
					run: function() {
						pauseUtilitiesUI.dismiss();
					}
				}));
			}
		}
	}
	currentScreen = screenName;
}

/* function keyEvent(par1, par2) {
	print(par1);
	print(par2);
	//if(screenName == ScreenType.start_screen || screenName == ScreenType.hud || screenName == ScreenType.ingame) {
		
	//}
} */

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

Array.prototype.getRandomElement = function() {
	return this[Math.floor(Math.random() * this.length)];
}

/**
* ModPEAddon:
* ModPE.getFromUrl
* eDroid
* http://github.edroidthedev.com/?repo=ModPEAddon/ModPE/getFromUrl.js
*/
ModPE.getFromUrl = function(url, errs){
	errs = 0 || errs;
	try {
		var url = new java.net.URL(url);
		var connection = url.openConnection();
		var inputStream = connection.getInputStream();
		var data = "";
		var bufferedReader = new java.io.BufferedReader(new java.io.InputStreamReader(inputStream));
		var line = "";
		while((line = bufferedReader.readLine()) != null){
			data += line + "\n";
		}
		var result = data.toString();
		bufferedReader.close();
	} catch(err) {
		result = (errs ? "Getting URL Failed. Error: " + err : 0);
		print("Error ModPE.ajax(): " + err);
	} finally {
		if(result == null || result == undefined){
			result = (errs ? "Result is null" : 0);
		}
	}
	return result;
};
/**
* ModPEAddon:
* ModPE.JSON
* eDroid
* http://github.edroidthedev.com/?repo=ModPEAddon/ModPE/JSON.js
*/
ModPE.JSON = {
  parse: function(str){
	return Function("return " + str)();
  }
};

var myServerStatus = {
	set: function(ip, port){
		port = 19132 || port;
		this.ip = ip;
		this.port = port;
		this.connect();
		return this;
	},
	update: function(){
	  if(this.ip !== null && this.port !== null){
		this.connect();
	  }
	},
	connect: function(){
		var data = ModPE.getFromUrl("http://serverstatus.ml/info.php?address=" + this.ip + ":" + this.port);
		if(data != false){
			myServerStatus.json = ModPE.JSON.parse(data);
			myServerStatus.setVariables();
		}
		return true;
	},
	setVariables: function(){
		this.status = this.json["status"];
		this.name = this.json["name"];
		this.address = this.json["address"];
		this.version = this.json["version"];
		this.software = this.json["software"];
		this.online = this.json["online"];
		this.list = this.json["players"];
		this.plugins = this.json["plugins"];
	}
};

var isSupported = true;
var isAuthorized = true;

var oldYaw = 0;
var newYaw = 0;

const PI_CIRCLE = Math.PI / 180;

var VertexClientPE = {
	name: "Vertex Client PE",
	getName: function() {
		return VertexClientPE.name;
	},
	author: "peacestorm",
	isDevMode: function() {
		return sharedPref.getBoolean("VertexClientPE.isDevMode", false);
	},
	isDebugMode: function() {
		return sharedPref.getBoolean("VertexClientPE.isDebugMode", false);
	},
	isExpMode: function() {
		return sharedPref.getBoolean("VertexClientPE.isExpMode", false);
	},
	setIsDevMode: function(bool) {
		editor.putBoolean("VertexClientPE.isDevMode", bool);
		editor.commit();
	},
	setIsDebugMode: function(bool) {
		editor.putBoolean("VertexClientPE.isDebugMode", bool);
		editor.commit();
	},
	setIsExpMode: function(bool) {
		editor.putBoolean("VertexClientPE.isExpMode", bool);
		editor.commit();
	},
	isSupported: function() {
		return isSupported;
	},
	accounts: new JSONArray_(),
	friends: new JSONArray_(),
	currentWorld: {
		deathX: -1,
		deathY: -1,
		deathZ: -1
	},
	latestReleaseDownloadCount: null,
	Utils: {
		chests: [],
		fov: 70,
		fps: 0,
		world: {
			chatMessages: []
		},
		takeScreenshot: function(mode) {
			var now = new java.util.Date();
			android.text.format.DateFormat.format("yyyy-MM-dd_hh:mm:ss", now);
			var mPath = Environment_.getExternalStorageDirectory().toString() + "/" + now;
			
			switch(mode) {
				case "noGui": {
					ModPE.takeScreenshot(mPath + ".png");
					VertexClientPE.toast(mPath + ".png");
					break;
				} default: {
					try {
						// create bitmap screen capture
						if(Launcher.isBlockLauncher()) {
							net.zhuoweizhang.mcpelauncher.ScreenshotHelper.takeScreenshot(now);
						}
					} catch (e) {
						// Several error may come out with file handling or OOM
						//e.printStackTrace();
						print("@" + e.lineNumber + ": " + e);
					}
					break;
				}
			}
		},
		Block: { //thanks to GodSoft029
			isLiquid: function (id) {
				if(id >= 8 && id <= 11) return true;
				return false;
			}
		},
		Player: { //thanks to GodSoft029
			isFriend: function(entity) {
				let friendsLength = VertexClientPE.friends.length();
				let username = Entity.getNameTag(entity);
				if(VertexClientPE.friends != null && friendsLength != -1) {
					for(var i = 0; i < friendsLength; i++) {
						if(username == VertexClientPE.friends.get(i)) {
							return true;
						}
					}
				}
				return false;
			},
			isInWater: function () {
				if(VertexClientPE.Utils.Block.isLiquid(getTile(getPlayerX() + 0.5, getPlayerY() - 1.5, getPlayerZ() + 0.5))) return true;
				return false;
			},
			isInFire: function () {
				if(getTile(getPlayerX() + 0.5, getPlayerY() - 1, getPlayerZ() + 0.5) == 51) return true;
				return false;
			},
			isOnLadder: function () {
				if(getTile(getPlayerX() + 0.5, getPlayerY() - 1.5, getPlayerZ() + 0.5) == 65 || getTile(getPlayerX() + 0.5, getPlayerY() - 1.5, getPlayerZ() + 0.5) == 106) return true;
				return false;
			},
			onGround: function () {
				let y = getPlayerY();
				while(y > 1) y -= 1;

				if((Math.round(y * 100) >= 61 && Math.round(y * 100) <= 63) && getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()) != 0 && !VertexClientPE.Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) return true;
				if((Math.round(y * 100) >= 11 && Math.round(y * 100) <= 13) && getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()) != 0 && !VertexClientPE.Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) return true;
				return false;
			},
			isCollidedHorizontally: function () {
				let x = getPlayerX();
				let z = getPlayerZ();
				let blockX = Math.round(x - 0.5);
				let blockZ = Math.round(z - 0.5);
				while(x < 1) x += 1;
				while(z < 1) z += 1;
				while(x > 1) x -= 1;
				while(z > 1) z -= 1;

				if(Math.round(x * 100) == 31) x -= 0.01;
				if(Math.round(z * 100) == 31) z -= 0.01;
				if(Math.round(x * 100) == 69) x += 0.01;
				if(Math.round(z * 100) == 69) z += 0.01;
				if(Math.round(x * 100) == 30) blockX--;
				if(Math.round(z * 100) == 30) blockZ--;
				if(Math.round(x * 100) == 70) blockX++;
				if(Math.round(z * 100) == 70) blockZ++;
				if(getTile(blockX, getPlayerY(), blockZ) == 0 && getTile(blockX, getPlayerY() - 1, blockZ) == 0 && getTile(blockX, getPlayerY() - 0.5, blockZ) == 0 && getTile(blockX, getPlayerY() + 0.2, blockZ) == 0 && getTile(blockX, getPlayerY() - 1.6, blockZ) == 0) return false;

				if(Block.getDestroyTime(getTile(blockX, getPlayerY() - 1, blockZ)) <= 0.1 && Block.getDestroyTime(getTile(blockX, getPlayerY(), blockZ)) <= 0.1) return false;

				if(Math.round(x * 100) == 30 || Math.round(x * 100) == 70) return true;
				if(Math.round(z * 100) == 30 || Math.round(z * 100) == 70) return true;
				return false;
			},
			isAtEdge: function(){
				if(getTile(getPlayerX() + 0.0001, getPlayerY() - 2, getPlayerZ() + 0.0001) == 0 || getTile(getPlayerX() - 0.0001, getPlayerY() - 2, getPlayerZ() - 0.0001) == 0 || getTile(getPlayerX() + 0.0001, getPlayerY() - 2, getPlayerZ() - 0.0001) == 0 || getTile(getPlayerX() - 0.0001, getPlayerY() - 2, getPlayerZ() + 0.0001) == 0) {
					return true;
				}
				return false;
			},
			getNearestMob: function(range, minRange) {
				let mobs = Entity.getAll();
				if(targetMobsSetting == "on") {
					for(let i = 0; i < mobs.length; i++) {
						let ent = mobs[i];
						let x = Entity.getX(ent) - getPlayerX();
						let y = Entity.getY(ent) - getPlayerY();
						let z = Entity.getZ(ent) - getPlayerZ();
						if(x*x+y*y+z*z>range*range) {
							continue;
						}
						if(minRange != null) {
							if(x*x+y*y+z*z<=minRange*minRange) {
								continue;
							}
						}
						if(Entity.getEntityTypeId(ent) != EntityType.ARROW && Entity.getEntityTypeId(ent) != EntityType.BOAT && Entity.getEntityTypeId(ent) != EntityType.EGG && Entity.getEntityTypeId(ent) != EntityType.ENDER_PEARL && Entity.getEntityTypeId(ent) != EntityType.EXPERIENCE_ORB && Entity.getEntityTypeId(ent) != EntityType.EXPERIENCE_POTION && Entity.getEntityTypeId(ent) != EntityType.FALLING_BLOCK && Entity.getEntityTypeId(ent) != EntityType.FIREBALL && Entity.getEntityTypeId(ent) != EntityType.FISHING_HOOK && Entity.getEntityTypeId(ent) != EntityType.ITEM && Entity.getEntityTypeId(ent) != EntityType.LIGHTNING_BOLT && Entity.getEntityTypeId(ent) != EntityType.MINECART && Entity.getEntityTypeId(ent) != EntityType.PAINTING && Entity.getEntityTypeId(ent) != EntityType.PRIMED_TNT && Entity.getEntityTypeId(ent) != EntityType.SMALL_FIREBALL && Entity.getEntityTypeId(ent) != EntityType.SNOWBALL && Entity.getEntityTypeId(ent) != EntityType.THROWN_POTION && ent != getPlayerEnt()) {
							return ent;
						}
					}
				}
				return null;
			},
			getNearestPlayer: function(range, minRange) {
				let players = Server.getAllPlayers();
				if(targetPlayersSetting == "on") {
					for(let i = 0; i < players.length; i++) {
						let ent = players[i];
						let x = Entity.getX(ent) - getPlayerX();
						let y = Entity.getY(ent) - getPlayerY();
						let z = Entity.getZ(ent) - getPlayerZ();
						if(x*x+y*y+z*z>range*range) {
							continue;
						}
						if(minRange != null) {
							if(x*x+y*y+z*z<=minRange*minRange) {
								continue;
							}
						}
						if(targetFriendsSetting == "off" && VertexClientPE.Utils.Player.isFriend(ent)) {
							continue;
						}
						if(ent != getPlayerEnt()) {
							return ent;
						}
					}
				}
				return null;
			}
		}
	},
	CombatUtils: {
		aimAt: function(x, y, z) {
			// Credits to Godsoft0329 aka the developer of DragOP
			var velocity = 1;
			var posX = x - getPlayerX();
			var posY = y - getPlayerY();
			var posZ = z - getPlayerZ();
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
		},
		aimAtEnt: function(ent) {
			// Credits to Godsoft0329 aka the developer of DragOP
			if(Entity.getEntityTypeId(ent) == EntityType.PLAYER && Entity.getNameTag(ent) == "") return;
			var x = Entity.getX(ent);
			var y = Entity.getEntityTypeId(ent) == EntityType.PLAYER ? Entity.getY(ent) : Entity.getY(ent) + 1;
			var z = Entity.getZ(ent);
			this.aimAt(x, y, z);
		},
		aimAtBlock: function(x, y, z) {
			y += 1;
			this.aimAt(x, y, z);
		},
		strafeAroundEnt: function(ent, direction) {
			direction = direction || "left";
			this.aimAtEnt(ent);
			var xVel = Math.cos(PI_CIRCLE * (getYaw() + 5)) * 0.2;
			var zVel = Math.sin(PI_CIRCLE * (getYaw() + 5)) * 0.2;
			if(direction == "right") {
				xVel *= -1;
				zVel *= -1;
			}
			setVelX(getPlayerEnt(), xVel);
			setVelZ(getPlayerEnt(), zVel);
		}
	}
};

function getEditedFunction(func, newBegin, newEnd) {
	if(newBegin == null) {
		newBegin = "";
	}
	if(newEnd == null) {
		newEnd = "";
	}
	var temp = func.toString();
	temp = newBegin + temp + newEnd;

	// now replace the original function
	func = new Function(temp.substring(temp.indexOf('{')+1,temp.lastIndexOf('}')));

	return func; // alerts "This ok function alerts your message!"
}

VertexClientPE.clickListener = function(obj) {
	if(buttonSoundSetting == "minecraft") {
		obj.onClick = getEditedFunction(obj.onClick, 'Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);');
	}
	return new View_.OnClickListener(obj);
}

VertexClientPE.menuIsShowing = false;
VertexClientPE.isPaused = false;

VertexClientPE.trailsMode = "off";

VertexClientPE.Utils.loadChests = function() {
	VertexClientPE.Utils.chests = [];
	try {
		let x = Math.round(getPlayerX());
		let y = Math.round(getPlayerY());
		let z = Math.round(getPlayerZ());
		for(let blockX = - chestESPRange; blockX <= chestESPRange; blockX++) {
			for(let blockY = - chestESPRange; blockY <= chestESPRange; blockY++) {
				for(let blockZ = - chestESPRange; blockZ <= chestESPRange; blockZ++) {
					let newX = Math.round(x + blockX);
					let newY = Math.round(y + blockY);
					let newZ = Math.round(z + blockZ);
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

var _0x199a=["\x69\x73\x50\x72\x6F","\x67\x65\x74\x50\x72\x65\x66\x65\x72\x65\x6E\x63\x65\x73","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x69\x73\x50\x72\x6F","\x67\x65\x74\x53\x74\x72\x69\x6E\x67","\x73\x65\x74\x49\x73\x50\x72\x6F","\x54\x68\x69\x73\x49\x73\x53\x70\x61\x72\x74\x61"];VertexClientPE[_0x199a[0]]=function(){var _0xf36dx1=CONTEXT[_0x199a[1]](CONTEXT.MODE_PRIVATE);return _0xf36dx1[_0x199a[3]](_0x199a[2],null)};VertexClientPE[_0x199a[4]]=function(){var _0xf36dx2=_0x199a[5];return _0xf36dx2}

var _0xda74=["\x68\x61\x73\x45\x61\x72\x6E\x65\x64\x50\x72\x6F\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x67\x65\x74\x50\x72\x65\x66\x65\x72\x65\x6E\x63\x65\x73","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x68\x61\x73\x45\x61\x72\x6E\x65\x64\x50\x72\x6F\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x67\x65\x74\x53\x74\x72\x69\x6E\x67","\x74\x72\x75\x65"];VertexClientPE[_0xda74[0]]= function(){var _0xdb22x1=CONTEXT[_0xda74[1]](CONTEXT.MODE_PRIVATE);if(_0xdb22x1[_0xda74[3]](_0xda74[2],null)== _0xda74[4]){return true}else {return false}}

var _0xb21b=["\x67\x65\x74\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x67\x65\x74\x50\x72\x65\x66\x65\x72\x65\x6E\x63\x65\x73","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x76\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x67\x65\x74\x49\x6E\x74"];VertexClientPE[_0xb21b[0]]= function(){var _0x602dx1=CONTEXT[_0xb21b[1]](CONTEXT.MODE_PRIVATE);var _0x602dx2=_0x602dx1[_0xb21b[3]](_0xb21b[2],0);return _0x602dx2}

var _0xe844=["\x67\x69\x76\x65\x50\x72\x6F\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x68\x61\x73\x45\x61\x72\x6E\x65\x64\x50\x72\x6F\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x67\x65\x74\x50\x72\x65\x66\x65\x72\x65\x6E\x63\x65\x73","\x65\x64\x69\x74","\x67\x65\x74\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x76\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x70\x75\x74\x49\x6E\x74","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x68\x61\x73\x45\x61\x72\x6E\x65\x64\x50\x72\x6F\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x74\x72\x75\x65","\x70\x75\x74\x53\x74\x72\x69\x6E\x67","\x63\x6F\x6D\x6D\x69\x74","\x69\x73\x44\x65\x76\x4D\x6F\x64\x65","\x47\x61\x76\x65\x20\x70\x72\x6F\x20\x63\x61\x73\x68","\x41\x6C\x72\x65\x61\x64\x79\x20\x67\x61\x76\x65\x20\x70\x72\x6F\x20\x63\x61\x73\x68"];VertexClientPE[_0xe844[0]]= function(){if(!VertexClientPE[_0xe844[1]]()){var _0x3b1cx1=CONTEXT[_0xe844[2]](CONTEXT.MODE_PRIVATE);var _0x3b1cx2=_0x3b1cx1[_0xe844[3]]();var _0x3b1cx3=VertexClientPE[_0xe844[4]]();_0x3b1cx2[_0xe844[6]](_0xe844[5],_0x3b1cx3+ 500);_0x3b1cx2[_0xe844[9]](_0xe844[7],_0xe844[8]);_0x3b1cx2[_0xe844[10]]();if(VertexClientPE[_0xe844[11]]()){print(_0xe844[12])}}else {if(VertexClientPE[_0xe844[11]]()){print(_0xe844[13])}}}

var _0xc116=["\x73\x65\x74\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x76\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x70\x75\x74\x49\x6E\x74","\x63\x6F\x6D\x6D\x69\x74"];VertexClientPE[_0xc116[0]]= function(_0x5824x1){editor[_0xc116[2]](_0xc116[1],_0x5824x1);editor[_0xc116[3]]()}

VertexClientPE.isRemote = function() {
	return Server.getAddress() != null;
}

VertexClientPE.playerIsInGame = false;

VertexClientPE.currentVersion = "2.3";
VertexClientPE.currentVersionDesc = "The Visual Update";
VertexClientPE.targetVersion = "MCPE v1.0.x alpha";
VertexClientPE.minVersion = "1.0.0";
VertexClientPE.edition = "Normal";
VertexClientPE.latestVersion;
VertexClientPE.latestVersionDesc;

var latestPocketEditionVersion;
var news;

var movementMenuLayout;
var menuBtn;
var logoViewer2;
var chestUI;
var menuMiddleLayout;
var menuRightLayout;

var autoSpammerState = false;
var autoSwordState = false;
var bypassState = false;
var chestESPState = false;
var fancyChatState = false;
var fastBreakState = false;
var healthDisplayState = false;
var remoteViewState = false;
var rotationPlusState = false;
var speedHackState = false;
var stackDropState = false;

var showingMenu = false;

var setupColor = "green";

var f = 0;

try {
	VertexClientPE.defaultFont = (Build_.VERSION.SDK_INT > 16)?Typeface_.create("sans-serif-thin", Typeface_.NORMAL):Typeface_.DEFAULT;
	VertexClientPE.font = fontSetting=="minecraft"?Typeface_.createFromFile(new File_(PATH, "minecraft.ttf")):VertexClientPE.defaultFont;
	VertexClientPE.tileFont = Launcher.isBlockLauncher()?new Typeface_.createFromAsset(CONTEXT.getAssets(), "fonts/SegoeWP.ttf"):VertexClientPE.defaultFont;
} catch(e) {
	print("@" + e.lineNumber + ": " + e);
}

VertexClientPE.getDeviceName = function() {
	var manufacturer = Build_.MANUFACTURER;
	var model = Build_.MODEL;
	if (model.startsWith(manufacturer)) {
		return model;
	} else {
		return manufacturer + " " + model;
	}
}

//########################################################################################################################################################
// Minecraft Button Library
//########################################################################################################################################################

// Library version: 2.1.0
// Made by Dennis Motta, also known as Desno365
// https://github.com/Desno365/Minecraft-Button-Library

/*
	The MIT License (MIT)

	Copyright (c) 2015 Dennis Motta 

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/

var MinecraftButtonLibrary = {};

//########## CUSTOMIZATION VARIABLES ##########
// These are the default values of the library, you can change them to make the buttons look how you want to.
MinecraftButtonLibrary.defaultButtonTextSize = 16; // size of the text
MinecraftButtonLibrary.defaultButtonPadding = 8; // empty space between borders of the button and the text
MinecraftButtonLibrary.defaultButtonTextLineSpacing = 4; // empty space between every line of text (can be seen only when the text gets displayed with 2 or more lines)
MinecraftButtonLibrary.shouldDisplayPaddingAnimationWhenPressed = true; // when true the text is moved down a bit when pressed
MinecraftButtonLibrary.defaultButtonTextColor = "#FFDDDDDD";
MinecraftButtonLibrary.defaultButtonTextPressedColor = "#FFFFFF9C";
MinecraftButtonLibrary.defaultButtonTextShadowColor = "#FF393939";
MinecraftButtonLibrary.defaultButtonTextPressedShadowColor = "#FF3E3E28";
//########## CUSTOMIZATION VARIABLES - END ##########


//########## GLOBAL VARIABLES ##########
MinecraftButtonLibrary.Resources = {};
MinecraftButtonLibrary.ProcessedResources = {};

MinecraftButtonLibrary.context = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
MinecraftButtonLibrary.metrics = new android.util.DisplayMetrics();
MinecraftButtonLibrary.context.getWindowManager().getDefaultDisplay().getMetrics(MinecraftButtonLibrary.metrics);
MinecraftButtonLibrary.sdcard = new android.os.Environment.getExternalStorageDirectory();
MinecraftButtonLibrary.LOG_TAG = "Minecraft Button Library ";

MinecraftButtonLibrary.ProcessedResources.font = VertexClientPE.font;
MinecraftButtonLibrary.ProcessedResources.mcNormalNineDrawable = null;
MinecraftButtonLibrary.ProcessedResources.mcPressedNineDrawable = null;
//########## GLOBAL VARIABLES -  END ##########



//########################################################################################################################################################
// LIBRARY
//########################################################################################################################################################

// MinecraftButton(int textSize, bool enableSound, string customTextColor)
// set an argument null if you want to use the default value
function MinecraftButton(textSize, enableSound, customTextColor)
{
	// textSize is the size of the text, enableSound is a boolean that when sets to true makes the button do a sound when pressed, customTextColor is the string of the color

	if(textSize == null)
		textSize = MinecraftButtonLibrary.defaultButtonTextSize;
	if(enableSound == null)
		enableSound = true;
	if(customTextColor == null)
		customTextColor = MinecraftButtonLibrary.defaultButtonTextColor;

	var button = new android.widget.Button(MinecraftButtonLibrary.context);
	button.setTextSize(textSize);
	button.setOnTouchListener(new android.view.View.OnTouchListener()
	{
		onTouch: function(v, motionEvent)
		{
			MinecraftButtonLibrary.onTouch(v, motionEvent, enableSound, customTextColor);
			return false;
		}
	});
	if (android.os.Build.VERSION.SDK_INT >= 14) // 4.0 and up
		button.setAllCaps(false);
	MinecraftButtonLibrary.setButtonBackground(button, MinecraftButtonLibrary.ProcessedResources.mcNormalNineDrawable);
	button.setTag(false); // is pressed?
	button.setSoundEffectsEnabled(false);
	button.setGravity(android.view.Gravity.CENTER);
	button.setTextColor(android.graphics.Color.parseColor(customTextColor));
	button.setPadding(MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding));
	MinecraftButtonLibrary.addMinecraftStyleToTextView(button, MinecraftButtonLibrary.defaultButtonTextShadowColor, MinecraftButtonLibrary.defaultButtonTextLineSpacing);

	return button;
}

// ######### TEXTVIEW UTILS functions #########
// use this function on your textview (or subclasses) to apply a Minecraft style on it
MinecraftButtonLibrary.addMinecraftStyleToTextView = function(textview, shadowColor, lineSpacing)
{
	// shadowColor is the string of the color, lineSpacing is the empty space between multiple lines in pixels (it will be converted in dp later)
	// NOTE: you must set the text size before calling this function!

	if(lineSpacing == null)
		lineSpacing = MinecraftButtonLibrary.defaultButtonTextLineSpacing;
	if(shadowColor == null)
		shadowColor = MinecraftButtonLibrary.defaultButtonTextShadowColor;

	textview.setTypeface(MinecraftButtonLibrary.ProcessedResources.font);
	textview.setPaintFlags(textview.getPaintFlags() | android.graphics.Paint.SUBPIXEL_TEXT_FLAG);
	textview.setLineSpacing(MinecraftButtonLibrary.convertDpToPixel(lineSpacing), 1);
	MinecraftButtonLibrary.setShadowToMinecraftFont(textview, shadowColor, lineSpacing);
}

MinecraftButtonLibrary.setShadowToMinecraftFont = function(textview, shadowColor, lineSpacing)
{
	if(lineSpacing == null)
		lineSpacing = MinecraftButtonLibrary.defaultButtonTextLineSpacing;

	if (android.os.Build.VERSION.SDK_INT >= 19) // 4.4 and up
		textview.setShadowLayer(1, Math.round((textview.getLineHeight() - MinecraftButtonLibrary.convertDpToPixel(lineSpacing)) / 8), Math.round((textview.getLineHeight() - MinecraftButtonLibrary.convertDpToPixel(lineSpacing)) / 8), android.graphics.Color.parseColor(shadowColor));
	else
		textview.setShadowLayer(0.0001, Math.round((textview.getLineHeight() - MinecraftButtonLibrary.convertDpToPixel(lineSpacing)) / 8), Math.round((textview.getLineHeight() - MinecraftButtonLibrary.convertDpToPixel(lineSpacing)) / 8), android.graphics.Color.parseColor(shadowColor));
}
// ######### TEXTVIEW UTILS functions - END #########


// ######### BUTTON UTILS functions #########
MinecraftButtonLibrary.setButtonBackground = function(button, background)
{
	if (android.os.Build.VERSION.SDK_INT >= 16) // 4.1 and up
		button.setBackground(background);
	else
		button.setBackgroundDrawable(background);
}

MinecraftButtonLibrary.convertDpToPixel = function(dp)
{
	var density = MinecraftButtonLibrary.metrics.density;
	return (dp * density);
}

MinecraftButtonLibrary.onTouch = function(v, motionEvent, enableSound, customTextColor)
{
	if(enableSound == null)
		enableSound = true;
	if(customTextColor == null)
		customTextColor = MinecraftButtonLibrary.defaultButtonTextColor;
	
	var action = motionEvent.getActionMasked();
	if(action == android.view.MotionEvent.ACTION_DOWN)
	{
		// button pressed
		MinecraftButtonLibrary.changeToPressedState(v);
	}
	if(action == android.view.MotionEvent.ACTION_CANCEL || action == android.view.MotionEvent.ACTION_UP)
	{
		// button released
		MinecraftButtonLibrary.changeToNormalState(v, customTextColor);
		
		var rect = new android.graphics.Rect(v.getLeft(), v.getTop(), v.getRight(), v.getBottom());
		if(rect.contains(v.getLeft() + motionEvent.getX(), v.getTop() + motionEvent.getY())) // detect if the event happens inside the view
		{
			// onClick will run soon

			// play sound
			if(enableSound)
				Level.playSoundEnt(getPlayerEnt(), "random.click", 100, 0);
		}
	}
	if(action == android.view.MotionEvent.ACTION_MOVE)
	{
		var rect = new android.graphics.Rect(v.getLeft(), v.getTop(), v.getRight(), v.getBottom());
		if(rect.contains(v.getLeft() + motionEvent.getX(), v.getTop() + motionEvent.getY())) // detect if the event happens inside the view
		{
			// pointer inside the view
			if(v.getTag() == false)
			{
				// restore pressed state
				v.setTag(true); // is pressed?

				MinecraftButtonLibrary.changeToPressedState(v);
			}
		} else
		{
			// pointer outside the view
			if(v.getTag() == true)
			{
				// restore pressed state
				v.setTag(false); // is pressed?

				MinecraftButtonLibrary.changeToNormalState(v, customTextColor);
			}
		}
	}
}
// ######### END - BUTTON UTILS functions #########


// ######### UTILS functions #########
MinecraftButtonLibrary.getImageFromTexturePack = function(path)
{
	// note: throw error if the image wasn't found
	var bytes = ModPE.getBytesFromTexturePack(path);
	return android.graphics.BitmapFactory.decodeByteArray(bytes, 0, bytes.length);
}

MinecraftButtonLibrary.scaleBitmapToSize = function(image, width, height, filter)
{
	if(filter == null)
		filter = false;
	return android.graphics.Bitmap.createScaledBitmap(image, Math.round(width), Math.round(height), filter);
}

MinecraftButtonLibrary.deleteFile = function(path)
{
	var file = new java.io.File(path);

	if(file.isDirectory())
	{
		var directoryFiles = file.listFiles();
		for(var i in directoryFiles)
		{
			deleteFile(directoryFiles[i].getAbsolutePath());
		}
		file['delete']();
	}

	if(file.isFile())
		file['delete']();
}
// ######### END - UTILS functions #########

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
 
var parentView = CONTEXT.getWindow().getDecorView();
 
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
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			virtualWorldView = new GLSurfaceView(CONTEXT);
			virtualWorldView.setZOrderOnTop(true);
			virtualWorldView.setEGLConfigChooser(8, 8, 8, 8, 16, 0);
			virtualWorldView.getHolder().setFormat(PixelFormat_.TRANSLUCENT);
			virtualWorldView.setRenderer(VertexClientPE.Render.renderer);
			 
			parentView.addView(virtualWorldView);
		}
	});
}

VertexClientPE.Render.deinitViews = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			if(virtualWorldView != null && virtualWorldView != undefined) {
				parentView.removeView(virtualWorldView);
			}
		}
	});
}

VertexClientPE.drawCubeShapedBox = function(gl, x, y, z) { //many thanks to GodSoft029, be sure to follow him on Twitter
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
	gl.glTranslatef(-x, -y, -z);
}

var userIsNewToCurrentVersion = false;

var mainMenuTextList;
var GUI;
var screenUI;
var accountManagerGUI;
var menu;
var fullScreenMenu;
var exitUI;
var exitWebBrowserUI;
var reloadWebBrowserUI;
var exitScreenUI;
var pauseUtilitiesUI;
var healthDisplayUI;
var rotationPlusUI;
var vertexclientpemiscmenu;
var hacksList;
var tabGUI;
var shortcutGUI;

/**
 * #########
 *  MODULES
 * #########
 */

VertexClientPE.addView = function(layout, modButtonView) {
	try {
		layout.addView(modButtonView.getLayout());
	} catch(e) {
		clientMessage("Error: " + e);
		VertexClientPE.showBugReportDialog(e);
	}
};

VertexClientPE.category = {
	COMBAT: 0,
	WORLD: 1,
	MOVEMENT: 2,
	PLAYER: 3,
	MISC: 4,
	toName: function(category) {
		switch(category) {
			case this.COMBAT:
				return combatName;
			case this.WORLD:
				return worldName;
			case this.MOVEMENT:
				return movementName;
			case this.PLAYER:
				return playerName;
			case this.MISC:
				return miscName;
		}
	},
	toRealName: function(category) {
		switch(category) {
			case this.COMBAT:
				return "Combat";
			case this.WORLD:
				return "World";
			case this.MOVEMENT:
				return "Movement";
			case this.PLAYER:
				return "Player";
			case this.MISC:
				return "Miscellaneous";
		}
	}
};

VertexClientPE.tiles = [];
VertexClientPE.preInitModules = [];
VertexClientPE.modules = [];
VertexClientPE.addons = [];

VertexClientPE.loadAddons = function() {
	if(Launcher.isBlockLauncher() || Launcher.isToolbox()) {
		ScriptManager__.callScriptMethod("addonLoadHook", []);
	}
	if(Launcher.isMcpeMaster()) {
		ScriptManager_.callScriptMethod("addonLoadHook", []);
	}
};

VertexClientPE.registerTile = function(obj) {
	VertexClientPE.tiles.push(obj);
};

var settingsTile = {
	text: "Settings",
	color: "green",
	icon: android.R.drawable.ic_menu_preferences,
	forceLightColor: true,
	shouldDismissDashboard: true,
	onClick: function(fromDashboard) {
		settingsScreen();
		VertexClientPE.showExitButtons(fromDashboard);
	}
}

var modManagerTile = {
	text: "Mod Manager",
	color: "orange",
	icon: android.R.drawable.ic_menu_manage,
	forceLightColor: false,
	shouldDismissDashboard: true,
	onClick: function(fromDashboard) {
		modManagerScreen();
		VertexClientPE.showExitButtons(fromDashboard);
	}
}

var friendManagerTile = {
	text: "Friend Manager",
	color: "black",
	icon: android.R.drawable.ic_menu_manage,
	forceLightColor: false,
	shouldDismissDashboard: true,
	onClick: function(fromDashboard) {
		VertexClientPE.showFriendManager(fromDashboard);
	}
}

var informationTile = {
	text: "Information",
	color: "yellow",
	icon: android.R.drawable.ic_menu_info_details,
	forceLightColor: false,
	shouldDismissDashboard: true,
	onClick: function(fromDashboard) {
		informationScreen();
		VertexClientPE.showExitButtons(fromDashboard);
	}
}

var updateCenterTile = {
	text: "Update Center",
	color: "white",
	icon: android.R.drawable.ic_menu_compass,
	forceLightColor: false,
	shouldDismissDashboard: true,
	onClick: function(fromDashboard) {
		updateCenterScreen();
		VertexClientPE.showExitButtons(fromDashboard);
	}
}

var musicPlayerTile = {
	text: "Music Player",
	color: "blue",
	icon: android.R.drawable.ic_media_play,
	forceLightColor: false,
	shouldDismissDashboard: true,
	onClick: function(fromDashboard) {
		musicPlayerScreen();
		VertexClientPE.showExitButtons(fromDashboard);
	}
}

var christmasTile = {
	text: "Christmas",
	color: "red",
	icon: android.R.drawable.ic_menu_agenda,
	forceLightColor: false,
	shouldDismissDashboard: true,
	usesCustomDrawable: function() {
		return false;
	},
	checkBeforeAdding: function() {
		return VertexClientPE.Utils.month == java.util.Calendar.DECEMBER || VertexClientPE.isDevMode();
	},
	onClick: function(fromDashboard) {
		christmasScreen();
		VertexClientPE.showExitButtons(fromDashboard);
	}
}

var previewTile = {
	text: "Preview",
	color: "violet",
	icon: android.R.drawable.ic_menu_gallery,
	forceLightColor: false,
	shouldDismissDashboard: true,
	onClick: function(fromDashboard) {
		previewScreen();
		VertexClientPE.showExitButtons(fromDashboard);
	}
}

var milestonesTile = {
	text: "Milestones",
	color: "grey",
	icon: android.R.drawable.ic_menu_agenda,
	forceLightColor: false,
	shouldDismissDashboard: true,
	onClick: function(fromDashboard) {
		milestonesScreen();
		VertexClientPE.showExitButtons(fromDashboard);
	}
}

var helpTile = {
	text: "Help",
	color: "purple",
	icon: android.R.drawable.ic_menu_help,
	forceLightColor: false,
	shouldDismissDashboard: true,
	onClick: function(fromDashboard) {
		helpScreen();
		VertexClientPE.showExitButtons(fromDashboard);
	}
}

var addonsTile = {
	text: "Addons",
	color: "blue",
	icon: android.R.drawable.ic_menu_more,
	forceLightColor: true,
	shouldDismissDashboard: true,
	onClick: function(fromDashboard) {
		addonScreen();
		VertexClientPE.showExitButtons(fromDashboard);
	}
}

var shareTile = {
	text: "Share",
	color: "brown",
	icon: android.R.drawable.ic_menu_share,
	forceLightColor: false,
	shouldDismissDashboard: false,
	onClick: function(fromDashboard) {
		var sendIntent = new Intent_();
		sendIntent.setAction(Intent_.ACTION_SEND);
		sendIntent.putExtra(Intent_.EXTRA_TEXT, "I use Vertex Client PE! Get it yourself at http://Vertex-Client.ml/. :D");
		sendIntent.setType("text/plain");
		CONTEXT.startActivity(sendIntent);
	}
}
var blockLauncherSettingsTile = {
	text: "BlockLauncher Settings",
	color: "black",
	icon: net.zhuoweizhang.mcpelauncher.R.drawable.ic_menu_settings_holo_light,
	forceLightColor: false,
	shouldDismissDashboard: false,
	checkBeforeAdding: function() {
		return Launcher.isBlockLauncher();
	},
	onClick: function(fromDashboard) {
		var blIntent = new Intent_(CONTEXT, MainMenuOptionsActivity_);
		CONTEXT.startActivity(blIntent);
	}
}

var devSettingsTile = {
	text: "Developer Settings",
	color: "orange",
	icon: android.R.drawable.ic_menu_report_image,
	forceLightColor: false,
	shouldDismissDashboard: true,
	checkBeforeAdding: function() {
		return VertexClientPE.isDevMode();
	},
	onClick: function(fromDashboard) {
		devSettingsScreen();
		VertexClientPE.showExitButtons(fromDashboard);
	}
}

var jsConsoleTile = {
	text: "JavaScript Console",
	color: "orange",
	icon: android.R.drawable.ic_menu_report_image,
	forceLightColor: false,
	shouldDismissDashboard: false,
	checkBeforeAdding: function() {
		return VertexClientPE.isDevMode();
	},
	onClick: function(fromDashboard) {
		VertexClientPE.showJavascriptConsoleDialog();
	}
}

var restartTile = {
	text: "Restart",
	color: "green",
	icon: android.R.drawable.ic_menu_rotate,
	forceLightColor: false,
	shouldDismissDashboard: false,
	onClick: function(fromDashboard) {
		ModPE.restart();
	}
}

var shutdownTile = {
	text: "Shutdown",
	color: "red",
	icon: android.R.drawable.ic_lock_power_off,
	forceLightColor: true,
	shouldDismissDashboard: false,
	onClick: function(fromDashboard) {
		ModPE.restart();
	}
}

VertexClientPE.registerTile(settingsTile);
VertexClientPE.registerTile(modManagerTile);
VertexClientPE.registerTile(friendManagerTile);
VertexClientPE.registerTile(informationTile);
VertexClientPE.registerTile(updateCenterTile);
VertexClientPE.registerTile(musicPlayerTile);
VertexClientPE.registerTile(christmasTile);
VertexClientPE.registerTile(previewTile);
VertexClientPE.registerTile(milestonesTile);
VertexClientPE.registerTile(helpTile);
VertexClientPE.registerTile(addonsTile);
VertexClientPE.registerTile(shareTile);
VertexClientPE.registerTile(blockLauncherSettingsTile);
VertexClientPE.registerTile(devSettingsTile);
VertexClientPE.registerTile(jsConsoleTile);
VertexClientPE.registerTile(restartTile);
VertexClientPE.registerTile(shutdownTile);

VertexClientPE.initMods = function() {
	try {
		VertexClientPE.preInitModules.forEach(function(element, index, array) {
			if((element.type == "Command" || (element.pack == "Combat" && combatEnabled == "on") || (element.pack == "World" && worldEnabled == "on") || (element.pack == "Movement" && movementEnabled == "on") || (element.pack == "Player" && playerEnabled == "on") || (element.pack == "Miscellaneous" && miscEnabled == "on")) && !(element.singleplayerOnly && singleplayerEnabled == "off")) {
				VertexClientPE.modules.push(element);
			}
		});
	} finally {
		delete VertexClientPE.preInitModules;
	}
}

VertexClientPE.registerModule = function(obj) {
	if(obj.type != "Command" && (obj.pack == undefined || obj.pack == null)) {
		obj.pack = VertexClientPE.category.toRealName(obj.category);
	}
	VertexClientPE.preInitModules.push(obj);
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

const ScriptableObject_ = org.mozilla.javascript.ScriptableObject;

function registerAddon(name, desc, current_version, target_version, mods, songs, tiles, author) {
	var shouldMessage = true;
	if(!VertexClientPE.isPro()) {
		if(!shownAddonProDialog) {
			VertexClientPE.showProDialog("Loading addons");
			shownAddonProDialog = true;
		}
		return;
	}
	try {
		let scripts;
		if(Launcher.isBlockLauncher() || Launcher.isToolbox()) {
			scripts = ScriptManager__.scripts;
		} else {
			scripts = ScriptManager_.scripts;
		}
		let scriptName;
		for(var i = 0; i < scripts.size(); i++) {
			var script = scripts.get(i);
			var scope = script.scope;
			if(ScriptableObject_.hasProperty(scope, "ADDON_NAME") && ScriptableObject_.hasProperty(scope, "ADDON_VERSION")) {
				if(ScriptableObject_.getProperty(scope, "ADDON_NAME") == name && ScriptableObject_.getProperty(scope, "ADDON_VERSION") == current_version) {
					scriptName = script.name;
					break;
				}
			}
		}
		VertexClientPE.addons.push({
			name: name,
			desc: desc,
			author: author==null?"Unknown":author,
			current_version: current_version,
			target_version: target_version,
			scriptName: scriptName
		});
		registerModulesFromAddon(mods);
		registerSongsFromAddon(songs);
		registerTilesFromAddon(tiles);
	} catch(e) {
		shouldMessage = false;
		VertexClientPE.toast("An error occurred while loading addons: " + e);
	}
	
	if(shouldMessage) {
		VertexClientPE.addonLoadToast("Successfully loaded the " + name + " addon!");
	}
}

function registerModulesFromAddon(modArray) {
	modArray.forEach(function (element, index, array) {
		if(element != null) {
			VertexClientPE.registerModule(element);
		}
	});
}

function registerSongsFromAddon(songArray) {
	if(songArray != null) {
		songArray.forEach(function (element, index, array) {
			if(element != null && element.source != null && element.source != undefined) {
				VertexClientPE.MusicUtils.registerSong(element, true);
			}
		});
	}
}

function registerTilesFromAddon(tileArray) {
	if(tileArray != null) {
		tileArray.forEach(function (element, index, array) {
			if(element != null && element.source != null && element.source != undefined) {
				VertexClientPE.registerTile(element);
			}
		});
	}
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
	desc: "Disables all modules of the selected categories at once.",
	category: VertexClientPE.category.MISC,
	type: "Mod",
	getSettingsLayout: function() {
		var panicSettingsLayout = new LinearLayout_(CONTEXT);
		panicSettingsLayout.setOrientation(1);
		
		var panicCombatCheckBox = new CheckBox_(CONTEXT);
		panicCombatCheckBox.setChecked(panicCombatSetting == "on");
		panicCombatCheckBox.setText("Combat");
		if(themeSetting == "white") {
			panicCombatCheckBox.setTextColor(Color_.BLACK);
		} else {
			panicCombatCheckBox.setTextColor(Color_.WHITE);
		}
		panicCombatCheckBox.setTypeface(VertexClientPE.font);
		if(fontSetting == "minecraft") {
			MinecraftButtonLibrary.addMinecraftStyleToTextView(panicCombatCheckBox);
		}
		panicCombatCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				panicCombatSetting = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});
		
		var panicWorldCheckBox = new CheckBox_(CONTEXT);
		panicWorldCheckBox.setChecked(panicWorldSetting == "on");
		panicWorldCheckBox.setText("World");
		if(themeSetting == "white") {
			panicWorldCheckBox.setTextColor(Color_.BLACK);
		} else {
			panicWorldCheckBox.setTextColor(Color_.WHITE);
		}
		panicWorldCheckBox.setTypeface(VertexClientPE.font);
		if(fontSetting == "minecraft") {
			MinecraftButtonLibrary.addMinecraftStyleToTextView(panicWorldCheckBox);
		}
		panicWorldCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				panicWorldSetting = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});
		
		var panicMovementCheckBox = new CheckBox_(CONTEXT);
		panicMovementCheckBox.setChecked(panicMovementSetting == "on");
		panicMovementCheckBox.setText("Movement");
		if(themeSetting == "white") {
			panicMovementCheckBox.setTextColor(Color_.BLACK);
		} else {
			panicMovementCheckBox.setTextColor(Color_.WHITE);
		}
		panicMovementCheckBox.setTypeface(VertexClientPE.font);
		if(fontSetting == "minecraft") {
			MinecraftButtonLibrary.addMinecraftStyleToTextView(panicMovementCheckBox);
		}
		panicMovementCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				panicMovementSetting = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});
		
		var panicPlayerCheckBox = new CheckBox_(CONTEXT);
		panicPlayerCheckBox.setChecked(panicPlayerSetting == "on");
		panicPlayerCheckBox.setText("Player");
		if(themeSetting == "white") {
			panicPlayerCheckBox.setTextColor(Color_.BLACK);
		} else {
			panicPlayerCheckBox.setTextColor(Color_.WHITE);
		}
		panicPlayerCheckBox.setTypeface(VertexClientPE.font);
		if(fontSetting == "minecraft") {
			MinecraftButtonLibrary.addMinecraftStyleToTextView(panicPlayerCheckBox);
		}
		panicPlayerCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				panicPlayerSetting = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});
		
		var panicMiscCheckBox = new CheckBox_(CONTEXT);
		panicMiscCheckBox.setChecked(panicMiscSetting == "on");
		panicMiscCheckBox.setText("Misc");
		if(themeSetting == "white") {
			panicMiscCheckBox.setTextColor(Color_.BLACK);
		} else {
			panicMiscCheckBox.setTextColor(Color_.WHITE);
		}
		panicMiscCheckBox.setTypeface(VertexClientPE.font);
		if(fontSetting == "minecraft") {
			MinecraftButtonLibrary.addMinecraftStyleToTextView(panicMiscCheckBox);
		}
		panicMiscCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				panicMiscSetting = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});
		
		panicSettingsLayout.addView(panicCombatCheckBox);
		panicSettingsLayout.addView(panicWorldCheckBox);
		panicSettingsLayout.addView(panicMovementCheckBox);
		panicSettingsLayout.addView(panicPlayerCheckBox);
		panicSettingsLayout.addView(panicMiscCheckBox);
		return panicSettingsLayout;
	},
	isStateMod: function() {
		return false;
	},
	onToggle: function() {
		VertexClientPE.modules.forEach(function (element, index, array) {
			if(element.isStateMod() && element.state) {
				if((element.category == VertexClientPE.category.COMBAT && panicCombatSetting == "on") || (element.category == VertexClientPE.category.WORLD && panicWorldSetting == "on") || (element.category == VertexClientPE.category.MOVEMENT && panicMovementSetting == "on") || (element.category == VertexClientPE.category.PLAYER && panicPlayerSetting == "on") || (element.category == VertexClientPE.category.MISC && panicMiscSetting == "on")) {
					element.onToggle();
				}
			}
		});
		if(VertexClientPE.menuIsShowing) {
			VertexClientPE.shouldUpdateGUI = true;
			VertexClientPE.closeMenu();
			VertexClientPE.showMenu();
		}
		if(tabGUI != null) {
			if(tabGUI.isShowing()) {
				tabGUI.dismiss();
				showTabGUI();
			}
		}
		if(shortcutGUI != null) {
			if(shortcutGUI.isShowing()) {
				shortcutGUI.dismiss();
				showShortcuts();
			}
		}
		if(healthDisplayUI != null) {
			if(healthDisplayUI.isShowing()) {
				healthDisplayUI.dismiss();
				showHealthDisplay();
			}
		}
		if(rotationPlusUI != null) {
			if(rotationPlusUI.isShowing()) {
				rotationPlusUI.dismiss();
				showRotationPlus();
			}
		}
		if(hacksList != null && hacksList.isShowing()) {
			updateHacksList();
		}
	}
};

var bypass = {
	name: "Bypass",
	desc: "Blocks mods that cannot bypass common anti cheat plugins.",
	category: VertexClientPE.category.MISC,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		bypassState = this.state;
		if(VertexClientPE.menuIsShowing) {
			VertexClientPE.shouldUpdateGUI = true;
			VertexClientPE.closeMenu();
			VertexClientPE.showMenu();
		}
		if(tabGUI != null) {
			if(tabGUI.isShowing()) {
				tabGUI.dismiss();
				showTabGUI();
			}
		}
		if(shortcutGUI != null) {
			if(shortcutGUI.isShowing()) {
				shortcutGUI.dismiss();
				showShortcuts();
			}
		}
		if(healthDisplayUI != null) {
			if(healthDisplayUI.isShowing()) {
				healthDisplayUI.dismiss();
				showHealthDisplay();
			}
		}
		if(rotationPlusUI != null) {
			if(rotationPlusUI.isShowing()) {
				rotationPlusUI.dismiss();
				showRotationPlus();
			}
		}
		if(hacksList != null && hacksList.isShowing()) {
			updateHacksList();
		}
	}
};

var switchGamemode = {
	name: "Switch Gamemode",
	desc: "Switches your gamemode.",
	category: VertexClientPE.category.MISC,
	type: "Mod",
	getSettingsLayout: function() {
		var switchGamemodeSettingsLayout = new LinearLayout_(CONTEXT);
		switchGamemodeSettingsLayout.setOrientation(1);
		
		var sendCommandCheckBox = new CheckBox_(CONTEXT);
		sendCommandCheckBox.setChecked(switchGamemodeSendCommandSetting == "on");
		sendCommandCheckBox.setText("Send gamemode command to server when switching gamemode");
		if(themeSetting == "white") {
			sendCommandCheckBox.setTextColor(Color_.BLACK);
		} else {
			sendCommandCheckBox.setTextColor(Color_.WHITE);
		}
		sendCommandCheckBox.setTypeface(VertexClientPE.font);
		if(fontSetting == "minecraft") {
			MinecraftButtonLibrary.addMinecraftStyleToTextView(sendCommandCheckBox);
		}
		sendCommandCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				switchGamemodeSendCommandSetting = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});
		
		switchGamemodeSettingsLayout.addView(sendCommandCheckBox);
		return switchGamemodeSettingsLayout;
	},
	isStateMod: function() {
		return false;
	},
	onToggle: function() {
		if(Level.getGameMode() == 0) {
			Level.setGameMode(1);
			if(switchGamemodeSendCommandSetting == "on") {
				Server.sendChat("/gamemode 1");
			}
		} else if(Level.getGameMode() == 1) {
			Level.setGameMode(0);
			if(switchGamemodeSendCommandSetting == "on") {
				Server.sendChat("/gamemode 0");
			}
		}
	}
};

var killAura = {
	name: "Killaura",
	desc: "Automatically kills all the near entities.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	singleplayerOnly: true,
	getSettingsLayout: function() {
		var killAuraSettingsLayout = new LinearLayout_(CONTEXT);
		killAuraSettingsLayout.setOrientation(1);
		var killAuraRangeTitle = clientTextView("Range: | " + killAuraRange);
		var killAuraRangeSlider = clientSeekBar();
		killAuraRangeSlider.setProgress(killAuraRange);
		killAuraRangeSlider.setMax(10);
		killAuraRangeSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				killAuraRange = killAuraRangeSlider.getProgress();
				killAuraRangeTitle.setText("Range: | " + killAuraRange);
			}
		});
		killAuraSettingsLayout.addView(killAuraRangeTitle);
		killAuraSettingsLayout.addView(killAuraRangeSlider);
		return killAuraSettingsLayout;
	},
	onModDialogDismiss: function() {
		VertexClientPE.saveMainSettings();
	},
	isStateMod: function() {
		return true;
	},
	canBypassBypassMod: function() {
		return false;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		let mob = VertexClientPE.Utils.Player.getNearestMob(killAuraRange);
		if(mob != null && Entity.getHealth(mob) != 0) {
			if(autoSwordState) {
				VertexClientPE.autoSword(getPlayerEnt(), mob);
			}
			switch(Entity.getEntityTypeId(mob)) {
				case EntityType.COW:
					Level.playSoundEnt(mob, "mob.cowhurt");
					break;
				case EntityType.CHICKEN:
					Level.playSoundEnt(mob, "mob.chickenhurt");
					break;
				case EntityType.ZOMBIE:
					Level.playSoundEnt(mob, "mob.zombiehurt");
					break;
				case EntityType.SKELETON:
					Level.playSoundEnt(mob, "mob.skeletonhurt");
					break;
				case EntityType.PIG_ZOMBIE:
					Level.playSoundEnt(mob, "mob.zombiepig.zpighurt");
					break;
				default:
					Level.playSoundEnt(mob, "random.hurt");
					break;
			}
			Entity.setHealth(mob, 0);
		}
	}
};

var freezeAura = {
	name: "FreezeAura",
	desc: "Automatically freezes all the near entities.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	singleplayerOnly: true,
	isStateMod: function() {
		return true;
	},
	canBypassBypassMod: function() {
		return false;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		let mob = VertexClientPE.Utils.Player.getNearestMob(4);
		if(mob != null) {
			Entity.setImmobile(mob, true);
		}
	}
};

var fireAura = {
	name: "FireAura",
	desc: "Sets all the near entities on fire.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	singleplayerOnly: true,
	isStateMod: function() {
		return true;
	},
	canBypassBypassMod: function() {
		return false;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		let mob = VertexClientPE.Utils.Player.getNearestMob(4);
		if(mob != null) {
			Entity.setFireTicks(mob, 100);
		}
	}
};

var autoSword = {
	name: "AutoSword",
	desc: "Automatically selects the best sword for you when attacking entities if available.",
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
	category: VertexClientPE.category.PLAYER,
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
	category: VertexClientPE.category.WORLD,
	type: "Mod",
	state: false,
	getSettingsLayout: function() {
		var timerSettingsLayout = new LinearLayout_(CONTEXT);
		timerSettingsLayout.setOrientation(1);
		var timerSpeedTitle = clientTextView("Speed: | " + timerSpeed + " * 20 ticks");
		var timerSpeedSlider = clientSeekBar();
		timerSpeedSlider.setProgress(timerSpeed);
		timerSpeedSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				timerSpeed = timerSpeedSlider.getProgress();
				timerSpeedTitle.setText("Speed: | " + timerSpeed + " * 20 ticks");
				if(this.state) {
					ModPE.setGameSpeed(20 * timerSpeed);
				}
			}
		});
		timerSettingsLayout.addView(timerSpeedTitle);
		timerSettingsLayout.addView(timerSpeedSlider);
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
	desc: "Automatically destroys blocks around you. Can be used on servers when Bypass is enabled.",
	category: VertexClientPE.category.WORLD,
	type: "Mod",
	state: false,
	getExtraInfo: function() {
		return capitalizeFirstLetter(nukerMode);
	},
	getSettingsLayout: function() {
		var nukerSettingsLayout = new LinearLayout_(CONTEXT);
		nukerSettingsLayout.setOrientation(1);
		var nukerRangeTitle = clientTextView("Range: | " + nukerRange);
		var nukerRangeSlider = clientSeekBar();
		nukerRangeSlider.setProgress(nukerRange);
		nukerRangeSlider.setMax(10);
		nukerRangeSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				nukerRange = nukerRangeSlider.getProgress();
				nukerRangeTitle.setText("Range: | " + nukerRange);
			}
		});
		var nukerModeTitle = clientTextView("\nMode:");
		var nukerModeCubeButton = clientButton("Cube", "Normal mode which destroys blocks in the shape of a cube");
		nukerModeCubeButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 6 - 20 / 3, display.heightPixels / 10));
		var nukerModeFlatButton = clientButton("Flat", "Flat mode which flats the ground");
		nukerModeFlatButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 6 - 20 / 3, display.heightPixels / 10));
		var nukerModeSmashButton = clientButton("Smash", "Smash mode which only breaks blocks with a destroy time of 0");
		nukerModeSmashButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 6 - 20 / 3, display.heightPixels / 10));
		
		var nukerRangeTitle = clientTextView("Range: | " + nukerRange);
		var nukerModeLayout = new LinearLayout_(CONTEXT);
		nukerModeLayout.setOrientation(LinearLayout_.HORIZONTAL);
		
		var nukerModeLayoutLeft = new LinearLayout_(CONTEXT);
		nukerModeLayoutLeft.setOrientation(1);
		nukerModeLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3 - 20 / 3, display.heightPixels / 10));
		nukerModeLayoutLeft.setGravity(Gravity_.CENTER_HORIZONTAL);
		nukerModeLayout.addView(nukerModeLayoutLeft);
		
		var nukerModeLayoutCenter = new LinearLayout_(CONTEXT);
		nukerModeLayoutCenter.setOrientation(1);
		nukerModeLayoutCenter.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3 - 20 / 3, display.heightPixels / 10));
		nukerModeLayoutCenter.setGravity(Gravity_.CENTER_HORIZONTAL);
		nukerModeLayout.addView(nukerModeLayoutCenter);
		
		var nukerModeLayoutRight = new LinearLayout_(CONTEXT);
		nukerModeLayoutRight.setOrientation(1);
		nukerModeLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3 - 20 / 3, display.heightPixels / 10));
		nukerModeLayoutRight.setGravity(Gravity_.CENTER_HORIZONTAL);
		nukerModeLayout.addView(nukerModeLayoutRight);
		
		nukerModeLayoutLeft.addView(nukerModeCubeButton);
		nukerModeLayoutCenter.addView(nukerModeFlatButton);
		nukerModeLayoutRight.addView(nukerModeSmashButton);
		if(nukerMode == "cube") {
			nukerModeCubeButton.setTextColor(Color_.GREEN);
		}if(nukerMode == "flat") {
			nukerModeFlatButton.setTextColor(Color_.GREEN);
		}if(nukerMode == "smash") {
			nukerModeSmashButton.setTextColor(Color_.GREEN);
		}
		nukerModeCubeButton.setOnClickListener(new View_.OnClickListener() {
			onClick: function(view) {
				nukerMode = "cube";
				nukerModeCubeButton.setTextColor(Color_.GREEN);
				nukerModeFlatButton.setTextColor(Color_.WHITE);
				nukerModeSmashButton.setTextColor(Color_.WHITE);
				VertexClientPE.saveMainSettings();
				VertexClientPE.loadMainSettings();
			}
		});
		nukerModeFlatButton.setOnClickListener(new View_.OnClickListener() {
			onClick: function(view) {
				nukerMode = "flat";
				nukerModeCubeButton.setTextColor(Color_.WHITE);
				nukerModeFlatButton.setTextColor(Color_.GREEN);
				nukerModeSmashButton.setTextColor(Color_.WHITE);
				VertexClientPE.saveMainSettings();
				VertexClientPE.loadMainSettings();
			}
		});
		nukerModeSmashButton.setOnClickListener(new View_.OnClickListener() {
			onClick: function(view) {
				nukerMode = "smash";
				nukerModeCubeButton.setTextColor(Color_.WHITE);
				nukerModeFlatButton.setTextColor(Color_.WHITE);
				nukerModeSmashButton.setTextColor(Color_.GREEN);
				VertexClientPE.saveMainSettings();
				VertexClientPE.loadMainSettings();
			}
		});
		nukerSettingsLayout.addView(nukerRangeTitle);
		nukerSettingsLayout.addView(nukerRangeSlider);
		nukerSettingsLayout.addView(nukerModeTitle);
		nukerSettingsLayout.addView(nukerModeLayout);
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
		nuke(x, y, z, nukerRange, nukerMode);
	}
};

var fancyChatMsg;
var fancyChatEndChar;

var fancyChat = {
	name: "FancyChat",
	desc: "Replaces characters in sent chat messages by fancy unicode characters. Can be used to bypass curse word filters on some servers.",
	category: VertexClientPE.category.PLAYER,
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
			CONTEXT.nativeSetTextboxText("");
			CONTEXT.updateTextboxText("");
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
	singleplayerOnly: true,
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
	tick: 1,
	firstY: null,
	nextY: null,
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
		/* if(bypassState) {
			if(this.tick == 1) {
				this.firstY = getPlayerY();
			}
			if(this.tick == 10) {
				this.nextY = getPlayerY();
				if((this.nextY - this.firstY) >= 0.5) {
					Entity.setPositionRelative(getPlayerEnt(), 0, 0.5, 0);
					Entity.setVelY(getPlayerEnt(), 0);
				}
				this.tick = 1;
			}
			this.tick++;
		} */
	}
};

var pointTeleport = {
	name: "PointTeleport",
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

var tapTeleport = {
	name: "TapTeleport",
	desc: "Teleports you wherever you tap.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	shouldPreventDefault: true,
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

var phase = {
	name: "Phase",
	desc: "Makes you able to walk through walls.",
	category: VertexClientPE.category.PLAYER,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		Entity.setCollisionSize(getPlayerEnt(), this.state?0:0.6, this.state?0:1.8);
	}
};

var fastBreak = {
	name: "FastBreak",
	desc: "Allows you to decrease block destroy times.",
	category: VertexClientPE.category.PLAYER,
	type: "Mod",
	state: false,
	getSettingsLayout: function() {
		var fastBreakSettingsLayout = new LinearLayout_(CONTEXT);
		fastBreakSettingsLayout.setOrientation(1);
		var fastBreakDestroyTimeTxt;
		if(fastBreakDestroyTime == 0) {
			fastBreakDestroyTimeTxt = "0 (instant)";
		} else {
			fastBreakDestroyTimeTxt = fastBreakDestroyTime;
		}
		var fastBreakDestroyTimeTitle = clientTextView("Destroy time: | " + fastBreakDestroyTimeTxt);
		var fastBreakDestroyTimeSlider = clientSeekBar();
		fastBreakDestroyTimeSlider.setProgress(fastBreakDestroyTime * 100);
		fastBreakDestroyTimeSlider.setMax(100);
		fastBreakDestroyTimeSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				fastBreakDestroyTime = fastBreakDestroyTimeSlider.getProgress() / 100;
				if(fastBreakDestroyTime == 0) {
					fastBreakDestroyTimeTxt = "0 (instant)";
				} else {
					fastBreakDestroyTimeTxt = fastBreakDestroyTime;
				}
				fastBreakDestroyTimeTitle.setText("Destroy time: | " + fastBreakDestroyTimeTxt);
				if(fastBreakState) {
					Block.setDestroyTimeAll(fastBreakDestroyTime);
				}
			}
		});
		
		fastBreakSettingsLayout.addView(fastBreakDestroyTimeTitle);
		fastBreakSettingsLayout.addView(fastBreakDestroyTimeSlider);
		return fastBreakSettingsLayout;
	},
	onModDialogDismiss: function() {
		VertexClientPE.saveMainSettings();
	},
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		fastBreakState = this.state;
		this.state?Block.setDestroyTimeAll(fastBreakDestroyTime):Block.setDestroyTimeDefaultAll();
	}
};

var chatRepeatStage = 0;

var chatRepeat = {
	name: "ChatRepeat",
	desc: "Automatically repeats all the received chat messages. Can be very annoying.",
	category: VertexClientPE.category.PLAYER,
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
	desc: "Automatically spams the player.",
	category: VertexClientPE.category.PLAYER,
	type: "Mod",
	state: false,
	getSettingsLayout: function() {
		var spamUseRandomMsgSettingCheckBox = new CheckBox_(CONTEXT);
		spamUseRandomMsgSettingCheckBox.setChecked(spamUseRandomMsgSetting=="on");
		spamUseRandomMsgSettingCheckBox.setText("Use random messages instead of the custom message");
		if(themeSetting == "white") {
			spamUseRandomMsgSettingCheckBox.setTextColor(Color_.BLACK);
		} else {
			spamUseRandomMsgSettingCheckBox.setTextColor(Color_.WHITE);
		}
		spamUseRandomMsgSettingCheckBox.setTypeface(VertexClientPE.font);
		
		if(fontSetting == "minecraft") {
			MinecraftButtonLibrary.addMinecraftStyleToTextView(spamUseRandomMsgSettingCheckBox);
		}
		spamUseRandomMsgSettingCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				spamUseRandomMsgSetting = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});
		
		var autoSpammerMessageLayout = new LinearLayout_(CONTEXT);
		autoSpammerMessageLayout.setOrientation(1);
		var spamMessageTitle = clientTextView("Custom message:");
		var spamMessageInput = clientEditText();
		spamMessageInput.setText(spamMessage);
		spamMessageInput.setTextColor(Color_.WHITE);
		spamMessageInput.setHint("Spam message");
		spamMessageInput.addTextChangedListener(new TextWatcher_() {
			onTextChanged: function() {
				spamMessage = spamMessageInput.getText();
			}
		});
		
		var spamDelayTimeTitle = clientTextView("Delay time: | " + spamDelayTime + " seconds");
		var spamDelayTimeSlider = clientSeekBar();
		spamDelayTimeSlider.setProgress(spamDelayTime);
		spamDelayTimeSlider.setMax(60);
		spamDelayTimeSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				spamDelayTime = spamDelayTimeSlider.getProgress();
				spamDelayTimeTitle.setText("Delay time: | " + spamDelayTime + " seconds");
			}
		});
		
		autoSpammerMessageLayout.addView(spamUseRandomMsgSettingCheckBox);
		autoSpammerMessageLayout.addView(spamMessageTitle);
		autoSpammerMessageLayout.addView(spamMessageInput);
		autoSpammerMessageLayout.addView(spamDelayTimeTitle);
		autoSpammerMessageLayout.addView(spamDelayTimeSlider);
		
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
		autoSpammerState = this.state;
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
	findPos: function(entity) {
		var playerPos = new Array(getPlayerX(), getPlayerY() + 0.5, getPlayerZ());
		var victimPos = new Array(Entity.getX(entity), Entity.getY(entity), Entity.getZ(entity));
		var diffPos = new Array(victimPos[0] - playerPos[0], null, victimPos[2] - playerPos[2]);
		playerPos[0] += diffPos[0] * 2;
		playerPos[2] += diffPos[2] * 2;
		return playerPos;
	},
	onInterval: function() {
		if(tpAuraStage == 0) {
			tpAuraStage = 1;
			
			let mob = VertexClientPE.Utils.getNearestMob(4);
			if(mob != null) {
				let playerPos = this.findPos(mob);
			
				if (getTile(playerPos[0], playerPos[1], playerPos[2]) == 0 && getTile(playerPos[0], playerPos[1] - 1, playerPos[2]) == 0 && getTile(playerPos[0], playerPos[1] - 2, playerPos[2]) == 0) {
					Entity.setPosition(getPlayerEnt(), playerPos[0], playerPos[1], playerPos[2]);
				}
				
				VertexClientPE.CombatUtils.aimAtEnt(mob);
			}
			
			let player = VertexClientPE.Utils.getNearestPlayer(4);
			if(player != null) {
				let playerPos = this.findPos(player);
			
				if (getTile(playerPos[0], playerPos[1], playerPos[2]) == 0 && getTile(playerPos[0], playerPos[1] - 1, playerPos[2]) == 0 && getTile(playerPos[0], playerPos[1] - 2, playerPos[2]) == 0) {
					Entity.setPosition(getPlayerEnt(), playerPos[0], playerPos[1], playerPos[2]);
				}
				
				VertexClientPE.CombatUtils.aimAtEnt(player);
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
				Entity.setPosition(getPlayerEnt(), playerPos[0], playerPos[1], playerPos[2]);
			}
			
			VertexClientPE.CombatUtils.aimAtEnt(v);
		}
	}
}

var powerExplosionsStage = 0;

var powerExplosions = {
	name: "PowerExplosions",
	desc: "Makes explosions more powerful.",
	category: VertexClientPE.category.WORLD,
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
	category: VertexClientPE.category.WORLD,
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
	category: VertexClientPE.category.WORLD,
	type: "Mod",
	state: false,
	singleplayerOnly: true,
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
	singleplayerOnly: true,
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
	category: VertexClientPE.category.PLAYER,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		let player = getPlayerEnt();
		let yaw = Math.floor(Entity.getYaw(player));
		let pitch = Math.floor(Entity.getPitch(player));
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
		if(Entity.getVelY(getPlayerEnt()) <= 0 && !Player.isFlying()) {
			setVelY(getPlayerEnt(), - 0.07);
		}
	}
}

var autoMine = {
	name: "AutoMine",
	desc: "Automatically mines the block you're looking at.",
	category: VertexClientPE.category.WORLD,
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
	category: VertexClientPE.category.MOVEMENT,
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
			var mob = VertexClientPE.Utils.Player.getNearestMob(10, 2);
			var player = VertexClientPE.Utils.Player.getNearestPlayer(10, 2);
			if(mob != null) {
				let x = Entity.getX(mob) - getPlayerX();
				let y = Entity.getY(mob) - getPlayerY();
				let z = Entity.getZ(mob) - getPlayerZ();
				setVelX(getPlayerEnt(), x * 0.05);
				setVelZ(getPlayerEnt(), z * 0.05);
				setVelY(getPlayerEnt(), y * 0.05);
			}
			if(player != null) {
				let x = Entity.getX(player) - getPlayerX();
				let y = Entity.getY(player) - getPlayerY();
				let z = Entity.getZ(player) - getPlayerZ();
				setVelX(getPlayerEnt(), x * 0.05);
				setVelZ(getPlayerEnt(), z * 0.05);
				setVelY(getPlayerEnt(), y * 0.05);
			}
			followStage = 0;
		}
	}
}

var tapNuker = {
	name: "TapNuker",
	desc: "Destroys blocks wherever you tap.",
	category: VertexClientPE.category.WORLD,
	type: "Mod",
	state: false,
	getSettingsLayout: function() {
		var tapNukerSettingsLayout = new LinearLayout_(CONTEXT);
		tapNukerSettingsLayout.setOrientation(1);
		var tapNukerRangeTitle = clientTextView("Range: | " + tapNukerRange);
		var tapNukerRangeSlider = clientSeekBar();
		tapNukerRangeSlider.setProgress(tapNukerRange);
		tapNukerRangeSlider.setMax(10);
		tapNukerRangeSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				tapNukerRange = tapNukerRangeSlider.getProgress();
				tapNukerRangeTitle.setText("Range: | " + tapNukerRange);
			}
		});
		
		tapNukerSettingsLayout.addView(tapNukerRangeTitle);
		tapNukerSettingsLayout.addView(tapNukerRangeSlider);
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
		nuke(x, y, z, tapNukerRange, "cube");
	}
}

var tapRemover = {
	name: "TapRemover",
	desc: "Removes blocks and entities on tap.",
	category: VertexClientPE.category.WORLD,
	type: "Mod",
	state: false,
	singleplayerOnly: true,
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
	category: VertexClientPE.category.WORLD,
	type: "Mod",
	state: false,
	singleplayerOnly: true,
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
				setTile(x-(side==4?1:0)+(side==5?1:0)+0.5,y-(side==0?1:0)+(side==1?1:0)+0.5,z-(side==2?1:0)+(side==3?1:0)+0.5, blockId, blockData);
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
		Entity.setVelY(getPlayerEnt(), 0.64);
	}
}

var arrowGun = {
	name: "ArrowGun",
	desc: "Automatically shoots arrows wherever you look.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	singleplayerOnly: true,
	getExtraInfo: function() {
		return capitalizeFirstLetter(arrowGunMode);
	},
	getSettingsLayout: function() {
		var arrowGunSettingsLayout = new LinearLayout_(CONTEXT);
		arrowGunSettingsLayout.setOrientation(1);
		
		var arrowGunModeLayout = new LinearLayout_(CONTEXT);
		arrowGunModeLayout.setOrientation(LinearLayout_.HORIZONTAL);
		
		var arrowGunModeTitle = clientTextView("Mode:");
		var arrowGunModeSlowButton = clientButton("Slow", "Slow mode which shoots an arrow every second.");
		arrowGunModeSlowButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
		var arrowGunModeFastButton = clientButton("Fast", "Fast mode which shoots multiple arrows every second.");
		arrowGunModeFastButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
		
		var arrowGunModeLayoutLeft = new LinearLayout_(CONTEXT);
		arrowGunModeLayoutLeft.setOrientation(1);
		arrowGunModeLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - 5, display.heightPixels / 10));
		arrowGunModeLayoutLeft.setGravity(Gravity_.CENTER_HORIZONTAL);
		arrowGunModeLayout.addView(arrowGunModeLayoutLeft);
		
		var arrowGunModeLayoutRight = new LinearLayout_(CONTEXT);
		arrowGunModeLayoutRight.setOrientation(1);
		arrowGunModeLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - 5, display.heightPixels / 10));
		arrowGunModeLayoutRight.setGravity(Gravity_.CENTER_HORIZONTAL);
		arrowGunModeLayout.addView(arrowGunModeLayoutRight);
		
		arrowGunModeLayoutLeft.addView(arrowGunModeSlowButton);
		arrowGunModeLayoutRight.addView(arrowGunModeFastButton);
		if(arrowGunMode == "slow") {
			arrowGunModeSlowButton.setTextColor(Color_.GREEN);
		}if(arrowGunMode == "fast") {
			arrowGunModeFastButton.setTextColor(Color_.GREEN);
		}
		arrowGunModeSlowButton.setOnClickListener(new View_.OnClickListener() {
			onClick: function(view) {
				arrowGunMode = "slow";
				arrowGunModeSlowButton.setTextColor(Color_.GREEN);
				arrowGunModeFastButton.setTextColor(Color_.WHITE);
				VertexClientPE.saveMainSettings();
			}
		});
		arrowGunModeFastButton.setOnClickListener(new View_.OnClickListener() {
			onClick: function(view) {
				arrowGunMode = "fast";
				arrowGunModeSlowButton.setTextColor(Color_.WHITE);
				arrowGunModeFastButton.setTextColor(Color_.GREEN);
				VertexClientPE.saveMainSettings();
			}
		});
		arrowGunSettingsLayout.addView(arrowGunModeTitle);
		arrowGunSettingsLayout.addView(arrowGunModeLayout);
		return arrowGunSettingsLayout;
	},
	shootArrow: function() {
		var p = ((Entity.getPitch(getPlayerEnt()) + 90) * Math.PI) / 180;
		var y = ((Entity.getYaw(getPlayerEnt()) + 90) * Math.PI) / 180;
		var xx = Math.sin(p) * Math.cos(y);
		var yy = Math.sin(p) * Math.sin(y);
		var zz = Math.cos(p);
		var arrow = Level.spawnMob(getPlayerX() + xx, getPlayerY() + zz, getPlayerZ() + yy, 80);
		setVelX(arrow, xx);
		setVelY(arrow, zz);
		setVelZ(arrow, yy);
	},
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onInterval: function() {
		if(arrowGunMode == "slow") {
			this.shootArrow();
		}
	},
	onTick: function() {
		if(arrowGunMode == "fast") {
			this.shootArrow();
		}
	}
}

var orderAPizza = {
	name: "Order a Pizza",
	desc: "Order a pizza of Pizza Hut.",
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
		//var fps = parseInt(VertexClientPE.Utils.fps);
		ModPE.showTipMessage("\n\n\n" + "X: " + x + " Y: " + y + " Z: " + z);
	}
}

var itemGiver = {
	name: "ItemGiver",
	desc: "Adds items to your inventory.",
	category: VertexClientPE.category.PLAYER,
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
		VertexClientPE.healthTags();
	}
}

var autoSwitch = {
	name: "AutoSwitch",
	desc: "Switches the item in your hand all the time.",
	category: VertexClientPE.category.PLAYER,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		if(Player.getSelectedSlotId() < 7) {
			Player.setSelectedSlotId(Player.getSelectedSlotId() + 1);
		} else {
			Player.setSelectedSlotId(0);
		}
	}
}

function toDirectionalVector(vector, yaw, pitch) { //some parts of this function are made by @zhuowei
	vector[0] = Math.cos(yaw) * Math.cos(0);
	vector[1] = Math.sin(pitch);
	vector[2] = Math.sin(yaw) * Math.cos(0);
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
	getExtraInfo: function() {
		return capitalizeFirstLetter(autoWalkDirection);
	},
	getSettingsLayout: function() {
		var autoWalkSettingsLayout = new LinearLayout_(CONTEXT);
		autoWalkSettingsLayout.setOrientation(1);
		
		var autoWalkDirectionLayout = new LinearLayout_(CONTEXT);
		autoWalkDirectionLayout.setOrientation(LinearLayout_.HORIZONTAL);
		
		var autoWalkDirectionTitle = clientTextView("Direction:");
		var autoWalkDirectionForwardButton = clientButton("Forward", "Makes the player move forward.");
		autoWalkDirectionForwardButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
		var autoWalkDirectionBackwardsButton = clientButton("Backwards", "Makes the player move backwards.");
		autoWalkDirectionBackwardsButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
		
		var autoWalkDirectionLayoutLeft = new LinearLayout_(CONTEXT);
		autoWalkDirectionLayoutLeft.setOrientation(1);
		autoWalkDirectionLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - 5, display.heightPixels / 10));
		autoWalkDirectionLayoutLeft.setGravity(Gravity_.CENTER_HORIZONTAL);
		autoWalkDirectionLayout.addView(autoWalkDirectionLayoutLeft);
		
		var autoWalkDirectionLayoutRight = new LinearLayout_(CONTEXT);
		autoWalkDirectionLayoutRight.setOrientation(1);
		autoWalkDirectionLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - 5, display.heightPixels / 10));
		autoWalkDirectionLayoutRight.setGravity(Gravity_.CENTER_HORIZONTAL);
		autoWalkDirectionLayout.addView(autoWalkDirectionLayoutRight);
		
		autoWalkDirectionLayoutLeft.addView(autoWalkDirectionForwardButton);
		autoWalkDirectionLayoutRight.addView(autoWalkDirectionBackwardsButton);
		if(autoWalkDirection == "forward") {
			autoWalkDirectionForwardButton.setTextColor(Color_.GREEN);
		}if(autoWalkDirection == "backwards") {
			autoWalkDirectionBackwardsButton.setTextColor(Color_.GREEN);
		}
		autoWalkDirectionForwardButton.setOnClickListener(new View_.OnClickListener() {
			onClick: function(view) {
				autoWalkDirection = "forward";
				autoWalkDirectionForwardButton.setTextColor(Color_.GREEN);
				autoWalkDirectionBackwardsButton.setTextColor(Color_.WHITE);
				VertexClientPE.saveMainSettings();
			}
		});
		autoWalkDirectionBackwardsButton.setOnClickListener(new View_.OnClickListener() {
			onClick: function(view) {
				autoWalkDirection = "backwards";
				autoWalkDirectionForwardButton.setTextColor(Color_.WHITE);
				autoWalkDirectionBackwardsButton.setTextColor(Color_.GREEN);
				VertexClientPE.saveMainSettings();
			}
		});
		autoWalkSettingsLayout.addView(autoWalkDirectionTitle);
		autoWalkSettingsLayout.addView(autoWalkDirectionLayout);
		return autoWalkSettingsLayout;
	},
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);
		let player = getPlayerEnt();
		let xVel = playerWalkSpeed * playerDir[0];
		let yVel = playerWalkSpeed * playerDir[1];
		let zVel = playerWalkSpeed * playerDir[2];
		if(autoWalkDirection == "backwards") {
			xVel *= -1;
			yVel *= -1;
			zVel *= -1;
		}
		setVelX(player, xVel);
		if(Player.isFlying()) {
			setVelY(player, yVel);
		}
		setVelZ(player, zVel);
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
	category: VertexClientPE.category.WORLD,
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
		if (getPlayerY() - parseInt(getPlayerY()) > 0.8 && VertexClientPE.Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY(), getPlayerZ()))) {
			Entity.setPosition(getPlayerEnt(), getPlayerX(),
			parseInt(getPlayerY()) + 1, getPlayerZ());
			VertexClientPE.debugMessage("Teleported player");
		}
		if (Level.getTile(getPlayerX(), getPlayerY() - 2, getPlayerZ()) == 8 || Level.getTile(getPlayerX(), getPlayerY() - 2, getPlayerZ()) == 9 || Level.getTile(getPlayerX(), getPlayerY() - 2, getPlayerZ()) == 10 || Level.getTile(getPlayerX(), getPlayerY() - 2, getPlayerZ()) == 10) {
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
			if(Entity.getVelY(getPlayerEnt()) > 0.06) {
				Entity.setVelY(getPlayerEnt(), 0.54);
				this.count++;
			}
			if(this.count == 1) {
				Entity.setVelY(getPlayerEnt(), 0.48);
			}
			if(this.count == 2) {
				Entity.setVelY(getPlayerEnt(), 0.42);
			}
			if(this.count == 3) {
				Entity.setVelY(getPlayerEnt(), 0.36);
			}
			if(this.count == 4) {
				Entity.setVelY(getPlayerEnt(), 0.31);
			}
			if(this.count == 5) {
				Entity.setVelY(getPlayerEnt(), 0.26);
			}
			if(this.count == 6) {
				Entity.setVelY(getPlayerEnt(), 0.22);
			}
			if(this.count == 7) {
				Entity.setVelY(getPlayerEnt(), -0.078);
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
	getSettingsLayout: function() {
		var aimbotSettingsLayout = new LinearLayout_(CONTEXT);
		aimbotSettingsLayout.setOrientation(1);
		
		var useKillauraRangeCheckBox = new CheckBox_(CONTEXT);
		useKillauraRangeCheckBox.setChecked(aimbotUseKillauraRange == "on");
		useKillauraRangeCheckBox.setText("Use same range as Killaura");
		if(themeSetting == "white") {
			useKillauraRangeCheckBox.setTextColor(Color_.BLACK);
		} else {
			useKillauraRangeCheckBox.setTextColor(Color_.WHITE);
		}
		useKillauraRangeCheckBox.setTypeface(VertexClientPE.font);
		
		if(fontSetting == "minecraft") {
			MinecraftButtonLibrary.addMinecraftStyleToTextView(useKillauraRangeCheckBox);
		}
		useKillauraRangeCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				aimbotUseKillauraRange = v.isChecked()?"on":"off";
				aimbotRangeSlider.setEnabled(!v.isChecked());
				VertexClientPE.saveMainSettings();
			}
		});
		
		var aimbotRangeTitle = clientTextView("Range: | " + aimbotRangeSetting);
		var aimbotRangeSlider = clientSeekBar();
		aimbotRangeSlider.setProgress(aimbotRangeSetting);
		aimbotRangeSlider.setMax(10);
		aimbotRangeSlider.setEnabled(!useKillauraRangeCheckBox.isChecked());
		aimbotRangeSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				aimbotRangeSetting = aimbotRangeSlider.getProgress();
				aimbotRangeTitle.setText("Range: | " + aimbotRangeSetting);
			}
		});
		
		aimbotSettingsLayout.addView(useKillauraRangeCheckBox);
		aimbotSettingsLayout.addView(aimbotRangeTitle);
		aimbotSettingsLayout.addView(aimbotRangeSlider);
		
		return aimbotSettingsLayout;
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
		let range;
		if(aimbotUseKillauraRange == "off") {
			range = aimbotRangeSetting;
		} else if(aimbotUseKillauraRange == "on") {
			range = killAuraRange;
		}
		let mob = VertexClientPE.Utils.Player.getNearestMob(range);
		let player = VertexClientPE.Utils.Player.getNearestPlayer(range);
		if(mob != null) {
			VertexClientPE.CombatUtils.aimAtEnt(mob);
		}
		if(player != null) {
			VertexClientPE.CombatUtils.aimAtEnt(player);
		}
	}
}

var chestTracers = {
	name: "ChestTracers",
	desc: "Allows you to find chests more easily by moving particles from the chest to underneath you.",
	category: VertexClientPE.category.WORLD,
	type: "Mod",
	state: false,
	getExtraInfo: function() {
		return capitalizeFirstLetter(chestTracersParticle);
	},
	requiresPro: function() {
		return true;
	},
	getSettingsLayout: function() {
		var chestTracersSettingsLayout = new LinearLayout_(CONTEXT);
		chestTracersSettingsLayout.setOrientation(1);
		var chestTracersRangeTitle = clientTextView("Range: | " + chestTracersRange);
		var chestTracersRangeSlider = clientSeekBar();
		chestTracersRangeSlider.setProgress(chestTracersRange);
		chestTracersRangeSlider.setMax(25);
		chestTracersRangeSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				chestTracersRange = chestTracersRangeSlider.getProgress();
				chestTracersRangeTitle.setText("Range: | " + chestTracersRange);
			}
		});
		
		var chestTracersParticleTitle = clientTextView("\nParticle:");
		var chestTracersFlameButton = clientButton("Flame", "Flame particles.");
		chestTracersFlameButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 6 - 20 / 3, display.heightPixels / 10));
		var chestTracersRedstoneButton = clientButton("Redstone", "Redstone particles.");
		chestTracersRedstoneButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 6 - 20 / 3, display.heightPixels / 10));
		var chestTracersCriticalButton = clientButton("Critical", "Critical hit particles.");
		chestTracersCriticalButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 6 - 20 / 3, display.heightPixels / 10));
		
		var chestTracersParticleLayout = new LinearLayout_(CONTEXT);
		chestTracersParticleLayout.setOrientation(LinearLayout_.HORIZONTAL);
		
		var chestTracersParticleLayoutLeft = new LinearLayout_(CONTEXT);
		chestTracersParticleLayoutLeft.setOrientation(1);
		chestTracersParticleLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3 - 20 / 3, display.heightPixels / 10));
		chestTracersParticleLayoutLeft.setGravity(Gravity_.CENTER_HORIZONTAL);
		chestTracersParticleLayout.addView(chestTracersParticleLayoutLeft);
		
		var chestTracersParticleLayoutCenter = new LinearLayout_(CONTEXT);
		chestTracersParticleLayoutCenter.setOrientation(1);
		chestTracersParticleLayoutCenter.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3 - 20 / 3, display.heightPixels / 10));
		chestTracersParticleLayoutCenter.setGravity(Gravity_.CENTER_HORIZONTAL);
		chestTracersParticleLayout.addView(chestTracersParticleLayoutCenter);
		
		var chestTracersParticleLayoutRight = new LinearLayout_(CONTEXT);
		chestTracersParticleLayoutRight.setOrientation(1);
		chestTracersParticleLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3 - 20 / 3, display.heightPixels / 10));
		chestTracersParticleLayoutRight.setGravity(Gravity_.CENTER_HORIZONTAL);
		chestTracersParticleLayout.addView(chestTracersParticleLayoutRight);
		
		if(chestTracersParticle == "flame") {
			chestTracersFlameButton.setTextColor(Color_.GREEN);
		}if(chestTracersParticle == "redstone") {
			chestTracersRedstoneButton.setTextColor(Color_.GREEN);
		}if(chestTracersParticle == "critical") {
			chestTracersCriticalButton.setTextColor(Color_.GREEN);
		}
		chestTracersFlameButton.setOnClickListener(new View_.OnClickListener() {
			onClick: function(view) {
				chestTracersParticle = "flame";
				chestTracersFlameButton.setTextColor(Color_.GREEN);
				chestTracersRedstoneButton.setTextColor(Color_.WHITE);
				chestTracersCriticalButton.setTextColor(Color_.WHITE);
				VertexClientPE.saveMainSettings();
				VertexClientPE.loadMainSettings();
			}
		});
		chestTracersRedstoneButton.setOnClickListener(new View_.OnClickListener() {
			onClick: function(view) {
				chestTracersParticle = "redstone";
				chestTracersFlameButton.setTextColor(Color_.WHITE);
				chestTracersRedstoneButton.setTextColor(Color_.GREEN);
				chestTracersCriticalButton.setTextColor(Color_.WHITE);
				VertexClientPE.saveMainSettings();
				VertexClientPE.loadMainSettings();
			}
		});
		chestTracersCriticalButton.setOnClickListener(new View_.OnClickListener() {
			onClick: function(view) {
				chestTracersParticle = "critical";
				chestTracersFlameButton.setTextColor(Color_.WHITE);
				chestTracersRedstoneButton.setTextColor(Color_.WHITE);
				chestTracersCriticalButton.setTextColor(Color_.GREEN);
				VertexClientPE.saveMainSettings();
				VertexClientPE.loadMainSettings();
			}
		});
		
		chestTracersParticleLayoutLeft.addView(chestTracersFlameButton);
		chestTracersParticleLayoutCenter.addView(chestTracersRedstoneButton);
		chestTracersParticleLayoutRight.addView(chestTracersCriticalButton);
		
		var groundModeCheckBox = new CheckBox_(CONTEXT);
		groundModeCheckBox.setChecked(chestTracersGroundMode == "on");
		groundModeCheckBox.setText("Ground Mode");
		if(themeSetting == "white") {
			groundModeCheckBox.setTextColor(Color_.BLACK);
		} else {
			groundModeCheckBox.setTextColor(Color_.WHITE);
		}
		groundModeCheckBox.setTypeface(VertexClientPE.font);
		if(fontSetting == "minecraft") {
			MinecraftButtonLibrary.addMinecraftStyleToTextView(groundModeCheckBox);
		}
		groundModeCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				chestTracersGroundMode = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});
		
		var space = clientTextView("\n");
		chestTracersSettingsLayout.addView(chestTracersRangeTitle);
		chestTracersSettingsLayout.addView(chestTracersRangeSlider);
		chestTracersSettingsLayout.addView(chestTracersParticleTitle);
		chestTracersSettingsLayout.addView(chestTracersParticleLayout);
		chestTracersSettingsLayout.addView(space);
		chestTracersSettingsLayout.addView(groundModeCheckBox);
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
		for(var blockX = - chestTracersRange; blockX <= chestTracersRange; blockX++) {
			for(var blockY = - chestTracersRange; blockY <= chestTracersRange; blockY++) {
				for(var blockZ = - chestTracersRange; blockZ <= chestTracersRange; blockZ++) {
					let newX = Math.floor(x + blockX);
					let newY = Math.floor(y + blockY);
					let newZ = Math.floor(z + blockZ);
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
	targetEntity: null,
	getSettingsLayout: function() {
		var remoteViewSettingsLayout = new LinearLayout_(CONTEXT);
		remoteViewSettingsLayout.setOrientation(1);
		
		var teleportToLocationCheckBox = new CheckBox_(CONTEXT);
		teleportToLocationCheckBox.setChecked(remoteViewTeleportSetting == "on");
		teleportToLocationCheckBox.setText("Teleport to the target entity when you disable RemoteView");
		if(themeSetting == "white") {
			teleportToLocationCheckBox.setTextColor(Color_.BLACK);
		} else {
			teleportToLocationCheckBox.setTextColor(Color_.WHITE);
		}
		teleportToLocationCheckBox.setTypeface(VertexClientPE.font);
		if(fontSetting == "minecraft") {
			MinecraftButtonLibrary.addMinecraftStyleToTextView(teleportToLocationCheckBox);
		}
		teleportToLocationCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				remoteViewTeleportSetting = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});
		
		remoteViewSettingsLayout.addView(teleportToLocationCheckBox);
		return remoteViewSettingsLayout;
	},
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		remoteViewState = this.state;
		if(!this.state) {
			ModPE.setCamera(getPlayerEnt());
			if(this.targetEntity != null && remoteViewTeleportSetting == "on") {
				var tpX = Entity.getX(this.targetEntity);
				var tpY = Entity.getY(this.targetEntity);
				var tpZ = Entity.getZ(this.targetEntity);
				Entity.setPosition(getPlayerEnt(), tpX, tpY + 2, tpZ);
			}
			this.targetEntity = null;
		}
	},
	onAttack: function(a, v) {
		if(a == getPlayerEnt()) {
			preventDefault();
			this.targetEntity = v;
			ModPE.setCamera(v);
		}
	}
}

var antiAFK = {
	name: "AntiAFK",
	desc: "Makes the player walk around to prevent you from getting disconnected.",
	category: VertexClientPE.category.PLAYER,
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
		this.timer++;
		if(this.timer == 1 || this.timer == 2 || this.timer == 3 || this.timer == 4) {
			Entity.setPosition(getPlayerEnt(), getPlayerX() - antiAFKDistancePerTick, getPlayerY(), getPlayerZ());
		};
		if(this.timer == 3 || this.timer == 4 || this.timer == 5 || this.timer == 6) {
			Entity.setPosition(getPlayerEnt(), getPlayerX(), getPlayerY(), getPlayerZ() - antiAFKDistancePerTick);
		};
		if(this.timer == 7 || this.timer == 8 || this.timer == 9 || this.timer == 10) {
			Entity.setPosition(getPlayerEnt(), getPlayerX() + antiAFKDistancePerTick, getPlayerY(), getPlayerZ());
		};
		if(this.timer >= 11) {
			Entity.setPosition(getPlayerEnt(), getPlayerX(), getPlayerY(), getPlayerZ() + antiAFKDistancePerTick);
		};
		if(this.timer >= 14) {
			this.timer = 0;
		};
	}
}

var autoLeave = {
	name: "AutoLeave",
	desc: "Automatically makes you leave the game when your health is (below) 8.",
	category: VertexClientPE.category.PLAYER,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onInterval: function() {
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
	lastHealth: null,
	velTick: 0,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		if(this.lastHealth == null || this.lastHealth == Entity.getHealth(getPlayerEnt())) {
			this.lastHealth = Entity.getHealth(getPlayerEnt());
		} else if(Entity.getHealth(getPlayerEnt()) < this.lastHealth) {
			if(this.velTick <= 2) {
				Entity.setImmobile(getPlayerEnt(), true);
				this.velTick++;
			} else {
				Entity.setImmobile(getPlayerEnt(), false);
				this.lastHealth = Entity.getHealth(getPlayerEnt());
				this.velTick = 0;
			}
		} else if(Entity.getHealth(getPlayerEnt()) > this.lastHealth) {
			Entity.setImmobile(getPlayerEnt(), false);
			this.lastHealth = Entity.getHealth(getPlayerEnt());
			this.velTick = 0;
		}
	}
}

var antiBurn = {
	name: "AntiBurn",
	desc: "Prevents you from getting burned down.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	isExpMod: function() {
		return true;
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
		/* var blockOne = getTile(x, y, z);
		var blockTwo = getTile(x, y - 1, z);
		var blockThree = getTile(x, y - 2, z);
		setTile(x, y, z, 9);
		setTile(x, y - 1, z, 9);
		setTile(x, y - 2, z, 9);
		setTile(x, y, z, blockOne);
		setTile(x, y - 1, z, blockTwo);
		setTile(x, y - 2, z, blockThree); */
		Entity.setFireTicks(getPlayerEnt(), -1);
	}
}

var lifeSaver = {
	name: "LifeSaver",
	desc: "Prevents you from getting in touch with dangerous blocks.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	safeVector: null,
	isExpMod: function() {
		return true;
	},
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		if(!VertexClientPE.Utils.Player.isInFire()) {
			this.safeVector = new Vector3(getPlayerX(), getPlayerY(), getPlayerZ());
		} else if(VertexClientPE.Utils.Player.isInFire() && this.safeVector != null) {
			Entity.setPosition(getPlayerEnt(), this.safeVector.x, this.safeVector.y, this.safeVector.z);
			this.safeVector = null;
		}
	}
}

var autoBuild = {
	name: "AutoBuild",
	desc: "Automatically build structures.",
	category: VertexClientPE.category.WORLD,
	type: "Mod",
	state: false,
	isExpMod: function() {
		return true;
	},
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
	getSettingsLayout: function() {
		var speedHackSettingsLayout = new LinearLayout_(CONTEXT);
		speedHackSettingsLayout.setOrientation(1);
		var speedHackFrictionTitle = clientTextView("Friction: | " + speedHackFriction);
		var speedHackFrictionSlider = clientSeekBar();
		speedHackFrictionSlider.setProgress(speedHackFriction * 100 - 1);
		speedHackFrictionSlider.setMax(99);
		speedHackFrictionSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				speedHackFriction = (speedHackFrictionSlider.getProgress() + 1) / 100;
				speedHackFrictionTitle.setText("Friction: | " + speedHackFriction);
				if(speedHackState) {
					for(var i = 0; i <= 255; i++) {
						Block.setFriction(i, speedHackFriction);
					}
				}
			}
		});
		
		speedHackSettingsLayout.addView(speedHackFrictionTitle);
		speedHackSettingsLayout.addView(speedHackFrictionSlider);
		return speedHackSettingsLayout;
	},
	onModDialogDismiss: function() {
		VertexClientPE.saveMainSettings();
	},
	frictionArray: [],
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		speedHackState = this.state;
		if(this.state) {
			for(var i = 0; i <= 255; i++) {
				if(this.frictionArray[i] == null || this.frictionArray[i] == undefined) {
					this.frictionArray[i] = Block.getFriction(i);
				}
				Block.setFriction(i, speedHackFriction);
			}
		} else {
			for(var i = 0; i <= 255; i++) {
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
	category: VertexClientPE.category.WORLD,
	type: "Mod",
	state: false,
	requiresPro: function() {
		return true;
	},
	getSettingsLayout: function() {
		var chestESPSettingsLayout = new LinearLayout_(CONTEXT);
		chestESPSettingsLayout.setOrientation(1);
		var chestESPRangeTitle = clientTextView("Range: | " + chestESPRange);
		var chestESPRangeSlider = clientSeekBar();
		chestESPRangeSlider.setProgress(chestESPRange);
		chestESPRangeSlider.setMax(25);
		chestESPRangeSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
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
		chestESPState = this.state;
		if(this.state) {
			VertexClientPE.Utils.loadFov();
			VertexClientPE.Utils.loadChests();
		}
	},
	onRender: function(gl) {
		VertexClientPE.Utils.getChests().forEach(function(element, index, array) {
			VertexClientPE.drawCubeShapedBox(gl, element.x + 1 / 16, element.y + 1, element.z + 1 / 16);
		});
	}
}

var twerk = {
	name: "Twerk",
	desc: "Automatically makes you twerk all the time.",
	category: VertexClientPE.category.PLAYER,
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
		this.timer++;
		if(this.timer >= 20) {
			Entity.setSneaking(getPlayerEnt(), !Entity.isSneaking(getPlayerEnt()));
			this.timer = 0;
		}
	}
}

var chatLog = {
	name: "ChatLog",
	desc: "Automatically logs all the chat messages and allows you to view them.",
	category: VertexClientPE.category.PLAYER,
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
		VertexClientPE.showBasicDialog(VertexClientPE.getCustomModName(this.name) + " - Display", clientTextView(chatString));
	},
	onChatReceive: function(message, sender) {
		VertexClientPE.Utils.world.chatMessages.push("<" + sender + "> " + message);
	}
}

var fastBridge = {
	name: "FastBridge",
	desc: "Automatically teleports you on top of placed blocks.",
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
		if(itemId != 0 && itemId <= 256) {
			var fastBridgeVector = new Vector3(x-(side==4?1:0)+(side==5?1:0)+0.5,y-(side==0?1:0)+(side==1?1:0)+2,z-(side==2?1:0)+(side==3?1:0)+0.5);
			new Thread_(new Runnable_() {
				run: function() {
					if(fastBridgeVector.y <= getPlayerY()) {
						Thread_.sleep(100);
					} else {
						fastBridgeVector.y += 2;
					}
					Entity.setPositionRelative(getPlayerEnt(), fastBridgeVector.x - getPlayerX(), fastBridgeVector.y - getPlayerY(), fastBridgeVector.z - getPlayerZ());
				}
			}).start();
		}
	}
}

var noInvisBedrock = {
	name: "NoInvisBedrock",
	desc: "Allows you to walk through invisible bedrock.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		if(this.state) {
			
		}
	}
}

var tapJumpRun = {
	name: "TapJumpRun",
	desc: "Allows you to walk and jump to a block automatically on tap.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	destVector: null,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		this.destVector = null;
	},
	onUseItem: function(x, y, z, itemId, blockId, side) {
		while(getTile(x, y, z) != 0) {
			y++;
		}
		this.destVector = new Vector3(x, y, z);
	},
	onTick: function() {
		if(this.destVector != null) {
			if(getPlayerX() != this.destVector.x && getPlayerZ() != this.destVector.z) {
				Entity.setPosition(getPlayerEnt(), getPlayerX(), this.destVector.y + 2, getPlayerZ());
				Entity.setVelX(getPlayerEnt(), (this.destVector.x - getPlayerX()) * playerWalkSpeed);
				Entity.setVelZ(getPlayerEnt(), (this.destVector.z - getPlayerZ()) * playerWalkSpeed);
			} else if(this.destVector.x == getPlayerX() && this.destVector.z == getPlayerZ()) {
				this.destVector = null;
			}
		}
	}
}

var tapAimbot = {
	name: "TapAimbot",
	desc: "Makes you aim at entities on tap.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	timer: 0,
	targetEnt: null,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onAttack: function(a, v) {
		if(a == getPlayerEnt()) {
			this.targetEnt = v;
			this.timer = 0;
		}
	},
	onTick: function() {
		if(this.targetEnt != null && this.timer <= 40) {
			VertexClientPE.CombatUtils.aimAtEnt(this.targetEnt);
			this.timer++;
		} else {
			this.targetEnt = null;
			this.timer = 0;
		}
	}
}

var randomTP = {
	name: "RandomTP",
	desc: "Teleports you to a random entity when tapping the ground.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	requiresPro: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onUseItem: function(x, y, z, itemId, blockId, side) {
		preventDefault();
		let randomEnts = [];
		
		let newMob = Entity.getAll().getRandomElement();
		if(newMob != null && newMob != undefined) {
			randomEnts.push(newMob);
		}
		
		let newPlayer = Server.getAllPlayers().getRandomElement();
		if(newPlayer != null && newPlayer != undefined && newPlayer != getPlayerEnt()) {
			randomEnts.push(newPlayer);
		}
		
		let randomEnt = randomEnts.getRandomElement();
		
		if(randomEnt != null && randomEnt != undefined) {
			Entity.setPosition(getPlayerEnt(), Entity.getX(randomEnt), Entity.getY(randomEnt) + 1.8, Entity.getZ(randomEnt));
		}
	}
}

var fullBright = {
	name: "Fullbright",
	desc: "Makes air light up.",
	category: VertexClientPE.category.WORLD,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	requiresPro: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		if(this.state) {
			Block.setLightLevel(0, 15);
		} else {
			Block.setLightLevel(0, 0);
		}
	}
}

var step = {
	name: "Step",
	desc: "Similar to MCPE's built-in Auto jump, except that it works on multiple heights.",
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
		if(VertexClientPE.Utils.Player.isCollidedHorizontally() && (Entity.getVelX(getPlayerEnt()) + Entity.getVelZ(getPlayerEnt()) != 0)) {
			Entity.setPositionRelative(getPlayerEnt(), 0, 1.6, 0);
		}
	}
}

var foundItems = false;

var dropLocator = {
	name: "DropLocator",
	desc: "Locates dropped items and experience.",
	category: VertexClientPE.category.MISC,
	type: "Mod",
	isStateMod: function() {
		return false;
	},
	onToggle: function() {
		var items = Entity.getAll();
		if(items != null && items != undefined && items.length != -1) {
			new Thread_(new Runnable_({
				run: function() {
					for(var i = 0; i < items.length; i++) {
						var type = Entity.getEntityTypeId(items[i]);
						var name;
						if(type == EntityType.ITEM) {
							name = "item"
						}
						if(type == EntityType.EXPERIENCE_ORB) {
							name = "experience"
						}
						if(name != null) {
							VertexClientPE.clientMessage("Located " + name + " at " + parseInt(Entity.getX(items[i])) + " " + parseInt(Entity.getY(items[i])) + " " + parseInt(Entity.getZ(items[i])));
							foundItems = true;
							Thread_.sleep(1000);
						} else {
							continue;
						}
					}
				}
			})).start();
		}
		if(!foundItems) {
			VertexClientPE.clientMessage("We couldn't locate any drops.");
		}
	}
}

var playerLocator = {
	name: "PlayerLocator",
	desc: "Locates players.",
	category: VertexClientPE.category.MISC,
	type: "Mod",
	isStateMod: function() {
		return false;
	},
	onToggle: function() {
		let players = Server.getAllPlayers();
		if(players != null && players != undefined && players.length != -1 && !(players.length == 1 && players[0] == getPlayerEnt())) {
			new Thread_(new Runnable_({
				run: function() {
					for(let i = 0; i < players.length; i++) {
						let player = players[i];
						let name = "player " + Player.getName(player);
						if(name != null && player[i] != getPlayerEnt()) {
							VertexClientPE.clientMessage("Located " + name + " at " + parseInt(Entity.getX(player)) + " " + parseInt(Entity.getY(player)) + " " + parseInt(Entity.getZ(player)));
							Thread_.sleep(1000);
						} else {
							continue;
						}
					}
				}
			})).start();
		} else {
			VertexClientPE.clientMessage("We couldn't locate any players.");
		}
	}
}

var safeWalk = {
	name: "SafeWalk",
	desc: "Automatically sneaks when you're at the edge of a block so that you can still move with normal speed.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	safeVector: null,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		if(VertexClientPE.Utils.Player.isAtEdge()) {
			Entity.setSneaking(getPlayerEnt(), true);
		}
	}
}

var letItSnow = {
	name: "LetItSnow",
	desc: "Makes snowballs spawn above you.",
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
		var x = getPlayerX();
		var y = getPlayerY();
		var z = getPlayerZ();
		for(var xI = -2; xI <= 2; xI++) {
			for(var yI = 0; yI <= 2; yI++) {
				for(var zI = -2; zI <= 2; zI++) {
					Level.addParticle(ParticleType.snowballpoof, x + xI, y + yI, z + zI, 0, getPlayerY() - (y + yI), 0, 2);
				}
			}
		}
	}
}

var frostWalk = {
	name: "FrostWalk",
	desc: "Turns water blocks into ice blocks and lava blocks into cobblestone blocks when you step on them.",
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
		var tile = getTile(getPlayerX(), getPlayerY() - 2, getPlayerZ());
		var tileTwo = getTile(getPlayerX(), getPlayerY() - 1, getPlayerZ());
		if(tile == 8 || tile == 9) {
			setTile(getPlayerX(), getPlayerY() - 2, getPlayerZ(), 79);
		} else if(tile == 10 || tile == 11) {
			setTile(getPlayerX(), getPlayerY() - 2, getPlayerZ(), 4);
		}
		if(tileTwo == 8 || tileTwo == 9) {
			setTile(getPlayerX(), getPlayerY() - 1, getPlayerZ(), 79);
			Entity.setPosition(getPlayerEnt(), getPlayerX(), getPlayerY() + 1, getPlayerZ());
		} else if(tileTwo == 10 || tileTwo == 11) {
			setTile(getPlayerEnt(), getPlayerX(), getPlayerY() - 1, getPlayerZ(), 4);
			Entity.setPosition(getPlayerEnt(), getPlayerX(), getPlayerY() + 1, getPlayerZ());
		}
	}
}

var target = {
	name: "Target",
	desc: "Allows you to choose if you want to target mobs, players or both in modules like Aimbot.",
	category: VertexClientPE.category.MISC,
	type: "Special",
	getSettingsLayout: function() {
		var targetSettingsLayout = new LinearLayout_(CONTEXT);
		targetSettingsLayout.setOrientation(1);
		
		var targetMobsCheckBox = new CheckBox_(CONTEXT);
		targetMobsCheckBox.setChecked(targetMobsSetting == "on");
		targetMobsCheckBox.setText("Mobs");
		if(themeSetting == "white") {
			targetMobsCheckBox.setTextColor(Color_.BLACK);
		} else {
			targetMobsCheckBox.setTextColor(Color_.WHITE);
		}
		targetMobsCheckBox.setTypeface(VertexClientPE.font);
		if(fontSetting == "minecraft") {
			MinecraftButtonLibrary.addMinecraftStyleToTextView(targetMobsCheckBox);
		}
		targetMobsCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				targetMobsSetting = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});
		
		var targetPlayersCheckBox = new CheckBox_(CONTEXT);
		targetPlayersCheckBox.setChecked(targetPlayersSetting == "on");
		targetPlayersCheckBox.setText("Players");
		if(themeSetting == "white") {
			targetPlayersCheckBox.setTextColor(Color_.BLACK);
		} else {
			targetPlayersCheckBox.setTextColor(Color_.WHITE);
		}
		targetPlayersCheckBox.setTypeface(VertexClientPE.font);
		if(fontSetting == "minecraft") {
			MinecraftButtonLibrary.addMinecraftStyleToTextView(targetPlayersCheckBox);
		}
		targetPlayersCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				targetPlayersSetting = v.isChecked()?"on":"off";
				targetFriendsCheckBox.setEnabled(v.isChecked());
				VertexClientPE.saveMainSettings();
			}
		});
		
		var targetFriendsCheckBox = new CheckBox_(CONTEXT);
		targetFriendsCheckBox.setChecked(targetFriendsSetting == "on");
		targetFriendsCheckBox.setEnabled(targetPlayersCheckBox.isChecked());
		targetFriendsCheckBox.setText("Friends");
		if(themeSetting == "white") {
			targetFriendsCheckBox.setTextColor(Color_.BLACK);
		} else {
			targetFriendsCheckBox.setTextColor(Color_.WHITE);
		}
		targetFriendsCheckBox.setTypeface(VertexClientPE.font);
		if(fontSetting == "minecraft") {
			MinecraftButtonLibrary.addMinecraftStyleToTextView(targetFriendsCheckBox);
		}
		targetFriendsCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				targetFriendsSetting = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});
		
		targetSettingsLayout.addView(targetMobsCheckBox);
		targetSettingsLayout.addView(targetPlayersCheckBox);
		targetSettingsLayout.addView(targetFriendsCheckBox);
		return targetSettingsLayout;
	},
	isStateMod: function() {
		return false;
	},
	onToggle: function() {
		VertexClientPE.showModDialog(this);
	}
}

var hitboxes = {
	name: "Hitboxes",
	desc: "Increases collision sizes of other players so that you can hit them easily.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	getSettingsLayout: function() {
		var hitboxesSettingsLayout = new LinearLayout_(CONTEXT);
		hitboxesSettingsLayout.setOrientation(1);
		
		var minHitboxesSize = 2;
		var maxHitboxesSize = 100;
		
		var hitboxesHitboxWidthTitle = clientTextView("Hitbox width: | " + hitboxesHitboxWidthSetting);
		var hitboxesHitboxWidthSlider = clientSeekBar();
		hitboxesHitboxWidthSlider.setProgress(hitboxesHitboxWidthSetting - minHitboxesSize);
		hitboxesHitboxWidthSlider.setMax(maxHitboxesSize - minHitboxesSize);
		hitboxesHitboxWidthSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				hitboxesHitboxWidthSetting = hitboxesHitboxWidthSlider.getProgress() + minHitboxesSize;
				hitboxesHitboxWidthTitle.setText("Hitbox width: | " + hitboxesHitboxWidthSetting);
				if(this.state) { // TODO: Look if needs to be fixed.
					let players = Server.getAllPlayers();
					for(var i = 0; i < players.length; i++) {
						this.updateHitboxesOnEnt(players[i]);
					}
				}
			}
		});
		
		var hitboxesHitboxHeightTitle = clientTextView("Hitbox height: | " + hitboxesHitboxHeightSetting);
		var hitboxesHitboxHeightSlider = clientSeekBar();
		hitboxesHitboxHeightSlider.setProgress(hitboxesHitboxHeightSetting - minHitboxesSize);
		hitboxesHitboxHeightSlider.setMax(maxHitboxesSize - minHitboxesSize);
		hitboxesHitboxHeightSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				hitboxesHitboxHeightSetting = hitboxesHitboxHeightSlider.getProgress() + minHitboxesSize;
				hitboxesHitboxHeightTitle.setText("Hitbox height: | " + hitboxesHitboxHeightSetting);
				if(this.state) {
					let players = Server.getAllPlayers();
					for(var i = 0; i < players.length; i++) {
						this.updateHitboxesOnEnt(players[i]);
					}
				}
			}
		});
		hitboxesSettingsLayout.addView(hitboxesHitboxWidthTitle);
		hitboxesSettingsLayout.addView(hitboxesHitboxWidthSlider);
		hitboxesSettingsLayout.addView(hitboxesHitboxHeightTitle);
		hitboxesSettingsLayout.addView(hitboxesHitboxHeightSlider);
		return hitboxesSettingsLayout;
	},
	onModDialogDismiss: function() {
		VertexClientPE.saveMainSettings();
	},
	updateHitboxesOnEnt: function(ent) {
		if(ent != getPlayerEnt()) {
			Entity.setCollisionSize(ent, this.state?hitboxesHitboxWidthSetting:0.6, this.state?hitboxesHitboxHeightSetting:1.8);
		}
	},
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		var players = Server.getAllPlayers();
		for(var i = 0; i < players.length; i++) {
			this.updateHitboxesOnEnt(players[i]);
		}
	},
	onEntityAdded: function(entity) {
		this.updateHitboxesOnEnt(entity);
	}
}

var elytraBoost = {
	name: "ElytraBoost",
	desc: "Boosts elytra (Toolbox only).",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function(entity) {
		if(Entity.isGliding(Player.getEntity())) {
			setVelX(getPlayerEnt(), 0.45);
			setVelZ(getPlayerEnt(), 0.45);
		}
	}
}

/* var oakTextures = ["planks", 0];
var spruceTextures = ["planks", 1];
var birchTextures = ["planks", 2];
var jungleTextures = ["planks", 3];
var darkOakTextures = ["planks", 4];
var acaciaTextures = ["planks", 5];
var allFencesTextures = [
	oakTextures, oakTextures, oakTextures, oakTextures, oakTextures, oakTextures,
	spruceTextures, spruceTextures, spruceTextures, spruceTextures, spruceTextures, spruceTextures,
	birchTextures, birchTextures, birchTextures, birchTextures, birchTextures, birchTextures,
	jungleTextures, jungleTextures, jungleTextures, jungleTextures, jungleTextures, jungleTextures,
	darkOakTextures, darkOakTextures, darkOakTextures, darkOakTextures, darkOakTextures, darkOakTextures,
	acaciaTextures, acaciaTextures, acaciaTextures, acaciaTextures, acaciaTextures, acaciaTextures
];

var fenceJump = {
	name: "FenceJump",
	desc: "Allows you to jump on/over fences.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		if(this.state) {
			Block.defineBlock(85, "? Fence", allFencesTextures, 0, true, 0);
		} else {
			Block.defineBlock(85, "? Fence", allFencesTextures, 0, true, 11);
		}
	}
} */

var prevent = {
	name: "Prevent",
	desc: "Prevent user interaction (you can't prevent incoming attacks though).",
	category: VertexClientPE.category.MISC,
	type: "Special",
	getSettingsLayout: function() {
		var twerkSettingsLayout = new LinearLayout_(CONTEXT);
		twerkSettingsLayout.setOrientation(1);
		
		var preventDiggingCheckBox = new CheckBox_(CONTEXT);
		preventDiggingCheckBox.setChecked(preventDiggingSetting == "on");
		preventDiggingCheckBox.setText("Prevent block digging");
		if(themeSetting == "white") {
			preventDiggingCheckBox.setTextColor(Color_.BLACK);
		} else {
			preventDiggingCheckBox.setTextColor(Color_.WHITE);
		}
		preventDiggingCheckBox.setTypeface(VertexClientPE.font);
		if(fontSetting == "minecraft") {
			MinecraftButtonLibrary.addMinecraftStyleToTextView(preventDiggingCheckBox);
		}
		preventDiggingCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				preventDiggingSetting = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});
		
		var preventPlacingCheckBox = new CheckBox_(CONTEXT);
		preventPlacingCheckBox.setChecked(preventPlacingSetting == "on");
		preventPlacingCheckBox.setText("Prevent block placing/tapping with items on blocks");
		if(themeSetting == "white") {
			preventPlacingCheckBox.setTextColor(Color_.BLACK);
		} else {
			preventPlacingCheckBox.setTextColor(Color_.WHITE);
		}
		preventPlacingCheckBox.setTypeface(VertexClientPE.font);
		if(fontSetting == "minecraft") {
			MinecraftButtonLibrary.addMinecraftStyleToTextView(preventPlacingCheckBox);
		}
		preventPlacingCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				preventPlacingSetting = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});
		
		var preventAttacksCheckBox = new CheckBox_(CONTEXT);
		preventAttacksCheckBox.setChecked(preventAttacksSetting == "on");
		preventAttacksCheckBox.setText("Prevent hitting other entities");
		if(themeSetting == "white") {
			preventAttacksCheckBox.setTextColor(Color_.BLACK);
		} else {
			preventAttacksCheckBox.setTextColor(Color_.WHITE);
		}
		preventAttacksCheckBox.setTypeface(VertexClientPE.font);
		if(fontSetting == "minecraft") {
			MinecraftButtonLibrary.addMinecraftStyleToTextView(preventAttacksCheckBox);
		}
		preventAttacksCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				preventAttacksSetting = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});
		
		twerkSettingsLayout.addView(preventDiggingCheckBox);
		twerkSettingsLayout.addView(preventPlacingCheckBox);
		twerkSettingsLayout.addView(preventAttacksCheckBox);
		return twerkSettingsLayout;
	},
	isStateMod: function() {
		return false;
	},
	onToggle: function() {
		VertexClientPE.showModDialog(this);
	}
}

var attackTeleport = {
	name: "AttackTeleport",
	desc: "Teleports you to an entity when hitting it.",
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
		if(a == getPlayerEnt()) {
			Entity.setPosition(getPlayerEnt(), Entity.getX(v), Entity.getY(v) + 2, Entity.getZ(v));
		}
	}
}

var healthDisplay = {
	name: "HealthDisplay",
	desc: "Shows your health in the bottom left corner.",
	category: VertexClientPE.category.MISC,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		healthDisplayState = this.state;
		if(this.state && !VertexClientPE.menuIsShowing && (currentScreen == ScreenType.ingame || currentScreen == ScreenType.hud)) {
			showHealthDisplay();
		} else {
			if(healthDisplayUI != null) {
				if(healthDisplayUI.isShowing()) {
					healthDisplayUI.dismiss();
				}
			}
		}
	},
	onHurt: function(a, v) {
		if(v == getPlayerEnt()) {
			if(healthDisplayUI != null && healthDisplayUI.isShowing()) {
				CONTEXT.runOnUiThread(new Runnable_({
					run: function() {
						healthDisplayView.setText(Entity.getHealth(getPlayerEnt()) + "/" + Entity.getMaxHealth(getPlayerEnt()) + " ❤");
					}
				}));
			}
		}
	}
}

var attackShock = {
	name: "AttackShock",
	desc: "Makes your device vibrate when hitting an entity.",
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
		if(a == getPlayerEnt()) {
			CONTEXT.getSystemService(Context_.VIBRATOR_SERVICE).vibrate(99);
		}
	}
}

var serverInfoStage = 0;

var serverInfo = {
	name: "ServerInfo",
	desc: "Shows information about the server you're on.",
	category: VertexClientPE.category.MISC,
	type: "Special",
	state: false,
	checkBeforeAdding: function() {
		return VertexClientPE.isRemote();
	},
	isStateMod: function() {
		return false;
	},
	onToggle: function() {
		if(serverInfoStage == 0) {
			serverInfoStage = 1;
			new Thread_(new Runnable_({
				run: function() {
					VertexClientPE.toast("Loading...");
					var serverInfo = myServerStatus.set(Server.getAddress(), parseInt(Server.getPort()));
					Thread_.sleep(3000);
					var serverString = "Name: " + serverInfo.name;
					serverString += "\nAddress: " + serverInfo.address;
					serverString += "\nSoftware: " + serverInfo.software;
					serverString += "\nPlugins: " + serverInfo.plugins;
					VertexClientPE.showBasicDialog(VertexClientPE.getCustomModName(this.name) + " - Display", clientTextView(serverString));
					serverInfoStage = 0;
				}
			})).start();
		}
	}
}

var switchAimbot = {
	name: "SwitchAimbot",
	desc: "Makes you point at entities but changes target all the time.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	mobTargetNum: 0,
	playerTargetNum: 0,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		var range = Level.getGameMode()==1?9:7;
		var mobs = Entity.getAll();
		var players = Server.getAllPlayers();
		if(targetMobsSetting == "on") {
			if(this.mobTargetNum >= mobs.length) {
				this.mobTargetNum = 0;
			}
			var cMob = mobs[this.mobTargetNum];
			if(cMob != null && cMob != undefined) {
				var x = Entity.getX(cMob) - getPlayerX();
				var y = Entity.getY(cMob) - getPlayerY();
				var z = Entity.getZ(cMob) - getPlayerZ();
				if(x*x+y*y+z*z <= range*range) {
					if(Entity.getEntityTypeId(cMob) != EntityType.ARROW && Entity.getEntityTypeId(cMob) != EntityType.BOAT && Entity.getEntityTypeId(cMob) != EntityType.EGG && Entity.getEntityTypeId(cMob) != EntityType.ENDER_PEARL && Entity.getEntityTypeId(cMob) != EntityType.EXPERIENCE_ORB && Entity.getEntityTypeId(cMob) != EntityType.EXPERIENCE_POTION && Entity.getEntityTypeId(cMob) != EntityType.FALLING_BLOCK && Entity.getEntityTypeId(cMob) != EntityType.FIREBALL && Entity.getEntityTypeId(cMob) != EntityType.FISHING_HOOK && Entity.getEntityTypeId(cMob) != EntityType.ITEM && Entity.getEntityTypeId(cMob) != EntityType.LIGHTNING_BOLT && Entity.getEntityTypeId(cMob) != EntityType.MINECART && Entity.getEntityTypeId(cMob) != EntityType.PAINTING && Entity.getEntityTypeId(cMob) != EntityType.PRIMED_TNT && Entity.getEntityTypeId(cMob) != EntityType.SMALL_FIREBALL && Entity.getEntityTypeId(cMob) != EntityType.SNOWBALL && Entity.getEntityTypeId(cMob) != EntityType.THROWN_POTION && cMob != getPlayerEnt()) {
						VertexClientPE.CombatUtils.aimAtEnt(cMob);
					}
				}
			}
			this.mobTargetNum++;
		}
		if(targetPlayersSetting == "on") {
			if(this.playerTargetNum >= mobs.length) {
				this.playerTargetNum = 0;
			}
			var cPlayer = players[this.playerTargetNum];
			if(cPlayer != null && cPlayer != undefined && !(targetFriendsSetting == "off" && VertexClientPE.Utils.Player.isFriend(cMob))) {
				var x = Entity.getX(cPlayer) - getPlayerX();
				var y = Entity.getY(cPlayer) - getPlayerY();
				var z = Entity.getZ(cPlayer) - getPlayerZ();
				if(x*x+y*y+z*z <= range*range) {
					if(cPlayer != getPlayerEnt()) {
						VertexClientPE.CombatUtils.aimAtEnt(cPlayer);
					}
				}
			}
			this.playerTargetNum++;
		}
	}
}

var strafeAura = {
	name: "StrafeAura",
	desc: "Makes you walk around entities.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	getExtraInfo: function() {
		return capitalizeFirstLetter(strafeAuraDirectionSetting);
	},
	getSettingsLayout: function() {
		var strafeAuraSettingsLayout = new LinearLayout_(CONTEXT);
		strafeAuraSettingsLayout.setOrientation(1);
		
		var strafeAuraRangeTitle = clientTextView("Range: | " + strafeAuraRangeSetting);
		var strafeAuraRangeSlider = clientSeekBar();
		strafeAuraRangeSlider.setProgress(strafeAuraRangeSetting);
		strafeAuraRangeSlider.setMax(10);
		strafeAuraRangeSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				strafeAuraRangeSetting = strafeAuraRangeSlider.getProgress();
				strafeAuraRangeTitle.setText("Range: | " + strafeAuraRangeSetting);
			}
		});
		
		var strafeAuraDirectionLayout = new LinearLayout_(CONTEXT);
		strafeAuraDirectionLayout.setOrientation(LinearLayout_.HORIZONTAL);
		
		var strafeAuraDirectionTitle = clientTextView("Direction:");
		var strafeAuraDirectionLeftButton = clientButton("Left", "Makes the player strafe to the left.");
		strafeAuraDirectionLeftButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
		var strafeAuraDirectionRightButton = clientButton("Right", "Makes the player strafe to the right.");
		strafeAuraDirectionRightButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
		
		var strafeAuraDirectionLayoutLeft = new LinearLayout_(CONTEXT);
		strafeAuraDirectionLayoutLeft.setOrientation(1);
		strafeAuraDirectionLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - 5, display.heightPixels / 10));
		strafeAuraDirectionLayoutLeft.setGravity(Gravity_.CENTER_HORIZONTAL);
		strafeAuraDirectionLayout.addView(strafeAuraDirectionLayoutLeft);
		
		var strafeAuraDirectionLayoutRight = new LinearLayout_(CONTEXT);
		strafeAuraDirectionLayoutRight.setOrientation(1);
		strafeAuraDirectionLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - 5, display.heightPixels / 10));
		strafeAuraDirectionLayoutRight.setGravity(Gravity_.CENTER_HORIZONTAL);
		strafeAuraDirectionLayout.addView(strafeAuraDirectionLayoutRight);
		
		strafeAuraDirectionLayoutLeft.addView(strafeAuraDirectionLeftButton);
		strafeAuraDirectionLayoutRight.addView(strafeAuraDirectionRightButton);
		if(strafeAuraDirectionSetting == "left") {
			strafeAuraDirectionLeftButton.setTextColor(Color_.GREEN);
		} if(strafeAuraDirectionSetting == "right") {
			strafeAuraDirectionRightButton.setTextColor(Color_.GREEN);
		}
		strafeAuraDirectionLeftButton.setOnClickListener(new View_.OnClickListener() {
			onClick: function(view) {
				strafeAuraDirectionSetting = "left";
				strafeAuraDirectionLeftButton.setTextColor(Color_.GREEN);
				strafeAuraDirectionRightButton.setTextColor(Color_.WHITE);
				VertexClientPE.saveMainSettings();
			}
		});
		strafeAuraDirectionRightButton.setOnClickListener(new View_.OnClickListener() {
			onClick: function(view) {
				strafeAuraDirectionSetting = "right";
				strafeAuraDirectionLeftButton.setTextColor(Color_.WHITE);
				strafeAuraDirectionRightButton.setTextColor(Color_.GREEN);
				VertexClientPE.saveMainSettings();
			}
		});
		
		strafeAuraSettingsLayout.addView(strafeAuraRangeTitle);
		strafeAuraSettingsLayout.addView(strafeAuraRangeSlider);
		strafeAuraSettingsLayout.addView(strafeAuraDirectionTitle);
		strafeAuraSettingsLayout.addView(strafeAuraDirectionLayout);
		
		return strafeAuraSettingsLayout;
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
		let mob = VertexClientPE.Utils.Player.getNearestMob(strafeAuraRangeSetting);
		let player = VertexClientPE.Utils.Player.getNearestPlayer(strafeAuraRangeSetting);
		if(mob != null) {
			VertexClientPE.CombatUtils.strafeAroundEnt(mob, strafeAuraDirectionSetting);
		}
		if(player != null) {
			VertexClientPE.CombatUtils.strafeAroundEnt(player, strafeAuraDirectionSetting);
		}
	}
}

var noFall = {
	name: "NoFall",
	desc: "Immediately teleports you to the first (non-air) block underneath yourself when falling (and blocks fall damage by doing so).",
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
		//clientMessage(Entity.getVelY(getPlayerEnt()));
		if(!Player.isFlying() && !VertexClientPE.Utils.Player.onGround() && Entity.getVelY(getPlayerEnt()) < -0.07840000092983246) {
			let x = getPlayerX();
			let y = getPlayerY();
			let z = getPlayerZ();
			while(getTile(x, y, z) == 0) {
				y--;
			}
			Entity.setPosition(getPlayerEnt(), x, y + 2.8, z);
		}
	}
}

var rotationPlus = {
	name: "Rotation+",
	desc: "Shows an additional D-pad, but for rotation instead of movement.",
	category: VertexClientPE.category.PLAYER,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		rotationPlusState = this.state;
		if(this.state && !VertexClientPE.menuIsShowing && (currentScreen == ScreenType.ingame || currentScreen == ScreenType.hud)) {
			showRotationPlus();
		} else {
			if(rotationPlusUI != null) {
				if(rotationPlusUI.isShowing()) {
					rotationPlusUI.dismiss();
				}
			}
		}
	}
}

var glitchCam = {
	name: "GlitchCam",
	desc: "Reduces the camera movement speed and makes it look dizzy.",
	category: VertexClientPE.category.PLAYER,
	type: "Mod",
	state: false,
	oldPitch: null,
	newPitch: null,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		this.newYaw = Entity.getYaw(getPlayerEnt());
		this.newPitch = Entity.getPitch(getPlayerEnt());
		if(this.oldYaw != null) {
			let yawDiff;
			if(this.newYaw > this.oldYaw) {
				yawDiff = this.newYaw - this.oldYaw;
				Entity.setRot(getPlayerEnt(), this.newYaw - yawDiff / 2, Entity.getPitch(getPlayerEnt()));
			}
			if(this.newYaw < this.oldYaw) {
				yawDiff = this.oldYaw - this.newYaw;
				Entity.setRot(getPlayerEnt(), this.oldYaw - yawDiff / 2, Entity.getPitch(getPlayerEnt()));
			}
		}
		if(this.oldPitch != null) {
			let pitchDiff;
			if(this.newPitch > this.oldPitch) {
				pitchDiff = this.newPitch - this.oldPitch;
				Entity.setRot(getPlayerEnt(), Entity.getYaw(getPlayerEnt()), this.newPitch - pitchDiff / 2);
			}
			if(this.newPitch < this.oldPitch) {
				pitchDiff = this.oldPitch - this.newPitch;
				Entity.setRot(getPlayerEnt(), Entity.getYaw(getPlayerEnt()), this.oldPitch - pitchDiff / 2);
			}
		}
		this.oldYaw = Entity.getYaw(getPlayerEnt());
		this.oldPitch = Entity.getPitch(getPlayerEnt());
	}
}

//COMBAT
VertexClientPE.registerModule(aimbot);
VertexClientPE.registerModule(antiBurn);
VertexClientPE.registerModule(antiKnockback);
VertexClientPE.registerModule(arrowGun);
VertexClientPE.registerModule(attackShock);
VertexClientPE.registerModule(attackTeleport);
VertexClientPE.registerModule(autoSword);
VertexClientPE.registerModule(criticals);
VertexClientPE.registerModule(fireAura);
VertexClientPE.registerModule(freezeAura);
VertexClientPE.registerModule(godMode);
VertexClientPE.registerModule(healthTags);
VertexClientPE.registerModule(hitboxes);
VertexClientPE.registerModule(instaKill);
VertexClientPE.registerModule(killAura);
VertexClientPE.registerModule(noHurt);
VertexClientPE.registerModule(regen);
VertexClientPE.registerModule(strafeAura);
VertexClientPE.registerModule(switchAimbot);
VertexClientPE.registerModule(tapAimbot);
VertexClientPE.registerModule(tpAura);
//MOVEMENT
VertexClientPE.registerModule(autoWalk);
/* if(Launcher.isToolbox()) {
	//VertexClientPE.registerModule(elytraBoost);
} */
VertexClientPE.registerModule(enderProjectiles);
VertexClientPE.registerModule(fastBridge);
VertexClientPE.registerModule(noFall);
VertexClientPE.registerModule(fastWalk);
//VertexClientPE.registerModule(fenceJump);
VertexClientPE.registerModule(flight);
VertexClientPE.registerModule(follow);
VertexClientPE.registerModule(frostWalk);
VertexClientPE.registerModule(glide);
VertexClientPE.registerModule(highJump);
VertexClientPE.registerModule(lifeSaver);
VertexClientPE.registerModule(liquidWalk);
VertexClientPE.registerModule(noDownGlide);
//VertexClientPE.registerModule(noInvisBedrock);
VertexClientPE.registerModule(pointTeleport);
VertexClientPE.registerModule(randomTP);
VertexClientPE.registerModule(ride);
VertexClientPE.registerModule(safeWalk);
VertexClientPE.registerModule(speedHack);
VertexClientPE.registerModule(step);
VertexClientPE.registerModule(tapJumpRun);
VertexClientPE.registerModule(tapTeleport);
//WORLD
VertexClientPE.registerModule(autoBuild);
VertexClientPE.registerModule(autoMine);
VertexClientPE.registerModule(autoPlace);
VertexClientPE.registerModule(chestESP);
VertexClientPE.registerModule(chestTracers);
VertexClientPE.registerModule(fullBright);
VertexClientPE.registerModule(nuker);
VertexClientPE.registerModule(powerExplosions);
VertexClientPE.registerModule(signEditor);
VertexClientPE.registerModule(stackDrop);
VertexClientPE.registerModule(tapExplosion);
VertexClientPE.registerModule(tapNuker);
VertexClientPE.registerModule(tapRemover);
VertexClientPE.registerModule(timer);
//PLAYER
VertexClientPE.registerModule(antiAFK);
VertexClientPE.registerModule(autoLeave);
VertexClientPE.registerModule(autoSpammer);
VertexClientPE.registerModule(autoSwitch);
VertexClientPE.registerModule(chatLog);
VertexClientPE.registerModule(chatRepeat);
VertexClientPE.registerModule(derp);
VertexClientPE.registerModule(fancyChat);
VertexClientPE.registerModule(fastBreak);
VertexClientPE.registerModule(glitchCam);
VertexClientPE.registerModule(homeCommand);
VertexClientPE.registerModule(itemGiver);
VertexClientPE.registerModule(phase);
VertexClientPE.registerModule(rotationPlus);
VertexClientPE.registerModule(twerk);
//MISC
VertexClientPE.registerModule(panic);
VertexClientPE.registerModule(switchGamemode);
VertexClientPE.registerModule(bypass);
VertexClientPE.registerModule(coordsDisplay);
VertexClientPE.registerModule(dropLocator);
VertexClientPE.registerModule(healthDisplay);
VertexClientPE.registerModule(letItSnow);
VertexClientPE.registerModule(onlyDay);
VertexClientPE.registerModule(orderAPizza);
VertexClientPE.registerModule(playerLocator);
VertexClientPE.registerModule(prevent);
VertexClientPE.registerModule(remoteView);
VertexClientPE.registerModule(serverInfo);
VertexClientPE.registerModule(target);
VertexClientPE.registerModule(teleport);
//VertexClientPE.registerModule(tracers);
VertexClientPE.registerModule(zoom);

//var autoClick = true;
function modTick() {
	VertexClientPE.playerIsInGame = true;
}

function attackHook(a, v) {
	if(preventAttacksSetting == "on") {
		preventDefault();
	}
	VertexClientPE.modules.forEach(function(element, index, array) {
		if(element.isStateMod() && element.state && element.onAttack) {
			if(bypassState && element.canBypassBypassMod) {
				if(!element.canBypassBypassMod()) {
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
			if(bypassState && element.canBypassBypassMod) {
				if(!element.canBypassBypassMod()) {
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
			if(bypassState && element.canBypassBypassMod) {
				if(!element.canBypassBypassMod()) {
					return;
				}
			}
			element.onEntityAdded(entity);
		}
	});
}

function useItem(x, y, z, itemId, blockId, side, blockDamage) {
	if(preventPlacingSetting == "on") {
		preventDefault();
	}
	VertexClientPE.modules.forEach(function(element, index, array) {
		if(element.isStateMod() && element.state && element.onUseItem) {
			if(bypassState && element.canBypassBypassMod) {
				if(!element.canBypassBypassMod()) {
					return;
				}
			}
			if(element.shouldPreventDefault) {
				preventDefault();
			}
			element.onUseItem(x, y, z, itemId, blockId, side, blockDamage);
		}
	});
	if(itemId == 54 && ((blockId != 54 && blockId != 58) || Entity.isSneaking(getPlayerEnt()))) {
		if(chestESPState) {
			new Thread_(new Runnable_({
				run: function() {
					VertexClientPE.toast("Adding chest to chest list...");
					Thread_.sleep(1200);
					let chestESPVector = new Vector3(x-(side==4?1:0)+(side==5?1:0),y-(side==0?1:0)+(side==1?1:0),z-(side==2?1:0)+(side==3?1:0));
					VertexClientPE.Utils.chests.push({
						x: chestESPVector.x,
						y: chestESPVector.y,
						z: chestESPVector.z
					});
				}
			})).start();
		}
	}
}

function explodeHook(entity, x, y, z, power, onFire) {
	VertexClientPE.modules.forEach(function(element, index, array) {
		if(element.isStateMod() && element.state && element.onExplode) {
			if(bypassState && element.canBypassBypassMod) {
				if(!element.canBypassBypassMod()) {
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
			if(bypassState && element.canBypassBypassMod) {
				if(!element.canBypassBypassMod()) {
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
			if(bypassState && element.canBypassBypassMod) {
				if(!element.canBypassBypassMod()) {
					return;
				}
			}
			if(Launcher.isBlockLauncher()) {
				element.onChatReceive(text, sender);
			}
		}
	});
}

function textPacketReceiveHook(type, sender, message) {
	if(type != 0) {
		VertexClientPE.modules.forEach(function(element, index, array) {
			if(element.onChatReceive) {
				if(bypassState && element.canBypassBypassMod) {
					if(!element.canBypassBypassMod()) {
						return;
					}
				}
				element.onChatReceive(message, sender);
			}
		});
	}
}

function chatHook(text) {
	if(text.startsWith(cmdPrefix) && commandsSetting == "on") {
		preventDefault();
		if(Launcher.isBlockLauncher()) {
			CONTEXT.nativeSetTextboxText("");
			CONTEXT.updateTextboxText("");
		}
		VertexClientPE.commandManager(text.substring(1, text.length));
	} else {
		if(text.charAt(0) != "/") {
			VertexClientPE.modules.forEach(function(element, index, array) {
				if(element.isStateMod() && element.state && element.onChat) {
					if(bypassState && element.canBypassBypassMod) {
						if(!element.canBypassBypassMod()) {
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
 *  # COMMANDS #
 *  ############
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
								if(element.isExpMod && element.isExpMod() && !VertexClientPE.isExpMode()) {
									VertexClientPE.toast("Experimental features aren't enabled!");
									return;
								}
								if(element.checkBeforeAdding && !element.checkBeforeAdding()) {
									VertexClientPE.toast("You didn't unlock this feature yet!");
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
					Level.dropItem(getPlayerX() + xx, getPlayerY() + zz, getPlayerZ() + yy, 1, i, 1);
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

var w = {
	syntax: "w <url>",
	type: "Command",
	isStateMod: function() {
		return false;
	},
	onCall: function(cmd) {
		var url = cmd.split(" ")[1];
		if(url == null || url.replaceAll(" ") == null) {
			VertexClientPE.syntaxError(this.syntax);
		} else {
			ModPE.goToURL(url);
		}
	}
}

var website = {
	syntax: "website <url>",
	type: "Command",
	isStateMod: function() {
		return false;
	},
	onCall: function(cmd) {
		w.onCall(cmd);
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
VertexClientPE.registerModule(w);
VertexClientPE.registerModule(website);

/**
 *  ##############
 *  # GUI & MORE #
 *  ##############
 */

VertexClientPE.GUI = {
	floatingMenus: []
}

VertexClientPE.GUI.PopupWindow = function() {
	var popupWindow = new PopupWindow_();
}

VertexClientPE.GUI.registerFloatingMenu = function() {
	var floatingPopupWindowShown = false;
	var display = new DisplayMetrics_();
	CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
	
	VertexClientPE.loadMainSettings();

	var floatingPopupWindow = new VertexClientPE.GUI.PopupWindow();
	var floatingPopupWindowLayout1 = new LinearLayout_(CONTEXT);
	var floatingPopupWindowScrollView = new ScrollView(CONTEXT);
	var floatingPopupWindowLayout = new LinearLayout_(CONTEXT);
	
	floatingPopupWindowLayout.setOrientation(1);
	floatingPopupWindowLayout1.setOrientation(1);
	
	floatingPopupWindowScrollView.addView(floatingPopupWindowLayout);
	
	var floatingCategoryTitle = new categoryTitle(VertexClientPE.category.toName(category), true);
	var floatingCategoryTitleSettings = floatingCategoryTitle.getLeftButton();
	var floatingCategoryTitleTitle = floatingCategoryTitle.getMiddleButton();
	var floatingCategoryTitleArrow = floatingCategoryTitle.getRightButton();
	
	floatingCategoryTitleSettings.setOnClickListener(new View_.OnClickListener({
		onClick: function() {
			VertexClientPE.showCategoryDialog(floatingCategoryTitle, VertexClientPE.category.toName(category), 0);
		}
	}));
	
	VertexClientPE.addView(floatingPopupWindow, floatingCategoryTitle);
	
	if(floatingPopupWindowShown == true) {
		floatingCategoryTitleArrow.setText("\u25B3");
		floatingPopupWindowLayout1.addView(floatingPopupWindowScrollView);
	} else if(floatingPopupWindowShown == false) {
		floatingCategoryTitleArrow.setText("\u25BD");
	}
	VertexClientPE.GUI.floatingMenus.push(this);
}

VertexClientPE.showNotification = function(eventTitle, eventText) {
	var mNM = CONTEXT.getSystemService(Context_.NOTIFICATION_SERVICE);
	var notification = new Notification_(android.R.drawable.ic_menu_edit, eventText, System_.currentTimeMillis());

	// The PendingIntent to launch our activity if the user selects this
	// notification
	var contentIntent = PendingIntent_.getActivity(CONTEXT, 0, new Intent_(CONTEXT), 0);

	// Set the info for the views that show in the notification panel.
	notification.setLatestEventInfo(CONTEXT, eventTitle, eventText, contentIntent);

	// Send the notification.
	mNM.notify(eventTitle, 0, notification);
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

var imgLogo = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/vertex_logo_new.png");
var imgProLogo = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/pro_logo.png");
var imgIcon = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/clienticon_new.png");
var imgIconClicked = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/clienticon_new_clicked.png");
var imgPlayButton = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/play_button.png");
var imgPlayButtonClicked = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/play_button_clicked.png");
var imgTwitterButton = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/twitter_button.png");
var imgTwitterButtonClicked = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/twitter_button_clicked.png");
var imgYouTubeButton = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/youtube_button.png");
var imgYouTubeButtonClicked = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/youtube_button_clicked.png");
var imgGitHubButton = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/github_button.png");
var imgGitHubButtonClicked = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/github_button_clicked.png");
var imgSteveHead = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/stevehead.png");
var imgChristmasTree = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/christmas_tree.png");
var iconClientGUI = new BitmapDrawable_(imgIcon);
var iconClickedClientGUI = new BitmapDrawable_(imgIconClicked)
var playButtonClientGUI = new BitmapDrawable_(imgPlayButton);
var playButtonClickedClientGUI = new BitmapDrawable_(imgPlayButtonClicked);
var splashTwitterButtonClientGUI = new BitmapDrawable_(imgTwitterButton);
var splashTwitterButtonClickedClientGUI = new BitmapDrawable_(imgTwitterButtonClicked);
var splashYouTubeButtonClientGUI = new BitmapDrawable_(imgYouTubeButton);
var splashYouTubeButtonClickedClientGUI = new BitmapDrawable_(imgYouTubeButtonClicked);
var splashGitHubButtonClientGUI = new BitmapDrawable_(imgGitHubButton);
var splashGitHubButtonClickedClientGUI = new BitmapDrawable_(imgGitHubButtonClicked);
var christmasTreeClientGUI = new BitmapDrawable_(imgChristmasTree);
//*******************
var fileDirt;
var inputStreamDirt;
var dirtBackgroundClientGUI;

var getContext = function() {
	return CONTEXT;
};

ModPE.goToURL = function(url) {
	var uri = Uri_.parse(url);
	var intent = new Intent_(Intent_.ACTION_VIEW, uri);
	CONTEXT.startActivity(intent);
};

ModPE.getAndroidVersion = function() {
	return HardwareInformation_.getAndroidVersion();
}

ModPE.getPlayerName = function() {
	if(Launcher.isToolbox) {
		var file = new File_("/sdcard/games/com.mojang/minecraftpe/options.txt");
		var br = new BufferedReader_(new InputStreamReader_(new FileInputStream_(file)));
		var read, username;
		while((read = br.readLine()) != null) {
			if(read.split(":")[0] == "mp_username") {
				username = read.split(":")[1];
				break;
			}
		}
		br.close();
		return username;
	}
	
	return Player.getName(getPlayerEnt());
};

ModPE.getFov = function() {
	var file = new File_("/sdcard/games/com.mojang/minecraftpe/options.txt");
	var br = new BufferedReader_(new InputStreamReader_(new FileInputStream_(file)));
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
	var fileOutputStream = new FileOutputStream_(new File_(Environment_.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/clientId.txt"));
	var outputStreamWriter = new OutputStreamWriter_(fileOutputStream);
	outputStreamWriter.write(clientId.toString());
	outputStreamWriter.close();
	fileOutputStream.close();
};

ModPE.getClientId = function() {
	var file = new File_("/sdcard/games/com.mojang/minecraftpe/clientId.txt");
	var br = new BufferedReader_(new InputStreamReader_(new FileInputStream_(file)));
	var read, username;
	while((read = br.readLine()) != null) {
		username = read;
		break;
	}
	br.close();
	return username;
};

function saveSetting(article, value) {
	var fileInputStream = new FileInputStream_(new File_(Environment_.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/options.txt"));
	var inputStreamReader = new InputStreamReader_(fileInputStream);
	var bufferedReader = new BufferedReader_(inputStreamReader);
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
	var fileOutputStream = new FileOutputStream_(new File_(Environment_.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/options.txt"));
	var outputStreamWriter = new OutputStreamWriter_(fileOutputStream);
	outputStreamWriter.write(tempSaved + article + ":" + value);
	outputStreamWriter.close();
	fileOutputStream.close();
};

ModPE.getInfo = function(infoName) { //profileName, sessionId
	return PreferenceManager_.getDefaultSharedPreferences(CONTEXT).getString(infoName, null);
}

ModPE.setSession = function(sessionId) {
	MainActivity_.setSession(sessionId);
}

ModPE.playerHasSplitControls = function() {
	var file = new File_("/sdcard/games/com.mojang/minecraftpe/options.txt");
	var br = new BufferedReader_(new InputStreamReader_(new FileInputStream_(file)));
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
	var file = new File_("/sdcard/games/com.mojang/minecraftpe/options.txt");
	var br = new BufferedReader_(new InputStreamReader_(new FileInputStream_(file)));
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

var URL = "https://www.pizzahut.co.uk/menu/pizza";

function pizzaOrderDialog(){

CONTEXT.runOnUiThread(new Runnable_({

run: function(){
try{
var wwv=new WebView_(CONTEXT);
var wS=wwv.getSettings();

wS.setJavaScriptEnabled(true);
wwv.setWebChromeClient(new WebChromeClient_());
wwv.setWebViewClient(new WebViewClient_());

wwv.loadUrl(URL);

var b=new AlertDialog_.Builder(CONTEXT);

b.setTitle(URL);
b.setView(wwv);
b.setNegativeButton("Close",new DialogInterface_.OnClickListener(){

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
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				var signEditorTitle = clientTextView("SignEditor", true);
				var btn = clientButton("Ok");
				var btn1 = clientButton("Cancel");
				var inputBar = clientEditText();
				var inputBar1 = clientEditText();
				var inputBar2 = clientEditText();
				var inputBar3 = clientEditText();
				var dialogLayout = LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(signEditorTitle);
				dialogLayout.addView(inputBar);
				dialogLayout.addView(inputBar1);
				dialogLayout.addView(inputBar2);
				dialogLayout.addView(inputBar3);
				dialogLayout.addView(btn);
				dialogLayout.addView(btn1);
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("SignEditor");
				inputBar.setHint("Line 1");
				inputBar.setText(Level.getSignText(signX, signY, signZ, 0));
				inputBar.setTextColor(Color_.WHITE);
				inputBar1.setHint("Line 2");
				inputBar1.setText(Level.getSignText(signX, signY, signZ, 1));
				inputBar1.setTextColor(Color_.WHITE);
				inputBar2.setHint("Line 3");
				inputBar2.setText(Level.getSignText(signX, signY, signZ, 2));
				inputBar2.setTextColor(Color_.WHITE);
				inputBar3.setHint("Line 4");
				inputBar3.setText(Level.getSignText(signX, signY, signZ, 3));
				inputBar3.setTextColor(Color_.WHITE);
				dialog.show();
				btn.setOnClickListener(new View_.OnClickListener() {
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
				btn1.setOnClickListener(new View_.OnClickListener() {
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
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				var bugReportTitle = clientTextView("An error occurred", true);
				var btn = clientButton("Report on GitHub");
				var btn1 = clientButton("Close");
				var inputBar = clientEditText();
				var exceptionTextView = clientTextView(exception);
				var dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(bugReportTitle);
				dialogLayout.addView(inputBar);
				dialogLayout.addView(exceptionTextView);
				dialogLayout.addView(btn);
				dialogLayout.addView(btn1);
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("An error occurred");
				inputBar.setHint("Title of the issue");
				inputBar.setTextColor(Color_.WHITE);
				dialog.show();
				btn.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						reportName = inputBar.getText();
						ModPE.goToURL("https://github.com/Vertex-Client/Vertex-Client-PE/issues/new?title=" + reportName + "&body=" + exception);
						dialog.dismiss();
					}
				});
				btn1.setOnClickListener(new View_.OnClickListener() {
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

VertexClientPE.showRemoteViewTargetDialog = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				var rvTitle = clientTextView("RemoteView | Target player by username", true);
				var btn = clientButton("Apply");
				var btn1 = clientButton("Close");
				var inputBar = clientEditText();
				var dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(rvTitle);
				dialogLayout.addView(inputBar);
				dialogLayout.addView(btn);
				dialogLayout.addView(btn1);
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("RemoteView | Target by username");
				inputBar.setHint("Username");
				inputBar.setTextColor(Color_.WHITE);
				dialog.show();
				btn.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						var username = inputBar.getText();
						var players = Server.getAllPlayers();
						var rvTargetDone = false;
						players.forEach(function(element, index, array) {
							if(Player.getName(element) == username || Entity.getNameTag(element) == username) {
								VertexClientPE.mods.forEach(function(e, i, a) {
									if(e.name == "RemoteView") {
										e.targetEntity = element;
										ModPE.setCamera(element);
									}
								});
								rvTargetDone = true;
								return;
							}
						});
						if(rvTargetDone) {
							VertexClientPE.toast("Your new RemoteView target is " + username + "!");
						} else {
							VertexClientPE.toast(username + " couldn't be found!");
						}
					}
				});
				btn1.setOnClickListener(new View_.OnClickListener() {
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

VertexClientPE.resetMenuPos = function() {
	combattpopx = combattpopx_def;
	combattpopy = combattpopy_def;
	vertexclientpecombatmenu.update(parseInt(combattpopx), parseInt(combattpopy), -1, -1);
	worldtpopx = worldtpopx_def;
	worldtpopy = worldtpopy_def;
	vertexclientpeworldmenu.update(parseInt(worldtpopx), parseInt(worldtpopy), -1, -1);
	movementtpopx = movementtpopx_def;
	movementtpopy = movementtpopy_def;
	vertexclientpemovementmenu.update(parseInt(movementtpopx), parseInt(movementtpopy), -1, -1);
	playertpopx = playertpopx_def;
	playertpopy = playertpopy_def;
	vertexclientpeplayermenu.update(parseInt(playertpopx), parseInt(playertpopy), -1, -1);
	misctpopx = misctpopx_def;
	misctpopy = misctpopy_def;
	vertexclientpemiscmenu.update(parseInt(misctpopx), parseInt(misctpopy), -1, -1);
	VertexClientPE.saveFloatingMenus("all");
	VertexClientPE.toast("Successfully reset all menu positions!");
}

var moreMenuIsOpen = false;

VertexClientPE.showMoreDialog = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				if(moreMenuIsOpen) {
					return;
				}
				moreMenuIsOpen = true;
				var moreTitle = clientTextView("More", true);
				var moreHR = clientHR();
				
				var webBrowserTitle = "";
				var playerCustomizerTitle = "";
				var optiFineTitle = "";
				if(!VertexClientPE.isPro()) {
					webBrowserTitle += "\uD83D\uDD12 ";
					playerCustomizerTitle += "\uD83D\uDD12 ";
					optiFineTitle += "\uD83D\uDD12 ";
				}
				webBrowserTitle += "Webbrowser";
				playerCustomizerTitle += "Player Customizer";
				optiFineTitle += "OptiFine";
				
				var dashboardButton = clientButton("Dashboard");
				dashboardButton.setCompoundDrawablesWithIntrinsicBounds(0, android.R.drawable.ic_dialog_dialer, 0, 0);
				var webBrowserButton = clientButton(webBrowserTitle);
				webBrowserButton.setCompoundDrawablesWithIntrinsicBounds(0, android.R.drawable.ic_menu_mapmode, 0, 0);
				var playerCustomizerButton = clientButton(playerCustomizerTitle);
				playerCustomizerButton.setCompoundDrawablesWithIntrinsicBounds(0, android.R.drawable.presence_online, 0, 0);
				var optiFineButton = clientButton(optiFineTitle);
				optiFineButton.setCompoundDrawablesWithIntrinsicBounds(0, android.R.drawable.ic_menu_zoom, 0, 0);
				var resetPosButton = clientButton("Reset moveable menu positions");
				resetPosButton.setCompoundDrawablesWithIntrinsicBounds(0, android.R.drawable.stat_notify_sync, 0, 0);
				var screenshotButton = clientButton("Take a screenshot");
				var rvTargetButton = clientButton("RemoteView | Target player by username");
				var dialogLayout1 = new LinearLayout_(CONTEXT);
				dialogLayout1.setBackgroundDrawable(backgroundGradient());
				dialogLayout1.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout1.setPadding(10, 10, 10, 10);
				dialogLayout1.setGravity(Gravity_.CENTER);
				var dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				var dialogScrollView = new ScrollView(CONTEXT);
				dialogScrollView.addView(dialogLayout);
				dialogLayout1.addView(moreTitle);
				dialogLayout1.addView(moreHR);
				dialogLayout1.addView(dialogScrollView);
				dialogLayout.addView(dashboardButton);
				dialogLayout.addView(optiFineButton);
				dialogLayout.addView(playerCustomizerButton);
				dialogLayout.addView(webBrowserButton);
				if(VertexClientPE.menuIsShowing && menuType == "normal") {
					dialogLayout.addView(resetPosButton);
				}
				if(VertexClientPE.isExpMode()) {
					dialogLayout.addView(screenshotButton);
				}
				if(remoteViewState) {
					dialogLayout.addView(rvTargetButton);
				}
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout1);
				dialog.setTitle("More");
				dialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
					onDismiss: function() {
						moreMenuIsOpen = false;
					}
				});
				dialog.show();
				dashboardButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
						VertexClientPE.closeMenu();
						dashboardScreen();
					}
				});
				webBrowserButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						if(!VertexClientPE.isPro()) {
							VertexClientPE.showProDialog("Webbrowser");
							return;
						}
						dialog.dismiss();
						VertexClientPE.closeMenu();
						webBrowserScreen();
						overlayWebBrowser();
					}
				});
				playerCustomizerButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						if(!VertexClientPE.isPro()) {
							VertexClientPE.showProDialog("Player Customizer");
							return;
						}
						dialog.dismiss();
						VertexClientPE.closeMenu();
						playerCustomizerScreen();
					}
				});
				optiFineButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						if(!VertexClientPE.isPro()) {
							VertexClientPE.showProDialog("OptiFine");
							return;
						}
						dialog.dismiss();
						VertexClientPE.closeMenu();
						optiFineScreen();
					}
				});
				resetPosButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						VertexClientPE.resetMenuPos();
						dialog.dismiss();
					}
				});
				screenshotButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						new Thread_(new Runnable_() {
							run: function() {
								dialog.dismiss();
								Thread_.sleep(1000);
								VertexClientPE.Utils.takeScreenshot(screenshotModeSetting);
							}
						}).start();
					}
				});
				rvTargetButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
						VertexClientPE.showRemoteViewTargetDialog();
					}
				});
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

VertexClientPE.showShortcutManagerDialog = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				VertexClientPE.loadMainSettings();
				var settingsTitle = clientScreenTitle("Settings");
				var shortcutManagerTitle = clientTextView("Shortcut Manager", true);
				shortcutManagerTitle.setGravity(Gravity_.CENTER);
				var shortcutManagerEnter = clientTextView("\n");
				var closeButton = clientButton("Close");
				closeButton.setPadding(0.5, closeButton.getPaddingTop(), 0.5, closeButton.getPaddingBottom());
				var dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 0, 10, 10);
				dialogLayout.addView(settingsTitle);
				dialogLayout.addView(shortcutManagerTitle);
				dialogLayout.addView(shortcutManagerEnter);
				
				var shortcutSizeSettingTitle = clientTextView("Shortcut button size: | " + shortcutSizeSetting, true);
				var shortcutSizeSettingSlider = clientSeekBar();
				var minShortcutSize = 16;
				shortcutSizeSettingSlider.setProgress(shortcutSizeSetting - minShortcutSize);
				shortcutSizeSettingSlider.setMax(64 - minShortcutSize);
				shortcutSizeSettingSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
					onProgressChanged: function() {
						shortcutSizeSetting = shortcutSizeSettingSlider.getProgress() + minShortcutSize;
						shortcutSizeSettingTitle.setText("Shortcut button size: | " + shortcutSizeSetting);
					}
				});
				
				var shortcutUIHeightSettingTitle = clientTextView("Shortcut UI height: | " + shortcutUIHeightSetting + " * shortcut button size", true);
				var shortcutUIHeightSettingSlider = clientSeekBar();
				var minShortcutUIHeight = 1;
				var maxShortcutUIHeight = 20;
				shortcutUIHeightSettingSlider.setProgress(shortcutUIHeightSetting - minShortcutUIHeight);
				shortcutUIHeightSettingSlider.setMax(maxShortcutUIHeight - minShortcutUIHeight);
				shortcutUIHeightSettingSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
					onProgressChanged: function() {
						shortcutUIHeightSetting = shortcutUIHeightSettingSlider.getProgress() + minShortcutUIHeight;
						shortcutUIHeightSettingTitle.setText("Shortcut UI height: | " + shortcutUIHeightSetting + " * shortcut button size");
					}
				});
				
				dialogLayout.addView(shortcutSizeSettingTitle);
				dialogLayout.addView(shortcutSizeSettingSlider);
				dialogLayout.addView(shortcutUIHeightSettingTitle);
				dialogLayout.addView(shortcutUIHeightSettingSlider);
				
				var shortcutUIPosSettingFunc = new settingButton("Shortcut UI position ", null, display.widthPixels - 20,
					function(viewArg) {
						shortcutUIPosSetting = "right-center";
						shortcutUIPosSettingButton.setText("Right-center");
					}
				);
				var shortcutUIPosSettingButton = shortcutUIPosSettingFunc.getButton();
				if(shortcutUIPosSetting == "left-bottom") {
					shortcutUIPosSettingButton.setText("Left-bottom");
				} else if(shortcutUIPosSetting == "left-center") {
					shortcutUIPosSettingButton.setText("Left-center");
				} else if(shortcutUIPosSetting == "left-top") {
					shortcutUIPosSettingButton.setText("Left-top");
				} else if(shortcutUIPosSetting == "right-bottom") {
					shortcutUIPosSettingButton.setText("Right-bottom");
				} else if(shortcutUIPosSetting == "right-center") {
					shortcutUIPosSettingButton.setText("Right-center");
				} else if(shortcutUIPosSetting == "right-top") {
					shortcutUIPosSettingButton.setText("Right-top");
				}
				shortcutUIPosSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(shortcutUIPosSetting == "left-bottom") {
							shortcutUIPosSetting = "left-center";
							shortcutUIPosSettingButton.setText("Left-center");
						} else if(shortcutUIPosSetting == "left-center") {
							shortcutUIPosSetting = "left-top";
							shortcutUIPosSettingButton.setText("Left-top");
						} else if(shortcutUIPosSetting == "left-top") {
							shortcutUIPosSetting = "right-bottom";
							shortcutUIPosSettingButton.setText("Right-bottom");
						} else if(shortcutUIPosSetting == "right-bottom") {
							shortcutUIPosSetting = "right-center";
							shortcutUIPosSettingButton.setText("Right-center");
						} else if(shortcutUIPosSetting == "right-center") {
							shortcutUIPosSetting = "right-top";
							shortcutUIPosSettingButton.setText("Right-top");
						} else if(shortcutUIPosSetting == "right-top") {
							shortcutUIPosSetting = "left-bottom";
							shortcutUIPosSettingButton.setText("Left-bottom");
						}
						VertexClientPE.saveMainSettings();
					}
				}));
				
				var showIconsOnTileShortcutsSettingFunc = new settingButton("Show icons on tile/screen shortcuts ", null, display.widthPixels - 20,
					function(viewArg) {
						showIconsOnTileShortcutsSetting = "on";
						showIconsOnTileShortcutsSettingButton.setText("ON");
					}
				);
				var showIconsOnTileShortcutsSettingButton = showIconsOnTileShortcutsSettingFunc.getButton();
				if(showIconsOnTileShortcutsSetting == "off") {
					showIconsOnTileShortcutsSettingButton.setText("OFF");
				} else if(showIconsOnTileShortcutsSetting == "on") {
					showIconsOnTileShortcutsSettingButton.setText("ON");
				}
				showIconsOnTileShortcutsSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(showIconsOnTileShortcutsSetting == "off") {
							showIconsOnTileShortcutsSetting = "on";
							showIconsOnTileShortcutsSettingButton.setText("ON");
						} else if(showIconsOnTileShortcutsSetting == "on") {
							showIconsOnTileShortcutsSetting = "off";
							showIconsOnTileShortcutsSettingButton.setText("OFF");
						}
						VertexClientPE.saveMainSettings();
					}
				}));
				
				VertexClientPE.addView(dialogLayout, shortcutUIPosSettingFunc);
				VertexClientPE.addView(dialogLayout, showIconsOnTileShortcutsSettingFunc);
				dialogLayout.addView(clientTextView("\n"));
				dialogLayout.addView(closeButton);
				
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("Shortcut Manager");
				dialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
					onDismiss: function() {
						VertexClientPE.saveMainSettings();
					}
				});
				dialog.show();
				var window = dialog.getWindow();
				window.setLayout(display.widthPixels, display.heightPixels);
				closeButton.setOnClickListener(new View_.OnClickListener() {
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

VertexClientPE.showFeaturesDialog = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				VertexClientPE.loadMainSettings();
				var settingsTitle = clientScreenTitle("Settings");
				var featuresTitle = clientTextView("Opt in/out features\n", true);
				featuresTitle.setGravity(Gravity_.CENTER);
				var featuresText = clientTextView("Changes on this dialog will only apply after restart", true);
				featuresText.setTextSize(8);
				featuresText.setTypeface(null, Typeface_.ITALIC);
				featuresText.setGravity(Gravity_.CENTER);
				var closeButton = clientButton("Close");
				closeButton.setPadding(0.5, closeButton.getPaddingTop(), 0.5, closeButton.getPaddingBottom());
				var dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(settingsTitle);
				dialogLayout.addView(featuresTitle);
				dialogLayout.addView(featuresText);
				
				var combatEnabledSettingButton = clientSwitch();
				combatEnabledSettingButton.setText("Combat");
				combatEnabledSettingButton.setChecked(combatSaveEnabled == "on");
				combatEnabledSettingButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
					onCheckedChanged: function() {
						if(combatSaveEnabled == "off") {
							combatSaveEnabled = "on";
						} else if(combatSaveEnabled == "on") {
							combatSaveEnabled = "off";
						}
						VertexClientPE.saveFeaturesSettings();
					}
				}));
				
				var worldEnabledSettingButton = clientSwitch();
				worldEnabledSettingButton.setText("World");
				worldEnabledSettingButton.setChecked(worldSaveEnabled == "on");
				worldEnabledSettingButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
					onCheckedChanged: function() {
						if(worldSaveEnabled == "off") {
							worldSaveEnabled = "on";
						} else if(worldSaveEnabled == "on") {
							worldSaveEnabled = "off";
						}
						VertexClientPE.saveFeaturesSettings();
					}
				}));
				
				var movementEnabledSettingButton = clientSwitch();
				movementEnabledSettingButton.setText("Movement");
				movementEnabledSettingButton.setChecked(movementSaveEnabled == "on");
				movementEnabledSettingButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
					onCheckedChanged: function() {
						if(movementSaveEnabled == "off") {
							movementSaveEnabled = "on";
						} else if(movementSaveEnabled == "on") {
							movementSaveEnabled = "off";
						}
						VertexClientPE.saveFeaturesSettings();
					}
				}));
				
				var playerEnabledSettingButton = clientSwitch();
				playerEnabledSettingButton.setText("Player");
				playerEnabledSettingButton.setChecked(playerSaveEnabled == "on");
				playerEnabledSettingButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
					onCheckedChanged: function() {
						if(playerSaveEnabled == "off") {
							playerSaveEnabled = "on";
						} else if(playerSaveEnabled == "on") {
							playerSaveEnabled = "off";
						}
						VertexClientPE.saveFeaturesSettings();
					}
				}));
				
				var miscEnabledSettingButton = clientSwitch();
				miscEnabledSettingButton.setText("Misc");
				miscEnabledSettingButton.setChecked(miscSaveEnabled == "on");
				miscEnabledSettingButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
					onCheckedChanged: function() {
						if(miscSaveEnabled == "off") {
							miscSaveEnabled = "on";
						} else if(miscSaveEnabled == "on") {
							miscSaveEnabled = "off";
						}
						VertexClientPE.saveFeaturesSettings();
					}
				}));
				
				var singleplayerEnabledSettingButton = clientSwitch();
				singleplayerEnabledSettingButton.setText("Singleplayer Only Mods");
				singleplayerEnabledSettingButton.setChecked(singleplayerSaveEnabled == "on");
				singleplayerEnabledSettingButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
					onCheckedChanged: function() {
						if(singleplayerSaveEnabled == "off") {
							singleplayerSaveEnabled = "on";
						} else if(singleplayerSaveEnabled == "on") {
							singleplayerSaveEnabled = "off";
						}
						VertexClientPE.saveFeaturesSettings();
					}
				}));
				
				dialogLayout.addView(combatEnabledSettingButton);
				dialogLayout.addView(worldEnabledSettingButton);
				dialogLayout.addView(movementEnabledSettingButton);
				dialogLayout.addView(playerEnabledSettingButton);
				dialogLayout.addView(miscEnabledSettingButton);
				dialogLayout.addView(singleplayerEnabledSettingButton);
				dialogLayout.addView(clientTextView("\n"));
				dialogLayout.addView(closeButton);
				
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.setContentView(dialogLayout);
				dialog.setTitle("Shortcut Manager");
				dialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
					onDismiss: function() {
						VertexClientPE.saveMainSettings();
					}
				});
				dialog.show();
				var window = dialog.getWindow();
				window.setLayout(display.widthPixels, display.heightPixels);
				closeButton.setOnClickListener(new View_.OnClickListener() {
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

VertexClientPE.showSettingSelectorDialog = function(sRightButton, dialogTitle, selectionArray, currentSelection, varToChange, customFirstOnClick) {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				VertexClientPE.loadMainSettings();
				var settingsTitle = clientScreenTitle("Settings");
				var dTitle = clientTextView(dialogTitle, true);
				dTitle.setGravity(Gravity_.CENTER);
				var closeEnter = clientTextView("\n");
				var closeButton = clientButton("Close");
				closeButton.setPadding(0.5, closeButton.getPaddingTop(), 0.5, closeButton.getPaddingBottom());
				
				var dScrollView = new ScrollView_(CONTEXT);
				dScrollView.setLayoutParams(new LinearLayout_.LayoutParams(LinearLayout_.LayoutParams.WRAP_CONTENT, LinearLayout_.LayoutParams.WRAP_CONTENT));
				dScrollView.setScrollBarStyle(View_.SCROLLBARS_OUTSIDE_OVERLAY);
				dScrollView.setFillViewport(true);
				var dScrollInside = new LinearLayout_(CONTEXT);
				dScrollInside.setGravity(Gravity_.CENTER);
				dScrollInside.setOrientation(1);
				dScrollView.addView(dScrollInside);
				
				var dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setGravity(Gravity_.CENTER);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(settingsTitle);
				dialogLayout.addView(dTitle);
				dialogLayout.addView(dScrollView);
				
				var dialogTableLayout = new TableLayout_(CONTEXT);
				var dialogTableRow;
				var tempButton;
				
				selectionArray.forEach(function(element, index, array) {
					if(index % 2 == 1) {
						if(!dialogTableRow) {
							dialogTableRow = new TableRow_(CONTEXT);
						}
						tempButton = clientButton(element);
						tempButton.setLayoutParams(new TableRow_.LayoutParams(display.widthPixels / 2.5, LinearLayout_.LayoutParams.WRAP_CONTENT));
						tempButton.setPadding(0, 0, 0, 0);
						tempButton.setOnClickListener(new View_.OnClickListener() {
							onClick: function(viewArg) {
								eval(varToChange + " = '" + element.toLowerCase() + "'");
								sRightButton.setText(element);
								VertexClientPE.shouldUpdateGUI = true;
								dialog.dismiss();
							}
						});
						dialogTableRow.addView(tempButton);
						dialogTableLayout.addView(dialogTableRow);
						dialogTableRow = null;
						tempButton = null;
					} else {
						dialogTableRow = new TableRow_(CONTEXT);
						tempButton = clientButton(element);
						tempButton.setLayoutParams(new TableRow_.LayoutParams(display.widthPixels / 2.5, LinearLayout_.LayoutParams.WRAP_CONTENT));
						tempButton.setPadding(0, 0, 0, 0);
						if(index == 0 && customFirstOnClick != null) {
							tempButton.setOnClickListener(new View_.OnClickListener() {
								onClick: function(viewArg) {
									customFirstOnClick(sRightButton, dialogTitle);
									dialog.dismiss();
								}
							});
						} else {
							tempButton.setOnClickListener(new View_.OnClickListener() {
								onClick: function(viewArg) {
									eval(varToChange + " = '" + element.toLowerCase() + "'");
									sRightButton.setText(element);
									VertexClientPE.shouldUpdateGUI = true;
									dialog.dismiss();
								}
							});
						}
						dialogTableRow.addView(tempButton);
						tempButton = null;
					}
				});
				if(dialogTableRow != null) {
					dialogTableLayout.addView(dialogTableRow);
				}
				
				dScrollInside.addView(dialogTableLayout);
				//dialogLayout.addView(closeEnter);
				//dialogLayout.addView(closeButton);
				
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.setContentView(dialogLayout);
				dialog.setTitle(dialogTitle);
				dialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
					onDismiss: function() {
						VertexClientPE.saveMainSettings();
					}
				});
				dialog.show();
				var window = dialog.getWindow();
				window.setLayout(display.widthPixels, display.heightPixels);
				closeButton.setOnClickListener(new View_.OnClickListener() {
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

var newRed, newGreen, newBlue, newRedStroke, newGreenStroke, newBlueStroke;

VertexClientPE.showCustomRGBDialog = function(sRightButton, dialogTitle) {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				VertexClientPE.loadMainSettings();
				
				newRed = customRGBRed;
				newGreen = customRGBGreen;
				newBlue = customRGBBlue;
				newRedStroke = customRGBRedStroke;
				newGreenStroke = customRGBGreenStroke;
				newBlueStroke = customRGBBlueStroke;
				
				var settingsTitle = clientScreenTitle("Settings");
				var dTitle = clientTextView(dialogTitle, true);
				dTitle.setGravity(Gravity_.CENTER);
				var cancelEnter = clientTextView("\n");
				
				var doneButton = clientButton("Done");
				doneButton.setPadding(0.5, doneButton.getPaddingTop(), 0.5, doneButton.getPaddingBottom());
				var cancelButton = clientButton("Cancel");
				cancelButton.setPadding(0.5, cancelButton.getPaddingTop(), 0.5, cancelButton.getPaddingBottom());
				
				var dScrollView = new ScrollView_(CONTEXT);
				dScrollView.setLayoutParams(new LinearLayout_.LayoutParams(LinearLayout_.LayoutParams.FILL_PARENT, screenHeight / 2.5));
				dScrollView.setScrollBarStyle(View_.SCROLLBARS_OUTSIDE_OVERLAY);
				dScrollView.setFillViewport(true);
				var dScrollInside = new LinearLayout_(CONTEXT);
				dScrollInside.setGravity(Gravity_.CENTER);
				dScrollInside.setOrientation(1);
				dScrollView.addView(dScrollInside);
			 
				var pickerButton0 = clientButton("Pick inner color");
				pickerButton0.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
						var pickerWindow = new ColorPickerWindow(newRed, newGreen, newBlue, function (color) {
							newRed = Color_.red(color);
							newGreen = Color_.green(color);
							newBlue = Color_.blue(color);
						}, function() {
							dialog.show();
							redSlider.setProgress(newRed);
							greenSlider.setProgress(newGreen);
							blueSlider.setProgress(newBlue);
						});
						pickerWindow.show();
					}
				});
			 
				var pickerButton1 = clientButton("Pick stroke color");
				pickerButton1.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
						var pickerWindow = new ColorPickerWindow(newRedStroke, newGreenStroke, newBlueStroke, function (color) {
							newRedStroke = Color_.red(color);
							newGreenStroke = Color_.green(color);
							newBlueStroke = Color_.blue(color);
						}, function() {
							dialog.show();
							redStrokeSlider.setProgress(newRedStroke);
							greenStrokeSlider.setProgress(newGreenStroke);
							blueStrokeSlider.setProgress(newBlueStroke);
						});
						pickerWindow.show();
					}
				});
			 
				var redTitle = clientTextView("Red (inner): | " + newRed, true);
				var redSlider = clientSeekBar();
				redSlider.setMax(255);
				redSlider.setProgress(newRed);
				redSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
					onProgressChanged: function() {
						newRed = redSlider.getProgress();
						redTitle.setText("Red (inner): | " + newRed);
					}
				});
				
				var greenTitle = clientTextView("Green (inner): | " + newGreen, true);
				var greenSlider = clientSeekBar();
				greenSlider.setMax(255);
				greenSlider.setProgress(newGreen);
				greenSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
					onProgressChanged: function() {
						newGreen = greenSlider.getProgress();
						greenTitle.setText("Green (inner): | " + newGreen);
					}
				});
				
				var blueTitle = clientTextView("Blue (inner): | " + newBlue, true);
				var blueSlider = clientSeekBar();
				blueSlider.setMax(255);
				blueSlider.setProgress(newBlue);
				blueSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
					onProgressChanged: function() {
						newBlue = blueSlider.getProgress();
						blueTitle.setText("Blue (inner): | " + newBlue);
					}
				});
				
				var redStrokeTitle = clientTextView("Red (stroke): | " + newRedStroke, true);
				var redStrokeSlider = clientSeekBar();
				redStrokeSlider.setMax(255);
				redStrokeSlider.setProgress(newRedStroke);
				redStrokeSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
					onProgressChanged: function() {
						newRedStroke = redStrokeSlider.getProgress();
						redStrokeTitle.setText("Red (stroke): | " + newRedStroke);
					}
				});
				
				var greenStrokeTitle = clientTextView("Green (stroke): | " + newGreenStroke, true);
				var greenStrokeSlider = clientSeekBar();
				greenStrokeSlider.setMax(255);
				greenStrokeSlider.setProgress(newGreenStroke);
				greenStrokeSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
					onProgressChanged: function() {
						newGreenStroke = greenStrokeSlider.getProgress();
						greenStrokeTitle.setText("Green (stroke): | " + newGreenStroke);
					}
				});
				
				var blueStrokeTitle = clientTextView("Blue (stroke): | " + newBlueStroke, true);
				var blueStrokeSlider = clientSeekBar();
				blueStrokeSlider.setMax(255);
				blueStrokeSlider.setProgress(newBlueStroke);
				blueStrokeSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
					onProgressChanged: function() {
						newBlueStroke = blueStrokeSlider.getProgress();
						blueStrokeTitle.setText("Blue (stroke): | " + newBlueStroke);
					}
				});
				
				dScrollInside.addView(redTitle);
				dScrollInside.addView(redSlider);
				dScrollInside.addView(greenTitle);
				dScrollInside.addView(greenSlider);
				dScrollInside.addView(blueTitle);
				dScrollInside.addView(blueSlider);
				dScrollInside.addView(pickerButton0);
				
				dScrollInside.addView(redStrokeTitle);
				dScrollInside.addView(redStrokeSlider);
				dScrollInside.addView(greenStrokeTitle);
				dScrollInside.addView(greenStrokeSlider);
				dScrollInside.addView(blueStrokeTitle);
				dScrollInside.addView(blueStrokeSlider);
				dScrollInside.addView(pickerButton1);
				
				var dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setGravity(Gravity_.CENTER);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(settingsTitle);
				dialogLayout.addView(dTitle);
				dialogLayout.addView(dScrollView);
				
				dialogLayout.addView(cancelEnter);
				dialogLayout.addView(doneButton);
				dialogLayout.addView(cancelButton);
				
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.setContentView(dialogLayout);
				dialog.setTitle(dialogTitle);
				dialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
					onDismiss: function() {
						VertexClientPE.saveMainSettings();
					}
				});
				dialog.show();
				var window = dialog.getWindow();
				window.setLayout(display.widthPixels, display.heightPixels);
				doneButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						if(customRGBRed != newRed || customRGBGreen != newGreen || customRGBBlue != newBlue || customRGBRedStroke != newRedStroke || customRGBGreenStroke != newGreenStroke || customRGBBlueStroke != newBlueStroke) {
							customRGBRed = newRed;
							customRGBGreen = newGreen;
							customRGBBlue = newBlue;
							customRGBRedStroke = newRedStroke;
							customRGBGreenStroke = newGreenStroke;
							customRGBBlueStroke = newBlueStroke;
							VertexClientPE.shouldUpdateGUI = true;
						}
						if(themeSetting != "custom rgb") {
							themeSetting = "custom rgb";
							sRightButton.setText("Custom RGB");
							VertexClientPE.shouldUpdateGUI = true;
						}
						VertexClientPE.saveCustomRGBSettings();
						dialog.dismiss();
					}
				});
				cancelButton.setOnClickListener(new View_.OnClickListener() {
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

VertexClientPE.showModEditorDialog = function(defaultName, modTitleView, modButtonView) {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				var _0xf030=["\x69\x73\x50\x72\x6F","\x52\x65\x6E\x61\x6D\x69\x6E\x67\x20\x6D\x6F\x64\x73","\x73\x68\x6F\x77\x50\x72\x6F\x44\x69\x61\x6C\x6F\x67"];if(!VertexClientPE[_0xf030[0]]()){VertexClientPE[_0xf030[2]](_0xf030[1]);return}
				
				if(defaultName == "Bypass") {
					modButtonView = bypassModButtonView;
				}
				if(defaultName == "Panic") {
					modButtonView = panicModButtonView;
				}
				
				var dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setOrientation(1);
				dialogLayout.setBackgroundDrawable(backgroundSpecial());
				dialogLayout.setPadding(1.5, 0, 1, 1);
				
				var modEditorTitleLayout = new LinearLayout_(CONTEXT);
				modEditorTitleLayout.setOrientation(LinearLayout_.HORIZONTAL);
				
				var currentName = VertexClientPE.getCustomModName(defaultName);
				
				var modEditorDialogEditText = clientEditText(currentName);
				modEditorDialogEditText.setInputType(InputType_.TYPE_TEXT_FLAG_NO_SUGGESTIONS);
				modEditorDialogEditText.setTextSize(20);
				modEditorDialogEditText.addTextChangedListener(new TextWatcher_() {
					afterTextChanged: function() {
						currentName = modEditorDialogEditText.getText();
						modTitleView.setText(currentName);
						modButtonView.setText(currentName);
						editor.putString("VertexClientPE.mods." + defaultName + ".name", currentName);
						editor.commit();
					}
				});
				
				modEditorTitleLayout.addView(modEditorDialogEditText);
				dialogLayout.addView(modEditorTitleLayout);
				
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle(currentName);
				dialog.show();
				var window = dialog.getWindow();
				var windowParams = window.getAttributes();
				windowParams.gravity = Gravity_.TOP | Gravity_.LEFT;
				windowParams.y = 0;
				window.setAttributes(windowParams);
				window.setDimAmount(0);
				window.setLayout(display.widthPixels, LinearLayout_.LayoutParams.WRAP_CONTENT);
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

VertexClientPE.getCustomModName = function(defaultName) {
	return sharedPref.getString("VertexClientPE.mods." + defaultName + ".name", defaultName);
}

var modDialogShowing = false;

VertexClientPE.showModDialog = function(mod, btn) {
	if(modDialogShowing) {
		return;
	}
	modDialogShowing = true;
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				VertexClientPE.loadMainSettings();
				var modTitleLayout = new LinearLayout_(CONTEXT);
				modTitleLayout.setOrientation(LinearLayout_.HORIZONTAL);
				var modTitle = clientTextView(VertexClientPE.getCustomModName(mod.name), true);
				modTitle.setTextSize(20);
				var modEditButton = new Button_(CONTEXT);
				modEditButton.setLayoutParams(new LinearLayout_.LayoutParams(64, 64));
				modEditButton.setBackgroundDrawable(CONTEXT.getResources().getDrawable(android.R.drawable.ic_menu_edit));
				modEditButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(v) {
						VertexClientPE.showModEditorDialog(mod.name, modTitle, btn);
					}
				});
				var modFavButton = new Button_(CONTEXT);
				modFavButton.setLayoutParams(new LinearLayout_.LayoutParams(64, 64));
				if(sharedPref.getString("VertexClientPE.mods." + mod.name + ".isFavorite", "false") == "true") {
					modFavButton.setBackgroundDrawable(CONTEXT.getResources().getDrawable(android.R.drawable.btn_star_big_on));
				} else {
					modFavButton.setBackgroundDrawable(CONTEXT.getResources().getDrawable(android.R.drawable.btn_star_big_off));
				}
				modFavButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(v) {
						if(sharedPref.getString("VertexClientPE.mods." + mod.name + ".isFavorite", "false") == "true") {
							editor.putString("VertexClientPE.mods." + mod.name + ".isFavorite", "false");
							editor.commit();
							modFavButton.setBackgroundDrawable(CONTEXT.getResources().getDrawable(android.R.drawable.btn_star_big_off));
						} else {
							editor.putString("VertexClientPE.mods." + mod.name + ".isFavorite", "true");
							editor.commit();
							modFavButton.setBackgroundDrawable(CONTEXT.getResources().getDrawable(android.R.drawable.btn_star_big_on));
						}
					}
				});
				modTitleLayout.addView(modTitle);
				modTitleLayout.addView(modEditButton);
				modTitleLayout.addView(modFavButton);
				var type = "Type: " + mod.type;
				if(mod.singleplayerOnly) {
					type += " (singleplayer only)";
				}
				type += "\n";
				var modTypeText = clientTextView(type);
				var modDescTitle = clientTextView("Description:");
				var modDescText = clientTextView(mod.desc);
				var modEnter = clientTextView("\n");
				var closeButton = clientButton("Close");
				closeButton.setPadding(0.5, closeButton.getPaddingTop(), 0.5, closeButton.getPaddingBottom());
				var dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(modTitleLayout);
				if(mod.source != null) {
					dialogLayout.addView(clientTextView("Source: " + mod.source + "\n"));
				}
				dialogLayout.addView(modTypeText);
				dialogLayout.addView(modDescTitle);
				dialogLayout.addView(modDescText);
				dialogLayout.addView(modEnter);
				
				var settingsLinearLayout = new ScrollView(CONTEXT);
				settingsLinearLayout.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels, display.heightPixels / 3));
				var settingsScrollView = new ScrollView(CONTEXT);
				
				if(mod.getSettingsLayout) {
					dialogLayout.addView(settingsLinearLayout);
					settingsLinearLayout.addView(settingsScrollView);
					settingsScrollView.addView(mod.getSettingsLayout());
				}
				
				var dialogExtraLayout = new LinearLayout_(CONTEXT);
				dialogExtraLayout.setOrientation(LinearLayout_.HORIZONTAL);
				dialogLayout.addView(dialogExtraLayout);
				if(mod.name != "Prevent" && mod.name != "Target") {
					dialogExtraLayoutLeft = new LinearLayout_(CONTEXT);
					dialogExtraLayoutLeft.setOrientation(1);
					dialogExtraLayoutLeft.setGravity(Gravity_.CENTER);
					dialogExtraLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - 10, display.heightPixels / 10));
					dialogExtraLayoutRight = new LinearLayout_(CONTEXT);
					dialogExtraLayoutRight.setOrientation(1);
					dialogExtraLayoutRight.setGravity(Gravity_.CENTER);
					dialogExtraLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - 10, display.heightPixels / 10));
					dialogExtraLayout.addView(dialogExtraLayoutLeft);
					dialogExtraLayout.addView(dialogExtraLayoutRight);
					closeButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 3 - 10, display.heightPixels / 10));
					dialogExtraLayoutLeft.addView(closeButton);
					var toggleButton = clientButton("Toggle");
					toggleButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 3 - 10, display.heightPixels / 10));
					if(mod.isStateMod()) {
						if(mod.state) {
							toggleButton.setText("Disable");
							if(bypassState && mod.canBypassBypassMod && !mod.canBypassBypassMod()) {
								toggleButton.setTextColor(modButtonColorBlocked);
							} else {
								toggleButton.setTextColor(modButtonColorEnabled);
							}
							if(fontSetting != "minecraft") {
								toggleButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
							}
						} else {
							toggleButton.setText("Enable");
						}
					}
					toggleButton.setOnClickListener(new View_.OnClickListener() {
						onClick: function(view) {
							if(mod.name == "Bypass") {
								mod.onToggle();
							} else {
								if(!bypassState) {
									mod.onToggle();
								} else if(bypassState && mod.canBypassBypassMod == undefined || mod.canBypassBypassMod == null) {
									mod.onToggle();
								} else if(bypassState && mod.canBypassBypassMod && !mod.canBypassBypassMod()) {
									if(mod.isStateMod() && mod.state) {
										mod.onToggle();
									} else if(mod.isStateMod() && !mod.state) {
										mod.state = true;
									} else if(!mod.isStateMod()) {
										VertexClientPE.toast("This mod is blocked by Bypass!");
									}
								}
							}
							if(mod.isStateMod()) {
								if(mod.state) {
									toggleButton.setText("Disable");
									if(bypassState && mod.canBypassBypassMod && !mod.canBypassBypassMod()) {
										toggleButton.setTextColor(modButtonColorBlocked);
										btn.setTextColor(modButtonColorBlocked);
									} else {
										toggleButton.setTextColor(modButtonColorEnabled);
										btn.setTextColor(modButtonColorEnabled);
									}
									if(fontSetting != "minecraft") {
										toggleButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
									}
									btn.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
								} else if(!mod.state) {
									toggleButton.setText("Enable");
									if(themeSetting == "white" && modButtonColorDisabledSetting == "black") {
										toggleButton.setTextColor(Color_.BLACK);
										btn.setTextColor(Color_.BLACK);
										if(fontSetting != "minecraft") {
											toggleButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.WHITE);
											btn.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.WHITE);
										}
									} else {
										toggleButton.setTextColor(modButtonColorDisabled);
										btn.setTextColor(modButtonColorDisabled);
									}
								}
							}
						}
					});
					dialogExtraLayoutRight.addView(toggleButton);
				} else {
					dialogExtraLayout.setGravity(Gravity_.CENTER);
					closeButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2, display.heightPixels / 10));
					dialogExtraLayout.addView(closeButton);
				}
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle(mod.name);
				dialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
					onDismiss: function() {
						if(mod.onModDialogDismiss) {
							mod.onModDialogDismiss();
						}
						modDialogShowing = false;
					}
				});
				dialog.show();
				var window = dialog.getWindow();
				window.setLayout(display.widthPixels, display.heightPixels);
				closeButton.setOnClickListener(new View_.OnClickListener() {
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

VertexClientPE.showSongDialog = function(song, songBtn, playBar) {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				VertexClientPE.loadMainSettings();
				var songLayout = songBtn.getParent().getParent();
				var songTitleLayout = new LinearLayout_(CONTEXT);
				songTitleLayout.setOrientation(LinearLayout_.HORIZONTAL);
				var songTitle = clientTextView(song.title, true);
				songTitle.setTextSize(20);
				var songFavButton = new Button_(CONTEXT);
				songFavButton.setLayoutParams(new LinearLayout_.LayoutParams(64, 64));
				if(sharedPref.getString("VertexClientPE.songs." + song.title + ".isFavorite", "false") == "true") {
					songFavButton.setBackgroundDrawable(CONTEXT.getResources().getDrawable(android.R.drawable.btn_star_big_on));
				} else {
					songFavButton.setBackgroundDrawable(CONTEXT.getResources().getDrawable(android.R.drawable.btn_star_big_off));
				}
				songFavButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(v) {
						if(sharedPref.getString("VertexClientPE.songs." + song.title + ".isFavorite", "false") == "true") {
							editor.putString("VertexClientPE.songs." + song.title + ".isFavorite", "false");
							editor.commit();
							songFavButton.setBackgroundDrawable(CONTEXT.getResources().getDrawable(android.R.drawable.btn_star_big_off));
							if(currentMPTab == "Favorite") {
								songLayout = songBtn.getParent().getParent();
								songLayout.removeView(songBtn.getParent());
							}
						} else {
							editor.putString("VertexClientPE.songs." + song.title + ".isFavorite", "true");
							editor.commit();
							songFavButton.setBackgroundDrawable(CONTEXT.getResources().getDrawable(android.R.drawable.btn_star_big_on));
							if(currentMPTab == "Favorite") {
								songBtnLayout = songButton(song, playBar);
								songBtn = songBtnLayout.getChildAt(0);
								songLayout.addView(songBtnLayout);
							}
						}
					}
				});
				songTitleLayout.addView(songTitle);
				songTitleLayout.addView(songFavButton);
				var songArtistText = clientTextView("Artist: " + song.artist);
				var songGenreText = clientTextView("Genre: " + song.genre + "\n");
				var closeButton = clientButton("Close");
				closeButton.setPadding(0.5, closeButton.getPaddingTop(), 0.5, closeButton.getPaddingBottom());
				var dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(songTitleLayout);
				if(song.source != null) {
					dialogLayout.addView(clientTextView("Source: " + song.source + "\n"));
				}
				dialogLayout.addView(songArtistText);
				dialogLayout.addView(songGenreText);
				dialogLayout.addView(clientTextView("\n"));
				
				var settingsLinearLayout = new ScrollView(CONTEXT);
				settingsLinearLayout.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels, display.heightPixels / 3));
				var settingsScrollView = new ScrollView(CONTEXT);
				
				var dialogExtraLayout = new LinearLayout_(CONTEXT);
				dialogExtraLayout.setOrientation(LinearLayout_.HORIZONTAL);
				dialogLayout.addView(dialogExtraLayout);
				dialogExtraLayoutLeft = new LinearLayout_(CONTEXT);
				dialogExtraLayoutLeft.setOrientation(1);
				dialogExtraLayoutLeft.setGravity(Gravity_.CENTER);
				dialogExtraLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - 10, display.heightPixels / 10));
				dialogExtraLayoutRight = new LinearLayout_(CONTEXT);
				dialogExtraLayoutRight.setOrientation(1);
				dialogExtraLayoutRight.setGravity(Gravity_.CENTER);
				dialogExtraLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - 10, display.heightPixels / 10));
				dialogExtraLayout.addView(dialogExtraLayoutLeft);
				dialogExtraLayout.addView(dialogExtraLayoutRight);
				closeButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
				dialogExtraLayoutLeft.addView(closeButton);
				var downloadButton = clientButton("Download");
				downloadButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
				downloadButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						ModPE.goToURL(song.url);
					}
				});
				dialogExtraLayoutRight.addView(downloadButton);
				
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle(song.title);
				dialog.show();
				var window = dialog.getWindow();
				window.setLayout(display.widthPixels, display.heightPixels);
				closeButton.setOnClickListener(new View_.OnClickListener() {
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

function capitalizeFirstLetter(string) {
	let length;
	if(typeof string.length === "function") {
		length = string.length();
	} else {
		length = string.length;
	}
	return string.substring(0, 1).toUpperCase() + string.substring(1, length);
}

function capitalizeColorString(string) {
	string = string.toString();
	if(string == "custom rgb") {
		return "Custom RGB";
	} else {
		return capitalizeFirstLetter(string);
	}
}

VertexClientPE.showTileDropDown = function(tileView, defaultName, defaultColor, defaultUseLightColor, tile) {
	try {
		CONTEXT.runOnUiThread(new Runnable_() {
			run: function() {
				var tileDropDownLayout = new LinearLayout_(CONTEXT);
				tileDropDownLayout.setPadding(10, 10, 10, 10);
				tileDropDownLayout.setOrientation(1);
				tileDropDownLayout.setGravity(android.view.Gravity.CENTER);
				
				var currentName = sharedPref.getString("VertexClientPE.tiles." + defaultName + ".name", defaultName);
				var currentColor = sharedPref.getString("VertexClientPE.tiles." + defaultName + ".color", defaultColor);
				var currentUseLightColor = sharedPref.getBoolean("VertexClientPE.tiles." + defaultName + ".useLightColor", defaultUseLightColor);
				
				var tileDropDownEditText = clientEditText(currentName);
				tileDropDownEditText.setInputType(InputType_.TYPE_TEXT_FLAG_NO_SUGGESTIONS);
				tileDropDownEditText.addTextChangedListener(new TextWatcher_() {
					afterTextChanged: function() {
						currentName = tileDropDownEditText.getText();
						tileView.setText(currentName);
						editor.putString("VertexClientPE.tiles." + defaultName + ".name", currentName);
						editor.commit();
					}
				});
				
				var tileFavButton = new clientButton("Favorite");
				if(sharedPref.getString("VertexClientPE.tiles." + defaultName + ".isFavorite", "false") == "true") {
					tileFavButton.setCompoundDrawablesWithIntrinsicBounds(android.R.drawable.btn_star_big_on, 0, 0, 0);
				} else {
					tileFavButton.setCompoundDrawablesWithIntrinsicBounds(android.R.drawable.btn_star_big_off, 0, 0, 0);
				}
				tileFavButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(v) {
						if(sharedPref.getString("VertexClientPE.tiles." + defaultName + ".isFavorite", "false") == "true") {
							editor.putString("VertexClientPE.tiles." + defaultName + ".isFavorite", "false");
							editor.commit();
							tileFavButton.setCompoundDrawablesWithIntrinsicBounds(android.R.drawable.btn_star_big_off, 0, 0, 0);
						} else {
							editor.putString("VertexClientPE.tiles." + defaultName + ".isFavorite", "true");
							editor.commit();
							tileFavButton.setCompoundDrawablesWithIntrinsicBounds(android.R.drawable.btn_star_big_on, 0, 0, 0);
						}
					}
				});
				
				var tileDropDownCurrentColorButton = clientButton(capitalizeColorString(currentColor));
				tileDropDownCurrentColorButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(v) {
						if(currentColor == "green") {
							currentColor = "red";
							tileDropDownCurrentColorButton.setText("Red");
						} else if(currentColor == "red") {
							currentColor = "blue";
							tileDropDownCurrentColorButton.setText("Blue");
						} else if(currentColor == "blue") {
							currentColor = "purple";
							tileDropDownCurrentColorButton.setText("Purple");
						} else if(currentColor == "purple") {
							currentColor = "violet";
							tileDropDownCurrentColorButton.setText("Violet");
						} else if(currentColor == "violet") {
							currentColor = "yellow";
							tileDropDownCurrentColorButton.setText("Yellow");
						} else if(currentColor == "yellow") {
							currentColor = "orange";
							tileDropDownCurrentColorButton.setText("Orange");
						} else if(currentColor == "orange") {
							currentColor = "brown";
							tileDropDownCurrentColorButton.setText("Brown");
						} else if(currentColor == "brown") {
							currentColor = "grey";
							tileDropDownCurrentColorButton.setText("Grey");
						} else if(currentColor == "grey") {
							currentColor = "white";
							tileDropDownCurrentColorButton.setText("White");
						} else if(currentColor == "white") {
							currentColor = "black";
							tileDropDownCurrentColorButton.setText("Black");
						} else if(currentColor == "black") {
							currentColor = "green";
							tileDropDownCurrentColorButton.setText("Green");
						}
						editor.putString("VertexClientPE.tiles." + defaultName + ".color", currentColor);
						editor.commit();
						VertexClientPE.setupButton(tileView, currentName, currentColor, false, currentUseLightColor, "tile", 0.1);
					}
				}));
				
				var tileDropDownUseLightColorCheckBox = new CheckBox_(CONTEXT);
				tileDropDownUseLightColorCheckBox.setChecked(currentUseLightColor);
				tileDropDownUseLightColorCheckBox.setText("Lighter color");
				if(themeSetting == "white") {
					tileDropDownUseLightColorCheckBox.setTextColor(Color_.BLACK);
				} else {
					tileDropDownUseLightColorCheckBox.setTextColor(Color_.WHITE);
				}
				tileDropDownUseLightColorCheckBox.setTypeface(VertexClientPE.font);
				
				if(fontSetting == "minecraft") {
					MinecraftButtonLibrary.addMinecraftStyleToTextView(tileDropDownUseLightColorCheckBox);
				}
				tileDropDownUseLightColorCheckBox.setOnClickListener(new View_.OnClickListener() {
					onClick: function(v) {
						currentUseLightColor = v.isChecked();
						editor.putBoolean("VertexClientPE.tiles." + defaultName + ".useLightColor", currentUseLightColor);
						editor.commit();
						VertexClientPE.setupButton(tileView, currentName, currentColor, false, currentUseLightColor, "tile", 0.1);
					}
				});
				
				var tileDropDownResetButton = clientButton("Reset");
				tileDropDownResetButton.setCompoundDrawablesWithIntrinsicBounds(android.R.drawable.stat_notify_sync, 0  , 0, 0);
				tileDropDownResetButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(v) {
						currentName = defaultName;
						currentColor = defaultColor;
						currentUseLightColor = defaultUseLightColor;
						tileDropDownEditText.setText(currentName);
						tileDropDownCurrentColorButton.setText(capitalizeColorString(currentColor));
						tileDropDownUseLightColorCheckBox.setChecked(currentUseLightColor);
						editor.putString("VertexClientPE.tiles." + defaultName + ".name", currentName);
						editor.putString("VertexClientPE.tiles." + defaultName + ".color", currentColor);
						editor.putBoolean("VertexClientPE.tiles." + defaultName + ".useLightColor", currentUseLightColor);
						editor.commit();
						VertexClientPE.setupButton(tileView, currentName, currentColor, false, currentUseLightColor, "tile", 0.1);
					}
				});
				
				tileDropDownLayout.addView(tileDropDownEditText);
				if(tile.source) {
					var tileSourceTextView = clientTextView("Source: " + tile.source);
					tileDropDownLayout.addView(tileSourceTextView);
				}
				tileDropDownLayout.addView(tileFavButton);
				tileDropDownLayout.addView(tileDropDownCurrentColorButton);
				tileDropDownLayout.addView(tileDropDownUseLightColorCheckBox);
				tileDropDownLayout.addView(tileDropDownResetButton);
				
				var tileDropDown = new PopupWindow_(tileDropDownLayout, LinearLayout_.LayoutParams.WRAP_CONTENT, LinearLayout_.LayoutParams.WRAP_CONTENT, true);
				tileDropDown.setWidth(LinearLayout_.LayoutParams.WRAP_CONTENT);
				tileDropDown.setHeight(LinearLayout_.LayoutParams.WRAP_CONTENT);
				tileDropDown.setBackgroundDrawable(backgroundSpecial(null, "#212121|#ffffff"));
				tileDropDown.setTouchInterceptor(new android.view.View.OnTouchListener() {
					onTouch: function(v, event) {
						if(event.getAction() == android.view.ACTION_OUTSIDE) {
							tileDropDown.dismiss();
							return true;
						}
						return false;
					}
				});
				
				//sharedPref.getString("VertexClientPE.tiles." + tileText + ".color", tileColor)
				
				tileDropDown.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.CENTER | Gravity_.CENTER, 0, 0);
			}
		});
	} catch(e) {
		print("@" + e.lineNumber + ": " + e);
	}
}

var itemName, itemId, amount, data;

VertexClientPE.showItemGiverDialog = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				VertexClientPE.loadMainSettings();
				var itemGiverTitle = clientTextView("ItemGiver", true);
				var closeButton = clientButton("Close");
				closeButton.setPadding(0.5, closeButton.getPaddingTop(), 0.5, closeButton.getPaddingBottom());
				var dialogLayoutBase = new LinearLayout_(CONTEXT);
				dialogLayoutBase.setOrientation(1);
				var dialogLayoutBody = new LinearLayout_(CONTEXT);
				dialogLayoutBody.setOrientation(LinearLayout_.HORIZONTAL);
				var dialogLayoutBodyLeftWrap = new LinearLayout_(CONTEXT);
				dialogLayoutBodyLeftWrap.setOrientation(1);
				var dialogLayoutBodyLeftScroll = new ScrollView(CONTEXT);
				dialogLayoutBodyLeftWrap.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels - display.widthPixels / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
				var dialogLayoutBodyRightWrap = new LinearLayout_(CONTEXT);
				dialogLayoutBodyRightWrap.setOrientation(1);
				var dialogLayoutBodyRightScroll = new ScrollView(CONTEXT);
				dialogLayoutBodyRightWrap.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
				var dialogTableLayout = new TableLayout_(CONTEXT);
				var dialogTableRow;
				var tempButton;
				var itemNameText = clientTextView("Name: Unknown");
				var itemIdInput = clientEditText();
				itemIdInput.setTextColor(Color_.WHITE);
				itemIdInput.setInputType(InputType_.TYPE_CLASS_NUMBER);
				itemIdInput.setHint("Id");
				var itemAmountInput = clientEditText();
				itemAmountInput.setTextColor(Color_.WHITE);
				itemAmountInput.setInputType(InputType_.TYPE_CLASS_NUMBER);
				itemAmountInput.setHint("Amount");
				var itemDataInput = clientEditText();
				itemDataInput.setTextColor(Color_.WHITE);
				itemDataInput.setInputType(InputType_.TYPE_CLASS_NUMBER);
				itemDataInput.setHint("Data");
				
				itemIdInput.addTextChangedListener(new TextWatcher_() {
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
				itemGiveButton.setOnClickListener(new View_.OnClickListener() {
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
							dialogTableRow = new TableRow_(CONTEXT);
						}
						tempButton = clientButton(Item.getName(element.itemId.toString()));
						tempButton.setLayoutParams(new TableRow_.LayoutParams((display.widthPixels - display.widthPixels / 3) / 2, LinearLayout_.LayoutParams.WRAP_CONTENT));
						tempButton.setPadding(0, 0, 0, 0);
						tempButton.setOnClickListener(new View_.OnClickListener() {
							onClick: function(viewArg) {
								itemIdInput.setText(element.itemId.toString());
							}
						});
						dialogTableRow.addView(tempButton);
						dialogTableLayout.addView(dialogTableRow);
						dialogTableRow = null;
						tempButton = null;
					} else {
						dialogTableRow = new TableRow_(CONTEXT);
						tempButton = clientButton(Item.getName(element.itemId.toString()));
						tempButton.setLayoutParams(new TableRow_.LayoutParams((display.widthPixels - display.widthPixels / 3) / 2, LinearLayout_.LayoutParams.WRAP_CONTENT));
						tempButton.setPadding(0, 0, 0, 0);
						tempButton.setOnClickListener(new View_.OnClickListener() {
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
				var dialogRightLayout = new LinearLayout_(CONTEXT);
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
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayoutBase);
				dialog.setTitle("ItemGiver");
				dialog.show();
				var window = dialog.getWindow();
				window.setLayout(display.widthPixels, display.heightPixels);
				closeButton.setOnClickListener(new View_.OnClickListener() {
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
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				VertexClientPE.loadMainSettings();
				var teleportTitle = clientTextView("Teleport", true);
				var closeButton = clientButton("Close");
				closeButton.setPadding(0.5, closeButton.getPaddingTop(), 0.5, closeButton.getPaddingBottom());
				var dialogLayoutBase = new LinearLayout_(CONTEXT);
				dialogLayoutBase.setOrientation(1);
				var dialogLayoutBody = new LinearLayout_(CONTEXT);
				dialogLayoutBody.setOrientation(LinearLayout_.HORIZONTAL);
				var dialogLayoutBodyLeftWrap = new LinearLayout_(CONTEXT);
				dialogLayoutBodyLeftWrap.setOrientation(1);
				var dialogLayoutBodyLeftScroll = new ScrollView(CONTEXT);
				dialogLayoutBodyLeftWrap.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels - display.widthPixels / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
				var dialogLayoutBodyRightWrap = new LinearLayout_(CONTEXT);
				dialogLayoutBodyRightWrap.setOrientation(1);
				var dialogLayoutBodyRightScroll = new ScrollView(CONTEXT);
				dialogLayoutBodyRightWrap.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
				var dialogLeftLayout = new LinearLayout_(CONTEXT);
				dialogLeftLayout.setOrientation(1);
				var dialogTableRow;
				var tempButton;
				var teleportNameText = clientTextView("Teleport location: Unknown");
				var teleportXInput = clientEditText();
				teleportXInput.setTextColor(Color_.WHITE);
				teleportXInput.setInputType(InputType_.TYPE_CLASS_NUMBER | InputType_.TYPE_NUMBER_FLAG_SIGNED);
				teleportXInput.setHint("X");
				var teleportYInput = clientEditText();
				teleportYInput.setTextColor(Color_.WHITE);
				teleportYInput.setInputType(InputType_.TYPE_CLASS_NUMBER | InputType_.TYPE_NUMBER_FLAG_SIGNED);
				teleportYInput.setHint("Y");
				var teleportZInput = clientEditText();
				teleportZInput.setTextColor(Color_.WHITE);
				teleportZInput.setInputType(InputType_.TYPE_CLASS_NUMBER | InputType_.TYPE_NUMBER_FLAG_SIGNED);
				teleportZInput.setHint("Z");
				
				teleportXInput.addTextChangedListener(new TextWatcher_() {
					onTextChanged: function() {
						if(teleportXInput.getText() == VertexClientPE.currentWorld.deathX && teleportYInput.getText() == VertexClientPE.currentWorld.deathY && teleportZInput.getText() == VertexClientPE.currentWorld.deathZ) {
							teleportName = "Last death";
						} else {
							teleportName = "Unknown";
						}
						teleportNameText.setText("Teleport location: " + teleportName);
					}
				});
				
				teleportYInput.addTextChangedListener(new TextWatcher_() {
					onTextChanged: function() {
						if(teleportXInput.getText() == VertexClientPE.currentWorld.deathX && teleportYInput.getText() == VertexClientPE.currentWorld.deathY && teleportZInput.getText() == VertexClientPE.currentWorld.deathZ) {
							teleportName = "Last death";
						} else {
							teleportName = "Unknown";
						}
						teleportNameText.setText("Teleport location: " + teleportName);
					}
				});
				
				teleportZInput.addTextChangedListener(new TextWatcher_() {
					onTextChanged: function() {
						if(teleportXInput.getText() == VertexClientPE.currentWorld.deathX && teleportYInput.getText() == VertexClientPE.currentWorld.deathY && teleportZInput.getText() == VertexClientPE.currentWorld.deathZ) {
							teleportName = "Last death";
						} else {
							teleportName = "Unknown";
						}
						teleportNameText.setText("Teleport location: " + teleportName);
					}
				});
				
				var teleportButton = clientButton("Teleport");
				teleportButton.setOnClickListener(new View_.OnClickListener() {
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
				deathTeleportButton.setTextColor(Color_.RED);
				deathTeleportButton.setOnClickListener(new View_.OnClickListener() {
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
				var dialogRightLayout = new LinearLayout_(CONTEXT);
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
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayoutBase);
				dialog.setTitle("Teleport");
				dialog.show();
				var window = dialog.getWindow();
				window.setLayout(display.widthPixels, display.heightPixels);
				closeButton.setOnClickListener(new View_.OnClickListener() {
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

VertexClientPE.showAddAccountDialog = function(showBackButton) {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				VertexClientPE.loadMainSettings();
				var accountTitle = clientTextView("Add account", true);
				accountNameInput = clientEditText();
				accountNameInput.setTextColor(Color_.WHITE);
				accountNameInput.setSingleLine(true);
				accountNameInput.setHint("Enter an username");
				accountClientIdInput = clientEditText();
				accountClientIdInput.setTextColor(Color_.WHITE);
				accountClientIdInput.setHint("Enter a client id (wip, added later)");
				var okButton = clientButton("Ok");
				var cancelButton = clientButton("Cancel");
				var dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(accountTitle);
				dialogLayout.addView(accountNameInput);
				//dialogLayout.addView(accountClientIdInput);
				dialogLayout.addView(okButton);
				dialogLayout.addView(cancelButton);
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("Add account");
				dialog.show();
				okButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						let accountName = accountNameInput.getText().toString();
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
						screenUI.dismiss();
						if(backScreenUI != null) {
							backScreenUI.dismiss();
						}
						exitScreenUI.dismiss();
						VertexClientPE.showAccountManager(showBackButton);
					}
				});
				cancelButton.setOnClickListener(new View_.OnClickListener() {
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

VertexClientPE.showAddFriendDialog = function(showBackButton) {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				VertexClientPE.loadMainSettings();
				var friendTitle = clientTextView("Add friend", true);
				friendNameInput = clientEditText();
				friendNameInput.setTextColor(Color_.WHITE);
				friendNameInput.setSingleLine(true);
				friendNameInput.setHint("Enter an username");
				var okButton = clientButton("Ok");
				var cancelButton = clientButton("Cancel");
				var dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(friendTitle);
				dialogLayout.addView(friendNameInput);
				//dialogLayout.addView(accountClientIdInput);
				dialogLayout.addView(okButton);
				dialogLayout.addView(cancelButton);
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("Add friend");
				dialog.show();
				okButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						let friendName = friendNameInput.getText().toString();
						if(friendName == null || friendName == "" || friendName.replaceAll(" ", "") == "") {
							VertexClientPE.toast("Enter an username!");
							return;
						}
						//accountClientId = accountClientIdInput.getText().toString();
						if(VertexClientPE.friends.length() != undefined && VertexClientPE.friends.length() != undefined) {
							for(var i = 0; i < VertexClientPE.friends.length(); i++) {
								if(VertexClientPE.friends.get(i) == friendName) {
									VertexClientPE.toast("This username already exists in your friends list!");
									return;
								}
							}
						}
						VertexClientPE.friends.put(friendName);
						//print("\'" + friendName + "\'");
						VertexClientPE.saveFriends();
						dialog.dismiss();
						screenUI.dismiss();
						if(backScreenUI != null) {
							backScreenUI.dismiss();
						}
						exitScreenUI.dismiss();
						VertexClientPE.showFriendManager(showBackButton);
					}
				});
				cancelButton.setOnClickListener(new View_.OnClickListener() {
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
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				var dialogTitle = clientTextView("Pro");
				dialogTitle.setTextSize(25);
				var dialogDesc = clientTextView(featureName + " requires Vertex Client PE Pro!\n");
				var btn = clientButton("Get Pro for free!");
				var btn1 = clientButton("Close");
				var inputBar = clientEditText();
				var dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(dialogTitle);
				dialogLayout.addView(dialogDesc);
				dialogLayout.addView(btn);
				dialogLayout.addView(btn1);
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle(featureName + " requires Vertex Client PE Pro");
				dialog.show();
				btn.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
						VertexClientPE.downloadPro();
					}
				});
				btn1.setOnClickListener(new View_.OnClickListener() {
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
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				var dialogTitle = clientTextView("Pro");
				dialogTitle.setTextSize(25);
				var dialogDesc = clientTextView("Hey, why not get Vertex Client PE Pro and enjoy all the features for free?");
				var btn = clientButton("Get Pro for free!");
				var btn1 = clientButton("Close");
				var inputBar = clientEditText();
				var dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(dialogTitle);
				dialogLayout.addView(dialogDesc);
				dialogLayout.addView(btn);
				dialogLayout.addView(btn1);
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("Hey, why not get Vertex Client PE Pro and enjoy all the features for free?");
				dialog.show();
				btn.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
						VertexClientPE.downloadPro();
					}
				});
				btn1.setOnClickListener(new View_.OnClickListener() {
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
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				var dialogTitle = clientTextView(addon.name);
				dialogTitle.setTextSize(25);
				var dialogTargetVersion = clientTextView("Target version: " + addon.target_version);
				var btn = clientButton("Close");
				var dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				if(addon.target_version == VertexClientPE.currentVersion) {
					dialogTargetVersion.setTextColor(Color_.GREEN);
				} else {
					dialogTargetVersion.setTextColor(Color_.RED);
				}
				dialogLayout.addView(dialogTitle);
				dialogLayout.addView(clientTextView("Description:"));
				dialogLayout.addView(clientTextView(addon.desc));
				dialogLayout.addView(clientTextView("Author(s): " + addon.author));
				dialogLayout.addView(clientTextView("Version: " + addon.current_version));
				dialogLayout.addView(dialogTargetVersion);
				dialogLayout.addView(clientTextView("File name: " + addon.scriptName + "\n"));
				dialogLayout.addView(btn);
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle(addon.name);
				dialog.show();
				btn.setOnClickListener(new View_.OnClickListener() {
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
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				var dialogTitle = clientTextView(title);
				dialogTitle.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
				dialogTitle.setMarqueeRepeatLimit(-1);
				dialogTitle.setSingleLine();
				dialogTitle.setHorizontallyScrolling(true);
				dialogTitle.setSelected(true);
				dialogTitle.setTextSize(25);
				var btn = clientButton("Close");
				var inputBar = clientEditText();
				var dialogLayout1 = new LinearLayout_(CONTEXT);
				var dialogScrollView = new ScrollView(CONTEXT);
				var dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout1.setBackgroundDrawable(backgroundGradient());
				dialogLayout1.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout1.setPadding(10, 10, 10, 10);
				dialogLayout1.addView(dialogTitle);
				dialogLayout.addView(view);
				dialogScrollView.addView(dialogLayout);
				dialogLayout1.addView(dialogScrollView);
				dialogLayout1.addView(btn);
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout1);
				dialog.setTitle(title);
				dialog.show();
				btn.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
				dialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
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

VertexClientPE.showTipDialog = function() {
	var openText;
	if(mainButtonTapSetting == "menu") {
		openText = "long tap on the main button";
	} else {
		openText = "click on the main button";
	}
	
	VertexClientPE.showBasicDialog("Shortcuts", clientTextView("Are there any mods you use regularly? Have you tried out Shortcuts yet? The Shortcuts allow you to toggle mods and tiles faster than ever! Please go to the Help screen (" + openText + " --> Dashboard --> Help) to find out how to add them."),
		function() {
			VertexClientPE.setHasShownTipDialog(true);
		}
	);
}

VertexClientPE.showWarningDialog = function() {
	VertexClientPE.showBasicDialog("Warning", clientTextView("Thanks for using Vertex Client PE. If you didn't get this from our official website (http://Vertex-Client.ml/), GitHub (http://github.com/Vertex-Client/Vertex-Client-PE/), MCPE Nest or MCPEDL.com, please redownload it. We can't guarantee safety if you don't use official download links."),
		function() {
			VertexClientPE.setHasShownWarningDialog(true);
		}
	);
}

var consoleInput;

VertexClientPE.showJavascriptConsoleDialog = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				var javascriptConsoleTitle = clientTextView("Javascript Console", true);
				var btn = clientButton("Send");
				var btn1 = clientButton("Cancel");
				var inputBar = clientEditText();
				var dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(javascriptConsoleTitle);
				dialogLayout.addView(inputBar);
				dialogLayout.addView(btn);
				dialogLayout.addView(btn1);
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("Javascript Console");
				inputBar.setHint("Javascript input");
				inputBar.setTextColor(Color_.WHITE);
				dialog.show();
				btn.setOnClickListener(new View_.OnClickListener() {
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
				btn1.setOnClickListener(new View_.OnClickListener() {
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
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				if(titleView.getMiddleButton) {
					titleView = titleView.getMiddleButton();
				}
				var _0x25ea=["\x69\x73\x50\x72\x6F","\x74\x72\x75\x65","\x52\x65\x6E\x61\x6D\x69\x6E\x67\x20\x63\x61\x74\x65\x67\x6F\x72\x69\x65\x73","\x73\x68\x6F\x77\x50\x72\x6F\x44\x69\x61\x6C\x6F\x67"];if(VertexClientPE[_0x25ea[0]]()!=_0x25ea[1]){VertexClientPE[_0x25ea[3]](_0x25ea[2]);return}
				var categoryDialogTitle = clientTextView("Rename category \'" + currentName + "\'", true);
				var btn = clientButton("Close");
				var inputBar = clientEditText();
				var dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(categoryDialogTitle);
				dialogLayout.addView(inputBar);
				dialogLayout.addView(btn);
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("Rename category \'" + currentName + "\'");
				inputBar.setHint("Category name");
				inputBar.setText(currentName);
				inputBar.setTextColor(Color_.WHITE);
				dialog.show();
				inputBar.addTextChangedListener(new TextWatcher_() {
					onTextChanged: function() {
						currentName = inputBar.getText();
					}
				});
				btn.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
				dialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
					onDismiss: function() {
						switch(categoryId) {
							case 0:
								combatName = currentName;
								break;
							case 1:
								worldName = currentName;
								break;
							case 2:
								movementName = currentName;
								break;
							case 3:
								playerName = currentName;
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

VertexClientPE.showButtonStrokeThicknessDialog = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				var buttonStrokeThicknessDialogTitle = clientTextView("Change button stroke thickness", true);
				var btn = clientButton("Close");
				var buttonStrokeThicknessSettingDialogTitle = clientTextView("Button stroke thickness: | " + buttonStrokeThicknessSetting + " pixel(s)");
				var buttonStrokeThicknessSettingDialogSlider = clientSeekBar();
				var minButtonStrokeThickness = 1;
				var maxButtonStrokeThickness = 10;
				buttonStrokeThicknessSettingDialogSlider.setProgress(buttonStrokeThicknessSetting - minButtonStrokeThickness);
				buttonStrokeThicknessSettingDialogSlider.setMax(maxButtonStrokeThickness - minButtonStrokeThickness);
				buttonStrokeThicknessSettingDialogSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
					onProgressChanged: function() {
						buttonStrokeThicknessSetting = buttonStrokeThicknessSettingDialogSlider.getProgress() + minButtonStrokeThickness;
						buttonStrokeThicknessSettingDialogTitle.setText("Button stroke thickness: | " + buttonStrokeThicknessSetting + " pixel(s)");
					}
				});
				var dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(buttonStrokeThicknessDialogTitle);
				dialogLayout.addView(clientTextView("\n"));
				dialogLayout.addView(buttonStrokeThicknessSettingDialogTitle);
				dialogLayout.addView(buttonStrokeThicknessSettingDialogSlider);
				dialogLayout.addView(btn);
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setTitle("Change button stroke thickness");
				dialog.setContentView(dialogLayout);
				dialog.show();
				btn.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
				dialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
					onDismiss: function() {
						VertexClientPE.saveMainSettings();
						VertexClientPE.shouldUpdateGUI = true;
					}
				});
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

VertexClientPE.showDashboardTileSizeDialog = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				var dashboardTileSizeDialogTitle = clientTextView("Change Dashboard tile size", true);
				var btn = clientButton("Close");
				var dashboardTileSizeSettingTitle = clientTextView("Dashboard tile size: | Screen width / " + dashboardTileSize);
				var dashboardTileSizeSettingSlider = clientSeekBar();
				var minDashboardTileSize = 1;
				dashboardTileSizeSettingSlider.setProgress(dashboardTileSize - minDashboardTileSize);
				dashboardTileSizeSettingSlider.setMax(10 - minDashboardTileSize);
				dashboardTileSizeSettingSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
					onProgressChanged: function() {
						dashboardTileSize = dashboardTileSizeSettingSlider.getProgress() + minDashboardTileSize;
						dashboardTileSizeSettingTitle.setText("Dashboard tile size: | Screen width / " + dashboardTileSize);
					}
				});
				var dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(dashboardTileSizeDialogTitle);
				dialogLayout.addView(clientTextView("\n"));
				dialogLayout.addView(dashboardTileSizeSettingTitle);
				dialogLayout.addView(dashboardTileSizeSettingSlider);
				dialogLayout.addView(btn);
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setTitle("Change Dashboard tile size");
				dialog.setContentView(dialogLayout);
				dialog.show();
				btn.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
				dialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
					onDismiss: function() {
						VertexClientPE.saveMainSettings();
					}
				});
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

VertexClientPE.showWebbrowserStartPageDialog = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				var webBrowserStartPageDialogTitle = clientTextView("Change Webbrowser startpage", true);
				var btn = clientButton("Close");
				var inputBar = clientEditText();
				var dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(webBrowserStartPageDialogTitle);
				dialogLayout.addView(inputBar);
				dialogLayout.addView(btn);
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("Change Webbrowser startpage");
				inputBar.setHint("Webbrowser startpage");
				inputBar.setText(webBrowserStartPageSetting);
				inputBar.setTextColor(Color_.WHITE);
				dialog.show();
				inputBar.addTextChangedListener(new TextWatcher_() {
					onTextChanged: function() {
						webBrowserStartPageSetting = inputBar.getText();
					}
				});
				btn.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
				dialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
					onDismiss: function() {
						VertexClientPE.saveMainSettings();
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

VertexClientPE.debugMessage = function(message) {
	clientMessage(ChatColor.GRAY + "[DEBUG] " + ChatColor.WHITE + message);
}

var toast;

VertexClientPE.toast = function(message, vibrate) {
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			if(vibrate || vibrate == null) {
				CONTEXT.getSystemService(Context_.VIBRATOR_SERVICE).vibrate(37);
			}
			var layout = new LinearLayout_(CONTEXT);
			layout.setBackground(backgroundGradient());
			var title = VertexClientPE.getName();
			var _0xc62b=["\x69\x73\x50\x72\x6F","\x74\x72\x75\x65","\x20\x50\x72\x6F"];if(VertexClientPE[_0xc62b[0]]()==_0xc62b[1]){title+=_0xc62b[2]}
			var text = clientTextView(new Html_.fromHtml("<b>" + title + "</b> " + message), 0);
			layout.addView(text);
			if(toast != null) {
				toast.cancel();
			}
			toast = new Toast_(CONTEXT);
			toast.setDuration(Toast_.LENGTH_LONG);
			toast.setView(layout);
			toast.show();
		}
	}));
}

VertexClientPE.addonLoadToast = function(message) {
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			var layout = new LinearLayout_(CONTEXT);
			layout.setBackground(backgroundSpecial(true));
			var icon = new android.widget.ImageView(CONTEXT);
			icon.setImageResource(android.R.drawable.ic_menu_more);
			var title = VertexClientPE.getName();
			var _0xc62b=["\x69\x73\x50\x72\x6F","\x74\x72\x75\x65","\x20\x50\x72\x6F"];if(VertexClientPE[_0xc62b[0]]()==_0xc62b[1]){title+=_0xc62b[2]}
			var text = clientTextView(new Html_.fromHtml("<b>" + title + "</b> " + message), 0);
			layout.addView(icon);
			layout.addView(text);
			toast = new Toast_(CONTEXT);
			toast.setView(layout);
			toast.setGravity(Gravity_.CENTER | Gravity_.TOP, 0, 0);
			toast.show();
		}
	}));
}

VertexClientPE.updateToast = function(message) {
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			var layout = new LinearLayout_(CONTEXT);
			layout.setBackground(backgroundSpecial(true));
			var icon = new android.widget.ImageView(CONTEXT);
			icon.setImageResource(android.R.drawable.ic_menu_compass);
			var title = VertexClientPE.getName();
			var _0xc62b=["\x69\x73\x50\x72\x6F","\x74\x72\x75\x65","\x20\x50\x72\x6F"];if(VertexClientPE[_0xc62b[0]]()==_0xc62b[1]){title+=_0xc62b[2]}
			var text = clientTextView(new Html_.fromHtml("<b>" + title + "</b> " + message), 0);
			layout.addView(icon);
			layout.addView(text);
			toast = new Toast_(CONTEXT);
			toast.setView(layout);
			toast.setGravity(Gravity_.CENTER | Gravity_.TOP, 0, 0);
			toast.show();
		}
	}));
}

VertexClientPE.showChristmasToast = function(daysLeft) {
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			var layout = new LinearLayout_(CONTEXT);
			layout.setBackground(backgroundSpecial(true));
			var icon = new android.widget.ImageView(CONTEXT);
			icon.setImageBitmap(imgChristmasTree);
			icon.setLayoutParams(new LinearLayout_.LayoutParams(dip2px(16), dip2px(16)));
			var title = VertexClientPE.getName();
			var _0xc62b=["\x69\x73\x50\x72\x6F","\x74\x72\x75\x65","\x20\x50\x72\x6F"];if(VertexClientPE[_0xc62b[0]]()==_0xc62b[1]){title+=_0xc62b[2]}
			var cText = daysLeft == null ? "Merry Christmas!" : (daysLeft + " days left until Christmas!");
			var text = clientTextView(new Html_.fromHtml("<b>" + title + "</b> " + cText), 0);
			layout.addView(icon);
			layout.addView(text);
			toast = new Toast_(CONTEXT);
			toast.setView(layout);
			toast.setGravity(Gravity_.CENTER | Gravity_.TOP, 0, 0);
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
			if(VertexClientPE.latestVersion != undefined && VertexClientPE.latestVersion != null) {
				return "Latest version: v" + VertexClientPE.latestVersion;
			} else {
				return "Latest version: No internet connection.";
			}
	}
}

var p, y, xx, yy, zz;

var sayMsg;

VertexClientPE.commandManager = function(cmd) {
	var _0xff55=["\x59\x6F\x75\x27\x76\x65\x20\x63\x61\x6D\x65\x20\x61\x63\x72\x6F\x73\x73\x20\x61\x6E\x20\x6F\x75\x74\x64\x61\x74\x65\x64\x2C\x20\x65\x64\x69\x74\x65\x64\x20\x61\x6E\x64\x20\x75\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64\x20\x56\x65\x72\x74\x65\x78\x20\x43\x6C\x69\x65\x6E\x74\x20\x50\x45\x20\x73\x63\x72\x69\x70\x74\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x74\x68\x65\x20\x6F\x66\x66\x69\x63\x69\x61\x6C\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x6F\x6E\x20\x6F\x75\x72\x20\x77\x65\x62\x73\x69\x74\x65\x3A\x20\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2E\x6D\x6C","\x74\x6F\x61\x73\x74","\x59\x6F\x75\x27\x76\x65\x20\x63\x61\x6D\x65\x20\x61\x63\x72\x6F\x73\x73\x20\x61\x6E\x20\x65\x64\x69\x74\x65\x64\x20\x61\x6E\x64\x20\x75\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64\x20\x56\x65\x72\x74\x65\x78\x20\x43\x6C\x69\x65\x6E\x74\x20\x50\x45\x20\x73\x63\x72\x69\x70\x74\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x74\x68\x65\x20\x6F\x66\x66\x69\x63\x69\x61\x6C\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x6F\x6E\x20\x6F\x75\x72\x20\x77\x65\x62\x73\x69\x74\x65\x3A\x20\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2E\x6D\x6C"];if(!isAuthorized){if(!isSupported){VertexClientPE[_0xff55[1]](_0xff55[0])}else {VertexClientPE[_0xff55[1]](_0xff55[2])};return}
	var finished = false;
	commandSplit = cmd.split(" ");
	VertexClientPE.modules.forEach(function(element, index, array) {
		if(element.syntax != null && commandSplit[0] == element.syntax.split(" ")[0] && element.type == "Command") {
			if(element.onCall) {
				if(element.isExpMod && element.isExpMod() && !VertexClientPE.isExpMode()) {
					return;
				}
				element.onCall(cmd);
				finished = true;
				return;
			}
		}
	});
	switch(commandSplit[0]) {
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
	registerSong: function(song, fromAddon) {
		try {
			if(!(song instanceof Song) && !fromAddon) {
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
			this.mp = new MediaPlayer_();
		}
		this.tempSongList = this.songList;
	},
	startMusicPlayer: function(song, fromButton) {
		this.randomMusic = song==null?this.tempSongList[Math.floor(Math.random() * this.tempSongList.length)]:song;
		this.mp.reset();
		this.mp.setDataSource(this.randomMusic.url);
		this.mp.setOnPreparedListener(new MediaPlayer_.OnPreparedListener() {
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
				if(playMusicSetting != "shuffle" && song == null && VertexClientPE.MusicUtils.playingFirstTime) {
					mp.pause();
					VertexClientPE.MusicUtils.isPaused = true;
				} else {
					mp.start();
				}
			}
		});
		this.mp.setOnBufferingUpdateListener(new MediaPlayer_.OnBufferingUpdateListener() {
			onBufferingUpdate: function(arg0) {
				//onBufferingUpdate
			}
		})
		this.mp.setOnCompletionListener(new MediaPlayer_.OnCompletionListener() {
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

function Song(songTitle, songArtist, songUrl, songGenre) {
	this.title = songTitle || "Unknown";
	this.artist = songArtist || "Unknown";
	this.genre = songGenre || "Unknown";
	this.url = songUrl;
}
//TODO: Add Genre
//VertexClientPE.MusicUtils.registerSong(new Song("Hello", "OMFG", "http://b1.ge.tt/gett/1a353nd2/OMFG+-+Hello.mp3?index=0&user=user-ixW6scU8M6%E2%80%A6TeP06a11F-&referrer=user-ixW6scU8M6tdtVBWuAeo7oA2hZquSTeP06a11F-&download=1"));
//VertexClientPE.MusicUtils.registerSong(new Song("Neopolitan Dreams (Nilow Remix)", "Lisa Mitchell", "http://b1.ge.tt/gett/4WKD4nd2/Lisa+Mitchell+-+Neopolitan+Dreams+%28Nilow+Rmx?index=0&user=user-ixW6scU8M6%E2%80%A6TeP06a11F-&referrer=user-ixW6scU8M6tdtVBWuAeo7oA2hZquSTeP06a11F-&download=1"));
VertexClientPE.MusicUtils.registerSong(new Song("Adventure (feat. Alexa Lusader)", "William Ekh", "http://files-cdn.nocopyrightsounds.co.uk/William%20Ekh%20-%20Adventure%20%28feat.%20Alexa%20Lusader%29.mp3", "House"));
VertexClientPE.MusicUtils.registerSong(new Song("Blank [NCS Release]", "Disfigure", "http://files-cdn.nocopyrightsounds.co.uk/Disfigure%20-%20Blank.mp3", "Dubstep"));
VertexClientPE.MusicUtils.registerSong(new Song("Can't Wait (feat. Anna Yvette) [NCS Release]", "Jim Yosef", "https://www.dropbox.com/s/noz7mg1ar0n1un2/Jim%20Yosef%20-%20Can%27t%20Wait%20%28feat.%20Anna%20Yvette%29.mp3?dl=1", "House"));
VertexClientPE.MusicUtils.registerSong(new Song("Candyland [NCS Release]", "Tobu", "http://files-cdn.nocopyrightsounds.co.uk/Tobu%20-%20Candyland.mp3", "House"));
VertexClientPE.MusicUtils.registerSong(new Song("Cast Away ft. Ayve [NCS Release]", "T & Sugah", "http://files-cdn.nocopyrightsounds.co.uk/T%20%26%20Sugah%20-%20Cast%20Away%20%28ft.%20Ayve%29.mp3","Drum&Bass"));
VertexClientPE.MusicUtils.registerSong(new Song("Cloud 9 [NCS Release]", "Itro & Tobu", "http://files-cdn.nocopyrightsounds.co.uk/Itro%20%26%20Tobu%20-%20Cloud%209.mp3", "House"));
VertexClientPE.MusicUtils.registerSong(new Song("Coming Home [NCS Release]", "SirensCeol", "http://files-cdn.nocopyrightsounds.co.uk/SirensCeol%20-%20Coming%20Home.mp3", "Dubstep"));
VertexClientPE.MusicUtils.registerSong(new Song("Daydreamer", "Ahxello & Alex Skrindo", "http://b1.ge.tt/gett/842vbod2/Ahxello+%26+Alex+Skrindo+-+Daydreamer.mp3?index=0&user=user-ixW6scU8M6%E2%80%A6TeP06a11F-&referrer=user-ixW6scU8M6tdtVBWuAeo7oA2hZquSTeP06a11F-&download=1"));
VertexClientPE.MusicUtils.registerSong(new Song("Dusk [NCS Release]", "Tobu & Syndec", "http://files-cdn.nocopyrightsounds.co.uk/Tobu%20%26%20Syndec%20-%20Dusk.mp3", "House"));
VertexClientPE.MusicUtils.registerSong(new Song("Eclipse [NCS Release]", "Jim Yosef", "http://files-cdn.nocopyrightsounds.co.uk/Jim%20Yosef%20-%20Eclipse.mp3", "House"));
VertexClientPE.MusicUtils.registerSong(new Song("Elevate [NCS Release]", "Arcien", "http://files-cdn.nocopyrightsounds.co.uk/Arcien%20-%20Elevate.mp3", "Drum&Bass"));
VertexClientPE.MusicUtils.registerSong(new Song("Entropy", "Distrion & Alex Skrindo", "http://files-cdn.nocopyrightsounds.co.uk/Distrion%20%26%20Alex%20Skrindo%20-%20Entropy.mp3","House"));
VertexClientPE.MusicUtils.registerSong(new Song("Fall To Light [NCS Release]", "Laszlo", "http://files-cdn.nocopyrightsounds.co.uk/Laszlo%20-%20Fall%20to%20Light.mp3", "Drum&Bass"));
VertexClientPE.MusicUtils.registerSong(new Song("Feel Good [NCS Release]", "Syn Cole", "https://www.dropbox.com/s/mitidcr9qbyto93/Syn%20Cole%20-%20Feel%20Good%20%28Radio%20Edit%29%20%5BNCS%5D.mp3?dl=1"));
VertexClientPE.MusicUtils.registerSong(new Song("Firefly [NCS Release]", "Jim Yosef", "http://files-cdn.nocopyrightsounds.co.uk/jim-yosef-firefly-ncs-release.mp3", "House"));
VertexClientPE.MusicUtils.registerSong(new Song("Fly Away [NCS Release]", "Krys Talk", "http://files-cdn.nocopyrightsounds.co.uk/Krys%20Talk%20-%20Fly%20Away.mp3", "Dubstep"));
VertexClientPE.MusicUtils.registerSong(new Song("Get Up Again (feat. Axol) [NCS Release]", "Alex Skrindo", "https://www.dropbox.com/s/0b08kt0ezlno0vb/Alex%20Skrindo%20-%20Get%20Up%20Again%20%28Feat.%20Axol%29%20%255BNCS%20Release%255D.mp3?dl=1"));
VertexClientPE.MusicUtils.registerSong(new Song("Gravity (feat. Liz Kretschmer) [NCS Release]", "Umpire", "http://files-cdn.nocopyrightsounds.co.uk/Umpire%20-%20Gravity%20%28feat.%20Liz%20Kretschmer%29.mp3", "Chillstep"));
VertexClientPE.MusicUtils.registerSong(new Song("Halcyon [NCS Release]", "JJD", "https://www.dropbox.com/s/mx1on7w0dykslx6/JJD%20-%20Halcyon.mp3?dl=1"));
VertexClientPE.MusicUtils.registerSong(new Song("Happy Accidents [NCS Release]", "Inukshuk", "http://files-cdn.nocopyrightsounds.co.uk/Inukshuk%20-%20Happy%20Accidents.mp3", "Electronic"));
VertexClientPE.MusicUtils.registerSong(new Song("Hollah! [NCS Release]", "Disfigure", "http://files-cdn.nocopyrightsounds.co.uk/Disfigure%20-%20Hollah%21.mp3", "Chillstep"));
VertexClientPE.MusicUtils.registerSong(new Song("Invincible [NCS Release]", "DEAF KEV", "http://files-cdn.nocopyrightsounds.co.uk/DEAF%20KEV%20-%20Invincible.mp3", "Trap"));
VertexClientPE.MusicUtils.registerSong(new Song("Lights [NCS Release]", "Jim Yosef", "http://files-cdn.nocopyrightsounds.co.uk/Jim%20Yosef%20-%20Lights.mp3", "House"));
VertexClientPE.MusicUtils.registerSong(new Song("Moments [NCS Release]", "Alex Skrindo & Stahl!", "http://files-cdn.nocopyrightsounds.co.uk/Alex%20Skrindo%20%26%20Stahl%21%20-%20Moments.mp3", "House"));
VertexClientPE.MusicUtils.registerSong(new Song("My Heart [NCS Release]", "Different Heaven & EH!DE", "http://files-cdn.nocopyrightsounds.co.uk/Different%20Heaven%20%26%20EH%21DE%20-%20My%20Heart.mp3", "Drumstep"));
VertexClientPE.MusicUtils.registerSong(new Song("Nekozilla", "Different Heaven", "http://files-cdn.nocopyrightsounds.co.uk/Different%20Heaven%20-%20Nekozilla.mp3","Electronic"));
VertexClientPE.MusicUtils.registerSong(new Song("Nova [NCS Release]", "Ahrix", "http://files-cdn.nocopyrightsounds.co.uk/Ahrix%20-%20Nova.mp3", "House"));
VertexClientPE.MusicUtils.registerSong(new Song("Puzzle [NCS Release]", "RetroVision", "https://www.dropbox.com/s/qb5y2bo2npczawn/RetroVision%20-%20Puzzle.mp3?dl=1"));
VertexClientPE.MusicUtils.registerSong(new Song("Roots [NCS Release]", "Tobu", "https://www.dropbox.com/s/a2m1fqjxaotszy5/Tobu%20-%20Roots.mp3?dl=1"));
VertexClientPE.MusicUtils.registerSong(new Song("Savannah (feat. Philly K) [NCS Release]", "Diviners", "https://www.dropbox.com/s/2t5tsjib4ihwvaq/Diviners%20-%20Savannah%20%28ft.%20Philly%20K%29.mp3?dl=0"));
VertexClientPE.MusicUtils.registerSong(new Song("Time Leap [NCS Release]", "Aero Chord", "http://files-cdn.nocopyrightsounds.co.uk/Aero%20Chord%20-%20Time%20Leap.mp3", "Drum&Bass"));
VertexClientPE.MusicUtils.registerSong(new Song("Tropic Love [NCS Release]", "Diviners feat. Contacreast", "http://files-cdn.nocopyrightsounds.co.uk/Diviners%20ft.%20Contacreast%20-%20Tropic%20Love%20%28Original%20Mix%29.mp3", "House"));
//VertexClientPE.MusicUtils.registerSong(new Song("", "", ""));

VertexClientPE.healthTags = function() {
	let mobs = Entity.getAll();

	for(let i = 0; i < mobs.length; i++) {

		/* now the variable "mobs" is now "mobs[i]",
		if you are asking why they are they now like this, it is because we split all gotten entities as their own, that means you can personalize them, (that is very useful when you are using Entity.get() scripts. So I can give all entities a personalized (as example) nametag which shows their own health. */

		let xq = Entity.getX(mobs[i]) - getPlayerX();
		let yq = Entity.getY(mobs[i]) - getPlayerY();
		let zq = Entity.getZ(mobs[i]) - getPlayerZ();



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

function nuke(x, y, z, range, mode) {
	mode = (mode==null)?"cube":mode;
	range = (range==null)?3:range;
	var destroyFunction = bypassState?Level.destroyBlock:setTile;
	var destroyLastParam = bypassState?false:0;
	if(mode == "cube") {
		for(var blockX = - range; blockX <= range; blockX++) {
			for(var blockY = - range; blockY <= range; blockY++) {
				for(var blockZ = - range; blockZ <= range; blockZ++) {
					let tileX = Math.floor(x + blockX);
					let tileY = Math.floor(y + blockY);
					let tileZ = Math.floor(z + blockZ);
					if(getTile(tileX, tileY, tileZ) != 0) {
						destroyFunction(tileX, tileY, tileZ, destroyLastParam);
					}
				}
			}
		}
	} if(mode == "flat") {
		for(var blockX = - range; blockX <= range; blockX++) {
			for(var blockY = -1; blockY <= range; blockY++) {
				for(var blockZ = - range; blockZ <= range; blockZ++) {
					let tileX = Math.floor(x + blockX);
					let tileY = Math.floor(y + blockY);
					let tileZ = Math.floor(z + blockZ);
					if(getTile(tileX, tileY, tileZ) != 0) {
						destroyFunction(tileX, tileY, tileZ, destroyLastParam);
					}
				}
			}
		}
	} if(mode == "smash") {
		for(var blockX = - range; blockX <= range; blockX++) {
			for(var blockY = - range; blockY <= range; blockY++) {
				for(var blockZ = - range; blockZ <= range; blockZ++) {
					let tileX = Math.floor(x + blockX);
					let tileY = Math.floor(y + blockY);
					let tileZ = Math.floor(z + blockZ);
					let tile = getTile(tileX, tileY, tileZ);
					if(Block.getDestroyTime(tile) == 0 && tile != 0) {
						destroyFunction(tileX, tileY, tileZ, destroyLastParam);
					}
				}
			}
		}
	}
}

var fancyChatMsg;
var fancyChatEndChar;

VertexClientPE.fancyChat = function(str) {
	fancyChatMsg = new String_(str);
	switch(fancyChatMode) {
		case "default":
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
			newMsg += new String_(Character_.toChars(chr + fancyChatEndChar));
		} else {
			newMsg += chr;
		}
	}
	Server.sendChat(newMsg);
}

VertexClientPE.getItemInSlot = function(newSlot) {
	let oldSlot = Player.getSelectedSlotId();
	Player.setSelectedSlotId(newSlot);
	let itemId = Player.getCarriedItem();
	Player.setSelectedSlotId(oldSlot);
	
	return itemId;
}

VertexClientPE.getSwordDamage = function(i) {
	switch(i) {
		default:
			return;
	}
}

VertexClientPE.autoSword = function(a, v) {
	if(a == getPlayerEnt()) {
		let swordIds = [];
		let bestSlot = [null, null];
		for(let i = 0; i <= 8; i++) {
			let itemInSlot = VertexClientPE.getItemInSlot(i);
			if(itemInSlot == 268) {
				if(bestSlot[1] != 283 && bestSlot[1] != 272 && bestSlot[1] != 267 && bestSlot[1] != 276) {
					bestSlot = [i, itemInSlot];
				}
			}
			if(itemInSlot == 283) {
				if(bestSlot[1] != 272 && bestSlot[1] != 267 && bestSlot[1] != 276) {
					bestSlot = [i, itemInSlot];
				}
			}
			if(itemInSlot == 272) {
				if(bestSlot[1] != 267 && bestSlot[1] != 276) {
					bestSlot = [i, itemInSlot];
				}
			}
			if(itemInSlot == 267) {
				if(bestSlot[1] != 276) {
					bestSlot = [i, itemInSlot];
				}
			}
			if(itemInSlot == 276) {
				bestSlot = [i, itemInSlot];
				break;
			}
		}
		if(bestSlot[0] != null) {	
			Player.setSelectedSlotId(bestSlot[0]);
		}
	}
}

VertexClientPE.ride = function(entity) {
	rideAnimal(getPlayerEnt(), entity);
}

VertexClientPE.autoSpammer = function() {
	let runSpamMsg;
	if(spamUseRandomMsgSetting == "on") {
		runSpamMsg = Math.random().toString(36).replace(/[^a-z]+/g, '');
	} else {
		runSpamMsg = spamMessage;
	}
	let username = Player.getName(getPlayerEnt());
	Entity.setNameTag(getPlayerEnt(), "");
	if(fancyChatState) {
		VertexClientPE.fancyChat(runSpamMsg);
	} else {
		Server.sendChat(runSpamMsg);
	}
	Entity.setNameTag(getPlayerEnt(), username);
}

var freecamEntity;

VertexClientPE.freecam = function(onOrOff) {
	switch(onOrOff) {
		case 0: {
			ModPE.setCamera(getPlayerEnt());
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

var settingsPath = Environment_.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftpe/";
var worldsPath = Environment_.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftWorlds/";

VertexClientPE.saveAutoSpammerMessage = function() {
	new File_(settingsPath).mkdirs();
	var newFile = new File_(settingsPath, "vertexclientpe_spammessage.txt");
	newFile.createNewFile();
	var outWrite = new OutputStreamWriter_(new FileOutputStream_(newFile));
	outWrite.append(spamMessage.toString());

	outWrite.close();
}

VertexClientPE.loadAutoSpammerSettings = function() {
	if(!File_(settingsPath + "vertexclientpe_spammessage.txt").exists())
		return;
	var file = new File_(settingsPath + "vertexclientpe_spammessage.txt");
	var fos = new FileInputStream_(file);
	var str = new StringBuilder_();
	var ch;
	while((ch = fos.read()) != -1)
		str.append(Character_(ch));
	if(str != null && str != undefined) {
		spamMessage = str.toString();
	}
	fos.close();
	return true;
}

VertexClientPE.saveFeaturesSettings = function() {
	File_(settingsPath).mkdirs();
	var newFile = new File_(settingsPath, "vertexclientpe_features.txt");
	newFile.createNewFile();
	var outWrite = new OutputStreamWriter_(new FileOutputStream_(newFile));
	outWrite.append(combatSaveEnabled.toString());
	outWrite.append("," + worldSaveEnabled.toString());
	outWrite.append("," + movementSaveEnabled.toString());
	outWrite.append("," + playerSaveEnabled.toString());
	outWrite.append("," + miscSaveEnabled.toString());
	outWrite.append("," + singleplayerSaveEnabled.toString());

	outWrite.close();
}

VertexClientPE.loadFeaturesSettings = function() {
	var file = new File_(settingsPath + "vertexclientpe_features.txt");
	if (file.exists()) {
		var fos = new FileInputStream_(file),
			str = new StringBuilder_(),
			ch;
		while ((ch = fos.read()) != -1) {
			str.append(Character_(ch));
		}
		var arr = str.toString().split(",");
		if (arr[0] != null && arr[0] != undefined) {
			combatEnabled = arr[0];
			combatSaveEnabled = combatEnabled;
		}
		if (arr[1] != null && arr[1] != undefined) {
			worldEnabled = arr[1];
			worldSaveEnabled = worldEnabled;
		}
		if (arr[2] != null && arr[2] != undefined) {
			movementEnabled = arr[2];
			movementSaveEnabled = movementEnabled;
		}
		if (arr[3] != null && arr[3] != undefined) {
			playerEnabled = arr[3];
			playerSaveEnabled = playerEnabled;
		}
		if (arr[4] != null && arr[4] != undefined) {
			miscEnabled = arr[4];
			miscSaveEnabled = miscEnabled;
		}
		if (arr[5] != null && arr[5] != undefined) {
			singleplayerEnabled = arr[5];
			singleplayerSaveEnabled = singleplayerEnabled;
		}
		fos.close();
		
		return true;
	}
}

VertexClientPE.saveCategorySettings = function() {
	File_(settingsPath).mkdirs();
	var newFile = new File_(settingsPath, "vertexclientpe_categories_new.txt");
	newFile.createNewFile();
	var outWrite = new OutputStreamWriter_(new FileOutputStream_(newFile));
	outWrite.append(combatName.toString());
	outWrite.append("," + worldName.toString());
	outWrite.append("," + movementName.toString());
	outWrite.append("," + playerName.toString());
	outWrite.append("," + miscName.toString());

	outWrite.close();
}

VertexClientPE.loadCategorySettings = function() {
	if(!File_(settingsPath + "vertexclientpe_categories_new.txt").exists())
		return;
	var file = new File_(settingsPath + "vertexclientpe_categories_new.txt");
	var fos = new FileInputStream_(file);
	var str = new StringBuilder_();
	var ch;
	while((ch = fos.read()) != -1)
		str.append(Character_(ch));
	if(str != null && str != undefined) {
		var _0xbbeb=["\x69\x73\x50\x72\x6F","\x74\x72\x75\x65","\x2C","\x73\x70\x6C\x69\x74"];if(VertexClientPE[_0xbbeb[0]]()==_0xbbeb[1]){combatName=str.toString()[_0xbbeb[3]](_0xbbeb[2])[0];worldName=str.toString()[_0xbbeb[3]](_0xbbeb[2])[1];movementName=str.toString()[_0xbbeb[3]](_0xbbeb[2])[2];playerName=str.toString()[_0xbbeb[3]](_0xbbeb[2])[3];miscName=str.toString()[_0xbbeb[3]](_0xbbeb[2])[4]}
	}
	fos.close();
	return true;
}

VertexClientPE.saveAccounts = function() {
	File_(settingsPath).mkdirs();
	var newFile = new File_(settingsPath, "vertexclientpe_accounts.dat");
	newFile.createNewFile();
	var stream = new FileOutputStream_(newFile);
	try {
		stream.write(VertexClientPE.accounts.toString().getBytes());
	} finally {
		stream.close();
	}
}

VertexClientPE.saveFriends = function() {
	File_(settingsPath).mkdirs();
	var newFile = new File_(settingsPath, "vertexclientpe_friends.dat");
	newFile.createNewFile();
	var stream = new FileOutputStream_(newFile);
	try {
		stream.write(VertexClientPE.friends.toString().getBytes());
	} finally {
		stream.close();
	}
}

VertexClientPE.loadAccounts = function() {
	try {
		if(!File_(settingsPath + "vertexclientpe_accounts.dat").exists())
			return;
		var file = new File_(settingsPath + "vertexclientpe_accounts.dat");
		var readed = (new BufferedReader_(new FileReader_(file)));
		var data = new StringBuilder_();
		var string;
		while((string = readed.readLine()) != null) {
			data.append(string);
			data.append("\n");
		}
		VertexClientPE.accounts = new JSONArray_(data.toString());
	} catch(e) {
		//error
	}
}

VertexClientPE.loadFriends = function() {
	try {
		if(!File_(settingsPath + "vertexclientpe_friends.dat").exists())
			return;
		var file = new File_(settingsPath + "vertexclientpe_friends.dat");
		var readed = (new BufferedReader_(new FileReader_(file)));
		var data = new StringBuilder_();
		var string;
		while((string = readed.readLine()) != null) {
			data.append(string);
			data.append("\n");
		}
		VertexClientPE.friends = new JSONArray_(data.toString());
	} catch(e) {
		//error
	}
}

VertexClientPE.saveTiles = function() {
	File_(settingsPath).mkdirs();
	var newFile = new File_(settingsPath, "vertexclientpe_customtiles.dat");
	newFile.createNewFile();
	var stream = new FileOutputStream_(newFile);
	try {
		stream.write(VertexClientPE.customTiles.toString().getBytes());
	} finally {
		stream.close();
	}
}

VertexClientPE.loadTiles = function() {
	try {
		if(!File_(settingsPath + "vertexclientpe_customtiles.dat").exists())
			return;
		var file = new File_(settingsPath + "vertexclientpe_customtiles.dat");
		var readed = (new BufferedReader_(new FileReader_(file)));
		var data = new StringBuilder_();
		var string;
		while((string = readed.readLine()) != null) {
			data.append(string);
			data.append("\n");
		}
		VertexClientPE.customTiles = new JSONArray_(data.toString());
	} catch(e) {
		//error
	}
}

VertexClientPE.loadDeathCoords = function() {
	if(!File_(worldsPath + Level.getWorldDir() + "/" + "death.dat").exists())
		return;
	var file = new File_(worldsPath + Level.getWorldDir() + "/" + "death.dat");
	var fos = new FileInputStream_(file);
	var str = new StringBuilder_();
	var ch;
	while((ch = fos.read()) != -1)
		str.append(Character_(ch));
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
	File_(settingsPath).mkdirs();
	var newFile = new File_(worldsPath + Level.getWorldDir() + "/" + "death.dat");
	newFile.createNewFile();
	var outWrite = new OutputStreamWriter_(new FileOutputStream_(newFile));
	outWrite.append(VertexClientPE.currentWorld.deathX.toString());
	outWrite.append("," + VertexClientPE.currentWorld.deathY.toString());
	outWrite.append("," + VertexClientPE.currentWorld.deathZ.toString());

	outWrite.close();
	
	VertexClientPE.saveAutoSpammerMessage();
	VertexClientPE.saveCategorySettings();
}

VertexClientPE.saveCustomRGBSettings = function() {
	File_(settingsPath).mkdirs();
	var newFile = new File_(settingsPath, "vertex_rgb.txt");
	newFile.createNewFile();
	var outWrite = new OutputStreamWriter_(new FileOutputStream_(newFile));
	outWrite.append(customRGBRed.toString());
	outWrite.append("," + customRGBGreen.toString());
	outWrite.append("," + customRGBBlue.toString());
	outWrite.append("," + customRGBRedStroke.toString());
	outWrite.append("," + customRGBGreenStroke.toString());
	outWrite.append("," + customRGBBlueStroke.toString());

	outWrite.close();
}

VertexClientPE.loadCustomRGBSettings = function () {
	var file = new File_(settingsPath + "vertex_rgb.txt");
	if (file.exists()) {
		var fos = new FileInputStream_(file),
			str = new StringBuilder_(),
			ch;
		while ((ch = fos.read()) != -1) {
			str.append(Character_(ch));
		}
		var arr = str.toString().split(",");
		if (arr[0] != null && arr[0] != undefined) {
			customRGBRed = arr[0]; //Here we split text by ","
		}
		if (arr[1] != null && arr[1] != undefined) {
			customRGBGreen = arr[1];
		}
		if (arr[2] != null && arr[2] != undefined) {
			customRGBBlue = arr[2];
		}
		if (arr[3] != null && arr[3] != undefined) {
			customRGBRedStroke = arr[3];
		}
		if (arr[4] != null && arr[4] != undefined) {
			customRGBGreenStroke = arr[4];
		}
		if (arr[5] != null && arr[5] != undefined) {
			customRGBBlueStroke = arr[5];
		}
		fos.close();
		
		return true;
	}
}

VertexClientPE.saveFloatingMenus = function(category) {
	if(category == "combat" || category == "all") {
		editor.putFloat("VertexClientPE.combattpopx", parseInt(combattpopx));
		editor.putFloat("VertexClientPE.combattpopy", parseInt(combattpopy));
		editor.putBoolean("VertexClientPE.combatMenuShown", combatMenuShown);
	}
	//---
	if(category == "world" || category == "all") {
		editor.putFloat("VertexClientPE.worldtpopx", parseInt(worldtpopx));
		editor.putFloat("VertexClientPE.worldtpopy", parseInt(worldtpopy));
		editor.putBoolean("VertexClientPE.worldMenuShown", worldMenuShown);
	}
	//---
	if(category == "movement" || category == "all") {
		editor.putFloat("VertexClientPE.movementtpopx", parseInt(movementtpopx));
		editor.putFloat("VertexClientPE.movementtpopy", parseInt(movementtpopy));
		editor.putBoolean("VertexClientPE.movementMenuShown", movementMenuShown);
	}
	//---
	if(category == "player" || category == "all") {
		editor.putFloat("VertexClientPE.playertpopx", parseInt(playertpopx));
		editor.putFloat("VertexClientPE.playertpopy", parseInt(playertpopy));
		editor.putBoolean("VertexClientPE.playerMenuShown", playerMenuShown);
	}
	//---
	if(category == "misc" || category == "all") {
		editor.putFloat("VertexClientPE.misctpopx", parseInt(misctpopx));
		editor.putFloat("VertexClientPE.misctpopy", parseInt(misctpopy));
		editor.putBoolean("VertexClientPE.miscMenuShown", miscMenuShown);
	}
	
	editor.commit();
}

VertexClientPE.loadFloatingMenus = function () {
	combattpopx = sharedPref.getFloat("VertexClientPE.combattpopx", combattpopx);
	combattpopy = sharedPref.getFloat("VertexClientPE.combattpopy", combattpopy);
	combatMenuShown = sharedPref.getBoolean("VertexClientPE.combatMenuShown", combatMenuShown);
	//---
	worldtpopx = sharedPref.getFloat("VertexClientPE.worldtpopx", worldtpopx);
	worldtpopy = sharedPref.getFloat("VertexClientPE.worldtpopy", worldtpopy);
	worldMenuShown = sharedPref.getBoolean("VertexClientPE.worldMenuShown", worldMenuShown);
	//---
	movementtpopx = sharedPref.getFloat("VertexClientPE.movementtpopx", movementtpopx);
	movementtpopy = sharedPref.getFloat("VertexClientPE.movementtpopy", movementtpopy);
	movementMenuShown = sharedPref.getBoolean("VertexClientPE.movementMenuShown", movementMenuShown);
	//---
	playertpopx = sharedPref.getFloat("VertexClientPE.playertpopx", playertpopx);
	playertpopy = sharedPref.getFloat("VertexClientPE.playertpopy", playertpopy);
	playerMenuShown = sharedPref.getBoolean("VertexClientPE.playerMenuShown", playerMenuShown);
	//---
	misctpopx = sharedPref.getFloat("VertexClientPE.misctpopx", misctpopx);
	misctpopy = sharedPref.getFloat("VertexClientPE.misctpopy", misctpopy);
	miscMenuShown = sharedPref.getBoolean("VertexClientPE.miscMenuShown", miscMenuShown);
}

VertexClientPE.saveMainSettings = function() {
	File_(settingsPath).mkdirs();
	var newFile = new File_(settingsPath, "vertexclientpenew.txt");
	newFile.createNewFile();
	var outWrite = new OutputStreamWriter_(new FileOutputStream_(newFile));
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
	outWrite.append("," + normalMenuTypeSize.toString());
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
	outWrite.append("," + transparentBgSetting.toString());
	outWrite.append("," + aimbotUseKillauraRange.toString());
	outWrite.append("," + screenshotModeSetting.toString());
	outWrite.append("," + killToMorphSetting.toString());
	outWrite.append("," + fontSetting.toString());
	outWrite.append("," + mainButtonStyleSetting.toString());
	outWrite.append("," + webBrowserStartPageSetting.toString());
	outWrite.append("," + backgroundStyleSetting.toString());
	outWrite.append("," + modButtonColorBlockedSetting.toString());
	outWrite.append("," + modButtonColorEnabledSetting.toString());
	outWrite.append("," + modButtonColorDisabledSetting.toString());
	outWrite.append("," + arrowGunMode.toString());
	outWrite.append("," + commandsSetting.toString());
	outWrite.append("," + cmdPrefix.toString());
	outWrite.append("," + shortcutSizeSetting.toString());
	outWrite.append("," + aimbotRangeSetting.toString());
	outWrite.append("," + speedHackFriction.toString());
	outWrite.append("," + remoteViewTeleportSetting.toString());
	outWrite.append("," + switchGamemodeSendCommandSetting.toString());
	outWrite.append("," + betterPauseSetting.toString());
	outWrite.append("," + shortcutUIHeightSetting.toString());
	outWrite.append("," + mainButtonTapSetting.toString());
	outWrite.append("," + autoWalkDirection.toString());
	outWrite.append("," + dashboardTileSize.toString());
	outWrite.append("," + spamUseRandomMsgSetting.toString());
	outWrite.append("," + buttonStrokeThicknessSetting.toString());
	outWrite.append("," + hacksListPosSetting.toString());
	outWrite.append("," + targetMobsSetting.toString());
	outWrite.append("," + targetPlayersSetting.toString());
	outWrite.append("," + shortcutUIPosSetting.toString());
	outWrite.append("," + hitboxesHitboxWidthSetting.toString());
	outWrite.append("," + hitboxesHitboxHeightSetting.toString());
	outWrite.append("," + showUpdateToastsSetting.toString());
	outWrite.append("," + showSnowInWinterSetting.toString());
	outWrite.append("," + preventDiggingSetting.toString());
	outWrite.append("," + preventPlacingSetting.toString());
	outWrite.append("," + preventAttacksSetting.toString());
	outWrite.append("," + fastBreakDestroyTime.toString());
	outWrite.append("," + strafeAuraRangeSetting.toString());
	outWrite.append("," + strafeAuraDirectionSetting.toString());
	outWrite.append("," + panicCombatSetting.toString());
	outWrite.append("," + panicWorldSetting.toString());
	outWrite.append("," + panicMovementSetting.toString());
	outWrite.append("," + panicPlayerSetting.toString());
	outWrite.append("," + panicMiscSetting.toString());
	outWrite.append("," + buttonSoundSetting.toString());
	outWrite.append("," + transparentSplashScreenSetting.toString());
	outWrite.append("," + showIconsOnTileShortcutsSetting.toString());
	outWrite.append("," + targetFriendsSetting.toString());

	outWrite.close();
	
	VertexClientPE.saveAutoSpammerMessage();
	VertexClientPE.saveCategorySettings();
}

VertexClientPE.loadMainSettings = function () {
	var file = new File_(settingsPath + "vertexclientpenew.txt");
	if (file.exists()) {
		var fos = new FileInputStream_(file),
			str = new StringBuilder_(),
			ch;
		while ((ch = fos.read()) != -1) {
			str.append(Character_(ch));
		}
		var arr = str.toString().split(",");
		if (arr[0] != null && arr[0] != undefined) {
			hacksListModeSetting = arr[0]; //Here we split text by ","
		}
		if (arr[1] != null && arr[1] != undefined) {
			mainButtonPositionSetting = arr[1];
		}
		if (arr[2] != null && arr[2] != undefined) {
			healthTagsSetting = arr[2];
		}
		if (arr[3] != null && arr[3] != undefined) {
			themeSetting = arr[3];
		}
		if (arr[4] != null && arr[4] != undefined) {
			playMusicSetting = arr[4];
		}
		if (arr[5] != null && arr[5] != undefined) {
			showNewsSetting = arr[5];
		}
		if (arr[6] != null && arr[6] != undefined) {
			menuAnimationsSetting = arr[6];
		}
		if (arr[7] != null && arr[7] != undefined) {
			nukerMode = arr[7];
		}
		if (arr[8] != null && arr[8] != undefined) {
			timerSpeed = arr[8];
		}
		if (arr[9] != null && arr[9] != undefined) {
			themeSetup = arr[9];
		}
		if (arr[10] != null && arr[10] != undefined) {
			nukerRange = arr[10];
		}
		if (arr[11] != null && arr[11] != undefined) {
			killAuraRange = arr[11];
		}
		if (arr[12] != null && arr[12] != undefined) {
			spamDelayTime = arr[12];
		}
		if (arr[13] != null && arr[13] != undefined) {
			normalMenuTypeSize = arr[13];
			if (normalMenuTypeSize == "normal") {
				customHeight = topBarHeight / 2;
			} else if (normalMenuTypeSize == "small") {
				customHeight = topBarHeight;
			}
		}
		if (arr[14] != null && arr[14] != undefined) {
			tapNukerRange = arr[14];
		}
		if (arr[15] != null && arr[15] != undefined) {
			menuType = arr[15];
		}
		if (arr[16] != null && arr[16] != undefined) {
			chestTracersRange = arr[16];
		}
		if (arr[17] != null && arr[17] != undefined) {
			tabGUIModeSetting = arr[17];
		}
		if (arr[18] != null && arr[18] != undefined) {
			chestTracersGroundMode = arr[18];
		}
		if (arr[19] != null && arr[19] != undefined) {
			chestTracersParticle = arr[19];
		}
		if (arr[20] != null && arr[20] != undefined) {
			antiLagDropRemoverSetting = arr[20];
		}
		if (arr[21] != null && arr[21] != undefined) {
			useLightThemeSetting = arr[21];
		}
		if (arr[22] != null && arr[22] != undefined) {
			buttonStyleSetting = arr[22];
		}
		if (arr[23] != null && arr[23] != undefined) {
			mcpeGUISetting = arr[23];
		}
		if (arr[24] != null && arr[24] != undefined) {
			chestESPRange = arr[24];
		}
		if (arr[25] != null && arr[25] != undefined) {
			transparentBgSetting = arr[25];
		}
		if (arr[26] != null && arr[26] != undefined) {
			aimbotUseKillauraRange = arr[26];
		}
		if (arr[27] != null && arr[27] != undefined) {
			screenshotModeSetting = arr[27];
		}
		if (arr[28] != null && arr[28] != undefined) {
			killToMorphSetting = arr[28];
		}
		if (arr[29] != null && arr[29] != undefined) {
			fontSetting = arr[29];
		}
		if (arr[30] != null && arr[30] != undefined) {
			mainButtonStyleSetting = arr[30];
		}
		if (arr[31] != null && arr[31] != undefined) {
			webbrowserStartPageSetting = arr[31];
		}
		if (arr[32] != null && arr[32] != undefined) {
			backgroundStyleSetting = arr[32];
		}
		if (arr[33] != null && arr[33] != undefined) {
			modButtonColorBlockedSetting = arr[33];
		}
		if (arr[34] != null && arr[34] != undefined) {
			modButtonColorEnabledSetting = arr[34];
		}
		if (arr[35] != null && arr[35] != undefined) {
			modButtonColorDisabledSetting = arr[35];
		}
		if (arr[36] != null && arr[36] != undefined) {
			arrowGunMode = arr[36];
		}
		if (arr[37] != null && arr[37] != undefined) {
			commandsSetting = arr[37];
		}
		if (arr[38] != null && arr[38] != undefined) {
			cmdPrefix = arr[38];
		}
		if (arr[39] != null && arr[39] != undefined) {
			shortcutSizeSetting = arr[39];
		}
		if (arr[40] != null && arr[40] != undefined) {
			aimbotRangeSetting = arr[40];
		}
		if (arr[41] != null && arr[41] != undefined) {
			speedHackFriction = arr[41];
		}
		if (arr[42] != null && arr[42] != undefined) {
			remoteViewTeleportSetting = arr[42];
		}
		if (arr[43] != null && arr[43] != undefined) {
			switchGamemodeSendCommandSetting = arr[43];
		}
		if (arr[44] != null && arr[44] != undefined) {
			betterPauseSetting = arr[44];
		}
		if (arr[45] != null && arr[45] != undefined) {
			shortcutUIHeightSetting = arr[45];
		}
		if (arr[46] != null && arr[46] != undefined) {
			mainButtonTapSetting = arr[46];
		}
		if (arr[47] != null && arr[47] != undefined) {
			autoWalkDirection = arr[47];
		}
		if (arr[48] != null && arr[48] != undefined) {
			dashboardTileSize = arr[48];
		}
		if (arr[49] != null && arr[49] != undefined) {
			spamUseRandomMsgSetting = arr[49];
		}
		if (arr[50] != null && arr[50] != undefined) {
			buttonStrokeThicknessSetting = arr[50];
		}
		if (arr[51] != null && arr[51] != undefined) {
			hacksListPosSetting = arr[51];
		}
		if (arr[52] != null && arr[52] != undefined) {
			targetMobsSetting = arr[52];
		}
		if (arr[53] != null && arr[53] != undefined) {
			targetPlayersSetting = arr[53];
		}
		if (arr[54] != null && arr[54] != undefined) {
			shortcutUIPosSetting = arr[54];
		}
		if (arr[55] != null && arr[55] != undefined) {
			hitboxesHitboxWidthSetting = arr[55];
		}
		if (arr[56] != null && arr[56] != undefined) {
			hitboxesHitboxHeightSetting = arr[56];
		}
		if (arr[57] != null && arr[57] != undefined) {
			showUpdateToastsSetting = arr[57];
		}
		if (arr[58] != null && arr[58] != undefined) {
			showSnowInWinterSetting = arr[58];
		}
		if (arr[59] != null && arr[59] != undefined) {
			preventDiggingSetting = arr[59];
		}
		if (arr[60] != null && arr[60] != undefined) {
			preventPlacingSetting = arr[60];
		}
		if (arr[61] != null && arr[61] != undefined) {
			preventAttacksSetting = arr[61];
		}
		if (arr[62] != null && arr[62] != undefined) {
			fastBreakDestroyTime = arr[62];
		}
		if (arr[63] != null && arr[63] != undefined) {
			strafeAuraRangeSetting = arr[63];
		}
		if (arr[64] != null && arr[64] != undefined) {
			strafeAuraDirectionSetting = arr[64];
		}
		if (arr[65] != null && arr[65] != undefined) {
			panicCombatSetting = arr[65];
		}
		if (arr[66] != null && arr[66] != undefined) {
			panicWorldSetting = arr[66];
		}
		if (arr[67] != null && arr[67] != undefined) {
			panicMovementSetting = arr[67];
		}
		if (arr[68] != null && arr[68] != undefined) {
			panicPlayerSetting = arr[68];
		}
		if (arr[69] != null && arr[69] != undefined) {
			panicMiscSetting = arr[69];
		}
		if (arr[70] != null && arr[70] != undefined) {
			buttonSoundSetting = arr[70];
		}
		if (arr[71] != null && arr[71] != undefined) {
			transparentSplashScreenSetting = arr[71];
		}
		if (arr[72] != null && arr[72] != undefined) {
			showIconsOnTileShortcutsSetting = arr[72];
		}
		if (arr[73] != null && arr[73] != undefined) {
			targetFriendsSetting = arr[73];
		}
		fos.close();
		VertexClientPE.loadCustomRGBSettings();
		VertexClientPE.loadAutoSpammerSettings();
		VertexClientPE.loadCategorySettings();
		VertexClientPE.font = fontSetting=="minecraft"?Typeface_.createFromFile(new File_(PATH, "minecraft.ttf")):VertexClientPE.defaultFont;
		MinecraftButtonLibrary.ProcessedResources.font = VertexClientPE.font;
		VertexClientPE.setupModButtonColors();
		
		return true;
	}
}

VertexClientPE.setupModButtonColors = function() {
	switch(modButtonColorBlockedSetting) {
		case "red":
			modButtonColorBlocked = Color_.RED;
			break;
		case "green":
			modButtonColorBlocked = Color_.GREEN;
			break;
		case "blue":
			modButtonColorBlocked = Color_.BLUE;
			break;
		case "yellow":
			modButtonColorBlocked = Color_.YELLOW;
			break;
		case "white":
			modButtonColorBlocked = Color_.WHITE;
			break;
		case "black":
			modButtonColorBlocked = Color_.BLACK;
			break;
	}
	switch(modButtonColorEnabledSetting) {
		case "red":
			modButtonColorEnabled = Color_.RED;
			break;
		case "green":
			modButtonColorEnabled = Color_.GREEN;
			break;
		case "blue":
			modButtonColorEnabled = Color_.BLUE;
			break;
		case "yellow":
			modButtonColorEnabled = Color_.YELLOW;
			break;
		case "white":
			modButtonColorEnabled = Color_.WHITE;
			break;
		case "black":
			modButtonColorEnabled = Color_.BLACK;
			break;
	}
	switch(modButtonColorDisabledSetting) {
		case "red":
			modButtonColorDisabled = Color_.RED;
			break;
		case "green":
			modButtonColorDisabled = Color_.GREEN;
			break;
		case "blue":
			modButtonColorDisabled = Color_.BLUE;
			break;
		case "yellow":
			modButtonColorDisabled = Color_.YELLOW;
			break;
		case "white":
			modButtonColorDisabled = Color_.WHITE;
			break;
		case "black":
			modButtonColorDisabled = Color_.BLACK;
			break;
	}
}

VertexClientPE.resetData = function() {
	editor.clear();
	editor.commit();
	VertexClientPE.toast("Successfully reset all data!");
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
	getContext().runOnUiThread(new Runnable_({
		run: function() {
			func(getContext());
		}
	}));
};

var GuiSize = TypedValue_.applyDimension(TypedValue_.COMPLEX_UNIT_DIP, 2, getContext().getResources().getDisplayMetrics());
var GetGui = function() {
	return BitmapFactory_.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/gui.png"));
};
var TrimImage = function(bitmap, x, y, width, height) {
	return Bitmap_.createBitmap(bitmap, x, y, width, height);
};
var GetSpritesheet = function() {
	return BitmapFactory_.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/spritesheet.png"));
};
var GetTouchgui = function() {
	return BitmapFactory_.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/touchgui.png"));
};
var GetGui = function() {
	return BitmapFactory_.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/gui.png"));
};

var trimImage = function(bitmap, x, y, width, height) {
	return Bitmap_.createBitmap(bitmap, x, y, width, height);
};

var getStretchedImage = function(bm, x, y, stretchWidth, stretchHeight, width, height) {
	var blank = Bitmap_.createBitmap(width, height, Bitmap_.Config.ARGB_8888);
	var Bitmap = Bitmap_;
	var part1 = Bitmap.createBitmap(bm, 0, 0, x, y);
	var part2 = Bitmap.createBitmap(bm, x, 0, stretchWidth, y);
	var part3 = Bitmap.createBitmap(bm, x + stretchWidth, 0, bm.getWidth() - x - stretchWidth, y);
	var part4 = Bitmap.createBitmap(bm, 0, y, x, stretchHeight);
	var part5 = Bitmap.createBitmap(bm, x, y, stretchWidth, stretchHeight);
	var part6 = Bitmap.createBitmap(bm, x + stretchWidth, y, bm.getWidth() - x - stretchWidth, stretchHeight);
	var part7 = Bitmap.createBitmap(bm, 0, y + stretchHeight, x, bm.getHeight() - y - stretchHeight);
	var part8 = Bitmap.createBitmap(bm, x, y + stretchHeight, stretchWidth, bm.getHeight() - y - stretchHeight);
	var part9 = Bitmap.createBitmap(bm, x + stretchWidth, y + stretchHeight, bm.getWidth() - x - stretchWidth, bm.getHeight() - y - stretchHeight);
	var canvas = new Canvas_(blank);
	canvas.drawBitmap(part1, 0, 0, null);
	canvas.drawBitmap(Bitmap.createScaledBitmap(part2, width - bm.getWidth() + stretchWidth, y, false), x, 0, null);
	canvas.drawBitmap(part3, width - bm.getWidth() + stretchWidth + x, 0, null);
	canvas.drawBitmap(Bitmap.createScaledBitmap(part4, x, height - bm.getHeight() + stretchHeight, false), 0, y, null);
	canvas.drawBitmap(Bitmap.createScaledBitmap(part5, width - bm.getWidth() + stretchWidth, height - bm.getHeight() + stretchHeight, false), x, y, null);
	canvas.drawBitmap(Bitmap.createScaledBitmap(part6, part3.getWidth(), height - bm.getHeight() + stretchHeight, false), width - bm.getWidth() + stretchWidth + x, y, null);
	canvas.drawBitmap(part7, 0, height - bm.getHeight() + stretchHeight + y, null);
	canvas.drawBitmap(Bitmap.createScaledBitmap(part8, width - bm.getWidth() + stretchWidth, part7.getHeight(), false), x, height - bm.getHeight() + stretchHeight + y, null);
	canvas.drawBitmap(part9, width - bm.getWidth() + stretchWidth + x, height - bm.getHeight() + stretchHeight + y, null);

	return new BitmapDrawable_(blank);
};

VertexClientPE.setupButton = function(buttonView, text, color, round, forceLightColor, style, thickness) {
	buttonView.setText(text);
	if(color == "white") {
		buttonView.setTextColor(Color_.BLACK);
	} else {
		buttonView.setTextColor(Color_.WHITE);
	}
	buttonView.setTransformationMethod(null);
	
	var rgbArray = [customRGBRed, customRGBGreen, customRGBBlue, customRGBRedStroke, customRGBGreenStroke, customRGBBlueStroke];
	
	if(style != "invisible") {
		var bg = GradientDrawable_();
		if(round == true) {
			bg.setCornerRadius(10);
		} else if(round != false && round != null) {
			var radiiFloatArray = Array_.newInstance(Float_.TYPE, 9);
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
			} if(round == "left_half") {
				for(var i = 0; i <= 7; i++) {
					if(i == 0 || i == 1 || i == 6 || i == 7) {
						radiiFloatArray[i] = 90;
					} else {
						radiiFloatArray[i] = radius;
					}
				}
			} if(round == "right_half") {
				for(var i = 0; i <= 7; i++) {
					if(i == 2 || i == 3 || i == 4 || i == 5) {
						radiiFloatArray[i] = 90;
					} else {
						radiiFloatArray[i] = radius;
					}
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		}
		
		bg.setShape(GradientDrawable_.RECTANGLE);
		
		bg.setColor(getColor("inner", color, forceLightColor));
		if(style != "normal_nostrokes") {
			bg.setStroke(thickness, getColor("stroke", color, forceLightColor));
		}
		
		buttonView.setOnTouchListener(new View_.OnTouchListener() {
			onTouch: function(v, event) {
				var action = event.getActionMasked();
				if(action == MotionEvent_.ACTION_CANCEL || action == MotionEvent_.ACTION_UP) {
					if(forceLightColor == true) {
						bg.setColor(Color_.parseColor("#00994C"));
						if(style != "normal_nostrokes") {
							bg.setStroke(thickness, Color_.parseColor("#00CC66"));
						}
					} else {
						bg.setColor(Color_.parseColor("#0B5B25"));
						if(style != "normal_nostrokes") {
							bg.setStroke(thickness, Color_.parseColor("#0F8219"));
						}
					}
					if(color == "custom rgb") {
						bg.setColor(Color_.rgb(rgbArray[0], rgbArray[1], rgbArray[2]));
						if(style != "normal_nostrokes") {
							bg.setStroke(dip2px(2), Color_.rgb(rgbArray[3], rgbArray[4], rgbArray[5]));
						}
					}
					if(color == "red") {
						if(forceLightColor == true) {
							bg.setColor(Color_.parseColor("#FF3333"));
							if(style != "normal_nostrokes") {
								bg.setStroke(thickness, Color_.parseColor("#FF6666"));
							}
						} else {
							bg.setColor(Color_.parseColor("#5B0C0C"));
							if(style != "normal_nostrokes") {
								bg.setStroke(thickness, Color_.parseColor("#821010"));
							}
						}
					} if(color == "blue") {
						if(forceLightColor == true) {
							bg.setColor(Color_.parseColor("#0080FF"));
							if(style != "normal_nostrokes") {
								bg.setStroke(thickness, Color_.parseColor("#3399FF"));
							}
						} else {
							bg.setColor(Color_.parseColor("#0A175B"));
							if(style != "normal_nostrokes") {
								bg.setStroke(thickness, Color_.parseColor("#0E3882"));
							}
						}
					} if(color == "purple") {
						bg.setColor(Color_.parseColor("#9F018C"));
						if(style != "normal_nostrokes") {
							bg.setStroke(thickness, Color_.parseColor("#BC21AB"));
						}
					} if(color == "violet") {
						bg.setColor(Color_.parseColor("#842DCE"));
						if(style != "normal_nostrokes") {
							bg.setStroke(thickness, Color_.parseColor("#8D38C9"));
						}
					} if(color == "yellow") {
						bg.setColor(Color_.parseColor("#CCCC00"));
						if(style != "normal_nostrokes") {
							bg.setStroke(thickness, Color_.parseColor("#FFFF00"));
						}
					} if(color == "orange") {
						bg.setColor(Color_.parseColor("#FF8C00"));
						if(style != "normal_nostrokes") {
							bg.setStroke(thickness, Color_.parseColor("#FFA500"));
						}
					} if(color == "brown") {
						bg.setColor(Color_.parseColor("#8B4513"));
						if(style != "normal_nostrokes") {
							bg.setStroke(thickness, Color_.parseColor("#CD853F"));
						}
					} if(color == "grey") {
						bg.setColor(Color_.parseColor("#808080"));
						if(style != "normal_nostrokes") {
							bg.setStroke(thickness, Color_.parseColor("#A9A9A9"));
						}
					} if(color == "white") {
						bg.setColor(Color_.parseColor("#E1E1E1"));
						if(style != "normal_nostrokes") {
							bg.setStroke(thickness, Color_.parseColor("#FFFFFF"));
						}
					} if(color == "black") {
						bg.setColor(Color_.parseColor("#141414"));
						if(style != "normal_nostrokes") {
							bg.setStroke(thickness, Color_.parseColor("#1E1E1E"));
						}
					}
					
					if(style == "legacy") {
						bg.setColor(Color_.parseColor("#000000"));
					}
					if(style == "legacy_inverted") {
						bg.setStroke(thickness, Color_.parseColor("#000000"));
					}
					if(style == "transparent") {
						bg.setColor(Color_.TRANSPARENT);
					}
					
					if(style != "tile") {
						var rect = new android.graphics.Rect(v.getLeft(), v.getTop(), v.getRight(), v.getBottom());
						if(rect.contains(v.getLeft() + event.getX(), v.getTop() + event.getY())) { // detect if the event happens inside the view
							// onClick will run soon

							// play sounds
							if(buttonSoundSetting == "minecraft") {
								//Level.playSoundEnt(getPlayerEnt(), "random.click", 100, 0);
								Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
							}
						}
					}
				} else {
					if(forceLightColor == true) {
						bg.setColor(Color_.parseColor("#00CC66"));
					} else {
						bg.setColor(Color_.parseColor("#0F8219"));
					}
					if(color == "custom rgb") {
						bg.setColor(Color_.rgb(rgbArray[3], rgbArray[4], rgbArray[5]));
					}
					if(color == "red") {
						if(forceLightColor == true) {
							bg.setColor(Color_.parseColor("#FF6666"));
						} else {
							bg.setColor(Color_.parseColor("#821010"));
						}
					} if(color == "blue") {
						if(forceLightColor == true) {
							bg.setColor(Color_.parseColor("#3399FF"));
						} else {
							bg.setColor(Color_.parseColor("#0E3882"));
						}
					} if(color == "purple") {
						bg.setColor(Color_.parseColor("#BC21AB"));
					} if(color == "violet") {
						bg.setColor(Color_.parseColor("#8D38C9"));
					} if(color == "yellow") {
						bg.setColor(Color_.parseColor("#FFFF00"));
					} if(color == "orange") {
						bg.setColor(Color_.parseColor("#FFA500"));
					} if(color == "brown") {
						bg.setColor(Color_.parseColor("#CD853F"));
					} if(color == "grey") {
						bg.setColor(Color_.parseColor("#A9A9A9"));
					} if(color == "white") {
						bg.setColor(Color_.parseColor("#FFFFFF"));
					} if(color == "black") {
						bg.setColor(Color_.parseColor("#1E1E1E"));
					}
					
					if(style == "legacy_inverted") {
						bg.setColor(Color_.parseColor("#000000"));
					}
					if(style == "tile") {
						bg.setStroke(dip2px(3), Color_.parseColor("#d3d3d3"));
					}
				}
				return false;
			}
		});
		
		buttonView.setBackgroundDrawable(bg);
	} else {
		buttonView.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
	}
	
	buttonView.setPaintFlags(buttonView.getPaintFlags() | Paint_.SUBPIXEL_TEXT_FLAG);
	buttonView.setTextSize(15);
	if(color == "white") {
		buttonView.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.WHITE);
	} else {
		buttonView.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
	}
}

function copyToClipboard(textToCopy) {
	let clipboard = CONTEXT.getSystemService(CONTEXT.CLIPBOARD_SERVICE);
	let clip = android.content.ClipData.newPlainText("label", textToCopy);
	clipboard.setPrimaryClip(clip);
}

function drawCircle(color) {
	var drawable = GradientDrawable_();
	drawable.setColor(color);
	drawable.setShape(1);
	return drawable;
}

function drawQuarterCircle(color, radius) {
	var drawable = GradientDrawable_();
	drawable.setColor(color);
	drawable.setCornerRadii([0, 0, 0, 0, 0, 0, radius, radius]);
	return drawable;
}

function fadeIn(duration) {
	var animation = new AlphaAnimation_(0, 1);
	animation.setDuration(duration);
	animation.setInterpolator(new DecelerateInterpolator_());
	return animation;
}

function fadeOut(duration) {
	var animation = new AlphaAnimation_(1, 0);
	animation.setDuration(duration);
	animation.setInterpolator(new DecelerateInterpolator_());
	return animation;
}

function rotate(duration, fromDegrees, toDegrees) {
	var animation = new RotateAnimation_(fromDegrees, toDegrees);
	animation.setDuration(duration);
	animation.setInterpolator(new LinearInterpolator_());
	return animation;
}

function clientButton(text, desc, color, round, forceLightColor, style, thickness) //menu buttons
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
	if(thickness == null) {
		thickness = dip2px(buttonStrokeThicknessSetting);
	}
	var display = new DisplayMetrics_();
	CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
	var defaultButton = new Button_(CONTEXT);
	defaultButton.setTypeface(VertexClientPE.font);
	if(desc != null && desc != undefined) {
		defaultButton.setOnLongClickListener(new View_.OnLongClickListener() {
			onLongClick: function(v, t) {
				VertexClientPE.toast(desc);
				return true;
			}
		});
	}

	VertexClientPE.setupButton(defaultButton, text, color, round, forceLightColor, style, thickness);
	defaultButton.setPadding(0, 0, 0, 0);
	defaultButton.setLineSpacing(0, 1.15);
	
	if(style != "tile") {
		if(fontSetting == "minecraft") {
			MinecraftButtonLibrary.addMinecraftStyleToTextView(defaultButton);
		}
		if(buttonSoundSetting != "system") {
			defaultButton.setSoundEffectsEnabled(false);
		}
	}
	return defaultButton;
}

function songButton(song, barLayout) {
	var songButtonText = song.artist + " - " + song.title;
	var songLayout = new LinearLayout_(CONTEXT);
	songLayout.setOrientation(LinearLayout_.HORIZONTAL);
	var songLeftWidth = display.widthPixels;
	var songClientButton = clientButton(songButtonText);
	songClientButton.setLayoutParams(new LinearLayout_.LayoutParams(songLeftWidth - dip2px(10) - dip2px(50), LinearLayout_.LayoutParams.WRAP_CONTENT));
	songClientButton.setOnClickListener(new View_.OnClickListener() {
		onClick: function(v) {
			VertexClientPE.MusicUtils.isPaused = false;
			barLayout.getLeftTimeView().setText("0:00");
			if(mpPlayButton != null) {
				mpPlayButton.setBackgroundResource(android.R.drawable.ic_media_pause);
			}
			VertexClientPE.MusicUtils.startMusicPlayer(song);
			VertexClientPE.MusicUtils.playingFirstTime = false;
		}
	});
	
	var songRightButton = clientButton("...");
	songRightButton.setLayoutParams(new LinearLayout_.LayoutParams(dip2px(50), LinearLayout_.LayoutParams.WRAP_CONTENT));
	songRightButton.setOnClickListener(new View_.OnClickListener() {
		onClick: function(v) {
			VertexClientPE.showSongDialog(song, songClientButton, barLayout);
		}
	});
	
	songLayout.addView(songClientButton);
	songLayout.addView(songRightButton);
	return songLayout;
}

function musicBar() {
	var musicBarLayout1 = new LinearLayout_(CONTEXT);
	musicBarLayout1.setOrientation(1);
	var musicBarLayout = new LinearLayout_(CONTEXT);
	musicBarLayout.setBackgroundDrawable(backgroundSpecial());
	musicBarLayout.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels, LinearLayout_.LayoutParams.WRAP_CONTENT));
	musicBarLayout.setOrientation(LinearLayout_.HORIZONTAL);
	musicBarLayout.setGravity(Gravity_.CENTER);
	var musicBarLayoutLeft = new LinearLayout_(CONTEXT);
	musicBarLayoutLeft.setOrientation(LinearLayout_.HORIZONTAL);
	musicBarLayoutLeft.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 8, LinearLayout_.LayoutParams.WRAP_CONTENT));
	var musicBarLayoutMiddle = new LinearLayout_(CONTEXT);
	musicBarLayoutMiddle.setOrientation(LinearLayout_.HORIZONTAL);
	musicBarLayoutMiddle.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels - (display.widthPixels / 8) * 2, LinearLayout_.LayoutParams.WRAP_CONTENT));
	var musicBarLayoutRight = new LinearLayout_(CONTEXT);
	musicBarLayoutRight.setOrientation(1);
	musicBarLayoutRight.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 8, LinearLayout_.LayoutParams.WRAP_CONTENT));
	musicBarLayout.addView(musicBarLayoutLeft);
	musicBarLayout.addView(musicBarLayoutMiddle);
	musicBarLayout.addView(musicBarLayoutRight);
	var musicBarSongTitleView = new clientTextView(musicText);
	musicBarSongTitleView.setBackgroundDrawable(backgroundSpecial("top", themeSetting));
	musicBarSongTitleView.setGravity(Gravity_.CENTER);
	musicBarSongTitleView.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
	musicBarSongTitleView.setMarqueeRepeatLimit(-1);
	musicBarSongTitleView.setSingleLine();
	musicBarSongTitleView.setHorizontallyScrolling(true);
	musicBarSongTitleView.setSelected(true);
	var musicBarSeekBar = clientSeekBar();
	musicBarSeekBar.setLayoutParams(new LinearLayout_.LayoutParams(LinearLayout_.LayoutParams.MATCH_PARENT, LinearLayout_.LayoutParams.WRAP_CONTENT, 1));
	if(VertexClientPE.MusicUtils.mp == null) {
		VertexClientPE.MusicUtils.initMusicPlayer();
	}
	var musicBarPlayButton = new Button_(CONTEXT);
	musicBarPlayButton.setPadding(0, 0, 0, 0);
	musicBarPlayButton.setBackgroundResource(android.R.drawable.ic_media_play);
	musicBarPlayButton.setLayoutParams(new LinearLayout_.LayoutParams(dip2px(36), dip2px(36)));
	musicBarPlayButton.setText("");
	var musicBarLeftTimeView = new TextView_(CONTEXT);
	musicBarLeftTimeView.setText("0:00");
	musicBarLeftTimeView.setTextColor(Color_.WHITE);
	var musicBarRightTimeView = new TextView_(CONTEXT);
	musicBarRightTimeView.setText("0:00");
	musicBarRightTimeView.setTextColor(Color_.WHITE);
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

function updatePaneButton(updateVersion, updateDesc, isDev) {
	isDev = isDev || false;
	
	var updatePaneLayout = new LinearLayout_(CONTEXT);
	updatePaneLayout.setOrientation(LinearLayout_.HORIZONTAL);
	updatePaneLayout.setGravity(Gravity_.CENTER);
	updatePaneLayout.setBackground(backgroundSpecial(true));
	var updatePaneLayoutLeft = new LinearLayout_(CONTEXT);
	updatePaneLayoutLeft.setOrientation(1);
	updatePaneLayoutLeft.setGravity(Gravity_.CENTER);
	updatePaneLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - dip2px(10), display.heightPixels / 4));
	var updatePaneLayoutRight = new LinearLayout_(CONTEXT);
	updatePaneLayoutRight.setOrientation(1);
	updatePaneLayoutRight.setGravity(Gravity_.CENTER);
	updatePaneLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - dip2px(10), display.heightPixels / 4));
	updatePaneLayout.addView(updatePaneLayoutLeft);
	updatePaneLayout.addView(updatePaneLayoutRight);
	var updatePaneText;
	if(isDev) {
		updatePaneText = clientTextView(updateVersion);
	} else {
		updatePaneText = clientTextView("v" + updateVersion);
	}
	updatePaneText.setTypeface(VertexClientPE.font, Typeface_.BOLD);
	var updatePaneDescText = clientTextView(updateDesc);
	updatePaneLayoutLeft.addView(updatePaneText);
	updatePaneLayoutLeft.addView(updatePaneDescText);
	var updatePaneDownloadButton = clientButton(isDev?"Copy URL":"Download");
	updatePaneDownloadButton.setCompoundDrawablesWithIntrinsicBounds(isDev?android.R.drawable.ic_input_get:android.R.drawable.stat_sys_download, 0, 0, 0);
	updatePaneDownloadButton.setLayoutParams(new LinearLayout_.LayoutParams(LinearLayout_.LayoutParams.MATCH_PARENT, display.heightPixels / 8));
	updatePaneDownloadButton.setOnClickListener(new View_.OnClickListener() {
		onClick: function(v) {
			if(isDev) {
				copyToClipboard("https://raw.githubusercontent.com/Vertex-Client/Vertex-Client-PE/master/Vertex%20Client%20PE.js");
				VertexClientPE.toast("Copied dev link to clipboard!");
			} else {
				var updateGithubVersion = updateVersion;
				if(updateGithubVersion.indexOf("Alpha") != -1 || updateGithubVersion.indexOf("Beta") != -1) {
					updateGithubVersion = updateGithubVersion.split(" ")[0] + "-" + updateGithubVersion.split(" ")[1];
				}
				VertexClientPE.toast("Started downloading...");
				if(!isDev) {
					downloadFile("/sdcard/Download/Vertex_Client_PE.modpkg", "https://github.com/Vertex-Client/Vertex-Client-PE/releases/download/v" + updateGithubVersion + "/Vertex_Client_PE.modpkg", true);
				} else {
					downloadFile("/sdcard/Download/Vertex_Client_PE_Dev.js", "https://raw.githubusercontent.com/Vertex-Client/Vertex-Client-PE/master/Vertex Client PE.js", true);
				}
			}
		}
	});
	var updatePaneInformationButton = clientButton("Info");
	updatePaneInformationButton.setCompoundDrawablesWithIntrinsicBounds(android.R.drawable.ic_menu_info_details, 0, 0, 0);
	updatePaneInformationButton.setLayoutParams(new LinearLayout_.LayoutParams(LinearLayout_.LayoutParams.MATCH_PARENT, display.heightPixels / 8));
	updatePaneInformationButton.setOnClickListener(new View_.OnClickListener() {
		onClick: function(v) {
			var updateGithubVersion = updateVersion;
			if(updateGithubVersion.indexOf("Alpha") != -1 || updateGithubVersion.indexOf("Beta") != -1) {
				updateGithubVersion = updateGithubVersion.split(" ")[0] + "-" + updateGithubVersion.split(" ")[1];
			}
			ModPE.goToURL("https://github.com/Vertex-Client/Vertex-Client-PE/releases/tag/v" + updateGithubVersion);
		}
	});
	
	var support = isSupported?"supported":"unsupported";
	var updatePaneTypeText = clientTextView("Current (" + support + ")");
	
	if(updateVersion != VertexClientPE.currentVersion) {
		updatePaneLayoutRight.addView(updatePaneDownloadButton);
	} else {
		updatePaneLayoutRight.addView(updatePaneTypeText);
	}
	
	if(!isDev) {
		updatePaneLayoutRight.addView(updatePaneInformationButton);
	}
	
	return updatePaneLayout;
}

function helpSection(title, description) {
	var helpSectionLayout1 = new LinearLayout_(CONTEXT);
	helpSectionLayout1.setOrientation(1);
	helpSectionLayout1.setGravity(Gravity_.CENTER);
	helpSectionLayout1.setBackground(backgroundSpecial(true));
	var helpSectionLayout = new LinearLayout_(CONTEXT);
	helpSectionLayout.setOrientation(LinearLayout_.HORIZONTAL);
	helpSectionLayout.setGravity(Gravity_.CENTER);
	var helpSectionLayoutLeft = new LinearLayout_(CONTEXT);
	helpSectionLayoutLeft.setOrientation(1);
	helpSectionLayoutLeft.setGravity(Gravity_.CENTER);
	helpSectionLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - dip2px(10), LinearLayout_.LayoutParams.WRAP_CONTENT));
	var helpSectionLayoutRight = new LinearLayout_(CONTEXT);
	helpSectionLayoutRight.setOrientation(1);
	helpSectionLayoutRight.setGravity(Gravity_.CENTER);
	helpSectionLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - dip2px(10), LinearLayout_.LayoutParams.WRAP_CONTENT));
	helpSectionLayout.addView(helpSectionLayoutLeft);
	helpSectionLayout.addView(helpSectionLayoutRight);
	var helpSectionTitle = clientTextView(title);
	helpSectionTitle.setTypeface(VertexClientPE.font, Typeface_.BOLD);
	helpSectionTitle.setBackgroundDrawable(backgroundSpecial("top", themeSetting));
	var helpSectionDescription = clientTextView(description);
	helpSectionLayoutLeft.addView(helpSectionDescription);
	
	helpSectionLayout1.addView(helpSectionTitle);
	helpSectionLayout1.addView(helpSectionLayout);
	
	return helpSectionLayout1;
}

function tileButton(tile, fromDashboard) {
	var tileText = tile.text;
	var tileIcon = tile.icon;
	var tileColor = tile.color;
	var forceLightColor = tile.forceLightColor;
	
	/* if(tile.usesCustomDrawable == undefined || tile.usesCustomDrawable == null) {
		tile.usesCustomDrawable = false;
	} */
	
	if(fromDashboard) {
		var params = new GridLayout_.LayoutParams();
		params.setMargins(5, 5, 5, 5);
		params.width = display.widthPixels / dashboardTileSize - dip2px(5);
		params.height = display.widthPixels / dashboardTileSize - dip2px(5);
		
		var defaultTileButton = clientButton(sharedPref.getString("VertexClientPE.tiles." + tileText + ".name", tileText), null, sharedPref.getString("VertexClientPE.tiles." + tileText + ".color", tileColor), false, sharedPref.getBoolean("VertexClientPE.tiles." + tileText + ".useLightColor", forceLightColor==null?true:forceLightColor), "tile", 0.1);
		defaultTileButton.setTypeface(VertexClientPE.tileFont);
		if(tile.usesCustomDrawable && tile.usesCustomDrawable()) {
			defaultTileButton.setCompoundDrawablesWithIntrinsicBounds(null, tileIcon, null, null);
		} else {
			defaultTileButton.setCompoundDrawablesWithIntrinsicBounds(0, tileIcon, 0, 0);
		}
		defaultTileButton.setLayoutParams(params);
		
		defaultTileButton.setOnLongClickListener(new View_.OnLongClickListener() {
			onLongClick: function(viewArg) {
				VertexClientPE.showTileDropDown(viewArg, tileText, tileColor, forceLightColor==null?true:forceLightColor, tile);
				return true;
			}
		});
	} else {
		var defaultTileButton = clientButton(sharedPref.getString("VertexClientPE.tiles." + tileText + ".name", tileText));
		defaultTileButton.setTypeface(VertexClientPE.font);
		if(showIconsOnTileShortcutsSetting == "on") {
			if(tile.usesCustomDrawable && tile.usesCustomDrawable()) {
				defaultTileButton.setCompoundDrawablesWithIntrinsicBounds(null, tileIcon, null, null);
			} else {
				defaultTileButton.setCompoundDrawablesWithIntrinsicBounds(0, tileIcon, 0, 0);
			}
		}
		defaultTileButton.setLayoutParams(new ViewGroup_.LayoutParams(dip2px(shortcutSizeSetting), dip2px(shortcutSizeSetting)));
		defaultTileButton.setAlpha(0.54);
	}
	
	defaultTileButton.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
	defaultTileButton.setMarqueeRepeatLimit(-1);
	defaultTileButton.setSingleLine();
	defaultTileButton.setHorizontallyScrolling(true);
	defaultTileButton.setSelected(true);
	
	defaultTileButton.setOnClickListener(new View_.OnClickListener() {
		onClick: function(viewArg) {
			if(tile.shouldDismissDashboard && fromDashboard) {
				exitScreenUI.dismiss();
				screenUI.dismiss();
			}
			tile.onClick(fromDashboard);
		}
	});
	
	return defaultTileButton;
}

function userBar() {
	var params = new LinearLayout_.LayoutParams(LinearLayout_.LayoutParams.WRAP_CONTENT, LinearLayout_.LayoutParams.WRAP_CONTENT);
	
	var defaultUserLayout = new LinearLayout_(CONTEXT);
	defaultUserLayout.setOrientation(LinearLayout_.HORIZONTAL);
	defaultUserLayout.setGravity(Gravity_.CENTER);
	defaultUserLayout.setLayoutParams(params);
	
	var steveHeadView = new ImageView_(CONTEXT);
	steveHeadView.setImageBitmap(imgSteveHead);
	
	var defaultUserTextView = clientTextView(ModPE.getPlayerName(), true);
	defaultUserTextView.setPadding(dip2px(8), 0, 0, 0);
	defaultUserTextView.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
	defaultUserTextView.setMarqueeRepeatLimit(-1);
	defaultUserTextView.setSingleLine();
	defaultUserTextView.setHorizontallyScrolling(true);
	defaultUserTextView.setSelected(true);
	
	var bg = GradientDrawable_();
	bg.setColor(Color_.parseColor("#70151515"));
	defaultUserLayout.setBackgroundDrawable(bg);
	
	defaultUserLayout.setOnTouchListener(new View_.OnTouchListener() {
		onTouch: function(v, event) {
			var action = event.getActionMasked();
			if(action == MotionEvent_.ACTION_CANCEL || action == MotionEvent_.ACTION_UP) {
				bg.setStroke(0, Color_.parseColor("#70151515"));
			} else {
				bg.setStroke(dip2px(3), Color_.parseColor("#d3d3d3"));
			}
			return false;
		}
	});
	
	defaultUserLayout.setOnClickListener(new View_.OnClickListener() {
		onClick: function(viewArg) {
			exitScreenUI.dismiss();
			screenUI.dismiss();
			VertexClientPE.showAccountManager(true);
		}
	});
	
	defaultUserLayout.addView(steveHeadView);
	defaultUserLayout.addView(defaultUserTextView);
	
	return defaultUserLayout;
}

function modButton(mod, buttonOnly, customSize) {
	if(mod.type == null) {
		mod.type = "Mod";
	}
	
	var modButtonName = VertexClientPE.getCustomModName(mod.name);
	var modInfoButtonName = "...";
	if(mod.requiresPro && mod.requiresPro() && !VertexClientPE.isPro()) {
		modInfoButtonName = "\uD83D\uDD12";
	}
	
	if(mod.state) {
		if(bypassState && mod.canBypassBypassMod && !mod.canBypassBypassMod()) {
			mod.onToggle();
			mod.state = true;
		}
	}
	
	var modButtonLayout = new LinearLayout_(CONTEXT);
	modButtonLayout.setOrientation(LinearLayout_.HORIZONTAL);
	if(menuType != "halfscreen") {
		modButtonLayout.setPadding(10, 5, 10, 5);
	}
	
	var modButtonLayoutLeft = new LinearLayout_(CONTEXT);
	modButtonLayoutLeft.setOrientation(1);
	if(menuType == "halfscreen") {
		modButtonLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2.5, display.heightPixels / 10));
	} else if(menuType == "halfscreen_top" || menuType == "tabbed_fullscreen") {
		modButtonLayoutLeft.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels - (display.widthPixels / 2 - display.widthPixels / 2.5) - 10, display.heightPixels / 12));
	} else {
		modButtonLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.heightPixels / 2.5 - 10, display.heightPixels / 12));
	}
	modButtonLayout.addView(modButtonLayoutLeft);
	
	var modButtonLayoutRight = new LinearLayout_(CONTEXT);
	modButtonLayoutRight.setOrientation(1);
	if(menuType == "halfscreen") {
		modButtonLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2.2 - display.widthPixels / 2.5, display.heightPixels / 10));
	} else if(menuType == "halfscreen_top" || menuType == "tabbed_fullscreen") {
		modButtonLayoutRight.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2 - display.widthPixels / 2.5 - 10, display.heightPixels / 12));
	} else {
		modButtonLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.heightPixels / 2 - display.heightPixels / 2.5 - 10, display.heightPixels / 12));
	}
	modButtonLayout.addView(modButtonLayoutRight);
	
	var corner = buttonOnly==true?null:"left";
	var defaultClientButton = clientButton(modButtonName, mod.desc, null, corner);
	if(mod.name == "Bypass") {
		bypassModButtonView = defaultClientButton;
	}
	if(mod.name == "Panic") {
		panicModButtonView = defaultClientButton;
	}
	if(buttonOnly == null || !buttonOnly) {
		if(menuType == "halfscreen") {
			defaultClientButton.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2.5, display.heightPixels / 10));
		} else if(menuType == "halfscreen_top" || menuType == "tabbed_fullscreen") {
			defaultClientButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels - (display.widthPixels / 2 - display.widthPixels / 2.5) - 10, display.heightPixels / 12));
		} else {
			defaultClientButton.setLayoutParams(new ViewGroup_.LayoutParams(display.heightPixels / 2.5 - 10, display.heightPixels / 12));
		}
	} else if(buttonOnly && customSize == null) {
		defaultClientButton.setLayoutParams(new ViewGroup_.LayoutParams(CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 6, (CONTEXT.getWindowManager().getDefaultDisplay().getHeight() / 3) / 5));
	} else if(customSize != null) {
		defaultClientButton.setLayoutParams(new ViewGroup_.LayoutParams(dip2px(customSize), dip2px(customSize)));
	}
	defaultClientButton.setAlpha(0.54);
	defaultClientButton.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
	defaultClientButton.setMarqueeRepeatLimit(-1);
	defaultClientButton.setSingleLine();
	defaultClientButton.setHorizontallyScrolling(true);
	defaultClientButton.setSelected(true);
	if(mod.isStateMod() && mod.state) {
		if(bypassState && mod.canBypassBypassMod && !mod.canBypassBypassMod()) {
			defaultClientButton.setTextColor(modButtonColorBlocked);
		} else {
			defaultClientButton.setTextColor(modButtonColorEnabled);
		}
		if(fontSetting != "minecraft") {
			defaultClientButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
		}
	} else {
		defaultClientButton.setTextColor(modButtonColorDisabled);
	}
	defaultClientButton.setOnClickListener(new View_.OnClickListener({
		onClick: function(viewArg) {
			var _0xff55=["\x59\x6F\x75\x27\x76\x65\x20\x63\x61\x6D\x65\x20\x61\x63\x72\x6F\x73\x73\x20\x61\x6E\x20\x6F\x75\x74\x64\x61\x74\x65\x64\x2C\x20\x65\x64\x69\x74\x65\x64\x20\x61\x6E\x64\x20\x75\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64\x20\x56\x65\x72\x74\x65\x78\x20\x43\x6C\x69\x65\x6E\x74\x20\x50\x45\x20\x73\x63\x72\x69\x70\x74\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x74\x68\x65\x20\x6F\x66\x66\x69\x63\x69\x61\x6C\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x6F\x6E\x20\x6F\x75\x72\x20\x77\x65\x62\x73\x69\x74\x65\x3A\x20\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2E\x6D\x6C","\x74\x6F\x61\x73\x74","\x59\x6F\x75\x27\x76\x65\x20\x63\x61\x6D\x65\x20\x61\x63\x72\x6F\x73\x73\x20\x61\x6E\x20\x65\x64\x69\x74\x65\x64\x20\x61\x6E\x64\x20\x75\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64\x20\x56\x65\x72\x74\x65\x78\x20\x43\x6C\x69\x65\x6E\x74\x20\x50\x45\x20\x73\x63\x72\x69\x70\x74\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x74\x68\x65\x20\x6F\x66\x66\x69\x63\x69\x61\x6C\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x6F\x6E\x20\x6F\x75\x72\x20\x77\x65\x62\x73\x69\x74\x65\x3A\x20\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2E\x6D\x6C"];if(!isAuthorized){if(!isSupported){VertexClientPE[_0xff55[1]](_0xff55[0])}else {VertexClientPE[_0xff55[1]](_0xff55[2])};return}
			if(mod.requiresPro && mod.requiresPro() && !VertexClientPE.isPro()) {
				VertexClientPE.showProDialog(mod.name);
				return;
			}
			if(mod.name == "Bypass") {
				mod.onToggle();
			} else {
				if(!bypassState) {
					mod.onToggle();
				} else if(bypassState && mod.canBypassBypassMod == undefined || mod.canBypassBypassMod == null) {
					mod.onToggle();
				} else if(bypassState && mod.canBypassBypassMod && !mod.canBypassBypassMod()) {
					if(mod.isStateMod() && mod.state) {
						mod.onToggle();
					} else if(mod.isStateMod() && !mod.state) {
						mod.state = true;
					} else if(!mod.isStateMod()) {
						VertexClientPE.toast("This mod is blocked by Bypass!");
					}
				}
			}
			if(mod.isStateMod()) {
				if(mod.state) {
					if(bypassState && mod.canBypassBypassMod && !mod.canBypassBypassMod()) {
						defaultClientButton.setTextColor(modButtonColorBlocked);
					} else {
						defaultClientButton.setTextColor(modButtonColorEnabled);
					}
					if(fontSetting != "minecraft") {
						defaultClientButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
					}
				} else if(!mod.state) {
					if(themeSetting == "white" && modButtonColorDisabledSetting == "black") {
						defaultClientButton.setTextColor(Color_.BLACK);
						if(fontSetting != "minecraft") {
							defaultClientButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.WHITE);
						}
					} else {
						defaultClientButton.setTextColor(modButtonColorDisabled);
						if(fontSetting != "minecraft") {
							defaultClientButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
						}
					}
				}
			}
			updateHacksList();
			if(buttonOnly) {
				if(customSize == null) {
					if(shortcutGUI != null && sharedPref.getString("VertexClientPE.mods." + mod.name + ".isFavorite", "false") == "true") {
						shortcutGUI.dismiss();
						showShortcuts();
					}
				} else {
					if(tabGUI != null && currentTabGUICategory == mod.category) {
						tabGUI.dismiss();
						showTabGUI();
					}
				}
			}
		}
	}));
	//var _0x9276=["\x69\x73\x50\x72\x6F","\x74\x72\x75\x65","\uD83D\uDD12\x20","\x73\x65\x74\x54\x65\x78\x74"];if(isProFeature&&VertexClientPE[_0x9276[0]]()!=_0x9276[1]){defaultClientButton[_0x9276[3]](_0x9276[2]+mod.name)}
	if(buttonOnly == null || !buttonOnly) {
		modButtonLayoutLeft.addView(defaultClientButton);
	}
	
	var defaultInfoButton = clientButton(modInfoButtonName, mod.name + " info and settings", null, "right");
	if(menuType == "halfscreen") {
		defaultInfoButton.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2.2 - display.widthPixels / 2.5, display.heightPixels / 10));
	} else if(menuType == "halfscreen_top" || menuType == "tabbed_fullscreen") {
		defaultInfoButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2 - display.widthPixels / 2.5 - 10, display.heightPixels / 12));
	} else {
		defaultInfoButton.setLayoutParams(new ViewGroup_.LayoutParams(display.heightPixels / 2 - display.heightPixels / 2.5 - 10, display.heightPixels / 12));
	}
	defaultInfoButton.setAlpha(0.54);
	defaultInfoButton.setOnClickListener(new View_.OnClickListener({
		onClick: function(viewArg) {
			if(mod.requiresPro && mod.requiresPro() && !VertexClientPE.isPro()) {
				VertexClientPE.showProDialog(mod.name);
				return;
			}
			VertexClientPE.showModDialog(mod, defaultClientButton);
		}
	}));
	modButtonLayoutRight.addView(defaultInfoButton);
	
	if(buttonOnly == null || !buttonOnly) {
		/* if(sharedPref.getString("VertexClientPE.mods." + mod.name + ".isFavorite", "false") == "true") {
			modButtonLayout.setBackgroundColor(Color_.RED);
		} */
		return modButtonLayout;
	} else if(buttonOnly) {
		return defaultClientButton;
	}
}

function addonButton(addon) {
	var addonButtonLayout = new LinearLayout_(CONTEXT);
	addonButtonLayout.setOrientation(1);
	addonButtonLayout.setGravity(Gravity_.CENTER);
	
	var defaultClientButton = clientButton(addon.name + " v" + addon.current_version, addon.desc);
	defaultClientButton.setLayoutParams(new LinearLayout_.LayoutParams(display.heightPixels / 2, display.heightPixels / 8));
	defaultClientButton.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
	defaultClientButton.setMarqueeRepeatLimit(-1);
	defaultClientButton.setSingleLine();
	defaultClientButton.setHorizontallyScrolling(true);
	defaultClientButton.setSelected(true);
	defaultClientButton.setOnClickListener(new View_.OnClickListener({
		onClick: function(viewArg) {
			VertexClientPE.showAddonDialog(addon);
		}
	}));
	defaultClientButton.setOnLongClickListener(new View_.OnLongClickListener() {
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
	var categoryTabLayout = new LinearLayout_(CONTEXT);
	categoryTabLayout.setOrientation(1);
	categoryTabLayout.setGravity(Gravity_.CENTER);
	
	if(currentTab == "Combat" && combatEnabled == "off") {
		currentTab = "World";
	}
	if(currentTab == "World" && worldEnabled == "off") {
		currentTab = "Movement";
	}
	if(currentTab == "Movement" && movementEnabled == "off") {
		currentTab = "Player";
	}
	if(currentTab == "Player" && playerEnabled == "off") {
		currentTab = "Misc";
	}

	var categoryName = VertexClientPE.category.toName(category);
	var categoryRealName = VertexClientPE.category.toRealName(category);
	
	var defaultClientButton = clientButton(categoryName);
	defaultClientButton.setAlpha(0.54);
	if(currentTab == categoryRealName) {
		defaultClientButton.setTextColor(Color_.GREEN);
		if(fontSetting != "minecraft") {
			defaultClientButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
		}
	}
	defaultClientButton.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
	defaultClientButton.setMarqueeRepeatLimit(-1);
	defaultClientButton.setSingleLine();
	defaultClientButton.setHorizontallyScrolling(true);
	defaultClientButton.setSelected(true);
	defaultClientButton.setOnClickListener(new View_.OnClickListener({
		onClick: function(viewArg) {
			if(currentTab != categoryRealName) {
				currentTab = categoryRealName;
				menuMiddleLayout.removeAllViews();
				menuRightLayout.removeAllViews();
				
				var tabTitle = new TextView_(CONTEXT);
				tabTitle.setText(currentTab);
				tabTitle.setTextSize(20);
				tabTitle.setGravity(Gravity_.CENTER);
				
				var categories = [VertexClientPE.category.COMBAT, VertexClientPE.category.WORLD, VertexClientPE.category.MOVEMENT, VertexClientPE.category.PLAYER, VertexClientPE.category.MISC];
	
				categories.forEach(function(element, index, array) {
					if((index == 0 && combatEnabled == "on") || (index == 1 && worldEnabled == "on") || (index == 2 && movementEnabled == "on") || (index == 3 && playerEnabled == "on") || (index == 4 && miscEnabled == "on")) {
						menuMiddleLayout.addView(new categoryTab(element));
					}
				});
				
				VertexClientPE.modules.forEach(function(element, index, array) {
					if(VertexClientPE.category.toRealName(element.category) == currentTab && (element.type == "Mod" || element.type == "Special")) {
						if(element.isExpMod && element.isExpMod() && !VertexClientPE.isExpMode()) {
							return;
						}
						if(element.checkBeforeAdding && !element.checkBeforeAdding()) {
							return;
						}
						menuRightLayout.addView(new modButton(element));
					}
				});
			}
		}
	}));
	defaultClientButton.setOnLongClickListener(new View_.OnLongClickListener({
		onLongClick: function(v, t) {
			VertexClientPE.showCategoryDialog(defaultClientButton, VertexClientPE.category.toName(category), category);
			return true;
		}
	}));
	//var _0x9276=["\x69\x73\x50\x72\x6F","\x74\x72\x75\x65","\uD83D\uDD12\x20","\x73\x65\x74\x54\x65\x78\x74"];if(isProFeature&&VertexClientPE[_0x9276[0]]()!=_0x9276[1]){defaultClientButton[_0x9276[3]](_0x9276[2]+mod.name)}
	categoryTabLayout.addView(defaultClientButton);
	
	return categoryTabLayout;
}

var currentMPTab = "All";

function musicPlayerTab(name, tabLayout, songLayout, playBar) {
	var musicPlayerTabHolderLayout = new LinearLayout_(CONTEXT);
	musicPlayerTabHolderLayout.setOrientation(1);
	musicPlayerTabHolderLayout.setGravity(Gravity_.CENTER);
	
	var defaultClientButton = clientButton(name);
	defaultClientButton.setAlpha(0.54);
	defaultClientButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2 - dip2px(5), LinearLayout_.LayoutParams.WRAP_CONTENT));
	if(currentMPTab == name) {
		defaultClientButton.setTextColor(Color_.GREEN);
		if(fontSetting != "minecraft") {
			defaultClientButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
		}
	}
	defaultClientButton.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
	defaultClientButton.setMarqueeRepeatLimit(-1);
	defaultClientButton.setSingleLine();
	defaultClientButton.setHorizontallyScrolling(true);
	defaultClientButton.setSelected(true);
	defaultClientButton.setOnClickListener(new View_.OnClickListener({
		onClick: function(viewArg) {
			if(currentMPTab != name) {
				currentMPTab = name;
				tabLayout.removeAllViews();
				songLayout.removeAllViews();
				
				var categories = ["All", "Favorite"];
	
				categories.forEach(function(element, index, array) {
					tabLayout.addView(new musicPlayerTab(element, tabLayout, songLayout, playBar));
				});
				
				VertexClientPE.MusicUtils.songList.forEach(function(element, index, array) {
					if(currentMPTab == "Favorite" && sharedPref.getString("VertexClientPE.songs." + element.title + ".isFavorite", "false") == "false") {
						return;
					}
					songLayout.addView(songButton(element, playBar));
				});
			}
		}
	}));
	//var _0x9276=["\x69\x73\x50\x72\x6F","\x74\x72\x75\x65","\uD83D\uDD12\x20","\x73\x65\x74\x54\x65\x78\x74"];if(isProFeature&&VertexClientPE[_0x9276[0]]()!=_0x9276[1]){defaultClientButton[_0x9276[3]](_0x9276[2]+mod.name)}
	musicPlayerTabHolderLayout.addView(defaultClientButton);
	
	return musicPlayerTabHolderLayout;
}

var currentTabGUICategory;

function tabGUICategoryButton(category, layout, layoutToBeOpened, layoutMain) {
	var tabGUICategoryButtonLayout = new LinearLayout_(CONTEXT);
	tabGUICategoryButtonLayout.setOrientation(1);
	
	var categoryButton = clientButton(VertexClientPE.category.toName(category));
	categoryButton.setLayoutParams(new LinearLayout_.LayoutParams(LinearLayout_.LayoutParams.MATCH_PARENT, (CONTEXT.getWindowManager().getDefaultDisplay().getHeight() / 3) / 5));
	categoryButton.setOnClickListener(new View_.OnClickListener({
		onClick: function(viewArg) {
			if(categoryButton.getCurrentTextColor() != Color_.GREEN) {
				categoryButton.setTextColor(Color_.GREEN);
				if(fontSetting != "minecraft") {
					categoryButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
				}
				currentTabGUICategory = category;
			} else {
				if(themeSetting == "white") {
					categoryButton.setTextColor(Color_.BLACK);
					if(fontSetting != "minecraft") {
						categoryButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.WHITE);
					}
				} else {
					categoryButton.setTextColor(Color_.WHITE);
					if(fontSetting != "minecraft") {
						categoryButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
					}
				}
				currentTabGUICategory = null;
			}
			for(var i = 0; i < layout.getChildCount(); i++) {
				if(layout.getChildAt(i).getChildAt(0) != categoryButton) {
					if(themeSetting == "white") {
						layout.getChildAt(i).getChildAt(0).setTextColor(Color_.BLACK);
						if(fontSetting != "minecraft") {
							layout.getChildAt(i).getChildAt(0).setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.WHITE);
						}
					} else {
						layout.getChildAt(i).getChildAt(0).setTextColor(Color_.WHITE);
						if(fontSetting != "minecraft") {
							layout.getChildAt(i).getChildAt(0).setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
						}
					}
				}
			}
			if(currentTabGUICategory != null) {
				if(layoutMain.getChildCount() == 1) {
					layoutMain.addView(layoutToBeOpened);
					var layoutToBeOpenedScrollView = new ScrollView(CONTEXT);
					var layoutToBeOpened1 = new LinearLayout_(CONTEXT);
					layoutToBeOpened1.setOrientation(1);
					layoutToBeOpened.addView(layoutToBeOpenedScrollView);
					layoutToBeOpenedScrollView.addView(layoutToBeOpened1);
					VertexClientPE.modules.forEach(function(element, index, array) {
						if(element.category == category && (element.type == "Mod" || element.type == "Special")) {
							if(element.isExpMod && element.isExpMod() && !VertexClientPE.isExpMode()) {
								return;
							}
							layoutToBeOpened1.addView(new modButton(element, true));
						}
					});
					if(VertexClientPE.isDebugMode()) {
						VertexClientPE.debugMessage("Added right layout");
					}
				} else if(layoutMain.getChildCount() == 2) {
					//layoutToBeOpened.addView for all modButtons
					layoutToBeOpened.removeAllViews();
					var layoutToBeOpenedScrollView = new ScrollView(CONTEXT);
					var layoutToBeOpened1 = new LinearLayout_(CONTEXT);
					layoutToBeOpened1.setOrientation(1);
					layoutToBeOpened.addView(layoutToBeOpenedScrollView);
					layoutToBeOpenedScrollView.addView(layoutToBeOpened1);
					VertexClientPE.modules.forEach(function(element, index, array) {
						if(element.category == category && (element.type == "Mod" || element.type == "Special")) {
							if(element.isExpMod && element.isExpMod() && !VertexClientPE.isExpMode()) {
								return;
							}
							if(element.checkBeforeAdding && !element.checkBeforeAdding()) {
								return;
							}
							layoutToBeOpened1.addView(new modButton(element, true));
						}
					});
					if(VertexClientPE.isDebugMode()) {
						VertexClientPE.debugMessage("Updated right layout");
					}
				}
			} else {
				if(layoutMain.getChildCount() == 2) {
					layoutMain.removeViewAt(1);
					layoutToBeOpened.removeAllViews();
					if(VertexClientPE.isDebugMode()) {
						VertexClientPE.debugMessage("Removed right layout");
					}
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
	var playerName = account.toString();
	
	var accountManagerAccountLayout = new LinearLayout_(CONTEXT);
	accountManagerAccountLayout.setOrientation(LinearLayout_.HORIZONTAL);
	accountManagerAccountLayout.setPadding(dip2px(10), 0, dip2px(10), 0);
	//accountManagerAccountLayout.setBackgroundDrawable();
	if(playerName == ModPE.getPlayerName()) {
		accountManagerAccountLayout.setBackgroundDrawable(backgroundSpecial(null, "green"));
	}
	
	var accountManagerAccountLayoutLeft = new LinearLayout_(CONTEXT);
	accountManagerAccountLayoutLeft.setOrientation(1);
	accountManagerAccountLayoutLeft.setGravity(Gravity_.CENTER_VERTICAL);
	accountManagerAccountLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
	accountManagerAccountLayout.addView(accountManagerAccountLayoutLeft);
	
	var accountManagerAccountLayoutCenter = new LinearLayout_(CONTEXT);
	accountManagerAccountLayoutCenter.setOrientation(1);
	accountManagerAccountLayoutCenter.setGravity(Gravity_.CENTER);
	accountManagerAccountLayoutCenter.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
	accountManagerAccountLayout.addView(accountManagerAccountLayoutCenter);
	
	var accountManagerAccountLayoutRight = new LinearLayout_(CONTEXT);
	accountManagerAccountLayoutRight.setOrientation(LinearLayout_.HORIZONTAL);
	accountManagerAccountLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
	accountManagerAccountLayout.addView(accountManagerAccountLayoutRight);
	var usernameText = clientTextView(account);
	usernameText.setTextSize(15);
	accountManagerAccountLayoutLeft.addView(usernameText);
	var useButton = clientButton("Use");
	useButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4  - dip2px(10), display.heightPixels / 10));
	useButton.setOnClickListener(new View_.OnClickListener({
		onClick: function(viewArg) {
			//var playerClientId = account.clientId.toString();
			var shouldRestart = false;
			if(playerName != ModPE.getPlayerName()) {
				ModPE.setPlayerName(playerName);
				shouldRestart = true;
			}
			if(shouldRestart) {
				ModPE.restart();
				return;
			}
			screenUI.dismiss();
			if(backScreenUI != null) {
				backScreenUI.dismiss();
			}
			exitScreenUI.dismiss();
			showMenuButton();
		}
	}));
	accountManagerAccountLayoutRight.addView(useButton);
	var deleteButton = clientButton("x");
	deleteButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 3 - display.widthPixels / 4  - dip2px(10), display.heightPixels / 10));
	deleteButton.setOnClickListener(new View_.OnClickListener({
		onClick: function(viewArg) {
			VertexClientPE.removeAccount(account.toString(), layout, accountManagerAccountLayout);
		}
	}));
	accountManagerAccountLayoutRight.addView(deleteButton);
	
	return accountManagerAccountLayout;
}

function friendButton(friend, layout) {
	var playerName = friend.toString();
	
	let delButtonWidth = display.widthPixels / 3 - display.widthPixels / 4  - dip2px(10);
	
	var friendManagerAccountLayout = new LinearLayout_(CONTEXT);
	friendManagerAccountLayout.setOrientation(LinearLayout_.HORIZONTAL);
	friendManagerAccountLayout.setPadding(dip2px(10), 0, dip2px(10), 0);
	//friendManagerAccountLayout.setGravity(Gravity_.CENTER);
	
	var friendManagerAccountLayoutLeft_ = new LinearLayout_(CONTEXT);
	friendManagerAccountLayoutLeft_.setOrientation(1);
	friendManagerAccountLayoutLeft_.setGravity(Gravity_.CENTER_VERTICAL);
	friendManagerAccountLayoutLeft_.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
	friendManagerAccountLayout.addView(friendManagerAccountLayoutLeft_);
	
	var friendManagerAccountLayoutLeft = new LinearLayout_(CONTEXT);
	friendManagerAccountLayoutLeft.setOrientation(LinearLayout_.HORIZONTAL);
	friendManagerAccountLayoutLeft.setGravity(Gravity_.CENTER_VERTICAL);
	friendManagerAccountLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 4 - delButtonWidth, display.heightPixels / 10));
	friendManagerAccountLayout.addView(friendManagerAccountLayoutLeft);
	
	var friendManagerAccountLayoutRight = new LinearLayout_(CONTEXT);
	friendManagerAccountLayoutRight.setOrientation(LinearLayout_.HORIZONTAL);
	friendManagerAccountLayoutRight.setGravity(Gravity_.RIGHT);
	friendManagerAccountLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 4 + delButtonWidth, display.heightPixels / 10));
	friendManagerAccountLayout.addView(friendManagerAccountLayoutRight);
	
	var usernameText = clientTextView(friend);
	usernameText.setTextSize(15);
	usernameText.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
	usernameText.setMarqueeRepeatLimit(-1);
	usernameText.setSingleLine();
	usernameText.setHorizontallyScrolling(true);
	usernameText.setSelected(true);
	friendManagerAccountLayoutLeft.addView(usernameText);
	
	var deleteButton = clientButton("x");
	deleteButton.setLayoutParams(new LinearLayout_.LayoutParams(delButtonWidth, display.heightPixels / 10));
	deleteButton.setOnClickListener(new View_.OnClickListener({
		onClick: function(viewArg) {
			VertexClientPE.removeFriend(friend.toString(), layout, friendManagerAccountLayout);
		}
	}));
	friendManagerAccountLayoutRight.addView(deleteButton);
	
	return friendManagerAccountLayout;
}

function clientTextButton(text, shadow) //menu buttons
{
	var defaultTextButton = new Button_(CONTEXT);
	defaultTextButton.setText(text);
	
	if(shadow == true && shadow != null && shadow != undefined) {
		if(Build_.VERSION.SDK_INT > 19) { // KITKAT
			if(fontSetting != "minecraft") {
				defaultTextButton.setShadowLayer(1, Math.round(defaultTextButton.getLineHeight() / 8), Math.round(defaultTextButton.getLineHeight() / 8), Color_.parseColor("#FF333333"));
			}
		} else {
			if(fontSetting != "minecraft") {
				defaultTextButton.setShadowLayer(0.0001, Math.round(defaultTextButton.getLineHeight() / 8), Math.round(defaultTextButton.getLineHeight() / 8), Color_.parseColor("#FF333333"));
			}
		}
	}
	defaultTextButton.setPadding(0, 0, 0, 0);
	defaultTextButton.setLineSpacing(0, 1.15);
	return defaultTextButton;
}

function clientEditText(text) //menu buttons
{
	if(text == null) {
		text = "";
	}
	
	var defaultEditText = new EditText(CONTEXT);
	defaultEditText.setText(text);
	if(themeSetting == "white") {
		defaultEditText.setTextColor(Color_.BLACK);
	} else {
		defaultEditText.setTextColor(Color_.WHITE);
	}
	defaultEditText.setTypeface(VertexClientPE.font);
	
	if(themeSetting == "white") {
		if(fontSetting != "minecraft") {
			defaultEditText.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.WHITE);
		}
	} else {
		if(fontSetting != "minecraft") {
			defaultEditText.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
		}
	}
	
	if(fontSetting == "minecraft") {
		MinecraftButtonLibrary.addMinecraftStyleToTextView(defaultEditText);
	}
	return defaultEditText;
}

function clientSeekBar() {
	let defaultSeekBar = new SeekBar_(CONTEXT);
	//defaultSeekBar.getProgressDrawable().setColorFilter(new android.graphics.PorterDuffColorFilter(getColor("stroke"), PorterDuff_.Mode.SRC_IN));
	return defaultSeekBar;
}

function clientTextView(text, shadow) //menu buttons
{
	if(shadow == null) {
		shadow = true;
	}
	var defaultTextView = new TextView_(CONTEXT);
	defaultTextView.setText(text);
	if(themeSetting == "white") {
		defaultTextView.setTextColor(Color_.BLACK);
	} else {
		defaultTextView.setTextColor(Color_.WHITE);
	}
	defaultTextView.setTypeface(VertexClientPE.font);
	
	if(shadow) {
		if(themeSetting == "white") {
			if(fontSetting != "minecraft") {
				defaultTextView.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.WHITE);
			}
		} else {
			if(fontSetting != "minecraft") {
				defaultTextView.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
			}
		}
	}
	defaultTextView.setPadding(0, 0, 0, 0);
	defaultTextView.setLineSpacing(0, 1.15);
	
	if(fontSetting == "minecraft") {
		MinecraftButtonLibrary.addMinecraftStyleToTextView(defaultTextView);
	}
	return defaultTextView;
}

function clientSwitch() {
	var defaultSwitch = new Switch_(CONTEXT);
	if(themeSetting == "white") {
		defaultSwitch.setTextColor(Color_.BLACK);
	} else {
		defaultSwitch.setTextColor(Color_.WHITE);
	}
	defaultSwitch.setTypeface(VertexClientPE.font);
	
	if(themeSetting == "white") {
		if(fontSetting != "minecraft") {
			defaultSwitch.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.WHITE);
		}
	} else {
		if(fontSetting != "minecraft") {
			defaultSwitch.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
		}
	}
	
	if(fontSetting == "minecraft") {
		MinecraftButtonLibrary.addMinecraftStyleToTextView(defaultSwitch);
	}
	return defaultSwitch;
}

function clientSectionTitle(text, style) {
	var defaultTextView = new TextView_(CONTEXT);
	defaultTextView.setText(text);
	defaultTextView.setTextColor(Color_.WHITE);
	if(fontSetting != "minecraft") {
		defaultTextView.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
	}
	defaultTextView.setTypeface(VertexClientPE.font);
	
	if(style == "rainbow") {
		var rainbowInt = Array_.newInstance(Integer_.TYPE, 7);
		rainbowInt[0] = Color_.RED;
		rainbowInt[1] = Color_.MAGENTA;
		rainbowInt[2] = Color_.BLUE;
		rainbowInt[3] = Color_.CYAN;
		rainbowInt[4] = Color_.GREEN;
		rainbowInt[5] = Color_.YELLOW;
		rainbowInt[6] = Color_.RED;
		var rainbowBg = new GradientDrawable_(GradientDrawable_.Orientation.LEFT_RIGHT, rainbowInt);
		defaultTextView.setBackgroundDrawable(rainbowBg);
	} else {
		if(style == "theme") {
			var colorInt = Array_.newInstance(Integer_.TYPE, 2);
			colorInt[0] = getColor("inner");
			colorInt[1] = getColor("stroke");
			var colorBg = new GradientDrawable_(GradientDrawable_.Orientation.LEFT_RIGHT, colorInt);
			defaultTextView.setBackgroundDrawable(colorBg);
		} else {
			defaultTextView.setBackgroundDrawable(backgroundSpecial());
		}
	}
	defaultTextView.setPadding(0, 0, 0, 0);
	defaultTextView.setLineSpacing(0, 1.15);
	
	if(fontSetting == "minecraft") {
		MinecraftButtonLibrary.addMinecraftStyleToTextView(defaultTextView);
	}
	return defaultTextView;
}

function clientScreenTitle(defaultText) {
	defaultScreenTitle = clientTextView(sharedPref.getString("VertexClientPE.tiles." + defaultText + ".name", defaultText), true);
	defaultScreenTitle.setTextSize(25);
	defaultScreenTitle.setGravity(Gravity_.CENTER);
	
	if(fontSetting == "minecraft") {
		MinecraftButtonLibrary.addMinecraftStyleToTextView(defaultScreenTitle);
	}
	return defaultScreenTitle;
}

function clientHR() {//horizontal divider
	var defaultView = new View_(CONTEXT);
	defaultView.setLayoutParams(new LinearLayout_.LayoutParams(ViewGroup_.LayoutParams.MATCH_PARENT, 5));
	defaultView.setBackgroundColor(Color_.parseColor("#B3B3B3"));
	
	return defaultView;
}

function categoryTitle(text) {
	var categoryTitleLayout = new LinearLayout_(CONTEXT);
	categoryTitleLayout.setOrientation(LinearLayout_.HORIZONTAL);
	
	var categoryTitleLayoutLeft = new LinearLayout_(CONTEXT);
	categoryTitleLayoutLeft.setOrientation(1);
	categoryTitleLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.heightPixels / 3 - display.heightPixels / 4, display.heightPixels / 20));
	categoryTitleLayout.addView(categoryTitleLayoutLeft);
	
	var categoryTitleLayoutMiddle = new LinearLayout_(CONTEXT);
	categoryTitleLayoutMiddle.setOrientation(1);
	categoryTitleLayoutMiddle.setLayoutParams(new ViewGroup_.LayoutParams(display.heightPixels / 3, display.heightPixels / 20));
	categoryTitleLayout.addView(categoryTitleLayoutMiddle);
	
	var categoryTitleLayoutRight = new LinearLayout_(CONTEXT);
	categoryTitleLayoutRight.setOrientation(1);
	categoryTitleLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.heightPixels / 3 - display.heightPixels / 4, display.heightPixels / 20));
	categoryTitleLayout.addView(categoryTitleLayoutRight);
	
	var defaultSettingsButton = clientButton("\u270E", null, null, "left", null, true, dip2px(2));
	defaultSettingsButton.setLayoutParams(new LinearLayout_.LayoutParams(display.heightPixels / 3 - display.heightPixels / 4, display.heightPixels / 20));
	defaultSettingsButton.setAlpha(0.54);
	categoryTitleLayoutLeft.addView(defaultSettingsButton);
	
	var defaultTitle = coloredSubTitle(text);
	defaultTitle.setLayoutParams(new LinearLayout_.LayoutParams(display.heightPixels / 3, display.heightPixels / 20));
	defaultTitle.setGravity(Gravity_.CENTER);
	categoryTitleLayoutMiddle.addView(defaultTitle);
	
	var defaultArrowButton = clientButton("\u25BD", null, null, "right", null, true, dip2px(2));
	defaultArrowButton.setLayoutParams(new LinearLayout_.LayoutParams(display.heightPixels / 3 - display.heightPixels / 4, display.heightPixels / 20));
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

function settingButton(text, desc, parentWidth, resetFunc) {
	if(parentWidth == null) {
		parentWidth = display.widthPixels - dip2px(4);
	}
	
	var settingButtonLayout = new LinearLayout_(CONTEXT);
	settingButtonLayout.setOrientation(LinearLayout_.HORIZONTAL);
	
	var settingButtonLayoutLeft = new LinearLayout_(CONTEXT);
	settingButtonLayoutLeft.setOrientation(1);
	settingButtonLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(parentWidth / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
	settingButtonLayout.addView(settingButtonLayoutLeft);
	
	var settingButtonLayoutMiddle = new LinearLayout_(CONTEXT);
	settingButtonLayoutMiddle.setOrientation(1);
	settingButtonLayoutMiddle.setGravity(Gravity_.RIGHT);
	settingButtonLayoutMiddle.setLayoutParams(new ViewGroup_.LayoutParams(parentWidth / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
	settingButtonLayout.addView(settingButtonLayoutMiddle);
	
	var settingButtonLayoutRight = new LinearLayout_(CONTEXT);
	settingButtonLayoutRight.setOrientation(1);
	settingButtonLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(parentWidth / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
	settingButtonLayout.addView(settingButtonLayoutRight);
	
	var defaultTitle = clientTextView(text, true);
	defaultTitle.setLayoutParams(new LinearLayout_.LayoutParams(parentWidth / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
	defaultTitle.setGravity(Gravity_.CENTER_VERTICAL);
	
	settingButtonLayoutLeft.addView(defaultTitle);
	
	var resetButton;
	if(resetFunc) {
		resetButton = clientButton("Reset");
		resetButton.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
		resetButton.setMarqueeRepeatLimit(-1);
		resetButton.setSingleLine();
		resetButton.setHorizontallyScrolling(true);
		resetButton.setSelected(true);
		resetButton.setOnClickListener(new View_.OnClickListener() {
			onClick: function(viewArg) {
				resetFunc(viewArg);
				VertexClientPE.saveMainSettings();
			}
		});
		resetButton.setCompoundDrawablesWithIntrinsicBounds(0, android.R.drawable.stat_notify_sync, 0, 0);
		resetButton.setLayoutParams(new ViewGroup_.LayoutParams(parentWidth / 12, LinearLayout_.LayoutParams.WRAP_CONTENT));
		settingButtonLayoutMiddle.addView(resetButton);
	}
	
	var defaultSettingsButton = clientButton("", desc);
	defaultSettingsButton.setLayoutParams(new LinearLayout_.LayoutParams(parentWidth / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
	settingButtonLayoutRight.addView(defaultSettingsButton);
	
	this.getName = function() {
		return text;
	}
	
	this.getButton = function() {
		return defaultSettingsButton;
	}
	
	this.getTitle = function() {
		return defaultTitle;
	}
	
	this.getLayout = function() {
		return settingButtonLayout;
	}
}

function settingSelector(text, desc, dialogTitle, selectionArray, currentSelection, varToChange, customFirstOnClick) {
	var settingButtonLayout = new LinearLayout_(CONTEXT);
	settingButtonLayout.setOrientation(LinearLayout_.HORIZONTAL);
	
	var settingButtonLayoutLeft = new LinearLayout_(CONTEXT);
	settingButtonLayoutLeft.setOrientation(1);
	settingButtonLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
	settingButtonLayout.addView(settingButtonLayoutLeft);
	
	var settingButtonLayoutMiddle = new LinearLayout_(CONTEXT);
	settingButtonLayoutMiddle.setOrientation(1);
	settingButtonLayoutMiddle.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
	settingButtonLayout.addView(settingButtonLayoutMiddle);
	
	var settingButtonLayoutRight = new LinearLayout_(CONTEXT);
	settingButtonLayoutRight.setOrientation(1);
	settingButtonLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
	settingButtonLayout.addView(settingButtonLayoutRight);
	
	var defaultTitle = clientTextView(text, true);
	defaultTitle.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
	defaultTitle.setGravity(Gravity_.CENTER_VERTICAL);
	
	settingButtonLayoutLeft.addView(defaultTitle);
	var defaultSettingsButton = clientButton(currentSelection, desc);
	defaultSettingsButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
	//defaultSettingsButton.setCompoundDrawablesWithIntrinsicBounds(0, 0, android.R.layout.simple_spinner_dropdown_item, 0);
	
	settingButtonLayoutRight.addView(defaultSettingsButton);
	
	defaultSettingsButton.setOnClickListener(new View_.OnClickListener({
		onClick: function(viewArg) {
			VertexClientPE.showSettingSelectorDialog(defaultSettingsButton, dialogTitle, selectionArray, currentSelection, varToChange, customFirstOnClick);
		}
	}));
	
	this.getName = function() {
		return text;
	}
	
	this.getButton = function() {
		return defaultSettingsButton;
	}
	
	this.getTitle = function() {
		return defaultTitle;
	}
	
	this.getLayout = function() {
		return settingButtonLayout;
	}
}

function innerStringToCode(colorString, useLightColor) {
	if(colorString == null) {
		colorString = themeSetting;
	}
	if(useLightColor == null) {
		useLightColor = useLightThemeSetting;
	}
	if(useLightColor == "on") {
		useLightColor = true;
	}
	if(useLightColor == "off") {
		useLightColor = false;
	}
	if(colorString == "custom rgb") {
		return [customRGBRed, customRGBGreen, customRGBBlue];
	}
	if(colorString == "red") {
		if(useLightColor) {
			return "#FF3333";
		} else {
			return "#5B0C0C";
		}
	} if(colorString == "blue") {
		if(useLightColor) {
			return "#0080FF";
		} else {
			return "#0A175B";
		}
	} if(colorString == "purple") {
		return "#9F018C";
	} if(colorString == "violet") {
		return "#842DCE";
	} if(colorString == "yellow") {
		return "#CCCC00";
	} if(colorString == "orange") {
		return "#FF8C00";
	} if(colorString == "brown") {
		return "#8B4513";
	} if(colorString == "grey") {
		return "#808080";
	} if(colorString == "white") {
		return "#E1E1E1";
	} if(colorString == "black") {
		return "#141414";
	}
	
	if(useLightColor) {
		return "#00994C";
	} else {
		return "#0B5B25";
	}
}

function strokeStringToCode(colorString, useLightColor) {
	if(colorString == null) {
		colorString = themeSetting;
	}
	if(useLightColor == null) {
		useLightColor = useLightThemeSetting;
	}
	if(useLightColor == "on") {
		useLightColor = true;
	}
	if(useLightColor == "off") {
		useLightColor = false;
	}
	if(colorString == "custom rgb") {
		return [customRGBRedStroke, customRGBGreenStroke, customRGBBlueStroke];
	}
	if(colorString == "red") {
		if(useLightColor) {
			return "#FF6666";
		} else {
			return "#821010";
		}
	} if(colorString == "blue") {
		if(useLightColor) {
			return "#3399FF";
		} else {
			return "#0E3882";
		}
	} if(colorString == "purple") {
		return "#BC21AB";
	} if(colorString == "violet") {
		return "#8D38C9";
	} if(colorString == "yellow") {
		return "#FFFF00";
	} if(colorString == "orange") {
		return "#FFA500";
	} if(colorString == "brown") {
		return "#CD853F";
	} if(colorString == "grey") {
		return "#A9A9A9";
	} if(colorString == "white") {
		return "#FFFFFF";
	} if(colorString == "black") {
		return "#1E1E1E";
	}
	
	if(useLightColor) {
		return "#00CC66";
	} else {
		return "#0F8219";
	}
}

function getColor(part, colorString, useLightColor) {
	if(colorString == null) {
		colorString = themeSetting;
	}
	if(useLightColor == null) {
		useLightColor = useLightThemeSetting;
	}
	if(useLightColor == "on") {
		useLightColor = true;
	}
	if(useLightColor == "off") {
		useLightColor = false;
	}
	let colorStringToCode;
	if(part == null || part == "inner") {
		colorStringToCode = innerStringToCode;
	} else {
		colorStringToCode = strokeStringToCode;
	}
	if(colorString == "custom rgb") {
		let rgbArray = colorStringToCode(colorString, useLightColor);
		return Color_.rgb(rgbArray[0], rgbArray[1], rgbArray[2]);
	} else {
		return Color_.parseColor(colorStringToCode(colorString, useLightColor));
	}
}

function coloredSubTitle(subtitle) // TextView with colored background (edited by peacestorm)
{
	var bg = GradientDrawable_();
	bg.setColor(getColor("inner"));
	bg.setStroke(dip2px(2), getColor("stroke"));
	bg.setShape(GradientDrawable_.RECTANGLE);

	var title = clientTextView(subtitle, true);
	title.setAlpha(0.54);
	title.setBackgroundDrawable(bg);

	return title;
}

function backgroundSpecial(round, color, showProLine, lightColor) {
	var bg = GradientDrawable_();//todo
	var rgbArray = [customRGBRed, customRGBGreen, customRGBBlue];
	if(round == true) {
		bg.setCornerRadius(8);
	} else if(round != false && round != null) {
		var radiiFloatArray = Array_.newInstance(Float_.TYPE, 9);
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
		} else if(round == "cornerleft_") {
			for(var i = 0; i <= 7; i++) {
				if(i == 0 || i == 1) {
					radiiFloatArray[i] = 180;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "cornerright_") {
			for(var i = 0; i <= 7; i++) {
				if(i == 2 || i == 3) {
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
		} else if(round == "bottomleft") {
			for(var i = 0; i <= 7; i++) {
				if(i >= 4 && i <= 5) {
					radiiFloatArray[i] = 8;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "bottomright") {
			for(var i = 0; i <= 7; i++) {
				if(i >= 6) {
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
		bg.setColor(Color_.parseColor("#70151515"));
	} else if(color == "custom rgb") {
		bg.setColor(Color_.argb(127, rgbArray[0], rgbArray[1], rgbArray[2]));
	} else if(color == "green") {
		if(useLightThemeSetting == "on") {
			bg.setColor(Color_.parseColor("#7000994C"));
		} else {
			bg.setColor(Color_.parseColor("#700B5B25"));
		}
	} else if(color == "red") {
		if(useLightThemeSetting == "on") {
			bg.setColor(Color_.parseColor("#70FF3333"));
		} else {
			bg.setColor(Color_.parseColor("#705B0C0C"));
		}
	} else if(color == "blue") {
		if(useLightThemeSetting == "on") {
			bg.setColor(Color_.parseColor("#700080FF"));
		} else {
			bg.setColor(Color_.parseColor("#700A175B"));
		}
	} else if(color == "purple") {
		bg.setColor(Color_.parseColor("#709F018C"));
	} else if(color == "violet") {
		bg.setColor(Color_.parseColor("#70842DCE"));
	} else if(color == "yellow") {
		bg.setColor(Color_.parseColor("#70CCCC00"));
	} else if(color == "orange") {
		bg.setColor(Color_.parseColor("#70FF8C00"));
	} else if(color == "brown") {
		bg.setColor(Color_.parseColor("#708B4513"));
	} else if(color == "grey") {
		bg.setColor(Color_.parseColor("#70808080"));
	} else if(color == "white") {
		bg.setColor(Color_.parseColor("#70E1E1E1"));
	} else if(color == "black") {
		bg.setColor(Color_.parseColor("#70141414"));
	} else if (typeof color === "string" && color[0] === "#") {
		if (color.indexOf("|") < 0) {
			bg.setColor(Color_.parseColor(color));
		} else {
			var arr = color.split("|");
			bg.setColor(Color_.parseColor(arr[0]));
			bg.setStroke(dip2px(1), Color_.parseColor(arr[1]));
		}
	}
	
	if (showProLine == true && VertexClientPE.isPro()) {
		bg.setStroke(dip2px(2), Color_.parseColor("#70DAA520"));
	}
	bg.setShape(GradientDrawable_.RECTANGLE);

	return bg;
}

VertexClientPE.setupGradient = function(gradientDrawable, color, strokeColor, rgbArray, style, transparent) {
	if(!(gradientDrawable instanceof GradientDrawable_)) {
		throw new TypeError("The type of the first parameter is not GradientDrawable!");
		return;
	}
	if(style == "normal_noinner") {
		gradientDrawable.setColor(Color_.TRANSPARENT);
	}
	var preset = transparent?"#70":"#";
	if(rgbArray == null) {
		if(style != "normal_noinner") {
			gradientDrawable.setColor(Color_.parseColor(preset + color));
		}
		if(style != "normal_nostrokes") {
			gradientDrawable.setStroke(dip2px(2), Color_.parseColor(preset + strokeColor));
		}
	} else {
		if(transparent) {
			if(style != "normal_noinner") {
				gradientDrawable.setColor(Color_.argb(127, rgbArray[0], rgbArray[1], rgbArray[2]));
			}
			if(style != "normal_nostrokes") {
				gradientDrawable.setStroke(dip2px(2), Color_.argb(127, rgbArray[3], rgbArray[4], rgbArray[5]));
			}
		} else {
			if(style != "normal_noinner") {
				gradientDrawable.setColor(Color_.rgb(rgbArray[0], rgbArray[1], rgbArray[2]));
			}
			if(style != "normal_nostrokes") {
				gradientDrawable.setStroke(dip2px(2), Color_.rgb(rgbArray[3], rgbArray[4], rgbArray[5]));
			}
		}
	}
}

function backgroundGradient(round, style, transparent) // TextView with colored background (edited by peacestorm)
{
	if(style == null) {
		style = backgroundStyleSetting;
	}
	if(transparent == null) {
		transparent = transparentBgSetting;
	}
	transparent = transparent=="on";
	if(style == "normal" || style == "normal_nostrokes" || style == "normal_noinner") {
		var bg = GradientDrawable_();
		var radius = 0;
		if(round == true) {
			var radiiFloatArray = Array_.newInstance(Float_.TYPE, 9);
			for(var i = 0; i <= 7; i++) {
				if(i >= 4) {
					radiiFloatArray[i] = 16;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "bottomright") {
			var radiiFloatArray = Array_.newInstance(Float_.TYPE, 9);
			for(var i = 0; i <= 7; i++) {
				if(i >= 4 && i <= 5) {
					radiiFloatArray[i] = 16;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "bottomleft") {
			var radiiFloatArray = Array_.newInstance(Float_.TYPE, 9);
			for(var i = 0; i <= 7; i++) {
				if(i >= 6) {
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
			VertexClientPE.setupGradient(bg, "00994C", "00CC66", null, style, transparent);
		} else {
			VertexClientPE.setupGradient(bg, "0B5B25", "0F8219", null, style, transparent);
		}
		if(themeSetting == "custom rgb") {
			VertexClientPE.setupGradient(bg, null, null, [customRGBRed, customRGBGreen, customRGBBlue, customRGBRedStroke, customRGBGreenStroke, customRGBBlueStroke], style, transparent);
		}
		if(themeSetting == "red") {
			if(useLightThemeSetting == "on") {
				VertexClientPE.setupGradient(bg, "FF3333", "FF6666", null, style, transparent);
			} else {
				VertexClientPE.setupGradient(bg, "5B0C0C", "821010", null, style, transparent);
			}
		} if(themeSetting == "blue") {
			if(useLightThemeSetting == "on") {
				VertexClientPE.setupGradient(bg, "0080FF", "3399FF", null, style, transparent);
			} else {
				VertexClientPE.setupGradient(bg, "0A175B", "0E3882", null, style, transparent);
			}
		} if(themeSetting == "purple") {
			VertexClientPE.setupGradient(bg, "9F018C", "BC21AB", null, style, transparent);
		} if(themeSetting == "violet") {
			VertexClientPE.setupGradient(bg, "842DCE", "8D38C9", null, style, transparent);
		} if(themeSetting == "yellow") {
			VertexClientPE.setupGradient(bg, "CCCC00", "FFFF00", null, style, transparent);
		} if(themeSetting == "orange") {
			VertexClientPE.setupGradient(bg, "FF8C00", "FFA500", null, style, transparent);
		} if(themeSetting == "brown") {
			VertexClientPE.setupGradient(bg, "8B4513", "CD853F", null, style, transparent);
		} if(themeSetting == "grey") {
			VertexClientPE.setupGradient(bg, "808080", "A9A9A9", null, style, transparent);
		} if(themeSetting == "white") {
			VertexClientPE.setupGradient(bg, "E1E1E1", "FFFFFF", null, style, transparent);
		} if(themeSetting == "black") {
			VertexClientPE.setupGradient(bg, "141414", "1E1E1E", null, style, transparent);
		}
		bg.setShape(GradientDrawable_.RECTANGLE);

		return bg;
	} else if(style == "minecraft_dirt") {
		if(fileDirt == null) {
			fileDirt = new File_("/sdcard/games/com.mojang/dirt_background.png");
			inputStreamDirt = new FileInputStream_(fileDirt);
			dirtBackgroundClientGUI = new BitmapDrawable_(android.graphics.Bitmap.createScaledBitmap(BitmapFactory_.decodeStream(inputStreamDirt), dip2px(64), dip2px(64), false));
			dirtBackgroundClientGUI.setColorFilter(android.graphics.Color.rgb(70, 70, 70), android.graphics.PorterDuff.Mode.MULTIPLY);
			dirtBackgroundClientGUI.setTileModeXY(android.graphics.Shader.TileMode.REPEAT, android.graphics.Shader.TileMode.REPEAT);
		}
		
		var dirt = dirtBackgroundClientGUI;
		if(transparent == "on") {
			dirt.setAlpha(127);
		} else if(transparent == "off") {
			dirt.setAlpha(255);
		}
		
		return dirt;
	}
}

VertexClientPE.loadMainSettings();
(VertexClientPE.editCopyrightText = function() {
	ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A72Vertex Client PE by peacestorm");
	if(themeSetting == "red") {
		ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A74Vertex Client PE by peacestorm");
	} if(themeSetting == "blue") {
		ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A71Vertex Client PE by peacestorm");
	} if(themeSetting == "purple") {
		ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A75Vertex Client PE by peacestorm");
	} if(themeSetting == "violet") {
		ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A75Vertex Client PE by peacestorm");
	} if(themeSetting == "yellow") {
		ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A7eVertex Client PE by peacestorm");
	} if(themeSetting == "orange") {
		ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A76Vertex Client PE by peacestorm");
	} if(themeSetting == "brown") {
		ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A70Vertex Client PE by peacestorm");
	} if(themeSetting == "grey") {
		ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A78Vertex Client PE by peacestorm");
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
		var url = new URL_("https://raw.githubusercontent.com/Vertex-Client/Vertex-Client-PE/update/Updater/Version");
		var connection = url.openConnection();

		// get content
		inputStream = connection.getInputStream();

		// read result
		var loadedVersion = "";
		var bufferedVersionReader = new BufferedReader_(new InputStreamReader_(inputStream));
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
}

VertexClientPE.loadUpdateDescription = function() {
	try {
		// download content
		var url = new URL_("https://raw.githubusercontent.com/Vertex-Client/Vertex-Client-PE/update/Updater/Version-Desc/" + VertexClientPE.latestVersion);
		var connection = url.openConnection();

		// get content
		inputStream = connection.getInputStream();

		// read result
		var loadedUpdateDesc = "";
		var bufferedUpdateDescReader = new BufferedReader_(new InputStreamReader_(inputStream));
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
		var url = new URL_("https://raw.githubusercontent.com/Vertex-Client/Vertex-Client-PE/news/News");
		var connection = url.openConnection();

		// get content
		newsInputStream = connection.getInputStream();

		// read result
		var loadedNews = "";
		var bufferedNewsReader = new BufferedReader_(new InputStreamReader_(newsInputStream));
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

var _0x498b=["\x6C\x6F\x61\x64\x53\x75\x70\x70\x6F\x72\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2F\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2D\x50\x45\x2F\x75\x70\x64\x61\x74\x65\x2F\x53\x75\x70\x70\x6F\x72\x74\x2F","\x63\x75\x72\x72\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E","\x2F\x73\x75\x70\x70\x6F\x72\x74","\x6E\x65\x74","\x6F\x70\x65\x6E\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x67\x65\x74\x49\x6E\x70\x75\x74\x53\x74\x72\x65\x61\x6D","","\x69\x6F","\x72\x65\x61\x64\x4C\x69\x6E\x65","\x20","\x73\x70\x6C\x69\x74","\x75\x6E\x73\x75\x70\x70\x6F\x72\x74\x65\x64","\x63\x6C\x6F\x73\x65","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x69\x73\x53\x75\x70\x70\x6F\x72\x74\x65\x64\x5F","\x67\x65\x74\x53\x74\x72\x69\x6E\x67","\x66\x61\x6C\x73\x65","\x5B\x56\x65\x72\x74\x65\x78\x20\x43\x6C\x69\x65\x6E\x74\x20\x50\x45\x5D\x20\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x6C\x6F\x61\x64\x53\x75\x70\x70\x6F\x72\x74\x28\x29\x20\x63\x61\x75\x67\x68\x74\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x3A\x20","\x6C\x6F\x67","\x70\x75\x74\x53\x74\x72\x69\x6E\x67","\x63\x6F\x6D\x6D\x69\x74","\x53\x75\x70\x70\x6F\x72\x74","\x54\x68\x69\x73\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x69\x73\x20\x6E\x6F\x74\x20\x73\x75\x70\x70\x6F\x72\x74\x65\x64\x20\x61\x6E\x79\x6D\x6F\x72\x65\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x75\x70\x67\x72\x61\x64\x65\x20\x74\x6F\x20\x74\x68\x65\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x2E","\x73\x68\x6F\x77\x42\x61\x73\x69\x63\x44\x69\x61\x6C\x6F\x67"];VertexClientPE[_0x498b[0]]= function(){try{var _0x6663x1= new java[_0x498b[4]].URL(_0x498b[1]+ VertexClientPE[_0x498b[2]]+ _0x498b[3]);var _0x6663x2=_0x6663x1[_0x498b[5]]();supportInputStream= _0x6663x2[_0x498b[6]]();var _0x6663x3=_0x498b[7];var _0x6663x4= new java[_0x498b[8]].BufferedReader( new java[_0x498b[8]].InputStreamReader(supportInputStream));var _0x6663x5=_0x498b[7];while((_0x6663x5= _0x6663x4[_0x498b[9]]())!= null){_0x6663x3+= _0x6663x5};isSupported= _0x6663x3.toString()[_0x498b[11]](_0x498b[10])[0]== _0x498b[12]?false:true;_0x6663x4[_0x498b[13]]()}catch(err){if(sharedPref[_0x498b[15]](_0x498b[14]+ VertexClientPE[_0x498b[2]],null)== _0x498b[16]){isSupported= false}else {isSupported= true};ModPE[_0x498b[18]](_0x498b[17]+ err);return};editor[_0x498b[19]](_0x498b[14]+ VertexClientPE[_0x498b[2]],isSupported.toString());editor[_0x498b[20]]();if(!isSupported){VertexClientPE[_0x498b[23]](_0x498b[21],clientTextView(_0x498b[22]))}}

var lastLoop = new Date;
function gameLoop() {
	var thisLoop = new Date;
	VertexClientPE.Utils.fps = 1000 / (thisLoop - lastLoop);
	lastLoop = thisLoop;
}

VertexClientPE.isGUIShowing = function() {
	return GUI != null && !GUI.isShowing() && (vertexclientpemiscmenu == null || !vertexclientpemiscmenu.isShowing()) && (menu == null || !menu.isShowing()) && (fullScreenMenu == null || !fullScreenMenu.isShowing()) && (screenUI == null || !screenUI.isShowing());
}

VertexClientPE.clientTick = function() {
	new Thread_(new Runnable_() {
		run: function() {
			Thread_.sleep(1000 / 70);
			CONTEXT.runOnUiThread(new Runnable_({
				run: function() {
					let isGUIShowing = VertexClientPE.isGUIShowing();
					try {
						var _0x43af=["\x61\x75\x74\x68\x6F\x72","\x70\x65\x61\x63\x65\x73\x74\x6F\x72\x6D"];if(VertexClientPE[_0x43af[0]]!= _0x43af[1]){isAuthorized= false}
						if(isGUIShowing) {
							if(Launcher.isBlockLauncher()) {
								ScriptManager__.isRemote = true;
								ScriptManager__.setLevelFakeCallback(true, false);
							}
						}
						if(Launcher.isToolbox()) {
							if(Level.isRemote()) {
								if(!VertexClientPE.playerIsInGame) {
									newLevel();
									VertexClientPE.playerIsInGame = true;
								}
							}
						}
					} catch(e) {
						print("Use BlockLauncher v1.12.2 or above!");
						ModPE.log(e);
					}
					if(isGUIShowing) {
						showMenuButton();
					}
					/* if(!VertexClientPE.playerIsInGame) {
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
						if(healthDisplayUI != null) {
							if(healthDisplayUI.isShowing()) {
								healthDisplayUI.dismiss();
							}
						}
					} */
				}
			}));
			VertexClientPE.clientTick();
		}
	}).start();
}

VertexClientPE.inGameTick = function() {
	new Thread_(new Runnable_() {
		run: function() {
			Thread_.sleep(1000 / 20);
			if(VertexClientPE.playerIsInGame) {
				VertexClientPE.modules.forEach(function(element, index, array) {
					if(element.isStateMod() && element.state && element.onTick) {
						if(bypassState && element.canBypassBypassMod) {
							if(!element.canBypassBypassMod()) {
								return;
							}
						}
						element.onTick();
					}
				});
				if(betterPauseSetting == "on" && VertexClientPE.isPaused) {
					Entity.setVelX(getPlayerEnt(), 0);
					Entity.setVelY(getPlayerEnt(), 0);
					Entity.setVelZ(getPlayerEnt(), 0);
				}
				if(VertexClientPE.trailsMode != "off") {
					VertexClientPE.showTrails();
				}
			}
			VertexClientPE.inGameTick();
		}
	}).start();
}

VertexClientPE.specialTick = function() {
	new Thread_(new Runnable_() {
		run: function() {
			for (;;) {
				Thread_.sleep(1000 * spamDelayTime);
				if(VertexClientPE.playerIsInGame) {
					if(autoSpammerState) {
						VertexClientPE.autoSpammer();
					}
				}
				//VertexClientPE.specialTick();
			}
		}
	}).start();
}

var secondTickTimer = 0;
var lagTimer = 0;

VertexClientPE.secondTick = function() {
	new Thread_(new Runnable_() {
		run: function() {
			Thread_.sleep(1000);
			VertexClientPE.modules.forEach(function(element, index, array) {
				if(element.isStateMod() && element.state && element.onInterval) {
					element.onInterval();
				}
			});
			
			if(antiLagDropRemoverSetting == "on" && VertexClientPE.playerIsInGame && !VertexClientPE.isRemote()) {
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
			
			if(mpCurrentPositionView != null && mpSeekBarView != null) {
				CONTEXT.runOnUiThread(new Runnable_({
					run: function() {
						try{
							mpCurrentPositionView.setText(VertexClientPE.MusicUtils.milliSecToMinString(VertexClientPE.MusicUtils.mp.getCurrentPosition()));
							mpSeekBarView.setProgress(VertexClientPE.MusicUtils.mp.getCurrentPosition());
						} catch(e) {
							
						}
					}
				}));
			}
			
			if(healthDisplayUI != null && healthDisplayUI.isShowing()) {
				CONTEXT.runOnUiThread(new Runnable_({
					run: function() {
						healthDisplayView.setText(Entity.getHealth(getPlayerEnt()) + "/" + Entity.getMaxHealth(getPlayerEnt()) + " ❤");
					}
				}));
			}
			
			VertexClientPE.secondTick();
		}
	}).start();
}

VertexClientPE.showSplashScreen = function () {
	CONTEXT.runOnUiThread(new Runnable_({
		run: function () {
			try {
				var splashScreenLayout = new LinearLayout_(CONTEXT);
				splashScreenLayout.setOrientation(1);
				splashScreenLayout.setGravity(Gravity_.CENTER);
				splashScreenLayout.setBackgroundDrawable(backgroundGradient(null, "normal_nostrokes", transparentSplashScreenSetting));

				var logoViewer5 = new ImageView_(CONTEXT);
				logoViewer5.setPadding(0, dip2px(16), 0, dip2px(16));
				logoViewer5.setImageBitmap(imgLogo);
				logoViewer5.setLayoutParams(new LinearLayout_.LayoutParams(CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 4, CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 16 + dip2px(32)));
				
				var proViewer = new ImageView_(CONTEXT);
				proViewer.setPadding(0, dip2px(16), 0, dip2px(16));
				proViewer.setImageBitmap(imgProLogo);
				proViewer.setLayoutParams(new LinearLayout_.LayoutParams(CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 4, CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 16 + dip2px(32)));
				
				var splashProg = new android.widget.ProgressBar(CONTEXT);
				splashProg.setIndeterminate(true);
				splashProg.getIndeterminateDrawable().setColorFilter(getColor("stroke"), android.graphics.PorterDuff.Mode.SRC_IN);
				
				splashScreenLayout.addView(logoViewer5);
				if(VertexClientPE.isPro()) {
					splashScreenLayout.addView(proViewer);
				}
				splashScreenLayout.addView(splashProg);
				splashScreenLayout.startAnimation(fadeIn(500));

				new Thread_({
					run: function () {
						Thread_.sleep(2500);
						CONTEXT.runOnUiThread({
							run: function () {
								splashScreenLayout.startAnimation(fadeOut(500));
							}
						});
						Thread_.sleep(500);
						CONTEXT.runOnUiThread({
							run: function () {
								screenUI.dismiss();
								screenUI = null;
							}
						});
					}
				}).start();

				screenUI = new PopupWindow_(splashScreenLayout, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
				screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.CENTER | Gravity_.CENTER, 0, 0);
			} catch (e) {
				print("@" + e.lineNumber + ": " + e)
			}
		}
	}));
};

var hasShownDialog = false;

VertexClientPE.showStartScreenBar = function() {
	var display = new DisplayMetrics_();
	CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
		CONTEXT.runOnUiThread(new Runnable_({
			run: function() {
				try {
					var snowEffect = new SnowEffect();
					if(showSnowInWinterSetting == "on" && (VertexClientPE.Utils.month == java.util.Calendar.DECEMBER || VertexClientPE.Utils.month == java.util.Calendar.JANUARY || (VertexClientPE.Utils.month == java.util.Calendar.FEBRUARY && VertexClientPE.Utils.day <= 28))) {
						snowEffect.start();
					}
					
					if(!hasShownDialog) {
						if(userIsNewToCurrentVersion == true) {
							VertexClientPE.showWhatsNewDialog();
						} else {
							if(!VertexClientPE.getHasShownWarningDialog()) {
								VertexClientPE.showWarningDialog();
							} else if(!VertexClientPE.getHasShownTipDialog()) {
								VertexClientPE.showTipDialog();
							}
						}
						hasShownDialog = true;
					}
					
					var mainMenuListLayout = new LinearLayout_(CONTEXT);
					mainMenuListLayout.setOrientation(LinearLayout_.HORIZONTAL);
					mainMenuListLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
					mainMenuListLayout.setPadding(dip2px(8),dip2px(8),dip2px(8),dip2px(8));
					
					var youTubeButton = new Button_(CONTEXT);
					youTubeButton.setBackground(splashYouTubeButtonClientGUI);
					youTubeButton.setGravity(Gravity_.CENTER);
					youTubeButton.setLayoutParams(new LinearLayout_.LayoutParams(dip2px(42), dip2px(42)));
					youTubeButton.setOnTouchListener(new View_.OnTouchListener() {
						onTouch: function(v, event) {
							youTubeButton.setSoundEffectsEnabled(false);
							var action = event.getActionMasked();
							if(action == MotionEvent_.ACTION_CANCEL || action == MotionEvent_.ACTION_UP) {
								var bNP = splashYouTubeButtonClientGUI;
								bNP.setFilterBitmap(false);
								bNP.setAntiAlias(false);
								youTubeButton.setBackgroundDrawable(bNP);
							} else {
								var bNP = splashYouTubeButtonClickedClientGUI;
								bNP.setFilterBitmap(false);
								bNP.setAntiAlias(false);
								youTubeButton.setBackgroundDrawable(bNP);
							}
							return false;
						}
					});
					
					var twitterButton = new Button_(CONTEXT);
					twitterButton.setBackgroundDrawable(splashTwitterButtonClientGUI);
					twitterButton.setGravity(Gravity_.CENTER);
					twitterButton.setLayoutParams(new LinearLayout_.LayoutParams(dip2px(42), dip2px(42)));
					twitterButton.setOnTouchListener(new View_.OnTouchListener() {
						onTouch: function(v, event) {
							twitterButton.setSoundEffectsEnabled(false);
							var action = event.getActionMasked();
							if(action == MotionEvent_.ACTION_CANCEL || action == MotionEvent_.ACTION_UP) {
								var bNP = splashTwitterButtonClientGUI;
								bNP.setFilterBitmap(false);
								bNP.setAntiAlias(false);
								twitterButton.setBackgroundDrawable(bNP);
							} else {
								var bNP = splashTwitterButtonClickedClientGUI;
								bNP.setFilterBitmap(false);
								bNP.setAntiAlias(false);
								twitterButton.setBackgroundDrawable(bNP);
							}
							return false;
						}
					});
					
					var gitHubButton = new Button_(CONTEXT);
					gitHubButton.setBackgroundDrawable(splashGitHubButtonClientGUI);
					gitHubButton.setGravity(Gravity_.CENTER);
					gitHubButton.setLayoutParams(new LinearLayout_.LayoutParams(dip2px(42), dip2px(42)));
					gitHubButton.setOnTouchListener(new View_.OnTouchListener() {
						onTouch: function(v, event) {
							gitHubButton.setSoundEffectsEnabled(false);
							var action = event.getActionMasked();
							if(action == MotionEvent_.ACTION_CANCEL || action == MotionEvent_.ACTION_UP) {
								var bNP = splashGitHubButtonClientGUI;
								bNP.setFilterBitmap(false);
								bNP.setAntiAlias(false);
								gitHubButton.setBackgroundDrawable(bNP);
							} else {
								var bNP = splashGitHubButtonClickedClientGUI;
								bNP.setFilterBitmap(false);
								bNP.setAntiAlias(false);
								gitHubButton.setBackgroundDrawable(bNP);
							}
							return false;
						}
					});
					
					youTubeButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							ModPE.goToURL("https://www.youtube.com/c/AgameRGaming");
					}}));
					twitterButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							ModPE.goToURL("http://twitter.com/VertexHX");
					}}));
					gitHubButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							ModPE.goToURL("https://github.com/Vertex-Client");
					}}));
					
					mainMenuListLayout.addView(youTubeButton);
					mainMenuListLayout.addView(twitterButton);
					mainMenuListLayout.addView(gitHubButton);

					mainMenuTextList = new PopupWindow_(mainMenuListLayout, -2, -2);
					if(mainButtonPositionSetting == "top-right") {
						mainMenuTextList.setBackgroundDrawable(backgroundSpecial("bottomleft", "#212121|#ffffff"));
						mainMenuTextList.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
					} else {
						mainMenuTextList.setBackgroundDrawable(backgroundSpecial("bottomright", "#212121|#ffffff"));
						mainMenuTextList.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
					}
					
					mainMenuTextList.setOnDismissListener(new PopupWindow_.OnDismissListener({
						onDismiss() {
							snowEffect.finish();
						}
					}));
				} catch(error) {
					print('An error occurred: ' + error);
				}
			}
		}));
}

VertexClientPE.showUpdate = function() {
	new Thread_(new Runnable_() {
		run: function() {
			VertexClientPE.checkForUpdates();
			if(VertexClientPE.latestVersion != VertexClientPE.currentVersion && VertexClientPE.latestVersion != undefined) {
				if(showUpdateToastsSetting == "on") {
					VertexClientPE.updateToast("There is a new version available (v" + VertexClientPE.latestVersion + " for Minecraft Pocket Edition v" + latestPocketEditionVersion + ")!");
				}
			} else {
				CONTEXT.runOnUiThread(new Runnable_() {
					run: function() {
						if(showUpdateToastsSetting == "on") {
							VertexClientPE.updateToast("You have the latest version");
						}
					}
				});
			}
		}
	}).start();
}

var currentStep = 1;

VertexClientPE.showSetupScreen = function() {
	var display = new DisplayMetrics_();
	CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
		CONTEXT.runOnUiThread(new Runnable_({
			run: function() {
				try {
					var setupScreenLayout = new LinearLayout_(CONTEXT);
					setupScreenLayout.setOrientation(1);
					setupScreenLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
					
					var setupScreenLayoutBottom = new LinearLayout_(CONTEXT);
					setupScreenLayoutBottom.setOrientation(LinearLayout_.HORIZONTAL);
					
					var setupScreenLayoutBottomLeft = new LinearLayout_(CONTEXT);
					setupScreenLayoutBottomLeft.setOrientation(1);
					setupScreenLayoutBottomLeft.setGravity(Gravity_.CENTER_HORIZONTAL);
					setupScreenLayoutBottomLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 4, LinearLayout_.LayoutParams.WRAP_CONTENT));
					
					var setupScreenLayoutBottomCenter = new LinearLayout_(CONTEXT);
					setupScreenLayoutBottomCenter.setOrientation(1);
					setupScreenLayoutBottomCenter.setGravity(Gravity_.CENTER_HORIZONTAL);
					setupScreenLayoutBottomCenter.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 4, LinearLayout_.LayoutParams.WRAP_CONTENT));
					
					var setupScreenLayoutBottomCenter1 = new LinearLayout_(CONTEXT);
					setupScreenLayoutBottomCenter1.setOrientation(1);
					setupScreenLayoutBottomCenter1.setGravity(Gravity_.CENTER_HORIZONTAL);
					setupScreenLayoutBottomCenter1.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 4, LinearLayout_.LayoutParams.WRAP_CONTENT));
					
					var setupScreenLayoutBottomRight = new LinearLayout_(CONTEXT);
					setupScreenLayoutBottomRight.setOrientation(1);
					setupScreenLayoutBottomRight.setGravity(Gravity_.CENTER_HORIZONTAL);
					setupScreenLayoutBottomRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 4, LinearLayout_.LayoutParams.WRAP_CONTENT));
					
					var logoViewer3 = new ImageView_(CONTEXT);
					logoViewer3.setPadding(0, dip2px(16), 0, dip2px(16));
					logoViewer3.setImageBitmap(imgLogo);
					logoViewer3.setLayoutParams(new LinearLayout_.LayoutParams(CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 4, CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 16 + dip2px(32)));
					setupScreenLayout.addView(logoViewer3);
					
					var setupStepRow = new LinearLayout_(CONTEXT);
					setupStepRow.setOrientation(LinearLayout_.HORIZONTAL);
					setupStepRow.setGravity(Gravity_.CENTER);
					setupScreenLayout.addView(setupStepRow);
					
					var step1Button = new Button_(CONTEXT);
					step1Button.setBackgroundDrawable(drawCircle(Color_.parseColor("#80ffffff")));
					step1Button.setText("1");
					step1Button.setTextColor(Color_.parseColor("#0080FF"));
					step1Button.setLayoutParams(new LinearLayout_.LayoutParams(CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 16, CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 16));
					step1Button.setOnClickListener(new android.view.View.OnClickListener() {
						onClick: function(v) {
							if(currentStep != 1) {
								currentStep = 1;
								setupScreenLayoutBottomLeft.removeAllViews();
								setupScreenLayoutBottomCenter.removeAllViews();
								setupScreenLayoutBottomCenter1.removeAllViews();
								setupScreenLayoutBottomRight.removeAllViews();
								step1Button.setTextColor(Color_.parseColor("#0080FF"));
								step2Button.setTextColor(Color_.WHITE);
								step3Button.setTextColor(Color_.WHITE);
								step4Button.setTextColor(Color_.WHITE);
								setupTextView.startAnimation(textAnim);
								setupTextView.setText(setupStep1Text);
								doneButton.setText("\u2794");
								doneButton.setOnClickListener(new View_.OnClickListener({
									onClick: function(viewArg) {
										step2Button.performClick();
									}
								}));
							}
						}
					});
					var step2Button = new Button_(CONTEXT);
					step2Button.setBackgroundDrawable(drawCircle(Color_.parseColor("#80ffffff")));
					step2Button.setText("2");
					step2Button.setTextColor(Color_.WHITE);
					step2Button.setLayoutParams(new LinearLayout_.LayoutParams(CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 16, CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 16));
					step2Button.setOnClickListener(new android.view.View.OnClickListener() {
						onClick: function(v) {
							if(currentStep != 2) {
								currentStep = 2;
								setupScreenLayoutBottomLeft.removeAllViews();
								setupScreenLayoutBottomCenter.removeAllViews();
								setupScreenLayoutBottomCenter1.removeAllViews();
								setupScreenLayoutBottomRight.removeAllViews();
								step1Button.setTextColor(Color_.WHITE);
								step2Button.setTextColor(Color_.parseColor("#0080FF"));
								step3Button.setTextColor(Color_.WHITE);
								step4Button.setTextColor(Color_.WHITE);
								setupTextView.startAnimation(textAnim);
								setupTextView.setText(setupStep2Text);
								setupScreenLayoutBottomLeft.addView(setupButtonGreen);
								setupScreenLayoutBottomCenter.addView(setupButtonRed);
								setupScreenLayoutBottomCenter1.addView(setupButtonBlue);
								setupScreenLayoutBottomRight.addView(setupButtonPurple);
								doneButton.setText("\u2794");
								doneButton.setOnClickListener(new View_.OnClickListener({
									onClick: function(viewArg) {
										step3Button.performClick();
									}
								}));
							}
						}
					});
					var step3Button = new Button_(CONTEXT);
					step3Button.setBackgroundDrawable(drawCircle(Color_.parseColor("#80ffffff")));
					step3Button.setText("3");
					step3Button.setTextColor(Color_.WHITE);
					step3Button.setLayoutParams(new LinearLayout_.LayoutParams(CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 16, CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 16));
					step3Button.setOnClickListener(new android.view.View.OnClickListener() {
						onClick: function(v) {
							if(currentStep != 3) {
								currentStep = 3;
								setupScreenLayoutBottomLeft.removeAllViews();
								setupScreenLayoutBottomCenter.removeAllViews();
								setupScreenLayoutBottomCenter1.removeAllViews();
								setupScreenLayoutBottomRight.removeAllViews();
								step1Button.setTextColor(Color_.WHITE);
								step2Button.setTextColor(Color_.WHITE);
								step3Button.setTextColor(Color_.parseColor("#0080FF"));
								step4Button.setTextColor(Color_.WHITE);
								setupTextView.startAnimation(textAnim);
								setupTextView.setText(setupStep3Text);
								setupScreenLayoutBottomCenter.addView(combatEnabledSettingButton);
								setupScreenLayoutBottomCenter.addView(worldEnabledSettingButton);
								setupScreenLayoutBottomCenter.addView(movementEnabledSettingButton);
								setupScreenLayoutBottomCenter1.addView(playerEnabledSettingButton);
								setupScreenLayoutBottomCenter1.addView(miscEnabledSettingButton);
								setupScreenLayoutBottomCenter1.addView(singleplayerEnabledSettingButton);
								doneButton.setText("\u2794");
								doneButton.setOnClickListener(new View_.OnClickListener({
									onClick: function(viewArg) {
										step4Button.performClick();
									}
								}));
							}
						}
					});
					var step4Button = new Button_(CONTEXT);
					step4Button.setBackgroundDrawable(drawCircle(Color_.parseColor("#80ffffff")));
					step4Button.setText("4");
					step4Button.setTextColor(Color_.WHITE);
					step4Button.setLayoutParams(new LinearLayout_.LayoutParams(CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 16, CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 16));
					step4Button.setOnClickListener(new android.view.View.OnClickListener() {
						onClick: function(v) {
							if(currentStep != 4) {
								currentStep = 4;
								setupScreenLayoutBottomLeft.removeAllViews();
								setupScreenLayoutBottomCenter.removeAllViews();
								setupScreenLayoutBottomCenter1.removeAllViews();
								setupScreenLayoutBottomRight.removeAllViews();
								step1Button.setTextColor(Color_.WHITE);
								step2Button.setTextColor(Color_.WHITE);
								step3Button.setTextColor(Color_.WHITE);
								step4Button.setTextColor(Color_.parseColor("#0080FF"));
								setupTextView.startAnimation(textAnim);
								setupTextView.setText(setupStep4Text);
								doneButton.setText("\u2713");
								doneButton.setOnClickListener(new View_.OnClickListener({
									onClick: function(viewArg) {
										themeSetting = setupColor;
										VertexClientPE.saveMainSettings();
										VertexClientPE.editCopyrightText();
										logoViewer3.clearAnimation();
										doneUI.dismiss(); //Close
										screenUI.dismiss();
										showMenuButton();
										VertexClientPE.showUpdate();
										VertexClientPE.loadAddons();
										VertexClientPE.loadFloatingMenus();
										VertexClientPE.clientTick();
										VertexClientPE.inGameTick();
										VertexClientPE.specialTick();
										VertexClientPE.secondTick();
										VertexClientPE.setupMCPEGUI();
										VertexClientPE.initMods();
									}
								}));
							}
						}
					});
					
					var space1 = new TextView_(CONTEXT);
					space1.setBackgroundDrawable(new ColorDrawable_(Color_.WHITE));
					
					var space2 = new TextView_(CONTEXT);
					space2.setBackgroundDrawable(new ColorDrawable_(Color_.WHITE));
					
					var space3 = new TextView_(CONTEXT);
					space3.setBackgroundDrawable(new ColorDrawable_(Color_.WHITE));
					
					setupStepRow.addView(step1Button);
					setupStepRow.addView(space1, dip2px(8), dip2px(1));
					setupStepRow.addView(step2Button);
					setupStepRow.addView(space2, dip2px(8), dip2px(1));
					setupStepRow.addView(step3Button);
					setupStepRow.addView(space3, dip2px(8), dip2px(1));
					setupStepRow.addView(step4Button);
					
					var setupTextView = clientTextView("");
					setupTextView.setGravity(Gravity_.CENTER);
					setupScreenLayout.addView(setupTextView);
					
					var setupStep1Text = "Thanks for choosing Vertex Client PE!\nGo to the next step to choose your favourite color. :)";
					var setupStep2Text = "You can always change the color on the settings screen.\nEven more colors are available there.";
					var setupStep3Text = "Now you can optimize your experience by choosing the mod categories you want to use. You'll be able to change this on the settings screen anytime.";
					var setupStep4Text = "That's it! Your experience begins here.\nHere's some additional help to get started:\n- You can open the Dashboard and some other features from the 'More' dialog,\nwhich can be opened by long tapping the menu button.";
					
					setupTextView.setText(setupStep1Text);
					
					setupScreenLayoutBottom.addView(setupScreenLayoutBottomLeft);
					setupScreenLayoutBottom.addView(setupScreenLayoutBottomCenter);
					setupScreenLayoutBottom.addView(setupScreenLayoutBottomCenter1);
					setupScreenLayoutBottom.addView(setupScreenLayoutBottomRight);
					
					setupScreenLayout.addView(setupScreenLayoutBottom);
					
					var setupButtonGreen = clientButton("Green", null, "green");
					setupButtonGreen.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
					setupButtonGreen.setTextColor(Color_.GREEN);
					setupButtonGreen.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							setupColor = "green";
							setupButtonGreen.setTextColor(Color_.GREEN);
							setupButtonRed.setTextColor(Color_.WHITE);
							setupButtonBlue.setTextColor(Color_.WHITE);
							setupButtonPurple.setTextColor(Color_.WHITE);
						}
					}));
					
					var setupButtonRed = clientButton("Red", null, "red");
					setupButtonRed.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
					setupButtonRed.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							setupColor = "red";
							setupButtonGreen.setTextColor(Color_.WHITE);
							setupButtonRed.setTextColor(Color_.GREEN);
							setupButtonBlue.setTextColor(Color_.WHITE);
							setupButtonPurple.setTextColor(Color_.WHITE);
						}
					}));
					
					var setupButtonBlue = clientButton("Blue", null, "blue");
					setupButtonBlue.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
					setupButtonBlue.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							setupColor = "blue";
							setupButtonGreen.setTextColor(Color_.WHITE);
							setupButtonRed.setTextColor(Color_.WHITE);
							setupButtonBlue.setTextColor(Color_.GREEN);
							setupButtonPurple.setTextColor(Color_.WHITE);
						}
					}));
					
					var setupButtonPurple = clientButton("Purple", null, "purple");
					setupButtonPurple.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
					setupButtonPurple.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							setupColor = "purple";
							setupButtonGreen.setTextColor(Color_.WHITE);
							setupButtonRed.setTextColor(Color_.WHITE);
							setupButtonBlue.setTextColor(Color_.WHITE);
							setupButtonPurple.setTextColor(Color_.GREEN);
						}
					}));
					
					var combatEnabledSettingButton = clientSwitch();
					combatEnabledSettingButton.setText("Combat");
					combatEnabledSettingButton.setChecked(combatSaveEnabled == "on");
					combatEnabledSettingButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
						onCheckedChanged: function() {
							if(combatSaveEnabled == "off") {
								combatSaveEnabled = "on";
							} else if(combatSaveEnabled == "on") {
								combatSaveEnabled = "off";
							}
							combatEnabled = combatSaveEnabled;
							VertexClientPE.saveFeaturesSettings();
						}
					}));
					
					var worldEnabledSettingButton = clientSwitch();
					worldEnabledSettingButton.setText("World");
					worldEnabledSettingButton.setChecked(worldSaveEnabled == "on");
					worldEnabledSettingButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
						onCheckedChanged: function() {
							if(worldSaveEnabled == "off") {
								worldSaveEnabled = "on";
							} else if(worldSaveEnabled == "on") {
								worldSaveEnabled = "off";
							}
							worldEnabled = worldSaveEnabled;
							VertexClientPE.saveFeaturesSettings();
						}
					}));
					
					var movementEnabledSettingButton = clientSwitch();
					movementEnabledSettingButton.setText("Movement");
					movementEnabledSettingButton.setChecked(movementSaveEnabled == "on");
					movementEnabledSettingButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
						onCheckedChanged: function() {
							if(movementSaveEnabled == "off") {
								movementSaveEnabled = "on";
							} else if(movementSaveEnabled == "on") {
								movementSaveEnabled = "off";
							}
							movementEnabled = movementSaveEnabled;
							VertexClientPE.saveFeaturesSettings();
						}
					}));
					
					var playerEnabledSettingButton = clientSwitch();
					playerEnabledSettingButton.setText("Player");
					playerEnabledSettingButton.setChecked(playerSaveEnabled == "on");
					playerEnabledSettingButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
						onCheckedChanged: function() {
							if(playerSaveEnabled == "off") {
								playerSaveEnabled = "on";
							} else if(playerSaveEnabled == "on") {
								playerSaveEnabled = "off";
							}
							playerEnabled = playerSaveEnabled;
							VertexClientPE.saveFeaturesSettings();
						}
					}));
					
					var miscEnabledSettingButton = clientSwitch();
					miscEnabledSettingButton.setText("Misc");
					miscEnabledSettingButton.setChecked(miscSaveEnabled == "on");
					miscEnabledSettingButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
						onCheckedChanged: function() {
							if(miscSaveEnabled == "off") {
								miscSaveEnabled = "on";
							} else if(miscSaveEnabled == "on") {
								miscSaveEnabled = "off";
							}
							miscEnabled = miscSaveEnabled;
							VertexClientPE.saveFeaturesSettings();
						}
					}));
					
					var singleplayerEnabledSettingButton = clientSwitch();
					singleplayerEnabledSettingButton.setText("Singleplayer Only Mods");
					singleplayerEnabledSettingButton.setChecked(singleplayerSaveEnabled == "on");
					singleplayerEnabledSettingButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
						onCheckedChanged: function() {
							if(singleplayerSaveEnabled == "off") {
								singleplayerSaveEnabled = "on";
							} else if(singleplayerSaveEnabled == "on") {
								singleplayerSaveEnabled = "off";
							}
							singleplayerEnabled = singleplayerSaveEnabled;
							VertexClientPE.saveFeaturesSettings();
						}
					}));
					
					var doneLayout = new LinearLayout_(CONTEXT);
					var doneButton = new Button_(CONTEXT);
					doneButton.setBackgroundDrawable(drawQuarterCircle(Color_.parseColor("#80ffffff"), dip2px(60)));
					doneButton.setGravity(Gravity_.RIGHT | Gravity_.TOP);
					doneButton.setPadding(0, dip2px(8), dip2px(8), 0);
					doneButton.setText("\u2794");//Text
					doneButton.setTextSize(20);
					//doneButton.getBackground().setColorFilter(Color_.parseColor("#008000"), PorterDuff_.Mode.MULTIPLY);
					doneButton.setTextColor(Color_.WHITE);
					doneButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							step2Button.performClick();
						}
					}));
					doneLayout.addView(doneButton, dip2px(54), dip2px(54));
					
					screenUI = new PopupWindow_(setupScreenLayout, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
					screenUI.setBackgroundDrawable(new ColorDrawable_(Color_.parseColor("#0080FF")));
					screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
					//set animation after being shown, because the animation is for when it dismisses.
					//screenUI.setAnimationStyle(android.R.style.Animation_Dialog);
					
					var logoAnim = new android.view.animation.AlphaAnimation(0, 1);
					logoAnim.setInterpolator(new android.view.animation.LinearInterpolator());
					logoAnim.setRepeatCount(android.view.animation.Animation.INFINITE);
					logoAnim.setRepeatMode(android.view.animation.Animation.REVERSE);
					logoAnim.setDuration(1500);
					
					logoViewer3.startAnimation(logoAnim);
					
					var textAnim = new android.view.animation.AlphaAnimation(0, 1);
					textAnim.setInterpolator(new android.view.animation.LinearInterpolator());
					textAnim.setRepeatCount(android.view.animation.Animation.INFINITE);
					textAnim.setDuration(1500);
					textAnim.setAnimationListener(new android.view.animation.Animation.AnimationListener() {
						onAnimationStart: function(arg0) {
							
						},
						onAnimationRepeat: function(arg0) {
							setupTextView.clearAnimation();
						},
						onAnimationEnd: function(arg0) {
							setupTextView.clearAnimation();
						}
					});
					
					setupTextView.startAnimation(textAnim);
					
					doneUI = new PopupWindow_(doneLayout, LinearLayout_.LayoutParams.WRAP_CONTENT, LinearLayout_.LayoutParams.WRAP_CONTENT);
					doneUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
					doneUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
				} catch(error) {
					print('An error occurred: ' + error);
					VertexClientPE.showBugReportDialog(error);
			}
		}
	}));
}

var screenUI;
var accountManagerLayoutLeft;
var accountManagerLayoutCenter;
var accountManagerLayoutRight;

ModPE.restart = function () {
	try {
		var alarmManager = CONTEXT.getSystemService("alarm"),
			intent = CONTEXT.getPackageManager().getLaunchIntentForPackage(CONTEXT.getPackageName());
		intent.addFlags(335544320);
		alarmManager.set(3, SystemClock_.elapsedRealtime() + 500, PendingIntent_.getActivity(CONTEXT, 0, intent, 0));
		new File_(CONTEXT.getFilesDir() + "/running.lock").delete();
		new Thread_({
			run() {
				VertexClientPE.toast("Restarting...");
				Thread_.sleep(500);
				System_.exit(0);
			}
		}).start();
	} catch (e) {
		print("@" + e.lineNumber + ": " + e);
	}
};

VertexClientPE.removeAccount = function(str, layout, view) {
	if(VertexClientPE.accounts.length() != null) {
		var tempAccounts = new JSONArray_();
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

VertexClientPE.removeFriend = function(str, layout, view) {
	if(VertexClientPE.friends.length() != null) {
		var tempAccounts = new JSONArray_();
		for(var i = 0; i < VertexClientPE.friends.length(); i++) {
			if(VertexClientPE.friends.get(i) != str) {
				tempAccounts.put(VertexClientPE.friends.get(i));
			}
		}
		VertexClientPE.friends = tempAccounts;
	}
	if(layout != null && view != null) {
		try {
			layout.removeView(view);
		} catch(e) {
			//error
		}
	}
	VertexClientPE.saveFriends();
}

VertexClientPE.showDirectUseAccountDialog = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				VertexClientPE.loadMainSettings();
				var accountTitle = clientTextView("Direct use account", true);
				var accountNameInput = clientEditText();
				accountNameInput.setTextColor(Color_.WHITE);
				accountNameInput.setSingleLine(true);
				accountNameInput.setHint("Enter an username");
				var accountClientIdInput = clientEditText();
				accountClientIdInput.setTextColor(Color_.WHITE);
				accountClientIdInput.setHint("Enter a client id (leave blank for random)");
				var okButton = clientButton("Ok");
				var cancelButton = clientButton("Cancel");
				var dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(accountTitle);
				dialogLayout.addView(accountNameInput);
				dialogLayout.addView(accountClientIdInput);
				dialogLayout.addView(okButton);
				dialogLayout.addView(cancelButton);
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("Direct use account");
				dialog.show();
				okButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						var accountName = accountNameInput.getText().toString();
						var clientId = accountClientIdInput.getText().toString();
						if(accountName == null || accountName == "" || accountName.replaceAll(" ", "") == "") {
							VertexClientPE.toast("Enter an username!");
							return;
						}
						if(clientId == null || clientId == "" || clientId.replaceAll(" ", "") == "") {
							clientId = getRandomInt(100, 999999999).toString();
						}
						var shouldRestart = false;
						if(accountName != ModPE.getPlayerName()) {
							ModPE.setPlayerName(accountName);
							shouldRestart = true;
						}
						if(clientId != ModPE.getClientId()) {
							ModPE.changeClientId(clientId);
							shouldRestart = true;
						}
						if(shouldRestart) {
							ModPE.restart();
						}
					}
				});
				cancelButton.setOnClickListener(new View_.OnClickListener() {
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

VertexClientPE.showAccountManager = function(showBackButton) {
	VertexClientPE.menuIsShowing = true;
	VertexClientPE.loadAccounts();
	var display = new DisplayMetrics_();
	CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				if(GUI != null) {
					if(GUI.isShowing()) {
						GUI.dismiss();
					}
				}
				if(accountManagerGUI != null) {
					if(accountManagerGUI.isShowing()) {
						accountManagerGUI.dismiss();
					}
				}
				if(mainMenuTextList != null) {
					if(mainMenuTextList.isShowing()) {
						mainMenuTextList.dismiss();
					}
				}
				
				var accountManagerLayout1 = new LinearLayout_(CONTEXT);
				accountManagerLayout1.setOrientation(1);
				accountManagerLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
				
				var accountManagerTitle = clientTextView("Account Manager", true);
				accountManagerTitle.setTextSize(25);
				accountManagerTitle.setGravity(Gravity_.CENTER);
				accountManagerLayout1.addView(accountManagerTitle);
				
				var accountManagerEnter = clientTextView("\n");
				accountManagerLayout1.addView(accountManagerEnter);
				
				var accountManagerScrollViewHeight = (display.heightPixels / 3) * 2;
				
				var accountManagerBottomLayout = new LinearLayout_(CONTEXT);
				accountManagerBottomLayout.setOrientation(LinearLayout_.HORIZONTAL);
				accountManagerBottomLayout.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels, display.heightPixels - accountManagerScrollViewHeight - accountManagerTitle.getLineHeight() / 2 - accountManagerEnter.getLineHeight() / 2));
				accountManagerBottomLayout.setGravity(Gravity_.CENTER);
				
				var addAccountButton = clientButton("Add account");
				addAccountButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
				addAccountButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						//show add account dialog
						VertexClientPE.showAddAccountDialog(showBackButton);
					}
				}));
				accountManagerBottomLayout.addView(addAccountButton);
				
				var directUseAccountButton = clientButton("Direct use");
				directUseAccountButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
				directUseAccountButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						VertexClientPE.showDirectUseAccountDialog();
					}
				}));
				accountManagerBottomLayout.addView(directUseAccountButton);
				
				var importAccountButton = clientButton("Import");
				importAccountButton.setLayoutParams(new LinearLayout_.LayoutParams(LinearLayout_.LayoutParams.WRAP_CONTENT, display.heightPixels / 10));
				importAccountButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						VertexClientPE.toast("W.I.P.");
					}
				}));
				//accountManagerBottomLayout.addView(importAccountButton);
				
				var accountManagerScrollView = new ScrollView(CONTEXT);
				accountManagerScrollView.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels, accountManagerScrollViewHeight - accountManagerTitle.getLineHeight() / 2 - accountManagerEnter.getLineHeight() / 2));
				
				var accountManagerLayout = new LinearLayout_(CONTEXT);
				accountManagerLayout.setOrientation(1);
				
				accountManagerScrollView.addView(accountManagerLayout);
				accountManagerLayout1.addView(accountManagerScrollView);
				accountManagerLayout1.addView(accountManagerBottomLayout);
				
				var accountsLength = VertexClientPE.accounts.length();
				if(VertexClientPE.accounts != null && accountsLength != -1) {
					for(var i = 0; i < accountsLength; i++) {
						//if(VertexClientPE.accounts[i].username != null && VertexClientPE.accounts[i].username != undefined && VertexClientPE.accounts[i].username != " ") {
							var usernameLayout = accountButton(VertexClientPE.accounts.get(i), accountManagerLayout);
							accountManagerLayout.addView(usernameLayout);
						//}
					}
				}
				
				screenUI = new PopupWindow_(accountManagerLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
				screenUI.setBackgroundDrawable(backgroundGradient());
				screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
				
				VertexClientPE.showExitButtons(showBackButton);
			} catch(error) {
				print('An error occurred: ' + error);
			}
		}
	}));
}

VertexClientPE.showFriendManager = function(showBackButton) {
	VertexClientPE.menuIsShowing = true;
	VertexClientPE.loadFriends();
	var display = new DisplayMetrics_();
	CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				if(GUI != null) {
					if(GUI.isShowing()) {
						GUI.dismiss();
					}
				}
				if(accountManagerGUI != null) {
					if(accountManagerGUI.isShowing()) {
						accountManagerGUI.dismiss();
					}
				}
				if(mainMenuTextList != null) {
					if(mainMenuTextList.isShowing()) {
						mainMenuTextList.dismiss();
					}
				}
				
				var friendManagerLayout1 = new LinearLayout_(CONTEXT);
				friendManagerLayout1.setOrientation(1);
				friendManagerLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
				
				var friendManagerTitle = clientTextView("Friend Manager", true);
				friendManagerTitle.setTextSize(25);
				friendManagerTitle.setGravity(Gravity_.CENTER);
				friendManagerLayout1.addView(friendManagerTitle);
				
				var friendManagerEnter = clientTextView("\n");
				friendManagerLayout1.addView(friendManagerEnter);
				
				var friendManagerScrollViewHeight = (display.heightPixels / 3) * 2;
				
				var friendManagerBottomLayout = new LinearLayout_(CONTEXT);
				friendManagerBottomLayout.setOrientation(LinearLayout_.HORIZONTAL);
				friendManagerBottomLayout.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels, display.heightPixels - friendManagerScrollViewHeight - friendManagerTitle.getLineHeight() / 2 - friendManagerEnter.getLineHeight() / 2));
				friendManagerBottomLayout.setGravity(Gravity_.CENTER);
				
				var addFriendButton = clientButton("Add friend");
				addFriendButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
				addFriendButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						//show add account dialog
						VertexClientPE.showAddFriendDialog(showBackButton);
					}
				}));
				friendManagerBottomLayout.addView(addFriendButton);
				
				var friendManagerScrollView = new ScrollView(CONTEXT);
				friendManagerScrollView.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels, friendManagerScrollViewHeight - friendManagerTitle.getLineHeight() / 2 - friendManagerEnter.getLineHeight() / 2));
				
				var friendManagerLayout = new LinearLayout_(CONTEXT);
				friendManagerLayout.setOrientation(1);
				
				friendManagerScrollView.addView(friendManagerLayout);
				friendManagerLayout1.addView(friendManagerScrollView);
				friendManagerLayout1.addView(friendManagerBottomLayout);
				
				var friendsLength = VertexClientPE.friends.length();
				if(VertexClientPE.friends != null && friendsLength != -1) {
					for(var i = 0; i < friendsLength; i++) {
						//if(VertexClientPE.friends[i].username != null && VertexClientPE.friends[i].username != undefined && VertexClientPE.friends[i].username != " ") {
							var friendLayout = friendButton(VertexClientPE.friends.get(i), friendManagerLayout);
							friendManagerLayout.addView(friendLayout);
						//}
					}
				}
				
				screenUI = new PopupWindow_(friendManagerLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
				screenUI.setBackgroundDrawable(backgroundGradient());
				screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
				
				VertexClientPE.showExitButtons(showBackButton);
			} catch(error) {
				print('An error occurred: ' + error);
			}
		}
	}));
}

VertexClientPE.downloadPro = function() {
	ModPE.goToURL("http://bit.ly/VertexProActivator");
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

VertexClientPE.getHasShownTipDialog = function() {
	return sharedPref.getBoolean("VertexClientPE.hasShownTipDialog", false);
}

VertexClientPE.setHasShownTipDialog = function(opt) {
	if(opt != true && opt != false) {
		return;
	}
	editor.putBoolean("VertexClientPE.hasShownTipDialog", opt);
	editor.commit();
}

VertexClientPE.getHasShownWarningDialog = function() {
	return sharedPref.getBoolean("VertexClientPE.hasShownWarningDialog", false);
}

VertexClientPE.setHasShownWarningDialog = function(opt) {
	if(opt != true && opt != false) {
		return;
	}
	editor.putBoolean("VertexClientPE.hasShownWarningDialog", opt);
	editor.commit();
}

VertexClientPE.Utils.cal = java.util.Calendar.getInstance();
VertexClientPE.Utils.day = VertexClientPE.Utils.cal.get(java.util.Calendar.DAY_OF_MONTH);
VertexClientPE.Utils.month = VertexClientPE.Utils.cal.get(java.util.Calendar.MONTH);
VertexClientPE.Utils.year = VertexClientPE.Utils.cal.get(java.util.Calendar.YEAR);

var itemGiverItems = [];

VertexClientPE.loadItemGiverItems = function() {
	for(var i = 0; i <= 4096; i++) {
		if(Item.isValidItem(i)) {
			itemGiverItems.push({
				itemId: i
			});
		}
	}
}

VertexClientPE.setup = function() {
	currentScreen = ScreenType.start_screen;
	new Thread_(new Runnable_({
		run: function() {
			try {
				VertexClientPE.loadMainSettings();
				VertexClientPE.showSplashScreen();
				VertexClientPE.loadFeaturesSettings();
				VertexClientPE.loadSupport();
				VertexClientPE.checkForUpdates();
				VertexClientPE.loadUpdateDescription();
				VertexClientPE.loadNews();
				VertexClientPE.loadItemGiverItems();
				Thread_.sleep(3000);
			} catch(e) {
				
			} finally {
				CONTEXT.runOnUiThread(new Runnable_({
					run: function() {
						if(!VertexClientPE.getHasUsedCurrentVersion()) {
							userIsNewToCurrentVersion = true;
						}
						
						if(VertexClientPE.loadMainSettings() == null) {
							VertexClientPE.showSetupScreen();
						} else {
							VertexClientPE.clientTick();
							VertexClientPE.inGameTick();
							VertexClientPE.specialTick();
							VertexClientPE.secondTick();
							VertexClientPE.showUpdate();
							VertexClientPE.loadAddons();
							VertexClientPE.loadFloatingMenus();
							showMenuButton();
							VertexClientPE.initMods();
						}
						
						if(ModPE.getMinecraftVersion() < VertexClientPE.minVersion) {
							VertexClientPE.showBasicDialog("Compatibility", clientTextView("This version may not be compatible with MCPE v" + ModPE.getMinecraftVersion() + "!"));
						}
						
						if(VertexClientPE.Utils.day < 25 && VertexClientPE.Utils.month == java.util.Calendar.DECEMBER) {
							VertexClientPE.showChristmasToast(25 - VertexClientPE.Utils.day);
						} else if(VertexClientPE.Utils.day == 25 && VertexClientPE.Utils.month == java.util.Calendar.DECEMBER) {
							VertexClientPE.showChristmasToast();
						}
						
						VertexClientPE.MusicUtils.initMusicPlayer();
						VertexClientPE.MusicUtils.startMusicPlayer();
						
						if(showNewsSetting == "on") {
							VertexClientPE.toast(news);
						}
						
						VertexClientPE.showTipBar();
					}
				}));
			}
		}
	})).start();
}

function downloadFile(path, url, showNotification) {
	try {
		showNotification = showNotification || false;
		var file = new File_(path),
			filename = file.getName(),
			downloadManager = new DownloadManager_.Request(new Uri_.parse(url));
		downloadManager.setTitle(filename);
		if(!showNotification) {
			downloadManager.setNotificationVisibility(0);
		}
		downloadManager.setDestinationInExternalPublicDir(file.getParent().replace("/sdcard", ""), filename);
		CONTEXT.getSystemService(Context_.DOWNLOAD_SERVICE).enqueue(downloadManager);
	} catch (e) {
		print("@" + e.lineNumber + ": " + e);
	}
};

(function checkFiles() {
	var res = ["clienticon_new.png", "clienticon_new_clicked.png", "play_button.png", "play_button_clicked.png", "twitter_button.png", "twitter_button_clicked.png", "youtube_button.png", "youtube_button_clicked.png", "github_button.png", "github_button_clicked.png", "vertex_logo_new.png", "stevehead.png", "pro_logo.png", "minecraft.ttf", "christmas_tree.png", "dirt_background.png"],
		isExisting = true;
	for (var i = res.length; i--;) {
		if (!new File_(PATH, res[i]).exists()) {
			downloadFile(PATH + res[i], GITHUB_URL + "bootstrap/img/" + res[i]);
			isExisting = false;
		}
	}
	if (isExisting) {
		VertexClientPE.setup();
	} else {
		new Thread_({
			run() {
				VertexClientPE.toast("Downloading resource files...");
				while (!isExisting) {
					Thread_.sleep(1000);
					for (var i = res.length; i--;) {
						if (!new File_(PATH, res[i]).exists()) {
							isExisting = false;
							break;
						} else {
							isExisting = true;
						}
					}
				}
				VertexClientPE.toast("All files are downloaded successfully. Your launcher will be restarted in 3 seconds.");
				Thread_.sleep(3000);
				ModPE.restart();
			}
		}).start();
	}
})();

var coordsButton;

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

var trailsModes = [
	["off", "OFF"],
	["flame", "Flame"],
	["redstone", "Redstone"]
];

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
			layout.getChildAt(i).setTextColor(Color_.GREEN);
		} else {
			layout.getChildAt(i).setTextColor(Color_.WHITE);
		}
	}
}

VertexClientPE.setTrailsMode = function(trailMode, layout) {
	VertexClientPE.trailsMode = trailMode[0];
	for(var i = 0; i < layout.getChildCount(); i++) {
		if(layout.getChildAt(i).getText() == trailMode[1]) {
			layout.getChildAt(i).setTextColor(Color_.GREEN);
		} else {
			layout.getChildAt(i).setTextColor(Color_.WHITE);
		}
	}
}

VertexClientPE.showTrails = function() {
	var trailsParticleType;
	switch(VertexClientPE.trailsMode) {
		case "flame": {
			trailsParticleType = ParticleType.flame;
			break;
		} case "redstone": {
			trailsParticleType = ParticleType.redstone;
			break;
		}
	}
	Level.addParticle(trailsParticleType, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 2);
}

VertexClientPE.getMyScriptName = function() {
	var scripts = net.zhuoweizhang.mcpelauncher.ScriptManager.scripts;
    for(var i = 0; i < scripts.size(); i++) {
        var script = scripts.get(i);
        var scope = script.scope;
        if(org.mozilla.javascript.ScriptableObject.hasProperty(scope, "VertexClientPE"))
            return script.name;
	}
}

function newLevel() {
	try {
		//print(VertexClientPE.getMyScriptName());
		currentScreen = ScreenType.ingame;
		lagTimer = 0;
		CONTEXT.runOnUiThread(new Runnable_() {
			run: function() {
				if(accountManagerGUI != null) {
					if(accountManagerGUI.isShowing()) {
						accountManagerGUI.dismiss();
					}
				}
				if(mainMenuTextList != null) {
					if(mainMenuTextList.isShowing()) {
						mainMenuTextList.dismiss();
					}
				}
			}
		});
		autoLeaveStage = 0;
		VertexClientPE.playerIsInGame = true;
		VertexClientPE.loadMainSettings();
		if(!VertexClientPE.isRemote()) {
			VertexClientPE.loadDeathCoords();
		}
		VertexClientPE.Utils.loadFov();
		if(VertexClientPE.latestVersion != VertexClientPE.currentVersion && VertexClientPE.latestVersion != undefined) {
			VertexClientPE.clientMessage("There is a new version available (v" + VertexClientPE.latestVersion + " for Minecraft Pocket Edition v" + latestPocketEditionVersion + ")!");
		}
		if((hacksList == null || !hacksList.isShowing()) && !VertexClientPE.menuIsShowing) {
			showHacksList();
			showTabGUI();
			showShortcuts();
			if(healthDisplayState) {
				showHealthDisplay();
			}
			if(rotationPlusState) {
				showRotationPlus();
			}
		}
		if(!VertexClientPE.isPro()) {
			if(getRandomInt(0, 20) == 10) {
				VertexClientPE.showUpgradeDialog();
			}
		}
		VertexClientPE.Render.initViews();
		if(chestESPState) {
			VertexClientPE.Utils.loadChests();
		}
		VertexClientPE.Utils.world.chatMessages = [];
	} catch(e) {
		VertexClientPE.showBugReportDialog(e);
	}
}

function deathHook(a, v) {
	if(v == getPlayerEnt()) {
		VertexClientPE.currentWorld.deathX = getPlayerX();
		VertexClientPE.currentWorld.deathY = getPlayerY();
		VertexClientPE.currentWorld.deathZ = getPlayerZ();
		if(!VertexClientPE.isRemote()) {
			VertexClientPE.saveDeathCoords();
		}
	}
	if(killToMorphSetting == "on") {
		if(a == getPlayerEnt()) {
			Entity.setRenderType(getPlayerEnt(), Entity.getRenderType(v));
		}
	}
}

function leaveGame() {
	CONTEXT.runOnUiThread(new Runnable_({
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
			if(shortcutGUI != null) {
				shortcutGUI.dismiss();
			}
			if(healthDisplayUI != null) {
				healthDisplayUI.dismiss();
			}
			if(rotationPlusUI != null) {
				rotationPlusUI.dismiss();
			}
			VertexClientPE.closeMenu();
			showMenuButton();
			VertexClientPE.saveMainSettings();
			VertexClientPE.editCopyrightText();
			VertexClientPE.Render.deinitViews();
			VertexClientPE.playerIsInGame = false;
		}
	}));
	VertexClientPE.isPaused = false;
}

VertexClientPE.checkGUINeedsDismiss = function() {
	if(GUI != null && GUI.isShowing()) {
		GUI.dismiss();
	}
	if(hacksList != null && hacksList.isShowing()) {
		hacksList.dismiss();
	}
	if(tabGUI != null && tabGUI.isShowing()) {
		tabGUI.dismiss();
	}
	if(shortcutGUI != null) {
		if(shortcutGUI.isShowing()) {
			shortcutGUI.dismiss();
		}
	}
	if(healthDisplayUI != null) {
		if(healthDisplayUI.isShowing()) {
			healthDisplayUI.dismiss();
		}
	}
	if(rotationPlusUI != null) {
		if(rotationPlusUI.isShowing()) {
			rotationPlusUI.dismiss();
		}
	}
	if(mainMenuTextList != null) {
		if(mainMenuTextList.isShowing()) {
			mainMenuTextList.dismiss();
		}
	}
	if(accountManagerGUI != null) {
		if(accountManagerGUI.isShowing()) {
			accountManagerGUI.dismiss();
		}
	}
	if(pauseUtilitiesUI != null) {
		if(pauseUtilitiesUI.isShowing()) {
			pauseUtilitiesUI.dismiss();
		}
	}
}

function settingsScreen() {
	VertexClientPE.menuIsShowing = true;
	var display = new DisplayMetrics_();
	CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
		CONTEXT.runOnUiThread(new Runnable_({
			run: function() {
				try {
					VertexClientPE.checkGUINeedsDismiss();
					
					var settingsMenuLayout = new LinearLayout_(CONTEXT);
					settingsMenuLayout.setOrientation(1);
					settingsMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
					settingsMenuLayout.setPadding(dip2px(2), 0, dip2px(2), 0);
					
					var settingsMenuScroll = new ScrollView(CONTEXT);
					
					var settingsMenuLayout1 = new LinearLayout_(CONTEXT);
					settingsMenuLayout1.setOrientation(1);
					settingsMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
					
					var settingsTitle = clientScreenTitle("Settings");
					settingsMenuLayout1.addView(settingsTitle);
					
					settingsMenuScroll.addView(settingsMenuLayout);
					settingsMenuLayout1.addView(settingsMenuScroll);
					
					var generalTitle = clientSectionTitle("HUD", "theme");
					
					var hacksListModeSettingFunc = new settingButton("Hacks list mode", null, null,
						function(viewArg) {
							hacksListModeSetting = "on";
							hacksListModeSettingButton.setText("Normal");
						}
					);
					var hacksListModeSettingButton = hacksListModeSettingFunc.getButton();
					if(hacksListModeSetting == "on") {
						hacksListModeSettingButton.setText("Normal");
					} else if(hacksListModeSetting == "counter") {
						hacksListModeSettingButton.setText("Counter");
					} else if(hacksListModeSetting == "logo") {
						hacksListModeSettingButton.setText("Logo");
					} else if(hacksListModeSetting == "off") {
						hacksListModeSettingButton.setText("Hidden");
					}
					hacksListModeSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							if(hacksListModeSetting == "off") {
								hacksListModeSetting = "on";
								hacksListModeSettingButton.setText("Normal");
								VertexClientPE.saveMainSettings();
							} else if(hacksListModeSetting == "on"){
								hacksListModeSetting = "counter";
								hacksListModeSettingButton.setText("Counter");
								VertexClientPE.saveMainSettings();
							} else if(hacksListModeSetting == "counter"){
								hacksListModeSetting = "logo";
								hacksListModeSettingButton.setText("Logo");
								VertexClientPE.saveMainSettings();
							} else if(hacksListModeSetting == "logo"){
								hacksListModeSetting = "off";
								hacksListModeSettingButton.setText("Hidden");
								VertexClientPE.saveMainSettings();
							}
						}
					}));
					
					var hacksListPosSettingFunc = new settingButton("Hacks list position", null, null,
						function(viewArg) {
							hacksListPosSetting = "top-center";
							hacksListPosSettingButton.setText("Top-center");
						}
					);
					var hacksListPosSettingButton = hacksListPosSettingFunc.getButton();
					if(hacksListPosSetting == "top-left") {
						hacksListPosSettingButton.setText("Top-left");
					} else if(hacksListPosSetting == "top-center") {
						hacksListPosSettingButton.setText("Top-center");
					} else if(hacksListPosSetting == "top-right") {
						hacksListPosSettingButton.setText("Top-right");
					}
					hacksListPosSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							if(hacksListPosSetting == "top-left") {
								hacksListPosSetting = "top-center";
								hacksListPosSettingButton.setText("Top-center");
							} else if(hacksListPosSetting == "top-center"){
								hacksListPosSetting = "top-right";
								hacksListPosSettingButton.setText("Top-right");
							} else if(hacksListPosSetting == "top-right"){
								hacksListPosSetting = "top-left";
								hacksListPosSettingButton.setText("Top-left");
							}
							VertexClientPE.saveMainSettings();
						}
					}));
					
					var tabGUIModeSettingFunc = new settingButton("TabGUI Mode", null, null,
						function(viewArg) {
							tabGUIModeSetting = "off";
							tabGUIModeSettingButton.setText("Hidden");
						}
					);
					var tabGUIModeSettingButton = tabGUIModeSettingFunc.getButton();
					if(tabGUIModeSetting == "on") {
						tabGUIModeSettingButton.setText("Shown");
					} else if(tabGUIModeSetting == "off") {
						tabGUIModeSettingButton.setText("Hidden");
					}
					tabGUIModeSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							if(tabGUIModeSetting == "on") {
								tabGUIModeSetting = "off";
								tabGUIModeSettingButton.setText("Hidden");
							} else if(tabGUIModeSetting == "off"){
								tabGUIModeSetting = "on";
								tabGUIModeSettingButton.setText("Shown");
							}
							VertexClientPE.saveMainSettings();
						}
					}));
					
					var mainButtonPositionSettingFunc = new settingButton("Main button position", "Sets the main menu's button position.", null,
						function(viewArg) {
							mainButtonPositionSetting = "top-left";
							mainButtonPositionSettingButton.setText("Top-left");
						}
					);
					var mainButtonPositionSettingButton = mainButtonPositionSettingFunc.getButton();
					if(mainButtonPositionSetting == "top-right") {
						mainButtonPositionSettingButton.setText("Top-right");
					} else if(mainButtonPositionSetting == "top-left") {
						mainButtonPositionSettingButton.setText("Top-left");
					} else if(mainButtonPositionSetting == "bottom-left") {
						mainButtonPositionSettingButton.setText("Bottom-left");
					}
					mainButtonPositionSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(mainButtonPositionSetting == "top-right") {
							mainButtonPositionSetting = "top-left";
							mainButtonPositionSettingButton.setText("Top-left");
						} else if(mainButtonPositionSetting == "top-left") {
							mainButtonPositionSetting = "bottom-left";
							mainButtonPositionSettingButton.setText("Bottom-left");
						} else if(mainButtonPositionSetting == "bottom-left") {
							mainButtonPositionSetting = "top-right";
							mainButtonPositionSettingButton.setText("Top-right");
						}
						VertexClientPE.saveMainSettings();
					}
					}));
					
					var mainButtonSizeSettingFunc = new settingButton("Main button size", "Sets the main menu's button size.");
					var mainButtonSizeSettingButton = mainButtonSizeSettingFunc.getButton();
					mainButtonSizeSettingButton.setText("Change");
					mainButtonSizeSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							VertexClientPE.showMainButtonSizeDialog();
						}
					}));
					
					var mainButtonStyleSettingFunc = new settingButton("Main button style", "Sets the main menu's button style.", null,
						function(viewArg) {
							mainButtonStyleSetting = "normal";
							mainButtonStyleSettingButton.setText("Normal");
						}
					);
					var mainButtonStyleSettingButton = mainButtonStyleSettingFunc.getButton();
					if(mainButtonStyleSetting == "normal") {
						mainButtonStyleSettingButton.setText("Normal");
					} else if(mainButtonStyleSetting == "global_background") {
						mainButtonStyleSettingButton.setText("Global background (fits better)");
					} else if(mainButtonStyleSetting == "no_background") {
						mainButtonStyleSettingButton.setText("Invisible background");
					} else if(mainButtonStyleSetting == "invisible_ghost") {
						mainButtonStyleSettingButton.setText("Invisible (ghost)");
					} else if(mainButtonStyleSetting == "classic") {
						mainButtonStyleSettingButton.setText("Classic");
					}
					mainButtonStyleSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(mainButtonStyleSetting == "normal") {
							mainButtonStyleSetting = "global_background";
							mainButtonStyleSettingButton.setText("Global background (fits better)");
						} else if(mainButtonStyleSetting == "global_background") {
							mainButtonStyleSetting = "no_background";
							mainButtonStyleSettingButton.setText("Invisible background");
						} else if(mainButtonStyleSetting == "no_background") {
							mainButtonStyleSetting = "invisible_ghost";
							mainButtonStyleSettingButton.setText("Invisible (ghost)");
						} else if(mainButtonStyleSetting == "invisible_ghost") {
							mainButtonStyleSetting = "classic";
							mainButtonStyleSettingButton.setText("Classic");
						} else if(mainButtonStyleSetting == "classic") {
							mainButtonStyleSetting = "normal";
							mainButtonStyleSettingButton.setText("Normal");
						}
						VertexClientPE.saveMainSettings();
					}
					}));
					
					var mainButtonTapSettingFunc = new settingButton("Main button action", "Sets the main menu's button action.", null,
						function(viewArg) {
							mainButtonTapSetting = "menu";
							mainButtonTapSettingButton.setText("Menu (normal tap) | More dialog (long tap)");
						}
					);
					var mainButtonTapSettingButton = mainButtonTapSettingFunc.getButton();
					if(mainButtonTapSetting == "menu") {
						mainButtonTapSettingButton.setText("Menu (normal tap) | More dialog (long tap)");
					} else if(mainButtonTapSetting == "moredialog") {
						mainButtonTapSettingButton.setText("More dialog (normal tap) | Menu (long tap)");
					}
					mainButtonTapSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(mainButtonTapSetting == "menu") {
							mainButtonTapSetting = "moredialog";
							mainButtonTapSettingButton.setText("More dialog (normal tap) | Menu (long tap)");
						} else if(mainButtonTapSetting == "moredialog") {
							mainButtonTapSetting = "menu";
							mainButtonTapSettingButton.setText("Menu (normal tap) | More dialog (long tap)");
						}
						VertexClientPE.saveMainSettings();
					}
					}));
					
					var shortcutManagerSettingFunc = new settingButton("Shortcuts", "Manage the shortcut buttons.");
					var shortcutManagerSettingButton = shortcutManagerSettingFunc.getButton();
					shortcutManagerSettingButton.setText("Manage");
					shortcutManagerSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							VertexClientPE.showShortcutManagerDialog();
						}
					}));
					
					var themeTitle = clientSectionTitle("Theme", "theme");
					
					var themeArray = ["Custom RGB", "Green", "Red", "Blue", "Purple", "Violet", "Yellow", "Orange", "Brown", "Grey", "White", "Black"];
					var themeSettingFunc = new settingSelector("Color", "Choose a color.", "Color Selector", themeArray, capitalizeColorString(themeSetting), "themeSetting",
					function(sRightButton, dialogTitle) {
						VertexClientPE.showCustomRGBDialog(sRightButton, dialogTitle);
					});
					var themeSettingButton = themeSettingFunc.getButton();
					
					var useLightThemeSettingFunc = new settingButton("Lighter theme colors", "Use light theme colors if available.", null,
						function(viewArg) {
							if(useLightThemeSetting != "off") {
								useLightThemeSetting = "off";
								useLightThemeSettingButton.setText("OFF");
								VertexClientPE.shouldUpdateGUI = true;
							}
						}
					);
					var useLightThemeSettingButton = useLightThemeSettingFunc.getButton();
					if(useLightThemeSetting == "on") {
						useLightThemeSettingButton.setText("ON");
					} else if(useLightThemeSetting == "off") {
						useLightThemeSettingButton.setText("OFF");
					}
					useLightThemeSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							if(useLightThemeSetting == "on") {
								useLightThemeSetting = "off";
								useLightThemeSettingButton.setText("OFF");
							} else if(useLightThemeSetting == "off") {
								useLightThemeSetting = "on";
								useLightThemeSettingButton.setText("ON");
							}
							VertexClientPE.saveMainSettings();
							VertexClientPE.shouldUpdateGUI = true;
						}
					}));
					
					var buttonStyleSettingFunc = new settingButton("Button style", "Change the button style.", null,
						function(viewArg) {
							if(buttonStyleSetting != "normal") {
								buttonStyleSetting = "normal";
								buttonStyleSettingButton.setText("Normal");
								VertexClientPE.shouldUpdateGUI = true;
							}
						}
					);
					var buttonStyleSettingButton = buttonStyleSettingFunc.getButton();
					if(buttonStyleSetting == "normal") {
						buttonStyleSettingButton.setText("Normal");
					} else if(buttonStyleSetting == "normal_nostrokes") {
						buttonStyleSettingButton.setText("Normal (no strokes)");
					} else if(buttonStyleSetting == "transparent") {
						buttonStyleSettingButton.setText("Normal (no inner)");
					} else if(buttonStyleSetting == "legacy") {
						buttonStyleSettingButton.setText("Legacy");
					} else if(buttonStyleSetting == "legacy_inverted") {
						buttonStyleSettingButton.setText("Legacy (inverted)");
					} else if(buttonStyleSetting == "invisible") {
						buttonStyleSettingButton.setText("Text only (less lag)");
					}
					buttonStyleSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							if(buttonStyleSetting == "normal") {
								buttonStyleSetting = "normal_nostrokes";
								buttonStyleSettingButton.setText("Normal (no strokes)");
							} else if(buttonStyleSetting == "normal_nostrokes") {
								buttonStyleSetting = "transparent";
								buttonStyleSettingButton.setText("Normal (no inner)");
							} else if(buttonStyleSetting == "transparent") {
								buttonStyleSetting = "legacy";
								buttonStyleSettingButton.setText("Legacy");
							} else if(buttonStyleSetting == "legacy") {
								buttonStyleSetting = "legacy_inverted";
								buttonStyleSettingButton.setText("Legacy (inverted)");
							} else if(buttonStyleSetting == "legacy_inverted") {
								buttonStyleSetting = "invisible";
								buttonStyleSettingButton.setText("Text only (less lag)");
							} else if(buttonStyleSetting == "invisible") {
								buttonStyleSetting = "normal";
								buttonStyleSettingButton.setText("Normal");
							}
							VertexClientPE.shouldUpdateGUI = true;
							VertexClientPE.saveMainSettings();
						}
					}));
					
					var buttonStrokeThicknessSettingFunc = new settingButton("Button stroke thickness", "Change the button stroke thickness.");
					var buttonStrokeThicknessSettingButton = buttonStrokeThicknessSettingFunc.getButton();
					buttonStrokeThicknessSettingButton.setText("Change");
					buttonStrokeThicknessSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							VertexClientPE.showButtonStrokeThicknessDialog();
						}
					}));
					
					var backgroundStyleSettingFunc = new settingButton("Background style", "Changes the background style.", null,
						function(viewArg) {
							backgroundStyleSetting = "normal";
							backgroundStyleSettingButton.setText("Normal");
						}
					);
					var backgroundStyleSettingButton = backgroundStyleSettingFunc.getButton();
					if(backgroundStyleSetting == "normal") {
						backgroundStyleSettingButton.setText("Normal");
					} else if(backgroundStyleSetting == "normal_nostrokes") {
						backgroundStyleSettingButton.setText("Normal (no strokes)");
					} else if(backgroundStyleSetting == "normal_noinner") {
						backgroundStyleSettingButton.setText("Normal (no inner)");
					} else if(backgroundStyleSetting == "minecraft_dirt") {
						backgroundStyleSettingButton.setText("Minecraft (dirt)");
					}
					backgroundStyleSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							if(backgroundStyleSetting == "normal") {
								backgroundStyleSetting = "normal_nostrokes";
								backgroundStyleSettingButton.setText("Normal (no strokes)");
							} else if(backgroundStyleSetting == "normal_nostrokes") {
								backgroundStyleSetting = "normal_noinner";
								backgroundStyleSettingButton.setText("Normal (no inner)");
							} else if(backgroundStyleSetting == "normal_noinner") {
								backgroundStyleSetting = "minecraft_dirt";
								backgroundStyleSettingButton.setText("Minecraft (dirt)");
							} else if(backgroundStyleSetting == "minecraft_dirt") {
								backgroundStyleSetting = "normal";
								backgroundStyleSettingButton.setText("Normal");
							}
							VertexClientPE.saveMainSettings();
						}
					}));
					
					var transparentBgSettingFunc = new settingButton("Transparent backgrounds", "Makes screens and dialogs transparent.", null,
						function(viewArg) {
							transparentBgSetting = "on";
							transparentBgSettingButton.setText("ON");
						}
					);
					var transparentBgSettingButton = transparentBgSettingFunc.getButton();
					if(transparentBgSetting == "on") {
						transparentBgSettingButton.setText("ON");
					} else if(transparentBgSetting == "off") {
						transparentBgSettingButton.setText("OFF");
					}
					transparentBgSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							if(transparentBgSetting == "on") {
								transparentBgSetting = "off";
								transparentBgSettingButton.setText("OFF");
							} else if(transparentBgSetting == "off") {
								transparentBgSetting = "on";
								transparentBgSettingButton.setText("ON");
							}
							VertexClientPE.saveMainSettings();
						}
					}));
					
					var mcpeGUISettingFunc = new settingButton("MCPE GUI", "Change the MCPE GUI.", null,
						function(viewArg) {
							if(mcpeGUISetting != "default") {
								mcpeGUISetting = "default";
								mcpeGUISettingButton.setText("Default");
								VertexClientPE.saveMainSettings();
								VertexClientPE.setupMCPEGUI();
								VertexClientPE.toast("Restart your MCPE launcher now!");
							}
						}
					);
					var mcpeGUISettingButton = mcpeGUISettingFunc.getButton();
					if(mcpeGUISetting == "default") {
						mcpeGUISettingButton.setText("Default");
					} else if(mcpeGUISetting == "green") {
						mcpeGUISettingButton.setText("Green");
					} else if(mcpeGUISetting == "red") {
						mcpeGUISettingButton.setText("Red");
					} else if(mcpeGUISetting == "blue") {
						mcpeGUISettingButton.setText("Blue");
					} else if(mcpeGUISetting == "purple") {
						mcpeGUISettingButton.setText("Purple");
					} else if(mcpeGUISetting == "yellow") {
						mcpeGUISettingButton.setText("Yellow");
					} else if(mcpeGUISetting == "white") {
						mcpeGUISettingButton.setText("White");
					} else if(mcpeGUISetting == "black") {
						mcpeGUISettingButton.setText("Black");
					}
					mcpeGUISettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(mcpeGUISetting == "default") {
							mcpeGUISetting = "green";
							mcpeGUISettingButton.setText("Green");
						} else if(mcpeGUISetting == "green") {
							mcpeGUISetting = "red";
							mcpeGUISettingButton.setText("Red");
						} else if(mcpeGUISetting == "red") {
							mcpeGUISetting = "blue";
							mcpeGUISettingButton.setText("Blue");
						} else if(mcpeGUISetting == "blue") {
							mcpeGUISetting = "purple";
							mcpeGUISettingButton.setText("Purple");
						} else if(mcpeGUISetting == "purple") {
							mcpeGUISetting = "yellow";
							mcpeGUISettingButton.setText("Yellow");
						} else if(mcpeGUISetting == "yellow") {
							mcpeGUISetting = "white";
							mcpeGUISettingButton.setText("White");
						} else if(mcpeGUISetting == "white") {
							mcpeGUISetting = "black";
							mcpeGUISettingButton.setText("Black");
						} else if(mcpeGUISetting == "black") {
							mcpeGUISetting = "default";
							mcpeGUISettingButton.setText("Default");
						}
						VertexClientPE.saveMainSettings();
						VertexClientPE.setupMCPEGUI();
						VertexClientPE.toast("Restart your MCPE launcher now!");
					}
					}));
					
					var fontSettingFunc = new settingButton("Font", "Change the font/typeface.", null,
						function(viewArg) {
							if(fontSetting != "default") {
								fontSetting = "default";
								fontSettingButton.setText("Default");
								VertexClientPE.font = fontSetting=="minecraft"?Typeface_.createFromFile(new File_(PATH, "minecraft.ttf")):VertexClientPE.defaultFont;
								MinecraftButtonLibrary.ProcessedResources.font = VertexClientPE.font;
								VertexClientPE.shouldUpdateGUI = true;
							}
						}
					);
					var fontSettingButton = fontSettingFunc.getButton();
					if(fontSetting == "default") {
						fontSettingButton.setText("Default");
					} else if(fontSetting == "minecraft") {
						fontSettingButton.setText("Minecraft");
					}
					fontSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							if(fontSetting == "default") {
								fontSetting = "minecraft";
								fontSettingButton.setText("Minecraft");
							} else if(fontSetting == "minecraft") {
								fontSetting = "default";
								fontSettingButton.setText("Default");
							}
							VertexClientPE.font = fontSetting=="minecraft"?Typeface_.createFromFile(new File_(PATH, "minecraft.ttf")):VertexClientPE.defaultFont;
							MinecraftButtonLibrary.ProcessedResources.font = VertexClientPE.font;
							VertexClientPE.saveMainSettings();
							VertexClientPE.shouldUpdateGUI = true;
						}
					}));
					
					var modButtonColorBlockedSettingFunc = new settingButton("Mod button text color (blocked)", "Change the mod button blocked text color.", null,
						function(viewArg) {
							if(modButtonColorDisabledSetting != "red") {
								modButtonColorBlockedSetting = "red";
								modButtonColorBlockedSettingButton.setText("Red");
								VertexClientPE.setupModButtonColors();
								VertexClientPE.shouldUpdateGUI = true;
							}
						}
					);
					var modButtonColorBlockedSettingButton = modButtonColorBlockedSettingFunc.getButton();
					if(modButtonColorBlockedSetting == "red") {
						modButtonColorBlockedSettingButton.setText("Red");
					} else if(modButtonColorBlockedSetting == "green") {
						modButtonColorBlockedSettingButton.setText("Green");
					} else if(modButtonColorBlockedSetting == "blue") {
						modButtonColorBlockedSettingButton.setText("Blue");
					} else if(modButtonColorBlockedSetting == "yellow") {
						modButtonColorBlockedSettingButton.setText("Yellow");
					} else if(modButtonColorBlockedSetting == "white") {
						modButtonColorBlockedSettingButton.setText("White");
					} else if(modButtonColorBlockedSetting == "black") {
						modButtonColorBlockedSettingButton.setText("Black");
					}
					modButtonColorBlockedSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							if(modButtonColorBlockedSetting == "red") {
								modButtonColorBlockedSetting = "green";
								modButtonColorBlockedSettingButton.setText("Green");
							} else if(modButtonColorBlockedSetting == "green") {
								modButtonColorBlockedSetting = "blue";
								modButtonColorBlockedSettingButton.setText("Blue");
							} else if(modButtonColorBlockedSetting == "blue") {
								modButtonColorBlockedSetting = "yellow";
								modButtonColorBlockedSettingButton.setText("Yellow");
							} else if(modButtonColorBlockedSetting == "yellow") {
								modButtonColorBlockedSetting = "white";
								modButtonColorBlockedSettingButton.setText("White");
							} else if(modButtonColorBlockedSetting == "white") {
								modButtonColorBlockedSetting = "black";
								modButtonColorBlockedSettingButton.setText("Black");
							} else if(modButtonColorBlockedSetting == "black") {
								modButtonColorBlockedSetting = "red";
								modButtonColorBlockedSettingButton.setText("Red");
							}
							VertexClientPE.setupModButtonColors();
							VertexClientPE.saveMainSettings();
							VertexClientPE.shouldUpdateGUI = true;
						}
					}));
					
					var modButtonColorEnabledSettingFunc = new settingButton("Mod button text color (enabled)", "Change the mod button enabled text color.", null,
						function(viewArg) {
							if(modButtonColorDisabledSetting != "green") {
								modButtonColorEnabledSetting = "green";
								modButtonColorEnabledSettingButton.setText("Green");
								VertexClientPE.setupModButtonColors();
								VertexClientPE.shouldUpdateGUI = true;
							}
						}
					);
					var modButtonColorEnabledSettingButton = modButtonColorEnabledSettingFunc.getButton();
					if(modButtonColorEnabledSetting == "red") {
						modButtonColorEnabledSettingButton.setText("Red");
					} else if(modButtonColorEnabledSetting == "green") {
						modButtonColorEnabledSettingButton.setText("Green");
					} else if(modButtonColorEnabledSetting == "blue") {
						modButtonColorEnabledSettingButton.setText("Blue");
					} else if(modButtonColorEnabledSetting == "yellow") {
						modButtonColorEnabledSettingButton.setText("Yellow");
					} else if(modButtonColorEnabledSetting == "white") {
						modButtonColorEnabledSettingButton.setText("White");
					} else if(modButtonColorEnabledSetting == "black") {
						modButtonColorEnabledSettingButton.setText("Black");
					}
					modButtonColorEnabledSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							if(modButtonColorEnabledSetting == "red") {
								modButtonColorEnabledSetting = "green";
								modButtonColorEnabledSettingButton.setText("Green");
							} else if(modButtonColorEnabledSetting == "green") {
								modButtonColorEnabledSetting = "blue";
								modButtonColorEnabledSettingButton.setText("Blue");
							} else if(modButtonColorEnabledSetting == "blue") {
								modButtonColorEnabledSetting = "yellow";
								modButtonColorEnabledSettingButton.setText("Yellow");
							} else if(modButtonColorEnabledSetting == "yellow") {
								modButtonColorEnabledSetting = "white";
								modButtonColorEnabledSettingButton.setText("White");
							} else if(modButtonColorEnabledSetting == "white") {
								modButtonColorEnabledSetting = "black";
								modButtonColorEnabledSettingButton.setText("Black");
							} else if(modButtonColorEnabledSetting == "black") {
								modButtonColorEnabledSetting = "red";
								modButtonColorEnabledSettingButton.setText("Red");
							}
							VertexClientPE.setupModButtonColors();
							VertexClientPE.saveMainSettings();
							VertexClientPE.shouldUpdateGUI = true;
						}
					}));
					
					var modButtonColorDisabledSettingFunc = new settingButton("Mod button text color (disabled)", "Change the mod button disabled text color.", null,
						function(viewArg) {
							if(modButtonColorDisabledSetting != "white") {
								modButtonColorDisabledSetting = "white";
								modButtonColorDisabledSettingButton.setText("White");
								VertexClientPE.setupModButtonColors();
								VertexClientPE.shouldUpdateGUI = true;
							}
						}
					);
					var modButtonColorDisabledSettingButton = modButtonColorDisabledSettingFunc.getButton();
					if(modButtonColorDisabledSetting == "red") {
						modButtonColorDisabledSettingButton.setText("Red");
					} else if(modButtonColorDisabledSetting == "green") {
						modButtonColorDisabledSettingButton.setText("Green");
					} else if(modButtonColorDisabledSetting == "blue") {
						modButtonColorDisabledSettingButton.setText("Blue");
					} else if(modButtonColorDisabledSetting == "yellow") {
						modButtonColorDisabledSettingButton.setText("Yellow");
					} else if(modButtonColorDisabledSetting == "white") {
						modButtonColorDisabledSettingButton.setText("White");
					} else if(modButtonColorDisabledSetting == "black") {
						modButtonColorDisabledSettingButton.setText("Black");
					}
					modButtonColorDisabledSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							if(modButtonColorDisabledSetting == "red") {
								modButtonColorDisabledSetting = "green";
								modButtonColorDisabledSettingButton.setText("Green");
							} else if(modButtonColorDisabledSetting == "green") {
								modButtonColorDisabledSetting = "blue";
								modButtonColorDisabledSettingButton.setText("Blue");
							} else if(modButtonColorDisabledSetting == "blue") {
								modButtonColorDisabledSetting = "yellow";
								modButtonColorDisabledSettingButton.setText("Yellow");
							} else if(modButtonColorDisabledSetting == "yellow") {
								modButtonColorDisabledSetting = "white";
								modButtonColorDisabledSettingButton.setText("White");
							} else if(modButtonColorDisabledSetting == "white") {
								modButtonColorDisabledSetting = "black";
								modButtonColorDisabledSettingButton.setText("Black");
							} else if(modButtonColorDisabledSetting == "black") {
								modButtonColorDisabledSetting = "red";
								modButtonColorDisabledSettingButton.setText("Red");
							}
							VertexClientPE.setupModButtonColors();
							VertexClientPE.saveMainSettings();
							VertexClientPE.shouldUpdateGUI = true;
						}
					}));
					
					var menuTitle = clientSectionTitle("Menu", "theme");
					
					var menuTypeSettingFunc = new settingButton("Menu style", "Sets the Client's menu style.", null,
						function(viewArg) {
							menuType = "normal";
							menuTypeSettingButton.setText("Normal");
						}
					);
					var menuTypeSettingButton = menuTypeSettingFunc.getButton();
					if(menuType == "normal") {
						menuTypeSettingButton.setText("Normal");
					} else if(menuType == "halfscreen") {
						menuTypeSettingButton.setText("Tabbed (side)");
					} else if(menuType == "halfscreen_top") {
						menuTypeSettingButton.setText("Tabbed (top)");
					} else if(menuType == "tabbed_fullscreen") {
						menuTypeSettingButton.setText("Tabbed (fullscreen)");
					} else if(menuType == "fullscreen") {
						menuTypeSettingButton.setText("Fullscreen");
					}
					menuTypeSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(menuType == "normal") {
							menuType = "halfscreen";
							menuTypeSettingButton.setText("Tabbed (side)");
						} else if(menuType == "halfscreen") {
							menuType = "halfscreen_top";
							menuTypeSettingButton.setText("Tabbed (top)");
						} else if(menuType == "halfscreen_top") {
							menuType = "tabbed_fullscreen";
							menuTypeSettingButton.setText("Tabbed (fullscreen)");
						} else if(menuType == "tabbed_fullscreen") {
							menuType = "fullscreen";
							menuTypeSettingButton.setText("Fullscreen");
						} else if(menuType == "fullscreen") {
							menuType = "normal";
							menuTypeSettingButton.setText("Normal");
						}
						VertexClientPE.saveMainSettings();
					}
					}));
					
					var normalMenuTypeSizeFunc = new settingButton("Normal menu style size", "Change menu size to fit your screen size better (this only works for the normal menu style).", null,
						function(viewArg) {
							if(normalMenuTypeSize != "normal") {
								normalMenuTypeSize = "normal";
								customHeight = topBarHeight / 2;
								normalMenuTypeSizeButton.setText("Normal");
								VertexClientPE.toast("You may need to restart your launcher to make it work (this only works for the normal menu style)!");
								VertexClientPE.shouldUpdateGUI = true;
							}
						}
					);
					var normalMenuTypeSizeButton = normalMenuTypeSizeFunc.getButton();
					if(normalMenuTypeSize == "normal") {
						normalMenuTypeSizeButton.setText("Normal");
					} else if(normalMenuTypeSize == "small") {
						normalMenuTypeSizeButton.setText("Small");
					}
					normalMenuTypeSizeButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							if(normalMenuTypeSize == "normal") {
								normalMenuTypeSize = "small";
								customHeight = topBarHeight;
								normalMenuTypeSizeButton.setText("Small");
							} else if(normalMenuTypeSize == "small") {
								normalMenuTypeSize = "normal";
								customHeight = topBarHeight / 2;
								normalMenuTypeSizeButton.setText("Normal");
							}
							VertexClientPE.saveMainSettings();
							VertexClientPE.toast("Now restart your launcher to make it work (this only works for the normal menu style)!");
							VertexClientPE.shouldUpdateGUI = true;
						}
					}));
					
					var menuAnimationsSettingFunc = new settingButton("Menu animations", "Show menu animations.", null,
						function(viewArg) {
							if(menuAnimationsSetting != "on") {
								menuAnimationsSetting = "on";
								menuAnimationsSettingButton.setText("ON");
								VertexClientPE.shouldUpdateGUI = true;
							}
						}
					);
					var menuAnimationsSettingButton = menuAnimationsSettingFunc.getButton();
					if(menuAnimationsSetting == "on") {
						menuAnimationsSettingButton.setText("ON");
					} else if(menuAnimationsSetting == "off") {
						menuAnimationsSettingButton.setText("OFF");
					}
					menuAnimationsSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							if(menuAnimationsSetting == "on") {
								menuAnimationsSetting = "off";
								menuAnimationsSettingButton.setText("OFF");
							} else if(menuAnimationsSetting == "off") {
								menuAnimationsSetting = "on";
								menuAnimationsSettingButton.setText("ON");
							}
							VertexClientPE.saveMainSettings();
							VertexClientPE.shouldUpdateGUI = true;
						}
					}));
					
					var soundsAndMusicTitle = clientSectionTitle("Sounds & music", "theme");
					
					var buttonSoundSettingFunc = new settingButton("Button sound", "The sound that you hear when tapping a button.", null,
						function(viewArg) {
							if(buttonSoundSetting != "system") {
								buttonSoundSetting = "system";
								buttonSoundSettingButton.setText("System");
								VertexClientPE.shouldUpdateGUI = true;
							}
						}
					);
					var buttonSoundSettingButton = buttonSoundSettingFunc.getButton();
					if(buttonSoundSetting == "system") {
						buttonSoundSettingButton.setText("System");
					} else if(buttonSoundSetting == "minecraft") {
						buttonSoundSettingButton.setText("Minecraft");
					} else if(buttonSoundSetting == "off") {
						buttonSoundSettingButton.setText("OFF");
					}
					buttonSoundSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							if(buttonSoundSetting == "off") {
								buttonSoundSetting = "system";
								buttonSoundSettingButton.setText("System");
							} else if(buttonSoundSetting == "system") {
								buttonSoundSetting = "minecraft";
								buttonSoundSettingButton.setText("Minecraft");
							} else if(buttonSoundSetting == "minecraft") {
								buttonSoundSetting = "off";
								buttonSoundSettingButton.setText("OFF");
							}
							VertexClientPE.saveMainSettings();
							VertexClientPE.shouldUpdateGUI = true;
						}
					}));
					
					var playMusicSettingFunc = new settingButton("Automatically play music", "Automatically play music.", null,
						function(viewArg) {
							playMusicSetting = "off";
							playMusicSettingButton.setText("OFF");
						}
					);
					var playMusicSettingButton = playMusicSettingFunc.getButton();
					if(playMusicSetting == "on") playMusicSetting = "off";
					/*if(playMusicSetting == "on") {
						playMusicSettingButton.setText("Normal");
					} else */if(playMusicSetting == "shuffle") {
						playMusicSettingButton.setText("Shuffle");
					} else if(playMusicSetting == "off") {
						playMusicSettingButton.setText("OFF");
					}
					playMusicSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							//if(playMusicSetting == "on") {
							if(playMusicSetting == "off") {
								playMusicSetting = "shuffle";
								playMusicSettingButton.setText("Shuffle");
							} else if(playMusicSetting == "shuffle") {
								playMusicSetting = "off";
								playMusicSettingButton.setText("OFF");
							}/* else if(playMusicSetting == "off") {
								playMusicSetting = "on";
								playMusicSettingButton.setText("Normal");
								VertexClientPE.saveMainSettings();
								VertexClientPE.loadMainSettings();
								VertexClientPE.resetMusic();
								//VertexClientPE.playMusic();
								print("This mode is not ready yet!");
							}*/
							VertexClientPE.saveMainSettings();
						}
					}));
					
					var dashboardTitle = clientSectionTitle("Dashboard", "theme");
					
					var dashboardTileSizeSettingFunc = new settingButton("Tile size", "Sets the Dashboard tile style.");
					var dashboardTileSizeSettingButton = dashboardTileSizeSettingFunc.getButton();
					dashboardTileSizeSettingButton.setText("Change");
					dashboardTileSizeSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							VertexClientPE.showDashboardTileSizeDialog();
						}
					}));
					
					var splashScreenTitle = clientSectionTitle("Splash Screen", "theme");
					
					var transparentSplashScreenSettingFunc = new settingButton("Transparent splash screen", "Makes the splash screen partly transparent.", null,
						function(viewArg) {
							transparentSplashScreenSetting = "off";
							transparentSplashScreenSettingButton.setText("OFF");
						}
					);
					var transparentSplashScreenSettingButton = transparentSplashScreenSettingFunc.getButton();
					if(transparentSplashScreenSetting == "on") {
						transparentSplashScreenSettingButton.setText("ON");
					} else if(transparentSplashScreenSetting == "off") {
						transparentSplashScreenSettingButton.setText("OFF");
					}
					transparentSplashScreenSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							if(transparentSplashScreenSetting == "on") {
								transparentSplashScreenSetting = "off";
								transparentSplashScreenSettingButton.setText("OFF");
								VertexClientPE.saveMainSettings();
							} else if(transparentSplashScreenSetting == "off") {
								transparentSplashScreenSetting = "on";
								transparentSplashScreenSettingButton.setText("ON");
								VertexClientPE.saveMainSettings();
							}
						}
					}));
					
					var commandsTitle = clientSectionTitle("Commands", "theme");
					
					var commandsSettingFunc = new settingButton("Commands", "Toggle commands off to login on servers like Mineplex PE.", null,
						function(viewArg) {
							commandsSetting = "on";
							commandsSettingButton.setText("ON");
						}
					);
					var commandsSettingButton = commandsSettingFunc.getButton();
					if(commandsSetting == "on") {
						commandsSettingButton.setText("ON");
					} else if(commandsSetting == "off") {
						commandsSettingButton.setText("OFF");
					}
					commandsSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							if(commandsSetting == "on") {
								commandsSetting = "off";
								commandsSettingButton.setText("OFF");
								VertexClientPE.saveMainSettings();
							} else if(commandsSetting == "off") {
								commandsSetting = "on";
								commandsSettingButton.setText("ON");
								VertexClientPE.saveMainSettings();
							}
						}
					}));
					
					var cmdPrefixFunc = new settingButton("Command prefix", "Change the first character of all Vertex Client PE commands.", null,
						function(viewArg) {
							cmdPrefix = ".";
							cmdPrefixButton.setText(".");
						}
					);
					var cmdPrefixButton = cmdPrefixFunc.getButton();
					cmdPrefixButton.setText(cmdPrefix);
					cmdPrefixButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							if(cmdPrefix == ".") {
								cmdPrefix = "#";
								cmdPrefixButton.setText("#");
								VertexClientPE.saveMainSettings();
							} else if(cmdPrefix == "#") {
								cmdPrefix = "$";
								cmdPrefixButton.setText("$");
								VertexClientPE.saveMainSettings();
							} else if(cmdPrefix == "$") {
								cmdPrefix = "@";
								cmdPrefixButton.setText("@");
								VertexClientPE.saveMainSettings();
							} else if(cmdPrefix == "@") {
								cmdPrefix = ".";
								cmdPrefixButton.setText(".");
								VertexClientPE.saveMainSettings();
							}
						}
					}));
					
					var otherTitle = clientSectionTitle("Other", "theme");
					
					var featuresSettingFunc = new settingButton("Opt in/out features", "Allows you to choose what categories/mods to show.");
					var featuresSettingButton = featuresSettingFunc.getButton();
					featuresSettingButton.setText("Manage");
					featuresSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							VertexClientPE.showFeaturesDialog();
						}
					}));
					
					var showNewsSettingFunc = new settingButton("Show news", "Show news at start.", null,
						function(viewArg) {
							showNewsSetting = "on";
							showNewsSettingButton.setText("ON");
						}
					);
					var showNewsSettingButton = showNewsSettingFunc.getButton();
					if(showNewsSetting == "on") {
						showNewsSettingButton.setText("ON");
					} else if(showNewsSetting == "off") {
						showNewsSettingButton.setText("OFF");
					}
					showNewsSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							if(showNewsSetting == "on") {
								showNewsSetting = "off";
								showNewsSettingButton.setText("OFF");
							} else if(showNewsSetting == "off") {
								showNewsSetting = "on";
								showNewsSettingButton.setText("ON");
							}
							VertexClientPE.saveMainSettings();
						}
					}));
					
					var showSnowInWinterSettingFunc = new settingButton("Show snowflakes on the start screen in the winter", null, null,
						function(viewArg) {
							showSnowInWinterSetting = "off";
							showSnowInWinterSettingButton.setText("OFF");
						}
					);
					var showSnowInWinterSettingButton = showSnowInWinterSettingFunc.getButton();
					if(showSnowInWinterSetting == "on") {
						showSnowInWinterSettingButton.setText("ON");
					} else if(showSnowInWinterSetting == "off") {
						showSnowInWinterSettingButton.setText("OFF");
					}
					showSnowInWinterSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							if(showSnowInWinterSetting == "off") {
								showSnowInWinterSetting = "on";
								showSnowInWinterSettingButton.setText("ON");
							} else if(showSnowInWinterSetting == "on") {
								showSnowInWinterSetting = "off";
								showSnowInWinterSettingButton.setText("OFF");
							}
							VertexClientPE.saveMainSettings();
						}
					}));
					
					var webBrowserStartPageSettingFunc = new settingButton("Webbrowser startpage", "Change the default webbrowser page.");
					var webBrowserStartPageSettingButton = webBrowserStartPageSettingFunc.getButton();
					webBrowserStartPageSettingButton.setText("Change");
					webBrowserStartPageSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							VertexClientPE.showWebbrowserStartPageDialog();
						}
					}));
					
					settingsMenuLayout.addView(generalTitle);
					VertexClientPE.addView(settingsMenuLayout, hacksListModeSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, hacksListPosSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, tabGUIModeSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, mainButtonPositionSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, mainButtonStyleSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, mainButtonTapSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, shortcutManagerSettingFunc);
					settingsMenuLayout.addView(themeTitle);
					VertexClientPE.addView(settingsMenuLayout, themeSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, useLightThemeSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, buttonStyleSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, buttonStrokeThicknessSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, backgroundStyleSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, transparentBgSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, mcpeGUISettingFunc);
					VertexClientPE.addView(settingsMenuLayout, fontSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, modButtonColorBlockedSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, modButtonColorEnabledSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, modButtonColorDisabledSettingFunc);
					settingsMenuLayout.addView(menuTitle);
					VertexClientPE.addView(settingsMenuLayout, menuTypeSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, normalMenuTypeSizeFunc);
					VertexClientPE.addView(settingsMenuLayout, menuAnimationsSettingFunc);
					settingsMenuLayout.addView(soundsAndMusicTitle);
					VertexClientPE.addView(settingsMenuLayout, buttonSoundSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, playMusicSettingFunc);
					settingsMenuLayout.addView(dashboardTitle);
					VertexClientPE.addView(settingsMenuLayout, dashboardTileSizeSettingFunc);
					settingsMenuLayout.addView(splashScreenTitle);
					VertexClientPE.addView(settingsMenuLayout, transparentSplashScreenSettingFunc);
					settingsMenuLayout.addView(commandsTitle);
					VertexClientPE.addView(settingsMenuLayout, commandsSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, cmdPrefixFunc);
					settingsMenuLayout.addView(otherTitle);
					VertexClientPE.addView(settingsMenuLayout, featuresSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, showNewsSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, showSnowInWinterSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, webBrowserStartPageSettingFunc);

					screenUI = new PopupWindow_(settingsMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
					screenUI.setBackgroundDrawable(backgroundGradient());
					screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
				} catch(error) {
					print('An error occured: ' + error);
					VertexClientPE.showBugReportDialog(error);
				}
			}
		}));
}

function devSettingsScreen() {
	VertexClientPE.menuIsShowing = true;
	var display = new DisplayMetrics_();
	CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
		CONTEXT.runOnUiThread(new Runnable_({
			run: function() {
				try {
					VertexClientPE.checkGUINeedsDismiss();
					
					var devSettingsMenuLayout = new LinearLayout_(CONTEXT);
					devSettingsMenuLayout.setOrientation(1);
					devSettingsMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
					devSettingsMenuLayout.setPadding(dip2px(2), 0, dip2px(2), 0);
					
					var devSettingsMenuScroll = new ScrollView(CONTEXT);
					
					var devSettingsMenuLayout1 = new LinearLayout_(CONTEXT);
					devSettingsMenuLayout1.setOrientation(1);
					devSettingsMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
					
					var devSettingsTitle = clientScreenTitle("Developer Settings");
					devSettingsMenuLayout1.addView(devSettingsTitle);
					
					devSettingsMenuScroll.addView(devSettingsMenuLayout);
					devSettingsMenuLayout1.addView(devSettingsMenuScroll);
					
					var generalTitle = clientSectionTitle("General", "theme");
					
					var debugModeSettingFunc = new settingButton("Debug mode", "Show debug messages.");
					var debugModeSettingButton = debugModeSettingFunc.getButton();
					if(VertexClientPE.isDebugMode()) {
						debugModeSettingButton.setText("ON");
					} else {
						debugModeSettingButton.setText("OFF");
					}
					debugModeSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							VertexClientPE.setIsDebugMode(!VertexClientPE.isDebugMode());
							if(VertexClientPE.isDebugMode()) {
								debugModeSettingButton.setText("ON");
							} else {
								debugModeSettingButton.setText("OFF");
							}
						}
					}));
					
					var expModeSettingFunc = new settingButton("Experimental features", "Show experimental features that are still in development.");
					var expModeSettingButton = expModeSettingFunc.getButton();
					if(VertexClientPE.isExpMode()) {
						expModeSettingButton.setText("ON");
					} else {
						expModeSettingButton.setText("OFF");
					}
					expModeSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							VertexClientPE.setIsExpMode(!VertexClientPE.isExpMode());
							if(VertexClientPE.isExpMode()) {
								expModeSettingButton.setText("ON");
							} else {
								expModeSettingButton.setText("OFF");
							}
						}
					}));
					
					var dataTitle = clientSectionTitle("Data", "theme");
					
					var resetDataSettingFunc = new settingButton("Reset all data", "Resets all data (including Pro).");
					var resetDataSettingButton = resetDataSettingFunc.getButton();
					resetDataSettingButton.setText("Reset");
					resetDataSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							VertexClientPE.resetData();
						}
					}));
					
					devSettingsMenuLayout.addView(generalTitle);
					VertexClientPE.addView(devSettingsMenuLayout, debugModeSettingFunc);
					VertexClientPE.addView(devSettingsMenuLayout, expModeSettingFunc);
					devSettingsMenuLayout.addView(dataTitle);
					VertexClientPE.addView(devSettingsMenuLayout, resetDataSettingFunc);

					screenUI = new PopupWindow_(devSettingsMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
					screenUI.setBackgroundDrawable(backgroundGradient());
					screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
				} catch(error) {
					print('An error occured: ' + error);
					VertexClientPE.showBugReportDialog(error);
				}
			}
		}));
}

function informationScreen() {
	VertexClientPE.menuIsShowing = true;
	var display = new DisplayMetrics_();
	CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
		CONTEXT.runOnUiThread(new Runnable_({
			run: function() {
				try {
					VertexClientPE.checkGUINeedsDismiss();
					
					var informationMenuLayout1 = new LinearLayout_(CONTEXT);
					informationMenuLayout1.setOrientation(1);
					informationMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
					
					var informationMenuScrollView = new ScrollView(CONTEXT);

					var informationMenuLayout = new LinearLayout_(CONTEXT);
					informationMenuLayout.setOrientation(1);
					informationMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
					
					var informationTitle = clientScreenTitle("Information");
					
					informationMenuLayout1.addView(informationTitle);
					informationMenuLayout1.addView(clientTextView("\n"));
					informationMenuScrollView.addView(informationMenuLayout);
					informationMenuLayout1.addView(informationMenuScrollView);
					
					var informationText = clientTextView("\u00A9 peacestorm, imYannic, _TXMO, LPMG, Astro36, AutoGrind and TimmyIsDa | 2015 - 2017. Some rights reserved. Thanks to @_TXMO for making some graphic designs and helping with choosing a name and @imYannic for some other graphic designs.", true);
					
					var enterOne = clientTextView("\n");
					var hrView = clientHR();
					var enterTwo = clientTextView("\n");
					
					informationMenuLayout.addView(informationText);
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
					
					var vertexEdition = VertexClientPE.edition;
					var vertexEditionTextView = clientTextView("Edition: " + vertexEdition);
					
					var statusType = "normal user";
					if(VertexClientPE.isDevMode()) {
						statusType = "developer";
					}
					var statusTextView = clientTextView("Status: " + statusType);
					statusTextView.setOnClickListener(new android.view.View.OnClickListener() {
						onClick: function(v) {
							VertexClientPE.setIsDevMode(!VertexClientPE.isDevMode());
							if(VertexClientPE.isDevMode()) {
								statusType = "developer";
								VertexClientPE.toast("You're a developer now!");
							} else {
								statusType = "normal user";
								VertexClientPE.setIsDebugMode(false);
								VertexClientPE.setIsExpMode(false);
								VertexClientPE.toast("You're no longer a developer!");
							}
							statusTextView.setText("Status: " + statusType);
						}
					});
					
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
					informationMenuLayout.addView(vertexEditionTextView);
					informationMenuLayout.addView(statusTextView);
					informationMenuLayout.addView(proTextView);
					//-------------------------------------------
					informationMenuLayout.addView(deviceInfoTitle);
					informationMenuLayout.addView(androidVersionTextView);
					informationMenuLayout.addView(deviceTextView);

					screenUI = new PopupWindow_(informationMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
					screenUI.setBackgroundDrawable(backgroundGradient());
					screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
				} catch(error) {
					print('An error occurred: ' + error);
				}
			}
		}));
}

var helpSections = [["Where do I report issues?", "You can report issues at http://bit.ly/VertexIssues."], ["How can I add shortcuts?", "Tap the star button in a mod's ... dialog or long click on a tile and then tap on the favorite button to make it favorite. The mod or tile will then have its own shortcut."], ["Website", "Our website is http://Vertex-Client.ml/."], ["Twitter", "Our Twitter account is @VertexHX."]];

function helpScreen() {
	VertexClientPE.menuIsShowing = true;
	var display = new DisplayMetrics_();
	CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
		CONTEXT.runOnUiThread(new Runnable_({
			run: function() {
				try {
					VertexClientPE.checkGUINeedsDismiss();

					var helpMenuLayout = new LinearLayout_(CONTEXT);
					helpMenuLayout.setOrientation(1);
					helpMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
					
					var helpMenuLayoutScroll = new ScrollView(CONTEXT);
					
					var helpMenuLayout1 = new LinearLayout_(CONTEXT);
					helpMenuLayout1.setOrientation(1);
					helpMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
					helpMenuLayout1.setPadding(10, 0, 10, 0);
					
					var helpTitle = clientScreenTitle("Help");
					
					var helpEnter = clientTextView("\n");
					
					helpMenuLayout1.addView(helpTitle);
					helpMenuLayout1.addView(helpEnter);
					helpMenuLayoutScroll.addView(helpMenuLayout);
					helpMenuLayout1.addView(helpMenuLayoutScroll);
					
					helpSections.forEach(function(element, index, array) {
						if(index != 0) {
							var helpSectionEnter = clientTextView("\n");
							helpSectionEnter.setTextSize(10);
							helpMenuLayout.addView(helpSectionEnter);
						}
						helpMenuLayout.addView(helpSection(element[0], element[1]));
					});

					screenUI = new PopupWindow_(helpMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
					screenUI.setBackgroundDrawable(backgroundGradient());
					screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
				} catch(error) {
					print('An error occurred: ' + error);
				}
			}
		}));
}

function previewScreen() {
	VertexClientPE.menuIsShowing = true;
	var display = new DisplayMetrics_();
	CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
		CONTEXT.runOnUiThread(new Runnable_({
			run: function() {
				try {
					VertexClientPE.checkGUINeedsDismiss();

					var previewMenuLayout = new LinearLayout_(CONTEXT);
					previewMenuLayout.setOrientation(1);
					previewMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
					
					var previewMenuLayoutScroll = new ScrollView(CONTEXT);
					
					var previewMenuLayout1 = new LinearLayout_(CONTEXT);
					previewMenuLayout1.setOrientation(1);
					previewMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
					previewMenuLayout1.setPadding(10, 0, 10, 0);
					
					var previewTitle = clientScreenTitle("Preview");
					
					previewMenuLayout1.addView(previewTitle);
					previewMenuLayoutScroll.addView(previewMenuLayout);
					previewMenuLayout1.addView(previewMenuLayoutScroll);
					
					//Webview: set url to latest preview vid
					
					var previewWebView = new WebView_(CONTEXT);
					var wS = previewWebView.getSettings();
					
					var previewLatestUrl = "http://bit.ly/VertexListEmbed";
					var frameVideo = "<html><body><center><iframe width=\"420\" height=\"315\" src=\"" + previewLatestUrl + "\" frameborder=\"0\" allowfullscreen></iframe></center></body></html>";

					wS.setJavaScriptEnabled(true);
					previewWebView.setBackgroundColor(0x00000000);
					previewWebView.setWebChromeClient(new WebChromeClient_());
					previewWebView.setWebViewClient(new WebViewClient_());

					previewWebView.loadData(frameVideo, "text/html", "utf-8");
					
					previewMenuLayout.addView(previewWebView);

					screenUI = new PopupWindow_(previewMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
					screenUI.setBackgroundDrawable(backgroundGradient());
					screenUI.setOnDismissListener(new PopupWindow_.OnDismissListener() {
						onDismiss: function() {
							previewWebView.loadUrl("about:blank");
							if(exitScreenUI != null) {
								if(exitScreenUI.isShowing()) {
									exitScreenUI.dismiss()
								}
							}
						}
					});
					screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
				} catch(error) {
					print('An error occurred: ' + error);
				}
			}
		}));
}

function addonScreen() {
	VertexClientPE.menuIsShowing = true;
	var display = new DisplayMetrics_();
	CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
		CONTEXT.runOnUiThread(new Runnable_({
			run: function() {
				try {
					VertexClientPE.checkGUINeedsDismiss();

					var addonMenuLayout = new LinearLayout_(CONTEXT);
					addonMenuLayout.setOrientation(1);
					addonMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
					
					var addonMenuLayoutScroll = new ScrollView(CONTEXT);
					
					var addonMenuLayout1 = new LinearLayout_(CONTEXT);
					addonMenuLayout1.setOrientation(1);
					addonMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
					
					var addonTitle = clientScreenTitle("Addons");
					addonMenuLayout1.addView(addonTitle);
					
					var addonDownloadTextView = clientTextView("Download addons");
					addonDownloadTextView.setGravity(Gravity_.CENTER);
					addonDownloadTextView.setPaintFlags(addonDownloadTextView.getPaintFlags() | Paint_.UNDERLINE_TEXT_FLAG);
					addonDownloadTextView.setOnClickListener(new View_.OnClickListener() {
						onClick: function(v) {
							ModPE.goToURL("http://Vertex-Client.ml/#addons");
						}
					});
					addonMenuLayout1.addView(addonDownloadTextView);
					addonMenuLayout1.addView(clientTextView("\n"));
					
					addonMenuLayoutScroll.addView(addonMenuLayout);
					addonMenuLayout1.addView(addonMenuLayoutScroll);
					
					if(VertexClientPE.addons.length == 0) {
						var noAddonsText = clientTextView("You either don't have any addons or you should restart to load them!");
						noAddonsText.setGravity(Gravity_.CENTER);
						addonMenuLayout.addView(noAddonsText);
					}
					
					VertexClientPE.addons.forEach(function(element, index, array) {
						addonMenuLayout.addView(new addonButton(element));
					});

					screenUI = new PopupWindow_(addonMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
					screenUI.setBackgroundDrawable(backgroundGradient());
					screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
				} catch(error) {
					print('An error occurred: ' + error);
				}
			}
		}));
}

function milestonesScreen() {
	VertexClientPE.menuIsShowing = true;
	var display = new DisplayMetrics_();
	CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
	CONTEXT.runOnUiThread(new Runnable_({
		run: function () {
			try {
				VertexClientPE.checkGUINeedsDismiss();

				var milestones = [
					["Release of v1.0 Alpha", "Released on 24th January 2016."],
					["100 Twitter followers", "Reached in May 2016."],
					["50k downloads", "Reached in July 2016."],
					["300 Twitter followers", "Reached in September 2016."],
					["100k downloads", "Reached in October 2016."]
				];

				var scrollView = new android.widget.HorizontalScrollView(CONTEXT),
					layout = new LinearLayout_(CONTEXT),
					frameLayout = new FrameLayout_(CONTEXT),
					backgroundParams = new LinearLayout_.LayoutParams(-1, dip2px(2)),
					backgroundLayout = new LinearLayout_(CONTEXT),
					foregroundParams,
					foregroundLayout = new LinearLayout_(CONTEXT),
					line = new TextView_(CONTEXT),
					circleSize,
					circleButton,
					scaler;

				backgroundParams.setMargins(dip2px(32), dip2px(48), dip2px(48), dip2px(48));
				line.setBackgroundDrawable(new ColorDrawable_(Color_.WHITE));
				line.setLayoutParams(backgroundParams);
				
				backgroundLayout.addView(line);
				backgroundLayout.setLayoutParams(new LinearLayout_.LayoutParams(-1, dip2px(66)));

				foregroundLayout.setGravity(Gravity_.CENTER | Gravity_.LEFT);

				for (var i = 0, len = milestones.length; i < len; i++) {
					circleSize = i === (len - 1) ? dip2px(48) : dip2px(32);
					foregroundParams = new LinearLayout_.LayoutParams(dip2px(circleSize), dip2px(circleSize));
					foregroundParams.setMargins(i === 0 ? 0 : dip2px(32), 0, 0, 0);

					circleButton = new Button_(CONTEXT);
					circleButton.setBackgroundDrawable(drawCircle(Color_.rgb(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256))));
					circleButton.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
					circleButton.setGravity(Gravity_.CENTER);
					circleButton.setHorizontallyScrolling(true);
					circleButton.setId(i);
					circleButton.setLayoutParams(foregroundParams);
					circleButton.setMarqueeRepeatLimit(-1);
					circleButton.setSelected(true);
					circleButton.setSingleLine();
					circleButton.setText(milestones[i][0]);
					circleButton.setTextColor(Color_.WHITE);
					circleButton.setTypeface(VertexClientPE.font);

					circleButton.setOnClickListener(new View_.OnClickListener({
						onClick(v) {
							var id = v.getId();
							VertexClientPE.showBasicDialog(milestones[id][0], clientTextView(milestones[id][1]));
						}
					}));
					circleButton.setOnLongClickListener(new View_.OnLongClickListener({
						onLongClick(v) {
							v.setBackgroundDrawable(drawCircle(Color_.rgb(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256))));
							return true;
						}
					}));

					if (fontSetting == "default") {
						circleButton.setTextColor(Color_.WHITE);
						circleButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
					} else if (fontSetting == "minecraft") {
						MinecraftButtonLibrary.addMinecraftStyleToTextView(circleButton);
					}

					scaler = new android.view.animation.ScaleAnimation(0.7, 1.0, 0.7, 1.0);
					scaler.setDuration(500);

					circleButton.startAnimation(scaler);
					foregroundLayout.addView(circleButton);
				}

				frameLayout.addView(backgroundLayout);
				frameLayout.addView(foregroundLayout);

				layout.addView(clientScreenTitle("Milestones\n"));
				layout.addView(frameLayout);
				layout.addView(clientTextView("\nThanks for your support!", true));
				layout.setOrientation(1);
				layout.setPadding(dip2px(16), dip2px(16), dip2px(16), dip2px(16));

				scrollView.addView(layout);

				screenUI = new PopupWindow_(scrollView, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
				screenUI.setBackgroundDrawable(backgroundGradient());
				screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
			} catch (e) {
				print("An error occurred: " + e + " #" + e.lineNumber);
			}
		}
	}));
}

function christmasScreen() {
	VertexClientPE.menuIsShowing = true;
	var display = new DisplayMetrics_();
	CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
	CONTEXT.runOnUiThread(new Runnable_({
		run: function () {
			try {
				if (GUI != null && GUI.isShowing()) {
					GUI.dismiss();
				}
				if (hacksList != null && hacksList.isShowing()) {
					hacksList.dismiss();
				}
				if (tabGUI != null && tabGUI.isShowing()) {
					tabGUI.dismiss();
				}
				if (shortcutGUI != null && shortcutGUI.isShowing()) {
					shortcutGUI.dismiss();
				}
				if (mainMenuTextList != null && mainMenuTextList.isShowing()) {
					mainMenuTextList.dismiss();
				}
				if (accountManagerGUI != null && accountManagerGUI.isShowing()) {
					accountManagerGUI.dismiss();
				}

				var scrollView = new android.widget.HorizontalScrollView(CONTEXT),
					layout = new LinearLayout_(CONTEXT),
					frameLayout = new FrameLayout_(CONTEXT),
					backgroundParams = new LinearLayout_.LayoutParams(-1, dip2px(2)),
					backgroundLayout = new LinearLayout_(CONTEXT),
					foregroundParams,
					foregroundLayout = new LinearLayout_(CONTEXT),
					line = new TextView_(CONTEXT),
					circleSize,
					circleButton,
					scaler;

				backgroundParams.setMargins(dip2px(32), dip2px(48), dip2px(48), dip2px(48));
				line.setBackgroundDrawable(new ColorDrawable_(Color_.WHITE));
				line.setLayoutParams(backgroundParams);
				
				backgroundLayout.addView(line);
				backgroundLayout.setLayoutParams(new LinearLayout_.LayoutParams(-1, dip2px(66)));

				foregroundLayout.setGravity(Gravity_.CENTER | Gravity_.LEFT);

				circleSize = dip2px(64);
				foregroundParams = new LinearLayout_.LayoutParams(dip2px(circleSize), dip2px(circleSize));
				foregroundParams.setMargins(0, 0, 0, 0);

				circleButton = new Button_(CONTEXT);
				circleButton.setBackgroundDrawable(drawCircle(Color_.rgb(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256))));
				circleButton.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
				circleButton.setGravity(Gravity_.CENTER);
				circleButton.setHorizontallyScrolling(true);
				circleButton.setLayoutParams(foregroundParams);
				circleButton.setMarqueeRepeatLimit(-1);
				circleButton.setSelected(true);
				circleButton.setSingleLine();
				
				var daysLeft;
				if(VertexClientPE.Utils.day <= 25) {
					daysLeft = 25 - VertexClientPE.Utils.day;
				}
				
				var circleText;
				if(daysLeft != null && daysLeft != 0) {
					circleText = daysLeft.toString() + " days left until Christmas!";
				} else if(daysLeft == 0) {
					circleText = "Christmas Day";
				} else {
					circleText = "It's not Christmas Day yet or it has just been.";
				}
				circleButton.setText(circleText);
				circleButton.setTextColor(Color_.WHITE);
				circleButton.setTypeface(VertexClientPE.font);

				circleButton.setOnLongClickListener(new View_.OnLongClickListener({
					onLongClick(v) {
						v.setBackgroundDrawable(drawCircle(Color_.rgb(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256))));
						return true;
					}
				}));

				if (fontSetting == "default") {
					circleButton.setTextColor(Color_.WHITE);
					circleButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
				} else if (fontSetting == "minecraft") {
					MinecraftButtonLibrary.addMinecraftStyleToTextView(circleButton);
				}

				scaler = new android.view.animation.ScaleAnimation(0.7, 1.0, 0.7, 1.0);
				scaler.setDuration(500);

				circleButton.startAnimation(scaler);
				foregroundLayout.addView(circleButton);

				frameLayout.addView(backgroundLayout);
				frameLayout.addView(foregroundLayout);

				layout.addView(clientScreenTitle("Christmas\n"));
				layout.addView(frameLayout);
				layout.addView(clientTextView("\nMerry Christmas & Happy New Year! We wish you an amazing " + (VertexClientPE.Utils.year + 1).toString() + "!", true));
				layout.setOrientation(1);
				layout.setPadding(dip2px(16), dip2px(16), dip2px(16), dip2px(16));

				scrollView.addView(layout);

				screenUI = new PopupWindow_(scrollView, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
				screenUI.setBackgroundDrawable(backgroundGradient());
				screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
			} catch (e) {
				print("An error occurred: " + e + " #" + e.lineNumber);
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
	var display = new DisplayMetrics_();
	CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
		CONTEXT.runOnUiThread(new Runnable_({
			run: function() {
				try {
					VertexClientPE.checkGUINeedsDismiss();
					
					var playerCustomizerLayout1 = new LinearLayout_(CONTEXT);
					playerCustomizerLayout1.setOrientation(1);
					playerCustomizerLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
					
					var playerCustomizerTitle = clientTextView("Player Customizer", true);
					playerCustomizerTitle.setTextSize(25);
					playerCustomizerTitle.setGravity(Gravity_.CENTER);
					playerCustomizerLayout1.addView(playerCustomizerTitle);

					var playerCustomizerLayout = new LinearLayout_(CONTEXT);
					playerCustomizerLayout.setOrientation(LinearLayout_.HORIZONTAL);
					playerCustomizerLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
					
					var playerCustomizerLayoutLeft = new LinearLayout_(CONTEXT);
					playerCustomizerLayoutLeft.setOrientation(1);
					playerCustomizerLayoutLeft.setGravity(Gravity_.CENTER_HORIZONTAL);
					
					var playerCustomizerLayoutLeftScroll = new ScrollView(CONTEXT);
					
					var playerCustomizerLayoutLeft1 = new LinearLayout_(CONTEXT);
					playerCustomizerLayoutLeft1.setOrientation(1);
					playerCustomizerLayoutLeft1.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2, display.heightPixels / 2 - playerCustomizerTitle.getLineHeight() / 2));
					
					var playerCustomizerLayoutRight = new LinearLayout_(CONTEXT);
					playerCustomizerLayoutRight.setOrientation(1);
					playerCustomizerLayoutRight.setGravity(Gravity_.CENTER_HORIZONTAL);
					
					var playerCustomizerLayoutRightScroll = new ScrollView(CONTEXT);
					
					var playerCustomizerLayoutRight1 = new LinearLayout_(CONTEXT);
					playerCustomizerLayoutRight1.setOrientation(1);
					playerCustomizerLayoutRight1.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2, display.heightPixels / 2 - playerCustomizerTitle.getLineHeight() / 2));
					
					var playerCustomizerLayoutBottom = new LinearLayout_(CONTEXT);
					playerCustomizerLayoutBottom.setOrientation(1);
					playerCustomizerLayoutBottom.setGravity(Gravity_.CENTER_HORIZONTAL);
					
					var playerCustomizerLayoutBottomScroll = new ScrollView(CONTEXT);
					
					var playerCustomizerLayoutBottom1 = new LinearLayout_(CONTEXT);
					playerCustomizerLayoutBottom1.setOrientation(1);
					playerCustomizerLayoutBottom1.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels, display.heightPixels / 2 - playerCustomizerTitle.getLineHeight() / 2));
					
					var playerCustomizerLeftTitle = clientTextView("Morphing", true);
					playerCustomizerLeftTitle.setGravity(Gravity_.CENTER);
					playerCustomizerLeftTitle.setBackgroundDrawable(backgroundSpecial(null, themeSetting));
					
					var playerCustomizerRightTitle = clientTextView("Trails", true);
					playerCustomizerRightTitle.setGravity(Gravity_.CENTER);
					playerCustomizerRightTitle.setBackgroundDrawable(backgroundSpecial(null, themeSetting));
					
					var playerCustomizerBottomTitle = clientTextView("Options", true);
					playerCustomizerBottomTitle.setGravity(Gravity_.CENTER);
					playerCustomizerBottomTitle.setBackgroundDrawable(backgroundSpecial(null, themeSetting));
					
					playerCustomizerLayoutLeftScroll.addView(playerCustomizerLayoutLeft);
					playerCustomizerLayoutLeft1.addView(playerCustomizerLeftTitle);
					playerCustomizerLayoutLeft1.addView(playerCustomizerLayoutLeftScroll);
					
					playerCustomizerLayoutRightScroll.addView(playerCustomizerLayoutRight);
					playerCustomizerLayoutRight1.addView(playerCustomizerRightTitle);
					playerCustomizerLayoutRight1.addView(playerCustomizerLayoutRightScroll);
					
					playerCustomizerLayoutBottomScroll.addView(playerCustomizerLayoutBottom);
					playerCustomizerLayoutBottom1.addView(playerCustomizerBottomTitle);
					playerCustomizerLayoutBottom1.addView(playerCustomizerLayoutBottomScroll);
					
					var killToMorphSettingButton = clientSwitch();
					killToMorphSettingButton.setText("Automatically morph when killing entities");
					if(themeSetting == "white") {
						killToMorphSettingButton.setTextColor(Color_.BLACK);
					} else {
						killToMorphSettingButton.setTextColor(Color_.WHITE);
					}
					killToMorphSettingButton.setTypeface(VertexClientPE.font);
					if(fontSetting == "minecraft") {
						MinecraftButtonLibrary.addMinecraftStyleToTextView(killToMorphSettingButton);
					}
					killToMorphSettingButton.setChecked(killToMorphSetting == "on");
					killToMorphSettingButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
						onCheckedChanged: function() {
							if(killToMorphSetting == "off") {
								killToMorphSetting = "on";
							} else if(killToMorphSetting == "on") {
								killToMorphSetting = "off";
							}
							VertexClientPE.saveMainSettings();
						}
					}));
					
					playerCustomizerLayoutBottom.addView(killToMorphSettingButton);
					
					playerCustomizerLayout1.addView(playerCustomizerLayout);
					playerCustomizerLayout.addView(playerCustomizerLayoutLeft1);
					playerCustomizerLayout.addView(playerCustomizerLayoutRight1);
					playerCustomizerLayout1.addView(playerCustomizerLayoutBottom1);
					
					renderTypes.forEach(function(element, index, array) {
						var rTButton = clientButton(Entity.renderTypeToName(element));
						if(element == Entity.getRenderType(getPlayerEnt())) {
							rTButton.setTextColor(Color_.GREEN);
						}
						rTButton.setOnClickListener(new View_.OnClickListener() {
							onClick: function() {
								VertexClientPE.setPlayerModel(element, playerCustomizerLayoutLeft);
							}
						});
						if(Entity.renderTypeToName(element) != "Unknown") {
							playerCustomizerLayoutLeft.addView(rTButton);
						}
					});
					
					trailsModes.forEach(function(element, index, array) {
						var trailButton = clientButton(element[1]);
						if(element[0] == VertexClientPE.trailsMode) {
							trailButton.setTextColor(Color_.GREEN);
						}
						trailButton.setOnClickListener(new View_.OnClickListener() {
							onClick: function() {
								VertexClientPE.setTrailsMode(element, playerCustomizerLayoutRight);
							}
						});
						playerCustomizerLayoutRight.addView(trailButton);
					});

					screenUI = new PopupWindow_(playerCustomizerLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
					screenUI.setBackgroundDrawable(backgroundGradient());
					screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
					
					VertexClientPE.showExitButtons();
				} catch(error) {
					print('An error occurred: ' + error);
				}
			}
		}));
}

function optiFineScreen() {
	VertexClientPE.menuIsShowing = true;
	var display = new DisplayMetrics_();
	CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
		CONTEXT.runOnUiThread(new Runnable_({
			run: function() {
				try {
					VertexClientPE.checkGUINeedsDismiss();

					var optiFineLayout = new LinearLayout_(CONTEXT);
					optiFineLayout.setOrientation(1);
					optiFineLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
					
					var optiFineLayoutScroll = new ScrollView(CONTEXT);
					
					var optiFineLayout1 = new LinearLayout_(CONTEXT);
					optiFineLayout1.setOrientation(1);
					optiFineLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
					
					var optiFineTitle = clientTextView("OptiFine", true);
					optiFineTitle.setTextSize(25);
					optiFineTitle.setGravity(Gravity_.CENTER);
					optiFineLayout1.addView(optiFineTitle);
					
					optiFineLayoutScroll.addView(optiFineLayout);
					optiFineLayout1.addView(optiFineLayoutScroll);
					
					var antiLagDropRemoverButton = clientSwitch();
					antiLagDropRemoverButton.setText("Automatically remove dropped items to reduce lag");
					if(themeSetting == "white") {
						antiLagDropRemoverButton.setTextColor(Color_.BLACK);
					} else {
						antiLagDropRemoverButton.setTextColor(Color_.WHITE);
					}
					antiLagDropRemoverButton.setTypeface(VertexClientPE.font);
					if(fontSetting == "minecraft") {
						MinecraftButtonLibrary.addMinecraftStyleToTextView(antiLagDropRemoverButton);
					}
					antiLagDropRemoverButton.setChecked(antiLagDropRemoverSetting == "on");
					antiLagDropRemoverButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
						onCheckedChanged: function() {
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
					
					var betterPauseButton = clientSwitch();
					betterPauseButton.setText("Better pause (don't move while paused on multiplayer)");
					if(themeSetting == "white") {
						betterPauseButton.setTextColor(Color_.BLACK);
					} else {
						betterPauseButton.setTextColor(Color_.WHITE);
					}
					betterPauseButton.setTypeface(VertexClientPE.font);
					if(fontSetting == "minecraft") {
						MinecraftButtonLibrary.addMinecraftStyleToTextView(betterPauseButton);
					}
					betterPauseButton.setChecked(betterPauseSetting == "on");
					betterPauseButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
						onCheckedChanged: function() {
							if(betterPauseSetting == "off") {
								betterPauseSetting = "on";
							} else if(betterPauseSetting == "on") {
								betterPauseSetting = "off";
							}
							VertexClientPE.saveMainSettings();
						}
					}));
					optiFineLayout.addView(betterPauseButton);

					screenUI = new PopupWindow_(optiFineLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
					screenUI.setBackgroundDrawable(backgroundGradient());
					screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
					
					VertexClientPE.showExitButtons();
				} catch(error) {
					print('An error occurred: ' + error);
				}
			}
		}));
}

function updateCenterScreen() {
	VertexClientPE.menuIsShowing = true;
	var display = new DisplayMetrics_();
	CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
		CONTEXT.runOnUiThread(new Runnable_({
			run: function() {
				try {
					VertexClientPE.checkGUINeedsDismiss();

					var updateCenterMenuLayout = new LinearLayout_(CONTEXT);
					updateCenterMenuLayout.setOrientation(1);
					updateCenterMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
					
					var updateCenterMenuLayoutScroll = new ScrollView(CONTEXT);
					
					var updateCenterMenuLayout1 = new LinearLayout_(CONTEXT);
					updateCenterMenuLayout1.setOrientation(1);
					updateCenterMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
					updateCenterMenuLayout1.setPadding(10, 0, 10, 0);
					
					var updateCenterTitle = clientScreenTitle("Update Center");
					
					var showUpdateToastsSettingSwitch = clientSwitch();
					showUpdateToastsSettingSwitch.setText("Show update toasts on start");
					showUpdateToastsSettingSwitch.setChecked(showUpdateToastsSetting == "on");
					showUpdateToastsSettingSwitch.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
						onCheckedChanged: function() {
							if(showUpdateToastsSetting == "off") {
								showUpdateToastsSetting = "on";
							} else if(showUpdateToastsSetting == "on") {
								showUpdateToastsSetting = "off";
							}
							VertexClientPE.saveMainSettings();
						}
					}));
					
					updateCenterMenuLayout1.addView(updateCenterTitle);
					updateCenterMenuLayout1.addView(clientTextView("\n"));
					updateCenterMenuLayout1.addView(showUpdateToastsSettingSwitch);
					updateCenterMenuLayoutScroll.addView(updateCenterMenuLayout);
					updateCenterMenuLayout1.addView(updateCenterMenuLayoutScroll);
					
					var devUpdateView = updatePaneButton("Latest dev version", "http://bit.ly/VertexDev", true);
					var updateDevEnterView = new TextView_(CONTEXT);
					updateDevEnterView.setText("\n");
					var latestUpdateView = updatePaneButton(VertexClientPE.latestVersion, VertexClientPE.latestVersionDesc);
					var updateEnterView = new TextView_(CONTEXT);
					updateEnterView.setText("\n");
					var currentUpdateView = updatePaneButton(VertexClientPE.currentVersion, VertexClientPE.currentVersionDesc);
					
					if(VertexClientPE.isDevMode()) {
						updateCenterMenuLayout.addView(devUpdateView);
						updateCenterMenuLayout.addView(updateDevEnterView);
					}
					if(VertexClientPE.latestVersion != VertexClientPE.currentVersion) {
						updateCenterMenuLayout.addView(latestUpdateView);
						updateCenterMenuLayout.addView(updateEnterView);
					}
					updateCenterMenuLayout.addView(currentUpdateView);

					screenUI = new PopupWindow_(updateCenterMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
					screenUI.setBackgroundDrawable(backgroundGradient());
					screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
				} catch(error) {
					print('An error occurred: ' + error);
				}
			}
		}));
}

function musicPlayerScreen() {
	VertexClientPE.menuIsShowing = true;
	var display = new DisplayMetrics_();
	CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				VertexClientPE.checkGUINeedsDismiss();

				var musicPlayerMenuLayout = new LinearLayout_(CONTEXT);
				musicPlayerMenuLayout.setOrientation(1);
				musicPlayerMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
				
				var musicPlayerMenuLayoutScroll = new ScrollView(CONTEXT);
				
				var musicPlayerMenuLayout1 = new LinearLayout_(CONTEXT);
				musicPlayerMenuLayout1.setOrientation(1);
				musicPlayerMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
				musicPlayerMenuLayout1.setPadding(10, 0, 10, 0);
				
				var musicPlayerTitle = clientScreenTitle("Music Player");
				
				var musicPlayerEnter = new TextView_(CONTEXT);
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
				mpPlayButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(v) {
						if(VertexClientPE.MusicUtils.mp.isPlaying()) {
							VertexClientPE.MusicUtils.mp.pause();
							VertexClientPE.MusicUtils.isPaused = true;
							mpPlayButton.setBackgroundResource(android.R.drawable.ic_media_play);
						} else {
							VertexClientPE.MusicUtils.mp.start();
							VertexClientPE.MusicUtils.isPaused = false;
							mpPlayButton.setBackgroundResource(android.R.drawable.ic_media_pause);
						}
						VertexClientPE.MusicUtils.playingFirstTime = false;
					}
				});
				mpSeekBarView.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
					onStopTrackingTouch: function(sB) {
						VertexClientPE.MusicUtils.mp.seekTo(mpSeekBarView.getProgress());
						mpCurrentPositionView.setText(VertexClientPE.MusicUtils.milliSecToMinString(VertexClientPE.MusicUtils.mp.getCurrentPosition()));
					}
				});
				
				var mpTabLayout = new LinearLayout_(CONTEXT);
				mpTabLayout.setOrientation(LinearLayout_.HORIZONTAL);
				
				mpTabLayout.addView(musicPlayerTab("All", mpTabLayout, musicPlayerMenuLayout, musicPlayerBar));
				mpTabLayout.addView(musicPlayerTab("Favorite", mpTabLayout, musicPlayerMenuLayout, musicPlayerBar));
				
				musicPlayerMenuLayout1.addView(musicPlayerTitle);
				musicPlayerMenuLayout1.addView(musicPlayerEnter);
				musicPlayerMenuLayout1.addView(mpLayout);
				musicPlayerMenuLayout1.addView(mpTabLayout);
				musicPlayerMenuLayoutScroll.addView(musicPlayerMenuLayout);
				musicPlayerMenuLayout1.addView(musicPlayerMenuLayoutScroll);
				
				VertexClientPE.MusicUtils.songList.forEach(function(element, index, array) {
					if(currentMPTab == "Favorite" && sharedPref.getString("VertexClientPE.songs." + element.title + ".isFavorite", "false") == "false") {
						return;
					}
					musicPlayerMenuLayout.addView(songButton(element, musicPlayerBar));
				});

				screenUI = new PopupWindow_(musicPlayerMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
				screenUI.setBackgroundDrawable(backgroundGradient());
				screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
			} catch(error) {
				print('An error occurred: ' + error);
				clientMessage(error);
			}
		}
	}));
}

function modManagerScreen() {
	VertexClientPE.menuIsShowing = true;
	var display = new DisplayMetrics_();
	CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				VertexClientPE.checkGUINeedsDismiss();

				var modManagerMenuLayout = new LinearLayout_(CONTEXT);
				modManagerMenuLayout.setOrientation(1);
				modManagerMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
				
				var modManagerMenuLayoutScroll = new ScrollView(CONTEXT);
				
				var modManagerMenuLayout1 = new LinearLayout_(CONTEXT);
				modManagerMenuLayout1.setOrientation(1);
				modManagerMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
				//modManagerMenuLayout1.setPadding(10, 0, 10, 0);
				
				var modManagerTitle = clientScreenTitle("Mod Manager");
				
				modManagerMenuLayout1.addView(modManagerTitle);
				modManagerMenuLayout1.addView(clientTextView("\n"));
				modManagerMenuLayoutScroll.addView(modManagerMenuLayout);
				modManagerMenuLayout1.addView(modManagerMenuLayoutScroll);
				
				VertexClientPE.modules.forEach(function(element, index, array) {
					if(element.getSettingsLayout) {
						var modTitle = clientSectionTitle(VertexClientPE.getCustomModName(element.name));
						modTitle.setTypeface(VertexClientPE.font, Typeface_.BOLD);
						modManagerMenuLayout.addView(modTitle);
						modManagerMenuLayout.addView(element.getSettingsLayout());
					}
				});

				screenUI = new PopupWindow_(modManagerMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
				screenUI.setBackgroundDrawable(backgroundGradient());
				screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
			} catch(error) {
				print('An error occurred: ' + error);
			}
		}
	}));
}

function dashboardScreen() {
	VertexClientPE.menuIsShowing = true;
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				VertexClientPE.checkGUINeedsDismiss();

				var columnCount = dashboardTileSize;
				var rowCount = Math.ceil(VertexClientPE.tiles.length / dashboardTileSize);
				
				var dashboardMenuLayout = new GridLayout_(CONTEXT);
				dashboardMenuLayout.setColumnCount(columnCount);
				dashboardMenuLayout.setRowCount(rowCount);
				
				var dashboardMenuLayoutScroll = new ScrollView(CONTEXT);
				
				var dashboardMenuLayout1 = new LinearLayout_(CONTEXT);
				dashboardMenuLayout1.setOrientation(1);
				dashboardMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
				
				var dashboardTitleLayout = new LinearLayout_(CONTEXT);
				dashboardTitleLayout.setOrientation(LinearLayout_.HORIZONTAL);
				dashboardTitleLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
				dashboardTitleLayout.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels, LinearLayout_.LayoutParams.WRAP_CONTENT));
				
				var dashboardTitleLayoutLeft = new LinearLayout_(CONTEXT);
				dashboardTitleLayoutLeft.setOrientation(1);
				dashboardTitleLayoutLeft.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, LinearLayout_.LayoutParams.WRAP_CONTENT));
				
				var dashboardTitleLayoutCenter = new LinearLayout_(CONTEXT);
				dashboardTitleLayoutCenter.setOrientation(1);
				dashboardTitleLayoutCenter.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2, LinearLayout_.LayoutParams.WRAP_CONTENT));
				
				var dashboardTitleLayoutRight = new LinearLayout_(CONTEXT);
				dashboardTitleLayoutRight.setOrientation(1);
				dashboardTitleLayoutRight.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, LinearLayout_.LayoutParams.WRAP_CONTENT));
				
				dashboardTitleLayout.addView(dashboardTitleLayoutLeft);
				dashboardTitleLayout.addView(dashboardTitleLayoutCenter);
				dashboardTitleLayout.addView(dashboardTitleLayoutRight);
				
				var dashboardTitle = clientTextView("Dashboard", true);
				dashboardTitle.setTextSize(25);
				dashboardTitle.setGravity(Gravity_.CENTER);
				
				dashboardTitleLayoutLeft.addView(userBar());
				dashboardTitleLayoutCenter.addView(dashboardTitle);
				
				dashboardMenuLayoutScroll.addView(dashboardMenuLayout);
				dashboardMenuLayout1.addView(dashboardTitleLayout);
				dashboardMenuLayout1.addView(dashboardMenuLayoutScroll);
				
				VertexClientPE.tiles.forEach(function(element, index, array) {
					if((element.checkBeforeAdding && element.checkBeforeAdding()) || !element.checkBeforeAdding) {
						dashboardMenuLayout.addView(tileButton(element, true));
					}
				});
				
				screenUI = new PopupWindow_(dashboardMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
				screenUI.setBackgroundDrawable(backgroundGradient());
				screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
				
				VertexClientPE.showExitButtons();
			} catch(error) {
				print('An error occurred: ' + error);
			}
		}
	}));
}

var webBrowserWebView;

VertexClientPE.showURLBarDialog = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				if(webBrowserWebView == null || webBrowserWebView == undefined) {
					throw new Error("webBrowserWebView is not defined!");
				}
				var urlBarDialogTitle = clientTextView("Enter an URL", true);
				var btn = clientButton("Done");
				var inputBar = clientEditText(webBrowserWebView.getUrl());
				var dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(urlBarDialogTitle);
				dialogLayout.addView(inputBar);
				dialogLayout.addView(btn);
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("Enter an URL");
				inputBar.setHint("URL");
				inputBar.setTextColor(Color_.WHITE);
				dialog.show();
				btn.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						var newUrl = inputBar.getText().toString();
						webBrowserWebView.loadUrl(newUrl);
						if(newUrl.contains("porn")) {
							VertexClientPE.toast("Eww, you nasty kid!");
						}
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

VertexClientPE.latestOutput = "";

VertexClientPE.evalJSOnWebView = function(whatToEval, webView) {
	webView.evaluateJavascript(whatToEval + ".toString()", new android.webkit.ValueCallback() {
		onReceiveValue: function(s) {
			VertexClientPE.latestOutput = s;
		}
	});
}

VertexClientPE.getEvalOutput = function() {
	return VertexClientPE.latestOutput;
}

var webbrowserFullOutputText = "";

VertexClientPE.showF12Dialog = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				if(webBrowserWebView == null || webBrowserWebView == undefined) {
					throw new Error("webBrowserWebView is not defined!");
				}
				var consoleDialogTitle = clientTextView("Developer Tools (F12)", true);
				var enterButton = clientButton("Enter");
				var closeButton = clientButton("Close");
				var dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				
				var dialogOutputLayout1 = new LinearLayout_(CONTEXT);
				dialogOutputLayout1.setOrientation(LinearLayout_.VERTICAL);
				dialogOutputLayout1.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels - dip2px(10), display.heightPixels / 2));
				dialogOutputLayout1.setBackgroundDrawable(backgroundSpecial());
				
				var dialogOutputScroll = new ScrollView_(CONTEXT);
				
				var dialogOutputLayout = new LinearLayout_(CONTEXT);
				dialogOutputLayout.setOrientation(LinearLayout_.VERTICAL);
				
				var dialogInputLayout1 = new LinearLayout_(CONTEXT);
				dialogInputLayout1.setOrientation(LinearLayout_.VERTICAL);
				dialogInputLayout1.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels - dip2px(10), display.heightPixels / 6));
				dialogInputLayout1.setBackgroundDrawable(backgroundSpecial(null, "#212121|#ffffff"));
				
				var dialogInputScroll = new ScrollView_(CONTEXT);
				
				var dialogInputLayout = new LinearLayout_(CONTEXT);
				dialogInputLayout.setOrientation(LinearLayout_.VERTICAL);
				
				var outputTextView = clientTextView(webbrowserFullOutputText);
				dialogOutputLayout.addView(outputTextView);
				
				var inputBar = clientEditText("");
				inputBar.setTextColor(Color_.WHITE);
				dialogInputLayout.addView(inputBar);
				
				dialogOutputScroll.addView(dialogOutputLayout);
				dialogOutputLayout1.addView(dialogOutputScroll);
				
				dialogInputScroll.addView(dialogInputLayout);
				dialogInputLayout1.addView(dialogInputScroll);
				
				dialogLayout.addView(consoleDialogTitle);
				dialogLayout.addView(dialogOutputLayout1);
				dialogLayout.addView(dialogInputLayout1);
				dialogLayout.addView(enterButton);
				dialogLayout.addView(closeButton);
				var dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("Developer Tools (F12)");
				dialog.show();
				var window = dialog.getWindow();
				window.setLayout(display.widthPixels, display.heightPixels);
				enterButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						try {
							var input = inputBar.getText();
							VertexClientPE.evalJSOnWebView(input, webBrowserWebView);
							new Thread_(new Runnable_() {
								run: function() {
									while(VertexClientPE.getEvalOutput() == null || VertexClientPE.getEvalOutput() == "") {
										Thread_.sleep(10);
									}
									CONTEXT.runOnUiThread(new Runnable_() {
										run: function() {
											if(outputTextView.getText() == "") {
												var outputText;
												outputText = VertexClientPE.getEvalOutput();
											} else {
												outputText = outputTextView.getText() + "\n" + VertexClientPE.getEvalOutput();
											}
											webbrowserFullOutputText = outputText;
											outputTextView.setText(outputText);
											VertexClientPE.latestOutput = null;
										}
									});
								}
							}).start();
						} catch(e) {
							print("@" + e.lineNumber + ": " + e);
						}
					}
				});
				closeButton.setOnClickListener(new View_.OnClickListener() {
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

function webBrowserScreen() {
	VertexClientPE.menuIsShowing = true;
	var display = new DisplayMetrics_();
	CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				VertexClientPE.checkGUINeedsDismiss();

				var webBrowserMenuLayout = new LinearLayout_(CONTEXT);
				webBrowserMenuLayout.setOrientation(1);
				webBrowserMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
				
				var webBrowserTitle = clientTextView("Webbrowser", true);
				webBrowserTitle.setTextSize(25);
				webBrowserTitle.setGravity(Gravity_.CENTER);
				webBrowserMenuLayout.addView(webBrowserTitle);
				
				webBrowserWebView = new WebView_(CONTEXT);
				var wS = webBrowserWebView.getSettings();

				wS.setJavaScriptEnabled(true);
				webBrowserWebView.setWebChromeClient(new WebChromeClient_());
				webBrowserWebView.setWebViewClient(new WebViewClient_());

				webBrowserWebView.loadUrl(webBrowserStartPageSetting);
				
				webBrowserMenuLayout.addView(webBrowserWebView);

				screenUI = new PopupWindow_(webBrowserMenuLayout, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight(), true);
				screenUI.setBackgroundDrawable(backgroundGradient());
				screenUI.setOnDismissListener(new PopupWindow_.OnDismissListener() {
					onDismiss: function() {
						webBrowserWebView.loadUrl("about:blank");
						if(exitWebBrowserUI != null) {
							if(exitWebBrowserUI.isShowing()) {
								xWebBrowserButton.performClick();
							}
						}
						webbrowserFullOutputText = null;
					}
				});
				screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
			} catch(error) {
				print('An error occurred: ' + error);
			}
		}
	}));
}

VertexClientPE.showTipBar = function() {
	var display = new DisplayMetrics_();
	CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				var tipBarWidth = CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 3;
				
				var tipBarLayout = new LinearLayout_(CONTEXT);
				tipBarLayout.setOrientation(1);
				
				var subject = mainButtonTapSetting=="menu"?"the Dashboard and the Shop":"the main menu";
				
				var tipBarTextView = clientTextView("You can access " + subject + " by long tapping the main button.", true);
				tipBarTextView.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
				tipBarTextView.setMarqueeRepeatLimit(-1);
				tipBarTextView.setSingleLine();
				tipBarTextView.setHorizontallyScrolling(true);
				tipBarTextView.setSelected(true);
				
				tipBarLayout.addView(tipBarTextView);
				
				tipBar = new PopupWindow_(tipBarLayout, tipBarWidth, screenHeight / 20);
				tipBar.setBackgroundDrawable(backgroundSpecial("bottom"));
				tipBar.setTouchable(false);
				tipBar.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.CENTER | Gravity_.TOP, 0, 0);
				
				new Thread_({
					run: function () {
						Thread_.sleep(10000);
						CONTEXT.runOnUiThread({
							run: function () {
								tipBarLayout.startAnimation(fadeOut(500));
							}
						});
						Thread_.sleep(500);
						CONTEXT.runOnUiThread({
							run: function () {
								tipBar.dismiss();
								tipBarLayout = null;
							}
						});
					}
				}).start();
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
	var _0xff55=["\x59\x6F\x75\x27\x76\x65\x20\x63\x61\x6D\x65\x20\x61\x63\x72\x6F\x73\x73\x20\x61\x6E\x20\x6F\x75\x74\x64\x61\x74\x65\x64\x2C\x20\x65\x64\x69\x74\x65\x64\x20\x61\x6E\x64\x20\x75\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64\x20\x56\x65\x72\x74\x65\x78\x20\x43\x6C\x69\x65\x6E\x74\x20\x50\x45\x20\x73\x63\x72\x69\x70\x74\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x74\x68\x65\x20\x6F\x66\x66\x69\x63\x69\x61\x6C\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x6F\x6E\x20\x6F\x75\x72\x20\x77\x65\x62\x73\x69\x74\x65\x3A\x20\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2E\x6D\x6C","\x74\x6F\x61\x73\x74","\x59\x6F\x75\x27\x76\x65\x20\x63\x61\x6D\x65\x20\x61\x63\x72\x6F\x73\x73\x20\x61\x6E\x20\x65\x64\x69\x74\x65\x64\x20\x61\x6E\x64\x20\x75\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64\x20\x56\x65\x72\x74\x65\x78\x20\x43\x6C\x69\x65\x6E\x74\x20\x50\x45\x20\x73\x63\x72\x69\x70\x74\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x74\x68\x65\x20\x6F\x66\x66\x69\x63\x69\x61\x6C\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x6F\x6E\x20\x6F\x75\x72\x20\x77\x65\x62\x73\x69\x74\x65\x3A\x20\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2E\x6D\x6C"];if(!isAuthorized){if(!isSupported){VertexClientPE[_0xff55[1]](_0xff55[0])}else {VertexClientPE[_0xff55[1]](_0xff55[2])};return}
	if(mainButtonTapSetting == "menu" && mainButtonStyleSetting != "invisible_ghost") {
		menuBtn.setBackgroundDrawable(iconClickedClientGUI);
	}
	if(menuType == "normal") {
		VertexClientPE.showCategoryMenus();
	} else if(menuType == "halfscreen" || menuType == "halfscreen_top" || menuType == "tabbed_fullscreen") {
		retroMenu();
	} else if(menuType == "fullscreen") {
		VertexClientPE.showFullScreenMenu();
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
		if(vertexclientpecombatmenu != null) {
			if(vertexclientpecombatmenu.isShowing()) {
				vertexclientpecombatmenu.dismiss();
			}
		}
		if(vertexclientpeworldmenu != null) {
			if(vertexclientpeworldmenu.isShowing()) {
				vertexclientpeworldmenu.dismiss();
			}
		}
		if(vertexclientpemovementmenu != null) {
			if(vertexclientpemovementmenu.isShowing()) {
				vertexclientpemovementmenu.dismiss();
			}
		}
		if(vertexclientpeplayermenu != null) {
			if(vertexclientpeplayermenu.isShowing()) {
				vertexclientpeplayermenu.dismiss();
			}
		}
		if(vertexclientpemiscmenu != null) {
			if(vertexclientpemiscmenu.isShowing()) {
				vertexclientpemiscmenu.dismiss();
			}
		}
	} else if(menuType == "halfscreen" || menuType == "halfscreen_top" || menuType == "tabbed_fullscreen") {
		if(menu != null) {
			if(menu.isShowing()) {
				menu.dismiss();
			}
		}
	} else if(menuType == "fullscreen") {
		if(fullScreenMenu != null) {
			if(fullScreenMenu.isShowing()) {
				fullScreenMenu.dismiss();
			}
		}
	}
	if(GUI != null) {
		if(GUI.isShowing()) {
			if(mainButtonTapSetting == "menu" && mainButtonStyleSetting != "invisible_ghost") {
				menuBtn.setBackgroundDrawable(iconClientGUI);
			}
			if(currentScreen != ScreenType.start_screen && currentScreen != ScreenType.ingame && currentScreen != ScreenType.hud && currentScreen != ScreenType.pause_screen) {
				GUI.setTouchable(false);
				GUI.update();
			}
		}
	}
}

VertexClientPE.showFullScreenMenu = function() {
	VertexClientPE.menuIsShowing = true;
	var display = new DisplayMetrics_();
	CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
		CONTEXT.runOnUiThread(new Runnable_({
			run: function() {
				try {
					VertexClientPE.checkGUINeedsDismiss();
					
					var fullScreenMenuLayoutScroll = new android.widget.HorizontalScrollView(CONTEXT);

					var fullScreenMenuLayout = new LinearLayout_(CONTEXT);
					fullScreenMenuLayout.setOrientation(LinearLayout_.HORIZONTAL);
					fullScreenMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
					
					fullScreenMenuLayoutScroll.addView(fullScreenMenuLayout);
					
					var fullScreenMenuLayout1Combat = new LinearLayout_(CONTEXT);
					fullScreenMenuLayout1Combat.setOrientation(1);
					fullScreenMenuLayout1Combat.setGravity(Gravity_.CENTER_HORIZONTAL);
					var fullScreenMenuLayout1World = new LinearLayout_(CONTEXT);
					fullScreenMenuLayout1World.setOrientation(1);
					fullScreenMenuLayout1World.setGravity(Gravity_.CENTER_HORIZONTAL);
					var fullScreenMenuLayout1Movement = new LinearLayout_(CONTEXT);
					fullScreenMenuLayout1Movement.setOrientation(1);
					fullScreenMenuLayout1Movement.setGravity(Gravity_.CENTER_HORIZONTAL);
					var fullScreenMenuLayout1Player = new LinearLayout_(CONTEXT);
					fullScreenMenuLayout1Player.setOrientation(1);
					fullScreenMenuLayout1Player.setGravity(Gravity_.CENTER_HORIZONTAL);
					var fullScreenMenuLayout1Misc = new LinearLayout_(CONTEXT);
					fullScreenMenuLayout1Misc.setOrientation(1);
					fullScreenMenuLayout1Misc.setGravity(Gravity_.CENTER_HORIZONTAL);
					
					var combatSectionTitle = coloredSubTitle(combatName);
					combatSectionTitle.setGravity(Gravity_.CENTER);
					var worldSectionTitle = coloredSubTitle(worldName);
					worldSectionTitle.setGravity(Gravity_.CENTER);
					var movementSectionTitle = coloredSubTitle(movementName);
					movementSectionTitle.setGravity(Gravity_.CENTER);
					var playerSectionTitle = coloredSubTitle(playerName);
					playerSectionTitle.setGravity(Gravity_.CENTER);
					var miscSectionTitle = coloredSubTitle(miscName);
					miscSectionTitle.setGravity(Gravity_.CENTER);
					
					fullScreenMenuLayout1Combat.addView(combatSectionTitle);
					fullScreenMenuLayout1World.addView(worldSectionTitle);
					fullScreenMenuLayout1Movement.addView(movementSectionTitle);
					fullScreenMenuLayout1Player.addView(playerSectionTitle);
					fullScreenMenuLayout1Misc.addView(miscSectionTitle);
					
					var fullScreenMenuLayoutScrollCombat = new ScrollView(CONTEXT);
					var fullScreenMenuLayoutScrollWorld = new ScrollView(CONTEXT);
					var fullScreenMenuLayoutScrollMovement = new ScrollView(CONTEXT);
					var fullScreenMenuLayoutScrollPlayer = new ScrollView(CONTEXT);
					var fullScreenMenuLayoutScrollMisc = new ScrollView(CONTEXT);
					
					var fullScreenMenuLayoutCombat = new LinearLayout_(CONTEXT);
					fullScreenMenuLayoutCombat.setOrientation(1);
					var fullScreenMenuLayoutWorld = new LinearLayout_(CONTEXT);
					fullScreenMenuLayoutWorld.setOrientation(1);
					var fullScreenMenuLayoutMovement = new LinearLayout_(CONTEXT);
					fullScreenMenuLayoutMovement.setOrientation(1);
					var fullScreenMenuLayoutPlayer = new LinearLayout_(CONTEXT);
					fullScreenMenuLayoutPlayer.setOrientation(1);
					var fullScreenMenuLayoutMisc = new LinearLayout_(CONTEXT);
					fullScreenMenuLayoutMisc.setOrientation(1);
					
					fullScreenMenuLayoutScrollCombat.addView(fullScreenMenuLayoutCombat);
					fullScreenMenuLayoutScrollWorld.addView(fullScreenMenuLayoutWorld);
					fullScreenMenuLayoutScrollMovement.addView(fullScreenMenuLayoutMovement);
					fullScreenMenuLayoutScrollPlayer.addView(fullScreenMenuLayoutPlayer);
					fullScreenMenuLayoutScrollMisc.addView(fullScreenMenuLayoutMisc);
					
					fullScreenMenuLayout1Combat.addView(fullScreenMenuLayoutScrollCombat);
					fullScreenMenuLayout1World.addView(fullScreenMenuLayoutScrollWorld);
					fullScreenMenuLayout1Movement.addView(fullScreenMenuLayoutScrollMovement);
					fullScreenMenuLayout1Player.addView(fullScreenMenuLayoutScrollPlayer);
					fullScreenMenuLayout1Misc.addView(fullScreenMenuLayoutScrollMisc);
					
					if(combatEnabled == "on") {
						fullScreenMenuLayout.addView(fullScreenMenuLayout1Combat);
					} if(worldEnabled == "on") {
						fullScreenMenuLayout.addView(fullScreenMenuLayout1World);
					} if(movementEnabled == "on") {
						fullScreenMenuLayout.addView(fullScreenMenuLayout1Movement);
					} if(playerEnabled == "on") {
						fullScreenMenuLayout.addView(fullScreenMenuLayout1Player);
					} if(miscEnabled == "on") {
						fullScreenMenuLayout.addView(fullScreenMenuLayout1Misc);
					}
					
					var fullScreenMenuLayout1 = new LinearLayout_(CONTEXT);
					fullScreenMenuLayout1.setOrientation(1);
					fullScreenMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
					fullScreenMenuLayout1.setPadding(10, 0, 10, 0);
					
					if(mainButtonPositionSetting == "top-left" || mainButtonPositionSetting == "top-right") {
						fullScreenMenuLayout1.addView(clientTextView("\n"));
					}
					fullScreenMenuLayout1.addView(fullScreenMenuLayoutScroll);
					
					VertexClientPE.modules.forEach(function (element, index, array) {
						if (element.type == "Mod" || element.type == "Special") {
							if(element.isExpMod && element.isExpMod() && !VertexClientPE.isExpMode()) {
								return;
							}
							if(element.checkBeforeAdding && !element.checkBeforeAdding()) {
								return;
							}
							if (element.category == VertexClientPE.category.COMBAT) {
								if(combatEnabled == "on") {
									fullScreenMenuLayoutCombat.addView(new modButton(element));
								}
							} else if (element.category == VertexClientPE.category.WORLD) {
								if(worldEnabled == "on") {
									fullScreenMenuLayoutWorld.addView(new modButton(element));
								}
							} else if (element.category == VertexClientPE.category.MOVEMENT) {
								if(movementEnabled == "on") {
									fullScreenMenuLayoutMovement.addView(new modButton(element));
								}
							} else if (element.category == VertexClientPE.category.PLAYER) {
								if(playerEnabled == "on") {
									fullScreenMenuLayoutPlayer.addView(new modButton(element));
								}
							} else if (element.category == VertexClientPE.category.MISC) {
								if(miscEnabled == "on") {
									fullScreenMenuLayoutMisc.addView(new modButton(element));
								}
							}
						}
					});

					fullScreenMenu = new PopupWindow_(fullScreenMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
					fullScreenMenu.setBackgroundDrawable(backgroundSpecial());
					fullScreenMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
					
					if(GUI != null) {
						GUI.dismiss();
						if(mainButtonPositionSetting == "top-right") {
							GUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
						} else if(mainButtonPositionSetting == "top-left") {
							GUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
						} else if(mainButtonPositionSetting == "bottom-left") {
							GUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.BOTTOM, 0, 0);
						}
					}
				} catch(error) {
					print('An error occurred: ' + error);
				}
			}
		}));
}

var currentTab = "Combat";

/**
 * function retroMenu()
 * @author peacestorm
 * @since v1.0-pre
*/
function retroMenu() {
	VertexClientPE.loadMainSettings();
	var display = new DisplayMetrics_();
	CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				var menuLayout = new LinearLayout_(CONTEXT);
				var menuMiddleScroll = new ScrollView_(CONTEXT);
				var menuRightScroll = new ScrollView_(CONTEXT);
				menuMiddleLayout = new LinearLayout_(CONTEXT);
				menuRightLayout = new LinearLayout_(CONTEXT);
				menuRightLayout.setGravity(Gravity_.CENTER);
				menuRightLayout.setOrientation(1);
				if(menuType == "halfscreen") {
					menuMiddleLayout.setOrientation(1);
					menuLayout.setOrientation(LinearLayout_.HORIZONTAL);
					menuMiddleLayout.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 1.8 - display.widthPixels / 2.2, display.heightPixels / 1.23));
					menuRightLayout.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2.2, display.heightPixels / 1.23));
					if(mainButtonPositionSetting == "top-left" || mainButtonPositionSetting == "bottom-left") {
						menuLayout.addView(menuMiddleScroll);
						menuMiddleScroll.addView(menuMiddleLayout);
						menuLayout.addView(menuRightScroll);
						menuRightScroll.addView(menuRightLayout);
					} else {
						menuLayout.addView(menuRightScroll);
						menuRightScroll.addView(menuRightLayout);
						menuLayout.addView(menuMiddleScroll);
						menuMiddleScroll.addView(menuMiddleLayout);
					}
				} else if(menuType == "halfscreen_top" || menuType == "tabbed_fullscreen") {
					menuMiddleLayout.setOrientation(LinearLayout_.HORIZONTAL);
					menuLayout.setOrientation(1);
					menuMiddleLayout.setGravity(Gravity_.CENTER);
					menuRightLayout.setGravity(Gravity_.CENTER);
					menuLayout.addView(menuMiddleScroll);
					menuMiddleScroll.addView(menuMiddleLayout);
					menuLayout.addView(menuRightScroll);
					menuRightScroll.addView(menuRightLayout);
				}
				//--------Add Title--------//
				var tabTitle = new TextView_(CONTEXT);
				tabTitle.setText(currentTab);
				tabTitle.setTextSize(20);
				tabTitle.setGravity(Gravity_.CENTER);
				//menuRightLayout.addView(tabTitle);
				
				var categories = [VertexClientPE.category.COMBAT, VertexClientPE.category.WORLD, VertexClientPE.category.MOVEMENT, VertexClientPE.category.PLAYER, VertexClientPE.category.MISC];
				
				categories.forEach(function(element, index, array) {
					if((index == 0 && combatEnabled == "on") || (index == 1 && worldEnabled == "on") || (index == 2 && movementEnabled == "on") || (index == 3 && playerEnabled == "on") || (index == 4 && miscEnabled == "on")) {
						menuMiddleLayout.addView(new categoryTab(element));
					}
				});
				
				VertexClientPE.modules.forEach(function(element, index, array) {
					if(VertexClientPE.category.toRealName(element.category) == currentTab && (element.type == "Mod" || element.type == "Special")) {
						if(element.isExpMod && element.isExpMod() && !VertexClientPE.isExpMode()) {
							return;
						}
						if(element.checkBeforeAdding && !element.checkBeforeAdding()) {
							return;
						}
						menuRightLayout.addView(new modButton(element));
					}
				});
				 
				//More buttons...
				if(menuType == "halfscreen") {
					menu = new PopupWindow_(menuLayout, CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 1.8, CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
				} else if(menuType == "halfscreen_top") {
					menu = new PopupWindow_(menuLayout, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight() / 2);
				} else if(menuType == "tabbed_fullscreen") {
					menu = new PopupWindow_(menuLayout, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
				}
				menu.setBackgroundDrawable(backgroundGradient());
				menu.setAnimationStyle(android.R.style.Animation_Translucent);
				if(menuType == "halfscreen") {
					if(mainButtonPositionSetting == "top-left" || mainButtonPositionSetting == "bottom-left") {
						menu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.BOTTOM, 0, 0);
					} else {
						menu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.BOTTOM, 0, 0);
					}
				} else if(menuType == "halfscreen_top" || menuType == "tabbed_fullscreen") {
					menu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.CENTER | Gravity_.TOP, 0, 0);
					if(GUI != null) {
						GUI.dismiss();
						if(mainButtonPositionSetting == "top-right") {
							GUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
						} else if(mainButtonPositionSetting == "top-left") {
							GUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
						} else if(mainButtonPositionSetting == "bottom-left") {
							GUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.BOTTOM, 0, 0);
						}
					}
				}
			} catch(error) {
				print('An error occured: ' + error);
			}
		}
	}));
}

var vertexclientpemenu;
var menuBtn;

var vertexclientpecombatmenu, vertexclientpeworldmenu, vertexclientpemovementmenu, vertexclientpeplayermenu, vertexclientpemiscmenu;

VertexClientPE.shouldUpdateGUI = false;

VertexClientPE.getShouldUpdateGUI = function(popupWindow) {
	return popupWindow == null || VertexClientPE.shouldUpdateGUI;
}

var combatMenuLayout1, worldMenuLayout1, movementMenuLayout1, playerMenuLayout1, miscMenuLayout1;

VertexClientPE.showCategoryMenus = function () {
	CONTEXT.runOnUiThread({
		run() {
			try {
				var display = new DisplayMetrics_();
				
				if(VertexClientPE.getShouldUpdateGUI(vertexclientpecombatmenu)) {
					let combatMenuLayout = new LinearLayout_(CONTEXT),
						combatMenuScrollView = new ScrollView(CONTEXT),
						combat = new categoryTitle(combatName, true),
						combatSettings = combat.getLeftButton(),
						combatTitle = combat.getMiddleButton(),
						combatArrow = combat.getRightButton(),
						worldMenuLayout = new LinearLayout_(CONTEXT),
						worldMenuScrollView = new ScrollView(CONTEXT),
						world = new categoryTitle(worldName, true);
						worldSettings = world.getLeftButton(),
						worldTitle = world.getMiddleButton(),
						worldArrow = world.getRightButton(),
						movementMenuLayout = new LinearLayout_(CONTEXT),
						movementMenuScrollView = new ScrollView(CONTEXT),
						movement = new categoryTitle(movementName, true),
						movementSettings = movement.getLeftButton(),
						movementTitle = movement.getMiddleButton(),
						movementArrow = movement.getRightButton(),
						playerMenuLayout = new LinearLayout_(CONTEXT),
						playerMenuScrollView = new ScrollView(CONTEXT),
						player = new categoryTitle(playerName, true),
						playerSettings = player.getLeftButton(),
						playerTitle = player.getMiddleButton(),
						playerArrow = player.getRightButton(),
						miscMenuLayout = new LinearLayout_(CONTEXT),
						miscMenuScrollView = new ScrollView(CONTEXT),
						misc = new categoryTitle(miscName, true),
						miscSettings = misc.getLeftButton(),
						miscTitle = misc.getMiddleButton(),
						miscArrow = misc.getRightButton();
						
					combatMenuLayout1 = new LinearLayout_(CONTEXT);
					worldMenuLayout1 = new LinearLayout_(CONTEXT);
					movementMenuLayout1 = new LinearLayout_(CONTEXT);
					playerMenuLayout1 = new LinearLayout_(CONTEXT);
					miscMenuLayout1 = new LinearLayout_(CONTEXT);

					vertexclientpecombatmenu = new PopupWindow_(CONTEXT);
					vertexclientpeworldmenu = new PopupWindow_(CONTEXT);
					vertexclientpemovementmenu = new PopupWindow_(CONTEXT);
					vertexclientpeplayermenu = new PopupWindow_(CONTEXT);
					vertexclientpemiscmenu = new PopupWindow_(CONTEXT);

					CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
					VertexClientPE.loadMainSettings();

					VertexClientPE.modules.forEach(function (element, index, array) {
						if (element.type == "Mod" || element.type == "Special") {
							if(element.isExpMod && element.isExpMod() && !VertexClientPE.isExpMode()) {
								return;
							}
							if(element.checkBeforeAdding && !element.checkBeforeAdding()) {
								return;
							}
							if (element.category == VertexClientPE.category.COMBAT) {
								combatMenuLayout.addView(new modButton(element));
							} else if (element.category == VertexClientPE.category.WORLD) {
								worldMenuLayout.addView(new modButton(element));
							} else if (element.category == VertexClientPE.category.MOVEMENT) {
								movementMenuLayout.addView(new modButton(element));
							} else if (element.category == VertexClientPE.category.PLAYER) {
								playerMenuLayout.addView(new modButton(element));
							} else if (element.category == VertexClientPE.category.MISC) {
								miscMenuLayout.addView(new modButton(element));
							}
						}
					});

					// Combat
					combatMenuLayout.setOrientation(1);
					combatMenuLayout1.setOrientation(1);
					combatMenuScrollView.addView(combatMenuLayout);
					combatSettings.setOnClickListener(new View_.OnClickListener({
						onClick() {
							VertexClientPE.showCategoryDialog(combat, combatName, 0);
						}
					}));
					VertexClientPE.addView(combatMenuLayout1, combat);

					if (combatMenuShown == true) {
						combatArrow.setText("\u25B3");
						combatMenuLayout1.addView(combatMenuScrollView);
					} else if (combatMenuShown == false) {
						combatArrow.setText("\u25BD");
					}

					combatArrow.setOnClickListener(new View_.OnClickListener() {
						onClick(viewArg) {
							if (combatMenuShown == true) {
								combatMenuLayout1.removeView(combatMenuScrollView);
								combatMenuLayout1.setLayoutParams(new FrameLayout_.LayoutParams(ViewGroup_.LayoutParams.WRAP_CONTENT, ViewGroup_.LayoutParams.WRAP_CONTENT));
								combatArrow.setText("\u25BD");
								combatMenuShown = false;
							} else if (combatMenuShown == false) {
								combatMenuLayout1.setLayoutParams(new FrameLayout_.LayoutParams(ViewGroup_.LayoutParams.WRAP_CONTENT, screenHeight / 2 - customHeight));
								combatMenuLayout1.addView(combatMenuScrollView);
								combatArrow.setText("\u25B3");
								combatMenuShown = true;
							}
							VertexClientPE.saveFloatingMenus("combat");
						}
					});
					combatTitle.setOnLongClickListener(new View_.OnLongClickListener() {
						onLongClick(v, t) {
							combatdown = true;
							VertexClientPE.toast("Now you can move the menu!");
							return true;
						}
					});
					combatTitle.setOnTouchListener(new View_.OnTouchListener({
						onTouch(v, e) {
							if (!combatdown) {
								combatmX = e.getX();
								combatmY = e.getY();
							}
							if (combatdown) {
								var a = e.getAction();
								if (a == 2) {
									var X = parseInt(e.getX() - combatmX) * -1 / 10;
									var Y = parseInt(e.getY() - combatmY) * -1 / 10;
									combattpopx = combattpopx + X;
									combattpopy = combattpopy + Y;
									vertexclientpecombatmenu.update(parseInt(combattpopx), parseInt(combattpopy), -1, -1);
									VertexClientPE.saveFloatingMenus("combat");
								}
								if (a == 1) combatdown = false;
							}
							return false;
						}
					}));

					vertexclientpecombatmenu.setContentView(combatMenuLayout1);
					vertexclientpecombatmenu.setBackgroundDrawable(backgroundSpecial(true, "#80212121"));
					if (menuAnimationsSetting == "on") {
						vertexclientpecombatmenu.setAnimationStyle(android.R.style.Animation_Dialog);
					}

					// World
					worldMenuLayout.setOrientation(1);
					worldMenuLayout1.setOrientation(1);
					worldMenuScrollView.addView(worldMenuLayout);

					worldSettings.setOnClickListener(new View_.OnClickListener({
						onClick: function () {
							VertexClientPE.showCategoryDialog(world, worldName, 1);
						}
					}));

					VertexClientPE.addView(worldMenuLayout1, world);

					if (worldMenuShown == true) {
						worldArrow.setText("\u25B3");
						worldMenuLayout1.addView(worldMenuScrollView);
					} else if (worldMenuShown == false) {
						worldArrow.setText("\u25BD");
					}

					worldArrow.setOnClickListener(new View_.OnClickListener() {
						onClick: function (viewArg) {
							if (worldMenuShown == true) {
								worldMenuLayout1.removeView(worldMenuScrollView);
								worldMenuLayout1.setLayoutParams(new FrameLayout_.LayoutParams(ViewGroup_.LayoutParams.WRAP_CONTENT, ViewGroup_.LayoutParams.WRAP_CONTENT));
								worldArrow.setText("\u25BD");
								worldMenuShown = false;
							} else if (worldMenuShown == false) {
								worldMenuLayout1.setLayoutParams(new FrameLayout_.LayoutParams(ViewGroup_.LayoutParams.WRAP_CONTENT, screenHeight / 2 - customHeight));
								worldMenuLayout1.addView(worldMenuScrollView);
								worldArrow.setText("\u25B3");
								worldMenuShown = true;
							}
							VertexClientPE.saveFloatingMenus("world");
						}
					});
					worldTitle.setOnLongClickListener(new View_.OnLongClickListener() {
						onLongClick: function (v, t) {
							worlddown = true;
							VertexClientPE.toast("Now you can move the menu!");
							return true;
						}
					});
					worldTitle.setOnTouchListener(new View_.OnTouchListener({
						onTouch: function (v, e) {
							if (!worlddown) {
								worldmX = e.getX();
								worldmY = e.getY();
							}
							if (worlddown) {
								var a = e.getAction()
								if (a == 2) {
									var X = parseInt(e.getX() - worldmX) * -1 / 10;
									var Y = parseInt(e.getY() - worldmY) * -1 / 10;
									worldtpopx = worldtpopx + X;
									worldtpopy = worldtpopy + Y;
									vertexclientpeworldmenu.update(parseInt(worldtpopx), parseInt(worldtpopy), -1, -1);
									VertexClientPE.saveFloatingMenus("world");
								}
								if (a == 1) worlddown = false;
							}
							return false;
						}
					}));

					vertexclientpeworldmenu.setContentView(worldMenuLayout1);
					vertexclientpeworldmenu.setBackgroundDrawable(backgroundSpecial(true, "#80212121"));
					if (menuAnimationsSetting == "on") {
						vertexclientpeworldmenu.setAnimationStyle(android.R.style.Animation_Dialog);
					}

					// Movement
					movementMenuLayout.setOrientation(1);
					movementMenuLayout1.setOrientation(1);
					movementMenuScrollView.addView(movementMenuLayout);

					movementSettings.setOnClickListener(new View_.OnClickListener({
						onClick: function () {
							VertexClientPE.showCategoryDialog(movement, movementName, 2);
						}
					}));

					VertexClientPE.addView(movementMenuLayout1, movement);

					if (movementMenuShown == true) {
						movementArrow.setText("\u25B3");
						movementMenuLayout1.addView(movementMenuScrollView);
					} else if (movementMenuShown == false) {
						movementArrow.setText("\u25BD");
					}

					movementArrow.setOnClickListener(new View_.OnClickListener() {
						onClick: function (viewArg) {
							if (movementMenuShown == true) {
								movementMenuLayout1.removeView(movementMenuScrollView);
								movementMenuLayout1.setLayoutParams(new FrameLayout_.LayoutParams(ViewGroup_.LayoutParams.WRAP_CONTENT, ViewGroup_.LayoutParams.WRAP_CONTENT));
								movementArrow.setText("\u25BD");
								movementMenuShown = false;
							} else if (movementMenuShown == false) {
								movementMenuLayout1.setLayoutParams(new FrameLayout_.LayoutParams(ViewGroup_.LayoutParams.WRAP_CONTENT, screenHeight / 2 - customHeight));
								movementMenuLayout1.addView(movementMenuScrollView);
								movementArrow.setText("\u25B3");
								movementMenuShown = true;
							}
							VertexClientPE.saveFloatingMenus("movement");
						}
					});
					movementTitle.setOnLongClickListener(new View_.OnLongClickListener() {
						onLongClick: function (v, t) {
							movementdown = true;
							VertexClientPE.toast("Now you can move the menu!");
							return true;
						}
					});
					movementTitle.setOnTouchListener(new View_.OnTouchListener({
						onTouch: function (v, e) {
							if (!movementdown) {
								movementmX = e.getX();
								movementmY = e.getY();
							}
							if (movementdown) {
								var a = e.getAction()
								if (a == 2) {
									var X = parseInt(e.getX() - movementmX) * -1 / 10;
									var Y = parseInt(e.getY() - movementmY) * -1 / 10;
									movementtpopx = movementtpopx + X;
									movementtpopy = movementtpopy + Y;
									vertexclientpemovementmenu.update(parseInt(movementtpopx), parseInt(movementtpopy), -1, -1);
									VertexClientPE.saveFloatingMenus("movement");
								}
								if (a == 1) movementdown = false;
							}
							return false;
						}
					}));

					vertexclientpemovementmenu.setContentView(movementMenuLayout1);
					vertexclientpemovementmenu.setBackgroundDrawable(backgroundSpecial(true, "#80212121"));
					if (menuAnimationsSetting == "on") {
						vertexclientpemovementmenu.setAnimationStyle(android.R.style.Animation_Dialog);
					}

					// Player
					playerMenuLayout.setOrientation(1);
					playerMenuLayout1.setOrientation(1);
					playerMenuScrollView.addView(playerMenuLayout);
					playerSettings.setOnClickListener(new View_.OnClickListener({
						onClick: function () {
							VertexClientPE.showCategoryDialog(player, playerName, 3);
						}
					}));

					VertexClientPE.addView(playerMenuLayout1, player);

					if (playerMenuShown == true) {
						playerArrow.setText("\u25B3");
						playerMenuLayout1.addView(playerMenuScrollView);
					} else if (playerMenuShown == false) {
						playerArrow.setText("\u25BD");
					}

					playerArrow.setOnClickListener(new View_.OnClickListener() {
						onClick: function (viewArg) {
							if (playerMenuShown == true) {
								playerMenuLayout1.removeView(playerMenuScrollView);
								playerMenuLayout1.setLayoutParams(new FrameLayout_.LayoutParams(ViewGroup_.LayoutParams.WRAP_CONTENT, ViewGroup_.LayoutParams.WRAP_CONTENT));
								playerArrow.setText("\u25BD");
								playerMenuShown = false;
							} else if (playerMenuShown == false) {
								playerMenuLayout1.setLayoutParams(new FrameLayout_.LayoutParams(ViewGroup_.LayoutParams.WRAP_CONTENT, screenHeight / 2 - customHeight));
								playerMenuLayout1.addView(playerMenuScrollView);
								playerArrow.setText("\u25B3");
								playerMenuShown = true;
							}
							VertexClientPE.saveFloatingMenus("player");
						}
					});
					playerTitle.setOnLongClickListener(new View_.OnLongClickListener() {
						onLongClick: function (v, t) {
							playerdown = true;
							VertexClientPE.toast("Now you can move the menu!");
							return true;
						}
					});
					playerTitle.setOnTouchListener(new View_.OnTouchListener({
						onTouch: function (v, e) {
							if (!playerdown) {
								playermX = e.getX();
								playermY = e.getY();
							}
							if (playerdown) {
								var a = e.getAction()
								if (a == 2) {
									var X = parseInt(e.getX() - playermX) * -1 / 10;
									var Y = parseInt(e.getY() - playermY) * -1 / 10;
									playertpopx = playertpopx + X;
									playertpopy = playertpopy + Y;
									vertexclientpeplayermenu.update(parseInt(playertpopx), parseInt(playertpopy), -1, -1);
									VertexClientPE.saveFloatingMenus("player");
								}
								if (a == 1) playerdown = false;
							}
							return false;
						}
					}));

					vertexclientpeplayermenu.setContentView(playerMenuLayout1);
					vertexclientpeplayermenu.setBackgroundDrawable(backgroundSpecial(true, "#80212121"));
					if (menuAnimationsSetting == "on") {
						vertexclientpeplayermenu.setAnimationStyle(android.R.style.Animation_Dialog);
					}

					// Misc
					miscMenuLayout.setOrientation(1);
					miscMenuLayout1.setOrientation(1);
					miscMenuScrollView.addView(miscMenuLayout);

					miscSettings.setOnClickListener(new View_.OnClickListener({
						onClick: function () {
							VertexClientPE.showCategoryDialog(misc, miscName, 4);
						}
					}));

					VertexClientPE.addView(miscMenuLayout1, misc);

					if (miscMenuShown == true) {
						miscArrow.setText("\u25B3");
						miscMenuLayout1.addView(miscMenuScrollView);
					} else if (miscMenuShown == false) {
						miscArrow.setText("\u25BD");
					}

					miscArrow.setOnClickListener(new View_.OnClickListener() {
						onClick: function (viewArg) {
							if (miscMenuShown == true) {
								miscMenuLayout1.removeView(miscMenuScrollView);
								miscMenuLayout1.setLayoutParams(new FrameLayout_.LayoutParams(ViewGroup_.LayoutParams.WRAP_CONTENT, ViewGroup_.LayoutParams.WRAP_CONTENT));
								miscArrow.setText("\u25BD");
								miscMenuShown = false;
							} else if (miscMenuShown == false) {
								miscMenuLayout1.setLayoutParams(new FrameLayout_.LayoutParams(ViewGroup_.LayoutParams.WRAP_CONTENT, screenHeight / 2 - customHeight));
								miscMenuLayout1.addView(miscMenuScrollView);
								miscArrow.setText("\u25B3");
								miscMenuShown = true;
							}
							VertexClientPE.saveFloatingMenus("misc");
						}
					});
					miscTitle.setOnLongClickListener(new View_.OnLongClickListener() {
						onLongClick: function (v, t) {
							miscdown = true;
							VertexClientPE.toast("Now you can move the menu!");
							return true;
						}
					});
					miscTitle.setOnTouchListener(new View_.OnTouchListener({
						onTouch: function (v, e) {
							if (!miscdown) {
								miscmX = e.getX();
								miscmY = e.getY();
							}
							if (miscdown) {
								var a = e.getAction()
								if (a == 2) {
									var X = parseInt(e.getX() - miscmX) * -1 / 10;
									var Y = parseInt(e.getY() - miscmY) * -1 / 10;
									misctpopx = misctpopx + X;
									misctpopy = misctpopy + Y;
									vertexclientpemiscmenu.update(parseInt(misctpopx), parseInt(misctpopy), -1, -1);
									VertexClientPE.saveFloatingMenus("misc");
								}
								if (a == 1) miscdown = false;
							}
							return false;
						}
					}));

					vertexclientpemiscmenu.setContentView(miscMenuLayout1);
					vertexclientpemiscmenu.setBackgroundDrawable(backgroundSpecial(true, "#80212121"));
					if (menuAnimationsSetting == "on") {
						vertexclientpemiscmenu.setAnimationStyle(android.R.style.Animation_Dialog);
					}
					
					VertexClientPE.shouldUpdateGUI = false;
				}
				
				//SHOW ALL MENUS *AFTER INITIALIZING*
				if(combatEnabled == "on") {
					vertexclientpecombatmenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.BOTTOM | Gravity_.RIGHT, combattpopx, combattpopy);
					if(combatMenuShown) {
						combatMenuLayout1.setLayoutParams(new FrameLayout_.LayoutParams(ViewGroup_.LayoutParams.WRAP_CONTENT, screenHeight / 2 - customHeight));
						vertexclientpecombatmenu.update();
					}
				}
				if(worldEnabled == "on") {
					vertexclientpeworldmenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.BOTTOM | Gravity_.RIGHT, worldtpopx, worldtpopy);
					if(worldMenuShown) {
						worldMenuLayout1.setLayoutParams(new FrameLayout_.LayoutParams(ViewGroup_.LayoutParams.WRAP_CONTENT, screenHeight / 2 - customHeight));
						vertexclientpeworldmenu.update();
					}
				}
				if(movementEnabled == "on") {
					vertexclientpemovementmenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.BOTTOM | Gravity_.RIGHT, movementtpopx, movementtpopy);
					if(movementMenuShown) {
						movementMenuLayout1.setLayoutParams(new FrameLayout_.LayoutParams(ViewGroup_.LayoutParams.WRAP_CONTENT, screenHeight / 2 - customHeight));
						vertexclientpemovementmenu.update();
					}
				}
				if(playerEnabled == "on") {
					vertexclientpeplayermenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.BOTTOM | Gravity_.RIGHT, playertpopx, playertpopy);
					if(playerMenuShown) {
						playerMenuLayout1.setLayoutParams(new FrameLayout_.LayoutParams(ViewGroup_.LayoutParams.WRAP_CONTENT, screenHeight / 2 - customHeight));
						vertexclientpeplayermenu.update();
					}
				}
				if(miscEnabled == "on") {
					vertexclientpemiscmenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.BOTTOM | Gravity_.RIGHT, misctpopx, misctpopy);
					if(miscMenuShown) {
						miscMenuLayout1.setLayoutParams(new FrameLayout_.LayoutParams(ViewGroup_.LayoutParams.WRAP_CONTENT, screenHeight / 2 - customHeight));
						vertexclientpemiscmenu.update();
					}
				}
			} catch (e) {
				print("Error: " + e + e.lineNumber);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	})
};

function changeColor(view, color) {
	if(view != null) {
		view.setColorFilter(new LightingColorFilter_(color, 0));
	}
}

function openMenuFromMenuButton(viewArg) {
	if(VertexClientPE.playerIsInGame && !VertexClientPE.menuIsShowing) {
		if(hacksList != null) {
			hacksList.dismiss();
		}
		if(tabGUI != null) {
			tabGUI.dismiss();
		}
		if(shortcutGUI != null) {
			shortcutGUI.dismiss();
		}
		if(healthDisplayUI != null) {
			healthDisplayUI.dismiss();
		}
		if(rotationPlusUI != null) {
			rotationPlusUI.dismiss();
		}
		if(pauseUtilitiesUI != null) {
			pauseUtilitiesUI.dismiss();
		}
		VertexClientPE.showMenu();
	} else {
		if(!VertexClientPE.playerIsInGame) {
			VertexClientPE.toast("You need to be in game to open the menu!");
		} else {
			VertexClientPE.closeMenu();
			VertexClientPE.menuIsShowing = false;
			if(!hacksList.isShowing() && !tabGUI.isShowing() && !shortcutGUI.isShowing() && (currentScreen == ScreenType.ingame || currentScreen == ScreenType.hud)) {
				showHacksList();
				showTabGUI();
				showShortcuts();
				if(healthDisplayState) {
					showHealthDisplay();
				}
				if(rotationPlusState) {
					showRotationPlus();
				}
			}
			if(currentScreen == ScreenType.pause_screen && (pauseUtilitiesUI == null || !pauseUtilitiesUI.isShowing())) {
				showPauseUtilities();
			}
		}
	}
}

function showMenuButton() {
	VertexClientPE.loadMainSettings();
	VertexClientPE.menuIsShowing = false;
	var layout = new LinearLayout_(CONTEXT);
	layout.setOrientation(1);
	layout.setGravity(Gravity_.TOP);
	var display = new DisplayMetrics_();
	CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
	menuBtn = new Button_(CONTEXT);
	if(mainButtonStyleSetting != "invisible_ghost") {
		if(mainButtonTapSetting == "menu") {
			if(VertexClientPE.menuIsShowing) {
				menuBtn.setBackgroundDrawable(iconClickedClientGUI);
			} else {
				menuBtn.setBackgroundDrawable(iconClientGUI);
			}
		} else if(mainButtonTapSetting == "moredialog") {
			menuBtn.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
			menuBtn.setText("\u2022\u2022\u2022");
			menuBtn.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
			menuBtn.setMarqueeRepeatLimit(-1);
			menuBtn.setSingleLine();
			menuBtn.setHorizontallyScrolling(true);
			menuBtn.setSelected(true);
		}
	} else {
		menuBtn.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
	}
	menuBtn.setAlpha(0.54);
	menuBtn.setTextSize(16);
	if(themeSetting == "white") {
		menuBtn.setTextColor(Color_.BLACK);
		if(fontSetting != "minecraft") {
			menuBtn.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.WHITE);
		}
	} else {
		menuBtn.setTextColor(Color_.WHITE);
		if(fontSetting != "minecraft") {
			menuBtn.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
		}
	}
	menuBtn.setTypeface(VertexClientPE.font);
	if(buttonSoundSetting != "system") {
		defaultButton.setSoundEffectsEnabled(false);
	}
	if(fontSetting == "minecraft") {
		MinecraftButtonLibrary.addMinecraftStyleToTextView(menuBtn);
	}
	menuBtn.setOnClickListener(new View_.OnClickListener({
		onClick: function(viewArg) {
			if(mainButtonTapSetting == "menu") {
				openMenuFromMenuButton(viewArg);
			} else if(mainButtonTapSetting == "moredialog") {
				VertexClientPE.showMoreDialog();
			}
		}
	}));
	menuBtn.setOnLongClickListener(new View_.OnLongClickListener() {
		onLongClick: function(v, t) {
			if(mainButtonTapSetting == "menu") {
				VertexClientPE.showMoreDialog();
			} else if(mainButtonTapSetting == "moredialog") {
				openMenuFromMenuButton(v);
			}
			return true;
		}
	});
	layout.addView(menuBtn);
	 
	GUI = new PopupWindow_(layout, dip2px(40), dip2px(40));
	GUI.setTouchable(false);
	GUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
	if(menuAnimationsSetting == "on") {
		GUI.setAnimationStyle(android.R.style.Animation_Translucent);
	}
	
	var background;
	if(mainButtonStyleSetting == "normal") {
		if(mainButtonPositionSetting == "top-right") {
			background = backgroundSpecial("cornerleft", themeSetting, true);
		} else if(mainButtonPositionSetting == "top-left") {
			background = backgroundSpecial("cornerright", themeSetting, true);
		} else if(mainButtonPositionSetting == "bottom-left") {
			background = backgroundSpecial("cornerright_", themeSetting, true);
		}
	} else if(mainButtonStyleSetting == "global_background") {
		if(mainButtonPositionSetting == "top-right") {
			background = backgroundGradient("bottomleft", null, "on");
		} else {
			background = backgroundGradient("bottomright", null, "on");
		}
	} else if(mainButtonStyleSetting == "classic") {
		background = new ColorDrawable_(Color_.parseColor("#1D1D1D"));
	} else if(mainButtonStyleSetting == "no_background" || mainButtonStyleSetting == "invisible_ghost") {
		background = new ColorDrawable_(Color_.TRANSPARENT);
	}
	
	if(mainButtonPositionSetting == "top-right") {
		if(mainButtonStyleSetting != "classic" && mainButtonStyleSetting != "global_background") {
			layout.setPadding(10, 0, 0, 10);
		} else {
			layout.setGravity(Gravity_.CENTER);
		}
		GUI.setBackgroundDrawable(background);
		GUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
	} else if(mainButtonPositionSetting == "top-left") {
		if(mainButtonStyleSetting != "classic" && mainButtonStyleSetting != "global_background") {
			layout.setPadding(0, 0, 10, 10);
		} else {
			layout.setGravity(Gravity_.CENTER);
		}
		GUI.setBackgroundDrawable(background);
		GUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
	} else if(mainButtonPositionSetting == "bottom-left") {
		if(mainButtonStyleSetting != "classic" && mainButtonStyleSetting != "global_background") {
			layout.setPadding(0, 10, 10, 0);
		} else {
			layout.setGravity(Gravity_.CENTER);
		}
		GUI.setBackgroundDrawable(background);
		GUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.BOTTOM, 0, 0);
	}
	
	let rgbArray = [customRGBRed, customRGBGreen, customRGBBlue, customRGBRedStroke, customRGBGreenStroke, customRGBBlueStroke];
	let color = themeSetting;
	
	menuBtn.setOnTouchListener(new View_.OnTouchListener() {
		onTouch: function(v, event) {
			if(mainButtonStyleSetting == "normal") {
				let action = event.getActionMasked();
				if(action == MotionEvent_.ACTION_CANCEL || action == MotionEvent_.ACTION_UP) {
					if(useLightThemeSetting == true) {
						background.setColor(Color_.parseColor("#7000994C"));
					} else {
						background.setColor(Color_.parseColor("#700B5B25"));
					}
					if(color == "custom rgb") {
						background.setColor(Color_.argb(127, rgbArray[0], rgbArray[1], rgbArray[2]));
					}
					if(color == "red") {
						if(useLightThemeSetting == true) {
							background.setColor(Color_.parseColor("#70FF3333"));
						} else {
							background.setColor(Color_.parseColor("#705B0C0C"));
						}
					} if(color == "blue") {
						if(useLightThemeSetting == true) {
							background.setColor(Color_.parseColor("#700080FF"));
						} else {
							background.setColor(Color_.parseColor("#700A175B"));
						}
					} if(color == "purple") {
						background.setColor(Color_.parseColor("#709F018C"));
					} if(color == "violet") {
						background.setColor(Color_.parseColor("#70842DCE"));
					} if(color == "yellow") {
						background.setColor(Color_.parseColor("#70CCCC00"));
					} if(color == "orange") {
						background.setColor(Color_.parseColor("#70FF8C00"));
					} if(color == "brown") {
						background.setColor(Color_.parseColor("#708B4513"));
					} if(color == "grey") {
						background.setColor(Color_.parseColor("#70808080"));
					} if(color == "white") {
						background.setColor(Color_.parseColor("#70E1E1E1"));
					} if(color == "black") {
						background.setColor(Color_.parseColor("#70141414"));
					}
					
					var rect = new android.graphics.Rect(v.getLeft(), v.getTop(), v.getRight(), v.getBottom());
					if(rect.contains(v.getLeft() + event.getX(), v.getTop() + event.getY())) { // detect if the event happens inside the view
						// onClick will run soon

						// play sounds
						if(buttonSoundSetting == "minecraft") {
							//Level.playSoundEnt(getPlayerEnt(), "random.click", 100, 0);
							Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
						}
					}
				} else {
					if(useLightThemeSetting == true) {
						background.setColor(Color_.parseColor("#7000CC66"));
					} else {
						background.setColor(Color_.parseColor("#700F8219"));
					}
					if(color == "custom rgb") {
						background.setColor(Color_.argb(127, rgbArray[3], rgbArray[4], rgbArray[5]));
					}
					if(color == "red") {
						if(useLightThemeSetting == true) {
							background.setColor(Color_.parseColor("#70FF6666"));
						} else {
							background.setColor(Color_.parseColor("#70821010"));
						}
					} if(color == "blue") {
						if(useLightThemeSetting == true) {
							background.setColor(Color_.parseColor("#703399FF"));
						} else {
							background.setColor(Color_.parseColor("#700E3882"));
						}
					} if(color == "purple") {
						background.setColor(Color_.parseColor("#70BC21AB"));
					} if(color == "violet") {
						background.setColor(Color_.parseColor("#708D38C9"));
					} if(color == "yellow") {
						background.setColor(Color_.parseColor("#70FFFF00"));
					} if(color == "orange") {
						background.setColor(Color_.parseColor("#70FFA500"));
					} if(color == "brown") {
						background.setColor(Color_.parseColor("#70CD853F"));
					} if(color == "grey") {
						background.setColor(Color_.parseColor("#70A9A9A9"));
					} if(color == "white") {
						background.setColor(Color_.parseColor("#70FFFFFF"));
					} if(color == "black") {
						background.setColor(Color_.parseColor("#701E1E1E"));
					}
				}
			}
			return false;
		}});
	
	if((currentScreen == ScreenType.ingame || currentScreen == ScreenType.hud) && VertexClientPE.playerIsInGame) {
		if(hacksList == null || !hacksList.isShowing()) {
			showHacksList();
			showTabGUI();
			showShortcuts();
			if(healthDisplayState) {
				showHealthDisplay();
			}
			if(rotationPlusState) {
				showRotationPlus();
			}
		}
	}
	if(currentScreen == ScreenType.start_screen || currentScreen == ScreenType.ingame || currentScreen == ScreenType.hud || currentScreen == ScreenType.pause_screen) {
		GUI.setTouchable(true);
		GUI.update();
	}
	if(currentScreen == ScreenType.start_screen) {
		if((mainMenuTextList == null || !mainMenuTextList.isShowing()) && !VertexClientPE.menuIsShowing && !VertexClientPE.playerIsInGame) {
			VertexClientPE.showStartScreenBar();
		}
		if((accountManagerGUI == null || !accountManagerGUI.isShowing()) && !VertexClientPE.menuIsShowing && !VertexClientPE.playerIsInGame) {
			showAccountManagerButton();
		}
	}
	if(currentScreen == ScreenType.pause_screen) {
		if((pauseUtilitiesUI == null || !pauseUtilitiesUI.isShowing()) && !VertexClientPE.menuIsShowing) {
			showPauseUtilities();
		}
	}
}

function showAccountManagerButton() {
	VertexClientPE.loadMainSettings();
	var layout = new LinearLayout_(CONTEXT);
	layout.setOrientation(1);
	var display = new DisplayMetrics_();
	CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
	var acBtn = clientButton("AM", null, null, "right_half");
	acBtn.setLayoutParams(new LinearLayout_.LayoutParams(dip2px(40), dip2px(40)));
	acBtn.setOnClickListener(new View_.OnClickListener({
		onClick: function(viewArg ){
			if(hacksList != null) {
				hacksList.dismiss();
			}
			if(tabGUI != null) {
				tabGUI.dismiss();
			}
			GUI.dismiss();
			accountManagerGUI.dismiss();
			VertexClientPE.showAccountManager(false);
		}
	}));
	layout.addView(acBtn);
	 
	accountManagerGUI = new PopupWindow_(layout, dip2px(40), dip2px(40));
	if(menuAnimationsSetting == "on") {
		accountManagerGUI.setAnimationStyle(android.R.style.Animation_Translucent);
	}
	accountManagerGUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
	accountManagerGUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.CENTER | Gravity_.LEFT, 0, 0);
}
 
function dip2px(dips){
	return Math.ceil(dips * CONTEXT.getResources().getDisplayMetrics().density);
}

var statesTextView;
var musicTextView;

var enabledHacksCounter = 0;

var musicText = "None";

function showHacksList() {
	var display = CONTEXT.getWindowManager().getDefaultDisplay(),
		width = display.getWidth(),
		height = display.getHeight();
	if(hacksList != null) {
		hacksList.dismiss();
	}
	if(hacksList == null || !hacksList.isShowing()) {
		CONTEXT.runOnUiThread(new Runnable_({
			run: function() {
				try {
					display.getMetrics(new DisplayMetrics_());

					enabledHacksCounter = 0;
					
					var hacksListLayout = new LinearLayout_(CONTEXT);
					hacksListLayout.setOrientation(LinearLayout_.HORIZONTAL);
					hacksListLayout.setGravity(Gravity_.CENTER_VERTICAL);
					
					var hacksListLayoutLeft = new LinearLayout_(CONTEXT);
					hacksListLayoutLeft.setOrientation(1);
					hacksListLayoutLeft.setGravity(Gravity_.CENTER);
					hacksListLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(width / 8, width / 15));
					hacksListLayout.addView(hacksListLayoutLeft);
					
					var hacksListLayoutRight = new LinearLayout_(CONTEXT);
					hacksListLayoutRight.setOrientation(1);
					hacksListLayoutRight.setGravity(Gravity_.CENTER);
					if(hacksListModeSetting != "logo") {
						hacksListLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(width / 4, width / 15));
					} else {
						hacksListLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(LinearLayout_.LayoutParams.WRAP_CONTENT, width / 15));
					}
					
					hacksListLayout.addView(hacksListLayoutRight);
					
					logoViewer2 = new ImageView_(CONTEXT);
					logoViewer2.setImageBitmap(imgLogo);
					logoViewer2.setLayoutParams(new LinearLayout_.LayoutParams(width / 8, width / 16));
					
					var versionText = clientTextView("v" + VertexClientPE.currentVersion, true);
					versionText.setGravity(android.view.Gravity.CENTER);
					
					var proText = clientTextView("Pro", true);
					proText.setGravity(android.view.Gravity.CENTER);
					proText.setTextColor(Color_.parseColor("#DAA520"));

					var statesText = "";
					VertexClientPE.modules.forEach(function (element, index, array) {
						if(element.isStateMod() && element.state) {
							if(bypassState && element.canBypassBypassMod && !element.canBypassBypassMod()) {
								return;
							}
							if(enabledHacksCounter != 0) {
								statesText += " - "
							}
							statesText += VertexClientPE.getCustomModName(element.name);
							if(element.getExtraInfo) {
								statesText += " [" + element.getExtraInfo() + "]";
							}
							enabledHacksCounter++;
						}
					});
					
					statesTextView = clientTextView(statesText, true);
					if(hacksListModeSetting == "on") {
						statesTextView.setText(statesText);
					} else if(hacksListModeSetting == "counter") {
						statesTextView.setText(enabledHacksCounter.toString() + " mods enabled");
					}
					
					if(VertexClientPE.MusicUtils.isPaused) {
						musicTextView = clientTextView("\u266B Currently paused: " + musicText, true);
					} else {
						musicTextView = clientTextView("\u266B Currently playing: " + musicText, true);
					}
					
					statesTextView.setTextSize(16);
					statesTextView.setPadding(0, 0, dip2px(8), 0);
					statesTextView.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
					statesTextView.setMarqueeRepeatLimit(-1);
					statesTextView.setSingleLine();
					statesTextView.setHorizontallyScrolling(true);
					statesTextView.setSelected(true);
					musicTextView.setTextSize(16);
					musicTextView.setPadding(0, 0, dip2px(8), 0);
					musicTextView.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
					musicTextView.setMarqueeRepeatLimit(-1);
					musicTextView.setSingleLine();
					musicTextView.setHorizontallyScrolling(true);
					musicTextView.setSelected(true);
					logoViewer2.setPadding(dip2px(8), 0, dip2px(8), 0);
					versionText.setPadding(dip2px(8), 0, dip2px(8), 0);
					proText.setPadding(dip2px(8), 0, dip2px(8), 0);
					hacksListLayoutLeft.addView(logoViewer2);
					if(hacksListModeSetting != "logo") {
						hacksListLayoutRight.addView(statesTextView);
						hacksListLayoutRight.addView(musicTextView);
					} else {
						hacksListLayoutRight.addView(versionText);
						if(VertexClientPE.isPro()) {
							hacksListLayoutRight.addView(proText);
						}
					}
					if(hacksList == null || !hacksList.isShowing()) {
						hacksList = new PopupWindow_(hacksListLayout, LinearLayout_.LayoutParams.WRAP_CONTENT, LinearLayout_.LayoutParams.WRAP_CONTENT);
						if(menuAnimationsSetting == "on") {
							hacksList.setAnimationStyle(android.R.style.Animation_Translucent);
						}
						hacksList.setTouchable(false);
						if(hacksListModeSetting != "off") {
							if(hacksListPosSetting == "top-left") {
								hacksList.setBackgroundDrawable(backgroundGradient("bottomright"));
								hacksList.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
							} else if(hacksListPosSetting == "top-center") {
								hacksList.setBackgroundDrawable(backgroundGradient(true));
								hacksList.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.CENTER | Gravity_.TOP, 0, 0);
							} else if(hacksListPosSetting == "top-right") {
								hacksList.setBackgroundDrawable(backgroundGradient("bottomleft"));
								hacksList.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
							}
						}
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
		CONTEXT.runOnUiThread(new Runnable_({
			run: function() {
				try {
					enabledHacksCounter = 0;
					
					var statesText = "";
					VertexClientPE.modules.forEach(function (element, index, array) {
						if(element.isStateMod() && element.state) {
							if(bypassState && element.canBypassBypassMod && !element.canBypassBypassMod()) {
								return;
							}
							if(enabledHacksCounter != 0) {
								statesText += " - "
							}
							statesText += VertexClientPE.getCustomModName(element.name);
							if(element.getExtraInfo) {
								statesText += " [" + element.getExtraInfo() + "]";
							}
							enabledHacksCounter++;
						}
					});
					
					statesTextView.setText(statesText);
					if(hacksListModeSetting == "on") {
						statesTextView.setText(statesText);
					} else if(hacksListModeSetting == "counter") {
						statesTextView.setText(enabledHacksCounter.toString() + " mods enabled");
					}
					
					if(VertexClientPE.MusicUtils.isPaused) {
						musicTextView.setText("\u266B Currently paused: " + musicText);
					} else {
						musicTextView.setText("\u266B Currently playing: " + musicText);
					}
				} catch(error) {
					print('An error occurred: ' + error);
					VertexClientPE.showBugReportDialog(error);
				}
			}
		}));
}

function showTabGUI() {
	if(tabGUI != null) {
		tabGUI.dismiss();
	}
	if(tabGUI == null || !tabGUI.isShowing()) {
		CONTEXT.runOnUiThread(new Runnable_({
			run: function() {
				try {
					var display = new DisplayMetrics_();
					CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);

					var tabGUILayout = new LinearLayout_(CONTEXT);
					tabGUILayout.setOrientation(LinearLayout_.HORIZONTAL);
					tabGUILayout.setGravity(Gravity_.CENTER_VERTICAL);
					
					var tabGUILayoutLeft = new LinearLayout_(CONTEXT);
					tabGUILayoutLeft.setOrientation(1);
					tabGUILayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 6, ViewGroup_.LayoutParams.WRAP_CONTENT));
					tabGUILayout.addView(tabGUILayoutLeft);
					
					var tabGUILayoutRight = new LinearLayout_(CONTEXT);
					tabGUILayoutRight.setOrientation(1);
					tabGUILayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 6, ViewGroup_.LayoutParams.WRAP_CONTENT));
					if(currentTabGUICategory != null) {
						tabGUILayout.addView(tabGUILayoutRight);
					}

					var categories = [VertexClientPE.category.COMBAT, VertexClientPE.category.WORLD, VertexClientPE.category.MOVEMENT, VertexClientPE.category.PLAYER, VertexClientPE.category.MISC];
					
					categories.forEach(function (element, index, array) {
						if((index == 0 && combatEnabled == "on") || (index == 1 && worldEnabled == "on") || (index == 2 && movementEnabled == "on") || (index == 3 && playerEnabled == "on") || (index == 4 && miscEnabled == "on")) {
							tabGUILayoutLeft.addView(new tabGUICategoryButton(element, tabGUILayoutLeft, tabGUILayoutRight, tabGUILayout));
						}
					});
					
					if(tabGUI == null || !tabGUI.isShowing()) {
						tabGUI = new PopupWindow_(tabGUILayout, LinearLayout_.LayoutParams.WRAP_CONTENT, CONTEXT.getWindowManager().getDefaultDisplay().getHeight() / 3);
						if(menuAnimationsSetting == "on") {
							tabGUI.setAnimationStyle(android.R.style.Animation_Translucent);
						}
						tabGUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
						if(tabGUIModeSetting != "off") {
							tabGUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, dip2px(70));
						}
					}
				} catch(error) {
					print('An error occurred: ' + error);
					VertexClientPE.showBugReportDialog(error);
				}
			}
		}));
	}
}

function showShortcuts() {
	if(shortcutGUI != null) {
		shortcutGUI.dismiss();
	}
	if(shortcutGUI == null || !shortcutGUI.isShowing()) {
		CONTEXT.runOnUiThread(new Runnable_({
			run: function() {
				try {
					var display = new DisplayMetrics_();
					CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
					
					var shortcutGUILayout1 = new LinearLayout_(CONTEXT);
					shortcutGUILayout1.setOrientation(1);
					shortcutGUILayout1.setGravity(Gravity_.CENTER_VERTICAL);

					var shortcutGUILayoutScroll = new ScrollView_(CONTEXT);
					
					var shortcutGUILayout = new LinearLayout_(CONTEXT);
					shortcutGUILayout.setOrientation(1);
					shortcutGUILayout.setGravity(Gravity_.CENTER_VERTICAL);
					
					shortcutGUILayoutScroll.addView(shortcutGUILayout);
					shortcutGUILayout1.addView(shortcutGUILayoutScroll);
					
					var shortcutCount = 0;
					
					VertexClientPE.modules.forEach(function (element, index, array) {
						if(sharedPref.getString("VertexClientPE.mods." + element.name + ".isFavorite", "false") == "true") {
							if(element.checkBeforeAdding && !element.checkBeforeAdding()) {
								return;
							}
							shortcutCount++;
							shortcutGUILayout.addView(modButton(element, true, shortcutSizeSetting));
						}
					});
					
					VertexClientPE.tiles.forEach(function (element, index, array) {
						if(sharedPref.getString("VertexClientPE.tiles." + element.text + ".isFavorite", "false") == "true") {
							if((element.checkBeforeAdding && element.checkBeforeAdding()) || !element.checkBeforeAdding) {
								shortcutCount++;
								shortcutGUILayout.addView(tileButton(element, false));
							}
						}
					});
					
					var shortcutLayoutHeight;
					if(shortcutCount < shortcutUIHeightSetting) {
						shortcutLayoutHeight = dip2px(shortcutSizeSetting * shortcutCount);
					} else {
						shortcutLayoutHeight = dip2px(shortcutSizeSetting * shortcutUIHeightSetting);
					}
					
					if(shortcutGUI == null || !shortcutGUI.isShowing()) {
						shortcutGUI = new PopupWindow_(shortcutGUILayout1, LinearLayout_.LayoutParams.WRAP_CONTENT, shortcutLayoutHeight);
						if(menuAnimationsSetting == "on") {
							shortcutGUI.setAnimationStyle(android.R.style.Animation_Translucent);
						}
						shortcutGUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
						if(shortcutUIPosSetting == "left-bottom") {
							shortcutGUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.BOTTOM, 0, 0);
						} else if(shortcutUIPosSetting == "left-center") {
							shortcutGUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.CENTER, 0, 0);
						} else if(shortcutUIPosSetting == "left-top") {
							shortcutGUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
						} else if(shortcutUIPosSetting == "right-bottom") {
							shortcutGUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.BOTTOM, 0, 0);
						} else if(shortcutUIPosSetting == "right-center") {
							shortcutGUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.CENTER, 0, 0);
						} else if(shortcutUIPosSetting == "right-top") {
							shortcutGUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
						}
					}
				} catch(error) {
					print('An error occurred: ' + error);
					VertexClientPE.showBugReportDialog(error);
				}
			}
		}));
	}
}

var healthDisplayView;

function showHealthDisplay() {
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				let healthDisplayLayout = new LinearLayout_(CONTEXT);
				healthDisplayView = clientTextView(Entity.getHealth(getPlayerEnt()) + "/" + Entity.getMaxHealth(getPlayerEnt()) + " ❤", true);
				healthDisplayLayout.addView(healthDisplayView);
				
				healthDisplayUI = new PopupWindow_(healthDisplayLayout, dip2px(40), dip2px(40));
				healthDisplayUI.setTouchable(false);
				healthDisplayUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				healthDisplayUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.BOTTOM, 0, 0);
			} catch(exception) {
				print(exception);
				VertexClientPE.showBugReportDialog(exception);
			}
		}
	}));
}

const rotationtpopx_def = 0, rotationtpopy_def = dip2px(120);
var rotationtpopx = rotationtpopx_def, rotationtpopy = rotationtpopy_def;
var rotationmX, rotationmY;
var rotationdown = false;

function showRotationPlus() {
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				let rotationPlusLayout = new LinearLayout_(CONTEXT);
				rotationPlusLayout.setOrientation(1);
				let rotationPlusLayoutTop = new LinearLayout_(CONTEXT);
				rotationPlusLayoutTop.setOrientation(LinearLayout_.HORIZONTAL);
				rotationPlusLayoutTop.setGravity(Gravity_.CENTER);
				let rotationPlusLayoutMiddle = new LinearLayout_(CONTEXT);
				rotationPlusLayoutMiddle.setOrientation(LinearLayout_.HORIZONTAL);
				let rotationPlusLayoutBottom = new LinearLayout_(CONTEXT);
				rotationPlusLayoutBottom.setOrientation(LinearLayout_.HORIZONTAL);
				rotationPlusLayoutBottom.setGravity(Gravity_.CENTER);
				
				rotationPlusLayout.addView(rotationPlusLayoutTop);
				rotationPlusLayout.addView(rotationPlusLayoutMiddle);
				rotationPlusLayout.addView(rotationPlusLayoutBottom);
				
				let rotationPlusTopCenterView = clientButton("\u21E7");
				rotationPlusTopCenterView.setLayoutParams(new LinearLayout_.LayoutParams(dip2px(40), dip2px(40)));
				rotationPlusTopCenterView.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						let newPitch = getPitch() - 45;
						Entity.setRot(getPlayerEnt(), getYaw(), newPitch);
					}
				}));
				
				let rotationPlusMiddleLeftView = clientButton("\u21E6");
				rotationPlusMiddleLeftView.setLayoutParams(new LinearLayout_.LayoutParams(dip2px(40), dip2px(40)));
				rotationPlusMiddleLeftView.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						Entity.setRot(getPlayerEnt(), getYaw() - 90, getPitch());
					}
				}));
				
				let rotationPlusMiddleCenterView = clientTextView("MOVE");
				rotationPlusMiddleCenterView.setLayoutParams(new LinearLayout_.LayoutParams(dip2px(40), dip2px(40)));
				rotationPlusMiddleCenterView.setOnLongClickListener(new View_.OnLongClickListener() {
					onLongClick(v, t) {
						rotationdown = true;
						VertexClientPE.toast("Now you can move the menu!");
						return true;
					}
				});
				rotationPlusMiddleCenterView.setOnTouchListener(new View_.OnTouchListener({
					onTouch(v, e) {
						if (!rotationdown) {
							rotationmX = e.getX();
							rotationmY = e.getY();
						}
						if (rotationdown) {
							var a = e.getAction();
							if (a == 2) {
								var X = parseInt(e.getX() - rotationmX) * -1 / 10;
								var Y = parseInt(e.getY() - rotationmY) * -1 / 10;
								rotationtpopx = rotationtpopx + X;
								rotationtpopy = rotationtpopy + Y;
								rotationPlusUI.update(parseInt(rotationtpopx), parseInt(rotationtpopy), -1, -1);
							}
							if (a == 1) rotationdown = false;
						}
						return false;
					}
				}));
				
				let rotationPlusMiddleRightView = clientButton("\u21E8");
				rotationPlusMiddleRightView.setLayoutParams(new LinearLayout_.LayoutParams(dip2px(40), dip2px(40)));
				rotationPlusMiddleRightView.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						Entity.setRot(getPlayerEnt(), getYaw() + 90, getPitch());
					}
				}));
				
				let rotationPlusBottomCenterView = clientButton("\u21E9");
				rotationPlusBottomCenterView.setLayoutParams(new LinearLayout_.LayoutParams(dip2px(40), dip2px(40)));
				rotationPlusBottomCenterView.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						let newPitch = getPitch() + 45;
						Entity.setRot(getPlayerEnt(), getYaw(), newPitch);
					}
				}));
				
				rotationPlusLayoutTop.addView(rotationPlusTopCenterView);
				rotationPlusLayoutMiddle.addView(rotationPlusMiddleLeftView);
				rotationPlusLayoutMiddle.addView(rotationPlusMiddleCenterView);
				rotationPlusLayoutMiddle.addView(rotationPlusMiddleRightView);
				rotationPlusLayoutBottom.addView(rotationPlusBottomCenterView);
				
				rotationPlusUI = new PopupWindow_(rotationPlusLayout, dip2px(120), dip2px(120));
				rotationPlusUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				rotationPlusUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.BOTTOM, rotationtpopx, rotationtpopy);
			} catch(exception) {
				print(exception);
				VertexClientPE.showBugReportDialog(exception);
			}
		}
	}));
}

function showPauseUtilities() {
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				var pauseUtilitiesLayout = new LinearLayout_(CONTEXT);
				var playerViewButton = clientButton("F5");
				playerViewButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(Launcher.isToolbox()) {
							var currentView = ModPE.getPlayerViewPerspective();
							if(currentView < 2) {
								ModPE.setPlayerViewPerspective(currentView + 1);
							} else {
								ModPE.setPlayerViewPerspective(0);
							}
						} else {
							VertexClientPE.toast("Sorry, this feature only works on Toolbox!");
						}
					}
				}));
				pauseUtilitiesLayout.addView(playerViewButton);
				
				pauseUtilitiesUI = new PopupWindow_(pauseUtilitiesLayout, dip2px(40), dip2px(40));
				pauseUtilitiesUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				pauseUtilitiesUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, dip2px(80));
			} catch(exception) {
				print(exception);
				VertexClientPE.showBugReportDialog(exception);
			}
		}
	}));
}

var itemSlot = 0;
var hasPushed = 0;
var isChestOpen = false;

VertexClientPE.stealChestContent = function(x, y, z) {
	new Handler_()
		.postDelayed(new Runnable_({
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
	CONTEXT.runOnUiThread(new Runnable_({
			run: function() {
				var chestLayout = new LinearLayout_(CONTEXT);
				var chestStealButton = clientButton("Steal");
				chestStealButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						hasPushed = true;
					}
				}));
				chestLayout.addView(chestStealButton);
				chestUI = new PopupWindow_(chestLayout, dip2px(40), dip2px(40));
				chestUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				chestUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
			}
	 }));
}

VertexClientPE.hideChestUI = function() {
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			chestUI.dismiss();
		}
	}));
}

var backScreenUI;
var exitScreenUI;

VertexClientPE.showExitButtons = function(showBackButton) {
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				var backScreenUILayout = new LinearLayout_(CONTEXT);
				var backScreenUIButton = new Button_(CONTEXT);
				backScreenUIButton.setText("<");//Text
				backScreenUIButton.getBackground().setColorFilter(Color_.parseColor("#00BFFF"), PorterDuff_.Mode.MULTIPLY);
				backScreenUIButton.setTextColor(Color_.WHITE);
				backScreenUIButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						backScreenUI.dismiss(); //Close
						exitScreenUI.dismiss(); //Close
						screenUI.dismiss(); //Close
						dashboardScreen();
					}
				}));
				backScreenUILayout.addView(backScreenUIButton);
				
				var xScreenUILayout = new LinearLayout_(CONTEXT);
				var xScreenUIButton = new Button_(CONTEXT);
				xScreenUIButton.setText('X');//Text
				xScreenUIButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
				xScreenUIButton.setTextColor(Color_.WHITE);
				xScreenUIButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(showBackButton) {
							backScreenUI.dismiss(); //Close
						}
						exitScreenUI.dismiss(); //Close
						screenUI.dismiss(); //Close
						showMenuButton();
					}
				}));
				xScreenUILayout.addView(xScreenUIButton);
				
				if(showBackButton) {
					backScreenUI = new PopupWindow_(backScreenUILayout, dip2px(40), dip2px(40));
					backScreenUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
					backScreenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
				}
				
				exitScreenUI = new PopupWindow_(xScreenUILayout, dip2px(40), dip2px(40));
				exitScreenUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				exitScreenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
			} catch(exception) {
				print(exception);
				VertexClientPE.showBugReportDialog(exception);
			}
		}
	}));
}

var xWebBrowserButton;
var setStartPageWebBrowserButton;

function overlayWebBrowser() {
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				var backPageWebBrowserLayout = new LinearLayout_(CONTEXT);
				var backPageWebBrowserButton = new Button_(CONTEXT);
				backPageWebBrowserButton.setText("\u2190");//Text
				backPageWebBrowserButton.getBackground().setColorFilter(Color_.parseColor("#0B6138"), PorterDuff_.Mode.MULTIPLY);
				backPageWebBrowserButton.setTextColor(Color_.WHITE);
				backPageWebBrowserButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(webBrowserWebView != null) {
							if(webBrowserWebView.canGoBack()) {
								webBrowserWebView.goBack();
							} else {
								VertexClientPE.toast("Can't go any further!");
							}
						}
					}
				}));
				backPageWebBrowserLayout.addView(backPageWebBrowserButton);
				
				var forwardPageWebBrowserLayout = new LinearLayout_(CONTEXT);
				var forwardPageWebBrowserButton = new Button_(CONTEXT);
				forwardPageWebBrowserButton.setText("\u2192");//Text
				forwardPageWebBrowserButton.getBackground().setColorFilter(Color_.parseColor("#0B6138"), PorterDuff_.Mode.MULTIPLY);
				forwardPageWebBrowserButton.setTextColor(Color_.WHITE);
				forwardPageWebBrowserButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(webBrowserWebView.canGoForward()) {
							webBrowserWebView.goForward();
						} else {
							VertexClientPE.toast("Can't go any further!");
						}
					}
				}));
				forwardPageWebBrowserLayout.addView(forwardPageWebBrowserButton);
				
				var reloadWebBrowserLayout = new LinearLayout_(CONTEXT);
				var reloadWebBrowserButton = new Button_(CONTEXT);
				reloadWebBrowserButton.setText("\u21BB");//Text
				reloadWebBrowserButton.getBackground().setColorFilter(Color_.parseColor("#0B6138"), PorterDuff_.Mode.MULTIPLY);
				reloadWebBrowserButton.setTextColor(Color_.WHITE);
				reloadWebBrowserButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(webBrowserWebView != null) {
							webBrowserWebView.reload();
						}
					}
				}));
				reloadWebBrowserLayout.addView(reloadWebBrowserButton);
				
				var urlBarWebBrowserLayout = new LinearLayout_(CONTEXT);
				var urlBarWebBrowserButton = new Button_(CONTEXT);
				urlBarWebBrowserButton.setText("...");//Text
				urlBarWebBrowserButton.getBackground().setColorFilter(Color_.parseColor("#0B6138"), PorterDuff_.Mode.MULTIPLY);
				urlBarWebBrowserButton.setTextColor(Color_.WHITE);
				urlBarWebBrowserButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						VertexClientPE.showURLBarDialog();
					}
				}));
				urlBarWebBrowserLayout.addView(urlBarWebBrowserButton);
				
				var devWebBrowserLayout = new LinearLayout_(CONTEXT);
				var devWebBrowserButton = new Button_(CONTEXT);
				devWebBrowserButton.setText("F12");//Text
				devWebBrowserButton.getBackground().setColorFilter(Color_.parseColor("#0B6138"), PorterDuff_.Mode.MULTIPLY);
				devWebBrowserButton.setTextColor(Color_.WHITE);
				devWebBrowserButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						VertexClientPE.showF12Dialog();
						VertexClientPE.toast("Still work in progress!");
					}
				}));
				devWebBrowserLayout.addView(devWebBrowserButton);
				
				var xWebBrowserLayout = new LinearLayout_(CONTEXT);
				xWebBrowserButton = new Button_(CONTEXT);
				xWebBrowserButton.setText("X");//Text
				xWebBrowserButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
				xWebBrowserButton.setTextColor(Color_.WHITE);
				xWebBrowserButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						backPageWebBrowserUI.dismiss(); //Close
						forwardPageWebBrowserUI.dismiss(); //Close
						reloadWebBrowserUI.dismiss(); //Close
						urlBarWebBrowserUI.dismiss(); //Close
						devWebBrowserUI.dismiss(); //Close
						exitWebBrowserUI.dismiss(); //Close
						screenUI.dismiss(); //Close
						showMenuButton();
					}
				}));
				xWebBrowserLayout.addView(xWebBrowserButton);
				
				backPageWebBrowserUI = new PopupWindow_(backPageWebBrowserLayout, dip2px(40), dip2px(40));
				backPageWebBrowserUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				backPageWebBrowserUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
				
				forwardPageWebBrowserUI = new PopupWindow_(forwardPageWebBrowserLayout, dip2px(40), dip2px(40));
				forwardPageWebBrowserUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				forwardPageWebBrowserUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, dip2px(40), 0);
				
				reloadWebBrowserUI = new PopupWindow_(reloadWebBrowserLayout, dip2px(40), dip2px(40));
				reloadWebBrowserUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				reloadWebBrowserUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, dip2px(80), 0);
				
				urlBarWebBrowserUI = new PopupWindow_(urlBarWebBrowserLayout, dip2px(40), dip2px(40));
				urlBarWebBrowserUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				urlBarWebBrowserUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, dip2px(120), 0);
				
				devWebBrowserUI = new PopupWindow_(devWebBrowserLayout, dip2px(60), dip2px(40));
				devWebBrowserUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				if(VertexClientPE.isDevMode()) {
					devWebBrowserUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, dip2px(160), 0);
				}
				
				exitWebBrowserUI = new PopupWindow_(xWebBrowserLayout, dip2px(40), dip2px(40));
				exitWebBrowserUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				exitWebBrowserUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
			} catch(exception) {
				print(exception);
				VertexClientPE.showBugReportDialog(exception);
			}
		}
	}));
}

function startDestroyBlock() {
	if(preventDiggingSetting == "on") {
		preventDefault();
	}
}
	
function destroyBlock(x, y, z, side) {
	if(preventDiggingSetting == "on") {
		preventDefault();
		return;
	}
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
		}
	}
	if(tile == 54) {
		if(chestESPState) {
			new Thread_(new Runnable_({
				run: function() {
					VertexClientPE.toast("Removing chest from chest list...");
					Thread_.sleep(1200);
					VertexClientPE.Utils.chests.forEach(function(element, index, array) {
						if(element.x == x && element.y == y && element.z == z) {
							array.splice(index, 1);
							return;
						}
					});
				}
			})).start();
		}
	}
}

function blockEventHook(x, y, z, e, d) {
	if(VertexClientPE.isExpMode()) {
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
