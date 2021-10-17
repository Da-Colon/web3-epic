import { useEffect, useState } from "react";
import image from "../../assets/images/loading.gif";
import imageEye from "../../assets/images/loading-eye.gif";

export enum LoaderOptions {
  Eye,
  RickedRoll,
  Standard
}

const LoaderImage = ({option}: {option: LoaderOptions}) => {
  switch(option) {
    case LoaderOptions.Eye:
      return <img alt="" src={imageEye} className="h-full w-full"/>
    case LoaderOptions.RickedRoll:
      return <img alt="" src={image} className="h-full w-full"/>
    case LoaderOptions.Standard:
      return <div className="h-full w-full bg-black"></div>
  }
}

const Loader = ({option}: {option: LoaderOptions}) => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (number < 5) {
        setNumber((num) => num + 1);
        return;
      }
      setNumber(0);
    }, 1000);
    return () => clearInterval(timer);
  }, [number]);
  
  const numberRolled = new Array(number).fill('')
  
  return (
    <div className="mx-auto flex">
      {numberRolled.map((_, i:number) => (
        <div key={i} className="w-16 h-16 rounded-full overflow-hidden mx-2">
          <LoaderImage option={option} />
        </div>
      ))}
    </div>
  );
};

export default Loader;
