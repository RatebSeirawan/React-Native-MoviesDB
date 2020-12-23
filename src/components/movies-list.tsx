import * as React from "react";
import { FlatList, ViewStyle } from "react-native";
import { Divider, List } from "react-native-paper";
import Image, { ImageStyle } from "react-native-fast-image";
import { useNavigation } from "@react-navigation/native";

import { Movie } from "../types";
import { MainParamList, NavigationProps } from "navigation";
import { IMAGES_URL } from "constants/index";

interface Props {
  data: Movie[];
}

export const MoviesList: React.FC<Props> = ({ data }) => {
  const { navigate } = useNavigation<
    NavigationProps<MainParamList, "home-screen">
  >();
  const [currPage, setCurrPage] = React.useState<number>(1);

  const perBatch = React.useMemo(() => data.slice(0, 20 * currPage), [
    data,
    currPage,
  ]);

  return (
    <FlatList
      contentContainerStyle={contentStyle}
      onEndReachedThreshold={0.8}
      ItemSeparatorComponent={() => <Divider style={seperatorStyle} />}
      onEndReached={() => setCurrPage((prev) => prev + 1)}
      pagingEnabled={false}
      data={perBatch}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <List.Item
          onPress={() => navigate("details-screen", item)}
          title={item.title}
          description={item.overview}
          left={() => (
            <Image
              accessibilityIgnoresInvertColors
              style={imageStyle}
              source={{
                uri: IMAGES_URL + item.poster_path,
              }}
            />
          )}
        />
      )}
    />
  );
};

const seperatorStyle: ViewStyle = {
  marginVertical: 4,
};

const contentStyle: ViewStyle = {
  padding: 12,
};

const imageStyle: ImageStyle = { width: 90, height: 90, borderRadius: 8 };
