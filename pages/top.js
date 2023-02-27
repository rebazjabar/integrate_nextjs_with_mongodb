import clientPromise from "../lib/mongodb";

import Image from "next/image";

export default function Top({ movies }) {
  return (
    <div>
      <h1>Top 1000 Movies of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>

      <div className="container  p-2 mx-auto">
        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-4 ">
          {movies.map((movie) => (
            <div key={movie}>
              <div className="m-1 p-1 bg-slate-400  h-max  rounded-md  ">
                <div className=" flex justify-center">
                  {/* <Image  className="rounded-full p-1 w-52 h-52" width={208}  height={208} src={movie.poster}/> */}
                  <img
                    className="rounded-full p-1 w-52 h-52"
                    src={movie.poster}
                  ></img>
                </div>
                <div className="container px-2 ">
                  <div className=" p-2 bg-slate-200 rounded-md shadow dark:bg-gray-900">
                    <h2 className="font-semibold text-gray-800  dark:text-white md:text-xl">
                      {movie.title}
                    </h2>

                    <p className="w-auto h-auto">{movie.plot}</p>
                    <p className="w-auto h-auto">{movie.genres}</p>

                    <p className="w-auto h-auto">{movie.countries}</p>

                    <h3 className="w-auto h-auto">{movie.metacritic}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const client = await clientPromise;

    const db = client.db("sample_mflix");

    const movies = await db.collection("movies").find({}).limit(1000).toArray();

    return {
      props: { movies: JSON.parse(JSON.stringify(movies)) },
    };
  } catch (e) {
    console.error(e);
  }
}
