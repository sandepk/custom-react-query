import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/products?search=" + search, {
          signal: controller.signal,
        });
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("cancelled", error.message);
          return;
        }
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
    // cleanup function 
    return () => {
      controller.abort();
    }
  }, [search]);
  // const [products, loading, error] = customReactQuery("api/products");
  if (error) {
    return <h1>Something went wrong!!</h1>;
  }

  if (loading) {
    return <h1> Loading...</h1>;
  }

  return (
    <>
      <h1>Chai Aur API</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>{search}</div>
      <div>Number of Products : {products.length}</div>
    </>
  );
}

// const customReactQuery = (urlPath) =>{
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     ;(async () => {
//       try {
//         setLoading(true);
//         setError(false);
//         const response = await axios.get(urlPath);
//         console.log(response.data);
//         setProducts(response.data);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, []);
//   return [products, loading, error]
// }
export default App;
