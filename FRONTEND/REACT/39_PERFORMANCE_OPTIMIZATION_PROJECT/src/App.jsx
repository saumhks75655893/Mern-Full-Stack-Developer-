import React, { useCallback, useMemo, useState } from 'react'
import products from "./Product.json"
import ProductList from './ProductList';
const App = () => {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("Not selected");
  const [search, setSearch] = useState("")

  const handleClick = useCallback((item) => {
    setMsg(`${item} is selected`);
  }, []);

  const filteredProduct = useMemo(() => {
    return products.filter(
      (p) => p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <main>

      <div className='div'>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <div className="products">

        <input value={search} type="text" placeholder='Search Item' onChange={(e) => setSearch(e.target.value)} />


        <div className='productList'>
          <ProductList
            products={filteredProduct}
            handleClick={handleClick}
          />
        </div>

        <h1 style={{ color: "white" }}>{msg}</h1>
      </div>


    </main>
  )
}

export default App
