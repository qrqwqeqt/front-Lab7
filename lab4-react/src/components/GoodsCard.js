import React from 'react';

function GoodsCard({ name, price, image }) {
    return (
        <div className="goods-card" style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            margin: '10px',
            textAlign: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <img 
                src={image} 
                alt={name} 
                style={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '4px'
                }}
            />
            <h3 style={{ margin: '10px 0' }}>{name}</h3>
            <p style={{ 
                color: '#333',
                fontSize: '18px',
                fontWeight: 'bold'
            }}>
                {price} грн
            </p>
        </div>
    );
}

export default GoodsCard;