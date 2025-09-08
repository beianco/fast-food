import { router } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

const SignUpScreen = () => {
  return (
    <View>
      <Text>SignUpScreen</Text>
      <Button title="Sign In" onPress={() => router.push("/sign-in")} />
    </View>
  );
};

export default SignUpScreen;
