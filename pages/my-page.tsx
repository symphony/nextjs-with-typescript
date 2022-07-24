import Button from '@mui/material/Button';

type MyPageProps = {
  name?: string;
};

const MyPage = (props: MyPageProps): JSX.Element => {
  return (<Button variant='outlined' color='secondary'>Hello Button</Button>);
};

export default MyPage;