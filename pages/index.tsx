import React from "react";
import Seo from "../components/Seo";

type Props = {
  results: Movie[];
};

function Home({ results }: Props) {
  const [movies, setMovies] = React.useState<Movie[]>(results);

  // React.useEffect(() => {
  //   (async () => {
  //     const res = await fetch("/api/movies", {
  //       method: "GET",
  //     });
  //     const { results } = await res.json();
  //     setMovies(results);
  //   })();
  // }, []);

  return (
    <div>
      <Seo title="Home | Next Movies" />
      {/* {!movies && <h4>Loading...</h4>} */}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <div className="movie" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  // const API_KEY = process.env.API_KEY;
  const res = await fetch("http://localhost:3000/api/movies", {
    method: "GET",
  });
  const { results } = await res.json();

  return {
    props: {
      results,
    },
  };
}

export default Home;
