import { useRef } from "react";
import Card from "./Card";

const Forground = () => {

  const ref = useRef(null);


  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, minus necessitatibus. Quia, earum error! Voluptate ",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "pink",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, minus necessitatibus. Quia, earum error! Voluptate ",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, minus necessitatibus. Quia, earum error! Voluptate ",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
  ];

  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full  flex gap-10 p-10 flex-wrap flex-shrink-0">
        {data.map((item, index) => {
          return <Card data={item} key={index} reference={ref} />;
        })}
      </div>
    </>
  );
};
export default Forground;
