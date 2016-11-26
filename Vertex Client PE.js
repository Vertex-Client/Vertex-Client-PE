/**
 * ##################################################################################################
 * @name Vertex Client PE
 * @version v1.10
 * @author peacestorm (@AgameR_Modder)
 * @credits _TXMO, MyNameIsTriXz, Godsoft029, ArceusMatt, LPMG, Astro36
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
var SeekBar = android.widget.SeekBar;
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
var sizeSetting = "normal";
var fancyChatMode = "default";
var tapNukerRange = 3;
var menuType = "normal";
var chestTracersRange = 10;
var tabGUIModeSetting = "on";
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
var showMoneyToastsSetting = "on";
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
//------------------------------------
var combatName = "Combat";
var buildingName = "Building";
var movementName = "Movement";
var chatName = "Chat";
var miscName = "Misc";
//End of settings

var modButtonColorBlocked = Color_.RED;
var modButtonColorEnabled = Color_.GREEN;
var modButtonColorDisabled = Color_.WHITE;

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

var Launcher = {
    isBlockLauncher: function() {
        return (CONTEXT.getPackageName() == "net.zhuoweizhang.mcpelauncher" || CONTEXT.getPackageName() == "net.zhuoweizhang.mcpelauncher.pro");
    },
    isToolbox: function() {
        return CONTEXT.getPackageName() == "io.mrarm.mctoolbox";
    },
    isMcpeMaster: function() {
        return CONTEXT.getPackageName() == "com.mcbox.pesdkb.mcpelauncher";
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
        var dirVector = this.getDirectionalVectorFromEntity(Player.getEntity());
        var playerPos = new Vector3(Player.getX(), Player.getY(), Player.getZ());
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
        Entity.setPosition(Player.getEntity(), position.x, position.y, position.z);
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

var currentScreen = ScreenType.start_screen;

function screenChangeHook(screenName) {
    if(screenName == ScreenType.hud || screenName == ScreenType.ingame) {
        if((hacksList == null || !hacksList.isShowing()) && !VertexClientPE.menuIsShowing) {
            showHacksList();
            showTabGUI();
			showShortcuts();
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
		if(screenName == ScreenType.start_screen) {
			if((mainMenuTextList == null || !mainMenuTextList.isShowing()) && !VertexClientPE.menuIsShowing && !VertexClientPE.playerIsInGame) {
				VertexClientPE.showStartScreenBar();
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
    customTiles: new JSONArray_(),
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
			}
		}
    },
    CombatUtils: {
		aimAt: function(x, y, z) {
            // Credits to Godsoft0329 aka the developer of DragOP
            var velocity = 1;
            var posX = x - Player.getX();
            var posY = y - Player.getY();
            var posZ = z - Player.getZ();
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
		}
    }
};

VertexClientPE.menuIsShowing = false;
VertexClientPE.isPaused = false;

VertexClientPE.trailsMode = "off";

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

var _0x199a=["\x69\x73\x50\x72\x6F","\x67\x65\x74\x50\x72\x65\x66\x65\x72\x65\x6E\x63\x65\x73","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x69\x73\x50\x72\x6F","\x67\x65\x74\x53\x74\x72\x69\x6E\x67","\x73\x65\x74\x49\x73\x50\x72\x6F","\x54\x68\x69\x73\x49\x73\x53\x70\x61\x72\x74\x61"];VertexClientPE[_0x199a[0]]=function(){var _0xf36dx1=CONTEXT[_0x199a[1]](CONTEXT.MODE_PRIVATE);return _0xf36dx1[_0x199a[3]](_0x199a[2],null)};VertexClientPE[_0x199a[4]]=function(){var _0xf36dx2=_0x199a[5];return _0xf36dx2}

var _0xda74=["\x68\x61\x73\x45\x61\x72\x6E\x65\x64\x50\x72\x6F\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x67\x65\x74\x50\x72\x65\x66\x65\x72\x65\x6E\x63\x65\x73","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x68\x61\x73\x45\x61\x72\x6E\x65\x64\x50\x72\x6F\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x67\x65\x74\x53\x74\x72\x69\x6E\x67","\x74\x72\x75\x65"];VertexClientPE[_0xda74[0]]= function(){var _0xdb22x1=CONTEXT[_0xda74[1]](CONTEXT.MODE_PRIVATE);if(_0xdb22x1[_0xda74[3]](_0xda74[2],null)== _0xda74[4]){return true}else {return false}}

var _0xb21b=["\x67\x65\x74\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x67\x65\x74\x50\x72\x65\x66\x65\x72\x65\x6E\x63\x65\x73","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x76\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x67\x65\x74\x49\x6E\x74"];VertexClientPE[_0xb21b[0]]= function(){var _0x602dx1=CONTEXT[_0xb21b[1]](CONTEXT.MODE_PRIVATE);var _0x602dx2=_0x602dx1[_0xb21b[3]](_0xb21b[2],0);return _0x602dx2}

var _0xe844=["\x67\x69\x76\x65\x50\x72\x6F\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x68\x61\x73\x45\x61\x72\x6E\x65\x64\x50\x72\x6F\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x67\x65\x74\x50\x72\x65\x66\x65\x72\x65\x6E\x63\x65\x73","\x65\x64\x69\x74","\x67\x65\x74\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x76\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x70\x75\x74\x49\x6E\x74","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x68\x61\x73\x45\x61\x72\x6E\x65\x64\x50\x72\x6F\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x74\x72\x75\x65","\x70\x75\x74\x53\x74\x72\x69\x6E\x67","\x63\x6F\x6D\x6D\x69\x74","\x69\x73\x44\x65\x76\x4D\x6F\x64\x65","\x47\x61\x76\x65\x20\x70\x72\x6F\x20\x63\x61\x73\x68","\x41\x6C\x72\x65\x61\x64\x79\x20\x67\x61\x76\x65\x20\x70\x72\x6F\x20\x63\x61\x73\x68"];VertexClientPE[_0xe844[0]]= function(){if(!VertexClientPE[_0xe844[1]]()){var _0x3b1cx1=CONTEXT[_0xe844[2]](CONTEXT.MODE_PRIVATE);var _0x3b1cx2=_0x3b1cx1[_0xe844[3]]();var _0x3b1cx3=VertexClientPE[_0xe844[4]]();_0x3b1cx2[_0xe844[6]](_0xe844[5],_0x3b1cx3+ 500);_0x3b1cx2[_0xe844[9]](_0xe844[7],_0xe844[8]);_0x3b1cx2[_0xe844[10]]();if(VertexClientPE[_0xe844[11]]()){print(_0xe844[12])}}else {if(VertexClientPE[_0xe844[11]]()){print(_0xe844[13])}}}

var _0xc116=["\x73\x65\x74\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x76\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x70\x75\x74\x49\x6E\x74","\x63\x6F\x6D\x6D\x69\x74"];VertexClientPE[_0xc116[0]]= function(_0x5824x1){editor[_0xc116[2]](_0xc116[1],_0x5824x1);editor[_0xc116[3]]()}

VertexClientPE.isRemote = function() {
	return Server.getAddress() != null;
}

VertexClientPE.playerIsInGame = false;

VertexClientPE.currentVersion = "1.10";
VertexClientPE.currentVersionDesc = "The Christmas Update";
VertexClientPE.targetVersion = "MCPE v0.16.x alpha";
VertexClientPE.minVersion = "0.16.0";
VertexClientPE.edition = "Normal";
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
var chestESPState = false;
var speedHackState = false;

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

var tts = new TextToSpeech_(CONTEXT, new TextToSpeech_.OnInitListener({
    onInit: function(status) {
        tts.setLanguage(Locale_.US);
    }
}));

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
				Level.playSoundEnt(Player.getEntity(), "random.click", 100, 0);
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

MinecraftButtonLibrary.changeToNormalState = function(button, customTextColor)
{
	MinecraftButtonLibrary.setButtonBackground(button, MinecraftButtonLibrary.ProcessedResources.mcNormalNineDrawable);
	button.setTextColor(android.graphics.Color.parseColor(customTextColor));
	MinecraftButtonLibrary.setShadowToMinecraftFont(button, MinecraftButtonLibrary.defaultButtonTextShadowColor, MinecraftButtonLibrary.defaultButtonTextLineSpacing);

	// reset pressed padding
	if(MinecraftButtonLibrary.shouldDisplayPaddingAnimationWhenPressed)
		button.setPadding(MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding));
}

MinecraftButtonLibrary.changeToPressedState = function(button)
{
	MinecraftButtonLibrary.setButtonBackground(button, MinecraftButtonLibrary.ProcessedResources.mcPressedNineDrawable);
	button.setTextColor(android.graphics.Color.parseColor(MinecraftButtonLibrary.defaultButtonTextPressedColor));
	MinecraftButtonLibrary.setShadowToMinecraftFont(button, MinecraftButtonLibrary.defaultButtonTextPressedShadowColor, MinecraftButtonLibrary.defaultButtonTextLineSpacing);

	// make the effect of a pressed button with padding
	if(MinecraftButtonLibrary.shouldDisplayPaddingAnimationWhenPressed)
		button.setPadding(MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding) + MinecraftButtonLibrary.convertDpToPixel(2), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding) - MinecraftButtonLibrary.convertDpToPixel(2));
}
// ######### END - BUTTON UTILS functions #########


// ######### CREATE NINE PATCH functions #########
MinecraftButtonLibrary.createNinePatchFromRaw = function(bitmap, top, left, bottom, right)
{
	var buffer = MinecraftButtonLibrary.createNinePatchBuffer(top, left, bottom, right);
	return new android.graphics.drawable.NinePatchDrawable(MinecraftButtonLibrary.context.getResources(), bitmap, buffer.array(), new android.graphics.Rect(), "");
}

MinecraftButtonLibrary.createNinePatchBuffer = function(top, left, bottom, right)
{
	// source https://gist.github.com/briangriffey/4391807

	var NO_COLOR = 0x00000001;
	var buffer = java.nio.ByteBuffer.allocate(84).order(java.nio.ByteOrder.nativeOrder());

	//was translated
	buffer.put(0x01);

	//divx size
	buffer.put(0x02);

	//divy size
	buffer.put(0x02);

	//color size
	buffer.put(0x09);

	//skip
	buffer.putInt(0);
	buffer.putInt(0);
	
	//padding
	buffer.putInt(0);
	buffer.putInt(0);
	buffer.putInt(0);
	buffer.putInt(0);

	//skip 4 bytes
	buffer.putInt(0);

	buffer.putInt(left);
	buffer.putInt(right);
	buffer.putInt(top);
	buffer.putInt(bottom);
	buffer.putInt(NO_COLOR);
	buffer.putInt(NO_COLOR);
	buffer.putInt(NO_COLOR);
	buffer.putInt(NO_COLOR);
	buffer.putInt(NO_COLOR);
	buffer.putInt(NO_COLOR);
	buffer.putInt(NO_COLOR);
	buffer.putInt(NO_COLOR);
	buffer.putInt(NO_COLOR);

	return buffer;
}

MinecraftButtonLibrary.createButtonNormalNinePatch = function()
{
	var bitmap = android.graphics.Bitmap.createBitmap(MinecraftButtonLibrary.getImageFromTexturePack("images/gui/spritesheet.png"), 8, 32, 8, 8); // get only the correct image from the spritesheet
	var scaledBitmap = MinecraftButtonLibrary.scaleBitmapToSize(bitmap, MinecraftButtonLibrary.convertDpToPixel(16), MinecraftButtonLibrary.convertDpToPixel(16)); // scale image to a bigger size and based on density

	MinecraftButtonLibrary.ProcessedResources.mcNormalNineDrawable = MinecraftButtonLibrary.createNinePatchFromRaw(scaledBitmap, MinecraftButtonLibrary.convertDpToPixel(4), MinecraftButtonLibrary.convertDpToPixel(4), MinecraftButtonLibrary.convertDpToPixel(12), MinecraftButtonLibrary.convertDpToPixel(14)); // convert to NinePatch
}

MinecraftButtonLibrary.createButtonPressedNinePatch = function()
{
	var bitmap = android.graphics.Bitmap.createBitmap(MinecraftButtonLibrary.getImageFromTexturePack("images/gui/spritesheet.png"), 0, 32, 8, 8); // get only the correct image from the spritesheet
	var scaledBitmap = MinecraftButtonLibrary.scaleBitmapToSize(bitmap, MinecraftButtonLibrary.convertDpToPixel(16), MinecraftButtonLibrary.convertDpToPixel(16)); // scale image to a bigger size and based on density

	MinecraftButtonLibrary.ProcessedResources.mcPressedNineDrawable = MinecraftButtonLibrary.createNinePatchFromRaw(scaledBitmap, MinecraftButtonLibrary.convertDpToPixel(4), MinecraftButtonLibrary.convertDpToPixel(4), MinecraftButtonLibrary.convertDpToPixel(12), MinecraftButtonLibrary.convertDpToPixel(14)); // convert to NinePatch
}
// ######### END - CREATE NINE PATCH functions #########



MinecraftButtonLibrary.writeFileFromByteArray = function(byteArray, path)
{
	var file = new java.io.File(path);
	if(file.exists())
		file['delete']();
	file.createNewFile();
	var stream = new java.io.FileOutputStream(file);
	stream.write(byteArray);
	stream.close();
	byteArray = null;
}
// ######### END - CREATE TYPEFACE functions #########


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


//########################################################################################################################################################
// START CREATION OF RESOURCES
//########################################################################################################################################################

new java.lang.Thread(new java.lang.Runnable()
{
	run: function()
	{
		try
		{
			MinecraftButtonLibrary.createButtonNormalNinePatch();
			MinecraftButtonLibrary.createButtonPressedNinePatch();
		} catch(e)
		{
			print("Error " + e);
		}
	}
}).start();

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
    gl.glTranslatef(-x, -y, -z);
}

var userIsNewToCurrentVersion = false;

var mainMenuTextList;
var GUI;
var accountManager;
var accountManagerGUI;
var backAccountManagerUI;
var exitAccountManagerUI;
var menu;
var fullScreenMenu;
var exitUI;
var exitWebBrowserUI;
var reloadWebBrowserUI;
var exitDashboardUI;
var pauseUtilitiesUI;
var vertexclientpemiscmenu;
var dashboardMenu;
var musicPlayerMenu;
var previewMenu;
var updateCenterMenu;
var shopMenu;
var settingsMenu;
var devSettingsMenu;
var helpMenu;
var addonMenu;
var milestonesMenu;
var updateCenterMenu;
var webBrowserMenu;
var playerCustomizerMenu;
var optiFineMenu;
var informationMenu;
var menuBar;
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
VertexClientPE.tiles = [];
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

VertexClientPE.registerShopFeature = function(obj) {
    VertexClientPE.shopFeatures.push(obj);
};

VertexClientPE.registerTile = function(obj) {
    VertexClientPE.tiles.push(obj);
};

VertexClientPE.initShopFeatures = function() {
    VertexClientPE.shopFeatures.forEach(function(element, index, array) {
        if(element.bought == "true") {
            element.onUnlock();
        }
    });
};

var settingsTile = {
	text: "Settings",
	color: "green",
	icon: android.R.drawable.ic_menu_preferences,
	forceLightColor: true,
	shouldDismissDashboard: true,
	onClick: function(fromDashboard) {
		settingsScreen();
		exitSettings();
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
		exitInformation();
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
		exitUpdateCenter();
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
		exitMusicPlayer();
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
		exitPreview();
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
		exitMilestones();
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
		exitHelp();
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
		exitAddon();
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
		exitDevSettings();
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
VertexClientPE.registerTile(informationTile);
VertexClientPE.registerTile(updateCenterTile);
VertexClientPE.registerTile(musicPlayerTile);
VertexClientPE.registerTile(previewTile);
VertexClientPE.registerTile(milestonesTile);
VertexClientPE.registerTile(helpTile);
VertexClientPE.registerTile(addonsTile);
VertexClientPE.registerTile(shareTile);
VertexClientPE.registerTile(blockLauncherSettingsTile);
VertexClientPE.registerTile(devSettingsTile);
VertexClientPE.registerTile(restartTile);
VertexClientPE.registerTile(shutdownTile);

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

function registerAddon(name, desc, current_version, target_version, mods, songs, tiles) {
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
		if(VertexClientPE.menuIsShowing) {
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
		if(hacksList != null && hacksList.isShowing()) {
            updateHacksList();
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
        if(VertexClientPE.menuIsShowing) {
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
    getSettingsLayout: function() {
        var killAuraSettingsLayout = new LinearLayout_(CONTEXT);
        killAuraSettingsLayout.setOrientation(1);
        var killAuraRangeTitle = clientTextView("Range: | " + killAuraRange);
        var killAuraRangeSlider = new SeekBar(CONTEXT);
        killAuraRangeSlider.setProgress(killAuraRange);
        killAuraRangeSlider.setMax(10);
        killAuraRangeSlider.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
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
        var timerSettingsLayout = new LinearLayout_(CONTEXT);
        timerSettingsLayout.setOrientation(1);
        var timerSpeedTitle = clientTextView("Speed: | " + timerSpeed + " * 20 ticks");
        var timerSpeedSlider = new SeekBar(CONTEXT);
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
    desc: "Automatically destroys blocks around you. Can be used on servers when YesCheat+ is enabled.",
    category: VertexClientPE.category.BUILDING,
    type: "Mod",
    state: false,
    getSettingsLayout: function() {
        var nukerSettingsLayout = new LinearLayout_(CONTEXT);
        nukerSettingsLayout.setOrientation(1);
        var nukerRangeTitle = clientTextView("Range: | " + nukerRange);
        var nukerRangeSlider = new SeekBar(CONTEXT);
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
        nukerModeCubeButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 6, display.heightPixels / 10));
        var nukerModeFlatButton = clientButton("Flat", "Flat mode which flats the ground");
        nukerModeFlatButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 6, display.heightPixels / 10));
        var nukerModeSmashButton = clientButton("Smash", "Smash mode which only breaks blocks with a destroy time of 0");
        nukerModeSmashButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 6, display.heightPixels / 10));
        
        var nukerRangeTitle = clientTextView("Range: | " + nukerRange);
        var nukerModeLayout = new LinearLayout_(CONTEXT);
        nukerModeLayout.setOrientation(LinearLayout_.HORIZONTAL);
        
        var nukerModeLayoutLeft = new LinearLayout_(CONTEXT);
        nukerModeLayoutLeft.setOrientation(1);
        nukerModeLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
        nukerModeLayoutLeft.setGravity(Gravity_.CENTER_HORIZONTAL);
        nukerModeLayout.addView(nukerModeLayoutLeft);
        
        var nukerModeLayoutCenter = new LinearLayout_(CONTEXT);
        nukerModeLayoutCenter.setOrientation(1);
        nukerModeLayoutCenter.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
        nukerModeLayoutCenter.setGravity(Gravity_.CENTER_HORIZONTAL);
        nukerModeLayout.addView(nukerModeLayoutCenter);
        
        var nukerModeLayoutRight = new LinearLayout_(CONTEXT);
        nukerModeLayoutRight.setOrientation(1);
        nukerModeLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
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
        nuke(x, y, z, nukerRange);
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
            tts.speak(msg, TextToSpeech_.QUEUE_FLUSH, null);
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
        var autoSpammerMessageLayout = new LinearLayout_(CONTEXT);
        autoSpammerMessageLayout.setOrientation(1);
        var autoSpammerMessageTitle = clientTextView("Message:");
        var spamMessageInput = clientEditText();
        spamMessageInput.setText(spamMessage);
        spamMessageInput.setTextColor(Color_.WHITE);
        spamMessageInput.setHint("Spam message");
        spamMessageInput.addTextChangedListener(new TextWatcher_() {
            onTextChanged: function() {
                spamMessage = spamMessageInput.getText();
            }
        });
        autoSpammerMessageLayout.addView(autoSpammerMessageTitle);
        autoSpammerMessageLayout.addView(spamMessageInput);
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
        if(yesCheatPlusState) {
            Server.sendChat(" ");
        }
    }
}

var delaySpammer = {
    name: "DelaySpammer",
    desc: "Automatically spams the chat with a delay and randomly generated messages.",
    category: VertexClientPE.category.CHAT,
    type: "Mod",
    state: false,
    getSettingsLayout: function() {
        var delaySpammerDelayTimeLayout = new LinearLayout_(CONTEXT);
        delaySpammerDelayTimeLayout.setOrientation(1);
        var delaySpammerDelayTimeTitle = clientTextView("Delay time: | " + spamDelayTime + " seconds");
        var delaySpammerDelayTimeSlider = new SeekBar_(CONTEXT);
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
			var players = Server.getAllPlayers();
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
                    break;
                }
            }
			for(var i = 0; i < players.length; i++) {
                var x = Entity.getX(players[i]) - getPlayerX();
                var y = Entity.getY(players[i]) - getPlayerY();
                var z = Entity.getZ(players[i]) - getPlayerZ();
                if(x*x+y*y+z*z<=10*10 && players[i] != getPlayerEnt() && Entity.getEntityTypeId(players[i]) != EntityType.ARROW && Entity.getEntityTypeId(players[i]) != EntityType.BOAT && Entity.getEntityTypeId(players[i]) != EntityType.EGG && Entity.getEntityTypeId(players[i]) != EntityType.EXPERIENCE_ORB && Entity.getEntityTypeId(players[i]) != EntityType.EXPERIENCE_POTION && Entity.getEntityTypeId(players[i]) != EntityType.FALLING_BLOCK && Entity.getEntityTypeId(players[i]) != EntityType.FIREBALL && Entity.getEntityTypeId(players[i]) != EntityType.FISHING_HOOK && Entity.getEntityTypeId(players[i]) != EntityType.ITEM && Entity.getEntityTypeId(players[i]) != EntityType.LIGHTNING_BOLT && Entity.getEntityTypeId(players[i]) != EntityType.MINECART && Entity.getEntityTypeId(players[i]) != EntityType.PAINTING && Entity.getEntityTypeId(players[i]) != EntityType.PRIMED_TNT && Entity.getEntityTypeId(players[i]) != EntityType.SMALL_FIREBALL && Entity.getEntityTypeId(players[i]) != EntityType.SNOWBALL && Entity.getEntityTypeId(players[i]) != EntityType.THROWN_POTION) {
                    if(x*x+y*y+z*z>=2*2) {
                        setVelX(getPlayerEnt(), x * 0.05);
                        setVelZ(getPlayerEnt(), z * 0.05);
                        setVelY(getPlayerEnt(), y * 0.05);
                    }
                    break;
                }
            }
			followStage = 0;
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
        var tapNukerSettingsLayout = new LinearLayout_(CONTEXT);
        tapNukerSettingsLayout.setOrientation(1);
        var tapNukerRangeTitle = clientTextView("Range: | " + tapNukerRange);
        var tapNukerRangeSlider = new SeekBar(CONTEXT);
        tapNukerRangeSlider.setProgress(tapNukerRange);
        tapNukerRangeSlider.setMax(10);
        tapNukerRangeSlider.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
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
        Entity.setVelY(getPlayerEnt(), 0.64);
    }
}

var arrowGun = {
    name: "ArrowGun",
    desc: "Automatically shoots arrows wherever you look.",
    category: VertexClientPE.category.COMBAT,
    type: "Mod",
    state: false,
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
        arrowGunModeLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2, display.heightPixels / 10));
        arrowGunModeLayoutLeft.setGravity(Gravity_.CENTER_HORIZONTAL);
        arrowGunModeLayout.addView(arrowGunModeLayoutLeft);
        
        var arrowGunModeLayoutRight = new LinearLayout_(CONTEXT);
        arrowGunModeLayoutRight.setOrientation(1);
        arrowGunModeLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2, display.heightPixels / 10));
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
        var arrow = Level.spawnMob(Player.getX() + xx, Player.getY() + zz, Player.getZ() + yy, 80);
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
        //var fps = parseInt(VertexClientPE.Utils.fps);
        ModPE.showTipMessage("\n\n\n" + "X: " + x + " Y: " + y + " Z: " + z);
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
        autoWalkDirectionLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2, display.heightPixels / 10));
        autoWalkDirectionLayoutLeft.setGravity(Gravity_.CENTER_HORIZONTAL);
        autoWalkDirectionLayout.addView(autoWalkDirectionLayoutLeft);
        
        var autoWalkDirectionLayoutRight = new LinearLayout_(CONTEXT);
        autoWalkDirectionLayoutRight.setOrientation(1);
        autoWalkDirectionLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2, display.heightPixels / 10));
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
        var player = getPlayerEnt();
		var xVel = playerWalkSpeed * playerDir[0];
		var yVel = playerWalkSpeed * playerDir[1];
		var zVel = playerWalkSpeed * playerDir[2];
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
                VertexClientPE.saveMainSettings();
            }
        });
		
        var aimbotRangeTitle = clientTextView("Range: | " + aimbotRangeSetting);
        var aimbotRangeSlider = new SeekBar(CONTEXT);
        aimbotRangeSlider.setProgress(aimbotRangeSetting);
        aimbotRangeSlider.setMax(10);
        aimbotRangeSlider.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
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
		var players = Server.getAllPlayers();
        var mobs = Entity.getAll();
		/*if(Launcher.isToolbox()) {
			mobs = mobs.concat(Server.getAllPlayers());
		}*/
        for(var i = 0; i < mobs.length; i++) {
			var x = Entity.getX(mobs[i]) - getPlayerX();
            var y = Entity.getY(mobs[i]) - getPlayerY();
            var z = Entity.getZ(mobs[i]) - getPlayerZ();
			if(aimbotUseKillauraRange == "on" && x*x+y*y+z*z>killAuraRange*killAuraRange) {
				continue;
			} else if(aimbotUseKillauraRange == "off" && x*x+y*y+z*z>aimbotRangeSetting*aimbotRangeSetting) {
				continue;
			}
            var ent = mobs[i];
            if(Entity.getEntityTypeId(ent) != EntityType.ITEM && Entity.getEntityTypeId(ent) != EntityType.ARROW && ent != getPlayerEnt()) {
                VertexClientPE.CombatUtils.aimAtEnt(ent);
				return;
            }
        }
		for(var i = 0; i < players.length; i++) {
			var x = Entity.getX(players[i]) - getPlayerX();
            var y = Entity.getY(players[i]) - getPlayerY();
            var z = Entity.getZ(players[i]) - getPlayerZ();
			if(aimbotUseKillauraRange == "on" && x*x+y*y+z*z>killAuraRange*killAuraRange) {
				continue;
			} else if(aimbotUseKillauraRange == "off" && x*x+y*y+z*z>aimbotRangeSetting*aimbotRangeSetting) {
				continue;
			}
            var ent = players[i];
            if(Entity.getEntityTypeId(ent) != EntityType.ITEM && Entity.getEntityTypeId(ent) != EntityType.ARROW && ent != getPlayerEnt()) {
                VertexClientPE.CombatUtils.aimAtEnt(ent);
				return;
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
        var chestTracersSettingsLayout = new LinearLayout_(CONTEXT);
        chestTracersSettingsLayout.setOrientation(1);
        var chestTracersRangeTitle = clientTextView("Range: | " + chestTracersRange);
        var chestTracersRangeSlider = new SeekBar(CONTEXT);
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
        chestTracersFlameButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 6, display.heightPixels / 10));
        var chestTracersRedstoneButton = clientButton("Redstone", "Redstone particles.");
        chestTracersRedstoneButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 6, display.heightPixels / 10));
        var chestTracersCriticalButton = clientButton("Critical", "Critical hit particles.");
        chestTracersCriticalButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 6, display.heightPixels / 10));
        
        var chestTracersParticleLayout = new LinearLayout_(CONTEXT);
        chestTracersParticleLayout.setOrientation(LinearLayout_.HORIZONTAL);
        
        var chestTracersParticleLayoutLeft = new LinearLayout_(CONTEXT);
        chestTracersParticleLayoutLeft.setOrientation(1);
        chestTracersParticleLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
        chestTracersParticleLayoutLeft.setGravity(Gravity_.CENTER_HORIZONTAL);
        chestTracersParticleLayout.addView(chestTracersParticleLayoutLeft);
        
        var chestTracersParticleLayoutCenter = new LinearLayout_(CONTEXT);
        chestTracersParticleLayoutCenter.setOrientation(1);
        chestTracersParticleLayoutCenter.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
        chestTracersParticleLayoutCenter.setGravity(Gravity_.CENTER_HORIZONTAL);
        chestTracersParticleLayout.addView(chestTracersParticleLayoutCenter);
        
        var chestTracersParticleLayoutRight = new LinearLayout_(CONTEXT);
        chestTracersParticleLayoutRight.setOrientation(1);
        chestTracersParticleLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
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
    desc: "Automatically makes you leave the game when your health is (below) 8.",
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
    category: VertexClientPE.category.BUILDING,
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
        var speedHackFrictionSlider = new SeekBar(CONTEXT);
        speedHackFrictionSlider.setProgress(speedHackFriction * 10 - 1);
        speedHackFrictionSlider.setMax(9);
        speedHackFrictionSlider.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            onProgressChanged: function() {
                speedHackFriction = (speedHackFrictionSlider.getProgress() + 1) / 10;
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
    category: VertexClientPE.category.MISC,
    type: "Mod",
    state: false,
    requiresPro: function() {
        return true;
    },
    getSettingsLayout: function() {
        var chestESPSettingsLayout = new LinearLayout_(CONTEXT);
        chestESPSettingsLayout.setOrientation(1);
        var chestESPRangeTitle = clientTextView("Range: | " + chestESPRange);
        var chestESPRangeSlider = new SeekBar(CONTEXT);
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
        chestESPState = this.state;
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
		this.timer++;
        if(this.timer >= 20) {
            Entity.setSneaking(getPlayerEnt(), !Entity.getIsSneaking(getPlayerEnt()));
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
					Thread_.sleep(100);
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

var tapPoint = {
	name: "TapPoint",
    desc: "Makes you point/aim at blocks on tap.",
    category: VertexClientPE.category.MOVEMENT,
    type: "Mod",
	state: false,
    isStateMod: function() {
        return true;
    },
	onToggle: function() {
        this.state = !this.state;
    },
	onUseItem: function(x, y, z, itemId, blockId, side) {
		VertexClientPE.CombatUtils.aimAtBlock(x, y, z);
	},
	onAttack: function(a, v) {
		if(a == getPlayerEnt()) {
			VertexClientPE.CombatUtils.aimAtEnt(v);
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
	getPrice: function() {
		return 2000;
	},
	onToggle: function() {
        this.state = !this.state;
    },
	onUseItem: function(x, y, z, itemId, blockId, side) {
		preventDefault();
		var randomEnt = Entity.getAll().getRandomElement();
		Entity.setPosition(getPlayerEnt(), Entity.getX(randomEnt), Entity.getY(randomEnt) + 1.8, Entity.getZ(randomEnt));
	}
}

var fullBright = {
	name: "Fullbright",
    desc: "Makes air light up.",
    category: VertexClientPE.category.MISC,
    type: "Mod",
	state: false,
    isStateMod: function() {
        return true;
    },
	getPrice: function() {
		return 1000;
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

var dropLocator = {
	name: "DropLocator",
    desc: "Locate dropped items.",
    category: VertexClientPE.category.MISC,
    type: "Mod",
    isStateMod: function() {
		return false;
    },
	onToggle: function() {
		var items = Entity.getAll();
		new Thread_(new Runnable_({
			run: function() {
				for(var i = 0; i < items.length; i++) {
					if(Entity.getEntityTypeId(items[i]) == EntityType.ITEM) {
						VertexClientPE.clientMessage("Located item at " + parseInt(Entity.getX(items[i])) + " " + parseInt(Entity.getY(items[i])) + " " + parseInt(Entity.getZ(items[i])));
						Thread_.sleep(1000);
					} else {
						continue;
					}
				}
			}
		})).start();
    }
}

var stickyMove = {
    name: "StickyMove",
    desc: "Makes you stick to the ground so that you can't jump or fall (similar to SafeWalk).",
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
		if(VertexClientPE.Utils.Player.onGround()) {
			this.safeVector = new Vector3(getPlayerX(), getPlayerY(), getPlayerZ());
		} else if(!VertexClientPE.Utils.Player.onGround() && this.safeVector != null) {
			Entity.setPosition(getPlayerEnt(), this.safeVector.x, this.safeVector.y, this.safeVector.z);
			this.safeVector = null;
		}
    }
}

//COMBAT
VertexClientPE.registerModule(antiKnockback);
VertexClientPE.registerModule(antiBurn);
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
VertexClientPE.registerModule(noHurt);
VertexClientPE.registerModule(regen);
VertexClientPE.registerModule(tpAura);
//MOVEMENT
VertexClientPE.registerModule(autoTeleporter);
VertexClientPE.registerModule(autoWalk);
VertexClientPE.registerModule(enderProjectiles);
VertexClientPE.registerModule(fastBridge);
VertexClientPE.registerModule(fastWalk);
VertexClientPE.registerModule(flight);
VertexClientPE.registerModule(glide);
VertexClientPE.registerModule(highJump);
VertexClientPE.registerModule(lifeSaver);
VertexClientPE.registerModule(liquidWalk);
VertexClientPE.registerModule(noDownGlide);
//VertexClientPE.registerModule(noInvisBedrock);
VertexClientPE.registerModule(randomTP);
VertexClientPE.registerModule(ride);
VertexClientPE.registerModule(speedHack);
VertexClientPE.registerModule(step);
VertexClientPE.registerModule(stickyMove);
VertexClientPE.registerModule(tapJumpRun);
VertexClientPE.registerModule(tapPoint);
VertexClientPE.registerModule(tapTeleporter);
VertexClientPE.registerModule(timer);
VertexClientPE.registerModule(wallHack);
//BUILDING
VertexClientPE.registerModule(autoBuild);
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
VertexClientPE.registerModule(dropLocator);
VertexClientPE.registerModule(fullBright);
VertexClientPE.registerModule(itemGiver);
VertexClientPE.registerModule(onlyDay);
VertexClientPE.registerModule(orderAPizza);
VertexClientPE.registerModule(remoteView);
VertexClientPE.registerModule(teleport);
//VertexClientPE.registerModule(tracers);
VertexClientPE.registerModule(twerk);
VertexClientPE.registerModule(yesCheatPlus);
VertexClientPE.registerModule(zoom);

//var autoClick = true;
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
	if(betterPauseSetting == "on" && VertexClientPE.isPaused) {
		Entity.setVelX(getPlayerEnt(), 0);
		Entity.setVelY(getPlayerEnt(), 0);
		Entity.setVelZ(getPlayerEnt(), 0);
	}
	if(VertexClientPE.trailsMode != "off") {
		VertexClientPE.showTrails();
	}
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
        if(chestESPState) {
            new Thread_(new Runnable_({
                run: function() {
                    VertexClientPE.toast("Reloading chests...");
                    Thread_.sleep(1200);
                    VertexClientPE.Utils.loadChests();
                }
            })).start();
        }
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
    }else if(combatMenuShown == false) {
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

var URL = "https://www.dominos.com/en/pages/order/";

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
                var dashboardButton = clientButton("Dashboard");
				dashboardButton.setCompoundDrawablesWithIntrinsicBounds(0, android.R.drawable.ic_dialog_dialer, 0, 0);
                var webBrowserButton = clientButton("Webbrowser");
				webBrowserButton.setCompoundDrawablesWithIntrinsicBounds(0, android.R.drawable.ic_menu_mapmode, 0, 0);
                var playerCustomizerButton = clientButton("Player Customizer");
				playerCustomizerButton.setCompoundDrawablesWithIntrinsicBounds(0, android.R.drawable.presence_online, 0, 0);
                var optiFineButton = clientButton("OptiFine");
				optiFineButton.setCompoundDrawablesWithIntrinsicBounds(0, android.R.drawable.ic_menu_zoom, 0, 0);
                var shopButton = clientButton("Shop");
				shopButton.setCompoundDrawablesWithIntrinsicBounds(0, android.R.drawable.stat_notify_more, 0, 0);
                var screenshotButton = clientButton("Take a screenshot");
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
				if(VertexClientPE.isExpMode()) {
					dialogLayout.addView(screenshotButton);
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
                        exitDashboard();
                    }
                });
                webBrowserButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        dialog.dismiss();
                        VertexClientPE.closeMenu();
                        webBrowserScreen();
                        overlayWebBrowser();
                    }
                });
                playerCustomizerButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        dialog.dismiss();
                        VertexClientPE.closeMenu();
                        playerCustomizerScreen();
                        exitPlayerCustomizer();
                    }
                });
                optiFineButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        dialog.dismiss();
                        VertexClientPE.closeMenu();
                        optiFineScreen();
                        exitOptiFine();
                    }
                });
                shopButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        dialog.dismiss();
                        VertexClientPE.closeMenu();
                        shopScreen();
                        exitShop();
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
                dialogLayout.setPadding(10, 10, 10, 10);
                dialogLayout.addView(settingsTitle);
                dialogLayout.addView(shortcutManagerTitle);
                dialogLayout.addView(shortcutManagerEnter);
				
				var shortcutSizeSettingTitle = clientTextView("Shortcut button size: | " + shortcutSizeSetting);
				var shortcutSizeSettingSlider = new SeekBar(CONTEXT);
				var minShortcutSize = 16;
				shortcutSizeSettingSlider.setProgress(shortcutSizeSetting - minShortcutSize);
				shortcutSizeSettingSlider.setMax(64 - minShortcutSize);
				shortcutSizeSettingSlider.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
					onProgressChanged: function() {
						shortcutSizeSetting = shortcutSizeSettingSlider.getProgress() + minShortcutSize;
						shortcutSizeSettingTitle.setText("Shortcut button size: | " + shortcutSizeSetting);
					}
				});
				
				var shortcutUIHeightSettingTitle = clientTextView("Shortcut UI height: | " + shortcutUIHeightSetting + " * shortcut button size");
				var shortcutUIHeightSettingSlider = new SeekBar(CONTEXT);
				var minShortcutUIHeight = 1;
				shortcutUIHeightSettingSlider.setProgress(shortcutUIHeightSetting - minShortcutUIHeight);
				shortcutUIHeightSettingSlider.setMax(10 - minShortcutUIHeight);
				shortcutUIHeightSettingSlider.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
					onProgressChanged: function() {
						shortcutUIHeightSetting = shortcutUIHeightSettingSlider.getProgress() + minShortcutUIHeight;
						shortcutUIHeightSettingTitle.setText("Shortcut UI height: | " + shortcutUIHeightSetting + " * shortcut button size");
					}
				});
				
				dialogLayout.addView(shortcutSizeSettingTitle);
				dialogLayout.addView(shortcutSizeSettingSlider);
				dialogLayout.addView(shortcutUIHeightSettingTitle);
				dialogLayout.addView(shortcutUIHeightSettingSlider);
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

VertexClientPE.showModEditorDialog = function(defaultName, modTitleView, modButtonView) {
    CONTEXT.runOnUiThread(new Runnable_() {
        run: function() {
            try {
				var _0xf030=["\x69\x73\x50\x72\x6F","\x52\x65\x6E\x61\x6D\x69\x6E\x67\x20\x6D\x6F\x64\x73","\x73\x68\x6F\x77\x50\x72\x6F\x44\x69\x61\x6C\x6F\x67"];if(!VertexClientPE[_0xf030[0]]()){VertexClientPE[_0xf030[2]](_0xf030[1]);return}
				
                var dialogLayout = new LinearLayout_(CONTEXT);
                dialogLayout.setOrientation(1);
				dialogLayout.setBackgroundDrawable(backgroundSpecial());
				dialogLayout.setPadding(1.5, 0, 1, 1);
				
				var modEditorTitleLayout = new LinearLayout_(CONTEXT);
                modEditorTitleLayout.setOrientation(LinearLayout_.HORIZONTAL);
				
                var currentName = sharedPref.getString("VertexClientPE.mods." + defaultName + ".name", defaultName);
				
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

VertexClientPE.showModDialog = function(mod, btn) {
    CONTEXT.runOnUiThread(new Runnable_() {
        run: function() {
            try {
                VertexClientPE.loadMainSettings();
                var modTitleLayout = new LinearLayout_(CONTEXT);
                modTitleLayout.setOrientation(LinearLayout_.HORIZONTAL);
                var modTitle = clientTextView(sharedPref.getString("VertexClientPE.mods." + mod.name + ".name", mod.name), true);
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
                var modTypeText = clientTextView("Type: " + mod.type + "\n");
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
                if(mod.isStateMod()) {
                    dialogExtraLayoutLeft = new LinearLayout_(CONTEXT);
                    dialogExtraLayoutLeft.setOrientation(1);
                    dialogExtraLayoutLeft.setGravity(Gravity_.CENTER);
                    dialogExtraLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2, display.heightPixels / 10));
                    dialogExtraLayoutRight = new LinearLayout_(CONTEXT);
                    dialogExtraLayoutRight.setOrientation(1);
                    dialogExtraLayoutRight.setGravity(Gravity_.CENTER);
                    dialogExtraLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2, display.heightPixels / 10));
                    dialogExtraLayout.addView(dialogExtraLayoutLeft);
                    dialogExtraLayout.addView(dialogExtraLayoutRight);
                    closeButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
                    dialogExtraLayoutLeft.addView(closeButton);
                    var toggleButton = clientButton("Toggle");
                    toggleButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
                    if(mod.state) {
                        toggleButton.setText("Disable");
                        if(yesCheatPlusState && mod.canBypassYesCheatPlus && !mod.canBypassYesCheatPlus()) {
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
                    toggleButton.setOnClickListener(new View_.OnClickListener() {
                        onClick: function(view) {
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

VertexClientPE.showSongDialog = function(song, songBtn, playBar) { //todo; remove/add song buttons from music player song layout when switching favorite
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
				dialogExtraLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2, display.heightPixels / 10));
				dialogExtraLayoutRight = new LinearLayout_(CONTEXT);
				dialogExtraLayoutRight.setOrientation(1);
				dialogExtraLayoutRight.setGravity(Gravity_.CENTER);
				dialogExtraLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2, display.heightPixels / 10));
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

function capitalizeColorString(string) {
    if(string == "green") {
		return "Green";
	} else if(string == "red") {
		return "Red";
	} else if(string == "blue") {
		return "Blue";
	} else if(string == "purple") {
		return "Purple";
	} else if(string == "violet") {
		return "Violet";
	} else if(string == "yellow") {
		return "Yellow";
	} else if(string == "orange") {
		return "Orange";
	} else if(string == "brown") {
		return "Brown";
	} else if(string == "grey") {
		return "Grey";
	} else if(string == "white") {
		return "White";
	} else if(string == "black") {
		return "Black";
	}
}

VertexClientPE.showTileDropDown = function(tileView, defaultName, defaultColor, defaultUseLightColor, tile) {
	try {
		CONTEXT.runOnUiThread(new Runnable_() {
			run: function() {
				var tileDropDownLayout = new LinearLayout_(CONTEXT);
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
				tileDropDown.setBackgroundDrawable(new ColorDrawable_(Color_.BLACK));
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
						if(backAccountManagerUI != null) {
							backAccountManagerUI.dismiss();
						}
                        exitAccountManagerUI.dismiss();
                        VertexClientPE.showAccountManager(showBackButton);
                        exitAccountManager(showBackButton);
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

VertexClientPE.showModBuyDialog = function(mod, modButton, modInfoButton) {
    CONTEXT.runOnUiThread(new Runnable_() {
        run: function() {
            try {
                var dialogTitle = clientTextView("Buy");
                dialogTitle.setTextSize(25);
                var dialogDesc = clientTextView(new Html_.fromHtml(mod.name + " costs <font color=\"#ffd700\">\u26C1 " + mod.getPrice().toString() + "</font>!\n"), 0);
                var btn = clientButton("Purchase");
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
                dialog.setTitle("Buy");
                dialog.show();
                btn.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
						if(mod.getPrice() <= VertexClientPE.getVertexCash()) {
							editor.putInt("VertexClientPE.vertexCash", VertexClientPE.getVertexCash() - mod.getPrice());
							editor.putBoolean("VertexClientPE.bought" + mod.name, true);
							editor.commit();
							if(modInfoButton != null) {
								modInfoButton.setText("...");
							}
							dialog.dismiss();
						} else {
							VertexClientPE.toast("You need " + (mod.getPrice() - VertexClientPE.getVertexCash()).toString() + " more V€rt€xCash to buy this!");
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
                var dialogDescTitle = clientTextView("Description:");
                var dialogDesc = clientTextView(addon.desc);
                var dialogVersion = clientTextView("Version: " + addon.current_version);
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
                dialogLayout.addView(dialogDescTitle);
                dialogLayout.addView(dialogDesc);
                dialogLayout.addView(dialogVersion);
                dialogLayout.addView(dialogTargetVersion);
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

VertexClientPE.moneyToast = function() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            var layout = new LinearLayout_(CONTEXT);
            layout.setOrientation(1);
            layout.setBackground(backgroundSpecial(16));
            var text = clientTextView("\u26C1 " + VertexClientPE.getVertexCash());
            text.setTextColor(Color_.parseColor("#FFD700"));
            text.setPadding(10, 10, 10, 10);
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
        /*case "spectate": //3
            if(commandSplit[1] == null || commandSplit[1] == undefined) {
                VertexClientPE.syntaxError(".spectate <player>");
            } else {
                VertexClientPE.spectate(commandSplit[1]);
            }
            break;*/
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
    startMusicPlayer: function(song) {
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
                mp.start();
                if(playMusicSetting != "shuffle" && song == null && VertexClientPE.MusicUtils.playingFirstTime) {
                    mp.pause();
                    VertexClientPE.MusicUtils.isPaused = true;
                }
                VertexClientPE.MusicUtils.playingFirstTime = false;
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

VertexClientPE.MusicUtils.registerSong(new Song("Adventure (feat. Alexa Lusader)", "William Ekh", "http://files-cdn.nocopyrightsounds.co.uk/William%20Ekh%20-%20Adventure%20%28feat.%20Alexa%20Lusader%29.mp3", "House"));
VertexClientPE.MusicUtils.registerSong(new Song("Blank [NCS Release]", "Disfigure", "http://files-cdn.nocopyrightsounds.co.uk/Disfigure%20-%20Blank.mp3", "Dubstep"));
VertexClientPE.MusicUtils.registerSong(new Song("Can't Wait (feat. Anna Yvette) [NCS Release]", "Jim Yosef", "https://www.dropbox.com/s/noz7mg1ar0n1un2/Jim%20Yosef%20-%20Can%27t%20Wait%20%28feat.%20Anna%20Yvette%29.mp3?dl=1", "House"));
VertexClientPE.MusicUtils.registerSong(new Song("Candyland [NCS Release]", "Tobu", "http://files-cdn.nocopyrightsounds.co.uk/Tobu%20-%20Candyland.mp3", "House"));
VertexClientPE.MusicUtils.registerSong(new Song("Cloud 9 [NCS Release]", "Itro & Tobu", "http://files-cdn.nocopyrightsounds.co.uk/Itro%20%26%20Tobu%20-%20Cloud%209.mp3", "House"));
VertexClientPE.MusicUtils.registerSong(new Song("Coming Home [NCS Release]", "SirensCeol", "http://files-cdn.nocopyrightsounds.co.uk/SirensCeol%20-%20Coming%20Home.mp3", "Dubstep"));
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

function nuke(x, y, z, range, mode) {
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

VertexClientPE.saveCategorySettings = function() {
    File_(settingsPath).mkdirs();
    var newFile = new File_(settingsPath, "vertexclientpe_categories.txt");
    newFile.createNewFile();
    var outWrite = new OutputStreamWriter_(new FileOutputStream_(newFile));
    outWrite.append(combatName.toString());
    outWrite.append("," + buildingName.toString());
    outWrite.append("," + movementName.toString());
    outWrite.append("," + chatName.toString());
    outWrite.append("," + miscName.toString());

    outWrite.close();
}

VertexClientPE.loadCategorySettings = function() {
    if(!File_(settingsPath + "vertexclientpe_categories.txt").exists())
        return;
    var file = new File_(settingsPath + "vertexclientpe_categories.txt");
    var fos = new FileInputStream_(file);
    var str = new StringBuilder_();
    var ch;
    while((ch = fos.read()) != -1)
        str.append(Character_(ch));
    if(str != null && str != undefined) {
        var _0xbbeb=["\x69\x73\x50\x72\x6F","\x74\x72\x75\x65","\x2C","\x73\x70\x6C\x69\x74"];if(VertexClientPE[_0xbbeb[0]]()==_0xbbeb[1]){combatName=str.toString()[_0xbbeb[3]](_0xbbeb[2])[0];buildingName=str.toString()[_0xbbeb[3]](_0xbbeb[2])[1];movementName=str.toString()[_0xbbeb[3]](_0xbbeb[2])[2];chatName=str.toString()[_0xbbeb[3]](_0xbbeb[2])[3];miscName=str.toString()[_0xbbeb[3]](_0xbbeb[2])[4]}
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

VertexClientPE.saveMainSettings = function() {
    File_(settingsPath).mkdirs();
    var newFile = new File_(settingsPath, "vertexclientpe.txt");
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
    outWrite.append("," + transparentBgSetting.toString());
    outWrite.append("," + aimbotUseKillauraRange.toString());
    outWrite.append("," + screenshotModeSetting.toString());
    outWrite.append("," + killToMorphSetting.toString());
    outWrite.append("," + fontSetting.toString());
    outWrite.append("," + showMoneyToastsSetting.toString());
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

    outWrite.close();
    
    VertexClientPE.saveAutoSpammerMessage();
    VertexClientPE.saveCategorySettings();
}

VertexClientPE.loadMainSettings = function () {
    var file = new File_(settingsPath + "vertexclientpe.txt");
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
            sizeSetting = arr[13];
            if (sizeSetting == "normal") {
                customHeight = topBarHeight / 2;
            } else if (sizeSetting == "small") {
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
            showMoneyToastsSetting = arr[30];
        }
		if (arr[31] != null && arr[31] != undefined) {
            mainButtonStyleSetting = arr[31];
        }
		if (arr[32] != null && arr[32] != undefined) {
            webbrowserStartPageSetting = arr[32];
        }
		if (arr[33] != null && arr[33] != undefined) {
            backgroundStyleSetting = arr[33];
        }
		if (arr[34] != null && arr[34] != undefined) {
            modButtonColorBlockedSetting = arr[34];
        }
		if (arr[35] != null && arr[35] != undefined) {
            modButtonColorEnabledSetting = arr[35];
        }
		if (arr[36] != null && arr[36] != undefined) {
            modButtonColorDisabledSetting = arr[36];
        }
		if (arr[37] != null && arr[37] != undefined) {
            arrowGunMode = arr[37];
        }
		if (arr[38] != null && arr[38] != undefined) {
            commandsSetting = arr[38];
        }
		if (arr[39] != null && arr[39] != undefined) {
            cmdPrefix = arr[39];
        }
		if (arr[40] != null && arr[40] != undefined) {
            shortcutSizeSetting = arr[40];
        }
		if (arr[41] != null && arr[41] != undefined) {
            aimbotRangeSetting = arr[41];
        }
		if (arr[42] != null && arr[42] != undefined) {
            speedHackFriction = arr[42];
        }
		if (arr[43] != null && arr[43] != undefined) {
            remoteViewTeleportSetting = arr[43];
        }
		if (arr[44] != null && arr[44] != undefined) {
            switchGamemodeSendCommandSetting = arr[44];
        }
		if (arr[45] != null && arr[45] != undefined) {
            betterPauseSetting = arr[45];
        }
		if (arr[46] != null && arr[46] != undefined) {
            shortcutUIHeightSetting = arr[46];
        }
		if (arr[47] != null && arr[47] != undefined) {
            mainButtonTapSetting = arr[47];
        }
		if (arr[48] != null && arr[48] != undefined) {
            autoWalkDirection = arr[48];
        }
		if (arr[49] != null && arr[49] != undefined) {
            dashboardTileSize = arr[49];
        }
        fos.close();
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
			modButtonColorEnabled = Color_.WHITE;
			break;
		case "black":
			modButtonColorEnabled = Color_.BLACK;
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
			}
			bg.setCornerRadii(radiiFloatArray);
		}
		
		bg.setShape(GradientDrawable_.RECTANGLE);
		
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
				} else {
					if(forceLightColor == true) {
						bg.setColor(Color_.parseColor("#00CC66"));
					} else {
						bg.setColor(Color_.parseColor("#0F8219"));
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
		thickness = dip2px(2);
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
	
	if(fontSetting == "minecraft" && style != "tile") {
		MinecraftButtonLibrary.addMinecraftStyleToTextView(defaultButton);
	}
    return defaultButton;
}

function shopFeatureButton(shopFeature, cashTextView) {
    var shopFeatureButtonText = (sharedPref.getString("VertexClientPE.bought" + shopFeature.shortName, "false")=="true")?"Purchased":shopFeature.price.toString();
    var shopFeatureLayout = new LinearLayout_(CONTEXT);
    shopFeatureLayout.setOrientation(LinearLayout_.HORIZONTAL);
    var shopFeatureLayoutLeft = new LinearLayout_(CONTEXT);
    shopFeatureLayoutLeft.setOrientation(1);
    shopFeatureLayoutLeft.setGravity(Gravity_.CENTER);
    shopFeatureLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - dip2px(10), display.heightPixels / 8));
    var shopFeatureLayoutRight = new LinearLayout_(CONTEXT);
    shopFeatureLayoutRight.setOrientation(1);
    shopFeatureLayoutRight.setGravity(Gravity_.CENTER);
    shopFeatureLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - dip2px(10), display.heightPixels / 8));
    shopFeatureLayout.addView(shopFeatureLayoutLeft);
    shopFeatureLayout.addView(shopFeatureLayoutRight);
    var shopFeatureText = clientTextView(shopFeature.name);
    shopFeatureLayoutLeft.addView(shopFeatureText);
    var shopFeatureClientButton = clientButton(shopFeatureButtonText);
    shopFeatureClientButton.setOnClickListener(new View_.OnClickListener() {
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
    var musicBarSeekBar = new SeekBar(CONTEXT);
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

function updatePaneButton(updateVersion, updateDesc) {
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
    var updatePaneText = clientTextView("v" + updateVersion);
    updatePaneText.setTypeface(VertexClientPE.font, Typeface_.BOLD);
    var updatePaneDescText = clientTextView(updateDesc);
    updatePaneLayoutLeft.addView(updatePaneText);
    updatePaneLayoutLeft.addView(updatePaneDescText);
    var updatePaneDownloadButton = clientButton("Download");
    updatePaneDownloadButton.setCompoundDrawablesWithIntrinsicBounds(android.R.drawable.stat_sys_download, 0, 0, 0);
    updatePaneDownloadButton.setLayoutParams(new LinearLayout_.LayoutParams(LinearLayout_.LayoutParams.MATCH_PARENT, display.heightPixels / 8));
    updatePaneDownloadButton.setOnClickListener(new View_.OnClickListener() {
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
    
    updatePaneLayoutRight.addView(updatePaneInformationButton);
    
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
	
	if(fromDashboard) {
		var params = new GridLayout_.LayoutParams();
		params.setMargins(5, 5, 5, 5);
		params.width = display.widthPixels / dashboardTileSize - dip2px(5);
		params.height = display.widthPixels / dashboardTileSize - dip2px(5);
		
		var defaultTileButton = clientButton(sharedPref.getString("VertexClientPE.tiles." + tileText + ".name", tileText), null, sharedPref.getString("VertexClientPE.tiles." + tileText + ".color", tileColor), false, sharedPref.getBoolean("VertexClientPE.tiles." + tileText + ".useLightColor", forceLightColor==null?true:forceLightColor), "tile", 0.1);
		defaultTileButton.setTypeface(VertexClientPE.tileFont);
		defaultTileButton.setCompoundDrawablesWithIntrinsicBounds(0, tileIcon, 0, 0);
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
				exitDashboardUI.dismiss();
				dashboardMenu.dismiss();
			}
			tile.onClick(fromDashboard);
        }
    });
    
    return defaultTileButton;
}

function tileButtonWithCustomDrawable(tileText, tileIcon, tileColor, forceLightColor) {
    var params = new GridLayout_.LayoutParams();
    params.setMargins(5, 5, 5, 5);
    params.width = display.widthPixels / 4 - dip2px(5);
    params.height = display.widthPixels / 4 - dip2px(5);
    
    var defaultTileButton = clientButton(sharedPref.getString("VertexClientPE.tiles." + tileText + ".name", tileText), null, sharedPref.getString("VertexClientPE.tiles." + tileText + ".color", tileColor), false, sharedPref.getBoolean("VertexClientPE.tiles." + tileText + ".useLightColor", forceLightColor==null?true:forceLightColor), "tile", 0.1);
    defaultTileButton.setTypeface(VertexClientPE.tileFont);
    defaultTileButton.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
    defaultTileButton.setMarqueeRepeatLimit(-1);
    defaultTileButton.setSingleLine();
    defaultTileButton.setHorizontallyScrolling(true);
    defaultTileButton.setSelected(true);
	
	var drawable = tileIcon;
	drawable.setBounds(0, 0, (drawable.getIntrinsicWidth()*0.5), (drawable.getIntrinsicHeight()*0.5));
	var sd = new ScaleDrawable_(drawable, 0, dip2px(16), dip2px(16));
	sd.setLevel(1);
	
    defaultTileButton.setCompoundDrawablesWithIntrinsicBounds(null, sd.getDrawable(), null, null);
    defaultTileButton.setLayoutParams(params);
	
	defaultTileButton.setOnLongClickListener(new View_.OnLongClickListener() {
        onLongClick: function(viewArg) {
			VertexClientPE.showTileDropDown(viewArg, tileText, tileColor, forceLightColor==null?true:forceLightColor);
            return true;
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
			exitDashboardUI.dismiss();
            dashboardMenu.dismiss();
			VertexClientPE.showAccountManager(true);
			exitAccountManager(true);
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
    
    var modButtonName = sharedPref.getString("VertexClientPE.mods." + mod.name + ".name", mod.name);
	var modInfoButtonName = "...";
    if((mod.requiresPro && mod.requiresPro() && !VertexClientPE.isPro()) || (mod.getPrice && !sharedPref.getBoolean("VertexClientPE.bought" + mod.name, false))) {
		modInfoButtonName = "\uD83D\uDD12";
	}
    
    if(mod.state) {
        if(yesCheatPlusState && mod.canBypassYesCheatPlus && !mod.canBypassYesCheatPlus()) {
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
    } else if(menuType == "halfscreen_top") {
		modButtonLayoutLeft.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels - (display.widthPixels / 2 - display.widthPixels / 2.5) - 10, display.heightPixels / 12));
	} else {
        modButtonLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.heightPixels / 2.5 - 10, display.heightPixels / 12));
    }
    modButtonLayout.addView(modButtonLayoutLeft);
    
    var modButtonLayoutRight = new LinearLayout_(CONTEXT);
    modButtonLayoutRight.setOrientation(1);
    if(menuType == "halfscreen") {
        modButtonLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2.2 - display.widthPixels / 2.5, display.heightPixels / 10));
    } else if(menuType == "halfscreen_top") {
		modButtonLayoutRight.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2 - display.widthPixels / 2.5 - 10, display.heightPixels / 12));
	} else {
        modButtonLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.heightPixels / 2 - display.heightPixels / 2.5 - 10, display.heightPixels / 12));
    }
    modButtonLayout.addView(modButtonLayoutRight);
    
    var corner = buttonOnly==true?null:"left";
    var defaultClientButton = clientButton(modButtonName, mod.desc, null, corner);
    if(buttonOnly == null || !buttonOnly) {
        if(menuType == "halfscreen") {
            defaultClientButton.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2.5, display.heightPixels / 10));
        } else if(menuType == "halfscreen_top") {
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
        if(yesCheatPlusState && mod.canBypassYesCheatPlus && !mod.canBypassYesCheatPlus()) {
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
        onClick: function(viewarg) {
            var _0xff55=["\x59\x6F\x75\x27\x76\x65\x20\x63\x61\x6D\x65\x20\x61\x63\x72\x6F\x73\x73\x20\x61\x6E\x20\x6F\x75\x74\x64\x61\x74\x65\x64\x2C\x20\x65\x64\x69\x74\x65\x64\x20\x61\x6E\x64\x20\x75\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64\x20\x56\x65\x72\x74\x65\x78\x20\x43\x6C\x69\x65\x6E\x74\x20\x50\x45\x20\x73\x63\x72\x69\x70\x74\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x74\x68\x65\x20\x6F\x66\x66\x69\x63\x69\x61\x6C\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x6F\x6E\x20\x6F\x75\x72\x20\x77\x65\x62\x73\x69\x74\x65\x3A\x20\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2E\x6D\x6C","\x74\x6F\x61\x73\x74","\x59\x6F\x75\x27\x76\x65\x20\x63\x61\x6D\x65\x20\x61\x63\x72\x6F\x73\x73\x20\x61\x6E\x20\x65\x64\x69\x74\x65\x64\x20\x61\x6E\x64\x20\x75\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64\x20\x56\x65\x72\x74\x65\x78\x20\x43\x6C\x69\x65\x6E\x74\x20\x50\x45\x20\x73\x63\x72\x69\x70\x74\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x74\x68\x65\x20\x6F\x66\x66\x69\x63\x69\x61\x6C\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x6F\x6E\x20\x6F\x75\x72\x20\x77\x65\x62\x73\x69\x74\x65\x3A\x20\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2E\x6D\x6C"];if(!isAuthorized){if(!isSupported){VertexClientPE[_0xff55[1]](_0xff55[0])}else {VertexClientPE[_0xff55[1]](_0xff55[2])};return}
            if(mod.requiresPro && mod.requiresPro() && !VertexClientPE.isPro()) {
                VertexClientPE.showProDialog(mod.name);
                return;
            }
			if(mod.getPrice && !sharedPref.getBoolean("VertexClientPE.bought" + mod.name, false)) {
				VertexClientPE.showModBuyDialog(mod, defaultClientButton, defaultInfoButton);
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
    } else if(menuType == "halfscreen_top") {
        defaultInfoButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2 - display.widthPixels / 2.5 - 10, display.heightPixels / 12));
    } else {
        defaultInfoButton.setLayoutParams(new ViewGroup_.LayoutParams(display.heightPixels / 2 - display.heightPixels / 2.5 - 10, display.heightPixels / 12));
    }
    defaultInfoButton.setAlpha(0.54);
    defaultInfoButton.setOnClickListener(new View_.OnClickListener({
    onClick: function(viewarg){
		if(mod.requiresPro && mod.requiresPro() && !VertexClientPE.isPro()) {
			VertexClientPE.showProDialog(mod.name);
			return;
		}
		if(mod.getPrice && !sharedPref.getBoolean("VertexClientPE.bought" + mod.name, false)) {
			VertexClientPE.showModBuyDialog(mod, defaultClientButton, defaultInfoButton);
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
        onClick: function(viewarg) {
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
        onClick: function(viewarg) {
            if(currentTab != categoryRealName) {
                currentTab = categoryRealName;
                menuMiddleLayout.removeAllViews();
                menuRightLayout.removeAllViews();
                
                var tabTitle = new TextView_(CONTEXT);
                tabTitle.setText(currentTab);
                tabTitle.setTextSize(20);
                tabTitle.setGravity(Gravity_.CENTER);
                //menuRightLayout.addView(tabTitle);
                
                var categories = [VertexClientPE.category.COMBAT, VertexClientPE.category.BUILDING, VertexClientPE.category.MOVEMENT, VertexClientPE.category.CHAT, VertexClientPE.category.MISC];
    
                categories.forEach(function(element, index, array) {
                    menuMiddleLayout.addView(new categoryTab(element));
                });
                
                VertexClientPE.modules.forEach(function(element, index, array) {
                    if(VertexClientPE.category.toRealName(element.category) == currentTab && (element.type == "Mod" || element.type == "Special")) {
						if(element.isExpMod && element.isExpMod() && !VertexClientPE.isExpMode()) {
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
        onClick: function(viewarg) {
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
        onClick: function(viewarg) {
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
        onClick: function(viewarg) {
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
            accountManager.dismiss();
			if(backAccountManagerUI != null) {
				backAccountManagerUI.dismiss();
			}
            exitAccountManagerUI.dismiss();
            showMenuButton();
        }
    }));
    accountManagerAccountLayoutRight.addView(useButton);
    var deleteButton = clientButton("x");
    deleteButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 3 - display.widthPixels / 4  - dip2px(10), display.heightPixels / 10));
    deleteButton.setOnClickListener(new View_.OnClickListener({
        onClick: function(viewarg) {
            VertexClientPE.removeAccount(account.toString(), layout, accountManagerAccountLayout);
        }
    }));
    accountManagerAccountLayoutRight.addView(deleteButton);
    
    return accountManagerAccountLayout;
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

function clientTextView(text, shadow) //menu buttons
{
    var defaultTextView = new TextView_(CONTEXT);
    defaultTextView.setText(text);
    if(themeSetting == "white") {
        defaultTextView.setTextColor(Color_.BLACK);
    } else {
        defaultTextView.setTextColor(Color_.WHITE);
    }
    defaultTextView.setTypeface(VertexClientPE.font);
    
    if(shadow == true && shadow != null && shadow != undefined) {
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
        if(themeSetting == "white") {
            defaultTextView.setTextColor(Color_.BLACK);
			if(fontSetting != "minecraft") {
				defaultTextView.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.WHITE);
			}
        }
        defaultTextView.setBackgroundDrawable(backgroundSpecial());
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
    
    var defaultSettingsButton = clientButton("\u270E", null, null, "left", null, true);
    defaultSettingsButton.setLayoutParams(new LinearLayout_.LayoutParams(display.heightPixels / 3 - display.heightPixels / 4, display.heightPixels / 20));
    defaultSettingsButton.setAlpha(0.54);
    categoryTitleLayoutLeft.addView(defaultSettingsButton);
    
    var defaultTitle = coloredSubTitle(text);
    defaultTitle.setLayoutParams(new LinearLayout_.LayoutParams(display.heightPixels / 3, display.heightPixels / 20));
    defaultTitle.setGravity(Gravity_.CENTER);
    categoryTitleLayoutMiddle.addView(defaultTitle);
    
    var defaultArrowButton = clientButton("\u25BD", null, null, "right", null, true);
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

function settingButton(text, desc) {
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
	var defaultSettingsButton = clientButton("", desc);
    defaultSettingsButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
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

function coloredSubTitle(subtitle) // TextView with colored background (edited by peacestorm)
{
    var bg = GradientDrawable_();
    if(useLightThemeSetting == "on") {
        bg.setColor(Color_.parseColor("#00994C"));
        bg.setStroke(dip2px(2), Color_.parseColor("#00CC66"));
    } else {
        bg.setColor(Color_.parseColor("#0B5B25"));
        bg.setStroke(dip2px(2), Color_.parseColor("#0F8219"));
    }
    if(themeSetting == "red") {
        if(useLightThemeSetting == "on") {
            bg.setColor(Color_.parseColor("#FF3333"));
            bg.setStroke(dip2px(2), Color_.parseColor("#FF6666"));
        } else {
            bg.setColor(Color_.parseColor("#5B0C0C"));
            bg.setStroke(dip2px(2), Color_.parseColor("#821010"));
        }
    } if(themeSetting == "blue") {
        if(useLightThemeSetting == "on") {
            bg.setColor(Color_.parseColor("#0080FF"));
            bg.setStroke(dip2px(2), Color_.parseColor("#3399FF"));
        } else {
            bg.setColor(Color_.parseColor("#0A175B"));
            bg.setStroke(dip2px(2), Color_.parseColor("#0E3882"));
        }
    } if(themeSetting == "purple") {
        bg.setColor(Color_.parseColor("#9F018C"));
        bg.setStroke(dip2px(2), Color_.parseColor("#BC21AB"));
    } if(themeSetting == "violet") {
		bg.setColor(Color_.parseColor("#842DCE"));
		bg.setStroke(dip2px(2), Color_.parseColor("#8D38C9"));
	} if(themeSetting == "yellow") {
        bg.setColor(Color_.parseColor("#CCCC00"));
        bg.setStroke(dip2px(2), Color_.parseColor("#FFFF00"));
    } if(themeSetting == "orange") {
        bg.setColor(Color_.parseColor("#FF8C00"));
		bg.setStroke(dip2px(2), Color_.parseColor("#FFA500"));
    } if(themeSetting == "brown") {
		bg.setColor(Color_.parseColor("#8B4513"));
		bg.setStroke(dip2px(2), Color_.parseColor("#CD853F"));
    } if(themeSetting == "grey") {
		bg.setColor(Color_.parseColor("#808080"));
		bg.setStroke(dip2px(2), Color_.parseColor("#A9A9A9"));
    } if(themeSetting == "white") {
        bg.setColor(Color_.parseColor("#E1E1E1"));
        bg.setStroke(dip2px(2), Color_.parseColor("#FFFFFF"));
    } if(themeSetting == "black") {
        bg.setColor(Color_.parseColor("#141414"));
        bg.setStroke(dip2px(2), Color_.parseColor("#1E1E1E"));
    }
    bg.setShape(GradientDrawable_.RECTANGLE);

    var title = clientTextView(subtitle, true);
    title.setAlpha(0.54);
    title.setBackgroundDrawable(bg);

    return title;
}

function backgroundSpecial(round, color, showProLine, lightColor) {
    var bg = GradientDrawable_();
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

VertexClientPE.setupGradient = function(gradientDrawable, color, strokeColor) {
	if(!(gradientDrawable instanceof GradientDrawable_)) {
		throw new TypeError("The type of the first parameter is not GradientDrawable!");
		return;
	}
	var preset = transparentBgSetting=="on"?"#70":"#";
	gradientDrawable.setColor(Color_.parseColor(preset + color));
	gradientDrawable.setStroke(dip2px(2), Color_.parseColor(preset + strokeColor));
}

function backgroundGradient(round) // TextView with colored background (edited by peacestorm)
{
	if(backgroundStyleSetting == "normal") {
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
			VertexClientPE.setupGradient(bg, "00994C", "00CC66");
		} else {
			VertexClientPE.setupGradient(bg, "0B5B25", "0F8219");
		}
		if(themeSetting == "red") {
			if(useLightThemeSetting == "on") {
				VertexClientPE.setupGradient(bg, "FF3333", "FF6666");
			} else {
				VertexClientPE.setupGradient(bg, "5B0C0C", "821010");
			}
		} if(themeSetting == "blue") {
			if(useLightThemeSetting == "on") {
				VertexClientPE.setupGradient(bg, "0080FF", "3399FF");
			} else {
				VertexClientPE.setupGradient(bg, "0A175B", "0E3882");
			}
		} if(themeSetting == "purple") {
			VertexClientPE.setupGradient(bg, "9F018C", "BC21AB");
		} if(themeSetting == "violet") {
			VertexClientPE.setupGradient(bg, "842DCE", "8D38C9");
		} if(themeSetting == "yellow") {
			VertexClientPE.setupGradient(bg, "CCCC00", "FFFF00");
		} if(themeSetting == "orange") {
			VertexClientPE.setupGradient(bg, "FF8C00", "FFA500");
		} if(themeSetting == "brown") {
			VertexClientPE.setupGradient(bg, "8B4513", "CD853F");
		} if(themeSetting == "grey") {
			VertexClientPE.setupGradient(bg, "808080", "A9A9A9");
		} if(themeSetting == "white") {
			VertexClientPE.setupGradient(bg, "E1E1E1", "FFFFFF");
		} if(themeSetting == "black") {
			VertexClientPE.setupGradient(bg, "141414", "1E1E1E");
		}
		bg.setShape(GradientDrawable_.RECTANGLE);

		return bg;
	} else if(backgroundStyleSetting == "minecraft_dirt") {
		var dirt = new android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createScaledBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/background.png")), dip2px(64), dip2px(64), false));
		/* if(transparentBgSetting == "on") {
			dirt.setColorFilter(android.graphics.Color.argb(7, 70, 70, 70), android.graphics.PorterDuff.Mode.MULTIPLY);
		} else if(transparentBgSetting == "off") { */
			dirt.setColorFilter(android.graphics.Color.rgb(70, 70, 70), android.graphics.PorterDuff.Mode.MULTIPLY);
		//}
		dirt.setTileModeXY(android.graphics.Shader.TileMode.REPEAT, android.graphics.Shader.TileMode.REPEAT);
		
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

VertexClientPE.loadMilestones = function() {
    try {
        // download content
        var url = new URL_("https://raw.githubusercontent.com/Vertex-Client/Vertex-Client-PE/update/News");
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

var lastLoop = new Date;
function gameLoop() {
    var thisLoop = new Date;
    VertexClientPE.Utils.fps = 1000 / (thisLoop - lastLoop);
    lastLoop = thisLoop;
}

VertexClientPE.clientTick = function() {
    new Thread_(new Runnable_() {
        run: function() {
            Thread_.sleep(1000 / 70);
            CONTEXT.runOnUiThread(new Runnable_({
                run: function() {
                    try {
                        var _0x43af=["\x61\x75\x74\x68\x6F\x72","\x70\x65\x61\x63\x65\x73\x74\x6F\x72\x6D"];if(VertexClientPE[_0x43af[0]]!= _0x43af[1]){isAuthorized= false}
                        if(GUI != null && !GUI.isShowing() && (vertexclientpemiscmenu == null || !vertexclientpemiscmenu.isShowing()) && (menu == null || !menu.isShowing()) && (fullScreenMenu == null || !fullScreenMenu.isShowing()) && (settingsMenu == null || !settingsMenu.isShowing()) && (devSettingsMenu == null || !devSettingsMenu.isShowing()) && (informationMenu == null || !informationMenu.isShowing()) && (accountManager == null || !accountManager.isShowing()) && (addonMenu == null || !addonMenu.isShowing()) && (milestonesMenu == null || !milestonesMenu.isShowing()) && (webBrowserMenu == null || !webBrowserMenu.isShowing()) && (previewMenu == null || !previewMenu.isShowing()) && (playerCustomizerMenu == null || !playerCustomizerMenu.isShowing()) && (optiFineMenu == null || !optiFineMenu.isShowing()) && (shopMenu == null || !shopMenu.isShowing()) && (dashboardMenu == null || !dashboardMenu.isShowing()) && (updateCenterMenu == null || !updateCenterMenu.isShowing()) && (musicPlayerMenu == null || !musicPlayerMenu.isShowing()) && (helpMenu == null || !helpMenu.isShowing())) {
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
                    if(GUI != null && !GUI.isShowing() && (vertexclientpemiscmenu == null || !vertexclientpemiscmenu.isShowing()) && (menu == null || !menu.isShowing()) && (fullScreenMenu == null || !fullScreenMenu.isShowing()) && (settingsMenu == null || !settingsMenu.isShowing()) && (devSettingsMenu == null || !devSettingsMenu.isShowing()) && (informationMenu == null || !informationMenu.isShowing()) && (accountManager == null || !accountManager.isShowing()) && (addonMenu == null || !addonMenu.isShowing()) && (milestonesMenu == null || !milestonesMenu.isShowing()) && (webBrowserMenu == null || !webBrowserMenu.isShowing()) && (previewMenu == null || !previewMenu.isShowing()) && (playerCustomizerMenu == null || !playerCustomizerMenu.isShowing()) && (optiFineMenu == null || !optiFineMenu.isShowing()) && (shopMenu == null || !shopMenu.isShowing()) && (dashboardMenu == null || !dashboardMenu.isShowing()) && (updateCenterMenu == null || !updateCenterMenu.isShowing()) && (musicPlayerMenu == null || !musicPlayerMenu.isShowing()) && (helpMenu == null || !helpMenu.isShowing())) {
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
    new Thread_(new Runnable_() {
        run: function() {
            Thread_.sleep(1000 * spamDelayTime);
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
    new Thread_(new Runnable_() {
        run: function() {
            Thread_.sleep(1000);
            VertexClientPE.modules.forEach(function(element, index, array) {
                if(element.isStateMod() && element.state && element.onInterval) {
                    element.onInterval();
                }
            });
            if(secondTickTimer == 60) {
                var extraCash = VertexClientPE.isPro()?20:10;
                VertexClientPE.setVertexCash(VertexClientPE.getVertexCash() + extraCash);
                secondTickTimer = 0;
				if(showMoneyToastsSetting == "on") {
					VertexClientPE.moneyToast();
				}
                if(shopCashText != null) {
                    CONTEXT.runOnUiThread(new Runnable_() {
                        run: function() {
                            shopCashText.setText("\u26C1 " + VertexClientPE.getVertexCash());
                        }
                    });
                }
            } else {
                secondTickTimer += 1;
            }
            
            if(antiLagDropRemoverSetting == "on" && VertexClientPE.playerIsInGame && !VertexClientPE.isRemote() && sharedPref.getString("VertexClientPE.boughtOptiFine", "false") == "true") {
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
}

VertexClientPE.showSplashScreen = function () {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function () {
            try {
                var splashScreenLayout = new LinearLayout_(CONTEXT);
                splashScreenLayout.setOrientation(1);
                splashScreenLayout.setGravity(Gravity_.CENTER);
                splashScreenLayout.setBackgroundDrawable(new ColorDrawable_(Color_.rgb(0, 128, 255)));

                var logoViewer5 = new ImageView_(CONTEXT);
                logoViewer5.setPadding(0, dip2px(16), 0, dip2px(16));
                logoViewer5.setImageBitmap(imgLogo);
                logoViewer5.setLayoutParams(new LinearLayout_.LayoutParams(CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 4, CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 16 + dip2px(32)));
				
				var proViewer = new ImageView_(CONTEXT);
                proViewer.setPadding(0, dip2px(16), 0, dip2px(16));
                proViewer.setImageBitmap(imgProLogo);
                proViewer.setLayoutParams(new LinearLayout_.LayoutParams(CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 4, CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 16 + dip2px(32)));
				
				splashScreenLayout.addView(logoViewer5);
				if(VertexClientPE.isPro()) {
					splashScreenLayout.addView(proViewer);
				}
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
                                splashScreenMenu.dismiss();
                                splashScreenMenu = null;
                            }
                        });
                    }
                }).start();

                splashScreenMenu = new PopupWindow_(splashScreenLayout, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                splashScreenMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.CENTER | Gravity_.CENTER, 0, 0);
            } catch (e) {
                print("@" + e.lineNumber + ": " + e)
            }
        }
    }));
};

VertexClientPE.showStartScreenBar = function() {
    var display = new DisplayMetrics_();
    CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
        CONTEXT.runOnUiThread(new Runnable_({
            run: function() {
                try {
					if(userIsNewToCurrentVersion == true) {
						VertexClientPE.showWhatsNewDialog();
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
                        onClick: function(viewarg) {
                            ModPE.goToURL("https://www.youtube.com/c/AgameRGaming");
                    }}));
                    twitterButton.setOnClickListener(new View_.OnClickListener({
                        onClick: function(viewarg) {
                            ModPE.goToURL("http://twitter.com/VertexHX");
                    }}));
					gitHubButton.setOnClickListener(new View_.OnClickListener({
                        onClick: function(viewarg) {
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
                } catch(error) {
                    print('An error occurred: ' + error);
                }
            }
        }));
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
								setupTextView.startAnimation(textAnim);
								setupTextView.setText(setupStep1Text);
								doneButton.setText("\u2794");
								doneButton.setOnClickListener(new View_.OnClickListener({
									onClick: function(viewarg){
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
								setupTextView.startAnimation(textAnim);
								setupTextView.setText(setupStep2Text);
								setupScreenLayoutBottomLeft.addView(setupButtonGreen);
								setupScreenLayoutBottomCenter.addView(setupButtonRed);
								setupScreenLayoutBottomCenter1.addView(setupButtonBlue);
								setupScreenLayoutBottomRight.addView(setupButtonPurple);
								doneButton.setText("\u2794");
								doneButton.setOnClickListener(new View_.OnClickListener({
									onClick: function(viewarg){
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
								setupTextView.startAnimation(textAnim);
								setupTextView.setText(setupStep3Text);
								doneButton.setText("\u2713");
								doneButton.setOnClickListener(new View_.OnClickListener({
									onClick: function(viewarg){
										themeSetting = setupColor;
										VertexClientPE.saveMainSettings();
										VertexClientPE.editCopyrightText();
										logoViewer3.clearAnimation();
										doneUI.dismiss(); //Close
										setupScreen.dismiss();
										showMenuButton();
										VertexClientPE.clientTick();
										VertexClientPE.specialTick();
										VertexClientPE.secondTick();
										VertexClientPE.setupMCPEGUI();
									}
								}));
							}
						}
					});
					
					var space1 = new TextView_(CONTEXT);
					space1.setBackgroundDrawable(new ColorDrawable_(Color_.WHITE));
					
					var space2 = new TextView_(CONTEXT);
					space2.setBackgroundDrawable(new ColorDrawable_(Color_.WHITE));
					
					setupStepRow.addView(step1Button);
					setupStepRow.addView(space1, dip2px(8), dip2px(1));
					setupStepRow.addView(step2Button);
					setupStepRow.addView(space2, dip2px(8), dip2px(1));
					setupStepRow.addView(step3Button);
					
					var setupTextView = clientTextView("");
                    setupTextView.setGravity(Gravity_.CENTER);
					setupScreenLayout.addView(setupTextView);
                    
					var setupStep1Text = "Thanks for choosing Vertex Client PE!\nGo to the next step to choose your favourite color. :)";
					var setupStep2Text = "You can always change the color on the settings screen.\nEven more colors are available there.";
					var setupStep3Text = "That's it! Your experience begins here.\nHere's some additional help to get started:\n- You can open the Dashboard and the Shop from the 'More' dialog,\nwhich can be opened by long tapping the menu button.";
					
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
                        onClick: function(viewarg) {
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
                        onClick: function(viewarg) {
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
                        onClick: function(viewarg) {
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
                        onClick: function(viewarg) {
                            setupColor = "purple";
                            setupButtonGreen.setTextColor(Color_.WHITE);
                            setupButtonRed.setTextColor(Color_.WHITE);
                            setupButtonBlue.setTextColor(Color_.WHITE);
                            setupButtonPurple.setTextColor(Color_.GREEN);
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
						onClick: function(viewarg){
							step2Button.performClick();
						}
					}));
					doneLayout.addView(doneButton, dip2px(54), dip2px(54));
                    
                    setupScreen = new PopupWindow_(setupScreenLayout, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                    setupScreen.setBackgroundDrawable(new ColorDrawable_(Color_.parseColor("#0080FF")));
                    setupScreen.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
					//set animation after being shown, because the animation is for when it dismisses.
					//setupScreen.setAnimationStyle(android.R.style.Animation_Dialog);
					
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

var accountManager;
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
    VertexClientPE.loadAccounts();
    var display = new DisplayMetrics_();
    CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
        CONTEXT.runOnUiThread(new Runnable_({
            run: function() {
                try {
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
                    
                    accountManager = new PopupWindow_(accountManagerLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                    accountManager.setBackgroundDrawable(backgroundGradient());
                    accountManager.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
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

VertexClientPE.setup = function() {
	currentScreen = ScreenType.start_screen;
	new Thread_(new Runnable_({
		run: function() {
			try {
				VertexClientPE.loadMainSettings();
				VertexClientPE.showSplashScreen();
				VertexClientPE.loadSupport();
				VertexClientPE.checkForUpdates();
				VertexClientPE.loadUpdateDescription();
				//VertexClientPE.loadDownloadCount();
				VertexClientPE.initShopFeatures();
				VertexClientPE.loadNews();
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
							VertexClientPE.specialTick();
							VertexClientPE.secondTick();
							showMenuButton();
						}
						
						if(ModPE.getMinecraftVersion() < VertexClientPE.minVersion) {
							VertexClientPE.showBasicDialog("Compatibility", clientTextView("This version may not be compatible with MCPE v" + ModPE.getMinecraftVersion() + "!"));
						}
						
						VertexClientPE.loadAddons();
						
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

function downloadFile(path, url) {
    try {
        var file = new File_(path),
            filename = file.getName(),
            downloadManager = new DownloadManager_.Request(new Uri_.parse(url));
        downloadManager.setTitle(filename);
        downloadManager.setNotificationVisibility(0);
        downloadManager.setDestinationInExternalPublicDir(file.getParent().replace("/sdcard", ""), filename);
        CONTEXT.getSystemService(Context_.DOWNLOAD_SERVICE).enqueue(downloadManager);
    } catch (e) {
        print("@" + e.lineNumber + ": " + e);
    }
};

(function checkFiles() {
    var res = ["clienticon_new.png", "clienticon_new_clicked.png", "play_button.png", "play_button_clicked.png", "twitter_button.png", "twitter_button_clicked.png", "youtube_button.png", "youtube_button_clicked.png", "github_button.png", "github_button_clicked.png", "vertex_logo_new.png", "stevehead.png", "pro_logo.png", "minecraft.ttf"],
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

function newLevel() {
    try {
		currentScreen = ScreenType.ingame;
        lagTimer = 0;
        CONTEXT.runOnUiThread(new Runnable_() {
            run: function() {
                if(accountManager != null) {
                    if(accountManager.isShowing()) {
                        accountManager.dismiss();
                        exitAccountManagerUI.dismiss();
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
            }
        });
        autoLeaveStage = 0;
        VertexClientPE.playerIsInGame = true;
        VertexClientPE.loadMainSettings();
        if(!VertexClientPE.isRemote()) {
            VertexClientPE.loadDeathCoords();
        }
        VertexClientPE.Utils.loadFov();
        if(VertexClientPE.isPro()) {
            if(!VertexClientPE.hasEarnedProVertexCash()) {
				VertexClientPE.giveProVertexCash();
                VertexClientPE.toast("You just earned 500 V€rt€xCash because you activated Pro successfully!");
                VertexClientPE.moneyToast();
                if(shopCashText != null) {
                    shopCashText.setText("\u26C1 " + VertexClientPE.getVertexCash());
                }
            }
        }
        new Thread_(new Runnable_() {
            run: function() {
                VertexClientPE.checkForUpdates();
                if(VertexClientPE.latestVersion != VertexClientPE.currentVersion && VertexClientPE.latestVersion != undefined) {
                    VertexClientPE.clientMessage("There is a new version available (v" + VertexClientPE.latestVersion + " for Minecraft Pocket Edition v" + latestPocketEditionVersion + ")!");
                    if(!isSupported) {
                        //VertexClientPE.update();
                    }
                } else {
                    CONTEXT.runOnUiThread(new Runnable_() {
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
			showShortcuts();
        }if(hacksList != null && !VertexClientPE.menuIsShowing) {
            if(!hacksList.isShowing()) {
                showHacksList();
                showTabGUI();
				showShortcuts();
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
	currentScreen = ScreenType.start_screen;
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
            if(menuBar != null || menu != null) {
                VertexClientPE.closeMenu();
            }
            showMenuButton();
            VertexClientPE.saveMainSettings();
            VertexClientPE.editCopyrightText();
            VertexClientPE.Render.deinitViews();
            VertexClientPE.playerIsInGame = false;
        }
    }));
	if(mainMenuTextList == null || !mainMenuTextList.isShowing()) {
		VertexClientPE.showStartScreenBar();
	}
	VertexClientPE.isPaused = false;
}

function settingsScreen() {
    VertexClientPE.menuIsShowing = true;
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
					if(shortcutGUI != null) {
                        if(shortcutGUI.isShowing()) {
                            shortcutGUI.dismiss();
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
                    
                    var settingsMenuLayout = new LinearLayout_(CONTEXT);
                    settingsMenuLayout.setOrientation(1);
                    settingsMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
                    
                    var settingsMenuScroll = new ScrollView(CONTEXT);
                    
                    var settingsMenuLayout1 = new LinearLayout_(CONTEXT);
                    settingsMenuLayout1.setOrientation(1);
                    settingsMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
                    
                    var settingsTitle = clientScreenTitle("Settings");
                    settingsMenuLayout1.addView(settingsTitle);
                    
                    settingsMenuScroll.addView(settingsMenuLayout);
                    settingsMenuLayout1.addView(settingsMenuScroll);
                    
                    var generalTitle = clientSectionTitle("HUD", "rainbow");
                    
                    var hacksListModeSettingFunc = new settingButton("Hacks List Mode");
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
                        onClick: function(viewarg){
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
                    
                    var tabGUIModeSettingFunc = new settingButton("TabGUI Mode");
					var tabGUIModeSettingButton = tabGUIModeSettingFunc.getButton();
                    if(tabGUIModeSetting == "on") {
                        tabGUIModeSettingButton.setText("Shown");
                    } else if(tabGUIModeSetting == "off") {
                        tabGUIModeSettingButton.setText("Hidden");
                    }
                    tabGUIModeSettingButton.setOnClickListener(new View_.OnClickListener({
                        onClick: function(viewarg){
                            if(tabGUIModeSetting == "on") {
                                tabGUIModeSetting = "off";
                                tabGUIModeSettingButton.setText("Hidden");
                                VertexClientPE.saveMainSettings();
                            } else if(tabGUIModeSetting == "off"){
                                tabGUIModeSetting = "on";
                                tabGUIModeSettingButton.setText("Shown");
                                VertexClientPE.saveMainSettings();
                            }
                        }
                    }));
                    
					var mainButtonPositionSettingFunc = new settingButton("Main button position", "Sets the main menu's button position.");
                    var mainButtonPositionSettingButton = mainButtonPositionSettingFunc.getButton();
                    if(mainButtonPositionSetting == "top-right") {
                        mainButtonPositionSettingButton.setText("Top-right");
                    } else {
                        mainButtonPositionSettingButton.setText("Top-left");
                    }
                    mainButtonPositionSettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        if(mainButtonPositionSetting == "top-right") {
                            mainButtonPositionSetting = "top-left";
                            mainButtonPositionSettingButton.setText("Top-left");
                            VertexClientPE.saveMainSettings();
                        } else {
                            mainButtonPositionSetting = "top-right";
                            mainButtonPositionSettingButton.setText("Top-right");
                            VertexClientPE.saveMainSettings();
                        }
                    }
                    }));
					
					var mainButtonStyleSettingFunc = new settingButton("Main button style", "Sets the main menu's button style.");
                    var mainButtonStyleSettingButton = mainButtonStyleSettingFunc.getButton();
                    if(mainButtonStyleSetting == "normal") {
                        mainButtonStyleSettingButton.setText("Normal");
                    } else if(mainButtonStyleSetting == "global_background") {
                        mainButtonStyleSettingButton.setText("Global background (fits better)");
                    } else if(mainButtonStyleSetting == "no_background") {
                        mainButtonStyleSettingButton.setText("Invisible background");
                    } else if(mainButtonStyleSetting == "classic") {
                        mainButtonStyleSettingButton.setText("Classic");
                    }
                    mainButtonStyleSettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        if(mainButtonStyleSetting == "normal") {
                            mainButtonStyleSetting = "global_background";
                            mainButtonStyleSettingButton.setText("Global background (fits better)");
                        } else if(mainButtonStyleSetting == "global_background") {
                            mainButtonStyleSetting = "no_background";
                            mainButtonStyleSettingButton.setText("Invisible background");
                        } else if(mainButtonStyleSetting == "no_background") {
                            mainButtonStyleSetting = "classic";
                            mainButtonStyleSettingButton.setText("Classic");
                        } else if(mainButtonStyleSetting == "classic") {
                            mainButtonStyleSetting = "normal";
                            mainButtonStyleSettingButton.setText("Normal");
                        }
						VertexClientPE.saveMainSettings();
                    }
                    }));
					
					var mainButtonTapSettingFunc = new settingButton("Main button action", "Sets the main menu's button action.");
                    var mainButtonTapSettingButton = mainButtonTapSettingFunc.getButton();
                    if(mainButtonTapSetting == "menu") {
                        mainButtonTapSettingButton.setText("Menu (normal tap) | More dialog (long tap)");
                    } else if(mainButtonTapSetting == "moredialog") {
                        mainButtonTapSettingButton.setText("More dialog (normal tap) | Menu (long tap)");
                    }
                    mainButtonTapSettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
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
                    onClick: function(viewarg){
                        VertexClientPE.showShortcutManagerDialog();
                    }
                    }));
                    
                    var themeTitle = clientSectionTitle("Theme", "rainbow");
                    
					var themeSettingFunc = new settingButton("Color", "Sets the Client's theme.");
                    var themeSettingButton = themeSettingFunc.getButton();
                    if(themeSetting == "green") {
                        themeSettingButton.setText("Green");
                    } else if(themeSetting == "red") {
                        themeSettingButton.setText("Red");
                    } else if(themeSetting == "blue") {
                        themeSettingButton.setText("Blue");
                    } else if(themeSetting == "purple") {
                        themeSettingButton.setText("Purple");
                    } else if(themeSetting == "violet") {
                        themeSettingButton.setText("Violet");
                    } else if(themeSetting == "yellow") {
                        themeSettingButton.setText("Yellow");
                    } else if(themeSetting == "orange") {
                        themeSettingButton.setText("Orange");
                    } else if(themeSetting == "brown") {
                        themeSettingButton.setText("Brown");
                    } else if(themeSetting == "grey") {
                        themeSettingButton.setText("Grey");
                    } else if(themeSetting == "white") {
                        themeSettingButton.setText("White");
                    } else if(themeSetting == "black") {
                        themeSettingButton.setText("Black");
                    }
                    themeSettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        if(themeSetting == "green") {
                            themeSetting = "red";
                            themeSettingButton.setText("Red");
                            VertexClientPE.saveMainSettings();
                        } else if(themeSetting == "red") {
                            themeSetting = "blue";
                            themeSettingButton.setText("Blue");
                            VertexClientPE.saveMainSettings();
                        } else if(themeSetting == "blue") {
                            themeSetting = "purple";
                            themeSettingButton.setText("Purple");
                            VertexClientPE.saveMainSettings();
                        } else if(themeSetting == "purple") {
                            themeSetting = "violet";
                            themeSettingButton.setText("Violet");
                            VertexClientPE.saveMainSettings();
                        } else if(themeSetting == "violet") {
                            themeSetting = "yellow";
                            themeSettingButton.setText("Yellow");
                            VertexClientPE.saveMainSettings();
                        } else if(themeSetting == "yellow") {
                            themeSetting = "orange";
                            themeSettingButton.setText("Orange");
                            VertexClientPE.saveMainSettings();
                        } else if(themeSetting == "orange") {
                            themeSetting = "brown";
                            themeSettingButton.setText("Brown");
                            VertexClientPE.saveMainSettings();
                        } else if(themeSetting == "brown") {
                            themeSetting = "grey";
                            themeSettingButton.setText("Grey");
                            VertexClientPE.saveMainSettings();
                        } else if(themeSetting == "grey") {
                            themeSetting = "white";
                            themeSettingButton.setText("White");
                            VertexClientPE.saveMainSettings();
                        } else if(themeSetting == "white") {
                            themeSetting = "black";
                            themeSettingButton.setText("Black");
                            VertexClientPE.saveMainSettings();
                        } else if(themeSetting == "black") {
                            themeSetting = "green";
                            themeSettingButton.setText("Green");
                            VertexClientPE.saveMainSettings();
                        }
                    }
                    }));
                    
                    var useLightThemeSettingFunc = new settingButton("Lighter theme colors", "Use light theme colors if available.");
                    var useLightThemeSettingButton = useLightThemeSettingFunc.getButton();
                    if(useLightThemeSetting == "on") {
                        useLightThemeSettingButton.setText("ON");
                    } else if(useLightThemeSetting == "off") {
                        useLightThemeSettingButton.setText("OFF");
                    }
                    useLightThemeSettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        if(useLightThemeSetting == "on") {
                            useLightThemeSetting = "off";
                            useLightThemeSettingButton.setText("OFF");
                            VertexClientPE.saveMainSettings();
                        } else if(useLightThemeSetting == "off") {
                            useLightThemeSetting = "on";
                            useLightThemeSettingButton.setText("ON");
                            VertexClientPE.saveMainSettings();
                        }
                    }
                    }));
                    
					var buttonStyleSettingFunc = new settingButton("Button style", "Change the button style.");
                    var buttonStyleSettingButton = buttonStyleSettingFunc.getButton();
                    if(buttonStyleSetting == "normal") {
                        buttonStyleSettingButton.setText("Normal");
                    } else if(buttonStyleSetting == "normal_nostrokes") {
                        buttonStyleSettingButton.setText("Normal (no strokes)");
                    } else if(buttonStyleSetting == "legacy") {
                        buttonStyleSettingButton.setText("Legacy");
                    } else if(buttonStyleSetting == "legacy_inverted") {
                        buttonStyleSettingButton.setText("Legacy (inverted)");
                    } else if(buttonStyleSetting == "transparent") {
                        buttonStyleSettingButton.setText("Transparent");
                    } else if(buttonStyleSetting == "invisible") {
                        buttonStyleSettingButton.setText("Invisible (less lagg)");
                    }
                    buttonStyleSettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        if(buttonStyleSetting == "normal") {
                            buttonStyleSetting = "normal_nostrokes";
                            buttonStyleSettingButton.setText("Normal (no strokes)");
                            VertexClientPE.saveMainSettings();
                        } else if(buttonStyleSetting == "normal_nostrokes") {
                            buttonStyleSetting = "legacy";
                            buttonStyleSettingButton.setText("Legacy");
                            VertexClientPE.saveMainSettings();
                        } else if(buttonStyleSetting == "legacy") {
                            buttonStyleSetting = "legacy_inverted";
                            buttonStyleSettingButton.setText("Legacy (inverted)");
                            VertexClientPE.saveMainSettings();
                        } else if(buttonStyleSetting == "legacy_inverted") {
                            buttonStyleSetting = "transparent";
                            buttonStyleSettingButton.setText("Transparent");
                            VertexClientPE.saveMainSettings();
                        } else if(buttonStyleSetting == "transparent") {
                            buttonStyleSetting = "invisible";
                            buttonStyleSettingButton.setText("Invisible (less lagg)");
                            VertexClientPE.saveMainSettings();
                        } else if(buttonStyleSetting == "invisible") {
                            buttonStyleSetting = "normal";
                            buttonStyleSettingButton.setText("Normal");
                            VertexClientPE.saveMainSettings();
                        }
                    }
                    }));
					
					var backgroundStyleSettingFunc = new settingButton("Background style", "Changes the background style.");
                    var backgroundStyleSettingButton = backgroundStyleSettingFunc.getButton();
                    if(backgroundStyleSetting == "normal") {
                        backgroundStyleSettingButton.setText("Normal");
                    } else if(backgroundStyleSetting == "minecraft_dirt") {
                        backgroundStyleSettingButton.setText("Minecraft (dirt)");
                    }
                    backgroundStyleSettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        if(backgroundStyleSetting == "normal") {
                            backgroundStyleSetting = "minecraft_dirt";
                            backgroundStyleSettingButton.setText("Minecraft (dirt)");
                            VertexClientPE.saveMainSettings();
                        } else if(backgroundStyleSetting == "minecraft_dirt") {
                            backgroundStyleSetting = "normal";
                            backgroundStyleSettingButton.setText("Normal");
                            VertexClientPE.saveMainSettings();
                        }
                    }
                    }));
					
					var transparentBgSettingFunc = new settingButton("Transparent backgrounds", "Makes screens and dialogs transparent.");
                    var transparentBgSettingButton = transparentBgSettingFunc.getButton();
                    if(transparentBgSetting == "on") {
                        transparentBgSettingButton.setText("ON");
                    } else if(transparentBgSetting == "off") {
                        transparentBgSettingButton.setText("OFF");
                    }
                    transparentBgSettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        if(transparentBgSetting == "on") {
                            transparentBgSetting = "off";
                            transparentBgSettingButton.setText("OFF");
                            VertexClientPE.saveMainSettings();
                        } else if(transparentBgSetting == "off") {
                            transparentBgSetting = "on";
                            transparentBgSettingButton.setText("ON");
                            VertexClientPE.saveMainSettings();
                        }
                    }
                    }));
                    
					var mcpeGUISettingFunc = new settingButton("MCPE GUI", "Change the MCPE GUI.");
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
                    onClick: function(viewarg){
                        if(mcpeGUISetting == "default") {
                            mcpeGUISetting = "green";
                            mcpeGUISettingButton.setText("Green");
                            VertexClientPE.saveMainSettings();
                        } else if(mcpeGUISetting == "green") {
                            mcpeGUISetting = "red";
                            mcpeGUISettingButton.setText("Red");
                            VertexClientPE.saveMainSettings();
                        } else if(mcpeGUISetting == "red") {
                            mcpeGUISetting = "blue";
                            mcpeGUISettingButton.setText("Blue");
                            VertexClientPE.saveMainSettings();
                        } else if(mcpeGUISetting == "blue") {
                            mcpeGUISetting = "purple";
                            mcpeGUISettingButton.setText("Purple");
                            VertexClientPE.saveMainSettings();
                        } else if(mcpeGUISetting == "purple") {
                            mcpeGUISetting = "yellow";
                            mcpeGUISettingButton.setText("Yellow");
                            VertexClientPE.saveMainSettings();
                        } else if(mcpeGUISetting == "yellow") {
                            mcpeGUISetting = "white";
                            mcpeGUISettingButton.setText("White");
                            VertexClientPE.saveMainSettings();
                        } else if(mcpeGUISetting == "white") {
                            mcpeGUISetting = "black";
                            mcpeGUISettingButton.setText("Black");
                            VertexClientPE.saveMainSettings();
                        } else if(mcpeGUISetting == "black") {
                            mcpeGUISetting = "default";
                            mcpeGUISettingButton.setText("Default");
                            VertexClientPE.saveMainSettings();
                        }
                        VertexClientPE.setupMCPEGUI();
                        VertexClientPE.toast("Restart your MCPE launcher now!");
                    }
                    }));
					
					var fontSettingFunc = new settingButton("Font", "Change the font/typeface.");
                    var fontSettingButton = fontSettingFunc.getButton();
                    if(fontSetting == "default") {
                        fontSettingButton.setText("Default");
                    } else if(fontSetting == "minecraft") {
                        fontSettingButton.setText("Minecraft");
                    }
					fontSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewarg) {
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
						}
                    }));
					
					var modButtonColorBlockedSettingFunc = new settingButton("Mod button text color (blocked)", "Change the mod button blocked text color.");
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
						onClick: function(viewarg) {
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
						}
                    }));
					
					var modButtonColorEnabledSettingFunc = new settingButton("Mod button text color (enabled)", "Change the mod button enabled text color.");
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
						onClick: function(viewarg) {
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
						}
                    }));
					
					var modButtonColorDisabledSettingFunc = new settingButton("Mod button text color (disabled)", "Change the mod button disabled text color.");
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
						onClick: function(viewarg) {
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
						}
                    }));
                    
                    var menuTitle = clientSectionTitle("Menu", "rainbow");
                    
					var menuTypeSettingFunc = new settingButton("Menu style", "Sets the Client's menu style.");
                    var menuTypeSettingButton = menuTypeSettingFunc.getButton();
                    if(menuType == "normal") {
                        menuTypeSettingButton.setText("Normal");
                    } else if(menuType == "halfscreen") {
                        menuTypeSettingButton.setText("Tabbed (side)");
                    } else if(menuType == "halfscreen_top") {
                        menuTypeSettingButton.setText("Tabbed (top)");
                    } else if(menuType == "fullscreen") {
                        menuTypeSettingButton.setText("Fullscreen");
                    }
                    menuTypeSettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        if(menuType == "normal") {
                            menuType = "halfscreen";
                            menuTypeSettingButton.setText("Tabbed (side)");
                            VertexClientPE.saveMainSettings();
                        } else if(menuType == "halfscreen") {
                            menuType = "halfscreen_top";
                            menuTypeSettingButton.setText("Tabbed (top)");
                            VertexClientPE.saveMainSettings();
                        } else if(menuType == "halfscreen_top") {
                            menuType = "fullscreen";
                            menuTypeSettingButton.setText("Fullscreen");
                            VertexClientPE.saveMainSettings();
                        } else if(menuType == "fullscreen") {
                            menuType = "normal";
                            menuTypeSettingButton.setText("Normal");
                            VertexClientPE.saveMainSettings();
                        }
                    }
                    }));
                    
					var sizeSettingFunc = new settingButton("Size setting", "Change menu size to fit your screen size better (this only works for the normal menu style).");
                    var sizeSettingButton = sizeSettingFunc.getButton();
                    if(sizeSetting == "normal") {
                        sizeSettingButton.setText("Normal");
                    } else if(sizeSetting == "small") {
                        sizeSettingButton.setText("Small");
                    }
                    sizeSettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        if(sizeSetting == "normal") {
                            sizeSetting = "small";
                            customHeight = topBarHeight;
                            sizeSettingButton.setText("Small");
                            VertexClientPE.saveMainSettings();
                        } else if(sizeSetting == "small") {
                            sizeSetting = "normal";
                            customHeight = topBarHeight / 2;
                            sizeSettingButton.setText("Normal");
                            VertexClientPE.saveMainSettings();
                        }
                        VertexClientPE.toast("Now restart your launcher to make it work (this only works for the normal menu style)!");
                    }
                    }));
                    
					var menuAnimationsSettingFunc = new settingButton("Menu animations", "Show menu animations.");
                    var menuAnimationsSettingButton = menuAnimationsSettingFunc.getButton();
                    if(menuAnimationsSetting == "on") {
                        menuAnimationsSettingButton.setText("ON");
                    } else if(menuAnimationsSetting == "off") {
                        menuAnimationsSettingButton.setText("OFF");
                    }
                    menuAnimationsSettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        if(menuAnimationsSetting == "on") {
                            menuAnimationsSetting = "off";
                            menuAnimationsSettingButton.setText("OFF");
                            VertexClientPE.saveMainSettings();
                        } else if(menuAnimationsSetting == "off") {
                            menuAnimationsSetting = "on";
                            menuAnimationsSettingButton.setText("ON");
                            VertexClientPE.saveMainSettings();
                        }
                    }
                    }));
					
					var commandsTitle = clientSectionTitle("Commands", "rainbow");
					
					var commandsSettingFunc = new settingButton("Commands", "Toggle commands off to login on servers like Mineplex PE.");
                    var commandsSettingButton = commandsSettingFunc.getButton();
                    if(commandsSetting == "on") {
                        commandsSettingButton.setText("ON");
                    } else if(commandsSetting == "off") {
                        commandsSettingButton.setText("OFF");
                    }
                    commandsSettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
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
					
					var cmdPrefixFunc = new settingButton("Command prefix", "Change the first character of all Vertex Client PE commands.");
                    var cmdPrefixButton = cmdPrefixFunc.getButton();
                    cmdPrefixButton.setText(cmdPrefix);
                    cmdPrefixButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
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
                    
                    var otherTitle = clientSectionTitle("Other", "rainbow");
                    
					var showNewsSettingFunc = new settingButton("Show news", "Show news at start.");
                    var showNewsSettingButton = showNewsSettingFunc.getButton();
                    if(showNewsSetting == "on") {
                        showNewsSettingButton.setText("ON");
                    } else if(showNewsSetting == "off") {
                        showNewsSettingButton.setText("OFF");
                    }
                    showNewsSettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        if(showNewsSetting == "on") {
                            showNewsSetting = "off";
                            showNewsSettingButton.setText("OFF");
                            VertexClientPE.saveMainSettings();
                        } else if(showNewsSetting == "off") {
                            showNewsSetting = "on";
                            showNewsSettingButton.setText("ON");
                            VertexClientPE.saveMainSettings();
                        }
                    }
                    }));
					
					var showMoneyToastsSettingFunc = new settingButton("Show money updates", "Show a toast message when earning V€rt€xCash.");
                    var showMoneyToastsSettingButton = showMoneyToastsSettingFunc.getButton();
                    if(showMoneyToastsSetting == "on") {
                        showMoneyToastsSettingButton.setText("ON");
                    } else if(showMoneyToastsSetting == "off") {
                        showMoneyToastsSettingButton.setText("OFF");
                    }
                    showMoneyToastsSettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        if(showMoneyToastsSetting == "on") {
                            showMoneyToastsSetting = "off";
                            showMoneyToastsSettingButton.setText("OFF");
                        } else if(showMoneyToastsSetting == "off") {
                            showMoneyToastsSetting = "on";
                            showMoneyToastsSettingButton.setText("ON");
                        }
						VertexClientPE.saveMainSettings();
                    }
                    }));
                    
					var playMusicSettingFunc = new settingButton("Automatically play music", "Automatically play music.");
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
                    onClick: function(viewarg){
                        //if(playMusicSetting == "on") {
                        if(playMusicSetting == "off") {
                            playMusicSetting = "shuffle";
                            playMusicSettingButton.setText("Shuffle");
                            VertexClientPE.saveMainSettings();
                        } else if(playMusicSetting == "shuffle") {
                            playMusicSetting = "off";
                            playMusicSettingButton.setText("OFF");
                            VertexClientPE.saveMainSettings();
                        }/* else if(playMusicSetting == "off") {
                            playMusicSetting = "on";
                            playMusicSettingButton.setText("Normal");
                            VertexClientPE.saveMainSettings();
                            VertexClientPE.loadMainSettings();
                            VertexClientPE.resetMusic();
                            //VertexClientPE.playMusic();
                            print("This mode is not ready yet!");
                        }*/
                    }
                    }));
					
					var webBrowserStartPageSettingFunc = new settingButton("Webbrowser startpage", "Change the default webbrowser page.");
                    var webBrowserStartPageSettingButton = webBrowserStartPageSettingFunc.getButton();
                    webBrowserStartPageSettingButton.setText("Change");
                    webBrowserStartPageSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewarg) {
							VertexClientPE.showWebbrowserStartPageDialog();
						}
                    }));
                    
                    settingsMenuLayout.addView(generalTitle);
                    VertexClientPE.addView(settingsMenuLayout, hacksListModeSettingFunc);
                    VertexClientPE.addView(settingsMenuLayout, tabGUIModeSettingFunc);
                    VertexClientPE.addView(settingsMenuLayout, mainButtonPositionSettingFunc);
                    VertexClientPE.addView(settingsMenuLayout, mainButtonStyleSettingFunc);
                    VertexClientPE.addView(settingsMenuLayout, mainButtonTapSettingFunc);
                    VertexClientPE.addView(settingsMenuLayout, shortcutManagerSettingFunc);
                    settingsMenuLayout.addView(themeTitle);
					VertexClientPE.addView(settingsMenuLayout, themeSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, useLightThemeSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, buttonStyleSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, backgroundStyleSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, transparentBgSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, mcpeGUISettingFunc);
					VertexClientPE.addView(settingsMenuLayout, fontSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, modButtonColorBlockedSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, modButtonColorEnabledSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, modButtonColorDisabledSettingFunc);
                    settingsMenuLayout.addView(menuTitle);
					VertexClientPE.addView(settingsMenuLayout, menuTypeSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, sizeSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, menuAnimationsSettingFunc);
					settingsMenuLayout.addView(commandsTitle);
					VertexClientPE.addView(settingsMenuLayout, commandsSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, cmdPrefixFunc);
                    settingsMenuLayout.addView(otherTitle);
					VertexClientPE.addView(settingsMenuLayout, showNewsSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, showMoneyToastsSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, playMusicSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, webBrowserStartPageSettingFunc);

                    settingsMenu = new PopupWindow_(settingsMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                    settingsMenu.setBackgroundDrawable(backgroundGradient());
                    settingsMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
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
					if(shortcutGUI != null) {
                        if(shortcutGUI.isShowing()) {
                            shortcutGUI.dismiss();
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
                    
                    var devSettingsMenuLayout = new LinearLayout_(CONTEXT);
                    devSettingsMenuLayout.setOrientation(1);
                    devSettingsMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
                    
                    var devSettingsMenuScroll = new ScrollView(CONTEXT);
                    
                    var devSettingsMenuLayout1 = new LinearLayout_(CONTEXT);
                    devSettingsMenuLayout1.setOrientation(1);
                    devSettingsMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
                    
                    var devSettingsTitle = clientScreenTitle("Developer Settings");
                    devSettingsMenuLayout1.addView(devSettingsTitle);
                    
                    devSettingsMenuScroll.addView(devSettingsMenuLayout);
                    devSettingsMenuLayout1.addView(devSettingsMenuScroll);
                    
                    var generalTitle = clientSectionTitle("General", "rainbow");
                    
                    var debugModeSettingFunc = new settingButton("Debug mode", "Show debug messages.");
                    var debugModeSettingButton = debugModeSettingFunc.getButton();
                    if(VertexClientPE.isDebugMode()) {
                        debugModeSettingButton.setText("ON");
                    } else {
                        debugModeSettingButton.setText("OFF");
                    }
                    debugModeSettingButton.setOnClickListener(new View_.OnClickListener({
                        onClick: function(viewarg){
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
                        onClick: function(viewarg){
                            VertexClientPE.setIsExpMode(!VertexClientPE.isExpMode());
							if(VertexClientPE.isExpMode()) {
								expModeSettingButton.setText("ON");
							} else {
								expModeSettingButton.setText("OFF");
							}
                        }
                    }));
					
					var dataTitle = clientSectionTitle("Data", "rainbow");
					
					var resetDataSettingFunc = new settingButton("Reset all data", "Resets all data (including Pro).");
                    var resetDataSettingButton = resetDataSettingFunc.getButton();
                    resetDataSettingButton.setText("Reset");
                    resetDataSettingButton.setOnClickListener(new View_.OnClickListener({
                        onClick: function(viewarg){
                            VertexClientPE.resetData();
                        }
                    }));
                    
                    devSettingsMenuLayout.addView(generalTitle);
                    VertexClientPE.addView(devSettingsMenuLayout, debugModeSettingFunc);
                    VertexClientPE.addView(devSettingsMenuLayout, expModeSettingFunc);
					devSettingsMenuLayout.addView(dataTitle);
                    VertexClientPE.addView(devSettingsMenuLayout, resetDataSettingFunc);

                    devSettingsMenu = new PopupWindow_(devSettingsMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                    devSettingsMenu.setBackgroundDrawable(backgroundGradient());
                    devSettingsMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
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
					if(shortcutGUI != null) {
                        if(shortcutGUI.isShowing()) {
                            shortcutGUI.dismiss();
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
                    
                    var informationText = clientTextView("\u00A9 peacestorm, imYannic, _TXMO, LPMG and Astro36 | 2015 - 2016. Some rights reserved.\nThanks to @_TXMO for the original button graphics and @imYannic for some other graphic designs.", true);
                    
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

                    informationMenu = new PopupWindow_(informationMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                    informationMenu.setBackgroundDrawable(backgroundGradient());
                    informationMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                } catch(error) {
                    print('An error occurred: ' + error);
                }
            }
        }));
}

var helpSections = [["Where do I report issues?", "You can report issues at http://bit.ly/VertexIssues."], ["How do I earn V€rt€xCash?", "Normal users earn 10 V€rt€xCash every minute, Pro users earn 20 every minute. In addition, Pro users get 500 V€rt€xCash as a gift."], ["How can I add shortcuts?", "Tap the star button in a mod's ... dialog or long click on a tile and then tap on the favorite button to make it favorite. The mod will now have its own shortcut."], ["Website", "Our website is http://Vertex-Client.ml/."], ["Twitter", "Our Twitter account is @VertexHX."]];

function helpScreen() {
    VertexClientPE.menuIsShowing = true;
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
					if(shortcutGUI != null) {
                        if(shortcutGUI.isShowing()) {
                            shortcutGUI.dismiss();
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

                    helpMenu = new PopupWindow_(helpMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                    helpMenu.setBackgroundDrawable(backgroundGradient());
                    helpMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
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
					if(shortcutGUI != null) {
                        if(shortcutGUI.isShowing()) {
                            shortcutGUI.dismiss();
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

                    previewMenu = new PopupWindow_(previewMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                    previewMenu.setBackgroundDrawable(backgroundGradient());
					previewMenu.setOnDismissListener(new PopupWindow_.OnDismissListener() {
						onDismiss: function() {
							previewWebView.loadUrl("about:blank");
							if(exitPreviewUI != null) {
								if(exitPreviewUI.isShowing()) {
									exitPreviewUI.dismiss()
								}
							}
						}
					});
                    previewMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
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
					if(shortcutGUI != null) {
                        if(shortcutGUI.isShowing()) {
                            shortcutGUI.dismiss();
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

                    addonMenu = new PopupWindow_(addonMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                    addonMenu.setBackgroundDrawable(backgroundGradient());
                    addonMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
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

                milestonesMenu = new PopupWindow_(scrollView, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                milestonesMenu.setBackgroundDrawable(backgroundGradient());
                milestonesMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
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
					if(shortcutGUI != null) {
                        if(shortcutGUI.isShowing()) {
                            shortcutGUI.dismiss();
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
					
					var killToMorphSettingButton = new Switch_(CONTEXT);
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

                    playerCustomizerMenu = new PopupWindow_(playerCustomizerLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                    playerCustomizerMenu.setBackgroundDrawable(backgroundGradient());
                    playerCustomizerMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
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
					if(shortcutGUI != null) {
                        if(shortcutGUI.isShowing()) {
                            shortcutGUI.dismiss();
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
                    
                    var antiLagDropRemoverButton = new Switch_(CONTEXT);
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
					
					var betterPauseButton = new Switch_(CONTEXT);
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

                    optiFineMenu = new PopupWindow_(optiFineLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                    optiFineMenu.setBackgroundDrawable(backgroundGradient());
                    optiFineMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                } catch(error) {
                    print('An error occurred: ' + error);
                }
            }
        }));
}

var shopCashText;

function shopScreen() {
    VertexClientPE.menuIsShowing = true;
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
					if(shortcutGUI != null) {
                        if(shortcutGUI.isShowing()) {
                            shortcutGUI.dismiss();
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

                    var shopMenuLayout = new LinearLayout_(CONTEXT);
                    shopMenuLayout.setOrientation(1);
                    shopMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
                    
                    var shopMenuLayoutScroll = new ScrollView(CONTEXT);
                    
                    var shopMenuLayout1 = new LinearLayout_(CONTEXT);
                    shopMenuLayout1.setOrientation(1);
                    shopMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
                    shopMenuLayout1.setPadding(10, 0, 10, 0);
                    
                    var shopTitle = clientTextView("Shop", true);
                    shopTitle.setTextSize(25);
                    shopTitle.setGravity(Gravity_.CENTER);
                    shopMenuLayout1.addView(shopTitle);
                    
                    var shopCashLayout = new LinearLayout_(CONTEXT);
                    shopCashLayout.setOrientation(1);
                    shopCashLayout.setLayoutParams(new ViewGroup_.LayoutParams(ViewGroup_.LayoutParams.WRAP_CONTENT, ViewGroup_.LayoutParams.WRAP_CONTENT));
                    shopCashLayout.setBackground(backgroundSpecial(16));
                    shopCashText = clientTextView("\u26C1 " + VertexClientPE.getVertexCash());
                    shopCashText.setTextColor(Color_.parseColor("#FFD700"));
                    shopCashText.setGravity(Gravity_.CENTER);
                    shopCashText.setPadding(10, 10, 10, 10);
                    shopCashLayout.addView(shopCashText);
                    
                    shopMenuLayout1.addView(shopCashLayout);
                    shopMenuLayout1.addView(clientTextView("\n"));
                    shopMenuLayoutScroll.addView(shopMenuLayout);
                    shopMenuLayout1.addView(shopMenuLayoutScroll);
                    
                    VertexClientPE.shopFeatures.forEach(function(element, index, array) {
                        shopMenuLayout.addView(new shopFeatureButton(element, shopCashText));
                    });

                    shopMenu = new PopupWindow_(shopMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                    shopMenu.setBackgroundDrawable(backgroundGradient());
                    shopMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
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
					if(shortcutGUI != null) {
                        if(shortcutGUI.isShowing()) {
                            shortcutGUI.dismiss();
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

                    var updateCenterMenuLayout = new LinearLayout_(CONTEXT);
                    updateCenterMenuLayout.setOrientation(1);
                    updateCenterMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
                    
                    var updateCenterMenuLayoutScroll = new ScrollView(CONTEXT);
                    
                    var updateCenterMenuLayout1 = new LinearLayout_(CONTEXT);
                    updateCenterMenuLayout1.setOrientation(1);
                    updateCenterMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
                    updateCenterMenuLayout1.setPadding(10, 0, 10, 0);
                    
                    var updateCenterTitle = clientScreenTitle("Update Center");
                    
                    updateCenterMenuLayout1.addView(updateCenterTitle);
                    updateCenterMenuLayout1.addView(clientTextView("\n"));
                    updateCenterMenuLayoutScroll.addView(updateCenterMenuLayout);
                    updateCenterMenuLayout1.addView(updateCenterMenuLayoutScroll);
                    
                    var latestUpdateView = updatePaneButton(VertexClientPE.latestVersion, VertexClientPE.latestVersionDesc);
                    var updateEnterView = new TextView_(CONTEXT);
                    updateEnterView.setText("\n");
                    var currentUpdateView = updatePaneButton(VertexClientPE.currentVersion, VertexClientPE.currentVersionDesc);
                    
                    if(VertexClientPE.latestVersion != VertexClientPE.currentVersion) {
                        updateCenterMenuLayout.addView(latestUpdateView);
                        updateCenterMenuLayout.addView(updateEnterView);
                    }
                    updateCenterMenuLayout.addView(currentUpdateView);

                    updateCenterMenu = new PopupWindow_(updateCenterMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                    updateCenterMenu.setBackgroundDrawable(backgroundGradient());
                    updateCenterMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
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
					if(shortcutGUI != null) {
                        if(shortcutGUI.isShowing()) {
                            shortcutGUI.dismiss();
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

                    musicPlayerMenu = new PopupWindow_(musicPlayerMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                    musicPlayerMenu.setBackgroundDrawable(backgroundGradient());
                    musicPlayerMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                } catch(error) {
                    print('An error occurred: ' + error);
                    clientMessage(error);
                }
            }
        }));
}

function dashboardScreen() {
    VertexClientPE.menuIsShowing = true;
    CONTEXT.runOnUiThread(new Runnable_({
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
				if(mainMenuTextList != null) {
					if(mainMenuTextList.isShowing()) {
						mainMenuTextList.dismiss();
					}
				}
				if(shortcutGUI != null) {
					if(shortcutGUI.isShowing()) {
						shortcutGUI.dismiss();
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
                
                dashboardMenu = new PopupWindow_(dashboardMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                dashboardMenu.setBackgroundDrawable(backgroundGradient());
                dashboardMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
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
				if(shortcutGUI != null) {
                    if(shortcutGUI.isShowing()) {
                        shortcutGUI.dismiss();
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

                webBrowserMenu = new PopupWindow_(webBrowserMenuLayout, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight(), true);
                webBrowserMenu.setBackgroundDrawable(backgroundGradient());
                webBrowserMenu.setOnDismissListener(new PopupWindow_.OnDismissListener() {
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
                webBrowserMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
            } catch(error) {
                print('An error occurred: ' + error);
            }
        }
    }));
}

VertexClientPE.showMenuBar = function() {
    var display = new DisplayMetrics_();
    CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var menuBarWidth = menuType=="normal"?CONTEXT.getWindowManager().getDefaultDisplay().getWidth():CONTEXT.getWindowManager().getDefaultDisplay().getWidth()/1.8;
                
                var menuBarLayout = new LinearLayout_(CONTEXT);
                menuBarLayout.setOrientation(1);
                
                var menuBarTextView = clientTextView(news, true);
                menuBarTextView.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
                menuBarTextView.setMarqueeRepeatLimit(-1);
                menuBarTextView.setSingleLine();
                menuBarTextView.setHorizontallyScrolling(true);
                menuBarTextView.setSelected(true);
                
                menuBarLayout.addView(menuBarTextView);
                
                menuBar = new PopupWindow_(menuBarLayout, menuBarWidth - dip2px(90), screenHeight / 20);
                menuBar.setBackgroundDrawable(backgroundSpecial("bottom"));
                menuBar.setTouchable(false);
                menuBar.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.CENTER | Gravity_.TOP, 0, 0);
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
    if(mainButtonTapSetting == "menu") {
		menuBtn.setBackgroundDrawable(iconClickedClientGUI);
	}
    if(menuType == "normal") {
        VertexClientPE.showCategoryMenus();
		VertexClientPE.showMenuBar();
    } else if(menuType == "halfscreen" || menuType == "halfscreen_top") {
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
        if(vertexclientpemiscmenu != null) {
            if(vertexclientpemiscmenu.isShowing()) {
                vertexclientpecombatmenu.dismiss();
                vertexclientpebuildingmenu.dismiss();
                vertexclientpemovementmenu.dismiss();
                vertexclientpechatmenu.dismiss();
                vertexclientpemiscmenu.dismiss();
            }
        }
    } else if(menuType == "halfscreen" || menuType == "halfscreen_top") {
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
	if(menuBar != null) {
		if(menuBar.isShowing()) {
			menuBar.dismiss();
		}
	}
    if(GUI != null) {
        if(GUI.isShowing()) {
			if(mainButtonTapSetting == "menu") {
				menuBtn.setBackgroundDrawable(iconClientGUI);
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
					if(shortcutGUI != null) {
                        if(shortcutGUI.isShowing()) {
                            shortcutGUI.dismiss();
                        }
                    }
					if(mainMenuTextList != null) {
						if(mainMenuTextList.isShowing()) {
                            mainMenuTextList.dismiss();
                        }
					}
					if(pauseUtilitiesUI != null) {
						if(pauseUtilitiesUI.isShowing()) {
							pauseUtilitiesUI.dismiss();
						}
					}
					
					var fullScreenMenuLayoutScroll = new android.widget.HorizontalScrollView(CONTEXT);

                    var fullScreenMenuLayout = new LinearLayout_(CONTEXT);
                    fullScreenMenuLayout.setOrientation(LinearLayout_.HORIZONTAL);
                    fullScreenMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
					
					fullScreenMenuLayoutScroll.addView(fullScreenMenuLayout);
                    
					var fullScreenMenuLayout1Combat = new LinearLayout_(CONTEXT);
					fullScreenMenuLayout1Combat.setOrientation(1);
					fullScreenMenuLayout1Combat.setGravity(Gravity_.CENTER_HORIZONTAL);
                    var fullScreenMenuLayout1Building = new LinearLayout_(CONTEXT);
					fullScreenMenuLayout1Building.setOrientation(1);
					fullScreenMenuLayout1Building.setGravity(Gravity_.CENTER_HORIZONTAL);
                    var fullScreenMenuLayout1Movement = new LinearLayout_(CONTEXT);
					fullScreenMenuLayout1Movement.setOrientation(1);
					fullScreenMenuLayout1Movement.setGravity(Gravity_.CENTER_HORIZONTAL);
                    var fullScreenMenuLayout1Chat = new LinearLayout_(CONTEXT);
					fullScreenMenuLayout1Chat.setOrientation(1);
					fullScreenMenuLayout1Chat.setGravity(Gravity_.CENTER_HORIZONTAL);
                    var fullScreenMenuLayout1Misc = new LinearLayout_(CONTEXT);
					fullScreenMenuLayout1Misc.setOrientation(1);
					fullScreenMenuLayout1Misc.setGravity(Gravity_.CENTER_HORIZONTAL);
					
					var combatSectionTitle = coloredSubTitle(combatName);
					combatSectionTitle.setGravity(Gravity_.CENTER);
					var buildingSectionTitle = coloredSubTitle(buildingName);
					buildingSectionTitle.setGravity(Gravity_.CENTER);
					var movementSectionTitle = coloredSubTitle(movementName);
					movementSectionTitle.setGravity(Gravity_.CENTER);
					var chatSectionTitle = coloredSubTitle(chatName);
					chatSectionTitle.setGravity(Gravity_.CENTER);
					var miscSectionTitle = coloredSubTitle(miscName);
					miscSectionTitle.setGravity(Gravity_.CENTER);
					
					fullScreenMenuLayout1Combat.addView(combatSectionTitle);
					fullScreenMenuLayout1Building.addView(buildingSectionTitle);
					fullScreenMenuLayout1Movement.addView(movementSectionTitle);
					fullScreenMenuLayout1Chat.addView(chatSectionTitle);
					fullScreenMenuLayout1Misc.addView(miscSectionTitle);
					
                    var fullScreenMenuLayoutScrollCombat = new ScrollView(CONTEXT);
                    var fullScreenMenuLayoutScrollBuilding = new ScrollView(CONTEXT);
                    var fullScreenMenuLayoutScrollMovement = new ScrollView(CONTEXT);
                    var fullScreenMenuLayoutScrollChat = new ScrollView(CONTEXT);
                    var fullScreenMenuLayoutScrollMisc = new ScrollView(CONTEXT);
					
					var fullScreenMenuLayoutCombat = new LinearLayout_(CONTEXT);
					fullScreenMenuLayoutCombat.setOrientation(1);
                    var fullScreenMenuLayoutBuilding = new LinearLayout_(CONTEXT);
					fullScreenMenuLayoutBuilding.setOrientation(1);
                    var fullScreenMenuLayoutMovement = new LinearLayout_(CONTEXT);
					fullScreenMenuLayoutMovement.setOrientation(1);
                    var fullScreenMenuLayoutChat = new LinearLayout_(CONTEXT);
					fullScreenMenuLayoutChat.setOrientation(1);
                    var fullScreenMenuLayoutMisc = new LinearLayout_(CONTEXT);
					fullScreenMenuLayoutMisc.setOrientation(1);
					
					fullScreenMenuLayoutScrollCombat.addView(fullScreenMenuLayoutCombat);
					fullScreenMenuLayoutScrollBuilding.addView(fullScreenMenuLayoutBuilding);
					fullScreenMenuLayoutScrollMovement.addView(fullScreenMenuLayoutMovement);
					fullScreenMenuLayoutScrollChat.addView(fullScreenMenuLayoutChat);
					fullScreenMenuLayoutScrollMisc.addView(fullScreenMenuLayoutMisc);
					
					fullScreenMenuLayout1Combat.addView(fullScreenMenuLayoutScrollCombat);
					fullScreenMenuLayout1Building.addView(fullScreenMenuLayoutScrollBuilding);
					fullScreenMenuLayout1Movement.addView(fullScreenMenuLayoutScrollMovement);
					fullScreenMenuLayout1Chat.addView(fullScreenMenuLayoutScrollChat);
					fullScreenMenuLayout1Misc.addView(fullScreenMenuLayoutScrollMisc);
					
					fullScreenMenuLayout.addView(fullScreenMenuLayout1Combat);
					fullScreenMenuLayout.addView(fullScreenMenuLayout1Building);
					fullScreenMenuLayout.addView(fullScreenMenuLayout1Movement);
					fullScreenMenuLayout.addView(fullScreenMenuLayout1Chat);
					fullScreenMenuLayout.addView(fullScreenMenuLayout1Misc);
                    
                    var fullScreenMenuLayout1 = new LinearLayout_(CONTEXT);
                    fullScreenMenuLayout1.setOrientation(1);
                    fullScreenMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
                    fullScreenMenuLayout1.setPadding(10, 0, 10, 0);
                    
                    fullScreenMenuLayout1.addView(clientTextView("\n"));
                    fullScreenMenuLayout1.addView(fullScreenMenuLayoutScroll);
                    
                    VertexClientPE.modules.forEach(function (element, index, array) {
						if (element.type == "Mod" || element.type == "Special") {
							if(element.isExpMod && element.isExpMod() && !VertexClientPE.isExpMode()) {
								return;
							}
							if (element.category == VertexClientPE.category.COMBAT) {
								fullScreenMenuLayoutCombat.addView(new modButton(element));
							} else if (element.category == VertexClientPE.category.BUILDING) {
								fullScreenMenuLayoutBuilding.addView(new modButton(element));
							} else if (element.category == VertexClientPE.category.MOVEMENT) {
								fullScreenMenuLayoutMovement.addView(new modButton(element));
							} else if (element.category == VertexClientPE.category.CHAT) {
								fullScreenMenuLayoutChat.addView(new modButton(element));
							} else if (element.category == VertexClientPE.category.MISC) {
								fullScreenMenuLayoutMisc.addView(new modButton(element));
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
						} else {
							GUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
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
    CONTEXT.runOnUiThread(new Runnable_({ run: function(){
    try{
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
		if(mainButtonPositionSetting == "top-left") {
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
	} else if(menuType == "halfscreen_top") {
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
    
    var categories = [VertexClientPE.category.COMBAT, VertexClientPE.category.BUILDING, VertexClientPE.category.MOVEMENT, VertexClientPE.category.CHAT, VertexClientPE.category.MISC];
    
    categories.forEach(function(element, index, array) {
        menuMiddleLayout.addView(new categoryTab(element));
    });
    
    VertexClientPE.modules.forEach(function(element, index, array) {
        if(VertexClientPE.category.toRealName(element.category) == currentTab && (element.type == "Mod" || element.type == "Special")) {
			if(element.isExpMod && element.isExpMod() && !VertexClientPE.isExpMode()) {
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
	}
    menu.setBackgroundDrawable(backgroundGradient());
    menu.setAnimationStyle(android.R.style.Animation_Translucent);
	if(menuType == "halfscreen") {
		if(mainButtonPositionSetting == "top-left") {
			menu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.BOTTOM, 0, 0);
		} else {
			menu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.BOTTOM, 0, 0);
		}
	} else if(menuType == "halfscreen_top") {
		menu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.CENTER | Gravity_.TOP, 0, 0);
		if(GUI != null) {
			GUI.dismiss();
			if(mainButtonPositionSetting == "top-right") {
				GUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
			} else {
				GUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
			}
		}
	}
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
var buildingMenuShown = false;
var movementMenuShown = false;
var chatMenuShown = false;
var miscMenuShown = false;

VertexClientPE.showCategoryMenus = function () {
    CONTEXT.runOnUiThread({
        run() {
            try {
                var display = new DisplayMetrics_(),
                    combatMenuLayout = new LinearLayout_(CONTEXT),
                    combatMenuLayout1 = new LinearLayout_(CONTEXT),
                    combatMenuScrollView = new ScrollView(CONTEXT),
                    combat = new categoryTitle(combatName, true),
                    combatSettings = combat.getLeftButton(),
                    combatTitle = combat.getMiddleButton(),
                    combatArrow = combat.getRightButton(),
                    buildingMenuLayout = new LinearLayout_(CONTEXT),
                    buildingMenuLayout1 = new LinearLayout_(CONTEXT),
                    buildingMenuScrollView = new ScrollView(CONTEXT),
                    building = new categoryTitle(buildingName, true);
                    buildingSettings = building.getLeftButton(),
                    buildingTitle = building.getMiddleButton(),
                    buildingArrow = building.getRightButton(),
                    movementMenuLayout = new LinearLayout_(CONTEXT),
                    movementMenuLayout1 = new LinearLayout_(CONTEXT),
                    movementMenuScrollView = new ScrollView(CONTEXT),
                    movement = new categoryTitle(movementName, true),
                    movementSettings = movement.getLeftButton(),
                    movementTitle = movement.getMiddleButton(),
                    movementArrow = movement.getRightButton(),
                    chatMenuLayout = new LinearLayout_(CONTEXT),
                    chatMenuLayout1 = new LinearLayout_(CONTEXT),
                    chatMenuScrollView = new ScrollView(CONTEXT),
                    chat = new categoryTitle(chatName, true),
                    chatSettings = chat.getLeftButton(),
                    chatTitle = chat.getMiddleButton(),
                    chatArrow = chat.getRightButton(),
                    miscMenuLayout = new LinearLayout_(CONTEXT),
                    miscMenuLayout1 = new LinearLayout_(CONTEXT),
                    miscMenuScrollView = new ScrollView(CONTEXT),
                    misc = new categoryTitle(miscName, true),
                    miscSettings = misc.getLeftButton(),
                    miscTitle = misc.getMiddleButton(),
                    miscArrow = misc.getRightButton();

                vertexclientpecombatmenu = new PopupWindow_(CONTEXT);
                vertexclientpebuildingmenu = new PopupWindow_(CONTEXT),
				vertexclientpemovementmenu = new PopupWindow_(CONTEXT),
				vertexclientpechatmenu = new PopupWindow_(CONTEXT);
                vertexclientpemiscmenu = new PopupWindow_(CONTEXT);

                CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
                VertexClientPE.loadMainSettings();

                VertexClientPE.modules.forEach(function (element, index, array) {
                    if (element.type == "Mod" || element.type == "Special") {
						if(element.isExpMod && element.isExpMod() && !VertexClientPE.isExpMode()) {
							return;
						}
                        if (element.category == VertexClientPE.category.COMBAT) {
                            combatMenuLayout.addView(new modButton(element));
                        } else if (element.category == VertexClientPE.category.BUILDING) {
                            buildingMenuLayout.addView(new modButton(element));
                        } else if (element.category == VertexClientPE.category.MOVEMENT) {
                            movementMenuLayout.addView(new modButton(element));
                        } else if (element.category == VertexClientPE.category.CHAT) {
                            chatMenuLayout.addView(new modButton(element));
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
                    onClick(viewarg) {
                        if (combatMenuShown == true) {
                            combatMenuLayout1.removeView(combatMenuScrollView);
                            combatArrow.setText("\u25BD");
                            combatMenuShown = false;
                        } else if (combatMenuShown == false) {
                            combatMenuLayout1.addView(combatMenuScrollView);
                            combatArrow.setText("\u25B3");
                            combatMenuShown = true;
                        }
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
                            }
                            if (a == 1) combatdown = false;
                        }
                        return false;
                    }
                }));

                vertexclientpecombatmenu.setContentView(combatMenuLayout1);
                vertexclientpecombatmenu.setBackgroundDrawable(backgroundSpecial(true, "#80212121"));
                vertexclientpecombatmenu.setWidth(LinearLayout_.LayoutParams.WRAP_CONTENT);
                vertexclientpecombatmenu.setHeight(screenHeight / 2 - customHeight);
                if (menuAnimationsSetting == "on") {
                    vertexclientpecombatmenu.setAnimationStyle(android.R.style.Animation_Dialog);
                }
                vertexclientpecombatmenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.BOTTOM | Gravity_.RIGHT, combattpopx, combattpopy);

                // Building
                buildingMenuLayout.setOrientation(1);
                buildingMenuLayout1.setOrientation(1);
                buildingMenuScrollView.addView(buildingMenuLayout);

                buildingSettings.setOnClickListener(new View_.OnClickListener({
                    onClick: function () {
                        VertexClientPE.showCategoryDialog(building, buildingName, 1);
                    }
                }));

                VertexClientPE.addView(buildingMenuLayout1, building);

                if (buildingMenuShown == true) {
                    buildingArrow.setText("\u25B3");
                    buildingMenuLayout1.addView(buildingMenuScrollView);
                } else if (buildingMenuShown == false) {
                    buildingArrow.setText("\u25BD");
                }

                buildingArrow.setOnClickListener(new View_.OnClickListener() {
                    onClick: function (viewarg) {
                        if (buildingMenuShown == true) {
                            buildingMenuLayout1.removeView(buildingMenuScrollView);
                            buildingArrow.setText("\u25BD");
                            buildingMenuShown = false;
                        } else if (buildingMenuShown == false) {
                            buildingMenuLayout1.addView(buildingMenuScrollView);
                            buildingArrow.setText("\u25B3");
                            buildingMenuShown = true;
                        }
                    }
                });
                buildingTitle.setOnLongClickListener(new View_.OnLongClickListener() {
                    onLongClick: function (v, t) {
                        buildingdown = true;
                        VertexClientPE.toast("Now you can move the menu!");
                        return true;
                    }
                });
                buildingTitle.setOnTouchListener(new View_.OnTouchListener({
                    onTouch: function (v, e) {
                        if (!buildingdown) {
                            buildingmX = e.getX()
                            buildingmY = e.getY()
                        }
                        if (buildingdown) {
                            var a = e.getAction()
                            if (a == 2) {
                                var X = parseInt(e.getX() - buildingmX) * -1 / 10;
                                var Y = parseInt(e.getY() - buildingmY) * -1 / 10;
                                buildingtpopx = buildingtpopx + X;
                                buildingtpopy = buildingtpopy + Y;
                                vertexclientpebuildingmenu.update(parseInt(buildingtpopx), parseInt(buildingtpopy), -1, -1);
                            }
                            if (a == 1) buildingdown = false;
                        }
                        return false;
                    }
                }));

                vertexclientpebuildingmenu.setContentView(buildingMenuLayout1);
                vertexclientpebuildingmenu.setBackgroundDrawable(backgroundSpecial(true, "#80212121"));
                vertexclientpebuildingmenu.setWidth(LinearLayout_.LayoutParams.WRAP_CONTENT);
                vertexclientpebuildingmenu.setHeight(screenHeight / 2 - customHeight);
                if (menuAnimationsSetting == "on") {
                    vertexclientpebuildingmenu.setAnimationStyle(android.R.style.Animation_Dialog);
                }
                vertexclientpebuildingmenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.BOTTOM | Gravity_.RIGHT, buildingtpopx, buildingtpopy);

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
                    onClick: function (viewarg) {
                        if (movementMenuShown == true) {
                            movementMenuLayout1.removeView(movementMenuScrollView);
                            movementArrow.setText("\u25BD");
                            movementMenuShown = false;
                        } else if (movementMenuShown == false) {
                            movementMenuLayout1.addView(movementMenuScrollView);
                            movementArrow.setText("\u25B3");
                            movementMenuShown = true;
                        }
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
                            movementmX = e.getX()
                            movementmY = e.getY()
                        }
                        if (movementdown) {
                            var a = e.getAction()
                            if (a == 2) {
                                var X = parseInt(e.getX() - movementmX) * -1 / 10;
                                var Y = parseInt(e.getY() - movementmY) * -1 / 10;
                                movementtpopx = movementtpopx + X;
                                movementtpopy = movementtpopy + Y;
                                vertexclientpemovementmenu.update(parseInt(movementtpopx), parseInt(movementtpopy), -1, -1);
                            }
                            if (a == 1) movementdown = false;
                        }
                        return false;
                    }
                }));

                vertexclientpemovementmenu.setContentView(movementMenuLayout1);
                vertexclientpemovementmenu.setBackgroundDrawable(backgroundSpecial(true, "#80212121"));
                vertexclientpemovementmenu.setWidth(LinearLayout_.LayoutParams.WRAP_CONTENT);
                vertexclientpemovementmenu.setHeight(screenHeight / 2 - customHeight);
                if (menuAnimationsSetting == "on") {
                    vertexclientpemovementmenu.setAnimationStyle(android.R.style.Animation_Dialog);
                }
                vertexclientpemovementmenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.BOTTOM | Gravity_.RIGHT, movementtpopx, movementtpopy);

                // Chat
                chatMenuLayout.setOrientation(1);
                chatMenuLayout1.setOrientation(1);
                chatMenuScrollView.addView(chatMenuLayout);
                chatSettings.setOnClickListener(new View_.OnClickListener({
                    onClick: function () {
                        VertexClientPE.showCategoryDialog(chat, chatName, 3);
                    }
                }));

                VertexClientPE.addView(chatMenuLayout1, chat);

                if (chatMenuShown == true) {
                    chatArrow.setText("\u25B3");
                    chatMenuLayout1.addView(chatMenuScrollView);
                } else if (chatMenuShown == false) {
                    chatArrow.setText("\u25BD");
                }

                chatArrow.setOnClickListener(new View_.OnClickListener() {
                    onClick: function (viewarg) {
                        if (chatMenuShown == true) {
                            chatMenuLayout1.removeView(chatMenuScrollView);
                            chatArrow.setText("\u25BD");
                            chatMenuShown = false;
                        } else if (chatMenuShown == false) {
                            chatMenuLayout1.addView(chatMenuScrollView);
                            chatArrow.setText("\u25B3");
                            chatMenuShown = true;
                        }
                    }
                });
                chatTitle.setOnLongClickListener(new View_.OnLongClickListener() {
                    onLongClick: function (v, t) {
                        chatdown = true;
                        VertexClientPE.toast("Now you can move the menu!");
                        return true;
                    }
                });
                chatTitle.setOnTouchListener(new View_.OnTouchListener({
                    onTouch: function (v, e) {
                        if (!chatdown) {
                            chatmX = e.getX()
                            chatmY = e.getY()
                        }
                        if (chatdown) {
                            var a = e.getAction()
                            if (a == 2) {
                                var X = parseInt(e.getX() - chatmX) * -1 / 10;
                                var Y = parseInt(e.getY() - chatmY) * -1 / 10;
                                chattpopx = chattpopx + X;
                                chattpopy = chattpopy + Y;
                                vertexclientpechatmenu.update(parseInt(chattpopx), parseInt(chattpopy), -1, -1);
                            }
                            if (a == 1) chatdown = false;
                        }
                        return false;
                    }
                }));

                vertexclientpechatmenu.setContentView(chatMenuLayout1);
                vertexclientpechatmenu.setBackgroundDrawable(backgroundSpecial(true, "#80212121"));
                vertexclientpechatmenu.setWidth(LinearLayout_.LayoutParams.WRAP_CONTENT);
                vertexclientpechatmenu.setHeight(screenHeight / 2 - customHeight);
                if (menuAnimationsSetting == "on") {
                    vertexclientpechatmenu.setAnimationStyle(android.R.style.Animation_Dialog);
                }
                vertexclientpechatmenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.BOTTOM | Gravity_.RIGHT, chattpopx, chattpopy);

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
                    onClick: function (viewarg) {
                        if (miscMenuShown == true) {
                            miscMenuLayout1.removeView(miscMenuScrollView);
                            miscArrow.setText("\u25BD");
                            miscMenuShown = false;
                        } else if (miscMenuShown == false) {
                            miscMenuLayout1.addView(miscMenuScrollView);
                            miscArrow.setText("\u25B3");
                            miscMenuShown = true;
                        }
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
                            miscmX = e.getX()
                            miscmY = e.getY()
                        }
                        if (miscdown) {
                            var a = e.getAction()
                            if (a == 2) {
                                var X = parseInt(e.getX() - miscmX) * -1 / 10;
                                var Y = parseInt(e.getY() - miscmY) * -1 / 10;
                                misctpopx = misctpopx + X;
                                misctpopy = misctpopy + Y;
                                vertexclientpemiscmenu.update(parseInt(misctpopx), parseInt(misctpopy), -1, -1);
                            }
                            if (a == 1) miscdown = false;
                        }
                        return false;
                    }
                }));

                vertexclientpemiscmenu.setContentView(miscMenuLayout1);
                vertexclientpemiscmenu.setBackgroundDrawable(backgroundSpecial(true, "#80212121"));
                vertexclientpemiscmenu.setWidth(LinearLayout_.LayoutParams.WRAP_CONTENT);
                vertexclientpemiscmenu.setHeight(screenHeight / 2 - customHeight);
                if (menuAnimationsSetting == "on") {
                    vertexclientpemiscmenu.setAnimationStyle(android.R.style.Animation_Dialog);
                }
                vertexclientpemiscmenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.BOTTOM | Gravity_.RIGHT, misctpopx, misctpopy);
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
	if(mainButtonTapSetting == "menu") {
		menuBtn.setBackgroundDrawable(iconClientGUI);
	} else if(mainButtonTapSetting == "moredialog") {
		menuBtn.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
		menuBtn.setText("\u2022\u2022\u2022");
		menuBtn.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
		menuBtn.setMarqueeRepeatLimit(-1);
		menuBtn.setSingleLine();
		menuBtn.setHorizontallyScrolling(true);
		menuBtn.setSelected(true);
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
	if(fontSetting == "minecraft") {
		MinecraftButtonLibrary.addMinecraftStyleToTextView(menuBtn);
	}
    menuBtn.setOnClickListener(new View_.OnClickListener({
		onClick: function(viewArg){
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
    if(menuAnimationsSetting == "on") {
        GUI.setAnimationStyle(android.R.style.Animation_Translucent);
    }
	
	var background;
	if(mainButtonStyleSetting == "normal") {
		if(mainButtonPositionSetting == "top-right") {
			background = backgroundSpecial("cornerleft", themeSetting, true);
		} else {
			background = backgroundSpecial("cornerright", themeSetting, true);
		}
	} else if(mainButtonStyleSetting == "global_background") {
		if(mainButtonPositionSetting == "top-right") {
			background = backgroundGradient("bottomleft");
		} else {
			background = backgroundGradient("bottomright");
		}
	} else if(mainButtonStyleSetting == "classic") {
		background = new ColorDrawable_(Color_.parseColor("#1D1D1D"));
	} else if(mainButtonStyleSetting == "no_background") {
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
    } else {
		if(mainButtonStyleSetting != "classic" && mainButtonStyleSetting != "global_background") {
			layout.setPadding(0, 0, 10, 10);
		} else {
			layout.setGravity(Gravity_.CENTER);
		}
        GUI.setBackgroundDrawable(background);
        GUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
    }
    
    if((currentScreen == ScreenType.ingame || currentScreen == ScreenType.hud) && VertexClientPE.playerIsInGame) {
		if(hacksList == null) {
			showHacksList();
			showTabGUI();
			showShortcuts();
		} else if(!hacksList.isShowing()) {
			showHacksList();
			showTabGUI();
			showShortcuts();
		}
    }
	if(currentScreen == ScreenType.start_screen) {
		if((mainMenuTextList == null || !mainMenuTextList.isShowing()) && !VertexClientPE.menuIsShowing && !VertexClientPE.playerIsInGame) {
			VertexClientPE.showStartScreenBar();
		}
	}
	if(currentScreen == ScreenType.pause_screen) {
		if((pauseUtilitiesUI == null || !pauseUtilitiesUI.isShowing()) && !VertexClientPE.menuIsShowing) {
			showPauseUtilities();
		}
	}
	if((accountManagerGUI == null || !accountManagerGUI.isShowing()) && !VertexClientPE.menuIsShowing && !VertexClientPE.playerIsInGame) {
		showAccountManagerButton();
	}
}

function showAccountManagerButton() {
    VertexClientPE.loadMainSettings();
    var layout = new LinearLayout_(CONTEXT);
    layout.setOrientation(1);
    var display = new DisplayMetrics_();
    CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
    var menuBtn = clientButton("AM");
    menuBtn.setLayoutParams(new LinearLayout_.LayoutParams(dip2px(40), dip2px(40)));
    menuBtn.setOnClickListener(new View_.OnClickListener({
		onClick: function(viewarg ){
			if(hacksList != null) {
				hacksList.dismiss();
			}
			if(tabGUI != null) {
				tabGUI.dismiss();
			}
			GUI.dismiss();
			accountManagerGUI.dismiss();
			VertexClientPE.showAccountManager(false);
			exitAccountManager(false);
		}
    }));
    layout.addView(menuBtn);
     
    accountManagerGUI = new PopupWindow_(layout, dip2px(40), dip2px(40));
    if(menuAnimationsSetting == "on") {
        accountManagerGUI.setAnimationStyle(android.R.style.Animation_Translucent);
    }
    accountManagerGUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
    accountManagerGUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.CENTER | Gravity_.BOTTOM, 0, 0);
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
                            statesText += sharedPref.getString("VertexClientPE.mods." + element.name + ".name", element.name);
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
					hacksList = new PopupWindow_(hacksListLayout, LinearLayout_.LayoutParams.WRAP_CONTENT, LinearLayout_.LayoutParams.WRAP_CONTENT);
					if(menuAnimationsSetting == "on") {
						hacksList.setAnimationStyle(android.R.style.Animation_Translucent);
					}
					hacksList.setBackgroundDrawable(backgroundGradient(true));
					hacksList.setTouchable(false);
					if(hacksListModeSetting != "off") {
						hacksList.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.CENTER | Gravity_.TOP, 0, 0);
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
                            if(yesCheatPlusState && element.canBypassYesCheatPlus && !element.canBypassYesCheatPlus()) {
                                return;
                            }
                            if(enabledHacksCounter != 0) {
                                statesText += " - "
                            }
                            statesText += sharedPref.getString("VertexClientPE.mods." + element.name + ".name", element.name);
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

                    var categories = [VertexClientPE.category.COMBAT, VertexClientPE.category.BUILDING, VertexClientPE.category.MOVEMENT, VertexClientPE.category.CHAT, VertexClientPE.category.MISC];
                    
                    categories.forEach(function (element, index, array) {
                        tabGUILayoutLeft.addView(new tabGUICategoryButton(element, tabGUILayoutLeft, tabGUILayoutRight, tabGUILayout));
                    });
                    
                    tabGUI = new PopupWindow_(tabGUILayout, LinearLayout_.LayoutParams.WRAP_CONTENT, CONTEXT.getWindowManager().getDefaultDisplay().getHeight() / 3);
                    if(menuAnimationsSetting == "on") {
						tabGUI.setAnimationStyle(android.R.style.Animation_Translucent);
					}
					tabGUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                    if(tabGUIModeSetting != "off") {
                        tabGUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, dip2px(70));
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
                    
                    shortcutGUI = new PopupWindow_(shortcutGUILayout1, LinearLayout_.LayoutParams.WRAP_CONTENT, shortcutLayoutHeight);
					if(menuAnimationsSetting == "on") {
						shortcutGUI.setAnimationStyle(android.R.style.Animation_Translucent);
					}
                    shortcutGUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                    shortcutGUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.CENTER, 0, 0);
                } catch(error) {
                    print('An error occurred: ' + error);
                    VertexClientPE.showBugReportDialog(error);
                }
            }
        }));
    }
}

function showPauseUtilities() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var pauseUtilitiesLayout = new LinearLayout_(CONTEXT);
                var playerViewButton = clientButton("F5");
                playerViewButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
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
                    onClick: function(viewarg) {
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
    
function exitAccountManager(showBackButton) {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
				var backAccountManagerLayout = new LinearLayout_(CONTEXT);
                var backAccountManagerButton = new Button_(CONTEXT);
                backAccountManagerButton.setText("<");//Text
                backAccountManagerButton.getBackground().setColorFilter(Color_.parseColor("#00BFFF"), PorterDuff_.Mode.MULTIPLY);
                backAccountManagerButton.setTextColor(Color_.WHITE);
                backAccountManagerButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backAccountManagerUI.dismiss(); //Close
                        exitAccountManagerUI.dismiss(); //Close
                        accountManager.dismiss(); //Close
                        dashboardScreen();
                        exitDashboard();
                    }
                }));
                backAccountManagerLayout.addView(backAccountManagerButton);
				
                var xAccountManagerLayout = new LinearLayout_(CONTEXT);
                var xAccountManagerButton = new Button_(CONTEXT);
                xAccountManagerButton.setText('X');//Text
                xAccountManagerButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xAccountManagerButton.setTextColor(Color_.WHITE);
                xAccountManagerButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
						if(showBackButton) {
							backAccountManagerUI.dismiss(); //Close
						}
                        exitAccountManagerUI.dismiss(); //Close
                        accountManager.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xAccountManagerLayout.addView(xAccountManagerButton);
				
				if(showBackButton) {
					backAccountManagerUI = new PopupWindow_(backAccountManagerLayout, dip2px(40), dip2px(40));
					backAccountManagerUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
					backAccountManagerUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
				}
                
                exitAccountManagerUI = new PopupWindow_(xAccountManagerLayout, dip2px(40), dip2px(40));
                exitAccountManagerUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitAccountManagerUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}
    
function exitSettings() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var backSettingsLayout = new LinearLayout_(CONTEXT);
                var backSettingsButton = new Button_(CONTEXT);
                backSettingsButton.setText("<");//Text
                backSettingsButton.getBackground().setColorFilter(Color_.parseColor("#00BFFF"), PorterDuff_.Mode.MULTIPLY);
                backSettingsButton.setTextColor(Color_.WHITE);
                backSettingsButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backSettingsUI.dismiss(); //Close
                        exitSettingsUI.dismiss(); //Close
                        settingsMenu.dismiss(); //Close
                        dashboardScreen();
                        exitDashboard();
                    }
                }));
                backSettingsLayout.addView(backSettingsButton);
                
                var xSettingsLayout = new LinearLayout_(CONTEXT);
                var xSettingsButton = new Button_(CONTEXT);
                xSettingsButton.setText("X");//Text
                xSettingsButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xSettingsButton.setTextColor(Color_.WHITE);
                xSettingsButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backSettingsUI.dismiss(); //Close
                        exitSettingsUI.dismiss(); //Close
                        settingsMenu.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xSettingsLayout.addView(xSettingsButton);
                
                backSettingsUI = new PopupWindow_(backSettingsLayout, dip2px(40), dip2px(40));
                backSettingsUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                backSettingsUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                
                exitSettingsUI = new PopupWindow_(xSettingsLayout, dip2px(40), dip2px(40));
                exitSettingsUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitSettingsUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}

function exitDevSettings() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var backDevSettingsLayout = new LinearLayout_(CONTEXT);
                var backDevSettingsButton = new Button_(CONTEXT);
                backDevSettingsButton.setText("<");//Text
                backDevSettingsButton.getBackground().setColorFilter(Color_.parseColor("#00BFFF"), PorterDuff_.Mode.MULTIPLY);
                backDevSettingsButton.setTextColor(Color_.WHITE);
                backDevSettingsButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backDevSettingsUI.dismiss(); //Close
                        exitDevSettingsUI.dismiss(); //Close
                        devSettingsMenu.dismiss(); //Close
                        dashboardScreen();
                        exitDashboard();
                    }
                }));
                backDevSettingsLayout.addView(backDevSettingsButton);
                
                var xDevSettingsLayout = new LinearLayout_(CONTEXT);
                var xDevSettingsButton = new Button_(CONTEXT);
                xDevSettingsButton.setText("X");//Text
                xDevSettingsButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xDevSettingsButton.setTextColor(Color_.WHITE);
                xDevSettingsButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backDevSettingsUI.dismiss(); //Close
                        exitDevSettingsUI.dismiss(); //Close
                        devSettingsMenu.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xDevSettingsLayout.addView(xDevSettingsButton);
                
                backDevSettingsUI = new PopupWindow_(backDevSettingsLayout, dip2px(40), dip2px(40));
                backDevSettingsUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                backDevSettingsUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                
                exitDevSettingsUI = new PopupWindow_(xDevSettingsLayout, dip2px(40), dip2px(40));
                exitDevSettingsUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitDevSettingsUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}

function exitInformation() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var backInformationLayout = new LinearLayout_(CONTEXT);
                var backInformationButton = new Button_(CONTEXT);
                backInformationButton.setText("<");//Text
                backInformationButton.getBackground().setColorFilter(Color_.parseColor("#00BFFF"), PorterDuff_.Mode.MULTIPLY);
                backInformationButton.setTextColor(Color_.WHITE);
                backInformationButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backInformationUI.dismiss(); //Close
                        exitInformationUI.dismiss(); //Close
                        informationMenu.dismiss(); //Close
                        dashboardScreen();
                        exitDashboard();
                    }
                }));
                backInformationLayout.addView(backInformationButton);
                
                var xInformationLayout = new LinearLayout_(CONTEXT);
                var xInformationButton = new Button_(CONTEXT);
                xInformationButton.setText("X");//Text
                xInformationButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xInformationButton.setTextColor(Color_.WHITE);
                xInformationButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backInformationUI.dismiss(); //Close
                        exitInformationUI.dismiss(); //Close
                        informationMenu.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xInformationLayout.addView(xInformationButton);
                
                backInformationUI = new PopupWindow_(backInformationLayout, dip2px(40), dip2px(40));
                backInformationUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                backInformationUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                
                exitInformationUI = new PopupWindow_(xInformationLayout, dip2px(40), dip2px(40));
                exitInformationUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitInformationUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}

function exitMusicPlayer() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var backMusicPlayerLayout = new LinearLayout_(CONTEXT);
                var backMusicPlayerButton = new Button_(CONTEXT);
                backMusicPlayerButton.setText("<");//Text
                backMusicPlayerButton.getBackground().setColorFilter(Color_.parseColor("#00BFFF"), PorterDuff_.Mode.MULTIPLY);
                backMusicPlayerButton.setTextColor(Color_.WHITE);
                backMusicPlayerButton.setOnClickListener(new View_.OnClickListener({
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
                
                var xMusicPlayerLayout = new LinearLayout_(CONTEXT);
                var xMusicPlayerButton = new Button_(CONTEXT);
                xMusicPlayerButton.setText("X");//Text
                xMusicPlayerButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xMusicPlayerButton.setTextColor(Color_.WHITE);
                xMusicPlayerButton.setOnClickListener(new View_.OnClickListener({
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
                
                backMusicPlayerUI = new PopupWindow_(backMusicPlayerLayout, dip2px(40), dip2px(40));
                backMusicPlayerUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                backMusicPlayerUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                
                exitMusicPlayerUI = new PopupWindow_(xMusicPlayerLayout, dip2px(40), dip2px(40));
                exitMusicPlayerUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitMusicPlayerUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}

function exitHelp() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var backHelpLayout = new LinearLayout_(CONTEXT);
                var backHelpButton = new Button_(CONTEXT);
                backHelpButton.setText("<");//Text
                backHelpButton.getBackground().setColorFilter(Color_.parseColor("#00BFFF"), PorterDuff_.Mode.MULTIPLY);
                backHelpButton.setTextColor(Color_.WHITE);
                backHelpButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backHelpUI.dismiss(); //Close
                        exitHelpUI.dismiss(); //Close
                        helpMenu.dismiss(); //Close
                        dashboardScreen();
                        exitDashboard();
                    }
                }));
                backHelpLayout.addView(backHelpButton);
                
                var xHelpLayout = new LinearLayout_(CONTEXT);
                var xHelpButton = new Button_(CONTEXT);
                xHelpButton.setText("X");//Text
                xHelpButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xHelpButton.setTextColor(Color_.WHITE);
                xHelpButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backHelpUI.dismiss(); //Close
                        exitHelpUI.dismiss(); //Close
                        helpMenu.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xHelpLayout.addView(xHelpButton);
                
                backHelpUI = new PopupWindow_(backHelpLayout, dip2px(40), dip2px(40));
                backHelpUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                backHelpUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                
                exitHelpUI = new PopupWindow_(xHelpLayout, dip2px(40), dip2px(40));
                exitHelpUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitHelpUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}

function exitAddon() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var backAddonLayout = new LinearLayout_(CONTEXT);
                var backAddonButton = new Button_(CONTEXT);
                backAddonButton.setText("<");//Text
                backAddonButton.getBackground().setColorFilter(Color_.parseColor("#00BFFF"), PorterDuff_.Mode.MULTIPLY);
                backAddonButton.setTextColor(Color_.WHITE);
                backAddonButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backAddonUI.dismiss(); //Close
                        exitAddonUI.dismiss(); //Close
                        addonMenu.dismiss(); //Close
                        dashboardScreen();
                        exitDashboard();
                    }
                }));
                backAddonLayout.addView(backAddonButton);
                
                var xAddonLayout = new LinearLayout_(CONTEXT);
                var xAddonButton = new Button_(CONTEXT);
                xAddonButton.setText("X");//Text
                xAddonButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xAddonButton.setTextColor(Color_.WHITE);
                xAddonButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backAddonUI.dismiss(); //Close
                        exitAddonUI.dismiss(); //Close
                        addonMenu.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xAddonLayout.addView(xAddonButton);
                
                backAddonUI = new PopupWindow_(backAddonLayout, dip2px(40), dip2px(40));
                backAddonUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                backAddonUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                
                exitAddonUI = new PopupWindow_(xAddonLayout, dip2px(40), dip2px(40));
                exitAddonUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitAddonUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}

function exitMilestones() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var backMilestonesLayout = new LinearLayout_(CONTEXT);
                var backMilestonesButton = new Button_(CONTEXT);
                backMilestonesButton.setText("<");//Text
                backMilestonesButton.getBackground().setColorFilter(Color_.parseColor("#00BFFF"), PorterDuff_.Mode.MULTIPLY);
                backMilestonesButton.setTextColor(Color_.WHITE);
                backMilestonesButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backMilestonesUI.dismiss(); //Close
                        exitMilestonesUI.dismiss(); //Close
                        milestonesMenu.dismiss(); //Close
                        dashboardScreen();
                        exitDashboard();
                    }
                }));
                backMilestonesLayout.addView(backMilestonesButton);
                
                var xMilestonesLayout = new LinearLayout_(CONTEXT);
                var xMilestonesButton = new Button_(CONTEXT);
                xMilestonesButton.setText("X");//Text
                xMilestonesButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xMilestonesButton.setTextColor(Color_.WHITE);
                xMilestonesButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backMilestonesUI.dismiss(); //Close
                        exitMilestonesUI.dismiss(); //Close
                        milestonesMenu.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xMilestonesLayout.addView(xMilestonesButton);
                
                backMilestonesUI = new PopupWindow_(backMilestonesLayout, dip2px(40), dip2px(40));
                backMilestonesUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                backMilestonesUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                
                exitMilestonesUI = new PopupWindow_(xMilestonesLayout, dip2px(40), dip2px(40));
                exitMilestonesUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitMilestonesUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}

function exitUpdateCenter() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var backUpdateCenterLayout = new LinearLayout_(CONTEXT);
                var backUpdateCenterButton = new Button_(CONTEXT);
                backUpdateCenterButton.setText("<");//Text
                backUpdateCenterButton.getBackground().setColorFilter(Color_.parseColor("#00BFFF"), PorterDuff_.Mode.MULTIPLY);
                backUpdateCenterButton.setTextColor(Color_.WHITE);
                backUpdateCenterButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backUpdateCenterUI.dismiss(); //Close
                        exitUpdateCenterUI.dismiss(); //Close
                        updateCenterMenu.dismiss(); //Close
                        dashboardScreen();
                        exitDashboard();
                    }
                }));
                backUpdateCenterLayout.addView(backUpdateCenterButton);
                
                var xUpdateCenterLayout = new LinearLayout_(CONTEXT);
                var xUpdateCenterButton = new Button_(CONTEXT);
                xUpdateCenterButton.setText("X");//Text
                xUpdateCenterButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xUpdateCenterButton.setTextColor(Color_.WHITE);
                xUpdateCenterButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backUpdateCenterUI.dismiss(); //Close
                        exitUpdateCenterUI.dismiss(); //Close
                        updateCenterMenu.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xUpdateCenterLayout.addView(xUpdateCenterButton);
                
                backUpdateCenterUI = new PopupWindow_(backUpdateCenterLayout, dip2px(40), dip2px(40));
                backUpdateCenterUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                backUpdateCenterUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                
                exitUpdateCenterUI = new PopupWindow_(xUpdateCenterLayout, dip2px(40), dip2px(40));
                exitUpdateCenterUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitUpdateCenterUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
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
                    onClick: function(viewarg) {
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
                    onClick: function(viewarg) {
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
                    onClick: function(viewarg) {
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
                    onClick: function(viewarg) {
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
                    onClick: function(viewarg) {
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
                    onClick: function(viewarg) {
                        backPageWebBrowserUI.dismiss(); //Close
                        forwardPageWebBrowserUI.dismiss(); //Close
                        reloadWebBrowserUI.dismiss(); //Close
                        urlBarWebBrowserUI.dismiss(); //Close
                        devWebBrowserUI.dismiss(); //Close
                        exitWebBrowserUI.dismiss(); //Close
                        webBrowserMenu.dismiss(); //Close
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

function exitPlayerCustomizer() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var xPlayerCustomizerLayout = new LinearLayout_(CONTEXT);
                var xPlayerCustomizerButton = new Button_(CONTEXT);
                xPlayerCustomizerButton.setText('X');//Text
                xPlayerCustomizerButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xPlayerCustomizerButton.setTextColor(Color_.WHITE);
                xPlayerCustomizerButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        exitPlayerCustomizerUI.dismiss(); //Close
                        playerCustomizerMenu.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xPlayerCustomizerLayout.addView(xPlayerCustomizerButton);
                
                exitPlayerCustomizerUI = new PopupWindow_(xPlayerCustomizerLayout, dip2px(40), dip2px(40));
                exitPlayerCustomizerUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitPlayerCustomizerUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}

function exitOptiFine() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var xOptiFineLayout = new LinearLayout_(CONTEXT);
                var xOptiFineButton = new Button_(CONTEXT);
                xOptiFineButton.setText('X');//Text
                xOptiFineButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xOptiFineButton.setTextColor(Color_.WHITE);
                xOptiFineButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        exitOptiFineUI.dismiss(); //Close
                        optiFineMenu.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xOptiFineLayout.addView(xOptiFineButton);
                
                exitOptiFineUI = new PopupWindow_(xOptiFineLayout, dip2px(40), dip2px(40));
                exitOptiFineUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitOptiFineUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}

function exitPreview() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {				
				var backPreviewLayout = new LinearLayout_(CONTEXT);
                var backPreviewButton = new Button_(CONTEXT);
                backPreviewButton.setText("<");//Text
                backPreviewButton.getBackground().setColorFilter(Color_.parseColor("#00BFFF"), PorterDuff_.Mode.MULTIPLY);
                backPreviewButton.setTextColor(Color_.WHITE);
                backPreviewButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backPreviewUI.dismiss(); //Close
                        exitPreviewUI.dismiss(); //Close
                        previewMenu.dismiss(); //Close
                        dashboardScreen();
                        exitDashboard();
                    }
                }));
                backPreviewLayout.addView(backPreviewButton);
                
                var xPreviewLayout = new LinearLayout_(CONTEXT);
                var xPreviewButton = new Button_(CONTEXT);
                xPreviewButton.setText('X');//Text
                xPreviewButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xPreviewButton.setTextColor(Color_.WHITE);
                xPreviewButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
						backPreviewUI.dismiss(); //Close
                        exitPreviewUI.dismiss(); //Close
                        previewMenu.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xPreviewLayout.addView(xPreviewButton);
                
                backPreviewUI = new PopupWindow_(backPreviewLayout, dip2px(40), dip2px(40));
                backPreviewUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                backPreviewUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                
                exitPreviewUI = new PopupWindow_(xPreviewLayout, dip2px(40), dip2px(40));
                exitPreviewUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitPreviewUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}

function exitShop() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var xShopLayout = new LinearLayout_(CONTEXT);
                var xShopButton = new Button_(CONTEXT);
                xShopButton.setText('X');//Text
                xShopButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xShopButton.setTextColor(Color_.WHITE);
                xShopButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        exitShopUI.dismiss(); //Close
                        shopMenu.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xShopLayout.addView(xShopButton);
                
                exitShopUI = new PopupWindow_(xShopLayout, dip2px(40), dip2px(40));
                exitShopUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitShopUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}

function exitDashboard() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var xDashboardLayout = new LinearLayout_(CONTEXT);
                var xDashboardButton = new Button_(CONTEXT);
                xDashboardButton.setText('X');//Text
                xDashboardButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xDashboardButton.setTextColor(Color_.WHITE);
                xDashboardButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg) {
                        exitDashboardUI.dismiss(); //Close
                        dashboardMenu.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xDashboardLayout.addView(xDashboardButton);
                
                exitDashboardUI = new PopupWindow_(xDashboardLayout, dip2px(40), dip2px(40));
                exitDashboardUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitDashboardUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
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
                new Thread_(new Runnable_({
                    run: function() {
                        VertexClientPE.toast("Reloading chests...");
                        Thread_.sleep(1200);
                        VertexClientPE.Utils.loadChests();
                    }
                })).start();
            }
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
