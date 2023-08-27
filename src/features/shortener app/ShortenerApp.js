import React, {useState} from 'react';
import axios from 'axios';

function ShortenerApp() {
    const [original, setOriginal] = useState('');
    const [ shortened, setShortened ] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post('http://localhost:3001/shortener/shorten', { original });
        setShortened(`http://localhost:3001/${response.data.shortened}`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={original}
                    onChange={(e) => setOriginal(e.target.value)}
                    placeholder="Insert link here"
                />

                <button type='submit'> Shorten </button>

            </form>

            {shortened && <a href={shortened}> {shortened} </a>}

        </div>
    )
};

export {
    ShortenerApp
};