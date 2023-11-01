import React from 'react'
import { Image,StyleSheet,Text, View } from 'react-native'
import { Movie } from '../interface/movieInterface'


interface Props{
    movie:Movie
    height?:number,
    width?:number
}
export const MoviePoster = ({movie, height = 420,width = 300}:Props) => {

    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    
    console.log(movie.poster_path)
  return (
    //ocupa todo el tamano de la imagen
    <View style={{
      width,
      height,
      marginHorizontal:8
    }}>
      
      <View
      style={style.imageContainer}
      >
      <Image
        source={{uri}}
        style={style.image}

        />
      </View>
      

      
        
    </View>
  )
}

const style = StyleSheet.create({ 

  image :{
    //Flex ocupa todo el espacio del tamano puesto 
    flex:1,
    borderRadius:18
  },
  imageContainer:{
    flex:1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

elevation: 16,
  }
 
    
})