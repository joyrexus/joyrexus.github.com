// Generated by CoffeeScript 1.6.3
(function() {
  var catchKeyControls, exportRange, key, load, queue, reset, setFrame, setRange, slide, togglePlayback;

  queue = [];

  load = function() {
    var File, reader;
    queue = [];
    window.paused = false;
    startingTime.innerText = '';
    stoppingTime.innerText = '';
    between.style.visibility = 'hidden';
    download.style.visibility = 'hidden';
    currentRange.start = null;
    currentRange.stop = null;
    File = this.files[0];
    if (!File.name.match('\.ldj$')) {
      return;
    }
    file.textContent = File.name;
    reader = new FileReader();
    reader.onload = function(file) {
      var row, _i, _len, _ref;
      controls.style.visibility = 'visible';
      slider.style.visibility = 'visible';
      _ref = this.result.split('\n');
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        row = _ref[_i];
        if (row.match(/timestamp/)) {
          queue.push(JSON.parse(row));
        }
      }
      render(queue);
      slider.max = queue.length - 1;
      return '';
    };
    return reader.readAsText(File);
  };

  togglePlayback = function(event) {
    if (this.paused) {
      this.paused = false;
      return render(queue);
    } else {
      return this.paused = true;
    }
  };

  slide = function(count) {
    slider.value = (slider.valueAsNumber + count).toString();
    return setFrame();
  };

  key = {
    command: 91,
    spacebar: 32,
    leftArrow: 37,
    rightArrow: 39,
    upArrow: 38,
    downArrow: 40
  };

  catchKeyControls = function(event) {
    switch (event.keyCode) {
      case key.spacebar:
        return togglePlayback();
      case key.leftArrow:
        return slide(-10);
      case key.rightArrow:
        return slide(10);
      case key.upArrow:
        return slide(-1);
      case key.downArrow:
        return slide(1);
    }
  };

  setFrame = function() {
    var frame, secs;
    window.currentFrame = +slider.value;
    frame = queue[window.currentFrame];
    draw(frame);
    secs = (frame.timestamp - startTime) / 1000000;
    sliderOutput.value = secs.toFixed(2);
    return this.blur();
  };

  setRange = function() {
    if (!startingTime.innerText.toString()) {
      startingTime.innerText = sliderOutput.value;
      currentRange.start = currentFrame;
    } else {
      stoppingTime.innerText = sliderOutput.value;
      currentRange.stop = currentFrame;
    }
    if (stoppingTime.innerText.toString()) {
      download.style.visibility = 'visible';
      return between.style.visibility = 'visible';
    }
  };

  exportRange = function() {
    var csv, range, start, stop, _ref;
    _ref = [currentRange.start, currentRange.stop], start = _ref[0], stop = _ref[1];
    range = queue.slice(start, +stop + 1 || 9e9);
    csv = extract.velocity(range);
    download.href = 'data:attachment/csv,' + encodeURI(csv);
    return download.download = file.innerText.replace('.ldj', '.csv');
  };

  reset = function(event) {
    this.innerText = "";
    between.style.visibility = 'hidden';
    return download.style.visibility = 'hidden';
  };

  palm.addEventListener('click', setRange);

  slider.addEventListener('input', setFrame);

  document.addEventListener('keydown', catchKeyControls);

  download.addEventListener('click', exportRange);

  startingTime.addEventListener('click', reset);

  stoppingTime.addEventListener('click', reset);

  chooser.addEventListener('change', load);

  file.addEventListener('click', function() {
    return chooser.click();
  });

}).call(this);
