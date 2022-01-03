import Container from 'components/Container';
import Loader from 'react-loader-spinner';

import s from './Loading.module.scss';

const Loading = () => (
  <Container>
    <div className={s.container}>
      <Loader type='Oval' color='#4d8679' width='100' height='100' />
    </div>
  </Container>
);

export default Loading;
