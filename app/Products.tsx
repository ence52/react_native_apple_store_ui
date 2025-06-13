import ProductCard from "@/components/ProductCard";
import { products } from "@/data/ProductData";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Products = () => {
  return (
    <View
      className="flex-1 bg-background gap-y-4 "
      style={{ paddingRight: wp(4) }}
    >
      <View
        className="flex-row justify-between items-center "
        style={{ height: hp(6), paddingLeft: wp(4) }}
      >
        <Pressable
          onPress={() => router.back()}
          className="bg-white rounded-xl aspect-square h-full items-center justify-center "
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
        <Text className="text-3xl font-bold">Products</Text>
        <View className=" bg-white rounded-xl aspect-square h-full items-center justify-center">
          <Ionicons name="options-outline" size={24} color="black" />
        </View>
      </View>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({ item }) => (
          <View
            style={{ width: wp(44), marginBottom: wp(4), marginLeft: wp(4) }}
          >
            <ProductCard product={item} />
          </View>
        )}
      />
    </View>
  );
};

export default Products;
