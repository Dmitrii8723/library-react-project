import React from 'react';

class NewComponent extends React.Component {
    render() 
{
    return(<div>
    {this.props.name}
    </div>)
    } 
}

export default NewComponent;