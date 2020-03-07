import React from "react";
import { ActivityIndicator, Animated, StyleSheet, View } from "react-native";
import { useNativeDriver } from "../../../../hooks";
interface Props {
  uri: string;
  height: number;
  width: number;
  color?: string;
  size?: number | "small" | "large";
}

export function AsyncImage(props: Props) {
  const nativeDriver = useNativeDriver();
  const imageAnimated = new Animated.Value(0);
  const indicatorAnimated = new Animated.Value(1);
  const styles = StyleSheet.create({
    indicatorOverlay: { justifyContent: "center", position: "absolute" }
  });
  const onImageLoad = () => {
    Animated.parallel([
      Animated.timing(indicatorAnimated, {
        toValue: 0,
        useNativeDriver: nativeDriver
      }),
      Animated.timing(imageAnimated, {
        toValue: 1,
        useNativeDriver: nativeDriver
      })
    ]).start();
  };
  const { uri, height, width, color = "black", size = "small" } = props;
  const containerStyle = { width, height };
  const imageStyle = [containerStyle, { opacity: imageAnimated }];
  const indicatorStyle = [
    containerStyle,
    { opacity: indicatorAnimated },
    styles.indicatorOverlay
  ];
  return (
    <View style={containerStyle}>
      <Animated.Image
        source={{ uri }}
        style={imageStyle}
        onLoad={onImageLoad}
      />
      <Animated.View style={indicatorStyle}>
        <ActivityIndicator size={size} color={color} />
      </Animated.View>
    </View>
  );
}