import * as React from "react";
import { SafeAreaView, ViewStyle } from "react-native";
import { Searchbar, useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
Icon.loadFont();

interface Props {}

export const HomeScreen: React.FC<Props> = () => {
  const { colors } = useTheme();

  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const onChangeSearch = (query: string) => setSearchQuery(query);

  const containerStyle: ViewStyle = {
    flex: 1,
    backgroundColor: colors.background,
  };

  return (
    <SafeAreaView style={containerStyle}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </SafeAreaView>
  );
};
