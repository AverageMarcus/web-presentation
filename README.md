web-presentation
========

### A presentation framework created with web components

Forked from [https://github.com/ChristianKohler/web-presentation](https://github.com/ChristianKohler/web-presentation) and heavily customised to my personal tastes / needs.

- Updated to v1 web components spec
- Added support for showing Twitter handle / hashtag on every slide
- Support for showing event title on every slide
- Added component for showing highlighted code examples
- Added some configurable attributes
- Removed transitions
- Mobile touch swipe support
- Ability to auto-progress to next slide

## Getting Started

Include the `dist/web-presentation.html` file in your project.

    <link rel="import" href="web-presentation.html">

Use the web slide component in your html file.

```html
<web-presentation>
  <web-presentation-keyboardcontrols></web-presentation-keyboardcontrols>
  <web-slide-title>
    <h1>web-presentation</h1>
    <h2>Pure Webcomponents Presentation Framework</h2>
  </web-slide-title>
  <web-slide>
    <h1>Native, fast, extendable</h1>
    <h2>..and only one file to import</h2>
  </web-slide>
</web-presentation>
```

## API

### Components

|Component|Description|
|:--------|:----------|
|`web-presentation`|The presentation element which contains all slides|
|`web-slide`|The slide element has to be within a web-presentation element|
|`web-slide-title`|The title is the same element as web-slide. The idea is to make it easier to style all title slide|
|`web-presentation-keyboardcontrols`|One way to control the presentation. Use left and right arrow keys or space to go to the next slide|
|`web-presentation-progress`|Displays a progress bar on the bottom of the screen|
|`web-presentation-autoplay`|Automatically progress to the next slide. `timeout` to set how long each slide is shown for in ms (default 1000). `loop` to endlessly repeat the slides (default false).|
|`web-code-sample`|Displays syntax highlighted code examples (requires `highlight.pack.js` and a theme CSS - available in the dist folder)|

### Config

Show Twitter handle in corner of all slides:

```html
<web-presentation twitter-handle="@Marcus_Noble_"></web-presentation>
```

Show Twitter hashtag in corner of all slides:

```html
<web-presentation hashtag="#WebComponents"></web-presentation>
```

Show event name in corner of all slides:

```html
<web-presentation event-name="Web Components Monthly"></web-presentation>
```

Set a background image:

```html
<web-slide background-image="https://media.giphy.com/media/NGALQBUgvmVTa/giphy.gif">
  <h1>
    Pugz!
  </h1>
</web-slide>
```

### Syntax Highlighted Code Samples

```html
<web-slide>
  <h1>Syntax Highlighting</h1>
  <web-code-sample>
    <template>
      console.log('Hello, World!');
    </template>
  </web-code-sample>
</web-slide>
```

### Swipe support

```html
<web-presentation-swipecontrols></web-presentation-swipecontrols>
```


### Fragments
Show parts of a slide step by step.

Show:

```html
  <ul>
    <li data-enter="1">First</li>
    <li data-enter="99">Last</li>
    <li data-enter="2">Second</li>
  </ul>
```

Hide:

```html
  <div data-exit="1">Hide me</div>
```

Mixed:

```html
  <!-- step1:shows p1 / step2:shows p2 / step3:hides div1 and shows div2-->
  <div id="div1" data-exit="10">
    <p data-show="1">Show first</p>
    <p data-show="2">Show second</p>
  </div>
  <div id="div2" data-show="10">Show after</div>
```

## Requirements
Use Chrome 36 or higher to use web-presentation without a polyfill.

## Contribute
Help make web-presentation better.

* Install local dev dependencies: `npm install`
* Run watch task: `npm start`
* Edit src files
