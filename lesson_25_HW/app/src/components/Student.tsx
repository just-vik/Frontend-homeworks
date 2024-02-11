type Student = {
    firstName: string;
    lastName: string;
    assessment: number[];
};

type Props = { students: Student[] };

function Students({ students }: Props) {
    return (
        <div>
            {students.map((student, index) => (
                <div key={index}>
                    <p>{student.firstName} {student.lastName}</p>
                    <p>{avrgAssessment(student.assessment)}</p>
                </div>
            ))}
        </div>
    );
}

function avrgAssessment(assessments: number[]): number | string {
    if (assessments.length === 0) {
        return 'No assessments';
    }
    const sum = assessments.reduce((total, assessment) => total + assessment, 0);
    return sum / assessments.length;
}

export default Students;