import { ImageRequireSource } from "react-native";

export type Product = {
  id: number;
  brand: string;
  title: string;
  miniDesc: string;
  price: number;
  photoUrl: ImageRequireSource;
};
