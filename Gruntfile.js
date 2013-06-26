module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      files: ['less/*.*'],
      tasks: ['less', 'csslint']
    },

    less: {
      development: {
        files: {
          "css/main.css": "less/main.less"
        }
      }
    },
    csslint: {
      strict: {
        options: {
          import: false,
          'universal-selector' : false
        },
        src: ['css/main.css']
      }
    },

      open : {
        file : {
          path : 'banner.html'
        }
      }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-open');
  grunt.registerTask('default', ['less','open','watch']);

};