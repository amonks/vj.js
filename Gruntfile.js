module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    'clean': {
      build: {
        src: ["build"]
      }
    },

    'copy': {
      pub: {
        files: [
          {
            cwd: 'pub',
            src: '**/*',
            dest: 'build',
            expand: true
          },
        ]
      },
      js: {
        files: [
          {
            cwd: 'src/js',
            src: '**/*',
            dest: 'build/js',
            expand: true
          },
        ]
      },
      scenes: {
        files: [
          {
            cwd: 'scenes',
            src: '**/*',
            dest: 'build/js/scenes',
            expand: true
          },
        ],
      },
      bower: {
        files: [
          {
            src: 'bower_components/requirejs/require.js',
            dest: 'build/js/require.js'
          },
          {
            src: 'bower_components/jquery-ui-sortable/jquery-ui-sortable.js',
            dest: 'build/js/vendor/jquery-ui-sortable.js'
          },
          {
            src: 'bower_components/processing/processing.js',
            dest: 'build/js/vendor/processing.js'
          },
          {
            src: 'bower_components/almond/almond.js',
            dest: 'build/js/vendor/almond.js'
          },
          {
            src: 'bower_components/threejs/build/three.js',
            dest: 'build/js/vendor/three.js'
          },
          {
            src: 'bower_components/jquery/dist/jquery.js',
            dest: 'build/js/vendor/jquery.js'
          },
          {
            src: 'bower_components/snapjs/snap.js',
            dest: 'build/js/vendor/snap.js'
          },
          {
            src: 'bower_components/snapjs/snap.css',
            dest: 'src/css/snap.css'
          },
          {
            src: 'bower_components/baton/baton.js',
            dest: 'build/js/vendor/baton.js'
          },
          {
            src: 'bower_components/fftjs/fft.js',
            dest: 'build/js/vendor/fft.js'
          }
        ]
      }
    },

    'stylus': {
      compile: {
        options: {
          compress: false
        },
        files: {
          "src/css/stylus.css": "src/stylus/*.styl"
        }
      }
    },

    'concat': {
      css: {
        src: ['src/css/*'],
        dest: 'build/style.css'
      }
    },

    'jade': {
      index: {
        options: {
          pretty: true
        },
        files: [{
          "build/index.html": "src/jade/index.jade"
        }]
      }
    },



    'requirejs': {
      compile: {
        options: {
          allowSourceOverwrites: true,
          appDir: "build",
          baseUrl: "js",
          baseUrl: "build/js",
          dir: "dist",
        }
      }
    },



    'gh-pages': {
      options: {
        base: 'dist'
      },
      src: ['**']
    },



    'watch': {
      js: {
        files: 'src/js/**/*.js',
        tasks: ['copy:js'],
      },
      scenes: {
        files: 'scenes/**/*',
        tasks: ['copy:scenes'],
      },
      css: {
        files: 'src/css/**/*.css',
        tasks: ['concat:css'],
      },
      stylus: {
        files: 'src/stylus/**/*.styl',
        tasks: ['stylus:compile'],
      },
      jade: {
        files: 'src/jade/**/*.jade',
        tasks: ['jade:index'],
      },
    },
  });



  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-gh-pages');


  grunt.registerTask('build', [
    'clean:build',
    'copy:bower',
    'copy:pub',
    'copy:js',
    'copy:scenes',
    'stylus:compile',
    'concat:css',
    'jade:index',
  ]);
  grunt.registerTask('dist', [
    'build',
    'requirejs:compile'
  ]);
  grunt.registerTask('publish', [
    'build',
    'requirejs:compile',
    'gh-pages'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
