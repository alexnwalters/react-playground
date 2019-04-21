import React from 'react';

class HelloWorld extends React.Component {
    static defaultProps = {
        who: 'world'
    }

    constructor(props) {
        super(props)
        this.state = {who: 'world'}
    }

    handleFriend = () => {
        const friendButton = 'friend'
        this.setState({
            who: friendButton
        })
    }

    handleReact = () => {
        const reactButton = 'react'
        this.setState({
            who: reactButton
        })
    }

    handleWorld = () => {
        const worldButton = 'world'
        this.setState({
            who: worldButton
        })
    }

    render() {
        return(
            <div>
                <p>Hello, {this.state.who}!</p>
                <button onClick={this.handleFriend}>Friend</button>
                <button onClick={this.handleReact}>React</button>
                <button onClick={this.handleWorld}>World</button>
            </div>
        )
    }
}

export default HelloWorld