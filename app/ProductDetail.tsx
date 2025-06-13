import DetailsColorBar from "@/components/DetailsColorBar";
import { products } from "@/data/ProductData";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const ProductDetail = () => {
  const { index } = useLocalSearchParams();
  const product = products[Number(index)];
  return (
    <View className="flex-1 px-6  bg-background gap-y-3 ">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="gap-y-2">
          <View
            style={{ height: hp(6) }}
            className=" flex-row py-1 justify-between "
          >
            <Pressable
              onPress={() => router.back()}
              className="aspect-square bg-white items-center justify-center rounded-lg "
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </Pressable>
            <View className="aspect-square bg-white items-center justify-center rounded-lg ">
              <Ionicons name="bag-outline" size={24} color="black" />
            </View>
          </View>
          <View className="aspect-[4/3]">
            <Image
              resizeMode="cover"
              source={product.photoUrl}
              className="h-full w-full"
            />
          </View>
          <View
            style={{ height: hp(8) }}
            className=" flex-row justify-between  items-center"
          >
            <View>
              <Text className="text-2xl font-extrabold">{product.title}</Text>
              <Text className="text-base font-extrabold text-gray-500">
                {"By " + product.brand}
              </Text>
            </View>
            <Text className="text-xl text-primary font-extrabold">
              {"$" + product.price.toFixed(2)}
            </Text>
          </View>
          <DetailsColorBar />
          <View>
            <Text className="text-2xl font-extrabold">About: </Text>
            <Text className="text-gray-500 leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              magni architecto molestias minima temporibus unde consequatur non
              corrupti minus assumenda aperiam, doloribus, pariatur id hic ipsam
              eaque quasi laborum possimus magnam ullam error at itaque,
              repudiandae mollitia! Molestiae sed quasi maxime, atque illo magni
              distinctio assumenda animi iure dolorum quidem?
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{ height: hp(6) }}
        className=" flex-row justify-between items-center mb-2"
      >
        <View>
          <Text className="text-xl font-semibold text-gray-500">Total:</Text>
          <Text className="text-2xl font-extrabold ">
            {product.price.toFixed(2) + "$"}
          </Text>
        </View>
        <View className="h-full bg-primary rounded-2xl items-center justify-center px-14">
          <Text className="text-white text-xl  font-extrabold">Buy Now</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;
