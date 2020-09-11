import React, {memo, useCallback} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {Button, Screen} from '../../../components';
import {getHeight, getWidth} from '../../../models';
import {useColor, useNativeDriver, useNav} from '../../../hooks';
import {Theme, useRootSelector} from '../../../utils';

export const Ball = memo(function PlaygroundBall() {
  const height = useRootSelector(getHeight);
  const width = useRootSelector(getWidth);
  const nav = useNav();
  const ballPosition = new Animated.ValueXY({x: width / 2, y: height / 2});
  const useDriver = useNativeDriver();
  const color = useColor();
  const size = Theme.padding.p08;
  const styles = StyleSheet.create({
    ball: {
      borderColor: color.text,
      borderRadius: size,
      borderWidth: size,
      height: size * 2,
      marginLeft: -size,
      marginTop: -size,
      width: size * 2,
    },
    button: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });
  const animate = useCallback(
    (dx: number, dy: number) => {
      Animated.spring(ballPosition, {
        toValue: {x: width * dx, y: height * dy},
        useNativeDriver: useDriver,
      }).start();
    },
    [ballPosition, height, useDriver, width],
  );
  const onInitialPress = useCallback(() => animate(0.5, 0.5), [animate]);
  const onRandomPress = useCallback(
    () => animate(Math.random(), Math.random()),
    [animate],
  );
  const navBack = useCallback(nav('landing'), [nav]);

  return (
    <Screen onLeftPress={navBack} testID="ballScreen" title="Ball">
      <Animated.View
        style={[ballPosition.getLayout(), styles.ball]}
        testID="ball"
      />
      <View style={styles.button}>
        <Button
          onPress={onInitialPress}
          testID="initialButton"
          title="initial"
        />
        <Button onPress={onRandomPress} testID="randomButton" title="random" />
      </View>
    </Screen>
  );
});