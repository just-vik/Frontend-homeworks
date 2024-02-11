import Button from "./components/Button";
import Header from "./components/Header";
import Image from "./components/Image";
import Student from "./components/Student";

const student_1 =
{
  firstName: 'Эмма',
  lastName: 'Уотсон',
  assessments: [3, 9, 7]
}
const student_2 =
{
  firstName: 'Бенедикт',
  lastName: 'Камбербэтч',
  assessments: [10, 5, 8]
}


function App() {

  return (
    <div>
      <Button text={"click here"} />
      <Header text={"Это кнопка!"} />
      <Image image="https://junkee.com/wp-content/uploads/2015/04/button-680x454.jpg" />
      <Student {...student_1} />
      <Student {...student_2} />
    </div>
  );
}

export default App;

