import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.font};
  border: none;
  padding: 10px;
  border-radius: 100px;
`;

export default Button;
