import avanger from "../../public/avanger.jpg";

const Main = () => {
  return (
    <main className="">
      <h2 className="text-2xl text-slate-200 mb-4">Movies</h2>
      <div className="text-white flex flex-row gap-12">
        <div className="shadow-lg shadow-black rounded-xl overflow-hidden">
          <img src={avanger} className="w-56" alt="" />
          <div className="text-center py-2 leading-relaxed ">
            <h4>Avanger</h4>
            <p>2012-12-12</p>
            <p>3.43</p>
          </div>
        </div>
        <div className="shadow-lg shadow-black rounded-xl overflow-hidden">
          <img src={avanger} className="w-56 mb-2" alt="" />
          <div className="text-center leading-relaxed">
            <h4>Avanger</h4>
            <p>2012-12-12</p>
            <p>3.43</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
