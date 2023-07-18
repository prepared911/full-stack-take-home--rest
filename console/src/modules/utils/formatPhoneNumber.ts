export const formatPhoneNumber = (value: string) => {
  const cleaned = value.replace(/\D/g, "");
  const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    const [, intlCode, areaCode, threeDigits, fourDigits] = match;
    return [
      intlCode ? "+1 " : "",
      `(${areaCode}) `,
      `${threeDigits}-${fourDigits}`,
    ].join("");
  }
  return value;
};
