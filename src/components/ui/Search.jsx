import { useEffect, useState } from "react";
import SearchList from "./SearchList";
import { search } from "../../api/mediaApi";

export default function Search() {
  const [searchItem, setSearchItem] = useState("");
  const [searchContent, setSearchContent] = useState([]);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    console.log(searchTerm);
    setSearchItem(searchTerm);
  };

  const handleContent = () => {
    setSearchItem([]);
  };

  useEffect(() => {
    search(searchItem)
      .then((res) => {
        console.log("sebelum", res.data.results);
        const filterData = res.data.results.filter(
          (data) => data.media_type !== "person"
        );
        console.log("sesudah", filterData);
        const payload = filterData.slice(0, 6);

        setSearchContent(payload);
      })
      .catch((e) => {
        console.log(e.toString());
      });
  }, [searchItem]);

  return (
    <div className="w-full md:w-1/2 text-black relative">
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        className="py-2 px-4 rounded-md outline-none w-full hover:ring-2 hover:ring-rose-600 
             focus:ring focus:ring-rose-600 "
        placeholder="Search film..."
      />
      {searchContent.length !== 0 && (
        <SearchList
          searchContent={searchContent}
          contentHandler={handleContent}
        />
      )}
    </div>
  );
}
