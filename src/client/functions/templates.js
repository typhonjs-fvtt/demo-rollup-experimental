/* -------------------------------------------- */
/*  HTML Template Loading                       */
/* -------------------------------------------- */

/**
 * Get a template from the server by fetch request and caching the retrieved result
 * @param {string} path           The web-accessible HTML template URL
 * @returns {Promise<Function>}	  A Promise which resolves to the compiled Handlebars template
 */
export async function getTemplate(path) {}

/* -------------------------------------------- */

/**
 * Load and cache a set of templates by providing an Array of paths
 * @param {string[]} paths    An array of template file paths to load
 * @return {Promise<string[]>}
 */
export async function loadTemplates(paths) {}

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
export function renderTemplate(path, data) {}
