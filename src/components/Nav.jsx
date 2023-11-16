import { React } from 'react'
// import { useContext } from 'react'
import { Link } from 'react-scroll'
import { SiHomebridge } from 'react-icons/si'
import { BsFillChatSquareTextFill, BsPerson } from 'react-icons/bs'
import { GiArchiveResearch } from 'react-icons/gi'
import { TfiBag } from 'react-icons/tfi'
import { IoSchoolOutline } from 'react-icons/io5'
// import { RenderContext } from '../utils/Context'

function Nav() {
  // const  { reRender }  = useContext(RenderContext)
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* nav inner */}
        <div className="w-full bg-black/20 backdrop-blur-2xl h-[96px] rounded-full p-5 flex max-w-[480px] mx-auto justify-between text-2xl text-white/50">
          <Link
            to='home'
            activeClass='active' 
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <SiHomebridge/>
          </Link>
          <Link 
            to='BTS'
            activeClass='active' 
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <IoSchoolOutline />
          </Link>
          <Link 
            to='about'
            activeClass='active' 
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BsPerson />
          </Link>
          <Link 
            to='experience'
            activeClass='active' 
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <TfiBag />
          </Link>
          <Link 
            to='eve'
            activeClass='active' 
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <GiArchiveResearch />
          </Link>
          <Link 
            to='contact'
            activeClass='active' 
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
            <BsFillChatSquareTextFill/>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
