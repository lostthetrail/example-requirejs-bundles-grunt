module.exports = function(grunt) {
    
    grunt.initConfig({

        requirejs: {
            example: {
                options: {
                    optimize: 'none',
                    baseUrl: 'src',
                    name: 'app',
                    out: 'dist/app-build.js',
                    bundles: {
                        'b': ['dep-b', 'dep-c']
                    }
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['requirejs']);
};