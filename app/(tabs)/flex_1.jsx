import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const flex_1 = () => {
  return (
    <View style={styles.main_container}>

      {/*1st Layer*/}
      <View style={styles.container_1}>
        <View style={styles.boxOne}></View>
        <View style={styles.boxTwo}></View>
        <View style={styles.boxOne}></View>
      </View>

      {/*2nd Layer*/}
      <View style={styles.container_2}>
        <View style={styles.boxThree}></View>
      </View>

      {/*3rd Layer*/}
      <View style={styles.container_3}>
        <View style={styles.boxFour}></View>
        <View style={styles.boxFour}></View>
      </View>

      {/*4th Layer*/}
      <View style={styles.container_4}>

        <View style={styles.boxContainer_1}>

          <View style={styles.boxContainer_2}>
            <View style={styles.boxFive}></View>
          </View>

          <View style={styles.boxContainer_3}>
              <View style={styles.boxSix}></View>  
              <View style={styles.boxSix}></View>
          </View>

          <View style={styles.boxContainer_4}>

          </View>

          <View style={styles.boxContainer_5}>
            <View style={styles.boxFive}></View>
          </View>

        </View>
      </View>

      {/*5th layer*/}
      <View style={styles.container_5}>
          <View style={styles.boxSeven}></View>
      </View>

    </View>
    
  )
}

export default flex_1

const styles = StyleSheet.create({
  
  //Main Container
  main_container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eee',
  },

  //Sub Containers
  container_1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    paddingTop: 5,
    paddingHorizontal: 5,
  },
  container_2: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  container_3: {
    flex: 2.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    paddingHorizontal: 5,
  },
  container_4: {
    flex: 4.5,
    width: '100%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  container_5: {
    flex: 1.2,
    width: '100%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingBottom: 5,
  },

  //Boxes
  boxOne: {
    width: '25%',
    height: '70%',
    backgroundColor: 'coral',
    borderRadius: 5,
    outlineColor: 'black',
    outlineWidth: 2,
    marginHorizontal: 10,
  },
  boxTwo: {
    flex: 1,
    height: '70%',
    backgroundColor: 'mediumseagreen',
    borderRadius: 5,
    outlineColor: 'black',
    outlineWidth: 2,
  },
  boxThree: {
    width: '95%',
    height: '70%',
    backgroundColor: 'red',
    borderRadius: 5,
    outlineColor: 'black',
    outlineWidth: 2,
  },
  boxFour: {
    width: '45%',
    height: '90%',
    backgroundColor: 'green',
    borderRadius: 5,
    outlineColor: 'black',
    outlineWidth: 2,
    marginHorizontal: 8,
  },
  boxFive: {
    width: '95%',
    height: '75%',
    backgroundColor: 'green',
    borderRadius: 5,
    outlineColor: 'black',
    outlineWidth: 2,
  },
  boxSix: {
    width: '45%',
    height: '75%',
    backgroundColor: 'green',
    borderRadius: 5,
    outlineColor: 'black',
    outlineWidth: 2,
    marginHorizontal: 10,
  },
  boxSeven: {
    width: '95%',
    height: '80%',
    backgroundColor: 'red',
    borderRadius: 5,
    outlineColor: 'black',
    outlineWidth: 2,
  },

  //BoxContainers
  boxContainer_1: {
    width: '95%',
    height: '95%',
    backgroundColor: 'pink',
    borderRadius: 5,
    outlineColor: 'black',
    outlineWidth: 2,
    padding: 5,
  },
  //Sub-BoxContainers
    boxContainer_2: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    boxContainer_3: {
      flex: 2,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    boxContainer_4: {
      flex: 4,
    },
    boxContainer_5: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },

})