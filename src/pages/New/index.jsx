import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Link, Navigate } from 'react-router-dom';

import { api } from '../../services/api';

import { useState } from 'react';

import { Container, Form } from './styles';

export function New() {

  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");


  async function handleAddLink() {
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
    console.log(links, newLink)
    await new Promise(r => setTimeout(r, 2000));
    
  }
  console.log(links, newLink)

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted));
  }

  function handleAddTag() {
    console.log("handleAddTag")
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote(){
    await api.post("/notes", {
      title,
      description,
      tags,
      links
    });

    alert("Nota cadastrada com sucesso.")
    
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input 
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links Úteis">
            {
              links.map((link, index) => {
                <NoteItem 
                  key={String(index)}
                  value={link}
                  onClick={(link) => handleRemoveLink(link)} 
                />
                console.log(index);
              })
            }
            <NoteItem 
              isNew
              placeholder="Novo Link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </ Section>

          <Section title="Marcadores">
          {
              tags.map((tag, index) => {
                <NoteItem 
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)} 
                />
              })
            }
            <div className="tags">
              <NoteItem
                isNew
                placeholder="Nova Tag"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </ Section>

          <Button title="Salvar" onClick={handleNewNote}/>
        </Form>
      </main>
    </Container>
  );
}