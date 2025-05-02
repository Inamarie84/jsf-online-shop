// 1. Fetch the data from an API
// 2. We store the API data as a state
// 3. We loop trough the data and display it

import { ONLINE_SHOP_API_URL } from "@/common/common";
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(ONLINE_SHOP_API_URL);
        const json = await response.json();
        setProducts(json.data);
      } catch (error) {
        console.error(error);
      }
    }

    getProducts();
  }, []);
  return <div>Products</div>;
}

export default Products;

// when you export deafult, you import it without curly braces and you can use any name you want: Ex
// import Products from './'

// alternative: export {Products}; if this option:
// import { Products } from ''

// you can also just use export function in the first line to avoid extra code
