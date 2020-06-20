import React from 'react';
import Sidebar from '../common/Sidebar';
import Card from '../common/Card';
import samples from './samples'

const FrontendResource = (props) => (
<div className="flex flex-grow 1">
<Sidebar/>
<div className="bg-white-400 flex flex-row flex-grow-1 w-4/5">
{samples.map((sample) => (<Card sample={sample} />))}
</div>
</div>
);

export default FrontendResource;