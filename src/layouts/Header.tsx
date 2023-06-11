import { Space, Typography } from "antd";

type Props = {
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
};

export default ({ paragraph1, paragraph2, paragraph3 }: Props) => {
  return (
    <div style={{ background: "#eee", width: "100%", padding: "0 24px" }}>
      <section>
        <Typography.Title level={3}>{"场景描述"}</Typography.Title>
        <Typography.Text mark style={{ fontSize: 20 }}>
          {paragraph1}
        </Typography.Text>
      </section>
      <section style={{ marginTop: 16 }}>
        <Typography.Paragraph>{`(实现方式: ${paragraph2}, 应用例子: ${paragraph3})`}</Typography.Paragraph>
      </section>
    </div>
  );
};
