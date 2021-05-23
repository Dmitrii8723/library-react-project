/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Link } from 'react-router-dom';

const listItemCss = 
   `padding: 1.5em 0;
    font-size: 20px;
    a {
      color: black;
      text-decoration: none;
    }`;

const Sidebar = () => (
    <div css={css`
    position: relative;
    width: 24em;
    height: calc(100vh - 75px);`}>  
<ul css={css`list-style-type: none;`}>  
  <li css={css(listItemCss)}>
  <Link to="/">Home</Link>
  </li> 
  <li css={css(listItemCss)}>
    <Link to="/frontend-resource">Frontend Frameworks</Link>
  </li>
  <li css={css(listItemCss)}>
    <Link to="/backend-resource">Backend Frameworks</Link>
  </li>
  <li css={css(listItemCss)}>
    <Link to="/infrastructure-resource">DevOps</Link>
  </li>
  <li css={css(listItemCss)}>
    <Link to="/frontend-video">Frontend Frameworks (video tutorials)</Link>
  </li>
  <li css={css(listItemCss)}>
    <Link to="/backend-video">Backend Frameworks (video tutorials)</Link>
  </li>
  <li css={css(listItemCss)}>
    <Link to="/infrastructure-video">DevOps (video tutorials)</Link>
  </li>
</ul>
    </div>
);

export default Sidebar;