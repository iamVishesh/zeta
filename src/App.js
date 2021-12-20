
import { useState } from 'react';
import './App.css';
import CreateEvent from './components/createEvent';
import Calender from './components/Calender';

const appConatiner = { display: 'flex' }
function App() {

  const [isModalOpen, setisModalOpen] = useState(false);


  const openCreateEvent = () => {
    setisModalOpen(!isModalOpen);
  }

  return (
    <div style={appConatiner}>
      <button onClick={openCreateEvent} >Create Event </button>
      <Calender />
      {isModalOpen ?
        <CreateEvent

          setisModalOpen={setisModalOpen} />
        : null
      }

    </div>
  );
}

export default App;
