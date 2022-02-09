import "./App.css";
import styled from "styled-components";
import Modal from "./component/Modal";
import ClickToEdit from "./component/ClickToEdit";
import Autocomplete from "./component/AutoComplete";
import Tag from "./component/Tag";
import Tab from "./component/Tab";
import Toggle from "./component/Toggle";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .component-wrapper {
    width: 60%;
    height: 200px;
    padding: 15px;
    margin: 20px 20px 20px 20px;
    border: 2px solid #d3d1cb;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .close-x-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 20px;
    &:hover {
      cursor: pointer;
    }
  }
`;

function App() {
  return (
    <Container>
      <div className="component-wrapper">
        <Toggle />
      </div>

      <div className="component-wrapper">
        <Tab />
      </div>

      <div className="component-wrapper">
        <Tag />
      </div>

      <div className="component-wrapper">
        <ClickToEdit />
      </div>

      <div className="component-wrapper">
        <Modal />
      </div>

      <div className="component-wrapper">
        <Autocomplete />
      </div>
    </Container>
  );
}

export default App;
