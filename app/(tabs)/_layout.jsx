import { StyleSheet, Text, View } from 'react-native'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'

const tabLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
            }}
        />

        <Tabs.Screen
            name="flex_1"
            options={{
                title: 'Flex 1',
                tabBarIcon: ({ color }) => <Ionicons size={28} name="apps-outline" color={color} />,
            }}
        />

        <Tabs.Screen
            name="flex_2"
            options={{
                title: 'Flex 2',    
                tabBarIcon: ({ color }) => <Ionicons size={28} name="apps-outline" color={color} />,
            }}
        />

        <Tabs.Screen
            name="_Layout"
            options={{
                href: null,
            }}
        />
    </Tabs>
  )
}

export default tabLayout

const styles = StyleSheet.create({})