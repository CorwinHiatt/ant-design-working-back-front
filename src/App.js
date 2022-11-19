import {useState} from 'react'
import Header from './components/Header';
import './App.css';
import Login from './components/Login';
import Feed from './components/Feed';
import Pholo from './components/Pholo';

function App() {
  const [user, setUser] = useState()
  return (
    <main className="App">
      <Header />
        <div className="App-header">
     <Pholo/>
      {!user
        ? <Login setUser={setUser} />
        : <Feed />
      }
   

      </div>

    </main>
  );
}

export default App;
