import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectArray } from "../../redux/product/slice";
import { useState, useEffect } from "react";
import Product from "./Product";
import style from "./Search.module.css";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
  const [niz, setNiz] = useState([]);

  useEffect(() => {
    const savedArray = JSON.parse(localStorage.getItem("savedArrayKey"));
    setNiz(savedArray);
  }, []);

  console.log(niz);

  const onChangeHandle = (e) => {
    if (e.target.value == "") {
      window.location.reload(true);
      const tempArr = niz;
      setNiz(tempArr);
      return;
    }

    const searchResult = niz.filter(
      (item) =>
        item.naziv.toLowerCase().startsWith(e.target.value.toLowerCase()) ||
        item.cena
          .toString()
          .toLowerCase()
          .startsWith(e.target.value.toLowerCase())
    );
    setNiz(searchResult);
  };
  return (
    <div className={style.searchContainer}>
      <div className={style.searchInput}>
        <input type="text" onChange={onChangeHandle} />
        {/* <SearchIcon className={style.iconSearch} /> */}
      </div>
      <div className={style.product}>
        {niz.map((item) => {
          return (
            <Product
              id={item.id}
              naziv={item.naziv}
              putanja={item.putanja}
              cena={item.cena}
              dostupan={item.dostupan}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Search;
