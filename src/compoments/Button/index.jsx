import { useState } from 'react';

function ButtonCustom() {


    return (
        <div className='w-full ml-5 mr-9 my-5'>
            <div className='items-center space-x-4'>
                <h1 className='font-bold text-3xl'>List Of Resource</h1>
                <div
                    className='pl-72 flex relative'
                >
                    <input
                        className='w-1/5 h-10 pl-3 border-2 border-black rounded-md'
                        type="text"
                        placeholder='Search ...'
                    />
                    <div className='w-[130px] h-10 ml-8  border-2 border-black rounded-lg flex justify-center items-center bg-stone-300'>
                        Hãy chọn vị trí
                    </div>
                    <button className='absolute right-10 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'>
                        +Create
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ButtonCustom;
