import { createForm, GeneralField } from "@formily/core";
import { Field, FormProvider, createSchemaField, Schema } from "@formily/react";
import {
  FormItem,
  FormLayout,
  Form,
  Input,
  FormButtonGroup,
  Submit,
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
  },
  scope: {
    disabledFuture: () => {},
  },
});

// const FieldContext = createContext<GeneralField | null>(null);

// const selectAfter = (
//   <Select defaultValue="USD" style={{ width: 60 }}>
//     <Option value="USD">$</Option>
//     <Option value="EUR">€</Option>
//     <Option value="GBP">£</Option>
//     <Option value="CNY">¥</Option>
//   </Select>
// );

// const AddonField = createSchemaField({
//   components: {
//     Select,
//   },
//   basePath: "",
// });

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
      "x-component": "NumberPicker",
      "x-decorator": "FormItem",
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
                    label: "$",
                    value: "USD",
                  },
                  {
                    label: "€",
                    value: "EUR",
                  },
                ],
                default: "USD",
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
    // time: {
    //   type: "string",
    //   "x-component": "DatePicker",
    //   "x-decorator": "FormItem",
    //   "x-component-props": {
    //     format: "YYYY-MM-DD HH:mm:ss",
    //     showTime: true,
    //     disabledDate: (current: any) => current && current > new Date(),
    //   },
    // },
  },
};

export default () => {
  return (
    <>
      <Header paragraph1="多个表单项组合的UI展示" />

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
