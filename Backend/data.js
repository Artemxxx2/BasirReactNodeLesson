import bcrypt from 'bcrypt'
const data = {

  products: [
    {
      id: 1,
      price: 120,
      name: "Nike Slim Shirts",
      img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b0e50a5c-bc52-4c3e-9a44-5afe2d309985/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-vapormax-evo-gPhB5J.png',
      rating: 3,
      reviews:1,
      description:'high quality product',
      countInStock:3
    },
    {
      id: 2,
      price: 88,
      name: "Addidas shoes",
      img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/gsuin11ptg5qgktmzoat/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-force-1-07-KyTDGepj.png',
      rating: 5,
      reviews:12,
      countInStock:0
    },
    {
      id: 3,
      price: 150,
      name: "sunglasses",
      img: 'https://myaso.net.ua/local/templates/myaso/img.php?h_back=868&w_back=1312&url=/upload/iblock/234/2340176f279a2b4fd87a84e9945f0e7b.jpg',
      rating: 4,
      reviews:14,
      countInStock:0
    },
    {
      id: 4,
      price: 1,
      name: "Smth cheap :)",
      img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/4e894c2b76dd4c8e9013aafc016047af_9366/Krossovki_Superstar_belyj_FV3284_01_standard.jpg',
      rating: 1,
      reviews:11,
      countInStock:12
    },
    {
      id: 5,
      price: 135,
      name: "Lacoste shirt",
      img: 'https://static.footshop.com/414775-full_product/80332.jpg',
      rating: 5,
      reviews:32,
      countInStock:11
    },
    
  ],
};

export default data;
