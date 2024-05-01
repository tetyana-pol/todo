import { Header } from "./components/Header";
import { Todos } from "./components/Todos/Todos";
import { Modal } from "./components/Modal/Modal";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Todos />
      </div>
      <Modal />
    </>
  );
}

export default App;
