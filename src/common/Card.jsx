/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import ReactPlayer from 'react-player/lazy';
import { withRouter } from 'react-router-dom';

const Card = (props) => (
<div css={css`
width: 27%; 
margin: 0 1em; 
border: 1px solid rgb(242, 242, 243);
height: 20em;
padding: 1em;
margin: 1em;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`}
>  
{props.sample.cover && (
<img
 css={css`
 width: 100%; 
 height: 80%;
 &:hover {
   cursor: pointer;
}`}
 src={props.sample.cover}
 alt=""
 onClick={() => window.open(props.sample.link)}
/>)}
{props.sample.webPreviewUrl && (
   <div css={css`
   width: 100%; 
   height: 80%;`}>
<ReactPlayer 
   width='100%'
   height='100%' 
   url={props.sample.webPreviewUrl} 
   controls
/>
</div>)}
   <p css={css`font-size: 1.2em;`}>{props.sample.name}</p>
</div>
);

export default Card;