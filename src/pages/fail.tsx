import PageWrapper from "@/components/PageWrapper";
import ResultComponent from "@/components/ResultComponent";
import { Result } from "antd";
import React, { FC } from "react";

const Success: FC = () => {
  return <ResultComponent title="问卷提交失败" status="error" />;
};

export default Success;
