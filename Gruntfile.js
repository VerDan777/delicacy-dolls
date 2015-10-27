module.exports = function(grunt) {
    "use strict";
    
    require('load-grunt-tasks')(grunt);
    
    var config = {
        pkg: grunt.file.readJSON('package.json'),
        
        
        sass: {
            style: {
                files: [{
                    'source/css/styles.css': 'source/sass/style.scss'
                }]
            }
        },
        
        csscomb: {
            style: {
                expand: true,
                src: ['source/sass/**/*.scss', 'source/css/**/*.css']
            }
        }
    };
    
    grunt.initConfig(config);
};