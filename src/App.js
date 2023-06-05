import './App.css';
import { auth } from './config/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from './components/SignIn';
import Chatroom from './components/Chatroom';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? <Chatroom /> : <SignIn />}
    </div>
  );
}

export default App;
