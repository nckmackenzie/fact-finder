import Header from './components/Header';
import LogoFormToggle from './components/LogoFormToggle';
import Container from './components/Container';
import { useTheme } from './context/ThemeProvider';
import MainContent from './components/MainContent';
function App() {
  const { darkMode } = useTheme();
  return (
    <div className={`w-full h-screen ${darkMode ? 'dark' : 'light'}`}>
      <Header />
      <main>
        <Container>
          <LogoFormToggle />
          <MainContent />
        </Container>
      </main>
    </div>
  );
}

export default App;
