import { useContext, useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealsDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
// import { FavouritesContext } from "../store/context/favorites-context";

function MealsDetailScreen({ route, navigation }) {
//   const favoritesMealCtx =  useContext(FavouritesContext)
  const favriteMealIds = useSelector((state)=> state.favoriteMeals.ids)
  const dispatch = useDispatch() 
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favriteMealIds.includes(mealId)

  function changeFavoritestatusHandler(){
    if(mealIsFavorite){
        dispatch(removeFavorite({id: mealId}))
        // favoritesMealCtx.removeFavorite(mealId)
    } else {
        dispatch(addFavorite({id: mealId}))
        // favoritesMealCtx.addFavorite(mealId)
    }
    console.log('Pressed!')
  }
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>{
                return <IconButton icon={mealIsFavorite? 'star': 'star-outline'} color='white' onPress={changeFavoritestatusHandler}/>
            }
        })
    },[navigation,changeFavoritestatusHandler])
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealsDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealsDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
