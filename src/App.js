import "./App.css";
import Nevbar from "./component/Nevbar";
import TextForm from "./component/TextForm";

function App() {
  return (
    <>
      <Nevbar title="Bam" />
      <div className="container">
        <TextForm Heading=" || Enter The Text To Analyze || " />
      </div>
    </>
  );
}

export default App;
