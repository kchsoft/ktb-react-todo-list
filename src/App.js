import Structure from "./component/Structure";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main"
import Footer from "./component/Footer/Footer";
import {ToDoListContextProvider} from './context/ToDoListContext'

function App() {
  return (
    <Structure>
      <Header></Header>
      <ToDoListContextProvider>
        <Main></Main>
      </ToDoListContextProvider>
      <Footer></Footer>
    </Structure>
  );
}

export default App;
