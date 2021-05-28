 /** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useState, useEffect } from 'react';
import Sidebar from '../common/Sidebar';
import Container from '../common/Container';

const Dashboard = () => {
const [allResources, setAllResources] = useState([]);
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
useEffect(() => {
        fetch(`http://localhost:5000/graphql?query=${query}`, {
        method: 'GET',
        }).then((res) => res.json()
        .then((res) => setAllResources(res.data.allResources)))
}, []);
return(<div css={css`display: flex; width: 100%;`}>
<Sidebar/>
<Container samples={allResources} />
</div>);
};

export default Dashboard;