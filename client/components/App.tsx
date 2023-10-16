import { useState } from 'react'

function App() {
  const [arr1, setArr1] = useState([1, 2, 3, 4])
  const [arr2, setArr2] = useState<number[]>([])
  const [tempLeft, setTempLeft] = useState<number[]>([])
  const [tempRight, setTempRight] = useState<number[]>([])
  const toggleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: number
  ) => {
    if (e.target.checked && !tempLeft.includes(item)) {
      setTempLeft([...tempLeft, item])
    } else if (!e.target.checked) {
      setTempLeft([...tempLeft].filter((i) => i !== item))
    }
  }

  const handleMoveRight = () => {
    setArr1([...arr1].filter((item) => !tempLeft.includes(item)))
    setArr2([...arr2, ...tempLeft.filter((item) => !arr2.includes(item))])
    if (arr2.filter((item) => tempLeft.includes(item)).length == 0)
      setTempLeft([])
  }
  const handleMoveLeft = () => {
    setArr2([...arr2].filter((item) => !tempLeft.includes(item)))
    setArr1([...arr1, ...tempLeft.filter((item) => !arr1.includes(item))])
    if (arr1.filter((item) => tempLeft.includes(item)).length == 0)
      setTempLeft([])
  }
  const handleExchange = () => {}
  return (
    <div className="main">
      <div className="left-box">
        {arr1.sort().map((item) => (
          <div key={item}>
            <input
              type="checkbox"
              name="checkedbox"
              onChange={(e) => toggleChange(e, item)}
            />
            <label>{item}</label>
          </div>
        ))}
      </div>
      <div className="move-button">
        <button onClick={handleMoveRight}>&#62;</button>
        <button onClick={handleMoveLeft}>&#60;</button>
        <button onClick={handleExchange}>&#60;&#62;</button>
      </div>
      <div className="right-box">
        {arr2.sort().map((item) => (
          <div key={item}>
            <input
              type="checkbox"
              name="checkedbox"
              onChange={(e) => toggleChange(e, item)}
            />
            <label> {item} </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
