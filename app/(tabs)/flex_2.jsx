import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const flex_2 = () => {
  return (
    <View style={styles.main_container}>

      <View style={styles.container_1}>
        <View style={styles.boxOne}></View>
      </View>

      <View style={styles.container_2}>

        <View style={styles.boxContainer_1}>
          <View style={styles.boxTwo}></View>
          <View style={styles.boxTwo}></View>
        </View>

        <View style={styles.boxContainer_1}>
          <View style={styles.boxTwo}></View>
          <View style={styles.boxTwo}></View>
        </View>

      </View>

      <View style={styles.container_3}>
        <View style={styles.boxThree}></View>
        <View style={styles.boxThree}></View>
      </View>

      <View style={styles.container_4}>
        <View style={styles.boxFour}></View>
        <View style={styles.boxFour}></View>
        <View style={styles.boxFour}></View>
        <View style={styles.boxFour}></View>
      </View>

      <View style={styles.container_5}>
        <View style={styles.boxFive}></View>
      </View>
    </View>
  )
}

export default flex_2

const styles = StyleSheet.create({
  
  main_container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eee',
  },

  container_1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    paddingHorizontal: 5,
  },

  container_2: {
    flex: 4,
    flexDirection: 'column',
    paddingHorizontal: 5,
  },

  container_3: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },

  container_4: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },

  container_5: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingBottom: 5,
  },

  boxOne: {
    width: '95%',
    height: '70%',
    backgroundColor: 'coral',
    borderRadius: 5,
    outlineColor: 'black',
    outlineWidth: 2,
    marginHorizontal: 10,
  },
  boxTwo: {
    width: '45%',
    height: '90%',
    backgroundColor: 'blue',
    borderRadius: 8,
    marginHorizontal: 10,
    outlineColor: 'black',
    outlineWidth: 2,

  },
  boxThree: {
    width: '95%',
    height: '35%',
    backgroundColor: 'coral',
    borderRadius: 5,
    outlineColor: 'black',
    outlineWidth: 2,
    marginVertical: 10,
    
  },
  boxFour: {
    width: '20%',
    height: '80%',
    backgroundColor: '#00ffff',
    borderRadius: 5,
    outlineColor: 'black',
    outlineWidth: 2,
    marginHorizontal: 10,
  },
  boxFive: {
    width: '95%',
    height: '90%',
    backgroundColor: '#2a3fff',
    borderRadius: 5,
    outlineColor: 'black',
    outlineWidth: 2,
  },

  boxContainer_1: {
    flexDirection: 'row',
    height: '50%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }

})