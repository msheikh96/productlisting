import React from 'react';
import ProductCard from './ProductCard';
import Catalogcss from './styles/catalog.module.css';

function ProductCatalog (){
  const products = [
    {
      id: 1,
      name: "Xiaomi 14T Pro",
      price: "$188",
      description: "Master light, capture night",
      image: "https://i02.appmifile.com/785_operator_sg/18/09/2024/f0aa644ae7eda00b99ce4da08a4ab0e8.png?f=webp",
      category: "Electronics",
      rating: 3
    },
    {
      id: 2,
      name: "TACVASEN Men's Winter Jacket",
      price: "$22",
      description: "Jacket with Hood Water Repellent Windproof Fleece Parka Coat Black",
      image: "https://m.media-amazon.com/images/I/41b1oVj7E3L._SL500_.jpg",
      category: "Clothing",
      rating: 3
    },
    {
      id: 3,
      name: "Mi Watch",
      price: "$88",
      description: "Six upgrades for a sportswear style worth emulating",
      image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666844475.85427394.png?thumb=1&w=300&f=webp&q=85",
      category: "Electronics",
      rating: 2
    },
    {
      id: 4,
      name: "HUNGSON Mens Skinny Jeans Stretchy Ripped Jeans",
      price: "$12",
      description: "Slim Fit Denim Pants Black.",
      image: "https://m.media-amazon.com/images/I/41ULwumit2L._SL500_.jpg",
      category: "Clothing",
      rating: 1
    },
    {
      id: 5,
      name: "Xiaomi Water Ionic Hair Dryer H500",
      price: "$188",
      description: "Deeply Moistures the Hair for Luster, Smoothness, and Hydration",
      image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666840594.22122863.png?thumb=1&w=300&f=webp&q=85",
      category: "Electronics",
      rating: 3
    },
    {
      id: 6,
      name: "Typical Long Sleeve T-Shirt",
      price: "$15",
      description: "Legendary Whitetails Men's Standard",
      image: "https://m.media-amazon.com/images/I/41SslSjz7RS._SL500_.jpg",
      category: "Clothing",
      rating: 5
    },
    {
      id: 7,
      name: "Mi Portable Photo Printer",
      price: "$122",
      description: "Bring moments to life with 15-second AR photos",
      image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1672037953.35458850.png?thumb=1&w=300&f=webp&q=85",
      category: "Electronics",
      rating: 3.5
    }
  ];

  return (
    <div className={`${Catalogcss.catalog} container`}>
      <div className="row justify-content-center">
        {products.map(product => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;