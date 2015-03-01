'use strict';
var fs = require('fs');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

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
                    'jQuery, react.js, a gulpfile with Browserify magic, JSX compilation ' +
                    'and SASS or LESS compilation. ' +
                    'React Server gives a complete example of server-side rendering with React ' +
                    'giving us components shared between server and browser for fast initial page loads ' +
                    'and search-engine-friendly pages.';      
      this.log(yosay(welcome));
    }
  },

  cssFramework: function () {
    var done = this.async();

    var prompts = [{
      type: 'list',
      name: 'cssFramework',
      message: 'Which CSS framework would you like to use?',
      choices: [{
        name: 'LESS',
        value: 'LESS'
      }, {
        name: 'SASS',
        value: 'SASS'
      }]
    }];

    this.prompt(prompts, function (props) {
      this.cssFramework = props.cssFramework;
      done();
    }.bind(this));
  },
  

  writing: {
    gulpfile: function() {
      this.template('_gulpfile.js', 'gulpfile.js');
    },

    packageJSON: function() {
      this.template('_package.json', 'package.json');
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
      this.directory('client/images', 'client/images');
      this.copy('client/config.js', 'client/config.js');
      this.copy('client/favicon.ico', 'client/favicon.ico');
      this.copy('client/robots.txt', 'client/robots.txt');
			this.template('client/scripts/index.js', 'client/scripts/index.js');
      this.directory('client/styles', 'client/styles');
			this.directory('client/routes', 'client/routes');
		},
		
		serverfiles: function() {
			this.copy('server/server.js', 'server/server.js');
			this.template('server/templates/views/_index.html', 'server/templates/views/index.html');
		},
		
		publicfiles: function() {
			this.directory('public', 'public');
		},

    mainStylesheet: function () {
      // TODO do we need this
      var css = 'main';

      if (this.cssFramework === 'SASS') {
        css += '.scss';
      }
      if (this.cssFramework === 'LESS') {
        css += '.less';
      }

      this.copy('client/styles/' + css, 'client/styles/' + css);
    }
    
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
  },

	end: function() {
		var chdir = this.createDirectory ? '"cd ' + this.projectKey + '" then ' : '';
		this.log(
			'\n' + chalk.green.underline('Your new React + Express project is ready!') +
			'\n' +
			'\n' + 'Your React app is in /client and your express app is in /server.' +
			'\n' +
			'\n' + 'Anything you place in /public will be served as static assets.' +
			'\n' +
			'\n' + 'Type ' + chdir + '"node server" to start the server.' +
			'\n'
		);
	}

});

