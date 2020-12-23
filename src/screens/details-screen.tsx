import * as React from "react";
import {
  View,
  ViewStyle,
  ScrollView,
  Dimensions,
  TextStyle,
} from "react-native";
import {
  useTheme,
  Title,
  Text,
  Chip,
  Badge,
  List,
  IconButton,
} from "react-native-paper";
import Image, { ImageStyle } from "react-native-fast-image";

import { MainParamList, NavigationProps, RouteProps } from "navigation";

import { IMAGES_URL } from "constants/index";

interface Props {
  navigation: NavigationProps<MainParamList, "details-screen">;
  route: RouteProps<MainParamList, "details-screen">;
}

const rowStyle: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 8,
};

const Row: React.FC = ({ children }) => (
  <View style={rowStyle}>{children}</View>
);

export const DetailsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { colors } = useTheme();
  const {
    title,
    poster_path,
    overview,
    adult,
    popularity,
    release_date,
    vote_average,
    vote_count,
  } = route.params;

  const containerStyle: ViewStyle = {
    flex: 1,
    backgroundColor: colors.background,
  };

  return (
    <View style={containerStyle}>
      <ScrollView>
        <Image
          accessibilityIgnoresInvertColors
          source={{ uri: IMAGES_URL + poster_path }}
          style={imageStyle}
        >
          <IconButton
            icon="arrow-left"
            size={40}
            onPress={() => navigation.goBack()}
            color={colors.primary}
            style={{ marginTop: 24 } as TextStyle}
          />
          <Badge size={24} style={badgeStyle} visible={true}>
            {popularity.toFixed(1)}
          </Badge>
        </Image>
        <View style={contentContainerStyle}>
          <Row>
            <Title>{title}</Title>
            <Chip>{adult ? "Adult" : "Family friendly"}</Chip>
          </Row>
          <Text>{overview}</Text>
        </View>
        <List.Item
          title="Release date"
          description={release_date}
          left={() => <List.Icon icon="calendar" />}
        />
        <List.Item
          title="Votes"
          description={vote_count}
          left={() => <List.Icon icon="account" />}
        />
        <List.Item
          title="Avarage Rating"
          description={vote_average}
          left={() => <List.Icon icon="star" />}
        />
        <List.Item
          title="Release date"
          description={release_date}
          left={() => <List.Icon icon="calendar" />}
        />
        <List.Item
          title="Votes"
          description={vote_count}
          left={() => <List.Icon icon="account" />}
        />
        <List.Item
          title="Avarage Rating"
          description={vote_average}
          left={() => <List.Icon icon="star" />}
        />
      </ScrollView>
    </View>
  );
};

const contentContainerStyle: ViewStyle = {
  paddingVertical: 12,
  paddingHorizontal: 24,
};

const imageStyle: ImageStyle = {
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height / 2.5,
};

const badgeStyle: ViewStyle = {
  position: "absolute",
  left: 24,
  bottom: 24,
};
