import React, { useEffect, useState } from "react";
import * as ProductJson from "../../assets/products.json";
export const useProducts = () => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setTimeout(() => {
      setProducts(ProductJson.default.products);
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    products,
    loading,
  };
};
