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
    setBirthYear(year);

    setBirtMonth(handleMonth[parseInt(month) - 1]);
    getGenderFromCode(genderCode);
    setLocation(getLocFromCode[parseInt(locationCode)]);
  };

  const getGenderFromCode = (code) => {
    if (code % 2 === 0) {
      setGender("أنثى");
    } else {
      setGender("ذكر");
    }
  };

  //implement get location func as an array of objects
  const getLocFromCode = {
    1: "القاهرة",
    2: "الإسكندرية",
    3: "بورسعيد",
    4: "السويس",
    11: "دمياط",
    12: "الدقهلية",
    13: "الشرقية",
    14: "القليوبية",
    15: "كفر الشيخ",
    16: "الغربية",
    17: "المنوفية",
    18: "البحيرة",
    19: "الإسماعيلية",
    21: "الجيزة",
    22: "بني سويف",
    23: "الفيوم",
    24: "المنيا",
    25: "أسيوط",
    26: "سوهاج",
    27: "قنا",
    28: "أسوان",
    29: "الأقصر",
    31: "مطروح",
    32: "شمال سيناء",
    33: "جنوب سيناء",
    34: "البحر الأحمر",
    35: "الوادي الجديد",
    88: "خارج مصر",
  };

  //make the handle mon a single array;
  const handleMonth = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];

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
