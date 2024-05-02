import React, { useState, useCallback } from "react";

export const useComponentSize = (): [
  size: { width: number; height: number } | null,
  onLayout: (event: any) => void
] => {
  const [size, setSize] = useState<{ width: number; height: number } | null>(
    null
  );

  const onLayout = useCallback((event: any) => {
    const { width, height } = event.nativeEvent.layout;
    setSize({ width, height });
  }, []);

  return [size, onLayout];
};
