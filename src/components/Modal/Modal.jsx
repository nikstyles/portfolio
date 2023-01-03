import styled from 'styled-components';
import { createPortal } from 'react-dom';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.753);
  z-index: 99;
`;

const ModalContent = styled.div`
  background-color: #262641;
  border-radius: ${props => props.theme.radii.big};
  padding: 30px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-height: 300px;
  max-width: 600px;
  width: 100%;

  box-shadow: 1px 5px 5px -1px rgba(0, 0, 0, 0.2),
    0px 10px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

const CloseBtn = styled.div`
  /* background-color: ${props => props.theme.colors.text};
  border-radius: ${props => props.theme.radii.big};
  padding: 30px; */

  position: absolute;
  top: 0;
  right: 0;

  color: ${props => props.theme.colors.text};
  padding: 20px;
  cursor: pointer;
`;

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ toggleModal }) {
  return createPortal(
    <ModalBackdrop>
      <ModalContent>
        <CloseBtn type="button" onClick={toggleModal}>
          x
        </CloseBtn>
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
}
