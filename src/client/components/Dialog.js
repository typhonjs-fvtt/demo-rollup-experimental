import { Application } from './Application';

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
export class Dialog extends Application {
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