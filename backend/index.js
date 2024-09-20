import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      price: 1,
      name: "accusamus beatae ad facilis cum similique qui sunt",
      image: "https://via.placeholder.com/600/92c952",
    },
    {
      id: 1,
      price: 2,
      name: "reprehenderit est deserunt velit ipsam",
      image: "https://via.placeholder.com/600/771796",
    },
    {
      id: 1,
      price: 3,
      name: "officia porro iure quia iusto qui ipsa ut modi",
      image: "https://via.placeholder.com/600/24f355",
    },
    {
      id: 1,
      price: 4,
      name: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      image: "https://via.placeholder.com/600/d32776",
    },
    {
      id: 1,
      price: 5,
      name: "natus nisi omnis corporis facere molestiae rerum in",
      image: "https://via.placeholder.com/600/f66b97",
    },
    {
      id: 1,
      price: 6,
      name: "accusamus ea aliquid et amet sequi nemo",
      image: "https://via.placeholder.com/600/56a8c2",
    },
  ];
  // http://localhost:3000/api/products?search=metal
  if (req.query.search) {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(req.query.search)
    );
    res.send(filteredProducts);
    return;
  }
  setTimeout(() => {
    res.send(products);
  }, 3000);
});

app.listen(port, () => {
  console.log(`Port is running on server ${port}`);
});
