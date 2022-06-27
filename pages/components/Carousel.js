export default function Carousel() {
  return (
<div id="carouselExampleSlidesOnly" ClassName="carousel slide relative" data-bs-ride="carousel">
  <div ClassName="carousel-inner relative w-full overflow-hidden">
    <div ClassName="carousel-item active relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
        ClassName="block w-full"
        alt="Wild Landscape"
      />
    </div>
    <div ClassName="carousel-item relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
        ClassName="block w-full"
        alt="Camera"
      />
    </div>
    <div ClassName="carousel-item relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
        ClassName="block w-full"
        alt="Exotic Fruits"
      />
    </div>
  </div>
</div>
  );
}
