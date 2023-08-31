import { SearchRounded } from "@mui/icons-material";
import { useContext, useState } from "react";
import MainContext from "../../Contexts/MainContext";
const Search = () => {
  const [search, setSearch] = useState("");
  const { searchProduct } = useContext(MainContext);

  return (
    <div className="search-parent">
      <div className="search-content">
        <div className="row m-0">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="col-12 search-input"
            type="text"
            placeholder="محصول مورد نظر خود را جستوجو کنید"
          />
          <div
            className="search-icon-parent"
            onClick={() => searchProduct(search)}
          >
            <SearchRounded fontSize="medium" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
