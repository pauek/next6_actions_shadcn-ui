import Image from "next/image";

export default function MovieCard({ movie }) {
  return (
    <div className="w-24 rounded shadow border bg-black overflow-clip">
      <div className="w-24 h-40 relative">
        <Image
          src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
          fill={true}
        />
      </div>
      <h4 className="p-1 text-center text-white text-sm font-bold leading-5 line-clamp-2">
      {movie.title}
      </h4>
    </div>
  );
}
