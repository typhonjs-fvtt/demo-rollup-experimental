# demo-rollup-basic
Demonstrates an experimental Rollup configuration to bundle shared resources
across client and server code. This is a possible configuration to use
for building `foundry.js` and the server backend from shared code.

A client ESM bundle is produced, but a custom Rollup plugin `./rollup-plugin-exp.js` removes the one named export from 
the bundle which results in output similar to the existing `foundry.js` providing global resources in no namespace.

The server bundle is produced in `./dist` and is simply mock / dummy code, 
but shows how the common shared resources can be utilized across client / server 
bundles.

There are two NPM scripts. 
- `build` - Invokes Rollup to build the client and server bundles to `./public` and `./dist`.
  

- `serve` - Uses `http-server` to pop up a web server with the client bundles. By default this is set to localhost:8080.
The index.html simply loads the modified ESM script global version of the mock `foundry.js` that has all resources as
globals. `test-script.js` logs to the console a few of these global resources. 
