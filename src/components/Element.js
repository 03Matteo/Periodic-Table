import '../styles/elements.css';

export default function Element(props) {
    const {
        name,
        symbol
    } = props;

    return (
        <div className='element' id={name || 'space'}>
            <h4 className='symbol'>{symbol || null}</h4>
            <h5 className='name'>{name || null}</h5>
        </div>
    );
}