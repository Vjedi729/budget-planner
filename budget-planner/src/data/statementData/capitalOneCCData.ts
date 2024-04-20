import { BucketName } from "../enums"
import { Account } from "../account"
import { Vendor } from "../vendor"
import { AccountStatement } from "../account-statement-types";
import { makeDate } from "../helperFunctions";
import { t } from "../helperFunctions";
import { p } from "../helperFunctions";
import { statement } from "../helperFunctions";

const capOne = new Account("Meridith's capitol one credit card")

const meijer = new Vendor("Meijer")
const costco = new Vendor("Costco")
const menards = new Vendor("Menards")
const cvs = new Vendor("CVS")
const i3 = new Vendor("i3 Broadband")
const elliot = new Vendor("Elliot Counseling")
const chewy = new Vendor("Chewy")
const sushikame = new Vendor("Sushi Kame")
const amazon = new Vendor("Amazon")
const water = new Vendor("American Water")
const carle = new Vendor("Carle Hospital")
const sweetbasil = new Vendor("Sweet Basil Cafe")
const joann = new Vendor("Joann Fabrics")
const trash = new Vendor("Republic Services")
const Matt = new Vendor("Matthew Parkes")
const Ani = new Vendor("Anishi Patel")
const Varsha = new Vendor("Varsha Hemady")
const ameren = new Vendor("Ameren IL")
const Amit = new Vendor("Amit Patel")
const Madeline = new Vendor("Madeline Macrae")
const Neil = new Vendor("Neil VanKannegan")
const tacoBell = new Vendor("Taco Bell")
const Nick = new Vendor("Nick Inocencio")
const epic = new Vendor("Epic Games")
const mattex = new Vendor("Mattex")
const farmAndFleet = new Vendor("Blaine's farm and fleet")
const harborFreight = new Vendor("Harbor Freight tools")
const dosReales = new Vendor("Dos Reales")
const tjMaxx = new Vendor("TJ Maxx")
const banfield = new Vendor("Banfield Pet Hospital")
const uofi = new Vendor("University of Illinois")
const google = new Vendor("Google play")
const lowes = new Vendor("Lowes")
const homedepot = new Vendor("Home Depot")
const spotify = new Vendor("Spotify")
const petsmart = new Vendor("Petsmart")
const capitalOne = new Vendor("Capital One Bank")
const mobilemeter = new Vendor("Mobile Meter")
const panera = new Vendor("Panera")
const dominos = new Vendor("Domino's")
const olivegarden = new Vendor("Olive Garden")
const papadels = new Vendor("Papa Del's")
const target = new Vendor("Target")
const walgreens = new Vendor("Walgreens")
const pekara = new Vendor("Pekara")
const walnut = new Vendor("Walnut Street Tea Company")
const homegoods = new Vendor("HomeGoods")
const chilis = new Vendor("Chili's")
const sewer = new Vendor("Urbana Sanitary District")
const lamixteca = new Vendor("La Mixteca")
const bakerCreek = new Vendor("Baker Creek Heirloom Seeds")
const petSuppliesPlus = new Vendor("Pet Supplies Plus")
const prairieGardens = new Vendor("Prairie Garden Center")

export const meridithCapOneStatements: AccountStatement[] = [
    statement(capOne, makeDate(2021, 2, 18), makeDate(2021, 3, 20), [
        /*t(makeDate(2021, 2, 19), 23.95, banfield, capOne, [
            p(23.95, "Cats", "Cat health plan")
        ]),
        t(makeDate(2021, 2, 19), 10.42, amazon, capOne),
        t(makeDate(2021, 2, 19), 17.26, new Vendor("Goodwill"), capOne),
        t(makeDate(2021, 2, 23), 59.85, new Vendor("University of IL Bookstore"), capOne),
        t(makeDate(2021, 2, 25), 57.00, uofi, capOne),
        t(makeDate(2021, 2, 25), 1.37, uofi, capOne),
        t(makeDate(2021, 2, 26), 41.05, banfield, capOne, [
            p(41.05, "Cats", "Vet visit fees")
        ]),
        t(makeDate(2021, 2, 26), 4.83, google, capOne),
        t(makeDate(2021, 2, 28), 20.69, amazon, capOne),
        t(makeDate(2021, 2, 28), 15.38, amazon, capOne)
        All  above from before we are calculating*/
        t(makeDate(2021, 3, 1), 152.11, elliot, capOne, [
            p(152.11, "Health", "Therapy payment before deductible")
        ]),
        t(makeDate(2021, 3, 4), 10.77, amazon, capOne),
        t(makeDate(2021, 3, 9), 1196.82, new Vendor("Nectar Dreamcloud mattresses"), capOne),
        t(makeDate(2021, 3, 9), 50.00, trash, capOne, [
            p(50.00, "Utilities", "March-april trash service")
        ]),
        t(makeDate(2021, 3, 12), 260.20, lowes, capOne),
        t(makeDate(2021, 3, 12), 71.88, amazon, capOne),
        t(makeDate(2021, 3, 13), 9.25, amazon, capOne),
        t(makeDate(2021, 3, 15), 4.99, spotify, capOne, [
            p(4.99, "Both Fun Money", "M's spotify subscription")
        ]),
        t(makeDate(2021, 3, 15), 24.56, new Vendor("Markell Insurance"), capOne, [
            p(24.56, "Housing", "Renter's insurance")
        ]),
        t(makeDate(2021, 3, 15), 30.42, elliot, capOne, [
            p(30.42, "Health", "Therapy copay")
        ]),
        t(makeDate(2021, 3, 16), 163.49, amazon, capOne)
    ]),
    
    //TODO: Enter statements from 4/21 to 8/22
    
    statement(capOne, makeDate(2022, 8, 21), makeDate(2022, 9, 19), [
        t(makeDate(2022, 8, 21), 64.26, menards, capOne),
        t(makeDate(2022, 8, 23), 6.19, new Vendor("McDonald's"), capOne),
        t(makeDate(2022, 8, 31), 77.64, chewy, capOne),
        t(makeDate(2022, 9, 1), 7.49, amazon, capOne),
        t(makeDate(2022, 9, 2), 10.98, google, capOne),
        t(makeDate(2022, 9, 5), 24.83, petsmart, capOne),
        t(makeDate(2022, 9, 12), 78.57, meijer, capOne),
        t(makeDate(2022, 9, 13), 28.15, new Vendor("Domino's"), capOne),
        t(makeDate(2022, 9, 15), 9.99, spotify, capOne, [
            p(9.99, "Both Fun Money", "M's spotify subscription")
        ]),
        t(makeDate(2022, 9, 15), 135.32, homedepot, capOne),
        t(makeDate(2022, 9, 19), 42.49, capitalOne, capOne, [
            p(42.49, BucketName.UNDEFINED, "Interest")
        ])
    ]),
    
    statement(capOne, makeDate(2022, 9, 20), makeDate(2022, 10, 20), [
        t(makeDate(2022, 9, 20), 1.87, google, capOne),
        t(makeDate(2022, 9, 20), 1.75, mobilemeter, capOne),
        t(makeDate(2022, 9, 24), 212.49, homedepot, capOne),
        t(makeDate(2022, 10, 5), 87.00, trash, capOne),
        t(makeDate(2022, 10, 5), 14.19, new Vendor("McDonald's"), capOne),
        t(makeDate(2022, 10, 6), 35.76, dominos, capOne),
        t(makeDate(2022, 10, 8), 77.64, chewy, capOne),
        t(makeDate(2022, 10, 8), 28.00, olivegarden, capOne),
        t(makeDate(2022, 10, 9), 34.45, panera, capOne),
        t(makeDate(2022, 10, 15), 9.99, spotify, capOne, [
            p(9.99, "Both Fun Money", "M's spotify subscription")
        ]),
        t(makeDate(2022, 10, 16), 35.05, dominos, capOne),
        t(makeDate(2022, 10, 20), 48.87, capitalOne, capOne, [
            p(42.49, BucketName.UNDEFINED, "Interest")
        ])
    ]),
    
    statement(capOne, makeDate(2022, 10, 21), makeDate(2022, 11, 19), [
        t(makeDate(2022, 10, 31), 48.97, dominos, capOne),
        t(makeDate(2022, 11, 3), 0.75, mobilemeter, capOne),
        t(makeDate(2022, 11, 3), 35.91, amazon, capOne),
        t(makeDate(2022, 11, 3), 26.47, petsmart, capOne),
        t(makeDate(2022, 11, 3), 35.00, homedepot, capOne),
        t(makeDate(2022, 11, 4), 243.31, homedepot, capOne),
        t(makeDate(2022, 11, 11), 77.64, chewy, capOne),
        t(makeDate(2022, 11, 15), 9.99, spotify, capOne, [
            p(9.99, "Both Fun Money", "M spotify subsription")
        ]),
        t(makeDate(2022, 11, 15), 67.74, sushikame, capOne), 
        t(makeDate(2022, 11, 17), 45.00, new Vendor("Humble Bundle"), capOne),
        t(makeDate(2022, 11, 19), 52.45, capitalOne, capOne, [
            p(42.49, BucketName.UNDEFINED, "Interest")
        ])
    ]),
    
    statement(capOne, makeDate(2022, 11, 20), makeDate(2022, 12, 20), [
        t(makeDate(2022, 11, 21), 38.24, homedepot, capOne),
        t(makeDate(2022, 11, 28), 56.31, papadels, capOne),
        t(makeDate(2022, 11, 29), 55.58, new Vendor("Best Buy"), capOne), 
        t(makeDate(2022, 11, 30), 53.39, new Vendor("Ulta Beauty"), capOne, [
            p(53.39, "Health", "Equipment for Vishal's hair care")
        ]),
        t(makeDate(2022, 12, 3), 35.07, meijer, capOne),
        t(makeDate(2022, 12, 4), 31.66, new Vendor("Etsy"), capOne),
        t(makeDate(2022, 12, 5), 1.48, google, capOne, [
            p(1.48, "Meridith Fun Money", "webtoon coins")
        ]),
        t(makeDate(2022, 12, 5), 1.06, google, capOne, [
            p(1.06, "Meridith Fun Money", "Webtoon coins"),
        ]),
        t(makeDate(2022, 12, 5), 12.49, target, capOne),
        t(makeDate(2022, 12, 5), 32.20, walgreens, capOne),
        t(makeDate(2022, 12, 5), 10.89, new Vendor("Sally Beauty Supply"), capOne),
        t(makeDate(2022, 12, 5), 30.42, new Vendor("Folkwear patterns"), capOne, [
            p(30.42, "Both Fun Money", "Pattern gift for Morgan with tracing paper")
        ]),
        t(makeDate(2022, 12, 8), 41.87, walnut, capOne, [
            p(41.87, "Both Fun Money", "Mom's bday present")
        ]), 
        t(makeDate(2022, 12, 8), 1.00, mobilemeter, capOne),
        t(makeDate(2022, 12, 8), 0.75, mobilemeter, capOne),
        t(makeDate(2022, 12, 8), 10.36, new Vendor("Jane Addam's book shop"), capOne),
        t(makeDate(2022, 12, 10), 29.63, new Vendor("Texas Roadhouse"), capOne, [
            p(29.63, "Dining", "Dinner with Emma")
        ]),
        t(makeDate(2022, 12, 10), 34.58, homegoods, capOne),
        t(makeDate(2022, 12, 10), 53.00, new Vendor("Stonemeier Games"), capOne, [
            p(53.00, "Both Fun Money", "Asia Wingspan Expansion for Mylee Xmas")
        ]),
        t(makeDate(2022, 12, 11), 11.93, pekara, capOne),
        t(makeDate(2022, 12, 13), 102.44, meijer, capOne),
        t(makeDate(2022, 12, 14), 21.80, meijer, capOne),
        t(makeDate(2022, 12, 15), 77.64, chewy, capOne),
        t(makeDate(2022, 12, 15), 9.99, spotify, capOne, [
            p(9.99, "Both Fun Money", "M spotify subscription")
        ]),
        t(makeDate(2022, 12, 16), 45.63, chilis, capOne),
        t(makeDate(2022, 12, 17), 0.50, mobilemeter, capOne),
        t(makeDate(2022, 12, 17), 17.81, new Vendor("Fresh International"), capOne),
        t(makeDate(2022, 12, 18), 4.32, google, capOne),
        t(makeDate(2022, 12, 18), 31.00, new Vendor("shop goodwill"), capOne),
        t(makeDate(2022, 12, 19), 95.54, capitalOne, capOne, [
            p(95.54, BucketName.UNDEFINED, "Interest")
        ])
    ]),
    
    statement(capOne, makeDate(2022, 12, 21), makeDate(2023, 1, 20), [
        t(makeDate(2022, 12, 21), 47.74, meijer, capOne),
        t(makeDate(2022, 12, 24), 942.10, new Vendor("American Airlines"), capOne),
        t(makeDate(2022, 12, 24), 38.32, new Vendor("Sunsun chinese"), capOne),
        t(makeDate(2022, 12, 26), 160.97, meijer, capOne),
        t(makeDate(2022, 12, 27), 23.66, amazon, capOne),
        t(makeDate(2022, 12, 27), 42.81, new Vendor("shopgoodwill.com"), capOne),
        t(makeDate(2022, 12, 28), 36.23, new Vendor("Chowbus"), capOne),
        t(makeDate(2022, 12, 29), 53.47, new Vendor("American Science and Surplus"), capOne),
        t(makeDate(2023, 1, 1), 7.49, amazon, capOne, [
            p(7.49, "Meridith Fun Money", "Audible book")
        ]),
        t(makeDate(2023, 1, 1), 7.99, amazon, capOne),
        t(makeDate(2023, 1, 4), 54.49, amazon, capOne),
        t(makeDate(2023, 1, 5), 87.00, trash, capOne),
        t(makeDate(2023, 1, 7), 77.64, chewy, capOne),
        t(makeDate(2023, 1, 8), 33.00, new Vendor("Shopgoodwill.com"), capOne),
        t(makeDate(2023, 1, 11), 15.88, bakerCreek, capOne, [
            p(15.88, "Garden", "Seeds for 2023")
        ]),
        t(makeDate(2023, 1, 11), 78.49, new Vendor("shopgoodwill.com"), capOne),
        t(makeDate(2023, 1, 13), 57.08, sewer, capOne),
        t(makeDate(2023, 1, 15), 5.34, google, capOne),
        t(makeDate(2023, 1, 15), 9.99, spotify, capOne, [
            p(9.99, "Both Fun Money", "M spotify subscription")
        ]),
        t(makeDate(2023, 1, 15), 91.49, sushikame, capOne),
        t(makeDate(2023, 1, 16), 699.00, new Vendor("Root Insurance"), capOne, [
            p(699.00, "Car", "6 months car insurance")
        ]),
        t(makeDate(2023, 1, 17), 30.63, meijer, capOne),
        t(makeDate(2023, 1, 18), 1.99, amazon, capOne),
        t(makeDate(2023, 1, 18), 53.69, dosReales, capOne),
        t(makeDate(2023, 1, 19), 50.30, new Vendor("Jet's Pizza"), capOne),
        t(makeDate(2023, 1, 20), 109.68, capitalOne, capOne, [
            p(109.68, BucketName.UNDEFINED, "Interest")
        ])
    ]),
    
    statement(capOne, makeDate(2023, 1, 21), makeDate(2023, 2, 17), [
        t(makeDate(2023, 1, 21), 2.00, carle, capOne),
        t(makeDate(2023, 1, 21), 10.34, amazon, capOne),
        t(makeDate(2023, 1, 21), 8.71, amazon, capOne),
        t(makeDate(2023, 1, 26), 81.71, new Vendor("PetLibro"), capOne, [
            p(81.71, "Cats", "Cat water fountain")
        ]),
        t(makeDate(2023, 1, 26), 179.00, new Vendor("Envy Pillow Company"), capOne, [
            p(179.00, "Health", "TMJ Pillow")
        ]),
        t(makeDate(2023, 1, 27), 46.51, target, capOne),
        t(makeDate(2023, 1, 27), 129.35, target, capOne),
        t(makeDate(2023, 1, 27), -119.92, target, capOne),
        t(makeDate(2023, 1, 28), 11.24, new Vendor("Potillo's Hotdogs"), capOne),
        t(makeDate(2023, 1, 31), 249.00, new Vendor("Hessel Park Family Dentistry"), capOne, [
            p(249.00, "Health", "Copay for dentist to check infected jaw")
        ]),
        t(makeDate(2023, 1, 31), 10.73, new Vendor("McDonald's"), capOne),
        t(makeDate(2023, 2, 2), 77.64, chewy, capOne),
        t(makeDate(2023, 2, 4), 25.50, new Vendor("Aspen Taphouse"), capOne),
        t(makeDate(2023, 2, 5), 9.79, lowes, capOne),
        t(makeDate(2023, 2, 5), 38.10, menards, capOne),
        t(makeDate(2023, 2, 7), 39.11, joann, capOne),
        t(makeDate(2023, 2, 7), 83.86, homegoods, capOne),
        t(makeDate(2023, 2, 8), 80.20, amazon, capOne),
        t(makeDate(2023, 2, 8), 35.38, new Vendor("Portillos"), capOne),
        t(makeDate(2023, 2, 11), 47.06, amazon, capOne),
        t(makeDate(2023, 2, 13), 10.90, new Vendor("Live Monarch Society"), capOne),
        t(makeDate(2023, 2, 15), 9.99, spotify, capOne),
        t(makeDate(2023, 2, 17), 124.40, capitalOne, capOne, [
            p(42.49, BucketName.UNDEFINED, "Interest")
        ])
    ]),
    
    statement(capOne, makeDate(2023, 2, 18), makeDate(2023, 3, 20), [
        t(makeDate(2023, 2, 18), 51.53, bakerCreek, capOne, [
            p(51.53, "Garden", "Seeds for 2023")
        ]),
        t(makeDate(2023, 2, 20), 4.49, google, capOne, [
            p(4.49, "Meridith Fun Money", "Webtoon coins")
        ]),
        t(makeDate(2023, 2, 20), 86.06, new Vendor("Cravings"), capOne),
        t(makeDate(2023, 2, 25), 193.32, homedepot, capOne),
        t(makeDate(2023, 2, 27), 80.34, lamixteca, capOne),
        t(makeDate(2023, 3, 2), 77.64, chewy, capOne),
        t(makeDate(2023, 3, 2), 69.06, bakerCreek, capOne),
        t(makeDate(2023, 3, 8), 94.53, new Vendor("Watsons Shack & Rail"), capOne),
        t(makeDate(2023, 3, 13), 18.17, joann, capOne),
        t(makeDate(2023, 3, 13), 248.00, new Vendor("Caring Hands Animal Hospital"), capOne, [
            p(248.00, "Cats", "Nimitz checkup and shots")
        ]),
        t(makeDate(2023, 3, 14), 76.24, joann, capOne),
        t(makeDate(2023, 3, 14), 74.19, meijer, capOne),
        t(makeDate(2023, 3, 14), 177.57, menards, capOne),
        t(makeDate(2023, 3, 15), 9.99, spotify, capOne, [
            p(9.99, "Both Fun Money", "M Spotify subscription")
        ]),
        t(makeDate(2023, 3, 15), 8.96, new Vendor("storeurbanail"), capOne), //TODO: Figure out what "storeurbanail is"
        t(makeDate(2023, 3, 17), 81.53, petSuppliesPlus, capOne),
        t(makeDate(2023, 3, 17), 16.09, prairieGardens, capOne),
        t(makeDate(2023, 3, 20), 155.44, capitalOne, capOne, [
            p(155.44, BucketName.UNDEFINED, "Interest")
        ])
    ]),
    
    statement(capOne, makeDate(2023, 3, 21), makeDate(2023, 4, 19), [
        t(makeDate(2023, 3, 24), 20.29, new Vendor("shopgoodwill.com"), capOne),
        t(makeDate(2023, 3, 25), 9.99, amazon, capOne, [
            p(9.99, "Meridith Fun Money", "Kindle Unlimited subscription")
        ]),
        t(makeDate(2023, 3, 27), 3.30, google, capOne, [
            p(3.30, "Meridith Fun Money", "Webtoon coins")
        ]),
        t(makeDate(2023, 3, 31), 77.64, chewy, capOne),
        t(makeDate(2023, 4, 5), 97.63, trash, capOne),
        t(makeDate(2023, 4, 6), 68.29, meijer, capOne),
        t(makeDate(2023, 4, 9), 40.42, meijer, capOne),
        t(makeDate(2023, 4, 10), 2.82, google, capOne, [
            p(2.82, "Meridith Fun Money", "Game coins")
        ]),
        t(makeDate(2023, 4, 10), 61.11, meijer, capOne),
        t(makeDate(2023, 4, 10), 98.00, new Vendor("Parkland College"), capOne, [
            p(98.00, "Both Fun Money", "Parkland dream house class")
        ]),
        t(makeDate(2023, 4, 14), 191.00, new Vendor("Caring Hands Animal Hospital"), capOne, [
            p(191.00, "Cats", "Popoki vet bill for checkup and shots")
        ]),
        t(makeDate(2023, 4, 14), 14.16, menards, capOne),
        t(makeDate(2023, 4, 14), 88.78, menards, capOne),
        t(makeDate(2023, 4, 15), 9.99, spotify, capOne, [
            p(9.99, "Both Fun Money", "M Spotify subscription")
        ]),
        t(makeDate(2023, 4, 16), 40.00, new Vendor("Olive Garden"), capOne),
        t(makeDate(2023, 4, 19), 160.13, capitalOne, capOne, [
            p(160.13, BucketName.UNDEFINED, "Interest")
        ])
    ]),
    
    statement(capOne, makeDate(2023, 4, 20), makeDate(2023, 5, 20), [
        t(makeDate(2023, 4, 20), 45.78, meijer, capOne),
        t(makeDate(2023, 4, 20), 84.47, meijer, capOne),
        t(makeDate(2023, 4, 20), 5.55, costco, capOne),
        t(makeDate(2023, 4, 20), 47.87, menards, capOne),
        t(makeDate(2023, 4, 20), 56.26, farmAndFleet, capOne),
        t(makeDate(2023, 4, 21), 4.46, google, capOne, [
            p(4.46, "Meridith Fun Money", "Webtoon coins")
        ]),
        t(makeDate(2023, 4, 21), 64.68, meijer, capOne),
        t(makeDate(2023, 4, 24), 546.36, new Vendor("Christie Clinic"), capOne, [
            p(546.36, "Health", "MRI cost")
        ]),
        t(makeDate(2023, 4, 25), 9.99, amazon, capOne, [
            p(9.99, "Meridith Fun Money", "M Kindle Unlimited")
        ]),
        t(makeDate(2023, 4, 25), 3.89, costco, capOne),
        t(makeDate(2023, 4, 25), 15.11, new Vendor("Jarling's Custard Cup"), capOne),
        t(makeDate(2023, 4, 27), 42.51, new Vendor("HerRoom"), capOne),
        t(makeDate(2023, 4, 30), 47.11, papadels, capOne),
        t(makeDate(2023, 4, 30), -61.23, menards, capOne),
        t(makeDate(2023, 5, 2), 20.00, new Vendor("Nintendo"), capOne, [
            p(20.00, "Both Fun Money", "Nintendo family membership")
        ]),
        t(makeDate(2023, 5, 5), 30.45, walnut, capOne),
        t(makeDate(2023, 5, 7), 9.98, pekara, capOne),
        t(makeDate(2023, 5, 7), 25.72, prairieGardens, capOne),
        t(makeDate(2023, 5, 8), 23.24, walgreens, capOne),
        t(makeDate(2023, 5, 8), 83.33, new Vendor("HerRoom"), capOne),
        t(makeDate(2023, 5, 10), 30, walgreens, capOne),
        t(makeDate(2023, 5, 10), 25.20, new Vendor("Rural King"), capOne),
        t(makeDate(2023, 5, 11), 77.64, chewy, capOne),
        t(makeDate(2023, 5, 13), 20.16, amazon, capOne),
        t(makeDate(2023, 5, 15), 9.99, spotify, capOne, [
            p(9.99, "Both Fun Money", "M spotify subscription")
        ]),
        t(makeDate(2023, 5, 16), 30.87, prairieGardens, capOne),
        t(makeDate(2023, 5, 17), 53.03, new Vendor("MeatHeads"), capOne),
        t(makeDate(2023, 5, 19), 30.00, new Vendor("El Toro"), capOne),
        t(makeDate(2023, 5, 20), 181.18, capitalOne, capOne, [
            p(181.18, BucketName.UNDEFINED, "Interest")
        ])
    ]),
    
    statement(capOne, makeDate(2023, 5, 21), makeDate(2023, 6, 19), [
        t(makeDate(2023, 5, 21), 36.14, new Vendor("Jet's Pizza"), capOne),
        t(makeDate(2023, 6, 4), 72.96, carle, capOne),
        t(makeDate(2023, 6, 5), 99.70, meijer, capOne),
        t(makeDate(2023, 6, 5), 84.71, menards, capOne),
        t(makeDate(2023, 6, 7), 36.93, meijer, capOne),
        t(makeDate(2023, 6, 10), -36.69, menards, capOne),
        t(makeDate(2023, 6, 11), 11.76, amazon, capOne),
        t(makeDate(2023, 6, 15), 9.99, spotify, capOne, [
            p(9.99, "Both Fun Money", "M Spotify Subscription")
        ]),
        t(makeDate(2023, 6, 18), 19.99, new Vendor("Curiosity Stream"), capOne, [
            p(19.99, "Both Fun Money", "Curiosity Stream Yearly Subscription")
        ]),
        t(makeDate(2023, 6, 19), 179.35, capitalOne, capOne, [
            p(179.35, BucketName.UNDEFINED, "Interest")
        ])
    ]),
    
    statement(capOne, makeDate(2023, 6, 20), makeDate(2023, 7, 20), [
        t(makeDate(2023, 7, 18), 9.99, spotify, capOne, [
            p(9.99, "Both Fun Money", "M Spotify Subscription")
        ]),
        t(makeDate(2023, 7, 20), 219.30, capitalOne, capOne, [
            p(219.30, BucketName.UNDEFINED, "Interest")
        ])
    ]),
    
    statement(capOne, makeDate(2023, 7, 21), makeDate(2023, 8, 20), [
        t(makeDate(2023, 8, 11), 30.00, walgreens, capOne),
        t(makeDate(2023, 8, 11), 68.67, meijer, capOne),
        t(makeDate(2023, 8, 14), 60.00, new Vendor("La Bahia Grill"), capOne),
        t(makeDate(2023, 8, 15), 9.99, spotify, capOne, [
            p(9.99, "Both Fun Money", "M Spotify Subscription")
        ]),
        t(makeDate(2023, 8, 15), 45.71, petSuppliesPlus, capOne),
        t(makeDate(2023, 8, 15), 7.00, tacoBell, capOne),
        t(makeDate(2023, 8, 16), 66.07, meijer, capOne),
        t(makeDate(2023, 8, 20), 187.77, capitalOne, capOne, [
            p(187.77, BucketName.UNDEFINED, "Interest")
        ]),
    ]),
    
    statement(capOne, makeDate(2023, 8, 21), makeDate(2023, 9, 19), [
        t(makeDate(2023, 8, 25), 11.99, amazon, capOne, [
            p(11.99, "Meridith Fun Money", "Kindle Unlimited")
        ]),
        t(makeDate(2023, 9, 15), 10.99, spotify, capOne, [
            p(9.99, "Both Fun Money", "M Spotify Subcrption")
        ]),
        t(makeDate(2023, 9, 19), 220.69, capitalOne, capOne, [
            p(220.69, BucketName.UNDEFINED, "Interest")
        ])
    ]),
    
    statement(capOne, makeDate(2023, 9, 20), makeDate(2023, 10, 20), [
        t(makeDate(2023, 10, 20), 230.33, capitalOne, capOne, [
            p(230.33, BucketName.UNDEFINED, "Interest")
        ])
    ]),
    
    statement(capOne, makeDate(2023, 10, 21), makeDate(2023, 11, 19), [
        t(makeDate(2023, 11, 19), 204.46, capitalOne, capOne, [
            p(204.46, BucketName.UNDEFINED, "Interest")
        ])
    ]),
    
    statement(capOne, makeDate(2023, 11, 20), makeDate(2023, 12, 20), [
        t(makeDate(2023, 11, 25), 11.99, amazon, capOne, [
            p(11.99, "Meridith Fun Money", "Kindle Unlimited")
        ]),
        t(makeDate(2023, 12, 20), 44.61, capitalOne, capOne, [
            p(44.61, BucketName.UNDEFINED, "Interest")
        ])
    ]),
    
    statement(capOne, makeDate(2023, 12, 21), makeDate(2024, 1, 20), [
        t(makeDate(2024, 1, 20), 45.75, capitalOne, capOne, [
            p(45.75, BucketName.UNDEFINED, "Interest")
        ])
    ]),
    
    statement(capOne, makeDate(2024, 1, 21), makeDate(2024, 2, 18), [
        t(makeDate(2024, 1, 24), 30.00, new Vendor("Nebula"), capOne, [
            p(30.00, "Both Fun Money", "Yearly Nebula Subscription"),
        ]),
        t(makeDate(2024, 1, 25), 11.99, amazon, capOne, [
            p(11.99, "Meridith Fun Money", "Kindle Unlimited")
        ]),
        t(makeDate(2024, 2, 18), 0.22, capitalOne, capOne, [
            p(0.22, BucketName.UNDEFINED, "Interest")
        ])
    ]),
    
    statement(capOne, makeDate(2024, 2, 19), makeDate(2024, 3, 20), [
        t(makeDate(2024, 2, 25), 11.99, amazon, capOne, [
            p(11.99, "Meridith Fun Money", "Kindle Unlimited")
        ]),
        t(makeDate(2024, 3, 20), 26.44, capitalOne, capOne, [
            p(26.44, BucketName.UNDEFINED, "Interest and fees")
        ])
    ])
    ]