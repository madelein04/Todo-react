import React from 'react';

function useLocalStorage(itemName, inicialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setloading] = React.useState(true);
    const [item, setItem] = React.useState(inicialValue);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(inicialValue));
                    parsedItem = inicialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
                setloading(false);
            } catch (error) {
                setError(error)
            }
        }, 1000);
        return () => {

        }
    })

    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem)
        } catch (error) {
            setError(error);
        }
    };

    return {
        item,
        saveItem,
        loading,
        error,
    }
}

export { useLocalStorage };