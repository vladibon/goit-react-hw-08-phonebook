import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import Container from 'components/Container';
import Input from 'components/ContactForm/Input';
import Button from 'components/ContactForm/Button';
import s from './SignUpPage.module.scss';

function SignUpPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.signUp({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <main className={s.page}>
      <Container>
        <form className={s.form} onSubmit={handleSubmit}>
          <Input type='text' name='name' labelName='Name' value={name} onChange={setName} />

          <Input type='email' name='email' labelName='Email' value={email} onChange={setEmail} />

          <Input
            type='password'
            name='password'
            labelName='Password'
            value={password}
            onChange={setPassword}
          />

          <Button type='submit'>Sign up</Button>
        </form>
      </Container>
    </main>
  );
}

export default SignUpPage;
