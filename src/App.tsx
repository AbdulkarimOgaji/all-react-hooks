import './App.css';
import { useUserContext } from './context/useUserContext';
import { useDarkContext } from './context/useDarkContext'

function App() {
  const { userData } = useUserContext()
  const {darkMode, setDarkMode} = useDarkContext()
  return (
    <div>
      username | {userData.username} | email | {userData.email} | darkMode | { darkMode ? 'true': 'false' }
      <button onClick={() => setDarkMode(d => !d)}>Toggle DarkMode</button>
    </div>
  );
}

export default App;
