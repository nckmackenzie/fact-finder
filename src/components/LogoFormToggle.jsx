import { useState } from 'react';
import Form from './Form';
import FormToggle from './FormToggle';
import Logo from './Logo';

function LogoFormToggle({ setFacts }) {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div className="mt-6 md:mt-8 lg:mt-12 flex items-center justify-between">
        <Logo />
        <FormToggle setShowForm={setShowForm} showForm={showForm} />
      </div>
      {showForm && <Form setFacts={setFacts} setShowForm={setShowForm} />}
    </>
  );
}

export default LogoFormToggle;
