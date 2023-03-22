import UserAvatar from "../assets/spiderMan.png";
import {
  helperFormatNumberToLocaleBR,
  helperFormatPercentage,
} from "../helpers/numberHelpers";
function Card() {
  return (
    <div className="w-60 h-48 shadow-xl flex flex-col px-4 py-6 ">
      <div className="flex flex-row justify-between items-center ">
        <div className=" w-16 h-16 rounded-full bg-yellow-700 overflow-hidden">
          <img className="max-h-full max-w-full" src={UserAvatar} alt="" />
        </div>
        <div className="flex flex-col items-center">
          <span>{helperFormatPercentage(45.68)}</span>
          <span className="text-">
            {helperFormatNumberToLocaleBR(Number(791455))} votos
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-end items-center flex-1 gap-6">
        <span className=" font-bold">Nome</span>
        <span className="text-xs">Status Eleitoral</span>
      </div>
    </div>
  );
}

export { Card };
