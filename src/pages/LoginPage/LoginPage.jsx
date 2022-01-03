import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import Container from 'components/Container';
import Input from 'components/ContactForm/Input';
import Button from 'components/ContactForm/Button';
import s from './LoginPage.module.scss';

function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <main className={s.page}>
      <Container>
        <form className={s.form} onSubmit={handleSubmit}>
          <Input type='email' name='email' labelName='Email' value={email} onChange={setEmail} />

          <Input
            type='password'
            name='password'
            labelName='Password'
            value={password}
            onChange={setPassword}
          />

          <Button type='submit'>Log in</Button>
        </form>
      </Container>
    </main>
  );
}

export default LoginPage;
