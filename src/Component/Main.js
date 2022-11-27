import React from 'react'
import Browse from './Browse'
import Card from './Cards'

const Main = () => {
  return (
      <div className='w-full px-4'>
          {/* Browse */}
          <Browse/>
          {/* Cards */}
          <Card/>
    </div>
  )
}

export default Main