function todoList() {
  var item = document.getElementById('todoInput').value
  var text = document.createTextNode(item)
  var newItem = document.createElement('li')
  newItem.appendChild(text)
  document.getElementById('todoList').appendChild(newItem)
};



/*window.onload = function () {
  var todoForm = document.getElementById('todoForm');
  var todoInput = document.getElementById('todoInput');
  var btn = document.getElementById('btn');
  var todoList = document.getElementById('todoList');
  // differeniate items from each other in the list by adding 1 as ID //
  var id = 1;
  
  //button event listener
  btn.addEventListener('click', addToDoItem);
  
  //add todo item to list
  function addToDoItem() {
    if(input.value === "") {
      alter('You must enter a value!');
    } else {
      if(list.style.borderTop === "") (
        list.style.borderTop = "2px solid white";
      )
      var text = input.value;
      var item = `<li id="li-${id}">${text}
          <input id="box-${id}" class="checkboxes"
          type="checkbox">
          </li>`;
      list.insertAdjacentHTML('beforeEnd', item);
      id++;
      form.reset();
    }
  }
};*/
