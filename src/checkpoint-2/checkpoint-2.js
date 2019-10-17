$('.toggle').click(function() {
  $('ul').toggleClass('active');
  $('.toggle').css('display', 'none');
  $('.toggleX').css('display', 'flex');
  $('body').toggleClass('ScrollLock');
})

$('.toggleX').click(function() {
  $('ul').toggleClass('active');
  $('.toggle').css('display', 'flex');
  $('.toggleX').css('display', 'none');
  $('body').toggleClass('ScrollLock');
})