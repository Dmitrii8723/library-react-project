/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Card from '../common/Card';

const Container = ({ resources }) => (
<div css={css`
width: 100%; 
display: flex; 
padding: 2em 3em; 
flex-wrap: wrap;`}>
{resources.map((resource) => (<Card resource={resource} />))}
</div>
);

export default Container;