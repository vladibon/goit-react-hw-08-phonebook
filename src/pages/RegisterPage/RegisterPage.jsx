import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import Container from 'components/Container';
import Input from 'components/ContactForm/Input';
import s from 'components/ContactForm/ContactForm.module.scss';

function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <main>
      <Container>
        <h1>Register Page</h1>

        <form className={s.form} onSubmit={handleSubmit}>
          <Input
            type='text'
            name='name'
            labelName='Name'
            value={name}
            onChange={setName}
          />

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
            Register
          </button>
        </form>
      </Container>
    </main>
  );
}

export default RegisterPage;
