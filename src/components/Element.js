export default function Element(props) {
    const {
        name
    } = props;

    return (
        <div id={name}>
            <h4>{name}</h4>
        </div>
    );
}