import * as React from "react";
import { SafeAreaView, ViewStyle } from "react-native";
import { useTheme } from "react-native-paper";

import { SearchResonpose } from "../types";
import { Search, ActivityIndicator, MoviesList } from "components";

interface Props {}

export const HomeScreen: React.FC<Props> = () => {
  const { colors } = useTheme();

  const [loading, setLoading] = React.useState<boolean>(false);
  const [items, setItems] = React.useState<SearchResonpose>({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });

  const containerStyle: ViewStyle = {
    flex: 1,
    backgroundColor: colors.background,
    padding: 12,
  };

  return (
    <SafeAreaView style={containerStyle}>
      <Search onLoadingStateChange={setLoading} onSearchResult={setItems} />

      <ActivityIndicator visible={loading} />
      {loading ? null : <MoviesList data={items.results} />}
    </SafeAreaView>
  );
};
