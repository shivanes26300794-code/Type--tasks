type TaskStatus ="todo" | "in-progress" | "done" ;

interface Task {
    id: number;
    title:string;
    status:TaskStatus;
}
let nextId = 1;
function addTask(tasks: Task[], title: string): Task[] {
    const newTask: Task = {
        id: nextId++,
        title: title,
        status: "todo"
    };
    return [...tasks, newTask];
}

function completeTask(tasks : Task[],id:number): Task[]{
    return tasks.map((ele)=> 
         ele.id === id ? { ... ele , status:"done"}: ele
);
}

function filterByStatus( tasks : Task[], status : TaskStatus) : Task[] {
    return tasks.filter((ele)=> ele.status === status);
}