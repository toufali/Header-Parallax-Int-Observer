# Header parallax using Intersection Observer

### Demo
https://handsomemedia.github.io/Header-Parallax-Int-Observer/dist/

### Notes
- uses native Intersection Observer API
- more performant than listening to scroll event
- less voodoo involved than [CSS perspective method](https://github.com/HandsomeMedia/Header-Parallax-CSS-Perspective)
- requires a "sentinel" element added to the DOM
- currently requires an Intersection Observer polyfill for Safari (not implemented here)
- https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
- https://github.com/w3c/IntersectionObserver/tree/master/polyfill
- https://developers.google.com/web/updates/2016/04/intersectionobserver
