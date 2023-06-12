import { createForm } from "@formily/core";
import { createSchemaField } from "@formily/react";
import {
  Form,
  FormItem,
  Input,
  SelectTable,
} from "@formily/antd";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import SubmitButton from "../components/common/SubmitButton";

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
    SelectTable,
  },
  scope: {},
});

const schema = {
  type: "object",
  properties: {
    selectTable: {
      type: "array",
      "x-decorator": "FormItem",
      "x-component": "SelectTable",
      "x-component-props": {
        bordered: false,
        showSearch: true,
        primaryKey: "key",
        isTree: true,
        filterOption: (input: string, option: any) =>
          option.description.toLowerCase().indexOf(input.toLowerCase()) >= 0,
        filterSort: (optionA: any, optionB: any) =>
          optionA.description
            .toLowerCase()
            .localeCompare(optionB.description.toLowerCase()),
        optionAsValue: true,
        rowSelection: {
          checkStrictly: false,
        },
        pagination: false,
      },
      enum: [
        { key: "1", name: "name", type: "string", description: "A-描述" },
        {
          key: "2",
          name: "dt",
          type: "object",
          description: "X-描述",
          children: [
            {
              key: "2-1",
              name: "alias",
              type: "string",
              description: "Y-描述",
            },
            {
              key: "2-2",
              name: "age",
              type: "number",
              description: "Z-描述",
            },
          ],
        },
        { key: "3", name: "type", type: "string", description: "SS-描述" },
      ],
      properties: {
        name: {
          title: "字段名",
          type: "void",
          "x-component": "SelectTable.Column",
          "x-component-props": {
            width: "30%",
          },
          properties: {
            type: {
              type: "number",
              default: "string",
              "x-decorator": "FormItem",
              "x-component": "Select",
              "x-component-props": {
                addonAfter: "$",
              },
              enum: [
                {
                  children: [],
                  label: "string",
                  value: "string",
                },
                {
                  children: [],
                  label: "boolean",
                  value: "boolean",
                },
                {
                  children: [],
                  label: "其他",
                  value: "else",
                },
              ],
            },
          },
        },
        type: {
          title: "字段类型",
          "x-component": "SelectTable.Column",
          "x-component-props": {
            width: "30%",
          },
          properties: {
            type: "string",
            "x-decorator": "FormItem",
            "x-component": "Input",
          },
        },
        description: {
          title: "描述",
          type: "string",
          "x-component": "SelectTable.Column",
          "x-component-props": {
            width: "40%",
          },
        },
      },
      "x-reactions": {
        target: "selectField",
        fulfill: {
          state: {
            value: "{{ $self.value.map((item) => item.name).join(',') }}",
          },
        },
      },
    },
    selectField: {
      type: "string",
      title: "已选择字段",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
  },
};

export default () => {
  return (
    <>
      <Header
        paragraph1="支持多选的表格，选择对应的项可回显在输入框中"
        paragraph2="SelectTable，利用reactions进行值联动"
        paragraph3="数据流distinct算子"
      />

      <Form
        form={form}
        labelWrap={true}
        labelWidth="auto"
        style={{ width: 800 }}
        onAutoSubmit={console.log}
      >
        <SchemaField schema={schema} />
        <SubmitButton />
        <Footer />
      </Form>
    </>
  );
};
