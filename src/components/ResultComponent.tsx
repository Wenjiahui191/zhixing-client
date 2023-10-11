import PageWrapper from "@/components/PageWrapper";
import { Result } from "antd";
import type { ResultProps } from "antd";
import React, { FC } from "react";

type PropsType = {
  title: string;
  subTitle?: string;
  status?: ResultProps["status"];
};

const ResultComponent: FC<PropsType> = ({
  title,
  status = "info",
  subTitle = title,
}) => {
  return (
    <PageWrapper title={title}>
      <Result status={status} title={title} subTitle={subTitle} />
    </PageWrapper>
  );
};

export default ResultComponent;
