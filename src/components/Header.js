import React from 'react';

const Header = (props) => {
  return (
    <div className="blue-header">
        <h3>{props.title}</h3>
    </div>
  );
}

export default Header;
