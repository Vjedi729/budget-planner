import { ExternalTransaction, InternalTransaction } from "./transactions";
import { Account } from "./account"
import { BucketName } from "./enums"
import { Purchase } from "./purchase"
import { Vendor } from "./vendor"
import { AccountStatement } from "./account-statement-types";
import { makeDate } from "./helperFunctions";
import { t } from "./helperFunctions";
import { p } from "./helperFunctions";
import { statement } from "./helperFunctions";
import { start } from "repl";
import { buffer } from "stream/consumers";
import { stat } from "fs";

const visa3408 = new Account("Meridith's Visa 3408")
const visa8042 = new Account("Vishal's Visa 8042")
const visa0078 = new Account("Meridith's old Citi Visa 0078")
const chase = new Account("Chase checking account")
const discover = new Account("Vishal's discover credit card")
const capOne = new Account("Meridith's capitol one credit card")
const pncGrowth = new Account("PNC Growth Account")
const pncSpend = new Account("PNC Spend Account")
const pncReserve = new Account("PNC Reserve Account")


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
