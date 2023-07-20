"use client";

import React, { useMemo, useState } from "react";
import classes from "./UploadWrapper.module.scss";
import { UploadBox } from "./UploadBox";
import { UploadFile, UploadProps, message } from "antd";
import { isJson } from "@/utils/general";
import CreateJSON from "./CreateJSON";
import TextArea from "antd/es/input/TextArea";

const UploadWrapper = () => {
  const [left, setLeft] = useState<object | null>(null);
  const [right, setRight] = useState<object | null>(null);
  const [leftFileList, setLeftFileList] = useState<UploadFile[]>([]);
  const [rightFileList, setRightFileList] = useState<UploadFile[]>([]);

  const leftProps: UploadProps = useMemo(
    () => ({
      onRemove: () => {
        setLeftFileList([]);
      },
      beforeUpload: (file) => {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          if (isJson(e.target.result)) {
            message.success("Success");
            setLeft(JSON.parse(e.target.result));
          } else message.error("JSON file xato");
        };

        reader.readAsText(file);

        setLeftFileList([file]);

        return false;
      },
      fileList: leftFileList,
    }),
    [leftFileList]
  );

  const rightProps: UploadProps = useMemo(
    () => ({
      onRemove: () => {
        setRightFileList([]);
      },
      beforeUpload: (file) => {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          if (isJson(e.target.result)) {
            message.success("Success");
            setRight(JSON.parse(e.target.result));
          } else message.error("JSON file xato");
        };

        reader.readAsText(file);

        setRightFileList([file]);

        return false;
      },
      fileList: rightFileList,
    }),
    [rightFileList]
  );

  return (
    <div className={classes.main}>
      <div className={classes.wrapper}>
        <UploadBox {...leftProps} />
        <UploadBox {...rightProps} />
      </div>

      <div className={classes.bottom}>
        <CreateJSON {...{ left, right }} />
      </div>
    </div>
  );
};

export default UploadWrapper;
