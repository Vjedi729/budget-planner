export function dollarFormat(n: number): string { return `${n<0 ? "-" : ""}$${Math.round(Math.abs(n)*100)/100}` }
