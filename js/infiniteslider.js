/*!
infiniteslider.js - http://simboonlong.com
Licensed under the MIT license

Copyright (c) 2016 Sim Boon Long

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var Infiniteslider = (function() {

    // dom
    var infiniteSlider = $('#infinite-slider');
    var infiniteHolder = $('.infinite-holder');
    var infiniteSlide = $('.infinite-slide');
    var infiniteLen = infiniteSlide.length;
    var infiniteIndex = 1;
    var infiniteFirst = infiniteSlide.first();
    var infiniteLast = infiniteSlide.last();

    // local settings
    var infiniteDurationSuccess;
    var infiniteDurationFail;
    var infiniteEasingSuccess;
    var infiniteEasingFail;
    var infiniteThreshold;

    // flags
    var infiniteChangeSuccess = false;
    var infiniteIsHold = false;
    var infiniteIsTransitionDone = true;

    var x1;
    var y1;

    var cycleInfiniteSlider = function() {
        var x = infiniteSlide.outerWidth() * infiniteIndex;
        TweenMax.to(infiniteHolder,(infiniteDurationSuccess/1000),{x:-x,ease:infiniteEasingSuccess});
        setTimeout(function(){
            if ( infiniteIndex < 1 ) {

                infiniteIndex = infiniteLen;
                TweenMax.set( infiniteHolder, {x:-infiniteLen*infiniteSlide.outerWidth()});

            } else if ( infiniteIndex > infiniteLen ) {

                infiniteIndex = 1;
                TweenMax.set( infiniteHolder, {x:-infiniteSlide.outerWidth()});

            } else {

            }

            infiniteSlide.removeClass('is-active');
            infiniteSlide.eq(infiniteIndex-1).addClass('is-active');
            infiniteIsTransitionDone = true;

        },infiniteDurationSuccess);
    };

    var setInfiniteSliderIndex = function(direction) {
        if ( direction === 'prev' ) {
            infiniteIndex--;
        } else {
            infiniteIndex++;
        }
    };

    var setInfiniteSliderEvents = function() {

        infiniteSlider.on('touchstart mousedown', function(event){
            x1 = event.pageX || event.originalEvent.touches[0].pageX;
            y1 = event.pageY || event.originalEvent.touches[0].pageY;
            infiniteIsHold = true;
        });

        infiniteSlider.on('touchmove mousemove', function(event){

            if ( infiniteIsTransitionDone && infiniteIsHold ) {

                var x2 = ( event.pageX || event.originalEvent.touches[0].pageX ) - x1;
                var y2 = ( event.pageY || event.originalEvent.touches[0].pageY ) - y1;
                var distance = x2 - ( infiniteSlide.outerWidth() * infiniteIndex );


                if ( x2 < -(Math.round(infiniteThreshold*infiniteSlide.outerWidth())) ) {

                    infiniteIsHold = false;
                    infiniteIsTransitionDone = false;
                    infiniteChangeSuccess = true;

                    setInfiniteSliderIndex('next');
                    cycleInfiniteSlider();

                } else if ( x2 > (Math.round(infiniteThreshold*infiniteSlide.outerWidth())) ) {

                    infiniteIsHold = false;
                    infiniteIsTransitionDone = false;
                    infiniteChangeSuccess = true;

                    setInfiniteSliderIndex('prev');
                    cycleInfiniteSlider();

                } else {

                    TweenMax.set( infiniteHolder, {x:distance});
                    infiniteChangeSuccess = false;

                }
            }

        });

        infiniteSlider.on('touchend mouseup', function(event){
            if ( !infiniteChangeSuccess ) {
                var distance = (infiniteSlide.outerWidth() * infiniteIndex);
                TweenMax.to(infiniteHolder,(infiniteDurationFail/1000),{x:-distance,ease:infiniteEasingFail});
            }
            infiniteIsHold = false;
        });

        $(window).on('resize',function(){
            TweenMax.set( infiniteHolder, {x:-(infiniteSlide.outerWidth() * infiniteIndex)});
        });
    };



    var init = function(options) {
        // set options
        options = options || {};
        infiniteDurationSuccess = options.durationSuccess || 700;
        infiniteDurationFail = options.durationFail || 500;
        infiniteEasingSuccess = options.easingSuccess || 'Expo.easeOut';
        infiniteEasingFail = options.easingFail || 'Expo.easeOut';
        infiniteThreshold = options.threshold || 0.25;

        // initialize
        infiniteFirst.before(infiniteLast.clone(true));
        infiniteLast.after(infiniteFirst.clone(true));
        infiniteSlide.eq(infiniteIndex-1).addClass('is-active');
        TweenMax.set( infiniteHolder, {x:-infiniteSlide.outerWidth()});

        // bind events
        setInfiniteSliderEvents();
    };

    return {
        init : init
    };

})();




