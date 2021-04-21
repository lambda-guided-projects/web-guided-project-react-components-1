/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - An slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/

import React, {useState} from 'react';

function Playground (props) {
  const [count, setCount] = useState(0)
  const [isOn, setIsOn] = useState(false)
  const [hand, setHand] = useState('Click a button below')

  const offBulb = <img width="100px" alt="off-light-bulb" src="https://i.pinimg.com/736x/4b/63/a6/4b63a6cd40bf14bb1ac2fdc8af51ca71.jpg"/>
  const onBulb = <img width="100px" alt="on-light-bult" src="https://lh3.googleusercontent.com/proxy/_WKPVQJRGotx24bwh67PBXHB-AVp4hWeJrQcxTe1AcSWITou9YHdyjE3hlOvO3_39YRJ5rF-oL-5LAC2_RPkkTyjOfe-rKU"/>


  return (
    <div className="container">
      <h3>Counter</h3>
      <div>Current count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h3>Light Bulb</h3>
      {isOn ? onBulb : offBulb}
      <button onClick={() => setIsOn(!isOn)}>Light Switch</button>

      <h3>Rock, Paper, Scissors</h3>
      <div>Current hand: {hand}</div>
      <button onClick={() => setHand('rock')}>Rock</button>
      <button onClick={() => setHand('paper')}>Paper</button>
      <button onClick={() => setHand('scissors')}>Scissors</button>
    </div>
  )
}

export default Playground;