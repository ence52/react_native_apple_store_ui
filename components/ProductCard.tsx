import { Product } from "@/types/ProductType";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Pressable
      onPress={() => {
        router.push({
          pathname: "/ProductDetail",
          params: { index: product.id },
        });
      }}
      
      className="bg-white p-4 flex-col w-full aspect-[3/4] justify-between rounded-xl shadow-xl shadow-black/5"
    >
      <Text className="font-extrabold">{product.brand}</Text>
      <View className=" aspect-[14/9]">
        <Image
          resizeMode="contain"
          source={product.photoUrl}
          className="h-full w-full"
        ></Image>
      </View>
      <View>
        <Text className="font-extrabold text-lg leading-5">
          {product.title}
        </Text>
        <Text className="font-semibold text-gray-400 leading-5">
          {product.miniDesc}
        </Text>
      </View>
      <View>
        <Text className="font-bold text-gray-400 text-sm leading-4">price</Text>
        <Text className="font-extrabold text-primary leading-5">
          {"$" + product.price.toFixed(2)}
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductCard;
