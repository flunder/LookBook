import { useEffect, useRef } from "react";
import { Animated } from "react-native";

export const useReadyAnimation = (
  startVal = 0,
  endVal = 1,
  friction = 7,
  delay = 250,
  dependency?: any
) => {
  const started = useRef(false);
  const animatedValue = useRef(new Animated.Value(startVal)).current;

  useEffect(() => {
    // Trying to fix stuck animation bug
    // using a dependency
    if (dependency === false) return;
    if (started.current === true) return;
    started.current = true;

    Animated.sequence([
      Animated.delay(delay),
      Animated.spring(animatedValue, {
        toValue: endVal,
        friction,
        useNativeDriver: true,
      }),
    ]).start();
  }, [dependency]);

  return animatedValue;
};
