import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import Header from './components/Header';
import LogoFormToggle from './components/LogoFormToggle';
import Container from './components/Container';
import { useTheme } from './context/ThemeProvider';
import MainContent from './components/MainContent';

function App() {
  const [facts, setFacts] = useState();
  const [er, setEr] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        const { data, error } = await supabase.from('facts').select();
        if (error) {
          setEr(error);
        }
        if (data) {
          setFacts(data);
        }
      } catch (err) {
        setEr(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  // console.log(facts);

  return (
    <div className={`w-full h-screen ${darkMode ? 'dark' : 'light'}`}>
      <Header />
      <main>
        <Container>
          <LogoFormToggle setFacts={setFacts} />
          <MainContent isLoading={isLoading} facts={facts} />
        </Container>
      </main>
    </div>
  );
}

export default App;
