import Button from '@mui/material/Button';

interface Props {
  name?: string;
};

export default function MyPage(props): JSX.Element<Props> {
  return <Button variant="contained">Hello World</Button>;
};