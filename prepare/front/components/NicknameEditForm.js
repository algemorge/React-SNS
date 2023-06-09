import { Form, Input } from "antd";
import React, { useMemo } from "react";

const NicknameEditForm = () => {
  const style = useMemo(() => ({
    marginBottom: "28px",
    border: "1px solid #d9d9d9",
    padding: "10px",
  }));
  return (
    <Form style={style}>
      <Input.Search addonBefore="닉네임" enterButton="수정" />
    </Form>
  );
};

export default NicknameEditForm;
