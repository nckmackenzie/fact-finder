import { useState, useRef } from 'react';
import { supabase } from '../supabaseClient';
import { useTheme } from '../context/ThemeProvider';
import CategoriesSelect from './CategoriesSelect';
import { categories } from '../data/data';
import Alert from './Alert';
function Form({ setFacts, setShowForm }) {
  const [formSettings, setFormSettings] = useState({
    displayed: false,
    status: null,
    message: '',
  });
  const { darkMode } = useTheme();
  const factRef = useRef();
  const sourceRef = useRef();
  const categoryRef = useRef();

  const submitHandler = async e => {
    e.preventDefault();
    const factVal = factRef.current.value.trim();
    const sourceVal = sourceRef.current.value.trim();
    const categoryVal = categoryRef.current.value.trim();

    if (factVal === '' || sourceVal.value === '' || categoryVal.value === '') {
      setFormSettings({
        displayed: true,
        status: 'error',
        message: 'Provide all required fields',
      });
      return;
    }
    try {
      const { data, error } = await supabase
        .from('facts')
        .insert({
          // id: 1,
          category: categoryVal,
          fact: factVal,
          source: sourceVal,
        })
        .select();

      if (error) {
        setFormSettings({ displayed: true, status: 'error', message: error });
      }

      setFormSettings({
        displayed: true,
        status: 'success',
        message: 'Fact saved!',
      });

      setFacts(prev => {
        return [
          ...prev,
          {
            id: data[0].id,
            category: data[0].category,
            fact: data[0].fact,
            source: data[0].source,
            upvote: data[0].upvote,
            interesting: data[0].interesting,
            dislike: data[0].dislike,
          },
        ];
      });

      factRef.current.value =
        sourceRef.current.value =
        categoryRef.current.value =
          '';

      setTimeout(() => {
        setFormSettings({ displayed: false, status: null, message: '' });
        setShowForm(false);
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {formSettings.displayed && (
        <Alert
          status={formSettings.status}
          message={formSettings.message}
          setFormSettings={setFormSettings}
        />
      )}
      <form
        onSubmit={submitHandler}
        className={`mt-4 md:mt-8 w-full flex flex-col md:flex-row md:items-center gap-2 shadow-md ${
          darkMode ? 'dark-card' : 'light-card'
        } rounded-md p-4 h-max`}
      >
        <div className="flex-1 flex items-center gap-2">
          <input
            ref={factRef}
            type="text"
            name="fact"
            id="fact"
            className={`input ${darkMode ? 'bg-slate-700' : 'bg-stone-50'}`}
            placeholder="share a fact with the world"
          />
          <span className="font-main font-bold">200</span>
        </div>
        <div className="flex flex-col md:flex-row gap-2 flex-1">
          <input
            type="text"
            className={`input flex-1 ${
              darkMode ? 'bg-slate-700' : 'bg-stone-50'
            }`}
            placeholder="enter source url"
            ref={sourceRef}
          />
          {categories && (
            <CategoriesSelect categories={categories} ref={categoryRef} />
          )}
        </div>
        <button type="submit" className="btn btn-primary btn-normal">
          post
        </button>
      </form>
    </>
  );
}

export default Form;
