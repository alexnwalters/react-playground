import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {
        sections: [],
    }

    state = {
        currentSectionIndex: []
    };

    handleClick(index) {
        this.setState({currentSectionIndex: index})
    }

    renderButtons() {
        return this.props.sections.map((section, index) => (
            <li key={index}>
                <button onClick={() => this.handleClick(index)}>
                    {section.title}
                </button>
                {index === this.state.currentSectionIndex && this.renderContent()}
            </li>
        ))
    }

    renderContent() {
        const currentSection = this.props.sections[this.state.currentSectionIndex]
        return (
            <p>
                {currentSection.content}
            </p>
        )
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderButtons()}
                </ul>
                
            </div>
        )
    }
}

export default Accordion;