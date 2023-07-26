import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';

export function Header()  {

  return (
    <Container>
      <Profile>
        <img src="https://thispersondoesnotexist.com/" alt="Fotos de Pessoas que não existem" />
        <div>
          <span>Bem-vindo</span>
          <strong>Pessoa Inexistente</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}