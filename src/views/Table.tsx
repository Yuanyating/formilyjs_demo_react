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
} from "@formily/antd";
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
    Select,
    ArrayTable,
    Password,
    NumberPicker,
    Radio,
  },
  scope: {},
});

const schema = {
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
      // "x-reactions": {
      //   target: "tableProps",
      //   fulfill: {
      //     state: {
      //       visible: "{{$self.value === 'table'}}",
      //     },
      //   },
      // },
    },
    tableProps: {
      type: "object",
      "x-validator": [],
      "x-designable-id": "rd74c97e9lb",
      "x-index": 1,
      // "x-display": "{{visibleTableProps}}",
      "x-reactions": {
        dependencies: ["apiType"],
        fulfill: {
          state: {
            visible: "{{$deps[0] === 'table'}}",
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
        fieldDetails: {
          type: "array",
          "x-decorator": "FormItem",
          "x-component": "ArrayTable",
          "x-validator": [],
          "x-component-props": {
            style: {
              width: "1000px",
            },
            size: "small",
          },
          "x-decorator-props": {
            size: "small",
            asterisk: true,
            wrapperWrap: false,
          },
          name: "fieldDetails",
          title: "表字段",
          "x-designable-id": "iaabvpuc19d",
          "x-index": 3,
          items: {
            type: "object",
            "x-designable-id": "f8iih4vj8oi",
            properties: {
              ukxn5z9as8f: {
                type: "void",
                "x-component": "ArrayTable.Column",
                "x-component-props": {
                  title: "Title",
                },
                "x-designable-id": "ukxn5z9as8f",
                "x-index": 0,
                properties: {
                  "4y4wvqxs5p2": {
                    type: "void",
                    "x-component": "ArrayTable.SortHandle",
                    "x-designable-id": "4y4wvqxs5p2",
                    "x-index": 0,
                  },
                },
              },
              rucmgn7ui3a: {
                type: "void",
                "x-component": "ArrayTable.Column",
                "x-component-props": {
                  title: "Title",
                },
                "x-designable-id": "rucmgn7ui3a",
                "x-index": 1,
                properties: {
                  l95mb3pepw5: {
                    type: "string",
                    "x-decorator": "FormItem",
                    "x-component": "Input",
                    "x-designable-id": "l95mb3pepw5",
                    "x-index": 0,
                  },
                },
              },
              br97vulr4je: {
                type: "void",
                "x-component": "ArrayTable.Column",
                "x-component-props": {
                  title: "Title",
                },
                "x-designable-id": "br97vulr4je",
                "x-index": 2,
                properties: {
                  tzft92o3pid: {
                    "x-decorator": "FormItem",
                    "x-component": "Select",
                    "x-validator": [],
                    "x-component-props": {},
                    "x-decorator-props": {},
                    enum: [
                      {
                        children: [],
                        label: "boolean",
                        value: "boolean",
                      },
                      {
                        children: [],
                        label: "string",
                        value: "string",
                      },
                      {
                        children: [],
                        label: "其他",
                        value: "else",
                      },
                    ],
                    "x-designable-id": "tzft92o3pid",
                    "x-index": 0,
                  },
                },
              },
              omua35262rh: {
                type: "void",
                "x-component": "ArrayTable.Column",
                "x-component-props": {
                  title: "Title",
                },
                "x-designable-id": "omua35262rh",
                "x-index": 3,
                properties: {
                  oq0b6ypafbr: {
                    type: "string",
                    "x-decorator": "FormItem",
                    "x-component": "Input",
                    "x-designable-id": "oq0b6ypafbr",
                    "x-index": 0,
                  },
                },
              },
              ons37u31xyp: {
                type: "void",
                "x-component": "ArrayTable.Column",
                "x-component-props": {
                  title: "Title",
                },
                "x-designable-id": "ons37u31xyp",
                "x-index": 4,
                properties: {
                  "3vwapokso30": {
                    type: "string",
                    "x-decorator": "FormItem",
                    "x-component": "Input",
                    "x-designable-id": "3vwapokso30",
                    "x-index": 0,
                  },
                },
              },
              q1l1rff7fdf: {
                type: "void",
                "x-component": "ArrayTable.Column",
                "x-component-props": {
                  title: "Title",
                },
                "x-designable-id": "q1l1rff7fdf",
                "x-index": 5,
                properties: {
                  nea8mpj7won: {
                    type: "void",
                    "x-component": "ArrayTable.Remove",
                    "x-designable-id": "nea8mpj7won",
                    "x-index": 0,
                  },
                  wa7jharxegz: {
                    type: "void",
                    "x-component": "ArrayTable.MoveDown",
                    "x-display": "none",
                    "x-designable-id": "wa7jharxegz",
                    "x-index": 1,
                  },
                  qfch1a8kg4i: {
                    type: "void",
                    "x-component": "ArrayTable.MoveUp",
                    "x-display": "none",
                    "x-designable-id": "qfch1a8kg4i",
                    "x-index": 2,
                  },
                },
              },
            },
          },
          properties: {
            新增一条: {
              type: "void",
              title: "Addition",
              "x-component": "ArrayTable.Addition",
              "x-designable-id": "7tl8n7m3v3e",
              "x-index": 0,
              "x-component-props": {
                style: {
                  display: "block",
                },
                defaultValue: "新增一条",
              },
              name: "新增一条",
            },
          },
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
  "x-designable-id": "q0e4m5ksks0",
};

export default () => {
  return (
    <>
      <section style={{ background: "#eee", width: "100%", padding: "0 24px" }}>
        <Typography.Title level={3}>场景描述</Typography.Title>
        <Typography.Paragraph>
          类似于JDQ表单，主要涉及联动和表格相关的展示
        </Typography.Paragraph>
        <Typography.Paragraph>
          待办项：1. 表格滚动 2.操作时表格刷新
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
  );
};
