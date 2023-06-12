import { createForm, registerValidateFormats } from "@formily/core";
import { createSchemaField } from "@formily/react";
import {
  Form,
  FormItem,
  Input,
  Select,
  NumberPicker,
  DatePicker,
} from "@formily/antd";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import SubmitButton from "../components/common/SubmitButton";
import { useRequest } from "ahooks";
import { validateTableName } from '../service/index'
import { notification } from "antd";

const form = createForm();

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
    Select,
    NumberPicker,
    DatePicker,
  },
  scope: {
    runAsync: async (tableName: string) => {
      try {
        await validateTableName({ tableName }) 
        return undefined
      } catch (err: any) {
        console.log('err', err);
        return err.message
      }
    } 
  }
});

registerValidateFormats({
  custom_format: /123/,
})



const schema = {
  type: "object",
  properties: {
    simpleValidate: {
      name: 'simpleValidate',
      type: "string",
      title: '普通校验',
      "x-component": "Input",
      "x-decorator": "FormItem",
      'x-validator': {
        required: true,
      },
    },
    customValidate: {
      name: 'customValidate',
      type: 'string',
      title: '自定义校验',
      "x-component": "Input",
      "x-component-props": {
        placeholder: "请输入包含123的字符串"
      },
      "x-decorator": "FormItem",
      'x-validator': {
        format: 'custom_format',
        message: '错误❎❎❎❎❎❎❎❎❎❎❎❎'
      }
    },
    asyncValidate: {
      name: 'asyncValidate',
      type: "string",
      title: '异步校验',
      "x-component": "Input",
      "x-component-props": {
        placeholder: "请确认填写的表名是唯一的"
      },
      "x-decorator": "FormItem",
      "x-validator": {
        triggerType: 'onBlur',
        validator: `{{async (value) => {
          console.log('value', value)
          const data = await runAsync({ tableName: value })
          return data
        }}}`,
        
      }
    }
  },
};

export default () => {
 
  return (
    <>
      <Header paragraph1="几种不同的校验方式，普通校验、全局自定义校验、异步校验" paragraph2="" paragraph3="异步校验适用于表名唯一性校验等情况" />

      <Form
        form={form}
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
