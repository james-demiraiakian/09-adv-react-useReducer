import { useEffect, useReducer, useState } from 'react'

const pinkRGB = `rgb(236, 72, 153)`

// I'm leaving in all the original code (the commented stuff) for comparison later, so I can easily and quickly reference what is different
function countReducer(count, action) {
  switch (action.action) {
    case 'increment': {
      return count + 1
    }
    case 'decrement': {
      return count - 1
    }
    case 'reset': {
      return 0
    }
    default: {
      throw new Error('EErroorr')
    }
  }
}

export default function Counter() {
  // const [count, setCount] = useState(0)
  const [count, dispatch] = useReducer(countReducer, 0)
  const [currentColor, setCurrentColor] = useState(pinkRGB)

  useEffect(() => {
    if (count === 0) {
      setCurrentColor(pinkRGB)
    }

    if (count > 0) {
      setCurrentColor(`rgb(52, 211, 153)`)
    }

    if (count < 0) {
      setCurrentColor(`rgb(239, 68, 68)`)
    }
  }, [count])

  const increment = () => {
    // setCount((prevState) => prevState + 1)
    dispatch({
      action: 'increment',
    })
  }

  const decrement = () => {
    // setCount((prevState) => prevState - 1)
    dispatch({
      action: 'decrement',
    })
  }

  const reset = () => {
    // setCount(0)
    dispatch({
      action: 'reset',
    })
  }

  return (
    <main className="bg-black bg-opacity-90 min-h-screen flex flex-col items-center justify-center text-4xl text-pink-500">
      <h1 className="mb-5" style={{ color: currentColor }}>
        {count}
      </h1>
      <div className="flex w-1/2 justify-around">
        <button
          className="text-green-400 border-2 border-green-400 p-3"
          type="button"
          onClick={increment}
          aria-label="increment"
        >
          Increment
        </button>
        <button
          className="text-red-500 border-2 border-red-500 p-2"
          type="button"
          onClick={decrement}
          aria-label="decrement"
        >
          Decrement
        </button>
        <button
          className="text-pink-500 border-2 border-pink-500 p-2"
          type="button"
          aria-label="reset"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </main>
  )
}
