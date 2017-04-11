import React from 'react';

class Player extends React.Component {

    render() {

        return (
            <section>
              <div className="player">
                  <h2>{this.props.player.name}</h2>
              </div>
            </section>
        );
    }
}

export default Player;
