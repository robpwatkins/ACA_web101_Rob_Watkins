let count = 0;
let sound = document.getElementById('audio');

$('.Buddha').click(function() {
    count++;
    $('.Counter').html(+count);
    $('.Buddha').addClass('Poked');
    setTimeout(removeClass, 50);
    checkCount();
});

function checkCount () {
    if((count) >= '5') {
    $('.HeartContainer').addClass('Big');
    if((count) >= '10') {
    $('.HeartContainer').addClass('Bigger');
    if((count) >= '20') {
    $('.HeartContainer').addClass('Biggest');
    if((count) >= '35') {
    $('.HeartContainer').addClass('Biggester');
    if((count) >= '50') {
    $('.HeartContainer').addClass('EvenBiggester');
    if((count) >= '65') {
    $('.HeartContainer').addClass('TheBigBoy');
    };
    };
    };
    };
    };
    };
};

function removeClass() {
    $('.Buddha').removeClass('Poked');
};

function addClass() {
    if ('.Counter' === '10') {
    ('.HeartContainer').classList.add('.HeartContainerBig');
    };
};

function playSound() {
    if(!sound) return;
    sound.currentTime = 0;
    sound.play()
};