import styled from 'styled-components'

const ButtonIcon = styled.button`
  display: block;
  border: 1px solid ${({ buttonType }) =>
          buttonType === 'error' ? 'var(--rd-error-color)' : 
                  (buttonType === 'info' ? 'var(--rd-info-color)' : 
                          (buttonType === 'success' ? 'var(--rd-success-color)' : 
                                  (buttonType === 'primary' ? 'var(--rd-primary-color)' : 'transparent')))};
  cursor: pointer;
  border-radius: ${({ rounded }) => (rounded ? '20px' : '2px')};
  color: ${({ buttonType }) => (buttonType !== '' ? 'var(--rd-white-color)' : 'var(--rd-black-color)')};
  background-color: ${({ buttonType }) =>
    buttonType === 'error' ? 'var(--rd-error-color)' : 
            (buttonType === 'info' ? 'var(--rd-info-color)' : 
                    (buttonType === 'success' ? 'var(--rd-success-color)' : 
                            (buttonType === 'primary' ? 'var(--rd-primary-color)' : 'transparent')))};
  
  margin: 0;
  padding: 0;
  
  width: 30px;
  height: 30px;

  > svg {
    font-size: 16px;
    font-weight: 100;
  }
`

export default ButtonIcon
