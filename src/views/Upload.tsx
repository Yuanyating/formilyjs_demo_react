import { createForm } from "@formily/core";
import { createSchemaField } from "@formily/react";
import { Form, FormButtonGroup, FormItem, Input, Submit } from "@formily/antd";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

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

const schema = {};

export default () => {
  return (
    <>
      <Header title="场景描述" paragraph="上传文件到远端接口" />
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
        <Footer />
      </Form>
    </>
  );
};
