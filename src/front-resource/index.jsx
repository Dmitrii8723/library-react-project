 /** @jsx jsx */
 import { css, jsx } from '@emotion/react';
import Sidebar from '../common/Sidebar';
import frontResourceSamples from './samples'
import Container from '../common/Container'

const FrontEndResource = () => (
<div css={css`display: flex; width: 100%;`}>
<Sidebar/>
<Container samples={frontResourceSamples} />
</div>
);

export default FrontEndResource;