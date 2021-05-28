 /** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useEffect, useState } from 'react';
import Sidebar from '../common/Sidebar';
import Container from '../common/Container';
import { getResources } from '../routes/index.js';

const query = `
{
    resources(type: "frontend", video: true) {
      name
      resource_url
      cover_url
      video
      type
    }
  }`;
const FrontEndVideo = () => {
const [frontendVideoResources, setFrontendVideoResources] = useState([]);
useEffect(() => {
    getResources(query).then((res) => res.json()
        .then((res) => setFrontendVideoResources(res.data.resources)));
}, []);
return(<div css={css`display: flex; width: 100%;`}>
<Sidebar/>
<Container resources={frontendVideoResources} />
</div>)
};

export default FrontEndVideo;