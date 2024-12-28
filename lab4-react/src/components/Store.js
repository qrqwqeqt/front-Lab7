import React from 'react';
import GoodsCard from './GoodsCard';

function Store() {
    const products = [
        {
            name: "Кавоварка Delonghi",
            price: 4999,
            image: "/api/placeholder/200/200"
        },
        {
            name: "Блендер Philips",
            price: 2499,
            image: "/api/placeholder/200/200"
        },
        {
            name: "Тостер Bosch",
            price: 1899,
            image: "/api/placeholder/200/200"
        },
        {
            name: "Мультиварка Tefal",
            price: 3299,
            image: "/api/placeholder/200/200"
        },
        {
            name: "Міксер KitchenAid",
            price: 5999,
            image: "/api/placeholder/200/200"
        },
        {
            name: "Електрочайник Braun",
            price: 1499,
            image: "/api/placeholder/200/200"
        }
    ];

    return (
        <div>
            <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Наш магазин</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px',
                padding: '20px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {products.map((product, index) => (
                    <GoodsCard 
                        key={index}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default Store;