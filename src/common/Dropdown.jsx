/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useEffect } from 'react';
import { VideoSourceItems } from './VideoSourceItems';
import { WebsiteSourceItems } from './WebsiteSourceItems';

const listStyle = css`
ul {
      margin-top: 0.5em; 
      list-style-type: none;
      padding: 0;
      margin-bottom: 0;
li {
    padding: 1em 3em;
    font-size: 1.2em;

  &:hover {
    cursor: pointer;
    background: hsl(260, 5%, 80%);
  }
 } 
 li:last-child {
    padding: 1em 3em;
    border-radius: 5px;
  }  
}`;

const pStyle = css`
    margin: 0; 
    color: #8A8282; 
    padding: 1em; 
    font-size: 1.2em;
  `;

const Dropdown = () => (
    <div css={css`
            position: absolute;
            top: 4em;
            @media screen and (max-width: 1600px) {
                right: 5em;
              }
            @media screen and (min-width: 1700px) {
                right: 10em;
              }
            background: #E4E6EB;
            margin-top: .5em;
            border-radius: 5px;`}> 
      <div css={(listStyle)}>
        <p css={(pStyle)}>Add New Youtube Url to:</p>
      <ul>
          {VideoSourceItems.map ((item) => 
          (<li
            onBlur={(event) => console.log('event', event)}
          >
            {item.title}
          </li>))}
      </ul>
      </div>
      <div css={(listStyle)}>
        <p css={(pStyle)}>Add Website Url to:</p>
      <ul>
          {WebsiteSourceItems.map ((item) => 
          (<li>
            {item.title}
          </li>))}
      </ul>
      </div>
    </div>);

export default Dropdown;