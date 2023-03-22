import { helperFormatNumberToLocaleBR } from "../helpers/numberHelpers";

function CountyInfo() {
  return (
    <div className="m-6">
      <h3 className="text-center">Eleição em {"Asgard"}</h3>
      <div>
        <span>
          <span className="font-bold">Total de eleitores: </span>
          <span>{helperFormatNumberToLocaleBR(1850577)}</span>
        </span>
        <span>
          <span className="font-bold">Abstenção: </span>
          <span>{helperFormatNumberToLocaleBR(11034)}</span>
        </span>
        <span>
          <span className="font-bold">Comparecimento: </span>
          <span>{helperFormatNumberToLocaleBR(1739543)}</span>
        </span>
      </div>
      <span>{6} candidatos</span>
    </div>
  );
}

export { CountyInfo };
