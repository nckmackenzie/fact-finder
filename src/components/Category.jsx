import React from 'react';

function Category({ category, bg }) {
  return (
    <button type="button" className={`btn btn-normal bg-[${bg}]`}>
      {category}
    </button>
  );
}

export default Category;
