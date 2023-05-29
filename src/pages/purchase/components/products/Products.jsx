import React, { useEffect, useState } from "react";
import Product from "./components/product/Product";
import { ProductDiv } from "./styles";
import { useSelector } from "react-redux";
import { selectProducts, selectSearch } from "../../redux/slice";

function Products() {
  const products = useSelector(selectProducts);
  const search = useSelector(selectSearch);

  const [productsToView, setProductsToView] = useState([]);

  useEffect(() => {
    if (search === "") {
      setProductsToView(products);
    } else {
      setProductsToView(
        products.filter(
          (product) =>
            product.naziv.toLowerCase().startsWith(search.toLowerCase()) ||
            product.cena
              .toString()
              .toLowerCase()
              .startsWith(search.toLowerCase())
        )
      );
    }
  }, [search, products]);

  return (
    <ProductDiv>
      {productsToView.map((product) => {
        return (
          <Product
            id={product.id}
            naziv={product.naziv}
            putanja={product.putanja}
            cena={product.cena}
            dostupan={product.dostupan}
            key={product.id}
          />
        );
      })}
    </ProductDiv>
  );
}

export default Products;
