/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Sidebar from '../common/Sidebar';
import infrastructureSamples from './samples';
import Container from '../common/Container';

const Infrastructure = () => (
  <div css={css`display: flex; width: 100%;`}>
  <Sidebar/>
  <Container samples={infrastructureSamples} />
  </div>
  );

export default Infrastructure;