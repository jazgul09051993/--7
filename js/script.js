window.addEventListener('load', function () {    

const form = document.querySelector('#add-todo-form');    
const input = document.querySelector('#input-todo');    
const btnSubmit = document.querySelector('button');    
const todoList = document.querySelector('.todo-list');
    
form.addEventListener('submit', function (e) {        
    e.preventDefault();   
 });
   
    btnSubmit.addEventListener('click', function (e) {       
         if (input.value === '') {            
             alert('Please enter a task');       
             } else {            
                 let todo = document.createElement('div');            
                 todo.classList.add('todo-item');            
                 todoList.appendChild(todo);           
                 todo.innerHTML = input.value;               
                  
                 const listAdd = input.value = '';
            
                 todo.addEventListener('click', () => {                
                todo.remove()            
            });        
        }    
    });
});
