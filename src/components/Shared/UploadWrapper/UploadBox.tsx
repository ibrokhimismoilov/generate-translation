"use client";

import classes from "./UploadWrapper.module.scss";
import { InboxOutlined } from "@ant-design/icons";
import { Upload, UploadProps } from "antd";

const { Dragger } = Upload;

interface IProps {
  title?: string;
  description?: string;
  draggerProps?: UploadProps;
}

export const UploadBox = ({ title, description, draggerProps }: IProps) => {
  return (
    <div className={classes.uploadBox}>
      <Dragger {...draggerProps} name={"file"} multiple={false} maxCount={1}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">{title}</p>
        <p className="ant-upload-hint">{description}</p>
      </Dragger>
    </div>
  );
};
