


let count = 0;
let sound = document.getElementById('audio');

$('.Buddha').click(function() {
    count++;
    $('.Counter').html(+count);
    $('.Buddha').addClass('Poked');
    setTimeout(removeClass, 50);
});

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

// if($('.Counter').text() === "10") {
//     $('.HeartContainer').addClass('HeartContainerBigger');
// }