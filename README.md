## infiniteslider.js
Carousel slider with infinite cycling.

1. requires Jquery, TweenMax.
2. manually tested to work on latest version of Chrome, Firefox, Safari and IE.


## Demo
![infiniteslider.js demo](infiniteslider.gif)

Demo link at http://htmlpreview.github.io/?https://github.com/simboonlong/infiniteslider.js/blob/master/index.html


## Usage

Import the infiniteslider.css styles. Follow the structure in index.html.
```
<div id="infinite-slider">
    <div class="infinite-holder">
        <div class="infinite-slide">1</div>
        <div class="infinite-slide">2</div>
        <div class="infinite-slide">3</div>
    </div>
</div>
```

Basic options in infiniteslider.js are:

```
Infiniteslider.init({
    durationSuccess:750, // if drag did meet threshold, duration of animation.
    durationFail:900, // if drag did not meet threshold, duration of animation.
    easingSuccess:'Expo.easeOut', // if drag did meet threshold, ease type.
    easingFail:'Back.easeInOut', // if drag did not meet threshold, ease type.
    threshold:0.25 // from 0 to 1, determines whether the slide will snap to next/previous slide, depending on mouse x position.
});

```


Refer to TweenMax documentation for more information.


## License
infiniteslider.js is licensed under the MIT license. (http://opensource.org/licenses/MIT)


## Contributing
Feel free to contribute.