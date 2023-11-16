import logo from '../assets/wepik-export-202311022315096ZxR.png'
function Header(){
    return (
        <div className="py-5">
            <div className="container mx-auto">
               <div className="flex justify-between items-center">
                       <img src={logo}  className="h-[70px] w-[50px] object-cover rounded-r-full object-center"alt="" />
                    <button className="font-semibold h-[70px] p-4 btn btn sm">Mon CV</button>
               </div>
            </div>
        </div>
    )
}
export default Header