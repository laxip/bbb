import { Container } from './FormError.styled';

const FormError = ({ children }) => {
  return (
    <Container>
      <span>{children}</span>
    </Container>
  );
};

export default FormError;
