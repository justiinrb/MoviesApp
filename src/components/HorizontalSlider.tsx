import React from 'react'
import { Movie } from '../interface/movieInterface';
import { View, Text } from 'react-native';
import { MoviePoster } from './MoviePoster';
import { FlatList } from 'react-native-gesture-handler';


interface Props {
    title?:string;
    movie: Movie[]
}
export const HorizontalSlider = ({title, movie}:Props) => {
  
    return(
            
    <View style={{
    //backgroundColor:'red' 
    height : (title) ? 260 : 217
    }}>

   
   {
       title && <Text style={{fontSize: 30, fontWeight:'bold', marginLeft:10}}>{title}</Text>
   }

   <FlatList
   data={movie}
   renderItem={({item}:any)=> (
      < MoviePoster movie ={item} width={140} height={190}/>
   )}
   keyExtractor={(item)=>item.id.toString()}
   horizontal={true}
   showsHorizontalScrollIndicator={false}
   />
  </View>


    )
   
}
