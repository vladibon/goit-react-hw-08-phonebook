import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import Container from 'components/Container';
import Input from 'components/ContactForm/Input';
import s from 'components/ContactForm/ContactForm.module.scss';

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
    <main>
      <Container>
        <h1>Login Page</h1>

        <form className={s.form} onSubmit={handleSubmit}>
          <Input
            type='email'
            name='email'
            labelName='Email'
            value={email}
            onChange={setEmail}
          />

          <Input
            type='password'
            name='password'
            labelName='Password'
            value={password}
            onChange={setPassword}
          />

          <button className={s.button} type='submit'>
            Login
          </button>
        </form>
      </Container>
    </main>
  );
}

export default LoginPage;
