import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Categories from "../components/categories";
import { SafeAreaView } from "react-native-safe-area-context";
import SortCategories from "../components/sortCategories";
import Destination from "../components/destination";

const ios = Platform.OS == "ios";
const topMargin = ios ? "mt-3" : "mt-10";
const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white mt-5">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className={"space-y-6" + topMargin}
      >
        <View className="mx-5 flex-row justify-between items-center mb-10">
          <Text
            className="font-bold text-neutral-700"
            style={{ fontSize: wp(7) }}
          >
            Let's Discover!
          </Text>
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=626&ext=jpg&ga=GA1.1.695140665.1704180040&semt=sph",
              }}
              style={{ height: wp(12), width: wp(12) }}
            />
          </TouchableOpacity>
        </View>

        <View className="mx-5 mb-4">
          <View className="flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6">
            <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
            <TextInput
              placeholder="Search destination"
              placeholderTextColor={"gray"}
              className="flex-1 text-base mb-1 pl-1 tracking-wider"
            />
          </View>
        </View>
        <View className="mb-4">
          <Categories />
        </View>
        <View className="mb-4">
          <SortCategories />
        </View>
        <View className="mb-4">
          <Destination />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
