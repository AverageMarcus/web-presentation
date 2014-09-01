# web-presentation

## Getting Started

Include the `dist/web-presentation.html` file in your project.

    <link rel="import" href="web-presentation.html">

Use the web slide component in your html file.

```html
<web-presentation>
  <web-presentation-keyboardcontrols></web-presentation-keyboardcontrols>
  <web-slide>
    <h1>web-presentation</h1>
    <h2>Pure Webcomponents Presentation Framework</h2>
  </web-slide>
  <web-slide>
    <h1>Native, fast, extendable</h1>
    <h2>..and only one file to import</h2>
  </web-slide>
</web-presentation>
```

## Run local demo
* Install local dev dependencies: `npm install`
* Run gulp `gulp`

## Requirements
Use Chrome 36 to use web-presentation without a polyfill.
