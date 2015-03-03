'use strict';
var fs = require('fs');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var wiredep = require('wiredep');


module.exports = yeoman.generators.Base.extend({
  
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

    this.option('test-framework', {
      desc: 'Test framework to be invoked',
      type: String,
      defaults: 'mocha'
    });

    this.option('skip-welcome-message', {
      desc: 'Skips the welcome message',
      type: Boolean
    });

    this.option('skip-install', {
      desc: 'Skips the installation of dependencies',
      type: Boolean
    });

    this.option('skip-install-message', {
      desc: 'Skips the message after the installation of dependencies',
      type: Boolean
    });
  },

  initializing: function () {
    this.pkg = require('../package.json');

    if (!this.options['skip-welcome-message']) {
      var welcome = 'Welcome to the React Server generator! ' +
                    'Out of the box I include  either CSS Skeleton or PureCSS ' +
                    'jQuery, react, a gulpfile with Browserify magic, JSX and SASS compilation ' +
                    'React Server gives a complete example of server-side rendering with React ' +
                    'giving components shared between server and browser for fast initial page loads ' +
                    'and search-engine-friendly pages.';      
      this.log(yosay(welcome));
    }
  },


  writing: {
    gulpfile: function() {
      this.copy('_gulpfile.js', 'gulpfile.js');
    },

    packageJSON: function() {
      this.copy('_package.json', 'package.json');
    },

    git: function() {
      this.copy('gitignore', '.gitignore');
    },

    jshint: function () {
      this.copy('jshintrc', '.jshintrc');
    },

    editorConfig: function () {
      this.copy('editorconfig', '.editorconfig');
    },

		clientfiles: function() {
      this.copy('client/favicon.ico', 'client/favicon.ico');
      this.copy('client/robots.txt', 'client/robots.txt');
      this.directory('client/images', 'client/images');
      this.directory('client/styles', 'client/styles');
			this.directory('client/routes', 'client/routes');
		},
		
		serverfiles: function() {
			this.copy('server.js', 'server.js');
      this.directory('server', 'server');
		},
    
  },


  install: function () {

    if (this.options['skip-install']) {
      return;
    }

    this.installDependencies({
      skipMessage: this.options['skip-install-message'],
      skipInstall: this.options['skip-install']
    });

    this.on('end', function () {

      this.invoke(this.options['test-framework'], {
        options: {
          'skip-message': this.options['skip-install-message'],
          'skip-install': this.options['skip-install']
        }
      });
    }.bind(this));
  }


});

