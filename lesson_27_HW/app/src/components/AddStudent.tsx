import React, { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react'
import { Student } from '../types/Student';



export default function AddStudent() {


    const [formData, setFormData] = useState<Student>({ name: "", age: 0 });

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        const newData: Student = { ...formData, [name]: value };
        setFormData(newData);
    }
    const submitHandler: FormEventHandler = (e: FormEvent): void => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <p>Form for adding a student:</p>
            <form onSubmit={submitHandler}>
                <input value={formData.name} type="text" name="name" placeholder="Name" onChange={changeHandler} />
                <input value={formData.age} type="number" name="age" placeholder="Age" onChange={changeHandler} />
                <button>Add</button>
            </form>
        </div>
    )
}
