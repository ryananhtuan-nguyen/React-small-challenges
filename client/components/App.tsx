import { useState } from 'react'

function App() {
  const [arr1, setArr1] = useState([1, 2, 3, 4])
  const [arr2, setArr2] = useState<number[]>([])
  const [temp, setTemp] = useState<number[]>([])
  const toggleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: number
  ) => {
    if (e.target.checked && !temp.includes(item)) {
      setTemp([...temp, item])
    } else {
      const index = temp.indexOf(item)
      setTemp([...temp].filter((i) => i !== item))
    }
  }

  const handleMoveRight = () => {
    setArr1([...arr1].filter((item) => !temp.includes(item)))
    setArr2([...arr2, ...temp])
    setTemp([])
  }
  const handleMoveLeft = () => {
    setArr2([...arr2].filter((item) => !temp.includes(item)))
    setArr1([...arr1, ...temp])
    setTemp([])
  }
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
