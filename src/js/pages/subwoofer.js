import $ from 'jquery';

var signals;

function startAnimation() {
    $( document ).ready(function() {
        setTimeout( function() {
            $('.speaker').addClass('animate');
        }, 500);
    });
}

module.exports = {
    init: function(config) {
        console.log('  === subwoofer ===');
        startAnimation();
        signals = config.signals;

        signals['domReady'].dispatch();
    },
};


// butt