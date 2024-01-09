import React, { FC } from "react";
import PageWrapper from "@/components/PageWrapper";
import { getQuestionInfoById } from "@/service/question";
import { getComponentByType } from "@/components/QuestionComponents";
import { submitQuestionData } from "@/service/answer";
import { Button, Space } from "antd";

type PropsType = {
  errno: number;
  data?: {
    _id: string;
    title: string;
    desc: string;
    js: string;
    css: string;
    isDeleted: boolean;
    isPublished: boolean;
    componentList: any[];
  };
  msg?: string;
};

const Question: FC<PropsType> = (props) => {
  const { errno, data, msg } = props;
  const { _id = "",title='', isPublished, componentList = [], isDeleted,js,css } = data || {};

  if (errno !== 0) {
    return (
      <PageWrapper title="错误">
        <h1>请求出错</h1>
        <h1>无法获取问卷信息</h1>
      </PageWrapper>
    );
  }

  if (!_id || isDeleted) {
    return (
      <PageWrapper title="错误">
        <h1>失败</h1>
        <h1>无法获取问卷信息</h1>
      </PageWrapper>
    );
  }

  if (!isPublished) {
    return (
      <PageWrapper title="错误">
        <h1>失败</h1>
        <h1>问卷未发布</h1>
      </PageWrapper>
    );
  }

  const ComponentElem = componentList.map((c) => {
    const { fe_id, type } = c;
    const Component = getComponentByType(type, c);

    return <div key={fe_id}>{Component}</div>;
  });

  return (
    <PageWrapper title={title} js={js} css={css}>
      <form action="/api/answer" method="post">
        <input type="hidden" name="questionId" value={_id} />
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          {ComponentElem}
        </Space>
        <div style={{textAlign:'center',marginTop:'60px'}}>
          <Button htmlType="submit" type="primary">
            提交
          </Button>
        </div>
      </form>
    </PageWrapper>
  );
};

export default Question;

export async function getServerSideProps(context: any) {
  const { id = "" } = context.params;

  const data = await getQuestionInfoById(id);
  return {
    props: data,
  };
}
