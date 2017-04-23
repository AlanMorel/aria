import React from 'react';
import Config from '../../../Config';

class Player extends React.Component {

    render() {
        var ign = "Connie";

        return (
            <section className="player">
                <div className="avatar">
                    <img src={"https://playorion.net/characters/" + ign + ".png"} alt=""/>
                </div>
                <h2>{this.props.player.name}</h2>
                <h3>Level {this.props.player.level} {Config.job[this.props.player.job_id].name}</h3>
                <h3>{this.props.player.fame} Fame</h3>
                <h3 className="guild">{this.props.player.guild_name} Guild</h3>
            </section>
        );
    }
}

export default Player;
