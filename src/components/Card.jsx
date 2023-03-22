import UserAvatar from "../assets/spiderMan.png";
function Card() {
  return (
    <div className="w-60 h-60 shadow-xl flex flex-col px-4 py-6">
      <div className="flex flex-row justify-between items-center ">
        <div className=" w-16 h-16 rounded-full bg-yellow-700 overflow-hidden">
          <img className="max-h-full max-w-full" src={UserAvatar} alt="" />
        </div>
        <div className="flex flex-col">
          <span>45,68%</span>
          <span>794.559</span>
        </div>
      </div>
      <div className="flex flex-col justify-end items-center flex-1 gap-6">
        <span>Nome</span>
        <span>Status Eleitoral</span>
      </div>
    </div>
  );
}

export { Card };
