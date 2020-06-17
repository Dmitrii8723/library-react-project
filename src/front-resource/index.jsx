import React from 'react';
import Sidebar from '../common/Sidebar';

const FrontendResource = (props) => (
<div className="flex flex-grow 1 bg-yellow-400">
<Sidebar />
<div className="bg-red-400 flex-grow-1 w-2/3">
</div>
</div>
);

export default FrontendResource;