 /** @jsx jsx */
 import { css, jsx } from '@emotion/react';
import Sidebar from '../common/Sidebar';
import frontEndSamples from './samples'
import Container from '../common/Container'

const FrontEndVideo = () => (
<div css={css`display: flex; width: 100%;`}>
<Sidebar/>
<Container samples={frontEndSamples} />
</div>
);

export default FrontEndVideo;