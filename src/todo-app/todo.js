console.log('this is jquery',$)

// click button, add todo to list item

function addItem () {
  // get input
  $('input')
  let input = $('input')
  console.log('input', input)
  // get value of input
  let inputVal = input.val()
  console.log('inputVal', inputVal)
  // add value to list of items
  let list = $('.todo-list')
  // create element to append to list
  let styleObj = {
    // "display": "flex;",
  }

  let listItem = $("<input type='checkbox'><li></li>")
  // add inputVal to listItem
  let listItemWithVal = listItem.text(inputVal)
  // add listItem to list
  list.append(listItem)
  // clear input
  input.val('')


  // on hover, add delete button
  let deleteBtn = $('<button onclick="deleteItem"> Delete </button')
  $(this).append(deleteBtn)



}