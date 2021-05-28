/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useEffect, useState } from 'react';
import Sidebar from '../common/Sidebar';
import Container from '../common/Container';
import { getResources } from '../routes/index';

const query = `
{
    resources(type: "backend", video: false) {
      name
      resource_url
      cover_url
      video
      type
    }
  }`;
const BackEndResource = () => {
  const [backendResources, setBackendResources] = useState([]);
  useEffect(() => {
    getResources(query).then((res) => res.json()
        .then((res) => setBackendResources(res.data.resources)));
  })
  return (<div css={css`display: flex; width: 100%;`}>
  <Sidebar/>
  <Container resources={backendResources} />
  </div>);
};

export default BackEndResource;