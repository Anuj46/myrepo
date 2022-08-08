import UpperContainer from './Upper-container';
import Card from './Card';
import data from './data';
import './App.css';

function App() {
  const CardCOmp = data.map((card) => {
    return <Card key={card.id} item={card} />;
  });

  function add() {
    console.log('add');
  }
  return (
    <div className="App">
      <UpperContainer />
      <section className="card-list">{CardCOmp}</section>
      <button onClick={add}> sanf</button>
      console.log("glhk")
    </div>
  );
}

export default App;
