import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from "react-native";
import styles from "./style";
import movie from "../../assets/data/movie";
import tw from "tailwind-react-native-classnames";
import {
    FontAwesome5,
    Fontisto,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    SimpleLineIcons
} from "@expo/vector-icons";
import EpisodeItem from "../../components/EpisodeItem";

const firstEpisode = movie.seasons.items[0].episodes.items[0];
const firstSeason = movie.seasons.items[0];


const MovieDetailsScreen = () => {
    // console.log(firstEpisode)
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: firstEpisode.poster }} />
    <View style={{padding: 12}}>
            <View  style={tw`text-white`}>
                <Text style={tw`text-white text-3xl font-bold mt-3 mb-3`}>{movie.title}</Text>
            </View>

            <View style={tw`flex flex-row items-center`}>
                <Text style={tw`text-green-500 font-bold`}>98% match</Text>
                <Text style={tw`text-gray-500 ml-5`}>{movie?.year}</Text>
                <View style={tw`ml-3 bg-yellow-300 items-center justify-center px-2 py-1 rounded-md`}>
                    <Text style={tw`text-gray-900 font-bold`}>12+</Text>
                </View>

                <Text style={tw`text-gray-500 ml-3 mr-3`}>{movie?.numberOfSeasons} seasons</Text>

                <View style={tw`flex flex-row items-center`}>
                    <MaterialIcons name="hd" size={27} color="gray" />
                    <MaterialCommunityIcons name="video-4k-box" size={27} color="gray" />
                </View>
            </View>

            <View style={tw``}>
                {/* play button*/}
                <TouchableOpacity activeOpacity={0.8} onPress={() => console.log("Pressed")}>
                      <View style={[styles.icon, tw`bg-white flex flex-row items-center justify-center rounded-md mb-3 mt-3`]}>
                          <FontAwesome5 style={tw`mr-2`}  name="play" size={14} color="black" />
                          <Text style={tw`font-bold`}>Play</Text>
                      </View>
                </TouchableOpacity>

                {/* download button*/}
                <TouchableOpacity activeOpacity={0.8} onPress={() => console.log("Pressed")}>
                    <View style={tw`bg-gray-800 flex flex-row items-center justify-center py-2 rounded-md mb-3`}>
                        <Ionicons style={tw`mr-2`} name="ios-download-outline" size={22} color="white" />
                        <Text style={tw`text-white font-bold`}>Download</Text>
                    </View>
                </TouchableOpacity>


                <View style={tw``}>
                    <Text style={tw`text-gray-100 mt-1`}>{movie.plot || 'Something'}</Text>
                    <Text style={tw`text-gray-500 mt-3`}>Cast: {movie?.cast}</Text>
                    <Text style={tw`text-gray-500 mt-1`}>Creator: {movie?.creator}</Text>
                </View>

                <View style={tw` flex flex-row mt-4`}>
                    <View style={tw`flex flex-col items-center ml-4 mr-6`}>
                        <Fontisto name="plus-a" size={21} color="white" />
                        <Text style={tw`text-gray-500 mt-2`}>My List</Text>
                    </View>

                    <View style={tw`flex flex-col items-center mx-6`}>
                        <MaterialIcons name="rate-review" size={21} color="white" />
                        <Text style={tw`text-gray-500 mt-2`}>Rate</Text>
                    </View>

                    <View style={tw`flex flex-col items-center mx-6`}>
                        <SimpleLineIcons name="paper-plane" size={21} color="white" />
                        <Text style={tw`text-gray-500 mt-2`}>My List</Text>
                    </View>

                </View>
            </View>

        <FlatList
            data={movie.seasons}
        />
        <EpisodeItem episode={firstEpisode} />

        </View>
        </View>
    );
};

export default MovieDetailsScreen;
