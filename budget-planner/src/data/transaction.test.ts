import { ExternalTransaction } from "./transactions"
import "@testing-library/jest-dom"
import { Vendor } from "./vendor"
import { Account } from "./account"
import { Purchase } from "./purchase"

test("JSON stringify and parse", () => {

    const test = new ExternalTransaction(
        new Date("2024-01-01T02:03:05Z"),
        10,
        new Vendor("Example Vendor"),
        new Account("Example Account"),
        [ new Purchase(10, "Example Reason", "Example Object", "An object used as an example for a test purchase") ]
    )
    console.log("Test", test)

    const json = test.toJson()
    console.log("JSON", json)

    const basicParse = JSON.parse(json)
    console.log("Raw parsed json:", basicParse)

    const parsed = ExternalTransaction.fromJson(JSON.parse(json));
    console.log("Parsed", parsed)

    expect(parsed).toBeDefined();
    if(parsed == undefined) return
    expect(parsed.time).toEqual(test.time)
    expect(parsed.amount).toEqual(test.amount)
    expect(parsed.vendor).toEqual(test.vendor)
    expect(parsed.account).toEqual(test.account)
    expect(parsed.purchases).toEqual(test.purchases)
})