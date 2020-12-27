// import React, { Fragment, Component } from "react";
// import ImagePicker from "react-native-image-picker";
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   Image,
//   Button,
//   Dimensions,
//   TouchableOpacity,
// } from "react-native";
// import HasanImage from "../img/hasanlogo.png";

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from "react-native/Libraries/NewAppScreen";
// import NavigationFooter from "./Navigation/NavigationFooter";

// const options = {
//   title: "Select Avatar",
//   customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
//   storageOptions: {
//     skipBackup: true,
//     path: "images",
//   },
// };
// export default class profile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filepath: {
//         data: "",
//         uri: "",
//       },
//       fileData: "",
//       fileUri: "",
//     };
//   }

//   chooseImage = () => {
//     let options = {
//       title: "Select Image",
//       customButtons: [
//         { name: "customOptionKey", title: "Choose Photo from Custom Option" },
//       ],
//       storageOptions: {
//         skipBackup: true,
//         path: "images",
//       },
//     };
//     ImagePicker.showImagePicker(options, (response) => {
//       console.log("Response = ", response);

//       if (response.didCancel) {
//         console.log("User cancelled image picker");
//       } else if (response.error) {
//         console.log("ImagePicker Error: ", response.error);
//       } else if (response.customButton) {
//         console.log("User tapped custom button: ", response.customButton);
//         alert(response.customButton);
//       } else {
//         const source = { uri: response.uri };

//         // You can also display the image using data:
//         // const source = { uri: 'data:image/jpeg;base64,' + response.data };
//         // alert(JSON.stringify(response));s
//         console.log("response", JSON.stringify(response));
//         this.setState({
//           filePath: response,
//           fileData: response.data,
//           fileUri: response.uri,
//         });
//       }
//     });
//   };

//   launchCamera = () => {
//     let options = {
//       storageOptions: {
//         skipBackup: true,
//         path: "images",
//       },
//     };
//     ImagePicker.launchCamera(options, (response) => {
//       console.log("Response = ", response);

//       if (response.didCancel) {
//         console.log("User cancelled image picker");
//       } else if (response.error) {
//         console.log("ImagePicker Error: ", response.error);
//       } else if (response.customButton) {
//         console.log("User tapped custom button: ", response.customButton);
//         alert(response.customButton);
//       } else {
//         const source = { uri: response.uri };
//         console.log("response", JSON.stringify(response));
//         this.setState({
//           filePath: response,
//           fileData: response.data,
//           fileUri: response.uri,
//         });
//       }
//     });
//   };

//   launchImageLibrary = () => {
//     let options = {
//       storageOptions: {
//         skipBackup: true,
//         path: "images",
//       },
//     };
//     ImagePicker.launchImageLibrary(options, (response) => {
//       console.log("Response = ", response);

//       if (response.didCancel) {
//         console.log("User cancelled image picker");
//       } else if (response.error) {
//         console.log("ImagePicker Error: ", response.error);
//       } else if (response.customButton) {
//         console.log("User tapped custom button: ", response.customButton);
//         alert(response.customButton);
//       } else {
//         const source = { uri: response.uri };
//         console.log("response", JSON.stringify(response));
//         this.setState({
//           filePath: response,
//           fileData: response.data,
//           fileUri: response.uri,
//         });
//       }
//     });
//   };

//   renderFileData() {
//     if (this.state.fileData) {
//       return (
//         <Image
//           source={{ uri: "data:image/jpeg;base64," + this.state.fileData }}
//         />
//       );
//     } else {
//       return <Image source={HasanImage} />;
//     }
//   }

//   renderFileUri() {
//     if (this.state.fileUri) {
//       return <Image source={{ uri: this.state.fileUri }} />;
//     } else {
//       return <Image source={HasanImage} />;
//     }
//   }
//   render() {
//     return (
//       <>
//         <ScrollView>
//           <StatusBar barStyle="dark-content" />
//           <SafeAreaView>
//             <View>
//               <Text
//                 style={{ textAlign: "center", fontSize: 20, paddingBottom: 10 }}
//               >
//                 Pick Images from Camera & Gallery
//               </Text>
//               <View>
//                 <View>
//                   {this.renderFileData()}
//                   <Text style={{ textAlign: "center" }}>Base 64 String</Text>
//                 </View>
//                 <View>
//                   {this.renderFileUri()}
//                   <Text style={{ textAlign: "center" }}>File Uri</Text>
//                 </View>
//               </View>

//               <View>
//                 <TouchableOpacity onPress={this.chooseImage}>
//                   <Text>Choose File</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity onPress={this.launchCamera}>
//                   <Text>Directly Launch Camera</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity onPress={this.launchImageLibrary}>
//                   <Text>Directly Launch Image Library</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </SafeAreaView>
//         </ScrollView>
//         <NavigationFooter />
//       </>
//     );
//   }
// }
