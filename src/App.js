import './App.css';
import { Button,Avatar } from '@mui/material';
import ShowData from './ShowData';
import ShowUsers from './ShowUsers';

function App() {
  return (
    <div className="App">
      <p>learn react</p>
<Avatar alt="Man" src='../public/man.jpg' />

      <ShowData/>
      <ShowUsers></ShowUsers>
     <Button variant='contained'>Greeting</Button>
       </div>
  );
}

export default App;
