import logo from '../assets/logo.webp'

const Header = () =>{
    return(
        <header className="h-20 w-auto flex items-center justify-between blackheader">  
            <div className='w-32 absolute'>
                <img src={logo} alt="" className='px-2'/>
            </div>            
            <div className="flex flex-1 justify-center max-sm:hidden w-1/4">
                {['Pre-Built Sites','Pages','Blog','Shop'].map((nav) => (
                <div key={nav} className="px-5 text-sm text-white transition-all">
                    {nav}
                </div>
            ))}
            </div>
            <div className= 'right-0 px-5 absolute'>
                <button className='text-white bg-slate-800 px-6 py-2 rounded-full hover:bg-slate-500 transition-all'>Purchase Crafto</button>
            </div>
            
        </header>
    )
}
export default Header