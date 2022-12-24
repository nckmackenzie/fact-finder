import { useTheme } from '../context/ThemeProvider';

function Fact(props) {
  const { darkMode } = useTheme();
  return (
    <article
      className={`w-full flex flex-col md:flex-row md:items-center gap-4 md:gap-16 p-2 md:px-4 py-2 rounded-md shadow ${
        darkMode ? 'dark-card' : 'light-card'
      }`}
    >
      <div className="max-w-full md:max-w-[50%]">
        <p className="text-base font-main">{props.fact}</p>
        <a
          href={props.source}
          target="_blank"
          className="text-blue-400 font-main text-sm self-end"
        >
          (Source)
        </a>
      </div>
      <div className="flex justify-between items-center flex-1">
        <span className="bg-technology inline-flex px-1 rounded-full text-xs font-main font-semibold max-w-max">
          {props.category.toString().toUpperCase()}
        </span>
        <div className="flex gap-1 center">
          <button className="bg-slate-400 px-4 py-1 center rounded-full">
            👍 <span className="text-sm font-main">{props.upvote}</span>
          </button>
          <button className="bg-slate-400 px-4 py-1 center rounded-full">
            😉 <span className="text-sm font-main">{props.interesting}</span>
          </button>
          <button className="bg-slate-400 px-4 py-1 center rounded-full">
            ⛔ <span className="text-sm font-main">{props.dislike}</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default Fact;
