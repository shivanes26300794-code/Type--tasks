type TaskStatus ="todo" | "in-progress" | "done" ;

interface Task {
    id: number;
    title:string;
    status:TaskStatus;
}
function addTask(tasks : Task[], newTask: Task) :Task []{
    return [...tasks,newTask]
}

function completeTask(tasks : Task[],id:number): Task[]{
    return tasks.map((ele => Element.id == id ? { ... ele , status:"done"}: ele));
}

function filterByStatus( tasks : Task[], status : TaskStatus) : Task[] {
    return tasks .filter((ele)=> ele.Status == status);
}