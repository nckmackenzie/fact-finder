import { categories } from '../data/data';
import useMediaQuery from '../hooks/use-media-query';
import Category from './Category';
import CategoriesSelect from './CategoriesSelect';
function Categories() {
  const cats = [{ name: 'all', color: '' }, ...categories];
  const isMedium = useMediaQuery('(min-width: 768px)');

  return (
    <>
      {isMedium && (
        <aside className="basis-1/12 flex gap-2 flex-col">
          {cats?.map(category => (
            <Category
              key={category.name}
              category={category.name}
              bg={category.color}
            />
          ))}
        </aside>
      )}
      {!isMedium && <CategoriesSelect categories={cats} />}
    </>
  );
}

export default Categories;
