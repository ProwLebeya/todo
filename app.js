//selectors
const todoIN = document.querySelector('.todo-IN');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const todoFil = document.querySelector('.filter-todo')


//event listeners
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck)
todoFil.addEventListener('click', filterTodo)

//functions
//how to generate new todo using function
function addTodo(event){

    //prevent from submititng
    event.preventDefault();

    //Creating Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //Creating list items
    const newTodo = document.createElement("li");
    newTodo.innerText = todoIN.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Creating check btn
    const checkBtn = document.createElement('button');
    checkBtn.innerText = 'Ticked';
    checkBtn.classList.add('checkBtn');
    todoDiv.appendChild(checkBtn);

    //Creating delete btn
    const delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.classList.add('delBtn');
    todoDiv.appendChild(delBtn); //appending btn to div
    
    //append todoDiv to list
    todoList.appendChild(todoDiv);
    todoIN.value=""; //clearing input value
}

function deleteCheck(e){
    const item = e.target;
    ///delete todo
    if(item.classList[0] === 'delBtn'){
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){ //waits until transitio is over to delete items
            todo.remove();
        });
    }

    //ticked mark
    if(item.classList[0] === 'checkBtn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
        }
    });
}
