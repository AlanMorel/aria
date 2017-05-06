import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Axios from 'axios';
import Config from './Config';

import About from './components/about/About';
import ControlPanel from './components/controlpanel/ControlPanel';
import Downloads from './components/downloads/Downloads';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Header from './components/navigation/header/Header';
import News from './components/news/News';
import Post from './components/post/Post';
import Rankings from './components/rankings/Rankings';
import Vote from './components/vote/Vote';

import './stylesheets/App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.setLogin = this.setLogin.bind(this);
        this.state = {
            logged_in: false,
            username: "",
            gm_level: 0
        };
    }

    componentDidMount() {
        Axios.get(Config.base_url, { withCredentials: true }).then(response => {
            console.log(response.data);
            this.setState(response.data);
        });
    }

    setLogin(status){
        console.log("Setting new login status");
        console.log(status);
        this.setState(status);
    }

    render() {

        var VotePage = (props) => {
            return <Vote status={this.state}/>;
        }
        
        var ControlPanelPage = (props) => {
            return <ControlPanel status={this.state}/>;
        }

        return (
            <Router>
                <div>
                    <Header status={this.state} setLogin={this.setLogin}/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/news" component={News}/>
                    <Route exact path="/news/:param1" component={News}/>
                    <Route exact path="/news/:param1/:param2" component={News}/>
                    <Route exact path="/post" component={Post}/>
                    <Route exact path="/post/:id" component={Post}/>
                    <Route exact path="/rankings" component={Rankings}/>
                    <Route exact path="/rankings/:param1" component={Rankings}/>
                    <Route exact path="/rankings/:param1/:param2" component={Rankings}/>
                    <Route exact path="/rankings/:param1/:param2/:param3" component={Rankings}/>
                    <Route exact path="/downloads" component={Downloads}/>
                    <Route exact path="/vote" component={VotePage}/>
                    <Route exact path="/controlpanel" component={ControlPanelPage}/>
                    <Footer/>
                </div>
            </Router>
        );
    };
}

export default App
