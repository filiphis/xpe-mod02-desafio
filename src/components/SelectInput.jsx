function SelectInput({ onSelectedCountry, selectedCountry, allCountries }) {
  function handleSelectedCountryChange(event) {
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
        {allCountries.map(({ id, name }) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

export { SelectInput };
