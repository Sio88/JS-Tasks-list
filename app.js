//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners 
loadEventListeners();

//Load all event listeners
function loadEventListeners(){
  //Add task event
  form.addEventListener('submit', addTask);
  //Remove task event
  taskList.addEventListener('click', removeTask);
  //Clear task event
  clearBtn.addEventListener('click', clearTasks);
  //Filter tasks event
  filter.addEventListener('keyup', filterTasks)
}

//Add Task
function addTask(e){
  if(taskInput.value === ''){
    alert('Add a task');
  }

  //Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  //Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  taskList.appendChild(li);

  taskInput.value= '';

  e.preventDefault();
}

//Remove Task
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are You Sure?')){
    e.target.parentElement.parentElement.remove();
    }
  }
}

//Clear Task
function clearTasks(){
  taskList.innerHTML = '';
}

function filterTask(e){
  const text = e.target.value.toLowerCase();
  
  document.querySelectorAll('.collection-item').forEach(
    function(task){
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) !=-1){
        task.style.display = 'block'
      } else {
        task.style.display = 'none';
      }
    }
  );
}