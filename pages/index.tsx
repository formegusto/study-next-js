import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Seo from "../components/Seo";

type Props = {
  results: Movie[];
};

function Home({ results }: Props) {
  const { push } = useRouter();
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

  const onClick = React.useCallback(
    (id: string, title: string) => {
      push(
        {
          pathname: `/movie/${title}/${id}`,
          // query: {
          //   title,
          // },
        },
        `/movie/${title}/${id}`
      );
    },
    [push]
  );

  return (
    <div>
      <Seo title="Home | Next Movies" />
      {/* {!movies && <h4>Loading...</h4>} */}
      {movies?.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>
            <Link
              legacyBehavior
              href={{
                pathname: `/movie/${movie.original_title}/${movie.id}`,
                // query: {
                //   title: movie.original_title,
                // },
              }}
              as={`/movie/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
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
