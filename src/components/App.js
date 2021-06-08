import './App.css';
import TextBox from './TextBox';

function App() {
  function handleClick(e) {
    console.log("clickApp");
  }

  return (
    <div className="App" onClick={handleClick}>
      <TextBox text = 'testing'/>
    </div>
  );
}

export default App;
