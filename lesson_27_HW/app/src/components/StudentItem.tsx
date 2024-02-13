import React from 'react'
import { Student } from '../types/Student'

export default function StudentItem({ name, age }: Student) {
    return (
        <div>
            <p>{name}</p>
            <p>{age}</p>
        </div>
    )
}