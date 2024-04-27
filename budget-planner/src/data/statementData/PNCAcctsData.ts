import { BucketName } from "../enums"
import { Account } from "../account"
import { Vendor } from "../vendor"
import { AccountStatement } from "../account-statement-types";
import { makeDate } from "../helperFunctions";
import { t } from "../helperFunctions";
import { p } from "../helperFunctions";
import { statement } from "../helperFunctions";
import { internal } from "../helperFunctions";
import { stat } from "fs";

const pncGrowth = new Account("PNC Growth Account")
const pncSpend = new Account("PNC Spend Account")
const pncReserve = new Account("PNC Reserve Account")
const chase = new Account("Chase checking account")

const UWM = new Vendor("United Wholesale Mortgage")
const vertex = new Vendor("Vertex Solutions")
const PNC = new Vendor("PNC Bank")


export const PNCGrowthStatements: AccountStatement[] = [
    statement(pncGrowth, makeDate(2021, 3, 1), makeDate(2021, 3, 31), [
        t(makeDate(2021, 3, 5), -2202.47, vertex, pncGrowth),
        internal(makeDate(2021, 3, 5), pncGrowth, makeDate(2021, 3, 5), pncSpend, 2600.00),
        t(makeDate(2021, 3, 8), 8115.60, UWM, pncGrowth, [
            p(8155.60, "Housing", "Down Payment")
        ]),
        t(makeDate(2021, 3, 19), -2202.47, vertex, pncGrowth),
        t(makeDate(2021, 3, 31), -0.04, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2021, 4, 1), makeDate(2021, 4, 30), [
        t(makeDate(2021, 4, 5), -2202.48, vertex, pncGrowth),
        internal(makeDate(2021, 3, 6), pncGrowth, makeDate(2021, 4, 6), pncSpend, 2600),
        t(makeDate(2021, 4, 20), -2202.46, vertex, pncGrowth),
        internal(makeDate(2021, 4, 23), pncGrowth, makeDate(2021, 4, 23), chase, 1000.00),
        t(makeDate(2021, 4, 30), -0.04, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2021, 5, 1), makeDate(2021, 5, 31), [
        t(makeDate(2021, 5, 3), 1242.69, UWM, pncGrowth, [
            p(1242.69, "Housing", "Mortgage payment")
        ]),
        internal(makeDate(2021, 5, 4), pncGrowth, makeDate(2021, 5, 4), pncSpend, 1000.00),
        t(makeDate(2021, 5, 5), -2202.48, vertex, pncGrowth),
        internal(makeDate(2021, 5, 4), pncGrowth, makeDate(2021, 5, 4), pncSpend, 2600.00),
        t(makeDate(2021, 5, 20), -2202.47, vertex, pncGrowth),
        t(makeDate(2021, 5, 31), -0.03, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2021, 6, 1), makeDate(2021, 6, 30), [
        t(makeDate(2021, 6, 1), 1242.69, UWM, pncGrowth, [
            p(1242.69, "Housing", "Mortgage payment")
        ]),
        t(makeDate(2021, 6, 4), -2202.47, vertex, pncGrowth),
        internal(makeDate(2021, 6, 4), pncGrowth, makeDate(2021, 6, 4), pncSpend, 2600.00),
        t(makeDate(2021, 6, 18), -2202.47, vertex, pncGrowth),
        t(makeDate(2021, 6, 30), -0.03, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2021, 7, 1), makeDate(2021, 7, 31), [
        t(makeDate(2021, 7, 1), 1242.69, UWM, pncGrowth, [
            p(1242.69, "Housing", "Mortgage payment")
        ]),
        t(makeDate(2021, 7, 2), -2202.48, vertex, pncGrowth),
        internal(makeDate(2021, 7, 6), pncGrowth, makeDate(2021, 7, 6), pncSpend, 2600.00),
        t(makeDate(2021, 7, 20), -2202.46, vertex, pncGrowth),
        t(makeDate(2021, 7, 31), -0.04, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2021, 8, 1), makeDate(2021, 8, 31), [
        t(makeDate(2021, 8, 2), 1242.69, UWM, pncGrowth, [
            p(1242.69, "Housing", "Mortgage payment")
        ]),
        internal(makeDate(2021, 8, 2), pncGrowth, makeDate(2021, 8, 2), pncSpend, 600.00),
        t(makeDate(2021, 8, 5), -2202.48, vertex, pncGrowth),
        internal(makeDate(2021, 8, 6), pncGrowth, makeDate(2021, 8, 6), pncSpend, 2600.00),
        t(makeDate(2021, 8, 20), -1751.61, vertex, pncGrowth),
        t(makeDate(2021, 8, 30), -35.00, new Vendor("Cash Deposit"), pncGrowth),
        t(makeDate(2021, 8, 31), -0.03, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2021, 9, 1), makeDate(2021, 9, 30), [
        t(makeDate(2021, 9, 1), 1242.69, UWM, pncGrowth, [
            p(1242.69, "Housing", "Mortgage payment")
        ]),
        t(makeDate(2021, 9, 3), -1751.61, vertex, pncGrowth),
        internal(makeDate(2021, 9, 3), pncGrowth, makeDate(2021, 9, 3), pncSpend, 2600.00),
        t(makeDate(2021, 9, 20), -1751.61, vertex, pncGrowth),
        internal(makeDate(2021, 9, 27), pncGrowth, makeDate(2021, 9, 30), chase, 4000.00),
        t(makeDate(2021, 6, 30), -0.03, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2021, 10, 1), makeDate(2021, 10, 31), [
        t(makeDate(2021, 10, 1), 1242.69, UWM, pncGrowth, [
            p(1242.69, "Housing", "Mortgage payment")
        ]),
        t(makeDate(2021, 10, 4), -1242.69, UWM, pncGrowth, [
            p(-1242.69, "Housing", "Returned Mortgage payment due to overdraft")
        ]),
        internal(makeDate(2021, 10, 4), pncSpend, makeDate(2021, 10, 4), pncGrowth, 1000.00),
        t(makeDate(2021, 10, 5), -1751.61, vertex, pncGrowth),
        internal(makeDate(2021, 10, 6), pncGrowth, makeDate(2021, 10, 6), pncSpend, 2600.00),
        t(makeDate(2021, 10, 6), 1242.69, UWM, pncGrowth, [
            p(1242.69, "Housing", "Mortgage payment")
        ]),
        t(makeDate(2021, 10, 7), -1242.69, UWM, pncGrowth, [
            p(-1242.69, "Housing", "Returned Mortgage payment due to overdraft")
        ]),
        t(makeDate(2021, 10, 20), -2202.47, vertex, pncGrowth),
        internal(makeDate(2021, 10, 25), pncGrowth, makeDate(2021, 10, 25), pncSpend, 1000.00),
        t(makeDate(2021, 10, 27), 1302.35, UWM, pncGrowth, [
            p(1242.69, "Housing", "Mortgage payment")
        ]),
        t(makeDate(2021, 10, 31), -0.01, PNC, pncGrowth),
        t(makeDate(2021, 10, 31), 72.00, PNC, pncGrowth, [
            p(35.00, "Housing", "Returned check fee"),
            p(36.00, "Housing", "Returned check fee")
        ])
    ]),
    statement(pncGrowth, makeDate(2021, 11, 1), makeDate(2021, 11, 30), [
        t(makeDate(2021, 11, 1), 1269.34, UWM, pncGrowth, [
            p(1242.69, "Housing", "Mortgage payment")
        ]),
        t(makeDate(2021, 11, 2), -1269.34, UWM, pncGrowth, [
            p(-1242.69, "Housing", "Returned Mortgage payment due to overdraft")
        ]),
        t(makeDate(2021, 11, 4), 1269.34, UWM, pncGrowth, [
            p(1242.69, "Housing", "Mortgage payment")
        ]),
        t(makeDate(2021, 11, 5), -1269.34, UWM, pncGrowth, [
            p(-1242.69, "Housing", "Returned Mortgage payment due to overdraft")
        ]),
        t(makeDate(2021, 11, 5), -2242.86, vertex, pncGrowth),
        t(makeDate(2021, 11, 19), -2202.47, vertex, pncGrowth),
        t(makeDate(2021, 11, 30), -0.03, PNC, pncGrowth),
        t(makeDate(2021, 11, 30), 72.00, PNC, pncGrowth, [
            p(35.00, "Housing", "Returned check fee"),
            p(36.00, "Housing", "Returned check fee")
        ])
    ]),
    statement(pncGrowth, makeDate(2021, 12, 1), makeDate(2021, 12, 31), [
        internal(makeDate(2021, 12, 2), pncGrowth, makeDate(2021, 12, 2), pncSpend, 500.00),
        t(makeDate(2021, 12, 3), -2242.87, vertex, pncGrowth),
        internal(makeDate(2021, 12, 6), pncGrowth, makeDate(2021, 12, 6), pncSpend, 3100.00),
        t(makeDate(2021, 12, 20), -2242.87, vertex, pncGrowth),
        internal(makeDate(2021, 9, 27), pncGrowth, makeDate(2021, 9, 30), chase, 4000.00),
        t(makeDate(2021, 12, 31), -0.03, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2022, 1, 1), makeDate(2022, 1, 31), [
        t(makeDate(2022, 1, 5), -2247.51, vertex, pncGrowth),
        internal(makeDate(2022, 1, 6), pncGrowth, makeDate(2022, 1, 6), pncSpend, 3100.00),
        internal(makeDate(2022, 1, 6), pncGrowth, makeDate(2022, 1, 6), pncSpend, 2000.00),
        t(makeDate(2022, 1, 20), -2247.51, vertex, pncGrowth),
        t(makeDate(2022, 1, 31), -0.04, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2022, 2, 1), makeDate(2022, 2, 28), [
        t(makeDate(2022, 2, 4), -2247.51, vertex, pncGrowth),
        internal(makeDate(2022, 2, 4), pncGrowth, makeDate(2022, 2, 4), pncSpend, 3100.00),
        t(makeDate(2022, 2, 18), -2247.51, vertex, pncGrowth),
        t(makeDate(2022, 2, 28), -0.04, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2022, 3, 1), makeDate(2022, 3, 31), [
        t(makeDate(2022, 3, 4), -2247.51, vertex, pncGrowth),
        internal(makeDate(2022, 3, 4), pncGrowth, makeDate(2022, 3, 4), pncSpend, 3100.00),
        internal(makeDate(2022, 3, 4), pncGrowth, makeDate(2022, 3, 4), chase, 4000.00),
        t(makeDate(2022, 3, 18), -2247.50, vertex, pncGrowth),
        t(makeDate(2022, 3, 31), -0.03, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2022, 4, 1), makeDate(2022, 4, 30), [
        t(makeDate(2022, 4, 5), -2247.52, vertex, pncGrowth),
        t(makeDate(2022, 4, 5), -4504.94, vertex, pncGrowth),
        internal(makeDate(2022, 4, 6), pncGrowth, makeDate(2022, 4, 6), pncSpend, 3100.00),
        t(makeDate(2022, 4, 20), -2247.50, vertex, pncGrowth),
        t(makeDate(2022, 4, 30), -0.06, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2022, 5, 1), makeDate(2022, 5, 31), [
        t(makeDate(2022, 5, 5), -2247.52, vertex, pncGrowth),
        internal(makeDate(2022, 5, 6), pncGrowth, makeDate(2022, 5, 6), pncSpend, 3100.00),
        internal(makeDate(2022, 5, 11), pncGrowth, makeDate(2022, 5, 11), chase, 5000.00),
        t(makeDate(2022, 5, 20), -2247.50, vertex, pncGrowth),
        t(makeDate(2022, 5, 23), -1038.20, vertex, pncGrowth),
        t(makeDate(2022, 5, 31), -0.06, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2022, 6, 1), makeDate(2022, 6, 30), [
        t(makeDate(2022, 6, 3), -2247.52, vertex, pncGrowth),
        internal(makeDate(2022, 6, 6), pncGrowth, makeDate(2022, 6, 6), pncSpend, 3100.00),
        t(makeDate(2022, 6, 17), -2247.51, vertex, pncGrowth),
        t(makeDate(2022, 6, 30), -0.06, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2022, 7, 1), makeDate(2022, 7, 31), [
        t(makeDate(2022, 7, 5), -2247.50, vertex, pncGrowth),
        internal(makeDate(2022, 7, 6), pncGrowth, makeDate(2022, 7, 6), pncSpend, 3100.00),
        t(makeDate(2022, 7, 20), -2247.52, vertex, pncGrowth),
        t(makeDate(2022, 7, 31), -0.08, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2022, 8, 1), makeDate(2022, 8, 31), [
        t(makeDate(2022, 8, 5), -2247.50, vertex, pncGrowth),
        internal(makeDate(2022, 8, 5), pncGrowth, makeDate(2022, 6, 6), pncSpend, 3100.00),
        t(makeDate(2022, 8, 19), -2247.52, vertex, pncGrowth),
        internal(makeDate(2022, 8, 25), pncGrowth, makeDate(2022, 8, 25), chase, 3400.00),
        t(makeDate(2022, 6, 30), -0.08, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2022, 9, 1), makeDate(2022, 9, 30), [
        t(makeDate(2022, 9, 2), -2247.50, vertex, pncGrowth),
        internal(makeDate(2022, 9, 6), pncGrowth, makeDate(2022, 9, 6), pncSpend, 3100.00),
        t(makeDate(2022, 9, 20), -2247.52, vertex, pncGrowth),
        t(makeDate(2022, 9, 30), -0.07, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2022, 10, 1), makeDate(2022, 10, 31), [
        t(makeDate(2022, 10, 5), -2247.51, vertex, pncGrowth),
        internal(makeDate(2022, 10, 6), pncGrowth, makeDate(2022, 10, 6), pncSpend, 3100.00),
        t(makeDate(2022, 10, 20), -2247.50, vertex, pncGrowth),
        t(makeDate(2022, 10, 31), -0.08, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2022, 11, 1), makeDate(2022, 11, 30), [
        t(makeDate(2022, 11, 4), -2247.52, vertex, pncGrowth),
        internal(makeDate(2022, 11, 4), pncGrowth, makeDate(2022, 11, 4), pncSpend, 3100.00),
        t(makeDate(2022, 11, 20), -2436.27, vertex, pncGrowth),
        t(makeDate(2022, 11, 30), -29.28, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2022, 12, 1), makeDate(2022, 12, 31), [
        t(makeDate(2022, 12, 5), -2436.27, vertex, pncGrowth),
        internal(makeDate(2022, 12, 5), pncGrowth, makeDate(2022, 12, 5), chase, 2000.00),
        internal(makeDate(2022, 12, 6), pncGrowth, makeDate(2022, 12, 6), pncSpend, 3100.00),
        t(makeDate(2022, 12, 20), -2436.27, vertex, pncGrowth),
        internal(makeDate(2022, 12, 28), pncGrowth, makeDate(2022, 12, 30), chase, 1000.00),
        t(makeDate(2022, 12, 31), -35.34, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2023, 1, 1), makeDate(2023, 1, 31), [
        t(makeDate(2023, 1, 5), -2446.88, vertex, pncGrowth),
        internal(makeDate(2023, 1, 6), pncGrowth, makeDate(2023, 1, 6), pncSpend, 3700.00),
        t(makeDate(2023, 1, 20), -2446.88, vertex, pncGrowth),
        t(makeDate(2023, 1, 31), -37.18, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2023, 2, 1), makeDate(2023, 2, 28), [
        t(makeDate(2023, 2, 3), -2246.89, vertex, pncGrowth),
        internal(makeDate(2023, 2, 6), pncGrowth, makeDate(2023, 2, 6), pncSpend, 3700.00),
        t(makeDate(2023, 2, 17), -2446.88, vertex, pncGrowth),
        t(makeDate(2023, 2, 28), -38.21, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2023, 3, 1), makeDate(2023, 3, 31), [
        t(makeDate(2023, 3, 3), -2446.88, vertex, pncGrowth),
        internal(makeDate(2023, 3, 6), pncGrowth, makeDate(2023, 3, 6), pncSpend, 3700.00),
        internal(makeDate(2023, 3, 7), pncSpend, makeDate(2023, 3, 7), pncGrowth, 1000.00),
        internal(makeDate(2023, 3, 7), pncGrowth, makeDate(2023, 3, 10), chase, 13500.00),
        t(makeDate(2023, 3, 20), -2446.89, vertex, pncGrowth),
        t(makeDate(2023, 3, 31), -13.64, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2023, 4, 1), makeDate(2023, 4, 30), [
        internal(makeDate(2023, 4, 5), pncGrowth, makeDate(2023, 4, 5), pncSpend, 250.00),
        internal(makeDate(2023, 4, 5), pncGrowth, makeDate(2023, 4, 5), pncSpend, 232.18),
        t(makeDate(2023, 4, 5), -2446.88, vertex, pncGrowth),
        t(makeDate(2023, 4, 5), -968.70, vertex, pncGrowth),
        internal(makeDate(2023, 4, 6), pncGrowth, makeDate(2023, 4, 6), pncSpend, 3700.00),
        t(makeDate(2023, 4, 20), -2446.89, vertex, pncGrowth),
        t(makeDate(2023, 4, 30), -10.26, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2023, 5, 1), makeDate(2023, 5, 31), [
        internal(makeDate(2023, 5, 1), pncGrowth, makeDate(2023, 5, 1), pncSpend, 300.00),
        t(makeDate(2023, 5, 5), -2446.90, vertex, pncGrowth),
        internal(makeDate(2023, 5, 5), pncGrowth, makeDate(2023, 5, 5), pncSpend, 3700.00),
        t(makeDate(2023, 4, 20), -2446.90, vertex, pncGrowth),
        t(makeDate(2023, 4, 30), -14.09, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2023, 6, 1), makeDate(2023, 6, 30), [
        t(makeDate(2023, 6, 5), -2446.90, vertex, pncGrowth),
        internal(makeDate(2023, 6, 5), pncGrowth, makeDate(2023, 6, 5), pncSpend, 3700.00),
        internal(makeDate(2023, 6, 13), pncGrowth, makeDate(2023, 6, 13), pncSpend, 4036.00),
        t(makeDate(2023, 6, 20), -2144.45, vertex, pncGrowth),
        t(makeDate(2023, 6, 30), -9.51, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2023, 7, 1), makeDate(2023, 7, 31), [
        t(makeDate(2023, 7, 5), -2144.47, vertex, pncGrowth),
        internal(makeDate(2023, 7, 6), pncGrowth, makeDate(2023, 7, 6), pncSpend, 3700.00),
        t(makeDate(2023, 7, 20), -2144.46, vertex, pncGrowth),
        t(makeDate(2023, 7, 31), -6.62, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2023, 8, 1), makeDate(2023, 8, 31), [
        t(makeDate(2023, 8, 4), -2144.06, vertex, pncGrowth),
        internal(makeDate(2023, 8, 4), pncGrowth, makeDate(2023, 8, 4), pncSpend, 3700.00),
        t(makeDate(2023, 8, 18), -2144.05, vertex, pncGrowth),
        t(makeDate(2023, 8, 31), -8.82, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2023, 9, 1), makeDate(2023, 9, 30), [
        t(makeDate(2023, 9, 5), -2144.06, vertex, pncGrowth),
        internal(makeDate(2023, 9, 6), pncGrowth, makeDate(2023, 9, 6), pncSpend, 3700.00),
        internal(makeDate(2023, 9, 6), pncGrowth, makeDate(2023, 9, 6), chase, 1300.00),
        t(makeDate(2023, 9, 20), -2144.06, vertex, pncGrowth),
        t(makeDate(2023, 9, 30), -6.84, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2023, 10, 1), makeDate(2023, 10, 31), [
        t(makeDate(2023, 10, 5), -2144.06, vertex, pncGrowth),
        internal(makeDate(2023, 10, 6), pncGrowth, makeDate(2023, 10, 6), pncSpend, 3700.00),
        t(makeDate(2023, 10, 20), -2144.05, vertex, pncGrowth),
        t(makeDate(2023, 10, 31), -8.54, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2023, 11, 1), makeDate(2023, 10, 30), [
        t(makeDate(2023, 11, 3), -2144.06, vertex, pncGrowth),
        internal(makeDate(2023, 11, 6), pncGrowth, makeDate(2023, 11, 6), pncSpend, 4000.00),
        t(makeDate(2023, 11, 20), -2144.05, vertex, pncGrowth),
        t(makeDate(2023, 11, 30), -9.85, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2023, 12, 1), makeDate(2023, 12, 31), [
        t(makeDate(2023, 12, 5), -2144.06, vertex, pncGrowth),
        internal(makeDate(2023, 12, 6), pncGrowth, makeDate(2023, 12, 6), pncSpend, 4000.00),
        t(makeDate(2023, 12, 20), -2144.05, vertex, pncGrowth),
        t(makeDate(2023, 12, 31), -10.84, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2024, 1, 1), makeDate(2024, 1, 31), [
        t(makeDate(2024, 1, 5), -2152.55, vertex, pncGrowth),
        internal(makeDate(2024, 1, 5), pncGrowth, makeDate(2024, 1, 5), pncSpend, 4000.00),
        t(makeDate(2024, 1, 19), -2336.25, vertex, pncGrowth),
        t(makeDate(2024, 1, 31), -11.99, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2024, 2, 1), makeDate(2024, 2, 29), [
        t(makeDate(2024, 2, 5), -2336.24, vertex, pncGrowth),
        internal(makeDate(2024, 2, 6), pncGrowth, makeDate(2024, 2, 6), pncSpend, 4000.00),
        t(makeDate(2024, 2, 20), -2336.25, vertex, pncGrowth),
        t(makeDate(2024, 2, 29), -13.35, PNC, pncGrowth)
    ]),
    statement(pncGrowth, makeDate(2024, 3, 1), makeDate(2024, 3, 31), [
        t(makeDate(2024, 3, 5), -2336.24, vertex, pncGrowth),
        internal(makeDate(2024, 3, 6), pncGrowth, makeDate(2024, 3, 6), pncSpend, 4000.00),
        internal(makeDate(2024, 3, 15), pncGrowth, makeDate(2024, 3, 18), chase, 2500.00),
        t(makeDate(2024, 3, 20), -2336.25, vertex, pncGrowth),
        t(makeDate(2024, 3, 31), -12.09, PNC, pncGrowth)
    ])
]