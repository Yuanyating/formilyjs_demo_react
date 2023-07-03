import { Space, Typography } from "antd";
import Editor from "@monaco-editor/react";

export default () => {
  return (
    <Typography>
      <Typography.Title level={3}>1. 监听变化</Typography.Title>
      <Typography.Paragraph>
        xrender通过watch实现，formily可通过effect或者reactions
      </Typography.Paragraph>
      <Typography.Paragraph>
        数据流配置化表单的场景中，Xrender如果实现「依赖项发生变化时清空」这一操作，需要封装一个通用的watch逻辑，并在配置表单时用约定的方式处理
      </Typography.Paragraph>
      <Typography.Paragraph>
        Formily可以通过reaction主动联动/被动联动的方式清空依赖项，
        <strong>比起Xrender的方式灵活容易许多</strong>
      </Typography.Paragraph>
      <Space size={24}>
        <Editor
          height={200}
          width={500}
          // language="javascript"
          value={`watch: {
  input1: val => {
      form.setValueByPath('input2', val);
    },
  }`}
        />

        <Editor
          height={200}
          width={500}
          // language="javascript"
          value={`"x-reactions": {
  target: "input2",
  fulfill: {
    state: {
      value: ""
    }
  }
}
      `}
        />
      </Space>
    </Typography>
  );
};
