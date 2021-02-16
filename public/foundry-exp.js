/* ----------------------------------------- */
/*  Reusable Type Definitions                */
/* ----------------------------------------- */

/**
 * A single point, expressed as an object {x, y}
 * @typedef {PIXI.Point|{x: number, y: number}} Point
 */

/**
 * A single point, expressed as an array [x,y]
 * @typedef {number[]} PointArray
 */

/**
 * A Ray intersection point
 * @typedef {{x: number, y: number, t0: number, t1: number}|null} RayIntersection
 * @property [wall] Wall
 */

/**
 * A standard rectangle interface.
 * @typedef {PIXI.Rectangle|{x: number, y: number, width: number, height: number}} Rectangle
 */


/* ----------------------------------------- */
/*  Database Workflows                       */
/* ----------------------------------------- */

/**
 * The expected structure for a Data record
 * @typedef {{string, any}} Data
 * @property [_id] string
 */

/**
 * An object of optional keys and values which configure the behavior of a function
 * @typedef {{string, any}} Options
 */

const vtt = "Foundry VTT";
const VTT = "Foundry Virtual Tabletop";
const WEBSITE_URL = "https://foundryvtt.com";
const ASCII = `_______________________________________________________________
 _____ ___  _   _ _   _ ____  ______   __ __     _______ _____ 
|  ___/ _ \\| | | | \\ | |  _ \\|  _ \\ \\ / / \\ \\   / |_   _|_   _|
| |_ | | | | | | |  \\| | | | | |_) \\ V /   \\ \\ / /  | |   | |  
|  _|| |_| | |_| | |\\  | |_| |  _ < | |     \\ V /   | |   | |  
|_|   \\___/ \\___/|_| \\_|____/|_| \\_\\|_|      \\_/    |_|   |_|  
===============================================================`;

const basic = /*#__PURE__*/Object.freeze({
   __proto__: null,
   vtt: vtt,
   VTT: VTT,
   WEBSITE_URL: WEBSITE_URL,
   ASCII: ASCII
});

/**
 * Define the allowed ActiveEffect application modes
 * @type {{string, number}}
 */
const ACTIVE_EFFECT_MODES = {
   CUSTOM: 0,
   MULTIPLY: 1,
   ADD: 2,
   DOWNGRADE: 3,
   UPGRADE: 4,
   OVERRIDE: 5
};

const active = /*#__PURE__*/Object.freeze({
   __proto__: null,
   ACTIVE_EFFECT_MODES: ACTIVE_EFFECT_MODES
});

const CONST = { ...basic, ...active };

/* -------------------------------------------- */
/*  Math Functions                              */
/* -------------------------------------------- */

/**
 * Bound a number between some minimum and maximum value, inclusively
 * @param {number} num    The current value
 * @param {number} min    The minimum allowed value
 * @param {number} max    The maximum allowed value
 * @return {number}       The clamped number
 */
function clampNumber(num, min, max) {
   return Math.min(max, Math.max(num, min));
}

/**
 * Round a floating point number to a certain number of decimal places
 * @param {number} number  A floating point number
 * @param {number} places  An integer number of decimal places
 */
function roundDecimals(number, places) {
   places = Math.min(Math.trunc(places), 0);
   let scl = Math.pow(10, places);
   return Math.round(number * scl) / scl;
}

/**
 * Transform an angle in radians to a number in degrees
 * @param {number} angle    An angle in radians
 * @return {number}         An angle in degrees
 */
function toDegrees(angle) {
   return angle * (180 / Math.PI);
}

/**
 * Transform an angle in degrees to be bounded within the domain [0, 360]
 * @param {number} degrees  An angle in degrees
 * @return {number}         The same angle on the range [0, 360]
 */
function normalizeDegrees(degrees) {
   let nd = (degrees + 360) % 360;
   return (nd > 180) ? nd - 360 : nd;
}

/**
 * Transform an angle in degrees to an angle in radians
 * @param {number} angle    An angle in degrees
 * @return {number}         An angle in radians
 */
function toRadians(angle) {
   return (angle % 360) * (Math.PI / 180);
}

/**
 * Transform an angle in radians to be bounded within the domain [-PI, PI]
 * @param {number} radians  An angle in degrees
 * @return {number}         The same angle on the range [-PI, PI]
 */
function normalizeRadians(radians) {
   let pi2 = 2 * Math.PI;
   let nr = (radians + pi2) % pi2;
   return (nr > Math.PI) ? nr - pi2 : nr;
}

const math = /*#__PURE__*/Object.freeze({
   __proto__: null,
   clampNumber: clampNumber,
   roundDecimals: roundDecimals,
   toDegrees: toDegrees,
   normalizeDegrees: normalizeDegrees,
   toRadians: toRadians,
   normalizeRadians: normalizeRadians
});

/* -------------------------------------------- */
/*  HTML Template Loading                       */
/* -------------------------------------------- */

/**
 * Get a template from the server by fetch request and caching the retrieved result
 * @param {string} path           The web-accessible HTML template URL
 * @returns {Promise<Function>}	  A Promise which resolves to the compiled Handlebars template
 */
async function getTemplate(path) {}

/* -------------------------------------------- */

/**
 * Load and cache a set of templates by providing an Array of paths
 * @param {string[]} paths    An array of template file paths to load
 * @return {Promise<string[]>}
 */
async function loadTemplates(paths) {}

/* -------------------------------------------- */

/**
 * Get and render a template using provided data and handle the returned HTML
 * Support asynchronous file template file loading with a client-side caching layer
 *
 * Allow resolution of prototype methods and properties since this all occurs within the safety of the client.
 * @see {@link https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access}
 *
 * @param {string} path             The file path to the target HTML template
 * @param {Object} data             A data object against which to compile the template
 *
 * @return {Promise.<HTMLElement>}  Returns the rendered HTML
 */
function renderTemplate(path, data) {}

let _appId = 0;
let _maxZ = 100;

const MIN_WINDOW_WIDTH = 200;
const MIN_WINDOW_HEIGHT = 50;

/**
 * The standard application window that is rendered for a large variety of UI elements in Foundry VTT.
 * @interface
 *
 * @param {Object} options                      Configuration options which control how the application is rendered.
 *                                              Application subclasses may add additional supported options, but the
 *                                              following configurations are supported for all Applications. The values
 *                                              passed to the constructor are combined with the defaultOptions defined
 *                                              at the class level.
 * @param {string} options.baseApplication      A named "base application" which generates an additional hook
 * @param {number} options.width                The default pixel width for the rendered HTML
 * @param {number} options.height               The default pixel height for the rendered HTML
 * @param {number} options.top                  The default offset-top position for the rendered HTML
 * @param {number} options.left                 The default offset-left position for the rendered HTML
 * @param {boolean} options.popOut              Whether to display the application as a pop-out container
 * @param {boolean} options.minimizable         Whether the rendered application can be minimized (popOut only)
 * @param {boolean} options.resizable           Whether the rendered application can be drag-resized (popOut only)
 * @param {string} options.id                   The default CSS id to assign to the rendered HTML
 * @param {Array.<string>} options.classes      An array of CSS string classes to apply to the rendered HTML
 * @param {string} options.title                A default window title string (popOut only)
 * @param {string} options.template             The default HTML template path to render for this Application
 * @param {Array.<string>} options.scrollY      A list of unique CSS selectors which target containers that should
 *                                              have their vertical scroll positions preserved during a re-render.
 *
 * Hooks:
 *   renderApplication
 *   closeApplication
 *   getApplicationHeaderButtons
 */
class Application
{
   constructor(options = {})
   {
      /**
       * The application ID is a unique incrementing integer which is used to identify every application window
       * drawn by the VTT
       * @type {number}
       */
      this.appId = _appId += 1;

      this._dummyHeight = MIN_WINDOW_HEIGHT;
      this._dummyWidth = MIN_WINDOW_WIDTH;
   }

   /* -------------------------------------------- */

   /**
    * Create drag-and-drop workflow handlers for this Application
    * @return {DragDrop[]}     An array of DragDrop handlers
    * @private
    */
   _createDragDropHandlers() {}

   /**
    * Render the outer application wrapper
    * @return {Promise.<HTMLElement>}   A promise resolving to the constructed jQuery object
    * @private
    */
   async _renderOuter(options) {
      // Render the template and return the promise
      let html = await renderTemplate("templates/app-window.html", windowData);
      html = $(html);

      // Set the outer frame z-index
      if ( Object.keys(ui.windows).length === 0 ) _maxZ = 100 - 1;
      html.css({zIndex: Math.min(++_maxZ, 9999)});

      // Return the outer frame
      return html;
   }
}

/**
 * @typedef {Object} DialogButton
 * @property {string} icon            A Font Awesome icon for the button
 * @property {string} label           The label for the button
 * @property {Function} [callback]    A callback function that fires when the button is clicked
 */

/**
 * Create a dialog window displaying a title, a message, and a set of buttons which trigger callback functions.
 * @implements {Application}
 *
 * @param {Object} data               An object of dialog data which configures how the modal window is rendered
 * @param {string} data.title         The window title
 * @param {string} data.content       HTML content
 * @param {Function} [data.render]    A callback function invoked when the dialog is rendered
 * @param {Function} [data.close]     Common callback operations to perform when the dialog is closed
 * @param {Object<string, DialogButton>} data.buttons The buttons which are displayed as action choices for the dialog
 *
 * @param {Object} options            Dialog rendering options, see :class:`Application`
 * @param {string} options.default    The name of the default button which should be triggered on Enter
 * @param {boolean} options.jQuery    Whether to provide jQuery objects to callback functions (if true) or plain
 *                                    HTMLElement instances (if false). This is currently true by default but in the
 *                                    future will become false by default.
 *
 * @example <caption>Constructing a custom dialog instance</caption>
 * let d = new Dialog({
 *  title: "Test Dialog",
 *  content: "<p>You must choose either Option 1, or Option 2</p>",
 *  buttons: {
 *   one: {
 *    icon: '<i class="fas fa-check"></i>',
 *    label: "Option One",
 *    callback: () => console.log("Chose One")
 *   },
 *   two: {
 *    icon: '<i class="fas fa-times"></i>',
 *    label: "Option Two",
 *    callback: () => console.log("Chose Two")
 *   }
 *  },
 *  default: "two",
 *  render: html => console.log("Register interactivity in the rendered dialog"),
 *  close: html => console.log("This always is logged no matter which option is chosen")
 * });
 * d.render(true);
 */
class Dialog extends Application {
   constructor(data, options)
   {
      super(data, options);
   }

   /* -------------------------------------------- */

   /** @override */
   static get defaultOptions() {}

   /* -------------------------------------------- */

   /** @override */
   get title() {}

   /* -------------------------------------------- */

   /** @override */
   getData(options) {}

   /* -------------------------------------------- */

   /** @override */
   activateListeners(html) {}

   /* -------------------------------------------- */

   /**
    * Handle a left-mouse click on one of the dialog choice buttons
    * @param {MouseEvent} event    The left-mouse click event
    * @private
    */
   _onClickButton(event) {}

   /* -------------------------------------------- */

   /**
    * Handle a keydown event while the dialog is active
    * @param {KeyboardEvent} event   The keydown event
    * @private
    */
   _onKeyDown(event) {}

   /* -------------------------------------------- */

   /**
    * Submit the Dialog by selecting one of its buttons
    * @param {Object} button     The configuration of the chosen button
    * @private
    */
   submit(button) {}

   /* -------------------------------------------- */

   /** @override */
   async close(options) {}

   /* -------------------------------------------- */
   /*  Factory Methods                             */
   /* -------------------------------------------- */

   /**
    * A helper factory method to create simple confirmation dialog windows which consist of simple yes/no prompts.
    * If you require more flexibility, a custom Dialog instance is preferred.
    *
    * @param {string} title          The confirmation window title
    * @param {string} content        The confirmation message
    * @param {Function} yes          Callback function upon yes
    * @param {Function} no           Callback function upon no
    * @param {Function} render       A function to call when the dialog is rendered
    * @param {boolean} defaultYes    Make "yes" the default choice?
    * @param {boolean} rejectClose   Reject the Promise if the Dialog is closed without making a choice.
    * @param {Object} options        Additional rendering options passed to the Dialog
    *
    * @return {Promise<*>}           A promise which resolves once the user makes a choice or closes the window
    *
    * @example
    * let d = Dialog.confirm({
    *  title: "A Yes or No Question",
    *  content: "<p>Choose wisely.</p>",
    *  yes: () => console.log("You chose ... wisely"),
    *  no: () => console.log("You chose ... poorly"),
    *  defaultYes: false
    * });
    */
   static async confirm({title, content, yes, no, render, defaultYes=true, rejectClose=false, options={}}={}, old) {}

   /* -------------------------------------------- */

   /**
    * A helper factory method to display a basic "prompt" style Dialog with a single button
    * @param {string} title          The confirmation window title
    * @param {string} content        The confirmation message
    * @param {string} label          The confirmation button text
    * @param {Function} callback     A callback function to fire when the button is clicked
    * @param {Function} render       A function that fires after the dialog is rendered
    * @param {object} options        Additional rendering options
    * @return {Promise<*>}           A promise which resolves when clicked, or rejects if closed
    */
   static async prompt({title, content, label, callback, render, options={}}={}) {}
}

//# sourceMappingURL=foundry-exp.js.map
