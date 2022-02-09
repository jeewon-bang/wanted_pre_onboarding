import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const InputViewContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const InputBox = styled.div`
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d3d1cb;
  margin-left: 1rem;
  font-weight: bold;
`;

const InputEdit = styled.input`
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: inline-block;
`;

const InputView = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 1rem;
  div.view {
    font-weight: bold;
    margin-top: 0.5rem;
  }
`;

const MyInput = ({ value, handleValueChange }) => {
  const inputEl = useRef(null);
  const [isEditMode, setEditMode] = useState(false);
  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    if (isEditMode) {
      inputEl.current.focus();
    }
  }, [isEditMode]);

  useEffect(() => {
    setNewValue(value);
  }, [value]);

  const handleClick = () => {
    setEditMode(true);
  };

  const handleBlur = () => {
    setEditMode(false);
    handleValueChange(newValue);
  };

  const handleInputChange = (e) => {
    setNewValue(e.target.value);
  };

  return (
    <InputBox>
      {isEditMode ? (
        <InputEdit
          type="text"
          value={newValue}
          ref={inputEl}
          onBlur={handleBlur}
          onChange={handleInputChange}
        />
      ) : (
        <span onClick={handleClick}>{newValue}</span>
      )}
    </InputBox>
  );
};

const ClickToEdit = () => {
  const [name, setName] = useState("김코딩");
  const [age, setAge] = useState(20);

  return (
    <>
      <InputViewContainer>
        <InputView>
          <label>이름</label>
          <MyInput
            value={name}
            handleValueChange={(newValue) => setName(newValue)}
          />
        </InputView>
        <InputView>
          <label>나이</label>
          <MyInput
            value={age}
            handleValueChange={(newValue) => setAge(newValue)}
          />
        </InputView>
        <InputView>
          <div className="view">
            이름 {name} 나이 {age}
          </div>
        </InputView>
      </InputViewContainer>
    </>
  );
};

export default ClickToEdit;
