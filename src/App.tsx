import { Box, chakra } from "@chakra-ui/react";
import { FC } from "react";
import { Layer, Stage, Text } from "react-konva";
import { useMeasure } from "react-use";

import { ColorRect } from "./ColorRect";

export const ChakraRootWWrapperBox = chakra(Box, {
  baseStyle: {
    w: "100%",
    h: "100%",
  },
});

export const App: FC = () => {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();

  return (
    <ChakraRootWWrapperBox ref={ref}>
      <Stage width={width} height={height}>
        <Layer>
          <Text text="hello world" />
          <ColorRect />
        </Layer>
      </Stage>
    </ChakraRootWWrapperBox>
  );
};
