import React from 'react'

const SectionWrapper = ({children}) => {
  return (
    <div className=' w-full sm:px-16 px-6 sm:py-10 py-10 '>
      <div className="w-11/12 md:w-3/4 xl:w-7/12 m-auto">
        {children}
      </div>
    </div>
  )
}

export default SectionWrapper