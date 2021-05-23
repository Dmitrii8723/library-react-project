/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Card from '../common/Card';

const Container = ({ samples }) => (
<div css={css`
width: 100%; 
display: flex; 
padding: 2em 3em; 
flex-wrap: wrap;`}>
{samples.map((sample) => (<Card sample={sample} />))}
</div>
);

export default Container;