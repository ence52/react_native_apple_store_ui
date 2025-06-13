import CategoriesSection from "@/components/CategoriesSection";
import DividerWithTitle from "@/components/DividerWithTitle";
import ProductScrollSection from "@/components/ProductScrollSection";
import SearchBar from "@/components/SearchBar";
import Title from "@/components/Title";
import { ScrollView, View } from "react-native";
export default function Index() {
  return (
    <ScrollView>
      <View className="flex-col gap-y-4">
        <Title />
        <SearchBar />
        <DividerWithTitle title="Popular Products" seeAll={false} />
        <ProductScrollSection />
        <DividerWithTitle title="Categories" seeAll={true} />
        <CategoriesSection />
        <DividerWithTitle title="Recent Viewed" seeAll={false} />
        <ProductScrollSection />
      </View>
    </ScrollView>
  );
}
