/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Container } from './styles';

export function ButtonText({ title, isActive, ...rest}) {

  return (
    <Container
      $isActive={isActive}
      type="button"
      {...rest}
    >
      {title}
    </Container>
  );
}