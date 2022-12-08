import React, {useState} from 'react'

const Two = () => {
  const [x1, setx1] = useState(0)
  const [y1, sety1] = useState(0)

  const [x2, setx2] = useState(0)
  const [y2, sety2] = useState(0)

  const changex1 = (event) => {
    setx1(event.target.value)
  }
  const changey1 = (event) => {
    sety1(event.target.value)
  }


  const changex2 = (event) => {
    setx2(event.target.value)
  }
  const changey2 = (event) => {
    sety2(event.target.value)
  }


  const [dist, setDist] = useState(null)

  const getDistance = (event) => {
    event.preventDefault();
    setDist(Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2)))
  }

  

  return (
    <div>
      You have points (x1, y1) and (x2, y2).
      <form onsubmit="return false">
        <label for="x1">x1</label><br></br>
        <input type="number" id="x1" name="x1" onChange={changex1}></input><br></br>
        <label for="y1">y1</label><br></br>
        <input type="number" id="y1" name="y1" onChange={changey1}></input><br></br>
        
        <label for="x2">x2</label><br></br>
        <input type="number" id="x2" name="x2" onChange={changex2}></input><br></br>
        <label for="y2">y2</label><br></br>
        <input type="number" id="y2" name="y2" onChange={changey2}></input><br></br>

      </form>
      <input type="submit" value="Submit" onClick={getDistance}></input><br></br>
      The Euclidean distance is then:
      <div>{dist}</div>
    </div>
  )
}

export default Two