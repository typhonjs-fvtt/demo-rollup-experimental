import MagicString from 'magic-string';

// Locates the one named export for the bundle.
const s_REGEX = /export.*};/m;

/**
 * Uses `magic-string` to overwrite / remove the single named export generated from the Rollup bundle for
 * `foundry-exp.js`. This is used as an output Rollup plugin and properly handles sourcemaps.
 *
 * This creates an output equal to the existing non namespaced `foundry.js`.
 *
 * @returns {{code: string, map: SourceMap}|null|{name: string, renderChunk(*=, *, *): Promise<{code: *, map: SourceMap}|null>}}
 */
export default function()
{
   return {
      name: 'remove-export',
      async renderChunk(code, chunk, outputOptions)
      {
         const match = code.match(s_REGEX);

         if (match !== null)
         {
            const magicStr = new MagicString(code);

            magicStr.overwrite(match.index, match.index + match[0].length, '');

            return {
               code: magicStr.toString(),
               map: magicStr.generateMap({ hires: true })
            };
         }
         else
         {
            return null; // Tell rollup to discard this result.
         }
      }
   };
};