export default function DropDown() {

    return (
        <div className="relative group">
            <button className="flex item-center text-sm bg-gray-200 border:border-gray-300 hover:bg-blue-200 px-6 py-2 rounded shadow">
                Ola
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div className="absolute hidden group-hover:flex flex-col w-48 bg-white border border-gray-300 py-1 shadow-md rounded-md">
                <a className="w-full text-sm text-gray-500 px-3 bg-white hover:bg-gray-300" href="">Link 1</a>
                <a className="w-full text-sm text-gray-500 px-3 bg-white hover:bg-gray-300" href="">Link 1</a>
                <a className="w-full text-sm text-gray-500 px-3 bg-white hover:bg-gray-300" href="">Link 1</a>
                <a className="w-full text-sm text-gray-500 px-3 bg-white hover:bg-gray-300" href="">Link 1</a>
         
            </div>
        </div>
    )
}