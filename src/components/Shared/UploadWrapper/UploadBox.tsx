"use client";

import classes from "./UploadWrapper.module.scss";
import { InboxOutlined } from "@ant-design/icons";
import { Upload, UploadProps } from "antd";

const { Dragger } = Upload;

export const UploadBox = (props: UploadProps) => {
  return (
    <div className={classes.uploadBox}>
      <Dragger {...props} name={"file"} multiple={false} maxCount={1}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from
          uploading company data or other banned files.
        </p>
      </Dragger>
    </div>
  );
};
