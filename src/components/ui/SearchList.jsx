import SearchItem from "./SearchItem";
import PropTypes from "prop-types";

// const items = [
//   {
//     poster_path: "/q8bkN1GvXqjs1ZGFYWViH9o2WDq.jpg",
//     title:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit omnis beatae Lorem ipsum dolor sit.",
//     popularity: "9012",
//     first_air_date: "2023-11-09",
//   },
//   {
//     poster_path: "/q8bkN1GvXqjs1ZGFYWViH9o2WDq.jpg",
//     title:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit omnis beatae Lorem ipsum dolor sit.",
//     popularity: "9012",
//     first_air_date: "2023-11-09",
//   },
//   {
//     poster_path: "/q8bkN1GvXqjs1ZGFYWViH9o2WDq.jpg",
//     title:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit omnis beatae Lorem ipsum dolor sit.",
//     popularity: "9012",
//     first_air_date: "2023-11-09",
//   },
// ];

SearchList.propTypes = {
  contentHandler: PropTypes.func,
  searchContent: PropTypes.array,
};

export default function SearchList({ searchContent, contentHandler }) {
  return (
    <div className="absolute bg-slate-500 w-full px-2 py-4 rounded-lg mt-2 z-10">
      <ul className="space-y-4">
        {searchContent.map((item, i) => {
          return (
            <li key={i}>
              <SearchItem item={item} contentHandler={contentHandler} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
