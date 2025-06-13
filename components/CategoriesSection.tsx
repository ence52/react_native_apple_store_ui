import { categories } from "@/data/CategoryData";
import React from "react";
import { ScrollView, Text } from "react-native";

const CategoriesSection = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((item, index) => (
        <Text
          key={index}
          className="bg-white px-8 rounded-lg py-3 ml-6 shadow-xl shadow-black/5"
        >
          {item}
        </Text>
      ))}
    </ScrollView>
  );
};

export default CategoriesSection;
