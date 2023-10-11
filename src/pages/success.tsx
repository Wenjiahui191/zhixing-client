import PageWrapper from "@/components/PageWrapper";
import ResultComponent from "@/components/ResultComponent";
import { Result } from "antd";
import React, { FC } from "react";

const Success: FC = () => {
  return (
    <ResultComponent
      title="问卷提交成功"
      status="success"
      subTitle="您填写的问卷提交成功！"
    />
  );
};

export default Success;
