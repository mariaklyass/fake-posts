import Form from "./components/Form";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Contacts from "./pages/Contacts";
import PostIdPage from "./pages/PostIdPage";

function App() {
  return (
    <>
      <div className="drop-shadow-xl flex flex-col justify-center items-center bg-[#ded0d2]/30 text-stone-900 relative pt-2 sm:pt-3">
        <div className="bg-[#946b6f] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div
          className="bg-[#a9989a] absolute top-[-1rem] -z-10
         left-[5rem]
         h-[31.25rem] w-[13rem] rounded-full blur-[10rem] 
         xs:w-[5rem] sm:w-[38.75rem] 
         sm:left-[-25rem] md:left-[-30rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "
        ></div>{" "}
        <div
          className="bg-[#fdf8f9] absolute top-[-3rem] -z-10 
        left-[5rem] 
        h-[11.25rem] w-[12rem] rounded-full blur-[10rem] 
        xs:w-[5rem] sm:w-[25.75rem] md:w-[38rem] 
        md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "
        ></div>{" "}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/posts" element={<Form />} />
            <Route path="/posts/:id" element={<PostIdPage />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
