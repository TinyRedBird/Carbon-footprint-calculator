// 从本地存储中加载待办事项
window.addEventListener('DOMContentLoaded', loadTasks);

// 添加待办事项
function addTask() {
var input = document.getElementById('taskInput');
var task = input.value.trim();

if (task !== '') {
var taskList = document.getElementById('taskList');
var li = document.createElement('li');
li.innerHTML = task;
li.onclick = toggleTask;
taskList.appendChild(li);
input.value = '';

saveTasks();
}
}

// 切换待办事项的完成状态
function toggleTask() {
this.classList.toggle('completed');
saveTasks();
}


// 删除待办事项
function deleteTask() {
this.parentNode.removeChild(this);
saveTasks();
}

// 保存待办事项到本地存储
function saveTasks() {
var tasks = [];
var taskList = document.getElementById('taskList');
var taskItems = taskList.getElementsByTagName('li');

for (var i = 0; i < taskItems.length; i++) {
var task = taskItems[i].innerHTML;
var completed = taskItems[i].classList.contains('completed');
tasks.push({ task: task, completed: completed });
}

localStorage.setItem('tasks', JSON.stringify(tasks));
}

// 从本地存储加载待办事项
function loadTasks() {
var tasks = JSON.parse(localStorage.getItem('tasks'));

if (tasks) {
var taskList = document.getElementById('taskList');

for (var i = 0; i < tasks.length; i++) {
var task = tasks[i].task;
var completed = tasks[i].completed;

var li = document.createElement('li');
li.innerHTML = task;
li.onclick = toggleTask;

if (completed) {
li.classList.add('completed');
}

taskList.appendChild(li);
}
}
}
