import { useState, useEffect } from "react";
import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock } from 'react-icons/fi'

import { useAuth } from "../../hooks/auth";

import { Link } from 'react-router-dom';

export function SignIn() {

    const { signIn } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignIn() {
        signIn({ email, password });
    }

    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                console.log("email e senha:", email, password);
                signIn({ email, password });
            }
          };
          document.addEventListener("keydown", listener);
          return () => {
            document.removeEventListener("keydown", listener);
          };
    }, [email, password]);

    return (
        <Container>
            <Form>
                <h1>Someone Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Faça seu login</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e=>setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button title="Entrar" onClick={ handleSignIn }/>

                <Link to="/register">
                    Criar conta
                </Link>

          </Form> 
        <Background />
      </Container>);
}
