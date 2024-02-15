import React, { useState } from "react";
import Task from "../Task/Task";
import s from "./style.module.css";


const TaskManager = () => {
    const [tasks, setTasks] = useState([
        { name: 'Check my calendar', completed: true },
        { name: 'Meet with parents', completed: false },
        { name: 'Go to supermarket', completed: false },
        { name: 'Order tires', completed: true },
    ]);

    const switchTask = (name: string) => {
        const updatedTasks = tasks.map(task => {
            if (task.name === name) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const deleteTask = (name: string) => {
        const updatedTasks = tasks.filter(task => task.name !== name);
        setTasks(updatedTasks);
    };

    const addTask = (name: string) => {
        setTasks([...tasks, { name, completed: false }]);
    };

    const handleAddTask = (name: string, newName: string) => {
        const updatedTasks = tasks.map(task => {
            if (task.name === name) {
                return { ...task, name: newName };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
        <div className={s.taskManager}>
            {tasks.map(({ name, completed }) => (
                <Task
                    key={name}
                    name={name}
                    completed={completed}
                    onToggle={() => switchTask(name)}
                    onDelete={() => deleteTask(name)}
                    onChange={(newName: string) => handleAddTask(name, newName)}
                />
            ))}
            <button onClick={() => addTask("New Task")}>Add Task</button>
        </div>
    );
};

export default TaskManager;