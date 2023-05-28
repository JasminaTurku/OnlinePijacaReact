import React from "react";
import { useState, useEffect } from "react";
import Product from "./components/product/Product";
import { ProductDiv, CommonDiv, Input, SearchDiv } from "./styles";

function Products() {
  const [niz, setNiz] = useState([]);

  useEffect(() => {
    const savedArray = JSON.parse(localStorage.getItem("proizvodi"));
    setNiz(savedArray);
  }, []);

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
    <CommonDiv>
      <SearchDiv>
        <Input type="text" placeholder="Search..." onChange={onChangeHandle} />
      </SearchDiv>
      <ProductDiv>
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
      </ProductDiv>
    </CommonDiv>
  );
}

export default Products;
