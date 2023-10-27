import * as React from 'react'
import { 
  Platform,
  SafeAreaView, 
  ScrollView, 
  StyleSheet,
  RefreshControl
 } from 'react-native';
import { Text, View } from '../../components/Themed';
import Lottie from "lottie-react-native";
import { createRandomUser } from '../../utils/generate-dummy-data';
import { ThreadsContext } from '../../context/threads-context';

const user = createRandomUser();

console.log(JSON.stringify(user, null, 2))


export default function TabOneScreen() {
  const animationRef = React.useRef<Lottie>(null)

  const thread = React.useContext(ThreadsContext)
  return (
    <SafeAreaView>
      <ScrollView
      contentContainerStyle = {{
        paddingHorizontal: 10,
        
      }}

      refreshControl={
        <RefreshControl refreshing = {false} 
        onRefresh={()=> {animationRef.current?.play()}}
        tintColor={"transparent"}/>}
      >
        <Lottie 
          ref = {animationRef}
          source = {require("../../lottie-animations/threads.json")}
          loop = {false}
          autoPlay
          style ={{
            width: 90,
            height: 90,
            alignSelf: "center",
          }}

        />
        {threads.map((thread) => (<text>{thread.author.name}</text>))}
      </ScrollView>
    </SafeAreaView>
  );
}

