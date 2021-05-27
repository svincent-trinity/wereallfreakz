import React, { useState } from "react";
import { StyleSheet, Image, Text, SafeAreaView, Button, View } from "react-native";
import EmojiSelector from "react-native-emoji-selector";


export const EmojiPickerView = ({ navigation }) => {
  // In here we are soring our currently picked emoji.
  const [chosenEmoji, setEmoji] = useState(null);
  // This method will be called when our user selects an emoji
  const handleEmojiSelected = emoji => {
    setEmoji(emoji);
  };
  // This method will be called when our user wants to continue with
  // currently selected emoji - this method will do nothing if user
  // didn't pick an emoji.
  const handleContinueButton = () => {
    if (true) {
      navigation.replace("We're All Freaks", { emoji: null });
    }



  };



  return (
  <SafeAreaView style={
    {flexDirection: "column"},
    {alignItems: "center"},
    {width: "100%"},
    {height: "100%"},
    { 
      background: require('../assets/beginBackground.png')
    }}>

    <View style={styles.topContainer}>

        <Text style={styles.hint}>
          We're All Freakz!
        </Text>


        <Button
          // If user haven't chosen an emoji, we disable the continue button
          disabled={chosenEmoji !== null}
          style={styles.continueButton}
          title="Enter the experience!"
          onPress={handleContinueButton}
        />


      </View>

    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  topContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "50%"
  },
  hint: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 32
  },
  continueButton: {
    marginVertical: 64,
    width: 300
  },
  emojiContainer: {
    width: 64,
    height: 64,
    marginVertical: 32
  },
  emoji: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 60
  },
  empty: {
    borderWidth: 5,
    borderStyle: "dashed",
    borderColor: "rgba(0, 0, 0, 0.2)"
  }
});