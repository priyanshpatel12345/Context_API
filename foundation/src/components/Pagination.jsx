import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Pagination() {
  const {page, totalPage, handlePageChange } = useContext(AppContext);
  console.log("data");
  
  return (
    <div className='flex justify-center items-center gap-28 border-t-2 border-gray-500 p-3 fixed bottom-0 w-full bg-white'>
           
      <div className='flex justify-around gap-6'>
           { page > 1 && (
             <button className='bg-black text-red-500 p-2 rounded-lg hover:opacity-70' onClick={() => handlePageChange(page-1)}>Previous</button>
            )} 

            {
              page < totalPage && (
                <button className='bg-black text-white p-2 rounded-lg hover:opacity-60' onClick={() => handlePageChange(page + 1)}>Next</button>
              )
            }
      </div>

      <div className="font-bold">
        Page {page} of {totalPage}
      </div>
    
    </div>
  )
}
