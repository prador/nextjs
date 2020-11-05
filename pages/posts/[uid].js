import { client } from "../../prismic-configuration";
import { RichText } from "prismic-reactjs";
import Prismic from "prismic-javascript";

export default function Post({ data }) {
//   console.log(data.body[0].primary);
  return (
    <React.Fragment>
      <article>
        <header>{RichText.asText(data.title)}</header>
        <main>{RichText.asText(data.post_body)}</main>
        <div>{data.date}</div>
        <div>{data.key_field}</div>
      </article>
    </React.Fragment>
  );
}

export async function getServerSideProps({ query, res }) {
  const post = await client.getByUID('post', query.uid)

  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  return { props: { post } }
}


export async function getStaticProps({ params }) {
  const { uid } = params;
  const { data } = await client.getByUID("post", uid);
  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  const { results } = await client.query(
    Prismic.Predicates.at("document.type", "post")
  );

  const paths = results.map((post) => ({
    params: {
      uid: post.uid,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}