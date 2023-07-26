import { Container, Links, Content } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section} from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>
            <ButtonText title="Excluir Nota"/>

            <h1>Introdução ao React</h1>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi tempore consequuntur veniam laudantium unde non modi molestiae aut necessitatibus voluptatibus minus corporis nemo earum, magnam a nesciunt ab laborum! Quos?
            </p>

            <Section title="Links Úteis">
              <Links>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
              </Links>
            </Section>

            <Section title="Marcadores">
              <Tag title="express" />
              <Tag title="nodejs" />        
            </Section>
            <Button title="Voltar" />
          </Content>
        </main>
      </Container>
      );
    }