import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const DividerWithTitle = ({
  title,
  seeAll,
}: {
  title: string;
  seeAll: boolean;
}) => {
  return (
    <View className="mx-6 flex-row  justify-between items-center">
      <Text className="font-bold text-xl">{title}</Text>
      {seeAll ? (
        <Text className="text-primary font-semibold">See all</Text>
      ) : (
        <View>
          <Entypo name="dots-three-horizontal" size={hp(2)} />
        </View>
      )}
    </View>
  );
};

export default DividerWithTitle;
