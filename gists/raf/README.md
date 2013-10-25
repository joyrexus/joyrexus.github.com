Simple demo of [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window.requestAnimationFrame).


## Guidelines for animation

* Use CSS [keyframe animation](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_animations) or CSS [transitions](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_transitions) and [transforms](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_transforms) so that the browser can optimize painting/compositing.

* Use `requestAnimationFrame` for JS-based animation control.

Further, [Paul Irish suggests](http://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/) ...

* Avoid changing inline styles on every frame (jQuery animate()-style) if you
can, declarative animations in CSS can be optimized by the browser way more.

* Use CSS transforms instead of absolute positioning will typically provide
better FPS by way of smaller paint times and smoother animation.

* Use Timeline Frame’s mode to investigate what is slowing down your behavior.

Lastly ...

“Show Paint Rects” and “Render Composited Layer Borders” are good pro-moves to
verify where your element is being rendered.
