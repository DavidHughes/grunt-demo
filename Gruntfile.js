module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js'],
      options: {
        reporter: require('jshint-stylish')
      }
    },
    shell: {
      mdPress: {
        command: 'mdpress grunt-demo.md'
      }
    },
    watch: {
      js: {
        files: ['Gruntfile.js'],
        tasks: ['jshint']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['jshint', 'shell']);
};
