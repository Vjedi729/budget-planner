import { Account } from "../account";

export const visa3408 = new Account("Meridith's Visa 3408")
export const visa8042 = new Account("Vishal's Visa 8042")
export const visa0078 = new Account("Meridith's old Citi Visa 0078")
export const chase = new Account("Chase checking account")
export const discover = new Account("Vishal's discover credit card")
export const capOne = new Account("Meridith's capitol one credit card")

export const acctLookup: Record<string, Account> = {
    "Meridith's Visa 3408": visa3408,
    "Vishal's Visa 8042": visa8042,
    "Meridith's old Citi Visa 0078": visa0078,
    "Chase checking account": chase,
    "Vishal's discover credit card": discover,
    "Meridith's capitol one credit card": capOne
}