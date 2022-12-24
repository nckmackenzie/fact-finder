import React from 'react';

function Category({ category, bg }) {
  return (
    <button
      style={{ backgroundColor: [bg] }}
      type="button"
      className={`btn btn-normal  ${
        category === 'all' ? 'btn-primary mb-4' : ''
      }`}
    >
      {category}
    </button>
  );
}

export default Category;
