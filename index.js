// Create a StopWatch object that has a property: duration and 3 methods.
// start - starts timer
// stop - stops timer
// reset - resets timer
function StopWatch() {
    let duration = 0;
    let startSeconds = 0;
    let timerStarted = false;

    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }
    });

    // Start timer.
    this.start = function () {
        if (timerStarted) {
            throw new Error('Stopwatch is already running.');
        }
        timerStarted = true;

        startSeconds = new Date().getSeconds();
    }

    // Stop timer.
    this.stop = function () {
        if (!timerStarted) {
            throw new Error('Stopwatch is already stopped.');
        }
        timerStarted = false;

        duration += new Date().getSeconds() - startSeconds;
    }

    // Reset timer.
    this.reset = function () {
        timerStarted = false;
        duration = 0;
    }
}

const sw = new StopWatch();
