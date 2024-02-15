import React from 'react';
import s from "./style.module.css";

type TaskProps = {
    name: string;
    completed: boolean;
    onToggle: () => void;
    onDelete: () => void;
    onChange: (name: string) => void;

const Task = ({ name, completed, onToggle, onDelete, onChange }: TaskProps) => {
    const сhange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
        return (

            <div className={s.task}>
                <div>
                    <input className={s.taskInput}
                        type="text"
                        defaultValue={name}
                        onChange={сhange}

                    />
                </div>
                <label className={s.taskLabel}>
                    <input className={s.checkbox}
                        type="checkbox"
                        checked={completed}
                        onChange={onToggle}

                    />
                    <p >{name}</p>
                </label>
                <button onClick={onDelete}>Удалить</button>
            </div>
        );
    };

    export default Task;