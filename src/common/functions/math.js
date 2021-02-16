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
export function clampNumber(num, min, max) {
   return Math.min(max, Math.max(num, min));
}

/**
 * Round a floating point number to a certain number of decimal places
 * @param {number} number  A floating point number
 * @param {number} places  An integer number of decimal places
 */
export function roundDecimals(number, places) {
   places = Math.min(Math.trunc(places), 0);
   let scl = Math.pow(10, places);
   return Math.round(number * scl) / scl;
}

/**
 * Transform an angle in radians to a number in degrees
 * @param {number} angle    An angle in radians
 * @return {number}         An angle in degrees
 */
export function toDegrees(angle) {
   return angle * (180 / Math.PI);
}

/**
 * Transform an angle in degrees to be bounded within the domain [0, 360]
 * @param {number} degrees  An angle in degrees
 * @return {number}         The same angle on the range [0, 360]
 */
export function normalizeDegrees(degrees) {
   let nd = (degrees + 360) % 360;
   return (nd > 180) ? nd - 360 : nd;
}

/**
 * Transform an angle in degrees to an angle in radians
 * @param {number} angle    An angle in degrees
 * @return {number}         An angle in radians
 */
export function toRadians(angle) {
   return (angle % 360) * (Math.PI / 180);
}

/**
 * Transform an angle in radians to be bounded within the domain [-PI, PI]
 * @param {number} radians  An angle in degrees
 * @return {number}         The same angle on the range [-PI, PI]
 */
export function normalizeRadians(radians) {
   let pi2 = 2 * Math.PI;
   let nr = (radians + pi2) % pi2;
   return (nr > Math.PI) ? nr - pi2 : nr;
}
