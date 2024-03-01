import {
  View,
  Image,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { Background } from "./Background";
import { useState } from "react";

export const RegistrationScreen = () => {
  const [loginIsFocused, setLoginIsFocused] = useState(false);
  const [emailIsFocused, setEmailIsFocused] = useState(false);
  const [passwordIsFocused, setPasswordIsFocused] = useState(false);

  return (
    <Background>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image />
          <View style={styles.imageButton}>
            <Svg width="25" height="25" viewBox="0 0 25 25">
              <Circle
                cx="12.500000"
                cy="12.500000"
                r="12.000000"
                fill="#FFFFFF"
                stroke="#FF6C00"
                stroke-opacity="1.000000"
                stroke-width="1.000000"
              />
              <Path
                d="M13 6L12 6L12 12L6 12L6 13L12 13L12 19L13 19L13 13L19 13L19 12L13 12L13 6Z"
                clip-rule="evenodd"
                fill="#FF6C00"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
            </Svg>
          </View>
        </View>
        <Text style={styles.title}>Реєстрація</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Логін"
            style={loginIsFocused ? styles.focusedInput : styles.input}
            onFocus={() => setLoginIsFocused(true)}
            onBlur={() => setLoginIsFocused(false)}
            placeholderTextColor={"rgb(189, 189, 189)"}
          />
          <TextInput
            placeholder="Адреса електронної пошти"
            style={emailIsFocused ? styles.focusedInput : styles.input}
            onFocus={() => setEmailIsFocused(true)}
            onBlur={() => setEmailIsFocused(false)}
            placeholderTextColor={"rgb(189, 189, 189)"}
          />
          <View style={styles.passwordWrapper}>
            <TextInput
              placeholder="Пароль"
              secureTextEntry={true}
              style={passwordIsFocused ? styles.focusedInput : styles.input}
              onFocus={() => setPasswordIsFocused(true)}
              onBlur={() => setPasswordIsFocused(false)}
              placeholderTextColor={"rgb(189, 189, 189)"}
            />
            <Pressable style={styles.passwordTextWrapper}>
              <Text style={styles.text}>Показати</Text>
            </Pressable>
          </View>
        </View>
        <Pressable style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Зареєстуватися</Text>
        </Pressable>
        <Text style={styles.text}>Вже є акаунт? Увійти</Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    position: "relative",
    alignItems: "center",
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
  },
  imageContainer: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  imageButton: {
    position: "absolute",
    width: 25,
    height: 25,
    right: -12,
    top: 81,
  },
  title: {
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 32,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "rgb(232, 232, 232)",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "rgb(246, 246, 246)",
    padding: 16,
    fontFamily: "Roboto-Light",
    fontSize: 16,
    lineHeight: 19,
  },
  focusedInput: {
    width: "100%",
    height: 50,
    borderColor: "#FF6C00",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "rgb(246, 246, 246)",
    padding: 16,
    fontFamily: "Roboto-Light",
    fontSize: 16,
    lineHeight: 19,
  },
  inputWrapper: {
    width: "100%",
    gap: 16,
    marginBottom: 43,
  },
  submitButton: {
    width: "100%",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 16,
  },
  submitButtonText: {
    fontFamily: "Roboto-Light",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  text: {
    fontFamily: "Roboto-Light",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  passwordWrapper: {
    position: "relative",
  },
  passwordTextWrapper: {
    position: "absolute",
    top: 14,
    right: 16,
  },
});
