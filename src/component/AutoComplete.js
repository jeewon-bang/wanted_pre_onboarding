import { useState, useEffect } from "react";
import { BiX } from "react-icons/bi";
import styled from "styled-components";

const deselectedOptions = [
  "rustic",
  "antique",
  "vintage",
  "refurbished",
  "중고A급",
];

const boxShadow = "0 4px 6px rgb(32 33 36 / 28%)";

const InputContainer = styled.div`
  height: 13px;
  margin-top: 10%;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border: 1px solid rgb(223, 225, 229);
  border-radius: 10px;
  z-index: 3;
  box-shadow: 0;

  &:focus-within {
    box-shadow: ${boxShadow};
  }

  > input {
    flex: 1 0 0;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    outline: none;
    font-size: 16px;
  }

  > div.delete-button {
    cursor: pointer;
  }
`;

const DropDownContainer = styled.ul`
  background-color: #ffffff;
  display: block;
  margin-left: auto;
  margin-right: auto;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  margin-top: -1px;
  padding: 0.5rem 0;
  border: 1px solid rgb(223, 225, 229);
  border-radius: 0 0 1rem 1rem;
  box-shadow: ${boxShadow};
  z-index: 3;

  > li:hover {
    background-color: lightgray;
  }

  > li {
    padding: 0 1rem;

    &.selected {
      background-color: lightgray;
    }
  }
`;

const Autocomplete = () => {
  const [hasText, setHasText] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(deselectedOptions);
  const [selected, setSelected] = useState(-1);

  useEffect(() => {
    if (inputValue === "") {
      setHasText(false);
      setOptions([]);
    }

    if (inputValue !== "") {
      setOptions(
        deselectedOptions.filter((el) => {
          return el.includes(inputValue);
        })
      );
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setHasText(true);
  };

  const handleDropDownClick = (clickedOption) => {
    setInputValue(clickedOption);
  };

  const handleDeleteButtonClick = () => {
    setInputValue("");
  };

  return (
    <div>
      <InputContainer>
        <input
          type="text"
          value={inputValue}
          defaultValue={inputValue}
          onChange={handleInputChange}
        ></input>
        <div className="delete-button">
          <BiX className="close-x-icon" onClick={handleDeleteButtonClick} />
        </div>
      </InputContainer>
      {hasText && (
        <DropDown
          options={options}
          handleComboBox={handleDropDownClick}
          selected={selected}
        />
      )}
    </div>
  );
};

export default Autocomplete;

export const DropDown = ({ options, handleComboBox, selected }) => {
  return (
    <DropDownContainer>
      {options.map((option, idx) => {
        return (
          <li
            key={idx}
            onClick={() => handleComboBox(option)}
            className={selected === idx ? "selected" : ""}
          >
            {option}
          </li>
        );
      })}
    </DropDownContainer>
  );
};
