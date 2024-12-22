import { useState } from "react";
import ArrowBottom from "../../assets/icons/arrow_bottom";
import Location from "../../assets/icons/location";
import clsx from "clsx";

const LocationSelector = () => {
  const [isOpenLocationSelector, setIsOpenLocationSelector] =
    useState<boolean>(false);
  return (
    <div>
      <div
        className='flex items-center justify-between py-[10px] px-[15px] w-[210px] h-[44px] bg-2E2F37_100 rounded-[100px] cursor-pointer z-[2] relative select-none'
        onClick={() => setIsOpenLocationSelector(!isOpenLocationSelector)}
      >
        <Location />
        <p className='text-white text-sm font-normal'>Non Selected</p>
        <div
          className={clsx(
            isOpenLocationSelector && "-rotate-180",
            "duration-300",
          )}
        >
          <ArrowBottom />
        </div>
      </div>
      {
        <div
          className={clsx(
            "fixed top-[72px] bg-2E2F37_100 rounded-md z-[2] max-h-[80vh] overflow-y-scroll scroll-container duration-300",
            isOpenLocationSelector
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none",
          )}
        >
          <div className='py-3 px-6 cursor-pointer opacity-65 hover:opacity-100 duration-300 hover:bg-slate-700'>
            <p className='text-sm text-white'>Mirzo Ulugbek Chust 1</p>
          </div>
          <div className='py-3 px-6 cursor-pointer opacity-65 hover:opacity-100 duration-300 hover:bg-slate-700'>
            <p className='text-sm text-white'>Mirzo Ulugbek Chust 1</p>
          </div>
          <div className='py-3 px-6 cursor-pointer opacity-65 hover:opacity-100 duration-300 hover:bg-slate-700'>
            <p className='text-sm text-white'>Mirzo Ulugbek Chust 1</p>
          </div>
          <div className='py-3 px-6 cursor-pointer opacity-65 hover:opacity-100 duration-300 hover:bg-slate-700'>
            <p className='text-sm text-white'>Mirzo Ulugbek Chust 1</p>
          </div>
          <div className='py-3 px-6 cursor-pointer opacity-65 hover:opacity-100 duration-300 hover:bg-slate-700'>
            <p className='text-sm text-white'>Mirzo Ulugbek Chust 1</p>
          </div>
        </div>
      }
      {isOpenLocationSelector && (
        <div
          className='w-full h-full fixed top-0 left-0 z-[0]'
          onClick={() => setIsOpenLocationSelector(false)}
        ></div>
      )}
    </div>
  );
};

export default LocationSelector;
