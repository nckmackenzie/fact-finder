import { AiOutlineClose } from 'react-icons/ai';
function Alert({ status, message, setFormSettings }) {
  const closeHandler = function () {
    setFormSettings({ displayed: false, status: null, message: '' });
  };

  return (
    <div
      className={`alert ${
        status === 'success' ? 'bg-green-300' : 'bg-red-300'
      }`}
    >
      <p>{message}</p>
      <button
        className="w-8 h-8 p-2 cursor-pointer border border-solid border-stone-400 center rounded-sm"
        onClick={closeHandler}
      >
        <AiOutlineClose />
      </button>
    </div>
  );
}

export default Alert;
