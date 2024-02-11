type Props = {
    firstName: string;
    lastName: string;
    assessments: number[];
};


function Students({ firstName, lastName, assessments }: Props) {
    return (
        <div>
            <p>{firstName} {lastName}</p>
            <p>{averageScore(assessments)}</p>
        </div>
    );
}

function averageScore(assessments: number[]) {
    const sum = assessments.reduce((acc: any, val: any) => acc + val, 0);
    const avrg = sum / assessments.length;
    return avrg.toFixed(2);
}

export default Students;