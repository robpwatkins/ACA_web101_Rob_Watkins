  let $block = null;
  
  $('[data-row]').click(function() {
      console.log('$block', $block)
    if ($block) {
      $(this).append($block);
      $block = null;
    } else {
      console.log('$(this', $(this))
      let children = $(this).children()
      console.log('children', children)
      let last = $(this).children().last()
      console.log('last', last)
      $block = $(this).children().last().detach();
    }
  })