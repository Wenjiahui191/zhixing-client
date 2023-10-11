import { Typography } from "antd";
import React, { FC } from "react";

const { Paragraph } = Typography;

type PropsType = {
  title: string;
  isCenter: boolean;
};

const QuestionParagraph: FC<PropsType> = ({ title, isCenter }) => {
  const textList = title.split("\n");

  return (
    <Paragraph style={{ textAlign: isCenter ? "center" : "start" }}>
      {textList.map((t, index) => {
        if (index > 0) {
          return (
            <span key={index}>
              <br />
              {t}
            </span>
          );
        }
        return <span key={index}>{t}</span>;
      })}
    </Paragraph>
  );
};

export default QuestionParagraph;
