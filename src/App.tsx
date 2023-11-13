import { useState } from 'react'
import './App.css'
import RateUs, { RateItemType } from './components/rate_us/RateUs'

function App() {
  const itemsToRate: RateItemType[] = [
    { key: 1, label: "Giao diện" },
    { key: 2, label: "Nội dung" },
    { key: 3, label: "Chất lượng dịch vụ" },
    { key: 4, label: "Some veery very long content, like this, or like that, or reallly ly ly ly long :D, one two three for five" }
  ]
  function handleSubmit(ratings: { [key: number]: number }) {
    console.log("Ratings: ", ratings)
  }

  return (
    <>
      <div className='demo'>
        <span>This is a demo wrapper</span>
        <RateUs
          title='EPR web rating'
          buttonLabel='Submit'
          itemsToRate={itemsToRate}
          onSubmit={handleSubmit}
        // result={{ title: "Thank you !!!" }}
        />
      </div>

    </>
  )
}

export default App
