import React, { useCallback, useState } from "react";
import { Button, message, notification, Input } from "antd";

const { TextArea } = Input;

interface IProps {
  left?: object | null;
  right?: object | null;
}

const CreateJSON = ({ left, right }: IProps) => {
  const [value, setValue] = useState("");

  const copyToClipBoard = useCallback(() => {
    if (!left) message.error("Iltimos asosiy JSON faylni yuklang!");
    else if (!right) message.error("Iltimos qo'shimcha JSON faylni yuklang!");
    else {
      const result = { ...left, ...right };
      const json = JSON.stringify(result, null, 4);
      const input = document.createElement("input");
      input.value = JSON.stringify(result, null, 4);
      document.body.appendChild(input);
      input.select();
      //   @ts-ignore
      document.execCommand("copy");
      document.body.removeChild(input);
      notification.success({ message: "Copied" });
      setValue(json);
    }
  }, [left, right]);

  return (
    <>
      {value && (
        <TextArea
          size="large"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id="textarea"
          style={{ width: "100%" }}
          rows={10}
        />
      )}
      <Button size="large" type="primary" onClick={copyToClipBoard}>
        Generate & Copy
      </Button>
    </>
  );
};

export default CreateJSON;
