# Mental Rotation Task

The mental rotation task consists of a sequence of trials.  This sequence can be
thought of as an interactive slide show, where each trial is a slide.

To date we've implemented three variants of the task:

* [one-finger](http://joyrexus.github.io/silc/tasks/rotation/one-finger) - single-touch for rotation
* [two-finger](http://joyrexus.github.io/silc/tasks/rotation/two-finger) - multi-touch for rotation
* [click](http://joyrexus.github.io/silc/tasks/rotation/click) - click for auto rotation

In the `one-finger` variant, a gesture event is attached to each trial image so that the image can be rotated with a single finger.

In the `two-finger` variant, a gesture event is attached to each trial image so that the image can be rotated with a two-finger rotation gesture.

In the `click` version no gesture events are attached to the image stimuli.  Instead, a switch is provided prior at the first trial.  If set to "ON", trial images are auto-rotated to original position when clicked/tapped.  If set to "OFF", trial images remain static.

The original source files can for each task are available[here](https://github.com/joyrexus/silc/tree/master/tasks/rotation).


## Dev References

[This gist](https://gist.github.com/joyrexus/5340416) is a useful reference for iOS web app development.

[This gist](https://gist.github.com/joyrexus/5340515) contains typical config settings for your app's main page.

[This article](http://www.html5rocks.com/en/tutorials/appcache/beginner/)
describes how we set up the tasks to be run offline, viz. by using cache
manifest files.


## To Do

Integrate task variants into single web app.

Create a login screen and log task data.


## Notes

You can open [chrome://appcache-internals/](chrome://appcache-internals/) in
chrome to test/view the application cache; also viewable in chrome's devtools
under the `Resources` tab.
