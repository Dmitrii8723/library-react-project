import React from 'react';
import ReactPlayer from 'react-player/lazy'

const Videocard = (props) => (
<div className="flex flex-col bg-gray-200 h-64 m-4 text-gray-700 rounded-lg shadow-lg pr-2 pl-2 pt-1 w-64">  
{/* <img className="h-48 w-52 rounded-lg"
            alt="Location"
            src={props.sample.cover}
          /> */}
<ReactPlayer 
   width='100%'
   height='100%' 
   url={props.sample.webPreviewUrl} 
   controls
/>
<div className="ml-1 mt-1">
<div className="mb-2">
   {props.sample.name}
</div>
</div>
</div>
);

export default Videocard;