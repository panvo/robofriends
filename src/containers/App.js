import React, { Component } from 'react';
import CardList from '../components/CardList'
// import { robots } from './robots'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(users => { this.setState({ robots: users }) })
    }


    onSearhChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }


    render() {
        const { robots, searchfield } = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        }
        )

        return !robots.length ?
            <h2 className='tc'>Loading..</h2> :
            (
                <div className='tc'>

                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searhChange={this.onSearhChange} />

                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>

                </div>
            )
    }
}

export default App;