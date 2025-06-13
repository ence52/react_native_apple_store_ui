import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
const SearchBar = () => {
  return (
    <View
      style={{ height: hp(6) }}
      className="bg-white mx-6 flex-row rounded-xl "
    >
      <TextInput
        className="flex-1 px-6 text-md font-semibold "
        placeholder="Search Here..."
        placeholderTextColor={"gray"}
      />
      <View
        style={{ height: hp(6), aspectRatio: 1 }}
        className=" bg-primary rounded-xl justify-center items-center"
      >
        <AntDesign name="search1" size={hp(3)} color={"white"} />
      </View>
    </View>
  );
};

export default SearchBar;
