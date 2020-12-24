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
const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signup(user);
    if (authStore.user) navigation.replace("Signin");
  };
  return (
    <AuthContainer>
      <AuthTitle>Signup</AuthTitle>
      <AuthTextInput
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="Username"
      />
      <AuthTextInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
      />
      <AuthTextInput
        onChangeText={(firstName) => setUser({ ...user, firstName })}
        placeholder="First name"
      />
      <AuthTextInput
        onChangeText={(lastName) => setUser({ ...user, lastName })}
        placeholder="Last name"
      />
      <AuthTextInput
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder="email"
      />
      <AuthOther onPress={() => navigation.navigate("Signin")}>
        Click here to Login !
      </AuthOther>
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign up</AuthButtonText>
      </AuthButton>
    </AuthContainer>
  );
};

export default observer(Signup);
