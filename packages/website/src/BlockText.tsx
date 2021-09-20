import { Box, Flex, Text, TextProps } from "@primer/components";
import React, { useMemo } from "react";

export interface BlockText extends TextProps {
  lines: string[]
}

export const BlockText: React.FC<BlockText> = ({
  lines,
  ...props
}) => {
  const paragraphs = useMemo(() => makeParagraphs(lines), [lines])
  return (
    <>
      {paragraphs.map((p, i) =>
        <p key={i}>
          <Text
            {...props}
          >
            {p}
          </Text>
        </p>
      )}
    </>
  );
}


const makeParagraphs = (lines: string[]): string[] => {
  const paragraphs: string[] = []
  let newParagraph = true;
  lines.forEach(val => {
    if (val === '') {
      newParagraph = true;
    } else if (newParagraph) {
      paragraphs.push(val);
      newParagraph = false;
    } else {
      const end = paragraphs.length-1
      let curr = paragraphs[end];
      paragraphs[end] = `${curr} ${val}`;
      newParagraph = false;
    }
  });

  return paragraphs;
}