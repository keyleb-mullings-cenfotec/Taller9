import React from "react";
import './clock.css'

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            day: true
        };
        console.log('Constructor called!');
    }

    render() {
        console.log('Render called!');
        return (
            <div className={`clock ${!this.state.day ? 'night' : ''}`}>
                <h1>Hello World!</h1>
                <h2>It's {this.state.date.toLocaleTimeString()} ⏰</h2>

            </div>
        );
    }

    componentDidMount() {
        console.log('componentDidMount called!');
        this.timerId = setInterval(() => {
            this.tick()
        }, 1000)
    }

    tick() {
        console.log('tick called!')
        this.setState({
            date: new Date(),
            day: this.state.date <= 17
        })
    }

    componentDidUpdate() {
        console.log('componentDidUpdate called!');
        if (this.state.day) {
            console.log('good morning! ⛅')
        } else {
            console.log('good morning! 🌙')
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount called!');
        clearInterval(this.timerId);
    }
}

// function Clock(props) {
//     return (
//     <div>
//       <h1>Hello World!</h1>
//       <h2>It's {props.date.toLocaleTimeString()} ⏰</h2>
//     </div>
//     );
// }

export default Clock;