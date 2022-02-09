import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TabMenu = styled.ul`
  height: 40px;
  width: 100%;
  /* padding-left: 0; */
  background-color: #d3d1cb;
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  margin-bottom: 20px;

  .submenu {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    cursor: pointer;
  }

  .focused {
    background-color: #4000c7;
    color: white;
    height: 100%;
    display: flex;
    align-items: center;
    transition: 1s;
  }

  & div.desc {
    text-align: center;
  }
`;

const Description = styled.div`
  text-align: center;
`;

const Tab = () => {
  const menuArray = [
    { name: "Tab1", content: "Tab menu ONE" },
    { name: "Tab2", content: "Tab menu TWO" },
    { name: "Tab3", content: "Tab menu THREE" },
  ];
  const [currentTab, setCurrentTab] = useState(0);

  const selectTabHandler = (index) => {
    setCurrentTab(index);
  };

  return (
    <Container>
      <div>
        <TabMenu>
          {menuArray.map((el, index) => {
            return (
              <li
                key={index}
                className={`${
                  index === currentTab ? "submenu focused" : "submenu"
                }`}
                onClick={() => selectTabHandler(index)}
              >
                {el.name}
              </li>
            );
          })}
        </TabMenu>
        <Description>
          <p>{menuArray[currentTab].content}</p>
        </Description>
      </div>
    </Container>
  );
};

export default Tab;
