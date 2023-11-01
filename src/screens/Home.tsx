import React from 'react'
import { ActivityIndicator, Dimensions, FlatList, Text, View, ScrollView } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';





const {width:windowWidth} = Dimensions.get('window')
export const Home = () => {

 const {nowPlaying,popular,topRated,upcoming,isLoading} = useMovies();

 //espacio en el touch 
 const {top} = useSafeAreaInsets()

 if(isLoading){
  return(

    //Flex se expande todo el tamano 
    <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}> 
    <ActivityIndicator color={ 'red'} size={50}/>
    </View>
  
  )
  
 }
 console.log(nowPlaying[0]?.title)
  return (

    <ScrollView>
    <View style={{marginTop: top + 20 }}> 
     
     {/* carousel Principal */}
   <View
   style={{height:430,}}>
   <Carousel
    data={nowPlaying}
    //si tengo solo una propiedad no esta mal dejarlo asi el render
    renderItem={({item}:any)=>  < MoviePoster movie ={item}/>}
    sliderWidth={windowWidth}
    itemWidth={300}
    inactiveSlideOpacity={0.9}
    />
   </View>

   <HorizontalSlider title=' Populares ' movie={popular} />
   <HorizontalSlider title=' Top Rated ' movie={topRated} />
   <HorizontalSlider title=' Upcoming ' movie={upcoming} />
   
   

    </View>
    </ScrollView>
  )
}
