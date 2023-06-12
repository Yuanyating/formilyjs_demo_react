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
      title: '时间',
      "x-component": "NumberPicker",
      "x-decorator": "FormItem",
      "x-reactions": {
        dependencies: [".addon"],
        fulfill: {
          state: {
            value: ""
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
      <Header paragraph1="多个表单项组合的UI展示" paragraph2="设置表单项的basePath使数字和单位同一层级" paragraph3="存在单位的表单项" />

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
