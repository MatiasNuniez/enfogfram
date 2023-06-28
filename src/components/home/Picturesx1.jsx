import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import img from '../../../assets/Imgs-profile/img1.jpg'

const Picturesx1 = () => {

  const [images, setImages] = useState([]);


  const getSize = async () => {

    try {

      const res = await fetch('http://192.168.1.2:3001');
      const data = await res.json();
      var cont = parseInt(data)
      var array = [{}]
      for (let index = 0; index < cont; index++) {
        array.push(index)
      }
      setImages(array)
      console.log(images);
    } catch (error) {

      console.error(error);

    }
  }

  useEffect(() => {
    getSize()
  }, [])


  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        width: '100%',
        height: 'auto'
      }}
    >

      <View style={{
        width: '100%',
        height: 'auto',
        backgroundColor: 'white',
        flexWrap: 'wrap',
        flexDirection: 'column'
      }}>
        <View style={{ width: '100vh', height: 320, marginTop:1}}>
          <Image source={img} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
        </View>
        <View style={{ width: '100vh', height: 320 , marginTop:1}}>
          <Image source={img} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
        </View>
        <View style={{ width: '100vh', height: 320, marginTop:1}}>
          <Image source={img} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
        </View>
        <View style={{ width: '100vh', height: 320 , marginTop:1}}>
          <Image source={img} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
        </View>

      </View>

    </ScrollView>
  )
}

export default Picturesx1;