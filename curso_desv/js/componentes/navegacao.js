define(['jquery', 'scorm'], function ($) {
    'use strict';

    var navegacao = function () {
        var $public = {};
        var $private = {};
        var $parent = {};

        $public.init = function init(_parent) {
            $parent = _parent;
        };
        
         $public.controlMenu = function controlMenu() {
            var _telasAll = $parent.modulosData.menusAll;

            for (var i = 1; i <= _telasAll; i++) {
                if ($parent.getData("tela" + i) != null &&
                    $parent.getData("tela" + i) != "" &&
                    $parent.getData("tela" + i) != undefined) {
                    $parent.modulosData["menusAtivos"].push(1);

                } else {
                    $parent.modulosData["menusAtivos"].push(0);
                }
            }

        };

        $public.controlTelas = function controlTelas() {

            $parent.completeCourse = true;
            $parent.setData("tela" + $parent.telaInfo, "1");
            var _telasAll = $parent.modulosData.menusAll;

            setTimeout(function () {
                for (var i = 1; i <= _telasAll; i++) {
                    if (parseInt($parent.getData("tela" + i)) != 1)
                        $parent.completeCourse = false;
                }
                
                if(  $parent.completeCourse )
                { 
                    $parent.setData("ponto", "100");
                    $parent.scormComplete();
                }
                
            }, 1000 * 0.2)

        };

        $public.confereComplete = function confereComplete() {

            setTimeout(function () {
                
                if ($parent.completeCourse) {
                    if ($parent.telaInfo != "complete") 
                        $parent.createModal("paginas/final/index.html", 1000, 600, false , false);
                }
                
            }, 1000 * 0.5);
        }

        return $public;
    };

    return navegacao();
});