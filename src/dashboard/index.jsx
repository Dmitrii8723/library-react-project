import React from 'react';
import Sidebar from '../common/Sidebar';

const Dashboard = (props) => (
<div className="flex flex-grow 1 bg-gray-400">
<Sidebar />
<div className="bg-red-400 flex-grow-1 w-3/4">
</div>
</div>
);

export default Dashboard;