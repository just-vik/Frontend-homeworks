import React from 'react'
import { Student } from '../types/Student';
import StudentItem from './StudentItem';

type Props = {}

export default function StudentsList({ }: Props) {

    const students: Student[] = [
        { name: 'Alice', age: 20 },
        { name: 'Bob', age: 21 },
        { name: 'Charlie', age: 22 },
    ];

    return (
        <div>
            {
                students.map((student, name) => <StudentItem key={name} {...student} />)
            }
        </div>
    )
}