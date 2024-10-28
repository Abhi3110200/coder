import {
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { useNavigation } from "expo-router";
  import products from "../assets/data.json";
  
  const Index = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
  
    useEffect(() => {
      navigation.setOptions({
        title: "Shopify",
        headerShown: true,
        headerTitleAlign: "center",
      });
    }, [navigation]);
  
    useEffect(() => {
      setData(products);
    }, [products]);
  
    const ProductCard = ({ item }) => {
      return (
        <Pressable
          style={styles.productCard}
          onPress={() => navigation.navigate('details', { item })}
        >
          <View style={styles.cardContent}>
            <Image
              source={{ uri: item.image }}
              style={styles.productImage}
            />
            <View style={styles.textContainer}>
              <Text numberOfLines={2} style={styles.productName}>
                {item.name}
              </Text>
              <Text style={{
                fontSize: 16,
              }}>₹{item.price}</Text>
              <TouchableOpacity onPress={()=>navigation.navigate('details',{item})} style={styles.buyButton}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      );
    };
  
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ProductCard item={item} />}
          keyExtractor={(item) => item.id.toString()} // Ensure ID is a string
          contentContainerStyle={styles.listContainer}
        />
      </View>
    );
  };
  
  export default Index;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      backgroundColor: "white",
    },
    productCard: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 20,
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    cardContent: {
      flexDirection: "row",
      gap: 10,
    },
    productImage: {
      width: 120,
      height: 120,
      borderRadius: 15,
    },
    textContainer: {
      flex: 1,
      gap: 10,
    },
    productName: {
      maxWidth: 190,
      fontSize: 16,
      fontWeight: "bold",
    },
    buyButton: {
      backgroundColor: "#0069B4",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 15,
      paddingVertical: 6,
      paddingHorizontal: 6,
      width: '60%',
    },
    buttonText: {
      color: "#fff",
    },
    listContainer: {
      paddingVertical: 10,
    },
  });
  