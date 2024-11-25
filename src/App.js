import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="moon" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by <em>Alice Petcu</em>
          </small>
        </footer>
      </div>
    </div>
  );
}
