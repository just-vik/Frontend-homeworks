import Button from "./components/Button";
import Header from "./components/Header";
import Image from "./components/Image";
import Student from "./components/Student";

const studentsList = [
  {
    firstName: 'Эмма',
    lastName: 'Уотсон',
    assessment: [3, 9, 7]
  },
  {
    firstName: 'Бенедикт',
    lastName: 'Камбербэтч',
    assessment: [10, 5, 8]
  }
];

function App() {
  
  return (
    <div>
      <Button text={"click here"} />
      <Header text={"Это кнопка!"} />
      <Image image="https://junkee.com/wp-content/uploads/2015/04/button-680x454.jpg" />
      <Student students={studentsList} />
    </div>
  );
}

export default App;

