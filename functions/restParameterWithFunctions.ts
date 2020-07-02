const task1 = () => console.log("task1")
const task2 = () => console.log("task2")
const task3 = () => console.log("task3")

function completeTasks(...tasks: Function[]){
  tasks.forEach(task => task())
}

completeTasks(task1, task2, task3);

/*
task1
task2
task3
 */
