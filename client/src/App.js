import styled from "styled-components";
import Main from "./components/Main";

const CanvasContainer = styled.div`
  width: 800px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

function App() {
  return (
    <CanvasContainer>
      <Main />
    </CanvasContainer>
  );
}

export default App;
