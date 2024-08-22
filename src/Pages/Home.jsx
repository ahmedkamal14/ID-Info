import Footer from "../Components/Footer";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import Data from "../Components/Data";
import TempText from "../Components/TempText";

const Home = () => {
  function validateEgyptianID(id) {
    // Check if the ID is 14 characters long
    if (id.length !== 14) {
      setValid(false);
      setWrong(true);
      return;
    }
    // Check if the ID contains only digits
    if (!/^\d+$/.test(id)) {
      setValid(false);
      setWrong(true);
      return;
    }

    setValid(true);
    setWrong(false);
    setId("");
  }

  const handleClick = () => {
    validateEgyptianID(id);
  };

  const [id, setId] = useState("");
  const [valid, setValid] = useState(false);
  const [wrong, setWrong] = useState(false);

  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div
      className="bg-white min-h-[calc(100vh-80px)] rounded-[30px] relative flex flex-col justify-between items-center"
      dir="rtl"
    >
      <img
        src="./print.png"
        alt="FingerPrint"
        className="absolute top-12 left-12 w-[53px] h-auto"
      />

      <div className="container flex flex-col justify-center items-center text-center min-h-[calc(100vh-136px)] gap-16 px-4 md:px-0 pt-[80px] md:pt-[120px]">
        <div className="infoAndIns flex flex-col gap-6 md:gap-12 items-center">
          <div className="text flex flex-col gap-2 md:gap-4">
            <h1 className="text-primary text-[28px] md:text-[40px] font-extrabold">
              ممكن نتعرف !
            </h1>
            <p className="text-Ps font-normal text-[16px] md:text-[18px]">
              من أي رقم قومي مصري هتقدر تعرف شوية تفاصيل بسيطة
            </p>
          </div>

          <div className="input-field bg-[#F3F3F3] rounded-[15px] flex px-4 py-3 md:px-6 items-center w-full md:w-[822px] h-[60px] md:h-[70px] justify-between gap-3 md:gap-5">
            <CiSearch className="text-[24px] md:text-[28px] text-[#878787]" />
            <input
              type="text"
              placeholder="رقم اليطاقة ..."
              className="bg-[#F3F3F3] w-[75%] md:w-[80%] px-2 md:px-4 py-2 md:py-5 focus:outline-none id-in"
              value={id}
              onChange={handleChange}
            />
            <button
              className="bg-primary hover:bg-primary/80 transition-all duration-300 rounded-[25px] w-[95px] md:w-[115px] h-[40px] md:h-[46px] text-white text-[18px] md:text-[20px] font-extrabold"
              onClick={handleClick}
            >
              إبحث
            </button>
          </div>

          {wrong && (
            <p className="text-red-500 text-[14px] md:text-[16px]">
              الرقم القومي يجب أن يكون 14 رقم ويحتوي على أرقام فقط
            </p>
          )}
          {valid ? <Data id={id} /> : <TempText />}
        </div>
      </div>

      <div className="foot w-full text-center">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
