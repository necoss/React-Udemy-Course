import { useState } from 'react'
import generateRandomNum from '../utils/generateRandomNumber'

function RandomNumber(props) {
	const {maxNum} = props
	console.log(maxNum)
	const [randomNum, setRandomNum] = useState(generateRandomNum(maxNum))
	const changeRandomNumber = () => {
		setRandomNum(generateRandomNum(maxNum))
	}

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRandomNumber}>Generate new random number</button>
    </div>
  )
}

export default RandomNumber