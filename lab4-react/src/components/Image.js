import React, { useState } from 'react';

function Image() {
    const [images, setImages] = useState([{ width: 500, height: 375 }]);
    const sizeChangeConst = 50;

    const addImage = () => {
        if (images.length > 0) {
            const lastImage = images[images.length - 1];
            setImages([...images, { width: lastImage.width, height: lastImage.height }]);
        }
    };

    const deleteImage = () => {
        if (images.length > 1) {
            setImages(images.slice(0, -1));
        }
    };

    const changeSize = (increment) => {
        setImages(images.map(img => ({
            width: img.width + (increment ? sizeChangeConst : -sizeChangeConst),
            height: img.height + (increment ? sizeChangeConst : -sizeChangeConst)
        })));
    };

    return (
        <div className="image-section">
            <div id="container">
                <a href="https://www.berlin.de/tourismus/">
                    {images.map((img, index) => (
                        <img 
                            key={index}
                            src="./image.jpg" 
                            alt="Берлін"
                            style={{ width: img.width, height: img.height }}
                        />
                    ))}
                </a>
            </div>
            <p>
                <button onClick={addImage}>Додати</button>
                <button onClick={deleteImage}>Видалити</button>
                <button onClick={() => changeSize(true)}>Збільшити</button>
                <button onClick={() => changeSize(false)}>Зменшити</button>
            </p>
            <p>Більше інформації про Берлін можна знайти на офіційному сайті міста.</p>
        </div>
    );
}

export default Image;