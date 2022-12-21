import React from 'react';

function Category({ category, bg }) {
  return (
    <button
      type="button"
      className={`btn btn-normal bg-[${bg}] ${
        category === 'all' ? 'btn-primary mb-4' : ''
      }`}
    >
      {category}
    </button>
  );
}

export default Category;
