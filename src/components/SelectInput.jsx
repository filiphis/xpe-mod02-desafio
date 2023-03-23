function SelectInput({
  onSelectedCountry,
  selectedCountry,
  allCountries,
  onUpdateCountryInfo,
}) {
  function handleSelectedCountryChange(event) {
    const id =
      event.target.options[event.target.selectedIndex].getAttribute("data-id");
    const name =
      event.target.options[event.target.selectedIndex].getAttribute(
        "data-name"
      );
    const votingPopulation = event.target.options[
      event.target.selectedIndex
    ].getAttribute("data-votingPopulation");

    const absence =
      event.target.options[event.target.selectedIndex].getAttribute(
        "data-absence"
      );
    const presence =
      event.target.options[event.target.selectedIndex].getAttribute(
        "data-presence"
      );

    const countryInfo = {
      id,
      name,
      votingPopulation,
      absence,
      presence,
    };

    onUpdateCountryInfo(countryInfo);
    onSelectedCountry(event);
  }

  return (
    <div className="flex justify-center items-center mt-4 flex-col  gap-2">
      Escolha o município: {selectedCountry}
      <select
        id="selectCountry"
        className="border-black border-2 w-52"
        value={selectedCountry}
        onChange={handleSelectedCountryChange}
      >
        {allCountries.map(
          ({ id, name, votingPopulation, absence, presence }) => (
            <option
              key={id}
              value={name}
              data-id={id}
              data-name={name}
              data-votingpopulation={votingPopulation}
              data-absence={absence}
              data-presence={presence}
            >
              {name}
            </option>
          )
        )}
      </select>
    </div>
  );
}

export { SelectInput };
