import { categories } from '../data/data';
import Category from './Category';
function Categories() {
  return (
    <aside className="flex gap-2 flex-col">
      {categories?.map(category => (
        <Category
          key={category.name}
          category={category.name}
          bg={category.color}
        />
      ))}
    </aside>
  );
}

export default Categories;
