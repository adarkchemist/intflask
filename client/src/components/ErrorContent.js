/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Spin, Typography, Layout } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import CenteredContent from './CenteredContent';
const { Text } = Typography;
const { Content } = Layout;

export default function ErrorContent({ children, ...props }) {
  return (
    <CenteredContent>
      <Text>
        <CloseCircleOutlined /> {children}
      </Text>
    </CenteredContent>
  );
}
