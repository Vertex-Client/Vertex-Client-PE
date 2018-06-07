/**
 * ##################################################################################################
 * @name Vertex Client PE
 * @version v3.1
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
	ArrayAdapter_ = android.widget.ArrayAdapter,
	DownloadManager_ = android.app.DownloadManager,
	Dialog_ = android.app.Dialog,
	Notification_ = android.app.Notification,
	PendingIntent_ = android.app.PendingIntent,
	Context_ = android.content.Context,
	ConnectivityManager_ = android.net.ConnectivityManager,
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
	EditText_ = android.widget.EditText,
	CheckBox_ = android.widget.CheckBox,
	CompoundButton_ = android.widget.CompoundButton,
	FrameLayout_ = android.widget.FrameLayout,
	GridLayout_ = android.widget.GridLayout,
	ImageView_ = android.widget.ImageView,
	KeyEvent_ = android.view.KeyEvent,
	LinearLayout_ = android.widget.LinearLayout,
	PopupWindow_ = android.widget.PopupWindow,
	SeekBar_ = android.widget.SeekBar,
	ScrollView_ = android.widget.ScrollView,
	Switch_ = android.widget.Switch,
	Spinner_ = android.widget.Spinner,
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

const DENSITY = CONTEXT.getResources().getDisplayMetrics().density;

let Scanner = java.util.Scanner;
let ByteBuffer = java.nio.ByteBuffer;
let FloatBuffer = java.nio.FloatBuffer;
let ByteOrder = java.nio.ByteOrder;
let ShortBuffer = java.nio.ShortBuffer;
let GLSurfaceView = android.opengl.GLSurfaceView;
let Renderer = GLSurfaceView.Renderer;
let GLU = android.opengl.GLU;
let GL10 = javax.microedition.khronos.opengles.GL10;
let RelativeLayout = android.widget.RelativeLayout;
let Gravity = android.view.Gravity;

EntityType.ENDER_PEARL = 87;

let useCustomLangTest = false;

/**
 * Internationalization: Language Support
 * Thanks for testing i18n function: NenkaLab<nenka@naver.com>, and ManDongI<boomingsky@naver.com>
 * @author Astro36<astr36@naver.com>
 * @function i18n
 * @memberOf global
 * @param {String} text
 * @param {Array.<String>} [args]
 * @returns {String}
 */
const i18n = (function () {
    const lang = CONTEXT.getResources().getConfiguration().locale.getLanguage(),
        langPath = PATH + "/lang/" + lang + ".json";
    if (new File_(langPath).exists() && useCustomLangTest) {
        const langObj = JSON.parse(getTextFromFile(langPath));
        return function (text, args) {
            if (text in langObj) {
                return langObj[text].replace(/(\{%\d+\})/g, function ($1) {
                    return args[$1.match(/\{%(\d+)\}/)[1]];
                });
            }
            return text.replace(/(\{%\d+\})/g, function ($1) {
                return args[$1.match(/\{%(\d+)\}/)[1]];
            });
        };
    }
    return function (text, args) {
        return text.replace(/(\{%\d+\})/g, function ($1) {
			return args[$1.match(/\{%(\d+)\}/)[1]];
		});
    };
})();

/**
 * ##########
 *  SETTINGS
 * ##########
 */

let hacksListModeSetting = "on";
let mainButtonPositionSetting = "top-left";
let healthTagsSetting = "off";
let themeSetting = "green";
let spamMessage = "Spam!!!!!";
let showNewsSetting = "on";
let menuAnimationsSetting = "on";
let nukerMode = "cube";
let playMusicSetting = "off";
let timerSpeed = 2;
let themeSetup = "off";
let nukerRange = 3;
let killAuraRange = 4;
let spamDelayTime = 3;
let normalMenuTypeSize = "normal";
let fancyChatMode = "default";
let tapNukerRange = 3;
let menuType = "normal";
let chestTracersRange = 10;
let tabGUIModeSetting = "off";
let chestTracersGroundMode = "on";
let chestTracersParticle = "flame";
let antiLagDropRemoverSetting = "off";
let useLightThemeSetting = "off";
let buttonStyleSetting = "normal";
let mcpeGUISetting = "default";
let storageESPRange = 25;
let transparentBgSetting = "on";
let aimbotUseKillauraRange = "off";
let screenshotModeSetting = "default";
let killToMorphSetting = "off";
let fontSetting = "default";
let mainButtonStyleSetting = "normal";
let webBrowserStartPageSetting = "https://google.com/";
let backgroundStyleSetting = "normal";
let modButtonColorBlockedSetting = "red";
let modButtonColorEnabledSetting = "green";
let modButtonColorDisabledSetting = "white";
let arrowGunMode = "slow";
let cmdPrefix = ".";
let commandsSetting = "on";
let shortcutSizeSetting = 32;
let aimbotRangeSetting = 4;
let speedHackFriction = 0.33;
let remoteViewTeleportSetting = "off";
let switchGamemodeSendCommandSetting = "off";
let betterPauseSetting = "off";
let shortcutUIHeightSetting = 3;
let mainButtonTapSetting = "menu";
let autoWalkDirection = "forward";
let dashboardTileSize = 5;
let spamUseRandomMsgSetting = "off";
let buttonStrokeThicknessSetting = 2;
let hacksListPosSetting = "top-center";
let targetMobsSetting = "on";
let targetPlayersSetting = "on";
let shortcutUIPosSetting = "right-center";
let hitboxesHitboxWidthSetting = 10;
let hitboxesHitboxHeightSetting = 10;
let showUpdateToastsSetting = "on";
let showSnowInWinterSetting = "off";
let preventDiggingSetting = "off";
let preventPlacingSetting = "off";
let preventAttacksSetting = "off";
let fastBreakDestroyTime = 0;
let strafeAuraRangeSetting = 5;
let strafeAuraDirectionSetting = "left";
let panicCombatSetting = "on";
let panicWorldSetting = "on";
let panicMovementSetting = "on";
let panicPlayerSetting = "on";
let panicMiscSetting = "on";
let buttonSoundSetting = "system";
let transparentSplashScreenSetting = "off";
let showIconsOnTileShortcutsSetting = "on";
let targetFriendsSetting = "off";
let antiAFKKeepScreenOnSetting = "on";
let shortcutUIModeSetting = "on";
let attackShockIntensity = 20;
let f5ButtonModeSetting = "pause";
let mainButtonSizeSetting = 40;
let powerExplosionsPowerSetting = 10;
let preventExplosionsSetting = "off";
let watermarkTextSetting = "<big><b>Bold</b> <i>Italic</i> <u>Underline</u></big>";
let defaultToastPositionSetting = "bottom";
let tapAimbotStayAimedSetting = 40;
let healthTagsNameSetting = "aqua";
let healthTagsHealthSetting = "red";
let healthTagsShowHeartSetting = "on";
let modsStayEnabledSetting = "on";
let itemGiverModeSetting = "fast";
let targetMyTeamSetting = "off";
let shouldShowTipDialogsSetting = "on";
//------------------------------------
let antiAFKDistancePerTick = 0.25;
//------------------------------------
let combatName = "Combat";
let worldName = "World";
let movementName = "Movement";
let playerName = "Player";
let miscName = "Misc";
//------------------------------------
let customRGBRed = 0;
let customRGBGreen = 0;
let customRGBBlue = 0;
let customRGBRedStroke = 0;
let customRGBGreenStroke = 0;
let customRGBBlueStroke = 0;
//------------------------------------
let combatEnabled = "on";
let worldEnabled = "on";
let movementEnabled = "on";
let playerEnabled = "on";
let miscEnabled = "on";
let singleplayerEnabled = "on";
//End of settings

let modButtonColorBlocked = Color_.RED;
let modButtonColorEnabled = Color_.GREEN;
let modButtonColorDisabled = Color_.WHITE;

let bypassModButtonView;
let panicModButtonView;

let display = new DisplayMetrics_();
CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
let size = new Point_();
CONTEXT.getWindowManager().getDefaultDisplay().getRealSize(size);
let screenWidth = size.x;
let screenHeight = size.y;

let topBarHeight = screenHeight / 10;

let customHeight = topBarHeight / 2;

let sharedPref = CONTEXT.getPreferences(CONTEXT.MODE_PRIVATE);
let editor = sharedPref.edit();

let screenChangedHookActive = false;

//MENU START
const combattpopx_def = screenWidth / 3, combattpopy_def = 0;
let combattpopx = combattpopx_def, combattpopy = combattpopy_def;
let combatmX, combatmY;
let combatdown = false;

const worldtpopx_def = Math.floor(screenWidth / 3 + screenWidth / 3), worldtpopy_def = screenHeight / 2 - customHeight;
let worldtpopx = worldtpopx_def, worldtpopy = worldtpopy_def;
let worldmX, worldmY;
let worlddown = false;

const movementtpopx_def = screenWidth / 3, movementtpopy_def = screenHeight / 2 - customHeight;
let movementtpopx = movementtpopx_def, movementtpopy = movementtpopy_def;
let movementmX, movementmY;
let movementdown = false;

const playertpopx_def = 0, playertpopy_def = 0;
let playertpopx = playertpopx_def, playertpopy = playertpopy_def;
let playermX, playermY;
let playerdown = false;

const misctpopx_def = 0, misctpopy_def = screenHeight / 2 - customHeight;
let misctpopx = misctpopx_def, misctpopy = misctpopy_def;
let miscmX, miscmY;
let miscdown = false;

let combatMenuShown = false;
let worldMenuShown = false;
let movementMenuShown = false;
let playerMenuShown = false;
let miscMenuShown = false;
//MENU END

let Launcher = {
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

let realScriptManager;
if(Launcher.isBlockLauncher() || Launcher.isToolbox()) {
	realScriptManager = ScriptManager__;
}
if(Launcher.isMcpeMaster()) {
	realScriptManager = ScriptManager_;
}

let ScreenType = {
	start_screen: "start_screen",
	hud: "hud_screen",
	ingame: "in_game_play_screen",
	survival_inv: "survival_inventory_screen",
	creative_inv: "creative_inventory_screen",
	pause_screen: "pause_screen",
	options_screen: "options_screen",
	exit_dialog: " -  - gui.warning.exitGameWarning"
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
		yaw *= PI_CIRCLE;
		pitch *= PI_CIRCLE * -1;

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

let currentScreen = ScreenType.start_screen;

function screenChangeHook(screenName) {
	if(screenChangedHookActive) {
		CONTEXT.runOnUiThread(new Runnable_({
			run: function() {
				if(pauseUtilitiesUI != null && pauseUtilitiesUI.isShowing()) {
					pauseUtilitiesUI.dismiss();
				}
				if(screenName == ScreenType.start_screen || screenName == ScreenType.exit_dialog || screenName == ScreenType.hud || screenName == ScreenType.ingame || screenName == ScreenType.pause_screen) {
					if(GUI != null) {
						GUI.setTouchable(true);
						GUI.update();
					}
				} else {
					if(!VertexClientPE.menuIsShowing) {
						if(GUI != null) {
							GUI.setTouchable(false);
							GUI.update();
						}
					}
				}
				if(screenName == ScreenType.hud || screenName == ScreenType.ingame) {
					VertexClientPE.Render.initViews();
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
						if(watermarkState) {
							showWatermark();
						}
						if(f5ButtonModeSetting == "ingame" && !ghostModeState) {
							showPauseUtilities();
						}
					}
				} else {
					VertexClientPE.Render.deinitViews();
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
					if(watermarkUI != null) {
						watermarkUI.dismiss();
					}
					if(rotationPlusUI != null) {
						rotationPlusUI.dismiss();
					}
					if(screenName == ScreenType.start_screen || screenName == ScreenType.exit_dialog) {
						if((mainMenuTextList == null || !mainMenuTextList.isShowing()) && !VertexClientPE.menuIsShowing) {
							VertexClientPE.showStartScreenBar(screenName);
						}
						if((accountManagerGUI == null || !accountManagerGUI.isShowing()) && !VertexClientPE.menuIsShowing) {
							showAccountManagerButton(screenName);
						}
					} else {
						if(mainMenuTextList != null && mainMenuTextList.isShowing()) {
							mainMenuTextList.dismiss();
						}
						if(accountManagerGUI != null && accountManagerGUI.isShowing()) {
							accountManagerGUI.dismiss();
						}
					}
				}
				if(screenName == ScreenType.pause_screen) {
					VertexClientPE.isPaused = true;
					if(!VertexClientPE.menuIsShowing && f5ButtonModeSetting == "pause" && !ghostModeState) {
						showPauseUtilities();
					}
				} else {
					if(screenName != ScreenType.options_screen) {
						VertexClientPE.isPaused = false;
					}
				}
				currentScreen = screenName;
			}
		}));
	}
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

let isSupported = true;
let isAuthorized = true;

let oldYaw = 0;
let newYaw = 0;

const PI_CIRCLE = Math.PI / 180;

let songDialog;

let VertexClientPE = {
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
		deathZ: -1,
		waypoints: []
	},
	latestReleaseDownloadCount: null,
	Utils: {
		chests: [],
		fov: 70,
		fps: 0,
		world: {
			logMessages: []
		},
		takeScreenshot: function(mode) {
			let now = new java.util.Date();
			android.text.format.DateFormat.format("yyyy-MM-dd_hh:mm:ss", now);
			let mPath = Environment_.getExternalStorageDirectory().toString() + "/" + now;

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
					for(let i = 0; i < friendsLength; i++) {
						if(username == VertexClientPE.friends.get(i)) {
							return true;
						}
					}
				}
				return false;
			},
			isTeamMember: function(entity) {
				let myName = Entity.getNameTag(getPlayerEnt());
				let otherName = Entity.getNameTag(entity);
				if(myName != null) {
					if(!(myName.charAt(0) != "\u00A7" || otherName.charAt(0) != "\u00A7") && myName.charAt(1) == otherName.charAt(1)) {
						return true;
					}
				}
				return false;
			},
			shouldTarget: function(entity) {
				return !(targetFriendsSetting == "off" && VertexClientPE.Utils.Player.isFriend(entity)) && !(targetMyTeamSetting == "off" && VertexClientPE.Utils.Player.isTeamMember(entity));
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
						if(!VertexClientPE.Utils.Player.shouldTarget(ent)) {
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
			let velocity = 1;
			let posX = x - getPlayerX();
			let posY = y - getPlayerY();
			let posZ = z - getPlayerZ();
			let realYaw = (Math.atan2(posZ, posX) * 180 / Math.PI) - 90;
			let y2 = Math.sqrt(posX * posX + posZ * posZ);
			let g = 0.007;
			let tmp = (velocity * velocity * velocity * velocity - g * (g * (y2 * y2) + 2 * posY * (velocity * velocity)));
			let pitch = -(180 / Math.PI) * (Math.atan((velocity * velocity - Math.sqrt(tmp)) / (g * y2)));

			if(pitch < 89 && pitch > -89) {

				/* imYannic's code */

				oldYaw = newYaw;
				newYaw = realYaw;

				let dist = Math.sqrt(Math.pow(posX, 2) + Math.pow(posY, 2) + Math.pow(posZ, 2));

				let yaw = realYaw+(newYaw - oldYaw) * (dist*dist/dist)/(120/45);

				Entity.setRot(getPlayerEnt(), yaw, pitch);

				/* ---- */
			}
		},
		aimAtEnt: function(ent) {
			// Credits to Godsoft0329 aka the developer of DragOP
			if(Entity.getEntityTypeId(ent) == EntityType.PLAYER && Entity.getNameTag(ent) == "") return;
			let x = Entity.getX(ent);
			let y = Entity.getEntityTypeId(ent) == EntityType.PLAYER ? Entity.getY(ent) : Entity.getY(ent) + 1;
			let z = Entity.getZ(ent);
			this.aimAt(x, y, z);
		},
		aimAtBlock: function(x, y, z) {
			y += 1;
			this.aimAt(x, y, z);
		},
		strafeAroundEnt: function(ent, direction) {
			direction = direction || "left";
			this.aimAtEnt(ent);
			let xVel = Math.cos(PI_CIRCLE * (getYaw() + 5)) * 0.2;
			let zVel = Math.sin(PI_CIRCLE * (getYaw() + 5)) * 0.2;
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
	let temp = func.toString();
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
		for(let blockX = - storageESPRange; blockX <= storageESPRange; blockX++) {
			for(let blockY = - storageESPRange; blockY <= storageESPRange; blockY++) {
				for(let blockZ = - storageESPRange; blockZ <= storageESPRange; blockZ++) {
					let newX = Math.round(x + blockX);
					let newY = Math.round(y + blockY);
					let newZ = Math.round(z + blockZ);
					let tile = getTile(newX, newY, newZ);
					if(tile == 23 || tile == 54 || tile == 125) {
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
		VertexClientPE.toast(i18n("Successfully (re)loaded storage blocks!"));
	}
}

VertexClientPE.Utils.getChests = function() {
	return VertexClientPE.Utils.chests;
}

VertexClientPE.isRemote = function() {
	return Server.getAddress() != null;
}

VertexClientPE.playerIsInGame = false;

VertexClientPE.currentVersion = "3.1";
VertexClientPE.currentVersionDesc = "The ? Update";
VertexClientPE.targetVersion = "MCPE v1.4.x";
VertexClientPE.minVersion = "1.0.0";
VertexClientPE.edition = "Normal";
VertexClientPE.latestVersion;
VertexClientPE.latestVersionDesc;

VertexClientPE.latestPocketEditionVersion;
let news;

let movementMenuLayout;
let menuBtn;
let logoViewer2;
let chestUI;
let menuMiddleLayout;
let menuRightLayout;

let ghostModeState = false;

let antiAFKState = false;
let autoSpammerState = false;
let autoSwordState = false;
let bypassState = false;
let fancyChatState = false;
let fastBreakState = false;
let healthDisplayState = false;
let hitboxesState = false;
let remoteViewState = false;
let rotationPlusState = false;
let speedHackState = false;
let stackDropState = false;
let storageESPState = false;
let timerState = false;
let watermarkState = false;

let showingMenu = false;

let setupColor = "green";

try {
	VertexClientPE.defaultFont = (Build_.VERSION.SDK_INT > 16)?Typeface_.create("sans-serif-thin", Typeface_.NORMAL):Typeface_.DEFAULT;
	VertexClientPE.font = fontSetting=="minecraft"?Typeface_.createFromFile(new File_(PATH, "minecraft.ttf")):VertexClientPE.defaultFont;
	VertexClientPE.tileFont = Launcher.isBlockLauncher()?new Typeface_.createFromAsset(CONTEXT.getAssets(), "fonts/SegoeWP.ttf"):VertexClientPE.defaultFont;
} catch(e) {
	print("@" + e.lineNumber + ": " + e);
}

const MANUFACTURER = Build_.MANUFACTURER;
const MODEL = Build_.MODEL;

VertexClientPE.getDeviceName = function() {
	if (MODEL.startsWith(MANUFACTURER)) {
		return MODEL;
	} else {
		return MANUFACTURER + " " + MODEL;
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

	let button = new android.widget.Button(MinecraftButtonLibrary.context);
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
	let file = new java.io.File(path);

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
	let byteBuffer = ByteBuffer.allocateDirect(floatArray.length * 4);
	byteBuffer.order(ByteOrder.nativeOrder());

	let floatBuffer = byteBuffer.asFloatBuffer();
	floatBuffer.put(floatArray);
	floatBuffer.position(0);

	return floatBuffer;
}

VertexClientPE.Render.getShortBuffer = function(shortArray) {
	let byteBuffer = ByteBuffer.allocateDirect(shortArray.length * 2);
	byteBuffer.order(ByteOrder.nativeOrder());

	let shortBuffer = byteBuffer.asShortBuffer();
	shortBuffer.put(shortArray);
	shortBuffer.position(0);

	return shortBuffer;
}

let virtualWorldView;

let parentView = CONTEXT.getWindow().getDecorView();

let width, height;

VertexClientPE.Render.renderer = new Renderer({
	onSurfaceCreated: function(gl, config) {
		gl.glClearColor(0, 0, 0, 0);

		gl.glShadeModel(GL10.GL_SMOOTH);

		gl.glClearDepthf(1.0);

		gl.glEnable(GL10.GL_DEPTH_TEST);

		gl.glDepthFunc(GL10.GL_LEQUAL);

		gl.glHint(GL10.GL_PERSPECTIVE_CORRECTION_HINT, GL10.GL_NICEST);
	},
	onSurfaceChanged: function(gl, w, h) {
		width = w;
		height = h;

		gl.glMatrixMode(GL10.GL_PROJECTION);

		gl.glLoadIdentity();

		GLU.gluPerspective(gl, VertexClientPE.Utils.getFov(), width / height, 0.1, 100);

		gl.glMatrixMode(GL10.GL_MODELVIEW);

		gl.glLoadIdentity();
	},
	onDrawFrame: function(gl) {

		if(storageESPState) {
			gl.glClear(GL10.GL_COLOR_BUFFER_BIT | GL10.GL_DEPTH_BUFFER_BIT);

			gl.glLoadIdentity();

			gl.glDisable(GL10.GL_LIGHTING);

			let yaw = getYaw() % 360;
			let pitch = getPitch() % 360;

			let eyeX = getPlayerX(0);
			let eyeY = getPlayerY(1) + 1;
			let eyeZ = getPlayerZ(2);

			let dCenterX = Math.sin(yaw / 180 * Math.PI);
			let dCenterZ = Math.cos(yaw / 180 * Math.PI);
			let dCenterY = Math.sqrt(dCenterX * dCenterX + dCenterZ * dCenterZ) * Math.tan((pitch - 180) / 180 * Math.PI);

			let centerX = eyeX - dCenterX;
			let centerZ = eyeZ + dCenterZ;
			let centerY = eyeY - dCenterY;

			GLU.gluLookAt(gl, eyeX, eyeY, eyeZ, centerX, centerY, centerZ, 0, 1, 0);

			/* VertexClientPE.modules.forEach(function(element, index, array) {
				if(element.state && element.hasOwnProperty("onRender")) {
					element.onRender(gl);
				}
			}); */
			
			storageESP.onRender(gl);
		}
		
	},
});

let isRenderInit = false;

VertexClientPE.Render.initViews = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			if(virtualWorldView == null) {
				virtualWorldView = new GLSurfaceView(CONTEXT);
				virtualWorldView.setZOrderOnTop(true);
				virtualWorldView.setEGLConfigChooser(8, 8, 8, 8, 16, 0);
				virtualWorldView.getHolder().setFormat(PixelFormat_.TRANSLUCENT);
				virtualWorldView.setRenderer(VertexClientPE.Render.renderer);
			}
			if(!isRenderInit) {
				parentView.addView(virtualWorldView);
				isRenderInit = true;
			}
		}
	});
}

VertexClientPE.Render.deinitViews = function() {
	if(virtualWorldView != null && virtualWorldView != undefined) {
		parentView.removeView(virtualWorldView);
		isRenderInit = false;
	}
}

VertexClientPE.Render.vertex = [
	0, 0, 0,
	1.0, 0, 0,
	0, 0, 1.0,
	1.0, 0, 1.0,

	0, 1.0, 0,
	1.0, 1.0, 0,
	0, 1.0, 1.0,
	1.0, 1.0, 1.0,
];

VertexClientPE.Render.index = [
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

const vertexBuffer = VertexClientPE.Render.getFloatBuffer(VertexClientPE.Render.vertex);
const indexBuffer = VertexClientPE.Render.getShortBuffer(VertexClientPE.Render.index);

VertexClientPE.drawCubeShapedBox = function(gl, x, y, z) { //many thanks to GodSoft029, be sure to follow him on Twitter
	gl.glTranslatef(x, y, z);
	gl.glFrontFace(GL10.GL_CCW);
	gl.glEnable(GL10.GL_BLEND);
	gl.glLineWidth(4);
	gl.glColor4f(0.0, 1.0, 0.0, 0.0);
	gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
	gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
	gl.glDrawElements(GL10.GL_LINES, VertexClientPE.Render.index.length, GL10.GL_UNSIGNED_SHORT, indexBuffer);
	gl.glTranslatef(-x, -y, -z);
}

let userIsNewToCurrentVersion = false;

let mainMenuTextList;
let GUI;
let screenUI;
let accountManagerGUI;
let menu;
let emptyMenu;
let fullScreenMenu;
let tableMenu;
let exitWebBrowserUI;
let reloadWebBrowserUI;
let pauseUtilitiesUI;
let healthDisplayUI;
let watermarkUI;
let rotationPlusUI;
let hacksList;
let tabGUI;
let shortcutGUI;

let combatMenu, worldMenu, movementMenu, playerMenu, miscMenu;

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
				return "Misc";
		}
	}
};

VertexClientPE.tiles = [];
VertexClientPE.preInitModules = [];
VertexClientPE.modules = [];
VertexClientPE.commands = [];
VertexClientPE.addons = [];

function callVertexFunctionCallback(func, args) {
	if(typeof func !== "string" || !(args instanceof Array || args == null))
		return;
	VertexClientPE[func].apply(this, args);
}

VertexClientPE.AddonUtils = {
	loadAddons: function() {
		realScriptManager.callScriptMethod("addonLoadHook", []);
	},
	disableAddon: function(addon) {
		let fullAddonName = addon.name + " v" + addon.current_version;

		//step 1
		VertexClientPE.modules.forEach(function(element, index, array) {
			if(element.isStateMod() && element.state) {
				element.onToggle();
			}
		});

		let newTempSongArray = [];
		VertexClientPE.MusicUtils.tempSongList.forEach(function(element, index, array) {
			if(element.source == undefined || fullAddonName != element.source) {
				newTempSongArray.push(element);
			}
		});
		VertexClientPE.MusicUtils.tempSongList = newTempSongArray;

		//step 2

		//remove addon modules
		let newModuleArray = [];
		VertexClientPE.preInitModules.forEach(function(element, index, array) {
			if(element.source == undefined || fullAddonName != element.source) {
				newModuleArray.push(element);
			}
		});
		VertexClientPE.preInitModules = newModuleArray;

		//remove addon songs
		let newSongArray = [];
		VertexClientPE.MusicUtils.songList.forEach(function(element, index, array) {
			if(element.source == undefined || fullAddonName != element.source) {
				newSongArray.push(element);
			}
		});
		VertexClientPE.MusicUtils.songList = newSongArray;

		//remove addon tiles
		let newTileArray = [];
		VertexClientPE.tiles.forEach(function(element, index, array) {
			if(element.source == undefined || fullAddonName != element.source) {
				newTileArray.push(element);
			}
		});
		VertexClientPE.tiles = newTileArray;

		//step 3
		VertexClientPE.initMods();
	},
	removeAddon: function(addon) {
		this.disableAddon(addon);

		//remove the addon from the addons array
		let tempAddonsArray = [];
		VertexClientPE.addons.forEach(function(element, index, array) {
			if(element != addon) {
				tempAddonsArray.push(element);
			}
		});
		VertexClientPE.addons = tempAddonsArray;
		tempAddonsArray = null;

		//remove the addon script from the launcher
		let enabledScripts = realScriptManager.getEnabledScripts();
		enabledScripts.remove(addon.scriptName);
		realScriptManager.removeScript(addon.scriptName);

		VertexClientPE.toast(i18n("Successfully removed the addon!"));
	}
}

VertexClientPE.registerTile = function(obj) {
	VertexClientPE.tiles.push(obj);
};

let settingsTile = {
	text: "Settings",
	color: "green",
	icon: android.R.drawable.ic_menu_preferences,
	forceLightColor: true,
	shouldDismissDashboard: true,
	onClick: function(fromDashboard) {
		settingsScreen();
		VertexClientPE.showExitButtons(fromDashboard, this.text, this.icon);
	}
}

let modManagerTile = {
	text: "Mod Manager",
	color: "orange",
	icon: android.R.drawable.ic_menu_manage,
	forceLightColor: false,
	shouldDismissDashboard: true,
	onClick: function(fromDashboard) {
		modManagerScreen();
		VertexClientPE.showExitButtons(fromDashboard, this.text, this.icon);
	}
}

let friendManagerTile = {
	text: "Friend Manager",
	color: "black",
	icon: android.R.drawable.ic_menu_manage,
	forceLightColor: false,
	shouldDismissDashboard: true,
	onClick: function(fromDashboard) {
		VertexClientPE.showFriendManager(fromDashboard, this.text, this.icon);
	}
}

let informationTile = {
	text: "Information",
	color: "yellow",
	icon: android.R.drawable.ic_menu_info_details,
	forceLightColor: false,
	shouldDismissDashboard: true,
	onClick: function(fromDashboard) {
		informationScreen();
		VertexClientPE.showExitButtons(fromDashboard, this.text, this.icon);
	}
}

let updateCenterTile = {
	text: "Update Center",
	color: "white",
	icon: android.R.drawable.ic_menu_compass,
	forceLightColor: false,
	shouldDismissDashboard: true,
	onClick: function(fromDashboard) {
		updateCenterScreen();
		VertexClientPE.showExitButtons(fromDashboard, this.text, this.icon);
	}
}

let chatTile = {
	text: "Chat",
	color: "grey",
	icon: android.R.drawable.sym_action_chat,
	forceLightColor: false,
	shouldDismissDashboard: false,
	onClick: function(fromDashboard) {
		VertexClientPE.showChatDialog();
	}
}

let musicPlayerTile = {
	text: "Music Player",
	color: "blue",
	icon: android.R.drawable.ic_media_play,
	forceLightColor: false,
	shouldDismissDashboard: true,
	onClick: function(fromDashboard) {
		musicPlayerScreen();
		VertexClientPE.showExitButtons(fromDashboard, this.text, this.icon);
	}
}

let christmasTile = {
	text: "Christmas",
	color: "red",
	icon: android.R.drawable.ic_menu_agenda,
	forceLightColor: false,
	shouldDismissDashboard: true,
	usesCustomDrawable: function() {
		return false;
	},
	shouldAdd: function() {
		return VertexClientPE.Utils.month == java.util.Calendar.DECEMBER;
	},
	onClick: function(fromDashboard) {
		christmasScreen();
		VertexClientPE.showExitButtons(fromDashboard, this.text, this.icon);
	}
}

let previewTile = {
	text: "Preview",
	color: "violet",
	icon: android.R.drawable.ic_menu_gallery,
	forceLightColor: false,
	shouldDismissDashboard: true,
	onClick: function(fromDashboard) {
		previewScreen();
		VertexClientPE.showExitButtons(fromDashboard, this.text, this.icon);
	}
}

let feedbackTile = {
	text: "Feedback",
	color: "red",
	icon: android.R.drawable.ic_dialog_email,
	forceLightColor: true,
	onClick: function(fromDashboard) {
		VertexClientPE.showFeedbackDialog();
	}
}

let milestonesTile = {
	text: "Milestones",
	color: "grey",
	icon: android.R.drawable.ic_menu_agenda,
	forceLightColor: false,
	shouldDismissDashboard: true,
	onClick: function(fromDashboard) {
		milestonesScreen();
		VertexClientPE.showExitButtons(fromDashboard, this.text, this.icon);
	}
}

let helpTile = {
	text: "Help",
	color: "purple",
	icon: android.R.drawable.ic_menu_help,
	forceLightColor: false,
	shouldDismissDashboard: true,
	onClick: function(fromDashboard) {
		helpScreen();
		VertexClientPE.showExitButtons(fromDashboard, this.text, this.icon);
	}
}

let addonsTile = {
	text: "Addons",
	color: "blue",
	icon: android.R.drawable.ic_menu_more,
	forceLightColor: true,
	shouldDismissDashboard: true,
	onClick: function(fromDashboard) {
		addonScreen();
		VertexClientPE.showExitButtons(fromDashboard, this.text, this.icon);
	}
}

let shareTile = {
	text: "Share",
	color: "brown",
	icon: android.R.drawable.ic_menu_share,
	forceLightColor: false,
	shouldDismissDashboard: false,
	onClick: function(fromDashboard) {
		shareText("I use Vertex Client PE! Get it yourself at http://Vertex-Client.ml/. :D");
	}
}
let blockLauncherSettingsTile = {
	text: "BlockLauncher Settings",
	color: "black",
	icon: net.zhuoweizhang.mcpelauncher.R.drawable.ic_menu_settings_holo_light,
	forceLightColor: false,
	shouldDismissDashboard: false,
	shouldAdd: function() {
		return Launcher.isBlockLauncher();
	},
	onClick: function(fromDashboard) {
		let blIntent = new Intent_(CONTEXT, MainMenuOptionsActivity_);
		CONTEXT.startActivity(blIntent);
	}
}

let devSettingsTile = {
	text: "Developer Settings",
	color: "orange",
	icon: android.R.drawable.ic_menu_report_image,
	forceLightColor: false,
	shouldDismissDashboard: true,
	shouldAdd: function() {
		return VertexClientPE.isDevMode();
	},
	onClick: function(fromDashboard) {
		devSettingsScreen();
		VertexClientPE.showExitButtons(fromDashboard, this.text, this.icon);
	}
}

let jsConsoleTile = {
	text: "JavaScript Console",
	color: "orange",
	icon: android.R.drawable.ic_menu_report_image,
	forceLightColor: false,
	shouldDismissDashboard: false,
	shouldAdd: function() {
		return VertexClientPE.isDevMode();
	},
	onClick: function(fromDashboard) {
		VertexClientPE.showJavascriptConsoleDialog();
	}
}

let launcherName;
if(Launcher.isBlockLauncher()) {
	launcherName = "BlockLauncher";
} else {
	if(Launcher.isToolbox()) {
		launcherName = "Toolbox";
	} else if(Launcher.isMcpeMaster()) {
		launcherName = "MCPE Master";
	}
}

let restartTile = {
	text: "Restart " + launcherName,
	color: "green",
	icon: android.R.drawable.ic_menu_rotate,
	forceLightColor: false,
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
VertexClientPE.registerTile(chatTile);
//VertexClientPE.registerTile(musicPlayerTile);
VertexClientPE.registerTile(christmasTile);
VertexClientPE.registerTile(previewTile);
VertexClientPE.registerTile(feedbackTile);
VertexClientPE.registerTile(milestonesTile);
VertexClientPE.registerTile(helpTile);
VertexClientPE.registerTile(addonsTile);
VertexClientPE.registerTile(shareTile);
VertexClientPE.registerTile(blockLauncherSettingsTile);
VertexClientPE.registerTile(devSettingsTile);
VertexClientPE.registerTile(jsConsoleTile);
VertexClientPE.registerTile(restartTile);

VertexClientPE.initMods = function(switchedCat, shouldLoadModStates) {
	if(switchedCat == null) {
		switchedCat = false;
	}
	if(shouldLoadModStates == null) {
		shouldLoadModStates = true;
	}
	if(switchedCat) {
		VertexClientPE.modules.forEach(function(element, index, array) {
			if(element.isStateMod() && element.state) {
				element.onToggle();
			}
		});
	}
	VertexClientPE.modules = [];
	try {
		if(shouldLoadModStates) {
			let tempBypassState = VertexClientPE.getSavedModState("Bypass");
			VertexClientPE.preInitModules.forEach(function(element, index, array) {
				if(((element.pack == "Combat" && combatEnabled == "on") || (element.pack == "World" && worldEnabled == "on") || (element.pack == "Movement" && movementEnabled == "on") || (element.pack == "Player" && playerEnabled == "on") || (element.pack == "Misc" && miscEnabled == "on")) && !(element.singleplayerOnly && singleplayerEnabled == "off")) {
					// toggle mods on if enabled in save data
					let tempElement = element;
					if(VertexClientPE.getSavedModState(tempElement.name)) {
						//toggle mod
						if(tempElement.name == "Bypass" || !tempBypassState || !tempElement.hasOwnProperty("canBypassBypassMod") || (tempElement.hasOwnProperty("canBypassBypassMod") && tempElement.canBypassBypassMod())) {
							tempElement.onToggle();
						} else if(tempBypassState && !tempElement.canBypassBypassMod()) {
							if(tempElement.isStateMod()) {
								tempElement.state = true;
							}
						}
					}
					VertexClientPE.modules.push(tempElement);
				}
			});
		} else {
			VertexClientPE.preInitModules.forEach(function(element, index, array) {
				VertexClientPE.setSavedModState(element.name, false);
				if(((element.pack == "Combat" && combatEnabled == "on") || (element.pack == "World" && worldEnabled == "on") || (element.pack == "Movement" && movementEnabled == "on") || (element.pack == "Player" && playerEnabled == "on") || (element.pack == "Misc" && miscEnabled == "on")) && !(element.singleplayerOnly && singleplayerEnabled == "off")) {
					VertexClientPE.modules.push(element);
				}
			});
		}
	} catch(e) {
		VertexClientPE.showBugReportDialog(e);
	}
}

VertexClientPE.registerModule = function(obj) {
	if((obj.pack == undefined || obj.pack == null)) {
		obj.pack = VertexClientPE.category.toRealName(obj.category);
	}
	if(obj.type == undefined || obj.type == null) {
		obj.type = "Mod";
	}
	if(obj.batteryUsage == undefined || obj.batteryUsage == null) {
		obj.batteryUsage = "Normal";
	}
	if(obj.singleplayerOnly == undefined || obj.singleplayerOnly == null) {
		obj.singleplayerOnly = false;
	}
	if(obj.multiplayerOnly == undefined || obj.multiplayerOnly == null) {
		obj.multiplayerOnly = false;
	}
	VertexClientPE.preInitModules.push(obj);
};

VertexClientPE.registerCommand = function(obj) {
	VertexClientPE.commands.push(obj);
};

VertexClientPE.drawTracer = function(x, y, z, groundMode, particleName) {
	let particleType = ParticleType.flame;
	if(particleName == "redstone") {
		particleType = ParticleType.redstone;
	} else if(particleName == "critical") {
		particleType = ParticleType.crit;
	}
	for(let count = 0; count <= 25; count++) {
		Level.addParticle(particleType, x, y, z, (getPlayerX() - x) / count, groundMode?0:((getPlayerY() - y) / count), (getPlayerZ() - z) / count, 2);
	}
};

const ScriptableObject_ = org.mozilla.javascript.ScriptableObject;

function registerAddon(name, desc, current_version, target_version, mods, songs, tiles, author) {
	let shouldMessage = true;
	try {
		let scripts = realScriptManager.scripts;
		let scriptName;
		for(let i = 0; i < scripts.size(); i++) {
			let script = scripts.get(i);
			let scope = script.scope;
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
		let fullName = name + " v" + current_version;
		registerModulesFromAddon(fullName, mods);
		registerSongsFromAddon(fullName, songs);
		registerTilesFromAddon(fullName, tiles);
	} catch(e) {
		shouldMessage = false;
		VertexClientPE.toast("An error occurred while loading addons: " + e);
	}

	if(shouldMessage) {
		VertexClientPE.addonLoadToast(i18n("Successfully loaded the %0 addon!", [name]));
	}
}

function registerModulesFromAddon(fullAddonName, modArray) {
	modArray.forEach(function (element, index, array) {
		if(element != null) {
			element.source = fullAddonName;
			VertexClientPE.registerModule(element);
		}
	});
}

function registerSongsFromAddon(fullAddonName, songArray) {
	if(songArray != null) {
		songArray.forEach(function (element, index, array) {
			if(element != null) {
				element.source = fullAddonName;
				VertexClientPE.MusicUtils.registerSong(element, true);
			}
		});
	}
}

function registerTilesFromAddon(fullAddonName, tileArray) {
	if(tileArray != null) {
		tileArray.forEach(function (element, index, array) {
			if(element != null) {
				element.source = fullAddonName;
				VertexClientPE.registerTile(element);
			}
		});
	}
}

VertexClientPE.getCommandCount = function() {
	return VertexClientPE.commands.length;
};

VertexClientPE.getFeatureCount = function() {
	return VertexClientPE.modules.length + VertexClientPE.commands.length;
};

var panic = {
	name: "Panic",
	desc: i18n("Disables all modules of the selected categories at once."),
	category: VertexClientPE.category.MISC,
	type: "Mod",
	getSettingsLayout: function() {
		let panicSettingsLayout = new LinearLayout_(CONTEXT);
		panicSettingsLayout.setOrientation(1);

		let panicCombatCheckBox = clientCheckBox("Combat");
		panicCombatCheckBox.setChecked(panicCombatSetting == "on");
		panicCombatCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				panicCombatSetting = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});

		let panicWorldCheckBox = clientCheckBox("World");
		panicWorldCheckBox.setChecked(panicWorldSetting == "on");
		panicWorldCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				panicWorldSetting = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});

		let panicMovementCheckBox = clientCheckBox("Movement");
		panicMovementCheckBox.setChecked(panicMovementSetting == "on");
		panicMovementCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				panicMovementSetting = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});

		let panicPlayerCheckBox = clientCheckBox("Player");
		panicPlayerCheckBox.setChecked(panicPlayerSetting == "on");
		panicPlayerCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				panicPlayerSetting = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});

		let panicMiscCheckBox = clientCheckBox("Misc");
		panicMiscCheckBox.setChecked(panicMiscSetting == "on");
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
	onToggle: function(fromCmd) {
		fromCmd = fromCmd || false;
		let success = false;
		VertexClientPE.modules.forEach(function (element, index, array) {
			if(element.isStateMod() && element.state) {
				if((element.category == VertexClientPE.category.COMBAT && panicCombatSetting == "on") || (element.category == VertexClientPE.category.WORLD && panicWorldSetting == "on") || (element.category == VertexClientPE.category.MOVEMENT && panicMovementSetting == "on") || (element.category == VertexClientPE.category.PLAYER && panicPlayerSetting == "on") || (element.category == VertexClientPE.category.MISC && panicMiscSetting == "on")) {
					element.onToggle();
					VertexClientPE.setSavedModState(element.name, false);
					success = true;
				}
			}
		});
		if(success) {
			VertexClientPE.shouldUpdateGUI = true;
			if(!fromCmd) {
				if(VertexClientPE.menuIsShowing) {
					VertexClientPE.closeMenu();
					VertexClientPE.showMenu();
				}
				if(tabGUI != null && tabGUI.isShowing()) {
					tabGUI.dismiss();
					showTabGUI();
				}
				if(shortcutGUI != null && shortcutGUI.isShowing()) {
					shortcutGUI.dismiss();
					showShortcuts();
				}
				if(hacksList != null && hacksList.isShowing()) {
					updateHacksList();
				}
			}
		} else {
			VertexClientPE.toast("There are no mods to turn off.");
		}
	}
};

var bypass = {
	name: "Bypass",
	desc: i18n("Blocks mods that cannot bypass common anti cheat plugins."),
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
		if(tabGUI != null && tabGUI.isShowing()) {
			tabGUI.dismiss();
			showTabGUI();
		}
		if(shortcutGUI != null && shortcutGUI.isShowing()) {
			shortcutGUI.dismiss();
			showShortcuts();
		}
		if(hacksList != null && hacksList.isShowing()) {
			updateHacksList();
		}
	}
};

var switchGamemode = {
	name: "Switch Gamemode",
	desc: i18n("Switches your gamemode."),
	category: VertexClientPE.category.MISC,
	type: "Mod",
	getSettingsLayout: function() {
		let switchGamemodeSettingsLayout = new LinearLayout_(CONTEXT);
		switchGamemodeSettingsLayout.setOrientation(1);

		let sendCommandCheckBox = clientCheckBox("Send gamemode command to server when switching gamemode");
		sendCommandCheckBox.setChecked(switchGamemodeSendCommandSetting == "on");
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
		let newGameMode = Level.getGameMode()==0?1:0;
		Level.setGameMode(newGameMode);
		if(switchGamemodeSendCommandSetting == "on") {
			let cmd = "/gamemode " + newGameMode.toString();
			if(Level.executeCommand != undefined) {
				Level.executeCommand(cmd);
			} else {
				Server.sendChat(cmd);
			}
		}
	}
};

var killAura = {
	name: "Killaura",
	desc: i18n("Automatically kills all the near entities."),
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	singleplayerOnly: true,
	getSettingsLayout: function() {
		let killAuraSettingsLayout = new LinearLayout_(CONTEXT);
		killAuraSettingsLayout.setOrientation(1);
		let killAuraRangeTitle = clientTextView("Range: | " + killAuraRange);
		let killAuraRangeSlider = clientSeekBar();
		killAuraRangeSlider.setProgress(killAuraRange);
		killAuraRangeSlider.setMax(10);
		killAuraRangeSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				killAuraRange = killAuraRangeSlider.getProgress();
				killAuraRangeTitle.setText("Range: | " + killAuraRange);
				if(useKillauraRangeCheckBox != null) {
					useKillauraRangeCheckBox.setText("Use same range as Killaura (" + killAuraRange + ")");
				}
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
	desc: i18n("Automatically freezes all the near entities."),
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
	desc: i18n("Sets all the near entities on fire."),
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
	desc: i18n("Automatically selects the best sword for you when attacking entities if available."),
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
		if(!this.state) return;
		VertexClientPE.autoSword(a, v);
	}
};

var homeCommand = {
	name: "/home",
	desc: i18n("Runs the /home command if the server or world you're on has it."),
	category: VertexClientPE.category.PLAYER,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return false;
	},
	onToggle: function() {
		let cmd = "/home";
		if(Level.executeCommand != undefined) {
			Level.executeCommand(cmd);
		} else {
			Server.sendChat(cmd);
		}
	}
};

var timer = {
	name: "Timer",
	desc: i18n("Changes the speed of the game."),
	category: VertexClientPE.category.WORLD,
	type: "Mod",
	state: false,
	getSettingsLayout: function() {
		let timerSettingsLayout = new LinearLayout_(CONTEXT);
		timerSettingsLayout.setOrientation(1);
		let timerSpeedTitle = clientTextView("Speed: | " + timerSpeed + " * 20 ticks");
		let timerSpeedSlider = clientSeekBar();
		timerSpeedSlider.setProgress(timerSpeed);
		timerSpeedSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				timerSpeed = timerSpeedSlider.getProgress();
				timerSpeedTitle.setText("Speed: | " + timerSpeed + " * 20 ticks");
				if(timerState) {
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
		timerState = this.state;
		if(this.state) {
			ModPE.setGameSpeed(20 * timerSpeed);
		} else {
			ModPE.setGameSpeed(20);
		}
	}
};

var nuker = {
	name: "Nuker",
	desc: i18n("Automatically destroys blocks around you. Can be used on servers when Bypass is enabled."),
	category: VertexClientPE.category.WORLD,
	type: "Mod",
	state: false,
	getExtraInfo: function() {
		return capitalizeFirstLetter(nukerMode);
	},
	getSettingsLayout: function() {
		let nukerSettingsLayout = new LinearLayout_(CONTEXT);
		nukerSettingsLayout.setOrientation(1);
		let nukerRangeTitle = clientTextView("Range: | " + nukerRange);
		let nukerRangeSlider = clientSeekBar();
		nukerRangeSlider.setProgress(nukerRange);
		nukerRangeSlider.setMax(10);
		nukerRangeSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				nukerRange = nukerRangeSlider.getProgress();
				nukerRangeTitle.setText("Range: | " + nukerRange);
			}
		});
		let nukerModeTitle = clientTextView("\nMode:");
		let nukerModeCubeButton = clientButton("Cube", "Normal mode which destroys blocks in the shape of a cube");
		nukerModeCubeButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 6 - 20 / 3, display.heightPixels / 10));
		let nukerModeFlatButton = clientButton("Flat", "Flat mode which flats the ground");
		nukerModeFlatButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 6 - 20 / 3, display.heightPixels / 10));
		let nukerModeSmashButton = clientButton("Smash", "Smash mode which only breaks blocks with a destroy time of 0");
		nukerModeSmashButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 6 - 20 / 3, display.heightPixels / 10));

		let nukerModeLayout = new LinearLayout_(CONTEXT);
		nukerModeLayout.setOrientation(LinearLayout_.HORIZONTAL);

		let nukerModeLayoutLeft = new LinearLayout_(CONTEXT);
		nukerModeLayoutLeft.setOrientation(1);
		nukerModeLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3 - 20 / 3, display.heightPixels / 10));
		nukerModeLayoutLeft.setGravity(Gravity_.CENTER_HORIZONTAL);
		nukerModeLayout.addView(nukerModeLayoutLeft);

		let nukerModeLayoutCenter = new LinearLayout_(CONTEXT);
		nukerModeLayoutCenter.setOrientation(1);
		nukerModeLayoutCenter.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3 - 20 / 3, display.heightPixels / 10));
		nukerModeLayoutCenter.setGravity(Gravity_.CENTER_HORIZONTAL);
		nukerModeLayout.addView(nukerModeLayoutCenter);

		let nukerModeLayoutRight = new LinearLayout_(CONTEXT);
		nukerModeLayoutRight.setOrientation(1);
		nukerModeLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3 - 20 / 3, display.heightPixels / 10));
		nukerModeLayoutRight.setGravity(Gravity_.CENTER_HORIZONTAL);
		nukerModeLayout.addView(nukerModeLayoutRight);

		nukerModeLayoutLeft.addView(nukerModeCubeButton);
		nukerModeLayoutCenter.addView(nukerModeFlatButton);
		nukerModeLayoutRight.addView(nukerModeSmashButton);
		if(nukerMode == "cube") {
			nukerModeCubeButton.setTextColor(Color_.GREEN);
		} if(nukerMode == "flat") {
			nukerModeFlatButton.setTextColor(Color_.GREEN);
		} if(nukerMode == "smash") {
			nukerModeSmashButton.setTextColor(Color_.GREEN);
		}
		nukerModeCubeButton.setOnClickListener(new View_.OnClickListener() {
			onClick: function(view) {
				nukerMode = "cube";
				nukerModeCubeButton.setTextColor(Color_.GREEN);
				VertexClientPE.addTextStyleToView(nukerModeFlatButton);
				VertexClientPE.addTextStyleToView(nukerModeSmashButton);
				VertexClientPE.saveMainSettings();
			}
		});
		nukerModeFlatButton.setOnClickListener(new View_.OnClickListener() {
			onClick: function(view) {
				nukerMode = "flat";
				VertexClientPE.addTextStyleToView(nukerModeCubeButton);
				nukerModeFlatButton.setTextColor(Color_.GREEN);
				VertexClientPE.addTextStyleToView(nukerModeSmashButton);
				VertexClientPE.saveMainSettings();
			}
		});
		nukerModeSmashButton.setOnClickListener(new View_.OnClickListener() {
			onClick: function(view) {
				nukerMode = "smash";
				VertexClientPE.addTextStyleToView(nukerModeCubeButton);
				VertexClientPE.addTextStyleToView(nukerModeFlatButton);
				nukerModeSmashButton.setTextColor(Color_.GREEN);
				VertexClientPE.saveMainSettings();
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
		VertexClientPE.nuke(getPlayerX(), getPlayerY(), getPlayerZ(), nukerRange, nukerMode);
	}
};

var fancyChat = {
	name: "FancyChat",
	desc: i18n("Replaces characters in sent chat messages by fancy unicode characters. Can be used to bypass curse word filters on some servers."),
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
	desc: i18n("Prevents you from getting hurt."),
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
	desc: i18n("Automatically makes you ride an entity on tap."),
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
		if(!this.state) return;
		preventDefault();
		if(getPlayerEnt() == a) {
			VertexClientPE.ride(v);
		}
	}
};

var onlyDay = {
	name: "OnlyDay",
	desc: i18n("Sets the time to day all the time."),
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
	desc: i18n("Makes you able to fly, even when you're in survival."),
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
	desc: i18n("Teleports you to the block you're pointing at."),
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
	desc: i18n("Teleports you wherever you tap."),
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
	desc: i18n("Makes you able to walk through walls."),
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
	desc: i18n("Allows you to decrease block destroy times."),
	category: VertexClientPE.category.PLAYER,
	type: "Mod",
	state: false,
	getSettingsLayout: function() {
		let fastBreakSettingsLayout = new LinearLayout_(CONTEXT);
		fastBreakSettingsLayout.setOrientation(1);
		let fastBreakDestroyTimeTxt;
		if(fastBreakDestroyTime == 0) {
			fastBreakDestroyTimeTxt = "0 (instant)";
		} else {
			fastBreakDestroyTimeTxt = fastBreakDestroyTime;
		}
		let fastBreakDestroyTimeTitle = clientTextView("Destroy time: | " + fastBreakDestroyTimeTxt);
		let fastBreakDestroyTimeSlider = clientSeekBar();
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
	desc: i18n("Automatically repeats all the received chat messages. Can be very annoying."),
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
	desc: i18n("Automatically spams the player."),
	category: VertexClientPE.category.PLAYER,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	getSettingsLayout: function(onModManager) {
		let autoSpammerMessageLayout = new LinearLayout_(CONTEXT);
		autoSpammerMessageLayout.setOrientation(1);

		let spamUseRandomMsgSettingCheckBox = clientCheckBox("Use random messages instead of the custom message");
		spamUseRandomMsgSettingCheckBox.setChecked(spamUseRandomMsgSetting=="on");
		spamUseRandomMsgSettingCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				let isChecked = v.isChecked();
				spamUseRandomMsgSetting = isChecked?"on":"off";
				spamMessageInput.setEnabled(!isChecked);
				VertexClientPE.saveMainSettings();
			}
		});

		let spamMessageTitle = clientTextView("Custom message:");
		let spamMessageInput = clientEditText(spamMessage);
		let spamMessageText;
		spamMessageInput.setHint("Spam message");
		spamMessageInput.setEnabled(!spamUseRandomMsgSettingCheckBox.isChecked());
		spamMessageInput.addTextChangedListener(new TextWatcher_() {
			onTextChanged: function() {
				spamMessage = spamMessageInput.getText();
				if(spamMessageText != null) {
					spamMessageText.setText(spamMessage + " (tap to change)");
				}
			}
		});
		if(onModManager) {
			spamMessageInput.setLayoutParams(new LinearLayout_.LayoutParams(LinearLayout_.LayoutParams.MATCH_PARENT, LinearLayout_.LayoutParams.WRAP_CONTENT));
			spamMessageText = clientTextView(spamMessage + " (tap to change)");
			spamMessageText.setTextSize(px2dip(spamMessageInput.getTextSize()));
			spamMessageText.setOnClickListener(new View_.OnClickListener() {
				onClick: function(v) {
					spamMessageInput.requestFocus();
					VertexClientPE.showBasicDialog("AutoSpammer | Custom message", spamMessageInput,
						function() {
							spamMessageInput.getParent().removeView(spamMessageInput);
							VertexClientPE.saveMainSettings();
						}
					);
				}
			});
		}

		let spamDelayTimeTitle = clientTextView("Delay time: | " + spamDelayTime + " seconds");
		let spamDelayTimeSlider = clientSeekBar();
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
		if(spamMessageText == null) {
			autoSpammerMessageLayout.addView(spamMessageInput);
		} else {
			autoSpammerMessageLayout.addView(spamMessageText);
		}

		autoSpammerMessageLayout.addView(spamDelayTimeTitle);
		autoSpammerMessageLayout.addView(spamDelayTimeSlider);

		return autoSpammerMessageLayout;
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
	desc: i18n("Automatically teleports you behind entities to prevent you from getting hurt by others."),
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	credits: "GodSoft029",
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	findPos: function(entity) {
		let playerPos = new Array(getPlayerX(), getPlayerY() + 0.5, getPlayerZ());
		let victimPos = new Array(Entity.getX(entity), Entity.getY(entity), Entity.getZ(entity));
		let diffPos = new Array(victimPos[0] - playerPos[0], null, victimPos[2] - playerPos[2]);
		playerPos[0] += diffPos[0] * 2;
		playerPos[2] += diffPos[2] * 2;
		return playerPos;
	},
	onInterval: function() {
		if(tpAuraStage == 0) {
			tpAuraStage = 1;

			let mob = VertexClientPE.Utils.Player.getNearestMob(4);
			if(mob != null) {
				let playerPos = this.findPos(mob);

				if (getTile(playerPos[0], playerPos[1], playerPos[2]) == 0 && getTile(playerPos[0], playerPos[1] - 1, playerPos[2]) == 0 && getTile(playerPos[0], playerPos[1] - 2, playerPos[2]) == 0) {
					Entity.setPosition(getPlayerEnt(), playerPos[0], playerPos[1], playerPos[2]);
				}

				VertexClientPE.CombatUtils.aimAtEnt(mob);
			}

			let player = VertexClientPE.Utils.Player.getNearestPlayer(4);
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
		if(!this.state) return;
		if(a == getPlayerEnt()) {
			let x = Entity.getX(v) - getPlayerX();
			let z = Entity.getZ(v) - getPlayerZ();
			let playerPos = new Array(getPlayerX(), getPlayerY() + 0.5, getPlayerZ());
			let victimPos = new Array(Entity.getX(v), Entity.getY(v), Entity.getZ(v));
			let diffPos = new Array(victimPos[0] - playerPos[0], null, victimPos[2] - playerPos[2]);
			playerPos[0] += diffPos[0] * 2;
			playerPos[2] += diffPos[2] * 2;

			if(getTile(playerPos[0], playerPos[1], playerPos[2]) == 0 && getTile(playerPos[0], playerPos[1] - 1, playerPos[2]) == 0 && getTile(playerPos[0], playerPos[1] - 2, playerPos[2]) == 0) {
				Entity.setPosition(getPlayerEnt(), playerPos[0], playerPos[1], playerPos[2]);
			}

			VertexClientPE.CombatUtils.aimAtEnt(v);
		}
	}
}

let powerExplosionsStage = 0;

var powerExplosions = {
	name: "PowerExplosions",
	desc: i18n("Makes explosions more powerful."),
	category: VertexClientPE.category.WORLD,
	type: "Mod",
	state: false,
	getSettingsLayout: function() {
		let powerExplosionsLayout = new LinearLayout_(CONTEXT);
		powerExplosionsLayout.setOrientation(1);

		let powerExplosionsPowerSettingTitle = clientTextView("Power: | " + powerExplosionsPowerSetting);
		let powerExplosionsPowerSettingSlider = clientSeekBar();
		let minPower = 1;
		powerExplosionsPowerSettingSlider.setProgress(powerExplosionsPowerSetting - minPower);
		powerExplosionsPowerSettingSlider.setMax(25 - minPower);
		powerExplosionsPowerSettingSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				powerExplosionsPowerSetting = powerExplosionsPowerSettingSlider.getProgress() + minPower;
				powerExplosionsPowerSettingTitle.setText("Power: | " + powerExplosionsPowerSetting);
			}
		});

		powerExplosionsLayout.addView(powerExplosionsPowerSettingTitle);
		powerExplosionsLayout.addView(powerExplosionsPowerSettingSlider);

		return powerExplosionsLayout;
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
	onExplode: function(entity, x, y, z, power, onFire) {
		if(powerExplosionsStage == 0) {
			powerExplosionsStage = 1;
			preventDefault();
			Level.explode(x, y, z, powerExplosionsPowerSetting);
			powerExplosionsStage = 0;
		}
	}
}

var tapExplosion = {
	name: "TapExplosion",
	desc: i18n("Makes blocks explode wherever you tap."),
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

var signEditor = {
	name: "SignEditor",
	desc: i18n("Allows you to edit signs."),
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
			VertexClientPE.showSignEditorDialog(x, y, z);
		}
	}
}

var instaKill = {
	name: "InstaKill",
	desc: i18n("Makes you able to kill an entity in one hit."),
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
		if(!this.state) return;
		if(getPlayerEnt() == a) {
			Entity.setHealth(v, 1);
		}
	}
}

var derp = {
	name: "Derp",
	desc: i18n("Rotates the player all the time."),
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
	desc: i18n("Reduces fall damage by slowing the player down when falling."),
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
	desc: i18n("Automatically mines the block you're looking at."),
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

let followStage = 0;

var follow = {
	name: "Follow",
	desc: i18n("Automatically follow nearby entities."),
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
		if(followStage == 0) {
			followStage = 1;
			let mob = VertexClientPE.Utils.Player.getNearestMob(10, 2);
			let player = VertexClientPE.Utils.Player.getNearestPlayer(10, 2);
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
	desc: i18n("Destroys blocks wherever you tap."),
	category: VertexClientPE.category.WORLD,
	type: "Mod",
	state: false,
	getSettingsLayout: function() {
		let tapNukerSettingsLayout = new LinearLayout_(CONTEXT);
		tapNukerSettingsLayout.setOrientation(1);
		let tapNukerRangeTitle = clientTextView("Range: | " + tapNukerRange);
		let tapNukerRangeSlider = clientSeekBar();
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
		VertexClientPE.nuke(x, y, z, tapNukerRange, "cube");
	}
}

var tapRemover = {
	name: "TapRemover",
	desc: i18n("Removes blocks and entities on tap."),
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
		if(!this.state) return;
		if(getPlayerEnt() == a) {
			preventDefault();
			Entity.remove(v);
		}
	}
}

var autoPlace = {
	name: "AutoPlace",
	desc: i18n("Automatically places the block you're holding wherever you look."),
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
		let x = Player.getPointedBlockX();
		let y = Player.getPointedBlockY();
		let z = Player.getPointedBlockZ();
		let side = Player.getPointedBlockSide();
		let blockId = Player.getCarriedItem();
		let blockData = Player.getCarriedItemData();
		if(getTile(x, y, z) != 0) {
			if(blockId <= 256) {
				setTile(x-(side==4?1:0)+(side==5?1:0)+0.5,y-(side==0?1:0)+(side==1?1:0)+0.5,z-(side==2?1:0)+(side==3?1:0)+0.5, blockId, blockData);
			}
		}
	}
}

var regen = {
	name: "Regen",
	desc: i18n("Instantly refills your health."),
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
	desc: i18n("Gives you many hearts."),
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
	desc: i18n("Automatically jumps to make the second attack critical, make sure you attack again after hitting an entity and before hitting the ground to make it work."),
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
		if(!this.state) return;
		Entity.setVelY(getPlayerEnt(), 0.64);
	}
}

var arrowGun = {
	name: "ArrowGun",
	desc: i18n("Automatically shoots arrows wherever you look."),
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	singleplayerOnly: true,
	getExtraInfo: function() {
		return capitalizeFirstLetter(arrowGunMode);
	},
	getSettingsLayout: function() {
		let arrowGunSettingsLayout = new LinearLayout_(CONTEXT);
		arrowGunSettingsLayout.setOrientation(1);

		let arrowGunModeLayout = new LinearLayout_(CONTEXT);
		arrowGunModeLayout.setOrientation(LinearLayout_.HORIZONTAL);

		let arrowGunModeTitle = clientTextView("Mode:");
		let arrowGunModeSlowButton = clientButton("Slow", "Slow mode which shoots an arrow every second.");
		arrowGunModeSlowButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
		let arrowGunModeFastButton = clientButton("Fast", "Fast mode which shoots multiple arrows every second.");
		arrowGunModeFastButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));

		let arrowGunModeLayoutLeft = new LinearLayout_(CONTEXT);
		arrowGunModeLayoutLeft.setOrientation(1);
		arrowGunModeLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - 5, display.heightPixels / 10));
		arrowGunModeLayoutLeft.setGravity(Gravity_.CENTER_HORIZONTAL);
		arrowGunModeLayout.addView(arrowGunModeLayoutLeft);

		let arrowGunModeLayoutRight = new LinearLayout_(CONTEXT);
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
				VertexClientPE.addTextStyleToView(arrowGunModeFastButton);
				VertexClientPE.saveMainSettings();
			}
		});
		arrowGunModeFastButton.setOnClickListener(new View_.OnClickListener() {
			onClick: function(view) {
				arrowGunMode = "fast";
				VertexClientPE.addTextStyleToView(arrowGunModeSlowButton);
				arrowGunModeFastButton.setTextColor(Color_.GREEN);
				VertexClientPE.saveMainSettings();
			}
		});
		arrowGunSettingsLayout.addView(arrowGunModeTitle);
		arrowGunSettingsLayout.addView(arrowGunModeLayout);
		return arrowGunSettingsLayout;
	},
	shootArrow: function() {
		let p = ((Entity.getPitch(getPlayerEnt()) + 90) * Math.PI) / 180;
		let y = ((Entity.getYaw(getPlayerEnt()) + 90) * Math.PI) / 180;
		let xx = Math.sin(p) * Math.cos(y);
		let yy = Math.sin(p) * Math.sin(y);
		let zz = Math.cos(p);
		let arrow = Level.spawnMob(getPlayerX() + xx, getPlayerY() + zz, getPlayerZ() + yy, 80);
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
	desc: i18n("Order a pizza of Pizza Hut."),
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
	desc: i18n("Changes the FOV to zoom in."),
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
	desc: i18n("Displays the player's coordinates."),
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
		ModPE.showTipMessage("\n\n\n" + "X: " + parseInt(getPlayerX()) + " Y: " + parseInt(getPlayerY()) + " Z: " + parseInt(getPlayerZ()));
	}
}

var itemGiver = {
	name: "ItemGiver",
	desc: i18n("Adds items to your inventory."),
	category: VertexClientPE.category.PLAYER,
	type: "Mod",
	state: false,
	credits: "Katie Heart (@CtrlAltCuteness)",
	getSettingsLayout: function() {
		let itemGiverSettingsLayout = new LinearLayout_(CONTEXT);
		itemGiverSettingsLayout.setOrientation(1);

		let itemGiverModeTitle = clientTextView("Mode:");
		let itemGiverFastButton = clientButton("Fast", "Fast mode with custom input only.");
		itemGiverFastButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4 - 20 / 2, display.heightPixels / 10));
		let itemGiverAdvancedButton = clientButton("Advanced", "Advanced mode with item presets and custom input.");
		itemGiverAdvancedButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4 - 20 / 2, display.heightPixels / 10));

		let itemGiverModeLayout = new LinearLayout_(CONTEXT);
		itemGiverModeLayout.setOrientation(LinearLayout_.HORIZONTAL);

		let itemGiverModeLayoutLeft = new LinearLayout_(CONTEXT);
		itemGiverModeLayoutLeft.setOrientation(1);
		itemGiverModeLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - 20 / 2, display.heightPixels / 10));
		itemGiverModeLayoutLeft.setGravity(Gravity_.CENTER_HORIZONTAL);
		itemGiverModeLayout.addView(itemGiverModeLayoutLeft);

		let itemGiverModeLayoutRight = new LinearLayout_(CONTEXT);
		itemGiverModeLayoutRight.setOrientation(1);
		itemGiverModeLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - 20 / 2, display.heightPixels / 10));
		itemGiverModeLayoutRight.setGravity(Gravity_.CENTER_HORIZONTAL);
		itemGiverModeLayout.addView(itemGiverModeLayoutRight);

		if(itemGiverModeSetting == "fast") {
			itemGiverFastButton.setTextColor(Color_.GREEN);
		} else if(itemGiverModeSetting == "advanced") {
			itemGiverAdvancedButton.setTextColor(Color_.GREEN);
		}
		itemGiverFastButton.setOnClickListener(new View_.OnClickListener() {
			onClick: function(view) {
				itemGiverModeSetting = "fast";
				itemGiverFastButton.setTextColor(Color_.GREEN);
				VertexClientPE.addTextStyleToView(itemGiverAdvancedButton);
				VertexClientPE.saveMainSettings();
			}
		});
		itemGiverAdvancedButton.setOnClickListener(new View_.OnClickListener() {
			onClick: function(view) {
				itemGiverModeSetting = "advanced";
				VertexClientPE.addTextStyleToView(itemGiverFastButton);
				itemGiverAdvancedButton.setTextColor(Color_.GREEN);
				VertexClientPE.saveMainSettings();
			}
		});

		itemGiverModeLayoutLeft.addView(itemGiverFastButton);
		itemGiverModeLayoutRight.addView(itemGiverAdvancedButton);

		itemGiverSettingsLayout.addView(itemGiverModeTitle);
		itemGiverSettingsLayout.addView(itemGiverModeLayout);
		return itemGiverSettingsLayout;
	},
	isStateMod: function() {
		return false;
	},
	onToggle: function() {
		VertexClientPE.showItemGiverDialog();
	}
}

var healthTags = {
	name: "HealthTags",
	desc: i18n("Displays an entity's name and health in its nametag."),
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	getSettingsLayout: function(onModManager) {
		let healthTagsLayout = new LinearLayout_(CONTEXT);
		healthTagsLayout.setOrientation(1);

		let width = onModManager?display.widthPixels:(display.widthPixels - 20);
		let healthTagsNameSettingFunc = new settingButton("Mob name color on nametag", null, width,
			function(viewArg) {
				healthTagsNameSetting = "aqua";
				healthTagsNameSettingButton.setText("Aqua");
				VertexClientPE.initHealthTags();
			}
		);
		let healthTagsNameSettingButton = healthTagsNameSettingFunc.getButton();
		if(healthTagsNameSetting == "blue") {
			healthTagsNameSettingButton.setText("Blue");
		} else if(healthTagsNameSetting == "green") {
			healthTagsNameSettingButton.setText("Green");
		} else if(healthTagsNameSetting == "aqua") {
			healthTagsNameSettingButton.setText("Aqua");
		} else if(healthTagsNameSetting == "red") {
			healthTagsNameSettingButton.setText("Red");
		} else if(healthTagsNameSetting == "light_purple") {
			healthTagsNameSettingButton.setText("Light Purple");
		} else if(healthTagsNameSetting == "yellow") {
			healthTagsNameSettingButton.setText("Yellow");
		}
		healthTagsNameSettingButton.setOnClickListener(new View_.OnClickListener({
			onClick: function(viewArg) {
				if(healthTagsNameSetting == "white") {
					healthTagsNameSetting = "blue";
					healthTagsNameSettingButton.setText("Blue");
				} else if(healthTagsNameSetting == "blue") {
					healthTagsNameSetting = "green";
					healthTagsNameSettingButton.setText("Green");
				} else if(healthTagsNameSetting == "green") {
					healthTagsNameSetting = "aqua";
					healthTagsNameSettingButton.setText("Aqua");
				} else if(healthTagsNameSetting == "aqua") {
					healthTagsNameSetting = "red";
					healthTagsNameSettingButton.setText("Red");
				} else if(healthTagsNameSetting == "red") {
					healthTagsNameSetting = "light_purple";
					healthTagsNameSettingButton.setText("Light Purple");
				} else if(healthTagsNameSetting == "light_purple") {
					healthTagsNameSetting = "yellow";
					healthTagsNameSettingButton.setText("Yellow");
				} else if(healthTagsNameSetting == "yellow") {
					healthTagsNameSetting = "white";
					healthTagsNameSettingButton.setText("White");
				}
				VertexClientPE.saveMainSettings();
				VertexClientPE.initHealthTags();
			}
		}));

		let healthTagsHealthSettingFunc = new settingButton("Mob health color on nametag", null, width,
			function(viewArg) {
				healthTagsHealthSetting = "red";
				healthTagsHealthSettingButton.setText("Red");
				VertexClientPE.initHealthTags();
			}
		);
		let healthTagsHealthSettingButton = healthTagsHealthSettingFunc.getButton();
		if(healthTagsHealthSetting == "blue") {
			healthTagsHealthSettingButton.setText("Blue");
		} else if(healthTagsHealthSetting == "green") {
			healthTagsHealthSettingButton.setText("Green");
		} else if(healthTagsHealthSetting == "aqua") {
			healthTagsHealthSettingButton.setText("Aqua");
		} else if(healthTagsHealthSetting == "red") {
			healthTagsHealthSettingButton.setText("Red");
		} else if(healthTagsHealthSetting == "light_purple") {
			healthTagsHealthSettingButton.setText("Light Purple");
		} else if(healthTagsHealthSetting == "yellow") {
			healthTagsHealthSettingButton.setText("Yellow");
		}
		healthTagsHealthSettingButton.setOnClickListener(new View_.OnClickListener({
			onClick: function(viewArg) {
				if(healthTagsHealthSetting == "white") {
					healthTagsHealthSetting = "blue";
					healthTagsHealthSettingButton.setText("Blue");
				} else if(healthTagsHealthSetting == "blue") {
					healthTagsHealthSetting = "green";
					healthTagsHealthSettingButton.setText("Green");
				} else if(healthTagsHealthSetting == "green") {
					healthTagsHealthSetting = "aqua";
					healthTagsHealthSettingButton.setText("Aqua");
				} else if(healthTagsHealthSetting == "aqua") {
					healthTagsHealthSetting = "red";
					healthTagsHealthSettingButton.setText("Red");
				} else if(healthTagsHealthSetting == "red") {
					healthTagsHealthSetting = "light_purple";
					healthTagsHealthSettingButton.setText("Light Purple");
				} else if(healthTagsHealthSetting == "light_purple") {
					healthTagsHealthSetting = "yellow";
					healthTagsHealthSettingButton.setText("Yellow");
				} else if(healthTagsHealthSetting == "yellow") {
					healthTagsHealthSetting = "white";
					healthTagsHealthSettingButton.setText("White");
				}
				VertexClientPE.saveMainSettings();
				VertexClientPE.initHealthTags();
			}
		}));

		let healthTagsShowHeartSettingFunc = new settingButton("Show heart icon on nametag", null, width,
			function(viewArg) {
				healthTagsShowHeartSetting = "on";
				healthTagsShowHeartSettingButton.setText(i18n("ON"));
			}
		);
		let healthTagsShowHeartSettingButton = healthTagsShowHeartSettingFunc.getButton();
		if(healthTagsShowHeartSetting == "on") {
			healthTagsShowHeartSettingButton.setText(i18n("ON"));
		} else if(healthTagsShowHeartSetting == "off") {
			healthTagsShowHeartSettingButton.setText(i18n("OFF"));
		}
		healthTagsShowHeartSettingButton.setOnClickListener(new View_.OnClickListener({
			onClick: function(viewArg) {
				if(healthTagsShowHeartSetting == "on") {
					healthTagsShowHeartSetting = "off";
					healthTagsShowHeartSettingButton.setText(i18n("OFF"));
				} else if(healthTagsShowHeartSetting == "off") {
					healthTagsShowHeartSetting = "on";
					healthTagsShowHeartSettingButton.setText(i18n("ON"));
				}
				VertexClientPE.saveMainSettings();
			}
		}));

		VertexClientPE.addView(healthTagsLayout, healthTagsNameSettingFunc);
		VertexClientPE.addView(healthTagsLayout, healthTagsHealthSettingFunc);
		VertexClientPE.addView(healthTagsLayout, healthTagsShowHeartSettingFunc);

		return healthTagsLayout;
	},
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
	desc: i18n("Switches the item in your hand all the time."),
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

let playerDir = [0, 0, 0];
let DEG_TO_RAD = PI_CIRCLE;
let playerWalkSpeed = 0.2;

var autoWalk = {
	name: "AutoWalk",
	desc: i18n("Makes your player walk automatically."),
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	getExtraInfo: function() {
		return capitalizeFirstLetter(autoWalkDirection);
	},
	getSettingsLayout: function() {
		let autoWalkSettingsLayout = new LinearLayout_(CONTEXT);
		autoWalkSettingsLayout.setOrientation(1);

		let autoWalkDirectionLayout = new LinearLayout_(CONTEXT);
		autoWalkDirectionLayout.setOrientation(LinearLayout_.HORIZONTAL);

		let autoWalkDirectionTitle = clientTextView("Direction:");
		let autoWalkDirectionForwardButton = clientButton("Forward", "Makes the player move forward.");
		autoWalkDirectionForwardButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
		let autoWalkDirectionBackwardsButton = clientButton("Backwards", "Makes the player move backwards.");
		autoWalkDirectionBackwardsButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));

		let autoWalkDirectionLayoutLeft = new LinearLayout_(CONTEXT);
		autoWalkDirectionLayoutLeft.setOrientation(1);
		autoWalkDirectionLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - 5, display.heightPixels / 10));
		autoWalkDirectionLayoutLeft.setGravity(Gravity_.CENTER_HORIZONTAL);
		autoWalkDirectionLayout.addView(autoWalkDirectionLayoutLeft);

		let autoWalkDirectionLayoutRight = new LinearLayout_(CONTEXT);
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
				VertexClientPE.addTextStyleToView(autoWalkDirectionBackwardsButton);
				VertexClientPE.saveMainSettings();
			}
		});
		autoWalkDirectionBackwardsButton.setOnClickListener(new View_.OnClickListener() {
			onClick: function(view) {
				autoWalkDirection = "backwards";
				VertexClientPE.addTextStyleToView(autoWalkDirectionForwardButton);
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
	desc: i18n("Turns every projectile into an Ender Pearl."),
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
	desc: i18n("Makes every block drop itself 64 times."),
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
	desc: i18n("Makes you able to walk on liquids."),
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
	desc: i18n("Allows you to jump 2 blocks high."),
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

let f = 0;

let xPos;
let zPos;
let xDiff;
let zDiff;

var fastWalk = {
	name: "FastWalk",
	desc: i18n("Makes you walk faster."),
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
			xPos = getPlayerX();
			zPos = getPlayerZ();
			f += 1;
		} else if(f == 3) {
			f = 1;
			xDiff = getPlayerX() - xPos;
			zDiff = getPlayerZ() - zPos;
			setVelX(getPlayerEnt(), xDiff);
			setVelZ(getPlayerEnt(), zDiff);
			xDiff = 0;
			zDiff = 0;
		}
		if(f != 1) {
			f += 1;
		}
	}
}

let useKillauraRangeCheckBox;

var aimbot = {
	name: "Aimbot",
	desc: i18n("Makes you point at entities."),
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	credits: "GodSoft029",
	getSettingsLayout: function() {
		let aimbotSettingsLayout = new LinearLayout_(CONTEXT);
		aimbotSettingsLayout.setOrientation(1);

		useKillauraRangeCheckBox = clientCheckBox("Use same range as Killaura (" + killAuraRange + ")");
		useKillauraRangeCheckBox.setChecked(aimbotUseKillauraRange == "on");
		useKillauraRangeCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				aimbotUseKillauraRange = v.isChecked()?"on":"off";
				aimbotRangeSlider.setEnabled(!v.isChecked());
				VertexClientPE.saveMainSettings();
			}
		});

		let aimbotRangeTitle = clientTextView("Range: | " + aimbotRangeSetting);
		let aimbotRangeSlider = clientSeekBar();
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
	desc: i18n("Allows you to find chests more easily by moving particles from the chest to underneath you."),
	category: VertexClientPE.category.WORLD,
	type: "Mod",
	state: false,
	getExtraInfo: function() {
		return capitalizeFirstLetter(chestTracersParticle);
	},
	getSettingsLayout: function() {
		let chestTracersSettingsLayout = new LinearLayout_(CONTEXT);
		chestTracersSettingsLayout.setOrientation(1);
		let chestTracersRangeTitle = clientTextView("Range: | " + chestTracersRange);
		let chestTracersRangeSlider = clientSeekBar();
		chestTracersRangeSlider.setProgress(chestTracersRange);
		chestTracersRangeSlider.setMax(25);
		chestTracersRangeSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				chestTracersRange = chestTracersRangeSlider.getProgress();
				chestTracersRangeTitle.setText("Range: | " + chestTracersRange);
			}
		});

		let chestTracersParticleTitle = clientTextView("\nParticle:");
		let chestTracersFlameButton = clientButton("Flame", "Flame particles.");
		chestTracersFlameButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 6 - 20 / 3, display.heightPixels / 10));
		let chestTracersRedstoneButton = clientButton("Redstone", "Redstone particles.");
		chestTracersRedstoneButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 6 - 20 / 3, display.heightPixels / 10));
		let chestTracersCriticalButton = clientButton("Critical", "Critical hit particles.");
		chestTracersCriticalButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 6 - 20 / 3, display.heightPixels / 10));

		let chestTracersParticleLayout = new LinearLayout_(CONTEXT);
		chestTracersParticleLayout.setOrientation(LinearLayout_.HORIZONTAL);

		let chestTracersParticleLayoutLeft = new LinearLayout_(CONTEXT);
		chestTracersParticleLayoutLeft.setOrientation(1);
		chestTracersParticleLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3 - 20 / 3, display.heightPixels / 10));
		chestTracersParticleLayoutLeft.setGravity(Gravity_.CENTER_HORIZONTAL);
		chestTracersParticleLayout.addView(chestTracersParticleLayoutLeft);

		let chestTracersParticleLayoutCenter = new LinearLayout_(CONTEXT);
		chestTracersParticleLayoutCenter.setOrientation(1);
		chestTracersParticleLayoutCenter.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3 - 20 / 3, display.heightPixels / 10));
		chestTracersParticleLayoutCenter.setGravity(Gravity_.CENTER_HORIZONTAL);
		chestTracersParticleLayout.addView(chestTracersParticleLayoutCenter);

		let chestTracersParticleLayoutRight = new LinearLayout_(CONTEXT);
		chestTracersParticleLayoutRight.setOrientation(1);
		chestTracersParticleLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3 - 20 / 3, display.heightPixels / 10));
		chestTracersParticleLayoutRight.setGravity(Gravity_.CENTER_HORIZONTAL);
		chestTracersParticleLayout.addView(chestTracersParticleLayoutRight);

		if(chestTracersParticle == "flame") {
			chestTracersFlameButton.setTextColor(Color_.GREEN);
		} if(chestTracersParticle == "redstone") {
			chestTracersRedstoneButton.setTextColor(Color_.GREEN);
		} if(chestTracersParticle == "critical") {
			chestTracersCriticalButton.setTextColor(Color_.GREEN);
		}
		chestTracersFlameButton.setOnClickListener(new View_.OnClickListener() {
			onClick: function(view) {
				chestTracersParticle = "flame";
				chestTracersFlameButton.setTextColor(Color_.GREEN);
				VertexClientPE.addTextStyleToView(chestTracersRedstoneButton);
				VertexClientPE.addTextStyleToView(chestTracersCriticalButton);
				VertexClientPE.saveMainSettings();
			}
		});
		chestTracersRedstoneButton.setOnClickListener(new View_.OnClickListener() {
			onClick: function(view) {
				chestTracersParticle = "redstone";
				VertexClientPE.addTextStyleToView(chestTracersFlameButton);
				chestTracersRedstoneButton.setTextColor(Color_.GREEN);
				VertexClientPE.addTextStyleToView(chestTracersCriticalButton);
				VertexClientPE.saveMainSettings();
			}
		});
		chestTracersCriticalButton.setOnClickListener(new View_.OnClickListener() {
			onClick: function(view) {
				chestTracersParticle = "critical";
				VertexClientPE.addTextStyleToView(chestTracersFlameButton);
				VertexClientPE.addTextStyleToView(chestTracersRedstoneButton);
				chestTracersCriticalButton.setTextColor(Color_.GREEN);
				VertexClientPE.saveMainSettings();
			}
		});

		chestTracersParticleLayoutLeft.addView(chestTracersFlameButton);
		chestTracersParticleLayoutCenter.addView(chestTracersRedstoneButton);
		chestTracersParticleLayoutRight.addView(chestTracersCriticalButton);

		let groundModeCheckBox = clientCheckBox("Ground Mode");
		groundModeCheckBox.setChecked(chestTracersGroundMode == "on");
		groundModeCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				chestTracersGroundMode = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});

		let space = clientTextView("");
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
		let x = getPlayerX();
		let y = getPlayerY();
		let z = getPlayerZ();
		for(let blockX = - chestTracersRange; blockX <= chestTracersRange; blockX++) {
			for(let blockY = - chestTracersRange; blockY <= chestTracersRange; blockY++) {
				for(let blockZ = - chestTracersRange; blockZ <= chestTracersRange; blockZ++) {
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
	desc: i18n("Allows you to see the world as someone else (an entity)."),
	category: VertexClientPE.category.MISC,
	type: "Mod",
	state: false,
	targetEntity: null,
	getSettingsLayout: function() {
		let remoteViewSettingsLayout = new LinearLayout_(CONTEXT);
		remoteViewSettingsLayout.setOrientation(1);

		let teleportToLocationCheckBox = clientCheckBox("Teleport to the target entity when you disable RemoteView");
		teleportToLocationCheckBox.setChecked(remoteViewTeleportSetting == "on");
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
				let tpX = Entity.getX(this.targetEntity);
				let tpY = Entity.getY(this.targetEntity);
				let tpZ = Entity.getZ(this.targetEntity);
				Entity.setPosition(getPlayerEnt(), tpX, tpY + 2, tpZ);
			}
			this.targetEntity = null;
		}
	},
	onAttack: function(a, v) {
		if(!this.state) return;
		if(a == getPlayerEnt()) {
			preventDefault();
			this.targetEntity = v;
			ModPE.setCamera(v);
		}
	},
}

var antiAFK = {
	name: "AntiAFK",
	desc: i18n("Makes the player walk around to prevent you from getting disconnected. Also keeps the screen on as long as the 'Keep screen on' checkbox is checked."),
	category: VertexClientPE.category.PLAYER,
	type: "Mod",
	batteryUsage: "Normal (high when 'Keep screen on' is enabled)",
	state: false,
	timer: 0,
	setKeepScreenOn: function(state) {
		if(state) {
			CONTEXT.getWindow().addFlags(android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
		} else {
			CONTEXT.getWindow().clearFlags(android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
		}
	},
	getSettingsLayout: function() {
		let antiAFKSettingsLayout = new LinearLayout_(CONTEXT);
		antiAFKSettingsLayout.setOrientation(1);

		let antiAFKKeepScreenOnCheckBox = clientCheckBox();
		antiAFKKeepScreenOnCheckBox.setChecked(antiAFKKeepScreenOnSetting == "on");
		antiAFKKeepScreenOnCheckBox.setText("Keep screen on");
		antiAFKKeepScreenOnCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				antiAFKKeepScreenOnSetting = v.isChecked()?"on":"off";
				antiAFK.setKeepScreenOn(antiAFKState);
				VertexClientPE.saveMainSettings();
			}
		});

		antiAFKSettingsLayout.addView(antiAFKKeepScreenOnCheckBox);

		return antiAFKSettingsLayout;
	},
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		antiAFKState = this.state;
		antiAFK.setKeepScreenOn(this.state);
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
	desc: i18n("Automatically makes the game restart when your health is (below) 8."),
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
			//realScriptManager.nativeCloseScreen();
		}
	}
}

var noDownGlide = {
	name: "NoDownGlide",
	desc: i18n("Prevents you from flying upwards and downwards (and falling)."),
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
		//Entity.setPosition(getPlayerEnt(), getPlayerX(), this.yCoord, getPlayerZ());
		Entity.setPositionRelative(getPlayerEnt(), 0, this.yCoord - getPlayerY(), 0);
	}
}

var teleport = {
	name: "Teleport",
	desc: i18n("Teleports you to the given coordinates."),
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
	desc: i18n("Prevents you from getting knockback while being attacked."),
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
	desc: i18n("Prevents you from getting burned down."),
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
		let x = getPlayerX();
		let y = getPlayerY();
		let z = getPlayerZ();
		/* var blockOne = getTile(x, y, z);
		var blockTwo = getTile(x, y - 1, z);
		var blockThree = getTile(x, y - 2, z);
		setTile(x, y, z, 9);
		setTile(x, y - 1, z, 9);
		setTile(x, y - 2, z, 9);
		setTile(x, y, z, blockOne);
		setTile(x, y - 1, z, blockTwo);
		setTile(x, y - 2, z, blockThree); */
		Entity.setFireTicks(getPlayerEnt(), 1);
	}
}

var lifeSaver = {
	name: "LifeSaver",
	desc: i18n("Prevents you from getting in touch with dangerous blocks."),
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
	desc: i18n("Automatically build structures."),
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
	desc: i18n("Allows you to walk really fast on the ground."),
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	getSettingsLayout: function() {
		let speedHackSettingsLayout = new LinearLayout_(CONTEXT);
		speedHackSettingsLayout.setOrientation(1);
		let speedHackFrictionTitle = clientTextView("Friction: | " + speedHackFriction);
		let speedHackFrictionSlider = clientSeekBar();
		speedHackFrictionSlider.setProgress(speedHackFriction * 100 - 1);
		speedHackFrictionSlider.setMax(99);
		speedHackFrictionSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				speedHackFriction = (speedHackFrictionSlider.getProgress() + 1) / 100;
				speedHackFrictionTitle.setText("Friction: | " + speedHackFriction);
				if(speedHackState) {
					for(let i = 0; i <= 255; i++) {
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
			for(let i = 0; i <= 255; i++) {
				if(this.frictionArray[i] == null || this.frictionArray[i] == undefined) {
					this.frictionArray[i] = Block.getFriction(i);
				}
				Block.setFriction(i, speedHackFriction);
			}
		} else {
			for(let i = 0; i <= 255; i++) {
				if(this.frictionArray[i] != null && this.frictionArray[i] != undefined) {
					Block.setFriction(i, this.frictionArray[i]);
				}
			}
		}
	}
}

var storageESP = {
	name: "StorageESP",
	desc: i18n("Allows you to find chests, dispensers and droppers easily by showing boxes around them."),
	category: VertexClientPE.category.WORLD,
	type: "Mod",
	state: false,
	getSettingsLayout: function() {
		let storageESPSettingsLayout = new LinearLayout_(CONTEXT);
		storageESPSettingsLayout.setOrientation(1);
		let storageESPRangeTitle = clientTextView("Range: | " + storageESPRange);
		let storageESPRangeSlider = clientSeekBar();
		storageESPRangeSlider.setProgress(storageESPRange);
		storageESPRangeSlider.setMax(25);
		storageESPRangeSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				storageESPRange = storageESPRangeSlider.getProgress();
				storageESPRangeTitle.setText("Range: | " + storageESPRange);
			}
		});

		storageESPSettingsLayout.addView(storageESPRangeTitle);
		storageESPSettingsLayout.addView(storageESPRangeSlider);
		return storageESPSettingsLayout;
	},
	onModDialogDismiss: function() {
		VertexClientPE.saveMainSettings();
	},
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		storageESPState = this.state;
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
	desc: i18n("Automatically makes you twerk all the time."),
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

var actionLog = {
	name: "ActionLog",
	desc: i18n("Automatically logs your actions (attacks and chat messages)."),
	category: VertexClientPE.category.PLAYER,
	type: "Special",
	isStateMod: function() {
		return false;
	},
	onToggle: function() {
		let actionLogExtraView;
		let logString = "";
		let logMessages = VertexClientPE.Utils.world.logMessages;
		if(logMessages.length != 0) {
			logMessages.forEach(function(element, index, array) {
				if(index != 0) {
					logString += "\n"
				}
				logString += element;
			});
			actionLogExtraView = clientButton("Export/share");
			actionLogExtraView.setOnClickListener(new View_.OnClickListener() {
				onClick: function(viewArg) {
					shareText(logString);
				}
			});
		} else {
			logString = "Nothing to see here, once you attack a mob or entity or send or receive chat messages they'll be displayed here.";
		}
		VertexClientPE.showBasicDialog(VertexClientPE.getCustomModName(this.name) + " - Display", clientTextView(logString), null, actionLogExtraView);
	},
	onChatReceive: function(message, sender) {
		VertexClientPE.Utils.world.logMessages.push("[CHAT] <" + sender + "> " + message);
	},
	onAttack: function(a, v) {
		let aName;
		let aType;
		let aFull;
		let vName;
		let vType;
		let vFull;
		let betweenNT = " with nametag ";
		if(Entity.getNameTag(a) != null && Entity.getNameTag(a) != "") {
			aName = Entity.getNameTag(a);
		}
		if(Player.isPlayer(a)) {
			aType = "player";
		} else {
			aType = "mob";
		}
		if(Entity.getNameTag(v) != null && Entity.getNameTag(v) != "") {
			vName = Entity.getNameTag(v);
		}
		if(Player.isPlayer(v)) {
			vType = "player";
		} else {
			vType = "mob";
		}
		if(aName == null) {
			aFull = aType;
		} else {
			aFull = aType + betweenNT + aName;
		}
		if(vName == null) {
			vFull = vType;
		} else {
			vFull = vType + betweenNT + vName;
		}
		VertexClientPE.Utils.world.logMessages.push("[ATTACK] A " + aFull + " attacked a " + vFull);
	}
}

var fastBridge = {
	name: "FastBridge",
	desc: i18n("Automatically teleports you on top of placed blocks."),
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
			let fastBridgeVector = new Vector3(x-(side==4?1:0)+(side==5?1:0)+0.5,y-(side==0?1:0)+(side==1?1:0)+2,z-(side==2?1:0)+(side==3?1:0)+0.5);
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
	desc: i18n("Allows you to walk through invisible bedrock."),
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
	desc: i18n("Allows you to walk and jump to a block automatically on tap."),
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
				Entity.setPosition(getPlayerEnt(), getPlayerX(), this.destVector.y + 1.8, getPlayerZ());
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
	desc: i18n("Makes you aim at entities on tap."),
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	timer: 0,
	targetEnt: null,
	getSettingsLayout: function() {
		let tapAimbotLayout = new LinearLayout_(CONTEXT);
		tapAimbotLayout.setOrientation(1);

		let tapAimbotStayAimedSettingTitle = clientTextView("Stay aimed for: | " + tapAimbotStayAimedSetting + " tick(s)");
		let tapAimbotStayAimedSettingSlider = clientSeekBar();
		let minStayAimed = 1;
		tapAimbotStayAimedSettingSlider.setProgress(tapAimbotStayAimedSetting - minStayAimed);
		tapAimbotStayAimedSettingSlider.setMax(200 - minStayAimed);
		tapAimbotStayAimedSettingSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				tapAimbotStayAimedSetting = tapAimbotStayAimedSettingSlider.getProgress() + minStayAimed;
				tapAimbotStayAimedSettingTitle.setText("Stay aimed for: | " + tapAimbotStayAimedSetting + " tick(s)");
			}
		});

		tapAimbotLayout.addView(tapAimbotStayAimedSettingTitle);
		tapAimbotLayout.addView(tapAimbotStayAimedSettingSlider);

		return tapAimbotLayout;
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
	onAttack: function(a, v) {
		if(!this.state) return;
		if(a == getPlayerEnt()) {
			this.targetEnt = v;
			this.timer = 0;
		}
	},
	onTick: function() {
		if(this.targetEnt != null && this.timer < tapAimbotStayAimedSetting) {
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
	desc: i18n("Teleports you to a random entity when tapping the ground."),
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
	desc: i18n("Makes air light up."),
	category: VertexClientPE.category.WORLD,
	type: "Mod",
	state: false,
	isStateMod: function() {
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
	desc: i18n("Similar to MCPE's built-in Auto jump, except that it works on multiple heights."),
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
	desc: i18n("Locates dropped items and experience."),
	category: VertexClientPE.category.MISC,
	type: "Mod",
	isStateMod: function() {
		return false;
	},
	onToggle: function() {
		let items = Entity.getAll();
		new Thread_(new Runnable_({
			run: function() {
				if(items != null && items != undefined && items.length != -1) {
					for(let i = 0; i < items.length; i++) {
						let type = Entity.getEntityTypeId(items[i]);
						let name;
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
				if(!foundItems) {
					VertexClientPE.clientMessage("We couldn't locate any drops.");
				}
			}
		})).start();
	}
}

var playerLocator = {
	name: "PlayerLocator",
	desc: i18n("Locates players."),
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
							VertexClientPE.clientMessage("Located " + name + ChatColor.WHITE + " at " + parseInt(Entity.getX(player)) + " " + parseInt(Entity.getY(player)) + " " + parseInt(Entity.getZ(player)));
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
	desc: i18n("Automatically sneaks when you're at the edge of a block so that you can still move with normal speed."),
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
		if(VertexClientPE.Utils.Player.isAtEdge() && Entity.getVelY(getPlayerEnt() == -0.07840000092983246)) {
			Entity.setSneaking(getPlayerEnt(), true);
		}
	}
}

var letItSnow = {
	name: "LetItSnow",
	desc: i18n("Makes snowballs spawn above you."),
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
		let x = getPlayerX();
		let y = getPlayerY();
		let z = getPlayerZ();
		for(let xI = -2; xI <= 2; xI++) {
			for(let yI = 0; yI <= 2; yI++) {
				for(let zI = -2; zI <= 2; zI++) {
					Level.addParticle(ParticleType.snowballpoof, x + xI, y + yI, z + zI, 0, getPlayerY() - (y + yI), 0, 2);
				}
			}
		}
	}
}

var frostWalk = {
	name: "FrostWalk",
	desc: i18n("Turns water blocks into ice blocks and lava blocks into cobblestone blocks when you step on them."),
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
		let tile = getTile(getPlayerX(), getPlayerY() - 2, getPlayerZ());
		let tileTwo = getTile(getPlayerX(), getPlayerY() - 1, getPlayerZ());
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
	desc: i18n("Allows you to choose if you want to target mobs, players or both in modules like Aimbot."),
	category: VertexClientPE.category.MISC,
	type: "Special",
	getSettingsLayout: function() {
		let targetSettingsLayout = new LinearLayout_(CONTEXT);
		targetSettingsLayout.setOrientation(1);

		let targetMobsCheckBox = clientCheckBox();
		targetMobsCheckBox.setChecked(targetMobsSetting == "on");
		targetMobsCheckBox.setText("Mobs");
		targetMobsCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				targetMobsSetting = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});

		let targetPlayersCheckBox = clientCheckBox();
		targetPlayersCheckBox.setChecked(targetPlayersSetting == "on");
		targetPlayersCheckBox.setText("Players");
		targetPlayersCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				let checked = v.isChecked();
				targetPlayersSetting = checked?"on":"off";
				targetFriendsCheckBox.setEnabled(checked);
				targetMyTeamCheckBox.setEnabled(checked);
				VertexClientPE.saveMainSettings();
			}
		});

		let targetFriendsCheckBox = clientCheckBox();
		targetFriendsCheckBox.setChecked(targetFriendsSetting == "on");
		targetFriendsCheckBox.setEnabled(targetPlayersCheckBox.isChecked());
		targetFriendsCheckBox.setText("Friends");
		targetFriendsCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				targetFriendsSetting = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});
		
		let targetMyTeamCheckBox = clientCheckBox();
		targetMyTeamCheckBox.setChecked(targetMyTeamSetting == "on");
		targetMyTeamCheckBox.setEnabled(targetPlayersCheckBox.isChecked());
		targetMyTeamCheckBox.setText("My team");
		targetMyTeamCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				targetMyTeamSetting = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});

		targetSettingsLayout.addView(targetMobsCheckBox);
		targetSettingsLayout.addView(targetPlayersCheckBox);
		targetSettingsLayout.addView(targetFriendsCheckBox);
		targetSettingsLayout.addView(targetMyTeamCheckBox);

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
	desc: i18n("Increases collision sizes of other players so that you can hit them easily."),
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	getSettingsLayout: function() {
		let hitboxesSettingsLayout = new LinearLayout_(CONTEXT);
		hitboxesSettingsLayout.setOrientation(1);

		let minHitboxesSize = 2;
		let maxHitboxesSize = 100;

		let hitboxesHitboxWidthTitle = clientTextView("Hitbox width: | " + hitboxesHitboxWidthSetting);
		let hitboxesHitboxWidthSlider = clientSeekBar();
		hitboxesHitboxWidthSlider.setProgress(hitboxesHitboxWidthSetting - minHitboxesSize);
		hitboxesHitboxWidthSlider.setMax(maxHitboxesSize - minHitboxesSize);
		hitboxesHitboxWidthSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				hitboxesHitboxWidthSetting = hitboxesHitboxWidthSlider.getProgress() + minHitboxesSize;
				hitboxesHitboxWidthTitle.setText("Hitbox width: | " + hitboxesHitboxWidthSetting);
				if(hitboxesState) {
					let players = Server.getAllPlayers();
					for(let i = 0; i < players.length; i++) {
						hitboxes.updateHitboxesOnEnt(players[i]);
					}
				}
			}
		});

		let hitboxesHitboxHeightTitle = clientTextView("Hitbox height: | " + hitboxesHitboxHeightSetting);
		let hitboxesHitboxHeightSlider = clientSeekBar();
		hitboxesHitboxHeightSlider.setProgress(hitboxesHitboxHeightSetting - minHitboxesSize);
		hitboxesHitboxHeightSlider.setMax(maxHitboxesSize - minHitboxesSize);
		hitboxesHitboxHeightSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				hitboxesHitboxHeightSetting = hitboxesHitboxHeightSlider.getProgress() + minHitboxesSize;
				hitboxesHitboxHeightTitle.setText("Hitbox height: | " + hitboxesHitboxHeightSetting);
				if(hitboxesState) {
					let players = Server.getAllPlayers();
					for(let i = 0; i < players.length; i++) {
						hitboxes.updateHitboxesOnEnt(players[i]);
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
			Entity.setCollisionSize(ent, hitboxesState?hitboxesHitboxWidthSetting:0.6, hitboxesState?hitboxesHitboxHeightSetting:1.8);
		}
	},
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		hitboxesState = this.state;
		let players = Server.getAllPlayers();
		for(let i = 0; i < players.length; i++) {
			this.updateHitboxesOnEnt(players[i]);
		}
	},
	onEntityAdded: function(entity) {
		this.updateHitboxesOnEnt(entity);
	}
}

var elytraBoost = {
	name: "ElytraBoost",
	//desc: i18n("Boosts elytra (Toolbox only)."),
	desc: i18n("Boosts elytra."),
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	isExpMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function(entity) {
		/* if(Launcher.isToolbox() && !Entity.isGliding(Player.getEntity())) {
			return;
		} */
		if(Player.getArmorSlot(1) == 444) {
			setVelX(getPlayerEnt(), 0.45);
			setVelZ(getPlayerEnt(), 0.45);
		}
	}
}

var prevent = {
	name: "Prevent",
	desc: i18n("Prevent user interaction (you can't prevent incoming attacks though)."),
	category: VertexClientPE.category.MISC,
	type: "Special",
	getSettingsLayout: function() {
		let preventSettingsLayout = new LinearLayout_(CONTEXT);
		preventSettingsLayout.setOrientation(1);

		let preventDiggingCheckBox = clientCheckBox("Prevent block digging");
		preventDiggingCheckBox.setChecked(preventDiggingSetting == "on");
		preventDiggingCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				preventDiggingSetting = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});

		let preventPlacingCheckBox = clientCheckBox("Prevent block placing/tapping with items on blocks");
		preventPlacingCheckBox.setChecked(preventPlacingSetting == "on");
		preventPlacingCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				preventPlacingSetting = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});

		let preventAttacksCheckBox = clientCheckBox("Prevent hitting other entities");
		preventAttacksCheckBox.setChecked(preventAttacksSetting == "on");
		preventAttacksCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				preventAttacksSetting = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});

		let preventExplosionsCheckBox = clientCheckBox("Prevent explosions");
		preventExplosionsCheckBox.setChecked(preventExplosionsSetting == "on");
		preventExplosionsCheckBox.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				preventExplosionsSetting = v.isChecked()?"on":"off";
				VertexClientPE.saveMainSettings();
			}
		});

		preventSettingsLayout.addView(preventDiggingCheckBox);
		preventSettingsLayout.addView(preventPlacingCheckBox);
		preventSettingsLayout.addView(preventAttacksCheckBox);
		preventSettingsLayout.addView(preventExplosionsCheckBox);
		return preventSettingsLayout;
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
	desc: i18n("Teleports you to an entity when hitting it."),
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
		if(!this.state) return;
		if(a == getPlayerEnt()) {
			Entity.setPosition(getPlayerEnt(), Entity.getX(v), Entity.getY(v) + 2, Entity.getZ(v));
		}
	}
}

var healthDisplay = {
	name: "HealthDisplay",
	desc: i18n("Shows your health in the bottom left corner."),
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
			if(healthDisplayUI != null && healthDisplayUI.isShowing()) {
				healthDisplayUI.dismiss();
			}
		}
	},
	onHurt: function(a, v) {
		if(v == getPlayerEnt()) {
			if(healthDisplayUI != null && healthDisplayUI.isShowing()) {
				CONTEXT.runOnUiThread(new Runnable_({
					run: function() {
						healthDisplayView.setText(Entity.getHealth(getPlayerEnt()) + "/" + Entity.getMaxHealth(getPlayerEnt()) + " \u2764");
					}
				}));
			}
		}
	}
}

var attackShock = {
	name: "AttackShock",
	desc: i18n("Makes your device vibrate when hitting an entity."),
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	batteryUsage: "High",
	state: false,
	isStateMod: function() {
		return true;
	},
	getSettingsLayout: function() {
		let attackShockSettingsLayout = new LinearLayout_(CONTEXT);
		attackShockSettingsLayout.setOrientation(1);
		let attackShockIntensityTitle = clientTextView("Intensity: | " + attackShockIntensity + " * 20");
		let attackShockIntensitySlider = clientSeekBar();
		attackShockIntensitySlider.setProgress(attackShockIntensity);
		attackShockIntensitySlider.setMax(20);
		attackShockIntensitySlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				attackShockIntensity = attackShockIntensitySlider.getProgress();
				attackShockIntensityTitle.setText("Intensity: | " + attackShockIntensity + " * 20");
			}
		});

		attackShockSettingsLayout.addView(attackShockIntensityTitle);
		attackShockSettingsLayout.addView(attackShockIntensitySlider);
		return attackShockSettingsLayout;
	},
	onModDialogDismiss: function() {
		VertexClientPE.saveMainSettings();
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onAttack: function(a, v) {
		if(!this.state) return;
		if(a == getPlayerEnt()) {
			CONTEXT.getSystemService(Context_.VIBRATOR_SERVICE).vibrate(attackShockIntensity * 20);
		}
	}
}

let serverInfoStage = 0;

var serverInfo = {
	name: "ServerInfo",
	desc: i18n("Shows information about the server you're on."),
	category: VertexClientPE.category.MISC,
	type: "Special",
	state: false,
	shouldAdd: function() {
		return VertexClientPE.isRemote();
	},
	multiplayerOnly: true,
	isStateMod: function() {
		return false;
	},
	onToggle: function() {
		if(serverInfoStage == 0) {
			serverInfoStage = 1;
			new Thread_(new Runnable_({
				run: function() {
					VertexClientPE.toast(i18n("Loading..."));
					let serverInfo = myServerStatus.set(Server.getAddress(), parseInt(Server.getPort()));
					Thread_.sleep(3000);
					let serverString = "Name: " + serverInfo.name;
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
	desc: i18n("Makes you point at entities but changes target all the time."),
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
		let range = Level.getGameMode()==1?9:7;
		let mobs = Entity.getAll();
		let players = Server.getAllPlayers();
		if(targetMobsSetting == "on") {
			if(this.mobTargetNum >= mobs.length) {
				this.mobTargetNum = 0;
			}
			let cMob = mobs[this.mobTargetNum];
			if(cMob != undefined && cMob != null) {
				let x = Entity.getX(cMob) - getPlayerX();
				let y = Entity.getY(cMob) - getPlayerY();
				let z = Entity.getZ(cMob) - getPlayerZ();
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
			let cPlayer = players[this.playerTargetNum];
			if(cPlayer != undefined && cPlayer != null && VertexClientPE.Utils.Player.shouldTarget(cPlayer)) {
				let x = Entity.getX(cPlayer) - getPlayerX();
				let y = Entity.getY(cPlayer) - getPlayerY();
				let z = Entity.getZ(cPlayer) - getPlayerZ();
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
	desc: i18n("Makes you walk around entities."),
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	getExtraInfo: function() {
		return capitalizeFirstLetter(strafeAuraDirectionSetting);
	},
	getSettingsLayout: function() {
		let strafeAuraSettingsLayout = new LinearLayout_(CONTEXT);
		strafeAuraSettingsLayout.setOrientation(1);

		let strafeAuraRangeTitle = clientTextView("Range: | " + strafeAuraRangeSetting);
		let strafeAuraRangeSlider = clientSeekBar();
		strafeAuraRangeSlider.setProgress(strafeAuraRangeSetting);
		strafeAuraRangeSlider.setMax(10);
		strafeAuraRangeSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				strafeAuraRangeSetting = strafeAuraRangeSlider.getProgress();
				strafeAuraRangeTitle.setText("Range: | " + strafeAuraRangeSetting);
			}
		});

		let strafeAuraDirectionLayout = new LinearLayout_(CONTEXT);
		strafeAuraDirectionLayout.setOrientation(LinearLayout_.HORIZONTAL);

		let strafeAuraDirectionTitle = clientTextView("Direction:");
		let strafeAuraDirectionLeftButton = clientButton("Left", "Makes the player strafe to the left.");
		strafeAuraDirectionLeftButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
		let strafeAuraDirectionRightButton = clientButton("Right", "Makes the player strafe to the right.");
		strafeAuraDirectionRightButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));

		let strafeAuraDirectionLayoutLeft = new LinearLayout_(CONTEXT);
		strafeAuraDirectionLayoutLeft.setOrientation(1);
		strafeAuraDirectionLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - 5, display.heightPixels / 10));
		strafeAuraDirectionLayoutLeft.setGravity(Gravity_.CENTER_HORIZONTAL);
		strafeAuraDirectionLayout.addView(strafeAuraDirectionLayoutLeft);

		let strafeAuraDirectionLayoutRight = new LinearLayout_(CONTEXT);
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
				VertexClientPE.addTextStyleToView(strafeAuraDirectionRightButton);
				VertexClientPE.saveMainSettings();
			}
		});
		strafeAuraDirectionRightButton.setOnClickListener(new View_.OnClickListener() {
			onClick: function(view) {
				strafeAuraDirectionSetting = "right";
				VertexClientPE.addTextStyleToView(strafeAuraDirectionLeftButton);
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
	desc: i18n("Immediately teleports you to the first (non-air) block underneath yourself when falling (and blocks fall damage by doing so)."),
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
	desc: i18n("Shows an additional D-pad, but for rotation instead of movement."),
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
			if(rotationPlusUI != null && rotationPlusUI.isShowing()) {
				rotationPlusUI.dismiss();
			}
		}
	}
}

var glitchCam = {
	name: "GlitchCam",
	desc: i18n("Reduces the camera movement speed and makes it look dizzy."),
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
		let realYaw = this.newYaw;
		let realPitch = this.newPitch;
		if(this.oldYaw != null) {
			if(this.newYaw > this.oldYaw) {
				realYaw = this.newYaw - (this.newYaw - this.oldYaw) / 2;
			}
			if(this.newYaw < this.oldYaw) {
				realYaw = this.oldYaw - (this.oldYaw - this.newYaw) / 2;
			}
		}
		if(this.oldPitch != null) {
			if(this.newPitch > this.oldPitch) {
				realPitch = this.newPitch - (this.newPitch - this.oldPitch) / 2;
			}
			if(this.newPitch < this.oldPitch) {
				realPitch = this.oldPitch - (this.oldPitch - this.newPitch) / 2;
			}
		}
		if(this.oldYaw != this.newYaw || this.oldPitch != this.newPitch) {
			Entity.setRot(getPlayerEnt(), realYaw, realPitch);
		}
		this.oldYaw = Entity.getYaw(getPlayerEnt());
		this.oldPitch = Entity.getPitch(getPlayerEnt());
	}
}

var bunnyHop = {
	name: "BunnyHop",
	desc: i18n("Makes the player jump automatically."),
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	tick: 0,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		this.tick = 0;
	},
	onTick: function() {
		if(Player.isFlying()) {
			this.tick = 0;
			return;
		}
		if(this.tick < 9) {
			if(this.tick == 0) {
				Entity.setVelY(getPlayerEnt(), 0.5);
			}
			this.tick++;
		} else {
			if(this.tick < 19) {
				if(this.tick == 9) {
					Entity.setVelY(getPlayerEnt(), -0.5);
				}
				this.tick++;
			} else if(this.tick == 19) {
				Entity.setVelY(getPlayerEnt(), 0);
				this.tick = 0;
			}
		}
	}
}

var foodHack = {
	name: "Foodhack",
	desc: i18n("Makes all items edible. Turning it off won't reset the items to their original state, though."),
	category: VertexClientPE.category.MISC,
	type: "Mod",
	state: false,
	isExpMod: function() {
		return true;
	},
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		if(!this.state) {
			//show dialog
		}
		this.state = !this.state;
		if(this.state) {
			for(let i = 257; i <= 4096; i++) {
				if(Item.isValidItem(i)) {
					Item.setProperties(i, {
					  "use_animation": "eat",
					  "use_duration": 32,
					  "food": {
						"nutrition": 4,
						"saturation_modifier": "low",
						"is_meat": false
					  }
					});
				}
			}
		} else {
			VertexClientPE.toast("Restart to fully reset items!");
		}
	}
}

var antiHunger = {
	name: "AntiHunger",
	desc: i18n("Automatically refills your hunger bar."),
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
		if(Player.getHunger() < 20) {
			Player.setHunger(20);
		}
	}
}

var watermark = {
	name: "Watermark",
	desc: i18n("Shows a custom (text) watermark. Text can be formatted using HTML."),
	category: VertexClientPE.category.MISC,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	getSettingsLayout: function(onModManager) {
		let watermarkSettingsLayout = new LinearLayout_(CONTEXT);
		watermarkSettingsLayout.setOrientation(1);

		let watermarkTextTitle = clientTextView("Custom text (HTML):");
		let watermarkTextInput = clientEditText(watermarkTextSetting);
		let watermarkText;
		watermarkTextInput.setHint("Custom text");
		watermarkTextInput.addTextChangedListener(new TextWatcher_() {
			onTextChanged: function() {
				watermarkTextSetting = watermarkTextInput.getText();
				if(watermarkText != null) {
					watermarkText.setText(watermarkTextSetting + " (tap to change)");
				}
			}
		});
		if(onModManager) {
			watermarkTextInput.setLayoutParams(new LinearLayout_.LayoutParams(LinearLayout_.LayoutParams.MATCH_PARENT, LinearLayout_.LayoutParams.WRAP_CONTENT));
			watermarkText = clientTextView(watermarkTextSetting + " (tap to change)");
			watermarkText.setTextSize(px2dip(watermarkTextInput.getTextSize()));
			watermarkText.setOnClickListener(new View_.OnClickListener() {
				onClick: function(v) {
					watermarkTextInput.requestFocus();
					VertexClientPE.showBasicDialog("AutoSpammer | Custom message", watermarkTextInput,
						function() {
							watermarkTextInput.getParent().removeView(watermarkTextInput);
							VertexClientPE.saveMainSettings();
						}
					);
				}
			});
		}

		watermarkSettingsLayout.addView(watermarkTextTitle);
		if(watermarkText == null) {
			watermarkSettingsLayout.addView(watermarkTextInput);
		} else {
			watermarkSettingsLayout.addView(watermarkText);
		}

		return watermarkSettingsLayout;
	},
	onModDialogDismiss: function() {
		VertexClientPE.saveMainSettings();
	},
	onToggle: function() {
		this.state = !this.state;
		watermarkState = this.state;
		if(this.state && !VertexClientPE.menuIsShowing && (currentScreen == ScreenType.ingame || currentScreen == ScreenType.hud)) {
			showWatermark();
		} else {
			if(watermarkUI != null && watermarkUI.isShowing()) {
				watermarkUI.dismiss();
			}
		}
	}
}

var enchantIt = {
	name: "EnchantIt",
	desc: i18n("Adds enchantments to items in your inventory."),
	category: VertexClientPE.category.PLAYER,
	type: "Mod",
	isStateMod: function() {
		return false;
	},
	onToggle: function() {
		VertexClientPE.showEnchantItDialog();
	}
}

var effectGiver = {
	name: "EffectGiver",
	desc: i18n("Allows you to give yourself effects."),
	category: VertexClientPE.category.PLAYER,
	type: "Mod",
	isStateMod: function() {
		return false;
	},
	onToggle: function() {
		VertexClientPE.showEffectGiverDialog();
	}
}

var scaffoldWalk = {
	name: "ScaffoldWalk",
	desc: i18n("Automatically places blocks underneath you. Hold a block while using this mod."),
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
		let selectedSlot = Player.getSelectedSlotId();
		let heldTile = Player.getInventorySlot(selectedSlot);
		if(heldTile <= 256) {
			let heldTileData = Player.getInventorySlotData(selectedSlot);
			let y = getPlayerY() - 2;
			let tile = getTile(getPlayerX(), y, getPlayerZ());
			if(tile == 0) {
				setTile(getPlayerX(), y, getPlayerZ(), heldTile, heldTileData);
			}
		}
	}
}

var fastLadder = {
	name: "FastLadder",
	desc: i18n("Allows you to climb ladders faster."),
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
		if(!Player.isFlying() && !Entity.isSneaking(getPlayerEnt()) && !(Entity.getVelY(getPlayerEnt()) <= -0.07840000092983246) && (getTile(getPlayerX(), getPlayerY(), getPlayerZ()) == 65 || getTile(getPlayerX(), getPlayerY() + 1, getPlayerZ()) == 65)) {
			setVelY(getPlayerEnt(), 0.5);
		}
	}
}

let caveFinderStage = 0;

var caveFinder = {
	name: "CaveFinder",
	desc: i18n("Allows you to find possible caves by tapping the ground."),
	category: VertexClientPE.category.WORLD,
	type: "Mod",
	state: false,
	/* getSettingsLayout: function() {
		return new LinearLayout_(CONTEXT);
	}, */
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onUseItem: function(x, y, z, i, b, s) {
		if(b != 1 && b != 2 && b != 3 && b != 12) {
			VertexClientPE.clientMessage("Please tap on a grass, dirt, sand or stone block.");
			return;
		}
		if(caveFinderStage != 1) {
			caveFinderStage = 1;
			while(getTile(x, y, z) != 0) {
				y--;
			}
			if(y == -1) {
				VertexClientPE.clientMessage("No possible caves found.");
				caveFinderStage = 0;
				return;
			}
			for(let pX = -1; pX < 1; pX++) {
				for(let pY = -1; pY < 1; pY++) {
					for(let pZ = -1; pZ < 1; pZ++) {
						if(getTile(x + pX, y + pY, z + pZ) == 0) {
							VertexClientPE.clientMessage("Possible cave found at y=" + y + ".");
							caveFinderStage = 0;
							return;
						}
					}
				}
			}
		}
	}
}

var float_mod = {
	name: "Float",
	desc: i18n("Allows you to float a specific amount of blocks above the ground."),
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	state: false,
	/* getSettingsLayout: function() {
		return new LinearLayout_(CONTEXT);
	}, */
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
		let y = getPlayerY() - 1.8;
		while(getTile(getPlayerX(), y, getPlayerZ()) == 0) {
			y--;
		}
		Entity.setPosition(getPlayerEnt(), getPlayerX(), y + 1.8, getPlayerZ());
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
VertexClientPE.registerModule(bunnyHop);
VertexClientPE.registerModule(elytraBoost);
VertexClientPE.registerModule(enderProjectiles);
VertexClientPE.registerModule(fastBridge);
VertexClientPE.registerModule(noFall);
VertexClientPE.registerModule(fastLadder);
VertexClientPE.registerModule(fastWalk);
//VertexClientPE.registerModule(fenceJump);
VertexClientPE.registerModule(flight);
//VertexClientPE.registerModule(float_mod);
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
VertexClientPE.registerModule(scaffoldWalk);
VertexClientPE.registerModule(speedHack);
VertexClientPE.registerModule(step);
VertexClientPE.registerModule(tapJumpRun);
VertexClientPE.registerModule(tapTeleport);
//WORLD
VertexClientPE.registerModule(autoBuild);
VertexClientPE.registerModule(autoMine);
VertexClientPE.registerModule(autoPlace);
VertexClientPE.registerModule(caveFinder);
VertexClientPE.registerModule(chestTracers);
VertexClientPE.registerModule(fullBright);
VertexClientPE.registerModule(nuker);
VertexClientPE.registerModule(powerExplosions);
VertexClientPE.registerModule(signEditor);
VertexClientPE.registerModule(stackDrop);
VertexClientPE.registerModule(storageESP);
VertexClientPE.registerModule(tapExplosion);
VertexClientPE.registerModule(tapNuker);
VertexClientPE.registerModule(tapRemover);
VertexClientPE.registerModule(timer);
//PLAYER
VertexClientPE.registerModule(actionLog);
VertexClientPE.registerModule(antiAFK);
VertexClientPE.registerModule(antiHunger);
VertexClientPE.registerModule(autoLeave);
VertexClientPE.registerModule(autoSpammer);
VertexClientPE.registerModule(autoSwitch);
VertexClientPE.registerModule(chatRepeat);
VertexClientPE.registerModule(coordsDisplay);
VertexClientPE.registerModule(derp);
VertexClientPE.registerModule(effectGiver);
VertexClientPE.registerModule(enchantIt);
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
VertexClientPE.registerModule(dropLocator);
VertexClientPE.registerModule(foodHack);
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
VertexClientPE.registerModule(watermark);
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
		if(element.hasOwnProperty("onAttack")) {
			if(bypassState && element.hasOwnProperty("canBypassBypassMod")) {
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
		if(element.isStateMod() && element.state && element.hasOwnProperty("onHurt")) {
			if(bypassState && element.hasOwnProperty("canBypassBypassMod")) {
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
		if(element.isStateMod() && element.state && element.hasOwnProperty("onEntityAdded")) {
			if(bypassState && element.hasOwnProperty("canBypassBypassMod")) {
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
		if(element.isStateMod() && element.state && element.hasOwnProperty("onUseItem")) {
			if(bypassState && element.hasOwnProperty("canBypassBypassMod")) {
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

	if(storageESPState) {
		if((itemId == 23 || itemId == 54 || itemId == 125) && ((blockId != 23 && blockId != 54 && blockId != 58 && blockId != 125) || Entity.isSneaking(getPlayerEnt()))) {
			new Thread_(new Runnable_({
				run: function() {
					VertexClientPE.toast(i18n("Adding storage block to storage block list..."));
					let storageESPVector = new Vector3(x-(side==4?1:0)+(side==5?1:0),y-(side==0?1:0)+(side==1?1:0),z-(side==2?1:0)+(side==3?1:0));
					VertexClientPE.Utils.chests.push({
						x: storageESPVector.x,
						y: storageESPVector.y,
						z: storageESPVector.z
					});
				}
			})).start();
		}
	}
}

function explodeHook(entity, x, y, z, power, onFire) {
	if(preventExplosionsSetting == "on") {
		preventDefault();
		return;
	}
	VertexClientPE.modules.forEach(function(element, index, array) {
		if(element.isStateMod() && element.state && element.hasOwnProperty("onExplode")) {
			if(bypassState && element.hasOwnProperty("canBypassBypassMod")) {
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
		if(element.isStateMod() && element.state && element.hasOwnProperty("onProjectileHitBlock")) {
			if(bypassState && element.hasOwnProperty("canBypassBypassMod")) {
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
		if(element.hasOwnProperty("onChatReceive")) {
			if(bypassState && element.hasOwnProperty("canBypassBypassMod")) {
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
				if(bypassState && element.hasOwnProperty("canBypassBypassMod")) {
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
					if(bypassState && element.hasOwnProperty("canBypassBypassMod") && !element.canBypassBypassMod()) {
						//This command can't bypass/is blocked by Bypass
						return;
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

VertexClientPE.getHighestHelpPageNumber = function() {
	let length = VertexClientPE.getCommandCount();
	let page = 1;
	while(8 * page < length) {
		page++;
	}
	return page;
}

VertexClientPE.showHelpPage = function(page) {
	VertexClientPE.clientMessage(i18n("Showing help page %0/%1", [page, VertexClientPE.getHighestHelpPageNumber()]));
	VertexClientPE.commands.forEach(function(element, index, array) {
		if(element.syntax != null) {
			if(index >= 8*(page-1) && index <= 8*page-1) {
				VertexClientPE.clientMessage(cmdPrefix + element.syntax);
			}
		}
	});
}

var help = {
	syntax: "help <page>",
	onCall: function(cmd) {
		let commandSplit = cmd.split(" ");
		if(commandSplit[1] == undefined || commandSplit[1] == null || commandSplit[1] == "1") {
			VertexClientPE.showHelpPage("1");
		} else {
			if(commandSplit[1] != "1" && commandSplit[1] > 1 && commandSplit[1] <= VertexClientPE.getHighestHelpPageNumber()) {
				VertexClientPE.showHelpPage(commandSplit[1]);
			} else if(commandSplit[1] <= 0) {
				VertexClientPE.clientMessage(ChatColor.RED + i18n("Error: page number is too low!"));
			} else {
				VertexClientPE.clientMessage(ChatColor.RED + i18n("Error: page number is too high!"));
			}
		}
	}
}

var toggle = {
	syntax: "toggle <module>",
	onCall: function(cmd) {
		try {
			let commandSplit = cmd.split(" ");
			if (cmd.substring(2, cmd.length) != null && cmd.substring(2, cmd.length) != undefined && commandSplit[1] != null) {
				let shouldReturn = false;
				let cmdNoPrefix = cmd.substring(2, cmd.length);
				VertexClientPE.modules.forEach(function (element, index, array) {
					if ((element.name.toLowerCase() == cmdNoPrefix.toLowerCase() || VertexClientPE.getCustomModName(element.name).toLowerCase() == cmdNoPrefix.toLowerCase())) {
						if(element.hasOwnProperty("isExpMod") && element.isExpMod() && !VertexClientPE.isExpMode()) {
							VertexClientPE.toast(i18n("Experimental features aren't enabled!"));
							return;
						}
						if(element.hasOwnProperty("shouldAdd") && !element.shouldAdd()) {
							VertexClientPE.toast(i18n("You haven't unlocked this feature yet!"));
							return;
						}
						if(element.name == "Bypass" || !bypassState || (element.canBypassBypassMod == undefined || element.canBypassBypassMod == null || element.canBypassBypassMod()) || (element.isStateMod() && element.state)) {
							element.onToggle(true);
							VertexClientPE.shouldUpdateGUI = true;
						} else if(bypassState && !element.canBypassBypassMod()) {
							if(element.isStateMod() && !element.state) {
								element.state = true;
								VertexClientPE.shouldUpdateGUI = true;
							} else if(!element.isStateMod()) {
								VertexClientPE.toast(i18n("This mod is blocked by %0!", [VertexClientPE.getCustomModName("Bypass")]));
							}
						}
						if(element.isStateMod()) {
							VertexClientPE.setSavedModState(element.name, element.state);
						}
						if(hacksList != null && hacksList.isShowing()) {
							updateHacksList();
						}
						VertexClientPE.toast(i18n("Sucessfully toggled module %0", [VertexClientPE.getCustomModName(element.name)]));
						/*
							VertexClientPE.toast(VertexClientPE.getCustomModName(element.name) + " can't be toggled using the .t(oggle) command!");
						*/
						shouldReturn = true;
						return;
					}
				});
				if(shouldReturn) {
					return;
				}
				VertexClientPE.toast(i18n("Module %0 can't be found/toggled!", [cmdNoPrefix]));
			} else {
				throw new SyntaxError();
			}
		} catch(e) {
			if(e instanceof SyntaxError) {
				VertexClientPE.syntaxError(cmdPrefix + this.syntax);
			} else {
				VertexClientPE.showBugReportDialog(e);
			}
		}
	}
}

var t = {
	syntax: "t <module>",
	onCall: function(cmd) {
		toggle.onCall(cmd);
	}
}

var say = {
	syntax: "say <message>",
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
	syntax: "drop",
	onCall: function(cmd) {
		let commandSplit = cmd.split(" ");
		try {
			for(let i = 0; i <= 512; i++) {
				let p = ((Entity.getPitch(getPlayerEnt()) + 90) * Math.PI) / 180;
				let y = ((Entity.getYaw(getPlayerEnt()) + 90) * Math.PI) / 180;
				let xx = Math.sin(p) * Math.cos(y);
				let yy = Math.sin(p) * Math.sin(y);
				let zz = Math.cos(p);
				Level.dropItem(getPlayerX() + xx, getPlayerY() + zz, getPlayerZ() + yy, 1, i, 1);
			}
		} catch(e) {
			if(e instanceof SyntaxError) {
				VertexClientPE.syntaxError(cmdPrefix + this.syntax);
			} else {
				VertexClientPE.showBugReportDialog(e);
			}
		}
	}
}

var give = {
	syntax: "give (<item_name|item_id>) [<amount>] [<data>]",
	onCall: function(cmd) {
		let commandSplit = cmd.split(" ");
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
	onCall: function(cmd) {
		let commandSplit = cmd.split(" ");
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
				VertexClientPE.clientMessage(ChatColor.GREEN + i18n("Successfully teleported player to %0, %1, %2!", [x, y, z]));
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
	onCall: function(cmd) {
		let commandSplit = cmd.split(" ");
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
	onCall: function(cmd) {
		panic.onToggle(true);
	}
}

var p = {
	syntax: "p",
	onCall: function(cmd) {
		panic_cmd.onCall(cmd);
	}
}

var gamemode = {
	syntax: "gamemode",
	onCall: function(cmd) {
		VertexClientPE.switchGameMode();
		VertexClientPE.clientMessage(i18n("Your gamemode has been updated!"));
	}
}

var gm = {
	syntax: "gm",
	onCall: function(cmd) {
		gamemode.onCall(cmd);
	}
}

var js = {
	syntax: "js",
	onCall: function(cmd) {
		VertexClientPE.showJavascriptConsoleDialog();
	}
}

var rename = {
	syntax: "rename <name>",
	onCall: function(cmd) {
		let renameName = cmd.substring(7, cmd.length);
		let renameSlot = Player.getSelectedSlotId();
		let renameItem = Player.getInventorySlot(renameSlot);
		if(renameName  != null && renameName.replaceAll(" ", "") != "" && renameItem != 0) {
			Player.setItemCustomName(renameSlot, renameName);
			VertexClientPE.clientMessage(ChatColor.GREEN + i18n("Successfully renamed item to %0!", [renameName]));
		} else if(renameName.replaceAll(" ", "") == "") {
			VertexClientPE.clientMessage(ChatColor.RED + i18n("Error: please enter a valid name!"));
		} else if(renameItem == 0) {
			VertexClientPE.clientMessage(ChatColor.RED + i18n("Error: the selected inventory slot is empty!"));
		}
	}
}

var w = {
	syntax: "w <url>",
	onCall: function(cmd) {
		let url = cmd.split(" ")[1];
		if(url == null || url == "" || url.replaceAll(" ", "") == "") {
			VertexClientPE.syntaxError(cmdPrefix + this.syntax);
		} else {
			ModPE.goToURL(url);
		}
	}
}

var website = {
	syntax: "website <url>",
	onCall: function(cmd) {
		w.onCall(cmd);
	}
}

VertexClientPE.registerCommand(help);
VertexClientPE.registerCommand(drop);
VertexClientPE.registerCommand(gamemode);
VertexClientPE.registerCommand(give);
VertexClientPE.registerCommand(gm);
VertexClientPE.registerCommand(js);
VertexClientPE.registerCommand(p);
VertexClientPE.registerCommand(panic_cmd);
VertexClientPE.registerCommand(rename);
VertexClientPE.registerCommand(say);
VertexClientPE.registerCommand(t);
VertexClientPE.registerCommand(toggle);
VertexClientPE.registerCommand(tp);
VertexClientPE.registerCommand(version);
VertexClientPE.registerCommand(w);
VertexClientPE.registerCommand(website);

/**
 *  ##############
 *  # GUI & MORE #
 *  ##############
 */

VertexClientPE.createScreen = function() {
	var popupWindow = new PopupWindow_();
	return popupWindow;
}

VertexClientPE.showNotification = function(eventTitle, eventText) {
	let mNM = CONTEXT.getSystemService(Context_.NOTIFICATION_SERVICE);
	let notification = new Notification_(android.R.drawable.ic_menu_edit, eventText, System_.currentTimeMillis());

	// The PendingIntent to launch our activity if the user selects this
	// notification
	let contentIntent = PendingIntent_.getActivity(CONTEXT, 0, new Intent_(CONTEXT), 0);

	// Set the info for the views that show in the notification panel.
	notification.setLatestEventInfo(CONTEXT, eventTitle, eventText, contentIntent);

	// Send the notification.
	mNM.notify(eventTitle, 0, notification);
}

function showNotification() {
	/* // Using RemoteViews to bind custom layouts into Notification
	RemoteViews views = new RemoteViews(getPackageName(),
	R.layout.status_bar);
	RemoteViews bigViews = new RemoteViews(getPackageName(),
	R.layout.status_bar_expanded);
	 
	// showing default album image
	views.setViewVisibility(R.id.status_bar_icon, View.VISIBLE);
	views.setViewVisibility(R.id.status_bar_album_art, View.GONE);
	bigViews.setImageViewBitmap(R.id.status_bar_album_art,
	Constants.getDefaultAlbumArt(this));
	 
	Intent notificationIntent = new Intent(this, MainActivity.class);
	notificationIntent.setAction(Constants.ACTION.MAIN_ACTION);
	notificationIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK
	| Intent.FLAG_ACTIVITY_CLEAR_TASK);
	PendingIntent pendingIntent = PendingIntent.getActivity(this, 0,
	notificationIntent, 0);
	 
	Intent previousIntent = new Intent(this, NotificationService.class);
	previousIntent.setAction(Constants.ACTION.PREV_ACTION);
	PendingIntent ppreviousIntent = PendingIntent.getService(this, 0,
	previousIntent, 0);
	 
	Intent playIntent = new Intent(this, NotificationService.class);
	playIntent.setAction(Constants.ACTION.PLAY_ACTION);
	PendingIntent pplayIntent = PendingIntent.getService(this, 0,
	playIntent, 0);
	 
	Intent nextIntent = new Intent(this, NotificationService.class);
	nextIntent.setAction(Constants.ACTION.NEXT_ACTION);
	PendingIntent pnextIntent = PendingIntent.getService(this, 0,
	nextIntent, 0);
	 
	Intent closeIntent = new Intent(this, NotificationService.class);
	closeIntent.setAction(Constants.ACTION.STOPFOREGROUND_ACTION);
	PendingIntent pcloseIntent = PendingIntent.getService(this, 0,
	closeIntent, 0);
	 
	views.setOnClickPendingIntent(R.id.status_bar_play, pplayIntent);
	bigViews.setOnClickPendingIntent(R.id.status_bar_play, pplayIntent);
	 
	views.setOnClickPendingIntent(R.id.status_bar_next, pnextIntent);
	bigViews.setOnClickPendingIntent(R.id.status_bar_next, pnextIntent);
	 
	views.setOnClickPendingIntent(R.id.status_bar_prev, ppreviousIntent);
	bigViews.setOnClickPendingIntent(R.id.status_bar_prev, ppreviousIntent);
	 
	views.setOnClickPendingIntent(R.id.status_bar_collapse, pcloseIntent);
	bigViews.setOnClickPendingIntent(R.id.status_bar_collapse, pcloseIntent);
	 
	views.setImageViewResource(R.id.status_bar_play,
	R.drawable.apollo_holo_dark_pause);
	bigViews.setImageViewResource(R.id.status_bar_play,
	R.drawable.apollo_holo_dark_pause);
	 
	views.setTextViewText(R.id.status_bar_track_name, "Song Title");
	bigViews.setTextViewText(R.id.status_bar_track_name, "Song Title");
	 
	views.setTextViewText(R.id.status_bar_artist_name, "Artist Name");
	bigViews.setTextViewText(R.id.status_bar_artist_name, "Artist Name");
	 
	bigViews.setTextViewText(R.id.status_bar_album_name, "Album Name");
	 
	status = new Notification.Builder(this).build();
	status.contentView = views;
	status.bigContentView = bigViews;
	status.flags = Notification.FLAG_ONGOING_EVENT;
	status.icon = R.drawable.ic_launcher;
	status.contentIntent = pendingIntent;
	startForeground(Constants.NOTIFICATION_ID.FOREGROUND_SERVICE, status); */
}

let nameColor = "\u00A7b";
let healthColor = "\u00A7c";

const defaultDestroyTimeAll = [
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

let imgLogo = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/vertex_logo_new.png");
let imgIcon = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/clienticon_new.png");
let imgIconClicked = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/clienticon_new_clicked.png");
let imgPlayButton = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/play_button.png");
let imgPlayButtonClicked = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/play_button_clicked.png");
let imgTwitterButton = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/twitter_button.png");
let imgTwitterButtonClicked = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/twitter_button_clicked.png");
let imgYouTubeButton = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/youtube_button.png");
let imgYouTubeButtonClicked = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/youtube_button_clicked.png");
let imgGitHubButton = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/github_button.png");
let imgGitHubButtonClicked = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/github_button_clicked.png");
let imgSteveHead = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/stevehead.png");
let imgChristmasTree = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/christmas_tree.png");
let iconClientGUI = new BitmapDrawable_(imgIcon);
let iconClickedClientGUI = new BitmapDrawable_(imgIconClicked)
let playButtonClientGUI = new BitmapDrawable_(imgPlayButton);
let playButtonClickedClientGUI = new BitmapDrawable_(imgPlayButtonClicked);
let splashTwitterButtonClientGUI = new BitmapDrawable_(imgTwitterButton);
let splashTwitterButtonClickedClientGUI = new BitmapDrawable_(imgTwitterButtonClicked);
let splashYouTubeButtonClientGUI = new BitmapDrawable_(imgYouTubeButton);
let splashYouTubeButtonClickedClientGUI = new BitmapDrawable_(imgYouTubeButtonClicked);
let splashGitHubButtonClientGUI = new BitmapDrawable_(imgGitHubButton);
let splashGitHubButtonClickedClientGUI = new BitmapDrawable_(imgGitHubButtonClicked);
let christmasTreeClientGUI = new BitmapDrawable_(imgChristmasTree);
//*******************
let fileDirt;
let inputStreamDirt;
let dirtBackgroundClientGUI;

let fileRainbow;
let inputStreamRainbow;
let rainbowBackgroundClientGUI;

var getContext = function() {
	return CONTEXT;
};

ModPE.goToURL = function(url) {
	let uri = Uri_.parse(url);
	let intent = new Intent_(Intent_.ACTION_VIEW, uri);
	CONTEXT.startActivity(intent);
};

ModPE.getAndroidVersion = function() {
	return HardwareInformation_.getAndroidVersion();
}

ModPE.getPlayerName = function() {
	if(Launcher.isToolbox()) {
		let file = new File_(Environment_.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/options.txt");
		if(!file.exists()) {
			return Player.getName(getPlayerEnt());
		}
		let br = new BufferedReader_(new InputStreamReader_(new FileInputStream_(file)));
		let read, username;
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
	let file = new File_(Environment_.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/options.txt");
	if(!file.exists()) {
		return 70; // return 60 if version is > 1.5
	}
	let br = new BufferedReader_(new InputStreamReader_(new FileInputStream_(file)));
	let read, fov;
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
	changeFileText(Environment_.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/clientId.txt", clientId);
};

ModPE.getClientId = function() {
	return getTextFromFile(Environment_.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/clientId.txt");
};

function getTextFromUrl(urlToUse) { //let test = new getTextFromUrl(URL); test.resultText;
	try {
		let text;

		// download content
		let url = new URL_(urlToUse);
		let connection = url.openConnection();

		// get content
		let inputStream = connection.getInputStream();

		// read result
		let loadedText = "";
		let bufferedTextReader = new BufferedReader_(new InputStreamReader_(inputStream));
		let rowText = "";
		while((rowText = bufferedTextReader.readLine()) != null) {
			loadedText += rowText;
		}
		text = loadedText.toString();

		// close what needs to be closed
		bufferedTextReader.close();

		// test
		//clientMessage(VertexClientPE.getVersion("current"); + " " + latestVersion);
	} catch(err) {
		ModPE.log("[Vertex Client PE] getTextFromUrl() caught an error: " + err);
	} finally {
		this.resultText = text;
	}
}

function getTextFromFile(filePath) {
	let file = new File_(filePath);
	if(!file.exists()) {
		return "";
	}
	let br = new BufferedReader_(new InputStreamReader_(new FileInputStream_(file)));
	let read,
		text = "";
	while((read = br.readLine()) != null) {
		text += read;
		break;
	}
	br.close();
	return text;
}

function changeFileText(filePath, newText) {
	let fileOutputStream = new FileOutputStream_(new File_(filePath));
	let outputStreamWriter = new OutputStreamWriter_(fileOutputStream);
	outputStreamWriter.write(newText.toString());
	outputStreamWriter.close();
	fileOutputStream.close();
}

function saveSetting(article, value) {
	let fileInputStream = new FileInputStream_(new File_(Environment_.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/options.txt"));
	let inputStreamReader = new InputStreamReader_(fileInputStream);
	let bufferedReader = new BufferedReader_(inputStreamReader);
	let tempRead, tempReadString;
	let tempSaved = "";
	while ((tempRead = bufferedReader.readLine()) != null) {
		tempReadString = tempRead.toString();
		if (tempReadString.split(":")[0] == article) continue;
		tempSaved += tempReadString + "\n"
	}
	fileInputStream.close();
	inputStreamReader.close();
	bufferedReader.close();
	let fileOutputStream = new FileOutputStream_(new File_(Environment_.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/options.txt"));
	let outputStreamWriter = new OutputStreamWriter_(fileOutputStream);
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
	let file = new File_(Environment_.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/options.txt");
	if(!file.exists()) {
		return "0";
	}
	let br = new BufferedReader_(new InputStreamReader_(new FileInputStream_(file)));
	let read, splitcontrols;
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
	let file = new File_(Environment_.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/options.txt");
	if(!file.exists()) {
		return "";
	}
	let br = new BufferedReader_(new InputStreamReader_(new FileInputStream_(file)));
	let read, skin;
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

const URL = "https://www.pizzahut.co.uk/menu/pizza";

function pizzaOrderDialog() {
	CONTEXT.runOnUiThread(new Runnable_({
		run: function () {
			try {
				let wwv = new WebView_(CONTEXT);
				let wS = wwv.getSettings();
				wS.setJavaScriptEnabled(true);
				wwv.setWebChromeClient(new WebChromeClient_());
				wwv.setWebViewClient(new WebViewClient_());
				wwv.loadUrl(URL);
				let b = new AlertDialog_.Builder(CONTEXT);
				b.setTitle(URL);
				b.setView(wwv);
				b.setNegativeButton(i18n("Close"), new DialogInterface_.OnClickListener() {
					onClick: function (di, v1) {
						di.dismiss();
					}
				});
				let a = b.create();
				a.show();
			} catch (err) {
				print(i18n("Cannot open window: ") + err + ".")
				VertexClientPE.showBugReportDialog(err);;
			}
		}
	}));
}

VertexClientPE.showSignEditorDialog = function(signX, signY, signZ) {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				let signEditorTitle = clientTextView(i18n("SignEditor"), true);
				let btn = clientButton(i18n("Ok"));
				let btn1 = clientButton(i18n("Cancel"));
				let inputBar = clientEditText();
				let inputBar1 = clientEditText();
				let inputBar2 = clientEditText();
				let inputBar3 = clientEditText();
				let dialogLayout = LinearLayout_(CONTEXT);
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
				let dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("SignEditor");
				inputBar.setHint(i18n("Line %0", ["1"]));
				inputBar.setText(Level.getSignText(signX, signY, signZ, 0));
				inputBar.setTextColor(Color_.WHITE);
				inputBar1.setHint(i18n("Line %0", ["2"]));
				inputBar1.setText(Level.getSignText(signX, signY, signZ, 1));
				inputBar1.setTextColor(Color_.WHITE);
				inputBar2.setHint(i18n("Line %0", ["3"]));
				inputBar2.setText(Level.getSignText(signX, signY, signZ, 2));
				inputBar2.setTextColor(Color_.WHITE);
				inputBar3.setHint(i18n("Line %0", ["4"]));
				inputBar3.setText(Level.getSignText(signX, signY, signZ, 3));
				inputBar3.setTextColor(Color_.WHITE);
				dialog.show();
				btn.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						let line0 = inputBar.getText();
						let line1 = inputBar1.getText();
						let line2 = inputBar2.getText();
						let line3 = inputBar3.getText();
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

VertexClientPE.showBugReportDialog = function(exception) {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				let bugReportTitle = clientTextView(i18n("An error occurred"), true);
				let btn = clientButton(i18n("Copy error code & start a new issue on GitHub"));
				btn.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
				btn.setMarqueeRepeatLimit(-1);
				btn.setSingleLine();
				btn.setHorizontallyScrolling(true);
				btn.setSelected(true);
				let btn1 = clientButton(i18n("Close"));
				let exceptionTextView = clientTextView(exception);
				let dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);

				let dialogScrollView = new ScrollView_(CONTEXT);
				dialogScrollView.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2, display.heightPixels / 2));

				let dialogLayout1 = new LinearLayout_(CONTEXT);
				dialogLayout1.setBackgroundDrawable(backgroundGradient());
				dialogLayout1.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout1.setPadding(10, 10, 10, 10);

				dialogLayout.addView(exceptionTextView);
				dialogScrollView.addView(dialogLayout);

				dialogLayout1.addView(bugReportTitle);
				dialogLayout1.addView(dialogScrollView);
				dialogLayout1.addView(btn);
				dialogLayout1.addView(btn1);
				let dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout1);
				dialog.setTitle(i18n("An error occurred"));
				dialog.show();
				btn.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						copyToClipboard(exception);
						VertexClientPE.toast(i18n("Successfully copied the error message to clipboard. Paste it in the issue input."));
						ModPE.goToURL("https://github.com/Vertex-Client/Vertex-Client-PE/issues/new");
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
				let rvTitle = clientTextView(i18n("RemoteView | Target player by username"), true);
				let btn = clientButton(i18n("Apply"));
				let btn1 = clientButton(i18n("Close"));
				let inputBar = clientEditText();
				let dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(rvTitle);
				dialogLayout.addView(inputBar);
				dialogLayout.addView(btn);
				dialogLayout.addView(btn1);
				let dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle(i18n("RemoteView | Target by username"));
				inputBar.setHint(i18n("Username"));
				dialog.show();
				btn.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						let username = inputBar.getText();
						let players = Server.getAllPlayers();
						let rvTargetDone = false;
						players.forEach(function(element, index, array) {
							if(Player.getName(element) == username || Entity.getNameTag(element) == username) {
								VertexClientPE.modules.forEach(function(e, i, a) {
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
							VertexClientPE.toast(i18n("Your new RemoteView target is %0!", [username]));
						} else {
							VertexClientPE.toast(i18n("%0 couldn't be found!", [username]));
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
	combatMenu.update(combattpopx, combattpopy, -1, -1);
	worldtpopx = worldtpopx_def;
	worldtpopy = worldtpopy_def;
	worldMenu.update(worldtpopx, worldtpopy, -1, -1);
	movementtpopx = movementtpopx_def;
	movementtpopy = movementtpopy_def;
	movementMenu.update(movementtpopx, movementtpopy, -1, -1);
	playertpopx = playertpopx_def;
	playertpopy = playertpopy_def;
	playerMenu.update(playertpopx, playertpopy, -1, -1);
	misctpopx = misctpopx_def;
	misctpopy = misctpopy_def;
	miscMenu.update(misctpopx, misctpopy, -1, -1);
	VertexClientPE.saveFloatingMenus("all"); //don't add translation as this is a parameter
	VertexClientPE.toast(i18n("Successfully reset all menu positions!"));
}

VertexClientPE.tempDisable = function() {
	if(VertexClientPE.MusicUtils.mp != null) {
		VertexClientPE.MusicUtils.mp.reset();
	}
	ModPE.langEdit("menu.copyright", "\u00A9Mojang AB");
	leaveGame();
	screenChangeHook("Yo Mama");
	attackHook = null;
	chatHook = null;
	chatReceiveHook = null;
	deathHook = null;
	destroyBlock = null;
	entityAddedHook = null;
	entityHurtHook = null;
	leaveGame = null;
	modTick = null;
	newLevel = null;
	projectileHitBlockHook = null;
	screenChangeHook = null;
	startDestroyBlock = null;
	textPacketReceiveHook = null;
	useItem = null;
	VertexClientPE.clientTick = function() {};
	VertexClientPE.inGameTick = function() {};
	VertexClientPE.specialTick = function() {};
	VertexClientPE.secondTick = function() {};
	if(GUI != null && GUI.isShowing()) {
		GUI.dismiss();
		GUI = null;
	}
	if(screenUI != null && screenUI.isShowing()) {
		screenUI.dismiss();
		screenUI = null;
	}
	if(barUI != null && barUI.isShowing()) {
		barUI.dismiss();
		barUI = null;
	}
	VertexClientPE.modules.forEach(function(element, index, array) {
		if(element.isStateMod() && element.state) {
			element.onToggle();
		}
	});
	VertexClientPE.modules = [];
	VertexClientPE.toast(i18n("Successfully disabled Vertex Client PE! Restart to get the functionality back."));
}

VertexClientPE.showTempDisableDialog = function() {
	VertexClientPE.showConfirmDialog("Temporarily disable the client", "Are you sure you want to temporarily disable the client?", null,
		function() {
			VertexClientPE.tempDisable();
		}
	);
}

let moreMenuIsOpen = false;

let moreDialog;

const ghostModeEnabledDrawable = android.R.drawable.checkbox_on_background;
const ghostModeDisabledDrawable = android.R.drawable.checkbox_off_background;

VertexClientPE.showMoreDialog = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				if(moreMenuIsOpen) {
					return;
				}
				moreMenuIsOpen = true;
				let moreTitle = clientTextView(i18n("More"), true);
				let moreHR = clientHR();

				let ghostModeTitle = i18n("Ghost mode") + " | ";
				if(ghostModeState) {
					ghostModeTitle += i18n(i18n("ON"));
				} else {
					ghostModeTitle += i18n(i18n("OFF"));
				}

				let dashboardButton = clientButton(i18n("Dashboard"));
				let webBrowserButton = clientButton(i18n("Webbrowser"));
				let playerCustomizerButton = clientButton(i18n("Player Customizer"));
				let optiFineButton = clientButton(i18n("OptiFine"));
				let hideMenuButton = clientButton(i18n("Temporarily disable the client"));
				let ghostModeButton = clientButton(ghostModeTitle);
				let resetPosButton = clientButton(i18n("Reset moveable menu positions"));

				if(buttonStyleSetting != "android") {
					dashboardButton.setCompoundDrawablesWithIntrinsicBounds(0, android.R.drawable.ic_dialog_dialer, 0, 0);
					webBrowserButton.setCompoundDrawablesWithIntrinsicBounds(0, android.R.drawable.ic_menu_mapmode, 0, 0);
					playerCustomizerButton.setCompoundDrawablesWithIntrinsicBounds(0, android.R.drawable.presence_online, 0, 0);
					optiFineButton.setCompoundDrawablesWithIntrinsicBounds(0, android.R.drawable.ic_menu_zoom, 0, 0);
					hideMenuButton.setCompoundDrawablesWithIntrinsicBounds(0, android.R.drawable.ic_menu_close_clear_cancel, 0, 0);
					if(ghostModeState) {
						ghostModeButton.setCompoundDrawablesWithIntrinsicBounds(0, ghostModeEnabledDrawable, 0, 0);
					} else {
						ghostModeButton.setCompoundDrawablesWithIntrinsicBounds(0, ghostModeDisabledDrawable, 0, 0);
					}
					resetPosButton.setCompoundDrawablesWithIntrinsicBounds(0, android.R.drawable.stat_notify_sync, 0, 0);
				} else {
					dashboardButton.setCompoundDrawablesRelativeWithIntrinsicBounds(android.R.drawable.ic_dialog_dialer, 0, 0, 0);
					webBrowserButton.setCompoundDrawablesRelativeWithIntrinsicBounds(android.R.drawable.ic_menu_mapmode, 0, 0, 0);
					playerCustomizerButton.setCompoundDrawablesRelativeWithIntrinsicBounds(android.R.drawable.presence_online, 0, 0, 0);
					optiFineButton.setCompoundDrawablesRelativeWithIntrinsicBounds(android.R.drawable.ic_menu_zoom, 0, 0, 0);
					hideMenuButton.setCompoundDrawablesRelativeWithIntrinsicBounds(android.R.drawable.ic_menu_close_clear_cancel, 0, 0, 0);
					if(ghostModeState) {
						ghostModeButton.setCompoundDrawablesWithIntrinsicBounds(ghostModeEnabledDrawable, 0, 0, 0);
					} else {
						ghostModeButton.setCompoundDrawablesWithIntrinsicBounds(ghostModeDisabledDrawable, 0, 0, 0);
					}
					resetPosButton.setCompoundDrawablesRelativeWithIntrinsicBounds(android.R.drawable.stat_notify_sync, 0, 0, 0);
				}

				let screenshotButton = clientButton(i18n("Take a screenshot"));
				let rvTargetButton = clientButton(i18n("RemoteView | Target player by username"));
				let dialogLayout1 = new LinearLayout_(CONTEXT);
				dialogLayout1.setBackgroundDrawable(backgroundGradient());
				dialogLayout1.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout1.setPadding(10, 10, 10, 10);
				dialogLayout1.setGravity(Gravity_.CENTER);
				let dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				let dialogScrollView = new ScrollView_(CONTEXT);
				dialogScrollView.addView(dialogLayout);
				dialogLayout1.addView(moreTitle);
				dialogLayout1.addView(moreHR);
				dialogLayout1.addView(dialogScrollView);
				dialogLayout.addView(dashboardButton);
				dialogLayout.addView(optiFineButton);
				dialogLayout.addView(playerCustomizerButton);
				dialogLayout.addView(webBrowserButton);
				dialogLayout.addView(hideMenuButton);
				dialogLayout.addView(ghostModeButton);
				if(VertexClientPE.menuIsShowing && menuType == "normal") {
					dialogLayout.addView(resetPosButton);
				}
				if(VertexClientPE.isExpMode()) {
					dialogLayout.addView(screenshotButton);
				}
				if(remoteViewState) {
					dialogLayout.addView(rvTargetButton);
				}
				moreDialog = new Dialog_(CONTEXT);
				moreDialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				moreDialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				moreDialog.setContentView(dialogLayout1);
				moreDialog.setTitle(i18n("More"));
				moreDialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
					onDismiss: function() {
						moreMenuIsOpen = false;
					}
				});
				moreDialog.show();
				dashboardButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						moreDialog.dismiss();
						VertexClientPE.closeMenu();
						dashboardScreen(i18n("Dashboard"), android.R.drawable.ic_dialog_dialer);
					}
				});
				webBrowserButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						moreDialog.dismiss();
						VertexClientPE.closeMenu();
						webBrowserScreen();
						overlayWebBrowser();
					}
				});
				playerCustomizerButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						moreDialog.dismiss();
						VertexClientPE.closeMenu();
						playerCustomizerScreen(false, i18n("Player Customizer"), android.R.drawable.presence_online);
					}
				});
				optiFineButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						moreDialog.dismiss();
						VertexClientPE.closeMenu();
						optiFineScreen(false, i18n("OptiFine"), android.R.drawable.ic_menu_zoom);
					}
				});
				hideMenuButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						moreDialog.dismiss();
						VertexClientPE.showTempDisableDialog();
					}
				});
				ghostModeButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						ghostModeState = !ghostModeState;
						if(ghostModeState) {
							ghostModeTitle = i18n("Ghost mode") + " | " + i18n(i18n("ON"));
							if(hacksList != null && hacksList.isShowing()) {
								hacksList.dismiss();
							}
							if(tabGUI != null && tabGUI.isShowing()) {
								tabGUI.dismiss();
							}
							if(shortcutGUI != null && shortcutGUI.isShowing()) {
								shortcutGUI.dismiss();
							}
							if(pauseUtilitiesUI != null && pauseUtilitiesUI.isShowing()) {
								pauseUtilitiesUI.dismiss();
							}
							if(accountManagerGUI != null && accountManagerGUI.isShowing()) {
								accountManagerGUI.dismiss();
							}
							if(mainMenuTextList != null && mainMenuTextList.isShowing()) {
								mainMenuTextList.dismiss();
							}
						} else {
							ghostModeTitle = i18n("Ghost mode") + " | " + i18n(i18n("OFF"));
						}
						if(screenUI == null || !screenUI.isShowing()) {
							if(GUI != null && GUI.isShowing()) {
								GUI.dismiss();
							}
							showMenuButton();
						}
						ghostModeButton.setText(ghostModeTitle);
						if(buttonStyleSetting != "android") {
							if(ghostModeState) {
								ghostModeButton.setCompoundDrawablesWithIntrinsicBounds(0, ghostModeEnabledDrawable, 0, 0);
							} else {
								ghostModeButton.setCompoundDrawablesWithIntrinsicBounds(0, ghostModeDisabledDrawable, 0, 0);
							}
						} else {
							if(ghostModeState) {
								ghostModeButton.setCompoundDrawablesWithIntrinsicBounds(ghostModeEnabledDrawable, 0, 0, 0);
							} else {
								ghostModeButton.setCompoundDrawablesWithIntrinsicBounds(ghostModeDisabledDrawable, 0, 0, 0);
							}
						}
					}
				});
				resetPosButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						VertexClientPE.resetMenuPos();
						moreDialog.dismiss();
					}
				});
				screenshotButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						new Thread_(new Runnable_() {
							run: function() {
								moreDialog.dismiss();
								Thread_.sleep(1000);
								VertexClientPE.Utils.takeScreenshot(screenshotModeSetting);
							}
						}).start();
					}
				});
				rvTargetButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						moreDialog.dismiss();
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

VertexClientPE.showHacksListManagerDialog = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				let settingsTitle = clientScreenTitle("Settings", settingsTile.icon, themeSetting);
				let settingsTitleLayout = new LinearLayout_(CONTEXT);
				settingsTitleLayout.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels - barLayoutHeight * 2, barLayoutHeight));
				settingsTitleLayout.setGravity(Gravity_.CENTER);
				settingsTitleLayout.addView(settingsTitle);
				let hacksListManagerTitle = clientTextView(i18n("Hacks list Manager"), true);
				hacksListManagerTitle.setGravity(Gravity_.CENTER);
				let hacksListManagerEnter = clientTextView("");
				let closeButton = clientButton(i18n("Close"));
				closeButton.setPadding(0.5, closeButton.getPaddingTop(), 0.5, closeButton.getPaddingBottom());
				let dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				let dialogScrollView = new ScrollView_(CONTEXT);
				dialogScrollView.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels - 20, display.heightPixels / 2));
				let dialogLayout1 = new LinearLayout_(CONTEXT);
				dialogLayout1.setBackgroundDrawable(backgroundGradient());
				dialogLayout1.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
				dialogLayout1.setPadding(10, 0, 10, 10);
				dialogLayout1.addView(settingsTitleLayout);
				dialogLayout1.addView(hacksListManagerTitle);
				dialogLayout1.addView(hacksListManagerEnter);

				dialogScrollView.addView(dialogLayout);
				dialogLayout1.addView(dialogScrollView);

				let hacksListModeSettingFunc = new settingButton(i18n("Hacks list mode"), null, display.widthPixels - 20,
					function(viewArg) {
						hacksListModeSetting = "on";
						hacksListModeSettingButton.setText(i18n("Normal"));
					}
				);
				let hacksListModeSettingButton = hacksListModeSettingFunc.getButton();
				if(hacksListModeSetting == "on") {
					hacksListModeSettingButton.setText(i18n("Normal"));
				} else if(hacksListModeSetting == "counter") {
					hacksListModeSettingButton.setText(i18n("Counter"));
				} else if(hacksListModeSetting == "logo") {
					hacksListModeSettingButton.setText(i18n("Logo"));
				} else if(hacksListModeSetting == "off") {
					hacksListModeSettingButton.setText(i18n("Hidden"));
				}
				hacksListModeSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(hacksListModeSetting == "off") {
							hacksListModeSetting = "on";
							hacksListModeSettingButton.setText(i18n("Normal"));
							VertexClientPE.saveMainSettings();
						} else if(hacksListModeSetting == "on"){
							hacksListModeSetting = "counter";
							hacksListModeSettingButton.setText(i18n("Counter"));
							VertexClientPE.saveMainSettings();
						} else if(hacksListModeSetting == "counter"){
							hacksListModeSetting = "logo";
							hacksListModeSettingButton.setText(i18n("Logo"));
							VertexClientPE.saveMainSettings();
						} else if(hacksListModeSetting == "logo"){
							hacksListModeSetting = "off";
							hacksListModeSettingButton.setText(i18n("Hidden"));
							VertexClientPE.saveMainSettings();
						}
					}
				}));

				let hacksListPosSettingFunc = new settingButton(i18n("Hacks list position"), null, display.widthPixels - 20,
					function(viewArg) {
						hacksListPosSetting = "top-center";
						hacksListPosSettingButton.setText(i18n("Top-center"));
					}
				);
				let hacksListPosSettingButton = hacksListPosSettingFunc.getButton();
				if(hacksListPosSetting == "top-left") {
					hacksListPosSettingButton.setText(i18n("Top-left"));
				} else if(hacksListPosSetting == "top-center") {
					hacksListPosSettingButton.setText(i18n("Top-center"));
				} else if(hacksListPosSetting == "top-right") {
					hacksListPosSettingButton.setText(i18n("Top-right"));
				}
				hacksListPosSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(hacksListPosSetting == "top-left") {
							hacksListPosSetting = "top-center";
							hacksListPosSettingButton.setText(i18n("Top-center"));
						} else if(hacksListPosSetting == "top-center"){
							hacksListPosSetting = "top-right";
							hacksListPosSettingButton.setText(i18n("Top-right"));
						} else if(hacksListPosSetting == "top-right"){
							hacksListPosSetting = "top-left";
							hacksListPosSettingButton.setText(i18n("Top-left"));
						}
						VertexClientPE.saveMainSettings();
					}
				}));

				VertexClientPE.addView(dialogLayout, hacksListModeSettingFunc);
				VertexClientPE.addView(dialogLayout, hacksListPosSettingFunc);
				dialogLayout1.addView(clientTextView(""));
				dialogLayout1.addView(closeButton);

				let dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout1);
				dialog.setTitle(i18n("Hacks list Manager"));
				dialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
					onDismiss: function() {
						VertexClientPE.saveMainSettings();
					}
				});
				dialog.show();
				let window = dialog.getWindow();
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

VertexClientPE.showMainButtonManagerDialog = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				let settingsTitle = clientScreenTitle("Settings", settingsTile.icon, themeSetting);
				let settingsTitleLayout = new LinearLayout_(CONTEXT);
				settingsTitleLayout.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels - barLayoutHeight * 2, barLayoutHeight));
				settingsTitleLayout.setGravity(Gravity_.CENTER);
				settingsTitleLayout.addView(settingsTitle);
				let mainButtonManagerTitle = clientTextView("Main button Manager", true);
				mainButtonManagerTitle.setGravity(Gravity_.CENTER);
				let mainButtonManagerEnter = clientTextView("");
				let closeButton = clientButton("Close");
				closeButton.setPadding(0.5, closeButton.getPaddingTop(), 0.5, closeButton.getPaddingBottom());
				let dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				let dialogScrollView = new ScrollView_(CONTEXT);
				dialogScrollView.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels - 20, display.heightPixels / 2));
				let dialogLayout1 = new LinearLayout_(CONTEXT);
				dialogLayout1.setBackgroundDrawable(backgroundGradient());
				dialogLayout1.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
				dialogLayout1.setPadding(10, 0, 10, 10);
				dialogLayout1.addView(settingsTitleLayout);
				dialogLayout1.addView(mainButtonManagerTitle);
				dialogLayout1.addView(mainButtonManagerEnter);

				dialogScrollView.addView(dialogLayout);
				dialogLayout1.addView(dialogScrollView);

				let mainButtonSizeSettingTitle = clientTextView("Main button size: | " + mainButtonSizeSetting + " pixels");
				let mainButtonSizeSettingSlider = clientSeekBar();
				let minMainButtonSize = 20;
				mainButtonSizeSettingSlider.setProgress(mainButtonSizeSetting - minMainButtonSize);
				mainButtonSizeSettingSlider.setMax(100 - minMainButtonSize);
				mainButtonSizeSettingSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
					onProgressChanged: function() {
						mainButtonSizeSetting = mainButtonSizeSettingSlider.getProgress() + minMainButtonSize;
						mainButtonSizeSettingTitle.setText("Main button size: | " + mainButtonSizeSetting + " pixels");
					}
				});

				let mainButtonPositionSettingFunc = new settingButton("Main button position", "Sets the main menu's button position.", display.widthPixels - 20,
					function(viewArg) {
						mainButtonPositionSetting = "top-left";
						mainButtonPositionSettingButton.setText("Top-left");
					}
				);
				let mainButtonPositionSettingButton = mainButtonPositionSettingFunc.getButton();
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

				let mainButtonStyleSettingFunc = new settingButton("Main button style", "Sets the main menu's button style.", display.widthPixels - 20,
					function(viewArg) {
						mainButtonStyleSetting = "normal";
						mainButtonStyleSettingButton.setText("Normal");
					}
				);
				let mainButtonStyleSettingButton = mainButtonStyleSettingFunc.getButton();
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

				let mainButtonTapSettingFunc = new settingButton("Main button action", "Sets the main menu's button action.", display.widthPixels - 20,
					function(viewArg) {
						mainButtonTapSetting = "menu";
						mainButtonTapSettingButton.setText("Menu (normal tap) | More dialog (long tap)");
					}
				);
				let mainButtonTapSettingButton = mainButtonTapSettingFunc.getButton();
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

				dialogLayout.addView(mainButtonSizeSettingTitle);
				dialogLayout.addView(mainButtonSizeSettingSlider);
				VertexClientPE.addView(dialogLayout, mainButtonPositionSettingFunc);
				VertexClientPE.addView(dialogLayout, mainButtonStyleSettingFunc);
				VertexClientPE.addView(dialogLayout, mainButtonTapSettingFunc);
				dialogLayout1.addView(clientTextView(""));
				dialogLayout1.addView(closeButton);

				let dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout1);
				dialog.setTitle("Main button Manager");
				dialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
					onDismiss: function() {
						VertexClientPE.saveMainSettings();
					}
				});
				dialog.show();
				let window = dialog.getWindow();
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

VertexClientPE.showShortcutManagerDialog = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				let settingsTitle = clientScreenTitle("Settings", settingsTile.icon, themeSetting);
				let settingsTitleLayout = new LinearLayout_(CONTEXT);
				settingsTitleLayout.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels - barLayoutHeight * 2, barLayoutHeight));
				settingsTitleLayout.setGravity(Gravity_.CENTER);
				settingsTitleLayout.addView(settingsTitle);
				let shortcutManagerTitle = clientTextView("Shortcut Manager", true);
				shortcutManagerTitle.setGravity(Gravity_.CENTER);
				let shortcutManagerEnter = clientTextView("");
				let closeButton = clientButton("Close");
				closeButton.setPadding(0.5, closeButton.getPaddingTop(), 0.5, closeButton.getPaddingBottom());
				let dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				let dialogScrollView = new ScrollView_(CONTEXT);
				dialogScrollView.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels - 20, display.heightPixels / 2));
				let dialogLayout1 = new LinearLayout_(CONTEXT);
				dialogLayout1.setBackgroundDrawable(backgroundGradient());
				dialogLayout1.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
				dialogLayout1.setPadding(10, 0, 10, 10);
				dialogLayout1.addView(settingsTitleLayout);
				dialogLayout1.addView(shortcutManagerTitle);
				dialogLayout1.addView(shortcutManagerEnter);

				dialogScrollView.addView(dialogLayout);
				dialogLayout1.addView(dialogScrollView);

				let shortcutSizeSettingTitle = clientTextView("Shortcut button size: | " + shortcutSizeSetting, true);
				let shortcutSizeSettingSlider = clientSeekBar();
				let minShortcutSize = 16;
				shortcutSizeSettingSlider.setProgress(shortcutSizeSetting - minShortcutSize);
				shortcutSizeSettingSlider.setMax(64 - minShortcutSize);
				shortcutSizeSettingSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
					onProgressChanged: function() {
						shortcutSizeSetting = shortcutSizeSettingSlider.getProgress() + minShortcutSize;
						shortcutSizeSettingTitle.setText("Shortcut button size: | " + shortcutSizeSetting);
					}
				});

				let shortcutUIHeightSettingTitle = clientTextView("Shortcut UI height: | " + shortcutUIHeightSetting + " * shortcut button size", true);
				let shortcutUIHeightSettingSlider = clientSeekBar();
				let minShortcutUIHeight = 1;
				let maxShortcutUIHeight = 20;
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

				let shortcutUIModeSettingFunc = new settingButton("Shortcut UI mode", null, display.widthPixels - 20,
					function(viewArg) {
						shortcutUIModeSetting = "on";
						shortcutUIModeSettingButton.setText("Normal");
					}
				);
				let shortcutUIModeSettingButton = shortcutUIModeSettingFunc.getButton();
				if(shortcutUIModeSetting == "off") {
					shortcutUIModeSettingButton.setText("Hidden");
				} else if(shortcutUIModeSetting == "on") {
					shortcutUIModeSettingButton.setText("Normal");
				} else if(shortcutUIModeSetting == "multirow") {
					shortcutUIModeSettingButton.setText("Multi-row");
				}
				shortcutUIModeSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(shortcutUIModeSetting == "on") {
							shortcutUIModeSetting = "off";
							shortcutUIModeSettingButton.setText("Hidden");
						} else if(shortcutUIModeSetting == "off") {
							shortcutUIModeSetting = "on";
							shortcutUIModeSettingButton.setText("Normal");
						}/*  else if(shortcutUIModeSetting == "on") {
							shortcutUIModeSetting = "multirow";
							shortcutUIModeSettingButton.setText("Multi-row");
						} */
						VertexClientPE.saveMainSettings();
					}
				}));

				let shortcutUIPosSettingFunc = new settingButton("Shortcut UI position", null, display.widthPixels - 20,
					function(viewArg) {
						shortcutUIPosSetting = "right-center";
						shortcutUIPosSettingButton.setText("Right-center");
					}
				);
				let shortcutUIPosSettingButton = shortcutUIPosSettingFunc.getButton();
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

				let showIconsOnTileShortcutsSettingFunc = new settingButton("Show icons on tile/screen shortcuts", null, display.widthPixels - 20,
					function(viewArg) {
						showIconsOnTileShortcutsSetting = "on";
						showIconsOnTileShortcutsSettingButton.setText(i18n("ON"));
					}
				);
				let showIconsOnTileShortcutsSettingButton = showIconsOnTileShortcutsSettingFunc.getButton();
				if(showIconsOnTileShortcutsSetting == "off") {
					showIconsOnTileShortcutsSettingButton.setText(i18n("OFF"));
				} else if(showIconsOnTileShortcutsSetting == "on") {
					showIconsOnTileShortcutsSettingButton.setText(i18n("ON"));
				}
				showIconsOnTileShortcutsSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(showIconsOnTileShortcutsSetting == "off") {
							showIconsOnTileShortcutsSetting = "on";
							showIconsOnTileShortcutsSettingButton.setText(i18n("ON"));
						} else if(showIconsOnTileShortcutsSetting == "on") {
							showIconsOnTileShortcutsSetting = "off";
							showIconsOnTileShortcutsSettingButton.setText(i18n("OFF"));
						}
						VertexClientPE.saveMainSettings();
					}
				}));

				VertexClientPE.addView(dialogLayout, shortcutUIModeSettingFunc);
				VertexClientPE.addView(dialogLayout, shortcutUIPosSettingFunc);
				VertexClientPE.addView(dialogLayout, showIconsOnTileShortcutsSettingFunc);
				dialogLayout1.addView(clientTextView(""));
				dialogLayout1.addView(closeButton);

				let dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout1);
				dialog.setTitle("Shortcut Manager");
				dialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
					onDismiss: function() {
						VertexClientPE.saveMainSettings();
					}
				});
				dialog.show();
				let window = dialog.getWindow();
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

let chatWebView;
let chatDialogOpen = false;
let chatUrl = "https://www.rumbletalk.com/client/chat.php?yfv-:rmp";

VertexClientPE.showChatDialog = function() {
	if(!chatDialogOpen) {
		chatDialogOpen = true;
		CONTEXT.runOnUiThread(new Runnable_() {
			run: function() {
				try {
					let chatTopLayout = new LinearLayout_(CONTEXT);
					chatTopLayout.setOrientation(LinearLayout_.HORIZONTAL);
					let chatTitle = clientScreenTitle("Chat", chatTile.icon, themeSetting);
					let chatTitleLayout = new LinearLayout_(CONTEXT);
					chatTitleLayout.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels - barLayoutHeight * 2, barLayoutHeight));
					chatTitleLayout.setGravity(Gravity_.CENTER);
					let refreshButton = clientButton("\u21BB");
					refreshButton.setLayoutParams(new LinearLayout_.LayoutParams(barLayoutHeight, barLayoutHeight));
					let closeButton = clientButton("X");
					closeButton.setLayoutParams(new LinearLayout_.LayoutParams(barLayoutHeight, barLayoutHeight));
					chatTitleLayout.addView(chatTitle);
					chatTopLayout.addView(refreshButton);
					chatTopLayout.addView(chatTitleLayout);
					chatTopLayout.addView(closeButton);
					let dialogLayout = new LinearLayout_(CONTEXT);
					dialogLayout.setBackgroundDrawable(backgroundGradient());
					dialogLayout.setOrientation(LinearLayout_.VERTICAL);
					dialogLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
					dialogLayout.addView(chatTopLayout);

					if(chatWebView == null) {
						chatWebView = new WebView_(CONTEXT);

						let wS = chatWebView.getSettings();

						wS.setJavaScriptEnabled(true);
						wS.setDomStorageEnabled(true);
						chatWebView.setWebChromeClient(new WebChromeClient_());
						chatWebView.setWebViewClient(new WebViewClient_());

						chatWebView.loadUrl(chatUrl);
					}

					dialogLayout.addView(chatWebView);

					let dialog = new Dialog_(CONTEXT);
					dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
					dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
					dialog.setContentView(dialogLayout);
					dialog.setTitle("Chat");
					dialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
						onDismiss: function() {
							dialogLayout.removeView(chatWebView);
							chatDialogOpen = false;
						}
					});
					dialog.show();
					let window = dialog.getWindow();
					window.setLayout(display.widthPixels, display.heightPixels);
					refreshButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							if(chatWebView != null) {
								chatWebView.loadUrl(chatUrl);
							}
						}
					}));
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
}

let feedbackWebView;
let feedbackDialogOpen = false;
let feedbackData = "<html><body><center><iframe src='https://docs.google.com/forms/d/e/1FAIpQLSeMITAXYXh895mqS4gS4AGru0CZjCeYg1B1ClJClyKTAHEYVg/viewform?embedded=true' width='100%' height='800' frameborder='0' marginheight='0' marginwidth='0'>Loading...</iframe></center></body></html>";

VertexClientPE.showFeedbackDialog = function() {
	if(!feedbackDialogOpen) {
		feedbackDialogOpen = true;
		CONTEXT.runOnUiThread(new Runnable_() {
			run: function() {
				try {
					let feedbackTopLayout = new LinearLayout_(CONTEXT);
					feedbackTopLayout.setOrientation(LinearLayout_.HORIZONTAL);
					let feedbackTitle = clientScreenTitle("Feedback", feedbackTile.icon, themeSetting);
					let feedbackTitleLayout = new LinearLayout_(CONTEXT);
					feedbackTitleLayout.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels - barLayoutHeight * 2, barLayoutHeight));
					feedbackTitleLayout.setGravity(Gravity_.CENTER);
					let refreshButton = clientButton("\u21BB");
					refreshButton.setLayoutParams(new LinearLayout_.LayoutParams(barLayoutHeight, barLayoutHeight));
					let closeButton = clientButton("X");
					closeButton.setLayoutParams(new LinearLayout_.LayoutParams(barLayoutHeight, barLayoutHeight));
					feedbackTitleLayout.addView(feedbackTitle);
					feedbackTopLayout.addView(refreshButton);
					feedbackTopLayout.addView(feedbackTitleLayout);
					feedbackTopLayout.addView(closeButton);
					let dialogLayout = new LinearLayout_(CONTEXT);
					dialogLayout.setBackgroundDrawable(backgroundGradient());
					dialogLayout.setOrientation(LinearLayout_.VERTICAL);
					dialogLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
					dialogLayout.addView(feedbackTopLayout);

					if(feedbackWebView == null) {
						feedbackWebView = new WebView_(CONTEXT);

						let wS = feedbackWebView.getSettings();

						wS.setJavaScriptEnabled(true);
						wS.setDomStorageEnabled(true);
						feedbackWebView.setWebChromeClient(new WebChromeClient_());
						feedbackWebView.setWebViewClient(new WebViewClient_());

						feedbackWebView.loadData(feedbackData, "text/html", "utf-8");
					}

					dialogLayout.addView(feedbackWebView);

					let dialog = new Dialog_(CONTEXT);
					dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
					dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
					dialog.setContentView(dialogLayout);
					dialog.setTitle("Feedback");
					dialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
						onDismiss: function() {
							dialogLayout.removeView(feedbackWebView);
							feedbackDialogOpen = false;
						}
					});
					dialog.show();
					let window = dialog.getWindow();
					window.setLayout(display.widthPixels, display.heightPixels);
					refreshButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							if(feedbackWebView != null) {
								feedbackWebView.loadData(feedbackData, "text/html", "utf-8");
							}
						}
					}));
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
}

function setupAndroidUI() {
	// Set the IMMERSIVE flag.
	// Set the content to appear under the system bars so that the content
	// doesn't resize when the system bars hide and show.
	let decorView = CONTEXT.getWindow().getDecorView();
    decorView.setSystemUiVisibility(
			View_.SYSTEM_UI_FLAG_LAYOUT_STABLE
			| View_.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
			| View_.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
			| View_.SYSTEM_UI_FLAG_HIDE_NAVIGATION // hide nav bar
			| View_.SYSTEM_UI_FLAG_FULLSCREEN // hide status bar
			| View_.SYSTEM_UI_FLAG_IMMERSIVE);
}

VertexClientPE.showFeaturesDialog = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				let lastCombatEnabled = combatEnabled;
				let lastWorldEnabled = worldEnabled;
				let lastMovementEnabled = movementEnabled;
				let lastPlayerEnabled = playerEnabled;
				let lastMiscEnabled = miscEnabled;
				let lastSingleplayerEnabled = singleplayerEnabled;

				let settingsTitle = clientScreenTitle("Settings", settingsTile.icon, themeSetting);
				let settingsTitleLayout = new LinearLayout_(CONTEXT);
				settingsTitleLayout.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels - barLayoutHeight * 2, barLayoutHeight));
				settingsTitleLayout.setGravity(Gravity_.CENTER);
				settingsTitleLayout.addView(settingsTitle);
				let featuresTitle = clientTextView("Opt in/out features\n", true);
				featuresTitle.setGravity(Gravity_.CENTER);
				let featuresText = clientTextView("Changes on this dialog will show/hide all mods in that category", true);
				featuresText.setTextSize(8);
				featuresText.setTypeface(null, Typeface_.ITALIC);
				featuresText.setGravity(Gravity_.CENTER);
				let closeButton = clientButton("Close");
				closeButton.setPadding(0.5, closeButton.getPaddingTop(), 0.5, closeButton.getPaddingBottom());
				let dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(settingsTitleLayout);
				dialogLayout.addView(featuresTitle);
				dialogLayout.addView(featuresText);

				let combatEnabledSettingButton = clientSwitch();
				combatEnabledSettingButton.setText("Combat");
				combatEnabledSettingButton.setChecked(combatEnabled == "on");
				combatEnabledSettingButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
					onCheckedChanged: function() {
						if(combatEnabled == "off") {
							combatEnabled = "on";
						} else if(combatEnabled == "on") {
							combatEnabled = "off";
						}
						VertexClientPE.saveFeaturesSettings();
					}
				}));

				let worldEnabledSettingButton = clientSwitch();
				worldEnabledSettingButton.setText("World");
				worldEnabledSettingButton.setChecked(worldEnabled == "on");
				worldEnabledSettingButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
					onCheckedChanged: function() {
						if(worldEnabled == "off") {
							worldEnabled = "on";
						} else if(worldEnabled == "on") {
							worldEnabled = "off";
						}
						VertexClientPE.saveFeaturesSettings();
					}
				}));

				let movementEnabledSettingButton = clientSwitch();
				movementEnabledSettingButton.setText("Movement");
				movementEnabledSettingButton.setChecked(movementEnabled == "on");
				movementEnabledSettingButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
					onCheckedChanged: function() {
						if(movementEnabled == "off") {
							movementEnabled = "on";
						} else if(movementEnabled == "on") {
							movementEnabled = "off";
						}
						VertexClientPE.saveFeaturesSettings();
					}
				}));

				let playerEnabledSettingButton = clientSwitch();
				playerEnabledSettingButton.setText("Player");
				playerEnabledSettingButton.setChecked(playerEnabled == "on");
				playerEnabledSettingButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
					onCheckedChanged: function() {
						if(playerEnabled == "off") {
							playerEnabled = "on";
						} else if(playerEnabled == "on") {
							playerEnabled = "off";
						}
						VertexClientPE.saveFeaturesSettings();
					}
				}));

				let miscEnabledSettingButton = clientSwitch();
				miscEnabledSettingButton.setText("Misc");
				miscEnabledSettingButton.setChecked(miscEnabled == "on");
				miscEnabledSettingButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
					onCheckedChanged: function() {
						if(miscEnabled == "off") {
							miscEnabled = "on";
						} else if(miscEnabled == "on") {
							miscEnabled = "off";
						}
						VertexClientPE.saveFeaturesSettings();
					}
				}));

				let singleplayerEnabledSettingButton = clientSwitch();
				singleplayerEnabledSettingButton.setText("Singleplayer only mods");
				singleplayerEnabledSettingButton.setChecked(singleplayerEnabled == "on");
				singleplayerEnabledSettingButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
					onCheckedChanged: function() {
						if(singleplayerEnabled == "off") {
							singleplayerEnabled = "on";
						} else if(singleplayerEnabled == "on") {
							singleplayerEnabled = "off";
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
				dialogLayout.addView(clientTextView(""));
				dialogLayout.addView(closeButton);

				let dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.setContentView(dialogLayout);
				dialog.setTitle("Opt in/out features");
				dialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
					onDismiss: function() {
						if(lastCombatEnabled != combatEnabled || lastWorldEnabled != worldEnabled || lastMovementEnabled != movementEnabled || lastPlayerEnabled != playerEnabled || lastMiscEnabled != miscEnabled || lastSingleplayerEnabled != singleplayerEnabled) {
							VertexClientPE.shouldUpdateGUI = true;
							VertexClientPE.initMods(true);
						}
					}
				});
				dialog.show();
				let window = dialog.getWindow();
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
				let settingsTitle = clientScreenTitle("Settings", settingsTile.icon, themeSetting);
				let settingsTitleLayout = new LinearLayout_(CONTEXT);
				settingsTitleLayout.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels - barLayoutHeight * 2, barLayoutHeight));
				settingsTitleLayout.setGravity(Gravity_.CENTER);
				settingsTitleLayout.addView(settingsTitle);
				let dTitle = clientTextView(dialogTitle, true);
				dTitle.setGravity(Gravity_.CENTER);

				let dScrollView = new ScrollView_(CONTEXT);
				dScrollView.setLayoutParams(new LinearLayout_.LayoutParams(LinearLayout_.LayoutParams.WRAP_CONTENT, LinearLayout_.LayoutParams.WRAP_CONTENT));
				dScrollView.setScrollBarStyle(View_.SCROLLBARS_OUTSIDE_OVERLAY);
				dScrollView.setFillViewport(true);
				let dScrollInside = new LinearLayout_(CONTEXT);
				dScrollInside.setGravity(Gravity_.CENTER);
				dScrollInside.setOrientation(1);
				dScrollView.addView(dScrollInside);

				let dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setGravity(Gravity_.CENTER);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(settingsTitleLayout);
				dialogLayout.addView(dTitle);
				dialogLayout.addView(dScrollView);

				let dialogTableLayout = new TableLayout_(CONTEXT);
				let dialogTableRow;
				let tempButton;

				selectionArray.forEach(function(element, index, array) {
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
					if(index % 2 == 1) {
						if(!dialogTableRow) {
							dialogTableRow = new TableRow_(CONTEXT);
						}
						dialogTableRow.addView(tempButton);
						dialogTableLayout.addView(dialogTableRow);
						dialogTableRow = null;
					} else {
						dialogTableRow = new TableRow_(CONTEXT);
						dialogTableRow.addView(tempButton);
					}
					tempButton = null;
				});
				if(dialogTableRow != null) {
					dialogTableLayout.addView(dialogTableRow);
				}

				dScrollInside.addView(dialogTableLayout);

				let dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.setContentView(dialogLayout);
				dialog.setTitle(dialogTitle);
				dialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
					onDismiss: function() {
						VertexClientPE.saveMainSettings();
					}
				});
				dialog.show();
				let window = dialog.getWindow();
				window.setLayout(display.widthPixels, display.heightPixels);
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

let newRed, newGreen, newBlue, newRedStroke, newGreenStroke, newBlueStroke;

VertexClientPE.showCustomRGBDialog = function(sRightButton, dialogTitle) {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {

				newRed = customRGBRed;
				newGreen = customRGBGreen;
				newBlue = customRGBBlue;
				newRedStroke = customRGBRedStroke;
				newGreenStroke = customRGBGreenStroke;
				newBlueStroke = customRGBBlueStroke;

				let settingsTitle = clientScreenTitle("Settings", settingsTile.icon, themeSetting);
				let settingsTitleLayout = new LinearLayout_(CONTEXT);
				settingsTitleLayout.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels - barLayoutHeight * 2, barLayoutHeight));
				settingsTitleLayout.setGravity(Gravity_.CENTER);
				settingsTitleLayout.addView(settingsTitle);

				let dTitle = clientTextView(dialogTitle, true);
				dTitle.setGravity(Gravity_.CENTER);

				let doneButton = clientButton("Done");
				doneButton.setPadding(0.5, doneButton.getPaddingTop(), 0.5, doneButton.getPaddingBottom());
				let cancelButton = clientButton("Cancel");
				cancelButton.setPadding(0.5, cancelButton.getPaddingTop(), 0.5, cancelButton.getPaddingBottom());

				let dScrollView = new ScrollView_(CONTEXT);
				dScrollView.setLayoutParams(new LinearLayout_.LayoutParams(LinearLayout_.LayoutParams.FILL_PARENT, screenHeight / 2.5));
				dScrollView.setScrollBarStyle(View_.SCROLLBARS_OUTSIDE_OVERLAY);
				dScrollView.setFillViewport(true);
				let dScrollInside = new LinearLayout_(CONTEXT);
				dScrollInside.setGravity(Gravity_.CENTER);
				dScrollInside.setOrientation(1);
				dScrollView.addView(dScrollInside);

				let pickerButton0 = clientButton("Pick inner color");
				pickerButton0.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
						let pickerWindow = new ColorPickerWindow(newRed, newGreen, newBlue, function (color) {
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

				let pickerButton1 = clientButton("Pick stroke color");
				pickerButton1.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
						let pickerWindow = new ColorPickerWindow(newRedStroke, newGreenStroke, newBlueStroke, function (color) {
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

				let redTitle = clientTextView("Red (inner): | " + newRed, true);
				let redSlider = clientSeekBar();
				redSlider.setMax(255);
				redSlider.setProgress(newRed);
				redSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
					onProgressChanged: function() {
						newRed = redSlider.getProgress();
						redTitle.setText("Red (inner): | " + newRed);
					}
				});

				let greenTitle = clientTextView("Green (inner): | " + newGreen, true);
				let greenSlider = clientSeekBar();
				greenSlider.setMax(255);
				greenSlider.setProgress(newGreen);
				greenSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
					onProgressChanged: function() {
						newGreen = greenSlider.getProgress();
						greenTitle.setText("Green (inner): | " + newGreen);
					}
				});

				let blueTitle = clientTextView("Blue (inner): | " + newBlue, true);
				let blueSlider = clientSeekBar();
				blueSlider.setMax(255);
				blueSlider.setProgress(newBlue);
				blueSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
					onProgressChanged: function() {
						newBlue = blueSlider.getProgress();
						blueTitle.setText("Blue (inner): | " + newBlue);
					}
				});

				let redStrokeTitle = clientTextView("Red (stroke): | " + newRedStroke, true);
				let redStrokeSlider = clientSeekBar();
				redStrokeSlider.setMax(255);
				redStrokeSlider.setProgress(newRedStroke);
				redStrokeSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
					onProgressChanged: function() {
						newRedStroke = redStrokeSlider.getProgress();
						redStrokeTitle.setText("Red (stroke): | " + newRedStroke);
					}
				});

				let greenStrokeTitle = clientTextView("Green (stroke): | " + newGreenStroke, true);
				let greenStrokeSlider = clientSeekBar();
				greenStrokeSlider.setMax(255);
				greenStrokeSlider.setProgress(newGreenStroke);
				greenStrokeSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
					onProgressChanged: function() {
						newGreenStroke = greenStrokeSlider.getProgress();
						greenStrokeTitle.setText("Green (stroke): | " + newGreenStroke);
					}
				});

				let blueStrokeTitle = clientTextView("Blue (stroke): | " + newBlueStroke, true);
				let blueStrokeSlider = clientSeekBar();
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

				let dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setGravity(Gravity_.CENTER);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(settingsTitleLayout);
				dialogLayout.addView(dTitle);
				dialogLayout.addView(dScrollView);

				dialogLayout.addView(clientTextView(""));
				dialogLayout.addView(doneButton);
				dialogLayout.addView(cancelButton);

				let dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.setContentView(dialogLayout);
				dialog.setTitle(dialogTitle);
				dialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
					onDismiss: function() {
						VertexClientPE.saveMainSettings();
					}
				});
				dialog.show();
				let window = dialog.getWindow();
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
				if(defaultName == "Bypass") {
					modButtonView = bypassModButtonView;
				}
				if(defaultName == "Panic") {
					modButtonView = panicModButtonView; //this code is needed to prevent a bug <<
				}

				let dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setOrientation(1);
				dialogLayout.setBackgroundDrawable(backgroundSpecial());
				//dialogLayout.setPadding(0, 0, 0, 0);

				let modEditorTitleLayout = new LinearLayout_(CONTEXT);
				modEditorTitleLayout.setOrientation(LinearLayout_.HORIZONTAL);

				let currentName = VertexClientPE.getCustomModName(defaultName);

				let modEditorDialogEditText = clientEditText(currentName);
				modEditorDialogEditText.setInputType(InputType_.TYPE_TEXT_FLAG_NO_SUGGESTIONS);
				modEditorDialogEditText.setTextSize(20);
				modEditorDialogEditText.addTextChangedListener(new TextWatcher_() {
					afterTextChanged: function() {
						currentName = modEditorDialogEditText.getText().toString();
						modTitleView.setText(currentName);
						modButtonView.setText(currentName);
					}
				});

				modEditorTitleLayout.addView(modEditorDialogEditText);
				dialogLayout.addView(modEditorTitleLayout);

				let dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle(currentName);
				dialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
					onDismiss: function() {
						if(currentName.replaceAll(" ", "") == "") {
							currentName = defaultName;
							modTitleView.setText(currentName);
							modButtonView.setText(currentName);
							VertexClientPE.toast(i18n("You can't give a mod an empty name!"));
						} else {
							let lowerCasedCurrentName = currentName.toLowerCase();
							VertexClientPE.modules.forEach(function(element, index, array) {
								let elementDefaultName = element.name;
								if((lowerCasedCurrentName == VertexClientPE.getCustomModName(elementDefaultName).toLowerCase() || lowerCasedCurrentName == elementDefaultName.toLowerCase()) && defaultName != elementDefaultName) {
									currentName = defaultName;
									modTitleView.setText(currentName);
									modButtonView.setText(currentName);
									VertexClientPE.toast(i18n("There's already a mod with that (default or custom) name!"));
									return;
								}
							});
						}
						editor.putString("VertexClientPE.mods." + defaultName + ".name", currentName);
						editor.commit();
					}
				});
				dialog.show();
				let window = dialog.getWindow();
				let windowParams = window.getAttributes();
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

VertexClientPE.getSavedModState = function(defaultName) {
	return sharedPref.getBoolean("VertexClientPE.mods." + defaultName + ".state", false);
}

VertexClientPE.setSavedModState = function(defaultName, state) {
	editor.putBoolean("VertexClientPE.mods." + defaultName + ".state", state);
	editor.commit();
}

let modDialogShowing = false;

VertexClientPE.showModDialog = function(mod, btn) {
	if(modDialogShowing) {
		return;
	}
	modDialogShowing = true;
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				let modTitleLayout = new LinearLayout_(CONTEXT);
				modTitleLayout.setOrientation(LinearLayout_.HORIZONTAL);
				modTitleLayout.setGravity(Gravity_.CENTER_VERTICAL);
				let modTitle = clientTextView(VertexClientPE.getCustomModName(mod.name), true);
				modTitle.setTextSize(20);
				let modEditButton = new Button_(CONTEXT);
				modEditButton.setLayoutParams(new LinearLayout_.LayoutParams(64, 64));
				modEditButton.setBackgroundDrawable(CONTEXT.getResources().getDrawable(android.R.drawable.ic_menu_edit));
				modEditButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(v) {
						VertexClientPE.showModEditorDialog(mod.name, modTitle, btn);
					}
				});
				let modFavButton = new Button_(CONTEXT);
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
				let type = "Type: " + mod.type;
				let isExpMod = (mod.hasOwnProperty("isExpMod") && mod.isExpMod());
				let isSingleplayerOnlyMod = mod.singleplayerOnly;
				let isMultiplayerOnlyMod = mod.multiplayerOnly;
				if(isSingleplayerOnlyMod && isExpMod) {
					type += " (experimental, singleplayer only)";
				} else {
					if(isSingleplayerOnlyMod) {
						type += " (singleplayer only)";
					} else {
						if(isMultiplayerOnlyMod && isExpMod) {
							type += " (experimental, multiplayer only)";
						} else {
							if(isMultiplayerOnlyMod) {
								type += " (multiplayer only)";
							} else if(isExpMod) {
								type += " (experimental)";
							}
						}
					}
				}
				let modTypeText = clientTextView(type);
				let modCreditsText;
				if(mod.credits != undefined) {
					modCreditsText = clientTextView("Credits: " + mod.credits);
				}
				let modBatteryUsageText = clientTextView("Battery usage: \uD83D\uDD0B " + mod.batteryUsage + "\n");
				let modDescText = clientTextView("Description:\n" + mod.desc + "\n");
				let closeButton = clientButton("Close");
				closeButton.setPadding(0.5, closeButton.getPaddingTop(), 0.5, closeButton.getPaddingBottom());
				let dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(modTitleLayout);
				if(mod.source != null) {
					dialogLayout.addView(clientTextView("Source: " + mod.source + "\n"));
				}
				dialogLayout.addView(modTypeText);
				if(modCreditsText != null) {
					dialogLayout.addView(modCreditsText);
				}
				dialogLayout.addView(modBatteryUsageText);
				dialogLayout.addView(modDescText);

				let settingsLinearLayout = new ScrollView_(CONTEXT);
				settingsLinearLayout.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels, display.heightPixels / 3));
				let settingsScrollView = new ScrollView_(CONTEXT);

				if(mod.hasOwnProperty("getSettingsLayout")) {
					dialogLayout.addView(settingsLinearLayout);
					settingsScrollView.addView(mod.getSettingsLayout(false));
					settingsLinearLayout.addView(settingsScrollView);
					dialogLayout.addView(clientTextView(""));
				}

				let dialogExtraLayout = new LinearLayout_(CONTEXT);
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
					let toggleButton = clientButton("Toggle");
					toggleButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 3 - 10, display.heightPixels / 10));
					toggleButton.setTextColor(modButtonColorDisabled);
					if(mod.isStateMod()) {
						if(mod.state) {
							toggleButton.setText("Disable");
							if(bypassState && mod.hasOwnProperty("canBypassBypassMod") && !mod.canBypassBypassMod()) {
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
							if(mod.name == "Bypass" || !bypassState || !mod.hasOwnProperty("canBypassBypassMod") || (mod.hasOwnProperty("canBypassBypassMod") && mod.canBypassBypassMod()) || (mod.isStateMod() && mod.state)) {
								mod.onToggle();
							} else if(bypassState && !mod.canBypassBypassMod()) {
								if(mod.isStateMod() && !mod.state) {
									mod.state = true;
								} else if(!mod.isStateMod()) {
									VertexClientPE.toast(i18n("This mod is blocked by %0!", [VertexClientPE.getCustomModName("Bypass")]));
								}
							}
							if(mod.isStateMod()) {
								if(mod.state) {
									toggleButton.setText("Disable");
									if(bypassState && mod.hasOwnProperty("canBypassBypassMod") && !mod.canBypassBypassMod()) {
										toggleButton.setTextColor(modButtonColorBlocked);
										btn.setTextColor(modButtonColorBlocked);
									} else {
										toggleButton.setTextColor(modButtonColorEnabled);
										btn.setTextColor(modButtonColorEnabled);
									}
									if(fontSetting != "minecraft") {
										toggleButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
										btn.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
									}
								} else if(!mod.state) {
									toggleButton.setText("Enable");
									toggleButton.setTextColor(modButtonColorDisabled);
									btn.setTextColor(modButtonColorDisabled);
									if(themeSetting == "white") {
										if(modButtonColorDisabledSetting == "black") {
											if(fontSetting != "minecraft") {
												toggleButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.WHITE);
												btn.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.WHITE);
											}
										} else {
											if(fontSetting != "minecraft") {
												toggleButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
												btn.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
											}
										}
									}
								}
								VertexClientPE.setSavedModState(mod.name, mod.state);
							}
						}
					});
					dialogExtraLayoutRight.addView(toggleButton);
				} else {
					dialogExtraLayout.setGravity(Gravity_.CENTER);
					closeButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2, display.heightPixels / 10));
					dialogExtraLayout.addView(closeButton);
				}
				let dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle(mod.name);
				dialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
					onDismiss: function() {
						if(mod.hasOwnProperty("onModDialogDismiss")) {
							mod.onModDialogDismiss();
						}
						modDialogShowing = false;
					}
				});
				dialog.show();
				let window = dialog.getWindow();
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
				let songLayout = songBtn.getParent().getParent();
				let songTitleLayout = new LinearLayout_(CONTEXT);
				songTitleLayout.setOrientation(LinearLayout_.HORIZONTAL);
				let songTitle = clientTextView(song.title, true);
				songTitle.setTextSize(20);
				let songFavButton = new Button_(CONTEXT);
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
								let firstParent = songBtn.getParent();
								songLayout = firstParent.getParent();
								songLayout.removeView(firstParent);
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

				let songArtistText = clientTextView("Artist: " + song.artist);
				let songGenreText = clientTextView("Genre: " + song.genre + "\n");
				let closeButton = clientButton("Close");
				closeButton.setPadding(0.5, closeButton.getPaddingTop(), 0.5, closeButton.getPaddingBottom());
				closeButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						songDialog.dismiss();
					}
				});
				let dialogLayout = new LinearLayout_(CONTEXT);
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

				let settingsLinearLayout = new ScrollView_(CONTEXT);
				settingsLinearLayout.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels, display.heightPixels / 3));
				let settingsScrollView = new ScrollView_(CONTEXT);

				let dialogExtraLayout = new LinearLayout_(CONTEXT);
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
				let downloadButton = clientButton("Download");
				downloadButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
				downloadButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						ModPE.goToURL(song.url);
					}
				});
				dialogExtraLayoutRight.addView(downloadButton);

				songDialog = new Dialog_(CONTEXT);
				songDialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				songDialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				songDialog.setContentView(dialogLayout);
				songDialog.setTitle(song.title);
				songDialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
					onDismiss: function() {
						songDialog = null;
					}
				});
				songDialog.show();
				let window = songDialog.getWindow();
				window.setLayout(display.widthPixels, display.heightPixels);
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
				let tileDropDownLayout = new LinearLayout_(CONTEXT);
				tileDropDownLayout.setPadding(10, 10, 10, 10);
				tileDropDownLayout.setOrientation(1);
				tileDropDownLayout.setGravity(android.view.Gravity.CENTER);

				let currentName = sharedPref.getString("VertexClientPE.tiles." + defaultName + ".name", defaultName);
				let currentColor = sharedPref.getString("VertexClientPE.tiles." + defaultName + ".color", defaultColor);
				let currentUseLightColor = sharedPref.getBoolean("VertexClientPE.tiles." + defaultName + ".useLightColor", defaultUseLightColor);

				let tileDropDownEditText = clientEditText(currentName, "diff");
				tileDropDownEditText.setInputType(InputType_.TYPE_TEXT_FLAG_NO_SUGGESTIONS);
				tileDropDownEditText.addTextChangedListener(new TextWatcher_() {
					afterTextChanged: function() {
						currentName = tileDropDownEditText.getText();
						tileView.setText(currentName);
						editor.putString("VertexClientPE.tiles." + defaultName + ".name", currentName);
						editor.commit();
					}
				});

				let tileFavButton = new clientButton("Favorite");
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

				let tileDropDownCurrentColorButton = clientButton(capitalizeColorString(currentColor));
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
						tileDropDownUseLightColorCheckBox.setEnabled(!(currentColor != "green" && currentColor != "red" && currentColor != "blue"));
						VertexClientPE.setupButton(tileView, currentName, currentColor, false, currentUseLightColor, "tile", 0.1);
					}
				}));

				let tileDropDownUseLightColorCheckBox = clientCheckBox("Lighter color", "diff");
				tileDropDownUseLightColorCheckBox.setChecked(currentUseLightColor);
				tileDropDownUseLightColorCheckBox.setEnabled(!(currentColor != "green" && currentColor != "red" && currentColor != "blue"));
				tileDropDownUseLightColorCheckBox.setOnClickListener(new View_.OnClickListener() {
					onClick: function(v) {
						currentUseLightColor = v.isChecked();
						editor.putBoolean("VertexClientPE.tiles." + defaultName + ".useLightColor", currentUseLightColor);
						editor.commit();
						VertexClientPE.setupButton(tileView, currentName, currentColor, false, currentUseLightColor, "tile", 0.1);
					}
				});

				let tileDropDownResetButton = clientButton("Reset");
				tileDropDownResetButton.setCompoundDrawablesWithIntrinsicBounds(android.R.drawable.stat_notify_sync, 0, 0, 0);
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
						tileDropDownUseLightColorCheckBox.setEnabled(!(currentColor != "green" && currentColor != "red" && currentColor != "blue"));
						VertexClientPE.setupButton(tileView, currentName, currentColor, false, currentUseLightColor, "tile", 0.1);
					}
				});

				tileDropDownLayout.addView(tileDropDownEditText);
				if(tile.source) {
					tileDropDownLayout.addView(clientTextView("Source: " + tile.source));
				}
				tileDropDownLayout.addView(tileFavButton);
				tileDropDownLayout.addView(tileDropDownCurrentColorButton);
				tileDropDownLayout.addView(tileDropDownUseLightColorCheckBox);
				tileDropDownLayout.addView(tileDropDownResetButton);

				let tileDropDown = new PopupWindow_(tileDropDownLayout, LinearLayout_.LayoutParams.WRAP_CONTENT, LinearLayout_.LayoutParams.WRAP_CONTENT, true);
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

				tileDropDown.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.CENTER | Gravity_.CENTER, 0, 0);
			}
		});
	} catch(e) {
		print("@" + e.lineNumber + ": " + e);
	}
}

VertexClientPE.showItemGiverDialog = function() { //TODO: make faster, less layouts
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				let itemGiverTitle = clientTextView("ItemGiver", true);
				itemGiverTitle.setTextSize(25);
				let closeButton = clientButton("Close");
				closeButton.setPadding(0.5, closeButton.getPaddingTop(), 0.5, closeButton.getPaddingBottom());
				closeButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
				let dialogLayoutBase = new LinearLayout_(CONTEXT);
				dialogLayoutBase.setOrientation(1);
				dialogLayoutBase.setPadding(10, 10, 10, 10);
				let dialogLayoutBody = new LinearLayout_(CONTEXT);
				dialogLayoutBody.setOrientation(LinearLayout_.HORIZONTAL);
				let dialogLayoutBodyLeftWrap = new LinearLayout_(CONTEXT);
				dialogLayoutBodyLeftWrap.setOrientation(1);
				dialogLayoutBodyLeftWrap.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels - display.widthPixels / 3 - 10, LinearLayout_.LayoutParams.WRAP_CONTENT));
				dialogLayoutBodyLeftWrap.setPadding(0, 0, dip2px(1), 0);
				let dialogLayoutBodyLeftScroll = new ScrollView_(CONTEXT);
				let dialogLayoutBodyRightWrap = new LinearLayout_(CONTEXT);
				dialogLayoutBodyRightWrap.setOrientation(1);
				dialogLayoutBodyRightWrap.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3 - 10, LinearLayout_.LayoutParams.WRAP_CONTENT));
				dialogLayoutBodyRightWrap.setPadding(dip2px(1), 0, 0, 0);
				let dialogLayoutBodyRightScroll = new ScrollView_(CONTEXT);
				let dialogTableLayout = new TableLayout_(CONTEXT);
				let dialogTableRow;
				let itemNameText = clientTextView("Name: Unknown");
				let itemIdText = clientTextView("ID:");
				let itemIdInput = clientEditText();
				itemIdInput.setInputType(InputType_.TYPE_CLASS_NUMBER);
				itemIdInput.setHint("ID (0-4096)");
				let itemAmountText = clientTextView("Amount:");
				let itemAmountInput = clientEditText();
				itemAmountInput.setInputType(InputType_.TYPE_CLASS_NUMBER);
				itemAmountInput.setHint("Amount (number)");
				let itemDataText = clientTextView("Data:");
				let itemDataInput = clientEditText();
				itemDataInput.setInputType(InputType_.TYPE_CLASS_NUMBER);
				itemDataInput.setHint("Data (number)");
				itemIdInput.addTextChangedListener(new TextWatcher_() {
					onTextChanged: function() {
						let itemId = itemIdInput.getText();
						let itemName;
						if(Item.isValidItem(itemId)) {
							if(Item.getName(itemId) == null) {
								itemName = "Unknown";
							} else {
								itemName = Item.getName(itemId);
							}
							itemNameText.setText("Name: " + itemName);
						} else {
							itemNameText.setText("Name: Unknown");
						}
					}
				});

				let itemGiveButton = clientButton("Give");
				itemGiveButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(viewArg) {
						let itemId = itemIdInput.getText();
						let amount = itemAmountInput.getText();
						let data = itemDataInput.getText();
						if(Item.isValidItem(itemId)) {
							Player.addItemInventory(itemId, amount, data);
							VertexClientPE.toast(i18n("Successfully added item with id %0.", [itemId]));
						} else {
							VertexClientPE.toast(i18n("Item doesn't exist!"));
						}
					}
				});

				let dialogRightLayout = new LinearLayout_(CONTEXT);
				dialogRightLayout.setOrientation(1);

				dialogRightLayout.addView(itemNameText);
				dialogRightLayout.addView(itemIdText);
				dialogRightLayout.addView(itemIdInput);
				dialogRightLayout.addView(itemAmountText);
				dialogRightLayout.addView(itemAmountInput);
				dialogRightLayout.addView(itemDataText);
				dialogRightLayout.addView(itemDataInput);
				dialogRightLayout.addView(itemGiveButton);
				dialogRightLayout.addView(closeButton);
				dialogLayoutBase.setBackgroundDrawable(backgroundGradient());
				dialogLayoutBase.addView(itemGiverTitle);

				if(itemGiverModeSetting == "advanced") {
					dialogLayoutBodyLeftScroll.addView(dialogTableLayout);
					dialogLayoutBodyLeftWrap.addView(dialogLayoutBodyLeftScroll);
					dialogLayoutBody.addView(dialogLayoutBodyLeftWrap);
				} else {
					dialogLayoutBase.setGravity(Gravity_.CENTER);
				}

				dialogLayoutBodyRightScroll.addView(dialogRightLayout);
				dialogLayoutBodyRightWrap.addView(dialogLayoutBodyRightScroll);
				dialogLayoutBody.addView(dialogLayoutBodyRightWrap);
				dialogLayoutBase.addView(dialogLayoutBody);

				let dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayoutBase);
				dialog.setTitle("ItemGiver");
				dialog.show();

				if(itemGiverModeSetting == "advanced") {
					let window = dialog.getWindow();
					window.setLayout(display.widthPixels, display.heightPixels);

					itemGiverItems.forEach(function(element, index, array) {
						let tempButton = clientButton(Item.getName(element.toString()));
						tempButton.setSingleLine(true);
						tempButton.setLayoutParams(new TableRow_.LayoutParams((display.widthPixels - display.widthPixels / 3 - 10 - dip2px(1)) / 2, LinearLayout_.LayoutParams.WRAP_CONTENT));
						tempButton.setPadding(0, 0, 0, 0);
						tempButton.setOnClickListener(new View_.OnClickListener() {
							onClick: function(viewArg) {
								itemIdInput.setText(element.toString());
							}
						});
						if(index % 2 == 1) {
							if(!dialogTableRow) {
								dialogTableRow = new TableRow_(CONTEXT);
							}
							dialogTableRow.addView(tempButton);
							dialogTableLayout.addView(dialogTableRow);
							dialogTableRow = null;
						} else {
							dialogTableRow = new TableRow_(CONTEXT);
							dialogTableRow.addView(tempButton);
						}
						tempButton = null;
					});
					if(dialogTableRow != null) {
						dialogTableLayout.addView(dialogTableRow);
					}
				}
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

const enchantItArray = [["Aqua Affinity", Enchantment.AQUA_AFFINITY], ["Bane of Arthropods", Enchantment.BANE_OF_ARTHROPODS], ["Blast Protection", Enchantment.BLAST_PROTECTION], ["Depth Strider", Enchantment.DEPTH_STRIDER], ["Efficiency", Enchantment.EFFICIENCY], ["Feather Falling", Enchantment.FEATHER_FALLING], ["Fire Aspect", Enchantment.FIRE_ASPECT], ["Fire Protection", Enchantment.FIRE_PROTECTION], ["Flame", Enchantment.FLAME], ["Fortune", Enchantment.FORTUNE], ["Infinity", Enchantment.INFINITY], ["Knockback", Enchantment.KNOCKBACK], ["Looting", Enchantment.LOOTING], ["Luck of the Sea", Enchantment.LUCK_OF_THE_SEA], ["Lure", Enchantment.LURE], ["Power", Enchantment.POWER], ["Projectile Protection", Enchantment.PROJECTILE_PROTECTION], ["Protection", Enchantment.PROTECTION], ["Punch", Enchantment.PUNCH], ["Respiration", Enchantment.RESPIRATION], ["Sharpness", Enchantment.SHARPNESS], ["Silk Touch", Enchantment.SILK_TOUCH], ["Smite", Enchantment.SMITE], ["Thorns", Enchantment.THORNS], ["Unbreaking", Enchantment.UNBREAKING]];

let selectedEnchantment = ["None", null];
VertexClientPE.showEnchantItDialog = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				let enchantItTitle = clientTextView("EnchantIt", true);
				enchantItTitle.setTextSize(25);
				let closeButton = clientButton("Close");
				closeButton.setPadding(0.5, closeButton.getPaddingTop(), 0.5, closeButton.getPaddingBottom());
				let dialogLayoutBase = new LinearLayout_(CONTEXT);
				dialogLayoutBase.setOrientation(1);
				dialogLayoutBase.setPadding(10, 10, 10, 10);
				let dialogLayoutBody = new LinearLayout_(CONTEXT);
				dialogLayoutBody.setOrientation(LinearLayout_.HORIZONTAL);
				let dialogLayoutBodyLeftWrap = new LinearLayout_(CONTEXT);
				dialogLayoutBodyLeftWrap.setOrientation(1);
				dialogLayoutBodyLeftWrap.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels - display.widthPixels / 3 - 10, LinearLayout_.LayoutParams.WRAP_CONTENT));
				dialogLayoutBodyLeftWrap.setPadding(0, 0, dip2px(1), 0);
				let dialogLayoutBodyLeftScroll = new ScrollView_(CONTEXT);
				let dialogLayoutBodyRightWrap = new LinearLayout_(CONTEXT);
				dialogLayoutBodyRightWrap.setOrientation(1);
				dialogLayoutBodyRightWrap.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3 - 10, LinearLayout_.LayoutParams.WRAP_CONTENT));
				dialogLayoutBodyRightWrap.setPadding(dip2px(1), 0, 0, 0);
				let dialogLayoutBodyRightScroll = new ScrollView_(CONTEXT);
				let dialogTableLayout = new TableLayout_(CONTEXT);
				let dialogTableRow;
				let enchantmentNameText = clientTextView("Enchantment: " + selectedEnchantment[0]);
				let slotText = clientTextView("Slot:");
				let slotInput = clientEditText();
				slotInput.setInputType(InputType_.TYPE_CLASS_NUMBER);
				slotInput.setHint("Slot (1-9)");
				let levelText = clientTextView("Level:");
				let levelInput = clientEditText();
				levelInput.setInputType(InputType_.TYPE_CLASS_NUMBER);
				levelInput.setHint("Level (number)");

				let enchantmentAddButton = clientButton("Add enchantment");
				enchantmentAddButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(viewArg) {
						let slot = slotInput.getText();
						let level = levelInput.getText();
						if(selectedEnchantment[0] == "None") {
							VertexClientPE.toast("No enchantment selected!");
							return;
						}
						if(slot < 1) {
							VertexClientPE.toast("Slot too low!");
							return;
						} else if(slot > 9) {
							VertexClientPE.toast("Slot too high!");
							return;
						}
						if(level < 1) {
							VertexClientPE.toast("Level too low!");
							return;
						}
						if(Player.enchant(slot - 1, selectedEnchantment[1], level)) {
							VertexClientPE.toast("Successfully added " + selectedEnchantment[0] + " (level " + level + ") enchantment to the item in slot " + slot + "!");
						} else {
							VertexClientPE.toast("Failed to add " + selectedEnchantment[0] + " (level " + level + ") enchantment to the item in slot " + slot + "!");
						}
					}
				});

				let dialogRightLayout = new LinearLayout_(CONTEXT);
				dialogRightLayout.setOrientation(1);

				dialogRightLayout.addView(enchantmentNameText);
				dialogRightLayout.addView(slotText);
				dialogRightLayout.addView(slotInput);
				dialogRightLayout.addView(levelText);
				dialogRightLayout.addView(levelInput);
				dialogRightLayout.addView(enchantmentAddButton);
				dialogRightLayout.addView(closeButton);
				dialogLayoutBase.setBackgroundDrawable(backgroundGradient());
				dialogLayoutBase.addView(enchantItTitle);
				dialogLayoutBodyLeftScroll.addView(dialogTableLayout);
				dialogLayoutBodyRightScroll.addView(dialogRightLayout);
				dialogLayoutBodyLeftWrap.addView(dialogLayoutBodyLeftScroll);
				dialogLayoutBodyRightWrap.addView(dialogLayoutBodyRightScroll);
				dialogLayoutBody.addView(dialogLayoutBodyLeftWrap);
				dialogLayoutBody.addView(dialogLayoutBodyRightWrap);
				dialogLayoutBase.addView(dialogLayoutBody);

				let dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayoutBase);
				dialog.setTitle("EnchantIt");
				dialog.show();
				let window = dialog.getWindow();
				window.setLayout(display.widthPixels, display.heightPixels);
				closeButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});

				enchantItArray.forEach(function(element, index, array) {
					let tempButton = clientButton(element[0].toString());
					tempButton.setSingleLine(true);
					tempButton.setLayoutParams(new TableRow_.LayoutParams((display.widthPixels - display.widthPixels / 3 - 10 - dip2px(1)) / 2, LinearLayout_.LayoutParams.WRAP_CONTENT));
					tempButton.setPadding(0, 0, 0, 0);
					tempButton.setOnClickListener(new View_.OnClickListener() {
						onClick: function(viewArg) {
							selectedEnchantment = element;
							enchantmentNameText.setText("Enchantment: " + selectedEnchantment[0].toString());
						}
					});
					if(index % 2 == 1) {
						if(!dialogTableRow) {
							dialogTableRow = new TableRow_(CONTEXT);
						}
						dialogTableRow.addView(tempButton);
						dialogTableLayout.addView(dialogTableRow);
						dialogTableRow = null;
					} else {
						dialogTableRow = new TableRow_(CONTEXT);
						dialogTableRow.addView(tempButton);
					}
					tempButton = null;
				});
				if(dialogTableRow != null) {
					dialogTableLayout.addView(dialogTableRow);
				}
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

const levitation = 25;
const effectGiverArray = [["Absorption", MobEffect.absorption], ["Blindness", MobEffect.blindness], ["Nausea", MobEffect.confusion], ["Strength", MobEffect.damageBoost], ["Resistance", MobEffect.damageResistance], ["Mining Fatigue", MobEffect.digSlowdown], ["Haste", MobEffect.digSpeed], ["Fire Resistance", MobEffect.fireResistance], ["Instant Damage (Harm)", MobEffect.harm], ["Instant Health (Heal)", MobEffect.heal], ["Health Boost", MobEffect.healthBoost], ["Hunger", MobEffect.hunger], ["Invisibility", MobEffect.invisibility], ["Jump Boost", MobEffect.jump], /*["Levitation", levitation], */["Slowness", MobEffect.movementSlowdown], ["Speed", MobEffect.movementSpeed], ["Night Vision", MobEffect.nightVision], ["Poison", MobEffect.poison], ["Regeneration", MobEffect.regeneration], ["Saturation", MobEffect.saturation], ["Water Breathing", MobEffect.waterBreathing], ["Weakness", MobEffect.weakness], ["Wither", MobEffect.wither]]; //todo: levitation

let selectedEffect = ["None", null];
VertexClientPE.showEffectGiverDialog = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				let effectGiverTitle = clientTextView("EffectGiver", true);
				effectGiverTitle.setTextSize(25);
				let closeButton = clientButton("Close");
				closeButton.setPadding(0.5, closeButton.getPaddingTop(), 0.5, closeButton.getPaddingBottom());
				let dialogLayoutBase = new LinearLayout_(CONTEXT);
				dialogLayoutBase.setOrientation(1);
				dialogLayoutBase.setPadding(10, 10, 10, 10);
				let dialogLayoutBody = new LinearLayout_(CONTEXT);
				dialogLayoutBody.setOrientation(LinearLayout_.HORIZONTAL);
				let dialogLayoutBodyLeftWrap = new LinearLayout_(CONTEXT);
				dialogLayoutBodyLeftWrap.setOrientation(1);
				dialogLayoutBodyLeftWrap.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels - display.widthPixels / 3 - 10, LinearLayout_.LayoutParams.WRAP_CONTENT));
				dialogLayoutBodyLeftWrap.setPadding(0, 0, dip2px(1), 0);
				let dialogLayoutBodyLeftScroll = new ScrollView_(CONTEXT);
				let dialogLayoutBodyRightWrap = new LinearLayout_(CONTEXT);
				dialogLayoutBodyRightWrap.setOrientation(1);
				dialogLayoutBodyRightWrap.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3 - 10, LinearLayout_.LayoutParams.WRAP_CONTENT));
				dialogLayoutBodyRightWrap.setPadding(dip2px(1), 0, 0, 0);
				let dialogLayoutBodyRightScroll = new ScrollView_(CONTEXT);
				let dialogTableLayout = new TableLayout_(CONTEXT);
				let dialogTableRow;
				let effectNameText = clientTextView("Effect: " + selectedEffect[0]);
				let durationText = clientTextView("Duration:");
				let durationInput = clientEditText();
				durationInput.setInputType(InputType_.TYPE_CLASS_NUMBER);
				durationInput.setHint("Duration (seconds)");
				let amplificationText = clientTextView("Amplification:");
				let amplificationInput = clientEditText();
				amplificationInput.setInputType(InputType_.TYPE_CLASS_NUMBER);
				amplificationInput.setHint("Amplification (1-256)");
				let showParticlesCheckBox = clientCheckBox("Show particles");

				let effectAddButton = clientButton("Add effect");
				effectAddButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(viewArg) {
						let duration = parseInt(durationInput.getText()) * 20;
						let amplification = parseInt(amplificationInput.getText());
						let showParticles = showParticlesCheckBox.isChecked();
						if(selectedEffect[0] == "None") {
							VertexClientPE.toast("No effect selected!");
							return;
						}
						if(duration == "") {
							VertexClientPE.toast("No duration chosen!");
							return;
						}
						if(amplification == "") {
							VertexClientPE.toast("No amplification chosen!");
							return;
						}
						if(duration < 1) {
							VertexClientPE.toast("Duration too low!");
							return;
						}
						if(amplification < 1) {
							VertexClientPE.toast("Amplification too low!");
							return;
						}
						if(amplification > 256) {
							VertexClientPE.toast("Amplification too high!");
							return;
						}
						Entity.addEffect(getPlayerEnt(), selectedEffect[1], duration, amplification - 1, false, showParticles);
						VertexClientPE.toast("Successfully given " + selectedEffect[0] + " (amplification: " + amplification + ", duration: " + duration + " ticks) effect!");
						//VertexClientPE.toast("Failed to give " + selectedEffect[0] + " (amplification: " + amplification + ", duration: " + duration + " ticks) effect!");
					}
				});

				let removeAllEffectsButton = clientButton("Remove all effects");
				removeAllEffectsButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(viewArg) {
						Entity.removeAllEffects(getPlayerEnt());
						VertexClientPE.toast("Successfully removed all effects!");
					}
				});

				let dialogRightLayout = new LinearLayout_(CONTEXT);
				dialogRightLayout.setOrientation(1);

				dialogRightLayout.addView(effectNameText);
				dialogRightLayout.addView(durationText);
				dialogRightLayout.addView(durationInput);
				dialogRightLayout.addView(amplificationText);
				dialogRightLayout.addView(amplificationInput);
				//dialogRightLayout.addView(showParticlesCheckBox);
				dialogRightLayout.addView(effectAddButton);
				dialogRightLayout.addView(removeAllEffectsButton);
				dialogRightLayout.addView(closeButton);
				dialogLayoutBase.setBackgroundDrawable(backgroundGradient());
				dialogLayoutBase.addView(effectGiverTitle);
				dialogLayoutBodyLeftScroll.addView(dialogTableLayout);
				dialogLayoutBodyRightScroll.addView(dialogRightLayout);
				dialogLayoutBodyLeftWrap.addView(dialogLayoutBodyLeftScroll);
				dialogLayoutBodyRightWrap.addView(dialogLayoutBodyRightScroll);
				dialogLayoutBody.addView(dialogLayoutBodyLeftWrap);
				dialogLayoutBody.addView(dialogLayoutBodyRightWrap);
				dialogLayoutBase.addView(dialogLayoutBody);

				let dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayoutBase);
				dialog.setTitle("EffectGiver");
				dialog.show();
				let window = dialog.getWindow();
				window.setLayout(display.widthPixels, display.heightPixels);
				closeButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});

				effectGiverArray.forEach(function(element, index, array) {
					let tempButton = clientButton(element[0].toString());
					tempButton.setSingleLine(true);
					tempButton.setLayoutParams(new TableRow_.LayoutParams((display.widthPixels - display.widthPixels / 3 - 10 - dip2px(1)) / 2, LinearLayout_.LayoutParams.WRAP_CONTENT));
					tempButton.setPadding(0, 0, 0, 0);
					tempButton.setOnClickListener(new View_.OnClickListener() {
						onClick: function(viewArg) {
							selectedEffect = element;
							effectNameText.setText("Effect: " + selectedEffect[0].toString());
						}
					});
					if(index % 2 == 1) {
						if(!dialogTableRow) {
							dialogTableRow = new TableRow_(CONTEXT);
						}
						dialogTableRow.addView(tempButton);
						dialogTableLayout.addView(dialogTableRow);
						dialogTableRow = null;
					} else {
						dialogTableRow = new TableRow_(CONTEXT);
						dialogTableRow.addView(tempButton);
					}
					tempButton = null;
				});
				if(dialogTableRow != null) {
					dialogTableLayout.addView(dialogTableRow);
				}
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

let teleportDialog;

VertexClientPE.showTeleportDialog = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				let teleportTitle = clientTextView("Teleport", true);
				teleportTitle.setTextSize(25);
				let closeButton = clientButton("Close");
				closeButton.setPadding(0.5, closeButton.getPaddingTop(), 0.5, closeButton.getPaddingBottom());
				let dialogLayoutBase = new LinearLayout_(CONTEXT);
				dialogLayoutBase.setOrientation(1);
				dialogLayoutBase.setPadding(10, 10, 10, 10);
				let dialogLayoutBody = new LinearLayout_(CONTEXT);
				dialogLayoutBody.setOrientation(LinearLayout_.HORIZONTAL);
				let dialogLayoutBodyLeftWrap = new LinearLayout_(CONTEXT);
				dialogLayoutBodyLeftWrap.setOrientation(1);
				dialogLayoutBodyLeftWrap.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels - display.widthPixels / 3 - 10, LinearLayout_.LayoutParams.WRAP_CONTENT));
				dialogLayoutBodyLeftWrap.setPadding(0, 0, dip2px(1), 0);
				let dialogLayoutBodyLeftScroll = new ScrollView_(CONTEXT);
				let dialogLayoutBodyRightWrap = new LinearLayout_(CONTEXT);
				dialogLayoutBodyRightWrap.setOrientation(1);
				dialogLayoutBodyRightWrap.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3 - 10, LinearLayout_.LayoutParams.WRAP_CONTENT));
				dialogLayoutBodyRightWrap.setPadding(dip2px(1), 0, 0, 0);
				let dialogLayoutBodyRightScroll = new ScrollView_(CONTEXT);
				let dialogTableLayout = new TableLayout_(CONTEXT);
				let dialogTableRow;
				let tempButton;
				let teleportNameText = clientTextView("Teleport location: Unknown");
				let teleportXText = clientTextView("X:");
				let teleportXInput = clientEditText();
				teleportXInput.setInputType(InputType_.TYPE_CLASS_NUMBER | InputType_.TYPE_NUMBER_FLAG_SIGNED);
				teleportXInput.setHint("X (number)");
				let teleportYText = clientTextView("Y:");
				let teleportYInput = clientEditText();
				teleportYInput.setInputType(InputType_.TYPE_CLASS_NUMBER | InputType_.TYPE_NUMBER_FLAG_SIGNED);
				teleportYInput.setHint("Y (number)");
				let teleportZText = clientTextView("Z:");
				let teleportZInput = clientEditText();
				teleportZInput.setInputType(InputType_.TYPE_CLASS_NUMBER | InputType_.TYPE_NUMBER_FLAG_SIGNED);
				teleportZInput.setHint("Z (number)");

				teleportXInput.addTextChangedListener(new TextWatcher_() {
					onTextChanged: function() {
						let teleportName = "Unknown";
						let teleportX = teleportXInput.getText();
						let teleportY = teleportYInput.getText();
						let teleportZ = teleportZInput.getText();
						if(teleportX == VertexClientPE.currentWorld.deathX && teleportY == VertexClientPE.currentWorld.deathY && teleportZ == VertexClientPE.currentWorld.deathZ) {
							teleportName = "Last death";
						} else if(VertexClientPE.currentWorld.waypoints.length != -1) {
							VertexClientPE.currentWorld.waypoints.forEach(function(element, index, array) {
								if(teleportX == element.x && teleportY == element.y && teleportZ == element.z) {
									teleportName = element.name;
									return;
								}
							});
						}
						teleportNameText.setText("Teleport location: " + teleportName);
					}
				});

				teleportYInput.addTextChangedListener(new TextWatcher_() {
					onTextChanged: function() {
						let teleportName = "Unknown";
						let teleportX = teleportXInput.getText();
						let teleportY = teleportYInput.getText();
						let teleportZ = teleportZInput.getText();
						if(teleportX == VertexClientPE.currentWorld.deathX && teleportY == VertexClientPE.currentWorld.deathY && teleportZ == VertexClientPE.currentWorld.deathZ) {
							teleportName = "Last death";
						} else if(VertexClientPE.currentWorld.waypoints.length != -1) {
							VertexClientPE.currentWorld.waypoints.forEach(function(element, index, array) {
								if(teleportX == element.x && teleportY == element.y && teleportZ == element.z) {
									teleportName = element.name;
									return;
								}
							});
						}
						teleportNameText.setText("Teleport location: " + teleportName);
					}
				});

				teleportZInput.addTextChangedListener(new TextWatcher_() {
					onTextChanged: function() {
						let teleportName = "Unknown";
						let teleportX = teleportXInput.getText();
						let teleportY = teleportYInput.getText();
						let teleportZ = teleportZInput.getText();
						if(teleportX == VertexClientPE.currentWorld.deathX && teleportY == VertexClientPE.currentWorld.deathY && teleportZ == VertexClientPE.currentWorld.deathZ) {
							teleportName = "Last death";
						} else if(VertexClientPE.currentWorld.waypoints.length != -1) {
							VertexClientPE.currentWorld.waypoints.forEach(function(element, index, array) {
								if(teleportX == element.x && teleportY == element.y && teleportZ == element.z) {
									teleportName = element.name;
									return;
								}
							});
						}
						teleportNameText.setText("Teleport location: " + teleportName);
					}
				});

				let teleportButton = clientButton("Teleport");
				teleportButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(viewArg) {
						let tpX = teleportXInput.getText();
						let tpY = teleportYInput.getText();
						let tpZ = teleportZInput.getText();
						if(tpX != null && tpY != null && tpZ != null && tpX != "" && tpY != "" && tpZ != "" && !isNaN(tpX) && !isNaN(tpY) && !isNaN(tpZ)) {
							Entity.setPosition(getPlayerEnt(), tpX,  tpY,  tpZ);
							VertexClientPE.toast("Successfully teleported player to " + tpX + ", " + tpY + ", " + tpZ);
						} else {
							VertexClientPE.toast("Please enter valid coordinates!");
						}
					}
				});
				
				let addWaypointButton = clientButton("Add waypoint");
				addWaypointButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(viewArg) {
						let tpX = teleportXInput.getText();
						let tpY = teleportYInput.getText();
						let tpZ = teleportZInput.getText();
						let showError = false;
						VertexClientPE.currentWorld.waypoints.forEach(function(element, index, array) {
							if(tpX == element.x && tpY == element.y && tpZ == element.z) {
								showError = true;
							}
						});
						if(!showError && tpX != null && tpY != null && tpZ != null && tpX != "" && tpY != "" && tpZ != "" && !isNaN(tpX) && !isNaN(tpY) && !isNaN(tpZ)) {
							VertexClientPE.showAddWaypointDialog(tpX, tpY, tpZ);
						} else {
							if(showError) {
								VertexClientPE.toast("There's already a waypoint with the given coordinates!");
							} else {
								VertexClientPE.toast("Please enter valid coordinates!");
							}
						}
					}
				});

				let deathCoordsAvailable = VertexClientPE.loadDeathCoords();
				
				let waypointsIndex = 0;
				let deathTeleportButton;
				if(deathCoordsAvailable) {
					deathTeleportButton = clientButton("Last death");
					deathTeleportButton.setTextColor(Color_.RED);
					deathTeleportButton.setLayoutParams(new TableRow_.LayoutParams((display.widthPixels - display.widthPixels / 3 - 10 - dip2px(1)) / 2, LinearLayout_.LayoutParams.WRAP_CONTENT));
					deathTeleportButton.setOnClickListener(new View_.OnClickListener() {
						onClick: function(viewArg) {
							teleportXInput.setText(VertexClientPE.currentWorld.deathX.toString());
							teleportYInput.setText(VertexClientPE.currentWorld.deathY.toString());
							teleportZInput.setText(VertexClientPE.currentWorld.deathZ.toString());
						}
					});
					waypointsIndex = 1;
				}

				if(VertexClientPE.currentWorld.waypoints.length != -1) {
					VertexClientPE.currentWorld.waypoints.forEach(function(element, index, array) {
						let tempButton = clientButton(element.name);
						tempButton.setSingleLine(true);
						tempButton.setLayoutParams(new TableRow_.LayoutParams((display.widthPixels - display.widthPixels / 3 - 10 - dip2px(1)) / 2, LinearLayout_.LayoutParams.WRAP_CONTENT));
						tempButton.setPadding(0, 0, 0, 0);
						tempButton.setOnClickListener(new View_.OnClickListener() {
							onClick: function(viewArg) {
								teleportXInput.setText(element.x);
								teleportYInput.setText(element.y);
								teleportZInput.setText(element.z);
							}
						});
						if(waypointsIndex % 2 == 1) {
							if(!dialogTableRow) {
								dialogTableRow = new TableRow_(CONTEXT);
							}
							if(deathCoordsAvailable && waypointsIndex == 1) {
								dialogTableRow.addView(deathTeleportButton);
							}
							dialogTableRow.addView(tempButton);
							dialogTableLayout.addView(dialogTableRow);
							dialogTableRow = null;
						} else {
							dialogTableRow = new TableRow_(CONTEXT);
							dialogTableRow.addView(tempButton);
						}
						tempButton = null;
						waypointsIndex++;
					});
					if(dialogTableRow != null) {
						dialogTableLayout.addView(dialogTableRow);
					}
				} else if(deathCoordsAvailable) {
					dialogTableRow = new TableRow_(CONTEXT);
					dialogTableRow.addView(deathTeleportButton);
					dialogTableLayout.addView(dialogTableRow);
				}

				let dialogRightLayout = new LinearLayout_(CONTEXT);
				dialogRightLayout.setOrientation(1);

				dialogRightLayout.addView(teleportNameText);
				dialogRightLayout.addView(teleportXText);
				dialogRightLayout.addView(teleportXInput);
				dialogRightLayout.addView(teleportYText);
				dialogRightLayout.addView(teleportYInput);
				dialogRightLayout.addView(teleportZText);
				dialogRightLayout.addView(teleportZInput);
				dialogRightLayout.addView(teleportButton);
				dialogRightLayout.addView(addWaypointButton);
				dialogRightLayout.addView(closeButton);
				dialogLayoutBase.setBackgroundDrawable(backgroundGradient());
				dialogLayoutBase.addView(teleportTitle);
				dialogLayoutBodyLeftScroll.addView(dialogTableLayout);
				dialogLayoutBodyRightScroll.addView(dialogRightLayout);
				dialogLayoutBodyLeftWrap.addView(dialogLayoutBodyLeftScroll);
				dialogLayoutBodyRightWrap.addView(dialogLayoutBodyRightScroll);
				dialogLayoutBody.addView(dialogLayoutBodyLeftWrap);
				dialogLayoutBody.addView(dialogLayoutBodyRightWrap);
				dialogLayoutBase.addView(dialogLayoutBody);
				teleportDialog = new Dialog_(CONTEXT);
				teleportDialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				teleportDialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				teleportDialog.setContentView(dialogLayoutBase);
				teleportDialog.setTitle("Teleport");
				teleportDialog.show();
				let window = teleportDialog.getWindow();
				window.setLayout(display.widthPixels, display.heightPixels);
				closeButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						teleportDialog.dismiss();
					}
				});
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

VertexClientPE.showAddWaypointDialog = function(x, y, z) {
	let addWaypointTitle = clientTextView("Add waypoint", true);
	let coordsText = clientTextView("X: " + x + " Y: " + y + " Z: " + z);
	let waypointNameInput = clientEditText();
	waypointNameInput.setSingleLine(true);
	waypointNameInput.setHint("Enter a name");
	let okButton = clientButton("Ok");
	let cancelButton = clientButton("Cancel");
	let dialogLayout = new LinearLayout_(CONTEXT);
	dialogLayout.setBackgroundDrawable(backgroundGradient());
	dialogLayout.setOrientation(LinearLayout_.VERTICAL);
	dialogLayout.setPadding(10, 10, 10, 10);
	dialogLayout.addView(addWaypointTitle);
	dialogLayout.addView(coordsText);
	dialogLayout.addView(waypointNameInput);
	dialogLayout.addView(okButton);
	dialogLayout.addView(cancelButton);
	okButton.setOnClickListener(new View_.OnClickListener() {
		onClick: function(view) {
			let waypointName = waypointNameInput.getText().toString();
			let isValidName = true;
			if(waypointName == null || waypointName == "" || waypointName.replaceAll(" ", "") == "") {
				VertexClientPE.toast("Enter a name!");
				return;
			}
			VertexClientPE.currentWorld.waypoints.forEach(function(element, index, array) {
				if(element.name == waypointName) {
					VertexClientPE.toast("There's already a waypoint with that name!");
					isValidName = false;
					return;
				}
			});
			if(isValidName) {
				VertexClientPE.currentWorld.waypoints.push({
					name: waypointName,
					x: x,
					y: y,
					z: z
				});
				VertexClientPE.saveWaypoints();
				dialog.dismiss();
				if(teleportDialog != null) {
					teleportDialog.dismiss();
				}
				VertexClientPE.showTeleportDialog();
			}
		}
	});
	cancelButton.setOnClickListener(new View_.OnClickListener() {
		onClick: function(view) {
			dialog.dismiss();
		}
	});
	let dialog = new Dialog_(CONTEXT);
	dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
	dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
	dialog.setContentView(dialogLayout);
	dialog.setTitle("Add waypoint");
	dialog.show();
}

let accountNameInput;
let accountClientIdInput;
let accountName = "unknown";
let accountClientId = "unknown";

VertexClientPE.showAddAccountDialog = function(showBackButton, title) {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				let accountTitle = clientTextView("Add account", true);
				accountNameInput = clientEditText();
				accountNameInput.setSingleLine(true);
				accountNameInput.setHint("Enter an username");
				/* accountClientIdInput = clientEditText();
				accountClientIdInput.setHint("Enter a client id (wip, added later)"); */
				let okButton = clientButton("Ok");
				let cancelButton = clientButton("Cancel");
				let dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(accountTitle);
				dialogLayout.addView(accountNameInput);
				//dialogLayout.addView(accountClientIdInput);
				dialogLayout.addView(okButton);
				dialogLayout.addView(cancelButton);
				let dialog = new Dialog_(CONTEXT);
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
							for(let i = 0; i < VertexClientPE.accounts.length(); i++) {
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
						barUI.dismiss();
						VertexClientPE.showAccountManager(showBackButton, title);
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

VertexClientPE.showAddFriendDialog = function(showBackButton, title, icon) {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				let friendTitle = clientTextView("Add friend", true);
				friendNameInput = clientEditText();
				friendNameInput.setSingleLine(true);
				friendNameInput.setHint("Enter an username");
				let okButton = clientButton("Ok");
				let cancelButton = clientButton("Cancel");
				let dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(friendTitle);
				dialogLayout.addView(friendNameInput);
				dialogLayout.addView(okButton);
				dialogLayout.addView(cancelButton);
				let dialog = new Dialog_(CONTEXT);
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
						if(VertexClientPE.friends.length() != undefined && VertexClientPE.friends.length() != undefined) {
							for(let i = 0; i < VertexClientPE.friends.length(); i++) {
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
						barUI.dismiss();
						VertexClientPE.showFriendManager(showBackButton, title, icon);
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

VertexClientPE.showAddonDialog = function(addon) {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				let dialogTitle = clientTextView(addon.name);
				dialogTitle.setTextSize(25);
				let dialogTargetVersion = clientTextView("Target version: " + addon.target_version);
				let btn = clientButton("Close");
				let dialogLayout = new LinearLayout_(CONTEXT);
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
				let dialog = new Dialog_(CONTEXT);
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

VertexClientPE.showBasicDialog = function(title, view, onDialogDismiss, extraView) {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				let dialogTitle = clientTextView(title);
				dialogTitle.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
				dialogTitle.setMarqueeRepeatLimit(-1);
				dialogTitle.setSingleLine();
				dialogTitle.setHorizontallyScrolling(true);
				dialogTitle.setSelected(true);
				dialogTitle.setTextSize(25);
				let btn = clientButton("Close");
				btn.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});

				let dialogLayout1 = new LinearLayout_(CONTEXT);
				dialogLayout1.setBackgroundDrawable(backgroundGradient());
				dialogLayout1.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout1.setPadding(10, 10, 10, 10);

				let dialogScrollView = new ScrollView_(CONTEXT);
				dialogScrollView.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2, display.heightPixels / 2));
				let dialogLayout = new LinearLayout_(CONTEXT);

				dialogLayout.addView(view);
				dialogScrollView.addView(dialogLayout);

				dialogLayout1.addView(dialogTitle);
				dialogLayout1.addView(dialogScrollView);
				if(extraView != null) {
					dialogLayout1.addView(extraView);
				}
				dialogLayout1.addView(btn);

				let dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout1);
				dialog.setTitle(title);
				dialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
					onDismiss: function() {
						if(onDialogDismiss != null) {
							onDialogDismiss();
						}
					}
				});
				dialog.show();
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

VertexClientPE.showConfirmDialog = function(title, question, onDialogDismiss, onYesClick) {
	let dialogTitle = clientTextView(title);
	dialogTitle.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
	dialogTitle.setMarqueeRepeatLimit(-1);
	dialogTitle.setSingleLine();
	dialogTitle.setHorizontallyScrolling(true);
	dialogTitle.setSelected(true);
	dialogTitle.setTextSize(25);
	let yesBtn = clientButton("Yes");
	yesBtn.setOnClickListener(new View_.OnClickListener() {
		onClick: function(view) {
			dialog.dismiss();
			onYesClick();
		}
	});
	let noBtn = clientButton("No");
	noBtn.setOnClickListener(new View_.OnClickListener() {
		onClick: function(view) {
			dialog.dismiss();
		}
	});

	let dialogLayout1 = new LinearLayout_(CONTEXT);
	dialogLayout1.setBackgroundDrawable(backgroundGradient());
	dialogLayout1.setOrientation(LinearLayout_.VERTICAL);
	dialogLayout1.setPadding(10, 10, 10, 10);

	let dialogScrollView = new ScrollView_(CONTEXT);
	let dialogLayout = new LinearLayout_(CONTEXT);

	dialogLayout.addView(clientTextView(question));
	dialogScrollView.addView(dialogLayout);

	dialogLayout1.addView(dialogTitle);
	dialogLayout1.addView(dialogScrollView);
	dialogLayout1.addView(yesBtn);
	dialogLayout1.addView(noBtn);

	let dialog = new Dialog_(CONTEXT);
	dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
	dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
	dialog.setContentView(dialogLayout1);
	dialog.setTitle(title);
	dialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
		onDismiss: function() {
			if(onDialogDismiss != null) {
				onDialogDismiss();
			}
		}
	});
	dialog.show();
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
	let openText;
	let desc;
	let title;

	let scramble = getRandomInt(1, 2);
	if(scramble == 1) {
		title = "Shortcuts";
		if(mainButtonTapSetting == "menu") {
			openText = "long tap on the main button";
		} else {
			openText = "click on the main button";
		}
		desc = "Are there any mods you use regularly? Have you tried out shortcuts yet? The shortcuts allow you to toggle mods and tiles faster than ever! Please go to the Help screen (" + openText + " --> Dashboard --> Help) to find out how to add them.";
	} else if(scramble == 2) {
		title = "YouTube";
		desc = "Subscribe to AgameR // Vertex on YouTube for exclusive previews.";
	}

	let dialogInnerLayout = new LinearLayout_(CONTEXT);
	dialogInnerLayout.setOrientation(1);
	
	let dialogCheckBox = clientCheckBox("Don't show these tip dialogs anymore");
	dialogCheckBox.setChecked(false);

	dialogInnerLayout.addView(clientTextView(desc));
	dialogInnerLayout.addView(dialogCheckBox);

	VertexClientPE.showBasicDialog(title, dialogInnerLayout,
		function() {
			shouldShowTipDialogsSetting = dialogCheckBox.isChecked()?"off":"on";
			VertexClientPE.saveMainSettings();
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

let consoleInput;

VertexClientPE.showJavascriptConsoleDialog = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				let javascriptConsoleTitle = clientTextView("Javascript Console", true);
				let btn = clientButton("Send");
				let btn1 = clientButton("Cancel");
				let inputBar = clientEditText();
				let dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(javascriptConsoleTitle);
				dialogLayout.addView(inputBar);
				dialogLayout.addView(btn);
				dialogLayout.addView(btn1);
				let dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("JavaScript Console");
				inputBar.setHint("JavaScript input");
				dialog.show();
				btn.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						consoleInput = "js " + inputBar.getText();
						let jsLine,
							funcResult,
							jsRex = /(?:^js(?:\s+)(.*)$)|(?:^js$)/,
							matches;

						if(jsRex.test(consoleInput)) {
							matches = jsRex.exec(consoleInput);

							if(matches[1] === undefined || matches[1] === '') {
								print('Usage: js <JavaScript code>');
							} else {
								jsLine = matches[1];
								// Evaluate the second part of the command as a JavaScript snippet and collect the result
								try {
									funcResult = eval(jsLine);
								} catch(e) {
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
				/*
				btn.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						let jsLine = inputBar.getText(),
							funcResult;

						if(jsLine === undefined || jsLine.replaceAll(" ", "") == "") {
							print("Usage: <JavaScript code>");
						} else {
							// Evaluate it as a JavaScript snippet and collect the result
							try {
								funcResult = eval(jsLine);
							} catch(e) {
								clientMessage("JavaScript Error: " + e.message);
							}

							// If a value was returned, post it on the PE chat console
							if(funcResult != null) {
								clientMessage(funcResult.toString());
							}
						}
					}
				});
				*/
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
				let categoryDialogTitle = clientTextView("Rename category \'" + currentName + "\'", true);
				let btn = clientButton("Close");
				let inputBar = clientEditText();
				let dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(categoryDialogTitle);
				dialogLayout.addView(inputBar);
				dialogLayout.addView(btn);
				let dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("Rename category \'" + currentName + "\'");
				inputBar.setHint("Category name");
				inputBar.setText(currentName);
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
				let btn = clientButton("Close");
				let buttonStrokeThicknessSettingTitle = clientTextView("Button stroke thickness: | " + buttonStrokeThicknessSetting + " pixel(s)");
				let buttonStrokeThicknessSettingDialogSlider = clientSeekBar();
				let minButtonStrokeThickness = 1;
				let maxButtonStrokeThickness = 10;
				buttonStrokeThicknessSettingDialogSlider.setProgress(buttonStrokeThicknessSetting - minButtonStrokeThickness);
				buttonStrokeThicknessSettingDialogSlider.setMax(maxButtonStrokeThickness - minButtonStrokeThickness);
				buttonStrokeThicknessSettingDialogSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
					onProgressChanged: function() {
						buttonStrokeThicknessSetting = buttonStrokeThicknessSettingDialogSlider.getProgress() + minButtonStrokeThickness;
						buttonStrokeThicknessSettingTitle.setText("Button stroke thickness: | " + buttonStrokeThicknessSetting + " pixel(s)");
					}
				});
				let dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(buttonStrokeThicknessSettingTitle);
				dialogLayout.addView(buttonStrokeThicknessSettingDialogSlider);
				dialogLayout.addView(btn);
				let dialog = new Dialog_(CONTEXT);
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
				let btn = clientButton("Close");
				let dashboardTileSizeSettingTitle = clientTextView("Dashboard tile size: | Screen width / " + dashboardTileSize);
				let dashboardTileSizeSettingSlider = clientSeekBar();
				let minDashboardTileSize = 1;
				dashboardTileSizeSettingSlider.setProgress(dashboardTileSize - minDashboardTileSize);
				dashboardTileSizeSettingSlider.setMax(10 - minDashboardTileSize);
				dashboardTileSizeSettingSlider.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
					onProgressChanged: function() {
						dashboardTileSize = dashboardTileSizeSettingSlider.getProgress() + minDashboardTileSize;
						dashboardTileSizeSettingTitle.setText("Dashboard tile size: | Screen width / " + dashboardTileSize);
					}
				});
				let dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(dashboardTileSizeSettingTitle);
				dialogLayout.addView(dashboardTileSizeSettingSlider);
				dialogLayout.addView(btn);
				let dialog = new Dialog_(CONTEXT);
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
				let webBrowserStartPageSettingTitle = clientTextView("Webbrowser startpage:");
				let btn = clientButton("Close");
				let inputBar = clientEditText();
				let dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(webBrowserStartPageSettingTitle);
				dialogLayout.addView(inputBar);
				dialogLayout.addView(btn);
				let dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("Change Webbrowser startpage");
				inputBar.setHint("Webbrowser startpage");
				inputBar.setText(webBrowserStartPageSetting);
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

VertexClientPE.clientMessage = function(message) {
	clientMessage(ChatColor.RED + "[" + ChatColor.DARK_GREEN + VertexClientPE.getName() + ChatColor.RED + "] " + ChatColor.WHITE + message);
}

VertexClientPE.debugMessage = function(message) {
	clientMessage(ChatColor.GRAY + "[DEBUG] " + ChatColor.WHITE + message);
}

let toast;
let loadingToast;

VertexClientPE.toast = function(message, vibrate) {
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			if(vibrate || vibrate == null) {
				CONTEXT.getSystemService(Context_.VIBRATOR_SERVICE).vibrate(37);
			}
			let layout = new LinearLayout_(CONTEXT);
			layout.setPadding(dip2px(2), dip2px(2), dip2px(2), dip2px(2));
			layout.setBackground(backgroundGradient(null, "normal", "on"));
			let title = VertexClientPE.getName();
			let text = clientTextView(new Html_.fromHtml("<b>" + title + "</b> " + message));
			layout.addView(text);
			if(toast != null) {
				toast.cancel();
			}
			toast = new Toast_(CONTEXT);
			toast.setDuration(Toast_.LENGTH_LONG);
			toast.setView(layout);
			if(defaultToastPositionSetting == "top") {
				toast.setGravity(Gravity_.CENTER | Gravity_.TOP, 0, 0);
			}
			toast.show();
		}
	}));
}

VertexClientPE.loadToast = function(message) {
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			let layout = new LinearLayout_(CONTEXT);
			layout.setBackground(backgroundSpecial(true));
			let loadProg = new android.widget.ProgressBar(CONTEXT);
			loadProg.setIndeterminate(true);
			loadProg.getIndeterminateDrawable().setColorFilter(getColor("stroke"), android.graphics.PorterDuff.Mode.SRC_IN);
			/* let title = VertexClientPE.getName();
			let text = clientTextView(new Html_.fromHtml("<b>" + title + "</b> " + message), true, "diff"); */
			layout.addView(loadProg);
			//layout.addView(text);
			if(loadingToast != null) {
				loadingToast.cancel();
			}
			loadingToast = new Toast_(CONTEXT);
			loadingToast.setView(layout);
			loadingToast.setGravity(Gravity_.CENTER | Gravity_.TOP, 0, 0);
			loadingToast.show();
		}
	}));
}

VertexClientPE.screenToast = function(screenIcon, screenName, text) {
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			let layout = new LinearLayout_(CONTEXT);
			layout.setBackground(backgroundSpecial(true, "#70212121|#70ffffff"));
			layout.setGravity(Gravity_.CENTER);
			let icon = new android.widget.ImageView(CONTEXT);
			icon.setImageResource(screenIcon);
			let textView = clientTextView(new Html_.fromHtml("<b>" + screenName + "</b> " + text), true, "diff");
			layout.addView(icon);
			layout.addView(textView);
			let screenToast = new Toast_(CONTEXT);
			screenToast.setDuration(Toast_.LENGTH_LONG);
			screenToast.setView(layout);
			screenToast.setGravity(Gravity_.CENTER | Gravity_.TOP, 0, 0);
			screenToast.show();
		}
	}));
}

VertexClientPE.addonLoadToast = function(message) {
	VertexClientPE.screenToast(android.R.drawable.ic_menu_more, "Addons", message);
}

VertexClientPE.updateToast = function(message) {
	VertexClientPE.screenToast(android.R.drawable.ic_menu_compass, "Update Center", message);
}

VertexClientPE.showChristmasToast = function(daysLeft) {
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			let layout = new LinearLayout_(CONTEXT);
			layout.setBackground(backgroundSpecial(true, "#70212121|#70ffffff"));
			layout.setGravity(Gravity_.CENTER);
			let icon = new android.widget.ImageView(CONTEXT);
			icon.setImageResource(android.R.drawable.ic_menu_agenda);
			let icon1 = new android.widget.ImageView(CONTEXT);
			icon1.setImageBitmap(imgChristmasTree);
			icon1.setLayoutParams(new LinearLayout_.LayoutParams(dip2px(16), dip2px(16)));
			let title = "Christmas";
			let cText = daysLeft == null ? "Merry Christmas!" : (daysLeft + " day(s) left until Christmas!");
			let text = clientTextView(new Html_.fromHtml("<b>" + title + "</b> " + cText), true, "diff");
			layout.addView(icon);
			layout.addView(icon1);
			layout.addView(text);
			let christmasToast = new Toast_(CONTEXT);
			christmasToast.setDuration(Toast_.LENGTH_LONG);
			christmasToast.setView(layout);
			christmasToast.setGravity(Gravity_.CENTER | Gravity_.TOP, 0, 0);
			christmasToast.show();
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

let p, y, xx, yy, zz;

let sayMsg;

VertexClientPE.commandManager = function(cmd) {
	let _0xff55=["\x59\x6F\x75\x27\x76\x65\x20\x63\x61\x6D\x65\x20\x61\x63\x72\x6F\x73\x73\x20\x61\x6E\x20\x6F\x75\x74\x64\x61\x74\x65\x64\x2C\x20\x65\x64\x69\x74\x65\x64\x20\x61\x6E\x64\x20\x75\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64\x20\x56\x65\x72\x74\x65\x78\x20\x43\x6C\x69\x65\x6E\x74\x20\x50\x45\x20\x73\x63\x72\x69\x70\x74\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x74\x68\x65\x20\x6F\x66\x66\x69\x63\x69\x61\x6C\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x6F\x6E\x20\x6F\x75\x72\x20\x77\x65\x62\x73\x69\x74\x65\x3A\x20\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2E\x6D\x6C","\x74\x6F\x61\x73\x74","\x59\x6F\x75\x27\x76\x65\x20\x63\x61\x6D\x65\x20\x61\x63\x72\x6F\x73\x73\x20\x61\x6E\x20\x65\x64\x69\x74\x65\x64\x20\x61\x6E\x64\x20\x75\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64\x20\x56\x65\x72\x74\x65\x78\x20\x43\x6C\x69\x65\x6E\x74\x20\x50\x45\x20\x73\x63\x72\x69\x70\x74\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x74\x68\x65\x20\x6F\x66\x66\x69\x63\x69\x61\x6C\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x6F\x6E\x20\x6F\x75\x72\x20\x77\x65\x62\x73\x69\x74\x65\x3A\x20\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2E\x6D\x6C"];if(!isAuthorized){if(!isSupported){VertexClientPE[_0xff55[1]](_0xff55[0])}else {VertexClientPE[_0xff55[1]](_0xff55[2])};return}
	let finished = false;
	let commandSplit = cmd.split(" ");
	VertexClientPE.commands.forEach(function(element, index, array) {
		if(element.syntax != null && commandSplit[0] == element.syntax.split(" ")[0]) {
			if(element.hasOwnProperty("onCall")) {
				if(element.hasOwnProperty("isExpMod") && element.isExpMod() && !VertexClientPE.isExpMode()) {
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

let mpSongTitleView;
let mpPlayButton;
let mpCurrentPositionView;
let mpTotalDurationView;
let mpSeekBarView;
let mpLayout;

/*
var log1 = (Math.log(maxVolume-currVolume)/Math.log(maxVolume));
yourMediaPlayer.setVolume(1-log1);
*/

VertexClientPE.MusicUtils = {
	milliSecToMinString: function(mSec) {
		let minutes = parseInt(((mSec / (1000*60)) % 60)).toString();
		let seconds = parseInt((mSec / 1000) % 60).toString();
		if(seconds >= 0 && seconds < 10) {
			seconds = "0" + seconds;
		}
		if(minutes < 0) {
			minutes = "0";
		}
		if(seconds < 0) {
			seconds = "00";
		}
		return minutes + ":" + seconds;
	},
	getVolume: function() {
		
	},
	setVolume: function(currVolume) {
		let log1 = (Math.log(maxVolume-currVolume)/Math.log(maxVolume));
		this.mp.setVolume(1-log1);
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
	loadNextSong: function() {
		VertexClientPE.MusicUtils.mp.reset();
		if(VertexClientPE.MusicUtils.tempSongList.length == 0) {
			VertexClientPE.MusicUtils.tempSongList = VertexClientPE.MusicUtils.songList;
			VertexClientPE.MusicUtils.randomMusic = VertexClientPE.MusicUtils.tempSongList[Math.floor(Math.random() * VertexClientPE.MusicUtils.tempSongList.length)];
			VertexClientPE.MusicUtils.mp.setDataSource(VertexClientPE.MusicUtils.randomMusic.url);
			VertexClientPE.MusicUtils.mp.prepareAsync();
		} else {
			if(VertexClientPE.MusicUtils.tempSongList.indexOf(VertexClientPE.MusicUtils.randomMusic) != -1) {
				VertexClientPE.MusicUtils.tempSongList.slice(VertexClientPE.MusicUtils.randomMusic);
			}
			VertexClientPE.MusicUtils.randomMusic = VertexClientPE.MusicUtils.tempSongList[Math.floor(Math.random() * VertexClientPE.MusicUtils.tempSongList.length)];
			VertexClientPE.MusicUtils.mp.setDataSource(VertexClientPE.MusicUtils.randomMusic.url);
			VertexClientPE.MusicUtils.mp.prepareAsync();
		}
	},
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
					let musicHandler = new Handler_();
					musicHandler.postDelayed(new Runnable_() {
						run: function() {
							mp.pause();
							VertexClientPE.MusicUtils.isPaused = true;
						}
					}, 1500);
				}
			}
		});
		this.mp.setOnBufferingUpdateListener(new MediaPlayer_.OnBufferingUpdateListener() {
			onBufferingUpdate: function(arg0) {
				//onBufferingUpdate
			}
		});
		this.mp.setOnCompletionListener(new MediaPlayer_.OnCompletionListener() {
			onCompletion: function(arg0) {
				VertexClientPE.MusicUtils.loadNextSong();
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

//VertexClientPE.MusicUtils.registerSong(new Song("Adventures (feat. Alexa Lusader)", "William Ekh", "http://files-cdn.nocopyrightsounds.co.uk/William%20Ekh%20-%20Adventure%20%28feat.%20Alexa%20Lusader%29.mp3", "House"));
//VertexClientPE.MusicUtils.registerSong(new Song("Blank [NCS Release]", "Disfigure", "http://download1644.mediafire.com/i9266f1gnalg/hdxvcde2t8v1hb8/Disfigure+-+Blank.mp3", "Dubstep"));
//VertexClientPE.MusicUtils.registerSong(new Song("Can't Wait (feat. Anna Yvette) [NCS Release]", "Jim Yosef", "http://download1478.mediafire.com/hi9bhnr23gvg/bpgdjbqy0p09biw/Jim+Yosef+-+Can%5C%27t+Wait+%28feat.+Anna+Yvette%29.mp3", "House"));
//VertexClientPE.MusicUtils.registerSong(new Song("Candyland [NCS Release]", "Tobu", "http://download1593.mediafire.com/kic5eufk5fxg/dhi67bfn9dcq28b/Tobu+-+Candyland.mp3", "House"));
//VertexClientPE.MusicUtils.registerSong(new Song("Cast Away ft. Ayve [NCS Release]", "T & Sugah", "http://files-cdn.nocopyrightsounds.co.uk/T%20%26%20Sugah%20-%20Cast%20Away%20%28ft.%20Ayve%29.mp3","Drum&Bass"));
//VertexClientPE.MusicUtils.registerSong(new Song("Cloud 9 [NCS Release]", "Itro & Tobu", "http://files-cdn.nocopyrightsounds.co.uk/Itro%20%26%20Tobu%20-%20Cloud%209.mp3", "House"));
//VertexClientPE.MusicUtils.registerSong(new Song("Coming Home [NCS Release]", "SirensCeol", "http://files-cdn.nocopyrightsounds.co.uk/SirensCeol%20-%20Coming%20Home.mp3", "Dubstep"));
//VertexClientPE.MusicUtils.registerSong(new Song("Daydreamer", "Ahxello & Alex Skrindo", "http://s000.tinyupload.com/download.php?file_id=88996261727724886040&t=8899626172772488604031406", "House"));
//VertexClientPE.MusicUtils.registerSong(new Song("Donuts [NCS Release]", "Jensation", "https://vocaroo.com/media_command.php?media=s0c2yP42QTf8&command=download_mp3", "House"));
//VertexClientPE.MusicUtils.registerSong(new Song("Dusk [NCS Release]", "Tobu & Syndec", "http://download943.mediafire.com/8m4c14x573eg/6ma4m2u3s3s1cbb/Tobu+%26+Syndec+-+Dusk.mp3", "House"));
//VertexClientPE.MusicUtils.registerSong(new Song("Eclipse [NCS Release]", "Jim Yosef", "http://files-cdn.nocopyrightsounds.co.uk/Jim%20Yosef%20-%20Eclipse.mp3", "House"));
//VertexClientPE.MusicUtils.registerSong(new Song("Elevate [NCS Release]", "Arcien", "http://files-cdn.nocopyrightsounds.co.uk/Arcien%20-%20Elevate.mp3", "Drum&Bass"));
//VertexClientPE.MusicUtils.registerSong(new Song("Entropy", "Distrion & Alex Skrindo", "http://files-cdn.nocopyrightsounds.co.uk/Distrion%20%26%20Alex%20Skrindo%20-%20Entropy.mp3","House"));
//VertexClientPE.MusicUtils.registerSong(new Song("Fall To Light [NCS Release]", "Laszlo", "http://files-cdn.nocopyrightsounds.co.uk/Laszlo%20-%20Fall%20to%20Light.mp3", "Drum&Bass"));
//VertexClientPE.MusicUtils.registerSong(new Song("Feel Good [NCS Release]", "Syn Cole", "http://download1510.mediafire.com/9x4ghqon4k9g/klxi61x2qgzp67b/Syn+Cole+-+Feel+Good+%28Radio+Edit%29+%5BNCS%5D.mp3", "House"));
//VertexClientPE.MusicUtils.registerSong(new Song("Firefly [NCS Release]", "Jim Yosef", "http://files-cdn.nocopyrightsounds.co.uk/jim-yosef-firefly-ncs-release.mp3", "House"));
//VertexClientPE.MusicUtils.registerSong(new Song("Fly Away [NCS Release]", "Krys Talk", "http://files-cdn.nocopyrightsounds.co.uk/Krys%20Talk%20-%20Fly%20Away.mp3", "Dubstep"));
//VertexClientPE.MusicUtils.registerSong(new Song("Get Up Again (feat. Axol) [NCS Release]", "Alex Skrindo", "https://vocaroo.com/media_command.php?media=s0LvkrRl5FdY&command=download_mp3", "House"));
//VertexClientPE.MusicUtils.registerSong(new Song("Gravity (feat. Liz Kretschmer) [NCS Release]", "Umpire", "http://files-cdn.nocopyrightsounds.co.uk/Umpire%20-%20Gravity%20%28feat.%20Liz%20Kretschmer%29.mp3", "Chillstep"));
//VertexClientPE.MusicUtils.registerSong(new Song("Halcyon [NCS Release]", "JJD", "http://download936.mediafire.com/bsvzwx1f7fbg/7a8m5f4mwhv468j/JJD+-+Halcyon.mp3", "House"));
//VertexClientPE.MusicUtils.registerSong(new Song("Happy Accidents [NCS Release]", "Inukshuk", "http://files-cdn.nocopyrightsounds.co.uk/Inukshuk%20-%20Happy%20Accidents.mp3", "Electronic"));
//VertexClientPE.MusicUtils.registerSong(new Song("Hello", "OMFG", "http://download1481.mediafire.com/7mat2n6c06hg/gb97ihc1xl83s2b/OMFG+-+Hello.mp3", "Electronic"));
//VertexClientPE.MusicUtils.registerSong(new Song("Hollah! [NCS Release]", "Disfigure", "http://files-cdn.nocopyrightsounds.co.uk/Disfigure%20-%20Hollah%21.mp3", "Chillstep"));
//VertexClientPE.MusicUtils.registerSong(new Song("Invincible [NCS Release]", "DEAF KEV", "http://download1512.mediafire.com/pfj81r6r7log/m2wtpceouotlme2/DEAF+KEV+-+Invincible.mp3", "Trap"));
//VertexClientPE.MusicUtils.registerSong(new Song("Lights [NCS Release]", "Jim Yosef", "http://files-cdn.nocopyrightsounds.co.uk/Jim%20Yosef%20-%20Lights.mp3", "House"));
//VertexClientPE.MusicUtils.registerSong(new Song("Make Me Move (feat. Karra) [NCS Release]", "Culture Code", "http://download1327.mediafire.com/8i3vnga3ifrg/e9esqtbevi25ud3/Culture+Code+-+Make+Me+Move+%28feat.+Karra%29.mp3", "House"));
//VertexClientPE.MusicUtils.registerSong(new Song("Moments [NCS Release]", "Alex Skrindo & Stahl!", "http://files-cdn.nocopyrightsounds.co.uk/Alex%20Skrindo%20%26%20Stahl%21%20-%20Moments.mp3", "House"));
//VertexClientPE.MusicUtils.registerSong(new Song("My Heart [NCS Release]", "Different Heaven & EH!DE", "http://files-cdn.nocopyrightsounds.co.uk/Different%20Heaven%20%26%20EH%21DE%20-%20My%20Heart.mp3", "Drumstep"));
//VertexClientPE.MusicUtils.registerSong(new Song("Nekozilla", "Different Heaven", "http://files-cdn.nocopyrightsounds.co.uk/Different%20Heaven%20-%20Nekozilla.mp3", "Electronic"));
//VertexClientPE.MusicUtils.registerSong(new Song("Neopolitan Dreams (Nilow Remix)", "Lisa Mitchell", "http://download1337.mediafire.com/ohxmhmrmkohg/5qbuk6k29uvme7m/Lisa+Mitchell+-+Neopolitan+Dreams+%28Nilow+Rmx%29.mp3", "Dubstep"));
//VertexClientPE.MusicUtils.registerSong(new Song("Nova [NCS Release]", "Ahrix", "https://vocaroo.com/media_command.php?media=s10Jr2fGG6aa&command=download_mp3", "House"));
//VertexClientPE.MusicUtils.registerSong(new Song("Puzzle [NCS Release]", "RetroVision", "http://download941.mediafire.com/raw9diwdrjdg/2puhc3ijy7uyy0p/RetroVision+-+Puzzle.mp3", "House"));
//VertexClientPE.MusicUtils.registerSong(new Song("Roots [NCS Release]", "Tobu", "http://download1498.mediafire.com/ck14cgg3gqzg/gqya3cgqc40iwjx/Tobu+-+Roots.mp3", "House"));
//VertexClientPE.MusicUtils.registerSong(new Song("Savannah (feat. Philly K) [NCS Release]", "Diviners", "http://download1496.mediafire.com/4e8tcja9c9tg/ft25eqaforf51ee/Diviners+-+Savannah+%28ft.+Philly+K%29.mp3", "House"));
//VertexClientPE.MusicUtils.registerSong(new Song("Time Leap [NCS Release]", "Aero Chord", "http://files-cdn.nocopyrightsounds.co.uk/Aero%20Chord%20-%20Time%20Leap.mp3", "Drum&Bass"));
//VertexClientPE.MusicUtils.registerSong(new Song("Tropic Love [NCS Release]", "Diviners feat. Contacreast", "http://download1127.mediafire.com/vpvp9zgbae9g/f6u3p2ekz9207xx/Diviners+ft.+Contacreast+-+Tropic+Love+%28Original+Mix%29.mp3", "House"));
//VertexClientPE.MusicUtils.registerSong(new Song("You [NCS Release]", "Axol x Alex Skrindo", "http://download2134.mediafire.com/r078c7bm2mhg/i43j6xe94684mzz/Axol+x+Alex+Skrindo+-+You.mp3", "House"));

//VertexClientPE.MusicUtils.registerSong(new Song(String name, String artist, String url, String genre));

VertexClientPE.initHealthTags = function() {
	if(healthTagsNameSetting == "blue") {
		nameColor = "\u00A79";
	} else if(healthTagsNameSetting == "green") {
		nameColor = "\u00A7a";
	} else if(healthTagsNameSetting == "aqua") {
		nameColor = "\u00A7b";
	} else if(healthTagsNameSetting == "red") {
		nameColor = "\u00A7c";
	} else if(healthTagsNameSetting == "light_purple") {
		nameColor = "\u00A7d";
	} else if(healthTagsNameSetting == "yellow") {
		nameColor = "\u00A7e";
	} else if(healthTagsNameSetting == "white") {
		nameColor = "\u00A7f";
	}

	if(healthTagsHealthSetting == "blue") {
		healthColor = "\u00A79";
	} else if(healthTagsHealthSetting == "green") {
		healthColor = "\u00A7a";
	} else if(healthTagsHealthSetting == "aqua") {
		healthColor = "\u00A7b";
	} else if(healthTagsHealthSetting == "red") {
		healthColor = "\u00A7c";
	} else if(healthTagsHealthSetting == "light_purple") {
		healthColor = "\u00A7d";
	} else if(healthTagsHealthSetting == "yellow") {
		healthColor = "\u00A7e";
	} else if(healthTagsHealthSetting == "white") {
		healthColor = "\u00A7f";
	}
}

VertexClientPE.healthTags = function() {
	let mobs = Entity.getAll();

	for(let i = 0; i < mobs.length; i++) {

		/* now the variable "mobs" is now "mobs[i]",
		if you are asking why they are they now like this, it is because we split all gotten entities as their own, that means you can personalize them, (that is very useful when you are using Entity.get() scripts. So I can give all entities a personalized (as example) nametag which shows their own health. */

		let mob = mobs[i];
		let xq = Entity.getX(mob) - getPlayerX();
		let yq = Entity.getY(mob) - getPlayerY();
		let zq = Entity.getZ(mob) - getPlayerZ();



		if(xq * xq + yq * yq + zq * zq <= 14 * 14 && mob != getPlayerEnt()) {

			/* the 14 stands for, that the entities you want to give (as example) a nametag need to be in a radius of 14 blocks */

			/* You can disable it by removing the above script. */
			let mobName;

			if(Entity.getEntityTypeId(mob) == 10) {
				mobName = "Chicken";
			}
			if(Entity.getEntityTypeId(mob) == 11) {
				mobName = "Cow";
			}
			if(Entity.getEntityTypeId(mob) == 12) {
				mobName = "Pig";
			}
			if(Entity.getEntityTypeId(mob) == 13) {
				mobName = "Sheep";
			}
			if(Entity.getEntityTypeId(mob) == 14) {
				mobName = "Wolf";
			}
			if(Entity.getEntityTypeId(mob) == 15) {
				mobName = "Villager";
			}
			if(Entity.getEntityTypeId(mob) == 16) {
				mobName = "Mooshroom";
			}
			if(Entity.getEntityTypeId(mob) == 17) {
				mobName = "Squid";
			}
			if(Entity.getEntityTypeId(mob) == 18) {
				mobName = "Rabbit";
			}
			if(Entity.getEntityTypeId(mob) == 19) {
				mobName = "Bat";
			}
			if(Entity.getEntityTypeId(mob) == 20) {
				mobName = "Iron Golem";
			}
			if(Entity.getEntityTypeId(mob) == 21) {
				mobName = "Snow Golem";
			}
			if(Entity.getEntityTypeId(mob) == 22) {
				mobName = "Ocelot";
			}
			if(Entity.getEntityTypeId(mob) == 23) {
				mobName = "Horse";
			}
			if(Entity.getEntityTypeId(mob) == 24) {
				mobName = "Donkey";
			}
			if(Entity.getEntityTypeId(mob) == 25) {
				mobName = "Mule";
			}
			if(Entity.getEntityTypeId(mob) == 26) {
				mobName = "Skeleton Horse";
			}
			if(Entity.getEntityTypeId(mob) == 27) {
				mobName = "Zombie Horse";
			}
			if(Entity.getEntityTypeId(mob) == 28) {
				mobName = "Polar Bear";
			}
			if(Entity.getEntityTypeId(mob) == 29) {
				mobName = "Llama";
			}
			if(Entity.getEntityTypeId(mob) == 32) {
				mobName = "Zombie";
			}
			if(Entity.getEntityTypeId(mob) == 33) {
				mobName = "Creeper";
			}
			if(Entity.getEntityTypeId(mob) == 34) {
				mobName = "Skeleton";
			}
			if(Entity.getEntityTypeId(mob) == 35) {
				mobName = "Spider";
			}
			if(Entity.getEntityTypeId(mob) == 36) {
				mobName = "Zombie Pigman";
			}
			if(Entity.getEntityTypeId(mob) == 37) {
				mobName = "Slime";
			}
			if(Entity.getEntityTypeId(mob) == 38) {
				mobName = "Enderman";
			}
			if(Entity.getEntityTypeId(mob) == 39) {
				mobName = "Silverfish";
			}
			if(Entity.getEntityTypeId(mob) == 40) {
				mobName = "Cave Spider";
			}
			if(Entity.getEntityTypeId(mob) == 41) {
				mobName = "Ghast";
			}
			if(Entity.getEntityTypeId(mob) == 42) {
				mobName = "Magma Cube";
			}
			if(Entity.getEntityTypeId(mob) == 43) {
				mobName = "Blaze";
			}
			if(Entity.getEntityTypeId(mob) == 44) {
				mobName = "Zombie Villager";
			}
			if(Entity.getEntityTypeId(mob) == 45) {
				mobName = "Witch";
			}
			if(Entity.getEntityTypeId(mob) == 46) {
				mobName = "Stray";
			}
			if(Entity.getEntityTypeId(mob) == 47) {
				mobName = "Husk";
			}
			if(Entity.getEntityTypeId(mob) == 49) {
				mobName = "Guardian";
			}
			if(Entity.getEntityTypeId(mob) == 50) {
				mobName = "Elder Guardian";
			}
			if(Entity.getEntityTypeId(mob) == 54) {
				mobName = "Shulker";
			}
			if(Entity.getEntityTypeId(mob) == 57) {
				mobName = "Vindicator";
			}
			if(Entity.getEntityTypeId(mob) == 104) {
				mobName = "Evoker";
			}
			if(Entity.getEntityTypeId(mob) == 105) {
				mobName = "Vex";
			}

			let divider;
			if(healthTagsShowHeartSetting == "on") {
				divider = " \u2661";
			} else {
				divider = " ";
			}

			if(mobName != null) {
				Entity.setNameTag(mob, nameColor + mobName + healthColor + divider + Entity.getHealth(mob) + "/" + Entity.getMaxHealth(mob));
			}
		}
	}
}

VertexClientPE.nuke = function(x, y, z, range, mode) {
	mode = (mode==null)?"cube":mode;
	range = (range==null)?3:range;
	let destroyFunction = bypassState?Level.destroyBlock:setTile;
	let destroyLastParam = bypassState?false:0;
	if(mode == "cube") {
		for(let blockX = - range; blockX <= range; blockX++) {
			for(let blockY = - range; blockY <= range; blockY++) {
				for(let blockZ = - range; blockZ <= range; blockZ++) {
					let tileX = Math.floor(x + blockX);
					let tileY = Math.floor(y + blockY);
					let tileZ = Math.floor(z + blockZ);
					if(getTile(tileX, tileY, tileZ) != 0) {
						destroyFunction(tileX, tileY, tileZ, destroyLastParam);
					}
				}
			}
		}
	} else if(mode == "flat") {
		for(let blockX = - range; blockX <= range; blockX++) {
			for(let blockY = -1; blockY <= range; blockY++) {
				for(let blockZ = - range; blockZ <= range; blockZ++) {
					let tileX = Math.floor(x + blockX);
					let tileY = Math.floor(y + blockY);
					let tileZ = Math.floor(z + blockZ);
					if(getTile(tileX, tileY, tileZ) != 0) {
						destroyFunction(tileX, tileY, tileZ, destroyLastParam);
					}
				}
			}
		}
	} else if(mode == "smash") {
		for(let blockX = - range; blockX <= range; blockX++) {
			for(let blockY = - range; blockY <= range; blockY++) {
				for(let blockZ = - range; blockZ <= range; blockZ++) {
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

let fancyChatMsg;
let fancyChatEndChar = 0xFEE0;

VertexClientPE.fancyChat = function(str) {
	fancyChatMsg = new String_(str);
	/* switch(fancyChatMode) {
		case "default":
			fancyChatEndChar = 0xFEE0;
			break;
		default:
			fancyChatEndChar = null;
			break;
	} */
	let newMsg = "";
	for(i in fancyChatMsg.toCharArray()) {
		let chr = fancyChatMsg.toCharArray()[i];
		if(chr >= 0x21 && chr <= 0x80) {
			newMsg += new String_(Character_.toChars(chr + fancyChatEndChar));
		} else {
			newMsg += chr;
		}
	}
	Server.sendChat(newMsg);
}

/*
ALTERNATIVE WAY
VertexClientPE.getItemInSlot = function(newSlot) {
	let oldSlot = Player.getSelectedSlotId();
	Player.setSelectedSlotId(newSlot);
	let itemId = Player.getCarriedItem();
	Player.setSelectedSlotId(oldSlot);

	return itemId;
} */

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
			let itemInSlot = Player.getInventorySlot(i);
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

VertexClientPE.teleporter = function(x, y, z) {
	setPosition(getPlayerEnt(), x, y, z);
	while(getTile(getPlayerX(), getPlayerY() - 2, getPlayerZ()) != 0) {
		Entity.setPosition(getPlayerEnt(), getPlayerX(), getPlayerY() + 1, getPlayerZ());
	}
}

const settingsPath = Environment_.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftpe/";
const worldsPath = Environment_.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftWorlds/";

VertexClientPE.setupModButtonColors = function() {
	if(modButtonColorBlockedSetting == "red") {
		modButtonColorBlocked = Color_.RED;
	}
	if(modButtonColorBlockedSetting == "green") {
		modButtonColorBlocked = Color_.GREEN;
	}
	if(modButtonColorBlockedSetting == "blue") {
		modButtonColorBlocked = Color_.BLUE;
	}
	if(modButtonColorBlockedSetting == "yellow") {
		modButtonColorBlocked = Color_.YELLOW;
	}
	if(modButtonColorBlockedSetting == "white") {
		modButtonColorBlocked = Color_.WHITE;
	}
	if(modButtonColorBlockedSetting == "black") {
		modButtonColorBlocked = Color_.BLACK;
	}

	if(modButtonColorEnabledSetting == "red") {
		modButtonColorEnabled = Color_.RED;
	}
	if(modButtonColorEnabledSetting == "green") {
		modButtonColorEnabled = Color_.GREEN;
	}
	if(modButtonColorEnabledSetting == "blue") {
		modButtonColorEnabled = Color_.BLUE;
	}
	if(modButtonColorEnabledSetting == "yellow") {
		modButtonColorEnabled = Color_.YELLOW;
	}
	if(modButtonColorEnabledSetting == "white") {
		modButtonColorEnabled = Color_.WHITE;
	}
	if(modButtonColorEnabledSetting == "black") {
		modButtonColorEnabled = Color_.BLACK;
	}

	if(modButtonColorDisabledSetting == "red") {
		modButtonColorDisabled = Color_.RED;
	}
	if(modButtonColorDisabledSetting == "green") {
		modButtonColorDisabled = Color_.GREEN;
	}
	if(modButtonColorDisabledSetting == "blue") {
		modButtonColorDisabled = Color_.BLUE;
	}
	if(modButtonColorDisabledSetting == "yellow") {
		modButtonColorDisabled = Color_.YELLOW;
	}
	if(modButtonColorDisabledSetting == "white") {
		modButtonColorDisabled = Color_.WHITE;
	}
	if(modButtonColorDisabledSetting == "black") {
		modButtonColorDisabled = Color_.BLACK;
	}
}

VertexClientPE.setupMCPEGUI = function() {
	if(mcpeGUISetting == "default") {
		ModPE.resetImages();
	}
	if(mcpeGUISetting == "green") {
		ModPE.overrideTexture("images/gui/spritesheet.png", "http://i.imgur.com/BCA6vgv.png");
		ModPE.overrideTexture("images/gui/touchgui.png", "http://i.imgur.com/dY3c1Jl.png");
	}
	if(mcpeGUISetting == "red") {
		ModPE.overrideTexture("images/gui/spritesheet.png", "http://i.imgur.com/BxuGkEJ.png");
		ModPE.overrideTexture("images/gui/touchgui.png", "http://i.imgur.com/S3qiQ01.png");
	}
	if(mcpeGUISetting == "blue") {
		ModPE.overrideTexture("images/gui/spritesheet.png", "http://i.imgur.com/X5rCyoN.png");
		ModPE.overrideTexture("images/gui/touchgui.png", "http://i.imgur.com/t6tGtMk.png");
	}
	if(mcpeGUISetting == "purple") {
		ModPE.overrideTexture("images/gui/spritesheet.png", "http://i.imgur.com/3xsluNN.png");
		ModPE.overrideTexture("images/gui/touchgui.png", "http://i.imgur.com/R9te7Bd.png");
	}
	if(mcpeGUISetting == "yellow") {
		ModPE.overrideTexture("images/gui/spritesheet.png", "http://i.imgur.com/z1BGkj5.png");
		ModPE.overrideTexture("images/gui/touchgui.png", "http://i.imgur.com/RXE3pbS.png");
	}
	if(mcpeGUISetting == "white") {
		ModPE.overrideTexture("images/gui/spritesheet.png", "http://i.imgur.com/GlwhFt5.png");
		ModPE.overrideTexture("images/gui/touchgui.png", "http://i.imgur.com/gsn6Qfp.png");
	}
	if(mcpeGUISetting == "black") {
		ModPE.overrideTexture("images/gui/spritesheet.png", "http://i.imgur.com/l7nG7ZU.png");
		ModPE.overrideTexture("images/gui/touchgui.png", "http://i.imgur.com/MZeX8XN.png");
	}
	ModPE.overrideTexture("images/gui/title.png", "http://Vertex-Client.github.io/bootstrap/img/title.png");
}

VertexClientPE.saveAutoSpammerMessage = function() {
	File_(settingsPath).mkdirs();
	changeFileText(settingsPath + "vertexclientpe_spammessage.txt", spamMessage);
}

VertexClientPE.loadAutoSpammerMessage = function() {
	let tempMsg = getTextFromFile(settingsPath + "vertexclientpe_spammessage.txt");
	if(tempMsg == "") {
		return;
	}
	spamMessage = tempMsg;
	return true;
}

VertexClientPE.saveWatermarkText = function() {
	File_(settingsPath).mkdirs();
	changeFileText(settingsPath + "vertexclientpe_watermarktext.txt", watermarkTextSetting);
}

VertexClientPE.loadWatermarkText = function() {
	let tempText = getTextFromFile(settingsPath + "vertexclientpe_watermarktext.txt");
	if(tempText == "") {
		return;
	}
	watermarkTextSetting = tempText;
	return true;
}

VertexClientPE.saveFeaturesSettings = function() {
	File_(settingsPath).mkdirs();
	let newFile = new File_(settingsPath, "vertexclientpe_features.txt");
	newFile.createNewFile();
	let outWrite = new OutputStreamWriter_(new FileOutputStream_(newFile));
	outWrite.append(combatEnabled.toString());
	outWrite.append("," + worldEnabled.toString());
	outWrite.append("," + movementEnabled.toString());
	outWrite.append("," + playerEnabled.toString());
	outWrite.append("," + miscEnabled.toString());
	outWrite.append("," + singleplayerEnabled.toString());

	outWrite.close();
}

VertexClientPE.loadFeaturesSettings = function() {
	let tempFeatures = getTextFromFile(settingsPath + "vertexclientpe_features.txt");
	if(tempFeatures == "") {
		return;
	}
	let arr = tempFeatures.split(",");
	if (arr[0] != null && arr[0] != undefined) {
		combatEnabled = arr[0];
	}
	if (arr[1] != null && arr[1] != undefined) {
		worldEnabled = arr[1];
	}
	if (arr[2] != null && arr[2] != undefined) {
		movementEnabled = arr[2];
	}
	if (arr[3] != null && arr[3] != undefined) {
		playerEnabled = arr[3];
	}
	if (arr[4] != null && arr[4] != undefined) {
		miscEnabled = arr[4];
	}
	if (arr[5] != null && arr[5] != undefined) {
		singleplayerEnabled = arr[5];
	}
	return true;
}

VertexClientPE.saveCategorySettings = function() {
	File_(settingsPath).mkdirs();
	let newFile = new File_(settingsPath, "vertexclientpe_categories_new.txt");
	newFile.createNewFile();
	let outWrite = new OutputStreamWriter_(new FileOutputStream_(newFile));
	outWrite.append(combatName.toString());
	outWrite.append("," + worldName.toString());
	outWrite.append("," + movementName.toString());
	outWrite.append("," + playerName.toString());
	outWrite.append("," + miscName.toString());

	outWrite.close();
}

VertexClientPE.loadCategorySettings = function() {
	let tempCategories = getTextFromFile(settingsPath + "vertexclientpe_categories_new.txt");
	if(tempCategories == "") {
		return;
	}
	let arr = tempCategories.split(",");
	if(arr != null && arr != undefined) {
		combatName = arr[0];
		worldName = arr[1];
		movementName = arr[2];
		playerName = arr[3];
		miscName = arr[4];
	}
	return true;
}

VertexClientPE.saveAccounts = function() {
	File_(settingsPath).mkdirs();
	let newFile = new File_(settingsPath, "vertexclientpe_accounts.dat");
	newFile.createNewFile();
	let stream = new FileOutputStream_(newFile);
	try {
		stream.write(VertexClientPE.accounts.toString().getBytes());
	} finally {
		stream.close();
	}
}

VertexClientPE.saveFriends = function() {
	File_(settingsPath).mkdirs();
	let newFile = new File_(settingsPath, "vertexclientpe_friends.dat");
	newFile.createNewFile();
	let stream = new FileOutputStream_(newFile);
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
		let file = new File_(settingsPath + "vertexclientpe_accounts.dat");
		let readed = (new BufferedReader_(new FileReader_(file)));
		let data = new StringBuilder_();
		let string;
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
		let file = new File_(settingsPath + "vertexclientpe_friends.dat");
		let readed = (new BufferedReader_(new FileReader_(file)));
		let data = new StringBuilder_();
		let string;
		while((string = readed.readLine()) != null) {
			data.append(string);
			data.append("\n");
		}
		VertexClientPE.friends = new JSONArray_(data.toString());
	} catch(e) {
		//error
	}
}

VertexClientPE.loadDeathCoords = function() {
	let fileText = getTextFromFile(worldsPath + Level.getWorldDir() + "/" + "death.dat");
	if(fileText == "") {
		return;
	}
	let arr = fileText.split(",");
	if(arr[0] != null && arr[0] != undefined) {
		VertexClientPE.currentWorld.deathX = parseInt(arr[0]);
	}
	if(arr[1] != null && arr[1] != undefined) {
		VertexClientPE.currentWorld.deathY = parseInt(arr[1]);
	}
	if(arr[2] != null && arr[2] != undefined) {
		VertexClientPE.currentWorld.deathZ = parseInt(arr[2]);
	}
	return true;
}

VertexClientPE.saveDeathCoords = function() {
	let newFile = new File_(worldsPath + Level.getWorldDir() + "/" + "death.dat");
	newFile.createNewFile();
	let outWrite = new OutputStreamWriter_(new FileOutputStream_(newFile));
	outWrite.append(VertexClientPE.currentWorld.deathX.toString());
	outWrite.append("," + VertexClientPE.currentWorld.deathY.toString());
	outWrite.append("," + VertexClientPE.currentWorld.deathZ.toString());

	outWrite.close();
}

VertexClientPE.loadWaypoints = function() {
	let waypointsPath = worldsPath + Level.getWorldDir() + "/waypoints/";

	let fileDir = new File_(waypointsPath);
	let fileList = fileDir.listFiles();

	if(fileList.length != -1) {
		let newWaypoints = [];
		fileList.forEach(function(element, index, array) {
			let currentFileName = element.getName();
			let currentText = getTextFromFile(waypointsPath + currentFileName);

			let arr_split = currentText.split(",");

			newWaypoints.push({
				name: currentFileName.substring(0, currentFileName.lastIndexOf('.')),
				x: arr_split[0],
				y: arr_split[1],
				z: arr_split[2]
			});
		});

		VertexClientPE.currentWorld.waypoints = newWaypoints;
	}
}

VertexClientPE.saveWaypoints = function() {
	let waypointsPath = worldsPath + Level.getWorldDir() + "/waypoints/";

	File_(waypointsPath).mkdirs();
	if(VertexClientPE.currentWorld.waypoints.length != -1) {
		VertexClientPE.currentWorld.waypoints.forEach(function(element, index, array) {
			let newFile = new File_(waypointsPath + element.name.toString() + ".dat");
			newFile.createNewFile();
			let outWrite = new OutputStreamWriter_(new FileOutputStream_(newFile));
			outWrite.append(element.x.toString());
			outWrite.append("," + element.y.toString());
			outWrite.append("," + element.z.toString());

			outWrite.close();
		});
	}
}

VertexClientPE.saveCustomRGBSettings = function() {
	File_(settingsPath).mkdirs();
	let newFile = new File_(settingsPath, "vertex_rgb.txt");
	newFile.createNewFile();
	let outWrite = new OutputStreamWriter_(new FileOutputStream_(newFile));
	outWrite.append(customRGBRed.toString());
	outWrite.append("," + customRGBGreen.toString());
	outWrite.append("," + customRGBBlue.toString());
	outWrite.append("," + customRGBRedStroke.toString());
	outWrite.append("," + customRGBGreenStroke.toString());
	outWrite.append("," + customRGBBlueStroke.toString());

	outWrite.close();
}

VertexClientPE.loadCustomRGBSettings = function () {
	let fileText = getTextFromFile(settingsPath + "vertex_rgb.txt");
	if(fileText == "") {
		return;
	}
	let arr = fileText.split(",");
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
	return true;
}

VertexClientPE.saveFloatingMenus = function(category) {
	if(category == "combat" || category == "all") {
		editor.putFloat("VertexClientPE.combattpopx", parseInt(combattpopx));
		editor.putFloat("VertexClientPE.combattpopy", parseInt(combattpopy));
		editor.putBoolean("VertexClientPE.combatMenuShown", combatMenuShown);
	}
	if(category == "world" || category == "all") {
		editor.putFloat("VertexClientPE.worldtpopx", parseInt(worldtpopx));
		editor.putFloat("VertexClientPE.worldtpopy", parseInt(worldtpopy));
		editor.putBoolean("VertexClientPE.worldMenuShown", worldMenuShown);
	}
	if(category == "movement" || category == "all") {
		editor.putFloat("VertexClientPE.movementtpopx", parseInt(movementtpopx));
		editor.putFloat("VertexClientPE.movementtpopy", parseInt(movementtpopy));
		editor.putBoolean("VertexClientPE.movementMenuShown", movementMenuShown);
	}
	if(category == "player" || category == "all") {
		editor.putFloat("VertexClientPE.playertpopx", parseInt(playertpopx));
		editor.putFloat("VertexClientPE.playertpopy", parseInt(playertpopy));
		editor.putBoolean("VertexClientPE.playerMenuShown", playerMenuShown);
	}
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
	let newFile = new File_(settingsPath, "vertexclientpenew.txt");
	newFile.createNewFile();
	let outWrite = new OutputStreamWriter_(new FileOutputStream_(newFile));
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
	outWrite.append("," + storageESPRange.toString());
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
	outWrite.append("," + antiAFKKeepScreenOnSetting.toString());
	outWrite.append("," + shortcutUIModeSetting.toString());
	outWrite.append("," + attackShockIntensity.toString());
	outWrite.append("," + f5ButtonModeSetting.toString());
	outWrite.append("," + mainButtonSizeSetting.toString());
	outWrite.append("," + powerExplosionsPowerSetting.toString());
	outWrite.append("," + preventExplosionsSetting.toString());
	outWrite.append("," + defaultToastPositionSetting.toString());
	outWrite.append("," + tapAimbotStayAimedSetting.toString());
	outWrite.append("," + healthTagsNameSetting.toString());
	outWrite.append("," + healthTagsHealthSetting.toString());
	outWrite.append("," + healthTagsShowHeartSetting.toString());
	outWrite.append("," + modsStayEnabledSetting.toString());
	outWrite.append("," + itemGiverModeSetting.toString());
	outWrite.append("," + targetMyTeamSetting.toString());
	outWrite.append("," + shouldShowTipDialogsSetting.toString());

	outWrite.close();

	VertexClientPE.saveAutoSpammerMessage();
	VertexClientPE.saveWatermarkText();
	VertexClientPE.saveCategorySettings();
}

VertexClientPE.loadMainSettings = function () {
	let fileText = getTextFromFile(settingsPath + "vertexclientpenew.txt");
	if(fileText == "") {
		return;
	}
	let arr = fileText.toString().split(",");
	if (arr[0] != null && arr[0] != undefined) {
		hacksListModeSetting = arr[0];
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
		storageESPRange = arr[24];
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
	if (arr[74] != null && arr[74] != undefined) {
		antiAFKKeepScreenOnSetting = arr[74];
	}
	if (arr[75] != null && arr[75] != undefined) {
		shortcutUIModeSetting = arr[75];
	}
	if (arr[76] != null && arr[76] != undefined) {
		attackShockIntensity = arr[76];
	}
	if (arr[77] != null && arr[77] != undefined) {
		f5ButtonModeSetting = arr[77];
	}
	if (arr[78] != null && arr[78] != undefined) {
		mainButtonSizeSetting = arr[78];
	}
	if (arr[79] != null && arr[79] != undefined) {
		powerExplosionsPowerSetting = arr[79];
	}
	if (arr[80] != null && arr[80] != undefined) {
		preventExplosionsSetting = arr[80];
	}
	if (arr[81] != null && arr[81] != undefined) {
		defaultToastPositionSetting = arr[81];
	}
	if (arr[82] != null && arr[82] != undefined) {
		tapAimbotStayAimedSetting = arr[82];
	}
	if (arr[83] != null && arr[83] != undefined) {
		healthTagsNameSetting = arr[83];
	}
	if (arr[84] != null && arr[84] != undefined) {
		healthTagsHealthSetting = arr[84];
	}
	if (arr[85] != null && arr[85] != undefined) {
		healthTagsShowHeartSetting = arr[85];
	}
	if (arr[86] != null && arr[86] != undefined) {
		modsStayEnabledSetting = arr[86];
	}
	if (arr[87] != null && arr[87] != undefined) {
		itemGiverModeSetting = arr[87];
	}
	if (arr[88] != null && arr[88] != undefined) {
		targetMyTeamSetting = arr[88];
	}
	if (arr[89] != null && arr[89] != undefined) {
		shouldShowTipDialogsSetting = arr[89];
	}

	VertexClientPE.loadCustomRGBSettings();
	VertexClientPE.loadAutoSpammerMessage();
	VertexClientPE.loadWatermarkText();
	VertexClientPE.loadCategorySettings();
	VertexClientPE.initHealthTags();

	VertexClientPE.font = fontSetting=="minecraft"?Typeface_.createFromFile(new File_(PATH, "minecraft.ttf")):VertexClientPE.defaultFont;
	MinecraftButtonLibrary.ProcessedResources.font = VertexClientPE.font;

	return true;
}

VertexClientPE.resetData = function() {
	editor.clear();
	editor.commit();
	VertexClientPE.toast("Successfully reset all data!");
}

let createUiThread = function(func) {
	getContext().runOnUiThread(new Runnable_({
		run: function() {
			func(getContext());
		}
	}));
};

let guiSize = TypedValue_.applyDimension(TypedValue_.COMPLEX_UNIT_DIP, 2, getContext().getResources().getDisplayMetrics());
let getGui = function() {
	return BitmapFactory_.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/gui.png"));
};
let getSpritesheet = function() {
	return BitmapFactory_.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/spritesheet.png"));
};
let getTouchgui = function() {
	return BitmapFactory_.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/touchgui.png"));
};
let trimImage = function(bitmap, x, y, width, height) {
	return Bitmap_.createBitmap(bitmap, x, y, width, height);
};

let getStretchedImage = function(bm, x, y, stretchWidth, stretchHeight, width, height) {
	let blank = Bitmap_.createBitmap(width, height, Bitmap_.Config.ARGB_8888);
	let Bitmap = Bitmap_;
	let part1 = Bitmap.createBitmap(bm, 0, 0, x, y);
	let part2 = Bitmap.createBitmap(bm, x, 0, stretchWidth, y);
	let part3 = Bitmap.createBitmap(bm, x + stretchWidth, 0, bm.getWidth() - x - stretchWidth, y);
	let part4 = Bitmap.createBitmap(bm, 0, y, x, stretchHeight);
	let part5 = Bitmap.createBitmap(bm, x, y, stretchWidth, stretchHeight);
	let part6 = Bitmap.createBitmap(bm, x + stretchWidth, y, bm.getWidth() - x - stretchWidth, stretchHeight);
	let part7 = Bitmap.createBitmap(bm, 0, y + stretchHeight, x, bm.getHeight() - y - stretchHeight);
	let part8 = Bitmap.createBitmap(bm, x, y + stretchHeight, stretchWidth, bm.getHeight() - y - stretchHeight);
	let part9 = Bitmap.createBitmap(bm, x + stretchWidth, y + stretchHeight, bm.getWidth() - x - stretchWidth, bm.getHeight() - y - stretchHeight);
	let canvas = new Canvas_(blank);
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

	let rgbArray = [customRGBRed, customRGBGreen, customRGBBlue, customRGBRedStroke, customRGBGreenStroke, customRGBBlueStroke];

	if(style != "android" && style != "invisible") {
		let bg = GradientDrawable_();
		if(round == true) {
			bg.setCornerRadius(10); //TODO: check if corner radius is right?
		} else if(round != false && round != null) {
			let radiiFloatArray = Array_.newInstance(Float_.TYPE, 9);
			let radius = 0;
			if(round == "left") {
				for(let i = 0; i <= 7; i++) {
					if(i == 0 || i == 1 || i == 6 || i == 7) {
						radiiFloatArray[i] = 8;
					} else {
						radiiFloatArray[i] = radius;
					}
				}
			} if(round == "right") {
				for(let i = 0; i <= 7; i++) {
					if(i == 2 || i == 3 || i == 4 || i == 5) {
						radiiFloatArray[i] = 8;
					} else {
						radiiFloatArray[i] = radius;
					}
				}
			} if(round == "left_half") {
				for(let i = 0; i <= 7; i++) {
					if(i == 0 || i == 1 || i == 6 || i == 7) {
						radiiFloatArray[i] = 90;
					} else {
						radiiFloatArray[i] = radius;
					}
				}
			} if(round == "right_half") {
				for(let i = 0; i <= 7; i++) {
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

		if(style == "transparent") {
			bg.setColor(Color_.TRANSPARENT);
		} else {
			if(style == "legacy") {
				bg.setColor(Color_.parseColor("#000000"));
			} else {
				bg.setColor(getColor("inner", color, forceLightColor));
			}
		}
		if(style == "legacy_inverted") {
			bg.setStroke(thickness, Color_.parseColor("#000000"));
		} else if(style != "normal_nostrokes") {
			bg.setStroke(thickness, getColor("stroke", color, forceLightColor));
		}

		buttonView.setOnTouchListener(new View_.OnTouchListener() {
			onTouch: function(v, event) {
				let action = event.getActionMasked();
				if(action == MotionEvent_.ACTION_CANCEL || action == MotionEvent_.ACTION_UP) {
					if(style != "android") {
						if(style == "transparent") {
							bg.setColor(Color_.TRANSPARENT);
						} else {
							if(style == "legacy") {
								bg.setColor(Color_.parseColor("#000000"));
							} else {
								bg.setColor(getColor("inner", color, forceLightColor));
							}
						}
						if(style == "tile") {
							bg.setStroke(thickness, getColor("stroke", color, forceLightColor));
						}
					}

					if(style != "tile") {
						let rect = new android.graphics.Rect(v.getLeft(), v.getTop(), v.getRight(), v.getBottom());
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
					if(style != "android") {
						if(style == "tile") {
							bg.setStroke(dip2px(3), Color_.parseColor("#d3d3d3"));
						}
						if(style == "legacy_inverted") {
							bg.setColor(Color_.parseColor("#000000"));
						} else {
							bg.setColor(getColor("stroke", color, forceLightColor));
						}
					}
				}
				return false;
			}
		});

		buttonView.setBackgroundDrawable(bg);
		buttonView.setPaintFlags(buttonView.getPaintFlags() | Paint_.SUBPIXEL_TEXT_FLAG);
		buttonView.setTextSize(15);
	} else {
		buttonView.setOnTouchListener(new View_.OnTouchListener() {
			onTouch: function(v, event) {
				let action = event.getActionMasked();
				if(action == MotionEvent_.ACTION_CANCEL || action == MotionEvent_.ACTION_UP) {
					let rect = new android.graphics.Rect(v.getLeft(), v.getTop(), v.getRight(), v.getBottom());
					if(rect.contains(v.getLeft() + event.getX(), v.getTop() + event.getY())) { // detect if the event happens inside the view
						// onClick will run soon

						// play sounds
						if(buttonSoundSetting == "minecraft") {
							//Level.playSoundEnt(getPlayerEnt(), "random.click", 100, 0);
							Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
						}
					}
				}
				return false;
			}
		});

		if(style != "android") {
			buttonView.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
			buttonView.setPaintFlags(buttonView.getPaintFlags() | Paint_.SUBPIXEL_TEXT_FLAG);
			buttonView.setTextSize(15);
		} else {
			buttonView.getBackground().setColorFilter(getColor("inner", color, forceLightColor), PorterDuff_.Mode.MULTIPLY);
		}
	}

	if(color == "white") {
		buttonView.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.WHITE);
	} else {
		buttonView.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
	}
}

const TYPE_WIFI = 1;
const TYPE_MOBILE = 2;
const TYPE_NOT_CONNECTED = 0;


function getConnectivityStatus(context) {
	let cm = context.getSystemService(Context_.CONNECTIVITY_SERVICE);

	let activeNetwork = cm.getActiveNetworkInfo();
	if (activeNetwork != null) {
		if(activeNetwork.getType() == ConnectivityManager_.TYPE_WIFI) {
			return TYPE_WIFI;
		}
		if(activeNetwork.getType() == ConnectivityManager_.TYPE_MOBILE) {
			return TYPE_MOBILE;
		}
	}
	return TYPE_NOT_CONNECTED;
}

function copyToClipboard(textToCopy) {
	let clipboard = CONTEXT.getSystemService(CONTEXT.CLIPBOARD_SERVICE);
	let clip = android.content.ClipData.newPlainText("label", textToCopy);
	clipboard.setPrimaryClip(clip);
}

function shareText(text) {
	let sendIntent = new Intent_();
	sendIntent.setAction(Intent_.ACTION_SEND);
	sendIntent.putExtra(Intent_.EXTRA_TEXT, text);
	sendIntent.setType("text/plain");
	CONTEXT.startActivity(sendIntent);
}

function drawCircle(color) {
	let drawable = GradientDrawable_();
	drawable.setColor(color);
	drawable.setShape(1);
	return drawable;
}

function drawQuarterCircle(color, radius) {
	let drawable = GradientDrawable_();
	drawable.setColor(color);
	drawable.setCornerRadii([0, 0, 0, 0, 0, 0, radius, radius]);
	return drawable;
}

function fadeIn(duration) {
	let animation = new AlphaAnimation_(0, 1);
	animation.setDuration(duration);
	animation.setInterpolator(new DecelerateInterpolator_());
	return animation;
}

function fadeOut(duration) {
	let animation = new AlphaAnimation_(1, 0);
	animation.setDuration(duration);
	animation.setInterpolator(new DecelerateInterpolator_());
	return animation;
}

function rotate(duration, fromDegrees, toDegrees) {
	let animation = new RotateAnimation_(fromDegrees, toDegrees);
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

	let defaultButton = new Button_(CONTEXT);
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
	let songButtonText = song.artist + " - " + song.title;
	let songLayout = new LinearLayout_(CONTEXT);
	songLayout.setOrientation(LinearLayout_.HORIZONTAL);
	let songLeftWidth = display.widthPixels;
	let songClientButton = clientButton(songButtonText);
	songClientButton.setLayoutParams(new LinearLayout_.LayoutParams(songLeftWidth - 20 - dip2px(50), LinearLayout_.LayoutParams.WRAP_CONTENT));
	songClientButton.setOnClickListener(new View_.OnClickListener() {
		onClick: function(v) {
			VertexClientPE.loadToast();
			VertexClientPE.MusicUtils.isPaused = false;
			barLayout.getLeftTimeView().setText("0:00");
			if(mpPlayButton != null) {
				mpPlayButton.setBackgroundResource(android.R.drawable.ic_media_pause);
			}
			VertexClientPE.MusicUtils.startMusicPlayer(song);
			VertexClientPE.MusicUtils.playingFirstTime = false;
		}
	});

	let songRightButton = clientButton("...");
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
	let musicBarLayout1 = new LinearLayout_(CONTEXT);
	musicBarLayout1.setOrientation(1);
	let musicBarLayout = new LinearLayout_(CONTEXT);
	musicBarLayout.setBackgroundDrawable(backgroundSpecial());
	musicBarLayout.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels, LinearLayout_.LayoutParams.WRAP_CONTENT));
	musicBarLayout.setOrientation(LinearLayout_.HORIZONTAL);
	musicBarLayout.setGravity(Gravity_.CENTER);
	let musicBarLayoutLeft = new LinearLayout_(CONTEXT);
	musicBarLayoutLeft.setOrientation(LinearLayout_.HORIZONTAL);
	musicBarLayoutLeft.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 8, LinearLayout_.LayoutParams.WRAP_CONTENT));
	let musicBarLayoutMiddle = new LinearLayout_(CONTEXT);
	musicBarLayoutMiddle.setOrientation(LinearLayout_.HORIZONTAL);
	musicBarLayoutMiddle.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels - (display.widthPixels / 8) * 2, LinearLayout_.LayoutParams.WRAP_CONTENT));
	let musicBarLayoutRight = new LinearLayout_(CONTEXT);
	musicBarLayoutMiddle.setOrientation(LinearLayout_.HORIZONTAL);
	musicBarLayoutRight.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 8, LinearLayout_.LayoutParams.WRAP_CONTENT));
	musicBarLayout.addView(musicBarLayoutLeft);
	musicBarLayout.addView(musicBarLayoutMiddle);
	musicBarLayout.addView(musicBarLayoutRight);
	let musicBarSongTitleView = new clientTextView(musicText);
	musicBarSongTitleView.setBackgroundDrawable(backgroundSpecial("top", themeSetting));
	musicBarSongTitleView.setGravity(Gravity_.CENTER);
	musicBarSongTitleView.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
	musicBarSongTitleView.setMarqueeRepeatLimit(-1);
	musicBarSongTitleView.setSingleLine();
	musicBarSongTitleView.setHorizontallyScrolling(true);
	musicBarSongTitleView.setSelected(true);
	let musicBarSeekBar = clientSeekBar();
	musicBarSeekBar.setLayoutParams(new LinearLayout_.LayoutParams(LinearLayout_.LayoutParams.MATCH_PARENT, LinearLayout_.LayoutParams.WRAP_CONTENT, 1));
	let musicBarPlayButton = new Button_(CONTEXT);
	musicBarPlayButton.setPadding(0, 0, 0, 0);
	musicBarPlayButton.setBackgroundResource(android.R.drawable.ic_media_play);
	musicBarPlayButton.setLayoutParams(new LinearLayout_.LayoutParams(dip2px(36), dip2px(36)));
	musicBarPlayButton.setText("");
	let musicBarLeftTimeView = new TextView_(CONTEXT);
	musicBarLeftTimeView.setText("0:00");
	musicBarLeftTimeView.setTextColor(Color_.WHITE);
	let musicBarRightTimeView = new TextView_(CONTEXT);
	musicBarRightTimeView.setText("0:00");
	musicBarRightTimeView.setTextColor(Color_.WHITE);
	let musicBarNextButton = new Button_(CONTEXT);
	musicBarNextButton.setPadding(0, 0, 0, 0);
	musicBarNextButton.setBackgroundResource(android.R.drawable.ic_media_next);
	musicBarNextButton.setLayoutParams(new LinearLayout_.LayoutParams(dip2px(36), dip2px(36)));
	musicBarNextButton.setText("");

	musicBarLayoutLeft.addView(musicBarPlayButton);
	musicBarLayoutLeft.addView(musicBarLeftTimeView);
	musicBarLayoutMiddle.addView(musicBarSeekBar);
	musicBarLayoutRight.addView(musicBarRightTimeView);
	musicBarLayoutRight.addView(musicBarNextButton);

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

	this.getNextButton = function() {
		return musicBarNextButton;
	}

	this.getBarLayout = function() {
		return musicBarLayout1;
	}
}

function updatePaneButton(updateVersion, updateDesc, type) {
	let updatePaneLayout = new LinearLayout_(CONTEXT);
	updatePaneLayout.setOrientation(LinearLayout_.HORIZONTAL);
	updatePaneLayout.setGravity(Gravity_.CENTER);
	updatePaneLayout.setBackground(backgroundSpecial(true));
	let updatePaneLayoutLeft = new LinearLayout_(CONTEXT);
	updatePaneLayoutLeft.setOrientation(1);
	updatePaneLayoutLeft.setGravity(Gravity_.CENTER);
	updatePaneLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - dip2px(10), display.heightPixels / 4));
	let updatePaneLayoutRight = new LinearLayout_(CONTEXT);
	updatePaneLayoutRight.setOrientation(1);
	updatePaneLayoutRight.setGravity(Gravity_.CENTER);
	updatePaneLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - dip2px(10), display.heightPixels / 4));
	updatePaneLayout.addView(updatePaneLayoutLeft);
	updatePaneLayout.addView(updatePaneLayoutRight);
	let tempUpdateVersion;
	if(type == "dev") {
		tempUpdateVersion = updateVersion;
	} else {
		if(type == "latest") {
			tempUpdateVersion = "v" + updateVersion + " (latest release)";
		} else if(type == "current") {
			tempUpdateVersion = "v" + updateVersion + " (current)";
		}
	}
	let updatePaneText = clientTextView(tempUpdateVersion);
	VertexClientPE.addTextStyleToView(updatePaneText, "diff");
	updatePaneText.setTypeface(VertexClientPE.font, Typeface_.BOLD);
	let updatePaneDescText = clientTextView(updateDesc);
	VertexClientPE.addTextStyleToView(updatePaneDescText, "diff");
	updatePaneLayoutLeft.addView(updatePaneText);
	updatePaneLayoutLeft.addView(updatePaneDescText);
	let updatePaneDownloadButton = clientButton("Download");
	updatePaneDownloadButton.setCompoundDrawablesWithIntrinsicBounds(android.R.drawable.stat_sys_download, 0, 0, 0);
	updatePaneDownloadButton.setLayoutParams(new LinearLayout_.LayoutParams(LinearLayout_.LayoutParams.MATCH_PARENT, display.heightPixels / 8));
	updatePaneDownloadButton.setOnClickListener(new View_.OnClickListener() {
		onClick: function(v) {
			let updateGithubVersion = updateVersion;
			if(updateGithubVersion.indexOf("Alpha") != -1 || updateGithubVersion.indexOf("Beta") != -1) {
				updateGithubVersion = updateGithubVersion.split(" ")[0] + "-" + updateGithubVersion.split(" ")[1];
			}
			let dest;
			if(type == "dev") {
				dest = "/sdcard/Download/Vertex_Client_PE_Dev.js";
				downloadFile(dest, "https://raw.githubusercontent.com/Vertex-Client/Vertex-Client-PE/master/Vertex%20Client%20PE.js", true, true);
			} else {
				dest ="/sdcard/Download/Vertex_Client_PE.modpkg";
				downloadFile(dest, "https://github.com/Vertex-Client/Vertex-Client-PE/releases/download/v" + updateGithubVersion + "/Vertex_Client_PE.modpkg", true, true);
			}
			VertexClientPE.toast("Started downloading to \'" + dest + "\'...");
		}
	});
	let updatePaneCopyButton;
	let updatePaneInformationButton;
	if(type == "dev") {
		updatePaneCopyButton = clientButton("Copy URL");
		updatePaneCopyButton.setCompoundDrawablesWithIntrinsicBounds(android.R.drawable.ic_input_get, 0, 0, 0);
		updatePaneCopyButton.setLayoutParams(new LinearLayout_.LayoutParams(LinearLayout_.LayoutParams.MATCH_PARENT, display.heightPixels / 8));
		updatePaneCopyButton.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				copyToClipboard("https://raw.githubusercontent.com/Vertex-Client/Vertex-Client-PE/master/Vertex%20Client%20PE.js");
				VertexClientPE.toast("Copied dev link to clipboard!");
			}
		});
	} else {
		updatePaneInformationButton = clientButton("Info");
		updatePaneInformationButton.setCompoundDrawablesWithIntrinsicBounds(android.R.drawable.ic_menu_info_details, 0, 0, 0);
		updatePaneInformationButton.setLayoutParams(new LinearLayout_.LayoutParams(LinearLayout_.LayoutParams.MATCH_PARENT, display.heightPixels / 8));
		updatePaneInformationButton.setOnClickListener(new View_.OnClickListener() {
			onClick: function(v) {
				let updateGithubVersion = updateVersion;
				if(updateGithubVersion.indexOf("Alpha") != -1 || updateGithubVersion.indexOf("Beta") != -1) {
					updateGithubVersion = updateGithubVersion.split(" ")[0] + "-" + updateGithubVersion.split(" ")[1];
				}
				ModPE.goToURL("https://github.com/Vertex-Client/Vertex-Client-PE/releases/tag/v" + updateGithubVersion);
			}
		});
	}

	let updatePaneTypeText = clientTextView(capitalizeFirstLetter(isSupported?"supported":"unsupported"));
	VertexClientPE.addTextStyleToView(updatePaneTypeText, "diff");

	if(updateVersion != VertexClientPE.currentVersion || type == "dev") {
		updatePaneLayoutRight.addView(updatePaneDownloadButton);
	} else {
		updatePaneLayoutRight.addView(updatePaneTypeText);
	}

	if(type == "dev") {
		updatePaneLayoutRight.addView(updatePaneCopyButton);
	} else {
		updatePaneLayoutRight.addView(updatePaneInformationButton);
	}

	return updatePaneLayout;
}

function helpSection(title, description, extraView) {
	let helpSectionLayout1 = new LinearLayout_(CONTEXT);
	helpSectionLayout1.setOrientation(1);
	helpSectionLayout1.setGravity(Gravity_.CENTER);
	helpSectionLayout1.setBackground(backgroundSpecial(true));
	let helpSectionLayout = new LinearLayout_(CONTEXT);
	helpSectionLayout.setOrientation(LinearLayout_.HORIZONTAL);
	helpSectionLayout.setGravity(Gravity_.CENTER);
	let helpSectionLayoutLeft = new LinearLayout_(CONTEXT);
	helpSectionLayoutLeft.setOrientation(1);
	helpSectionLayoutLeft.setGravity(Gravity_.CENTER);
	helpSectionLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - dip2px(10), LinearLayout_.LayoutParams.WRAP_CONTENT));
	let helpSectionLayoutRight = new LinearLayout_(CONTEXT);
	helpSectionLayoutRight.setOrientation(LinearLayout_.HORIZONTAL);
	helpSectionLayoutRight.setGravity(Gravity_.CENTER);
	helpSectionLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - dip2px(10), LinearLayout_.LayoutParams.WRAP_CONTENT));
	helpSectionLayout.addView(helpSectionLayoutLeft);
	helpSectionLayout.addView(helpSectionLayoutRight);
	let helpSectionTitle = clientTextView(" " + title);
	helpSectionTitle.setTypeface(VertexClientPE.font, Typeface_.BOLD);
	helpSectionTitle.setBackgroundDrawable(backgroundSpecial("top", themeSetting));
	let helpSectionDescription = clientTextView(description);
	helpSectionLayoutLeft.addView(helpSectionDescription);

	if(extraView != null) {
		if(typeof extraView === "function") {
			extraView = extraView();
		}
		helpSectionLayoutRight.addView(extraView);
	}

	helpSectionLayout1.addView(helpSectionTitle);
	helpSectionLayout1.addView(helpSectionLayout);

	return helpSectionLayout1;
}

function tileButton(tile, fromDashboard) {
	let tileText = tile.text;
	let tileIcon = tile.icon;
	let tileColor = tile.color;
	let forceLightColor = tile.forceLightColor;
	let defaultTileButton;

	/* if(tile.usesCustomDrawable == undefined || tile.usesCustomDrawable == null) {
		tile.usesCustomDrawable = false;
	} */

	if(fromDashboard) {
		let params = new GridLayout_.LayoutParams();
		params.setMargins(5, 5, 5, 5);
		params.width = display.widthPixels / dashboardTileSize - 10;
		params.height = display.widthPixels / dashboardTileSize - 10;

		defaultTileButton = clientButton(sharedPref.getString("VertexClientPE.tiles." + tileText + ".name", tileText), null, sharedPref.getString("VertexClientPE.tiles." + tileText + ".color", tileColor), false, sharedPref.getBoolean("VertexClientPE.tiles." + tileText + ".useLightColor", forceLightColor==null?true:forceLightColor), "tile", 0.1);
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
		defaultTileButton = clientButton(sharedPref.getString("VertexClientPE.tiles." + tileText + ".name", tileText));
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
				barUI.dismiss();
				screenUI.dismiss();
			}
			tile.onClick(fromDashboard);
		}
	});

	return defaultTileButton;
}

let barLayoutHeight = dip2px(40);
let steveHead_SCALED;

function userBar() {
	let defaultUserLayout = new LinearLayout_(CONTEXT);
	defaultUserLayout.setOrientation(LinearLayout_.HORIZONTAL);
	defaultUserLayout.setGravity(Gravity_.CENTER);
	defaultUserLayout.setLayoutParams(new LinearLayout_.LayoutParams(barLayoutHeight, barLayoutHeight));

	let steveHeadView = new ImageView_(CONTEXT);
	steveHeadView.setImageBitmap(steveHead_SCALED);

	let bg = GradientDrawable_();
	bg.setColor(Color_.TRANSPARENT); //Color_.parseColor("#70151515")
	bg.setStroke(dip2px(2), Color_.parseColor("#FFFFFF"));
	defaultUserLayout.setBackgroundDrawable(bg);

	defaultUserLayout.setOnTouchListener(new View_.OnTouchListener() {
		onTouch: function(v, event) {
			let action = event.getActionMasked();
			if(action == MotionEvent_.ACTION_CANCEL || action == MotionEvent_.ACTION_UP) {
				bg.setStroke(dip2px(2), Color_.parseColor("#FFFFFF"));
			} else {
				bg.setStroke(dip2px(2), Color_.parseColor("#d3d3d3"));
			}
			return false;
		}
	});

	defaultUserLayout.setOnClickListener(new View_.OnClickListener() {
		onClick: function(viewArg) {
			barUI.dismiss();
			screenUI.dismiss();
			VertexClientPE.showAccountManager(true, "Account Manager");
		}
	});

	defaultUserLayout.addView(steveHeadView);

	return defaultUserLayout;
}

function modButton(mod, buttonOnly, customSize, shouldUpdateGUI, cornerEnabled) {
	let modButtonName = "";
	if(mod.hasOwnProperty("isExpMod") && mod.isExpMod()) {
		modButtonName += "\u26A0 ";
	}
	modButtonName += VertexClientPE.getCustomModName(mod.name);
	let modInfoButtonName = "...";
	let leftCorner;
	let rightCorner;
	if(cornerEnabled || cornerEnabled == null) {
		leftCorner = buttonOnly==true?null:"left";
		rightCorner = buttonOnly==true?null:"right";
	}

	if(shouldUpdateGUI == null) {
		shouldUpdateGUI = false;
	}

	let modButtonLayout = new LinearLayout_(CONTEXT);
	modButtonLayout.setOrientation(LinearLayout_.HORIZONTAL);
	if(menuType != "halfscreen") {
		modButtonLayout.setPadding(10, 5, 10, 5);
	}

	/* let modButtonLayoutLeft = new LinearLayout_(CONTEXT);
	modButtonLayoutLeft.setOrientation(1);
	if(menuType == "halfscreen") {
		modButtonLayoutLeft.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2.2 - display.widthPixels / 2.5, display.heightPixels / 10));
	} else if(menuType == "halfscreen_top" || menuType == "tabbed_fullscreen") {
		modButtonLayoutLeft.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2 - display.widthPixels / 2.5 - 10, display.heightPixels / 12));
	} else {
		modButtonLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.heightPixels / 2 - display.heightPixels / 2.5 - 10, display.heightPixels / 12));
	}
	modButtonLayout.addView(modButtonLayoutLeft); */

	let modButtonLayoutCenter = new LinearLayout_(CONTEXT);
	modButtonLayoutCenter.setOrientation(1);
	if(menuType == "halfscreen") {
		modButtonLayoutCenter.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2.5, display.heightPixels / 10));
	} else if(menuType == "halfscreen_top" || menuType == "tabbed_fullscreen") {
		modButtonLayoutCenter.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels - (display.widthPixels / 2 - display.widthPixels / 2.5) - 10, display.heightPixels / 12));
	} else {
		modButtonLayoutCenter.setLayoutParams(new ViewGroup_.LayoutParams(display.heightPixels / 2.5 - 10, display.heightPixels / 12));
	}
	modButtonLayout.addView(modButtonLayoutCenter);

	let modButtonLayoutRight = new LinearLayout_(CONTEXT);
	modButtonLayoutRight.setOrientation(1);
	if(menuType == "halfscreen") {
		modButtonLayoutRight.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2.2 - display.widthPixels / 2.5, display.heightPixels / 10));
	} else if(menuType == "halfscreen_top" || menuType == "tabbed_fullscreen") {
		modButtonLayoutRight.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2 - display.widthPixels / 2.5 - 10, display.heightPixels / 12));
	} else {
		modButtonLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.heightPixels / 2 - display.heightPixels / 2.5 - 10, display.heightPixels / 12));
	}
	modButtonLayout.addView(modButtonLayoutRight);

	let defaultClientButton = clientButton(modButtonName, mod.desc, null, leftCorner);
	if(mod.name == "Bypass") {
		bypassModButtonView = defaultClientButton;
	}
	if(mod.name == "Panic") {
		panicModButtonView = defaultClientButton;
	}
	if(buttonOnly == null || !buttonOnly) {
		if(menuType == "halfscreen") {
			defaultClientButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2.5, display.heightPixels / 10));
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
	if(mod.isStateMod && mod.isStateMod() && mod.state) {
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
			let _0xff55=["\x59\x6F\x75\x27\x76\x65\x20\x63\x61\x6D\x65\x20\x61\x63\x72\x6F\x73\x73\x20\x61\x6E\x20\x6F\x75\x74\x64\x61\x74\x65\x64\x2C\x20\x65\x64\x69\x74\x65\x64\x20\x61\x6E\x64\x20\x75\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64\x20\x56\x65\x72\x74\x65\x78\x20\x43\x6C\x69\x65\x6E\x74\x20\x50\x45\x20\x73\x63\x72\x69\x70\x74\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x74\x68\x65\x20\x6F\x66\x66\x69\x63\x69\x61\x6C\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x6F\x6E\x20\x6F\x75\x72\x20\x77\x65\x62\x73\x69\x74\x65\x3A\x20\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2E\x6D\x6C","\x74\x6F\x61\x73\x74","\x59\x6F\x75\x27\x76\x65\x20\x63\x61\x6D\x65\x20\x61\x63\x72\x6F\x73\x73\x20\x61\x6E\x20\x65\x64\x69\x74\x65\x64\x20\x61\x6E\x64\x20\x75\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64\x20\x56\x65\x72\x74\x65\x78\x20\x43\x6C\x69\x65\x6E\x74\x20\x50\x45\x20\x73\x63\x72\x69\x70\x74\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x74\x68\x65\x20\x6F\x66\x66\x69\x63\x69\x61\x6C\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x6F\x6E\x20\x6F\x75\x72\x20\x77\x65\x62\x73\x69\x74\x65\x3A\x20\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2E\x6D\x6C"];if(!isAuthorized){if(!isSupported){VertexClientPE[_0xff55[1]](_0xff55[0])}else {VertexClientPE[_0xff55[1]](_0xff55[2])};return}
			let tempShouldUpdate = shouldUpdateGUI;
			if(mod.name == "Bypass" || !bypassState || !mod.hasOwnProperty("canBypassBypassMod") || (mod.hasOwnProperty("canBypassBypassMod") && mod.canBypassBypassMod()) || (mod.isStateMod() && mod.state)) {
				mod.onToggle();
			} else if(bypassState && mod.hasOwnProperty("canBypassBypassMod") && !mod.canBypassBypassMod()) {
				if(mod.isStateMod() && !mod.state) {
					mod.state = true;
				} else if(!mod.isStateMod()) {
					VertexClientPE.toast("This mod is blocked by Bypass!");
					tempShouldUpdate = false;
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
					defaultClientButton.setTextColor(modButtonColorDisabled);
					if(themeSetting == "white" && modButtonColorDisabledSetting == "black") {
						if(fontSetting != "minecraft") {
							defaultClientButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.WHITE);
						}
					} else {
						if(fontSetting != "minecraft") {
							defaultClientButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
						}
					}
				}
				VertexClientPE.setSavedModState(mod.name, mod.state);
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
			if(tempShouldUpdate) {
				VertexClientPE.shouldUpdateGUI = true;
			}
		}
	}));

	if(buttonOnly == null || !buttonOnly) {
		modButtonLayoutCenter.addView(defaultClientButton);
	} else {
		return defaultClientButton;
	}

	let defaultInfoButton = clientButton(modInfoButtonName, mod.name + " info and settings", null, rightCorner);
	if(menuType == "halfscreen") {
		defaultInfoButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2.2 - display.widthPixels / 2.5, display.heightPixels / 10));
	} else if(menuType == "halfscreen_top" || menuType == "tabbed_fullscreen") {
		defaultInfoButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2 - display.widthPixels / 2.5 - 10, display.heightPixels / 12));
	} else {
		defaultInfoButton.setLayoutParams(new ViewGroup_.LayoutParams(display.heightPixels / 2 - display.heightPixels / 2.5 - 10, display.heightPixels / 12));
	}
	defaultInfoButton.setAlpha(0.54);
	defaultInfoButton.setOnClickListener(new View_.OnClickListener({
		onClick: function(viewArg) {
			VertexClientPE.showModDialog(mod, defaultClientButton);
		}
	}));
	modButtonLayoutRight.addView(defaultInfoButton);

	return modButtonLayout;
}

function addonButton(addon) {
	let addonButtonLayout = new LinearLayout_(CONTEXT);
	addonButtonLayout.setOrientation(LinearLayout_.HORIZONTAL);
	addonButtonLayout.setGravity(Gravity_.CENTER);

	let defaultClientButton = clientButton(addon.name + " v" + addon.current_version, addon.desc);
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

	let removeButton = clientButton("x");
	removeButton.setLayoutParams(new LinearLayout_.LayoutParams(LinearLayout_.LayoutParams.WRAP_CONTENT, display.heightPixels / 8));
	removeButton.setOnClickListener(new View_.OnClickListener({
		onClick: function(viewArg) {
			addonButtonLayout.getParent().removeView(addonButtonLayout);
			VertexClientPE.AddonUtils.removeAddon(addon);
		}
	}));
	removeButton.setOnLongClickListener(new View_.OnLongClickListener() {
		onLongClick: function(viewArg) {
			VertexClientPE.toast("Remove the addon");
			return true;
		}
	});

	addonButtonLayout.addView(defaultClientButton);
	addonButtonLayout.addView(removeButton);

	return addonButtonLayout;
}

function categoryTab(category) {
	let categoryTabLayout = new LinearLayout_(CONTEXT);
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
	if(currentTab == "Misc" && miscEnabled == "off") {
		currentTab = "Combat";
	}

	let categoryName = VertexClientPE.category.toName(category);
	let categoryRealName = VertexClientPE.category.toRealName(category);

	let defaultClientButton = clientButton(categoryName);
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

				let categories = [VertexClientPE.category.COMBAT, VertexClientPE.category.WORLD, VertexClientPE.category.MOVEMENT, VertexClientPE.category.PLAYER, VertexClientPE.category.MISC];

				categories.forEach(function(element, index, array) {
					if((index == 0 && combatEnabled == "on") || (index == 1 && worldEnabled == "on") || (index == 2 && movementEnabled == "on") || (index == 3 && playerEnabled == "on") || (index == 4 && miscEnabled == "on")) {
						menuMiddleLayout.addView(new categoryTab(element));
					}
				});

				let shouldHaveCorner = !(menuType == "halfscreen");
				VertexClientPE.modules.forEach(function(element, index, array) {
					if(VertexClientPE.category.toRealName(element.category) == currentTab && (element.type == "Mod" || element.type == "Special")) {
						if(element.hasOwnProperty("isExpMod") && element.isExpMod() && !VertexClientPE.isExpMode()) {
							return;
						}
						if(element.hasOwnProperty("shouldAdd") && !element.shouldAdd()) {
							return;
						}
						menuRightLayout.addView(modButton(element, null, null, null, shouldHaveCorner));
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

	categoryTabLayout.addView(defaultClientButton);

	return categoryTabLayout;
}

let currentMPTab = "All";

function musicPlayerTab(name, tabLayout, songLayout, playBar) {
	let musicPlayerTabHolderLayout = new LinearLayout_(CONTEXT);
	musicPlayerTabHolderLayout.setOrientation(1);
	musicPlayerTabHolderLayout.setGravity(Gravity_.CENTER);

	let defaultClientButton = clientButton(name);
	defaultClientButton.setAlpha(0.54);
	defaultClientButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2 - 10, LinearLayout_.LayoutParams.WRAP_CONTENT));
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
				if(songDialog != null) {
					songDialog.dismiss();
				}

				currentMPTab = name;
				tabLayout.removeAllViews();
				songLayout.removeAllViews();

				let categories = ["All", "Favorite"];

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

	musicPlayerTabHolderLayout.addView(defaultClientButton);

	return musicPlayerTabHolderLayout;
}

let currentTabGUICategory;

function tabGUICategoryButton(category, layout, layoutToBeOpened, layoutMain) {
	let tabGUICategoryButtonLayout = new LinearLayout_(CONTEXT);
	tabGUICategoryButtonLayout.setOrientation(1);

	let categoryButton = clientButton(VertexClientPE.category.toName(category));
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
			for(let i = 0; i < layout.getChildCount(); i++) {
				let layoutChild = layout.getChildAt(i).getChildAt(0);
				if(layoutChild != categoryButton) {
					if(themeSetting == "white") {
						layoutChild.setTextColor(Color_.BLACK);
						if(fontSetting != "minecraft") {
							layoutChild.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.WHITE);
						}
					} else {
						layoutChild.setTextColor(Color_.WHITE);
						if(fontSetting != "minecraft") {
							layoutChild.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
						}
					}
				}
			}
			if(currentTabGUICategory != null) {
				let layoutToBeOpenedScrollView = new ScrollView_(CONTEXT);
				let layoutToBeOpened1 = new LinearLayout_(CONTEXT);
				layoutToBeOpened1.setOrientation(1);
				if(layoutMain.getChildCount() == 1) {
					layoutMain.addView(layoutToBeOpened);
					layoutToBeOpenedScrollView.addView(layoutToBeOpened1);
					layoutToBeOpened.addView(layoutToBeOpenedScrollView);
					VertexClientPE.modules.forEach(function(element, index, array) {
						if(element.category == category && (element.type == "Mod" || element.type == "Special")) {
							if((element.hasOwnProperty("isExpMod") && element.isExpMod() && !VertexClientPE.isExpMode()) || (element.hasOwnProperty("shouldAdd") && !element.shouldAdd())) {
								return;
							}
							layoutToBeOpened1.addView(modButton(element, true, null, true));
						}
					});
					if(VertexClientPE.isDebugMode()) {
						VertexClientPE.debugMessage("Added right layout");
					}
				} else if(layoutMain.getChildCount() == 2) {
					//layoutToBeOpened.addView for all modButtons
					layoutToBeOpened.removeAllViews();
					layoutToBeOpenedScrollView.addView(layoutToBeOpened1);
					layoutToBeOpened.addView(layoutToBeOpenedScrollView);
					VertexClientPE.modules.forEach(function(element, index, array) {
						if(element.category == category && (element.type == "Mod" || element.type == "Special")) {
							if((element.hasOwnProperty("isExpMod") && element.isExpMod() && !VertexClientPE.isExpMode()) || (element.hasOwnProperty("shouldAdd") && !element.shouldAdd())) {
								return;
							}
							layoutToBeOpened1.addView(modButton(element, true, null, true));
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
	let playerName = account.toString();

	let accountManagerAccountLayout = new LinearLayout_(CONTEXT);
	accountManagerAccountLayout.setOrientation(LinearLayout_.HORIZONTAL);
	accountManagerAccountLayout.setPadding(dip2px(10), 0, dip2px(10), 0);
	//accountManagerAccountLayout.setBackgroundDrawable();
	if(playerName == ModPE.getPlayerName()) {
		accountManagerAccountLayout.setBackgroundDrawable(backgroundSpecial(null, "green"));
	}

	let accountManagerAccountLayoutLeft = new LinearLayout_(CONTEXT);
	accountManagerAccountLayoutLeft.setOrientation(1);
	accountManagerAccountLayoutLeft.setGravity(Gravity_.CENTER_VERTICAL);
	accountManagerAccountLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
	accountManagerAccountLayout.addView(accountManagerAccountLayoutLeft);

	let accountManagerAccountLayoutCenter = new LinearLayout_(CONTEXT);
	accountManagerAccountLayoutCenter.setOrientation(1);
	accountManagerAccountLayoutCenter.setGravity(Gravity_.CENTER);
	accountManagerAccountLayoutCenter.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
	accountManagerAccountLayout.addView(accountManagerAccountLayoutCenter);

	let accountManagerAccountLayoutRight = new LinearLayout_(CONTEXT);
	accountManagerAccountLayoutRight.setOrientation(LinearLayout_.HORIZONTAL);
	accountManagerAccountLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
	accountManagerAccountLayout.addView(accountManagerAccountLayoutRight);
	let usernameText = clientTextView(account);
	usernameText.setTextSize(15);
	accountManagerAccountLayoutLeft.addView(usernameText);
	let useButton = clientButton("Use");
	useButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4  - dip2px(10), display.heightPixels / 10));
	useButton.setOnClickListener(new View_.OnClickListener({
		onClick: function(viewArg) {
			//let playerClientId = account.clientId.toString();
			let shouldRestart = false;
			if(playerName != ModPE.getPlayerName()) {
				ModPE.setPlayerName(playerName);
				shouldRestart = true;
			}
			if(shouldRestart) {
				ModPE.restart();
				return;
			}
			if(barUI != null) {
				barUI.dismiss();
			}
			screenUI.dismiss();
			VertexClientPE.menuIsShowing = false;
			showMenuButton();
		}
	}));
	accountManagerAccountLayoutRight.addView(useButton);
	let deleteButton = clientButton("x");
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
	let friendName = friend.toString();

	let delButtonWidth = display.widthPixels / 3 - display.widthPixels / 4  - dip2px(10);

	let friendManagerAccountLayout = new LinearLayout_(CONTEXT);
	friendManagerAccountLayout.setOrientation(LinearLayout_.HORIZONTAL);
	friendManagerAccountLayout.setPadding(dip2px(10), 0, dip2px(10), 0);
	//friendManagerAccountLayout.setGravity(Gravity_.CENTER);

	let friendManagerAccountLayoutLeft_ = new LinearLayout_(CONTEXT);
	friendManagerAccountLayoutLeft_.setOrientation(1);
	friendManagerAccountLayoutLeft_.setGravity(Gravity_.CENTER_VERTICAL);
	friendManagerAccountLayoutLeft_.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
	friendManagerAccountLayout.addView(friendManagerAccountLayoutLeft_);

	let friendManagerAccountLayoutLeft = new LinearLayout_(CONTEXT);
	friendManagerAccountLayoutLeft.setOrientation(LinearLayout_.HORIZONTAL);
	friendManagerAccountLayoutLeft.setGravity(Gravity_.CENTER_VERTICAL);
	friendManagerAccountLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 4 - delButtonWidth, display.heightPixels / 10));
	friendManagerAccountLayout.addView(friendManagerAccountLayoutLeft);

	let friendManagerAccountLayoutRight = new LinearLayout_(CONTEXT);
	friendManagerAccountLayoutRight.setOrientation(LinearLayout_.HORIZONTAL);
	friendManagerAccountLayoutRight.setGravity(Gravity_.RIGHT);
	friendManagerAccountLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 4 + delButtonWidth, display.heightPixels / 10));
	friendManagerAccountLayout.addView(friendManagerAccountLayoutRight);

	let usernameText = clientTextView(friendName);
	usernameText.setTextSize(15);
	usernameText.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
	usernameText.setMarqueeRepeatLimit(-1);
	usernameText.setSingleLine();
	usernameText.setHorizontallyScrolling(true);
	usernameText.setSelected(true);
	friendManagerAccountLayoutLeft.addView(usernameText);

	let deleteButton = clientButton("x");
	deleteButton.setLayoutParams(new LinearLayout_.LayoutParams(delButtonWidth, display.heightPixels / 10));
	deleteButton.setOnClickListener(new View_.OnClickListener({
		onClick: function(viewArg) {
			VertexClientPE.removeFriend(friendName, layout, friendManagerAccountLayout);
		}
	}));
	friendManagerAccountLayoutRight.addView(deleteButton);

	return friendManagerAccountLayout;
}

VertexClientPE.addTextStyleToView = function(view, parentBackgroundColor) {
	if(parentBackgroundColor == null) {
		parentBackgroundColor = themeSetting;
	}
	if(parentBackgroundColor == "white") {
		view.setTextColor(Color_.BLACK);
	} else {
		view.setTextColor(Color_.WHITE);
	}
	view.setTypeface(VertexClientPE.font);

	if(parentBackgroundColor == "white") {
		if(fontSetting != "minecraft") {
			view.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.WHITE);
		}
	} else {
		if(fontSetting != "minecraft") {
			view.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
		}
	}

	if(fontSetting == "minecraft") {
		MinecraftButtonLibrary.addMinecraftStyleToTextView(view);
	}
}

function clientEditText(text, color) //menu buttons
{
	if(text == null) {
		text = "";
	}

	let defaultEditText = new EditText_(CONTEXT);
	defaultEditText.setText(text);

	VertexClientPE.addTextStyleToView(defaultEditText, color);

	return defaultEditText;
}

function clientSeekBar() {
	let defaultSeekBar = new SeekBar_(CONTEXT);
	defaultSeekBar.getProgressDrawable().setColorFilter(new android.graphics.PorterDuffColorFilter(getColor("stroke"), PorterDuff_.Mode.SRC_IN));
	defaultSeekBar.getThumb().setColorFilter(new android.graphics.PorterDuffColorFilter(getColor("stroke"), PorterDuff_.Mode.SRC_IN));
	return defaultSeekBar;
}

function clientCheckBox(text, parentBackgroundColor) {
	if(text == null) {
		text = "";
	}
	let defaultCheckBox = new CheckBox_(CONTEXT);
	defaultCheckBox.setText(text);

	VertexClientPE.addTextStyleToView(defaultCheckBox, parentBackgroundColor);

	return defaultCheckBox;
}

function clientTextView(text, useShadow, parentBackgroundColor) //menu buttons
{
	if(useShadow == null) {
		useShadow = true;
	}

	let defaultTextView = new TextView_(CONTEXT);
	defaultTextView.setText(text);

	VertexClientPE.addTextStyleToView(defaultTextView, parentBackgroundColor);

	defaultTextView.setPadding(0, 0, 0, 0);
	defaultTextView.setLineSpacing(0, 1.15);

	return defaultTextView;
}

function clientSwitch(text, parentBackgroundColor) {
	if(text == null) {
		text = "";
	}

	let defaultSwitch = new Switch_(CONTEXT);
	defaultSwitch.setText(text);

	VertexClientPE.addTextStyleToView(defaultSwitch, parentBackgroundColor);

	return defaultSwitch;
}

function clientSectionTitle(text, style) {
	let defaultTextView = new TextView_(CONTEXT);
	defaultTextView.setText(text);

	if(style == "rainbow") {
		let rainbowInt = Array_.newInstance(Integer_.TYPE, 7);
		rainbowInt[0] = Color_.RED;
		rainbowInt[1] = Color_.MAGENTA;
		rainbowInt[2] = Color_.BLUE;
		rainbowInt[3] = Color_.CYAN;
		rainbowInt[4] = Color_.GREEN;
		rainbowInt[5] = Color_.YELLOW;
		rainbowInt[6] = Color_.RED;
		let rainbowBg = new GradientDrawable_(GradientDrawable_.Orientation.LEFT_RIGHT, rainbowInt);
		defaultTextView.setBackgroundDrawable(rainbowBg);
		VertexClientPE.addTextStyleToView(defaultTextView, "diff");
	} else {
		if(style == "theme") {
			let colorInt = Array_.newInstance(Integer_.TYPE, 2);
			colorInt[0] = getColor("inner");
			colorInt[1] = getColor("stroke");
			let colorBg = new GradientDrawable_(GradientDrawable_.Orientation.LEFT_RIGHT, colorInt);
			defaultTextView.setBackgroundDrawable(colorBg);
			VertexClientPE.addTextStyleToView(defaultTextView);
		} else {
			defaultTextView.setBackgroundDrawable(backgroundSpecial());
			VertexClientPE.addTextStyleToView(defaultTextView, "diff");
		}
	}
	defaultTextView.setPadding(0, 0, 0, 0);
	defaultTextView.setLineSpacing(0, 1.15);

	return defaultTextView;
}

function clientScreenTitle(defaultText, icon, parentBackgroundColor) {
	if(parentBackgroundColor == null) {
		parentBackgroundColor = "diff";
	}

	let defaultScreenTitle;
	defaultScreenTitle = clientTextView(sharedPref.getString("VertexClientPE.tiles." + defaultText + ".name", defaultText), true, parentBackgroundColor);
	defaultScreenTitle.setTextSize(25);
	defaultScreenTitle.setGravity(Gravity_.CENTER);
	if(icon != null) {
		defaultScreenTitle.setCompoundDrawablesRelativeWithIntrinsicBounds(icon, 0, 0, 0);
		defaultScreenTitle.setCompoundDrawablePadding(dip2px(10));
	}

	return defaultScreenTitle;
}

function clientHR() {//horizontal divider
	let defaultView = new View_(CONTEXT);
	defaultView.setLayoutParams(new LinearLayout_.LayoutParams(ViewGroup_.LayoutParams.MATCH_PARENT, 5));
	defaultView.setBackgroundColor(Color_.parseColor("#B3B3B3"));

	return defaultView;
}

function categoryTitle(text) {

	let categoryTitleLayout = new LinearLayout_(CONTEXT);
	categoryTitleLayout.setOrientation(LinearLayout_.HORIZONTAL);

	let categoryTitleLayoutLeft = new LinearLayout_(CONTEXT);
	categoryTitleLayoutLeft.setOrientation(1);
	categoryTitleLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.heightPixels / 3 - display.heightPixels / 4, display.heightPixels / 20));
	categoryTitleLayout.addView(categoryTitleLayoutLeft);

	let categoryTitleLayoutMiddle = new LinearLayout_(CONTEXT);
	categoryTitleLayoutMiddle.setOrientation(1);
	categoryTitleLayoutMiddle.setLayoutParams(new ViewGroup_.LayoutParams(display.heightPixels / 3, display.heightPixels / 20));
	categoryTitleLayout.addView(categoryTitleLayoutMiddle);

	let categoryTitleLayoutRight = new LinearLayout_(CONTEXT);
	categoryTitleLayoutRight.setOrientation(1);
	categoryTitleLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.heightPixels / 3 - display.heightPixels / 4, display.heightPixels / 20));
	categoryTitleLayout.addView(categoryTitleLayoutRight);

	let defaultSettingsButton = clientButton("\u270E", null, null, "left", null, true, dip2px(2));
	defaultSettingsButton.setLayoutParams(new LinearLayout_.LayoutParams(display.heightPixels / 3 - display.heightPixels / 4, display.heightPixels / 20));
	defaultSettingsButton.setAlpha(0.54);
	categoryTitleLayoutLeft.addView(defaultSettingsButton);

	let defaultTitle = coloredSubTitle(text);
	defaultTitle.setLayoutParams(new LinearLayout_.LayoutParams(display.heightPixels / 3, display.heightPixels / 20));
	defaultTitle.setGravity(Gravity_.CENTER);
	categoryTitleLayoutMiddle.addView(defaultTitle);

	let defaultArrowButton = clientButton("\u25BD", null, null, "right", null, true, dip2px(2));
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

	let settingButtonLayout = new LinearLayout_(CONTEXT);
	settingButtonLayout.setOrientation(LinearLayout_.HORIZONTAL);

	let settingButtonLayoutLeft = new LinearLayout_(CONTEXT);
	settingButtonLayoutLeft.setOrientation(1);
	settingButtonLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(parentWidth / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
	settingButtonLayout.addView(settingButtonLayoutLeft);

	let settingButtonLayoutMiddle = new LinearLayout_(CONTEXT);
	settingButtonLayoutMiddle.setOrientation(1);
	settingButtonLayoutMiddle.setGravity(Gravity_.RIGHT);
	settingButtonLayoutMiddle.setLayoutParams(new ViewGroup_.LayoutParams(parentWidth / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
	settingButtonLayout.addView(settingButtonLayoutMiddle);

	let settingButtonLayoutRight = new LinearLayout_(CONTEXT);
	settingButtonLayoutRight.setOrientation(1);
	settingButtonLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(parentWidth / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
	settingButtonLayout.addView(settingButtonLayoutRight);

	let defaultTitle = clientTextView(text, true);
	defaultTitle.setLayoutParams(new LinearLayout_.LayoutParams(parentWidth / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
	defaultTitle.setGravity(Gravity_.CENTER_VERTICAL);

	settingButtonLayoutLeft.addView(defaultTitle);

	let resetButton;
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

	let defaultSettingsButton = clientButton("Unknown", desc);
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
	let parentWidth = display.widthPixels - dip2px(4);

	let settingButtonLayout = new LinearLayout_(CONTEXT);
	settingButtonLayout.setOrientation(LinearLayout_.HORIZONTAL);

	let settingButtonLayoutLeft = new LinearLayout_(CONTEXT);
	settingButtonLayoutLeft.setOrientation(1);
	settingButtonLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(parentWidth / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
	settingButtonLayout.addView(settingButtonLayoutLeft);

	let settingButtonLayoutMiddle = new LinearLayout_(CONTEXT);
	settingButtonLayoutMiddle.setOrientation(1);
	settingButtonLayoutMiddle.setLayoutParams(new ViewGroup_.LayoutParams(parentWidth / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
	settingButtonLayout.addView(settingButtonLayoutMiddle);

	let settingButtonLayoutRight = new LinearLayout_(CONTEXT);
	settingButtonLayoutRight.setOrientation(1);
	settingButtonLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(parentWidth / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
	settingButtonLayout.addView(settingButtonLayoutRight);

	let defaultTitle = clientTextView(text, true);
	defaultTitle.setLayoutParams(new LinearLayout_.LayoutParams(parentWidth / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
	defaultTitle.setGravity(Gravity_.CENTER_VERTICAL);

	settingButtonLayoutLeft.addView(defaultTitle);

	let defaultSettingsButton = clientButton(currentSelection, desc);
	defaultSettingsButton.setLayoutParams(new LinearLayout_.LayoutParams(parentWidth / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
	//defaultSettingsButton.setCompoundDrawablesWithIntrinsicBounds(0, 0, android.R.layout.view_spinner_item, 0);

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
	}
	return Color_.parseColor(colorStringToCode(colorString, useLightColor));
}

function coloredSubTitle(subtitle) // TextView with colored background (edited by peacestorm)
{
	let bg = GradientDrawable_();
	bg.setColor(getColor("inner"));
	bg.setStroke(dip2px(2), getColor("stroke"));
	bg.setShape(GradientDrawable_.RECTANGLE);

	let title = clientTextView(subtitle, true);
	title.setAlpha(0.54);
	title.setBackgroundDrawable(bg);

	return title;
}

function backgroundSpecial(round, color, showProLine, lightColor) {
	let bg = GradientDrawable_();
	let rgbArray = [customRGBRed, customRGBGreen, customRGBBlue];
	if(round == true) {
		bg.setCornerRadius(8);
	} else if(round != false && round != null) {
		let radiiFloatArray = Array_.newInstance(Float_.TYPE, 9);
		let radius = 0;
		if(round == "left") {
			for(let i = 0; i <= 7; i++) {
				if(i == 0 || i == 1 || i == 6 || i == 7) {
					radiiFloatArray[i] = 8;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "right") {
			for(let i = 0; i <= 7; i++) {
				if(i == 2 || i == 3 || i == 4 || i == 5) {
					radiiFloatArray[i] = 8;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "cornerleft") {
			for(let i = 0; i <= 7; i++) {
				if(i == 6 || i == 7) {
					radiiFloatArray[i] = 180;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "cornerright") {
			for(let i = 0; i <= 7; i++) {
				if(i == 4 || i == 5) {
					radiiFloatArray[i] = 180;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "cornerleft_") {
			for(let i = 0; i <= 7; i++) {
				if(i == 0 || i == 1) {
					radiiFloatArray[i] = 180;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "cornerright_") {
			for(let i = 0; i <= 7; i++) {
				if(i == 2 || i == 3) {
					radiiFloatArray[i] = 180;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "bottom") {
			for(let i = 0; i <= 7; i++) {
				if(i >= 4) {
					radiiFloatArray[i] = 8;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "bottomleft") {
			for(let i = 0; i <= 7; i++) {
				if(i >= 4 && i <= 5) {
					radiiFloatArray[i] = 8;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "bottomright") {
			for(let i = 0; i <= 7; i++) {
				if(i >= 6) {
					radiiFloatArray[i] = 8;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "top") {
			for(let i = 0; i <= 7; i++) {
				if(i <= 3) {
					radiiFloatArray[i] = 8;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "invertcornerright") {
			for(let i = 0; i <= 7; i++) {
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
			let arr = color.split("|");
			bg.setColor(Color_.parseColor(arr[0]));
			bg.setStroke(dip2px(1), Color_.parseColor(arr[1]));
		}
	}

	if (showProLine == true) {
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
	let preset = transparent?"#70":"#";
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
		let bg = GradientDrawable_();
		let radius = 0;
		if(round == true) {
			let radiiFloatArray = Array_.newInstance(Float_.TYPE, 9);
			for(let i = 0; i <= 7; i++) {
				if(i >= 4) {
					radiiFloatArray[i] = 16;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "bottomright") {
			let radiiFloatArray = Array_.newInstance(Float_.TYPE, 9);
			for(let i = 0; i <= 7; i++) {
				if(i >= 4 && i <= 5) {
					radiiFloatArray[i] = 16;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "bottomleft") {
			let radiiFloatArray = Array_.newInstance(Float_.TYPE, 9);
			for(let i = 0; i <= 7; i++) {
				if(i >= 6) {
					radiiFloatArray[i] = 16;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "bottomleft_") {
			let radiiFloatArray = Array_.newInstance(Float_.TYPE, 9);
			for(let i = 0; i <= 7; i++) {
				if(i == 0 || i == 1) {
					radiiFloatArray[i] = 16;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "bottomright_") {
			let radiiFloatArray = Array_.newInstance(Float_.TYPE, 9);
			for(let i = 0; i <= 7; i++) {
				if(i == 2 || i == 3) {
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
			fileDirt = new File_(Environment_.getExternalStorageDirectory() + "/games/com.mojang/dirt_background.png");
			inputStreamDirt = new FileInputStream_(fileDirt);
			dirtBackgroundClientGUI = new BitmapDrawable_(android.graphics.Bitmap.createScaledBitmap(BitmapFactory_.decodeStream(inputStreamDirt), dip2px(64), dip2px(64), false));
			dirtBackgroundClientGUI.setColorFilter(android.graphics.Color.rgb(70, 70, 70), android.graphics.PorterDuff.Mode.MULTIPLY);
			dirtBackgroundClientGUI.setTileModeXY(android.graphics.Shader.TileMode.REPEAT, android.graphics.Shader.TileMode.REPEAT);
		}

		let dirt = dirtBackgroundClientGUI;
		if(transparent) {
			dirt.setAlpha(127);
		} else {
			dirt.setAlpha(255);
		}

		return dirt;
	} else if(style == "rainbow") {
		if(fileRainbow == null) {
			fileRainbow = new File_(Environment_.getExternalStorageDirectory() + "/games/com.mojang/rainbow_background.png");
			inputStreamRainbow = new FileInputStream_(fileRainbow);
			rainbowBackgroundClientGUI = new BitmapDrawable_(android.graphics.Bitmap.createScaledBitmap(BitmapFactory_.decodeStream(inputStreamRainbow), dip2px(64), dip2px(64), false));
		}

		let rainbow = rainbowBackgroundClientGUI;
		if(transparent) {
			rainbow.setAlpha(127);
		} else {
			rainbow.setAlpha(255);
		}

		return rainbow;
	}
}

VertexClientPE.editCopyrightText = function() {
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
}

function getRandomInt(min, max) {
	return Math.floor((Math.random() * max) + min);
}

VertexClientPE.checkForUpdates = function() {
	try {
		// download content
		let url = new URL_("https://raw.githubusercontent.com/Vertex-Client/Vertex-Client-PE/update/Updater/Version");
		let connection = url.openConnection();

		// get content
		inputStream = connection.getInputStream();

		// read result
		let loadedVersion = "";
		let bufferedVersionReader = new BufferedReader_(new InputStreamReader_(inputStream));
		let rowVersion = "";
		while((rowVersion = bufferedVersionReader.readLine()) != null) {
			loadedVersion += rowVersion;
		}

		if(loadedVersion.split(" ")[1] == "Beta" || loadedVersion.split(" ")[1] == "Alpha") {
			VertexClientPE.latestVersion = loadedVersion.split(" ")[0] + " " + loadedVersion.split(" ")[1];
			VertexClientPE.latestPocketEditionVersion = loadedVersion.split(" ")[2];
		} else {
			VertexClientPE.latestVersion = loadedVersion.split(" ")[0];
			VertexClientPE.latestPocketEditionVersion = loadedVersion.split(" ")[1];
		}

		// close what needs to be closed
		bufferedVersionReader.close();

		// test
		//clientMessage(VertexClientPE.getVersion("current"); + " " + latestVersion);
	} catch(err) {
		VertexClientPE.clientMessage("Can't check for updates, please check your Internet connection.");
		ModPE.log("[Vertex Client PE] VertexClientPE.checkForUpdates() caught an error: " + err);
		VertexClientPE.latestVersion = sharedPref.getString("VertexClientPE.latestVersion", VertexClientPE.currentVersion);
		VertexClientPE.latestPocketEditionVersion = sharedPref.getString("VertexClientPE.latestPocketEditionVersion", VertexClientPE.targetVersion);
		return;
	}

	editor.putString("VertexClientPE.latestVersion", VertexClientPE.latestVersion);
	editor.putString("VertexClientPE.latestPocketEditionVersion", VertexClientPE.latestPocketEditionVersion);
	editor.commit();
}

VertexClientPE.loadUpdateDescription = function() {
	try {
		// download content
		let url = new URL_("https://raw.githubusercontent.com/Vertex-Client/Vertex-Client-PE/update/Updater/Version-Desc/" + VertexClientPE.latestVersion);
		let connection = url.openConnection();

		// get content
		inputStream = connection.getInputStream();

		// read result
		let loadedUpdateDesc = "";
		let bufferedUpdateDescReader = new BufferedReader_(new InputStreamReader_(inputStream));
		let rowUpdateDesc = "";
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
		let url = new URL_("https://raw.githubusercontent.com/Vertex-Client/Vertex-Client-PE/news/News");
		let connection = url.openConnection();

		// get content
		newsInputStream = connection.getInputStream();

		// read result
		let loadedNews = "";
		let bufferedNewsReader = new BufferedReader_(new InputStreamReader_(newsInputStream));
		let rowNews = "";
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

let _0x498b=["\x6C\x6F\x61\x64\x53\x75\x70\x70\x6F\x72\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2F\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2D\x50\x45\x2F\x75\x70\x64\x61\x74\x65\x2F\x53\x75\x70\x70\x6F\x72\x74\x2F","\x63\x75\x72\x72\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E","\x2F\x73\x75\x70\x70\x6F\x72\x74","\x6E\x65\x74","\x6F\x70\x65\x6E\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x67\x65\x74\x49\x6E\x70\x75\x74\x53\x74\x72\x65\x61\x6D","","\x69\x6F","\x72\x65\x61\x64\x4C\x69\x6E\x65","\x20","\x73\x70\x6C\x69\x74","\x75\x6E\x73\x75\x70\x70\x6F\x72\x74\x65\x64","\x63\x6C\x6F\x73\x65","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x69\x73\x53\x75\x70\x70\x6F\x72\x74\x65\x64\x5F","\x67\x65\x74\x53\x74\x72\x69\x6E\x67","\x66\x61\x6C\x73\x65","\x5B\x56\x65\x72\x74\x65\x78\x20\x43\x6C\x69\x65\x6E\x74\x20\x50\x45\x5D\x20\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x6C\x6F\x61\x64\x53\x75\x70\x70\x6F\x72\x74\x28\x29\x20\x63\x61\x75\x67\x68\x74\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x3A\x20","\x6C\x6F\x67","\x70\x75\x74\x53\x74\x72\x69\x6E\x67","\x63\x6F\x6D\x6D\x69\x74","\x53\x75\x70\x70\x6F\x72\x74","\x54\x68\x69\x73\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x69\x73\x20\x6E\x6F\x74\x20\x73\x75\x70\x70\x6F\x72\x74\x65\x64\x20\x61\x6E\x79\x6D\x6F\x72\x65\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x75\x70\x67\x72\x61\x64\x65\x20\x74\x6F\x20\x74\x68\x65\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x2E","\x73\x68\x6F\x77\x42\x61\x73\x69\x63\x44\x69\x61\x6C\x6F\x67"];VertexClientPE[_0x498b[0]]= function(){try{var _0x6663x1= new java[_0x498b[4]].URL(_0x498b[1]+ VertexClientPE[_0x498b[2]]+ _0x498b[3]);var _0x6663x2=_0x6663x1[_0x498b[5]]();supportInputStream= _0x6663x2[_0x498b[6]]();var _0x6663x3=_0x498b[7];var _0x6663x4= new java[_0x498b[8]].BufferedReader( new java[_0x498b[8]].InputStreamReader(supportInputStream));var _0x6663x5=_0x498b[7];while((_0x6663x5= _0x6663x4[_0x498b[9]]())!= null){_0x6663x3+= _0x6663x5};isSupported= _0x6663x3.toString()[_0x498b[11]](_0x498b[10])[0]== _0x498b[12]?false:true;_0x6663x4[_0x498b[13]]()}catch(err){if(sharedPref[_0x498b[15]](_0x498b[14]+ VertexClientPE[_0x498b[2]],null)== _0x498b[16]){isSupported= false}else {isSupported= true};ModPE[_0x498b[18]](_0x498b[17]+ err);return};editor[_0x498b[19]](_0x498b[14]+ VertexClientPE[_0x498b[2]],isSupported.toString());editor[_0x498b[20]]();if(!isSupported){VertexClientPE[_0x498b[23]](_0x498b[21],clientTextView(_0x498b[22]))}}

/* let lastLoop = new Date;
function gameLoop() {
	let thisLoop = new Date;
	VertexClientPE.Utils.tps = 1000 / (thisLoop - lastLoop);
	lastLoop = thisLoop;
} */

VertexClientPE.isGUIShowing = function() {
	return GUI != null && !GUI.isShowing() && (miscMenu == null || !miscMenu.isShowing()) && (menu == null || !menu.isShowing()) && (fullScreenMenu == null || !fullScreenMenu.isShowing()) && (tableMenu == null || !tableMenu.isShowing()) && (emptyMenu == null || !emptyMenu.isShowing()) && (screenUI == null || !screenUI.isShowing());
}

VertexClientPE.clientTick = function() {
	new Thread_(new Runnable_() {
		run: function() {
			Thread_.sleep(1000 / 70);
			CONTEXT.runOnUiThread(new Runnable_({
				run: function() {
					let isGUIShowing = VertexClientPE.isGUIShowing();
					try {
						let _0x43af=["\x61\x75\x74\x68\x6F\x72","\x70\x65\x61\x63\x65\x73\x74\x6F\x72\x6D"];if(VertexClientPE[_0x43af[0]]!= _0x43af[1]){isAuthorized= false}
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
					if(element.isStateMod() && element.state && element.hasOwnProperty("onTick")) {
						if(bypassState && element.hasOwnProperty("canBypassBypassMod") && !element.canBypassBypassMod()) {
							return;
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

let secondTickTimer = 0;
let lagTimer = 0;

VertexClientPE.secondTick = function() {
	new Thread_(new Runnable_() {
		run: function() {
			Thread_.sleep(1000);
			VertexClientPE.modules.forEach(function(element, index, array) {
				if(element.isStateMod() && element.state && element.hasOwnProperty("onInterval")) {
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
							print("Error: " + e);
						}
					}
				}));
			}

			if(healthDisplayUI != null && healthDisplayUI.isShowing()) {
				CONTEXT.runOnUiThread(new Runnable_({
					run: function() {
						healthDisplayView.setText(Entity.getHealth(getPlayerEnt()) + "/" + Entity.getMaxHealth(getPlayerEnt()) + " \u2764");
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
				let splashScreenLayout = new LinearLayout_(CONTEXT);
				splashScreenLayout.setOrientation(1);
				splashScreenLayout.setGravity(Gravity_.CENTER);
				splashScreenLayout.setBackgroundDrawable(backgroundGradient(null, "normal_nostrokes", transparentSplashScreenSetting));

				let logoViewer5 = new ImageView_(CONTEXT);
				logoViewer5.setPadding(0, dip2px(16), 0, dip2px(16));
				logoViewer5.setImageBitmap(imgLogo);
				logoViewer5.setLayoutParams(new LinearLayout_.LayoutParams(CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 4, CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 16 + dip2px(32)));

				let splashProg = new android.widget.ProgressBar(CONTEXT);
				splashProg.setIndeterminate(true);
				splashProg.getIndeterminateDrawable().setColorFilter(getColor("stroke"), android.graphics.PorterDuff.Mode.SRC_IN);

				splashScreenLayout.addView(logoViewer5);
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
								screenChangedHookActive = true;
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

let hasShownDialog = false;

VertexClientPE.showStartScreenBar = function(screen) {
	if(screen == null) {
		screen = currentScreen;
	}
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				let snowEffect;
				if(showSnowInWinterSetting == "on" && (VertexClientPE.Utils.month == java.util.Calendar.DECEMBER || VertexClientPE.Utils.month == java.util.Calendar.JANUARY || (VertexClientPE.Utils.month == java.util.Calendar.FEBRUARY && VertexClientPE.Utils.day <= 28))) {
					snowEffect = new SnowEffect();
					snowEffect.start();
				}

				if(!hasShownDialog) {
					if(userIsNewToCurrentVersion == true) {
						VertexClientPE.showWhatsNewDialog();
					} else {
						if(!VertexClientPE.getHasShownWarningDialog()) {
							VertexClientPE.showWarningDialog();
						} else if(shouldShowTipDialogsSetting == "on") {
							VertexClientPE.showTipDialog();
						}
					}
					hasShownDialog = true;
				}

				let mainMenuListLayout = new LinearLayout_(CONTEXT);
				mainMenuListLayout.setOrientation(LinearLayout_.HORIZONTAL);
				mainMenuListLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
				mainMenuListLayout.setPadding(dip2px(8),dip2px(8),dip2px(8),dip2px(8));

				let youTubeButton = new Button_(CONTEXT);
				youTubeButton.setBackground(splashYouTubeButtonClientGUI);
				youTubeButton.setGravity(Gravity_.CENTER);
				youTubeButton.setLayoutParams(new LinearLayout_.LayoutParams(dip2px(42), dip2px(42)));
				youTubeButton.setOnTouchListener(new View_.OnTouchListener() {
					onTouch: function(v, event) {
						youTubeButton.setSoundEffectsEnabled(false);
						let action = event.getActionMasked();
						let bNP;
						if(action == MotionEvent_.ACTION_CANCEL || action == MotionEvent_.ACTION_UP) {
							bNP = splashYouTubeButtonClientGUI;
						} else {
							bNP = splashYouTubeButtonClickedClientGUI;
						}
						bNP.setFilterBitmap(false);
						bNP.setAntiAlias(false);
						youTubeButton.setBackgroundDrawable(bNP);
						return false;
					}
				});

				let twitterButton = new Button_(CONTEXT);
				twitterButton.setBackgroundDrawable(splashTwitterButtonClientGUI);
				twitterButton.setGravity(Gravity_.CENTER);
				twitterButton.setLayoutParams(new LinearLayout_.LayoutParams(dip2px(42), dip2px(42)));
				twitterButton.setOnTouchListener(new View_.OnTouchListener() {
					onTouch: function(v, event) {
						twitterButton.setSoundEffectsEnabled(false);
						let action = event.getActionMasked();
						let bNP;
						if(action == MotionEvent_.ACTION_CANCEL || action == MotionEvent_.ACTION_UP) {
							bNP = splashTwitterButtonClientGUI;
						} else {
							bNP = splashTwitterButtonClickedClientGUI;
						}
						bNP.setFilterBitmap(false);
						bNP.setAntiAlias(false);
						twitterButton.setBackgroundDrawable(bNP);
						return false;
					}
				});

				let gitHubButton = new Button_(CONTEXT);
				gitHubButton.setBackgroundDrawable(splashGitHubButtonClientGUI);
				gitHubButton.setGravity(Gravity_.CENTER);
				gitHubButton.setLayoutParams(new LinearLayout_.LayoutParams(dip2px(42), dip2px(42)));
				gitHubButton.setOnTouchListener(new View_.OnTouchListener() {
					onTouch: function(v, event) {
						gitHubButton.setSoundEffectsEnabled(false);
						let action = event.getActionMasked();
						let bNP;
						if(action == MotionEvent_.ACTION_CANCEL || action == MotionEvent_.ACTION_UP) {
							bNP = splashGitHubButtonClientGUI;
						} else {
							bNP = splashGitHubButtonClickedClientGUI;
						}
						bNP.setFilterBitmap(false);
						bNP.setAntiAlias(false);
						gitHubButton.setBackgroundDrawable(bNP);
						return false;
					}
				});

				youTubeButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						ModPE.goToURL("https://www.youtube.com/c/AgameRGaming");
					}
				}));
				twitterButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						ModPE.goToURL("http://twitter.com/VertexHX");
					}
				}));
				gitHubButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						ModPE.goToURL("https://github.com/Vertex-Client");
					}
				}));

				mainMenuListLayout.addView(youTubeButton);
				mainMenuListLayout.addView(twitterButton);
				mainMenuListLayout.addView(gitHubButton);

				if((screen == ScreenType.start_screen || screen == ScreenType.exit_dialog) && !ghostModeState) {
					if((mainMenuTextList == null || !mainMenuTextList.isShowing()) && !VertexClientPE.menuIsShowing && !VertexClientPE.playerIsInGame) {
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
								if(snowEffect != null) {
									snowEffect.finish();
									snowEffect = null;
								}
							}
						}));
					}
				}
			} catch(error) {
				print("An error occurred: " + error);
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
					VertexClientPE.updateToast("There is a new version available (v" + VertexClientPE.latestVersion + " for Minecraft Pocket Edition v" + VertexClientPE.latestPocketEditionVersion + ")!");
				}
			} else {
				if(showUpdateToastsSetting == "on") {
					VertexClientPE.updateToast("You have the latest version");
				}
			}
		}
	}).start();
}

let currentStep = 1;

VertexClientPE.showSetupScreen = function() {
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				let setupScreenLayout = new LinearLayout_(CONTEXT);
				setupScreenLayout.setOrientation(1);
				setupScreenLayout.setGravity(Gravity_.CENTER_HORIZONTAL);

				let setupScreenLayoutBottom = new LinearLayout_(CONTEXT);
				setupScreenLayoutBottom.setOrientation(LinearLayout_.HORIZONTAL);

				let setupScreenLayoutBottomLeft = new LinearLayout_(CONTEXT);
				setupScreenLayoutBottomLeft.setOrientation(1);
				setupScreenLayoutBottomLeft.setGravity(Gravity_.CENTER_HORIZONTAL);
				setupScreenLayoutBottomLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 4, LinearLayout_.LayoutParams.WRAP_CONTENT));

				let setupScreenLayoutBottomCenter = new LinearLayout_(CONTEXT);
				setupScreenLayoutBottomCenter.setOrientation(1);
				setupScreenLayoutBottomCenter.setGravity(Gravity_.CENTER_HORIZONTAL);
				setupScreenLayoutBottomCenter.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 4, LinearLayout_.LayoutParams.WRAP_CONTENT));

				let setupScreenLayoutBottomCenter1 = new LinearLayout_(CONTEXT);
				setupScreenLayoutBottomCenter1.setOrientation(1);
				setupScreenLayoutBottomCenter1.setGravity(Gravity_.CENTER_HORIZONTAL);
				setupScreenLayoutBottomCenter1.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 4, LinearLayout_.LayoutParams.WRAP_CONTENT));

				let setupScreenLayoutBottomRight = new LinearLayout_(CONTEXT);
				setupScreenLayoutBottomRight.setOrientation(1);
				setupScreenLayoutBottomRight.setGravity(Gravity_.CENTER_HORIZONTAL);
				setupScreenLayoutBottomRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 4, LinearLayout_.LayoutParams.WRAP_CONTENT));

				let logoViewer3 = new ImageView_(CONTEXT);
				logoViewer3.setPadding(0, dip2px(16), 0, dip2px(16));
				logoViewer3.setImageBitmap(imgLogo);
				logoViewer3.setLayoutParams(new LinearLayout_.LayoutParams(CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 4, CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 16 + dip2px(32)));
				setupScreenLayout.addView(logoViewer3);

				let setupStepRow = new LinearLayout_(CONTEXT);
				setupStepRow.setOrientation(LinearLayout_.HORIZONTAL);
				setupStepRow.setGravity(Gravity_.CENTER);
				setupScreenLayout.addView(setupStepRow);

				let step1Button = new Button_(CONTEXT);
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
							if(presetSpinner.getParent() != null) {
								presetSpinner.getParent().removeView(presetSpinner);
							}
							step1Button.setTextColor(Color_.parseColor("#0080FF"));
							step2Button.setTextColor(Color_.WHITE);
							step3Button.setTextColor(Color_.WHITE);
							step4Button.setTextColor(Color_.WHITE);
							step5Button.setTextColor(Color_.WHITE);
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

				let step2Button = new Button_(CONTEXT);
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
							if(presetSpinner.getParent() != null) {
								presetSpinner.getParent().removeView(presetSpinner);
							}
							step1Button.setTextColor(Color_.WHITE);
							step2Button.setTextColor(Color_.parseColor("#0080FF"));
							step3Button.setTextColor(Color_.WHITE);
							step4Button.setTextColor(Color_.WHITE);
							step5Button.setTextColor(Color_.WHITE);
							setupTextView.startAnimation(textAnim);
							setupTextView.setText(setupStep2Text);
							setupScreenLayoutBottomCenter.addView(setupButtonGreen);
							setupScreenLayoutBottomCenter.addView(setupButtonRed);
							setupScreenLayoutBottomCenter1.addView(setupButtonBlue);
							setupScreenLayoutBottomCenter1.addView(setupButtonPurple);
							doneButton.setText("\u2794");
							doneButton.setOnClickListener(new View_.OnClickListener({
								onClick: function(viewArg) {
									step3Button.performClick();
								}
							}));
						}
					}
				});

				let step3Button = new Button_(CONTEXT);
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
							if(presetSpinner.getParent() != null) {
								presetSpinner.getParent().removeView(presetSpinner);
							}
							step1Button.setTextColor(Color_.WHITE);
							step2Button.setTextColor(Color_.WHITE);
							step3Button.setTextColor(Color_.parseColor("#0080FF"));
							step4Button.setTextColor(Color_.WHITE);
							step5Button.setTextColor(Color_.WHITE);
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
				
				let step4Button = new Button_(CONTEXT);
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
							step5Button.setTextColor(Color_.WHITE);
							setupTextView.startAnimation(textAnim);
							setupTextView.setText(setupStep4Text);
							setupScreenLayout.addView(presetSpinner);
							doneButton.setText("\u2794");
							doneButton.setOnClickListener(new View_.OnClickListener({
								onClick: function(viewArg) {
									step5Button.performClick();
								}
							}));
						}
					}
				});

				let step5Button = new Button_(CONTEXT);
				step5Button.setBackgroundDrawable(drawCircle(Color_.parseColor("#80ffffff")));
				step5Button.setText("5");
				step5Button.setTextColor(Color_.WHITE);
				step5Button.setLayoutParams(new LinearLayout_.LayoutParams(CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 16, CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 16));
				step5Button.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(v) {
						if(currentStep != 5) {
							currentStep = 5;
							setupScreenLayoutBottomLeft.removeAllViews();
							setupScreenLayoutBottomCenter.removeAllViews();
							setupScreenLayoutBottomCenter1.removeAllViews();
							setupScreenLayoutBottomRight.removeAllViews();
							if(presetSpinner.getParent() != null) {
								presetSpinner.getParent().removeView(presetSpinner);
							}
							step1Button.setTextColor(Color_.WHITE);
							step2Button.setTextColor(Color_.WHITE);
							step3Button.setTextColor(Color_.WHITE);
							step4Button.setTextColor(Color_.WHITE);
							step5Button.setTextColor(Color_.parseColor("#0080FF"));
							setupTextView.startAnimation(textAnim);
							setupTextView.setText(setupStep5Text);
							doneButton.setText("\u2713");
							doneButton.setOnClickListener(new View_.OnClickListener({
								onClick: function(viewArg) {
									themeSetting = setupColor;
									if(selectedPresetNum == 1) {
										//allin
										tabGUIModeSetting = "on";
										showSnowInWinterSetting = "on";
										playMusicSetting = "shuffle";
									} else if(selectedPresetNum == 2) {
										//high perf
										hacksListModeSetting = "off";
										f5ButtonModeSetting = "off";
										buttonStyleSetting = "android";
										menuType = "halfscreen";
									}
									VertexClientPE.saveMainSettings();
									VertexClientPE.editCopyrightText();
									logoViewer3.clearAnimation();
									doneUI.dismiss(); //Close
									screenUI.dismiss();
									showMenuButton();
									VertexClientPE.showUpdate();
									VertexClientPE.AddonUtils.loadAddons();
									VertexClientPE.loadFloatingMenus();
									VertexClientPE.clientTick();
									VertexClientPE.inGameTick();
									VertexClientPE.specialTick();
									VertexClientPE.secondTick();
									VertexClientPE.setupMCPEGUI();
									VertexClientPE.initMods(null, false);
								}
							}));
						}
					}
				});

				let space1 = new TextView_(CONTEXT);
				space1.setBackgroundDrawable(new ColorDrawable_(Color_.WHITE));

				let space2 = new TextView_(CONTEXT);
				space2.setBackgroundDrawable(new ColorDrawable_(Color_.WHITE));

				let space3 = new TextView_(CONTEXT);
				space3.setBackgroundDrawable(new ColorDrawable_(Color_.WHITE));

				let space4 = new TextView_(CONTEXT);
				space4.setBackgroundDrawable(new ColorDrawable_(Color_.WHITE));

				setupStepRow.addView(step1Button);
				setupStepRow.addView(space1, dip2px(8), dip2px(1));
				setupStepRow.addView(step2Button);
				setupStepRow.addView(space2, dip2px(8), dip2px(1));
				setupStepRow.addView(step3Button);
				setupStepRow.addView(space3, dip2px(8), dip2px(1));
				setupStepRow.addView(step4Button);
				setupStepRow.addView(space4, dip2px(8), dip2px(1));
				setupStepRow.addView(step5Button);
				
				let setupSpaceAbove = clientTextView("");
				setupSpaceAbove.setGravity(Gravity_.CENTER);
				setupScreenLayout.addView(setupSpaceAbove);

				let setupTextView = clientTextView("");
				setupTextView.setGravity(Gravity_.CENTER);
				setupScreenLayout.addView(setupTextView);
				
				let setupSpaceBelow = clientTextView("");
				setupSpaceBelow.setGravity(Gravity_.CENTER);
				setupScreenLayout.addView(setupSpaceBelow);

				let setupStep1Text = "Thanks for choosing Vertex Client PE!\nGo to the next step to choose your favourite color. :)";
				let setupStep2Text = "Feel free to choose one of the theme colors below.\nYou can always change the color on the settings screen.\nEven more colors are available there.";
				let setupStep3Text = "Now you can optimize your experience by choosing the mod categories you want to use.\nYou'll be able to change this on the settings screen at any time.";
				let setupStep4Text = "Please choose a settings preset. High performance is best when you want less lag,\ndefault is to use default settings and 'All-in' means all features including optional ones\n(TabGUI for example) will be enabled.";
				let setupStep5Text = "That's it! Your experience starts here.\n\nHere's some additional help to get started:\n- You can open the Dashboard and some other features from the 'More' dialog,\nwhich can be opened by long tapping the menu button.\n- More help is available on the Help screen which is also accessible from the Dashboard.";

				setupTextView.setText(setupStep1Text);

				setupScreenLayoutBottom.addView(setupScreenLayoutBottomLeft);
				setupScreenLayoutBottom.addView(setupScreenLayoutBottomCenter);
				setupScreenLayoutBottom.addView(setupScreenLayoutBottomCenter1);
				setupScreenLayoutBottom.addView(setupScreenLayoutBottomRight);

				setupScreenLayout.addView(setupScreenLayoutBottom);

				let setupButtonGreen = clientButton("Green", null, "green");
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

				let setupButtonRed = clientButton("Red", null, "red");
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

				let setupButtonBlue = clientButton("Blue", null, "blue");
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

				let setupButtonPurple = clientButton("Purple", null, "purple");
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

				let combatEnabledSettingButton = clientSwitch();
				combatEnabledSettingButton.setText("Combat");
				combatEnabledSettingButton.setChecked(combatEnabled == "on");
				combatEnabledSettingButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
					onCheckedChanged: function() {
						if(combatEnabled == "off") {
							combatEnabled = "on";
						} else if(combatEnabled == "on") {
							combatEnabled = "off";
						}
						VertexClientPE.saveFeaturesSettings();
					}
				}));

				let worldEnabledSettingButton = clientSwitch();
				worldEnabledSettingButton.setText("World");
				worldEnabledSettingButton.setChecked(worldEnabled == "on");
				worldEnabledSettingButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
					onCheckedChanged: function() {
						if(worldEnabled == "off") {
							worldEnabled = "on";
						} else if(worldEnabled == "on") {
							worldEnabled = "off";
						}
						VertexClientPE.saveFeaturesSettings();
					}
				}));

				let movementEnabledSettingButton = clientSwitch();
				movementEnabledSettingButton.setText("Movement");
				movementEnabledSettingButton.setChecked(movementEnabled == "on");
				movementEnabledSettingButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
					onCheckedChanged: function() {
						if(movementEnabled == "off") {
							movementEnabled = "on";
						} else if(movementEnabled == "on") {
							movementEnabled = "off";
						}
						VertexClientPE.saveFeaturesSettings();
					}
				}));

				let playerEnabledSettingButton = clientSwitch();
				playerEnabledSettingButton.setText("Player");
				playerEnabledSettingButton.setChecked(playerEnabled == "on");
				playerEnabledSettingButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
					onCheckedChanged: function() {
						if(playerEnabled == "off") {
							playerEnabled = "on";
						} else if(playerEnabled == "on") {
							playerEnabled = "off";
						}
						VertexClientPE.saveFeaturesSettings();
					}
				}));

				let miscEnabledSettingButton = clientSwitch();
				miscEnabledSettingButton.setText("Misc");
				miscEnabledSettingButton.setChecked(miscEnabled == "on");
				miscEnabledSettingButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
					onCheckedChanged: function() {
						if(miscEnabled == "off") {
							miscEnabled = "on";
						} else if(miscEnabled == "on") {
							miscEnabled = "off";
						}
						VertexClientPE.saveFeaturesSettings();
					}
				}));

				let singleplayerEnabledSettingButton = clientSwitch();
				singleplayerEnabledSettingButton.setText("Singleplayer only mods");
				singleplayerEnabledSettingButton.setChecked(singleplayerEnabled == "on");
				singleplayerEnabledSettingButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
					onCheckedChanged: function() {
						if(singleplayerEnabled == "off") {
							singleplayerEnabled = "on";
						} else if(singleplayerEnabled == "on") {
							singleplayerEnabled = "off";
						}
						VertexClientPE.saveFeaturesSettings();
					}
				}));
				
				let selectedPresetNum = 0;
				let presetNames = ["Default", "All-in", "High performance"];
				let arrayAdapter = new ArrayAdapter_(CONTEXT, android.R.layout.simple_spinner_item, presetNames);
				arrayAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
				let presetSpinner = new Spinner_(CONTEXT, Spinner_.MODE_DIALOG);
				presetSpinner.setAdapter(arrayAdapter);
				presetSpinner.setSelection(selectedPresetNum);
				presetSpinner.setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener({
					onItemSelected: function(parent, v, pos, id) {
						if(selectedPresetNum == pos) {
							return;
						}
						selectedPresetNum = pos;
					},
					onNothingSelected: function(parent) {
						presetSpinner.setSelection(selectedPresetNum);
					}
				}));

				let doneLayout = new LinearLayout_(CONTEXT);
				let doneButton = new Button_(CONTEXT);
				doneButton.setBackgroundDrawable(drawQuarterCircle(Color_.parseColor("#80ffffff"), dip2px(60)));
				doneButton.setGravity(Gravity_.RIGHT | Gravity_.TOP);
				doneButton.setPadding(0, dip2px(8), dip2px(8), 0);
				doneButton.setText("\u2794");
				doneButton.setTextSize(20);
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

				let logoAnim = new android.view.animation.AlphaAnimation(0, 1);
				logoAnim.setInterpolator(new android.view.animation.LinearInterpolator());
				logoAnim.setRepeatCount(android.view.animation.Animation.INFINITE);
				logoAnim.setRepeatMode(android.view.animation.Animation.REVERSE);
				logoAnim.setDuration(1500);

				logoViewer3.startAnimation(logoAnim);

				let textAnim = new android.view.animation.AlphaAnimation(0, 1);
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
				print("An error occurred: " + error);
				VertexClientPE.showBugReportDialog(error);
			}
		}
	}));
}

let accountManagerLayoutLeft;
let accountManagerLayoutCenter;
let accountManagerLayoutRight;

ModPE.restart = function () {
	try {
		let alarmManager = CONTEXT.getSystemService("alarm"),
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
		let tempAccounts = new JSONArray_();
		for(let i = 0; i < VertexClientPE.accounts.length(); i++) {
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
		let tempAccounts = new JSONArray_();
		for(let i = 0; i < VertexClientPE.friends.length(); i++) {
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

VertexClientPE.removeWaypoint = function(name) {
	VertexClientPE.toast("Removing waypoints is not supported yet");
	return;
}

VertexClientPE.showDirectUseAccountDialog = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				let accountTitle = clientTextView("Direct use account", true);
				let accountNameInput = clientEditText();
				accountNameInput.setSingleLine(true);
				accountNameInput.setHint("Enter an username");
				let accountClientIdInput = clientEditText();
				accountClientIdInput.setHint("Enter a client id (leave blank for random)");
				let okButton = clientButton("Ok");
				let cancelButton = clientButton("Cancel");
				let dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(accountTitle);
				dialogLayout.addView(accountNameInput);
				dialogLayout.addView(accountClientIdInput);
				dialogLayout.addView(okButton);
				dialogLayout.addView(cancelButton);
				let dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("Direct use account");
				dialog.show();
				okButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						let accountName = accountNameInput.getText().toString();
						let clientId = accountClientIdInput.getText().toString();
						if(accountName == null || accountName == "" || accountName.replaceAll(" ", "") == "") {
							VertexClientPE.toast("Enter an username!");
							return;
						}
						if(clientId == null || clientId == "" || clientId.replaceAll(" ", "") == "") {
							clientId = getRandomInt(100, 999999999).toString();
						}
						let shouldRestart = false;
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

VertexClientPE.showAccountManager = function(showBackButton, title) {
	VertexClientPE.menuIsShowing = true;
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				if(GUI != null && GUI.isShowing()) {
					GUI.dismiss();
				}
				if(accountManagerGUI != null && accountManagerGUI.isShowing()) {
					accountManagerGUI.dismiss();
				}
				if(mainMenuTextList != null && mainMenuTextList.isShowing()) {
					mainMenuTextList.dismiss();
				}

				let accountManagerLayout1 = new LinearLayout_(CONTEXT);
				accountManagerLayout1.setOrientation(1);
				accountManagerLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);

				let accountManagerEnter = clientTextView("\n");
				accountManagerLayout1.addView(accountManagerEnter);

				let accountManagerScrollViewHeight = (display.heightPixels / 3) * 2;

				let accountManagerBottomLayout = new LinearLayout_(CONTEXT);
				accountManagerBottomLayout.setOrientation(LinearLayout_.HORIZONTAL);
				accountManagerBottomLayout.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels, display.heightPixels - accountManagerScrollViewHeight - barLayoutHeight / 2 - accountManagerEnter.getLineHeight() / 2));
				accountManagerBottomLayout.setGravity(Gravity_.CENTER);

				let addAccountButton = clientButton("Add account");
				addAccountButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
				addAccountButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						//show add account dialog
						VertexClientPE.showAddAccountDialog(showBackButton, title);
					}
				}));
				accountManagerBottomLayout.addView(addAccountButton);

				let directUseAccountButton = clientButton("Direct use");
				directUseAccountButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
				directUseAccountButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						VertexClientPE.showDirectUseAccountDialog();
					}
				}));
				accountManagerBottomLayout.addView(directUseAccountButton);

				let importAccountButton = clientButton("Import");
				importAccountButton.setLayoutParams(new LinearLayout_.LayoutParams(LinearLayout_.LayoutParams.WRAP_CONTENT, display.heightPixels / 10));
				importAccountButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						VertexClientPE.toast("W.I.P.");
					}
				}));
				//accountManagerBottomLayout.addView(importAccountButton);

				let accountManagerScrollView = new ScrollView_(CONTEXT);
				accountManagerScrollView.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels, accountManagerScrollViewHeight - barLayoutHeight / 2 - accountManagerEnter.getLineHeight() / 2));

				let accountManagerLayout = new LinearLayout_(CONTEXT);
				accountManagerLayout.setOrientation(1);

				accountManagerScrollView.addView(accountManagerLayout);
				accountManagerLayout1.addView(accountManagerScrollView);
				accountManagerLayout1.addView(accountManagerBottomLayout);

				let accountsLength = VertexClientPE.accounts.length();
				if(VertexClientPE.accounts != null && accountsLength != -1) {
					for(let i = 0; i < accountsLength; i++) {
						//if(VertexClientPE.accounts[i].username != null && VertexClientPE.accounts[i].username != undefined && VertexClientPE.accounts[i].username != " ") {
							let usernameLayout = accountButton(VertexClientPE.accounts.get(i), accountManagerLayout);
							accountManagerLayout.addView(usernameLayout);
						//}
					}
				}

				screenUI = new PopupWindow_(accountManagerLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight() - barLayoutHeight);
				screenUI.setBackgroundDrawable(backgroundGradient());
				screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.BOTTOM, 0, 0);

				VertexClientPE.showExitButtons(showBackButton, title);
			} catch(error) {
				print("An error occurred: " + error);
			}
		}
	}));
}

VertexClientPE.showFriendManager = function(showBackButton, title, icon) {
	VertexClientPE.menuIsShowing = true;
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				VertexClientPE.checkGUINeedsDismiss();

				let friendManagerLayout1 = new LinearLayout_(CONTEXT);
				friendManagerLayout1.setOrientation(1);
				friendManagerLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);

				let friendManagerEnter = clientTextView("\n");
				friendManagerLayout1.addView(friendManagerEnter);

				let friendManagerScrollViewHeight = (display.heightPixels / 3) * 2;

				let friendManagerBottomLayout = new LinearLayout_(CONTEXT);
				friendManagerBottomLayout.setOrientation(LinearLayout_.HORIZONTAL);
				friendManagerBottomLayout.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels, display.heightPixels - friendManagerScrollViewHeight - barLayoutHeight / 2 - friendManagerEnter.getLineHeight() / 2));
				friendManagerBottomLayout.setGravity(Gravity_.CENTER);

				let addFriendButton = clientButton("Add friend");
				addFriendButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
				addFriendButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						//show add account dialog
						VertexClientPE.showAddFriendDialog(showBackButton, title, icon);
					}
				}));
				friendManagerBottomLayout.addView(addFriendButton);

				let friendManagerScrollView = new ScrollView_(CONTEXT);
				friendManagerScrollView.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels, friendManagerScrollViewHeight - barLayoutHeight / 2 - friendManagerEnter.getLineHeight() / 2));

				let friendManagerLayout = new LinearLayout_(CONTEXT);
				friendManagerLayout.setOrientation(1);

				friendManagerScrollView.addView(friendManagerLayout);
				friendManagerLayout1.addView(friendManagerScrollView);
				friendManagerLayout1.addView(friendManagerBottomLayout);

				let friendsLength = VertexClientPE.friends.length();
				if(VertexClientPE.friends != null && friendsLength != -1) {
					for(let i = 0; i < friendsLength; i++) {
						let friendLayout = friendButton(VertexClientPE.friends.get(i), friendManagerLayout);
						friendManagerLayout.addView(friendLayout);
					}
				}

				screenUI = new PopupWindow_(friendManagerLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight() - barLayoutHeight);
				screenUI.setBackgroundDrawable(backgroundGradient());
				screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.BOTTOM, 0, 0);

				VertexClientPE.showExitButtons(showBackButton, title, icon);
			} catch(error) {
				print("An error occurred: " + error);
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

let itemGiverItems = [];

const match_technical_tile = /^tile\.[0-9]+\.name$/;

VertexClientPE.loadItemGiverItems = function() {
	for(let i = 1; i <= 4096; i++) {
		if(Item.isValidItem(i)) {
			let name = Item.getName(i);
			if(!(name === Item.getName(i, null, true) && match_technical_tile.test(name)) && name != undefined) {
				itemGiverItems.push(i);
			}
		}
	}
}

VertexClientPE.setup = function() {
	new Thread_(new Runnable_({
		run: function() {
			try {
				VertexClientPE.loadMainSettings();
				VertexClientPE.showSplashScreen();
				VertexClientPE.setupMCPEGUI();
				VertexClientPE.loadFeaturesSettings();
				VertexClientPE.loadSupport();
				VertexClientPE.checkForUpdates();
				VertexClientPE.loadUpdateDescription();
				VertexClientPE.loadNews();
				VertexClientPE.loadItemGiverItems();
				VertexClientPE.loadAccounts();
				VertexClientPE.loadFriends();
				Thread_.sleep(3000);
			} finally {
				CONTEXT.runOnUiThread(new Runnable_({
					run: function() {
						VertexClientPE.setupModButtonColors();
						if(VertexClientPE.loadMainSettings() == null) {
							VertexClientPE.setHasUsedCurrentVersion(true);
							userIsNewToCurrentVersion = false;
							VertexClientPE.showSetupScreen();
						} else {
							if(!VertexClientPE.getHasUsedCurrentVersion()) {
								userIsNewToCurrentVersion = true;
							}
							VertexClientPE.editCopyrightText();
							VertexClientPE.clientTick();
							VertexClientPE.inGameTick();
							VertexClientPE.specialTick();
							VertexClientPE.secondTick();
							VertexClientPE.showUpdate();
							VertexClientPE.AddonUtils.loadAddons();
							VertexClientPE.loadFloatingMenus();
							showMenuButton();
							VertexClientPE.initMods(null, modsStayEnabledSetting=="on");
						}

						if(ModPE.getMinecraftVersion() < VertexClientPE.minVersion) {
							VertexClientPE.showBasicDialog("Compatibility", clientTextView("This version may not be compatible with MCPE v" + ModPE.getMinecraftVersion() + "!"));
						}

						if(VertexClientPE.Utils.day < 25 && VertexClientPE.Utils.month == java.util.Calendar.DECEMBER) {
							VertexClientPE.showChristmasToast(25 - VertexClientPE.Utils.day);
						} else if(VertexClientPE.Utils.day == 25 && VertexClientPE.Utils.month == java.util.Calendar.DECEMBER) {
							VertexClientPE.showChristmasToast();
						}

						/* VertexClientPE.MusicUtils.initMusicPlayer();
						VertexClientPE.MusicUtils.startMusicPlayer(); //temp removed music player, songs unavailable */

						if(showNewsSetting == "on") {
							VertexClientPE.toast(news);
						}
					}
				}));
			}
		}
	})).start();
}

function downloadFile(path, url, showNotification, shouldReplace) {
	try {
		showNotification = showNotification || false;
		shouldReplace = shouldReplace || false;
		let file = new File_(path);
		if(shouldReplace && file.exists()) {
			file.delete();
		}
		let filename = file.getName(),
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
	let res = ["clienticon_new.png", "clienticon_new_clicked.png", "play_button.png", "play_button_clicked.png", "twitter_button.png", "twitter_button_clicked.png", "youtube_button.png", "youtube_button_clicked.png", "github_button.png", "github_button_clicked.png", "vertex_logo_new.png", "stevehead.png", "minecraft.ttf", "christmas_tree.png", "dirt_background.png", "rainbow_background.png"],
		langs = ["en", "ko", "nl"],
		isExisting = true;
	for (let i = res.length; i--;) {
		if (!new File_(PATH, res[i]).exists()) {
			downloadFile(PATH + res[i], GITHUB_URL + "bootstrap/img/" + res[i]);
			isExisting = false;
		}
	}
	for (var i = langs.length; i--;) {
		if (!new File_(PATH + "/lang/", langs[i] + ".json").exists()) {
			downloadFile(PATH + "/lang/" + langs[i] + ".json", "https://raw.githubusercontent.com/Vertex-Client/Vertex-Client-PE/feature/i18n/lang/" + langs[i] + ".json");
			isExisting = false;
		}
	}
	if (isExisting) {
		steveHead_SCALED = Bitmap_.createScaledBitmap(imgSteveHead, barLayoutHeight - dip2px(2), barLayoutHeight - dip2px(2), false);
		VertexClientPE.setup();
	} else {
		new Thread_({
			run() {
				VertexClientPE.toast("Downloading resource files...");
				while (!isExisting) {
					Thread_.sleep(1000);
					for (let i = res.length; i--;) {
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

let coordsButton;

VertexClientPE.getHighestBlockDifference = function() {
	let x = getPlayerX();
	let y = getPlayerY();
	let z = getPlayerZ();
	while(getTile(x, y, z) == 0) {
		y--;
	}
	if(getTile(x, y, z) != 0) {
		return getPlayerY() - 2 - y;
	}
}

const trailsModes = [
	["off", i18n("OFF")],
	["flame", "Flame"],
	["redstone", "Redstone"]
];

const renderTypes = [
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
	for(let i = 0; i < layout.getChildCount(); i++) {
		let currentChild = layout.getChildAt(i);
		if(currentChild.getText() == Entity.renderTypeToName(rT)) {
			currentChild.setTextColor(Color_.GREEN);
		} else {
			VertexClientPE.addTextStyleToView(currentChild);
		}
	}
}

VertexClientPE.setTrailsMode = function(trailMode, layout) {
	VertexClientPE.trailsMode = trailMode[0];
	for(let i = 0; i < layout.getChildCount(); i++) {
		let currentChild = layout.getChildAt(i);
		if(currentChild.getText() == trailMode[1]) {
			currentChild.setTextColor(Color_.GREEN);
		} else {
			VertexClientPE.addTextStyleToView(currentChild);
		}
	}
}

VertexClientPE.showTrails = function() {
	let trailsParticleType;
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
	let scripts = net.zhuoweizhang.mcpelauncher.ScriptManager.scripts;
    for(let i = 0; i < scripts.size(); i++) {
        let script = scripts.get(i);
        let scope = script.scope;
        if(org.mozilla.javascript.ScriptableObject.hasProperty(scope, "VertexClientPE"))
            return script.name;
	}
}

VertexClientPE.refreshEnabledMods = function() {
	VertexClientPE.modules.forEach(function(element, index, array) {
		if(element.hasOwnProperty("isStateMod") && element.isStateMod()) {
			if(element.state) {
				if(element.name == "Bypass" || !bypassState || !element.hasOwnProperty("canBypassBypassMod") || (element.hasOwnProperty("canBypassBypassMod") && element.canBypassBypassMod())) {
					for(let i = 0; i <= 1; i++) {
						element.onToggle();
					}
				}
			}
		}
	});

	//REFRESHED MODS
}

function newLevel() {
	try {
		if(!VertexClientPE.playerIsInGame) {
			VertexClientPE.playerIsInGame = true;
			lagTimer = 0;
			CONTEXT.runOnUiThread(new Runnable_() {
				run: function() {
					if(accountManagerGUI != null && accountManagerGUI.isShowing()) {
						accountManagerGUI.dismiss();
					}
					if(mainMenuTextList != null && mainMenuTextList.isShowing()) {
						mainMenuTextList.dismiss();
					}
				}
			});
			autoLeaveStage = 0;
			VertexClientPE.loadMainSettings();
			if(!VertexClientPE.isRemote()) {
				VertexClientPE.loadDeathCoords();
				VertexClientPE.loadWaypoints();
			}
			VertexClientPE.Utils.loadFov();
			if(VertexClientPE.latestVersion != VertexClientPE.currentVersion && VertexClientPE.latestVersion != undefined) {
				VertexClientPE.clientMessage("There is a new version available (v" + VertexClientPE.latestVersion + " for Minecraft Pocket Edition v" + VertexClientPE.latestPocketEditionVersion + ")!");
			}
			VertexClientPE.Render.initViews();
			VertexClientPE.Utils.world.logMessages = [];
			VertexClientPE.refreshEnabledMods();
		}
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
			if(watermarkUI != null) {
				watermarkUI.dismiss();
			}
			if(rotationPlusUI != null) {
				rotationPlusUI.dismiss();
			}
			VertexClientPE.closeMenu();
			showMenuButton();
			VertexClientPE.saveMainSettings();
			VertexClientPE.editCopyrightText();
			VertexClientPE.Render.deinitViews();
		}
	}));
	VertexClientPE.playerIsInGame = false;
	VertexClientPE.isPaused = false;
}

VertexClientPE.checkGUINeedsDismiss = function() {
	if(moreMenuIsOpen) {
		moreDialog.dismiss();
	}
	if(screenUI != null && screenUI.isShowing()) {
		screenUI.dismiss();
	}
	if(barUI != null && barUI.isShowing()) {
		barUI.dismiss();
	}
	if(GUI != null && GUI.isShowing()) {
		GUI.dismiss();
	}
	if(hacksList != null && hacksList.isShowing()) {
		hacksList.dismiss();
	}
	if(tabGUI != null && tabGUI.isShowing()) {
		tabGUI.dismiss();
	}
	if(shortcutGUI != null && shortcutGUI.isShowing()) {
		shortcutGUI.dismiss();
	}
	if(healthDisplayUI != null && healthDisplayUI.isShowing()) {
		healthDisplayUI.dismiss();
	}
	if(watermarkUI != null && watermarkUI.isShowing()) {
		watermarkUI.dismiss();
	}
	if(rotationPlusUI != null && rotationPlusUI.isShowing()) {
		rotationPlusUI.dismiss();
	}
	if(mainMenuTextList != null && mainMenuTextList.isShowing()) {
		mainMenuTextList.dismiss();
	}
	if(accountManagerGUI != null && accountManagerGUI.isShowing()) {
		accountManagerGUI.dismiss();
	}
	if(pauseUtilitiesUI != null && pauseUtilitiesUI.isShowing()) {
		pauseUtilitiesUI.dismiss();
	}
}

let settingsMenuScroll;
let scrollPosition;

function refreshSettingsScreen() {
	scrollPosition = [settingsMenuScroll.getScrollX(), settingsMenuScroll.getScrollY()];
	barUI.dismiss()
	screenUI.dismiss();
	settingsMenuScroll = null;
	settingsTile.onClick(true);
}

function settingsScreen(fromDashboard) {
	VertexClientPE.menuIsShowing = true;
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				VertexClientPE.checkGUINeedsDismiss();

				let settingsMenuLayout = new LinearLayout_(CONTEXT);
				settingsMenuLayout.setOrientation(1);
				settingsMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
				settingsMenuLayout.setPadding(dip2px(2), 0, dip2px(2), 0);

				settingsMenuScroll = new ScrollView_(CONTEXT);

				let settingsMenuLayout1 = new LinearLayout_(CONTEXT);
				settingsMenuLayout1.setOrientation(1);
				settingsMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);

				settingsMenuScroll.addView(settingsMenuLayout);
				settingsMenuLayout1.addView(settingsMenuScroll);

				let generalTitle = clientSectionTitle("HUD", "theme");

				let hacksListManagerSettingFunc = new settingButton("Hacks list", "Manage the hacks list.");
				let hacksListManagerSettingButton = hacksListManagerSettingFunc.getButton();
				hacksListManagerSettingButton.setText("Manage");
				hacksListManagerSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						VertexClientPE.showHacksListManagerDialog();
					}
				}));

				let mainButtonManagerSettingFunc = new settingButton("Main button", "Manage the main button.");
				let mainButtonManagerSettingButton = mainButtonManagerSettingFunc.getButton();
				mainButtonManagerSettingButton.setText("Manage");
				mainButtonManagerSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						VertexClientPE.showMainButtonManagerDialog();
					}
				}));

				let shortcutManagerSettingFunc = new settingButton("Shortcuts", "Manage the shortcut buttons.");
				let shortcutManagerSettingButton = shortcutManagerSettingFunc.getButton();
				shortcutManagerSettingButton.setText("Manage");
				shortcutManagerSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						VertexClientPE.showShortcutManagerDialog();
					}
				}));

				let tabGUIModeSettingFunc = new settingButton("TabGUI Mode", null, null,
					function(viewArg) {
						tabGUIModeSetting = "off";
						tabGUIModeSettingButton.setText("Hidden");
					}
				);
				let tabGUIModeSettingButton = tabGUIModeSettingFunc.getButton();
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

				let themeTitle = clientSectionTitle("Theme", "theme");

				let themeArray = ["Custom RGB", "Green", "Red", "Blue", "Purple", "Violet", "Yellow", "Orange", "Brown", "Grey", "White", "Black"];
				let themeSettingFunc = new settingSelector("Color", "Choose a color.", "Color Selector", themeArray, capitalizeColorString(themeSetting), "themeSetting",
				function(sRightButton, dialogTitle) {
					VertexClientPE.showCustomRGBDialog(sRightButton, dialogTitle);
				});
				let themeSettingButton = themeSettingFunc.getButton();

				let useLightThemeSettingFunc = new settingButton("Lighter theme colors", "Use light theme colors if available.", null,
					function(viewArg) {
						if(useLightThemeSetting != "off") {
							useLightThemeSetting = "off";
							useLightThemeSettingButton.setText(i18n("OFF"));
							VertexClientPE.shouldUpdateGUI = true;
						}
					}
				);
				let useLightThemeSettingButton = useLightThemeSettingFunc.getButton();
				if(useLightThemeSetting == "on") {
					useLightThemeSettingButton.setText(i18n("ON"));
				} else if(useLightThemeSetting == "off") {
					useLightThemeSettingButton.setText(i18n("OFF"));
				}
				useLightThemeSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(useLightThemeSetting == "on") {
							useLightThemeSetting = "off";
							useLightThemeSettingButton.setText(i18n("OFF"));
						} else if(useLightThemeSetting == "off") {
							useLightThemeSetting = "on";
							useLightThemeSettingButton.setText(i18n("ON"));
						}
						VertexClientPE.saveMainSettings();
						VertexClientPE.shouldUpdateGUI = true;
					}
				}));

				let buttonStyleSettingFunc = new settingButton("Button style", "Change the button style.", null,
					function(viewArg) {
						if(buttonStyleSetting != "normal") {
							buttonStyleSetting = "normal";
							buttonStyleSettingButton.setText("Normal");
							VertexClientPE.shouldUpdateGUI = true;
						}
					}
				);
				let buttonStyleSettingButton = buttonStyleSettingFunc.getButton();
				if(buttonStyleSetting == "normal") {
					buttonStyleSettingButton.setText("Normal");
				} else if(buttonStyleSetting == "normal_nostrokes") {
					buttonStyleSettingButton.setText("Normal (no strokes)");
				} else if(buttonStyleSetting == "transparent") {
					buttonStyleSettingButton.setText("Normal (no inner)");
				} else if(buttonStyleSetting == "android") {
					buttonStyleSettingButton.setText("Android");
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
							buttonStyleSetting = "android";
							buttonStyleSettingButton.setText("Android");
						} else if(buttonStyleSetting == "android") {
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

				let buttonStrokeThicknessSettingFunc = new settingButton("Button stroke thickness", "Change the button stroke thickness.");
				let buttonStrokeThicknessSettingButton = buttonStrokeThicknessSettingFunc.getButton();
				buttonStrokeThicknessSettingButton.setText("Change");
				buttonStrokeThicknessSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						VertexClientPE.showButtonStrokeThicknessDialog();
					}
				}));

				let backgroundStyleSettingFunc = new settingButton("Background style", "Changes the background style.", null,
					function(viewArg) {
						backgroundStyleSetting = "normal";
						backgroundStyleSettingButton.setText("Normal");
					}
				);
				let backgroundStyleSettingButton = backgroundStyleSettingFunc.getButton();
				if(backgroundStyleSetting == "normal") {
					backgroundStyleSettingButton.setText("Normal");
				} else if(backgroundStyleSetting == "normal_nostrokes") {
					backgroundStyleSettingButton.setText("Normal (no strokes)");
				} else if(backgroundStyleSetting == "normal_noinner") {
					backgroundStyleSettingButton.setText("Normal (no inner)");
				} else if(backgroundStyleSetting == "minecraft_dirt") {
					backgroundStyleSettingButton.setText("Minecraft (dirt)");
				} else if(backgroundStyleSetting == "rainbow") {
					backgroundStyleSettingButton.setText("Rainbow");
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
							backgroundStyleSetting = "rainbow";
							backgroundStyleSettingButton.setText("Rainbow");
						} else if(backgroundStyleSetting == "rainbow") {
							backgroundStyleSetting = "normal";
							backgroundStyleSettingButton.setText("Normal");
						}
						VertexClientPE.saveMainSettings();
						//refreshSettingsScreen();
					}
				}));

				let transparentBgSettingFunc = new settingButton("Transparent backgrounds", "Makes screens and dialogs transparent.", null,
					function(viewArg) {
						transparentBgSetting = "on";
						transparentBgSettingButton.setText(i18n("ON"));
					}
				);
				let transparentBgSettingButton = transparentBgSettingFunc.getButton();
				if(transparentBgSetting == "on") {
					transparentBgSettingButton.setText(i18n("ON"));
				} else if(transparentBgSetting == "off") {
					transparentBgSettingButton.setText(i18n("OFF"));
				}
				transparentBgSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(transparentBgSetting == "on") {
							transparentBgSetting = "off";
							transparentBgSettingButton.setText(i18n("OFF"));
						} else if(transparentBgSetting == "off") {
							transparentBgSetting = "on";
							transparentBgSettingButton.setText(i18n("ON"));
						}
						VertexClientPE.saveMainSettings();
					}
				}));

				let mcpeGUISettingFunc = new settingButton("MCPE GUI", "Change the MCPE GUI.", null,
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
				let mcpeGUISettingButton = mcpeGUISettingFunc.getButton();
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

				let fontSettingFunc = new settingButton("Font", "Change the font/typeface.", null,
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
				let fontSettingButton = fontSettingFunc.getButton();
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

				let modButtonColorBlockedSettingFunc = new settingButton("Mod button text color (blocked)", "Change the mod button blocked text color.", null,
					function(viewArg) {
						if(modButtonColorBlockedSetting != "red") {
							modButtonColorBlockedSetting = "red";
							modButtonColorBlockedSettingButton.setText("Red");
							VertexClientPE.setupModButtonColors();
							VertexClientPE.shouldUpdateGUI = true;
						}
					}
				);
				let modButtonColorBlockedSettingButton = modButtonColorBlockedSettingFunc.getButton();
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

				let modButtonColorEnabledSettingFunc = new settingButton("Mod button text color (enabled)", "Change the mod button enabled text color.", null,
					function(viewArg) {
						if(modButtonColorEnabledSetting != "green") {
							modButtonColorEnabledSetting = "green";
							modButtonColorEnabledSettingButton.setText("Green");
							VertexClientPE.setupModButtonColors();
							VertexClientPE.shouldUpdateGUI = true;
						}
					}
				);
				let modButtonColorEnabledSettingButton = modButtonColorEnabledSettingFunc.getButton();
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

				let modButtonColorDisabledSettingFunc = new settingButton("Mod button text color (disabled)", "Change the mod button disabled text color.", null,
					function(viewArg) {
						if(modButtonColorDisabledSetting != "white") {
							modButtonColorDisabledSetting = "white";
							modButtonColorDisabledSettingButton.setText("White");
							VertexClientPE.setupModButtonColors();
							VertexClientPE.shouldUpdateGUI = true;
						}
					}
				);
				let modButtonColorDisabledSettingButton = modButtonColorDisabledSettingFunc.getButton();
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

				let menuTitle = clientSectionTitle("Menu", "theme");

				let menuTypeSettingFunc = new settingButton("Menu style", "Sets the Client's menu style.", null,
					function(viewArg) {
						menuType = "normal";
						menuTypeSettingButton.setText("Normal");
					}
				);
				let menuTypeSettingButton = menuTypeSettingFunc.getButton();
				if(menuType == "normal") {
					menuTypeSettingButton.setText("Normal");
				} else if(menuType == "table") {
					menuTypeSettingButton.setText("Table (DragOP)");
				} else if(menuType == "fullscreen") {
					menuTypeSettingButton.setText("Fullscreen");
				} else if(menuType == "halfscreen") {
					menuTypeSettingButton.setText("Tabbed (side)");
				} else if(menuType == "halfscreen_top") {
					menuTypeSettingButton.setText("Tabbed (top)");
				} else if(menuType == "tabbed_fullscreen") {
					menuTypeSettingButton.setText("Tabbed (fullscreen)");
				}
				menuTypeSettingButton.setOnClickListener(new View_.OnClickListener({
				onClick: function(viewArg) {
					if(menuType == "normal") {
						menuType = "table";
						menuTypeSettingButton.setText("Table (DragOP)");
					} else if(menuType == "table") {
						menuType = "fullscreen";
						menuTypeSettingButton.setText("Fullscreen");
					} else if(menuType == "fullscreen") {
						menuType = "halfscreen";
						menuTypeSettingButton.setText("Tabbed (side)");
					} else if(menuType == "halfscreen") {
						menuType = "halfscreen_top";
						menuTypeSettingButton.setText("Tabbed (top)");
					} else if(menuType == "halfscreen_top") {
						menuType = "tabbed_fullscreen";
						menuTypeSettingButton.setText("Tabbed (fullscreen)");
					} else if(menuType == "tabbed_fullscreen") {
						menuType = "normal";
						menuTypeSettingButton.setText("Normal");
					}
					VertexClientPE.saveMainSettings();
				}
				}));

				let normalMenuTypeSizeFunc = new settingButton("Normal menu style size", "Change menu size to fit your screen size better (this only works for the normal menu style).", null,
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
				let normalMenuTypeSizeButton = normalMenuTypeSizeFunc.getButton();
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

				let menuAnimationsSettingFunc = new settingButton("Menu animations", "Show menu animations.", null,
					function(viewArg) {
						if(menuAnimationsSetting != "on") {
							menuAnimationsSetting = "on";
							menuAnimationsSettingButton.setText(i18n("ON"));
							VertexClientPE.shouldUpdateGUI = true;
						}
					}
				);
				let menuAnimationsSettingButton = menuAnimationsSettingFunc.getButton();
				if(menuAnimationsSetting == "on") {
					menuAnimationsSettingButton.setText(i18n("ON"));
				} else if(menuAnimationsSetting == "off") {
					menuAnimationsSettingButton.setText(i18n("OFF"));
				}
				menuAnimationsSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(menuAnimationsSetting == "on") {
							menuAnimationsSetting = "off";
							menuAnimationsSettingButton.setText(i18n("OFF"));
						} else if(menuAnimationsSetting == "off") {
							menuAnimationsSetting = "on";
							menuAnimationsSettingButton.setText(i18n("ON"));
						}
						VertexClientPE.saveMainSettings();
						VertexClientPE.shouldUpdateGUI = true;
					}
				}));

				let soundsAndMusicTitle = clientSectionTitle("Sounds & music", "theme");

				let buttonSoundSettingFunc = new settingButton("Button sound", "The sound that you hear when tapping a button.", null,
					function(viewArg) {
						if(buttonSoundSetting != "system") {
							buttonSoundSetting = "system";
							buttonSoundSettingButton.setText("System");
							VertexClientPE.shouldUpdateGUI = true;
						}
					}
				);
				let buttonSoundSettingButton = buttonSoundSettingFunc.getButton();
				if(buttonSoundSetting == "system") {
					buttonSoundSettingButton.setText("System");
				} else if(buttonSoundSetting == "minecraft") {
					buttonSoundSettingButton.setText("Minecraft");
				} else if(buttonSoundSetting == "off") {
					buttonSoundSettingButton.setText(i18n("OFF"));
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
							buttonSoundSettingButton.setText(i18n("OFF"));
						}
						VertexClientPE.saveMainSettings();
						VertexClientPE.shouldUpdateGUI = true;
					}
				}));

				let playMusicSettingFunc = new settingButton("Automatically play music", "Automatically play music.", null,
					function(viewArg) {
						playMusicSetting = "off";
						playMusicSettingButton.setText(i18n("OFF"));
					}
				);
				let playMusicSettingButton = playMusicSettingFunc.getButton();
				if(playMusicSetting == "on") playMusicSetting = "off";
				/*if(playMusicSetting == "on") {
					playMusicSettingButton.setText("Normal");
				} else */if(playMusicSetting == "shuffle") {
					playMusicSettingButton.setText("Shuffle");
				} else if(playMusicSetting == "off") {
					playMusicSettingButton.setText(i18n("OFF"));
				}
				playMusicSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						//if(playMusicSetting == "on") {
						if(playMusicSetting == "off") {
							playMusicSetting = "shuffle";
							playMusicSettingButton.setText("Shuffle");
						} else if(playMusicSetting == "shuffle") {
							playMusicSetting = "off";
							playMusicSettingButton.setText(i18n("OFF"));
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

				let dashboardTitle = clientSectionTitle("Dashboard", "theme");

				let dashboardTileSizeSettingFunc = new settingButton("Tile size", "Sets the Dashboard tile style.");
				let dashboardTileSizeSettingButton = dashboardTileSizeSettingFunc.getButton();
				dashboardTileSizeSettingButton.setText("Change");
				dashboardTileSizeSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						VertexClientPE.showDashboardTileSizeDialog();
					}
				}));

				let splashScreenTitle = clientSectionTitle("Splash Screen", "theme");

				let transparentSplashScreenSettingFunc = new settingButton("Transparent splash screen", "Makes the splash screen partly transparent.", null,
					function(viewArg) {
						transparentSplashScreenSetting = "off";
						transparentSplashScreenSettingButton.setText(i18n("OFF"));
					}
				);
				let transparentSplashScreenSettingButton = transparentSplashScreenSettingFunc.getButton();
				if(transparentSplashScreenSetting == "on") {
					transparentSplashScreenSettingButton.setText(i18n("ON"));
				} else if(transparentSplashScreenSetting == "off") {
					transparentSplashScreenSettingButton.setText(i18n("OFF"));
				}
				transparentSplashScreenSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(transparentSplashScreenSetting == "on") {
							transparentSplashScreenSetting = "off";
							transparentSplashScreenSettingButton.setText(i18n("OFF"));
							VertexClientPE.saveMainSettings();
						} else if(transparentSplashScreenSetting == "off") {
							transparentSplashScreenSetting = "on";
							transparentSplashScreenSettingButton.setText(i18n("ON"));
							VertexClientPE.saveMainSettings();
						}
					}
				}));

				let commandsTitle = clientSectionTitle("Commands", "theme");

				let commandsSettingFunc = new settingButton("Commands", "Toggle commands off to login on servers like Mineplex PE.", null,
					function(viewArg) {
						commandsSetting = "on";
						commandsSettingButton.setText(i18n("ON"));
					}
				);
				let commandsSettingButton = commandsSettingFunc.getButton();
				if(commandsSetting == "on") {
					commandsSettingButton.setText(i18n("ON"));
				} else if(commandsSetting == "off") {
					commandsSettingButton.setText(i18n("OFF"));
				}
				commandsSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(commandsSetting == "on") {
							commandsSetting = "off";
							commandsSettingButton.setText(i18n("OFF"));
							VertexClientPE.saveMainSettings();
						} else if(commandsSetting == "off") {
							commandsSetting = "on";
							commandsSettingButton.setText(i18n("ON"));
							VertexClientPE.saveMainSettings();
						}
					}
				}));

				let cmdPrefixFunc = new settingButton("Command prefix", "Change the first character of all Vertex Client PE commands.", null,
					function(viewArg) {
						cmdPrefix = ".";
						cmdPrefixButton.setText(".");
					}
				);
				let cmdPrefixButton = cmdPrefixFunc.getButton();
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
							cmdPrefix = "!";
							cmdPrefixButton.setText("!");
							VertexClientPE.saveMainSettings();
						} else if(cmdPrefix == "!") {
							cmdPrefix = "-";
							cmdPrefixButton.setText("-");
							VertexClientPE.saveMainSettings();
						} else if(cmdPrefix == "-") {
							cmdPrefix = "^";
							cmdPrefixButton.setText("^");
							VertexClientPE.saveMainSettings();
						} else if(cmdPrefix == "^") {
							cmdPrefix = ".";
							cmdPrefixButton.setText(".");
							VertexClientPE.saveMainSettings();
						}
					}
				}));

				let toastsTitle = clientSectionTitle("Toasts", "theme");

				let defaultToastPositionSettingFunc = new settingButton("Default toast position", "Allows you to choose the position of most client toasts.", null,
					function(viewArg) {
						defaultToastPositionSetting = "bottom";
						defaultToastPositionSettingButton.setText("Bottom");
					}
				);
				let defaultToastPositionSettingButton = defaultToastPositionSettingFunc.getButton();
				if(defaultToastPositionSetting == "bottom") {
					defaultToastPositionSettingButton.setText("Bottom");
				} else if(defaultToastPositionSetting == "top") {
					defaultToastPositionSettingButton.setText("Top");
				}
				defaultToastPositionSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(defaultToastPositionSetting == "top") {
							defaultToastPositionSetting = "bottom";
							defaultToastPositionSettingButton.setText("Bottom");
						} else if(defaultToastPositionSetting == "bottom") {
							defaultToastPositionSetting = "top";
							defaultToastPositionSettingButton.setText("Top");
						}
						VertexClientPE.saveMainSettings();
					}
				}));

				let showNewsSettingFunc = new settingButton("Show news toast at start", null, null,
					function(viewArg) {
						showNewsSetting = "on";
						showNewsSettingButton.setText(i18n("ON"));
					}
				);
				let showNewsSettingButton = showNewsSettingFunc.getButton();
				if(showNewsSetting == "on") {
					showNewsSettingButton.setText(i18n("ON"));
				} else if(showNewsSetting == "off") {
					showNewsSettingButton.setText(i18n("OFF"));
				}
				showNewsSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(showNewsSetting == "on") {
							showNewsSetting = "off";
							showNewsSettingButton.setText(i18n("OFF"));
						} else if(showNewsSetting == "off") {
							showNewsSetting = "on";
							showNewsSettingButton.setText(i18n("ON"));
						}
						VertexClientPE.saveMainSettings();
					}
				}));

				let otherTitle = clientSectionTitle("Other", "theme");

				let featuresSettingFunc = new settingButton("Opt in/out features", "Allows you to choose what categories/mods to show.");
				let featuresSettingButton = featuresSettingFunc.getButton();
				featuresSettingButton.setText("Manage");
				featuresSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						VertexClientPE.showFeaturesDialog();
					}
				}));
				
				let modsStayEnabledSettingFunc = new settingButton("Enabled mods stay enabled when restarting the launcher", null, null,
					function(viewArg) {
						modsStayEnabledSetting = "on";
						modsStayEnabledSettingButton.setText(i18n("ON"));
					}
				);
				let modsStayEnabledSettingButton = modsStayEnabledSettingFunc.getButton();
				if(modsStayEnabledSetting == "on") {
					modsStayEnabledSettingButton.setText(i18n("ON"));
				} else if(modsStayEnabledSetting == "off") {
					modsStayEnabledSettingButton.setText(i18n("OFF"));
				}
				modsStayEnabledSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(modsStayEnabledSetting == "off") {
							modsStayEnabledSetting = "on";
							modsStayEnabledSettingButton.setText(i18n("ON"));
						} else if(modsStayEnabledSetting == "on") {
							modsStayEnabledSetting = "off";
							modsStayEnabledSettingButton.setText(i18n("OFF"));
						}
						VertexClientPE.saveMainSettings();
					}
				}));
				
				let shouldShowTipDialogsSettingFunc = new settingButton("Show tip dialog upon start", null, null,
					function(viewArg) {
						shouldShowTipDialogsSetting = "on";
						shouldShowTipDialogsSettingButton.setText(i18n("ON"));
					}
				);
				let shouldShowTipDialogsSettingButton = shouldShowTipDialogsSettingFunc.getButton();
				if(shouldShowTipDialogsSetting == "on") {
					shouldShowTipDialogsSettingButton.setText(i18n("ON"));
				} else if(shouldShowTipDialogsSetting == "off") {
					shouldShowTipDialogsSettingButton.setText(i18n("OFF"));
				}
				shouldShowTipDialogsSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(shouldShowTipDialogsSetting == "off") {
							shouldShowTipDialogsSetting = "on";
							shouldShowTipDialogsSettingButton.setText(i18n("ON"));
						} else if(shouldShowTipDialogsSetting == "on") {
							shouldShowTipDialogsSetting = "off";
							shouldShowTipDialogsSettingButton.setText(i18n("OFF"));
						}
						VertexClientPE.saveMainSettings();
					}
				}));

				let showSnowInWinterSettingFunc = new settingButton("Show snowflakes on the start screen in the winter", null, null,
					function(viewArg) {
						showSnowInWinterSetting = "off";
						showSnowInWinterSettingButton.setText(i18n("OFF"));
					}
				);
				let showSnowInWinterSettingButton = showSnowInWinterSettingFunc.getButton();
				if(showSnowInWinterSetting == "on") {
					showSnowInWinterSettingButton.setText(i18n("ON"));
				} else if(showSnowInWinterSetting == "off") {
					showSnowInWinterSettingButton.setText(i18n("OFF"));
				}
				showSnowInWinterSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(showSnowInWinterSetting == "off") {
							showSnowInWinterSetting = "on";
							showSnowInWinterSettingButton.setText(i18n("ON"));
						} else if(showSnowInWinterSetting == "on") {
							showSnowInWinterSetting = "off";
							showSnowInWinterSettingButton.setText(i18n("OFF"));
						}
						VertexClientPE.saveMainSettings();
					}
				}));

				let f5ButtonModeSettingFunc = new settingButton("F5 button mode", null, null,
					function(viewArg) {
						f5ButtonModeSetting = "pause";
						f5ButtonModeSettingButton.setText("Pause screen");
					}
				);
				let f5ButtonModeSettingButton = f5ButtonModeSettingFunc.getButton();
				if(f5ButtonModeSetting == "pause") {
					f5ButtonModeSettingButton.setText("Pause screen");
				} else if(f5ButtonModeSetting == "ingame") {
					f5ButtonModeSettingButton.setText("Ingame/HUD screen");
				} else if(f5ButtonModeSetting == "off") {
					f5ButtonModeSettingButton.setText("Hidden");
				}
				f5ButtonModeSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						if(f5ButtonModeSetting == "off") {
							f5ButtonModeSetting = "pause";
							f5ButtonModeSettingButton.setText("Pause screen");
						} else if(f5ButtonModeSetting == "pause") {
							f5ButtonModeSetting = "ingame";
							f5ButtonModeSettingButton.setText("Ingame/HUD screen");
						} else if(f5ButtonModeSetting == "ingame") {
							f5ButtonModeSetting = "off";
							f5ButtonModeSettingButton.setText("Hidden");
						}
						VertexClientPE.saveMainSettings();
					}
				}));

				let webBrowserStartPageSettingFunc = new settingButton("Webbrowser startpage", "Change the default webbrowser page.");
				let webBrowserStartPageSettingButton = webBrowserStartPageSettingFunc.getButton();
				webBrowserStartPageSettingButton.setText("Change");
				webBrowserStartPageSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						VertexClientPE.showWebbrowserStartPageDialog();
					}
				}));

				settingsMenuLayout.addView(generalTitle);
				VertexClientPE.addView(settingsMenuLayout, hacksListManagerSettingFunc);
				VertexClientPE.addView(settingsMenuLayout, mainButtonManagerSettingFunc);
				VertexClientPE.addView(settingsMenuLayout, shortcutManagerSettingFunc);
				VertexClientPE.addView(settingsMenuLayout, tabGUIModeSettingFunc);
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
				//VertexClientPE.addView(settingsMenuLayout, playMusicSettingFunc);
				settingsMenuLayout.addView(dashboardTitle);
				VertexClientPE.addView(settingsMenuLayout, dashboardTileSizeSettingFunc);
				settingsMenuLayout.addView(splashScreenTitle);
				VertexClientPE.addView(settingsMenuLayout, transparentSplashScreenSettingFunc);
				settingsMenuLayout.addView(commandsTitle);
				VertexClientPE.addView(settingsMenuLayout, commandsSettingFunc);
				VertexClientPE.addView(settingsMenuLayout, cmdPrefixFunc);
				settingsMenuLayout.addView(toastsTitle);
				VertexClientPE.addView(settingsMenuLayout, defaultToastPositionSettingFunc);
				VertexClientPE.addView(settingsMenuLayout, showNewsSettingFunc);
				settingsMenuLayout.addView(otherTitle);
				VertexClientPE.addView(settingsMenuLayout, featuresSettingFunc);
				VertexClientPE.addView(settingsMenuLayout, modsStayEnabledSettingFunc);
				VertexClientPE.addView(settingsMenuLayout, shouldShowTipDialogsSettingFunc);
				VertexClientPE.addView(settingsMenuLayout, showSnowInWinterSettingFunc);
				VertexClientPE.addView(settingsMenuLayout, f5ButtonModeSettingFunc);
				VertexClientPE.addView(settingsMenuLayout, webBrowserStartPageSettingFunc);
				
				if(scrollPosition != null) {
					settingsMenuScroll.scrollTo(scrollPosition[0], scrollPosition[1]);
					scrollPosition = null;
				}

				screenUI = new PopupWindow_(settingsMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight() - barLayoutHeight);
				screenUI.setBackgroundDrawable(backgroundGradient());
				screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.BOTTOM, 0, 0);
			} catch(error) {
				print('An error occured: ' + error);
				VertexClientPE.showBugReportDialog(error);
			}
		}
	}));
}

function devSettingsScreen(fromDashboard) {
	VertexClientPE.menuIsShowing = true;
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				VertexClientPE.checkGUINeedsDismiss();

				let devSettingsMenuLayout = new LinearLayout_(CONTEXT);
				devSettingsMenuLayout.setOrientation(1);
				devSettingsMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
				devSettingsMenuLayout.setPadding(dip2px(2), 0, dip2px(2), 0);

				let devSettingsMenuScroll = new ScrollView_(CONTEXT);

				let devSettingsMenuLayout1 = new LinearLayout_(CONTEXT);
				devSettingsMenuLayout1.setOrientation(1);
				devSettingsMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);

				devSettingsMenuScroll.addView(devSettingsMenuLayout);
				devSettingsMenuLayout1.addView(devSettingsMenuScroll);

				let generalTitle = clientSectionTitle("General", "theme");

				let debugModeSettingFunc = new settingButton("Debug mode", "Show debug messages.");
				let debugModeSettingButton = debugModeSettingFunc.getButton();
				if(VertexClientPE.isDebugMode()) {
					debugModeSettingButton.setText(i18n("ON"));
				} else {
					debugModeSettingButton.setText(i18n("OFF"));
				}
				debugModeSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						VertexClientPE.setIsDebugMode(!VertexClientPE.isDebugMode());
						if(VertexClientPE.isDebugMode()) {
							debugModeSettingButton.setText(i18n("ON"));
						} else {
							debugModeSettingButton.setText(i18n("OFF"));
						}
					}
				}));

				let expModeSettingFunc = new settingButton("Experimental features", "Show experimental features that are still in development.");
				let expModeSettingButton = expModeSettingFunc.getButton();
				if(VertexClientPE.isExpMode()) {
					expModeSettingButton.setText(i18n("ON"));
				} else {
					expModeSettingButton.setText(i18n("OFF"));
				}
				expModeSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						VertexClientPE.setIsExpMode(!VertexClientPE.isExpMode());
						if(VertexClientPE.isExpMode()) {
							expModeSettingButton.setText(i18n("ON"));
						} else {
							expModeSettingButton.setText(i18n("OFF"));
						}
						VertexClientPE.shouldUpdateGUI = true;
					}
				}));

				let dataTitle = clientSectionTitle("Data", "theme");

				let resetDataSettingFunc = new settingButton("Reset all launcher data", "Resets all launcher data.");
				let resetDataSettingButton = resetDataSettingFunc.getButton();
				resetDataSettingButton.setText("Reset");
				resetDataSettingButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						VertexClientPE.showConfirmDialog("Reset all launcher data", "Are you sure you want to reset all launcher data?", null,
							function() {
								VertexClientPE.resetData();
							}
						);
					}
				}));
				
				let uiTestTitle = clientSectionTitle("UI test", "theme");
				
				let showTestToastFunc = new settingButton("Show test screen toast", "Shows a screen toast. Useful for testing.");
				let showTestToastButton = showTestToastFunc.getButton();
				showTestToastButton.setText("Show");
				showTestToastButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						VertexClientPE.screenToast(android.R.drawable.ic_menu_report_image, "Developer Settings", "Test");
					}
				}));
				
				let editFloatingWindowCoordsFunc = new settingButton("Normal menu style coordinates", "Useful for debugging.");
				let editFloatingWindowCoordsButton = editFloatingWindowCoordsFunc.getButton();
				editFloatingWindowCoordsButton.setText("Set all to 0");
				editFloatingWindowCoordsButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						combattpopx = 0;
						combattpopy = 0;
						worldtpopx = 0;
						worldtpopy = 0;
						movementtpopx = 0;
						movementtpopy = 0;
						playertpopx = 0;
						playertpopy = 0;
						misctpopx = 0;
						misctpopy = 0;
						VertexClientPE.saveFloatingMenus("all");
					}
				}));

				devSettingsMenuLayout.addView(generalTitle);
				VertexClientPE.addView(devSettingsMenuLayout, debugModeSettingFunc);
				VertexClientPE.addView(devSettingsMenuLayout, expModeSettingFunc);
				devSettingsMenuLayout.addView(dataTitle);
				VertexClientPE.addView(devSettingsMenuLayout, resetDataSettingFunc);
				devSettingsMenuLayout.addView(uiTestTitle);
				VertexClientPE.addView(devSettingsMenuLayout, showTestToastFunc);
				VertexClientPE.addView(devSettingsMenuLayout, editFloatingWindowCoordsFunc);

				screenUI = new PopupWindow_(devSettingsMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight() - barLayoutHeight);
				screenUI.setBackgroundDrawable(backgroundGradient());
				screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.BOTTOM, 0, 0);
			} catch(error) {
				print('An error occured: ' + error);
				VertexClientPE.showBugReportDialog(error);
			}
		}
	}));
}

function informationScreen(fromDashboard) {
	VertexClientPE.menuIsShowing = true;
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				let display = CONTEXT.getWindowManager().getDefaultDisplay(),
				width = display.getWidth(),
				height = display.getHeight();

				VertexClientPE.checkGUINeedsDismiss();

				let informationMenuLayout1 = new LinearLayout_(CONTEXT);
				informationMenuLayout1.setOrientation(1);
				informationMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
				informationMenuLayout1.setPadding(dip2px(2), 0, dip2px(2), 0);

				let informationMenuScrollView = new ScrollView_(CONTEXT);

				let informationMenuLayout = new LinearLayout_(CONTEXT);
				informationMenuLayout.setOrientation(1);
				informationMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);

				informationMenuLayout.addView(clientTextView(""));
				informationMenuScrollView.addView(informationMenuLayout);
				informationMenuLayout1.addView(informationMenuScrollView);

				let logoViewer = new ImageView_(CONTEXT);
				logoViewer.setImageBitmap(imgLogo);
				logoViewer.setLayoutParams(new LinearLayout_.LayoutParams(width / 3, height / 3));

				let descText = new TextView_(CONTEXT);
				descText.setText(VertexClientPE.currentVersionDesc.toUpperCase());
				descText.setGravity(Gravity_.CENTER);
				descText.setTextColor(Color_.BLACK);
				if(!Launcher.isToolbox()) {
					descText.setTypeface(VertexClientPE.tileFont, Typeface_.BOLD);
				}
				descText.setShadowLayer(1.6, 1.5, 1.3, Color_.parseColor("#008000"));
				descText.setTextSize(50);

				let informationText = clientTextView("\u00A9 peacestorm, imYannic, _TXMO, LPMG, Astro36, AutoGrind and TimmyIsDa | 2015 - 2017. Some rights reserved. Thanks to @_TXMO for making some graphic designs and helping with choosing a name and @imYannic for some other graphic designs.", true);

				informationMenuLayout.addView(logoViewer);
				informationMenuLayout.addView(descText);
				informationMenuLayout.addView(clientTextView(""));
				informationMenuLayout.addView(clientHR());
				informationMenuLayout.addView(clientTextView(""));
				informationMenuLayout.addView(informationText);
				informationMenuLayout.addView(clientTextView(""));
				informationMenuLayout.addView(clientHR());
				informationMenuLayout.addView(clientTextView(""));

				let minecraftInfoTitle = clientSectionTitle("Minecraft info");

				let minecraftVersionTextView = clientTextView("Version: " + ModPE.getMinecraftVersion());

				let usernameTextView = clientTextView("Username: " + ModPE.getPlayerName());

				let clientIdTextView = clientTextView("Client ID: " + ModPE.getClientId());

				let vertexInfoTitle = clientSectionTitle("Vertex info");

				let vertexVersionTextView = clientTextView("Version: " + VertexClientPE.currentVersion);

				let vertexEditionTextView = clientTextView("Edition: " + VertexClientPE.edition);

				let statusType;
				if(VertexClientPE.isDevMode()) {
					statusType = "developer";
				} else {
					statusType = "normal user";
				}
				let statusTextView = clientTextView("Status: " + statusType);
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

				let deviceInfoTitle = clientSectionTitle("Device info");

				let androidVersionTextView = clientTextView("Android version: " + ModPE.getAndroidVersion());

				let deviceTextView = clientTextView("Device: " + VertexClientPE.getDeviceName());

				informationMenuLayout.addView(minecraftInfoTitle);
				informationMenuLayout.addView(minecraftVersionTextView);
				informationMenuLayout.addView(usernameTextView);
				informationMenuLayout.addView(clientIdTextView);
				//-------------------------------------------
				informationMenuLayout.addView(vertexInfoTitle);
				informationMenuLayout.addView(vertexVersionTextView);
				informationMenuLayout.addView(vertexEditionTextView);
				informationMenuLayout.addView(statusTextView);
				//informationMenuLayout.addView(proTextView);
				//-------------------------------------------
				informationMenuLayout.addView(deviceInfoTitle);
				informationMenuLayout.addView(androidVersionTextView);
				informationMenuLayout.addView(deviceTextView);

				screenUI = new PopupWindow_(informationMenuLayout1, width, height - barLayoutHeight);
				screenUI.setBackgroundDrawable(backgroundGradient());
				screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.BOTTOM, 0, 0);
			} catch(error) {
				print("An error occurred: " + error);
			}
		}
	}));
}

function getFavoriteTutorialView() {
	let tutLayout = new LinearLayout_(CONTEXT);
	tutLayout.setOrientation(LinearLayout_.HORIZONTAL);
	tutLayout.setGravity(Gravity_.CENTER);

	let tutView = new Button_(CONTEXT);
	tutView.setLayoutParams(new LinearLayout_.LayoutParams(96, 96));
	tutView.setBackgroundDrawable(CONTEXT.getResources().getDrawable(android.R.drawable.btn_star_big_off));

	let tutView1 = new TextView_(CONTEXT);
	tutView1.setText("\u21C4");
	tutView1.setTextColor(Color_.WHITE);
	tutView1.setTextSize(50);

	let tutView2 = new Button_(CONTEXT);
	tutView2.setLayoutParams(new LinearLayout_.LayoutParams(96, 96));
	tutView2.setBackgroundDrawable(CONTEXT.getResources().getDrawable(android.R.drawable.btn_star_big_on));

	tutLayout.addView(tutView);
	tutLayout.addView(tutView1);
	tutLayout.addView(tutView2);

	return tutLayout;
}
let helpSections = [
	["Where do I report issues?", "You can report issues at http://bit.ly/VertexIssues.", null],
	["How can I add shortcuts?", "Tap the star button in a mod's ... dialog or long click on a tile and then tap on the favorite button to make it favorite. The mod or tile will then have its own shortcut.", getFavoriteTutorialView],
	["Where are the settings saved?", "The settings are mostly saved in the '/games/com.mojang/minecraftpe' folder. Some settings (custom mod names, if a mod is favorite, tile customizations etc.) are saved in the launcher data, though.", null],
	["Website", "Our website is http://Vertex-Client.ml/.", null],
	["Twitter", "Our Twitter account is @VertexHX.", null]
];

function helpScreen(fromDashboard) {
	VertexClientPE.menuIsShowing = true;
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				VertexClientPE.checkGUINeedsDismiss();

				let helpMenuLayout = new LinearLayout_(CONTEXT);
				helpMenuLayout.setOrientation(1);
				helpMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);

				let helpMenuLayoutScroll = new ScrollView_(CONTEXT);

				let helpMenuLayout1 = new LinearLayout_(CONTEXT);
				helpMenuLayout1.setOrientation(1);
				helpMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
				helpMenuLayout1.setPadding(10, 0, 10, 10);

				let helpEnter = clientTextView("");

				helpMenuLayout1.addView(helpEnter);
				helpMenuLayoutScroll.addView(helpMenuLayout);
				helpMenuLayout1.addView(helpMenuLayoutScroll);

				helpSections.forEach(function(element, index, array) {
					if(index != 0) {
						let helpSectionEnter = clientTextView("\n", true, "diff");
						helpSectionEnter.setTextSize(10);
						helpMenuLayout.addView(helpSectionEnter);
					}
					helpMenuLayout.addView(helpSection(element[0], element[1], element[2]));
				});

				screenUI = new PopupWindow_(helpMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight() - barLayoutHeight);
				screenUI.setBackgroundDrawable(backgroundGradient());
				screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.BOTTOM, 0, 0);
			} catch(error) {
				print("An error occurred: " + error);
			}
		}
	}));
}

function previewScreen(fromDashboard) {
	VertexClientPE.menuIsShowing = true;
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				VertexClientPE.checkGUINeedsDismiss();

				let previewMenuLayout = new LinearLayout_(CONTEXT);
				previewMenuLayout.setOrientation(1);
				previewMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);

				let previewMenuLayoutScroll = new ScrollView_(CONTEXT);

				let previewMenuLayout1 = new LinearLayout_(CONTEXT);
				previewMenuLayout1.setOrientation(1);
				previewMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
				previewMenuLayout1.setPadding(10, 0, 10, 0);

				previewMenuLayoutScroll.addView(previewMenuLayout);
				previewMenuLayout1.addView(previewMenuLayoutScroll);

				let previewWebView = new WebView_(CONTEXT);
				let wS = previewWebView.getSettings();

				let previewLatestUrl = "http://bit.ly/VertexListEmbed";
				let frameVideo = "<html><body><center><iframe width=\"420\" height=\"315\" src=\"" + previewLatestUrl + "\" frameborder=\"0\" allowfullscreen></iframe></center></body></html>";

				wS.setJavaScriptEnabled(true);
				previewWebView.setBackgroundColor(0x00000000);
				previewWebView.setWebChromeClient(new WebChromeClient_());
				previewWebView.setWebViewClient(new WebViewClient_());

				previewWebView.loadData(frameVideo, "text/html", "utf-8");

				previewMenuLayout.addView(previewWebView);

				screenUI = new PopupWindow_(previewMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight() - barLayoutHeight);
				screenUI.setBackgroundDrawable(backgroundGradient());
				screenUI.setOnDismissListener(new PopupWindow_.OnDismissListener() {
					onDismiss: function() {
						previewWebView.loadUrl("about:blank");
					}
				});
				screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.BOTTOM, 0, 0);
			} catch(error) {
				print("An error occurred: " + error);
			}
		}
	}));
}

function addonScreen(fromDashboard) {
	VertexClientPE.menuIsShowing = true;
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				VertexClientPE.checkGUINeedsDismiss();

				let addonMenuLayout = new LinearLayout_(CONTEXT);
				addonMenuLayout.setOrientation(1);
				addonMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);

				let addonMenuLayoutScroll = new ScrollView_(CONTEXT);

				let addonMenuLayout1 = new LinearLayout_(CONTEXT);
				addonMenuLayout1.setOrientation(1);
				addonMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);

				let addonDownloadTextView = clientTextView("Download addons");
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
					let noAddonsText = clientTextView("You either don't have any addons or you should restart to load them!");
					noAddonsText.setGravity(Gravity_.CENTER);
					addonMenuLayout.addView(noAddonsText);
				}

				VertexClientPE.addons.forEach(function(element, index, array) {
					addonMenuLayout.addView(new addonButton(element));
				});

				screenUI = new PopupWindow_(addonMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight() - barLayoutHeight);
				screenUI.setBackgroundDrawable(backgroundGradient());
				screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.BOTTOM, 0, 0);
			} catch(error) {
				print("An error occurred: " + error);
			}
		}
	}));
}

function milestonesScreen(fromDashboard) {
	VertexClientPE.menuIsShowing = true;
	CONTEXT.runOnUiThread(new Runnable_({
		run: function () {
			try {
				VertexClientPE.checkGUINeedsDismiss();

				let milestones = [
					["Release of v1.0 Alpha", "Released on 24th January 2016."],
					["100 Twitter followers", "Reached in May 2016."],
					["50k downloads", "Reached in July 2016."],
					["300 Twitter followers", "Reached in September 2016."],
					["100k downloads", "Reached in October 2016."],
					["150k downloads", "Reached in July 2017."]
				];

				let scrollView = new android.widget.HorizontalScrollView(CONTEXT),
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

				for (let i = 0, len = milestones.length; i < len; i++) {
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
							let id = v.getId();
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

				layout.addView(frameLayout);
				layout.addView(clientTextView("\nThanks for your support!", true));
				layout.setOrientation(1);
				layout.setPadding(dip2px(16), dip2px(16), dip2px(16), dip2px(16));

				scrollView.addView(layout);

				screenUI = new PopupWindow_(scrollView, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight() - barLayoutHeight);
				screenUI.setBackgroundDrawable(backgroundGradient());
				screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.BOTTOM, 0, 0);
			} catch (e) {
				print("An error occurred: " + e + " #" + e.lineNumber);
			}
		}
	}));
}

function christmasScreen(fromDashboard) {
	VertexClientPE.menuIsShowing = true;
	CONTEXT.runOnUiThread(new Runnable_({
		run: function () {
			try {
				VertexClientPE.checkGUINeedsDismiss();

				let scrollView = new android.widget.HorizontalScrollView(CONTEXT),
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

				let daysLeft;
				if(VertexClientPE.Utils.day <= 25) {
					daysLeft = 25 - VertexClientPE.Utils.day;
				}

				let circleText;
				if(daysLeft != null && daysLeft != 0) {
					circleText = daysLeft.toString() + " day(s) left until Christmas!";
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

				layout.addView(frameLayout);
				layout.addView(clientTextView("\nMerry Christmas & Happy New Year! We wish you an amazing " + (VertexClientPE.Utils.year + 1).toString() + "!", true));
				layout.setOrientation(1);
				layout.setPadding(dip2px(16), dip2px(16), dip2px(16), dip2px(16));

				scrollView.addView(layout);

				screenUI = new PopupWindow_(scrollView, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight() - barLayoutHeight);
				screenUI.setBackgroundDrawable(backgroundGradient());
				screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.BOTTOM, 0, 0);
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
  * @todo Collision size?
 */
function playerCustomizerScreen(fromDashboard, title, icon) {
	VertexClientPE.menuIsShowing = true;
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				VertexClientPE.checkGUINeedsDismiss();

				let playerCustomizerLayout1 = new LinearLayout_(CONTEXT);
				playerCustomizerLayout1.setOrientation(1);
				playerCustomizerLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);

				let playerCustomizerLayout = new LinearLayout_(CONTEXT);
				playerCustomizerLayout.setOrientation(LinearLayout_.HORIZONTAL);
				playerCustomizerLayout.setGravity(Gravity_.CENTER_HORIZONTAL);

				let playerCustomizerLayoutLeft = new LinearLayout_(CONTEXT);
				playerCustomizerLayoutLeft.setOrientation(1);
				playerCustomizerLayoutLeft.setGravity(Gravity_.CENTER_HORIZONTAL);

				let playerCustomizerLayoutLeftScroll = new ScrollView_(CONTEXT);

				let playerCustomizerLayoutLeft1 = new LinearLayout_(CONTEXT);
				playerCustomizerLayoutLeft1.setOrientation(1);
				playerCustomizerLayoutLeft1.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2, display.heightPixels / 2 - barLayoutHeight / 2));

				let playerCustomizerLayoutRight = new LinearLayout_(CONTEXT);
				playerCustomizerLayoutRight.setOrientation(1);
				playerCustomizerLayoutRight.setGravity(Gravity_.CENTER_HORIZONTAL);

				let playerCustomizerLayoutRightScroll = new ScrollView_(CONTEXT);

				let playerCustomizerLayoutRight1 = new LinearLayout_(CONTEXT);
				playerCustomizerLayoutRight1.setOrientation(1);
				playerCustomizerLayoutRight1.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2, display.heightPixels / 2 - barLayoutHeight / 2));

				let playerCustomizerLayoutBottom = new LinearLayout_(CONTEXT);
				playerCustomizerLayoutBottom.setOrientation(1);
				playerCustomizerLayoutBottom.setGravity(Gravity_.CENTER_HORIZONTAL);

				let playerCustomizerLayoutBottomScroll = new ScrollView_(CONTEXT);

				let playerCustomizerLayoutBottom1 = new LinearLayout_(CONTEXT);
				playerCustomizerLayoutBottom1.setOrientation(1);
				playerCustomizerLayoutBottom1.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels, display.heightPixels / 2 - barLayoutHeight / 2));

				let playerCustomizerLeftTitle = clientTextView("Morphing", true);
				playerCustomizerLeftTitle.setGravity(Gravity_.CENTER);
				playerCustomizerLeftTitle.setBackgroundDrawable(backgroundSpecial(null, themeSetting));

				let playerCustomizerRightTitle = clientTextView("Trails", true);
				playerCustomizerRightTitle.setGravity(Gravity_.CENTER);
				playerCustomizerRightTitle.setBackgroundDrawable(backgroundSpecial(null, themeSetting));

				let playerCustomizerBottomTitle = clientTextView("Options", true);
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

				let killToMorphSettingButton = clientSwitch();
				killToMorphSettingButton.setText("Automatically morph when killing entities");
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
					let rTButton = clientButton(Entity.renderTypeToName(element));
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
					let trailButton = clientButton(element[1]);
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

				screenUI = new PopupWindow_(playerCustomizerLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight() - barLayoutHeight);
				screenUI.setBackgroundDrawable(backgroundGradient());
				screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.BOTTOM, 0, 0);

				VertexClientPE.showExitButtons(fromDashboard, title, icon);
			} catch(error) {
				print("An error occurred: " + error);
			}
		}
	}));
}

function optiFineScreen(fromDashboard, title, icon) {
	VertexClientPE.menuIsShowing = true;
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				VertexClientPE.checkGUINeedsDismiss();

				let optiFineLayout = new LinearLayout_(CONTEXT);
				optiFineLayout.setOrientation(1);
				optiFineLayout.setGravity(Gravity_.CENTER_HORIZONTAL);

				let optiFineLayoutScroll = new ScrollView_(CONTEXT);

				let optiFineLayout1 = new LinearLayout_(CONTEXT);
				optiFineLayout1.setOrientation(1);
				optiFineLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
				optiFineLayout1.setPadding(10, 0, 10, 10);

				optiFineLayoutScroll.addView(optiFineLayout);
				optiFineLayout1.addView(optiFineLayoutScroll);

				let antiLagDropRemoverButton = clientSwitch();
				antiLagDropRemoverButton.setText("Automatically remove dropped items to reduce lag");
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

				let betterPauseButton = clientSwitch();
				betterPauseButton.setText("Better pause (don't move while paused on multiplayer)");
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

				screenUI = new PopupWindow_(optiFineLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight() - barLayoutHeight);
				screenUI.setBackgroundDrawable(backgroundGradient());
				screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.BOTTOM, 0, 0);

				VertexClientPE.showExitButtons(fromDashboard, title, icon);
			} catch(error) {
				print("An error occurred: " + error);
			}
		}
	}));
}

function updateCenterScreen(fromDashboard) { //TODO: Add support for pre-releases
	VertexClientPE.menuIsShowing = true;
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				VertexClientPE.checkGUINeedsDismiss();

				let updateCenterMenuLayout = new LinearLayout_(CONTEXT);
				updateCenterMenuLayout.setOrientation(1);
				updateCenterMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);

				let updateCenterMenuLayoutScroll = new ScrollView_(CONTEXT);

				let updateCenterMenuLayout1 = new LinearLayout_(CONTEXT);
				updateCenterMenuLayout1.setOrientation(1);
				updateCenterMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
				updateCenterMenuLayout1.setPadding(10, 0, 10, 10);

				let showUpdateToastsSettingSwitch = clientSwitch();
				showUpdateToastsSettingSwitch.setText("Show update toasts (for stable releases) on start");
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

				updateCenterMenuLayout1.addView(clientTextView("\n"));
				updateCenterMenuLayout1.addView(showUpdateToastsSettingSwitch);
				updateCenterMenuLayoutScroll.addView(updateCenterMenuLayout);
				updateCenterMenuLayout1.addView(updateCenterMenuLayoutScroll);

				let devUpdateView = updatePaneButton("Latest dev version", "http://bit.ly/VertexDev", "dev");
				let updateDevEnterView = new TextView_(CONTEXT);
				updateDevEnterView.setText("\n");
				let latestUpdateView = updatePaneButton(VertexClientPE.latestVersion, VertexClientPE.latestVersionDesc, "latest");
				let updateEnterView = new TextView_(CONTEXT);
				updateEnterView.setText("\n");
				let currentUpdateView = updatePaneButton(VertexClientPE.currentVersion, VertexClientPE.currentVersionDesc, "current");

				if(VertexClientPE.isDevMode()) {
					updateCenterMenuLayout.addView(devUpdateView);
					updateCenterMenuLayout.addView(updateDevEnterView);
				}
				if(VertexClientPE.latestVersion != VertexClientPE.currentVersion) {
					updateCenterMenuLayout.addView(latestUpdateView);
					updateCenterMenuLayout.addView(updateEnterView);
				}
				/*
				if(VertexClientPE.latestVersion != VertexClientPE.currentVersion) {
					updateCenterMenuLayout.addView(latestUpdateView);
					updateCenterMenuLayout.addView(updateEnterView);
				
				}*/
				updateCenterMenuLayout.addView(currentUpdateView);

				screenUI = new PopupWindow_(updateCenterMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight() - barLayoutHeight);
				screenUI.setBackgroundDrawable(backgroundGradient());
				screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.BOTTOM, 0, 0);
			} catch(error) {
				print("An error occurred: " + error);
			}
		}
	}));
}

function musicPlayerScreen(fromDashboard) {
	VertexClientPE.menuIsShowing = true;
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				VertexClientPE.checkGUINeedsDismiss();

				let musicPlayerMenuLayout = new LinearLayout_(CONTEXT);
				musicPlayerMenuLayout.setOrientation(1);
				musicPlayerMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);

				let musicPlayerMenuLayoutScroll = new ScrollView_(CONTEXT);

				let musicPlayerMenuLayout1 = new LinearLayout_(CONTEXT);
				musicPlayerMenuLayout1.setOrientation(1);
				musicPlayerMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
				musicPlayerMenuLayout1.setPadding(10, 0, 10, 0);

				let musicPlayerEnter = new TextView_(CONTEXT);
				musicPlayerEnter.setText("");

				let musicPlayerBar = new musicBar();
				mpSongTitleView = musicPlayerBar.getSongTitleView();
				mpPlayButton = musicPlayerBar.getPlayButton();
				mpCurrentPositionView = musicPlayerBar.getLeftTimeView();
				mpTotalDurationView = musicPlayerBar.getRightTimeView();
				mpSeekBarView = musicPlayerBar.getSeekBar();
				let mpNextButton = musicPlayerBar.getNextButton();
				mpLayout = musicPlayerBar.getBarLayout();
				if(VertexClientPE.MusicUtils.mp.isPlaying() || VertexClientPE.MusicUtils.isPaused) {
					if(VertexClientPE.MusicUtils.mp.isPlaying()) {
						mpPlayButton.setBackgroundResource(android.R.drawable.ic_media_pause);
					} else if(VertexClientPE.MusicUtils.isPaused) {
						mpPlayButton.setBackgroundResource(android.R.drawable.ic_media_play);
					}
					let position = VertexClientPE.MusicUtils.mp.getCurrentPosition();
					let duration = VertexClientPE.MusicUtils.mp.getDuration();
					mpCurrentPositionView.setText(VertexClientPE.MusicUtils.milliSecToMinString(position));
					mpSeekBarView.setProgress(position);
					mpSeekBarView.setMax(duration);
					mpTotalDurationView.setText(VertexClientPE.MusicUtils.milliSecToMinString(duration));
				} else {
					mpPlayButton.setBackgroundResource(android.R.drawable.ic_media_play);
				}
				mpPlayButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(v) {
						VertexClientPE.MusicUtils.playingFirstTime = false;
						if(VertexClientPE.MusicUtils.mp.isPlaying()) {
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
				mpSeekBarView.setOnSeekBarChangeListener(new SeekBar_.OnSeekBarChangeListener() {
					onStopTrackingTouch: function(sB) {
						VertexClientPE.MusicUtils.mp.seekTo(mpSeekBarView.getProgress());
						mpCurrentPositionView.setText(VertexClientPE.MusicUtils.milliSecToMinString(VertexClientPE.MusicUtils.mp.getCurrentPosition()));
					}
				});
				mpNextButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(v) {
						VertexClientPE.loadToast();
						VertexClientPE.MusicUtils.playingFirstTime = false;
						VertexClientPE.MusicUtils.loadNextSong();
					}
				});

				let mpTabLayout = new LinearLayout_(CONTEXT);
				mpTabLayout.setOrientation(LinearLayout_.HORIZONTAL);

				mpTabLayout.addView(musicPlayerTab("All", mpTabLayout, musicPlayerMenuLayout, musicPlayerBar));
				mpTabLayout.addView(musicPlayerTab("Favorite", mpTabLayout, musicPlayerMenuLayout, musicPlayerBar));

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

				screenUI = new PopupWindow_(musicPlayerMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight() - barLayoutHeight);
				screenUI.setBackgroundDrawable(backgroundGradient());
				screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.BOTTOM, 0, 0);
			} catch(error) {
				print("An error occurred: " + error);
				clientMessage(error);
			}
		}
	}));
}

function modManagerScreen() {
	VertexClientPE.menuIsShowing = true;
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				VertexClientPE.checkGUINeedsDismiss();

				let modManagerMenuLayout = new LinearLayout_(CONTEXT);
				modManagerMenuLayout.setOrientation(1);
				modManagerMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);

				let modManagerMenuLayoutScroll = new ScrollView_(CONTEXT);

				let modManagerMenuLayout1 = new LinearLayout_(CONTEXT);
				modManagerMenuLayout1.setOrientation(1);
				modManagerMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
				//modManagerMenuLayout1.setPadding(10, 0, 10, 0);

				modManagerMenuLayout1.addView(clientTextView(""));
				modManagerMenuLayoutScroll.addView(modManagerMenuLayout);
				modManagerMenuLayout1.addView(modManagerMenuLayoutScroll);

				VertexClientPE.modules.forEach(function(element, index, array) {
					if(element.hasOwnProperty("getSettingsLayout")) {
						let modTitle = clientSectionTitle(VertexClientPE.getCustomModName(element.name));
						modTitle.setTypeface(VertexClientPE.font, Typeface_.BOLD);
						modManagerMenuLayout.addView(modTitle);
						modManagerMenuLayout.addView(element.getSettingsLayout(true));
					}
				});

				screenUI = new PopupWindow_(modManagerMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight() - barLayoutHeight);
				screenUI.setBackgroundDrawable(backgroundGradient());
				screenUI.setOnDismissListener(new PopupWindow_.OnDismissListener() {
					onDismiss: function() {
						/* VertexClientPE.menuIsShowing = false;
						if(barUI != null && barUI.isShowing()) {
							barUI.dismiss();
						} */
						VertexClientPE.saveMainSettings();
					}
				});
				screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.BOTTOM, 0, 0);
			} catch(error) {
				print("An error occurred: " + error);
			}
		}
	}));
}

function dashboardScreen(title, icon) {
	VertexClientPE.menuIsShowing = true;
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				VertexClientPE.checkGUINeedsDismiss();

				let columnCount = dashboardTileSize;
				let rowCount = Math.ceil(VertexClientPE.tiles.length / dashboardTileSize);

				let dashboardMenuLayout = new GridLayout_(CONTEXT);
				dashboardMenuLayout.setColumnCount(columnCount);
				dashboardMenuLayout.setRowCount(rowCount);

				let dashboardMenuLayoutScroll = new ScrollView_(CONTEXT);

				let dashboardMenuLayout1 = new LinearLayout_(CONTEXT);
				dashboardMenuLayout1.setOrientation(1);
				dashboardMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);

				dashboardMenuLayoutScroll.addView(dashboardMenuLayout);
				dashboardMenuLayout1.addView(dashboardMenuLayoutScroll);

				VertexClientPE.tiles.forEach(function(element, index, array) {
					if((element.hasOwnProperty("shouldAdd") && element.shouldAdd()) || !element.hasOwnProperty("shouldAdd")) {
						dashboardMenuLayout.addView(tileButton(element, true));
					}
				});

				screenUI = new PopupWindow_(dashboardMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight() - barLayoutHeight);
				screenUI.setBackgroundDrawable(backgroundGradient());
				screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.BOTTOM, 0, 0);

				VertexClientPE.showExitButtons(false, title, icon, userBar());
			} catch(error) {
				print("An error occurred: " + error);
			}
		}
	}));
}

VertexClientPE.createScreen = function() {

}

let webBrowserWebView;

VertexClientPE.showURLBarDialog = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				if(webBrowserWebView == null || webBrowserWebView == undefined) {
					throw new Error("webBrowserWebView is not defined!");
				}
				let urlBarDialogTitle = clientTextView("Enter an URL", true);
				let btn = clientButton("Done");
				let inputBar = clientEditText(webBrowserWebView.getUrl());
				let dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);
				dialogLayout.addView(urlBarDialogTitle);
				dialogLayout.addView(inputBar);
				dialogLayout.addView(btn);
				let dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("Enter an URL");
				inputBar.setHint("URL");
				dialog.show();
				btn.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						let newUrl = inputBar.getText().toString();
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

let webbrowserFullOutputText = "";

VertexClientPE.showF12Dialog = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
		run: function() {
			try {
				if(webBrowserWebView == null || webBrowserWebView == undefined) {
					throw new Error("webBrowserWebView is not defined!");
				}
				let consoleDialogTitle = clientTextView("Developer Tools (F12)", true);
				let enterButton = clientButton("Enter");
				let closeButton = clientButton("Close");
				let dialogLayout = new LinearLayout_(CONTEXT);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout_.VERTICAL);
				dialogLayout.setPadding(10, 10, 10, 10);

				let dialogOutputLayout1 = new LinearLayout_(CONTEXT);
				dialogOutputLayout1.setOrientation(LinearLayout_.VERTICAL);
				dialogOutputLayout1.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels - dip2px(10), display.heightPixels / 2));
				dialogOutputLayout1.setBackgroundDrawable(backgroundSpecial());

				let dialogOutputScroll = new ScrollView_(CONTEXT);

				let dialogOutputLayout = new LinearLayout_(CONTEXT);
				dialogOutputLayout.setOrientation(LinearLayout_.VERTICAL);

				let dialogInputLayout1 = new LinearLayout_(CONTEXT);
				dialogInputLayout1.setOrientation(LinearLayout_.VERTICAL);
				dialogInputLayout1.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels - dip2px(10), display.heightPixels / 6));
				dialogInputLayout1.setBackgroundDrawable(backgroundSpecial(null, "#212121|#ffffff"));

				let dialogInputScroll = new ScrollView_(CONTEXT);

				let dialogInputLayout = new LinearLayout_(CONTEXT);
				dialogInputLayout.setOrientation(LinearLayout_.VERTICAL);

				let outputTextView = clientTextView(webbrowserFullOutputText);
				dialogOutputLayout.addView(outputTextView);

				let inputBar = clientEditText("");
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

				let dialog = new Dialog_(CONTEXT);
				dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("Developer Tools (F12)");
				dialog.show();
				let window = dialog.getWindow();
				window.setLayout(display.widthPixels, display.heightPixels);
				enterButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						try {
							let input = inputBar.getText();
							VertexClientPE.evalJSOnWebView(input, webBrowserWebView);
							new Thread_(new Runnable_() {
								run: function() {
									while(VertexClientPE.getEvalOutput() == null || VertexClientPE.getEvalOutput() == "") {
										Thread_.sleep(10);
									}
									CONTEXT.runOnUiThread(new Runnable_() {
										run: function() {
											let outputText;
											if(outputTextView.getText() == "") {
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

function webBrowserScreen(fromDashboard) {
	VertexClientPE.menuIsShowing = true;
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				VertexClientPE.checkGUINeedsDismiss();

				let webBrowserMenuLayout = new LinearLayout_(CONTEXT);
				webBrowserMenuLayout.setOrientation(1);
				webBrowserMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);

				let webBrowserTitle = clientTextView("Webbrowser", true);
				webBrowserTitle.setTextSize(25);
				webBrowserTitle.setGravity(Gravity_.CENTER);
				webBrowserMenuLayout.addView(webBrowserTitle);

				webBrowserWebView = new WebView_(CONTEXT);
				let wS = webBrowserWebView.getSettings();

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
						if(exitWebBrowserUI != null && exitWebBrowserUI.isShowing()) {
							xWebBrowserButton.performClick();
						}
						webbrowserFullOutputText = null;
					}
				});
				screenUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
			} catch(error) {
				print("An error occurred: " + error);
			}
		}
	}));
}

function reshowMenuButton() {
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

/**
 * function VertexClientPE.showMenu()
 * @author peacestorm
 * @since v1.1
*/
VertexClientPE.showMenu = function() {
	let _0xff55=["\x59\x6F\x75\x27\x76\x65\x20\x63\x61\x6D\x65\x20\x61\x63\x72\x6F\x73\x73\x20\x61\x6E\x20\x6F\x75\x74\x64\x61\x74\x65\x64\x2C\x20\x65\x64\x69\x74\x65\x64\x20\x61\x6E\x64\x20\x75\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64\x20\x56\x65\x72\x74\x65\x78\x20\x43\x6C\x69\x65\x6E\x74\x20\x50\x45\x20\x73\x63\x72\x69\x70\x74\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x74\x68\x65\x20\x6F\x66\x66\x69\x63\x69\x61\x6C\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x6F\x6E\x20\x6F\x75\x72\x20\x77\x65\x62\x73\x69\x74\x65\x3A\x20\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2E\x6D\x6C","\x74\x6F\x61\x73\x74","\x59\x6F\x75\x27\x76\x65\x20\x63\x61\x6D\x65\x20\x61\x63\x72\x6F\x73\x73\x20\x61\x6E\x20\x65\x64\x69\x74\x65\x64\x20\x61\x6E\x64\x20\x75\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64\x20\x56\x65\x72\x74\x65\x78\x20\x43\x6C\x69\x65\x6E\x74\x20\x50\x45\x20\x73\x63\x72\x69\x70\x74\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x74\x68\x65\x20\x6F\x66\x66\x69\x63\x69\x61\x6C\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x6F\x6E\x20\x6F\x75\x72\x20\x77\x65\x62\x73\x69\x74\x65\x3A\x20\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2E\x6D\x6C"];if(!isAuthorized){if(!isSupported){VertexClientPE[_0xff55[1]](_0xff55[0])}else {VertexClientPE[_0xff55[1]](_0xff55[2])};return}
	if(mainButtonTapSetting == "menu" && mainButtonStyleSetting != "invisible_ghost" && !ghostModeState) {
		menuBtn.setBackgroundDrawable(iconClickedClientGUI);
	}
	if(combatEnabled == "off" && worldEnabled == "off" && movementEnabled == "off" && playerEnabled == "off" && miscEnabled == "off") {
		VertexClientPE.showEmptyMenu();
	} else {
		if(menuType == "normal") {
			VertexClientPE.showCategoryMenus();
		} else if(menuType == "halfscreen" || menuType == "halfscreen_top" || menuType == "tabbed_fullscreen") {
			retroMenu();
		} else if(menuType == "fullscreen") {
			VertexClientPE.showFullScreenMenu();
		} else if(menuType == "table") {
			VertexClientPE.showTableMenu();
		}
		VertexClientPE.menuIsShowing = true;
	}
}

/**
 * function VertexClientPE.closeMenu()
 * @author peacestorm
 * @since v1.1
*/
VertexClientPE.closeMenu = function() {
	if(emptyMenu != null && emptyMenu.isShowing()) {
		emptyMenu.dismiss();
	} else {
		if(menuType == "normal") {
			if(combatMenu != null && combatMenu.isShowing()) {
				combatMenu.dismiss();
			}
			if(worldMenu != null && worldMenu.isShowing()) {
				worldMenu.dismiss();
			}
			if(movementMenu != null && movementMenu.isShowing()) {
				movementMenu.dismiss();
			}
			if(playerMenu != null && playerMenu.isShowing()) {
				playerMenu.dismiss();
			}
			if(miscMenu != null && miscMenu.isShowing()) {
				miscMenu.dismiss();
			}
		} else if(menuType == "halfscreen" || menuType == "halfscreen_top" || menuType == "tabbed_fullscreen") {
			if(menu != null && menu.isShowing()) {
				menu.dismiss();
			}
		} else if(menuType == "fullscreen") {
			if(fullScreenMenu != null && fullScreenMenu.isShowing()) {
				fullScreenMenu.dismiss();
			}
		} else if(menuType == "table") {
			if(tableMenu != null && tableMenu.isShowing()) {
				tableMenu.dismiss();
			}
		}
	}
	VertexClientPE.menuIsShowing = false;
	if(GUI != null && GUI.isShowing()) {
		if(mainButtonTapSetting == "menu" && mainButtonStyleSetting != "invisible_ghost" && !ghostModeState) {
			menuBtn.setBackgroundDrawable(iconClientGUI);
		}
		if(currentScreen != ScreenType.start_screen && currentScreen != ScreenType.exit_dialog && currentScreen != ScreenType.ingame && currentScreen != ScreenType.hud && currentScreen != ScreenType.pause_screen) {
			GUI.setTouchable(false);
			GUI.update();
		}
	}
}

VertexClientPE.showEmptyMenu = function() {
	VertexClientPE.menuIsShowing = true;

	let emptyMenuLayout = new LinearLayout_(CONTEXT);
	emptyMenuLayout.setOrientation(1);
	emptyMenuLayout.setGravity(Gravity_.CENTER);

	let logoViewer = new ImageView_(CONTEXT);
	logoViewer.setImageBitmap(imgLogo);
	logoViewer.setLayoutParams(new LinearLayout_.LayoutParams(width / 3, height / 3));

	let emptyText = clientTextView("Sorry, there's nothing to see here\nas you opted out all categories.");
	emptyText.setGravity(Gravity_.CENTER);

	emptyMenuLayout.addView(logoViewer);
	emptyMenuLayout.addView(emptyText);

	let logoAnim = new android.view.animation.AlphaAnimation(0, 1);
	logoAnim.setInterpolator(new android.view.animation.LinearInterpolator());
	logoAnim.setRepeatCount(android.view.animation.Animation.INFINITE);
	logoAnim.setRepeatMode(android.view.animation.Animation.REVERSE);
	logoAnim.setDuration(1500);

	emptyMenu = new PopupWindow_(emptyMenuLayout, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
	emptyMenu.setBackgroundDrawable(backgroundSpecial());
	emptyMenu.setOnDismissListener(new PopupWindow_.OnDismissListener() {
		onDismiss: function() {
			logoViewer.clearAnimation();
		}
	});
	emptyMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);

	logoViewer.startAnimation(logoAnim);

	reshowMenuButton();
}

VertexClientPE.showFullScreenMenu = function() {
	VertexClientPE.menuIsShowing = true;
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				VertexClientPE.checkGUINeedsDismiss();

				let fullScreenMenuLayoutScroll = new android.widget.HorizontalScrollView(CONTEXT);

				let fullScreenMenuLayout = new LinearLayout_(CONTEXT);
				fullScreenMenuLayout.setOrientation(LinearLayout_.HORIZONTAL);
				fullScreenMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);

				fullScreenMenuLayoutScroll.addView(fullScreenMenuLayout);

				let fullScreenMenuLayout1Combat = new LinearLayout_(CONTEXT);
				fullScreenMenuLayout1Combat.setOrientation(1);
				fullScreenMenuLayout1Combat.setGravity(Gravity_.CENTER_HORIZONTAL);
				let fullScreenMenuLayout1World = new LinearLayout_(CONTEXT);
				fullScreenMenuLayout1World.setOrientation(1);
				fullScreenMenuLayout1World.setGravity(Gravity_.CENTER_HORIZONTAL);
				let fullScreenMenuLayout1Movement = new LinearLayout_(CONTEXT);
				fullScreenMenuLayout1Movement.setOrientation(1);
				fullScreenMenuLayout1Movement.setGravity(Gravity_.CENTER_HORIZONTAL);
				let fullScreenMenuLayout1Player = new LinearLayout_(CONTEXT);
				fullScreenMenuLayout1Player.setOrientation(1);
				fullScreenMenuLayout1Player.setGravity(Gravity_.CENTER_HORIZONTAL);
				let fullScreenMenuLayout1Misc = new LinearLayout_(CONTEXT);
				fullScreenMenuLayout1Misc.setOrientation(1);
				fullScreenMenuLayout1Misc.setGravity(Gravity_.CENTER_HORIZONTAL);

				let combatSectionTitle = coloredSubTitle(combatName);
				combatSectionTitle.setGravity(Gravity_.CENTER);
				combatSectionTitle.setOnLongClickListener(new View_.OnLongClickListener({
					onLongClick: function(v, t) {
						VertexClientPE.showCategoryDialog(combatSectionTitle, combatName, 0);
						return true;
					}
				}));
				let worldSectionTitle = coloredSubTitle(worldName);
				worldSectionTitle.setGravity(Gravity_.CENTER);
				worldSectionTitle.setOnLongClickListener(new View_.OnLongClickListener({
					onLongClick: function(v, t) {
						VertexClientPE.showCategoryDialog(worldSectionTitle, worldName, 1);
						return true;
					}
				}));
				let movementSectionTitle = coloredSubTitle(movementName);
				movementSectionTitle.setGravity(Gravity_.CENTER);
				movementSectionTitle.setOnLongClickListener(new View_.OnLongClickListener({
					onLongClick: function(v, t) {
						VertexClientPE.showCategoryDialog(movementSectionTitle, movementName, 2);
						return true;
					}
				}));
				let playerSectionTitle = coloredSubTitle(playerName);
				playerSectionTitle.setGravity(Gravity_.CENTER);
				playerSectionTitle.setOnLongClickListener(new View_.OnLongClickListener({
					onLongClick: function(v, t) {
						VertexClientPE.showCategoryDialog(playerSectionTitle, playerName, 3);
						return true;
					}
				}));
				let miscSectionTitle = coloredSubTitle(miscName);
				miscSectionTitle.setGravity(Gravity_.CENTER);
				miscSectionTitle.setOnLongClickListener(new View_.OnLongClickListener({
					onLongClick: function(v, t) {
						VertexClientPE.showCategoryDialog(miscSectionTitle, miscName, 4);
						return true;
					}
				}));

				fullScreenMenuLayout1Combat.addView(combatSectionTitle);
				fullScreenMenuLayout1World.addView(worldSectionTitle);
				fullScreenMenuLayout1Movement.addView(movementSectionTitle);
				fullScreenMenuLayout1Player.addView(playerSectionTitle);
				fullScreenMenuLayout1Misc.addView(miscSectionTitle);

				let fullScreenMenuLayoutScrollCombat = new ScrollView_(CONTEXT);
				let fullScreenMenuLayoutScrollWorld = new ScrollView_(CONTEXT);
				let fullScreenMenuLayoutScrollMovement = new ScrollView_(CONTEXT);
				let fullScreenMenuLayoutScrollPlayer = new ScrollView_(CONTEXT);
				let fullScreenMenuLayoutScrollMisc = new ScrollView_(CONTEXT);

				let fullScreenMenuLayoutCombat = new LinearLayout_(CONTEXT);
				fullScreenMenuLayoutCombat.setOrientation(1);
				let fullScreenMenuLayoutWorld = new LinearLayout_(CONTEXT);
				fullScreenMenuLayoutWorld.setOrientation(1);
				let fullScreenMenuLayoutMovement = new LinearLayout_(CONTEXT);
				fullScreenMenuLayoutMovement.setOrientation(1);
				let fullScreenMenuLayoutPlayer = new LinearLayout_(CONTEXT);
				fullScreenMenuLayoutPlayer.setOrientation(1);
				let fullScreenMenuLayoutMisc = new LinearLayout_(CONTEXT);
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

				let fullScreenMenuLayout1 = new LinearLayout_(CONTEXT);
				fullScreenMenuLayout1.setOrientation(1);
				fullScreenMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
				fullScreenMenuLayout1.setPadding(10, 0, 10, 0);

				if(mainButtonPositionSetting == "top-left" || mainButtonPositionSetting == "top-right") {
					fullScreenMenuLayout1.addView(clientTextView("\n"));
				}
				fullScreenMenuLayout1.addView(fullScreenMenuLayoutScroll);

				VertexClientPE.modules.forEach(function (element, index, array) {
					if (element.type == "Mod" || element.type == "Special") {
						if(element.hasOwnProperty("isExpMod") && element.isExpMod() && !VertexClientPE.isExpMode()) {
							return;
						}
						if(element.hasOwnProperty("shouldAdd") && !element.shouldAdd()) {
							return;
						}
						if (element.category == VertexClientPE.category.COMBAT) {
							if(combatEnabled == "on") {
								fullScreenMenuLayoutCombat.addView(modButton(element));
							}
						} else if (element.category == VertexClientPE.category.WORLD) {
							if(worldEnabled == "on") {
								fullScreenMenuLayoutWorld.addView(modButton(element));
							}
						} else if (element.category == VertexClientPE.category.MOVEMENT) {
							if(movementEnabled == "on") {
								fullScreenMenuLayoutMovement.addView(modButton(element));
							}
						} else if (element.category == VertexClientPE.category.PLAYER) {
							if(playerEnabled == "on") {
								fullScreenMenuLayoutPlayer.addView(modButton(element));
							}
						} else if (element.category == VertexClientPE.category.MISC) {
							if(miscEnabled == "on") {
								fullScreenMenuLayoutMisc.addView(modButton(element));
							}
						}
					}
				});

				fullScreenMenu = new PopupWindow_(fullScreenMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
				fullScreenMenu.setBackgroundDrawable(backgroundSpecial());
				fullScreenMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);

				reshowMenuButton();
			} catch(error) {
				print("An error occurred: " + error);
			}
		}
	}));
}

/**
 * function VertexClientPE.showTableMenu()
 * @author peacestorm
 * @since v2.4
*/
VertexClientPE.showTableMenu = function() {
	VertexClientPE.menuIsShowing = true;
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				let dScrollView = new ScrollView_(CONTEXT);
				dScrollView.setLayoutParams(new LinearLayout_.LayoutParams(LinearLayout_.LayoutParams.WRAP_CONTENT, LinearLayout_.LayoutParams.WRAP_CONTENT));

				let dScrollInside = new LinearLayout_(CONTEXT);
				dScrollInside.setGravity(Gravity_.CENTER);
				dScrollInside.setOrientation(1);
				dScrollView.addView(dScrollInside);

				let mainLayout = new LinearLayout_(CONTEXT);
				mainLayout.setGravity(Gravity_.CENTER);
				mainLayout.setOrientation(LinearLayout_.VERTICAL);

				mainLayout.addView(dScrollView);

				let tableLayout = new TableLayout_(CONTEXT);
				let tableRow;
				let tempButton;

				let realIndex = -1;
				VertexClientPE.modules.forEach(function(element, index, array) {
					if(element.hasOwnProperty("isExpMod") && element.isExpMod() && !VertexClientPE.isExpMode()) {
						return;
					}
					if(element.hasOwnProperty("shouldAdd") && !element.shouldAdd()) {
						return;
					}
					realIndex++;
					tempButton = modButton(element);
					if(realIndex % 2 == 1) {
						if(!tableRow) {
							tableRow = new TableRow_(CONTEXT);
						}
						tableRow.addView(tempButton);
						tableLayout.addView(tableRow);
						tableRow = null;
					} else {
						tableRow = new TableRow_(CONTEXT);
						tableRow.addView(tempButton);
					}
					tempButton = null;
				});
				if(tableRow != null) {
					tableLayout.addView(tableRow);
				}

				dScrollInside.addView(tableLayout);

				tableMenu = new PopupWindow_(mainLayout, -2, CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
				//tableMenu.setBackgroundDrawable(backgroundSpecial());
				tableMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.CENTER | Gravity_.TOP, 0, 0);
			} catch(error) {
				print("An error occurred: " + error);
			}
		}
	}));
}

let currentTab = "Combat";

/**
 * function retroMenu()
 * @author peacestorm
 * @since v1.0-pre
*/
function retroMenu() {
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				let menuLayout = new LinearLayout_(CONTEXT);
				let menuMiddleScroll = new ScrollView_(CONTEXT);
				let menuRightScroll = new ScrollView_(CONTEXT);
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

				let categories = [VertexClientPE.category.COMBAT, VertexClientPE.category.WORLD, VertexClientPE.category.MOVEMENT, VertexClientPE.category.PLAYER, VertexClientPE.category.MISC];

				categories.forEach(function(element, index, array) {
					if((index == 0 && combatEnabled == "on") || (index == 1 && worldEnabled == "on") || (index == 2 && movementEnabled == "on") || (index == 3 && playerEnabled == "on") || (index == 4 && miscEnabled == "on")) {
						menuMiddleLayout.addView(new categoryTab(element));
					}
				});

				let shouldHaveCorner = menuType != "halfscreen";
				VertexClientPE.modules.forEach(function(element, index, array) {
					if(VertexClientPE.category.toRealName(element.category) == currentTab && (element.type == "Mod" || element.type == "Special")) {
						if(element.hasOwnProperty("isExpMod") && element.isExpMod() && !VertexClientPE.isExpMode()) {
							return;
						}
						if(element.hasOwnProperty("shouldAdd") && !element.shouldAdd()) {
							return;
						}
						menuRightLayout.addView(modButton(element, null, null, null, shouldHaveCorner));
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
					reshowMenuButton();
				}
			} catch(error) {
				print('An error occured: ' + error);
			}
		}
	}));
}

VertexClientPE.shouldUpdateGUI = false;

VertexClientPE.getShouldUpdateGUI = function(popupWindow) {
	return popupWindow == null || popupWindow == undefined || VertexClientPE.shouldUpdateGUI;
}

let combatMenuLayout1, worldMenuLayout1, movementMenuLayout1, playerMenuLayout1, miscMenuLayout1;

VertexClientPE.showCategoryMenus = function () {
	CONTEXT.runOnUiThread({
		run() {
			try {

				if(VertexClientPE.getShouldUpdateGUI(combatMenu)) {
					let combatMenuLayout = new LinearLayout_(CONTEXT),
						combatMenuScrollView = new ScrollView_(CONTEXT),
						combat = new categoryTitle(combatName),
						combatSettings = combat.getLeftButton(),
						combatTitle = combat.getMiddleButton(),
						combatArrow = combat.getRightButton(),
						worldMenuLayout = new LinearLayout_(CONTEXT),
						worldMenuScrollView = new ScrollView_(CONTEXT),
						world = new categoryTitle(worldName);
						worldSettings = world.getLeftButton(),
						worldTitle = world.getMiddleButton(),
						worldArrow = world.getRightButton(),
						movementMenuLayout = new LinearLayout_(CONTEXT),
						movementMenuScrollView = new ScrollView_(CONTEXT),
						movement = new categoryTitle(movementName),
						movementSettings = movement.getLeftButton(),
						movementTitle = movement.getMiddleButton(),
						movementArrow = movement.getRightButton(),
						playerMenuLayout = new LinearLayout_(CONTEXT),
						playerMenuScrollView = new ScrollView_(CONTEXT),
						player = new categoryTitle(playerName),
						playerSettings = player.getLeftButton(),
						playerTitle = player.getMiddleButton(),
						playerArrow = player.getRightButton(),
						miscMenuLayout = new LinearLayout_(CONTEXT),
						miscMenuScrollView = new ScrollView_(CONTEXT),
						misc = new categoryTitle(miscName),
						miscSettings = misc.getLeftButton(),
						miscTitle = misc.getMiddleButton(),
						miscArrow = misc.getRightButton();

					combatMenuLayout1 = new LinearLayout_(CONTEXT);
					worldMenuLayout1 = new LinearLayout_(CONTEXT);
					movementMenuLayout1 = new LinearLayout_(CONTEXT);
					playerMenuLayout1 = new LinearLayout_(CONTEXT);
					miscMenuLayout1 = new LinearLayout_(CONTEXT);

					combatMenu = new PopupWindow_(CONTEXT);
					combatMenu.setWidth(ViewGroup_.LayoutParams.WRAP_CONTENT);
					combatMenu.setHeight(ViewGroup_.LayoutParams.WRAP_CONTENT);
					worldMenu = new PopupWindow_(CONTEXT);
					worldMenu.setWidth(ViewGroup_.LayoutParams.WRAP_CONTENT);
					worldMenu.setHeight(ViewGroup_.LayoutParams.WRAP_CONTENT);
					movementMenu = new PopupWindow_(CONTEXT);
					movementMenu.setWidth(ViewGroup_.LayoutParams.WRAP_CONTENT);
					movementMenu.setHeight(ViewGroup_.LayoutParams.WRAP_CONTENT);
					playerMenu = new PopupWindow_(CONTEXT);
					playerMenu.setWidth(ViewGroup_.LayoutParams.WRAP_CONTENT);
					playerMenu.setHeight(ViewGroup_.LayoutParams.WRAP_CONTENT);
					miscMenu = new PopupWindow_(CONTEXT);
					miscMenu.setWidth(ViewGroup_.LayoutParams.WRAP_CONTENT);
					miscMenu.setHeight(ViewGroup_.LayoutParams.WRAP_CONTENT);

					VertexClientPE.modules.forEach(function (element, index, array) {
						if (element.type == "Mod" || element.type == "Special") {
							if(element.hasOwnProperty("isExpMod") && element.isExpMod() && !VertexClientPE.isExpMode()) {
								return;
							}
							if(element.hasOwnProperty("shouldAdd") && !element.shouldAdd()) {
								return;
							}
							if (element.category == VertexClientPE.category.COMBAT) {
								combatMenuLayout.addView(modButton(element));
							} else if (element.category == VertexClientPE.category.WORLD) {
								worldMenuLayout.addView(modButton(element));
							} else if (element.category == VertexClientPE.category.MOVEMENT) {
								movementMenuLayout.addView(modButton(element));
							} else if (element.category == VertexClientPE.category.PLAYER) {
								playerMenuLayout.addView(modButton(element));
							} else if (element.category == VertexClientPE.category.MISC) {
								miscMenuLayout.addView(modButton(element));
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
							if (combatdown) {
								let a = e.getAction();
								if (a == 2) {
									let X = parseInt(e.getX() - combatmX) * -1 / 10;
									let Y = parseInt(e.getY() - combatmY) * -1 / 10;
									combattpopx = parseInt(combattpopx + X);
									combattpopy = parseInt(combattpopy + Y);
									combatMenu.update(combattpopx, combattpopy, -1, -1);
									VertexClientPE.saveFloatingMenus("combat");
								}
								if (a == 1) combatdown = false;
							} else {
								combatmX = e.getX();
								combatmY = e.getY();
							}
							return false;
						}
					}));

					combatMenu.setContentView(combatMenuLayout1);
					combatMenu.setBackgroundDrawable(backgroundSpecial(true, "#80212121"));
					if (menuAnimationsSetting == "on") {
						combatMenu.setAnimationStyle(android.R.style.Animation_Dialog);
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
							if (worlddown) {
								let a = e.getAction()
								if (a == 2) {
									let X = parseInt(e.getX() - worldmX) * -1 / 10;
									let Y = parseInt(e.getY() - worldmY) * -1 / 10;
									worldtpopx = parseInt(worldtpopx + X);
									worldtpopy = parseInt(worldtpopy + Y);
									worldMenu.update(worldtpopx, worldtpopy, -1, -1);
									VertexClientPE.saveFloatingMenus("world");
								}
								if (a == 1) worlddown = false;
							} else {
								worldmX = e.getX();
								worldmY = e.getY();
							}
							return false;
						}
					}));

					worldMenu.setContentView(worldMenuLayout1);
					worldMenu.setBackgroundDrawable(backgroundSpecial(true, "#80212121"));
					if (menuAnimationsSetting == "on") {
						worldMenu.setAnimationStyle(android.R.style.Animation_Dialog);
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
							if (movementdown) {
								let a = e.getAction()
								if (a == 2) {
									let X = parseInt(e.getX() - movementmX) * -1 / 10;
									let Y = parseInt(e.getY() - movementmY) * -1 / 10;
									movementtpopx = parseInt(movementtpopx + X);
									movementtpopy = parseInt(movementtpopy + Y);
									movementMenu.update(movementtpopx, movementtpopy, -1, -1);
									VertexClientPE.saveFloatingMenus("movement");
								}
								if (a == 1) movementdown = false;
							} else {
								movementmX = e.getX();
								movementmY = e.getY();
							}
							return false;
						}
					}));

					movementMenu.setContentView(movementMenuLayout1);
					movementMenu.setBackgroundDrawable(backgroundSpecial(true, "#80212121"));
					if (menuAnimationsSetting == "on") {
						movementMenu.setAnimationStyle(android.R.style.Animation_Dialog);
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
							if (playerdown) {
								let a = e.getAction()
								if (a == 2) {
									let X = parseInt(e.getX() - playermX) * -1 / 10;
									let Y = parseInt(e.getY() - playermY) * -1 / 10;
									playertpopx = parseInt(playertpopx + X);
									playertpopy = parseInt(playertpopy + Y);
									playerMenu.update(playertpopx, playertpopy, -1, -1);
									VertexClientPE.saveFloatingMenus("player");
								}
								if (a == 1) playerdown = false;
							} else {
								playermX = e.getX();
								playermY = e.getY();
							}
							return false;
						}
					}));

					playerMenu.setContentView(playerMenuLayout1);
					playerMenu.setBackgroundDrawable(backgroundSpecial(true, "#80212121"));
					if (menuAnimationsSetting == "on") {
						playerMenu.setAnimationStyle(android.R.style.Animation_Dialog);
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
							if (miscdown) {
								let a = e.getAction()
								if (a == 2) {
									let X = parseInt(e.getX() - miscmX) * -1 / 10;
									let Y = parseInt(e.getY() - miscmY) * -1 / 10;
									misctpopx = parseInt(misctpopx + X);
									misctpopy = parseInt(misctpopy + Y);
									miscMenu.update(misctpopx, misctpopy, -1, -1);
									VertexClientPE.saveFloatingMenus("misc");
								}
								if (a == 1) miscdown = false;
							} else {
								miscmX = e.getX();
								miscmY = e.getY();
							}
							return false;
						}
					}));

					miscMenu.setContentView(miscMenuLayout1);
					miscMenu.setBackgroundDrawable(backgroundSpecial(true, "#80212121"));
					if (menuAnimationsSetting == "on") {
						miscMenu.setAnimationStyle(android.R.style.Animation_Dialog);
					}

					VertexClientPE.shouldUpdateGUI = false;
				}

				//SHOW ALL MENUS *AFTER INITIALIZING*
				if(combatEnabled == "on") {
					combatMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.BOTTOM | Gravity_.RIGHT, combattpopx, combattpopy);
					if(combatMenuShown) {
						combatMenuLayout1.setLayoutParams(new FrameLayout_.LayoutParams(ViewGroup_.LayoutParams.WRAP_CONTENT, screenHeight / 2 - customHeight));
						combatMenu.update();
					}
				}
				if(worldEnabled == "on") {
					worldMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.BOTTOM | Gravity_.RIGHT, worldtpopx, worldtpopy);
					if(worldMenuShown) {
						worldMenuLayout1.setLayoutParams(new FrameLayout_.LayoutParams(ViewGroup_.LayoutParams.WRAP_CONTENT, screenHeight / 2 - customHeight));
						worldMenu.update();
					}
				}
				if(movementEnabled == "on") {
					movementMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.BOTTOM | Gravity_.RIGHT, movementtpopx, movementtpopy);
					if(movementMenuShown) {
						movementMenuLayout1.setLayoutParams(new FrameLayout_.LayoutParams(ViewGroup_.LayoutParams.WRAP_CONTENT, screenHeight / 2 - customHeight));
						movementMenu.update();
					}
				}
				if(playerEnabled == "on") {
					playerMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.BOTTOM | Gravity_.RIGHT, playertpopx, playertpopy);
					if(playerMenuShown) {
						playerMenuLayout1.setLayoutParams(new FrameLayout_.LayoutParams(ViewGroup_.LayoutParams.WRAP_CONTENT, screenHeight / 2 - customHeight));
						playerMenu.update();
					}
				}
				if(miscEnabled == "on") {
					miscMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.BOTTOM | Gravity_.RIGHT, misctpopx, misctpopy);
					if(miscMenuShown) {
						miscMenuLayout1.setLayoutParams(new FrameLayout_.LayoutParams(ViewGroup_.LayoutParams.WRAP_CONTENT, screenHeight / 2 - customHeight));
						miscMenu.update();
					}
				}
			} catch (e) {
				print("Error: " + e + " #" + e.lineNumber);
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
		if(watermarkUI != null) {
			watermarkUI.dismiss();
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
			if(!hacksList.isShowing() && !tabGUI.isShowing() && !shortcutGUI.isShowing() && (currentScreen == ScreenType.ingame || currentScreen == ScreenType.hud)) {
				showHacksList();
				showTabGUI();
				showShortcuts();
				if(healthDisplayState) {
					showHealthDisplay();
				}
				if(watermarkState) {
					showWatermark();
				}
				if(rotationPlusState) {
					showRotationPlus();
				}
			}
			if(((currentScreen == ScreenType.pause_screen && f5ButtonModeSetting == "pause") || ((currentScreen == ScreenType.hud || currentScreen == ScreenType.ingame) && f5ButtonModeSetting == "ingame")) && (pauseUtilitiesUI == null || !pauseUtilitiesUI.isShowing())) {
				showPauseUtilities();
			}
		}
	}
}

function showMenuButton() {
	let layout = new LinearLayout_(CONTEXT);
	layout.setOrientation(1);
	layout.setGravity(Gravity_.TOP);
	menuBtn = new Button_(CONTEXT);
	if(mainButtonStyleSetting != "invisible_ghost" && !ghostModeState) {
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
		menuBtn.setSoundEffectsEnabled(false);
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

	GUI = new PopupWindow_(layout, dip2px(mainButtonSizeSetting), dip2px(mainButtonSizeSetting));
	GUI.setTouchable(false);
	GUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
	if(menuAnimationsSetting == "on") {
		GUI.setAnimationStyle(android.R.style.Animation_Translucent);
	}

	let background;
	if(mainButtonStyleSetting == "no_background" || mainButtonStyleSetting == "invisible_ghost" || ghostModeState) {
		background = new ColorDrawable_(Color_.TRANSPARENT);
	} else if(mainButtonStyleSetting == "normal") {
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
		} else if(mainButtonPositionSetting == "top-left") {
			background = backgroundGradient("bottomright", null, "on");
		} else if(mainButtonPositionSetting == "bottom-left") {
			background = backgroundGradient("bottomright_", null, "on");
		}
	} else if(mainButtonStyleSetting == "classic") {
		background = new ColorDrawable_(Color_.parseColor("#1D1D1D"));
	}

	let mBPadding = mainButtonSizeSetting / 4;

	let rgbArray = [customRGBRed, customRGBGreen, customRGBBlue, customRGBRedStroke, customRGBGreenStroke, customRGBBlueStroke];
	let color = themeSetting;

	menuBtn.setOnTouchListener(new View_.OnTouchListener() {
		onTouch: function(v, event) {
			if(mainButtonStyleSetting == "normal" && !ghostModeState) {
				let action = event.getActionMasked();
				if(action == MotionEvent_.ACTION_CANCEL || action == MotionEvent_.ACTION_UP) {
					if(useLightThemeSetting == "on") {
						background.setColor(Color_.parseColor("#7000994C"));
					} else {
						background.setColor(Color_.parseColor("#700B5B25"));
					}
					if(color == "custom rgb") {
						background.setColor(Color_.argb(127, rgbArray[0], rgbArray[1], rgbArray[2]));
					}
					if(color == "red") {
						if(useLightThemeSetting == "on") {
							background.setColor(Color_.parseColor("#70FF3333"));
						} else {
							background.setColor(Color_.parseColor("#705B0C0C"));
						}
					} if(color == "blue") {
						if(useLightThemeSetting == "on") {
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

					let rect = new android.graphics.Rect(v.getLeft(), v.getTop(), v.getRight(), v.getBottom());
					if(rect.contains(v.getLeft() + event.getX(), v.getTop() + event.getY())) { // detect if the event happens inside the view
						// onClick will run soon

						// play sounds
						if(buttonSoundSetting == "minecraft") {
							//Level.playSoundEnt(getPlayerEnt(), "random.click", 100, 0);
							Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 0);
						}
					}
				} else {
					if(useLightThemeSetting == "on") {
						background.setColor(Color_.parseColor("#7000CC66"));
					} else {
						background.setColor(Color_.parseColor("#700F8219"));
					}
					if(color == "custom rgb") {
						background.setColor(Color_.argb(127, rgbArray[3], rgbArray[4], rgbArray[5]));
					}
					if(color == "red") {
						if(useLightThemeSetting == "on") {
							background.setColor(Color_.parseColor("#70FF6666"));
						} else {
							background.setColor(Color_.parseColor("#70821010"));
						}
					} if(color == "blue") {
						if(useLightThemeSetting == "on") {
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
		}
	});

	if(mainButtonPositionSetting == "top-right") {
		if(mainButtonStyleSetting != "classic" && mainButtonStyleSetting != "global_background") {
			layout.setPadding(mBPadding, 0, 0, mBPadding);
		} else {
			layout.setGravity(Gravity_.CENTER);
		}
		GUI.setBackgroundDrawable(background);
		GUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
	} else if(mainButtonPositionSetting == "top-left") {
		if(mainButtonStyleSetting != "classic" && mainButtonStyleSetting != "global_background") {
			layout.setPadding(0, 0, mBPadding, mBPadding);
		} else {
			layout.setGravity(Gravity_.CENTER);
		}
		GUI.setBackgroundDrawable(background);
		GUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
	} else if(mainButtonPositionSetting == "bottom-left") {
		if(mainButtonStyleSetting != "classic" && mainButtonStyleSetting != "global_background") {
			layout.setPadding(0, mBPadding, mBPadding, 0);
		} else {
			layout.setGravity(Gravity_.CENTER);
		}
		GUI.setBackgroundDrawable(background);
		GUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.BOTTOM, 0, 0);
	}

	if(!VertexClientPE.menuIsShowing) {
		if((currentScreen == ScreenType.ingame || currentScreen == ScreenType.hud) && VertexClientPE.playerIsInGame) {
			if(hacksList == null || !hacksList.isShowing()) {
				showHacksList();
				showTabGUI();
				showShortcuts();
				if(healthDisplayState) {
					showHealthDisplay();
				}
				if(watermarkState) {
					showWatermark();
				}
				if(rotationPlusState) {
					showRotationPlus();
				}
			}
		}
	}

	if(currentScreen == ScreenType.start_screen || currentScreen == ScreenType.exit_dialog || currentScreen == ScreenType.ingame || currentScreen == ScreenType.hud || currentScreen == ScreenType.pause_screen) {
		GUI.setTouchable(true);
		GUI.update();
	}

	if(!VertexClientPE.menuIsShowing) {
		if(currentScreen == ScreenType.start_screen || currentScreen == ScreenType.exit_dialog) {
			if((mainMenuTextList == null || !mainMenuTextList.isShowing()) && !VertexClientPE.playerIsInGame) {
				VertexClientPE.showStartScreenBar();
			}
			if((accountManagerGUI == null || !accountManagerGUI.isShowing()) && !VertexClientPE.playerIsInGame) {
				showAccountManagerButton();
			}
		}
		if((currentScreen == ScreenType.pause_screen && f5ButtonModeSetting == "pause") || ((currentScreen == ScreenType.hud || currentScreen == ScreenType.ingame) && f5ButtonModeSetting == "ingame")) {
			if((pauseUtilitiesUI == null || !pauseUtilitiesUI.isShowing())) {
				showPauseUtilities();
			}
		}
	}
}

function showAccountManagerButton(screen) {
	if(screen == null) {
		screen = currentScreen;
	}
	let acBtnLayout = new LinearLayout_(CONTEXT);
	acBtnLayout.setOrientation(1);
	let acBtn = clientButton("AM", null, null, "right_half");
	acBtn.setLayoutParams(new LinearLayout_.LayoutParams(dip2px(40), dip2px(40)));
	acBtn.setOnClickListener(new View_.OnClickListener({
		onClick: function(viewArg ){
			if(hacksList != null) {
				hacksList.dismiss();
			}
			if(tabGUI != null) {
				tabGUI.dismiss();
			}
			if(GUI != null) {
				GUI.dismiss();
			}
			accountManagerGUI.dismiss();
			VertexClientPE.showAccountManager(false, "Account Manager");
		}
	}));
	acBtnLayout.addView(acBtn);

	if((screen == ScreenType.start_screen || screen == ScreenType.exit_dialog) && !ghostModeState) {
		if((accountManagerGUI == null || !accountManagerGUI.isShowing()) && !VertexClientPE.menuIsShowing && !VertexClientPE.playerIsInGame) {
			accountManagerGUI = new PopupWindow_(acBtnLayout, dip2px(40), dip2px(40));
			if(menuAnimationsSetting == "on") {
				accountManagerGUI.setAnimationStyle(android.R.style.Animation_Translucent);
			}
			accountManagerGUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
			accountManagerGUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.CENTER | Gravity_.LEFT, 0, 0);
		}
	}
}

function dip2px(dips){
	return Math.ceil(dips * DENSITY);
}

function px2dip(px){
	return Math.floor(px / DENSITY);
}

let statesTextView;
let musicTextView;

let enabledHacksCounter = 0;

let musicText = "None";

function showHacksList() {
	let display = CONTEXT.getWindowManager().getDefaultDisplay(),
		width = display.getWidth(),
		height = display.getHeight();
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			if(hacksList != null) {
				hacksList.dismiss();
			}
			if(hacksListModeSetting == "off" || ghostModeState) {
				hacksList = new PopupWindow_(new LinearLayout_(CONTEXT), LinearLayout_.LayoutParams.WRAP_CONTENT, LinearLayout_.LayoutParams.WRAP_CONTENT);
			} else if(hacksList == null || !hacksList.isShowing()) {
				try {
					enabledHacksCounter = 0;

					let hacksListLayout = new LinearLayout_(CONTEXT);
					hacksListLayout.setOrientation(LinearLayout_.HORIZONTAL);
					hacksListLayout.setGravity(Gravity_.CENTER_VERTICAL);

					let hacksListLayoutLeft = new LinearLayout_(CONTEXT);
					hacksListLayoutLeft.setOrientation(1);
					hacksListLayoutLeft.setGravity(Gravity_.CENTER);
					hacksListLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(width / 8, width / 15));
					hacksListLayout.addView(hacksListLayoutLeft);

					let hacksListLayoutRight = new LinearLayout_(CONTEXT);
					hacksListLayoutRight.setOrientation(1);
					hacksListLayoutRight.setGravity(Gravity_.CENTER);
					if(hacksListModeSetting != "logo") {
						hacksListLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(width / 4, width / 15));
					} else {
						hacksListLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(LinearLayout_.LayoutParams.WRAP_CONTENT, width / 15));
					}

					hacksListLayout.addView(hacksListLayoutRight);

					let logoViewer2 = new ImageView_(CONTEXT);
					logoViewer2.setImageBitmap(imgLogo);
					logoViewer2.setLayoutParams(new LinearLayout_.LayoutParams(width / 8, width / 16));

					let versionText = clientTextView("v" + VertexClientPE.currentVersion, true);
					versionText.setGravity(android.view.Gravity.CENTER);

					let proText = clientTextView("Pro", true);
					proText.setGravity(android.view.Gravity.CENTER);
					proText.setTextColor(Color_.parseColor("#DAA520"));

					let statesText = "";
					VertexClientPE.modules.forEach(function (element, index, array) {
						if(element.isStateMod() && element.state) {
							if(bypassState && element.hasOwnProperty("canBypassBypassMod") && !element.canBypassBypassMod()) {
								return;
							}
							if(enabledHacksCounter != 0) {
								statesText += " - "
							}
							statesText += VertexClientPE.getCustomModName(element.name);
							if(element.hasOwnProperty("getExtraInfo")) {
								statesText += " [" + element.getExtraInfo() + "]";
							}
							enabledHacksCounter++;
						}
					});
					
					if(enabledHacksCounter == 0) {
						statesText = "No mods enabled";
					}

					statesTextView = clientTextView(statesText, true);
					if(hacksListModeSetting == "on") {
						statesTextView.setText(statesText);
					} else if(hacksListModeSetting == "counter") {
						statesTextView.setText(enabledHacksCounter.toString() + " mods enabled");
					}

					/* if(VertexClientPE.MusicUtils.isPaused) {
						musicTextView = clientTextView("\u266B Currently paused: " + musicText, true);
					} else {
						musicTextView = clientTextView("\u266B Currently playing: " + musicText, true);
					} */

					statesTextView.setTextSize(16);
					statesTextView.setPadding(0, 0, dip2px(8), 0);
					statesTextView.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
					statesTextView.setMarqueeRepeatLimit(-1);
					statesTextView.setSingleLine();
					statesTextView.setHorizontallyScrolling(true);
					statesTextView.setSelected(true);
					/* musicTextView.setTextSize(16);
					musicTextView.setPadding(0, 0, dip2px(8), 0);
					musicTextView.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
					musicTextView.setMarqueeRepeatLimit(-1);
					musicTextView.setSingleLine();
					musicTextView.setHorizontallyScrolling(true);
					musicTextView.setSelected(true); */
					logoViewer2.setPadding(dip2px(8), 0, dip2px(8), 0);
					versionText.setPadding(dip2px(8), 0, dip2px(8), 0);
					proText.setPadding(dip2px(8), 0, dip2px(8), 0);
					hacksListLayoutLeft.addView(logoViewer2);
					if(hacksListModeSetting != "logo") {
						hacksListLayoutRight.addView(statesTextView);
						//hacksListLayoutRight.addView(musicTextView);
					} else {
						hacksListLayoutRight.addView(versionText);
						// TODO
					}
					if(hacksList == null || !hacksList.isShowing()) { // < Todo: remove this line?
						hacksList = new PopupWindow_(hacksListLayout, LinearLayout_.LayoutParams.WRAP_CONTENT, LinearLayout_.LayoutParams.WRAP_CONTENT);
						if(menuAnimationsSetting == "on") {
							hacksList.setAnimationStyle(android.R.style.Animation_Translucent);
						}
						hacksList.setTouchable(false);
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
				} catch(error) {
					print("An error occurred: " + error);
					VertexClientPE.showBugReportDialog(error);
				}
			}
		}
	}));
}

function updateHacksList() {
		CONTEXT.runOnUiThread(new Runnable_({
			run: function() {
				try {
					if(statesTextView != null) {
						enabledHacksCounter = 0;

						let statesText = "";
						VertexClientPE.modules.forEach(function (element, index, array) {
							if(element.isStateMod() && element.state) {
								if(bypassState && element.hasOwnProperty("canBypassBypassMod") && !element.canBypassBypassMod()) {
									return;
								}
								if(enabledHacksCounter != 0) {
									statesText += " - "
								}
								statesText += VertexClientPE.getCustomModName(element.name);
								if(element.hasOwnProperty("getExtraInfo")) {
									statesText += " [" + element.getExtraInfo() + "]";
								}
								enabledHacksCounter++;
							}
						});

						if(enabledHacksCounter == 0) {
							statesText = "No mods enabled";
						}

						statesTextView.setText(statesText);
						if(hacksListModeSetting == "on") {
							statesTextView.setText(statesText);
						} else if(hacksListModeSetting == "counter") {
							statesTextView.setText(enabledHacksCounter.toString() + " mods enabled");
						}

						/* if(VertexClientPE.MusicUtils.isPaused) {
							musicTextView.setText("\u266B Currently paused: " + musicText);
						} else {
							musicTextView.setText("\u266B Currently playing: " + musicText);
						} */
					}
				} catch(error) {
					print("An error occurred: " + error);
					VertexClientPE.showBugReportDialog(error);
				}
			}
		}));
}


function showTabGUI() {
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			if(tabGUI != null) {
				tabGUI.dismiss();
			}
			if(tabGUIModeSetting == "off" || ghostModeState) {
				tabGUI = new PopupWindow_(new LinearLayout_(CONTEXT), LinearLayout_.LayoutParams.WRAP_CONTENT, LinearLayout_.LayoutParams.WRAP_CONTENT);
			} else if(tabGUI == null || !tabGUI.isShowing()) {
				try {
					let tabGUILayout = new LinearLayout_(CONTEXT);
					tabGUILayout.setOrientation(LinearLayout_.HORIZONTAL);
					tabGUILayout.setGravity(Gravity_.CENTER_VERTICAL);

					let tabGUILayoutLeft = new LinearLayout_(CONTEXT);
					tabGUILayoutLeft.setOrientation(1);
					tabGUILayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 6, ViewGroup_.LayoutParams.WRAP_CONTENT));
					tabGUILayout.addView(tabGUILayoutLeft);

					let tabGUILayoutRight = new LinearLayout_(CONTEXT);
					tabGUILayoutRight.setOrientation(1);
					tabGUILayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 6, ViewGroup_.LayoutParams.WRAP_CONTENT));
					if(currentTabGUICategory != null) {
						tabGUILayout.addView(tabGUILayoutRight);
					}

					let categories = [VertexClientPE.category.COMBAT, VertexClientPE.category.WORLD, VertexClientPE.category.MOVEMENT, VertexClientPE.category.PLAYER, VertexClientPE.category.MISC];

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
						tabGUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, dip2px(70));
					}
				} catch(error) {
					print("An error occurred: " + error);
					VertexClientPE.showBugReportDialog(error);
				}
			}
		}
	}));
}

function showShortcuts() {
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			if(shortcutGUI != null) {
				shortcutGUI.dismiss();
			}
			if(shortcutUIModeSetting == "off" || ghostModeState) {
				shortcutGUI = new PopupWindow_(new LinearLayout_(CONTEXT), LinearLayout_.LayoutParams.WRAP_CONTENT, LinearLayout_.LayoutParams.WRAP_CONTENT);
			} else if(shortcutGUI == null || !shortcutGUI.isShowing()) {
				try {
					let shortcutGUILayout1 = new LinearLayout_(CONTEXT);
					shortcutGUILayout1.setOrientation(1);
					shortcutGUILayout1.setGravity(Gravity_.CENTER_VERTICAL);

					let shortcutGUILayoutScroll = new ScrollView_(CONTEXT);

					let shortcutGUILayout = new LinearLayout_(CONTEXT);
					shortcutGUILayout.setOrientation(1);
					shortcutGUILayout.setGravity(Gravity_.CENTER_VERTICAL);

					shortcutGUILayoutScroll.addView(shortcutGUILayout);
					shortcutGUILayout1.addView(shortcutGUILayoutScroll);

					let shortcutCount = 0;

					VertexClientPE.modules.forEach(function (element, index, array) {
						if(sharedPref.getString("VertexClientPE.mods." + element.name + ".isFavorite", "false") == "true") {
							if(element.hasOwnProperty("shouldAdd") && !element.shouldAdd()) {
								return;
							}
							shortcutCount++;
							shortcutGUILayout.addView(modButton(element, true, shortcutSizeSetting, true));
						}
					});

					VertexClientPE.tiles.forEach(function (element, index, array) {
						if(sharedPref.getString("VertexClientPE.tiles." + element.text + ".isFavorite", "false") == "true") {
							if((element.hasOwnProperty("shouldAdd") && element.shouldAdd()) || !element.hasOwnProperty("shouldAdd")) {
								shortcutCount++;
								shortcutGUILayout.addView(tileButton(element, false));
							}
						}
					});

					let shortcutLayoutHeight;
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
					print("An error occurred: " + error);
					VertexClientPE.showBugReportDialog(error);
				}
			}
		}
	}));
}

let healthDisplayView;

function showHealthDisplay() {
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				if(healthDisplayUI != null) {
					healthDisplayUI.dismiss();
				}
				if(healthDisplayUI == null || !healthDisplayUI.isShowing()) {
					let healthDisplayLayout = new LinearLayout_(CONTEXT);
					healthDisplayView = clientTextView(Entity.getHealth(getPlayerEnt()) + "/" + Entity.getMaxHealth(getPlayerEnt()) + " \u2764", true);
					healthDisplayLayout.addView(healthDisplayView);

					healthDisplayUI = new PopupWindow_(healthDisplayLayout, dip2px(40), dip2px(40));
					healthDisplayUI.setTouchable(false);
					healthDisplayUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
					healthDisplayUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.BOTTOM, 0, 0);
				}
			} catch(exception) {
				print(exception);
				VertexClientPE.showBugReportDialog(exception);
			}
		}
	}));
}

function showWatermark() {
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				if(watermarkUI != null) {
					watermarkUI.dismiss();
				}
				if(watermarkUI == null || !watermarkUI.isShowing()) {
					let rotationPlusLayout = new LinearLayout_(CONTEXT);
					rotationPlusLayout.setOrientation(1);

					let watermarkTextView = clientTextView(new Html_.fromHtml(watermarkTextSetting), true, "diff");
					rotationPlusLayout.addView(watermarkTextView);

					watermarkUI = new PopupWindow_(rotationPlusLayout, -2, -2);
					watermarkUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
					watermarkUI.setTouchable(false);
					watermarkUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.CENTER | Gravity_.BOTTOM, 0, dip2px(50));
				}
			} catch(exception) {
				print(exception);
				VertexClientPE.showBugReportDialog(exception);
			}
		}
	}));
}

const rotationtpopx_def = 0, rotationtpopy_def = dip2px(120);
let rotationtpopx = rotationtpopx_def, rotationtpopy = rotationtpopy_def;
let rotationmX, rotationmY;
let rotationdown = false;

function showRotationPlus() {
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				if(rotationPlusUI != null) {
					rotationPlusUI.dismiss();
				}
				if(rotationPlusUI == null || !rotationPlusUI.isShowing()) {
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
							if (rotationdown) {
								let a = e.getAction();
								if (a == 2) {
									let X = parseInt(e.getX() - rotationmX) * -1 / 10;
									let Y = parseInt(e.getY() - rotationmY) * -1 / 10;
									rotationtpopx = rotationtpopx + X;
									rotationtpopy = rotationtpopy + Y;
									rotationPlusUI.update(parseInt(rotationtpopx), parseInt(rotationtpopy), -1, -1);
								}
								if (a == 1) rotationdown = false;
							} else {
								rotationmX = e.getX();
								rotationmY = e.getY();
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
				}
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
				if(pauseUtilitiesUI != null) {
					pauseUtilitiesUI.dismiss();
				}
				if(pauseUtilitiesUI == null || !pauseUtilitiesUI.isShowing()) {
					let pauseUtilitiesLayout = new LinearLayout_(CONTEXT);
					let playerViewButton = clientButton("F5");
					playerViewButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							if(Launcher.isToolbox()) {
								let currentView = ModPE.getPlayerViewPerspective();
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
					if(f5ButtonModeSetting == "pause") {
						pauseUtilitiesUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, dip2px(80));
					} else if(f5ButtonModeSetting == "ingame") {
						pauseUtilitiesUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.BOTTOM, 0, 0);
					}
				}
			} catch(exception) {
				print(exception);
				VertexClientPE.showBugReportDialog(exception);
			}
		}
	}));
}

let itemSlot = 0;
let hasPushed = 0;
let isChestOpen = false;

VertexClientPE.stealChestContent = function(x, y, z) {
	new Handler_()
		.postDelayed(new Runnable_({
			run: function() {
				let itemId = Level.getChestSlot(x, y, z, itemSlot);
				let itemCount = Level.getChestSlotCount(x, y, z, itemSlot);
				let itemData = Level.getChestSlotData(x, y, z, itemSlot);
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
			let chestLayout = new LinearLayout_(CONTEXT);
			let chestStealButton = clientButton("Steal");
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

VertexClientPE.createScreen = function(layout, name, showBackButton, extraView) {
	VertexClientPE.toast("WIP");
	return;
}

let barUI;

let backBg = GradientDrawable_();
backBg.setColor(Color_.parseColor("#00BFFF"));
backBg.setStroke(dip2px(1), Color_.parseColor("#FFFFFF"));
backBg.setShape(GradientDrawable_.RECTANGLE);

let exitBg = GradientDrawable_();
exitBg.setColor(Color_.parseColor("#FF0000"));
exitBg.setStroke(dip2px(1), Color_.parseColor("#FFFFFF"));
exitBg.setShape(GradientDrawable_.RECTANGLE);

let buttonClicked;

VertexClientPE.showExitButtons = function(showBackButton, title, icon, extraView) {
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				title = (title == null)?"Unknown":title;

				let buttonClicked = false;

				let backScreenUILayout = new LinearLayout_(CONTEXT);
				let backScreenUIButton;

				if(showBackButton) {
					backScreenUIButton = new Button_(CONTEXT);
					backScreenUIButton.setText("<");
					backScreenUIButton.setBackgroundDrawable(backBg);
					backScreenUIButton.setTextColor(Color_.WHITE);
					backScreenUIButton.setOnTouchListener(new View_.OnTouchListener() {
						onTouch: function(v, event) {
							let action = event.getActionMasked();
							if(action == MotionEvent_.ACTION_CANCEL || action == MotionEvent_.ACTION_UP) {
								backBg.setStroke(dip2px(1), Color_.parseColor("#FFFFFF"));
							} else {
								backBg.setStroke(dip2px(1), Color_.parseColor("#d3d3d3"));
							}
							return false;
						}
					});
					backScreenUIButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewArg) {
							buttonClicked = true;
							barUI.dismiss();
							screenUI.dismiss();
							dashboardScreen("Dashboard", android.R.drawable.ic_dialog_dialer);
						}
					}));
					backScreenUILayout.addView(backScreenUIButton);
				}
				if(extraView != null) {
					backScreenUILayout.addView(extraView);
				}

				let xScreenUILayout = new LinearLayout_(CONTEXT);
				let xScreenUIButton = new Button_(CONTEXT);
				xScreenUIButton.setText("X");
				xScreenUIButton.setBackgroundDrawable(exitBg);
				xScreenUIButton.setTextColor(Color_.WHITE);
				xScreenUIButton.setOnTouchListener(new View_.OnTouchListener() {
					onTouch: function(v, event) {
						let action = event.getActionMasked();
						if(action == MotionEvent_.ACTION_CANCEL || action == MotionEvent_.ACTION_UP) {
							exitBg.setStroke(dip2px(1), Color_.parseColor("#FFFFFF"));
						} else {
							exitBg.setStroke(dip2px(1), Color_.parseColor("#d3d3d3"));
						}
						return false;
					}
				});
				xScreenUIButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						buttonClicked = true;
						barUI.dismiss();
						screenUI.dismiss();
						VertexClientPE.menuIsShowing = false;
						showMenuButton();
					}
				}));
				xScreenUILayout.addView(xScreenUIButton);

				let barLayout = new LinearLayout_(CONTEXT);
				barLayout.setOrientation(LinearLayout_.HORIZONTAL);
				let titleLayout = new LinearLayout_(CONTEXT);
				titleLayout.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels - barLayoutHeight * 2, barLayoutHeight));
				titleLayout.setGravity(Gravity_.CENTER);
				let titleView = clientScreenTitle(title, icon);
				titleLayout.addView(titleView);
				backScreenUILayout.setLayoutParams(new LinearLayout_.LayoutParams(barLayoutHeight, barLayoutHeight));
				barLayout.addView(backScreenUILayout);
				barLayout.addView(titleLayout);
				xScreenUILayout.setLayoutParams(new LinearLayout_.LayoutParams(barLayoutHeight, barLayoutHeight));
				barLayout.addView(xScreenUILayout);

				barUI = new PopupWindow_(barLayout, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), LinearLayout_.LayoutParams.WRAP_CONTENT);
				barUI.setBackgroundDrawable(backgroundSpecial(null, "#212121|#ffffff"));
				barUI.setOnDismissListener(new PopupWindow_.OnDismissListener() {
					onDismiss: function() {
						if(!screenUI.isShowing() && !buttonClicked) {
							showMenuButton();
						}
						buttonClicked = false;
					}
				});
				barUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
			} catch(exception) {
				print(exception);
				VertexClientPE.showBugReportDialog(exception);
			}
		}
	}));
}

let xWebBrowserButton;
let setStartPageWebBrowserButton;

function overlayWebBrowser() {
	CONTEXT.runOnUiThread(new Runnable_({
		run: function() {
			try {
				let backPageWebBrowserLayout = new LinearLayout_(CONTEXT);
				let backPageWebBrowserButton = new Button_(CONTEXT);
				backPageWebBrowserButton.setText("\u2190");
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

				let forwardPageWebBrowserLayout = new LinearLayout_(CONTEXT);
				let forwardPageWebBrowserButton = new Button_(CONTEXT);
				forwardPageWebBrowserButton.setText("\u2192");
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

				let reloadWebBrowserLayout = new LinearLayout_(CONTEXT);
				let reloadWebBrowserButton = new Button_(CONTEXT);
				reloadWebBrowserButton.setText("\u21BB");
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

				let urlBarWebBrowserLayout = new LinearLayout_(CONTEXT);
				let urlBarWebBrowserButton = new Button_(CONTEXT);
				urlBarWebBrowserButton.setText("...");
				urlBarWebBrowserButton.getBackground().setColorFilter(Color_.parseColor("#0B6138"), PorterDuff_.Mode.MULTIPLY);
				urlBarWebBrowserButton.setTextColor(Color_.WHITE);
				urlBarWebBrowserButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						VertexClientPE.showURLBarDialog();
					}
				}));
				urlBarWebBrowserLayout.addView(urlBarWebBrowserButton);

				let devWebBrowserLayout = new LinearLayout_(CONTEXT);
				let devWebBrowserButton = new Button_(CONTEXT);
				devWebBrowserButton.setText("F12");
				devWebBrowserButton.getBackground().setColorFilter(Color_.parseColor("#0B6138"), PorterDuff_.Mode.MULTIPLY);
				devWebBrowserButton.setTextColor(Color_.WHITE);
				devWebBrowserButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						VertexClientPE.showF12Dialog();
						VertexClientPE.toast("Still work in progress!");
					}
				}));
				devWebBrowserLayout.addView(devWebBrowserButton);

				let xWebBrowserLayout = new LinearLayout_(CONTEXT);
				xWebBrowserButton = new Button_(CONTEXT);
				xWebBrowserButton.setText("X");
				xWebBrowserButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
				xWebBrowserButton.setTextColor(Color_.WHITE);
				xWebBrowserButton.setOnClickListener(new View_.OnClickListener({
					onClick: function(viewArg) {
						backPageWebBrowserUI.dismiss();
						forwardPageWebBrowserUI.dismiss();
						reloadWebBrowserUI.dismiss();
						urlBarWebBrowserUI.dismiss();
						devWebBrowserUI.dismiss();
						exitWebBrowserUI.dismiss();
						screenUI.dismiss();
						VertexClientPE.menuIsShowing = false;
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
	let data = Level.getData(x, y, z);
	let tile = Level.getTile(x, y, z);
	let gamemode = Level.getGameMode();
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
	if(storageESPState) {
		let playerItem = Player.getCarriedItem();
		if(Level.getGameMode() == 0 || (playerItem != 267 && playerItem != 268 && playerItem != 272 && playerItem != 276 && playerItem != 283)) {
			if(tile == 23 || tile == 54 || tile == 125) {
				new Thread_(new Runnable_({
					run: function() {
						VertexClientPE.toast("Removing storage block from storage block list...");
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
