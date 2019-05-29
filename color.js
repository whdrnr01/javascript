var Body = {
    setBackgroundColor: (color) => {
        document.querySelector('body').style.backgroundColor = color;
    },
    setColor: (color) => {
        document.querySelector('body').style.color = color;
    }
}

var Links = {
    setColor: (color) => {
        var alist = document.querySelectorAll('a');
        alist.forEach((alink) => {
            alink.style.color = color;
        });
    }
}

function nightDayHandler(self) {
    var target = document.querySelector('body');
    if (self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';

        Links.setColor('powderblue');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';

        Links.setColor('blue');
    }
}