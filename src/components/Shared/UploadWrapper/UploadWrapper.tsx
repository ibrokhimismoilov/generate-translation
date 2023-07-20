"use client";

import React, { useMemo, useState } from "react";
import classes from "./UploadWrapper.module.scss";
import { UploadBox } from "./UploadBox";
import { UploadFile, message } from "antd";
import CreateJSON from "./CreateJSON";
import { isJson } from "@/utils/general";

const UploadWrapper = () => {
  const [left, setLeft] = useState<object | null>(null);
  const [right, setRight] = useState<object | null>(null);
  const [leftFileList, setLeftFileList] = useState<UploadFile[]>([]);
  const [rightFileList, setRightFileList] = useState<UploadFile[]>([]);

  const leftProps = useMemo(
    () => ({
      title: "Yuklash uchun faylni ushbu hududga bosing yoki ustiga joylang",
      description: "Asosiy translation.json faylni yuklang",
      draggerProps: {
        onRemove: () => {
          setLeftFileList([]);
        },
        beforeUpload: (file: any) => {
          const reader = new FileReader();

          reader.onload = (e: any) => {
            if (isJson(e.target.result)) {
              message.success("Muvofaqqiyatli yuklandi");
              setLeft(JSON.parse(e.target.result));
            } else message.error("Noto'g'ri JSON file yuklanmoqda");
          };

          reader.readAsText(file);

          setLeftFileList([file]);

          return false;
        },
        fileList: leftFileList,
      },
    }),
    [leftFileList]
  );

  const rightProps = useMemo(
    () => ({
      title: "Yuklash uchun faylni ushbu hududga bosing yoki ustiga joylang",
      description: "Qoshimcha translation.json faylni yuklang",
      draggerProps: {
        onRemove: () => {
          setRightFileList([]);
        },
        beforeUpload: (file: any) => {
          const reader = new FileReader();

          reader.onload = (e: any) => {
            if (isJson(e.target.result)) {
              message.success("Muvofaqqiyatli yuklandi");
              setRight(JSON.parse(e.target.result));
            } else message.error("Noto'g'ri JSON file yuklanmoqda");
          };

          reader.readAsText(file);

          setRightFileList([file]);

          return false;
        },
        fileList: rightFileList,
      },
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
