import UserAvatar from "../assets/spiderMan.png";
import {
  calculatePercentage,
  helperFormatNumberToLocaleBR,
  helperFormatPercentage,
} from "../helpers/numberHelpers";
function Card({
  candidateName,
  candidateVotes,
  totalVotes,
  candidateUserName,
  winner,
}) {
  const totalVotesPercentage = calculatePercentage(candidateVotes, totalVotes);
  const textColorWinner = winner ? "text-green-600" : "text-yellow-700";
  return (
    <div className="w-60 h-48 shadow-xl flex flex-col px-4 py-6 ">
      <div className="flex flex-row justify-between items-center ">
        <div className=" w-16 h-16 rounded-full bg-yellow-700 overflow-hidden">
          <img className="max-h-full max-w-full" src={UserAvatar} alt="" />
        </div>
        <div className="flex flex-col items-center">
          <span className={` font-bold ${textColorWinner}`}>
            {helperFormatPercentage(totalVotesPercentage)}
          </span>
          <span className="text-xs">
            {helperFormatNumberToLocaleBR(Number(candidateVotes))} votos
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-end items-center flex-1 gap-6">
        <span className=" font-bold">{candidateName}</span>
        <span className={`text-xs font-bold ${textColorWinner}`}>
          {winner ? "Eleito" : "Não eleito"}
        </span>
      </div>
    </div>
  );
}

export { Card };
