import React from "react";
import Product from "./Product";
import style from "./Product.module.css";
import { useEffect } from "react";
import { useState } from "react";

function Products() {
  const [nizProizvoda, setNizProizvoda] = useState([]);

  useEffect(() => {
    const savedArray = JSON.parse(localStorage.getItem("savedArrayKey"));

    setNizProizvoda(savedArray);
  }, []);

  console.log(nizProizvoda);

  return (
    <div className={style.containerCard}>
      <ui className={style.productsContainer}>
        {nizProizvoda.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              naziv={product.naziv}
              putanja={product.putanja}
              cena={product.cena}
              dostupan={product.dostupan}
            />
          </li>
        ))}
      </ui>
    </div>
  );
}

export default Products;
