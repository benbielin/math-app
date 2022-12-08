
const Dropdown = (props) => {
    return (
        <div>
            <select onChange={props.change}>
                <option value={"select"}>Choose...</option>
                <option>Quadratic Formula</option>
                <option>2D Distance</option>
                <option>3D Distance</option>
            </select>
        </div>
    )
}

export default Dropdown