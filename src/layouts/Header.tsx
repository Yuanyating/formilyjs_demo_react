import { Typography } from "antd";

type Props = {
  title: string;
  paragraph: string;
};

export default ({ title, paragraph }: Props) => {
  return (
    <section style={{ background: "#eee", width: "100%", padding: "0 24px" }}>
      <Typography.Title level={3}>{title}</Typography.Title>
      <Typography.Paragraph>{paragraph}</Typography.Paragraph>
    </section>
  );
};
