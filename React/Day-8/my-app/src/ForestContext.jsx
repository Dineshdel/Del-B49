import React, { createContext, useContext, useState } from "react";

const ForestContext = createConstext();

function ForestProvider({ children }) {
    const [animalSound, setAnimalSound] = useState('allAnimalSounds');
    // const [age, setAge] = useState('23');

    return (
        <ForestContext.Provider value={{ animalSound, setAnimalSound }}>
            {children}
        </ForestContext.Provider>
    )
}

export { ForestContext, ForestProvider }