import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
    <div className="text-gray-700 flex-grow-1 w-1/3">
<ul className="ml-5">
  <li className="mt-10">
    <Link className="text-dark-500 hover:text-blue-800" to="frontend-resource">Frontend frameworks</Link>
  </li>
  <li className="mt-10">
    <Link className="text-dark-500 hover:text-blue-800" to="/backend-resource">Backend frameworks</Link>
  </li>
  <li className="mt-10">
    <Link className="text-dark-500 hover:text-blue-800" to="/infrastructure-resource">Infrastructure</Link>
  </li>
</ul>
    </div>
);

export default Sidebar;