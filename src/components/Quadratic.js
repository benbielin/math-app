import React, { useState } from 'react'

const Quadratic = () => {
    const [a, seta] = useState(0)
    const [b, setb] = useState(0)
    const [c, setc] = useState(0)

    const changea = (event) => {
        seta(event.target.value)
    }
    const changeb = (event) => {
        setb(event.target.value)
    }
    const changec = (event) => {
        setc(event.target.value)
    }

    const [r1, setr1] = useState(null)
    const [r2, setr2] = useState(null)

    const [out, setOut] = useState(null)

    const getRoots = (event) => {
        event.preventDefault();
        if (a === 0) {
            setOut("a is 0! That's not allowed!")
        }
        if (Math.pow(b, 2) - 4.0 * a * c < 0) {
            setOut("No real roots!")
            return
        }
        setr1((-1 * b + Math.sqrt(Math.pow(b, 2) - 4.0 * a * c)) / (2.0 * a))
        setr2((-1 * b + Math.sqrt(Math.pow(b, 2) - 4.0 * a * c)) / (2.0 * a))
        setOut("The roots are " + r1.toString() + " and " + r2.toString())
    }


    return (
        <div>
            Our equation looks like ax^2 + bx + c = 0.
            <form onsubmit="return false">
                <label for="a">a</label><br></br>
                <input type="number" id="a" name="a" onChange={changea}></input><br></br>
                <label for="b">b</label><br></br>
                <input type="number" id="b" name="b" onChange={changeb}></input><br></br>
                <label for="c">c</label><br></br>
                <input type="number" id="c" name="c" onChange={changec}></input>
            </form>
            <input type="submit" value="Submit" onClick={getRoots}></input><br></br>
            <div>{out}</div>
        </div>
    )
}

export default Quadratic