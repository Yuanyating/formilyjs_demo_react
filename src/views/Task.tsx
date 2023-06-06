import { createForm } from "@formily/core";
import { createSchemaField } from "@formily/react";
import {
  Form,
  FormButtonGroup,
  FormItem,
  FormGrid,
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
    FormGrid
  },
  scope: {},
});

const schema = {
  type: "object",
  
  properties: {
    collapse1: {
      type: "void",
      "x-component": "FormCollapse",
      "x-component-props": {
        accordion: false,
        ghost: false,
        title: "运行任务"
      },
      name: "collapse1",
      "x-designable-id": "3d1nogobgnd",
      "x-index": 0,
      properties: {
        run: {
          type: "object",
          "x-component": "FormCollapse.CollapsePanel",
          "x-component-props": {
            header: "运行规则",
          },
          "x-designable-id": "5xhkyxbenq8",
          properties: {
            grid: {
              type: "void",
              "x-component": "FormGrid",
              "x-component-props": {
                minColumns: 2,
                maxColumns: 2
              },
              "x-designable-id": "3j570ckuxdx",
              "x-index": 0,
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
                  required: true,
                  "x-validator": [],
                  "x-component-props": {},
                  "x-decorator-props": {
                  
                  },
                  "x-designable-id": "8vfyvvb3t7a",
                  "x-index": 0,
                },
                maxRunTime: {
                  type: "number",
                  title: "执行超时时长（分）",
                  "x-decorator": "FormItem",
                  "x-component": "NumberPicker",
                  "x-validator": [],
                  "x-component-props": {
                    min: 0,
                    max: 3600
                  },
                  "x-decorator-props": {
                  
                  },
                  default: 1440,
                  required: true,
                  "x-index": 1,
                },
                cycleType: {
                  type: "string",
                  title: "周期类型"
                }
              }
            },
          },
          name: "run",
          "x-index": 0,
        },
      },
      
    }
    
  },
  
  "x-index": 0,
};

export default () => {
  return (
    <>
      <Header title="场景描述" paragraph="折叠面板，复刻任务面板，使用FormGrid布局" />

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
