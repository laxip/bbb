import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  border: 1px solid #8d8d8d;
  border-radius: 100px;
  padding: 0 10px;
  margin: 30px 0;

  li {
    display: block;
    padding: 10px;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: black;

    &:hover {
      text-decoration: underline;
    }
  }
`;
