import React from 'react'

const Footer = () => {
  return (
    <div className='z-1 flex w-[100vw] items-center justify-center'>
      <footer className='footer text-sseca-zombie text-sm'>
          &copy; {new Date().getFullYear()} SSECA - Sapiens Galactic Alliance
          DAO
        </footer>
    </div>
  )
}

export default Footer