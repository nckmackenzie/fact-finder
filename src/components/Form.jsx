import { useTheme } from '../context/ThemeProvider';
function Form() {
  const { darkMode } = useTheme();
  return (
    <form
      className={`mt-4 md:mt-8 w-full flex flex-col md:flex-row md:items-center gap-2 shadow-md ${
        darkMode ? 'dark-card' : 'light-card'
      } rounded-md p-4 h-max`}
    >
      <div className="flex-1 flex items-center gap-2">
        <input
          type="text"
          name="fact"
          id="fact"
          className={`input ${darkMode ? 'bg-slate-700' : 'bg-stone-50'}`}
          placeholder="share a fact with the world"
        />
        <span className="font-main font-bold">200</span>
      </div>
      <div className="flex flex-col md:flex-row gap-2 flex-1">
        <input
          type="text"
          className={`input flex-1 ${
            darkMode ? 'bg-slate-700' : 'bg-stone-50'
          }`}
          placeholder="enter source url"
        />
        <select
          name="category"
          id="category"
          className={`input flex-1 ${
            darkMode ? 'bg-slate-700' : 'bg-stone-50'
          }`}
        >
          <option value="">Select category</option>
        </select>
      </div>
      <button className="btn btn-primary btn-normal">post</button>
    </form>
  );
}

export default Form;
