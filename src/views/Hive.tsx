import { createForm } from "@formily/core";
import { createSchemaField } from "@formily/react";
import { Form, FormButtonGroup, FormItem, Input, Submit } from "@formily/antd";
import { useEffect } from "react";
import SelectRemote from "../components/SelectRemote";

/**
 * 实现一个可联动的Hive
 */

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
      "x-component-props": {
        showSearch: true,
        custom: {
          url: "/getDB",
          params: {
            static: {},

            public: {
              //某些参数为系统中公用的参数
              pipelineId: "pipelineId",
            },
          },
          // requestMethod: "POST",
          optionLabelKey: "dbname",
          optionValueKey: "dbname",
          optionPath: "data",
        },
      },
      "x-decorator-props": {},
      "x-designable-id": "fg3pfwbxge0",
      "x-index": 0,
      //联动的几种情况（改变值、显隐、详情见IGeneralFieldState）
      "x-reactions": {
        target: "table",
        fulfill: {
          state: {
            value: "",
            visible: "{{$self.value !== 'app'}}",
          },
        },
      },
      name: "db",
    },
    table: {
      type: "string",
      title: "表名",
      "x-decorator": "FormItem",
      "x-component": "SelectRemote",
      "x-validator": [],
      "x-component-props": {
        showSearch: true,
        custom: {
          url: "/getTable",
          params: {
            static: {},
            form: {
              //某些参数为表单中其他表单组件value
              dataBase: "{{$values.db}}",
            },
            public: {
              //某些参数为系统中公用的参数
              pipelineId: "pipelineId",
              martCode: "martCode",
            },
          },
          requestMethod: "POST",
          optionLabelKey: "tbname",
          optionValueKey: "tbname",
        },
      },
      "x-decorator-props": {},
      "x-designable-id": "ljywjjxqo0w",
      "x-index": 1,
      name: "table",
    },
  },
};

export default () => {
  useEffect(() => {
    form.setInitialValues({ db: "abc" });
  }, []);

  return (
    <Form
      form={form}
      labelCol={10}
      wrapperCol={16}
      style={{ width: 500 }}
      onAutoSubmit={console.log}
    >
      <SchemaField schema={schema} />
      <FormButtonGroup.FormItem>
        <Submit block size="large">
          提交
        </Submit>
      </FormButtonGroup.FormItem>
    </Form>
  );
};
