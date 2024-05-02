import {
  Platform,
  LayoutAnimation,
  LayoutAnimationType,
  LayoutAnimationProperty,
  LayoutAnimationConfig,
} from "react-native";

/*
  usage:
    const layoutAnimation = layoutAnimationConfig({ duration: 1000 });
    const applyLayoutAnimation = useLayoutAnimation(layoutAnimation);
    // later use applyLayoutAnimation(); before setting state
*/

interface LayoutAnimationConfigProps {
  duration?: number;
  createDelay?: number;
  updateDelay?: number;
  deleteDelay?: number;
  type?: LayoutAnimationType;
  property?: LayoutAnimationProperty;
  springDamping?: number;
}

export const layoutAnimationConfig = ({
  duration = 500,
  createDelay = 0,
  updateDelay = 0,
  deleteDelay = 0,
  type = LayoutAnimation.Types.spring,
  property = LayoutAnimation.Properties.opacity,
  springDamping = 0.7,
}: LayoutAnimationConfigProps) => ({
  duration: duration,
  create: {
    delay: createDelay,
    type: type,
    property: property,
    springDamping: springDamping,
  },
  update: {
    delay: updateDelay,
    type: type,
    springDamping: springDamping,
  },
  delete: {
    delay: deleteDelay,
    type: type,
    property: property,
    springDamping: springDamping,
  },
});

export const useLayoutAnimation = (
  config?: LayoutAnimationConfig,
  platforms?: "ios" | "android"
) => {
  const applyLayoutAnimation = () => {
    if (platforms || ["ios"].includes(Platform.OS))
      LayoutAnimation.configureNext(config || layoutAnimationConfig({}));
  };
  return applyLayoutAnimation;
};
