import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteIem';
import { Section } from '../../components/Section';

import { Container, Form } from './styles';

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <a href="/">Voltar</a>
          </header>
          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />
          <Section title="Links Úteis">
            <NoteItem value="https://google.com.br" />
            <NoteItem isNew placeholder="Novo Link" />
          </ Section>
        </Form>
      </main>
    </Container>
  );
}