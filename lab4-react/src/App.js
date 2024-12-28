import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import Store from './components/Store';

function App() {
    const [showStore, setShowStore] = useState(false);

    return (
        <div className="App">
            <div style={{ 
                padding: '10px', 
                backgroundColor: '#f0f0f0',
                marginBottom: '20px' 
            }}>
                <button 
                    onClick={() => setShowStore(false)}
                    style={{
                        margin: '0 10px',
                        padding: '8px 16px',
                        backgroundColor: !showStore ? '#007bff' : '#6c757d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Завдання 1
                </button>
                <button 
                    onClick={() => setShowStore(true)}
                    style={{
                        margin: '0 10px',
                        padding: '8px 16px',
                        backgroundColor: showStore ? '#007bff' : '#6c757d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Завдання 2
                </button>
            </div>

            {!showStore ? (
                <>
                    <Header />
                    <Content />
                    <Image />
                </>
            ) : (
                <Store />
            )}
        </div>
    );
}

export default App;