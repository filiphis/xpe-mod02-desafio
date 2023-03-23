import { useEffect, useState } from "react";
import { api } from "../service/axios";
import { Card } from "./Card";

function CardList({ selectedCountryFullInfo }) {
  const [candidates, setCandidates] = useState([]);
  const [elections, setElections] = useState([]);
  // const electionFilter =

  const { id, name } = selectedCountryFullInfo;
  console.log("id", id);

  console.log("selectedCountryFullInfo", selectedCountryFullInfo);
  useEffect(() => {
    async function fetchData() {
      const [candidatesResponse, electionResponse] = await Promise.all([
        api.get("/candidates"),
        api.get("/election"),
      ]);

      const candidatesData = candidatesResponse.data;
      const electionData = electionResponse.data;

      const electionDataForSelectedCountry = electionData
        .filter((election) => election.cityId === id)
        .map((item) => {
          return {
            candidate: {
              candidateData: candidatesData.filter(
                (c) => item.candidateId === c.id
              ),
            },
            ...item,
          };
        });

      setElections(electionDataForSelectedCountry);
      console.log(
        "electionDataForSelectedCountry",
        electionDataForSelectedCountry
      );
    }

    fetchData();
  }, []);
  return (
    <div>
      {/* {elections.map((election) => (
        <Card
          candidateId={election.candidateId}
          candidateVotes={election.votes}
        />
      ))} */}
    </div>
  );
}

export { CardList };
