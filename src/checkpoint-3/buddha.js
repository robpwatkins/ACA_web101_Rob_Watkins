


let count = 0;
let sound = document.getElementById('audio');

$('.Buddha').click(function() {
    count++;
    $('.Counter').html(+count);
    $('.Buddha').addClass('Poked');
    setTimeout(RemoveClass, 50);
});

function RemoveClass() {
    $('.Buddha').removeClass('Poked');
};

function playSound() {
    if(!sound) return;
    sound.currentTime = 0;
    sound.play()
};