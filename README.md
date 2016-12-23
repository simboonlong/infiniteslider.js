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
    durationSuccess:750,
    durationFail:900,
    easingSuccess:'Expo.easeOut',
    easingFail:'Back.easeInOut',
    threshold:0.25 // from 0 to 1. determines
});

```


Refer to TweenMax documentation for more information.


## License
infiniteslider.js is licensed under the MIT license. (http://opensource.org/licenses/MIT)


## Contributing
Feel free to contribute.