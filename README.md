# Header parallax using using CSS Perspective

- Tested and confirmed not to work when applied to `<html>`.  See also https://stackoverflow.com/q/44370853
- Since scrolling must be handled by `<body>` instead of `<html>`, `window.scrollY` doesn't work.
- Also due to `<body>` scroll, Safari's smooth scrolling doesn't work without special handling.
- Doesn't work on Edge unless we apply a nasty hack: introduce a fixed-position element with top `z-index`.
- https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/5084491/
- https://keithclark.co.uk/articles/pure-css-parallax-websites/
- https://developers.google.com/web/updates/2016/12/performant-parallaxing
