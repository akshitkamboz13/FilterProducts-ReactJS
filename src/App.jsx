import React, { useEffect, useState } from "react";
import products from "./data/products.json";

const App = () => {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState(["All Products"]);

  const findSearch = () => {
    console.log(category);
    const searchValue = search.toLowerCase();
    const filteredProducts = products.filter((product) => {
      return product.productName.toLowerCase().includes(searchValue);
    });
    setFilteredProducts(filteredProducts);
  };

  useEffect(() => {
    let arrcate = [];
    for (let i = 0; i < products.length; i++) {
      if (!arrcate.includes(products[i].productCategory) && arrcate.length < 3) {
        arrcate = arrcate.concat(products[i].productCategory);
      }
    }
    setCategory(category.concat(arrcate))
  }, []);

  const handelCategory = (e) => {
      if(e === "All Products") {
        setFilteredProducts(products);
        return;
      }
      const filteredProducts = products.filter((product) => {
        return product.productCategory === e;
      });
      setFilteredProducts(filteredProducts);
    
  }
  return (
        <div className="flex flex-col p-4 gap-8">
          <div className="flex justify-between">
            <div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="rounded-sm border-white border-2 p-1 bg-stone-600 text-white focus:cursor-wait focus:outline-none"
              />
              <button
                className="bg-amber-400 border-2 border-white rounded-md p-1 mx-3 text-white "
                onClick={findSearch}
              >
                Serach
              </button>
            </div>
            <div className="flex gap-2">
            {
              category.map((cate) => {
                return (
                  <button
                    key={cate}
                    className="bg-blue-400 border-2 text-xs w-15 border-white rounded-md p-1 mx-3 text-white"
                    onClick={() => handelCategory(cate)} // Pass category directly
                  >
                    {cate}
                  </button>
                );
              })
            }
            </div>
          </div>
          <div className="flex justify-around gap-5 flex-wrap">
            {filteredProducts.map((product) => {
              return (
                <div key={product.id}>
                  <div className="flex flex-col w-[20vw] gap-2 border-2 border-white p-2 rounded-md bg-stone-700 text-white shadow-md shadow-gray-800">
                    <img src="https://via.placeholder.com/150" alt="product" />
                    <div className="flex flex-col gap-1">
                      <h1 className="text-xl font-bold shadow-sm">
                        {product.productName}
                      </h1>
                      <p className="text-gray-200 text-xs">
                        {product.productDescription}
                      </p>
                      <p>Price: $ {product.productPrice}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    };

export default App;
