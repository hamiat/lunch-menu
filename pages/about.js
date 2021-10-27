import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Lunch in Cosmos | Drinks</title>
        <meta name="keywords" content="lunch-menu" />
      </Head>
      
      <main>
        <h1>About</h1>
        <p>Hello and welcome to:</p>
        <h3>Lunch in Cosmos</h3>
        <p>
          Lunch in Cosmos is a small family owed lunch restagurant that adds
          that extra spice (love) to every meal. Our motto is no stomach should
          go hungry, and so if you are not full, please let us know and we will
          offer a second serving.{" "}
        </p>
        <p>
          Apart from our customers, we also like to take care of the people who
          produce the food that we make. Making sure to buy local and organic
          goods only, created sustainably to encourage our local farmers to
          produce food that is kind on the land and on people.
        </p>
        <p>
          {" "}
          All our dishes can be made vegan, gluten-free, cosher, are halal and
          conflict free. Unless you count the conflicts in the kitchen, but
          that&#39;s where the love comes from.
        </p>
      </main>
    </>
  );
};

export default About;
