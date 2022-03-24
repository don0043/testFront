import './App.css'
import FormInp from "./components/FormInp";
import styled from "styled-components";


const Main = styled.div`

  display: flex;
  flex-direction: column;
  
`;




function App() {
  return (
    <div className="App">
      <Main>
    <FormInp/>
      </Main>

    </div>
  );
}

export default App;
