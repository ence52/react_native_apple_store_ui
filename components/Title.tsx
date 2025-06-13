import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
const Title = () => {
  return (
    <View className="mx-6  flex-row items-center justify-between mt-6">
      <View>
        <Text className="font-semibold text-gray-500">
          Select best products
        </Text>
        <Text className="font-bold text-3xl">For your work!</Text>
      </View>
      <ImageBackground
        style={{ height: hp(4), aspectRatio: 1 ,}}
        resizeMode="cover"
        imageStyle={{borderRadius:8}}
        source={{uri:"https://imagedelivery.net/LBWXYQ-XnKSYxbZ-NuYGqQ/f69f1ba2-802c-4160-b24f-e54c5cffc200/avatarhd"}}
      />
    </View>
  );
};

export default Title;
