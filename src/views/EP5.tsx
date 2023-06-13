import { createForm } from "@formily/core";
import { Field, createSchemaField } from "@formily/react";
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

const form = createForm();

const SchemaField = createSchemaField({
  components: {
    Input,
    Select,
    NumberPicker,
    DatePicker,
    // FormItem
  },
  scope: {
  },
});

const addonSchema = {
  type: "object",
  properties: {
    addon: {
      type: "string",
      
      "x-component": "Select",
      "x-decorator": "FormItem",
      "x-component-props": {},
      enum: [
        {
          label: "$",
          value: "USD",
        },
        {
          label: "€",
          value: "EUR",
        },
      ],
      default: "USD",
    },
  },
};

const schema = {
  type: "object",
  properties: {
    time: {
      type: "number",
      title: '时间',
      "x-component": "NumberPicker",
      "x-decorator": "FormItem",
      "x-reactions": {
        dependencies: [".addon"],
        fulfill: {
          state: {
            value: null
          }
        }
      },
      "x-component-props": {
        style: {
          width: "100%",
        },
        // addonAfter: <AddonField schema={addonSchema} />,
        addonAfter: (
          <Field
            name="addon"
            component={[
              Select,
              {
                options: [
                  {
                    label: "秒",
                    value: "s",
                  },
                  {
                    label: "毫秒",
                    value: "ms",
                  },
                ],
                default: "s",
                style: {
                  width: "70px",
                },
              },
            ]}
            decorator={["FormItem"]}
            basePath={""}
            
          />
        ),
      },
      
    },
  },
};

export default () => {
  return (
    <>
      <Header paragraph1="多个表单项组合的UI展示" paragraph2="设置表单项的basePath使数字和单位同一层级" paragraph3="存在单位的表单项" />

      <Form
        form={form}
        initialValues={{ time: 1, addon: 's'}}
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
