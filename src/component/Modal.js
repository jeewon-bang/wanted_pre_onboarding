import { useState } from "react";
import { BiX } from "react-icons/bi";
import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const ModalBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 25px;
  cursor: grab;
`;

const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 200px;
  height: 100px;
  border-radius: 1rem;
  position: relative;
  > .close-btn {
    position: absolute;
    top: 2px;
    right: 7px;
    cursor: pointer;
  }
`;

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>
          {isModalOpen ? "Opened!" : "Open Modal"}
        </ModalBtn>

        {isModalOpen ? (
          <ModalBackdrop onClick={openModalHandler}>
            <ModalView
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <div className="close-btn" onClick={openModalHandler}>
                <BiX className="close-x-icon" />
              </div>
              <div>HELLO CODESTATES!</div>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};

export default Modal;
