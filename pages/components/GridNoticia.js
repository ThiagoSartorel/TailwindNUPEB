export default function GridNoticia(props) {
  var data = props.date;
  data = new Date(data).toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  });
  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden p-2">
      <div className="w-full p-2">
        <h4 className="font-semibold text-lg">{props.title}</h4>
        <a href={"profiles/" + props.id_author} className="font-normal">
          {props.author}
        </a>
      </div>
      <div>
        <img
          className="banner w-full h-80 sm:h-96 lg:h-64"
          src={process.env.FILESRV + props.image}
        ></img>
      </div>
      <div className="p-4 rounded-b-lg bg-slate-100 bg-opacity-50 h-26 sm:h-28 md:h-20 lg:h-36 xl:h-24">
        {props.description}
      </div>
      <div className="w-full p-2 pb-3">
        <a
          href={"/post/" + props.id}
          className="bg-green-500 p-1 px-2 rounded-md text-white hover:bg-green-600 absolute"
        >
          Saiba mais
        </a>
        <p className="text-gray-500 text-end mt-2 text-sm">{data}</p>
      </div>
    </div>
  );
}
