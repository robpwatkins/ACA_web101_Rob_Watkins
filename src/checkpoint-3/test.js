

$button = document.querySelector('button');
$span = document.querySelector('span');
function increment(){
  $span.innerHTML++;
}
$button.addEventListener('click',increment);