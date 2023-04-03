import { useEffect, useState } from "react";
import "./infinite.css";

const InfiniteScroll = () => {
  const [data, getData] = useState([]);
  const [page, setPage] = useState(1);

  const getCardData = async () => {
    const datas = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=6&_page=${page}`
    );
    const res = await datas.json();
    getData((prev) => [...prev, ...res]);
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);

    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <>
      <section>
        {data.map((datas, ind) => {
          return (
            <div className="card" key={ind}>
              <h1>{datas?.id}</h1>
              <h2>{datas?.title}</h2>
            </div>
          );
        })}
      </section>
    </>
  );
};
export default InfiniteScroll;
