  let $block = null;
  
  $('[data-row]').click(function() {
    if ($block) {
      $(this).append($block);
      $block = null;
    } else {
      let children = $(this).children()
      let last = $(this).children().last()
      $block = $(this).children().last().detach();
    }
  })