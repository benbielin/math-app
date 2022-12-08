import React from 'react'

const Cubic = () => {
     
    return (
        <div>
            Our equation looks like ax^3 + bx^2 + cx + d.
            <form>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname"></input>
                <label for="lname">Last name:</label>
                <input type="text" id="lname" name="lname"></input>
            </form>
        </div>
    )
}

export default Cubic