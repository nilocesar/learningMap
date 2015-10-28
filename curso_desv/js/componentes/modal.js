define(['jquery', 'scorm'], function ($) {
    'use strict';

    var modal = function () {
        var $public = {};
        var $private = {};
        var $parent = {};

        $public.init = function init(_parent) {
            $parent = _parent;
            $private.initEvents();
        };


        $public.createModal = function createModal(id_, w_, h_, _scrolling, _close) {
            var _scroll = "no"
            if (_scrolling) _scroll = "yes"

            var w = w_;
            var h = h_;
            var id = id_;
            $(".preloader").css("display", "block");
            $("#v5_lightbox").remove();
            $('body').prepend('<div id="v5_lightbox"><div class="bcg"></div><div class="containerModal"><iframe class="modalIframe" width=' + w + ' height=' + h + ' src=' + id + ' frameborder="0" scrolling=' + _scroll + ' allowfullscreen></iframe></div></div>');

            $(".modalIframe").css("width", w_);
            $(".modalIframe").css("height", h_);
            $(".modalIframe").css("margin-left", (w_ / 2) * -1);
            $(".modalIframe").css("margin-top", (h_ / 2) * -1);
            $("#v5_lightbox").css('display', 'block');

            ///Loader Iframe
            $(".modalIframe", this.domNode).on("load", function () {

                var bodys = $('.modalIframe').contents().find('body');

                for (var i = 0; i < bodys.length; i++) {

                    bodys[i].style.outline = "0";
                    bodys[i].style.padding = "0";
                    bodys[i].style.margin = "0";
                    bodys[i].style.border = "none";

                    if (!_scrolling) {
                        bodys[i].style.overflow = "hidden";
                    } else {
                        if (/iPhone|iPod|iPad/.test(navigator.userAgent)) {
                            $('.containerModal').css('overflow', 'auto');
                            $('.containerModal').css('-webkit-overflow-scrolling', 'touch');
                            $('.modalIframe').css('overflow', 'auto');
                            $('.modalIframe').css('-webkit-overflow-scrolling', 'touch');
                            //$('.modalIframe').css('width', '100%');
                        }
                    }
                }
            });

            if (_close) {
                $(".bcg").append("<div class='fecharModal'></div>");

                $(".fecharModal").on("click", function () {
                    $public.removeModal();
                    $parent.removePreloader();
                });
            }
        };

        $public.removeModal = function removeModal() {
            $("#v5_lightbox").children().hide();
            $("#v5_lightbox").remove();
        };

        $private.initEvents = function initEvents() {

        };

        return $public;
    };

    return modal();
});