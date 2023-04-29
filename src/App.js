import { Card } from './components/Card';
import pic from './components/images/card-background.jpg'
import './App.css';

function App() {
  const data = [
    {
      title: "Physical Health",
      color: "#22356F"
    },
    {
      title: "Mental Health",
      color: "#0052C1"
    },
    {
      title: "Nutrition",
      color: null,
      img: pic,
    },
    {
      title: "Gymnastics",
      color: "#62D0DF"
    },
    {
      title: "Crossfit",
      color: "#DEE1FF"
    },
    {
      title: "Aerobics",
      color: "#8F00FF"
    },
  ]
  return (
    <div className="App">
      {
        data.map((el, id) => {
          return <Card key={id} data={el}/>
        })
      }
    </div>
  );
}

export default App;
