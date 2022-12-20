import React from 'react';

function FormToggle({ showForm, setShowForm }) {
  return (
    <button
      type="button"
      className="btn btn-large"
      onClick={() => setShowForm(prev => !prev)}
    >
      {showForm ? 'Close' : 'Share a fact'}
    </button>
  );
}

export default FormToggle;
