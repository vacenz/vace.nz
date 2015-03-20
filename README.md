> [Yeoman](http://yeoman.io) generator that scaffolds out a front-end web app using [gulp](http://gulpjs.com/) for the build process

![](screenshot.png)

## Features

Please see our [gulpfile.js](app/templates/gulpfile.js) for up to date information on what we support.

* React, A JavaScript library for building user interfaces
* Server side rendering with React and Express
* Built-in preview server with livereload
* Automagically compile with either Sass or Less
* Module loading using CommonJs Browserify

*For more information on what this generator can do for you, take a look at the [gulp plugins](app/templates/_package.json) used in our `package.json`.*


## Getting Started

- Install: `npm install -g generator-gulp-app`
- Run: `yo gulp-app`
- Run `gulp` for building to the `dist` directory and `gulp serve` for preview

## Options

- `--skip-install`
  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.


## License

[MIT license](http://opensource.org/licenses/MIT)

![](app/templates/public/images/react.png)
![](app/templates/public/images/gulp.png)
![](app/templates/public/images/browserify.png)
![](app/templates/public/images/jquery.png)
![](app/templates/public/images/less.png)
![](app/templates/public/images/sass.png)
