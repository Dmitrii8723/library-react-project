 /** @jsx jsx */
 import { css, jsx } from '@emotion/react';
 import { useEffect, useState } from 'react';
 import Sidebar from '../common/Sidebar';
 import Container from '../common/Container';
 import { getResources } from '../routes/index';
 
 const query = `
 {
     resources(type: "infrastructure", video: false) {
       name
       resource_url
       cover_url
       video
       type
     }
   }`;
 const Infrastructure = () => {
 const [infrastructureResources, setInfrastructureResources] = useState([])
 useEffect(() => {
     getResources(query).then((res) => res.json()
     .then((res) => setInfrastructureResources(res.data.resources)))
 }, []);
 return (<div css={css`display: flex; width: 100%;`}>
 <Sidebar/>
 <Container resources={infrastructureResources} />
 </div>);
 };
 
 export default Infrastructure;