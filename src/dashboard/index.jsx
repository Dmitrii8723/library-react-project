 /** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useState, useEffect } from 'react';
import Sidebar from '../common/Sidebar';
import Container from '../common/Container';
import { getResources } from '../routes/index.js';

const query = `
{
allResources {
    name
    resource_url
    cover_url
    video
    type
  }
}`;
const Dashboard = () => {
const [allResources, setAllResources] = useState([]);
useEffect(() => {
        getResources(query).then((res) => res.json()
        .then((res) => setAllResources(res.data.allResources)))
}, []);
return(<div css={css`display: flex; width: 100%;`}>
<Sidebar/>
<Container resources={allResources} />
</div>);
};

export default Dashboard;