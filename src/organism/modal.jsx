import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import {
  ButtonBase,
  ButtonIcon,
  ModalBody,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalOverlay
} from '../atom'

const ModalClose = styled.div`
  cursor: pointer;
  pointer-events: all;
  color: var(--rd-border-primary-color);
  
  > svg {
    font-size: 1.25rem;
  }
`

const ModalHeading = styled.h5`
  font-size: 1.25rem;
  color: var(--rd-border-primary-color);
  margin: 0;
  padding: 0;
`

const Modal = ({
  children,
  heading,
  handleModal,
  handleAction,
  hideAction = false,
  actionTitle = 'Save',
  actionButtonType,
  modalWidth = 500,
  isGridView = false
}) => {
  return (
    <ModalContainer>
      <ModalBody width={modalWidth}>
        <ModalHeader>
          <ModalHeading level={1}>
            {heading}
          </ModalHeading>
          <ModalClose rounded onClick={() => handleModal(false)}>
            <FontAwesomeIcon icon={ faTimes } />
          </ModalClose>
        </ModalHeader>
        <ModalContent isGridView={isGridView}>
          { children }
        </ModalContent>
        <ModalFooter>
          <ButtonBase rounded buttonType="" onClick={() => handleModal(false)}>
            Cancel
          </ButtonBase>
          { !hideAction && <ButtonBase buttonType={actionButtonType} rounded onClick={() => handleAction()}>{ actionTitle }</ButtonBase> }
        </ModalFooter>
      </ModalBody>
      <ModalOverlay />
    </ModalContainer>
  )
}

export default Modal