 /** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Sidebar from '../common/Sidebar';
import dashboardSamples from './samples'
import Container from '../common/Container';

const Dashboard = () => (
<div css={css`display: flex; width: 100%;`}>
<Sidebar/>
<Container samples={dashboardSamples} />
</div>
);

export default Dashboard;