import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import Seo from "../../components/Seo";

type Props = {
  params: [string, string];
};

function MovieDetail({ params }: Props) {
  const { query } = useRouter();
  console.log(query);

  const [title, id] = params as string[];

  return (
    <div>
      <Seo title={`Movie : ${title}`} />
      <h4>{title || "loading..."}</h4>
    </div>
  );
}

export function getServerSideProps({
  params: ctxParams,
}: GetServerSidePropsContext) {
  return {
    props: {
      params: ctxParams!.params,
    },
  };
}

export default MovieDetail;
