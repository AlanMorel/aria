import React from 'react';
import Jobs from '../../../Jobs';

class Player extends React.Component {

    getGuild() {
      if (this.props.player.guild_name) {
          return this.props.player.guild_name;
      }
      return "No Guild";
    }

    render() {
        var items = [1002736,32562,20246,1051111];
        var skinId = 2000;
        
        if (this.props.rank) {
            var rank = (
                <span className="rank">#{this.props.rank}</span>
            );
        }

        return (
            <section className="player">
                <div className="avatar">
                    <img src={"http://labs.maplestory.io/api/gms/latest/character/compact/"+skinId+"/"+items.join(',')+"/stand1?showears=false"} alt={this.props.player.name} />
                </div>
                <h2>{rank}{this.props.player.name}</h2>
                <h3><span className="level">Level {this.props.player.level}</span> ({this.props.player.exp} exp)</h3>
                <h3>{Jobs[this.props.player.job_id].name}</h3>
                <h3>{this.props.player.fame} Fame</h3>
                <h3 className="guild">{this.getGuild()}</h3>
            </section>
        );
    }
}

export default Player;
