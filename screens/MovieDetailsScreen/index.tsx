import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator} from "react-native";
import styles from "./style";
import movie from "../../assets/data/movie";
import tw from "tailwind-react-native-classnames";
import RNPickerSelect from 'react-native-picker-select';

import {
    Entypo,
    FontAwesome5,
    Fontisto,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    SimpleLineIcons
} from "@expo/vector-icons";
import EpisodeItem from "../../components/EpisodeItem";
import {Picker} from "@react-native-picker/picker";
import VideoPlayer from "../../components/VideoPlayer";
import set = Reflect.set;
import {Movie, Season} from "../../src/models";
import { DataStore } from 'aws-amplify';
import {useRoute} from "@react-navigation/native";
import { Episode } from '../../src/models';

const firstEpisode = movie.seasons.items[0].episodes.items[0];
const firstSeason = movie.seasons.items[0];


const MovieDetailsScreen = () => {
    const [movie, setMovie] = useState<Movie|undefined>(undefined);
    const [seasons, setSeasons] = useState<Season[]>([]);
    const [episodes, setEpisodes] = useState<Episode[]>([]);

    const [currentSeason, setCurrentSeason] = useState<Season|undefined>(undefined);
    const [currentEpisode, setCurrentEpisode] = useState<Episode|undefined>(undefined);

    // gets seasons array
    const seasonNames = seasons ? seasons.map(season => season.name) : [];

    const placeholder = {
        label: 'Season 1',
        value: null,
        color: '#9EA0A4',
    };

    const route = useRoute();

    // ----------------------------------------- functions -----------------------------------------------------------------

    useEffect(() => {
        const fetchMovie = async() => {
            // @ts-ignore
            setMovie(await DataStore.query(Movie, route?.params?.id));
        }
        fetchMovie();

    }, []);

    console.log(movie);

    useEffect(() => {
        if(!movie) {
            return;
        }
        const fetchSeasons = async () => {
            const movieSeasons = (await DataStore.query(Seasons)).filter(s => s.movie?.id === movie.id)
            // @ts-ignore
            console.log("this is that movie seasons 🔥", movieSeasons);
            setSeasons(movieSeasons);
            setCurrentSeason(movieSeasons[0]);
        }
        fetchSeasons();
    }, [movie]);

    if(!movie) {
        return <ActivityIndicator />
    }




    // console.log("This is seasons >>>>", seasons);


    return (
        <View style={styles.container}>
            {/*<Image style={styles.image} source={{ uri: firstEpisode.poster }} />*/}
    {/*// @ts-ignore*/}
            {currentEpisode ? <VideoPlayer episode={currentEpisode} /> : <VideoPlayer episode={'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'} />  }

            <FlatList
                showsVerticalScrollIndicator={false}
                style={{marginBottom: 241,}}
                data={episodes || firstSeason}
                renderItem={({item}) => (
    // @ts-ignore
                        <EpisodeItem episode={item} onPress={(episode) => {
                            // console.log(episode);
                            setCurrentEpisode(episode);
                     }} />
                    )
                }
                ListHeaderComponent={(
                    <View style={{padding: 12}}>
                        <View  style={tw`text-white`}>
                            <Text style={tw`text-white text-3xl font-bold mt-3 mb-3`}>{movie?.title}</Text>
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

                            <View style={tw`flex flex-row`}>
                                <Text style={tw`text-white font-bold mt-4`}>
                                    EPISODES
                                </Text>

                                <Text style={tw`text-gray-500 font-bold mt-4 ml-4`}>
                                    MORE LIKE THIS
                                </Text>
                            </View>

                            <View style={[tw`mt-2 -mb-7 flex flex-row items-center`]}>
                                {/*<Picker*/}
                                {/*    style={{color: 'white', height: 50, marginTop: -50, marginBottom: 40, padding: -10, width: 150}}*/}
                                {/*    selectedValue={'a'}*/}
                                {/*    onValueChange={(itemValue, itemIndex) => {}}>*/}
                                {/*    {seasonNames.map(seasonName => (*/}
                                {/*        <Picker.Item label={seasonName} value={seasonName} key={seasonName} />*/}
                                {/*    ))}*/}
                                {/*</Picker>*/}

                                {/*<View style={tw`mt-3 font-bold`}>*/}
                                {/*    <Text style={tw`text-white font-bold -mb-24`}>Season 1</Text>*/}
                                {/*</View>*/}

                                {currentSeason ? (
                                <RNPickerSelect
                                    onValueChange={(itemValue, itemPosition) => {
                                        // setCurrentSeason(movie?.seasons?.items[itemPosition])
                                    }}
                                    placeholder={placeholder}
                                    items={[
                                        { label: 'Season 1', value: 'Season 1', color: 'black' },
                                        { label: 'Season 2', value: 'Season 2', color: 'black'  },
                                    ]}
                                    />

                                ) : (
                                    <RNPickerSelect
                                        onValueChange={(itemValue, itemPosition) => {
                                            setCurrentSeason(seasons[itemPosition]);
                                        }}
                                        placeholder={placeholder}
                                        items={[
                                            { label: 'Just one season', value: 'One season', color: 'black' },
                                        ]}
                                    />
                                )}

                                <Entypo style={tw`-mt-1 ml-3`} name="chevron-small-down" size={24} color="white" />
                            </View>
                        </View>

                    </View>
                )}
            />

        </View>
    );
};

export default MovieDetailsScreen;
