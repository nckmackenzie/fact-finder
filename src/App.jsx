import Header from './components/Header';
import LogoFormToggle from './components/LogoFormToggle';
import Container from './components/Container';
import { useTheme } from './context/ThemeProvider';
function App() {
  const { darkMode } = useTheme();
  return (
    <div className={`w-full h-screen ${darkMode ? 'dark' : 'light'}`}>
      <Header />
      <main>
        <Container>
          <LogoFormToggle />
        </Container>
      </main>
    </div>
  );
}

export default App;
