import { useState } from "react";
import axios from "axios";

const endpoint = 'http://localhost:3001/shortener/shorten'

function useShortener(){

    const [ original, setOriginal ] = useState('');
    const [ shortened, setShortened ] = useState('');
    
    const getLinks = async() => {
        try {
            const response = await axios.post( endpoint, { original });
            setShortened(`http://localhost:3001/${response.data.shortened}`)
        } catch {
            console.error("Error shrinking the link :( :", error);
        }
    }

    return {
        original,
        setOriginal, 
        shortened, 
        setShortened,
        getLinks

    }
}

export {
    useShortener
};