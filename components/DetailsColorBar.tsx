import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const DetailsColorBar = () => {
  const [active, setActive] = useState(0);
  return (
    <View className="gap-x-2 flex-row">
      <Pressable
        onPress={() => setActive(0)}
        style={{ height: hp(3.5), aspectRatio: 1, borderRadius: 100 }}
        className={`p-0.5 ${active === 0 && `border-2 border-slate-300`}`}
      >
        <View className=" h-full aspect-square bg-slate-300 rounded-full" />
      </Pressable>
      <Pressable
        onPress={() => setActive(1)}
        style={{ height: hp(3.5), aspectRatio: 1, borderRadius: 100 }}
        className={`p-0.5 ${active === 1 && `border-2 border-slate-800`}`}
      >
        <View className=" h-full aspect-square bg-slate-800 rounded-full" />
      </Pressable>
      <Pressable
        onPress={() => setActive(2)}
        style={{ height: hp(3.5), aspectRatio: 1, borderRadius: 100 }}
        className={`p-0.5 ${active === 2 && `border-2 border-stone-500`}`}
      >
        <View className=" h-full aspect-square bg-stone-500 rounded-full" />
      </Pressable>
    </View>
  );
};

export default DetailsColorBar;
