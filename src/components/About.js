import { useProductContext } from "../context/ProductContext";

const About = () => {
  const { myName } = useProductContext();

  const data = { name: " " };
  return (
    <>
      <div className="container">
        {myName}

        <h1 myData={data}>About Page</h1>
      </div>
    </>
  );
};

export default About;
