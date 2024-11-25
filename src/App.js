import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="text-center">
          <em>Dictionary</em>
        </header>
        <main>
          <Dictionary defaultKeyword="moon" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              {" "}
              <em>Alice Petcu</em>{" "}
            </a>
            ,{" "}
            <a
              href="https://dictionary-app-by-alice-petcu.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              open sourced on GitHub
            </a>{" "}
            and
            <a
              href="https://app.netlify.com/sites/dictionary-app-by-alice-petcu/overview"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              hosted on Netlify
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}
