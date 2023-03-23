import { Card } from "./Card";

function CardList({ countryAndCandidatesList, totalVotes }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {countryAndCandidatesList.map(({ candidate, votes }, index) => (
        <Card
          key={candidate.id}
          candidateName={candidate.name}
          candidateVotes={votes}
          totalVotes={totalVotes}
          candidateUserName={candidate.username}
          winner={index === 0 ? true : false}
        />
      ))}
    </div>
  );
}

export { CardList };
