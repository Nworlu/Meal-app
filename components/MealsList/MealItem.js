import { useNavigation } from "@react-navigation/native";
import { Text, View, Pressable, Image, StyleSheet, Platform } from "react-native";
import MealsDetails from "../MealDetails";

function MealItem({ id, title, imageUrl, duration, complexity, affordability,  }) {
  let navigation = useNavigation();

  function selectMealItemHndler(){
    navigation.navigate('MealsDetail', {
      mealId: id
    })
  }
  return (
    <View style={styles.mealItem}>
      <Pressable onPress={selectMealItemHndler}  android_ripple={{color: '#ccc'}} style={({ pressed }) => 
          pressed ? styles.buttonPressed : null
        }>
        <View style={styles.innerContainer}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealsDetails duration={duration} affordability={affordability} complexity={complexity} />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem:{
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer:{
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: { 
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8
  },

  buttonPressed: {
    opacity: 0.5,
  },
});
