import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';
import { useAuth } from '../../hooks/auth';

export function Header()  {
  const { signOut } = useAuth();

  return (
    <Container>
      <Profile to="/profile">
        <img src="https://thispersondoesnotexist.com/" alt="Fotos de Pessoas que não existem" />
        <div>
          <span>Bem-vindo</span>
          <strong>Pessoa Inexistente</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}