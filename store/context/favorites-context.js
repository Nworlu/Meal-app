import { createContext, useState } from "react";

export const FavouritesContext = createContext({
    ids:[],
    addFavorite: (id)=>{},
    removeFavorite: (id) => {}
})

function FavouritesContextProvider({children}){
    const [favoriteMealIds,SetFavoriteMealIds] = useState([])

    function addFavorite(id){
        SetFavoriteMealIds((currentFavIds)=> [...currentFavIds, id])
    }

    function removeFavorite(id){
        SetFavoriteMealIds((currentFavIds)=> currentFavIds.filter(mealId => mealId !== id))
    }

    const value ={
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite:removeFavorite
    }

    return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>
}

export default FavouritesContextProvider