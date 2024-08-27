import { red } from '@mui/material/colors';
import React from 'react'

function Select({
    options,
    label,
    className="",
    ...props
},ref) {
    const id =userId();
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className=''></label>}
      <select {...props} id={id} ref={ref} className={`className={px-3 py-2 rounded-lg
                text-black outline-none duration-200 border bg-white focus:bg-gray-50 border-gray-200 w-full
                ${className}`}>
                    {options?.map((option)=>(
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
    </div>
  )
}

export default React.forwardRef(Select)
