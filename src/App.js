import {useState} from 'react'
import Header from './components/Header';
import './App.css';
import Login from './components/Login';
import Feed from './components/Feed';

function App() {
  const [user, setUser] = useState()
  return (
    <main className="App">
      <Header />
      <div>
      {!user
        ? <Login setUser={setUser} />
        : <Feed />
      }
    </div>
      <div className="App-header">

      </div>

    </main>
  );
}

export default App;
