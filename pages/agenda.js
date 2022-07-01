import React, { useEffect } from "react";
import { FaSearch } from 'react-icons/fa';

export default function Calendario() {
  return (
    <div id='contact' className='w-full min-h-screen '>
      <div className='max-w-[1240px] m-auto px-2 py-20 w-full'>
        <p className='titulo-principal'>
          Agenda
        </p>
        <div className="shadow-lg">
          <div className="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b w-full rounded-lg">
            <div className="flex flex-row">
              <div className="flex-none mt-1">
                <label className='px-4 pr-4'>Buscar</label>
              </div>
              <div>
                <input className="mb-4 px-2 py-1 w-auto" type="month"></input>
              </div>
              <div className="w-full flex flex-row-reverse">
                <FaSearch className='my-2 mx-4 hover:text-[#f7a439] hover:scale-110' />
              </div>


            </div>
            <hr className="mb-4"></hr>
            <div className="px-4">
              <div className="border-b pb-4 border-gray-400 border-dashed">
                <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">9:00 AM 30/06/2022</p>
                <p className="text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 pt-2">Zoom call with design team</p>
                <p className="text-sm pt-2 leading-4  text-gray-600 dark:text-gray-300">Discussion on UX sprint and Wireframe reviewasdasd asd asd asd asd asda</p>
              </div>
              <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
                <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">10:00 AM</p>
                <p className="text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 pt-2">Orientation session with new hires</p>
              </div>
              <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
                <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">9:00 AM</p>
                <p className="text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 pt-2">Zoom call with design team</p>
                <p className="text-sm pt-2 leading-5 text-gray-600 dark:text-gray-300">Discussion on UX sprint and Wireframe review</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

