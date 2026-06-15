import { useMyContext } from "./MyContext";

const C = () => {
  const { count } = useMyContext();
  console.log(count);
  return (
    <div className="bg-fuchsia-500 font-bold p-10">
      C<h1 className="bg-red-900 text-3xl p-4 rounded-xl">{count}</h1>
    </div>
  );
};

export default C;
