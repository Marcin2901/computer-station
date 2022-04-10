import React, {useState} from "react";

const ItemContext = React.createContext();

const ItemContextProvider = (props) => {

    const [itemContainerOpen, setItemContainerOpen] = useState(false);
    const [listOfItems, setListOfItems] = useState([])

    return (
        <ItemContext.Provider value={{itemContainerOpen, setItemContainerOpen, listOfItems, setListOfItems}}>
            {props.children}
        </ItemContext.Provider>
    )
}

export {ItemContext, ItemContextProvider}