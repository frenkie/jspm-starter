# jspm-starter
A basic website/app template using [JSPM](http://jspm.io) as front end package manager and
[(Node-)Sass](https://github.com/sass/node-sass) as CSS preprocessor.

# installation

Just an `npm install` should do the trick.

# running

## dev mode

`npm run dev` builds the dev environment in a `dev/` folder and runs a http-server
on which you can visit the site at [localhost:9090/dev](http://localhost:9090/dev).

You can run `npm run watch:dev` to rebuild the dev folder's contents on any change
in `src/`.

## production mode

`npm run prod` builds the production environment in a `dist/` folder and runs a http-server
on which you can visit the site at [localhost:9090](http://localhost:9090).

This site has a self executing JavaScript bundle that holds no dependency on any
framework any more. You can deploy the contents of this folder to your live site.

You can run `npm run watch:prod` to rebuild the dist folder's contents on any change
in `src/`.

# now what?
Yes, that's up to you. Add a SASS framework for easy grids, add something like
[Stapes](http://hay.github.io/stapes/) for simple MVC apps, use
[React](https://facebook.github.io/react/) for views, etc.

# todo
-   code/SASS linters
-   doc generators
-   unit tests.