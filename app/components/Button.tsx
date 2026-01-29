import React from 'react'


interface ButtonProps {
  children: React.ReactNode; 
  onClick?: () => void;    
  variant?: "primary" | "secondary";
  className?: string;
}

const Button:React.FC<ButtonProps>  = ({onClick, children, className}) => {
  return (
      <button onClick={onClick} className={`bg-[#159C47] text-white hover:bg-[#137a39] px-8 rounded-2xl  py-3 cursor-pointer ${className} `}>
      {children}
    </button>
  )
}
 

export default Button