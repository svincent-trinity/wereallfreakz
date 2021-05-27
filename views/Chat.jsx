import React, { useEffect, useState } from "react";
import {Image} from "react-native";
import BackgroundImg from "./beginBackground.png";

import Button1 from "../assets/buttons/button1.png";
import Button2 from "../assets/buttons/button2.png";
import Button3 from "../assets/buttons/button3.png";
import Button4 from "../assets/buttons/button4.png";

import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard
} from "react-native";

import { usePubNub } from "pubnub-react";

export const ChatView = ({ route }) => {
  // The `route` prop will be bassed to us thanks to React Navigation.
  // It will contain our emoji in `route.params.emoji`.
  const userEmoji = route.params.emoji;

  // Here we obtain our PubNub instance thanks to using the provider
  const pubnub = usePubNub();

  // In next two statements we define the state needed for our chat
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [internalMsgs, setInternalMsgs] = useState([]);

  const [disableStuff, setDisableStuff] = useState(false);

  if(messages != internalMsgs && messages.length > 0 && messages[messages.length-1].content === "NEW") {
    setDisableStuff(false);
    setInternalMsgs(messages);
  }
  // First we need to set our PubNub UUID and subscribe to chat channel.
  // We will use `useEffect` hook for that.
  useEffect(() => {
    // We need to make sure that PubNub is defined
    if (pubnub) {
      // Set the UUID of our user to their chosen emoji
      pubnub.setUUID(userEmoji);

      // Create a listener that will push new messages to our `messages` variable
      // using the `setMessages` function.
      const listener = {
        message: envelope => {
          setMessages(msgs => [
            ...msgs,
            {
              id: envelope.message.id,
              author: envelope.publisher,
              content: envelope.message.content,
              timetoken: envelope.timetoken
            }


          ]);

        }


      };

      // Add the listener to pubnub instance and subscribe to `chat` channel.
      pubnub.addListener(listener);
      pubnub.subscribe({ channels: ["vote_chan"] });

      // We need to return a function that will handle unsubscription on unmount
      return () => {
        pubnub.removeListener(listener);
        pubnub.unsubscribeAll();
      };
    }
  }, [pubnub]);

  // This function handles sending messages.
  const handleSubmit = () => {
    // Clear the input field.
    setInput("");

    // Create the message with random `id`.
    const message = {
      content: "Lyric:" + input,
      id: Math.random()
        .toString(16)
        .substr(2)
    };


    // Publish our message to the channel `chat`
    pubnub.publish({ channel: "vote_chan", message });
  };

  // This function handles sending messages.
  const handleSubmitButton1 = () => {
    // Clear the input field.
    setInput("");

    // Create the message with random `id`.
    const message = {
      content: "one",
      id: Math.random()
        .toString(16)
        .substr(2)
    };
    setDisableStuff(true)

    // Publish our message to the channel `chat`
    pubnub.publish({ channel: "vote_chan", message });
  };
  // This function handles sending messages.
  const handleSubmitButton2 = () => {
    // Clear the input field.
    setInput("");

    // Create the message with random `id`.
    const message = {
      content: "two",
      id: Math.random()
        .toString(16)
        .substr(2)
    };
    setDisableStuff(true)

    // Publish our message to the channel `chat`
    pubnub.publish({ channel: "vote_chan", message });
  };
  // This function handles sending messages.
  const handleSubmitButton3 = () => {
    // Clear the input field.
    setInput("");

    // Create the message with random `id`.
    const message = {
      content: "three",
      id: Math.random()
        .toString(16)
        .substr(2)
    };
    setDisableStuff(true);

    // Publish our message to the channel `chat`
    pubnub.publish({ channel: "vote_chan", message });
  };
  // This function handles sending messages.
  const handleSubmitButton4 = () => {
    // Clear the input field.
    setInput("");

    // Create the message with random `id`.
    const message = {
      content: "four",
      id: Math.random()
        .toString(16)
        .substr(2)
    };
    setDisableStuff(true);
    // Publish our message to the channel `chat`
    pubnub.publish({ channel: "vote_chan", message });
  };

  return (

    <SafeAreaView       style={
    {flexDirection: "column"},
    {position: "fixed"},
    {alignItems: "center"},
    {width: "100%"},
    {height: "100%"}
    }
    >

    <View style={styles.bottomContainer}>
          <TextInput
            style={styles.textInput}
            value={input}
            onChangeText={setInput}
            onSubmitEditing={handleSubmit}
            returnKeyType="send"
            enablesReturnKeyAutomatically={true}
            placeholder="Type your thoughtzzz here..."
          />

        </View>
      <View
        style={styles.innerContainer}
      >
        <View style={styles.button1Style}>
          {messages.length > 3 && <Image style={styles.ButtonPicStyles} source={require('../assets/buttons/button1.png')}/> && messages.filter(e => e.content.includes(":,")).slice(messages.filter(e => e.content.includes(":,")).length-4, messages.filter(e => e.content.includes(":,")).length).map(message => (
            message.content.includes("a:,") && <Button
              title= {message.content.substring(3)}
              onPress={handleSubmitButton1}
              disabled = {disableStuff}
            />
          ))}
          </View>
        <View style={styles.button2Style}>
          {messages.length > 3 && messages.filter(e => e.content.includes(":,")).slice(messages.filter(e => e.content.includes(":,")).length-4, messages.filter(e => e.content.includes(":,")).length).map(message => (
            message.content.includes("b:,") && <Button
              title= {message.content.substring(3)}
              onPress={handleSubmitButton2}
              disabled = {disableStuff}

            /> 
          ))}
          </View>
          <View style={styles.button3Style}>
          {messages.length > 3 && messages.filter(e => e.content.includes(":,")).slice(messages.filter(e => e.content.includes(":,")).length-4, messages.filter(e => e.content.includes(":,")).length).map(message => (
            message.content.includes("c:,") && <Button
              title= {message.content.substring(3)}
              onPress={handleSubmitButton3}
              disabled = {disableStuff}

            /> 
          ))}
          </View>
        <View style={styles.button4Style}>
          {messages.length > 3 && messages.filter(e => e.content.includes(":,")).slice(messages.filter(e => e.content.includes(":,")).length-4, messages.filter(e => e.content.includes(":,")).length).map(message => (
            message.content.includes("d:,") && <Button
              title= {message.content.substring(3)}
              onPress={handleSubmitButton4}
              disabled = {disableStuff}

            />
          ))}
          </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonPicStyles: {
     zIndex: 0
  },
  outerContainer: {
    width: "100%",
    height: "100%",
  },
  backImg: {
     position: "absolute",
    width: "100%",
     height: "100%",
  },

  button1Style: {
    width: "100%",
    paddingHorizontal: 16
  },
  button2Style: {
    width: "100%",
    paddingHorizontal: 16
  },
  button3Style: {
    width: "100%",
    paddingHorizontal: 16
  },
  button4Style: {
    width: "100%",
    paddingHorizontal: 16
  },
  bottomContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 16
  },
  textInput: {
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 16,
    elevation: 2
  }
});