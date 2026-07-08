import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
    <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
            <h1 className='text-light'>Stock Prediction Portal</h1>
            <p className='text-light lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam veniam, maiores perspiciatis atque amet architecto voluptatem. Accusamus laudantium explicabo tempore quia quasi doloremque corrupti maiores, cumque velit architecto nulla, sequi facilis impedit ipsam hic? Laudantium eius ipsum doloremque pariatur distinctio! </p>
            <Button text="Login" class="btn-outline-info"/>
        </div>
    </div>
    </>
  )
}

export default Main