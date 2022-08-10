import React from 'react'
import styled from 'styled-components'

const ButtonToggle = styled.button`
  transition: color 0.35s;

  border-radius: 100%;
  border: none;
  padding: 0;
  height: 40px;
  width: 40px;
  box-shadow: 0px 4px 5px 1px var(--rd-theme-color);
  border: 1px solid ${({ buttonType }) =>
          buttonType === 'error' ? 'var(--rd-error-color)' :
                  (buttonType === 'info' ? 'var(--rd-info-color)' :
                          (buttonType === 'success' ? 'var(--rd-success-color)' :
                                  (buttonType === 'primary' ? 'var(--rd-primary-color)' : 'transparent')))};
  background-color: ${({ buttonType }) =>
          buttonType === 'error' ? 'var(--rd-error-color)' :
                  (buttonType === 'info' ? 'var(--rd-info-color)' :
                          (buttonType === 'success' ? 'var(--rd-success-color)' :
                                  (buttonType === 'primary' ? 'var(--rd-primary-color)' : 'transparent')))};

  position: absolute;
  right: 1rem;
  transform: translateX(85%);

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    padding-left: 0;
    font-size: 16px;
    color: ${({ buttonType }) => (buttonType !== '' ? 'var(--rd-white-color)' : 'var(--rd-black-color)')};
  }

  &:hover {
    color: inherit;
  }
`

export default ButtonToggle