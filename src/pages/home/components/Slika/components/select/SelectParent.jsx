import React, { useState, useEffect } from "react";
import MarketSelect from "./components/MarketSelect/MarketSelect";
import { SelectDiv } from "./styles";
import { useDispatch } from "react-redux";
import { loadMarkets } from "../../../../reduxThunk/loadMarkets";
import ProductTypeSelect from "./components/ProductTypeSelect/ProductTypeSelect";
import { useNavigate } from "react-router";

function SelectParent() {
  const [allMarkets, setAllMarkets] = useState([]);
  const [market, setMarket] = useState(undefined);
  const [productType, setProductType] = useState(undefined);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadMarkets(setAllMarkets));
  }, []);

  useEffect(() => {
    if (productType) {
      navigate("/card", {
        state: {
          market,
          productType,
        },
      });
    }
  }, [productType]);

  return (
    <SelectDiv>
      <MarketSelect
        allMarkets={allMarkets}
        market={market}
        setMarket={setMarket}
      />
      <ProductTypeSelect
        market={market}
        productType={productType}
        setProductType={setProductType}
      />
    </SelectDiv>
  );
}

export default SelectParent;
