import MainNavbar from "../../components/main_navbar/MainNavbar";
import img from "../../assets/images/avatars/avatar.png";
const Home = () => {
  return (
    <>
      <MainNavbar addBtnText='Add Company' />
      <div className='grid grid-cols-4 gap-[30px] mt-[30px]'>
        <div className=' gap-[15px] flex items-center justify-center flex-col '>
          <div className='w-full h-[250px] rounded-[4px] overflow-hidden'>
            <img src={img} alt='' className='object-contain w-full h-full' />
          </div>
          <p className='w-full text-xl text-white single-line-text'>CS GO</p>
        </div>
        <div className=' gap-[15px] flex items-center justify-center flex-col '>
          <div className='w-full h-[250px] rounded-[4px] overflow-hidden'>
            <img src={img} alt='' className='object-contain w-full h-full' />
          </div>
          <p className='w-full text-xl text-white'>CS GO</p>
        </div>
        <div className=' gap-[15px] flex items-center justify-center flex-col '>
          <div className='w-full h-[250px] rounded-[4px] overflow-hidden'>
            <img src={img} alt='' className='object-contain w-full h-full' />
          </div>
          <p className='w-full text-xl text-white'>CS GO</p>
        </div>
        <div className=' gap-[15px] flex items-center justify-center flex-col '>
          <div className='w-full h-[250px] rounded-[4px] overflow-hidden'>
            <img src={img} alt='' className='object-contain w-full h-full' />
          </div>
          <p className='w-full text-xl text-white'>CS GO</p>
        </div>
        <div className=' gap-[15px] flex items-center justify-center flex-col '>
          <div className='w-full h-[250px] rounded-[4px] overflow-hidden'>
            <img src={img} alt='' className='object-contain w-full h-full' />
          </div>
          <p className='w-full text-xl text-white'>CS GO</p>
        </div>
        <div className=' gap-[15px] flex items-center justify-center flex-col '>
          <div className='w-full h-[250px] rounded-[4px] overflow-hidden'>
            <img src={img} alt='' className='object-contain w-full h-full' />
          </div>
          <p className='w-full text-xl text-white'>CS GO</p>
        </div>
        <div className=' gap-[15px] flex items-center justify-center flex-col '>
          <div className='w-full h-[250px] rounded-[4px] overflow-hidden'>
            <img src={img} alt='' className='object-contain w-full h-full' />
          </div>
          <p className='w-full text-xl text-white'>CS GO</p>
        </div>
        <div className=' gap-[15px] flex items-center justify-center flex-col '>
          <div className='w-full h-[250px] rounded-[4px] overflow-hidden'>
            <img src={img} alt='' className='object-contain w-full h-full' />
          </div>
          <p className='w-full text-xl text-white'>CS GO</p>
        </div>
      </div>
    </>
  );
};

export default Home;
