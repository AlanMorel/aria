import React from 'react';
import Config from '../../../Config';

class Alert extends React.Component {
    render() {
      return (
        <div className="alert"><span className={Config.alert.type}></span>{Config.alert.content}</div>
      );
    }
}

export default Alert;
