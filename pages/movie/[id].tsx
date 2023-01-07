import { useRouter } from "next/router";

function MovieDetail() {
  const {
    query: { id },
  } = useRouter();

  return <>Movie({id}) Detail</>;
}

export default MovieDetail;
