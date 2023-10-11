import { Typography, Radio, Space } from "antd";
import React, { FC, useState } from "react";

type PropsType = {
  fe_id: string;
  props: {
    title: string;
    value: string;
    isVertical: boolean;
    optionList: Array<{
      text: string;
      value: string;
    }>;
  };
};

const QuestionRadio: FC<PropsType> = ({ fe_id, props }) => {
  const { title, value, optionList, isVertical } = props;

  const [checked, setChecked] = useState("");

  return (
    <>
      <Typography.Paragraph>{title}</Typography.Paragraph>
      <Radio.Group name={fe_id} onChange={(e) => setChecked(e.target.value)} value={checked}>
        <Space direction={isVertical ? "vertical" : "horizontal"}>
          {optionList.map((o, index) => {
            const { value: val, text } = o;
            return (
              <Radio
                key={index}
                name={fe_id}
                value={val}
                defaultChecked={value === val}
              >
                {text}
              </Radio>
            );
          })}
        </Space>
      </Radio.Group>
    </>
  );
};

export default QuestionRadio;
