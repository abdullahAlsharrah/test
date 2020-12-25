import React, { useState } from "react";
import {
  AuthContainer,
  AuthTitle,
  AuthButton,
  AuthButtonText,
  AuthTextInput,
  AuthOther,
} from "../../styles";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";
const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signin(user);
  };
  if (authStore.user) navigation.replace("TripList");
  return (
    <AuthContainer>
      <AuthTitle>Signin</AuthTitle>
      <AuthTextInput
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="Username"
        autoCapitalize={false}
      />
      <AuthTextInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
      />
      <AuthOther onPress={() => navigation.navigate("Signup")}>
        Click here to register!
      </AuthOther>
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButton>
    </AuthContainer>
  );
};

export default observer(Signin);
