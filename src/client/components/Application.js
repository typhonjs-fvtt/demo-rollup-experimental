import { renderTemplate } from '../functions/index';

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
export class Application
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