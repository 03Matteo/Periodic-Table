import { Component } from 'react';
import '../styles/elements.css';

export default class Element extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.handleClick = props.onClick;
    }

    render() {
        const { name, symbol, atomic_number, group, state } = this.props;

        if (name.startsWith('none')) {
            return (
                <div className="empty"></div>
            );
        }

        let displayName = name;
        if (name.length > 9) {
            displayName = `${name.substring(0, 9)}...`;
        }

        return (
            <div className='element' id={group} onClick={() => this.handleClick(this.props)}>
                <h6 className='atomicNumber'>{atomic_number}</h6>
                <h6 className='symbol' id={state}>{symbol}</h6>
                <h6 className='name'>{displayName}</h6>
            </div>
        );
    }
}