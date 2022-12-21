import { useTheme } from '../context/ThemeProvider';

function CategoriesSelect({ categories }) {
  const { darkMode } = useTheme();
  return (
    <select
      name="category"
      id="category"
      className={`input flex-1 ${darkMode ? 'bg-slate-700' : 'bg-gray-400'}`}
      defaultValue=""
    >
      <option value="" disabled>
        Select category
      </option>
      {categories?.map(category => (
        <option value={category.name} key={category.name}>
          {category.name.toUpperCase()}
        </option>
      ))}
    </select>
  );
}

export default CategoriesSelect;
