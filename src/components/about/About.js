import React from 'react';
import Config from '../../Config';

class About extends React.Component {
    render() {
        return (
          <div>
            <h1>About</h1>
            <div>{Config.about_content}</div>
          </div>
        );
    }
}

export default About;
