import React from 'react'

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    }

    constructor(props){
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }

    handleClick = () => {
        this.setState({
            spinningTheChamber: true
        })

        this.timeout = setTimeout(() => {
            this.setState({
                chamber: Math.ceil(Math.random() * 8),
                spinningTheChamber: false
            })
            console.log(this.state.chamber)
            console.log(this.props.bulletInChamber)
        }, 2000);
    }

    handleDisplay = () => {
        let display;
        if(this.state.spinningTheChamber === true) {
            display = 'spinning the chamber and pulling the trigger! ...'
        }
        else {
            if(this.state.chamber === this.props.bulletInChamber){
                display = 'BANG!!!'
            }
            else(
                display = 'You\'re Safe!'
            )
        }
        
        return display;
    }

    render() {
        return (
            <div>
                <p>{this.handleDisplay()}</p>
                <button onClick={this.handleClick}>Pull the Trigger!</button>
            </div>
        )
    }
}

export default RouletteGun