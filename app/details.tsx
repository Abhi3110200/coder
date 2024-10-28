import {
    Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";
import StarRating from "@/components/StarRating";

const details = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;
  console.log("sele", item);
  useEffect(() => {
    navigation.setOptions({
      title: `${item?.name}`,
      headerShown: true,
    });
  }, [navigation, item]);
  return (
    <>
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 16,
          }}
        >
          <Image
            source={{ uri: item.image }}
            style={{
              width: "100%",
              height: 400,
              objectFit: "contain",
              backgroundColor: "white",
              borderRadius: 25,
            }}
          />
          <View
            style={{
              marginTop: 10,
              flexDirection: "column",
              gap: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 4,
                alignItems: "center",
              }}
            >
              <StarRating rating={item.rating} />
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                {item.rating}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 20,
              }}
            >
              {item.description}
            </Text>
            <Text
              style={{
                fontSize: 18,
              }}
            >
              Reviews: {item.reviews}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 10,
          borderTopWidth: 1,
          borderTopColor: "#ccc",
          flexDirection: "row",
          gap: 5,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 18,
            }}
          >
            Price
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            ₹{item.price}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: "70%",
            backgroundColor: "#0069B4",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15,
          }} 
        //   onPress={()=>Alert.alert("Successfully purchased this product")}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default details;

const styles = StyleSheet.create({});
