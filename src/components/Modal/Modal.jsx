import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { RiCloseLine } from 'react-icons/ri';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.753);
  z-index: 10;
`;

const ModalContent = styled.div`
  background-color: #262641;
  border-radius: ${props => props.theme.radii.big};
  padding: 30px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;

  min-height: 250px;
  max-width: 550px;
  width: 100%;

  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.096),
    0px 0px 60px -5px rgba(103, 62, 225, 0.486),
    0px 20px 40px -7px rgba(0, 0, 0, 0.3);
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
    <ModalBackdrop onClick={() => toggleModal()}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseBtn type="button" onClick={() => toggleModal()}>
          <RiCloseLine size={30} />
        </CloseBtn>
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
}
