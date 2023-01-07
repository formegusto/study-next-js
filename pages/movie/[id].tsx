import { useRouter } from "next/router";

function MovieDetail() {
  const {
    query: { id, title },
  } = useRouter();

  return (
    <div>
      <h4>{title || "loading..."}</h4>
    </div>
  );
}

export default MovieDetail;
