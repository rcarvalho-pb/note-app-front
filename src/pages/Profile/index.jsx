import { Container, Form, Avatar } from './styles';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import avatarPlaceholder from "../../assets/avatarPlaceholder.png"

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

import { api } from '../../services/api';

import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const user = {
      id: user.id,
      name,
      email,
      password: newPassword,
      oldPassword: password,
    }
    await updateProfile({user, avatarFile})
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>
      <Form>
        <Avatar>
          <img
            src={avatar}
            alt="Foto de usuário desconhecido"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input
              type="file" 
              id="avatar"
              onChange={handleChangeAvatar}
            /> 

          </label>

          </Avatar>
        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          placeholder="Senha Atual"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />
        <Input 
          placeholder="Nova Senha"
          type="password"
          icon={FiLock}
          onChange={e => setNewPassword(e.target.value)}
        />
        <Button title="Salvar" onClick={handleUpdate}/>
      </Form>
    </Container>
  );
}