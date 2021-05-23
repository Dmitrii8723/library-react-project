 /** @jsx jsx */
 import { css, jsx } from '@emotion/react';
import Sidebar from '../common/Sidebar';
import backEndSamples from './samples'
import Container from '../common/Container'

const BackEndVideo = () => (
<div css={css`display: flex; width: 100%;`}>
<Sidebar/>
<Container samples={backEndSamples} />
</div>
);

export default BackEndVideo;