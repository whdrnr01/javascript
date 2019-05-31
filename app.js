$( document ).ready(function() {
    $('body').css('backgroundColor', 'white');
    $('body').css('color', 'black');
    $('a').css('color', 'blue');

    var Body = {
        setBackgroundColor: (color) => {
            $('body').css('backgroundColor', color);
        },
        setColor: (color) => {
            $('body').css('color', color);
        }
    }

    var Links = {
        setColor: (color) => {
            $('a').css('color', color);
        }
    }

    $('#nightDay').on('click', function() {
        if(this.value === 'night') {
            Body.setBackgroundColor('black');
            Body.setColor('white');
            Links.setColor('powderblue');
            this.value = 'day';
        } else {
            Body.setBackgroundColor('white');
            Body.setColor('black');
            Links.setColor('blue');
            this.value = 'night';
        }
    });
});