import React from 'react'

class Bomb extends React.Component {
    static defaultProps = {
        count: 0
    }

    constructor(props) {
        super(props)
        this.state = { count: 0 }
        
    }

    componentDidMount = () => {
        this.interval = setInterval(() => {
            const newCount = this.state.count + 1;
            this.setState({count: newCount})
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    handleDisplay = () => {
        console.log(this.state.count)
        let display = 'tick';

        if(this.state.count < 8) {
            if(this.state.count % 2 === 0) {
                display = 'tick'
            }
            else {
                display = 'tock'
            }
        }
        else{
            display = 'BOOM!!!'
            clearInterval(this.interval)
        }

        return display
    }

    render() {
        return (
            <div>
                <p>{this.handleDisplay()}</p>
            </div>
        )
    }
}

export default Bomb