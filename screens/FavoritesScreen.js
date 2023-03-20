import { useContext } from "react"
import { useSelector, useDispatch } from 'react-redux'

import { StyleSheet, Text, View } from "react-native"
import MealsList from "../components/MealsList/MealsList"
import { MEALS } from "../data/dummy-data"
import { FavouritesContext } from "../store/context/favorites-context"

function FavouritesScreeen(){
    // const favoritesMealCtx = useContext(FavouritesContext)
    // const favoriteMeals = MEALS.filter(meal => favoritesMealCtx.ids.includes(meal.id))
    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids)

    const favoriteMeals =  MEALS.filter(meal => favoriteMealIds.includes(meal.id))

    if(favoriteMeals.length === 0){
        return <View style={styles.rootConatiner}>
            <Text style={styles.text}>You have no favorite meals yet</Text>
        </View>
    }
    return <MealsList items={favoriteMeals} />
}
export default FavouritesScreeen

const styles = StyleSheet.create({
    rootConatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
       fontSize: 18,
       fontWeight: 'bold',
       color: 'white' 
    }
})