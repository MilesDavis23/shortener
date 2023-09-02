import ShortenerApp from './features/shortener app/ShortenerApp ';
import SignIn from './features/sign in/signIn';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ShortenerApp/>
    </ThemeProvider>
  )
}

export default App;
