/** @jsx jsx */
import { css, jsx } from '@emotion/core';

// -- General --
import React from 'react';

// -- Components --
import { Layout } from 'antd';
import IntflaskHeader from './IntflaskHeader';
import IntflaskFooter from './IntflaskFooter';
const { Content } = Layout;

/** Renders the general page layout and general styles/themes */
export default function IntflaskLayout({ children, ...props }) {
  return (
    <React.Fragment>
      <Layout
        css={css`
          display: flex;
          min-height: 100vh;
        `}
        {...props}
      >
        <IntflaskHeader>Header</IntflaskHeader>
        {children}
        <IntflaskFooter>Footer</IntflaskFooter>
      </Layout>
    </React.Fragment>
  );
}
