import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { destinations } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { HeartIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const Destination = () => {
  const navigation = useNavigation();
  return (
    <View className="mx-4 flex-row justify-between flex-wrap">
      {destinations.map((item, index) => {
        return (
          <DestinationCard navigation={navigation} item={item} key={index} />
        );
      })}
    </View>
  );
};

export default Destination;

const DestinationCard = ({ item, navigation }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <TouchableOpacity
      style={{ width: wp(44), height: wp(65) }}
      className="flex justify-end relative p-4 py-6 space-y-2 mb-5"
      onPress={() => navigation.navigate("Destination", { ...item })}
    >
      <Image
        source={{ uri: item.image }}
        style={{ width: wp(44), height: wp(65), borderRadius: 35 }}
        className="absolute"
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={{
          width: wp(44),
          height: hp(15),
          borderBottomLeftRadius: 35,
          borderBottomRightRadius: 35,
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        className="absolute bottom-0"
      />
      <TouchableOpacity
        onPress={() => setIsFavourite(!isFavourite)}
        className="absolute top-1 right-3 rounded-full p-3"
        style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
      >
        <HeartIcon size={wp(5)} color={isFavourite ? "red" : "white"} />
      </TouchableOpacity>
      <Text className="text-white font-semibold" style={{ fontSize: wp(4) }}>
        {item.title}
      </Text>
      <Text style={{ fontSize: wp(2.2) }} className="text-white">
        {item.shortDescription}
      </Text>
    </TouchableOpacity>
  );
};
