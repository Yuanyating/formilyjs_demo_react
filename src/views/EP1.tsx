import { createForm } from "@formily/core";
import { createSchemaField } from "@formily/react";
import { Form, FormButtonGroup, FormItem, Input, Submit } from "@formily/antd";
import { useEffect } from "react";
import SelectRemote from "../components/SelectRemote";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import SubmitButton from "../components/common/SubmitButton";

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
      // "x-reactions": {
      //   target: "table",
      //   fulfill: {
      //     state: {
      //       value: "",
      //       visible: "{{$self.value !== 'app'}}",
      //     },
      //   },
      // },
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
    // form.setInitialValues({ db: "abc" });
  }, []);

  return (
    <>
      <Header
        paragraph1="select下拉选项是从接口获取的，并且第二个获取下拉请求接口时依赖第一个下拉项的值作为参数"
        paragraph2="formily自定义组件"
        paragraph3="数据流Hive算子库表联动"
      />
      <Form
        form={form}
        labelCol={4}
        wrapperCol={16}
        style={{ width: 500, marginTop: 48 }}
        onAutoSubmit={console.log}
      >
        <SchemaField schema={schema} />
        <SubmitButton />
        <Footer />
      </Form>
    </>
  );
};
