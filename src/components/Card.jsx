/* eslint-disable react/prop-types */
import { FaFileAlt } from "react-icons/fa";
import { LuDownloadCloud } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ data,reference }) => {
  console.log(data.tag.tagColor);
  return (
    <>
      <motion.div drag dragConstraints={reference} className="relative w-60 h-72 bg-zinc-700 rounded-[40px] py-10 px-6  overflow-hidden text-white">
        <FaFileAlt />
        <p className="text-sm mt-5 text-white leading-tight">{data.desc}</p>
        <div className="absolute bottom-0 left-0  w-full h-16">
          <div className="flex justify-between items-center  pb-2 px-8">
            <h6>{data.fileSize}</h6>
            <span className="w-6 h-6 bg-zinc-600 rounded-full flex justify-center items-center">
              {data.close ? (
                <LuDownloadCloud size="0.9em" />
              ) : (
                <IoIosClose size="9em" />
              )}
            </span>
          </div>

          {data.tag.isOpen && (
            <div
              className={`tag w-full h-[100%] ${data.tag.tagColor === "blue" ? 'bg-blue-600': 'bg-green-600' } flex justify-center  pt-[6px]`}
            >
              <small> Download Now</small>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};
export default Card;
