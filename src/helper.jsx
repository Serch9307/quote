// get difference of years
export function getDifferenceYear(year) {
  return new Date().getFullYear() - year;
}

// calc the total to pay according brand
export function calcBrand(brand) {
  let increment;

  switch (brand) {
    case "european":
      increment = 1.3;
      break;
    case "american":
      increment = 1.15;
      break;
    case "asian":
      increment = 1.05;
      break;
    default:
      increment = 1.0;
      break;
  }

  return increment;
}

// calc type of insurange
export function getPlan(plan) {
  return plan === "basic" ? 1.2 : 1.5;
}

// Show the first letter uppercase
export function firstUppercase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
