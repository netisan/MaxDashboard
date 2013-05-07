

$(document).ready(function () {
    var $interval = $('#refresh-rate');

    var defaultInterval = 10;

    var slider = $("#interval-slider").slider(
    {
        animate: true,
        min: 1,
        max: 10,
        step: 1,
        value: defaultInterval,
        slide: onSlide,
        change: onChange,
        stop: function (event, ui) {
            slideAction(sliderCharacter);
        }

    });

    // Display default value label on load */
    /* $("#interval-slider a").css("text-decoration", "none").css("text-align", "center").text(defaultInterval); */
    // Update label on change
    function onChange(event, ui) {
        refreshData();
    }

    function onSlide(event, ui) {
        sliderCharacter = ui.value;
        /* $("#interval-slider a").css("text-decoration", "none").css("text-align", "center").text(sliderCharacter);*/
    }

    $interval.change(function () {
        refreshData();
    })

    $('#selector-color').on('change', function () {

        var options = this.value.split(';');
        var fontColor = options[0];
        var background = options[1];
        $('.annotation').css("color", fontColor);
        $('.annotation').css("background-color", background);
    });


    var refreshData = function () {
        var r1 = Math.floor((Math.random() * 1000) + 100); /* Random number between 100 and 1000 */
        var r2 = Math.floor((Math.random() * 1000) + 100); /* Random number between 100 and 1000 */
        var r3 = Math.floor((Math.random() * 1000) + 100); /* Random number between 100 and 1000 */
        $("#annotation1").html(r1);
        $("#annotation2").html(r2);
        $("#annotation3").html(r3);
        var currentSliderVal = $("#interval-slider").slider("option", "value");
        setTimeout(refreshData, currentSliderVal * 1000);
    }
    refreshData();

    /* Show XY position on click */
    $('#canvas').click(function (e) {
        var offset = $(this).offset();
        var xpos = e.pageX - offset.left;
        var ypos = e.pageY - offset.top;
        var xoffset = 5;
        var messageSize = 130;
        if (xpos > $(this).width() - messageSize)
            xoffset = -messageSize;
        var yoffset = 30;
        if (ypos <= yoffset)
            yoffset = -6;
        var ms = 4000;
        var positionMessage = "Left:" + xpos + ", Top:" + ypos;
        $("#tooltip").html(positionMessage);
        $("#tooltip").css({
            'left': xpos + xoffset + 'px',
            'top': ypos - yoffset + 'px',
        });
        $("#bar-x").css({
            'left': xpos + 'px'
        });
        $("#bar-y").css({
            'top': ypos + 'px'
        });
        $("#tooltip").show();
        $("#tooltip").delay(ms).fadeOut();
        $("#bar-x").show();
        $("#bar-x").delay(ms).fadeOut();
        $("#bar-y").show();
        $("#bar-y").delay(ms).fadeOut();
    });

    
});