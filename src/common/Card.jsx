import React from 'react';

const Card = (props) => (
<div className="flex flex-col bg-gray-200 h-64 m-4 text-gray-700 rounded-lg shadow-lg pr-2 pl-2 pt-1 w-64">  
<img className="h-48 w-52 rounded-lg"
            alt="Location"
            src={props.sample.cover}
          />
<div className="ml-2 mt-1">
<div className="mb-2">
   {props.sample.name}
</div>
         <a className="text-dark-500 hover:text-blue-600"
            href={props.sample.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Show the resource
          </a>
</div>
</div>
);

export default Card;