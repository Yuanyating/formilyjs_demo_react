import { createForm } from "@formily/core";
import { createSchemaField } from "@formily/react";
import { Form, FormButtonGroup, FormItem, Input, Submit } from "@formily/antd";
import { useEffect } from "react";
import { Typography } from "antd";

const form = createForm({
  validateFirst: true,
  effects: (form) => {
    console.log("form", form);
  },
});

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
  },
});

const schema = {

}

export default () => {
  return (
    <>
    <section style={{ background: '#eee', width: '100%', padding: '0 24px'}}>
      <Typography.Title level={3}>场景描述</Typography.Title>
      <Typography.Paragraph>
        上传文件到远端接口
      </Typography.Paragraph>
    </section>
    <Form
      form={form}
      labelCol={4}
      wrapperCol={16}
      style={{ width: 500, marginTop: 48 }}
      onAutoSubmit={console.log}
    >
      <SchemaField schema={schema} />
      <FormButtonGroup.FormItem>
        <Submit block size="large">
          提交
        </Submit>
      </FormButtonGroup.FormItem>
    </Form>
    </>
  )
}