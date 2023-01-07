import NavBar from "../components/NavBar";

function Home() {
  return (
    <div>
      <NavBar />
      <h1 className="active">Hello</h1>
      {/* <style jsx>{`
        a {
          color: blue;
        }
      `}</style> */}
    </div>
  );
}

export default Home;
