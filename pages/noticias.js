import Post from "./components/Post";

export default function Noticias() {
  return (
    <div className="min-h-screen pt-14 mb-8">
      <div className="text-[3rem] text-center text-white font-thin">
        <h1 className="text-center bg-[#f7a439] pt-[2rem]">B L O G</h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f7a439" fill-opacity="1" d="M0,160L26.7,160C53.3,160,107,160,160,149.3C213.3,139,267,117,320,133.3C373.3,149,427,203,480,202.7C533.3,203,587,149,640,144C693.3,139,747,181,800,186.7C853.3,192,907,160,960,128C1013.3,96,1067,64,1120,74.7C1173.3,85,1227,139,1280,149.3C1333.3,160,1387,128,1413,112L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
      </div>
      <div className="">
        <Post />
      </div>
    </div>
  );
}
