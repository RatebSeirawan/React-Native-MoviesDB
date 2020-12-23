import React, { FC, useCallback, useState } from "react";
import { ViewStyle } from "react-native";
import { Searchbar } from "react-native-paper";
import { useDebouncedCallback } from "use-debounce";

import { SearchResonpose } from "../types";
import { searchMovies } from "api";

interface Props {
  /** Function that accepts results from MovieDB API call */
  onSearchResult: (value: SearchResonpose) => void;
  /** Function that accepts a boolean indicating if loading is in progress */
  onLoadingStateChange: (value: boolean) => void;
}

export const Search: FC<Props> = ({ onSearchResult, onLoadingStateChange }) => {
  const [text, setText] = useState("");
  const [memo, setMemo] = useState(new Map());

  const debounced = useDebouncedCallback((value) => {
    fetchItems(value);
  }, 500);

  const fetchItems = useCallback(
    async (text) => {
      if (!text) return;
      if (memo.has(text)) {
        onSearchResult(memo.get(text));
        return;
      }

      onLoadingStateChange(true);
      const result = await searchMovies(text);
      setMemo((mem) => mem.set(text, result));
      onSearchResult(result);
      onLoadingStateChange(false);
    },
    [onLoadingStateChange, onSearchResult, memo]
  );

  const onChangeText = (value: string) => {
    setText(value);
    debounced.callback(value);
  };

  return (
    <Searchbar
      style={containerStyle}
      placeholder="Search"
      onChangeText={onChangeText}
      value={text}
    />
  );
};

const containerStyle: ViewStyle = {
  marginVertical: 12,
  marginHorizontal: 24,
};
