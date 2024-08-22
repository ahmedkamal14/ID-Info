import { useState, useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BsGenderAmbiguous } from "react-icons/bs";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

const Data = (probs) => {
  useEffect(() => {
    extraxtDataFromId();
    console.log(id);
  }, [probs.tog]);

  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState(0);
  const [birthMonth, setBirtMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");

  const [location, setLocation] = useState("");

  const { id } = probs;

  const extraxtDataFromId = () => {
    if (id.length !== 14) {
      return;
    }

    const locationCode = id.slice(7, 9);
    const genderCode = id.slice(12, 13);
    const centuryCode = id.slice(0, 1);
    const yearCode = id.slice(1, 3);
    const monthCode = id.slice(3, 5);
    const dayCode = id.slice(5, 7);

    const year = centuryCode === "2" ? "19" + yearCode : "20" + yearCode;
    const month = parseInt(monthCode);
    const day = parseInt(dayCode);

    setBirthday(day);
    setBirtMonth(month);
    setBirthYear(year);

    handleMonth(month);
    getGenderFromCode(genderCode);
    getLocatoinFromCode(locationCode);
  };

  const getGenderFromCode = (code) => {
    if (code % 2 === 0) {
      setGender("أنثى");
    } else {
      setGender("ذكر");
    }
  };

  const getLocatoinFromCode = (code) => {
    switch (code) {
      case "01":
        setLocation("القاهرة");
        break;
      case "02":
        setLocation("الإسكندرية");
        break;
      case "03":
        setLocation("بورسعيد");
        break;
      case "04":
        setLocation("السويس");
        break;
      case "11":
        setLocation("دمياط");
        break;
      case "12":
        setLocation("الدقهلية");
        break;
      case "13":
        setLocation("الشرقية");
        break;
      case "14":
        setLocation("القليوبية");
        break;
      case "15":
        setLocation("كفر الشيخ");
        break;
      case "16":
        setLocation("الغربية");
        break;
      case "17":
        setLocation("المنوفية");
        break;
      case "18":
        setLocation("البحيرة");
        break;
      case "19":
        setLocation("الإسماعلية");
        break;
      case "21":
        setLocation("الجيزة");
        break;
      case "22":
        setLocation("بني سويف");
        break;
      case "23":
        setLocation("الفيوم");
        break;
      case "24":
        setLocation("المنيا");
        break;
      case "25":
        setLocation("أسيوط");
        break;
      case "26":
        setLocation("سوهاج");
        break;
      case "27":
        setLocation("قنا");
        break;
      case "28":
        setLocation("أسوان");
        break;
      case "29":
        setLocation("الوادي الجديد");
        break;
      case "31":
        setLocation("شمال سيناء");
        break;
      case "32":
        setLocation("جنوب سيناء");
        break;
      case "33":
        setLocation("البحر الأحمر");
        break;
      case "34":
        setLocation("الواحات البحرية");
        break;
      case "35":
        setLocation("مرسى مطروح");
        break;
    }
  };

  const handleMonth = (stringMon) => {
    switch (stringMon) {
      case 1:
        setBirtMonth("يناير");
        break;
      case 2:
        setBirtMonth("فبراير");
        break;
      case 3:
        setBirtMonth("مارس");
        break;
      case 4:
        setBirtMonth("أبريل");
        break;
      case 5:
        setBirtMonth("مايو");
        break;
      case 6:
        setBirtMonth("يونيو");
        break;
      case 7:
        setBirtMonth("يوليو");
        break;
      case 8:
        setBirtMonth("أغسطس");
        break;
      case 9:
        setBirtMonth("سبتمبر");
        break;
      case 10:
        setBirtMonth("أكتوبر");
        break;
      case 11:
        setBirtMonth("نوفمبر");
        break;
      case 12:
        setBirtMonth("ديسمبر");
        break;
    }
  };

  return (
    <div className="data grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-5">
      <div className="single w-[247px] h-[202px] bg-gradient-to-r from-[#3266E3] to-[#54B5A6] rounded-[20px] p-12 flex items-center justify-center text-white text-[30px] font-bold">
        قدرنا نعرف الأتي
      </div>
      <div className="single w-[247px] h-[202px] bg-[#F4F4F4] rounded-[20px] p-6 flex flex-col">
        <div className="type flex items-center gap-4 border-b-2 pb-3">
          <BsGenderAmbiguous className="text-4xl bg-lightG p-1 rounded-full text-white" />
          <h1 className="text-[#797979] text-[18px] font-bold">النوع</h1>
        </div>
        <div className="content flex-grow flex items-center justify-center text-[#494949] text-[30px] font-bold">
          <p>{gender}</p>
        </div>
      </div>
      <div className="single w-[247px] h-[202px] bg-[#F4F4F4] rounded-[20px] p-6 flex flex-col">
        <div className="type flex items-center gap-4 border-b-2 pb-3">
          <IoLocationOutline className="text-4xl bg-lightG p-1 rounded-full text-white" />
          <h1 className="text-[#797979] text-[18px] font-bold">محل الميلاد</h1>
        </div>
        <div className="content flex-grow flex items-center justify-center text-[#494949] text-[30px] font-bold">
          <p>{location}</p>
        </div>
      </div>
      <div className="single w-[247px] h-[202px] bg-[#F4F4F4] rounded-[20px] p-6 flex flex-col">
        <div className="type flex items-center gap-4 border-b-2 pb-3">
          <LiaBirthdayCakeSolid className="text-4xl bg-lightG p-1 rounded-full text-white" />
          <h1 className="text-[#797979] text-[18px] font-bold">
            تاريخ الميلاد
          </h1>
        </div>
        <div className="content flex-grow flex items-center justify-center text-[#494949] text-[30px] font-bold">
          <p>
            {birthYear}, {birthMonth} {birthday}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Data;
