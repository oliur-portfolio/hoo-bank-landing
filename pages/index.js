import { client } from "../client";
import Billing from "../components/Billing";
import Card from "../components/Card";
import Data from "../components/Data";
import Handle from "../components/Handle";
import Hero from "../components/Hero";
import { Layout } from "../components/Layout";
import Logos from "../components/Logos";
import Review from "../components/Review";
import TryService from "../components/TryService";

export default function Home({ nav, handle }) {
  return (
    <Layout title="Home Page" nav={nav}>
      <Hero />
      <Data />
      <Handle handle={handle} />
      <Billing />
      <Card />
      <Review />
      <Logos />
      <TryService />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const navQuery = `*[_type == "nav"] | order(_createdAt asc){
    _id,
    name,
    path
  }`;

  const handleQuery = `*[_type == "moneyItem"] | order(_createdAt asc){
    _id,
    title,
    desc, 
    image
  }`;

  const nav = await client.fetch(navQuery);
  const handle = await client.fetch(handleQuery);

  return {
    props: {
      nav,
      handle,
    },
  };
}
