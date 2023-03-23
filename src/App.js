import { useEffect, useState } from "react";
import { CardList } from "./components/CardList";
import { CountryInfo } from "./components/CountryInfo";
import { SelectInput } from "./components/SelectInput";
import { api } from "./service/axios";

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryFullInfo, setSelectedCountryFullInfo] = useState({});

  const [allCountries, setAllCountries] = useState([]);

  const [elections, setElections] = useState([]);
  // const electionFilter =

  const totalVotes = elections.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.votes;
  }, 0);

  useEffect(() => {
    async function fetchData() {
      const [candidatesResponse, electionResponse] = await Promise.all([
        api.get("/candidates"),
        api.get("/election"),
      ]);

      const candidatesData = candidatesResponse.data;
      const electionData = electionResponse.data;

      const electionDataForSelectedCountry = electionData
        .filter((election) => election.cityId === selectedCountryFullInfo.id)
        .map((item, index, arr) => {
          // let totalVotes = +item.votes;
          return {
            candidate: {
              ...candidatesData.filter((c) => item.candidateId === c.id)[0],
            },
            // totalVotes: totalVotes,
            ...item,
          };
        })
        .sort((a, b) => b.votes - a.votes);

      setElections(electionDataForSelectedCountry);
    }

    fetchData();
  }, [selectedCountryFullInfo]);

  useEffect(() => {
    async function fetchCountries() {
      const response = await api.get("/cities/?\\_sort=name&\\_order=desc");
      const newCountries = response.data;

      setAllCountries(newCountries);
      setSelectedCountry(newCountries[0].name);
      setSelectedCountryFullInfo(newCountries[0]);
    }

    fetchCountries();
  }, []);

  // useEffect(() => {
  //   const findActuallyCountry = allCountries.find(
  //     (country) => country.name === selectedCountry
  //   );

  //   // ***
  //   setSelectedCountryFullInfo(findActuallyCountry);
  // }, [selectedCountry]);

  function handleSelectedCountryChange(event) {
    const newSelectedCountry = event.target.value;

    // ***
    setSelectedCountry(newSelectedCountry);

    const findActuallyCountry = allCountries.find(
      (country) => country.name === selectedCountry
    );

    // ***
    setSelectedCountryFullInfo(findActuallyCountry);
  }

  return (
    <>
      <header>
        <div className="bg-blue-500 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl text-white">
            React Elections
          </h1>
        </div>
      </header>

      <main>
        <SelectInput
          selectedCountry={selectedCountry}
          onSelectedCountry={handleSelectedCountryChange}
          allCountries={allCountries}
        />
        {/* problema aqui */}
        <CountryInfo selectedCountry={selectedCountryFullInfo} />
        <div className="container mx-auto p-4">
          <CardList
            countryAndCandidatesList={elections}
            totalVotes={totalVotes}
          />
        </div>
      </main>
    </>
  );
}
