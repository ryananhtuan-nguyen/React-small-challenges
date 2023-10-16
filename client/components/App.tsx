import { useState } from 'react'

function App() {
  const [arr1, setArr1] = useState([1, 2, 3, 4])
  const [arr2, setArr2] = useState<number[]>([])
  const [tempLeft, setTempLeft] = useState<number[]>([])
  const [tempRight, setTempRight] = useState<number[]>([])
  console.log('left', tempLeft, 'right', tempRight)

  const toggleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: number,
    side: string
  ) => {
    switch (side) {
      case 'left':
        {
          if (e.target.checked && !tempLeft.includes(item)) {
            setTempLeft([...tempLeft, item])
          } else if (!e.target.checked) {
            setTempLeft([...tempLeft].filter((i) => i !== item))
          }
        }
        break
      case 'right':
        {
          if (e.target.checked && !tempRight.includes(item)) {
            setTempRight([...tempRight, item])
          } else if (!e.target.checked) {
            setTempRight([...tempRight].filter((i) => i !== item))
          }
        }
        break
    }
  }

  const handleMoveRight = () => {
    setArr1([...arr1].filter((item) => !tempLeft.includes(item)))
    setArr2([...arr2, ...tempLeft.filter((item) => !arr2.includes(item))])
    if (arr2.filter((item) => tempLeft.includes(item)).length == 0)
      setTempLeft([])
  }
  const handleMoveLeft = () => {
    setArr2([...arr2].filter((item) => !tempRight.includes(item)))
    setArr1([...arr1, ...tempRight.filter((item) => !arr1.includes(item))])
    if (arr1.filter((item) => tempRight.includes(item)).length == 0)
      setTempRight([])
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
              onChange={(e) => toggleChange(e, item, 'left')}
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
              onChange={(e) => toggleChange(e, item, 'right')}
            />
            <label> {item} </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
