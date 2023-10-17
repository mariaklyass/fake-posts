import Form from "./components/Form";

function App() {
  return (
    <>
      <div className="drop-shadow-xl mx-4 p-8 rounded-md flex flex-col justify-center items-center bg-[#ded0d2] text-stone-900 relative pt-28 sm:pt-36 ">
        <div className="bg-[#946b6f] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#a9989a] absolute top-[-1rem] -z-10 left-[35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>{" "}
        <Form />
      </div>
    </>
  );
}

export default App;
