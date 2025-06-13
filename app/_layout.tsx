import BottomNavbar from "@/components/BottomNavbar";
import { Slot } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "../global.css";
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className=" bg-background  flex-1">
        <Slot screenOptions={{ headerShown: false }} />
        <BottomNavbar />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
