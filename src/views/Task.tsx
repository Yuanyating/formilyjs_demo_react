import { createForm } from "@formily/core";
import { createSchemaField } from "@formily/react";
import {
  Form,
  FormButtonGroup,
  FormItem,
  Input,
  Select,
  ArrayTable,
  Password,
  NumberPicker,
  Radio,
  Submit,
  Editable,
  FormCollapse,
} from "@formily/antd";
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
    Select,
    ArrayTable,
    Password,
    NumberPicker,
    Radio,
    Editable,
    FormCollapse,
  },
  scope: {},
});

const schema = {
  type: "object",
  layout: {
    type: "void",
    "x-component": "FormLayout",
    "x-component-props": {
      labelCol: 6,
      wrapperCol: 10,
      layout: "vertical",
    },
  },
  properties: {
    run: {
      type: "void",
      "x-component": "FormCollapse",
      "x-component-props": {
        accordion: false,
        ghost: false,
      },
      name: "run",
      "x-designable-id": "3j570ckuxdx",
      properties: {
        run: {
          type: "void",
          "x-component": "FormCollapse.CollapsePanel",
          "x-component-props": {
            header: "运行规则",
          },
          "x-designable-id": "5xhkyxbenq8",
          properties: {
            periodicType: {
              type: "string | number",
              title: "调度方式",
              "x-decorator": "FormItem",
              "x-component": "Radio.Group",
              enum: [
                {
                  label: "周期调度",
                  value: "cycle",
                },
                {
                  label: "只运行一次",
                  value: "temp",
                },
              ],
              default: "cycle",
              "x-validator": [],
              "x-component-props": {},
              "x-decorator-props": {},
              "x-designable-id": "8vfyvvb3t7a",
              "x-index": 0,
            },
          },
          name: "run",
          "x-index": 0,
        },
      },
      "x-index": 0,
    },
  },
};

export default () => {
  return (
    <>
      <Header title="场景描述" paragraph="表格相关的展示" />

      <Form
        form={form}
        labelCol={6}
        wrapperCol={12}
        labelWrap={true}
        labelWidth="auto"
        style={{ width: 800 }}
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
