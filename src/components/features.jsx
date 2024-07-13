import compImg1 from '../assets/img1.jpg'
import compImg2 from '../assets/img2.jpg'
import compImg3 from '../assets/img3.jpg'

const Features = () =>{
    return(
        <>
        <div className='text-center bg-slate-100 flex justify-center'>
            <div className='w-7/12'>
                <button className='bg-gradient-to-r from-green-600 to-green-500 px-5 py-3 my-3 rounded-full text-white font-medium'>created by ReKrian</button>
                <h1 className='text-black text-[50px] font-bold leading-tight'>Crafted with exclusive features</h1>
            </div>          
        </div>
        
            <div className="h-auto w-9/10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-100 ">
                <div className="w-9/12 sm:w-4/5 h-auto mx-auto whitebase mt-10 rounded-xl outline outline-white outline-3 text-center shadow-xl">
                    <img src={compImg1} className='mx-auto'/>
                    <h1 className="text-[27px]">Exclusive components</h1>
                    <p className="text-[18px] text-slate-500 mx-5 mb-16">Crafto includes well designed components which always gives you best results as you wanted.</p>
                </div>
                <div className="w-9/12 sm:w-4/5 h-auto mx-auto whitebase mt-10  rounded-xl outline outline-white outline-3 text-center shadow-xl">
                    <img src={compImg2} className='mx-auto'/>
                    <h1 className="text-[27px]">Bootstrap 5.x frameworks</h1>
                    <p className="text-[18px] text-slate-500 mx-5 mb-16">The world's favored front-end open-source toolkit for crafting responsive websites.</p>
                </div>
                <div className="w-9/12 sm:w-4/5 h-aut mx-auto whitebase mt-10 rounded-xl outline outline-white outline-3 text-center shadow-xl">
                    <img src={compImg3} className='mx-auto'/>
                    <h1 className="text-[27px]">Crafting code excellence</h1>
                    <p className="text-[18px] text-slate-500 mx-5 mb-16">Featuring optimized, well-structured, and easily to use and customize code, setting industry standards.</p>
                </div>

            </div>
        </>
    )
}
export default Features