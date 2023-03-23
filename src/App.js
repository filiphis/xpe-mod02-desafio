import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { CardList } from "./components/CardList";
import { CountryInfo } from "./components/CountryInfo";
import { SelectInput } from "./components/SelectInput";
import { api } from "./service/axios";

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryFullInfo, setSelectedCountryFullInfo] = useState({});

  const [allCountries, setAllCountries] = useState([]);

  const [elections, setElections] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const totalVotes = elections.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.votes;
  }, 0);

  useEffect(() => {
    async function fetchData() {
      try {
        const [candidatesResponse, electionResponse] = await Promise.all([
          api.get("/candidates"),
          api.get("/election"),
        ]);

        const candidatesData = candidatesResponse.data;
        const electionData = electionResponse.data;

        const electionDataForSelectedCountry = electionData
          .filter((election) => election.cityId === selectedCountryFullInfo.id)
          .map((item) => {
            return {
              candidate: {
                ...candidatesData.filter((c) => item.candidateId === c.id)[0],
              },
              ...item,
            };
          })
          .sort((a, b) => b.votes - a.votes);

        setElections(electionDataForSelectedCountry);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
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

  function handleSelectedCountryChange(event) {
    const newSelectedCountry = event.target.value;

    setSelectedCountry(newSelectedCountry);
  }

  function handleCountryInfo(countryInfo) {
    console.log("handleCountryInfo::: > countryInfo", countryInfo);
    setSelectedCountryFullInfo(countryInfo);
  }

  const loadingComponent = (
    <div className="flex justify-center mt-6">
      <ClipLoader loading={isLoading} color="#000000" />
    </div>
  );

  return (
    <>
      <header>
        <div className="bg-blue-500 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl text-white">
            React Elections
          </h1>
        </div>
      </header>

      {isLoading ? (
        loadingComponent
      ) : (
        <main>
          <SelectInput
            selectedCountry={selectedCountry}
            onSelectedCountry={handleSelectedCountryChange}
            onUpdateCountryInfo={handleCountryInfo}
            allCountries={allCountries}
          />
          {console.log(
            "selectedCountryFullInfo no App: ",
            selectedCountryFullInfo
          )}
          <CountryInfo selectedCountry={selectedCountryFullInfo} />
          <div className="container mx-auto p-4">
            <CardList
              countryAndCandidatesList={elections}
              totalVotes={totalVotes}
            />
          </div>
        </main>
      )}
    </>
  );
}
