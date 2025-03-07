import './App.css';
import IdCard from './IdCard';
import Greetings from './Greetings';
import Random from './Random';

function App() {
  return (
    <div>
      <h1>User ID Card</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h2>Greetings</h2>
      <Greetings lang="es">Santiago</Greetings>
      <Greetings lang="en">John</Greetings>
      <Greetings lang="de">Gans</Greetings>

      <h2>Random numbers</h2>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
    </div>
  );
}

export default App;
