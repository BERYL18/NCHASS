import React, {useState} from 'react'


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);  
  
  return (
    
         <nav className="bg-teal-800 py-4  z-50">
                 <div className="container mx-auto flex justify-between items-center">
                    <div className="text-teal-200 text-xl font-bold">NCHASS</div>
                        <div className="hidden md:flex space-x-6">
                            <a href="#home" className="text-white hover:text-gray-300">Home</a>
                            <a href="#about" className="text-white hover:text-gray-300">About</a>
                            <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
                            <a href="#help" className="text-white hover:text-gray-300">Help</a>
                        </div>

                        <div className="md:hidden">
                            <button 
                                    onClick={() => setIsOpen(!isOpen)} 
                                    className="text-white focus:outline-none">

                                <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                            
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                                </svg>
                            </button>
                        </div>

                    </div>
                    
                    {isOpen && (
                        <div className="md:hidden bg-teal-700 w-[100vw] m-0">
                        <a href="#home" className="block px-4 py-2 text-white hover:bg-teal-200">Home</a>
                        <a href="#about" className="block px-4 py-2 text-white hover:bg-teal-200">About</a>
                        <a href="#contact" className="block px-4 py-2 text-white hover:bg-teal-200">Contact</a>
                        <a href="#help" className="block px-4 py-2 text-white hover:bg-teal-200">Help</a>
                        </div>
                    )}
                </nav>
    
  )
}
export default Navbar;