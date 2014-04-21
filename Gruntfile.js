module.exports = function(grunt) {
  grunt.initConfig({
    // Pulls in project metadata which can be used in other tasks.
    pkg: grunt.file.readJSON('package.json'),
    // Checks for common JS mistakes. Rules configured by jshintrc file
    jshint: {
      files: ['Gruntfile.js'],
      options: {
        reporter: require('jshint-stylish')
      }
    },
    // grunt-shell lets us use shell tasks for things we can't find native plugins for
    shell: {
      mdPress: {
        command: 'mdpress grunt-demo.md'
      }
    },
    // Set up a webserver, this is just for livereload so that you can
    // save grunt-demo.md and have your browser refresh automatically.
    express: {
      all: {
        options: {
          port: 8888,
          hostname: 'localhost',
          bases: ['grunt-demo'],
          livereload: true
        }
      }
    },
    watch: {
      js: {
        files: ['Gruntfile.js'],
        tasks: ['jshint']
      },
      mdPress: {
        files: ['grunt-demo.md'],
        tasks: ['shell:mdPress']
      }
    }
  });

  // Need to load the plugins npm has installed so Grunt can use them
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-shell');

  // As well as the above tasks, can create composite tasks here.
  grunt.registerTask('default', ['jshint', 'shell']);
  grunt.registerTask('develop', ['express', 'watch']);
};
