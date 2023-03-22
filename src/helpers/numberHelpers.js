const numberFormatter = new Intl.NumberFormat("pt-br", {
  style: "decimal",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function helperFormatPercentage(value) {
  const suffix = "%";

  const formattedValue = numberFormatter.format(value);

  return `${formattedValue}${suffix}`;
}

export function helperFormatNumberToLocaleBR(value) {
  return Number(value).toLocaleString("pt-BR");
}
