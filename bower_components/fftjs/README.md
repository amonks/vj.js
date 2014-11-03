# fft.js *v0.0.1*

fft.js is a javascript library that makes it easy to analyze real-time audio input.

## [demo](http://fftjs.monks.co/demo.html)

## API

### `init(int samples)`

`init(samples)` requests microphone input and sets up a buffer with the given number of samples. `samples` must be between 32 and 2048.

### `fft()`

`fft()` returns an array of integers between 0 and 255. Each item in the array is a frequency band. The integer is its amplitude.

### `setup()`

`setup()` returns true if microphone input has been granted.

## example

[online](http://fftjs.monks.co/simple.html)

    var fftjs = new FFTJS();
    fftjs.init(32);

    $('button#fft-button').on('click', function() {
        $('#fft-display').text(JSON.stringify(fftjs.fft()));
    });
