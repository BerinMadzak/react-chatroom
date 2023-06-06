import './App.css';
import { auth } from './config/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from './components/SignIn';
import Chatroom from './components/Chatroom';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className='App'>
      <h1 className='title'>React Chatroom</h1>
      {user ? <Chatroom /> : <SignIn />}
    </div>
  );
}

export default App;
