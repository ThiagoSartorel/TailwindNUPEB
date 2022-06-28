export default function Search(){
  return (
    <div className='hidden md:flex grow-[2] items-center justify-center'>
    <div className='bg-gray-500 text-white flex justify-between items-center max-w-[400px] w-full m-auto p-2 rounded-2xl'>
      <div>
        <input
          type='text'
          className='bg-transparent border-none text-white focus:outline-none'
          placeholder='Search'
        />
      </div>
      <div>
        <BsSearch />
      </div>
    </div>
  </div>
  );
}
