import { Input, Typography } from "antd";
import React, { FC } from "react";

const { TextArea } = Input;

type PropsType = {
  fe_id: string;
  props: {
    title: string;
    placeholder: string;
  };
};

const QuestionTextArea: FC<PropsType> = ({ fe_id, props }) => {
  const { title, placeholder = "" } = props;

  return (
    <>
      <Typography.Paragraph>{title}</Typography.Paragraph>
      <TextArea name={fe_id} placeholder={placeholder} />
    </>
  );
};

export default QuestionTextArea;
