import React from 'react';
import Sidebar from '../common/Sidebar';
import Videocard from '../common/Videocard';
import samples from './samples'

const InfrastructureVideo = () => (
<div className="flex flex-grow 1">
<Sidebar/>
<div className="bg-white-400 flex flex-row flex-grow-1 w-4/5">
{samples.map((sample) => (<Videocard sample={sample} />))}
</div>
</div>
);

export default InfrastructureVideo;