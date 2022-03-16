import styled from 'styled-components';

import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(--colors-ui-base)',
            color: 'var(--colors-text)',
            borderRadius: 'var(--radii)',
            padding: '0.25rem',
            border: 'none',
            boxShadow: 'var(--shadow)',
            height: '50px'
        }),
        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            color: 'var(--colors-text)',
            backgroundColor: state.isSelected
                ? 'var(--colors-bg)'
                : 'var(--colors-ui-base)'
        })
    }
})`
  border-radius: var(--radii);
  font-family: var(--family);
  border: none;
  margin: 1rem 0;
  width:100%;
  @media (min-width: 767px) {
    
  }
  & > * {
    box-shadow: var(--shadow);
  }
  & input {
    padding-left: 0.25rem;
  }
  & div {
    color: var(--colors-text);
  }
  
`;