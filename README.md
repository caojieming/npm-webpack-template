# npm-webpack-template
Repository Template for npm Webpack projects.

Run `npm install` to install (or update) all dev dependencies.

## npm scripts included:
`npm run build`<br>
The equivalent of `npx webpack --config webpack.prod.js`.<br>
Bundles everything in `src` into `dist`.

`npm run dev`<br>
The equivalent of `npx webpack serve --config webpack.dev.js`.<br>
Opens a webpack server for viewing changes in real time without needing to build.<br>
Server link: http://localhost:8080/

`npm test`<br>
Runs all jest tests (see "./src/tests/model.test.js" for an example).

## To remove image file loader module:
This template includes the module "html-loader" for loading image files.

If you don't use image files, you can remove this module with:<br>
`npm uninstall html-loader`<br>
or<br>
`npm uninstall --save html-loader`

This command tells npm to remove the package from your `package.json`, `npm-shrinkwrap.json`, and `package-lock.json` files.<br>
The `--save` is optional in most cases (it's the default option).


<br><br><br>
# Info to keep in projects using this template:

## npm (dev) commands
`npm install` to install (or update) all dev dependencies.<br>
`npm run dev` to open a webpack server for viewing changes in real time without needing to build (server link: http://localhost:8080/).<br>
`npm run build` to bundle everything in `src` into `dist`.<br>
`npm test` to run all jest tests.

## List of packages used:
- webpack
  - module bundler
- webpack-cli
  - module bundler
- html-webpack-plugin
  - bundling for html
- style-loader
  - bundling for css
- css-loader
  - bundling for css
- html-loader
  - bundling of images loaded via image files (images from urls are covered by css-loader)
- webpack-dev-server
  - previewing webapp before building it
- eslint
  - linter, code styling
- prettier
  - formatter, code layout formatter
- jest
  - testing functions
- babel
  - to fix jest's issues with imports
