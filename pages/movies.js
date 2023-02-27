import clientPromise from "../lib/mongodb";
import Image from "next/image";

export default function Movies({ movies }) {
  return (
    <div>
      <h1>Top 20 Movies of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      <ul>
        {movies.map((movie) => (
          <li key={movie}>

          <div>
          <p>{movie.title}</p>
          <img  className="min-w-min h-52" src="https://firebasestorage.googleapis.com/v0/b/upload-file-f975f.appspot.com/o/files%2Fa.jpg?alt=media&token=1f2e7b29-2ab1-4ae1-aa1a-69917da6f3bb"></img>
            
</div>
          
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const client = await clientPromise;

    const db = client.db("Books");

    const movies = await db
      .collection("Action")
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray();

    return {
      props: { movies: JSON.parse(JSON.stringify(movies)) },
    };
  } catch (e) {
    console.error(e);
  }
}
