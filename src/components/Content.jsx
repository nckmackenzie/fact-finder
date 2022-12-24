import React from 'react';
import Fact from './Fact';

export default function Content({ isLoading, facts }) {
  // console.log(facts);
  return (
    <div className="basis-11/12 flex flex-col gap-4">
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        facts &&
        facts.length > 0 &&
        facts.map(fact => <Fact key={fact.id} {...fact} />)}
    </div>
  );
}
