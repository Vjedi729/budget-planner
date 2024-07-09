const formatter = Intl.NumberFormat("en-US", {currency: "USD", style:"currency"});

export function dollarFormat(n: number): string { 
    // return `${n<0 ? "-" : ""}$${Math.round(Math.abs(n)*100)/100}` 
    return formatter.format(n);
}
