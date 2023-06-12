import { createForm } from "@formily/core";
import { createSchemaField } from "@formily/react";
import {
  DatePicker,
  Input,
  Radio,
  Form,
  FormItem
} from "@formily/antd";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import SubmitButton from "../components/common/SubmitButton";

const form = createForm();

const SchemaField = createSchemaField({
  components: {
    Input,
    Radio,
    DatePicker,
    FormItem
  },
  // scope:
});

const schema = {
  type: "object",
  properties: {
    "[startDate,endDate]": {
      type: "string",
      title: "解构后",
      default: ["2020-11-20", "2021-12-30"],
      "x-decorator": "FormItem",
      "x-component": "DatePicker.RangePicker",
      "x-component-props": {
        style: {
          width: "100%",
        },
      },
    },
  },
};

export default () => {
  return (
    <>
      <Header paragraph1={`当前后端数据格式无法达成一致时，可通过兼容方案处理。Formily提供解构路径的能力，RangePicker组件本身返回的是一个数组，通过formily可直接拆成两个key传给后端`} />
      <Form
        form={form}
        // labelCol={6}
        // wrapperCol={12}
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
