import { createForm } from "@formily/core";
import { createSchemaField } from "@formily/react";
import {
  Form,
  FormItem,
  Input,
  Select,
  ArrayTable,
  Password,
  NumberPicker,
  Radio,
  Editable,
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
    Select,
    ArrayTable,
    Password,
    NumberPicker,
    Radio,
    Editable,
  },
  scope: {},
});

const schema = {
  type: "object",

  properties: {
    //表格
    projects: {
      type: "array",
      title: "",
      default: [],
      "x-decorator": "FormItem",
      "x-component": "ArrayTable",
      "x-component-props": {
        // scroll: {
        //   x: "600px",
        // },
        // style: {
        //   width: "720px",
        // },
        size: "small",
      },
      "x-decorator-props": {
        size: "small",
        asterisk: true,
        wrapperWrap: false,
      },
      items: {
        type: "object",
        properties: {
          column_1: {
            type: "void",
            "x-component": "ArrayTable.Column",
            "x-component-props": {
              width: 50,
              title: "排序",
              align: "center",
            },
            properties: {
              sortable: {
                type: "void",
                "x-component": "ArrayTable.SortHandle",
              },
            },
          },
          column_2: {
            type: "void",
            "x-component": "ArrayTable.Column",
            "x-component-props": {
              width: 80,
              title: "序号",
              align: "center",
            },
            properties: {
              index: {
                type: "void",
                "x-component": "ArrayTable.Index",
              },
            },
          },
          column_3: {
            type: "void",
            "x-component": "ArrayTable.Column",
            "x-component-props": {
              title: "类型",
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
          column_4: {
            type: "void",
            "x-component": "ArrayTable.Column",
            "x-component-props": {
              title: "自定义类型",
            },
            properties: {
              custom_type: {
                type: "number",
                default: "",
                "x-decorator": "FormItem",
                "x-component": "Input",
                "x-reactions": {
                  dependencies: [".type"],
                  fulfill: {
                    schema: {
                      "x-disabled": "{{$deps[0] !== 'else'}}",
                    },
                  },
                },
              },
            },
          },
          column_5: {
            type: "void",
            "x-component": "ArrayTable.Column",
            "x-component-props": {
              title: "操作",
              fixed: "right",
            },
            properties: {
              item: {
                type: "void",
                "x-component": "FormItem",
                properties: {
                  remove: {
                    type: "void",
                    "x-component": "ArrayTable.Remove",
                  },
                  moveDown: {
                    type: "void",
                    "x-component": "ArrayTable.MoveDown",
                  },
                  moveUp: {
                    type: "void",
                    "x-component": "ArrayTable.MoveUp",
                  },
                },
              },
            },
          },
        },
      },
      properties: {
        add: {
          type: "void",
          title: "Add",
          "x-component": "ArrayTable.Addition",
        },
      },
      // "x-display": "visible",
      // "x-visible": false,
    },
  },
};

export default () => {
  return (
    <>
      <Header
        paragraph1="支持排序和新增的表格"
        paragraph2="ArrayTable"
        paragraph3="数据流Select算子"
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
