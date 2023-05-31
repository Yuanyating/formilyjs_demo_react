import { FormConsumer } from "@formily/react";

export default () => {
  return (
    <code>
      <pre
        style={{
          color: "#000",
          display: "flex",
          justifyContent: "center",
          marginTop: 64,
        }}
      >
        <FormConsumer>
          {(form: any) => JSON.stringify(form.values, null, 2)}
        </FormConsumer>
      </pre>
    </code>
  );
};
