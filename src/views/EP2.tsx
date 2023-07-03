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
} from "@formily/antd";
import { Space } from "antd";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import SubmitButton from "../components/common/SubmitButton";

const form1 = createForm({
  validateFirst: true,
  effects: (form) => {
    console.log("form", form);
  },
});

const form2 = createForm({
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
  },
  scope: {},
});

const schema1 = {
  type: "object",
  properties: {
    apiType: {
      type: "string | number",
      title: " ",
      "x-decorator": "FormItem",
      "x-component": "Radio.Group",
      enum: [
        {
          value: "table",
          label: "Table API",
        },
        {
          value: "stream",
          label: "Stream API",
        },
      ],
      "x-validator": [],
      "x-component-props": {
        buttonStyle: "outline",
      },
      "x-decorator-props": {},
      name: "apiType",
      default: "table",
      "x-designable-id": "9bvbug5bznd",
      "x-index": 0,
    },
    tableProps: {
      type: "object",
      "x-validator": [],
      "x-designable-id": "rd74c97e9lb",
      "x-index": 1,
      "x-decorator": "FormItem",
      "x-reactions": {
        dependencies: ["apiType"],
        fulfill: {
          state: {
            // visible: "{{$deps[0] === 'table'}}",
            hidden: "{{$deps[0] !== 'table'}}",
          },
        },
      },
      name: "tableProps",
      properties: {
        dataType: {
          title: "消息格式",
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-validator": [],
          "x-component-props": {},
          "x-decorator-props": {},
          name: "dataType",
          enum: [
            {
              children: [],
              label: "Bytes",
              value: "Bytes",
            },
            {
              children: [],
              label: "String",
              value: "String",
            },
            {
              children: [],
              label: "JDW",
              value: "JDW",
            },
          ],
          required: true,
          default: "String",
          "x-designable-id": "g68koavxze5",
          "x-index": 0,
        },
        format: {
          title: "format",
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-validator": [],
          "x-component-props": {},
          "x-decorator-props": {},
          name: "format",
          required: true,
          enum: [
            {
              children: [],
              label: "csv",
              value: "csv",
            },
            {
              children: [],
              label: "raw",
              value: "raw",
            },
            {
              children: [],
              label: "json",
              value: "json",
            },
          ],
          default: "csv",
          "x-designable-id": "ifan1a2j9c0",
          "x-reactions": {
            target: "tableProps.delimiter",
            fulfill: {
              state: {
                visible: "{{$self.value === 'csv'}}",
              },
            },
          },
          description: "此处与下方涉及联动",
          "x-index": 1,
        },
        delimiter: {
          title: "分割方式",
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-validator": [],
          "x-component-props": {},
          "x-decorator-props": {},
          name: "delimiter",
          enum: [
            {
              children: [],
              label: "逗号(,)",
              value: ",",
            },
          ],
          default: ",",
          "x-designable-id": "3ao51vbfmdz",
          "x-index": 2,
        },
      },
    },
    datastreamProps: {
      type: "object",
      "x-validator": [],
      name: "datastreamProps",
      "x-designable-id": "cr4x6b287iw",
      "x-reactions": {
        dependencies: ["apiType"],
        fulfill: {
          state: {
            // visible: "{{$deps[0] === 'stream'}}",
            hidden: "{{$deps[0] !== 'stream'}}",
          },
        },
      },
      properties: {
        rateLimit: {
          type: "string",
          title: "消费限速",
          "x-decorator": "FormItem",
          "x-component": "Input",
          "x-validator": [],
          "x-component-props": {
            addonAfter: "条数/分钟",
            placeholder: "",
          },
          "x-decorator-props": {
            tooltip: "每个task manager的消费速率",
          },
          name: "rateLimit",
          description: "",
          "x-designable-id": "nlh0btmdojo",
          "x-index": 0,
        },
        parallelism: {
          type: "number",
          title: "并行度",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker",
          "x-validator": [],
          "x-component-props": {},
          "x-decorator-props": {},
          name: "parallelism",
          "x-designable-id": "xxfg5x86rlv",
          "x-index": 1,
        },
        password: {
          title: "Password",
          "x-decorator": "FormItem",
          "x-component": "Password",
          "x-validator": [],
          "x-component-props": {},
          "x-decorator-props": {},
          name: "password",
          "x-designable-id": "lzkydk7zfxw",
          "x-index": 2,
        },
      },
      "x-index": 4,
    },
  },
};

const schema2 = {
  type: "object",
  properties: {
    apiType: {
      type: "string | number",
      title: " ",
      "x-decorator": "FormItem",
      "x-component": "Radio.Group",
      enum: [
        {
          value: "table",
          label: "Table API",
        },
        {
          value: "stream",
          label: "Stream API",
        },
      ],
      "x-validator": [],
      "x-component-props": {
        buttonStyle: "outline",
      },
      "x-decorator-props": {},
      name: "apiType",
      default: "table",
      "x-designable-id": "9bvbug5bznd",
      "x-index": 0,
    },
    tableProps: {
      type: "object",
      "x-validator": [],
      "x-designable-id": "rd74c97e9lb",
      "x-index": 1,
      "x-decorator": "FormItem",
      "x-reactions": {
        dependencies: ["apiType"],
        fulfill: {
          state: {
            visible: "{{$deps[0] === 'table'}}",
            // hidden: "{{$deps[0] !== 'table'}}",
          },
        },
      },
      name: "tableProps",
      properties: {
        dataType: {
          title: "消息格式",
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-validator": [],
          "x-component-props": {},
          "x-decorator-props": {},
          name: "dataType",
          enum: [
            {
              children: [],
              label: "Bytes",
              value: "Bytes",
            },
            {
              children: [],
              label: "String",
              value: "String",
            },
            {
              children: [],
              label: "JDW",
              value: "JDW",
            },
          ],
          required: true,
          default: "String",
          "x-designable-id": "g68koavxze5",
          "x-index": 0,
        },
        format: {
          title: "format",
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-validator": [],
          "x-component-props": {},
          "x-decorator-props": {},
          name: "format",
          required: true,
          enum: [
            {
              children: [],
              label: "csv",
              value: "csv",
            },
            {
              children: [],
              label: "raw",
              value: "raw",
            },
            {
              children: [],
              label: "json",
              value: "json",
            },
          ],
          default: "csv",
          "x-designable-id": "ifan1a2j9c0",
          "x-reactions": {
            target: "tableProps.delimiter",
            fulfill: {
              state: {
                visible: "{{$self.value === 'csv'}}",
              },
            },
          },
          description: "此处与下方涉及联动",
          "x-index": 1,
        },
        delimiter: {
          title: "分割方式",
          "x-decorator": "FormItem",
          "x-component": "Select",
          "x-validator": [],
          "x-component-props": {},
          "x-decorator-props": {},
          name: "delimiter",
          enum: [
            {
              children: [],
              label: "逗号(,)",
              value: ",",
            },
          ],
          default: ",",
          "x-designable-id": "3ao51vbfmdz",
          "x-index": 2,
        },
      },
    },
    datastreamProps: {
      type: "object",
      "x-validator": [],
      name: "datastreamProps",
      "x-designable-id": "cr4x6b287iw",
      "x-reactions": {
        dependencies: ["apiType"],
        fulfill: {
          state: {
            visible: "{{$deps[0] === 'stream'}}",
            // hidden: "{{$deps[0] !== 'stream'}}",
          },
        },
      },
      properties: {
        rateLimit: {
          type: "string",
          title: "消费限速",
          "x-decorator": "FormItem",
          "x-component": "Input",
          "x-validator": [],
          "x-component-props": {
            addonAfter: "条数/分钟",
            placeholder: "",
          },
          "x-decorator-props": {
            tooltip: "每个task manager的消费速率",
          },
          name: "rateLimit",
          description: "",
          "x-designable-id": "nlh0btmdojo",
          "x-index": 0,
        },
        parallelism: {
          type: "number",
          title: "并行度",
          "x-decorator": "FormItem",
          "x-component": "NumberPicker",
          "x-validator": [],
          "x-component-props": {},
          "x-decorator-props": {},
          name: "parallelism",
          "x-designable-id": "xxfg5x86rlv",
          "x-index": 1,
        },
        password: {
          title: "Password",
          "x-decorator": "FormItem",
          "x-component": "Password",
          "x-validator": [],
          "x-component-props": {},
          "x-decorator-props": {},
          name: "password",
          "x-designable-id": "lzkydk7zfxw",
          "x-index": 2,
        },
      },
      "x-index": 4,
    },
  },
};

export default () => {
  return (
    <>
      <Header
        paragraph1="针对不同的业务场景，左侧表单是UI隐藏保留值的场景，右侧表单是UI隐藏不保留值的场景。"
        paragraph2="涉及schema属性visible和hidden的区别"
        paragraph3="数据流JDQ算子"
      />
      <Space size={200} align="start">
        <Form
          form={form1}
          // labelCol={6}
          // wrapperCol={12}
          labelWrap={true}
          labelWidth="auto"
          style={{ width: 500 }}
          onAutoSubmit={console.log}
        >
          <SchemaField schema={schema1} />
          <FormButtonGroup.FormItem>
            <Submit block size="large">
              提交
            </Submit>
          </FormButtonGroup.FormItem>
          <Footer />
        </Form>
        <Form
          form={form2}
          // labelCol={6}
          // wrapperCol={12}
          labelWrap={true}
          labelWidth="auto"
          style={{ width: 500 }}
          onAutoSubmit={console.log}
        >
          <SchemaField schema={schema2} />
          <SubmitButton />

          <Footer />
        </Form>
      </Space>
    </>
  );
};
