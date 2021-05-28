/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import ReactPlayer from 'react-player/lazy';

const Card = (props) => (
<div css={css`
width: 27.5%; 
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
{props.sample.cover_url && (
<img
 css={css`
 width: 100%; 
 height: 80%;
 &:hover {
   cursor: pointer;
}`}
 src={props.sample.cover_url}
 alt=""
 onClick={() => window.open(props.sample.resource_url)}
/>)}
{props.sample.resource_url && props.sample.video && (
   <div css={css`
   width: 100%; 
   height: 80%;`}>
<ReactPlayer 
   width='100%'
   height='100%' 
   url={props.sample.resource_url} 
   controls
/>
</div>)}
   <p css={css`font-size: 1.2em;`}>{props.sample.name}</p>
</div>
);

export default Card;