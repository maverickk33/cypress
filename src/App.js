import "./App.css";
import Header from "./components/Header";

function App() {
  setTimeout(() => {
    document.getElementById("random-number").innerText = Math.floor(
      Math.random() * 10 + 1
    );
  }, 1500);

  return (
    <div className="App">
      <Header />
      <div className="random-number-example">
        Random example 1 : <span id="random-number">🎁</span>
      </div>
    </div>
  );
}

export default App;
