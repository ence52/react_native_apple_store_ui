import { products } from "@/data/ProductData";
import React from "react";
import { ScrollView, View } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import ProductCard from "./ProductCard";

const ProductScrollSection = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      className="pr-6  pb-6 w-full "
    >
      {products.map((item, index) => (
        <View key={index}  style={{width:widthPercentageToDP(50),marginLeft:24} }><ProductCard product={item} /></View>
      ))}
      <View style={{ width: 24 }}></View>
    </ScrollView>
  );
};

export default ProductScrollSection;
