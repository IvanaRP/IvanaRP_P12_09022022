
import jsonData from "../../datas/data";

import useFetch from "../../Util/customHook/useFetch";

const  Settings = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  // const [data] = useFetch("http://localhost:3000/user/12");

  console.log(jsonData);
  console.log([data])
  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title} {item.userId}{item.completed}</p>;
        })}
    </>
  );
};

export default  Settings;






