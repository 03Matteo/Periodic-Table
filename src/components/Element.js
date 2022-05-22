export default function Element(props) {
    const {
        name
    } = props;

    return (
        <div id={name}>
            <h1>{name}</h1>
        </div>
    );
}