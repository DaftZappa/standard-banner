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
    connect: {
    server: {
      options: {
        port: 9001,
        base: ''
      }
    }
  },

      open : {
        file : {
          path : 'http://localhost:9001/banner.html'
        }
      }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');
  grunt.registerTask('default', ['less','connect','open','watch']);

};