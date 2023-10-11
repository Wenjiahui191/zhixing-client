import { Typography } from "antd";
import React, { FC } from "react";

const { Title } = Typography;

type PropsType = {
  title: string;
  level?: 1 | 2 | 3 | 4 | 5;
  isCenter?: boolean;
};

const QuestionTitle: FC<PropsType> = ({ title, level, isCenter }) => {
  return (
    <>
      <Title level={level} style={{ textAlign: isCenter ? "center" : "start" }}>
        {title}
      </Title>
    </>
  );
};

export default QuestionTitle;
