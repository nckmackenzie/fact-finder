import { forwardRef } from 'react';
import { useTheme } from '../context/ThemeProvider';

const CategoriesSelect = forwardRef((props, ref) => {
  const { darkMode } = useTheme();
  return (
    <select
      name="category"
      id="category"
      className={`input flex-1 ${darkMode ? 'bg-slate-700' : 'bg-gray-400'}`}
      defaultValue=""
      ref={ref}
    >
      <option value="" disabled>
        Select category
      </option>
      {props.categories?.map(category => (
        <option value={category.name} key={category.name}>
          {category.name.toUpperCase()}
        </option>
      ))}
    </select>
  );
});

export default CategoriesSelect;
