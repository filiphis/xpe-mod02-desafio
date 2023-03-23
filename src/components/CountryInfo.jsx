import { helperFormatNumberToLocaleBR } from "../helpers/numberHelpers";

function CountryInfo({ selectedCountry }) {
  const { name, votingPopulation, absence, presence } = selectedCountry;
  return (
    <div className="m-6 my-auto flex-col flex justify-center items-center gap-4 mt-4">
      <h3 className="">Eleição em {name}</h3>
      <div className="flex gap-6">
        <span>
          <span className="font-bold">Total de eleitores: </span>
          <span>{helperFormatNumberToLocaleBR(votingPopulation)}</span>
        </span>
        <span>
          <span className="font-bold">Abstenção: </span>
          <span>{helperFormatNumberToLocaleBR(absence)}</span>
        </span>
        <span>
          <span className="font-bold">Comparecimento: </span>
          <span>{helperFormatNumberToLocaleBR(presence)}</span>
        </span>
      </div>
      <span>{6} candidatos</span>
    </div>
  );
}

export { CountryInfo };
