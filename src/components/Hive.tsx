import { createForm } from "@formily/core";
import { createSchemaField } from "@formily/react";
import {
  Form,
  FormButtonGroup,
  FormItem,
  Input,
  Submit,
  Select,
} from "@formily/antd";

/**
 * 实现一个可联动的Hive
 */

const form = createForm({
  validateFirst: true,
});

const SelectRemote = ({ ...props }) => {
  console.log("props", props);
  return <Select />;
};

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    SelectRemote,
  },
});

const schema = {
  type: "object",
  properties: {
    db: {
      type: "string",
      title: "库名",
      "x-decorator": "FormItem",
      "x-component": "SelectRemote",
      "x-validator": [],
      "x-component-props": {},
      "x-decorator-props": {},
      "x-designable-id": "fg3pfwbxge0",
      "x-index": 0,
      "x-data": {
        url: "xxx",
        params: {
          form: "cc",
          system: "xx",
        },
      },
      name: "db",
    },
    table: {
      type: "string",
      title: "表名",
      "x-decorator": "FormItem",
      "x-component": "Input",
      "x-validator": [],
      "x-component-props": {},
      "x-decorator-props": {},
      "x-designable-id": "ljywjjxqo0w",
      "x-index": 1,
      name: "table",
    },
  },
};

export default () => {
  return (
    <Form form={form} labelCol={5} wrapperCol={16} onAutoSubmit={console.log}>
      <SchemaField schema={schema} />
      <FormButtonGroup.FormItem>
        <Submit block size="large">
          提交
        </Submit>
      </FormButtonGroup.FormItem>
    </Form>
  );
};
