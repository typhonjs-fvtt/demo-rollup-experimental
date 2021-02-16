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

/**
 * Some server function
 */
function aServerFunc() {}

/**
 * Some other server function
 */
function aServerFunc2() {}

/**
 * Some other function
 */
function otherFunction() {}

/**
 * Some server thing
 */
class ServerThing {
   static doThing() {}
}

/**
 * Some other server thing
 */
class ServerThing2 {
   static doThing() {}
}

export { CONST, math as Math, ServerThing, ServerThing2, aServerFunc, aServerFunc2, otherFunction };
//# sourceMappingURL=server-esm.js.map
