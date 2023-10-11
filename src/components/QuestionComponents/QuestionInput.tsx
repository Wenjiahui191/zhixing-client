import { Typography, Input } from "antd";
import React, { FC } from "react";

const {Paragraph}=Typography

type PropsType = {
  fe_id: string;
  props: {
    title: string;
    placeholder: string;
  };
};

const QuestionInput: FC<PropsType> = ({ fe_id, props }) => {
  const { title, placeholder = "" } = props;

  return (
    <>
      <Paragraph >{title}</Paragraph>
      <Input size="middle"  name={fe_id} placeholder={placeholder} />
    </>
  );
};

export default QuestionInput;
