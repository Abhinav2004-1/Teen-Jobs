import React, { useEffect, useRef } from "react";
import Animated from "react-native-reanimated";
import {} from "react-native-paper";
import { StyleSheet, Dimensions, KeyboardAvoidingView, Platform } from "react-native";

const { Value, spring } = Animated;
const { width, height } = Dimensions.get("window");

const CredentialCard: React.FC<any> = (props) => {
  const Container = useRef(new Value(0.5)).current;

  useEffect(() => {
    spring(Container, {
      damping: 18,
      mass: 1,
      stiffness: 150,
      overshootClamping: false,
      restSpeedThreshold: 0.001,
      restDisplacementThreshold: 0.001,
      toValue: 0.98,
    }).start();
  }, []);

  return (
    <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? 'position' : "height"} keyboardVerticalOffset={80} style={{maxHeight: 500}}>
      <Animated.ScrollView
        style={[Styles.Container, { transform: [{ scale: Container }] }]}
      >
        {props.children}
      </Animated.ScrollView>
    </KeyboardAvoidingView>
  );
};

const Styles = StyleSheet.create({
  Container: {
    width: width * (2.85 / 3),
    borderRadius: 10,
    backgroundColor: 'rgb(224, 224, 224)',
    marginTop: 5,
    overflow: 'hidden'
  },
});

export default CredentialCard;
