import { Card, CardItem, Icon, Tab, Text } from "native-base";
import styled from "styled-components/native";

export const HomeBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const TopStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 38;
  text-align: center;
`;
export const OverLayContainer = styled.View`
  flex: 1;
  background-color: rgba(100, 40, 60, 0.4);
`;

export const BottomStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyled = styled.Text`
  font-size: 20;
  color: #fff;
`;

export const VendorItemStyled = styled.Text`
  color: ${(props) => props.theme.mainColor};
  font-size: 18;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 16;
  width: 100%;
`;

export const VendorDetailWrapper = styled.View`
  margin-top: 50;
`;

export const VendorDetailImage = styled.Image`
  width: 150;
  height: 150;
`;

export const VendorDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 40;
`;

export const TotalPrice = styled.Text`
  color: ${(props) => props.theme.pink};
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;

export const CartButtonStyled = styled(Icon)`
  color: white;
  margin-right: 10px;
`;

export const CartTextStyled = styled.Text`
  color: ${(props) => props.theme.backgroundColor};
  font-size: 20px;
`;

export const TrashIcon = styled(Icon)`
  color: ${(props) => props.theme.red};
`;

export const CheckoutButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.pink};
  margin-top: 30px;
`;

export const CheckoutButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthTitle = styled.Text`
  color: ${(props) => props.theme.pink};
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: ${(props) => props.theme.pink};
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: ${(props) => props.theme.pink};
  border-bottom-color: ${(props) => props.theme.pink};
  border-bottom-width: 1px;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.pink};
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthOther = styled.Text`
  color: ${(props) => props.theme.pink};
  margin-top: 15px;
`;

export const ProfileCard = styled(Card)`
  flex: 0;
  background-color: transparent;
  width: 100.32%;
  margin-left: -0.75px;
`;

export const ProfileUserName = styled(Text)`
  font-size: 25px;
  margin-bottom: -10px;
`;
export const ProfileFirstName = styled(Text)`
  font-size: 20px;
`;
export const ProfileLastName = styled(Text)`
  font-size: 20px;
  margin-left: 4px;
`;
export const ProfileTrips = styled(Text)`
  text-align: center;
  font-size: 20px;
  margin-right: 40px;
  color: gray;
`;

export const ProfileBio = styled(Text)`
  font-size: 17;
`;
export const ProfileCArdItem = styled(CardItem)`
  background-color: transparent;
`;
export const ProfileTripList = styled(CardItem)`
  background-color: transparent;
  width: 112%;
  margin-left: -33px;
  height: 120%;
`;
export const ProfileTab = styled(Tab)`
  width: 100%;
`;

export const TripItemCard = styled(Card)`
  flex: 0;
  background-color: transparent;
  border-color: transparent;
`;
export const TripCardItem = styled(CardItem)`
  width: 109%;
  height: 100%;
  background-color: transparent;
  margin-top: -10px;
  margin-left: -18px;
  margin-bottom: -30px;
`;
export const TripTitle = styled(Text)`
  font-size: 20px;
  margin-left: 10px;
  margin-bottom: 10px;
`;
export const TripImage = styled.Image`
  height: 300px;
  width: 100%;
  flex: 1;
`;
export const TripDetailCardItem = styled(CardItem)`
  width: 108%;
  height: 100%;
  background-color: transparent;
  margin-top: -10px;
  margin-left: -17px;
  margin-bottom: 50px;
`;

export const TripDetailTitle = styled(Text)`
  font-size: 20px;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const TripDetailImage = styled.Image`
  height: 100px;
  width: 100%;
  flex: 1;
`;

export const TripDescription = styled(Text)`
  margin-top: 5px;
  font-size: 20px;
`;
