


   
// Função retorna um novo array com apenas as descrições das tarefas
const  getTasksDescriptions = tasks.map((element) =>  element.description);
// console.log(getTasksDescriptions);

    
// Função para filtrar tarefas por prioridade

const filterTasksByPriority = tasks.filter((element) => element.priority == "alta");
// console.log(filterTasksByPriority);
  


// Função para obter uma task pelo seu id

const findTaskById = (arr,id) => arr.find((element) => element.id == id);
// console.log(findTaskById(tasks,12));



//Função removeTask

const removeTask = (arr,id) => arr.filter((element) => element.id !== id);
console.log(removeTask(tasks,12));
