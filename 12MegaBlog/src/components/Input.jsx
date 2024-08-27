import React,{useId, userId} from 'react'



const Input=React.forwardRef(function Input({
    label,
    type="text",
    className="",
    ...props
},ref){
    const id=useId();
    return (
        <div>
            {label && <label
            className='inline-block mb-1 pl-1'
            htmlFor={id}
            >
                {label}
            </label>}
            <input 
                type={type}
                className={`className={px-3 py-2 rounded-lg text-black outline-none duration-200 border
                focus: bg-gray-50border-gray-200 w-full ${className}` }
                ref={ref}
                {...props}
                id={id}
                     
            />
        </div>
    )
})

export default Input
