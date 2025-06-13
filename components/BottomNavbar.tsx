import { AntDesign, Feather, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const BottomNavbar = () => {
  const [active, setActive] = useState(0);
  return (
    <View
      className="  w-full flex-row  items-center justify-between bg-white pb-4"
      style={{ height: hp(8), paddingHorizontal: wp(10) }}
    >
      <Pressable
        onPress={() => setActive(0)}
        className={` h-full items-center justify-center aspect-[3/4] ${active === 0 ? `border-b-4 border-primary` : `border-b-4 border-transparent`}`}
      >
        <AntDesign
          name="home"
          size={24}
          color={active === 0 ? "#3D5EFE" : "black"}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          setActive(1);
          router.push("/Products");
        }}
        className={` h-full items-center justify-center aspect-[3/4] ${active === 1 ? `border-b-4 border-primary` : `border-b-4 border-transparent`}`}
      >
        <Feather
          name="grid"
          size={24}
          color={active === 1 ? "#3D5EFE" : "black"}
        />
      </Pressable>
      <Pressable
        onPress={() => setActive(2)}
        className={` h-full items-center justify-center aspect-[3/4] ${active === 2 ? `border-b-4 border-primary` : `border-b-4 border-transparent`}`}
      >
        <Ionicons
          name="bag-outline"
          size={24}
          color={active === 2 ? "#3D5EFE" : "black"}
        />
      </Pressable>
      <Pressable
        onPress={() => setActive(3)}
        className={` h-full items-center justify-center aspect-[3/4] ${active === 3 ? `border-b-4 border-primary` : `border-b-4 border-transparent`}`}
      >
        <FontAwesome6
          name="user-circle"
          size={24}
          color={active === 3 ? "#3D5EFE" : "black"}
        />
      </Pressable>
    </View>
  );
};

export default BottomNavbar;
