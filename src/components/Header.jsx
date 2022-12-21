import { useTheme } from '../context/ThemeProvider';
import LightIcon from './LightIcon';
import DarkIcon from './DarkIcon';
export default function Header() {
  const { darkMode, setDarkMode } = useTheme();
  const themeHandler = () => {
    setDarkMode(prev => !prev);
  };
  return (
    <header
      className={`h-max shadow-sm w-full flex items-center ${
        darkMode ? 'dark-nav' : 'light-nav'
      }`}
    >
      <div className="container flex items-center justify-between py-2">
        <p className="hidden lg:inline-flex text-base md:text-lg 2xl:text-2xl font-main font-semibold">
          🖐️ Hi there. This is a model project by Jonas, the great Udemy
          Instructor ever.🐐{' '}
        </p>
        <button
          onClick={themeHandler}
          className={`w-8 h-8 md:w-12 md:h-12 ml-auto lg:ml-0 rounded-full ${
            darkMode ? 'bg-white' : 'bg-stone-800'
          } flex items-center justify-center`}
        >
          {darkMode ? <LightIcon /> : <DarkIcon />}
        </button>
      </div>
    </header>
  );
}
