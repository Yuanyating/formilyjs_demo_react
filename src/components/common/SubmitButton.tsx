import { FormButtonGroup, Submit } from "@formily/antd";

export default () => {
  return (
    <FormButtonGroup.FormItem>
      <Submit block size="large" style={{ marginTop: 16 }}>
        提交
      </Submit>
    </FormButtonGroup.FormItem>
  );
};
