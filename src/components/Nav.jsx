import React,{useContext,useState} from 'react';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {navList} from '../data'
import sun from '../img/sun.png'
import moon from '../img/moon.png'

function Nav({props}) {
  const {dark,setDark} = props
  console.log('dark',dark)
  const [open, setOpen] = useState(false);
  const handleClick = ()=>{
    setDark(!dark)
  }
  return (
    <div className='h-14 bg-blue-600 flex justify-between items-center sticky top-0 z-50'>
      
      <Link to='/' className='ml-[10px] flex text-2xl text-white hover:text-orange-500'>myPortfolio</Link> 
      
      <div className="hidden sm:block sm:mr-16">
        <ul className="flex">
          {navList.map(item =>(
            <li key={item.id} >
              <a className="text-l text-white mr-4 hover:text-orange-500" href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      
      <img src={dark?sun:moon} alt="toggle" className="w-5 h-5 absolute right-10 cursor-pointer" onClick={handleClick}/>
      
      {/* hamberg and menu */}
      <div className='sm:hidden mr-[10px]' >
        <AiOutlineMenu size={20} onClick={() => setOpen(!open)} />
      </div>
      <div className={open?'fixed left-0 top-0 w-[60%] border-r-2 h-full border-r-gray-400 bg-blue-600 ease-in-out duration-500' :'fixed left-[-100%] '}>
        <div className = 'flex '>
          <h1 className="w-full text-3xl font-bold text-orange-500 m-4" >myPortfolio</h1>
          <AiOutlineClose size={40} onClick={()=>setOpen(false)} />
        </div>
        <ul className=' uppercase p-4'>
            {navList.map(item =>(
              <li key={item.id} >
                <a className="text-xl text-white hover:text-orange-500" href={item.href}>{item.title}</a>
              </li>
            ))}
        </ul>
      </div>
     
    </div>
  );
}

export default Nav;