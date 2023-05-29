import React from "react";
import { Input, SearchDiv } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { selectSearch, setSearch } from "../../redux/slice";

const Search = () => {
  const search = useSelector(selectSearch);
  const dispatch = useDispatch();

  const onChangeHandle = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <SearchDiv>
      <Input
        type="text"
        value={search}
        placeholder="Search..."
        onChange={onChangeHandle}
      />
    </SearchDiv>
  );
};

export default Search;
