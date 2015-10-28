var course = course || {};
var PATH_CONFIG = "./config.json";
(function (doc, undefined) {
    'use strict';
    //
    require.config({
        baseUrl: './js',
        paths: {
            jquery: ['https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min', 'vendor/jquery-1.11.2.min'],
            lodash: 'vendor/lodash',
            scorm: 'vendor/scorm.jquery',
            bootstrap: 'vendor/bootstrap.min',
            course: 'course'
        },
        shim: {
            jquery: {
                exports: '$'
            },
            lodash: {
                exports: '_'
            },
            scorm: {
                deps: ['jquery']
            },
            bootstrap: {
                deps: ['jquery']
            }
        }
    });

    require(['jquery'], function ($) {
        require(['course'], function (_course) {
            $(function () {
                course = _course;
                course.setCourse( 'PATH_CONFIG', PATH_CONFIG ).init();
            });
        });
    });
})(document);