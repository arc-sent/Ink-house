import { createContext, useContext, useState } from "react";
const ContextPicture = createContext(null);
import * as Images from './ImportImage.js';

function Context({ children }) {
    const [pictures, setPictures] = useState([]);

    return (
        <ContextPicture.Provider value={{ pictures, setPictures }}>
            {children}
        </ContextPicture.Provider>
    )
}

export { ContextPicture, Context };