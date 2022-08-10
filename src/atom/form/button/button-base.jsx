import React from 'react'
import styled from 'styled-components'

const ButtonBase = ({
    type,
    fullWidth,
    buttonType = 'primary',
    handleClick,
    link,
    children,
    hasIcon,
    ...props
}) => {
    const ButtonBase = styled.button`
      display: ${({ hideOnMobile }) => (hideOnMobile ? 'none' : 'block')};
      padding: 10px 25px;
      cursor: pointer;
      border: ${({ buttonType }) =>
        buttonType === 'error' ? 'var(--rd-error-color)' : 
          (buttonType === 'info' ? 'var(--rd-info-color)' : 
            (buttonType === 'success' ? 'var(--rd-success-color)' :
                (buttonType === 'primary' ? 'var(--rd-primary-color)' : 'transparent')))};
      background-color: ${({ buttonType }) =>
        buttonType === 'error' ? 'var(--rd-error-color)' : 
          (buttonType === 'info' ? 'var(--rd-info-color)' : 
            (buttonType === 'success' ? 'var(--rd-success-color)' : 
              (buttonType === 'primary' ? 'var(--rd-primary-color)' : 'transparent')))};
      color: ${({ buttonType }) => (buttonType !== '' ? 'var(--rd-white-color)' : 'var(--rd-black-color)')};
      border-radius: ${({ rounded }) => rounded && '20px'};

      transition: background-color 0.2s ease-out 0s;
      
      font-size: 16px;
      font-weight: bold;
      
      > svg {
        font-size: 16px;
        font-weight: 100;
        padding-left: ${({ hasIcon }) => (hasIcon ? '.5rem' : '0')};
      }
    `

    return (
        <ButtonBase
            type={type || 'submit'}
            fullWidth={fullWidth}
            buttonType={buttonType}
            onClick={handleClick}
            hasIcon={hasIcon}
            {...props}
        >
            {children}
        </ButtonBase>
    )
}

export default ButtonBase