import { ExternalTransaction } from "./transactions";
import { Account } from "./account"
import { BucketName } from "./enums"
import { Purchase } from "./purchase"
import { Vendor } from "./vendor"
import { makeDate } from "./helperFunctions";
import { t } from "./helperFunctions"
import { p } from "./helperFunctions";
import { Mandali } from "next/font/google";
import { makeTime } from "./helperFunctions";
//import { takeCoverage } from "v8";

const visa3408 = new Account("Meridith's Visa 3408")
const visa8042 = new Account("Vishal's Visa 8042")
const visa0078 = new Account("Meridith's old Citi Visa 0078")
const chase = new Account("Chase checking account")
const discover = new Account("Vishal's discover credit card")
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
const emerge = new Vendor("Emerge Psychology Group")
const Max = new Vendor("Maxwell Shramuk")
const prairieGardens = new Vendor("Prairie Garden Center")


export const sampleInitialDate = new Date(2021, 3, 1);

export const sampleTransactions: ExternalTransaction<Date>[] = [
t(makeDate(2022, 9, 1), 217.99, new Vendor("Home Depot"), visa0078, [
    p(217.99, "Home Improvement", "Batch feed garbage disposal"),
]),

t(makeDate(2022, 9, 8), 36.00, new Vendor("Buffalo Wild Wings"), visa0078, [
    p(28.37, "Dining", "Dinner w/ Emma and Anishi"),
    p(7.63, "Dining", "Tip")
]),

t(makeDate(2022, 9, 8), 123.38, costco, visa0078, [
    p(18.99, "Groceries", "Paper towels"),
    p(8.99, "Groceries", "Mint pretzels"),
    p(7.99, "For Matt", "Rambutans"),
    p(12.99, "Housewares", "Bath mat"),
    p(12.99, "Housewares", "Fatigue mat"),
    p(16.99, "Housewares", "Fatigue mat"),
    p(9.99, "Groceries", "Chocolate chips"),
    p(5.99, "Groceries", "Taco seasoning"),
    p(11.00, "Both Fun Money", "Elephant and Lion storage totes"),
    p(9.99, "Groceries", "Fuji apples"),
    p(7.47, "Housewares", "Tax")
]),

t(makeDate(2022, 9, 14), 384.58, costco, visa0078, [
    p(89.00-30, "Garden", "Zero gravity chair"),
    p(149.99-30, "Housewares", "Full set pantry organizers"), //TODO: Check what this is
    p(34.99, "Housewares", "Hooded blanket"),
    p(34.99, "Housewares", "Hooded blanket"),
    p(11.49, "Health", "Women's multivitamins"),
    p(10.99, "Groceries", "Marinara 3 pack"),
    p(9.59, "Groceries", "Whipped cream 3 pack"),
    p(12.59, "Groceries", "Fruit bars"),
    p(24.99-5.00, "Health", "Covid tests"),
    p(24.99-5, "Health", "Covid tests"),
    p(9.79, "Groceries", "Lemon juice"),
    p(13.99, "Groceries", "Unsalted butter"),
    p(26.20, "Housewares", "Tax")
]),

t(makeDate(2022, 9, 14), 36.03, costco, visa0078, [
    p(36.03, "Car", "10.152 gal gas at $3.549 per gal")
]),

t(makeDate(2022, 9, 22), 192.49, costco, visa8042, [
    p(15.99, "For Varsha", "Tissues"),
    p(18.49, "For Varsha", "Dried mango"),
    p(9.99, "For Varsha", "Dried cranberries"),
    p(12.99-2.70, "For Varsha", "Pho"),
    p(9.99, "For Varsha", "Dried strawberries"),
    p(14.99, "For Varsha", "Sweet thai sauce"),
    p(17.99, "For Varsha", "Protein bars"),
    p(11.99, "For Varsha", "Spinach ravioli"),
    p(14.99, "Groceries", "Frozen belgian waffles"),
    p(11.99, "Groceries", "Butternut squash ravioli"),
    p(14.99, "For Varsha", "Oatmeal pack"),
    p(5.29, "For Varsha", "Carrots"),
    p(5.69-1.30, "For Varsha", "Avocadoes"),
    p(7.89, "Groceries", "No salt seasoning"),
    p(19.99, "For Varsha", "Pastries"),
    p(3.24, "For Varsha", "Tax")
]),



t(makeDate(2022, 10, 2), 33.36, dosReales, visa8042, [
    p(12.95, "Dining", "Chimichanga dinner"),
    p(6.99, "Dining", "Cheese and Beans nachos"),
    p(4.99, "Dining", "Guacamole"),
    p(2.87, "Dining", "Tax"),
    p(5.56, "Dining", "Tip")
]),

t(makeDate(2022, 10, 4), 77.64, chewy, capOne, [
    p(77.64, "Cats", "Cat food")
]),

t(makeDate(2022, 10, 13), 325.45, costco, visa8042, [
    p(13.89-3.40, "For Matt", "Cauliflower pizza"),
    p(10.89, "For Matt", "Ravioli"),
    p(5.69, "For Matt", "Garlic"),
    p(7.39, "For Matt", "Kiwis"),
    p(5.99, "For Matt", "Raspberries"),
    p(7.99-1.5, "For Matt", "Rabutans"),
    p(11.69, "For Matt", "Eggo waffles"),
    p(16.99, "For Matt", "Tuxedo cake"),
    p(16.99, "For Matt", "Spanakopita"),
    p(67.07, "For Matt", "Beef brisket"),
    p(13.89-3.40, "Groceries", "2 cauliflower pizzas"),
    p(13.49, "Groceries", "2 pack quiche"),
    p(8.39, "Groceries", "Grated parmesan"),
    p(6.99, "Groceries", "Peppermint pretzels"),
    p(7.99, "Groceries", "Pumpkin spice pretzels"),
    p(10.99, "Groceries", "Marinara"),
    p(10.49, "Groceries", "Potato soup"),
    p(10.99, "Groceries", "Tomato soup"),
    p(19.99, "Health", "Thermometer"),
    p(17.99, "Both Fun Money", "Hot Sauce asst for Matt bday"),
    p(14.99, "Groceries", "Apple pie"),
    p(12.99, "Groceries", "4 lbs sweet tango apples"),
    p(16.69, "Groceries", "Ginger beer"),
    p(3.30, "Groceries", "Tax")
]),

t(makeDate(2022, 10, 13), 37.44, costco, visa0078, [
    p(37.44, "Car", "9.530 gal gas at $3.929 per gal")
]),

t(makeDate(2022, 10, 16), 68.63, harborFreight, visa8042, [
    p(12.99, "Woodworking", "36 in parallel bar clamp"),
    p(15.99, "Woodworking", "48 in parallel bar clamp"),
    p(17.99, "Woodworking", "60 in parallel bar clamp"),
    p(15.99, "Woodworking", "48 in parallel bar clamp"),
    p(5.67, "Woodworking", "Tax")
]),

t(makeDate(2022, 10, 24), 40.34, new Vendor("Bombay Market"), capOne, [
    p(14.97, "Groceries", "3 trays Saag paneer"),
    p(9.96, "Groceries", "4 6 ct frozen parathas"),
    p(7.98, "Groceries", "2 bags frozen dal samosas"),
    p(1.99, "Groceries", "Chana masala"),
    p(4.99, "Groceries", "Diwali candles"),
    p(0.45, "Groceries", "Tax")
]),

t(makeDate(2022, 10, 26), 171.83, costco, visa0078, [
    p(9.99, "Groceries", "Chocolate chips"),
    p(9.99, "Groceries", "Fuji box"),
    p(7.99, "Groceries", "4 lbs apples"),
    p(7.99, "Groceries", "Pumpkin spice pretzels"),
    p(13.99, "Groceries", "Shredded mozzarella"),
    p(19.49, "Groceries", "Laundry detergent"),
    p(7.99, "For Matt", "Rambutans"),
    p(16.49, "Both Fun Money", "Non-chocolate halloween candy"),
    p(16.49, "Both Fun Money", "Non-chocolate halloween candy"),
    p(18.49, "Both Fun Money", "Chocolate halloween candy"),
    p(18.49, "Both Fun Money", "Chocolate halloween candy"),
    p(19.99, "Groceries", "Toilet paper"),
    p(4.45, "Both Fun Money", "Tax")
]),

t(makeDate(2022, 10, 30), 62.10, tjMaxx, visa0078, [
    p(24.99, "Housewares", "Kitchen?"),
    p(6.99, "Clothes", "Men's shirt"),
    p(24.99, "Housewares", "Halloween decor"),
    p(5.13, "Housewares", "Tax")
]),

t(makeDate(2022, 10, 8), 32.65, new Vendor("Barnes and Noble"), visa0078, [
    p(29.95, "Meridith Fun Money", "Encyclopedia of Country Living"),
    p(2.70, "Meridith Fun Money", "Tax")
]),

//TODO: Find 11-2022 menards date
t(makeDate(2022, 11, 2), 153.47, new Vendor("Heel to Toe"), visa8042, [
    p(176.00, "Clothing", "New Shoes for Vishal"),
    p(-35.20, "Clothing", "Xavior employee discount"),
    p(12.67, "Clothing", "Tax")
]),

t(makeDate(2022, 11, 2), 278.31, new Vendor("Home Depot"), capOne, [
    p(278.31, "Home Improvement", "Ryobi Drill and Driver set")
]),

t(makeDate(2022, 11, 3), 133.33, costco, visa8042, [
    p(18.49, "For Matt", "Mangoes"),
    p(7.99, "For Matt", "Rambutans"),
    p(7.29, "For Matt", "Kiwis"),
    p(7.99, "For Matt", "Rambutans"),
    p(11.99, "Groceries", "Vanilla extract"),
    p(7.99-2.40, "Groceries", "Hot cocoa"),
    p(10.99, "For Matt", "Smoked salmon"),
    p(11.69, "Groceries", "Whipped cream"),
    p(8.89, "For Matt", "Sweet thin crackers"),
    p(7.49, "Groceries", "Zebra popcorn"),
    p(10.69-3, "Groceries", "Boursin 3 pack"),
    p(11.99, "Groceries", "Spinach ravioli"),
    p(9.99, "Groceries", "Fuji apples"),
    p(0.67, "Groceries", "Tax")
]),

t(makeDate(2022, 11, 3), 21.15, new Vendor("Fazoli's"), visa0078, [
    p(21.15, "Dining", "Dinner with Nick")
]),

t(makeDate(2022, 11, 9), 77.64, chewy, capOne, [
    p(77.64, "Cats", "Cat food")
]),

t(makeDate(2022, 11, 15), 187.44, costco, visa8042, [
    p(6.99, "Groceries", "Choc cookies"),
    p(9.99, "For Nick", "25 lbs rice"),
    p(11.99, "Groceries", "French onion soup"),
    p(15.99, "Health", "Tissue"),
    p(13.89, "Groceries", "Cauliflower pizza"),
    p(13.99, "Groceries", "Protein bars"),
    p(22.49, "Groceries", "Protein powder"),
    p(8.49, "Groceries", "8 cans black beans"),
    p(7.99, "Groceries", "Sweet potato fries"),
    p(14.49, "Groceries", "Unsalted Butter"),
    p(10.49, "Groceries", "Paneer"),
    p(17.99, "Cats", "Puppy pads"),
    p(9.99, "Groceries", "Fuji apples"),
    p(9.99, "Groceries", "Fuji apples"),
    p(8.99, "Groceries", "4 lbs snap dragon apples"),
    p(3.69, "Groceries", "Tax")
]),

t(makeDate(2022, 11, 15), 42.44, new Vendor("Lowes"), visa8042, [
    p(24.98, "Home Improvement", "screw extractors"),
    p(4.98, "Home Improvement", "Screw extractor"),
    p(8.98, "Home Improvement", "Drill block"),
    p(3.50, "Home Improvement", "Tax")
]),

t(makeDate(2022, 11, 23), 74.63, new Vendor("Red Robin"), visa8042, [
    p(6.99, "Dining", "Oreo peppermint crunch shake"),
    p(13.89, "Dining", "Veggie burger"),
    p(5.99, "Dining", "Choc monster shake"),
    p(15.69, "Dining", "Pretzel bacon sandwich"),
    p(6.99, "For Nick", "Oreo peppermint crunch shake"),
    p(15.59, "For Nick", "Scorpion burger"),
    p(1.79, "For Nick", "Garlci fries"),
    p(7.70, "Dining", "Tax")
]),

t(makeDate(2022, 11, 27), 108.08, costco, visa8042, [
    p(5.99, "Groceries", "Croissants"),
    p(4.69, "Groceries", "Brioche buns"),
    p(9.99-1, "Groceries", "Chocolate chips"),
    p(6.49, "Groceries", "Crispy onions"),
    p(7.49-2.80, "Groceries", "Zebra popcorn"),
    p(13.59, "Groceries", "Fruit bars"),
    p(9.99, "Groceries", "Fuji apples"),
    p(7.99, "Groceries", "Cheddar slices"),
    p(12.99, "Groceries", "Guacamole"),
    p(11.99, "Groceries", "Peppermint bark"),
    p(5.29, "Groceries", "Tomatoes"),
    p(12.00, "Housewares", "Grill pan"),
    p(3.39, "Groceries", "Tax")
]),

t(makeDate(2022, 11, 30), 39.27, new Vendor("Staples"), visa8042, [
    p(22.99, "Housewares", "Network cable"),
    p(2.79, "Housewares", "Eraser"),
    p(2.79, "Housewares", "Eraser"),
    p(7.46, "Vishal Fun Money", "Stem explorers bricks"),
    p(3.24, "Housewares", "Tax")
]),

t(makeDate(2022, 11, 28), 16.50, new Vendor("Urbana Family Dental"), visa8042, [
    p(16.50, "Health", "Deep cleaning for Vishal")
]),

t(makeDate(2022, 12, 2), 321.61, costco, visa0078, [
    p(16.99, "Housewares", "Bath mat"),
    p(84.99-20, "Housewares", "Humidifier"),
    p(84.99-20, "Housewares", "Humidifier"),
    p(84.99-20, "Housewares", "Humidifier"),
    p(84.99-20, "Housewares", "Humidifier"),
    p(16.69-5, "Groceries", "Ginger beer"),
    p(6.99, "Groceries", "Terra chips"),
    p(25.98, "Housewares", "Tax")
]),

t(makeDate(2022, 12, 5), 10.89, new Vendor("Sally Beauty Supply"), capOne, [
    p(9.99, "Meridith Fun Money", "Jade hair dye"),
    p(0.90, "Meridith Fun Money", "Tax")
]),

t(makeDate(2022, 12, 5), 12.49, new Vendor("Target"), capOne, [
    p(12.49, "Groceries", "Turkey burgers")
]),

t(makeDate(2022, 12, 9), 34.63, new Vendor("Texas roadhouse"), capOne, [
    p(34.63, "Dining", "Dinner w/ Emma")
]),

t(makeDate(2022, 12, 11), 31.61, new Vendor("Pekara"), visa8042, [
    p(9.95, "Dining", "Choc covered strawberry crepe"),
    p(13.45, "Dining", "French toast breakfast"),
    p(4.95, "Dining", "Mocha coffee"),
    p(3.26, "Dining", "Tax")
]),

t(makeDate(2022, 12, 13), 77.64, chewy, capOne, [
    p(77.64, "Cats", "Cat food")
]),

t(makeDate(2023, 12, 17), 17.81, new Vendor("Fresh international market"), capOne, [
    p(2.39, "Groceries", "Coconut pocky"),
    p(9.99, "Groceries", "Samanco choc"),
    p(1.79, "Both Fun Money", "Chopsticks for Sahil"),
    p(3.19, "Both Fun Money", "Spoon for Sahil")
]),

t(makeDate(2022, 12, 26), 160.97, meijer, capOne, [
    p(9.98, "Both Fun Money", "Holiday scrunchies"),
    p(3.89, "Car", "Washer fluid"),
    p(5.09, "Both Fun Money", "Thermos for mom's gift"),
    p(6.99, "Both Fun Money", "Cup tray fro mom's gift"),
    p(10.49, "Cats", "Litter liner"),
    p(39.99, "Housewares", "Surge protector"),
    p(6.59, "Cats", "Litter pans"),
    p(4.99-1.25, "Vishal Fun Money", "Bluetooth aux adapter"),
    p(14.99-3.75, "Meridith Fun Money", "Cookie Press"),
    p(7.70, "Groceries", "Cereal"),
    p(2.79, "Groceries", "Cinnamon muffins"),
    p(8.49, "Groceries", "Drumstick ice cream"),
    p(26.79, "Cats", "cat litter"),
    p(2.79, "Groceries", "Peppermint bark"),
    p(11.48, "Housewares", "Tax")
]),

t(makeDate(2023, 1, 4), 87.74, costco, visa8042, [
    p(11.99, "Groceries", "Goldfish"),
    p(13.99, "For Matt", "Spinach frittatas"),
    p(14.59, "Groceries", "Chocolate almonds"),
    p(18.99, "For Matt", "Protein bars"),
    p(7.99, "Groceries", "4 lbs fuji apples"),
    p(7.99, "Groceries", "4 lbs fuji apples"),
    p(9.99, "Groceries", "Choc chips"),
    p(2.21, "Groceries", "Tax")
]),

t(makeDate(2023, 1, 11), -150.00, Matt, chase, [
    p(-150, "For Matt", "Payback for 1/4 costco")
]),

t(makeDate(2023, 1, 13), -400, Madeline, chase, [
    p(-300, "Housing", "January rent for Madeline and Neil"),
    p(-100, "Utilities", "January utilities for Madeline and Neil")
]),

t(makeDate(2023, 1, 14), -60, Nick, chase, [
    p(-60, "For Nick", "Payback for ?") //TODO: Figure out what transaction this is
]),

t(makeDate(2023, 1, 16), -18, Max, chase, [
    p(-18.00, "Dining", "Payback for dinner with Max") //TODO: Find matching transaction
]),

t(makeTime(2023, 1, 16, 22), -26, Matt, chase, [
    p(-26.00, "For Matt", "Payback for ?")  //TODO: Find matching transaction
]),

t(makeTime(2023, 1, 16, 23), -12, Nick, chase, [
    p(-12, "Dining", "Noodles and Co dinner")
]),

t(makeTime(2023, 1, 17, 0, 30), -15, Neil, chase, [
    p(-15, "Dining", "Noodles and Co Dinner")
]),

t(makeTime(2023, 1, 17, 0, 45), -11, Ani, chase, [
    p(-11, "Dining", "Noodles and Co Dinner")
]),

t(makeTime(2023, 1, 18, 1, 44), -9, Neil, chase, [
    p(-9, "Groceries", "Payback for steak")
]),

t(makeTime(2023, 1, 18, 2, 14), -7.50, Matt, chase, [
    p(-7.50, "Groceries", "Payback for snap peas")
]),

t(makeDate(2023, 1, 18), 44.74, new Vendor("Dos reales"), visa8042, [
    p(12.95, "Dining", "Chimichanga dinner"),
    p(6.99+2.99, "Dining", "Bean and cheese nachos with guac"),
    p(12.45, "For Matt", "Enchiladas supremas"),
    p(4.99, "Dining", "Guacamole"),
    p(4.61, "Dining", "Tax")
]),

t(makeTime(2023, 1, 19, 1, 35), -43, Matt, chase, [
    p(-43, "For Matt", "Payback for ?") //TODO: "Find Matching transaction"
]),

t(makeDate(2023, 1, 20), 2.00, carle, capOne, [
    p(2.00, "Health", "Parking")
]),

t(makeTime(2023, 1, 21, 23, 35), 20, Matt, chase, [
    p(20, BucketName.UNDEFINED, "Charger?") //Bought something from Matt?
]),

t(makeDate(2023, 1, 24), 28.34, meijer, visa0078, [
    p(4.47, "Groceries", "2 jars pasta sauce"),
    p(4.47, "Groceries", "2 jars pizza sauce"),
    p(2.29, "Groceries", "10 lbs all purpose flour"),
    p(2.49, "Groceries", "Carrots"),
    p(2.75, "Groceries", "Pepperoni"),
    p(4.00, "Groceries", "Tombstone pizza"),
    p(4.00, "Groceries", "Tombstone pizza"),
    p(1.49, "Groceries", "4 lbs sugar"),
    p(2.39, "Groceries", "Alfredo sauce"),
    p(3.99, "Groceries", "Strawberry yogurt"),
    p(-4.00, "Groceries", "Mperks offer"),
]),

t(makeDate(2023, 1, 24), 18.25, menards, visa0078, [
    p(2.39, "Home Improvement", "Heat shrink"),
    p(2.99, "Housewares", "Cable organizers"),
    p(2.99, "Housewares", "Cable organizers"),
    p(2.39, "Home Improvement", "Heat shrink"),
    p(2.99, "Housewares", "6 ft braided aux cable"),
    p(1.51, "Housewares", "Tax")
]),

t(makeTime(2023, 1, 25, 4), -175.00, Nick, chase, [
    p(-175.00, "For Nick", "Payback for missing costco receipt") //TODO: Find missing costco receipt
]),

t(makeTime(2023, 1, 26, 0, 59), -20, Matt, chase, [
    p(-20, "For Matt", "Payback for berries")
]),

t(makeDate(2023, 1, 27), 211.50, new Vendor("Target"), capOne, [
    p(10.00, "Housewares", "Digital clock"),
    p(110.00, "Housewares", "Overpriced stools"),
    p(1.59, "Groceries", "Tomatoes"),
    p(3.99, "Groceries", "Bell peppers"),
    p(2.39, "Groceries", "Mission tortillas"),
    p(1.59, "Groceries", "Snapple"),
    p(3.89, "Groceries", "Tazo tea"),
    p(2.39, "Groceries", "Mission corn tortillas"),
    p(6.98, "Groceries", "2 packs trident gum"),
    p(5.00, "Housewares", "2 decorative trays"),
    p(30.00, "Garden", "2 blueberry planters"),
    p(10.00, "Garden", "Herb plant markers"),
    p(5.00, "Garden", "Pots"),
    p(17.75, "Housewares", "Tax")
]),

t(makeDate(2023, 1, 27), 14.99, new Vendor("Target"), capOne, [
    p(14.99, "Housewares", "Folding stool"),
    p(2.69, "Meridith Fun Money", "Altoids"),
    p(24.99, "Vishal Fun Money", "Pokemon tin"),
    p(3.84, "Vishal Fun Money", "Tax"),
]),

t(makeDate(2023, 1, 27), -119.92, new Vendor("Target"), capOne, [
    p(-55.00, "Housewares", "Returned overpriced stool"),
    p(-55.00, "Housewares", "Returned overpriced stool"),
    p(-9.92, "Housewares", "Returned tax")
]),

t(makeDate(2023, 1, 31), 10.73, new Vendor("McDonald's"), capOne, [
    p(3.89, "Dining", "L fries"),
    p(2.79, "Dining", "Mocha frappe"),
    p(2.99, "Dining", "6 pc chicken mcnuggets"),
    p(1.06, "Dining", "Tax")
]),

t(makeDate(2023, 2, 3), 32.69, meijer, visa8042, [
    p(29.99, "Housewares", "Sound bar"),
    p(2.70, "Housewares", "Tax")
]),

t(makeDate(2023, 2, 4), 174.89, costco, visa8042, [
    p(12.49, "For Matt", "Trail mix"),
    p(7.69-2.20, "For Matt", "Cinnamon toast crunch"),
    p(12.69, "For Matt", "Protein powder waffle mix"),
    p(11.69, "For Matt", "Eggo waffles"),
    p(13.89, "For Matt", "Cauliflower pizza"),
    p(11.69, "For Matt", "Shredded cheese"),
    p(12.99, "For Matt", "Guacamole"),
    p(10.99, "For Matt", "Pork gyoza"),
    p(19.99, "For Matt", "Protein bars"),
    p(3.49, "For Matt", "Blackberries"),
    p(3.49, "For Matt", "Blackberries"),
    p(9.99, "Groceries", "Chocolate chips"),
    p(17.99, "Cats", "Puppy pads"),
    p(5.39, "Groceries", "4 lb fuji apples"),
    p(18.99, "Groceries", "Cashews"),
    p(3.64, "For Matt", "Tax")
]),

t(makeTime(2023, 2, 4, 22), -225.00, Neil, chase, [
    p(-150, "Housing", "Neil Feb Rent"),
    p(-75, "Utilities", "Neil Feb Utilities")
]),

t(makeTime(2023, 2, 4, 23), -120, Matt, chase, [
    p(-120, "For Matt", "Payback for 2/4 costco trip")
]),

t(makeTime(2023, 2, 7, 0), -225, Madeline, chase, [
    p(-150, "Housing", "Madeline Feb Rent"),
    p(-75, "Utilities", "Madeline Feb utilities")
]),

t(makeTime(2023, 2, 9, 23, 45), -13, Matt, chase, [
    p(-13, "For Matt", "Payback for dinner?") //TODO: Find matching receipt
]),

t(makeDate(2023, 2, 10), 26.74, new Vendor("Fresh international market"), visa0078, [
    p(4.39, "Groceries", "Chili oil"),
    p(6.99, "Groceries", "Red miso"),
    p(4.59, "Groceries", "Sesame paste"),
    p(3.99, "Groceries", "Pickled pink ginger"),
    p(0.79, "Housewares", "Ramen spoon"),
    p(0.79, "Housewares", "Ramen spoon"),
    p(0.79, "Housewares", "Ramen spoon"),
    p(0.79, "Housewares", "Ramen spoon"),
    p(0.79, "Housewares", "Ramen spoon"),
    p(0.69, "Housewares", "Ramen spoon"),
    p(0.79, "Housewares", "Ramen spoon"),
    p(0.79, "Housewares", "Ramen spoon"),
    p(0.56, "Groceries", "tax")
]),

t(makeDate(2023, 2, 12), 27.77, harborFreight, visa0078, [
    p(8.49, "Fish", "Wire for water tray"),
    p(16.99, "Home Improvement", "Drill bit set"),
    p(2.29, "Home Improvement", "Tax")
]),

t(makeDate(2023, 2, 14), 31.58, new Vendor("Walgreens"), visa0078, [
    p(11.99, "Health", "3-ply face masks"),
    p(5.99, "Health", "3-ply face masks"),
    p(5.99, "Meridith Fun Money", "Choc sampler box"),
    p(2.50, "Meridith Fun Money", "Wintergreen altoids"),
    p(2.50, "Vishal Fun Money", "Cinnamon altoids"),
    p(2.61, "Health", "Tax")
]),
t(makeDate(2023, 2, 15), 33.32, costco, visa0078, [
    p(33.32, "Car", "10.254 gal gas at $3.249 per gal")
]),


t(makeDate(2023, 2, 15), 38.88, new Vendor("Red Robin Burgers"), visa8042, [
    p(47.04, "Dining", "Dinner")
]),

t(makeTime(2023, 2, 16, 0, 19), -155.92, Nick, chase, [
    p(-155.92, "For Nick", "Payback for costco trip on 2/15") //TODO: Download this costco receipt
]),

t(makeTime(2023, 2, 16, 0, 37), -40, Matt, chase, [
    p(-40.00, "For Matt", "Pizza?") //TODO: Find matching receipt
]),

t(makeTime(2023, 2, 17, 3), 19.45, new Vendor("TomatoFest"), chase, [
    p(19.45, "Garden", "Tomato plants")
]),

t(makeDate(2023, 2, 18), 108.16, menards, visa8042, [
    p(5.92, "Home Improvement", "4 8 foot pieces of furring"),
    p(66.36, "Home Improvement", "4 4x4 panels pegboard"),
    p(2.99, "Home Improvement", "Value shelf wood"),
    p(5.19, "Home Improvement", "Wire staples"),
    p(2.50, "Home Improvement", "Double arm pegboard hook"),
    p(2.69, "Home Improvement", "Double arm pegboard hook"),
    p(4.99, "Fish", "Cable labels"),
    p(8.99, "Home Improvement", "Asst pegboard hooks"),
    p(8.97, "Home Improvement", "Tax")
]),

t(makeDate(2023, 2, 19), 166.89, harborFreight, visa8042, [
    p(109.99, "Home Improvement", "Covered walkway car port thing"),
    p(3.99, "Home Improvement", "Socket driver set"),
    p(9.99, "Home Improvement", "7 pc forstner bit set"),
    p(5.29, "Home Improvement", "Nut and washer asst"),
    p(25.99, "Home Improvement", "Replacement plan on carport"),
    p(11.64, "Home Improvement", "Tax")
]),

t(makeTime(2023, 2, 19, 0), -5, Matt, chase, [
    p(-5, "Garden", "Payback for seeds")
]),

t(makeTime(2023, 2, 19, 2), -19.29, Matt, chase, [
    p(-19.29, "For Matt", "Payback for dinner?") //TODO: Find matching receipt
]),

t(makeTime(2023, 2, 28, 1), -7.50, Ani, chase, [
    p(-7.50, "Fish", "Payback for Snebastian")
]),

t(makeDate(2023, 4, 4), 59.42, lamixteca, visa8042, [
    p(49.42, "Dining", "Dinner"),
    p(10.00, "Dining", "Tax")
]),

t(makeDate(2023, 4, 10), 95.13, new Vendor("Bangkok thai"), visa0078, [
    p(13.95, "Dining", "Chicken fried rice"),
    p(15.95, "Dining", "Tofu pineapple fried rice"),
    p(13.95, "Dining", "Beef pad kee mao"),
    p(13.95, "Dining", "Eggplant with basil leaves"),
    p(19.95, "Dining", "Curry"),
    p(7.95, "Dining", "Crab rangoon"),
    p(9.43, "Dining", "Tax")
]),

t(makeDate(2023, 4, 10), -9.00, new Vendor("Xavior DeJarnett"), chase, [
    p(-9, "Dining", "Payback for Bangkok thai on 4/10")
]),

t(makeDate(2023, 4, 12), 0.00, mattex, visa0078, [
    p(0.00, "Home Improvement", "HVAC service")
]),

t(makeDate(2023, 4, 18), 45.78, meijer, capOne, [
    p(45.78, "Car", "11.987 gal gas at $3.819 per gal")
]),

t(makeDate(2023, 4, 25), 15.25, costco, visa8042, [
    p(13.99, "Clothing", "Cargo shorts"),
    p(1.26, "Colthing", "Tax")
]),

t(makeDate(2023, 4, 25), 3.89, costco, capOne, [
    p(1.50, "Dining", "Hot dog"),
    p(1.99, "Dining", "Cheese pizza slice"),
    p(0.40, "Dining", "Tax")
]),

t(makeDate(2023, 4, 25), 15.11, new Vendor("Jarlings custard cup"), capOne, [
    p(6.90, "Dining", "Fudge brownie deluxe waffle basket"),
    p(6.65, "Dining", "Berry delight parfait"),
    p(1.56, "Dining", "Tax")
]),

t(makeDate(2023, 4, 26), 125.84, new Vendor("HerRoom"), capOne, [
    p(39.00, "Clothing", "Bra"),
    p(37.50, "Clothing", "Bra"),
    p(38.95, "Clothing", "Bra"),
    p(10.39, "Clothing", "tax")
]),

//TODO: Figure out when 2 march menards trips were

t(makeDate(2023, 3, 2), 69.06, new Vendor("Rareseeds"), capOne, [
    p(18.25, "Garden", "2 pink lemonade blueberry plants"),
    p(18.25, "Garden", "2 top hat blueberry plants"),
    p(28.50, "Garden", "2 fall gold raspberry plants"),
    p(4.05, "Garden", "Tax")
]),

t(makeDate(2023, 3, 2), 327.05, costco, visa0078, [
    p(16.99, "Housewares", "Queen sheets"),
    p(16.99, "Housewares", "Queen sheets"),
    p(5.99, "Groceries", "Popcorn"),
    p(29.99, "For Matt", "Hairdryer"),
    p(16.79, "For Matt", "Quart freezer bags"),
    p(6.49, "For Matt", "Naan dippers"),
    p(19.99, "For Matt", "Protein bars"),
    p(6.29, "Groceries", "Potatoes"),
    p(9.49, "Groceries", "Walnuts"),
    p(9.99, "Groceries", "Almonds"),
    p(5.39, "Groceries", "4 lbs fuji apples"),
    p(16.69, "Groceries", "Ginger beer"),
    p(5.39, "Groceries", "4 lbs fuji apples"),
    p(10.89, "Groceries", "Frozen spring rolls"),
    p(12.99, "For Matt", "Acai bowls"),
    p(10.49, "Groceries", "Mangoes"),
    p(9.69, "For Matt", "Noosa yoghurt"),
    p(5.99, "For Matt", "Tomato medley"),
    p(2.99, "For Matt", "Blackberries"),
    p(2.99, "For Matt", "Blackberries"),
    p(5.79, "For Matt", "Raspberries"),
    p(89.99, "Both Fun Money", "$100 in nintendo giftcards"),
    p(8.77, "Groceries", "Tax")
]),

t(makeDate(2023, 3, 2), 79.41, new Vendor("Home Depot"), visa8042, [
    p(21.94, "Garden", "Indoor potting mix"),
    p(18.38, "Home Improvement", "Brad nails"),
    p(2.12, "Cats", "Shelf brackets"),
    p(6.97, "Housewares", "Shelf pins"),
    p(8.97, "For Matt", "Light bulb"),
    p(14.47, "For Matt", "Light bulb"),
    p(6.56, "Home Improvement", "Tax")
]),

t(makeDate(2023, 3, 12), 103.59, farmAndFleet, visa0078, [
    p(4.99, "Garden", "Green spray paint"),
    p(4.99, "Garden", "Blue spray paint"),
    p(8.99, "For Matt", "Parts organizer"),
    p(2.40, "Cats", "Curry comb"),
    p(2.99, "Garden", "Terra cotta pot"),
    p(3.99, "Fish", "Dive sticks"),
    p(5.99, "For Matt", "Rotary wire brushes"),
    p(1.92, "Garden", "Zinnia seeds"),
    p(1.25, "Garden", "Bird suet cake"),
    p(1.25, "Garden", "Bird suet cake"),
    p(8.79, "Home Improvement", "Pry bar"),
    p(47.99, "Woodworking", "Router guide"),
    p(8.55, "Garden", "Tax")
]),

t(makeDate(2023, 3, 12), 15.82, harborFreight, visa0078, [
    p(5.56, "Both Fun Money", "Magnetic tool holder"),
    p(0.99, "Both Fun Money", "Magnetic parts holder"),
    p(1.99, "Home Improvement", "Straight pegboard hook"),
    p(1.99, "Home Improvement", "2 in straight pegboard hooks"),
    p(1.99, "Home Improvement", "2 in straight pegboard hooks"),
    p(1.99, "Home Improvement", "Pegboard hooks"),
    p(1.31, "Home Improvement", "Tax")
]),

t(makeDate(2023, 3, 16), 32.43, new Vendor("Merry Ann's"), visa8042, [
    p(32.43, "Dining", "Dinner")
]),

t(makeDate(2023, 3, 17), 35.71, costco, visa0078, [
    p(35.71, "Car", "11.026 gal gas")
]),

t(makeDate(2023, 3, 17), 16.09, new Vendor("Prairie Gardens"), capOne, [
    p(14.97, "Garden", "Owl planter"),
    p(1.12, "Garden", "Tax")
]),

t(makeDate(2023, 3, 19), 21.98, new Vendor("Cracker Barrel"), capOne, [
    p(14.99, "Vishal Fun Money", "Pokemon clip and go"),
    p(6.99, "Sewing", "Turtle measuring tape"),
    p(1.81, "Vishal Fun Money", "Tax")
]),

t(makeDate(2023, 3, 24), 61.93, new Vendor("Prairie Garden Center"), visa0078, [
    p(21.67, "Garden", "11 strawberry plants"),
    p(1.99, "Garden", "Plant seeds"),
    p(1.99, "Garden", "Plant seeds"),
    p(1.99, "Garden", "Plant seeds"),
    p(1.99, "Garden", "Plant seeds"),
    p(1.99, "Garden", "Plant seeds"),
    p(3.49, "Meridith Fun Money", "Fudge"),
    p(11.25, "Vishal Fun Money", "Pinwheel"),
    p(11.25, "Vishal Fun Money", "Pinwheel"),
    p(4.32, "Garden", "Tax")
]),

t(makeDate(2023, 3, 26), 46.17, harborFreight, visa8042, [
    p(2.39, "Home Improvement", "Ceramic magnet"),
    p(19.99, "Home Improvement", "16 in digital angle level"),
    p(9.98, "Home Improvement", "Magnetic tool holder"),
    p(9.99, "Garden", "Blue tarp"),
    p(3.82, "Home Improvement", "Tax")
]),

t(makeDate(2023, 3, 28), 27.98, new Vendor("Walgreens"), chase, [
    p(6.99, "Groceries", "Ben and Jerrys"),
    p(7.99, "Groceries", "Dishwasher detergent"),
    p(2.09, "Groceries", "Hand soap"),
    p(10.00, "Health", "Prescription"),
    p(0.91, "Groceries", "Tax")
]),

t(makeDate(2023, 3, 31), 10.51, new Vendor("Portillos"), visa8042, [
    p(4.69+0.75, "Dining", "Hot dog"),
    p(3.99, "Dining", "Garden dog"),
    p(1.08, "Dining", "Tax")
]),

new ExternalTransaction(makeDate(2023, 5, 1), -225, Madeline, chase, [
    p(-225, "Utilities", "Madeline May rent")
]),

t(makeDate(2023, 5, 5), 70.17, costco, visa8042, [
    p(8.39, "Housewares", "Collapsible crate"),
    p(8.39, "Housewares", "Collapsible crate"),
    p(21.99, "Clothing", "Convertable cargo shorts"),
    p(26.99, "Clothing", "Workpants"),
    p(4.41, "Clothing", "Tax")
]),

t(makeDate(2023, 5, 7), 25.72, new Vendor("Prairie Gardens"), capOne, [
    p(3.99, "Garden", "Tomato plant"),
    p(3.99, "Garden", "Tomato plant"),
    p(3.99, "Garden", "Pepper plant"),
    p(3.99, "Garden", "Eggplant plant"),
    p(3.99, "Garden", "Eggplant plant"),
    p(3.98, "Garden", "2 4 packs of peppers"),
    p(1.79, "Garden", "Tax")
]),

t(makeDate(2023, 5, 8), 23.25, new Vendor("Walgreens"), capOne, [
    p(7.00, "Health", "Cough drops"),
    p(1.17, "Health", "Prescription"),
    p(15.00, "Health", "Prescription"),
    p(0.07, "Health", "Tax")
]),

t(makeDate(2023, 5, 10), -53.39, costco, visa8042, [
    p(-53.39, "Clothing", "2 pairs returned pants")
]),

t(makeDate(2023, 5, 10), 23.13, new Vendor("Rural King"), capOne, [
    p(23.12, "Garden", "4 lavender plants"),
    p(2.08, "Garden", "Tax")
]),

t(makeDate(2023, 5, 10), 30.00, new Vendor("Walgreens"), capOne, [
    p(15.00, "Health", "Prescription"),
    p(15.00, "Health", "Prescription")
]),

t(makeDate(2023, 5, 11), 186.25, costco, visa8042, [
    p(9.99, "Groceries", "Choc chips"),
    p(9.99, "Groceries", "Smores bark"),
    p(8.69, "Groceries", "Life cereal"),
    p(21.99*3, "Clothing", "3 pair convertible cargo pants"),
    p(4.99, "Groceries", "Whip cream 3 pack"),
    p(12.99, "For Matt", "Acai bowl"),
    p(14.99, "Groceries", "Daybreak cereal"),
    p(1.39, "Groceries", "Bananas"),
    p(7.99, "For Matt", "Sliced mozzarella"),
    p(2.99*2, "For Matt", "2 containers blackberries"),
    p(5.99*2, "For Matt", "2 containers raspberries"),
    p(6.29*2, "For Matt", "Celery"),
    p(5.99, "For Matt", "Tomato medley"),
    p(4.99, "For Matt", "Eggs"),
    p(7.74, "Groceries", "Tax")
]),

t(makeDate(2023, 5, 11), -96.00, Matt, chase, [
    p(-96, "For Matt", "Payback for 5/11 costco trip")
]),

t(makeDate(2023, 5, 11), -225, Neil, chase, [
    p(-225, "Utilities", "Neil may rent")
]),

t(makeDate(2023, 5, 12), 83.98, new Vendor("Best Buy"), visa8042, [
    p(50.99, "Both Fun Money", "Animal Crossing for Ani bday"),
    p(32.99, "Cats", "Microsd card"),
    p(7.56, "Both Fun Money", "Tax")
]),

t(makeDate(2023, 5, 12), 40.53, new Vendor("Grubhub"), chase, [
    p(-40.53, "Dining", "Dinner")
]),

t(makeDate(2023, 5, 12), 47.96, joann, visa8042, [
    p(28.00, "Both Fun Money", "Black windchimes"),
    p(16.00, "Garden", "Green wind chimes"),
    p(3.86, "Garden", "Tax")
]),

t(makeDate(2023, 5, 12), 32.65, menards, visa8042, [
    new Purchase(3.97, "Garden", "Metal tent stake to guide wire trees"),
    new Purchase(25.98, "Garden", "2 shepherd hooks"),
    new Purchase(2.70, "Garden", "Tax")
]),

t(makeDate(2023, 5, 16), 30.87, new Vendor("Prairie Gardens"), capOne, [
    p(9.97-1, "Garden", "Bird feeder"),
    p(19.96-2, "Garden", "Plants"),
    p(1.99-0.2, "Garden", "Annual"),
    p(2.15, "Garden", "Tax")
]),

t(makeDate(2023, 5, 17), 53.03, new Vendor("Meatheads"), capOne, [
    p(10.89, "For Matt", "California burger"),
    p(13.29, "Dining", "Impossible burger"),
    p(3.49, "Dining", "Cajun fries"),
    p(3.49, "Dining", "Normal fries"),
    p(10.89, "Dining", "Texas ranch burger"),
    p(0.99, "Dining", "Garlic aioli"),
    p(0.99, "Dining", "Cucumber wasabi"),
    p(4.18, "Dining", "Tax"),
    p(4.82, "Dining", "Tip")
]),

t(makeDate(2023, 5, 18), 24.80, new Vendor("El toro"), capOne, [
    p(24.80, "Dining", "Dinner w/ Emma")
]),

t(makeDate(2023, 5, 19), 111.68, water, chase, [
    p(111.68, "Utilities", "Apr 2023 water bill")
]),

t(makeDate(2023, 5, 20), 36.14, new Vendor("Jet's pizza"), capOne, [
    p(30.12, "Dining", "Pizza bday dinner"),
    p(6.02, "Dining", "Tip")
]),

t(makeDate(2023, 5, 29), 174.10, new Vendor("Prairie Gardens"), visa8042, [
    p(3.99, "Garden", "Plant"),
    p(7.97, "Garden", "Rain gauge tube"),
    p(149.99, "Garden", "Apple tree"),
    p(12.15, "Garden", "Tax")
]),

t(makeDate(2023, 5, 20), 47.69, sweetbasil, visa8042, [
    p(18.00, "Dining", "Avocado and Bacon Omelet"),
    p(17.00, "Dining", "Cinnamon roll french toast combo"),
    p(3.15, "Dining", "Tax"),
    p(9.54, "Dining", "Tip")
]),

t(makeDate(2023, 5, 23), 102.20, costco, visa8042, [
    p(14.49, "For Matt", "Chili flavored almonds"),
    p(5.99, "For Matt", "Tomato medley"),
    p(9.49-3.5, "For Matt", "Noosa yoghurt"),
    p(10.99, "For Matt", "Fruit tray"),
    p(7.99, "For Matt", "Organic raspberries"),
    p(5.99, "Groceries", "Naan bread"),
    p(13.99-3.50, "Health", "Multivitamins"),
    p(13.99-3.50, "Health", "Multivitamins"),
    p(12.79, "Groceries", "Cashews"),
    p(8.39*2, "Housewares", "2 collapsible crates"),
    p(0.21, "Groceries", "Tax")
]),

t(makeDate(2023, 5, 23), 40.06, costco, visa8042, [
    p(40.06, "Car", "11.684 gal gas at $3.429 per gal")
]),

t(makeDate(2023, 5, 28), 4.35, menards, visa8042, [
    p(3.99, "Garden", "mason line for guide wiring trees"),
    p(0.36, "Garden", "Tax")
]),

t(makeDate(2023, 5, 31), 71.44, new Vendor("Bread company"), visa8042, [
    p(9.50, "Dining", "Pear sandwich"),
    p(9.50, "Dining", "Cheese steak sandwich"),
    p(7.25, "Groceries", "Jalepeno cheese bread"),
    p(9.50, "For Matt", "Chicken sandwich"),
    p(9.50, "Dining", "Veggie sandwich for Ani"),
    p(6.00, "Dining", "2 lemonades"),
    p(4.84, "Dining", "Tax"),
    p(11.10, "Dining", "Tip")
]),

t(makeDate(2023, 5, 31), -73.75, Matt, chase, [
    p(-73.75, "For Matt", "Payback for lunch and 5/23 costco trip")
]),

t(makeDate(2023, 5, 31), 151.00, new Vendor("DMV"), chase, [
    p(151.00, "Car", "Registration")
]),

new ExternalTransaction(makeDate(2023, 6, 1), 0.00, epic, visa0078, [
    new Purchase(0.00, "Meridith Fun Money", "Midnight Ghost Hunt free offer")
]),

new ExternalTransaction(makeDate(2023, 6, 1), -225, Madeline, chase, [
    new Purchase(-225, "Utilities", "Madeline June rent")
]),

new ExternalTransaction(makeDate(2023, 6, 3), -225, Neil, chase, [
    new Purchase(-225, "Utilities", "Neil June Rent")
]),

new ExternalTransaction(makeDate(2023, 6, 4), 72.96, carle, capOne, [
    new Purchase(72.96, "Health", "MRI payment plan")
]),

new ExternalTransaction(makeDate(2023, 6, 4), 184.25, costco, visa8042, [
    new Purchase(19.79, "Groceries", "Paper towels"),
    new Purchase(19.99, "Groceries", "Toilet paper"),
    new Purchase(9.99, "Groceries", "25 lbs flour"),
    new Purchase(5.39, "Groceries", "4 lbs fuji apples"),
    new Purchase(5.39, "Groceries", "4 lbs fuji apples"),
    new Purchase(29.99-10, "Housewares", "Prokeep produce containers"),
    new Purchase(4.99, "Groceries", "Rotisserie chicken"),
    new Purchase(9.99, "Groceries", "Chocolate chips"),
    new Purchase(7.99, "Groceries", "Walnuts"),
    new Purchase(13.99-4.10, "Groceries", "Fruit bars"),
    new Purchase(7.99, "Groceries", "Sliced mozzerella"),
    new Purchase(4.59, "Groceries", "Strawberries"),
    new Purchase(5.39, "Groceries", "Sourdough bread loaves"),
    new Purchase(9.49, "Groceries", "Almonds"),
    new Purchase(21.99, "Clothing", "Convertible cargo pants"),
    new Purchase(12.69, "Groceries", "Protein Powder waffle mix"),
    new Purchase(8.71, "Groceries", "Tax")
]),

new ExternalTransaction(makeDate(2023, 6, 5), 84.71, menards, capOne, [
    new Purchase(12.99, "Garden", "Safflower seed"),
    new Purchase(2.28, "Meridith Fun Money", "Reese's candy"),
    new Purchase(13.28, "Home Improvement", "Wall anchors"),
    new Purchase(3.99, "Cats", "Garbage bags"),
    new Purchase(6.57, "Cats", "Threaded rods for cat flap"),
    new Purchase(2.19, "Cats", "Threaded rod for cat flap"),
    new Purchase(0.79, "Cats", "nuts for threaded rods"),
    new Purchase(1.18, "Cats", "Washers for threaded rods"),
    new Purchase(0.79, "Cats", "More nuts for threaded rods"),
    new Purchase(33.66, "Home Improvement", "Floor remnant to cover lifting tiles"),
    new Purchase(6.99, "Cats", "Tax")
]),

t(makeDate(2023, 6, 6), 4035, new Vendor("UofI Vet Hospital"), visa8042, [
    p(4035, "Cats", "Popoki foreign body surgery")
]),

new ExternalTransaction(makeDate(2023, 6, 8), 11.76, amazon, capOne, [
    new Purchase(11.76, "Cats", "Card containers to ship magic cards")
]),

new ExternalTransaction(makeDate(2023, 6, 8), 53.54, menards, visa0078, [
    //TODO: Figure out what project we were doing
]),

new ExternalTransaction(makeDate(2023, 6, 8), 0.00, new Vendor("USPS"), visa0078, [
    new Purchase(0.00, "Cats", "Flat rate boxes for magic card selling")
]),

new ExternalTransaction(makeDate(2023, 6, 9), -5, Madeline, chase, [
    new Purchase(-5, "Groceries", "Groceries bought for madeline")
]),

new ExternalTransaction(makeDate(2023, 6, 9), 33.75, new Vendor("Pet supplies plus"), visa0078, [
    new Purchase(20.98, "Cats", "Inflatable E-collar"),
    new Purchase(9.98, "Cats", "Cat cleaning wipes"),
    new Purchase(2.79, "Cats", "Tax")
]),

new ExternalTransaction(makeDate(2023, 6, 9), 8.12, tacoBell, visa0078, [
    new Purchase(8.12, "Dining", "Meridith lunch")
]),

new ExternalTransaction(makeDate(2023, 6, 10), 5.00, new Vendor("USPS"), visa0078, [
    new Purchase(5.00, "Cats", "Mailed magic cards")
]),

new ExternalTransaction(makeDate(2023, 6, 14), 51.90, meijer, visa0078, [
    new Purchase(0.35, "Groceries", "0.63 lb bananas"),
    new Purchase(5.28, "Cats", "Lil soups for Poki recovery"),
    new Purchase(2.29, "Groceries", "Shredded cheese"),
    new Purchase(4.59, "Groceries", "Ice cream"),
    new Purchase(5.39, "Groceries", "Whipped cream"),
    new Purchase(11.49, "Cats", "Churus for Poki recovery"),
    new Purchase(3.49, "Groceries", "Cereal"),
    new Purchase(4.99, "Groceries", "Cereal"),
    new Purchase(11.49, "Cats", "Cat litter"),
    new Purchase(2.54, "Cats", "Tax")
]),

new ExternalTransaction(makeDate(2023, 6, 15), 158.53, costco, visa0078, [
    new Purchase(5.99, "Groceries", "Popcorn"),
    new Purchase(16.99, "For Matt", "Caterpillar crew socks"),
    new Purchase(12.99, "For Matt", "Acai bowls"),
    new Purchase(19.49, "For Matt", "Laundry detergent"),
    new Purchase(6.99, "For Matt", "Tomatoes"),
    new Purchase(7.99, "For Matt", "Organic raspberries"),
    new Purchase(7.99, "For Matt", "Organic raspberries"),
    new Purchase(9.99, "For Matt", "Noosa Yoghurt"),
    new Purchase(4.99, "For Matt", "Snap peas"),
    new Purchase(8.50, "For Matt", "Tuxedo cake"),
    new Purchase(8.49, "Groceries", "Tuxedo cake"),
    new Purchase(8.69, "Groceries", "Life cereal"),
    new Purchase(11.49, "Health", "Vishal multivitamins"),
    new Purchase(5.39, "Groceries", "4 lbs fuji apples"),
    new Purchase(5.39, "Groceries", "4 lbs fuji apples"),
    new Purchase(9.99, "Groceries", "Pomegranate arils"),
    new Purchase(3.79, "Groceries", "Red pepper"),
    new Purchase(3.39, "Groceries", "Tax"),
]),

new ExternalTransaction(makeDate(2023, 6, 15), 32.12, costco, visa0078, [
    new Purchase(32.12, "Car", "9.591 gals gas at $3.349 per gal")
]),

new ExternalTransaction(makeDate(2023, 6, 15), -90, Matt, chase, [
    new Purchase(-90, "For Matt", "Payback for 6/15 costco trip")
]),

new ExternalTransaction(makeDate(2023, 6, 15), 56.68, sweetbasil, visa0078, [
    new Purchase(16.00, "For Matt", "Philly flat bread"),
    new Purchase(17.00, "Dining", "Italian egg white scrambler"),
    new Purchase(16.00, "Dining", "Pesto chicken flat bread"),
    new Purchase(3.00, "Dining", "French fries"),
    new Purchase(4.68, "For Matt", "Tax"),
    new Purchase(14.17, "Dining", "Tip")
]),

new ExternalTransaction(makeDate(2023, 6, 16), -362.83, new Vendor("Star City Games"), chase, [
    new Purchase(-362.83, "Cats", "Dad's old low value magic cards") //Sold magic cards to pay for Poki's surgery
]),

new ExternalTransaction(makeDate(2023, 6, 18), 59.94, amazon, visa0078, [
    new Purchase(59.94, "Both Fun Money", "Kindle unlimited for Dad retirement gift")
]),

new ExternalTransaction(makeDate(2023, 6, 18), 44.80, new Vendor("Lowes"), visa0078, [
    new Purchase(4.89, "Garden", "1/4 in barbed tees 10-pack"),
    p(5.07, "Garden", "Back flow valve"),
    p(2.79, "Garden", "10 loop stakes"),
    p(19.98, "Garden", "4 way hose manifold"),
    p(3.02, "Garden", "3/4 in F-F coupling"),
    p(4.76, "Garden", "Full flow manifold"),
    p(0.59, "Garden", "3/4 x 1/2 in poly adapter"),
    p(3.70, "Garden", "Tax")
]),

t(makeDate(2023, 6, 18), 11, Matt, chase, [
    p(11, "Dining", "Dominos Pizza with Matt")
]),

t(makeDate(2023, 6, 18), 37.05, amazon, visa0078, [
    p(37.05, "Cats", "Camera for sitting room")
]),

t(makeDate(2023, 6, 19), 68.06, amazon, visa0078, [
    p(15.99, "Garden", "Drip irrigation nozzles"),
    p(10.99, "Garden", "Check valve"),
    p(16.15, "Home Improvement", "Garage sensors"),
    p(24.93, "Garden", "Shipping and taxes")
]),

t(makeDate(2023, 6, 22), 62.40, sushikame, visa0078, [
    p(7.95, "Dining", "Soft shell crab roll"),
    p(5.25, "Dining", "Sweet potato roll"),
    p(11.95, "Dining", "Gyu don"),
    p(11.95, "Dining", "Veggie tempura dinner"),
    p(14.25, "For Matt", "Chicken teriyaki bento box"),
    p(5.14, "For Matt", "Tip"),
    p(5.91, "Dining", "Tax")
]),

t(makeDate(2023, 6, 24), 39.23, amazon, visa0078, [
    p(39.23, "Garden", "Irrigation timer")
]),

t(makeDate(2023, 6, 25), 23.54, new Vendor("Chipotle"), visa0078, [
    p(9.45, "Dining", "Chicken burrito"),
    p(2.85, "Dining", "Guacamole"),
    p(9.45, "Dining", "Veggie burrito"),
    p(1.79, "Dining", "Tax")
]),

t(makeDate(2023, 6, 27), 507.87, costco, visa0078, [
    p(3.99, "For Matt", "Blackberries"),
    p(4.97, "For Matt", "Chili almonds"),
    p(69.99, "For Matt", "Blender"),
    p(4.69-1, "For Matt", "Grape tomatoes"),
    p(7.99, "For Matt", "Organic raspberries"),
    p(5.49, "For Matt", "Raspberries"),
    p(21.98, "Housewares", "2 beach towels"),
    p(349.99, "Home Improvement", "New mesh wifi system"),
    p(39.79, "Home Improvement", "Tax")
]),

t(makeDate(2023, 6, 27), -103, Matt, chase, [
    p(-103, "For Matt", "Payback for 6/27 costco")
]),

t(makeDate(2023, 6, 27), 55.41, new Vendor("Prairie gardens"), visa0078, [
    p(2.80-0.28, "Garden", "Pepper plant"),
    p(3.50-0.35, "Garden", "Lavender plant"),
    p(5.99-0.60, "Garden", "Heliopsis"),
    p(3.50-0.35, "Garden", "Basil plant"),
    p(3.50-0.35, "Garden", "Cilantro plant"),
    p(3.50-0.35, "Garden", "Thai basil"),
    p(3.50-0.35, "Garden", "Basil plant"),
    p(3.50-0.35, "Garden", "Herb plant"),
    p(13.99-1.40, "Garden", "Perennial"),
    p(16.99-1.70, "Garden", "Perennial"),
    p(3.87, "Garden", "Tax")
]),

t(makeDate(2023, 6, 28), 114.00, new Vendor("Courier cafe"), visa8042, [
    p(7.80, "Dining", "Choc malt"),
    p(3.90, "Dining", "Root beer phosphate"),
    p(9.36, "Dining", "Onion rings"),
    p(11.18, "Dining", "Cheese curds"),
    p(3.38, "Dining", "Tea"),
    p(11.44, "Dining", "Beef manhattan"),
    p(18.46, "Dining", "Salmon fillet"),
    p(12.74, "Dining", "Reuben"),
    p(14.04, "Dining", "Fish tacos"),
    p(10.40, "Dining", "Grilled swiss and pesto"),
    p(11.30, "Dining", "Tax")
]),

t(makeDate(2023, 6, 28), -15, Matt, chase, [
    p(-15, "Dining", "For Matt's reuben")
]),

t(makeDate(2023, 6, 28), -52, Nick, chase, [
    p(-52, "Dining", "For Nick and Nat's meals")
]),

t(makeDate(2023, 6, 29), 32.14, new Vendor("Advance Auto Parts"), visa0078, [
    p(6.99, "Car", "Super glue"),
    p(6.99, "Car", "Masking tape"),
    p(15.99, "Car", "Mirror replacement"),
    p(2.17, "Car", "Tax")
]),

t(makeDate(2023, 6, 29), 35.37, new Vendor("Autozone"), visa0078, [
    p(19.99, "Car", "All purpose sheers"),
    p(12.99, "Car", "Cut to fit mirror replacement"),
    p(2.39, "Car", "Tax")
]),

//TODO: Find hotel receipts

t(makeDate(2023, 6, 29), 33.45, new Vendor("Marathon gas"), visa8042, [
    p(33.45, "Car", "10.138 gal gas at $3.299 per gal")
]),

t(makeDate(2023, 6, 29), 30.83, new Vendor("Streetside 62 bistro"), visa8042, [
    p(24.10, "Dining", "Dinner on way to family reunion"),
    p(1.70, "Dining", "Tax"),
    p(5.03, "Dining", "Tip")
]),

t(makeDate(2023, 6, 30), 22.43, cvs, visa0078, [
    //Can't tell what's on receipt
    p(6.59, "Health", "Con 1pk sc"),
    p(11.99, "Health", "CVS Ctrz tab 10 mg 14 ct"),
    p(0.99, "Clothing", "Hair clip"),
    p(1.39, "Health", "Sec otlst cln is"),
    p(1.47, "Health", "WV Tax")
]),

t(makeDate(2023, 6, 30), 24.89, new Vendor("Panera"), visa0078, [
    p(5.19, "Dining", "Iced choc latte"),
    p(11.88, "Dining", "Soup and sandwich"),
    p(6.19, "Dining", "Cup tomato soup"),
    p(1.63, "Dining", "Tax")
]),

t(makeDate(2023, 6, 30), 37.10, new Vendor("Pilot Gas"), visa0078, [
    p(37.10, "Car", "11.597 gal gas at $3.199 per gal")
]),

t(makeDate(2023, 6, 30), 29.95, new Vendor("TJMaxx"), visa0078, [
    p(4.99, "Clothing", "Shower cap and sleep mask"),
    p(7.00, "Clothing", "Pastel shirt"),
    p(16.00, "Clothing", "Peacock hawaiian shirt"),
    p(1.96, "Clothing", "Tax")
]),

new ExternalTransaction(makeDate(2023, 7, 4), 28.50, new Vendor("IHOP"), visa8042, [
    new Purchase(28.50, "Dining", "Dinner on way back from family reunion")
]),

new ExternalTransaction(makeDate(2023, 7, 4), 24.78, new Vendor("Noodle & Co"), visa0078, [
    new Purchase(11.25, "Dining", "Pesto cavatappi with chicken"),
    new Purchase(7.00, "Dining", "Pesto cavatappi"),
    new Purchase(3.00, "Dining", "Fountain drink"),
    new Purchase(1.28, "Dining", "Tax"),
    new Purchase(2.25, "Dining", "Tip")
]),

new ExternalTransaction(makeDate(2023, 7, 4), 40.24, new Vendor("Shell gas"), visa0078, [
    new Purchase(40.24, "Car", "11.839 gal gas at $3.399 per gal")
]),

new ExternalTransaction(makeDate(2023, 7, 5), 27.80, new Vendor("Love's gas"), visa0078, [
    new Purchase(27.80, "Car", "8.637 gal gas at $3.219 per gal")
]),

new ExternalTransaction(makeDate(2023, 7, 5), 60.76, new Vendor("Oozu"), chase, [
    new Purchase(17.75, "Dining", "Spicy creamy vegan ramen"),
    new Purchase(8.47, "Dining", "Gyoza"),
    new Purchase(20.07, "Dining", "Tanaka rich garlic ramen"),
    new Purchase(5.32, "Dining", "Tax"),
    new Purchase(9.15, "Dining", "Tip")
]),

new ExternalTransaction(makeDate(2023, 7, 6), -225, Neil, chase, [
    new Purchase(-225, "Utilities", "July rent for Neil")
]),

new ExternalTransaction(makeDate(2023, 7, 7), 229.04, costco, visa8042, [
    new Purchase(8.99, "For Matt", "Chia seeds"),
    new Purchase(12.79, "For Matt", "Frozen 4 berry medley"),
    new Purchase(12.99, "For Matt", "Acai bowls"),
    new Purchase(6.99, "For Matt", "Organic strawberries"),
    new Purchase(5.79, "For Matt", "Tomato medley"),
    new Purchase(28.99, "For Matt", "Skrewball whiskey"),
    new Purchase(4.99, "For Matt", "Snap peas"),
    new Purchase(17.99, "Cats", "Puppy pads"),
    new Purchase(4.99, "For Matt", "Snap peas"),
    new Purchase(5.49, "For Matt", "Raspberries"),
    new Purchase(5.49, "For Matt", "Raspberries"),
    new Purchase(12.79, "Groceries", "Cashews"),
    new Purchase(9.99, "Groceries", "Lemon alfredo"),
    new Purchase(3.59, "Groceries", "Strawberries"),
    new Purchase(3.79, "Garden", "Crushed red pepper"),
    new Purchase(8.39, "Groceries", "Grated parmesan cheese"),
    new Purchase(8.69, "Groceries", "Life cereal"),
    new Purchase(6.49, "Groceries", "Mini naans"),
    new Purchase(5.79, "Groceries", "Fuji apples"),
    new Purchase(5.79, "Groceries", "Fuji apples"),
    new Purchase(11.99, "Groceries", "Spinach ravioli"),
    new Purchase(8.69, "Groceries", "Potatoes"),
    new Purchase(9.99, "Housewares", "Cooler bag"),
    new Purchase(7.58, "Groceries", "Tax")
]),

new ExternalTransaction(makeDate(2023, 7, 7), -102, Matt, chase, [
    new Purchase(-102, "For Matt", "Payback for 7/7 costco trip")
]),

new ExternalTransaction(makeDate(2023, 7, 8), -225, Madeline, chase, [
    new Purchase(-225, "Utilities", "Madeline july rent")
]),

new ExternalTransaction(makeDate(2023, 7, 8), 45.33, chewy, visa0078, [
    new Purchase(41.59, "Cats", "Cat food"),
    new Purchase(3.74, "Cats", "Tax")
]),

new ExternalTransaction(makeDate(2023, 7, 10), 61.74, costco, visa0078, [
    new Purchase(13.99, "For Matt", "Shredded parmesan"),
    new Purchase(5.49, "For Matt", "Raspberries"),
    new Purchase(7.99, "For Matt", "Raspberries"),
    new Purchase(6.99, "For Matt", "Sun chips"),
    new Purchase(9.99, "For Matt", "trail mix"),
    new Purchase(6.69, "Groceries", "Churro chips"),
    new Purchase(9.99, "Groceries", "Halloumi"),
    new Purchase(0.61, "Groceries", "Tax")
]),

new ExternalTransaction(makeDate(2023, 7, 10), -45, Matt, chase, [
    new Purchase(-45, "For Matt", "Payback for 7/10 costco")
]),

new ExternalTransaction(makeDate(2023, 7, 10), 8.84, menards, visa0078, [
    new Purchase(6.22, "Housewares", "Aluminum flats to make file rails from"),
    new Purchase(1.89, "Meridith Fun Money", "Calypso lemonade"),
    new Purchase(0.73, "Housewares", "Tax")
]),

new ExternalTransaction(makeDate(2023, 7, 11), 22.64, meijer, visa0078, [
    new Purchase(7.99, "Housewares", "File folders"),
    new Purchase(9.99, "Housewares", "Hanging files"),
    new Purchase(2.79, "Meridith Fun Money", "Altoids"),
    new Purchase(1.87, "Housewares", "Tax")
]),

new ExternalTransaction(makeDate(2023, 7, 13), 14.95, new Vendor("Folkwear patterns"), visa0078, [
    new Purchase(14.95, "Sewing", "Hakama pattern")
]),

new ExternalTransaction(makeDate(2023, 7, 13), -663, new Vendor("Star City Games"), visa0078, [
    new Purchase(-663, "Cats", "Sold magic cards to pay for Poki")
]),

new ExternalTransaction(makeDate(2023, 7, 14), 7.56, new Vendor("Home Depot"), visa0078, [
    new Purchase(6.94, "Housewares", "Aluminum flat"),
    new Purchase(0.62, "Housewares", "Tax")
]),

new ExternalTransaction(makeDate(2023, 7, 14), 18.00, new Vendor("Rinstorm"), visa0078, [
    new Purchase(18.00, "Car", "Car wash")
]),

new ExternalTransaction(makeDate(2023, 7, 18), 6.00, new Vendor("Mach1"), visa0078, [
    new Purchase(6.00, "Car", "Car wash")
]),

new ExternalTransaction(makeDate(2023, 7, 20), 114.63, meijer, visa0078, [
    new Purchase(38.97, "Housewares", "Fall themed trays"),
    new Purchase(3.99-1, "Housewares", "Discount scrunchies"),
    new Purchase(3.99-1, "Housewares", "Discount Scrunchies"),
    new Purchase(0.72, "Groceries", "Tomatoes"),
    new Purchase(1.59, "Groceries", "Pasta"),
    new Purchase(1.69, "Groceries", "Relish"),
    new Purchase(1.69, "Groceries", "Relish"),
    new Purchase(1.99, "Groceries", "Ranch dip"),
    new Purchase(2.00, "Groceries", "Cheddar cheese slices"),
    new Purchase(2.00, "Groceries", "Pepperjack cheese slices"),
    new Purchase(2.00, "Groceries", "colby jack cheese"),
    new Purchase(2.29, "Groceries", "Pretzels"),
    new Purchase(2.69, "Groceries", "Garlic bread slices"),
    new Purchase(2.79, "Groceries", "Pasta sauce"),
    new Purchase(3.19, "Groceries", "Shredded italian cheese"),
    new Purchase(3.85, "Groceries", "Cheddar smoked sausages"),
    new Purchase(3.87, "Groceries", "Chicken wings"),
    new Purchase(3.99, "Groceries", "Tater tots"),
    new Purchase(4.49, "Groceries", "Ricotta cheese"),
    new Purchase(5.79, "Groceries", "French fries"),
    new Purchase(7.99, "Groceries", "Turkey Burgers"),
    new Purchase(4.49, "Groceries", "Squeezable guacamole"),
    new Purchase(5.49, "Groceries", "Potato salad"),
    new Purchase(4.39, "Housewares", "9% sales tax"),
    new Purchase(0.61, "Groceries", "1% sales tax")
]),

new ExternalTransaction(makeDate(2023, 7, 20), 15.24, menards, visa0078, [
    new Purchase(13.98, "Housewares", "Water softener pellets")
]),

new ExternalTransaction(makeDate(2023, 7, 21), 61.04, new Vendor("Target"), visa0078, [
    new Purchase(61.04, "Housewares", "4x3 11 in cube shelves")
]),

new ExternalTransaction(makeDate(2023, 7, 23), 44.77, new Vendor("Kung fu tea"), visa0078, [
    new Purchase(13.95, "Dining", "Sushi burrito"),
    new Purchase(13.95, "Dining", "Sushi burrito"),
    new Purchase(6.15, "Dining", "Rose hip lemonade"),
    new Purchase(6.10, "Dining", "Almond milk tea"),
    new Purchase(4.62, "Dining", "Tax")
]),

new ExternalTransaction(makeDate(2023, 7, 24), 89.99, i3, chase, [
    new Purchase(89.99, "Utilities", "July internet bill")
]),

new ExternalTransaction(makeDate(2023, 7, 25), 36.69, costco, visa0078, [
    new Purchase(19.49, "Groceries", "Toilet paper"),
    new Purchase(9.99, "Groceries", "Chocolate chips"),
    new Purchase(7.49, "Groceries", "4 lbs pink lady apples"),
    new Purchase(2.72, "Groceries", "Tax")
]),

new ExternalTransaction(makeDate(2023, 7, 25), 21.16, joann, visa0078, [
    new Purchase(5.98, "Housewares", "Cube basket"),
    new Purchase(5.98, "Housewares", "Cube basket"),
    new Purchase(5.98, "Housewares", "Cube basket"),
    new Purchase(1.50, "Vishal Fun Money", "Bubble wand"),
    new Purchase(1.72, "Housewares", "Tax")
]),

new ExternalTransaction(makeDate(2023, 7, 28), 35.39, new Vendor("Harbor Freight"), visa8042, [
    new Purchase(12.99, "Both Fun Money", "De-Soldering kit for Dad's bday"),
    new Purchase(19.48, "Both Fun Money", "Soldering iron for dad's bday"),
    new Purchase(2.92, "Both Fun Money", "Tax")
]),

new ExternalTransaction(makeDate(2023, 7, 28), 40.80, chewy, visa0078, [
    new Purchase(37.43, "Cats", "Cat food"),
    new Purchase(3.37, "Cats", "Tax")
]),

new ExternalTransaction(makeDate(2023, 8, 1), -225, Madeline, chase, [
    new Purchase(-225, "Housing", "Madeline's August rent")
]),

new ExternalTransaction(makeDate(2023, 8, 4), 86.79, costco, visa0078, [
    new Purchase(8.99, "Groceries", "Kirkland smores bark"),
    new Purchase(12.49, "Groceries", "Salted Cashews in glass jar"),
    new Purchase(10.79, "Groceries", "Pineapple sauce packets"),
    new Purchase(19.99, "Groceries", "Apple sauce pouches"),
    new Purchase(9.49, "Groceries", "Almonds"),
    new Purchase(10.49, "Groceries", "Pancake puffs"),
    new Purchase(6.49, "Groceries", "4 lbs ENVY apples"),
    new Purchase(6.49, "Groceries", "4 lbs ENVY apples"),
    new Purchase(1.57, "Groceries", "taxes")
]),

new ExternalTransaction(makeDate(2023, 8, 8), -225, Neil, chase, [
    new Purchase(-225, "Housing", "Neil's August rent")
]),

t(makeDate(2023, 8, 8), 347.84, ameren, chase, [
    p(347.84, "Utilities", "Electrci for 7-23")
]),

new ExternalTransaction(makeDate(2023, 8, 10), 56.41, costco, visa8042, [
    new Purchase(16.69, "Groceries", "Ginger Beer"),
    new Purchase(6.69, "Groceries", "Churro strips"),
    new Purchase(14.99, "Groceries", "Harry Mac&cheese ?"), //TODO: Figure out what this is
    new Purchase(14.97, "Housewares", "Metal mixing bowl set")
]),

new ExternalTransaction(makeDate(2023, 8, 10), 40.55, sweetbasil, visa8042, [
    new Purchase(15.00, "Dining", "Cranberry nut pancakes"),
    new Purchase(16.00, "Dining", "Garlic crusted chicken panini"),
    new Purchase(2.79, "Dining", "taxes"),
    new Purchase(6.76, "Dining", "Tip")
]),

new ExternalTransaction(makeDate(2023, 8, 14), 55.00, new Vendor("La Bahia Grill"), visa8042, [
    new Purchase(8.00, "Dining", "Spicy guacamole"),
    new Purchase(14.50, "For Matt", "Chorizo Chicken"),
    new Purchase(10.00, "Dining", "Vegetarian Burrito"),
    new Purchase(12.00, "Dining", "Kwarachi with sour cream"),
    new Purchase(5.12, "Dining", "taxes"),
    new Purchase(6.38, "Dining", "Tip")
]),

new ExternalTransaction(makeDate(2023, 8, 15), 45.71, new Vendor("Pet Supplies Plus"), new Account("Visa 9721"), [
    new Purchase(1.97, "Cats", "Sale cat treat"),
    new Purchase(13.98, "Garden", "Bird seed"),
    new Purchase(25.98, "Cats", "Cat food")
]),

new ExternalTransaction(makeDate(2023, 8, 15), 7.00, new Vendor("Taco Bell"), new Account("Visa 9721"), [
    new Purchase(7.00, "Meridith Fun Money", "Quesadilla")
]),

new ExternalTransaction(makeDate(2023, 8, 16), 27.24, amazon, visa0078, [
    new Purchase(27.24, "Both Fun Money", "2 pack PLA filament")
]),

new ExternalTransaction(makeDate(2023, 8, 17), 32.08, joann, visa0078, [
    new Purchase(7.98, "Sewing", "24 ct Snaps"),
    new Purchase(19.47, "Sewing", "2.875 yards Microsuede to make test pants"),
    new Purchase(1.99, "Sewing", "Mens pants pattern"),
]),

new ExternalTransaction(makeDate(2023, 8, 17), 35.00, new Vendor("Outback steakhouse"), visa0078, [
    new Purchase(35.00, "Dining", "Dinner w/ Emma")
]),

new ExternalTransaction(makeDate(2023, 8, 18), 105.47, water, chase, [
    new Purchase(105.47, "Utilities", "July water bill")
]),

new ExternalTransaction(makeDate(2023, 8, 19), 8.79, menards, visa8042, [
    new Purchase(1.38, "Home Improvement", "Wallplate screws"),
    new Purchase(0.72, "Home Improvement", "Blank wall plate for cat sitting room"),
    new Purchase(3.97, "Housewares", "Measuring cup"),
    new Purchase(1.99, "Housewares", "Measuring spoon"),
    new Purchase(0.73, "Housewares", "9% sales tax")
]),

new ExternalTransaction(makeDate(2023, 8, 21), 192.25, costco, visa8042, [
    new Purchase(9.69, "For Matt", "Avocado packs"),
    new Purchase(14.79, "For Matt", "Egg bites"),
    new Purchase(6.49, "For Matt", "Raspberries"),
    new Purchase(4.99, "For Matt", "Strawberries"),
    new Purchase(11.99, "For Matt", "Figs"),
    new Purchase(12.39-3.70, "For Matt", "Blueberry acai bowls"),
    new Purchase(15.99, "Groceries", "Block sharp cheddar"),
    new Purchase(4.99, "Groceries", "3 pack whipped cream"),
    new Purchase(11.99, "Groceries", "Butternut squash ravioli"),
    new Purchase(9.99, "Groceries", "Choc chips"),
    new Purchase(11.99, "Groceries", "Vanilla extract"),
    new Purchase(11.99, "Groceries", "Marinara sauce"),
    new Purchase(6.99, "Groceries", "4 pack extra firm tofu"),
    new Purchase(8.49, "Groceries", "8 cans black beans"),
    new Purchase(13.89, "Groceries", "2 pack cauliflower frozen pizzas"),
    new Purchase(8.99, "Groceries", "4 lbs jazz apples"),
    new Purchase(4.99, "Groceries", "4 lbs jazz apples"),
    new Purchase(16.99, "Meridith Fun Money", "Tuxedo cake"),
    new Purchase(4.33, "Groceries", "taxes")
]),

new ExternalTransaction(makeDate(2023, 8, 21), -70, Matt, chase, [
    new Purchase(-70, "For Matt", "Payback for 8/21 costco trip")
]),

new ExternalTransaction(makeDate(2023, 8, 21), 43.15, new Vendor("Petsmart"), chase, [
    new Purchase(43.15, "Cats", "Payback to Matt for paying for cat food when card was declined")
]),

new ExternalTransaction(makeDate(2023, 8, 30), 282.62, costco, visa8042, [
    new Purchase(7.99, "For Matt", "4 bean salad"),
    new Purchase(19.99, "Groceries", "Toilet paper"),
    new Purchase(14.79, "For Matt", "Egg bites"),
    new Purchase(11.99, "For Matt", "Fig truffles"),
    new Purchase(11.79-3.80, "For Matt", "Variety wafer cookies"),
    new Purchase(10.79, "For Matt", "Strawberries"),
    new Purchase(4.49, "For Matt", "Blackberries"),
    new Purchase(2.29, "For Matt", "Raspberries"),
    new Purchase(2.29, "For Matt", "Raspberries"),
    new Purchase(5.99, "For Matt", "Strawberries"),
    new Purchase(9.79, "Groceries", "2 bottles lemon juice"),
    new Purchase(5.99, "Groceries", "Pre-popped kettle corn"),
    new Purchase(4.49, "Groceries", "6 lbs carrots"),
    new Purchase(13.89, "For Matt", "2 pack frozen cauliflower pizzas"),
    new Purchase(11.99-4, "For Varsha", "Dried mango"),
    new Purchase(8.39, "Groceries", "Grated parmesan"),
    new Purchase(13.99-4.30, "Groceries", "Mini babybel cheeses"),
    new Purchase(17.49, "Groceries", "Mac & cheese boxes"),
    new Purchase(19.99, "For Matt", "Coconut water"),
    new Purchase(4.99, "For Varsha", "2 dozen eggs"),
    new Purchase(12.49, "Groceries", "Frozen individual pizzas"),
    new Purchase(6.49, "Groceries", "turtle chips"),
    new Purchase(1.49, "For Varsha", "Bananas"),
    new Purchase(14.99, "For Varsha", "Cheezit packs"),
    new Purchase(9.99, "For Varsha", "Choc chips"),
    new Purchase(10.49, "Groceries", "Frozen veggie spring rolls"),
    new Purchase(7.99, "For Varsha", "12 bagels"),
    new Purchase(10.69, "Groceries", "Boursin variety"),
    new Purchase(2.29, "Groceries", "Raspberries"),
    new Purchase(2.29, "Groceries", "Raspberries"),
    new Purchase(5.99, "For Varsha", "Strawberries"),
    new Purchase(6.13, "Groceries", "taxes")
]),

new ExternalTransaction(makeDate(2023, 8, 30), -53, Matt, chase, [
    new Purchase(-53, "For Matt", "Payback for 8/30 costco trip")
]),

new ExternalTransaction(makeDate(2023, 9, 2), 53.14, new Vendor("Sweet Basil Cafe"), visa8042, [
    {price: 17.00, reason: "Dining", description: { name: "Philly Beef Sandwich", description: ""} },
    {price: 16.00, reason: "Dining", description: {name: "California Stuffed Cheesecake", description: ""} },
    {price: 6.00, reason: "Dining", description: {name:"Milkshake", description: ""} },
    {price: 3.51, reason: "Dining", description: {name: "Taxes", description: ""} },
    {price: 10.63, reason: "Dining", description: {name: "Tip", description: ""} },
].map(p => Purchase.fromConfig(p))),

new ExternalTransaction(makeDate(2023, 9, 2), 38.15, new Vendor("Walnut Street Tea Co."), visa8042, [
    Purchase.fromConfig({price: 35.00, reason: "Meridith Fun Money", description: {name: "Blue Zoku Water Bottle", description: ""} }),
    Purchase.fromConfig({price: 3.15, reason: "Meridith Fun Money", description: {name: "Taxes", description: ""} })
]),

new ExternalTransaction(makeDate(2023, 9, 5), 88.42, meijer, visa3408, [
    Purchase.fromConfig({price: 22.00, reason: "Clothes", description: {name: "OR BLTD MAXI DRESS", description: "Green Maxi Dress, returned"} }),
]),

new ExternalTransaction(makeDate(2023, 9, 5), 88.42, new Vendor("Meijer"), visa3408, [
    {price: 22.00, reason: "Clothes", description: {name: "OR BLTD MAXI DRESS", description: "Green Maxi Dress, returned"} },
    {price: 1.70, reason: "Groceries", description: {name: "CHILI BEANS", description:"8 oz canned chili beans"} },
    {price: 1.09, reason: "Groceries", description: {name: "DRY PASTA", description: ""} },
    {price: 1.09, reason: "Groceries", description: {name: "PASTA", description: ""} },
    {price: 1.59, reason: "Groceries", description: {name: "NOODLES", description: "Ramen Noodles"} },
    {price: 2.79, reason: "Groceries", description: {name: "HONEY WHEAT", description: "Wheat Bread"} },
    {price: 3.29, reason: "Groceries", description: {name: "LIFEWAY KEFIR", description: "Yogurt Drink"} },
    {price: 3.79, reason: "Groceries", description: {name: "MEIJER BUTTER", description: "Butter Sticks"} },
    {price: 4.69, reason: "Groceries", description: {name: "OVALTINE", description: ""} },
    {price: 4.99, reason: "Groceries", description: {name: "ICED COFFEE", description: ""} },
    {price: 6.49, reason: "Groceries", description: {name: "METHOD TUB TILE", description: "Bathroom Cleaner"} },
    {price: 6.69, reason: "Groceries", description: {name: "CEREAL", description: "Life Cinnamon Cereal"} },
    {price: 10.99, reason: "Cats", description: {name: "PRNA DRY CAT", description: "Emergency cat kibble"} },
    {price: 15.99, reason: "Cats", description: {name: "TIDY CATS", description: "Cat Litter"} },
    {price: 3.09, reason: "Meridith Fun Money", description: {name: "KETTLE CHIPS", description: "Kettle potato chips"} },
    {price: 4.75, reason: "Groceries", description: {name: "Taxes", description: ""} },
].map(p => Purchase.fromConfig(p))),

new ExternalTransaction(makeDate(2023, 9, 6), 322.57, ameren, chase, [
    new Purchase(322.57, "Utilities", "Electric for August 2023")
]),

new ExternalTransaction(makeDate(2023, 9, 6), 72.96, carle, chase, [
    new Purchase(72.96, "Health", "Carle appt copay")
]),


new ExternalTransaction(makeDate(2023, 9, 7), 41.26, new Vendor("Papa Dels"), visa3408, [
    Purchase.fromConfig({price: 41.26, reason: "Dining", description: {name: "Pizza dinner", description: ""}})
]),

new ExternalTransaction(makeDate(2023, 9, 8), 68.95, meijer, visa3408, [
    {price: 1.99, reason: "Home Improvement", description: {name: "POSTER TACK", description: "Sticky tack for cabinet labels"}},
    {price: 3.99, reason: "Home Improvement", description: {name: "WOOD SHAPES", description: "Wood shapes to make kitchen cabinet labels"}},
].map(p => Purchase.fromConfig(p))),

new ExternalTransaction(makeDate(2023, 9, 8), 68.95, new Vendor("Meijer"), visa3408, [
    {price: 1.99, reason: "Home Improvement", description: {name: "POSTER TACK", description: "Sticky tack for cabinet labels"}},
    {price: 3.99, reason: "Home Improvement", description: {name: "WOOD SHAPES", description: "Wood shapes to make kitchen cabinet labels"}},
    {price: 4.99, reason: "Meridith Fun Money", description: {name: "CRAFT WOOD", description: "Wooden box to put CCs in"}},
    {price: 1.09, reason: "Groceries", description: {name: "EGGS", description: "dozen eggs"}},
    {price: 3.38, reason: "Groceries", description: {name: "MILK", description: "2 gallons of 1% milk"}},
    {price: 1.79, reason: "Groceries", description: {name: "CREAM CHEESE", description: "8 oz cream cheese"}},
    {price: 2.29, reason: "Groceries", description: {name: "PRETZELS", description: ""}},
    {price: 2.39, reason: "Groceries", description: {name: "MEIJER SYRUP", description: "Sugar Pancake Syrup"}},
    {price: 2.48, reason: "Groceries", description: {name: "MILK", description: "Half gallon whole milk"}},
    {price: 3.69, reason: "Groceries", description: {name: "STRAWBERRIES", description: ""}},
    {price: 3.99, reason: "Groceries", description: {name: "PRETZEL STICKS", description: "Gluten free pretzels"}},
    {price: 5.19, reason: "Groceries", description: {name: "BLUEBERRIES", description: ""}},
    {price: 12.58, reason: "Groceries", description: {name: "BREAD MIX", description: "2 boxes Gluten free waffle mix"}},
    {price: 17.99, reason: "Groceries", description: {name: "MEIJER SYRUP", description: "16 oz jug Maple Syrup"}},
    {price: 2.69, reason: "Groceries", description: {name: "CANTALOUPES", description: "1 cantaloupe"}},
    {price: 6.99, reason: "Groceries", description: {name: "VEGGIE STRAWS", description: ""}},
    {price: 0.58, reason: "Groceries", description: {name: "1% Tax", description: ""}},
    {price: 0.86, reason: "Home Improvement", description: {name: "9% Tax", description: ""}}
].map(p => Purchase.fromConfig(p))),

new ExternalTransaction(makeDate(2023, 9, 8), 7.75, meijer, visa3408, [
    {price: 5.99, reason: "Housewares", description: {name: "R+R CFT PILLOW", description: "Pillow for guest room"}},
    {price: 1.12, reason: "Vishal Fun Money", description: {name: "XKITES", description: "Kite string reel"}},
    {price: 0.64, reason: "Housewares", description: {name: "9% tax", description: ""}}
].map(p => Purchase.fromConfig(p))),

new ExternalTransaction(makeDate(2023, 9, 8), 7.89, meijer, visa3408, [
    {price: 4.99, reason: "Housewares", description: {name: "VERSACHALK", description: "Liquid chalk marker"}},
    {price: 2.25, reason: "Housewares", description: {name: "SG CHALK EASEL", description: "Small chalk signs"}},
    {price: 0.65, reason: "Housewares", description: {name: "9% tax", description: ""}}
].map(p => Purchase.fromConfig(p))),

new ExternalTransaction(makeDate(2023, 9, 11), 35, new Vendor("Hair stylist"), chase, [
    new Purchase(35, "Health", "Haircut after hair donation")
]),

new ExternalTransaction(makeDate(2023, 9, 12), 120.00, costco, visa8042, [
    {price: 120.00, reason: "Groceries", description: {name: "EXGS RENEW", description: "Costco membership renewal"}}
].map(p => Purchase.fromConfig(p))),

new ExternalTransaction(makeDate(2023, 9, 12), 203.56, costco, visa3408, [
    {price: 10.79, reason: "For Matt", description: {name: "ORG STRAWBRRY", description: "Organic Strawberries"}},
    {price: 10.99, reason: "For Matt", description: {name: "PLACKERS FLS", description: ""}},
    {price: 11.99, reason: "For Matt", description: {name: "KS TRAIL MIX", description: ""}},
    {price: 14.79, reason: "For Matt", description: {name: "BRAZIL BITES", description: ""}},
    {price: 10.99, reason: "For Matt", description: {name: "DRIED LYCHEE", description: ""}},
    {price: 14.79, reason: "For Matt", description: {name: "EGG BITES", description: ""}},
    {price: 13.99, reason: "For Matt", description: {name: "ORG PB PWDR", description: "Peanut Butter Powder"}},
    {price: 4.69, reason: "For Matt", description: {name: "STRAWBERRIES", description: ""}},
    {price: 4.49, reason: "For Matt", description: {name: "BLACKBERRIES", description: ""}},
    {price: 2.29, reason: "For Matt", description: {name: "RASPBERRIES", description: ""}},
    {price: 27.98, reason: "For Embrys", description: {name: "GODOG TOY", description: "Dragon dog toys for Chai and Kona"}},
    {price: 9.99, reason: "Groceries", description: {name: "KS CHOC CHIP", description: "Chocolate Chips"}},
    {price: 12.49, reason: "Groceries", description: {name: "KS CASHEWS", description: ""}},
    {price: 9.49, reason: "Groceries", description: {name: "KS ALMONDS", description: ""}},
    {price: 11.99, reason: "Groceries", description: {name: "GOLDFISH 66Z", description: "Goldfish 3 pack"}},
    {price: 19.98, reason: BucketName.UNDEFINED, description: {name: "CV HC BOX", description: "Unknown"}},
    {price: 4.99, reason: "Groceries", description: {name: "KS WHIP CRM", description: "Whipped cream"}},
    {price: 6.85, reason: "Groceries", description: {name: "Taxes", description: ""}}
].map(p => Purchase.fromConfig(p))),

new ExternalTransaction(makeDate(2023, 9, 12), 61.00, new Vendor("Oishi Steakhouse"), visa3408, [
    {price: 16.00, reason: "For Matt", description: {name: "Matt's dinner", description: ""}},
    {price: 45.00, reason: "Dining", description: {name: "Dinner", description: "sushi and ginger tofu"}},
].map(p => Purchase.fromConfig(p))),

new ExternalTransaction(makeDate(2023, 9, 12), -105, Matt, chase, [
    new Purchase(-105, "For Matt", "Payback for dinner and costco")
]),

new ExternalTransaction(makeDate(2023, 9, 15), 52.11, new Vendor("Noodles & Company"), new Account("Venmo"), [
    new Purchase(3.71, "Dining", "Side of Wisconsin Mac & Cheese"),
    new Purchase(14.63, "Dining", "Regular Pesto Cavatapi sub spinach for mushrooms with tofu"),
    new Purchase(15.28, "Dining", "Regular Pesto cavatapi no mushrooms with parmesan crusted chicken"),
    new Purchase(7.48, "Dining", "Order of 6 cheesy garlic bread"),
    new Purchase(6.58, "Dining", "Uber Eats service fee"),
    new Purchase(4.73, "Dining", "taxes"),
    new Purchase(3.99, "Dining", "Delivery fee"),
    new Purchase(10.71, "Dining", "Tip"),
    new Purchase(-15, "Dining", "Coupon"),
]),

new ExternalTransaction(makeDate(2023, 9, 15), 250, Amit, chase, [
    new Purchase(250, "Education", "Student loan repayment")
]),

new ExternalTransaction(makeDate(2023, 9, 15), 100.80, water, chase, [
    new Purchase(100.80, "Utilities", "Water bill for August 2023")
]),

new ExternalTransaction(makeDate(2023, 9, 16), 56.45, new Vendor("Panera"), visa3408, [
    new Purchase(56.45, "Dining", "Dinner after spinal tap") //TODO: Is this health?
]),

new ExternalTransaction(makeDate(2023, 9, 18), 56.45, new Vendor("Panera via Paypal"), chase, [
    new Purchase(56.45, "Dining", "Dinner at Panera")
]),

new ExternalTransaction(makeDate(2023, 9, 19), 28.13, new Vendor("Culvers"), visa3408, [ //TODO: Is this health?
    new Purchase(5.69, "Dining", "Chicken sandwich"),
    new Purchase(5.09, "Dining", "Harvest Veggie Burger"),
    new Purchase(2.99, "Dining", "Large fries"),
    new Purchase(3.49, "Dining", "Medium onion rings"),
    new Purchase(4.49, "Dining", "Medium chocolate malt"),
    new Purchase(3.59, "Dining", "Small mango cooler"),
    new Purchase(2.79, "Dining", "taxes")
]),

new ExternalTransaction(makeDate(2023, 9, 22), 393.33, costco, visa3408, [
    {price: 17.49, reason: "For Varsha", description: {name: "MAC & CHEESE", description: "Mac and cheese boxes"}},
    {price: 10.99, reason: "For Varsha", description: {name: "KS CHS PIZZA", description: "Frozen cheese pizzas"}},
    {price: 45.99, reason: "Health", description: {name: "ORAL-B X-FIL", description: "Toothbrush heads"}},
    {price: 45.99, reason: "Health", description: {name: "ORAL-B X-FIL", description: "Toothbrush heads"}},
    {price: 69.99, reason: "Health", description: {name: "NORELCOC06800", description: "New shaver"}},
    {price: 11.99, reason: "For Varsha", description: {name: "KS SPIN RAV", description: "2 pack spinach ravioli"}},
    {price: 11.99, reason: "For Varsha", description: {name: "KS SPIN RAV", description: "2 pack spinach ravioli"}},
    {price: 8.49, reason: "For Varsha", description: {name: "ALLERCLR 365", description: "Allergy medicine"}},
    {price: 14.99, reason: "Groceries", description: {name: "KS GUAC", description: "Guacamole"}},
    new Purchase(4.79, "For Matt", "BLACKBERRIES"),
    new Purchase(4.99, "For Matt", "RASPBERRIES"),
    new Purchase(4.99, "For Matt", "RASPBERRIES"),
    new Purchase(9.49, "Groceries", "CRAN JAL DIP", "Cranberry Jalepeno dip"),
    new Purchase(8.49, "Groceries", "ONION GRUYER", "Onion gruyere dip"),
    new Purchase(15.99, "Groceries", "GINGER BEER"),
    new Purchase(7.49, "Groceries", "KS WALNUTS"),
    new Purchase(11.99, "For Varsha", "DRIED MANGO"),
    new Purchase(7.99, "For Varsha", "BAGELS"),
    new Purchase(9.99, "Groceries", "ORG STACY28Z", "Pita Chips"),
    new Purchase(6.49, "Groceries", "TURTLE CHIPS"),
    new Purchase(6.99, "Groceries", "ORG.FUJI BOX", "Fuji Apples"),
    new Purchase(19.49, "For Varsha", "**KS BATH**", "Toilet paper"),
    new Purchase(17.49, "For Varsha", "KS3PLYTISSUE"),
    new Purchase(19.16, "Groceries", "9% Tax"),
    new Purchase(1.60, "Groceries", "1% tax")
].map(p => Purchase.fromConfig(p))),

new ExternalTransaction(makeDate(2023, 9, 22), 30.00, cvs, visa3408, [
    new Purchase(10.00, "Health", "Acetalzolamide 15ct"),
    new Purchase(20.00, "Health", "Verapamil 90ct")
]),

new ExternalTransaction(makeDate(2023, 9, 23), 89.99, i3, chase, [
    new Purchase(89.99, "Utilities", "Gigabit internet")
]),

new ExternalTransaction(makeDate(2023, 9, 25), 17.03, new Vendor("Walgreens"), chase, [
    new Purchase(17.03, "Health", "Prescriptions")
]),

new ExternalTransaction(makeDate(2023, 9, 26), 28.00, new Vendor("Goodwill"), chase, [
    new Purchase(28.00, BucketName.UNDEFINED, "Scanners")
]),

new ExternalTransaction(makeDate(2023, 10, 2), 81.00, new Vendor("Aspen Tap House"), visa3408, [
    new Purchase(66.00, "Dining", "Dinner for V and M"),
    new Purchase(15.00, "For Anishi", "Dinner for Anishi")
]),

new ExternalTransaction(makeDate(2023, 10, 2), 114.25, costco, visa3408, [
    new Purchase(19.99, "Groceries", "GOGO SQUEEZE", "Applesauce Packets"),
    new Purchase(19.99, "For Anishi", "GOGO SQUEEZE", "Applesauce Packets"),
    new Purchase(14.99, "For Anishi", "KS COOK TIN", "Christmas Cookies"),
    new Purchase(14.99, "Meridith Fun Money", "KS COOK TIN", "Christmas Cookies"),
    new Purchase(39.99, "Housewares", "CUIS IMM BLE", "Immersion Blender"),
    new Purchase(3.60, "Housewares", "9% tax"),
    new Purchase(0.70, "Groceries", "1% tax")
]),

new ExternalTransaction(makeDate(2023, 10, 2), 33.46, new Vendor("Costco Gas"), visa3408, [
    new Purchase(33.46, "Car", "9.729 gallons at $3.439/gal")
]),

new ExternalTransaction(makeDate(2023, 10, 2), 29.77, new Vendor("Curtis Orchard"), visa8042, [
    new Purchase(10.00, "For Anishi", "Apples"),
    new Purchase(19.77, "Groceries", "Apples")
]),

new ExternalTransaction(makeDate(2023, 10, 2), 30.05, joann, visa3408, [
    new Purchase(20.98, "Sewing", "UNBLEACHED MUSLIN 120IN", "3 yards muslin"),
    new Purchase(6.59, "Sewing", "DRIT CURVED SAFETY PIN ASSORTMENT"),
    new Purchase(2.48, "Sewing", "Taxes"),
]),

new ExternalTransaction(makeDate(2023, 10, 2), -35, Ani, chase, [
    new Purchase(-35, "For Anishi", "Payback for costco")
]),

new ExternalTransaction(makeDate(2023, 10, 2), -25, Ani, chase, [
    new Purchase(-25, "For Anishi", "Payback for apples and dinner")
]),

new ExternalTransaction(makeDate(2023, 10, 3), 111.40, meijer, visa3408, [
    new Purchase(1.29, "For Varsha", "CLAB GIRL SODA", "Baking Soda"),
    new Purchase(1.29, "Groceries", "EGGS", "1 dozen eggs"),
    new Purchase(1.79, "Groceries", "MILK", "1 gallon 1% milk"),
    new Purchase(3.00, "For Varsha", "CREAM CHEESE", "2 8oz blocks cream cheese"),
    new Purchase(3.00, "Groceries", "CREAM CHEESE", "2 8oz blocks cream cheese"),
    new Purchase(1.79, "Groceries", "CONFCTION SUGA", "Powdered sugar"),
    new Purchase(1.95, "For Varsha", "MEIJER BREAD"),
    new Purchase(1.95, "For Varsha", "MEIJER BREAD"),
    new Purchase(2.75, "Groceries", "MJR PEPPERONI"),
    new Purchase(2.99, "Groceries", "CAULIFLOWER", "1 head cauliflower"),
    new Purchase(3.39, "For Varsha", "MEIJER CF EGGS"),
    new Purchase(3.49, "For Varsha", "BABY SPINACH"),
    new Purchase(7.38, "Groceries", "APPLE STRAWS", "2 bags cinnamon apple straws"),
    new Purchase(3.99, "Groceries", "ONIONS"),
    new Purchase(9.98, "Groceries", "FROZEN PIZZA", "2 tombstone pepperoni pizzas"),
    new Purchase(4.99, "For Varsha", "BLUEBERRIES"),
    new Purchase(5.29, "Meridith Fun Money", "MUFFIN CHOC", "Chocolate chip muffins"),
    new Purchase(10.78, "For Varsha", "COOKIE DOUGH", "2 tubes cookie dough"),
    new Purchase(5.89, "For Varsha", "TOMATOES"),
    new Purchase(9.29, "For Varsha", "MAPLE GROVE", "Maple syrup"),
    new Purchase(2.99, "Groceries", "POPEYE SPINACH"),
    new Purchase(6.58, "Groceries", "BOCA CRUMBLES", "2 bags boca soy crumbles"),
    new Purchase(3.99, "Groceries", "CHEESE"),
    new Purchase(3.99, "For Varsha", "CLEMENTINES"),
    new Purchase(4.99, "For Varsha", "SHREDDED CHEES", "Mexican shredded cheese"),
    new Purchase(1.10, "Groceries", "1% tax"),
    new Purchase(6.49, "Health", "DECONGESTANT")
]),

new ExternalTransaction(makeDate(2023, 10, 3), -16.79, meijer, visa3408, [
    new Purchase(-16.79, "Clothing", "Pink dress return")
]),

new ExternalTransaction(makeDate(2023, 10, 6), 256.35, ameren, chase, [
    new Purchase(256.35, "Utilities", "Electric bill for September"),
]),

new ExternalTransaction(makeDate(2023, 10, 6), 97.63, trash, chase, [
    new Purchase(97.63, "Utilities", "3 months trash service")
]),

new ExternalTransaction(makeDate(2023, 10, 7), 45.91, costco, visa8042, [
    new Purchase(11.99, "Groceries", "KS SPINACH RAV", "2 pack spinach ravioli"),
    new Purchase(8.99, "For Anishi", "KS BROC CHED", "Broccoli cheddar soup"),
    new Purchase(6.49, "Groceries", "TURTLE CHIPS"),
    new Purchase(17.99, "Groceries", "KS CASHEWS"),
    new Purchase(0.45, "Groceries", "1% tax")
]),

new ExternalTransaction(makeDate(2023, 10, 7), 37.00, new Vendor("El Toro"), visa3408, [
    new Purchase(31.20, "Dining", "Dinner"),
    new Purchase(5.80, "Dining", "Tip")
]),

new ExternalTransaction(makeDate(2023, 10, 13), 27.04, cvs, visa3408, [
    new Purchase(0.00, "Health", "Ubrelvy 10ct"),
    new Purchase(7.04, "Health", "Acetalzolamide 30ct"),
    new Purchase(10.00, "Health", "Bupropion 30ct"),
    new Purchase(10.00, "Health", "Buspirone 60ct")
]),

new ExternalTransaction(makeDate(2023, 10, 13), 9.89, cvs, visa3408, [
    new Purchase(8.79, "Health", "1mg Melatonin pills"),
    new Purchase(1.00, "Health", "5mg Melatonin pills"),
    new Purchase(0.10, "Health", "1% tax")
]),

new ExternalTransaction(makeDate(2023, 10, 13), 80.85, meijer, visa3408, [
    new Purchase(9.39, "Health", "BODY WASH"),
    new Purchase(9.39, "Health", "HERBAL ESS SH", "Shampoo"),
    new Purchase(1.18, "Groceries", "ONION LB"),
    new Purchase(1.49, "Groceries", "FROZEN PEAS"),
    new Purchase(1.79, "Groceries", "CELERY"),
    new Purchase(1.86, "Groceries", "POTATOES"),
    new Purchase(1.89, "Groceries", "LETTUCE"),
    new Purchase(3.19, "Groceries", "DRY PASTA"),
    new Purchase(3.69, "Groceries", "CANNED CHICKEN"),
    new Purchase(2.85, "Groceries", "COCKTAILS", "Grenadine"),
    new Purchase(4.29, "Groceries", "GINGER GROUND"),
    new Purchase(4.89, "Groceries", "STIR-IN PASTE", "Jalepeno Paste"),
    new Purchase(4.89, "Groceries", "STIR-IN PASTE", "Ginger paste"),
    new Purchase(4.89, "Groceries", "STIR-IN PASTE", "Garlic Paste"),
    new Purchase(4.99, "Groceries", "ICED COFFEE"),
    new Purchase(5.29, "Groceries", "WHIPPING CREAM"),
    new Purchase(5.44, "Groceries", "FUJI LB", "Fuji Apples"),
    new Purchase(7.15, "Groceries", "LEEKS"),
    new Purchase(1.69, "Health", "9% tax"),
    new Purchase(0.61, "Groceries", "1% tax")
]),

new ExternalTransaction(makeDate(2023, 10 ,16), 241.31, costco, visa3408, [
    new Purchase(16.99, "Cats", "KS PADS", "Puppy Pads"),
    new Purchase(14.79, "For Matt", "EGG BITES"),
    new Purchase(12.99, "For Matt", "KS FETA"),
    new Purchase(29.99, "For Matt", "KS PINE NUTS"),
    new Purchase(5.99, "For Matt", "TOMATO MEDLE"),
    new Purchase(3.99, "For Matt", "RASPBERRIES"),
    new Purchase(3.99, "For Matt", "RASPBERRIES"),
    new Purchase(15.89, "Groceries", "PUPUSAS", "Shredded beef pupusas"),
    new Purchase(13.99, "Groceries", "PUPUSAS", "Bean pupusas"),
    new Purchase(9.99, "Groceries", "KS CHOC CHIP", "Chocolate Chips"),
    new Purchase(9.49, "Groceries", "KS ALMONDS"),
    new Purchase(11.99, "Housewares", "#M SONGE X24", "Sponges"),
    new Purchase(3.99, "Groceries", "4LB JAZZ", "Jazz apples"),
    new Purchase(4.99, "Groceries", "4LB AMBROSIA", "Ambrosia Apples"),
    new Purchase(19.99, "Both Fun Money", "KS CHOC. BAG", "Chocolate Halloween Candy"),
    new Purchase(19.99, "Both Fun Money", "KS CHOC. BAG", "Chocolate Halloween Candy"),
    new Purchase(5.89, "Groceries", "STRAWBERRIES"),
    new Purchase(15.99, "Both Fun Money", "KS FUNHOUSE", "Halloween Candy"),
    new Purchase(15.99, "Both Fun Money", "KS FUNHOUSE", "Halloween Candy"),
    new Purchase(5.40, "Groceries", "Taxes")
]),

new ExternalTransaction(makeDate(2023, 10, 16), -75, Matt, chase, [
    new Purchase(-75, "For Matt", "Costco Payback")
]),

new ExternalTransaction(makeDate(2023, 10, 16), 250, Amit, chase, [
    new Purchase(250.00, "Education", "Student loan repayment")
]),

new ExternalTransaction(makeDate(2023, 10, 17), 50.00, elliot, visa3408, [
    new Purchase(50.00, "Health", "Mental health nurse appt copay")
]),

new ExternalTransaction(makeDate(2023, 10, 18), 50.00, elliot, visa3408, [
    new Purchase(50.00, "Health", "Therapy copay")
]),

new ExternalTransaction(makeDate(2023, 10, 19), 6.00, cvs, visa3408, [
    new Purchase(6.00, "Health", "Sertraline 90ct")
]),

new ExternalTransaction(makeDate(2023, 10, 19), 115.66, meijer, visa3408, [
    new Purchase(11.99, "Housewares", "2 BU LAMPER", "Laundry Hamper"),
    new Purchase(19.99, "Both Fun Money", "BLU-RAY", "Across the spiderverse bluray"),
    new Purchase(10.78, "Health", "RICOLA DROPS"),
    new Purchase(1.59, "Groceries", "PIZZA SAUCE"),
    new Purchase(1.99, "Groceries", "DIP RFRG DAIRY", "Ranch dip"),
    new Purchase(2.29, "Groceries", "PRETZELS"),
    new Purchase(2.29, "Groceries", "PRETZEL TWISTS"),
    new Purchase(2.64, "Groceries", "MILK", "1 gallon 1% milk"),
    new Purchase(2.50, "Groceries", "SIMPLY LEMONAD", "Raspberry lemonade"),
    new Purchase(2.50, "Groceries", "LEMONADE"),
    new Purchase(3.99, "Groceries", "FROZEN POTATO"),
    new Purchase(3.99, "Groceries", "PRETZEL BUN"),
    new Purchase(5.79, "Cats", "WOOLITE PET", "Pet cleaner"),
    new Purchase(5.99, "Groceries", "RINSE AID"),
    new Purchase(3.89, "Groceries", "METHOD TUB TIL", "Bathroom Cleaner"),
    new Purchase(10.99, "Groceries", "M MEYER CLEAN", "All-purpose cleaner concentrate"),
    new Purchase(15.99, "Cats", "TIDY CATS", "Cat litter"),
    new Purchase(7.17, "Housewares", "9% tax"),
    new Purchase(0.30, "Groceries", "1% tax")
]),

new ExternalTransaction(makeDate(2023, 10, 19), 44.00, new Vendor("Urbana Family Dental"), visa3408, [
    new Purchase(44.00, "Health", "Teeth cleaning/sealing")
]),

new ExternalTransaction(makeDate(2023, 10, 19), 75.75, water, chase, [
    new Purchase(75.75, "Utilities", "Water bill for september 2023")
]),

new ExternalTransaction(makeDate(2023, 10, 20), 31.26, new Vendor("Annapoorna Stores"), visa8042, [
    new Purchase(9.99, "Groceries", "DEEP FAMILY PACK PARA", "Paratha"),
    new Purchase(2.99, "Groceries", "HALDIRAM ALOO KULCHA", "Aloo Kulcha frozen"),
    new Purchase(11.99, "Groceries", "SPINACH PANEER SAMOSA", "Saag Paneer Samosas"),
    new Purchase(2.99, "Groceries", "MTR PANEER BUTTER MAS", "Microwave paneer butter masala"),
    new Purchase(2.99, "Groceries", "MTR DAL FRY", "Microwave dal fry"),
    new Purchase(0.31, "Groceries", "Taxes")
]),

new ExternalTransaction(makeDate(2023, 10, 20), 93.69, chewy, visa3408, [
    new Purchase(5.48, "Cats", "Catnip flavor greenies"),
    new Purchase(5.49, "Cats", "Shrimp flavor greenies"),
    new Purchase(5.48, "Cats", "Salmon flavor greenies"),
    new Purchase(74.98, "Cats", "16 lbs purina LiveClear Salmon & Rice"),
    new Purchase(-5.48, "Cats", "Buy 2 get one free treat promo"),
    new Purchase(7.74, "Cats", "taxes")
]),

new ExternalTransaction(makeDate(2023, 10, 20), 16.61, new Vendor("Fresh International"), visa3408, [
    new Purchase(2.49, "Groceries", "Soybean Sprouts 12oz"),
    new Purchase(3.79, "Groceries", "Black Garlic Oil Noodle Soup"),
    new Purchase(4.99, "For Matt", "Szechuan Peppers"),
    new Purchase(2.99, "Groceries", "Mochiko Sweet Rice Flour"),
    new Purchase(2.19, "For Matt", "Dried Red Bean 12oz"),
    new Purchase(0.16, "Groceries", "taxes")
]),

new ExternalTransaction(makeDate(2023, 10, 20), 70.41, sushikame, visa3408, [
    new Purchase(8.95, "Dining", "Soft Shell crab roll"),
    new Purchase(5.50, "Dining", "Sweet potato roll"),
    new Purchase(13.50, "Dining", "Katsu Don"),
    new Purchase(13.50, "Dining", "Mai Mai roll (veggie tempura)"),
    new Purchase(7.50, "Dining", "Veggie Tempura"),
    new Purchase(9.00, "Dining", "2 potato korokkes"),
    new Purchase(5.80, "Dining", "Tip"),
    new Purchase(6.66, "Dining", "taxes")
]),

new ExternalTransaction(makeDate(2023, 10, 23), 65.60, meijer, visa3408, [
    new Purchase(2.98, "Fish", "FLOWER POT 4.3"),
    new Purchase(3.98, "Fish", "FLOWER POT 6 IN"),
    new Purchase(2.99, "Fish", "CONE POT 6.3 IN"),
    new Purchase(4.69, "Fish", "FLOWER POT8.25"),
    new Purchase(11.99, "Meridith Fun Money", "CERAMIC PLANTE", "Scanned on accident ceramic planter"),
    new Purchase(0.69, "Groceries", "MUSTARD"),
    new Purchase(2.62, "Groceries", "MILK", "1 gallon 1% milk"),
    new Purchase(3.35, "Groceries", "CORNMEAL"),
    new Purchase(3.99, "Groceries", "BROWN SUGAR"),
    new Purchase(3.99, "Groceries", "FRZ FRENCH FRIE", "French fries"),
    new Purchase(4.00, "Groceries", "SLICE CHEESE", "Sliced Pepperjack"),
    new Purchase(4.00, "Groceries", "SLICE CHEESE", "Sliced cheddar"),
    new Purchase(4.99, "Groceries", "ICED COFFEE"),
    new Purchase(5.29, "Groceries", "SEASONING MIX"),
    new Purchase(3.29, "Groceries", "FREDERIKS BUNS", "Burger buns"),
    new Purchase(2.40, "Fish", "9% tax"),
    new Purchase(0.36, "Groceries", "1% tax")
]),

new ExternalTransaction(makeDate(2023, 10, 23), 39.86, new Vendor("Meijer Gas"), visa3408, [
    new Purchase(39.86, "Car", "11.937 gal of gas at $3.539/gal")
]),

new ExternalTransaction(makeDate(2023, 10, 23), 11.70, new Vendor("Slim Chickens"), visa3408, [
    new Purchase(11.70, "Meridith Fun Money", "Lunch with Emma")
]),

new ExternalTransaction(makeDate(2023, 10, 25), 50.00, elliot, visa3408, [
    new Purchase(50.00, "Health", "Therapy copay")
]),

new ExternalTransaction(makeDate(2023, 10, 25), 89.99, i3, chase, [
    new Purchase(89.99, "Utilities", "Gigabit internet for november 2023")
]),

new ExternalTransaction(makeDate(2023, 10, 26), 15.30, new Vendor("Panera"), visa3408, [
    new Purchase(4.99, "Groceries", "1 Clssc Sourdough Loaf"),
    new Purchase(3.99, "Dining", "1 Chocolate Croissant"),
    new Purchase(3.99, "Dining", "1 Pecan Braid"),
    new Purchase(2.33, "Dining", "Tax and tip")
]),

new ExternalTransaction(makeDate(2023, 10, 27), 32.45, new Vendor("Schnucks"), visa3408, [
    new Purchase(5.99, "Health", "RICOLA ORG HRB DRP 45CT"),
    new Purchase(5.99, "Health", "RICOLA ORG HRB DRP 45CT"),
    new Purchase(3.00, "Groceries", "GM RESSE PNUT BTR PUFFS", "Reeses puffs cereal"),
    new Purchase(3.99, "Meridith Fun Money", "NAB FMSZ OREO MINT"),
    new Purchase(2.19, "Groceries", "SCH RSTRNT TORT CHIPS", "Tortilla chips"),
    new Purchase(4.99, "Groceries", "LOF AHA ROASTED TURKEY", "Turkey lunch meat"),
    new Purchase(2.99, "Groceries", "BGLBITE CHEZ/PEPPER", "Pepperoni Bagel Bites"),
    new Purchase(2.99, "Groceries", "BGLBITE CHEZ/PEPPER", "Pepperoni Bagel Bites"),
    new Purchase(0.32, "Groceries", "1% tax")
]),

new ExternalTransaction(makeDate(2023, 10, 28), 63.75, new Vendor("Kohls"), visa3408, [
    new Purchase(29.99, "Clothing", "Leggings"),
    new Purchase(29.99, "Clothing", "Leggings"),
    new Purchase(3.75, "Clothing", "taxes")
]),

new ExternalTransaction(makeDate(2023, 10, 29), 173.36, costco, visa3408, [
    new Purchase(7.99, "Groceries", "POPCORN ZEBRA"),
    new Purchase(17.99, "Groceries", "KS CASHEWS"),
    new Purchase(11.99, "For Varsha", "DRIED MANGO"),
    new Purchase(5.79, "For Varsha", "KS TORTILLA", "Tortilla Chips"),
    new Purchase(8.99, "For Varsha", "BLUEBERRIES"),
    new Purchase(6.39, "For Varsha", "AVOCADOS"),
    new Purchase(3.99, "Groceries", "STRAWBERRIES"),
    new Purchase(8.49, "Groceries", "BLACK BEANS"), // TODO: Make items able to be in multiple buckets, Bucket should be split 3/4 Groceries and 1/4 for Varsha
    new Purchase(11.99, "For Varsha", "KS SPIN RAV", "Spinach Ravioli 2 pack"),
    new Purchase(11.99, "Groceries", "KS SPIN RAV", "Spinach Ravioli 2 pack"),
    new Purchase(9.99, "Groceries", "KS WHIP CRM", "Whipped Cream"),
    new Purchase(3.99, "For Varsha", "ORG SPINACH"),
    new Purchase(7.99, "Groceries", "ORG. FUJI BOX", "4 lb Fuji Apples"),
    new Purchase(7.99, "Groceries", "ORG. FUJI BOX", "4 lb Fuji Apples"),
    new Purchase(7.99, "For Varsha", "BAGELS"),
    new Purchase(7.29, "For Varsha", "MANDARINS"),
    new Purchase(4.19, "For Varsha", "SPRING MIX"),
    new Purchase(12.99, "Groceries", "KS BUTTER", "Salted butter 4 1lb packs"), // TODO: Bucket Should be 3/4 Groceries 1/4 for Varsha
    new Purchase(12.99, "Groceries", "KS U/S QTRS", "Unsalted butter 4 1lb packs"),
    new Purchase(2.35, "Groceries", "1% tax")
]),

new ExternalTransaction(makeDate(2023, 10, 29), 47.72, costco, visa3408, [
    new Purchase(14.79, "For Matt", "EGG BITES"),
    new Purchase(10.99, "Groceries", "CHOC STRBRY", "Chocolate covered strawberries"),
    new Purchase(9.49, "For Varsha", "BASIL PESTO"),
    new Purchase(8.99, "For Matt", "ORG RASPBERY", "Organic raspberries"),
    new Purchase(2.99, "For Matt", "RASPBERRIES"),
    new Purchase(0.47, "Groceries", "1% tax")
]),

new ExternalTransaction(makeDate(2023, 10, 29), 86.42, meijer, visa3408, [
    new Purchase(1.58, "For Varsha", "Cucumbers", "2 cucumbers"),
    new Purchase(1.19, "Groceries", "Eggs", "1 dozen eggs"),
    new Purchase(1.29, "For Varsha", "Carrots", "Baby carrots"),
    new Purchase(3.30, "For Varsha", "Peppers", "2 Bell Pepeprs"),
    new Purchase(1.79, "For Varsha", "Milk", "1/2 gal whole milk"),
    new Purchase(3.00, "For Varsha", "Cream Cheese", "2 8 oz blocks of cream cheese"),
    new Purchase(5.24, "Groceries", "Milk", "2 gallons 1% milk"),
    new Purchase(2.89, "For Varsha", "Celery Hearts"),
    new Purchase(2.99, "For Varsha", "Meijer CF Eggs"),
    new Purchase(3.29, "For Varsha", "Granulated sugar", "4 lbs white sugar"),
    new Purchase(3.49, "For Varsha", "Tomatoes", "Roma tomatoes"),
    new Purchase(3.69, "For Varsha", "Noodle Soup", "6 pack ramen"),
    new Purchase(4.19, "For Varsha", "Salad dressing"),
    new Purchase(5.89, "For Varsha", "Tomatoes", "Cherry Tomato medley"),
    new Purchase(7.89, "For Varsha", "Shredded Cheese", "1 lb mexican blend cheese"),
    new Purchase(8.79, "For Varsha", "Nutella"),
    new Purchase(13.49, "For Varsha", "Meijer Fruit"),
    new Purchase(3.49, "For Varsha", " LPC Little tri color potatoes"),
    new Purchase(3.59, "Groceries", "Pepperidge farm mini sausages"),
    new Purchase(4.99, "Groceries", "Earth Balance spread"),
    new Purchase(0.86, "For Varsha", "1% tax")
]),

new ExternalTransaction(makeDate(2023, 10, 29), 7.76, menards, visa3408, [
    new Purchase(5.16, "Home Improvement", "Coupling nut .7 4mm", "4 coupling nuts for living room light fixture"),
    new Purchase(1.96, "Home Improvement", "Hxcap SW 4mm x 0.70 x 12mm m", "4 hexcap screws for living room light fixture"),
    new Purchase(0.64, "Home Improvement", "9% tax")
]),

new ExternalTransaction(makeDate(2023, 10, 31), 15.16, meijer, visa3408, [
    new Purchase(7.29, "Both Fun Money", "Halloween candy", "2 bags GF apple lollipops"),
    new Purchase(10.58, "Both Fun Money", "Halloween candy", "2 bags junior mints (GF)"),
    new Purchase(1.29, "Both Fun Money", "9% tax")
]),

new ExternalTransaction(makeDate(2023, 11, 3), 60.86, new Vendor("Chilis"), visa3408, [
    new Purchase(9.99, "Dining", "Dip trio"),
    new Purchase(19.99, "Dining", "steakhouse combo"),
    new Purchase(14.29, "Dining", "Santa Fe Burger"),
    new Purchase(0.64, "Dining", "Round up donation"),
    new Purchase(5.09, "Dining", "taxes"),
    new Purchase(10.86, "Dining", "Tip")
]),

new ExternalTransaction(makeDate(2023, 11, 3), 191.34, ameren, chase, [
    new Purchase(191.34, "Utilities", "Electric bill for 10-23")
]),

new ExternalTransaction(makeDate(2023, 11, 3), 18.60, meijer, visa3408, [
    new Purchase(0.79, "Groceries", "Salt", "Iodized salt"),
    new Purchase(4.95, "Groceries", "Peppers", "2 bell peppers"),
    new Purchase(4.99, "Groceries", "Baking Yeast"),
    new Purchase(7.69, "Groceries", "Chunk cheese", "1/2 lb block cheddar"),
    new Purchase(0.18, "Groceries", "1% tax")
]),

new ExternalTransaction(makeDate(2023, 11, 4), -3.50, new Vendor("Nick Inocencio"), chase, [
    new Purchase(-3.50, BucketName.UNDEFINED, "Venmo payment for ??") //TODO: Figure out what Nick paid me for
]),

new ExternalTransaction(makeDate(2023, 11, 5), 26.24, amazon, discover, [
    new Purchase(10.00, "Housewares", "2 sets chip clips (approx)"),
    new Purchase(16.24, "Housewares", "Vishal's new laptop charger (approx)")
]),

new ExternalTransaction(makeDate(2023, 11, 6), 81.93, meijer, visa3408, [
    new Purchase(10.78, "Health", "Ricola cough drops"),
    new Purchase(8.39, "Health", "Condoms"),
    new Purchase(9.99, "Health", "Razor Blades", "Replacement Shaving blades"),
    new Purchase(1.58, "Groceries", "Large garlic", "2 large garlic bulbs"),
    new Purchase(1.09, "Groceries", "Dry pasta"),
    new Purchase(1.15, "Groceries", "Marshmallows", "Large marshmallows"),
    new Purchase(1.48, "Groceries", "Eggplant"),
    new Purchase(2.29, "Groceries", "Shredded Cheese", "Shredded italian blend cheese"),
    new Purchase(2.62, "Groceries", "Milk", "1 gallon 1% milk"),
    new Purchase(2.95, "Groceries", "Whipping cream"),
    new Purchase(3.62, "Groceries", "Potatoes", "Russet Potatoes"),
    new Purchase(3.69, "Groceries", "Cereal", "Reese's puffs cereal"),
    new Purchase(7.38, "Groceries", "Garlic bread", "2 loaves garlic bread"),
    new Purchase(6.69, "Groceries", "Cereal", "Mega box honey bunches of oats"),
    new Purchase(10.88, "Groceries", "Chicken thighs"),
    new Purchase(1.76, "Health", "9% tax"),
    new Purchase(0.60, "Groceries", "1% tax")
]),

new ExternalTransaction(makeDate(2023, 11, 7), 164.09, costco, visa3408, [
    new Purchase(15.99, "Groceries", "Ginger beer"),
    new Purchase(7.49, "Groceries", "KS Walnuts"),
    new Purchase(9.99, "Groceries", "KS Choc Chip", "Chocolate chips"),
    new Purchase(10.99, "Groceries", "P&C Pierogi", "Cheese and potato pierogis"),
    new Purchase(5.99, "Groceries", "Cntry French", "Loaf of french bread"), //TODO: Should be split 1/2 For Matt 1/2 Groceries
    new Purchase(14.79, "For Matt", "Egg bites"),
    new Purchase(5.99, "For Matt", "KS Guacamole"),
    new Purchase(9.99, "For Matt", "KS HM mix"),
    new Purchase(11.99, "For Matt", "Rana Ravioli", "butternut squash ravioli"),
    new Purchase(8.99, "For Matt", "Organic Raspberries"),
    new Purchase(2.99, "For Matt", "Raspberries"),
    new Purchase(9.99, "Groceries", "Organic Strawberries"),
    new Purchase(5.99, "For Matt", "Organic Cucumber"),
    new Purchase(3.78, "For Matt", "9% tax"),
    new Purchase(1.17, "Groceries", "1% tax")
]),

new ExternalTransaction(makeDate(2023, 11, 7), -118, Matt, chase, [
    new Purchase(-118, "For Matt", "Costco 11/7 payback")
]),

new ExternalTransaction(makeDate(2023, 11, 7), 1.68, costco, visa3408, [
    new Purchase(1.68, "Dining", "Hot dog")
]),

new ExternalTransaction(makeDate(2023, 11, 8), 50.00, elliot, visa3408, [
    new Purchase(50.00, "Health", "Therapy copay")
]),

new ExternalTransaction(makeDate(2023, 11, 9), 60, new Vendor("Facebook Marketplace"), new Account("Chase Checking"), [
    new Purchase(60.00, "Vishal Fun Money", "Router Table")
]),

new ExternalTransaction(makeDate(2023, 11, 10), 18.65, new Vendor("Dunkin Donuts"), visa3408, [
    new Purchase(2.69, "Dining", "Coffee Cake muffin"),
    new Purchase(1.00, "Dining", "French cruller donut"),
    new Purchase(1.64, "Dining", "Maple frosted donut"),
    new Purchase(3.49, "Dining", "Mocha iced coffee"),
    new Purchase(6.39, "Dining", "Maple bacon croissant sandwich"),
    new Purchase(1.59, "Dining", "Hash browns"),
    new Purchase(1.85, "Dining", "Taxes")
]),

new ExternalTransaction(makeDate(2023, 11, 10), 80.05, meijer, visa3408, [
    new Purchase(7.49, "Meridith Fun Money", "Burts bees", "Unknown burts bees product"),
    new Purchase(8.00, "Meridith Fun Money", "Jewelry", "Small earring hoops"),
    new Purchase(4.19, "Meridith Fun Money", "Bubble bath"),
    new Purchase(5.79, "Housewares", "Bath cleaner"),
    new Purchase(15.99, "Cats", "Tidy cats", "Lemongrass cat litter"),
    new Purchase(41.98, "Cats", "Tidy cats", "Comfort care litter"),
    new Purchase(-10.00, "Cats", "Cat litter discount"),
    new Purchase(6.61, "Meridith Fun Money", "9% tax")
]),

new ExternalTransaction(makeDate(2023, 11, 12), 30.00, new Vendor("IL Tollway"), visa3408, [
    new Purchase(20.00, "Car", "IPASS transponder"),
    new Purchase(10.00, "Car", "Credit on IPASS")
]),

new ExternalTransaction(makeDate(2023, 11, 13), 217.99, amazon, visa3408, [
    new Purchase(217.99, "Car", "Dash cam")
]),

new ExternalTransaction(makeDate(2023, 11, 13), 19.00, new Vendor("El Toro"), visa3408, [
    new Purchase(15.60, "Meridith Fun Money", "Lunch w/ Emma"),
    new Purchase(3.40, "Meridith Fun Money", "Tip")
]),

new ExternalTransaction(makeDate(2023, 11, 13), 62.11, meijer, visa3408), // TODO: Find detailed receipt (this was printed as a "short receipt")

new ExternalTransaction(makeDate(2023, 11, 14), 24.70, new Vendor("Portillos"), visa3408, [
    new Purchase(3.89, "Dining", "Hot dog"),
    new Purchase(3.69, "Dining", "Large fries"),
    new Purchase(4.19, "Dining", "Garden dog"),
    new Purchase(10.38, "Dining", "2 peppermint cake shakes"),
    new Purchase(2.55, "Dining", "Taxes")
]),

new ExternalTransaction(makeDate(2023, 11, 15), 44.46, costco, visa3408, [
    new Purchase(17.99, "Housewares", "Measure set", "nesting measuring cups"),
    new Purchase(15.98, "Groceries", "4lb organic honeycrisp apples"),
    new Purchase(7.99, "Groceries", "Popcorn Zebra"),
    new Purchase(2.34, "Housewares", "9% tax"),
    new Purchase(0.16, "Groceries", "1% tax")
]),

new ExternalTransaction(makeDate(2023, 11, 15), 250, Amit, chase, [
    new Purchase(250, "Education", "Student loan repayment")
]),

new ExternalTransaction(makeDate(2023, 11, 15), 35.65, new Vendor("Costco Gas"), visa3408, [
    new Purchase(35.65, "Car", "11.143 gallons of gas at $3.199/gal")
]),

new ExternalTransaction(makeDate(2023, 11, 15), -35759, new Vendor("Busey Bank"), chase, [
    new Purchase(-34750, BucketName.UNDEFINED, "HEL Disbursement")
]),

new ExternalTransaction(makeDate(2023, 11, 16), 73.57, water, chase, [
    new Purchase(73.57, "Utilities", "Water bill for October")
]),

new ExternalTransaction(makeDate(2023, 11, 16), 165.74, carle, chase, [
    new Purchase(165.74, "Health", "Carle Payment plan for MRI")
]),

new ExternalTransaction(makeDate(2023, 11, 17), 63.31, meijer, visa3408, [
    new Purchase(0.73, "Groceries", "Tomatoes", "Roma tomatoes"),
    new Purchase(0.88, "Groceries", "Sweet Potato"),
    new Purchase(3.98, "Groceries", "XL avocados", "2 avocados"),
    new Purchase(2.29, "Groceries", "Canned chili"),
    new Purchase(2.69, "Groceries", "Olives"),
    new Purchase(2.99, "Groceries", "Mushrooms"),
    new Purchase(3.49, "Groceries", "Baby spinach"),
    new Purchase(5.00, "Groceries", "Bagel bites"),
    new Purchase(8.35, "Groceries", "Potatoes", "Russet potatoes"),
    new Purchase(11.49, "Groceries", "Ground beef, 2.5 lbs"),
    new Purchase(1.88, "Groceries", "Cheese"),
    new Purchase(1.99, "Groceries", "Cut herbs", "chives"),
    new Purchase(3.99, "Groceries", "Meijer bacon"),
    new Purchase(3.99, "Groceries", "Iced Coffee"),
    new Purchase(6.99, "Groceries", "Dip", "Spinach artichoke dip"),
    new Purchase(0.63, "Groceries", "1% tax")
]),

new ExternalTransaction(makeDate(2023, 11, 18), 99.21, meijer, visa3408, [
    new Purchase(6.99, "Housewares", "Water Bottle Brush"),
    new Purchase(-3.49, "Housewares", "50% off 2 water bottles discount"),
    new Purchase(33.98, "Housewares", "2 16oz Metal Water bottles"),
    new Purchase(-8.50, "Housewares", "50% off 2 water bottles discount"),
    new Purchase(20.99, "Housewares", "Large Purple Metal Water bottle"), //TODO: Unknown bottle volume
    new Purchase(22.99, "Housewares", "Safety Can Opener"),
    new Purchase(9.09, "Both Fun Money", "Nightmare Before Christmas Mug for Emily"),
    new Purchase(-2.27, "Both Fun Money", "Sale price discount on mug for Emily"),
    new Purchase(1.36, "Groceries", "1 lb onions"),
    new Purchase(3.29, "Groceries", "4 lb granulated sugar"),
    new Purchase(3.49, "Groceries", "16 oz bacon"),
    new Purchase(3.99, "Groceries", "Reese's Puffs"),
    new Purchase(0.12, "Groceries", "1% tax"),
    new Purchase(7.18, "Housewares", "9% tax")
]),

new ExternalTransaction(makeDate(2023, 11, 20), 81.86, new Vendor("China Town Buffet"), visa8042, [
    new Purchase(66.86, "Dining", "Xavior's B-day dinner"),
    new Purchase(15.00, "Dining", "Tip")
]),

new ExternalTransaction(makeDate(2023, 11, 21), 32.58, amazon, visa3408, [
    new Purchase(32.58, "Both Fun Money", "Rotary cutter set for Ani")
]),

new ExternalTransaction(makeDate(2023, 11, 22), 16.12, cvs, visa3408, [
    new Purchase(14.79, "Health", "Foam Earplugs"),
    new Purchase(1.33, "Health", "9% tax")
]),

new ExternalTransaction(makeDate(2023, 11, 22), 0, cvs, visa3408, [
    new Purchase(0, "Health", "Ubrelvy")
]),

new ExternalTransaction(makeDate(2023, 11, 22), 64.97, joann, visa3408, [
    new Purchase(15.88+0.99+0.99+27.79, "Sewing", "13 yards green glowing star fabric"),
    new Purchase(1.99, "Both Fun Money", "Pattern for Ani's gift"),
    new Purchase(2.99, "Both Fun Money", "Beads for Mummy's gift"),
    new Purchase(2.99, "Both Fun Money", "Shell beads for Mummy's gift"),
    new Purchase(2.99, "Both Fun Money", "Hematite beads for Mummy's gift"),
    new Purchase(2.99, "Both Fun Money", "Agate beads for Mummy's gift"),
    new Purchase(3.75, "Sewing", "taxes")
]),

new ExternalTransaction(makeDate(2023, 11, 27), 32.95, new Vendor("Etsy"), visa3408, [
    new Purchase(32.95, "Both Fun Money", "Xavior BDAY present")
]),

new ExternalTransaction(makeDate(2023, 11, 27), 89.99, i3, chase, [
    new Purchase(89.99, "Utilities", "Gigabit internet for 12-23")
]),

new ExternalTransaction(makeDate(2023, 11, 29), 30.00, new Vendor("Shop Goodwill"), visa3408, [
    new Purchase(30.00, "Meridith Fun Money", "Wii sports resort for Vishal")
]),

new ExternalTransaction(makeDate(2023, 11, 23), 37.33, new Vendor("BP Gas"), visa3408, [
    new Purchase(37.33, "Car", "10.917 gal of gas at $3.419/gal")
]),

new ExternalTransaction(makeDate(2023, 11, 30), 43.16, sweetbasil, visa3408, [
    new Purchase(16.00, "Dining", "Roast Beef Panini"),
    new Purchase(17.00, "Dining", "Cinnamon French Toast Combo"),
    new Purchase(2.97, "Dining", "taxes"),
    new Purchase(7.19, "Dining", "Tip")
]),

new ExternalTransaction(makeDate(2023, 12, 1), 245.59, costco, visa3408, [
    new Purchase(9.49, "Groceries", "Basil Pesto"),
    new Purchase(15.98, "Groceries", "12 lb Fuji apples"),
    new Purchase(17.49, "For Matt", "Mini quiches"),
    new Purchase(5.29, "For Matt", "Blackberries"),
    new Purchase(12.69, "For Matt", "Blueberry acai bites"),
    new Purchase(13.89, "For Matt", "Cauliflower Pizzas"),
    new Purchase(14.99, "Groceries", "Christmas cookie tin"),
    new Purchase(13.99, "For Matt", "Gaucamole packs"),
    new Purchase(13.99, "Groceries", "Gaucamole packs"),
    new Purchase(7.79, "Groceries", "Onion powder"),
    new Purchase(9.89, "Groceries", "Dots homestyle seasoned pretzels"),
    new Purchase(5.99, "Groceries", "8 in tortillas"),
    new Purchase(5.99, "For Matt", "Tomato medley"),
    new Purchase(19.49, "Groceries", "Paper towels"),
    new Purchase(7.69-2.80, "Groceries", "Veggie Straws"),
    new Purchase(19.49, "Groceries", "Toilet Paper"),
    new Purchase(8.99, "Groceries", "Queso"),
    new Purchase(12.79, "For Matt", "Frozen berries"),
    new Purchase(6.98, "For Matt", "Raspberries"),
    new Purchase(11.99, "Groceries", "Spinach ravioli"),
    new Purchase(6.99, BucketName.UNDEFINED, "Cooper Stre ??"),
    new Purchase(6.52, "Groceries", "taxes")
]),

new ExternalTransaction(makeDate(2023, 12, 1), 1.68, costco, visa3408, [
    new Purchase(1.68, "Dining", "Hot dog")
]),

new ExternalTransaction(makeDate(2023, 12, 1), 27.16, new Vendor("Costco Gas"), visa3408, [
    new Purchase(27.16, "Car", "8.878 gal of gas at $3.059 per gal")
]),

new ExternalTransaction(makeDate(2023, 12, 1), -150.00, new Vendor("Aetna"), chase, [
    new Purchase(-50.00, "Health", "Overpayment for therapy copay"),
    new Purchase(-50.00, "Health", "Overpayment for Therapy copay"),
    new Purchase(-50.00, "Health", "Overpayment for therapy copay")
]),

new ExternalTransaction(makeDate(2023, 12, 1), 31.00, new Vendor("IL Secretary of State"), visa8042, [
    new Purchase(31.00, "Bills", "Vishal's drivers license renewal")
]),

new ExternalTransaction(makeDate(2023, 12, 1), 31.00, new Vendor("IL Secretary of State"), visa3408, [
    new Purchase(31.00, "Bills", "Meridith's drivers license renewal")
]),

new ExternalTransaction(makeDate(2023, 12, 2), 24.58, meijer, visa3408, [
    new Purchase(8.78, "Fish", "airline tubing"),
    new Purchase(1.19, "Groceries", "Eggs"),
    new Purchase(2.29, "Groceries", "8 oz Shredded cheese"),
    new Purchase(7.89, "Groceries", "Shredded cheese"),
    new Purchase(3.49, "Groceries", "Pasta sauce"),
    new Purchase(0.79, "Fish", "9% sales tax"),
    new Purchase(0.15, "Groceries", "1% sales tax")
]),

new ExternalTransaction(makeDate(2023, 12, 3), 499.36, new Vendor("Ecovacs"), visa8042, [
    new Purchase(499.36, "Housewares", "Ecovacs T10 vacuum")
]),

new ExternalTransaction(makeDate(2023, 12, 4), 52.30, amazon, discover, [
    new Purchase(52.30, "Housewares", "8 TP-link smart lightbulbs")
]),

new ExternalTransaction(makeDate(2023, 12, 4), -93, Matt, chase, [
    new Purchase(-93, "For Matt", "Payback for 12/1 costco trip")
]),

new ExternalTransaction(makeDate(2023, 12, 4), -17, Matt, chase, [
    new Purchase(-17, "For Matt", "Dinner")
]),

new ExternalTransaction(makeDate(2023, 12, 6), 27.25, new Vendor("Fresh International Market"), visa3408, [
    new Purchase(3.19, "Groceries", "Red Chili hot oil"),
    new Purchase(7.99, "Groceries", "Shoyu soy sauce"),
    new Purchase(4.39, "Groceries", "Narutomaki fish cake"),
    new Purchase(3.19, "Groceries", "Fresh bamboo shoots"),
    new Purchase(2.49, "Groceries", "Soybean sprouts"),
    new Purchase(5.73, "Groceries", "3.20 lbs Kabocha Squash"),
    new Purchase(0.27, "Groceries", "1% sales tax")
]),

new ExternalTransaction(makeDate(2023, 12, 6), 67.06, meijer, visa3408, [
    new Purchase(2.24-0.67, "Both Fun Money", "Sale sharpie"),
    new Purchase(1.98, "Groceries", "2 bunches green onion"),
    new Purchase(2.19, "Groceries", "4 oz cremini mushrooms"),
    new Purchase(2.29, "Groceries", "1/2 lb powdered sugar"),
    new Purchase(2.62, "Groceries", "Gal 1% milk"),
    new Purchase(5.38, "Groceries", "2 4 oz shelf stable tofu"),
    new Purchase(2.99, "Groceries", "1 box panko breadcrumbs"),
    new Purchase(3.39, "For Matt", "Chinese 5 spice"),
    new Purchase(3.69, "Groceries", "4 oz white miso"),
    new Purchase(3.99, "Groceries", "4 lb brown sugar"),
    new Purchase(4.29, "Groceries", "Honey bunches of oats cereal"),
    new Purchase(4.42, "Groceries", "Pork chops for katsu"),
    new Purchase(4.42, "Groceries", "10 lbs all purpose flour"),
    new Purchase(9.99, "Groceries", "1 gal veggie oil"),
    new Purchase(0.65, "Groceries", "8 oz can corn"),
    new Purchase(1.26, "Groceries", "4 oz can bamboo shoots"),
    new Purchase(3.99, "Groceries", "Reese's puffs cereal"),
    new Purchase(3.99, "Groceries", "Mocha iced coffee"),
    new Purchase(0.14, "Both Fun Money", "9% sales tax"),
    new Purchase(0.65, "Groceries", "1% sales tax")
]),

new ExternalTransaction(makeDate(2023, 12, 6), 29.81, new Vendor("Texas Roadhouse"), visa3408, [
    new Purchase(19.99, "Meridith Fun Money", "Steak combo dinner"),
    new Purchase(2.29, "Meridith Fun Money", "Onions upcharge"),
    new Purchase(2.56, "Meridith Fun Money", "Taxes"),
    new Purchase(4.97, "Meridith Fun Money", "Tip")
]),

new ExternalTransaction(makeDate(2023, 12, 8), 44.98, meijer, visa3408, [
    new Purchase(9.39, "Car", "Scotch velcro for dashcam"),
    new Purchase(9.99-1, "Both Fun Money", "Lights for mini Xmas tree"),
    new Purchase(2.29, "Groceries", "Shredded cheese"),
    new Purchase(3.49, "Groceries", "Seaweed sheets"),
    new Purchase(3.69, "Groceries", "6 oz sesame oil"),
    new Purchase(5.29, "Groceries", "Dishwasher detergent"),
    new Purchase(9.98, "Groceries", "2 packs kombu leaf"),
    new Purchase(8.99, "Groceries", "Cooking sake"),
    new Purchase(-10, "Groceries", "Mperks discount"),
    new Purchase(2.45, "Both Fun Money", "9% sales tax"),
    new Purchase(0.27, "Groceries", "1% sales tax")
]),

new ExternalTransaction(makeDate(2023, 12, 10), 18.63, amazon, visa3408, [
    new Purchase(18.63, "Both Fun Money", "1 kg Blue PLA filament")
]),

new ExternalTransaction(makeDate(2023, 12, 10), 7.23, new Vendor("McDonald's"), visa3408, [
    new Purchase(3.99, "Dining", "Large fries"),
    new Purchase(2.49, "Dining", "4 pc Chicken McNuggets"),
    new Purchase(0.75, "Dining", "taxes")
]),

new ExternalTransaction(makeDate(2023, 12, 12), 19.17, amazon, visa3408, [
    new Purchase(19.17, "Both Fun Money", "Embroidery kit for Emma's Xmas gift")
]),

new ExternalTransaction(makeDate(2023, 12, 12), 33.74, new Vendor("Costco Gas"), visa8042, [
    new Purchase(33.74, "Car", "11.639 gal gass at $2.89 per gal")
]),

new ExternalTransaction(makeDate(2023, 12, 12), 82.19, costco, visa3408, [
    new Purchase(7.99, "Groceries", "Garlic bread"),
    new Purchase(9.89, "Groceries", "Dots cinnamon sugar pretzels"),
    new Purchase(15.99-5, "Groceries", "Fever tree giner beer"),
    new Purchase(19.99, "Groceries", "Large box of apple sauce packets"),
    new Purchase(5.97, "Groceries", "8 16 oz cans pineapple"),
    new Purchase(8.69, "Groceries", "2 pack cinnamon Life cereal"),
    new Purchase(8.99, "Both Fun Money", "Biscoff cookies for Ani and Sahil"),
    new Purchase(7.99, "Groceries", "4 lbs Fuji Apples"),
    new Purchase(1.69, "Groceries", "1% sales tax")
]),

new ExternalTransaction(makeDate(2023, 12, 12), 50, elliot, visa3408, [
    new Purchase(50, "Health", "Therapy copay")
]),

new ExternalTransaction(makeDate(2023, 12, 12), 45.07, joann, visa3408, [
    new Purchase(15.30, "Both Fun Money", "Cat mania embroidery book for Emma's xmas present"),
    new Purchase(12.07, "Meridith Fun Money", "Black cat mug"),
    new Purchase(5.62, "Both Fun Money", "Bead reamers for Mumm'ys xmas present"),
    new Purchase(8.37, "Both Fun Money", "Bead holder for Mummy's xmas present"),
    new Purchase(-10, "Both Fun Money", "Joann app coupon"),
    new Purchase(3.71, "Both Fun Money", "taxes")
]),

new ExternalTransaction(makeDate(2023, 12, 12), 36.74, menards, visa3408, [
    new Purchase(14.24, "Housewares", "Wrong hex screws for couch legs"),
    new Purchase(5.48, "Both Fun Money", "Abraisive dremel buffers for finishing 3D prints"),
    new Purchase(13.99, "Both Fun Money", "2 detail abraisive dremel brushes for finishing 3D prints"),
    new Purchase(3.03, "Both Fun Money", "9% sales tax")
]),

new ExternalTransaction(makeDate(2023, 12, 13), 244.72, ameren, chase, [
    new Purchase(244.72, "Utilities", "Electric bill for 11-23")
]),

new ExternalTransaction(makeDate(2023, 12, 14), 20.27, new Vendor("Homegoods"), visa3408, [
    new Purchase(4.99, "Both Fun Money", "Ginger chocolates for Matt's xmas present"),
    new Purchase(3.99, "Baking", "Frosting syringe"),
    new Purchase(4.99, "Baking", "Depth set rolling pin"),
    new Purchase(4.99, "Baking", "Depth set rolling pin"),
    new Purchase(1.26, "Baking", "9% sales tax"),
    new Purchase(0.05, "Both Fun Money", "1% sales tax")
]),

new ExternalTransaction(makeDate(2023, 12, 14), 169.97, meijer, visa3408, [
    new Purchase(5.99, "Both Fun Money", "Matte craft sealer for 3D prints"),
    new Purchase(7.99, "Both Fun Money", "Gloss craft sealer for 3d prints"),
    new Purchase(1.19, "Baking", "White sugar sprinkles"),
    new Purchase(0.79, "Groceries", "1 cucumber"),
    new Purchase(1.44, "Groceries", "1 eggplant"),
    new Purchase(1.68, "Groceries", "Sandwich tomatoes"),
    new Purchase(2.45, "Baking", "Candy for gingerbread houses"),
    new Purchase(5.24, "Groceries", "2 gal 1% milk"),
    new Purchase(3.49, "Baking", "Candy for gingerbread houses"),
    new Purchase(3.69, "Baking", "Caramels for gingerbread houses"),
    new Purchase(3.75, "Baking", "Molasses"),
    new Purchase(3.99, "Groceries", "7 oz romaine lettuce"),
    new Purchase(4.99, "Groceries", "Yeast"),
    new Purchase(5.39, "Groceries", "Egg substitute"),
    new Purchase(10.98, "Groceries", "2 jars ground ginger"),
    new Purchase(5.89, "Groceries", "Fruit snacks for gingerbread houses"),
    new Purchase(6.99-2.8, "Cats", "Small trash bags"),
    new Purchase(8.99, "Cats", "Cat room trash bags"),
    new Purchase(4.00, "Baking", "Holiday gummies for gingerbread houses"),
    new Purchase(3.29, "Groceries", "Boom chicka pop kettle corn"),
    new Purchase(3.99, "Groceries", "8 oz roast beef lunch meat"),
    new Purchase(3.99, "Groceries", "8 oz black forest ham lunch meat"),
    new Purchase(3.99-0.75, "Groceries", "8 oz roast turkey lunch meat"),
    new Purchase(3.99, "Groceries", "8 oz smoked turkey lunchmeat"),
    new Purchase(3.99, "Groceries", "Bread flour"),
    new Purchase(2.50-.50, "Groceries", "Pepperjack cheese slices"),
    new Purchase(2.50-0.50, "Groceries", "Cheddar cheese slices"),
    new Purchase(5.99, "Groceries", "Low sugar craisins"),
    new Purchase(5.99, "Groceries", "Regular craisins"),
    new Purchase(7.09, "Baking", "Watkins non artificial food dyes"),
    new Purchase(39.95, "Groceries", "5 bags peppermint bark snowmen"),
    new Purchase(-5, "Groceries", "Mperks discount"),
    new Purchase(4.67, "Both Fun Money", "9% sales tax"),
    new Purchase(1.17, "Groceries", "1% sales tax")
]),

new ExternalTransaction(makeDate(2023, 12, 15), 21.82, new Vendor("Homegoods"), visa3408, [
    new Purchase(12.99, "Both Fun Money", "Tea gift box for Alo's xmas present"),
    new Purchase(3.99, "Baking", "Frosting syringe"),
    new Purchase(3.99, "Baking", "Frosting syringe"),
    new Purchase(0.13, "Both Fun Money", "1% sales tax"),
    new Purchase(0.72, "Baking", "9% sales tax")
]),

new ExternalTransaction(makeDate(2023, 12, 15), 250, Amit, chase, [
    new Purchase(250, "Education", "Student loan repayment")
]),

new ExternalTransaction(makeDate(2023, 12, 15), 31.59, meijer, visa3408, [
    new Purchase(6.95, "Both Fun Money", "Pineapple wrapping paper"),
    new Purchase(1.89, "Groceries", "Eggs"),
    new Purchase(4.29, "Baking", "Sweetarts rope candy for gingerbread houses"),
    new Purchase(4.29, "Baking", "Sweetarts rope candy for gingerbread houses"),
    new Purchase(4.99, "Both Fun Money", "Beans for Matt's xmas present"),
    new Purchase(7.98, "Groceries", "2 cartons mocha iced coffee"),
    new Purchase(1.01, "Both Fun Money", "9 sales tax"),
    new Purchase(0.19, "Baking", "1% sales tax")
]),
new ExternalTransaction(makeDate(2023, 12, 16), 165.74, carle, chase, [
    new Purchase(165.74, "Health", "Payment plan for MRI")
]),

new ExternalTransaction(makeDate(2023, 12, 16), 81.07, sweetbasil, visa3408, [
    new Purchase(4.00, "Dining", "Coffee"),
    new Purchase(18.00, "Dining", "Garden omelet combo"),
    new Purchase(4.00, "Dining", "Max's drink"),
    new Purchase(17.00, "Dining", "Max's western burger"),
    new Purchase(19.00, "Dining", "Avocado bacon omelet combo"),
    new Purchase(5.56, "Dining", "taxes"),
    new Purchase(13.51, "Dining", "Tip")
]),

new ExternalTransaction(makeDate(2023, 12, 19), 32.69, new Vendor("Dick's Sporting Goods"), visa3408, [
    new Purchase(29.99, "Both Fun Money", "Illini mouse pad with charger for Amit's xmas present"),
    new Purchase(2.70, "Both Fun Money", "taxes") 
]),

new ExternalTransaction(makeDate(2023, 12, 19), 119.68, new Vendor("Target"), visa3408, [
    new Purchase(19.20, "Clothing", "Cream and yellow cropped sweater"),
    new Purchase(26.60, "Clothing", "Green winter coat"),
    new Purchase(32.00, "Clothing", "Blue skinny jeans"),
    new Purchase(14.00, "Clothing", "Gray skinny jeans"),
    new Purchase(18.00, "Clothing", "Pink cropped sweater"),
    new Purchase(9.88, "Clothing", "9% sales tax")
]),

new ExternalTransaction(makeDate(2023, 12, 19), 28.31, new Vendor("TJ Maxx"), visa8042, [
    new Purchase(7.99, "Clothing", "Black long sleeved shirt with red collar"),
    new Purchase(7.99, "Clothing", "Black long sleeved shirt with green button collar"),
    new Purchase(9.99, "Clothing", "Teal long sleeved sweater"),
    new Purchase(2.34, "Clothing", "9% sales tax")
]),

new ExternalTransaction(makeDate(2023, 12, 19), 52.69, new Vendor("UPS"), visa3408, [
    new Purchase(52.69, "Both Fun Money", "Shipping for Mylee's xmas present"),
]),

new ExternalTransaction(makeDate(2023, 12, 20), 50.00, elliot, visa3408, [
    new Purchase(50.00, "Health", "Therapy copay")
]),

new ExternalTransaction(makeDate(2023, 12, 21), 76.83, water, chase, [
    new Purchase(76.83, "Utilities", "Water bill for november")
]),

new ExternalTransaction(makeDate(2023, 12, 21), 0, cvs, visa3408, [
    new Purchase(0, "Health", "Verapamil"),
    new Purchase(0, "Health", "Ubrelvy"),
    new Purchase(0, "Health", "Bupropion"),
    new Purchase(0, "Health", "Buspirone")
]),

new ExternalTransaction(makeDate(2023, 12, 21), 44.22, new Vendor("Uber Eats"), visa3408, [
    new Purchase(44.22, "Dining", "Dinner")
]),

new ExternalTransaction(makeDate(2023, 12, 22), 81.38, chewy, visa3408, [
    new Purchase(78.59, "Cats", "16 lbs Liveclear cat food salmon and rice flavored"),
    new Purchase(-3.93, "Cats", "Autoship discount"),
    new Purchase(6.72, "Cats", "taxes")
]),

new ExternalTransaction(makeDate(2023, 12, 22), 24.01, new Vendor("Culver's"), visa3408, [
    new Purchase(24.01, "Dining", "Dinner on the way to Bloomingdale")
]),

new ExternalTransaction(makeDate(2023, 12, 22), 22.39, new Vendor("Lenny's Gas n Wash"), visa3408, [
    new Purchase(22.39, "Car", "7.467 gal gas at $2.999 per gal")
]),

new ExternalTransaction(makeDate(2023, 12, 24), 89.99, i3, chase, [
    new Purchase(89.99, "Utilities", "Gigabit fiber internet for January")
]),

new ExternalTransaction(makeDate(2023, 12, 26), 15.01, joann, visa3408, [
    new Purchase(2.49, "Sewing", "Small crochet hook"),
    new Purchase(3.99, "Vishal Fun Money", "Mint irridescent cording"),
    new Purchase(2.49, "Sewing", "Shine denim yarn skein"),
    new Purchase(2.49, "Sewing", "Shine sage green yarn skein"),
    new Purchase(1.06, "Sewing", "taxes")
]),

new ExternalTransaction(makeDate(2023, 12, 26), -151.00, new Vendor("Dada"), chase, [
    new Purchase(-150.00, "Meridith Fun Money", "Xmas gift money")
]),

new ExternalTransaction(makeDate(2023, 12, 26), 42.84, joann, visa3408, [
    new Purchase(13.79, "Housewares", "Cake serving spatula set"),
    new Purchase(0.89, "Vishal Fun Money", "Prussian blue embroidery floss"),
    new Purchase(5.39, "Sewing", "Pack of stretch needles"),
    new Purchase(8.99, "Sewing", "Pack of universal needles"),
    new Purchase(5.39, "Sewing", "Pack of quilting needles"),
    new Purchase(2.99, "Housewares", "Plate hanger"),
    new Purchase(1.50, "Vishal Fun Money", "Champagne cording"),
    new Purchase(3.90, "Sewing", "taxes")
]),

new ExternalTransaction(makeDate(2023, 12, 27), 67.69, new Vendor("Noodles & Co"), visa3408, [
    new Purchase(45.00, "Dining", "4 regular pesto cavatapis with tofu"),
    new Purchase(11.25, "Dining", "Regular wisconsin mac & cheese with meatballs"),
    new Purchase(3.00, "Dining", "Raspberry lemonade"),
    new Purchase(-2.00, "Dining", "Noodles rewards"),
    new Purchase(4.29, "Dining", "taxes"),
    new Purchase(6.15, "Dining", "Tip")
]),

new ExternalTransaction(makeDate(2023, 12, 27), 34.11, new Vendor("Portillos"), visa3408, [
    new Purchase(4.29, "Dining", "Plant based garden dog"),
    new Purchase(3.79, "Dining", "Large fries"),
    new Purchase(7.98, "Dining", "2 regular hotdogse"),
    new Purchase(1.50, "Dining", "Cheese for hotdogs"),
    new Purchase(1.50, "Dining", "Grilled onions for hotdogs"),
    new Purchase(3.79, "Dining", "Large fries for Anishi"),
    new Purchase(9.38, "Dining", "2 small chocolate cake shakes (1 for Ani)"),
    new Purchase(2.38, "Dining", "Taxes")
]),

new ExternalTransaction(makeDate(2023, 12, 28), 85.00, new Vendor("Bloomingdale Urgent Care"), visa8042, [
    new Purchase(85.00, "Health", "Vishal's urgent care visit for possible strep throat")
]),

new ExternalTransaction(makeDate(2023, 12, 30), 6.47, new Vendor("Walmart"), visa3408, [
    new Purchase(3.18, "Groceries", "Mocha frappucino"),
    new Purchase(3.18, "Groceries", "Mocha frappucino"),
    new Purchase(0.11, "Groceries", "taxes")
]),

new ExternalTransaction(makeDate(2023, 12, 30), 9.62, new Vendor("Target"), visa3408, [
    new Purchase(6.38, "Groceries", "Bad iced coffee bottles"),
    new Purchase(2.89, "Meridith Fun Money", "Altoids"),
    new Purchase(0.35, "Groceries", "taxes")
]),

//TODO: Find missing target receipt from 12/30/2023

new ExternalTransaction(makeDate(2024, 1, 2), 34.45, new Vendor("Circle K gas"), visa3408, [
    new Purchase(34.45, "Car", "11.644 gal gas at $2.959 per gal")
]),

new ExternalTransaction(makeDate(2024, 1, 3), 71.32, meijer, visa3408, [
    new Purchase(6.58, "Housewares", "2 rolls velcro ties"),
    new Purchase(5.18, "Cats", "Tube treats"),
    new Purchase(5.18, "Cats", "Tube treats"),
    new Purchase(5.24, "Groceries", "2 gal 1% milk"),
    new Purchase(2.99, "Groceries", "1 head cauliflower"),
    new Purchase(3.99, "Groceries", "4 lb powdered sugar"),
    new Purchase(3.99, "Groceries", "3 lb bag mixed onions"),
    new Purchase(20.99, "Cats", "Cat litter"),
    new Purchase(7.49, "Meridith Fun Money", "Discount box of chocolates"),
    new Purchase(4.54, "Cats", "9% sales tax"),
    new Purchase(0.16, "Groceries", "1% sales tax")
]),

new ExternalTransaction(makeDate(2024, 1, 4), 29.36, menards, visa3408, [
    new Purchase(1.69, "Home Improvement", "Magnetic bit holder for drill"),
    new Purchase(3.81, "Home Improvement", "Drywall mud"),
    new Purchase(2.79, "Home Improvement", "Paper joint tape for drywall"),
    new Purchase(3.39, "Both Fun Money", "Micro flush cutter with cap for 3D printing"),
    new Purchase(3.38, "Home Improvement", "J-style peg hooks"),
    new Purchase(1.19, "Home Improvement", "2x1 drywall panel"),
    new Purchase(4.74, "Fish", "Razor scraper for algae removal"),
    new Purchase(5.95, "Home Improvement", "L-style peg hooks"),
    new Purchase(2.42, "Home Improvement", "9% sales tax")
]),

new ExternalTransaction(makeDate(2024, 1, 4), 97.63, trash, chase, [
    new Purchase(97.63, "Utilities", "3 months of trash service")
]),

new ExternalTransaction(makeDate(2024, 1, 5), 88.65, costco, visa8042, [
    new Purchase(8.75, "Groceries", "25 lbs of flour"),
    new Purchase(7.99, "Groceries", "12 bagels"),
    new Purchase(11.49-250, "Health", "Vishal's multivitamins"),
    new Purchase(10.69, "Groceries", "Boursin 3 pack"),
    new Purchase(12.49, "Groceries", "Salted cashews"),
    new Purchase(10.99, "Groceries", "Chocolate chips"),
    new Purchase(8.99, "Groceries", "Avocados"),
    new Purchase(5.99, "Groceries", "4 lb honeycrisp apples"),
    new Purchase(5.99, "Groceries", "4 lb honeycrisp apples"),
    new Purchase(1.75, "Groceries", "taxes")
]),

new ExternalTransaction(makeDate(2024, 1, 5), 89.63, new Vendor("Dos Reales"), visa8042, [
    new Purchase(18.95, "Cats", "Alambres de Camaron for Nick for watching cats"),
    new Purchase(13.25, "Cats", "Nachos Supreme Asada for Alo"),
    new Purchase(18.50, "Dining", "Chef's special"),
    new Purchase(7.54, "Dining", "Cheese and bean nachos"),
    new Purchase(1.70, "Dining", "Lettuce for nachos"),
    new Purchase(1.55, "Dining", "Side of sour cream"),
    new Purchase(5.50, "Dining", "Guacamole"),
    new Purchase(7.70, "Dining", "taxes"),
    new Purchase(14.94, "Dining", "Tip")
]),

new ExternalTransaction(makeDate(2024, 1, 5), 34.64, menards, visa8042, [
    new Purchase(5.94, "Vishal Fun Money", "Marble track"),
    new Purchase(2.97, "Housewares", "Wreath hanger"),
    new Purchase(7.64, "Home Improvement", "Double sided mallet"),
    new Purchase(3.30, "Home Improvement", "Small claw hammer"),
    new Purchase(2.53, "Cats", "Command strips for broom holder"),
    new Purchase(2.98, "Baking", "Root beer extract"),
    new Purchase(4.24, "Baking", "Xavior safe rainbow sprinkles"),
    new Purchase(2.96, "Baking", "Mint extract"),
    new Purchase(0.10, "Baking", "1% sales tax"),
    new Purchase(2.00, "Home Improvement", "9% sales tax")
]),

new ExternalTransaction(makeDate(2024, 1, 5), 156.30, new Vendor("Zenni Optical"), visa3408, [
    new Purchase(156.30, "Health", "2 pairs migraine glasses")
]),

new ExternalTransaction(makeDate(2024, 1, 8), 117.96, new Vendor("Aquatic Arts"), visa3408, [
    new Purchase(2.39, "Fish", "Devil spike snail"),
    new Purchase(2.99, "Fish", "Olive Jade mystery snail"),
    new Purchase(4.79, "Fish", "Purple mystery snail"),
    new Purchase(5.99, "Fish", "Ivory mystery snail"),
    new Purchase(3.00, "Fish", "Black mystery snail"),
    new Purchase(10.80, "Fish", "9 cherry barbs"),
    new Purchase(42.00, "Fish", "24 Kuhli loaches"),
    new Purchase(46.00, "Fish", "Shipping")
]),

new ExternalTransaction(makeDate(2024, 1, 8), -100.00, new Vendor("Aetna"), chase, [
    new Purchase(-50.00, "Health", "Overpayment for therapy copay"),
    new Purchase(-50.00, "Health", "Overpayment for Therapy copay")
]),

new ExternalTransaction(makeDate(2024, 1, 10), 21.79, amazon, visa3408, [
    new Purchase(21.79, "Housewares", "Ecovac dust bags")
]),

new ExternalTransaction(makeDate(2024, 1, 10), 50, elliot, visa3408, [
    new Purchase(50.00, "Health", "Therapy copay")
]),

new ExternalTransaction(makeDate(2024, 1, 10), 92.89,  meijer, visa3408, [
    new Purchase(4.49, "Groceries", "Shampoo"),
    new Purchase(8.39, "Health", "12 pack condoms"),
    new Purchase(1.09, "Groceries", "1 lb ziti pasta"),
    new Purchase(1.89, "Groceries", "12 eggs"),
    new Purchase(1.99, "Groceries", "Tortillas"),
    new Purchase(2.29, "Groceries", "shredded cheese"),
    new Purchase(2.62, "Groceries", "1 gal 1% milk"),
    new Purchase(2.69, "Groceries", "Garlic alfredo pasta sauce"),
    new Purchase(2.99, "Groceries", "Ricotta cheese"),
    new Purchase(2.99, "Groceries", "Kettle corn bags"),
    new Purchase(3.99, "Groceries", "3 pack bell peppers"),
    new Purchase(3.99, "Groceries", "Block of cheddar cheese"),
    new Purchase(4.69, "Groceries", "Ovaltine"),
    new Purchase(19.96-.99-1-.99-1-.99-.99, "Groceries", "4 tombstone pepperoni pizzas"),
    new Purchase(7.79, "Both Fun Money", "Sprite"),
    new Purchase(7.99, "Groceries", "Enchilada cheese"),
    new Purchase(1.71, "Groceries", "French baguette"),
    new Purchase(3.99, "Groceries", "Honey Bunches of oats cereal"),
    new Purchase(4.49, "Groceries", "3 lbs potatoes"),
    new Purchase(2.38, "Health", "9% sales tax"),
    new Purchase(0.65, "Groceries", "1% sales tax")
]),

new ExternalTransaction(makeDate(2024, 1, 10), 21.69, menards, visa3408, [
    new Purchase(5.08, "Home Improvement", "30 in threaded brass pipe for light fixtures"),
    new Purchase(6.73, "Home Improvement", "25 mm bolts for couch legs"),
    new Purchase(8.09, "Home Improvement", "30 mm bolts for couch legs"),
    new Purchase(1.79, "Home Improvement", "9% sales tax")
]),

new ExternalTransaction(makeDate(2024, 1, 10), 37.15, new Vendor("Panera"), visa3408, [
    new Purchase(10.89, "Dining", "Green Goddess caprese melt"),
    new Purchase(11.69, "Dining", "Chipotle Chicken Avocado Melt"),
    new Purchase(7.99, "Dining", "Cup cream of chicken and wild rice soup"),
    new Purchase(3.52, "Dining", "taxes"),
    new Purchase(3.06, "Dining", "Tip")
]),

new ExternalTransaction(makeDate(2024, 1, 11), 25, new Vendor("IL Planned Parenthood"), visa3408, [
    new Purchase(25, "Health", "BC implant insertion copay")
]),

new ExternalTransaction(makeDate(2024, 1, 11), 43.16, sweetbasil, visa3408, [
    new Purchase(16, "Dining", "Roast beef panini"),
    new Purchase(17, "Dining", "Italian egg white scrambler"),
    new Purchase(2.97, "Dining", "taxes"),
    new Purchase(7.19, "Dining", "Tip")
]),

new ExternalTransaction(makeDate(2024, 1, 15), 50.00, elliot, visa3408, [
    new Purchase(50.00, "Health", "Psych nurse copay")
]),

new ExternalTransaction(makeDate(2024, 1, 16), 70.31, water, chase, [
    new Purchase(70.31, "Utilities", "December Water bill")
]),

new ExternalTransaction(makeDate(2024, 1, 16), 165.74, carle, visa3408, [
    new Purchase(165.74, "Health", "MRI payment plan")
]),

new ExternalTransaction(makeDate(2024, 1, 16), 49.51, meijer, visa3408, [
    new Purchase(0.89, "Groceries", "Cucumber"),
    new Purchase(1.49, "Both Fun Money", "Mentos"),
    new Purchase(1.65, "Groceries", "0.92 lbs sweet potatoes"),
    new Purchase(1.79, "Groceries", "8 oz block cream cheese"),
    new Purchase(5.24, "Groceries", "2 gals 1% milk"),
    new Purchase(3.59, "Groceries", "Ortega medium taco sauce"),
    new Purchase(3.79, "Groceries", "Basil alfredo sauce"),
    new Purchase(3.99, "Groceries", "Berry juicy juice"),
    new Purchase(8.49, "Groceries", "Smoked salmon"),
    new Purchase(17.99, "Groceries", "Maple syrup"),
    new Purchase(0.13, "Both Fun Money", "9% sales tax"),
    new Purchase(0.47, "Groceries", "1% sales tax")
]),

new ExternalTransaction(makeDate(2024, 1, 16), 30, new Vendor("Katelyn Hemming venmo"), chase, [
    new Purchase(-30, "Fish", "Sale of 20 gal high")
]),

new ExternalTransaction(makeDate(2024, 1, 17), 207.70, costco, visa3408, [
    new Purchase(12.99, "For Matt", "Korean bbq jerky"),
    new Purchase(5.99, "For Matt", "Tomato medley"),
    new Purchase(13.69, "For Matt", "Tajin almonds"),
    new Purchase(5.89, "For Matt", "Raspberries"),
    new Purchase(8.29, "For Matt", "Strawberries"),
    new Purchase(9.99, "For Matt", "Kunin rice crisps mix"),
    new Purchase(12.79, "For Matt", "Frozen 4 berry medley"),
    new Purchase(9.79, "Groceries", "2 quarts lemon juice"),
    new Purchase(10.79-3, "Groceries", "Chocolate coconut cups"),
    new Purchase(12.99, "Groceries", "Frozen crab rangoon"),
    new Purchase(4.59, "Groceries", "Mini peppers"),
    new Purchase(13.99, "Groceries", "4 lbs salted butter"),
    new Purchase(16.99, "Groceries", "Frozen eggplant parmesan"),
    new Purchase(12.69-4, "Groceries", "3 jars marinara"),
    new Purchase(9.99, "Groceries", "3 cans whipped cream"),
    new Purchase(9.89, "Groceries", "Original seasoning dots pretzels"),
    new Purchase(10.99, "Groceries", "Sweet cherries"),
    new Purchase(5.99, "Groceries", "4 lbs honeycrisp apples"),
    new Purchase(5.99, "Groceries", "4 lbs honeycrisp apples"),
    new Purchase(16.99, "Cats", "Puppy pads"),
    new Purchase(3.40, "Groceries", "taxes")
]),

new ExternalTransaction(makeDate(2024, 1, 17), -75, Matt, chase, [
    new Purchase(-75, "For Matt", "Payback for 1/17 costco trip")
]),

new ExternalTransaction(makeDate(2024, 1, 17), 50.00, elliot, visa3408, [
    new Purchase(50.00, "Health", "Therapy copay")
]),

new ExternalTransaction(makeDate(2024, 1, 17), 364.96, ameren, chase, [
    new Purchase(364.96, "Utilities", "Electric for 12-23")
]),

new ExternalTransaction(makeDate(2024, 1, 18), 309, new Vendor("Urbana family dental"), visa8042, [
    new Purchase(309.00, "Health", "Vishal nightgaurd payment")
]),

new ExternalTransaction(makeDate(2024, 1, 19), 15.49, new Vendor("Walgreens"), visa3408, [
    new Purchase(5.49, "Home Improvement", "Acetone for removing superglue"),
    new Purchase(10.00, "Health", "Verapamil copay"),
    new Purchase(0.49, "Home Improvement", "9% sales tax")
]),

new ExternalTransaction(makeDate(2024, 1, 19), 13.00, cvs, visa3408, [
    new Purchase(3.00, "Health", "Med"),
    new Purchase(10.00, "Health", "Med")
]),

new ExternalTransaction(makeDate(2024, 1, 20), 33.65, new Vendor("Costco gas"), visa3408, [
    new Purchase(33.65, "Car", "11.409 gals gas at $2.949 per gal")
]),

new ExternalTransaction(makeDate(2024, 1, 20), 56.36, meijer, visa3408, [
    new Purchase(12.99, "Health", "Vicks dayquil"),
    new Purchase(1.05, "Groceries", "1 lb rigatoni pasta"),
    new Purchase(2.29, "Groceries", "Shredded italian cheese"),
    new Purchase(3.59, "Groceries", "Duke's mayonnaise"),
    new Purchase(3.69, "Groceries", "Medium salsa"),
    new Purchase(4.29, "Groceries", "Honey bunches of oats cereal"),
    new Purchase(9.98, "Groceries", "2 half gallons of mocha iced coffee"),
    new Purchase(5.29, "Groceries", "Heavy whipping cream"),
    new Purchase(6.99, "Groceries", "Pepperoni bagel pizzas"),
    new Purchase(2.69, "Groceries", "Egg white substitute"),
    new Purchase(0.56, "Groceries", "1% sales tax")
]),

new ExternalTransaction(makeDate(2024, 1, 20), 109.36, menards, visa3408, [
    new Purchase(39.98, "Home Improvement", "4 reversible bar clamps"),
    new Purchase(6.49, "Home Improvement", "Long flathead screwdriver"),
    new Purchase(44.99, "Both Fun Money", "Chris bday present"),
    new Purchase(4.76, "Home Improvement", "Bolts for couch legs"),
    new Purchase(1.19, "Home Improvement", "Bolts for Couch legs"),
    new Purchase(0.89, "Home Improvement", "T nut for broken leg attachment point"),
    new Purchase(1.14, "Home Improvement", "Replacement threaded insert for ottoman"),
    new Purchase(9.03, "Home Improvement", "9% sales tax")
]),

new ExternalTransaction(makeDate(2024, 1, 20), 14.12, menards, visa3408, [
    new Purchase(9.96, "Housewares", "Boot trays for humidifiers"),
    new Purchase(2.99, "Housewares", "Extra boot tray"),
    new Purchase(1.17, "Housewares", "9% sales tax")
]),

new ExternalTransaction(makeDate(2024, 1, 21), 62.43, new Vendor("Sun Sun Chinese"), visa3408, [
    new Purchase(56.75, "Dining", "Dinner with parents"),
    new Purchase(5.68, "Dining", "Tip")
]),

new ExternalTransaction(makeDate(2024, 1, 23), 18.25, costco, visa3408, [
    new Purchase(6.29, "Groceries", "Blueberries"),
    new Purchase(5.89, "For Matt", "Raspberries"),
    new Purchase(5.89, "For Matt", "Raspberries"),
    new Purchase(0.18, "For Matt", "1% sales tax")
]),

new ExternalTransaction(makeDate(2024, 1, 23), 19.60, new Vendor("Costco Gas"), visa8042, [
    new Purchase(19.60, "Car", "6.786 gal gas at $2.889 per gal")
]),

new ExternalTransaction(makeDate(2024, 1, 23), 89.99, i3, chase, [
    new Purchase(89.99, "Utilities", "Gigabit internet")
]),

new ExternalTransaction(makeDate(2024, 1, 23), 20.12, menards, visa3408, [
    new Purchase(7.47, "Housewares", "3 more plastic boot trays"),
    new Purchase(10.99, "Housewares", "Mold killer for carpet under humidifier"),
    new Purchase(1.66, "Housewares", "9% sales tax")
]),

new ExternalTransaction(makeDate(2024, 1, 23), 0, new Vendor("Walgreens"), visa3408, [
    new Purchase(0, "Health", "Nurtec")
]),

new ExternalTransaction(makeDate(2024, 1, 24), 50.00, elliot, visa3408, [
    new Purchase(50.00, "Health", "Therapy copay")
]),

new ExternalTransaction(makeDate(2024, 1, 24), 30.00, new Vendor("Nebula"), new Account("Capitol One CC"), [
    new Purchase(30.00, "Both Fun Money", "Yearly Nebula Subscription")
]),

new ExternalTransaction(makeDate(2024, 1, 24), 83.45, new Vendor("Savannag Green HOA"), visa3408, [
    new Purchase(81.50, "Housing", "Yearly HOA fees"),
    new Purchase(1.95, "Housing", "Transaction fees")
]),

new ExternalTransaction(makeDate(2024, 1, 26), 20.44, meijer, visa3408, [
    new Purchase(3.99, "Groceries", "3 bell peppers"),
    new Purchase(3.18, "Groceries", "2 jars pizza sauce"),
    new Purchase(7.00, "Groceries", "2 bags mozzarella cheese"),
    new Purchase(2.99, "Groceries", "Baby spinach"),
    new Purchase(2.29, "Groceries", "8 pc texas toast garlic bread"),
    new Purchase(2.62, "Groceries", "1 gal 1% milk"),
    new Purchase(1.99, "Groceries", "Mini cheese sausages"),
    new Purchase(1.89, "Groceries", "Can slived olives"),
    new Purchase(3.29, "Groceries", "4 lb sugar"),
    new Purchase(0.20, "Groceries", "1% sales tax"),
    new Purchase(-9.00, "Groceries", "Mperks rewards"),
    new Purchase(-3.74, "Groceries", "Special offers")
]),

new ExternalTransaction(makeDate(2024, 1, 26), 38.65, menards, visa3408, [
    new Purchase(2.49, "Health", "Self adhesive bandage tape"),
    new Purchase(1.97, "Health", "Gauze pads"),
    new Purchase(3.62, "Groceries", "Lemon extract"),
    new Purchase(7.99, "Home Improvement", "Smaller long screwdriver"),
    new Purchase(19.98, "Home Improvement", "Pull out kitchen cabinet baskets"),
    new Purchase(0.08, "Groceries", "1% sales tax"),
    new Purchase(2.52, "Home Improvement", "9% sales tax")
]),

new ExternalTransaction(makeDate(2024, 1, 27), -20.00, Matt, chase, [
    new Purchase(-20.00, "For Matt", "Berries payback")
]),

//new ExternalTransaction(makeDate(2024, 1, 29), 5585, new Vendor("Modern Home Upgrades"), chase, [
//    new Purchase(5585, "Home Improvement", "50% downpayment for kitchen remodel")
//]),

new ExternalTransaction(makeDate(2024, 1, 29), 63.51, new Vendor("Sushi Ichiban"), visa3408, [
    new Purchase(63.51, "Dining", "Dinner pickup order")
]),

new ExternalTransaction(makeDate(2024, 1, 30), 17.14, new Vendor("Culvers"), visa3408, [
    new Purchase(17.14, "Dining", "Dinner")
]),

new ExternalTransaction(makeDate(2024, 1, 30), 45.14, new Vendor("Schnucks"), visa3408, [
    new Purchase(6.99, "Groceries", "MAngo smoothie"),
    new Purchase(1.49, "Groceries", "Pineapple coconut jerky"),
    new Purchase(2.50, "Groceries", "Peach fruit cups"),
    new Purchase(1.49, "Groceries", "Mango fruit jerky"),
    new Purchase(2.00, "Groceries", "Pretzel rods"),
    new Purchase(2.79, "Groceries", "Paper bowls"),
    new Purchase(2.79, "Groceries", "Paper plates"),
    new Purchase(4.99, "Groceries", "Nutella"),
    new Purchase(3.50, "Groceries", "Bad fruit rolls"),
    new Purchase(5.50, "Groceries", "Choc chip z-bars"),
    new Purchase(5.50, "Groceries", "Iced oatmeal z-bars"),
    new Purchase(1.99, "Groceries", "Half loaf bread"),
    new Purchase(1.45, "Groceries", "9% sales tax"),
    new Purchase(0.27, "Groceries", "1% sales tax")
]),

new ExternalTransaction(makeDate(2024, 1, 31), 220.77, costco, visa3408, [
    new Purchase(10.99, "For Matt", "Almond milk"),
    new Purchase(6.49, "Groceries", "Turtle chips"),
    new Purchase(11.99, "Meridith Fun Money", "Choc truffles"),
    new Purchase(12.79, "For Matt", "Frozen berries"),
    new Purchase(11.99, "For Matt", "Fig truffles"),
    new Purchase(12.99, "For Matt", "Guacamole"),
    new Purchase(8.99, "For Matt", "Strawberries"),
    new Purchase(7.99, "For Matt", "Sliced mozzerella"),
    new Purchase(13.99, "For Matt", "Frozen blueberries"),
    new Purchase(5.79, "Groceries", "Tortilla chips"),
    new Purchase(13.99, "Groceries", "4 lbs unsalted butter"),
    new Purchase(13.99, "Groceries", "4 lbs salted butter"),
    new Purchase(5.89, "For Matt", "Raspberries"),
    new Purchase(3.99, "For Matt", "Blackberries"),
    new Purchase(5.99, "For Matt", "Cherry tomatoes"),
    new Purchase(10.99, "Groceries", "Choc chips"),
    new Purchase(12.99, "Groceries", "Guacamole packs"),
    new Purchase(11.99, "Groceries", "Goldfish"),
    new Purchase(12.49-3.50, "Groceries", "Mediterranean flatbreads"),
    new Purchase(8.99, "Groceries", "Spinach parmesan dip"),
    new Purchase(1.97, "Groceries", "Naan dippers"),
    new Purchase(12.99, "Groceries", "Fruit bars"),
    new Purchase(4.01, "Groceries", "taxes")
]),

new ExternalTransaction(makeDate(2024, 1, 31), -51, Matt, chase, [
    new Purchase(-51, "For Matt", "Payback for 1/31 costco trip")
]),

new ExternalTransaction(makeDate(2024, 1, 31), 30.00, new Vendor("Urbana Family Dental"), visa8042, [
    new Purchase(30.00, "Health", "Copay for Flouride treatment")
]),

new ExternalTransaction(makeDate(2024, 1, 31), 50.00, elliot, visa3408, [
    new Purchase(50.00, "Health", "Therapy copay")
]),

new ExternalTransaction(makeDate(2024, 2, 1), 36.79, tacoBell, visa3408, [
    new Purchase(36.79, "Dining", "Dinner")
]),

new ExternalTransaction(makeDate(2024, 2, 2), 32.73, new Vendor("Noodles & Co"), visa3408, [
    new Purchase(32.73, "Dining", "Dinner")
]),

new ExternalTransaction(makeDate(2024, 2, 3), 81.08, new Vendor("Dos Reales"), visa8042, [
    new Purchase(12.50, "Dining", "Tamales for Meridith"),
    new Purchase(11.80, "Dining", "Vegetarian A for Vishal"),
    new Purchase(12.75, "Dining", "Vegetarian I for Varsha"),
    new Purchase(13.50, "Dining", "Burrito Rojo for Dylan"),
    new Purchase(7.50, "Dining", "2 Horchatas for Varsha and Dylan"),
    new Purchase(2.55, "Dining", "Jarritos for Meridith"),
    new Purchase(6.97, "Dining", "taxes"),
    new Purchase(13.51, "Dining", "Tip")
]),

new ExternalTransaction(makeDate(2024, 2, 3), 318.20, costco, visa8042, [
    new Purchase(11.99, "Groceries", "Mixed fruit tray"),
    new Purchase(7.99, "Groceries", "Mango fruit cups"),
    new Purchase(5.99, "Groceries", "Kettle Corn"),
    new Purchase(21.89, "Groceries", "Mixed box Z-bars"),
    new Purchase(9.49, "For Varsha", "Granola Bars"),
    new Purchase(9.49, "For Varsha", "Granola Bars"),
    new Purchase(11.99, "For Varsha", "Eggo waffles"),
    new Purchase(14.49, "For Varsha", "Vanilla soy milk"),
    new Purchase(16.99, "For Varsha", "Tissues"),
    new Purchase(11.79, "For Varsha", "Refried beans"),
    new Purchase(19.89, "For Varsha", "Assorted frito lay chips"),
    new Purchase(9.99, "For Varsha", "Peanut butter pretzels"),
    new Purchase(8.99, "For Varsha", "Cheerios 2 pack"),
    new Purchase(12.99, "For Varsha", "2 pack mexiacan shredded cheese"),
    new Purchase(19.99, "For Varsha", "Applesauce pouches"),
    new Purchase(7.89, "For Varsha", "Walnuts"),
    new Purchase(7.99, "For Varsha", "Sliced mozzerella"),
    new Purchase(13.99, "For Varsha", "Vitamins"),
    new Purchase(9.49, "For Varsha", "Salsa"),
    new Purchase(8.99, "For Varsha", "Almonds"),
    new Purchase(7.49, "For Varsha", "Pasta assortment"),
    new Purchase(7.99, "For Varsha", "Everything bagels"),
    new Purchase(13.99, "For Varsha", "Unsalted butter"),
    new Purchase(13.99, "For Varsha", "Irish butter"),
    new Purchase(9.49, "For Varsha", "Pesto sauce"),
    new Purchase(5.99, "For Varsha", "Croissants"),
    new Purchase(11.99, "For Varsha", "Spinach ravioli 2 pack"),
    new Purchase(4.97, "For Varsha", "taxes")
]),

new ExternalTransaction(makeDate(2024, 2, 3), 76.47, new Vendor("Target"), visa8042, [
    new Purchase(3.89, "For Varsha", "Bread"),
    new Purchase(9.18, "For Varsha", "Microwave popcorn"),
    new Purchase(3.78, "For Varsha", "Good gather ?"),
    new Purchase(1.98, "For Varsha", "Onions"),
    new Purchase(4.99, "For Varsha", "Ovaltine"),
    new Purchase(5.19, "For Varsha", "Cream cheese"),
    new Purchase(2.19, "For Varsha", "Berries"),
    new Purchase(5.79, "For Varsha", "Cheese"),
    new Purchase(5.79, "For Varsha", "Cuties"),
    new Purchase(1.79, "For Varsha", "Bell peppers"),
    new Purchase(2.89, "For Varsha", "Tomatoes"),
    new Purchase(3.99, "For Varsha", "Bread"),
    new Purchase(19.99, "Both Fun Money", "Camera Lego set"),
    new Purchase(1.80, "Both Fun Money", "9% sales tax"),
    new Purchase(0.54, "For Varsha", "1% sales tax")
]),

new ExternalTransaction(makeDate(2024, 2, 4), 25.45, tacoBell, visa8042, [
    new Purchase(24.45, "Dining", "Dinner")
]),

new ExternalTransaction(makeDate(2024, 2, 7), 46.54, new Vendor("Door dash"), chase, [
    new Purchase(46.54, "Dining", "Dinner")
]),

new ExternalTransaction(makeDate(2024, 2, 7), 50.00, elliot, visa3408, [
    new Purchase(50.00, "Health", "Therapy copay")
]),

new ExternalTransaction(makeDate(2024, 2, 8), 81.73, chewy, visa3408, [
    new Purchase(81.73, "Cats", "Cat food")
]),

new ExternalTransaction(makeDate(2024, 2, 8), 77.92, meijer, visa3408, [
    new Purchase(6.79, "Cats", "Cat litter for jiji"),
    new Purchase(11.99, "Cats", "Mattress protector"),
    new Purchase(2.39, "Groceries", "Ketchup"),
    new Purchase(2.55, "Housewares", "Brown paper bags"),
    new Purchase(6.39, "For Matt", "Sugar snap peas"),
    new Purchase(8.99, "Groceries", "Trash bags"),
    new Purchase(12.99, "Groceries", "Brownie bars"),
    new Purchase(20.99, "Cats", "Cat litter"),
    new Purchase(4.62, "Cats", "9% sales tax"),
    new Purchase(0.22, "Groceries", "1% sales tax")
]),

new ExternalTransaction(makeDate(2024, 2, 9), 15.68, tacoBell, visa3408, [
    new Purchase(15.68, "Dining", "Dinner")
]),

new ExternalTransaction(makeDate(2024, 2, 10), 53.28, new Vendor("Courier Cafe"), visa3408, [
    new Purchase(13.25, "Dining", "Breakfast sandwich for M"),
    new Purchase(13.00, "Dining", "Pesto pitas for V"),
    new Purchase(4.50, "Dining", "Phosphate for V"),
    new Purchase(9.25, "Dining", "Choc malt for M"),
    new Purchase(4.40, "Dining", "taxes"),
    new Purchase(8.88, "Dining", "Tip")
]),

new ExternalTransaction(makeDate(2024, 2, 11), 40.50, new Vendor("Jets pizza"), visa3408, [
    new Purchase(40.50, "Dining", "Pizza dinner")
]),

new ExternalTransaction(makeDate(2024, 2, 12), 439.96, costco, visa3408, [
    new Purchase(199.97, "Home Improvement", "DVR camera set"),
    new Purchase(9.99, "Groceries", "Oat milk"),
    new Purchase(13.99, "For Matt", "Frozen chicken"),
    new Purchase(14.99, "For Matt", "Frozen berries"),
    new Purchase(14.79, "For Matt", "Brazil bites"),
    new Purchase(11.99, "For Matt", "Fig bites"),
    new Purchase(9.99-3.30,"For Matt", "Noosa yogurt"),
    new Purchase(13.99-4, "For Matt", "New fruit bars"),
    new Purchase(7.99, "For Matt", "Raspberries"),
    new Purchase(4.49, "For Matt", "Strawberries"),
    new Purchase(5.99, "Groceries", "Kettle corn"),
    new Purchase(9.99, "Groceries", "mini choc chip cookies"),
    new Purchase(12.99, "Groceries", "Fruit bars"),
    new Purchase(8.99, "Groceries", "Almond florentine cookies"),
    new Purchase(5.99, "For Matt", "Cherry tomatoes"),
    new Purchase(7.99, "For Matt", "Sliced mozz"),
    new Purchase(19.99, "Groceries", "Applesauce packets"),
    new Purchase(11.99, "Health", "Melatonin"),
    new Purchase(7.99, "Groceries", "Mango bowls"),
    new Purchase(1.49, "Groceries", "8 bananas"),
    new Purchase(14.89, "Groceries", "Choc almonds"),
    new Purchase(1.84, "For Matt", "1% tax"),
    new Purchase(20.96, "Home Improvement", "9% tax")
]),

new ExternalTransaction(makeDate(2024, 2, 12), 50.00, elliot, visa3408, [
    new Purchase(50.00, "Health", "Therapy copay")
]),

new ExternalTransaction(makeDate(2024, 2, 12), 43.62, new Vendor("Naf Naf Grill"), visa3408, [
    new Purchase(11.00, "Dining", "Couscous bowl for M"),
    new Purchase(10.45, "Dining", "Hummus bowl for V"),
    new Purchase(13.95, "For Matt", "Plate for Matt"),
    new Purchase(2.00, "For Matt", "taxes"),
    new Purchase(2.13, "Dining", "taxes"),
    new Purchase(3.59, "Dining", "Tip")
]),

new ExternalTransaction(makeDate(2024, 2, 13), 100.00, elliot, visa3408, [
    new Purchase(100.00, "Health", "Backdated therapy copays")
]),

new ExternalTransaction(makeDate(2024, 2, 15), 22.16, tacoBell, visa3408, [
    new Purchase(22.16, "Dining", "Dinner")
]),

t(makeDate(2024, 2, 15), 50.00, elliot, visa3408, [
    p(50.00, "Health", "Nurse practioner copay")
]),

new ExternalTransaction(makeDate(2024, 2, 16), 677.90, costco, visa8042, [
    new Purchase(199.97, "Home Improvement", "Lorex DVR & cameras"),
    new Purchase(199.97, "Home Improvement", "Lorex DVR & cameras"),
    new Purchase(199.97, "Home Improvement", "Lorex DVR & cameras"),
    new Purchase(7.99, "Groceries", "KS mini cookies"),
    new Purchase(3.99, "For Matt", "Blackberries"),
    new Purchase(5.89, "For Matt", "Raspberries"),
    new Purchase(5.89, "For Matt", "Raspberries"), 
    new Purchase(54.23, "Home Improvement", "Tax")
]),

t(makeDate(2024, 2, 16), 662.53, ameren, chase, [
    p(662.53, "Utilities", "Gas/electric for 1-24")
]),

new ExternalTransaction(makeDate(2024, 2, 16), 36.02, costco, visa8042, [
    new Purchase(36.02, "Car", "11.261 gal of gas at $3.199 per gal")
]),

t(makeDate(2024, 2, 16), 165.74, carle, visa3408, [
    p(165.74, "Health", "Carle payment plan")
]),

new ExternalTransaction(makeDate(2024, 2, 18), 32.68, new Vendor("Best Buy"), visa3408, [
    new Purchase(29.99, "Home Improvement", "8 port gigabit ethernet switch"),
    new Purchase(2.69, "Home Improvement", "Tax")
]),

new ExternalTransaction(makeDate(2024, 2, 18), 17.37, menards, visa3408, [
    new Purchase(2.98, "For Matt", "Hangers"),
    new Purchase(6.99, "Home Improvement", "Wire mounting staples"),
    new Purchase(5.97, "Both Fun Money", "Finishing wheel"),
    new Purchase(1.43, "Home Improvement", "Tax"),
]),

new ExternalTransaction(makeDate(2024, 2, 18), 23.40, new Vendor("Petsmart"), visa3408, [
    new Purchase(9.99, "Fish", "Aquarium decor"),
    new Purchase(3.99, "Fish", "Aquarium decor"),
    new Purchase(7.49, "Fish", "Fish food"),
    new Purchase(1.93, "Fish", "Tax")
]),

t(makeDate(2024, 2, 21), 100, emerge, visa3408, [
    p(50, "Health", "M one on one with Lauren"),
    p(50, "Health", "V one on one with Lauren")
]),

new ExternalTransaction(makeDate(2024, 2, 21), 30.55, meijer, visa3408, [
    new Purchase(5.98, "Health", "Flossers"),
    new Purchase(3.19-0.96, "Health", "Antacids"),
    new Purchase(3.49, "Health", "Stomach medicine"),
    new Purchase(7.49, "Health", "Acne scrub"),
    new Purchase(3.89, "Health", "Hand sanitizer"),
    new Purchase(1.28, "Groceries", "bananas"),
    new Purchase(4.18, "Groceries", "Paper plates"),
    new Purchase(1.94, "Health", "9% tax"),
    new Purchase(0.07, "Groceries", "1% tax")
]),

new ExternalTransaction(makeDate(2024, 2, 21), 8.56, tacoBell, visa3408, [
    new Purchase(8.56, "Dining", "Dinner")
]),

t(makeDate(2023, 2, 21), 50.00, elliot, visa3408, [
    p(50.00, "Health", "Therapy Copay")
]),

new ExternalTransaction(makeDate(2024, 2, 22), 24.71, tacoBell, visa3408, [
    new Purchase(24.71, "Dining", "Dinner")
]),

new ExternalTransaction(makeDate(2024, 2, 23), 61.51, water, chase, [
    new Purchase(61.51, "Utilities", "Water for 1/24")
]),

new ExternalTransaction(makeDate(2024, 2, 23), 38.00, lamixteca, visa3408, [
    new Purchase(38.00, "Dining", "Dinner")
]),

t(makeDate(2024, 2, 23), 89.99, i3, chase, [
    p(89.99, "Utilities", "i3 broadband internet bill")
]),

new ExternalTransaction(makeDate(2024, 2, 25), 35.82, meijer, visa3408, [
    new Purchase(5.49, "Housewares", "Rope to fix chair"),
    new Purchase(3.29, "Groceries", "4 lbs sugar"),
    new Purchase(20.99, "Cats", "cat litter"),
    new Purchase(1.99, "Groceries", "clementines"),
    new Purchase(1.49, "Meridith Fun Money", "Discount chocolates"),
    new Purchase(2.57, "Cats", "Tax")
]),

new ExternalTransaction(makeDate(2024, 2, 26), 34.39, new Vendor("Aspen Tap House"), visa8042, [
    new Purchase(28.39, "Dining", "Dinner"),
    new Purchase(6.00, "Dining", "Tip")
]),

new ExternalTransaction(makeDate(2024, 2, 26), 15.64, meijer, visa8042, [
    new Purchase(2.62, "Groceries", "Milk"),
    new Purchase(2.69, "Groceries", "Eggs"),
    new Purchase(5.19, "Groceries", "Life Cereal"),
    new Purchase(4.99, "Groceries", "Reese's puffs"),
    new Purchase(0.15, "Groceries", "1% sales tax")
]),

new ExternalTransaction(makeDate(2024, 2, 27), 156.38, costco, new Account("CC rewards"), [
    new Purchase(12.99, "For Matt", "Morning Summer Cereal"),
    new Purchase(7.99, "For Matt", "Mangoes"),
    new Purchase(16.36, "For Matt", "Southwest Wrap"),
    new Purchase(14.99, "For Matt", "Frozen 3 berry blend"),
    new Purchase(6.99, "Groceries", "Halloumi"),
    new Purchase(14.79, "For Matt", "Egg bites"),
    new Purchase(5.99, "Groceries", "Popcorn"),
    new Purchase(12.99, "For Matt", "Grilled chicken"),
    new Purchase(4.49, "For Matt", "Blackberries"),
    new Purchase(4.49, "For Matt", "Blackberries"),
    new Purchase(5.49, "For Matt", "Raspberries"),
    new Purchase(10.99, "Groceries", "Choc chips"),
    new Purchase(8.99, "Groceries", "Tilamook medium cheddar"),
    new Purchase(6.99, "Groceries", "4 lbs honeycrisp apples"),
    new Purchase(15.99, "Groceries", "Ginger beer"),
    new Purchase(5.86, "Groceries", "Tax")
]),

new ExternalTransaction(makeDate(2024, 2, 27), 63.66, new Vendor("Pet Supplies Plus"), visa3408, [
    new Purchase(2.48, "Fish", "Cherry barb"),
    new Purchase(55.92, "Fish", "4 baby catfish"),
    new Purchase(5.26, "Fish", "Tax")
]),

new ExternalTransaction(makeDate(2024, 2, 27), 55.00, new Vendor("Seven Saints"), visa3408, [
    new Purchase(10.99, "Dining", "Vishal sandwich and soup"),
    new Purchase(14.99, "Dining", "Meridith salad, soup, and slider"),
    new Purchase(14.99, "For Matt", "Matt's salad, soup, and slider"),
    new Purchase(1.00, "Dining", "Extra garlic dressing"),
    new Purchase(4.70, "For Matt", "Tax"),
    new Purchase(8.33, "Dining", "Tip")
]),

t(makeDate(2024, 2, 28), 50.00, elliot, visa3408, [
    p(50.00, "Health", "M Therapy copay")
]),

t(makeDate(2024, 2, 28), 50.00, emerge, visa3408, [
    p(50.00, "Health", "Couple's counseling copay")
]),

new ExternalTransaction(makeDate(2024, 3, 1), 18.26, tacoBell, visa3408, [
    new Purchase(18.26, "Dining", "Dinner order")
]),

t(makeDate(2024, 3, 2), 32.70, new Vendor("H4H Restore"), visa3408, [
    p(20, "Both Fun Money", "Single person gliding rocking chair"),
    p(10.00, "Woodworking", "Respirator"),
    p(2.70, "Both Fun Money", "Tax")
]),

t(makeDate(2024, 3, 2), 15.22, lowes, visa8042, [
    p(10.98, "Home Improvement", "Extendable Paint roller"),
    p(2.98, "Home Improvement", "Clear Caulk"),
    p(1.26, "Home Improvement", "Tax")
]),

new ExternalTransaction(makeDate(2024, 3, 3), 29.80, new Vendor("Jets"), visa3408, [
    new Purchase(29.80, "Dining", "Pizza and breadsticks")
]),

new ExternalTransaction(makeDate(2024, 3, 3), 37.83, menards, visa3408, [
    new Purchase(1.99, "Housewares", "Tan painter's tape"),
    new Purchase(5.99, "Home Improvement", "Curved locking pliers"),
    new Purchase(4.99, "Home Improvement", "Long nose locking pliers"),
    new Purchase(11.99, "Home Improvement", "Nut splitter set"),
    new Purchase(9.75, "Home Improvement", "Painting tray kit"),
    new Purchase(3.12, "Home Improvement", "Tax")
]),

new ExternalTransaction(makeDate(2024, 3, 4), 104.49, meijer, visa3408, [
    new Purchase(4.98, "Fish", "Leaf bed"),
    new Purchase(0.89, "Groceries", "Cucumbers"),
    new Purchase(0.99, "Groceries", "Cilantro"),
    new Purchase(0.99, "Groceries", "Parsley"),
    new Purchase(0.99, "Groceries", "Tomatoes"),
    new Purchase(13.23-6.23, "Groceries", "Bell peppers"),
    new Purchase(1.99, "Groceries", "Tortillas"),
    new Purchase(5.24, "Groceries", "2 gals milk"),
    new Purchase(2.69, "Groceries", "dozen eggs"),
    new Purchase(2.85, "Groceries", "Sour Cream"),
    new Purchase(6.00, "Groceries", "Kettle chips"),
    new Purchase(3.59, "Groceries", "Loaf of potato bread"),
    new Purchase(3.69, "Groceries", "Apple straws"),
    new Purchase(3.89, "Groceries", "5 pack pitas"),
    new Purchase(1.99, "Groceries", "Garlic hummus"),
    new Purchase(4.49, "Groceries", "Deli salsa"),
    new Purchase(6.19, "Groceries", "Cereal"),
    new Purchase(20.99, "Cats", "Cat litter"),
    new Purchase(1.99, "Groceries", "Clementines"),
    new Purchase(2.99, "Groceries", "Baby spinach"),
    new Purchase(7.98, "Groceries", "2 half gallons iced coffee"),
    new Purchase(4.99, "Groceries", "Guacamole"),
    new Purchase(4.00, "Groceries", "Shredded cheese"),
    new Purchase(2.34, "Cats", "9% sales tax"),
    new Purchase(0.75, "Groceries", "1% sales tax")
]),

new ExternalTransaction(makeDate(2024, 3, 5), 39.35, new Vendor("Noodles & Co"), visa3408, [
    new Purchase(39.35, "Dining", "Dinner order")
]),

new ExternalTransaction(makeDate(2024, 3, 6), 335.45, costco, visa3408, [
    new Purchase(17.99, "For Matt", "Beef jerky"),
    new Purchase(19.99, "For Matt", "Protein bars"),
    new Purchase(12.99, "For Matt", "Burrito bowls"),
    new Purchase(11.99, "For Matt", "Dried figs"),
    new Purchase(10.99, "For Matt", "Premade tortelloni"),
    new Purchase(13.99, "For Matt", "Blueberry acai truffles"),
    new Purchase(5.99, "For Matt", "Tomato medley"),
    new Purchase(12.79, "For Matt", "Frozen 4 berry medley"),
    new Purchase(3.99, "For Matt", "Spring mix"),
    new Purchase(12.89, "For Matt", "Trail mix"),
    new Purchase(5.49, "For Matt", "Raspberries"),
    new Purchase(7.99, "For Matt", "Organic raspberries"),
    new Purchase(5.49, "For Matt", "Strawberries"),
    new Purchase(8.98, "For Matt", "2 containers blackberries"),
    new Purchase(16.15, "For Matt", "Southwest wraps"),
    new Purchase(5.39, "For Matt", "Broccoli"),
    new Purchase(7.69, "For Matt", "Sliced mozzerella"),
    new Purchase(17.89, "For Matt", "Salmon skewers"),
    new Purchase(6.89, "For Matt", "mixed peppers"),
    new Purchase(9.99, "For Matt", "Noosa yoghurt"),
    new Purchase(3.50, "For Matt", "Bagels"),
    new Purchase(3.49, "Groceries", "Bagels"),
    new Purchase(6.99, "Groceries", "Honeycrisp apples"),
    new Purchase(6.99, "Groceries", "Honeycrisp apples"),
    new Purchase(9.89, "Groceries", "Dots pretzels"),
    new Purchase(7.89, "Groceries", "Walnuts"),
    new Purchase(13.99, "Groceries", "Fruit bars"),
    new Purchase(11.99, "Groceries", "Goldfish"),
    new Purchase(8.99, "Groceries", "Almonds"),
    new Purchase(5.99, "For Matt", "Cucumbers"),
    new Purchase(5.49, "Groceries", "Strawberries"),
    new Purchase(5.99-2.30, "Groceries", "Popcorn"),
    new Purchase(12.99, "Groceries", "Individual guac packs"),
    new Purchase(9.99, "Housewares", "Storage bins"),
    new Purchase(7.03, "Groceries", "Tax"),
]),

t(makeDate(2024, 3, 6), 50.00, emerge, visa3408, [
    p(50.00, "Health", "Couples therapy copay")
]),

t(makeDate(2024, 3, 7), 30.92, tacoBell, visa3408, [
    p(5.99, "For Nick", "Veggie cravings box"),
    p(5.99, "Dining", "Veggie Cravings box"),
    p(3.29, "Dining", "Stacker with creamy jalepeno sauce"),
    p(2.99, "Dining", "Cheesy double beef burrito"),
    p(5.99, "Dining", "Delivery fee"),
    p(4.57, "Dining", "Tip"),
    p(2.10, "Dining", "Tax")
]),

new ExternalTransaction(makeDate(2024, 3, 7), 94.79, meijer, visa3408, [
    new Purchase(5.49, "Cats", "Nim bday present"),
    new Purchase(3.29-1.32, "Health", "Hydrocortisone"),
    new Purchase(8.98-1.79, "Health", "2 tubs neosporin"),
    new Purchase(5.49, "Health", "Tylenol"),
    new Purchase(6.59-2.64, "Health", "Stomach meds"),
    new Purchase(9.99, "Health", "Cold medicine"),
    new Purchase(8.24, "Health", "Eye drops"),
    new Purchase(1.09, "Groceries", "Dry pasta"),
    new Purchase(1.19, "Groceries", "Buttermilk"),
    new Purchase(4.58-1.15, "Groceries", "2 loaves garlic bread"),
    new Purchase(2.79, "Groceries", "Cocoa"),
    new Purchase(2.99, "Groceries", "Lady fingers"),
    new Purchase(3.29, "Groceries", "Kettle chips"),
    new Purchase(4.19, "Groceries", "Margarine"),
    new Purchase(9.58, "Groceries", "16 oz mascarpone cheese"),
    new Purchase(4.99, "Groceries", "Espresso powder"),
    new Purchase(5.69, "Groceries", "whipping cream"),
    new Purchase(5.89, "Groceries", "boursin"),
    new Purchase(2.49, "Groceries", "Basil alfredo"),
    new Purchase(2.00, "Groceries", "Shredded italian cheese"),
    new Purchase(1.49, "Groceries", "Ricotta cheese"),
    new Purchase(1.37, "Health", "Tax"),
]),

new ExternalTransaction(makeDate(2024, 3, 8), 3.89, costco, visa3408, [
    new Purchase(3.89, "Dining", "Dinner at costco")
]),

new ExternalTransaction(makeDate(2024, 3, 8), 38.19, costco, visa3408, [
    new Purchase(38.19, "Car", "11.577 gal gas at $3.299 per gal")
]),

new ExternalTransaction(makeDate(2024, 3, 8), 75.20, meijer, visa3408, [
    new Purchase(1.49, "Health", "little notebook for therapy"),
    new Purchase(12.99, "Housewares", "S hooks"),
    new Purchase(25.98, "Housewares", "Foaming soap pumps"),
    new Purchase(3.25, "Garden", "Bird feeder"),
    new Purchase(8.50, "Housewares", "Water bottle"),
    new Purchase(2.69, "Groceries", "Low carb Dry pasta"),
    new Purchase(3.15, "Groceries", "Lentil pasta"),
    new Purchase(4.29, "Groceries", "Pasta"),
    new Purchase(3.99, "Groceries", "Ice cream"),
    new Purchase(3.99, "Groceries", "Ice cream"),
    new Purchase(4.88, "Housewares", "Tax")
]),

new ExternalTransaction(makeDate(2024, 3, 8), 54.65, menards, visa3408, [
    new Purchase(14.95, "Home Improvement", "Springs for sink hose"),
    new Purchase(4.34, "Housewares", "Upholstery cleaner"),
    new Purchase(9.99, "Home Improvement", "Pull down faucet weight"),
    new Purchase(0.89, "Home Improvement", "Plumber's tape"),
    new Purchase(19.97, "Housewares", "Fire extinguisher"),
    new Purchase(4.51, "Housewares", "Tax")
]),

t(makeDate(2024, 3, 14), 50.00, elliot, visa3408, [
    p(50.00, "Health", "Therapy Copay")
]),

t(makeDate(2024, 3, 15), 100.00, elliot, visa3408, [
    p(50.00, "Health", "Nurse Practitioner copay"),
    p(50.00, "Health", "Old therapy copay")
]),

new ExternalTransaction(makeDate(2024, 3, 15), 3.94, meijer, visa3408, [
    new Purchase(0.79, "Groceries", "Garlic"),
    new Purchase(0.99, "Groceries", "Cilantro"),
    new Purchase(2.62-0.5, "Groceries", "Milk"),
    new Purchase(0.04, "Groceries", "Tax")
]),

new ExternalTransaction(makeDate(2024, 3, 15), 12.34, meijer, visa3408, [
    new Purchase(3.99, "Groceries", "5 pack pitas"),
    new Purchase(5.49, "Groceries", "Spinach atrichoke dip"),
    new Purchase(5.49-2.75, "Groceries", "Tzatiki sauce"),
    new Purchase(0.12, "Groceries", "Tax")
]),

t(makeDate(2024, 3, 16), 165.74, carle, visa3408, [
    p(165.74, "Health", "Carle payemnt plan")
]),

t(makeDate(2024, 3, 18), 81.72, chewy, visa3408, [
    p(74.65, "Cats", "Cat food"),
    p(7.07, "Cats", "Tax")
]),

t(makeDate(2024, 3, 18), 302.55, ameren, chase, [
    p(302.55, "Utilities", "Gas/electric for 2-24")
]),

new ExternalTransaction(makeDate(2024, 3, 18), 172.33, meijer, visa3408, [
    new Purchase(6.89, "For Matt", "Sweet kale salad"),
    new Purchase(10.99, "For Matt", "FRozen 3 berry medley"),
    new Purchase(8.99, "For Matt", "Organic medeterranian salad"),
    new Purchase(9.99, "For Matt", "Noosa Yoghurt"),
    new Purchase(15.94, "For Matt", "SW wrap"),
    new Purchase(5.99, "For Matt", "Tomato medley"),
    new Purchase(13.99, "For Matt", "Chicken cubes"),
    new Purchase(2.99, "For Matt", "Blackberries"),
    new Purchase(11.99, "For Matt", "Fig candies"),
    new Purchase(9.99-3, "For Matt", "Boursin pack"),
    new Purchase(2.99, "For Matt", "Blackberries"),
    new Purchase(5.99, "For Matt", "Cucumbers"),
    new Purchase(5.59, "For Matt", "Raspberries"),
    new Purchase(5.59, "For Matt", "Raspberries"),
    new Purchase(6.39, "Groceries", "4 lbs honeycrisp apples"),
    new Purchase(6.39, "Groceries", "4 lbs honeycrisp apples"),
    new Purchase(19.99, "Clothing", "Convertible cargo pants"),
    new Purchase(9.99, "Groceries", "Lemoncello almonds"),
    new Purchase(5.99-2.30, "Groceries", "Popcorn"),
    new Purchase(5.99-2.30, "Groceries", "Popcorn"),
    new Purchase(7.28, "Groceries", "Tax")
]),

t(makeDate(2023, 3, 18), 50.00, elliot, visa3408, [
    p(50.00, "Health", "Nurse practitioner copay")
]),

t(makeDate(2024, 3, 18), 195.00, new Vendor("O'flaherty law"), visa3408, [
    p(195, BucketName.UNDEFINED, "Lawyer consultation fee")
]),

t(makeDate(2024, 3, 20), 50.00, elliot, visa3408, [
    p(50.00, "Health", "Therapy Copay")
]),

t(makeDate(2024, 3, 20), 79.00, new Vendor("Mattex"), visa8042, [
    p(79.00, "Home Improvement", "Cost to have sink checked and fixed after contract work")
]),

t(makeDate(2024, 3, 20), 50.00, emerge, visa3408, [
    p(50.00, "Health", "Couple's therapy copay")
]),

new ExternalTransaction(makeDate(2024, 3, 21), 22.00, new Vendor("Rainbow Garden"), visa3408, [
    new Purchase(22.00, "Dining", "Dinner w/ Emma")
]),

t(makeDate(2024, 3, 22), 16.26, tacoBell, visa3408, [
    p(2.99, "Dining", "Cheesy bean and rice burrito"),
    p(0.40, "Dining", "Avocado verdo salsa packet"),
    p(6.58, "Dining", "2 stackers with creamy jalepeno sauce"),
    p(5.99, "Dining", "Delivery fee"),
    p(2.49, "Dining", "Delivery tip"),
    p(-2.99, "Dining", "Discount coupon"),
    p(0.80, "Dining", "Tax")
]),

new ExternalTransaction(makeDate(2024, 3, 23), 64.74, meijer, visa3408, [
    new Purchase(3.18, "Groceries", "2 jars pasta sauce"),
    new Purchase(2.62, "Groceries", "Milk"),
    new Purchase(2.75, "Groceries", "Pepperoni"),
    new Purchase(2.99, "Groceries", "Riced cauliflower"),
    new Purchase(13.56, "Groceries", "4 bags brown sugar"),
    new Purchase(3.69, "Groceries", "Baby spinach"),
    new Purchase(3.79, "Groceries", "Celery seeds"),
    new Purchase(9.98-1.98, "Groceries", "Pepperoni frozen pizza"),
    new Purchase(7.89, "Groceries", "Shredded mozzerella"),
    new Purchase(14.49, "Cats", "Cat litter"),
    new Purchase(1.30, "Cats", "9% sales tax"),
    new Purchase(0.48, "Groceries", "1% sales tax")
]),

new ExternalTransaction(makeDate(2024, 3, 24), 28.27, new Vendor("Lowes"), visa3408, [
    new Purchase(13.98, "Garden", "Rabbit repellent"),
    new Purchase(6.98, "Garden", "Orchid"),
    new Purchase(4.98, "Home Improvement", "Caulk"),
    new Purchase(2.33, "Garden", "Tax")
]),

new ExternalTransaction(makeDate(2024, 3, 24), 45.62, sweetbasil, visa3408, [
    new Purchase(5.00, "Dining", "Hot chocolate"),
    new Purchase(17.00, "Dining", "Cinnamon roll french toast"),
    new Purchase(13.00, "Dining", "Breakfast sandwich meal"),
    new Purchase(3.01, "Dining", "Tax"),
    new Purchase(7.60, "Dining", "Tip")
]),

new ExternalTransaction(makeDate(2024, 3, 25), 20.00, cvs, visa3408, [
    new Purchase(20.00, "Health", "Buspar prescription")
]),

t(makeDate(2024, 3, 25), 89.99, i3, chase, [
    p(89.99, "Utilities", "Internet bill")
]),

t(makeDate(2024, 3, 25), 50, elliot, visa3408, [
    p(50, "Health", "Nurse practioner appointment copay")
]),

new ExternalTransaction(makeDate(2024, 3, 26), 19.61, new Vendor("Advance Auto Parts"), chase, [
    new Purchase(19.61, "Car", "Coolant")
]),

new ExternalTransaction(makeDate(2024, 3, 26), 163.84, costco, visa3408, [
    new Purchase(5.79, "For Matt", "Raspberries"),
    new Purchase(2.99, "For Matt", "Blackberries"),
    new Purchase(2.99, "For Matt", "Blackberries"),
    new Purchase(2.99, "For Matt", "Blackberries"),
    new Purchase(7.99, "For Matt", "Thai chili salad"),
    new Purchase(5.79, "For Matt", "Raspberries"),
    new Purchase(7.69, "For Matt", "Sliced Mozzerella"),
    new Purchase(11.99, "For Matt", "Fig truffles"),
    new Purchase(17.89, "For Matt", "Salmon skewers"),
    new Purchase(16.57, "For Matt", "SW wrap"),
    new Purchase(9.99-3, "For Matt", "Boursin"),
    new Purchase(13.99, "Groceries", "Fruit bars"),
    new Purchase(6.99, "Groceries", "4 lbs honeycrisp apples"),
    new Purchase(10.99, "Groceries", "Choc chips"),
    new Purchase(10.99, "Groceries", "Choc chips"),
    new Purchase(12.49, "Groceries", "Cashews"),
    new Purchase(6.03, "For Matt", "Tax")
]),

t(makeDate(2024, 3, 26), -80, Matt, chase, [
    p(-80, "For Matt", "Payback for 3/26 costco trip")
]),

t(makeDate(2024, 3, 27), 50.00, elliot, visa3408, [
    p(50.00, "Health", "Therapy copay")
]),

t(makeDate(2024, 3, 29), 7.50, new Vendor("McDonalds"), visa8042, [
    p(2.99, "Dining", "Med french fries"),
    p(3.99, "Dining", "Caramel coffee"),
    p(0.52, "Dining", "Tax")
]),

t(makeDate(2024, 3, 29), 15.01, meijer, visa3408, [
    p(15.01, "Car", "5.054 gal gas at $2.969 per gal")
]),

t(makeDate(2024, 3, 29), 12.52, new Vendor("Subway"), visa8042, [
    p(4.99, "Dining", "6 inch veggie delight"),
    p(6.39, "Dining", "6 inch turkey sub"),
    p(1.14, "Dining", "Tax")
]),

t(makeDate(2024, 4, 1), 368.22, costco, visa8042, [
    p(69.99, "Both Fun Money", "Axe throwing game"),
    p(16.79, "For Matt", "Tyson chicken"),
    p(14.49, "For Matt", "Pistachios"),
    p(5.89, "For Matt", "sweet kale salad"),
    p(5.99, "For Matt", "Celery sticks"),
    p(8.99, "For Matt", "Mediterranian salad"),
    p(11.99, "For Matt", "Dates"),
    p(5.59, "For Matt", "Mini peppers"),
    p(5.99, "For Matt", "Cucumbers"),
    p(5.49, "For Matt", "Carrots"),
    p(15.99, "For Matt", "Protein bars"),
    p(9.99, "For Matt", "Bunch lettuce?"),
    p(9.99, "For Matt", "Choc covered mangoes"),
    p(5.89*2, "For Matt", "2 containers raspberries"),
    p(2.99*3, "For Matt", "3 containers blackberries"),
    p(8.99, "For Matt", "Cocoa cereal"),
    p(6.99, "For Matt", "4 lbs honeycrisp apples"),
    p(19.49, "Groceries", "Toilet paper"),
    p(16.99, "Groceries", "Tuxedo cake"),
    p(6.99*2, "Groceries", "8 lbs honeycrisp apples"),
    p(5.99, "Groceries", "Popcorn"),
    p(8.99, "Groceries", "Pepperoni bagel bites"),
    p(36.99, "Both Fun Money", "Lego plants for Ani"),
    p(6.69, "Groceries", "Mandarins"),
    p(14.49, "Health", "Allergy medicine"),
    p(3.99, "Groceries", "Churro puffs"),
    p(15.72, "Both Fun Money", "Tax")
]),

t(makeDate(2024, 4, 1), 28.98, menards, visa8042, [
    p(5.98, "Housewares", "2 yankee whisks"),
    p(28.98, "Home Improvement", "Garage door remote"),
    p(2.99, "Housewares", "Mini spatula"),
    p(3.42, "Housewares", "Tax")
]),

t(makeDate(2024, 4, 3), 50.00, emerge, visa3408, [
    p(50.00, "Health", "Couples therapy copay")
]),

t(makeDate(2024, 4, 4), 126.92, trash, chase, [
    p(126.92, "Utilities", "March and april trash service")
]),

t(makeDate(2024, 4, 5), 50.00, elliot, visa3408, [
    p(50.00, "Health", "Nurse Practitioner copay")
]),

t(makeDate(2024, 4, 6), 20.93, sweetbasil, visa3408, [
    p(16.00, "Dining", "Hobo Skillet"),
    p(1.44, "Dining", "Tax"),
    p(3.49, "Dining", "Tip")
]),

t(makeDate(2024, 4, 7), 99.42, costco, visa3408, [
    p(7.49, "Trip", "Kettle chips"),
    p(17.79, "Groceries", "Granola bars"),
    p(8.99, "Trip", "Morning rolls"),
    p(6.99, "Trip", "Lighters"),
    p(2.99, "Trip", "Strawberries"),
    p(7.89-3.00, "Groceries", "Parmesan"),
    p(5.69, "Trip", "Blueberries"),
    p(2.99, "Trip", "Blackberries"),
    p(2.99, "Trip", "Blackberries"),
    p(5.89, "For Matt", "Raspberries"),
    p(5.89, "Trip", "Raspberries"),
    p(5.89, "Trip", "Raspberries"),
    p(8.99, "Housewares", "Collapsible crate"),
    p(8.99, "Housewares", "Collapsible crate"),
    p(2.96, "Groceries", "Tax")
]),

t(makeDate(2024, 4, 7), 65.30, costco, visa3408, [
    p(65.30, "Car", "18.771 gal gas at $3.479 per gal")
]),

t(makeDate(2024, 4, 7), 56.28, meijer, visa3408, [
    p(14.58, "Trip", "Bugspray"),
    p(5.29, "Groceries", "Body wash"),
    p(0.92, "Groceries", "Tomatoes"),
    p(0.15, "Trip", "Jalepeno"),
    p(5.29, "Trip", "Choc chip muffins"),
    p(5.49, "Trip", "Lemon poppyseed mini muffins"),
    p(5.49, "Trip", "Mini muffin variety pack"),
    p(11.99, "Cats", "Cat litter"),
    p(2.00, "Trip", "Sliced cheese"),
    p(2.00, "Trip", "Sliced cheese"),
    p(3.08, "Trip", "Tax")
]),

t(makeDate(2024, 4, 7), 95.00, new Vendor("Mimmols Pizza"), chase, [
    p(10.99, "For Ani", "Fettuccini Alfredo"),
    p(8.99, "For Varsha", "Stuffed Mushrooms"),
    p(12.99, "Dining", "Rigatoni ala carbonara"),
    p(15.99, "For Varsha", "Special shrimp pasta for Dylan"),
    p(11.99, "Dining", "Baked Mostacioli"),
    p(13.99, "For Matt", "Meatball Parmigiano"),
    p(5.63, "Dining", "Tax"),
    p(95-80.57, "Dining", "Tip")
]),

t(makeDate(2024, 4, 8), 81.86, new Vendor("Siam Terrace"), visa3408, [
    p(16.99, "Dining", "Mongolian Beef"),
    p(5.00, "Dining", "Carb rangoon"),
    p(13.99, "For Ani", "Thai fried rice"),
    p(14.99, "Dining", "Sweet and Sour stir fry"),
    p(13.99, "For Matt", "Pad kee mao"),
    p(7.15, "Dining", "Tax"),
    p(9.75, "Dining", "Tip and Fees"),
]),

t(makeDate(2024, 4, 8), 3.90, new Vendor("Walmart"), visa3408, [
    p(1.22, "Trip", "Spring Water"),
    p(1.22, "Trip", "Distilled water"),
    p(1.38, "Groceries", "Lemonade")
]),

t(makeDate(2024, 4, 10), 50.00, elliot, visa3408, [
    p(50.00, "Health", "Therapy Copay")
]),

t(makeDate(2024, 4, 11), 70.41, costco, visa3408, [
    p(8.49, "For Matt", "Organic Granola"),
    p(5.59, "For Matt", "Mini Peppers"),
    p(12.89, "For Matt", "Kirkland trail mix"),
    p(5.89, "For Matt", "Raspberries"),
    p(5.89, "For Matt", "Raspberries"),
    p(3.49, "For Matt", "Blackberries"),
    p(3.49, "For Matt", "Blackberries"),
    p(3.49, "For Matt", "Blackberries"),
    p(18.99, "Groceries", "Toilet paper"),
    p(2.20, "For Matt", "Tax")
]),

t(makeDate(2024, 4, 11), -20, Matt, chase, [
    p(-20, "For Matt", "Payback for 4/11 costco trip")
]),

t(makeDate(2024, 4, 12), 69.49, meijer, visa3408, [
    p(1.45, "Groceries", "Onions"),
    p(5.24, "Groceries", "2 gal milk"),
    p(4.99-1.00, "Groceries", "Iced coffee"),
    p(5.29, "Groceries", "Life Cereal"),
    p(5.29, "Groceries", "Dishwasher detergent"),
    p(5.69, "Groceries", "Corn syrup"),
    p(6.79, "Groceries", "Honey Bunches of Oats"),
    p(8.49, "Groceries", "2 pack peanut butter"),
    p(20.99, "Cats", "Cat litter"),
    p(2.37, "Cats", "9% sales tax"),
    p(0.41, "Groceries", "1% sales tax")
]),

t(makeDate(2024, 4, 13), 66.44, new Vendor("Neil St Blue's"), visa3408, [
    p(3.00, "Dining", "Lemonade"),
    p(24.00, "Dining", "2 meat combo platter"),
    p(8.00, "Dining", "Cheese curds"),
    p(8.00, "Dining", "Red beans and rice"),
    p(7.74, "Dining", "Included gratuity"),
    p(4.95, "Dining", "Tax"),
    p(10.75, "Dining", "Tip")
]),

t(makeDate(2024, 4, 15), 62.52, ameren, chase, [
    p(62.52, "Utilities", "Gas/electric for 3-24")
]),

t(makeDate(2024, 4, 15), 30, Ani, chase, [
    p(30.00, "Trip", "Blankets")
]),

t(makeDate(2024, 4, 15), -56, Nick, chase, [
    p(-20, "Groceries", "Stolen condiments"),
    p(-36, "Trip", "Payment for cabin")
]),

t(makeDate(2024, 4, 15), 100, elliot, visa3408, [
    p(100, "Health", "Backdated therapy copays")
]),

t(makeDate(2024, 4, 15), 200, Amit, chase, [
    p(200, "Education", "Student loan repayment")
]),

t(makeDate(2024, 4, 16), 165.74, carle, visa3408, [
    p(165.74, "Health", "Carle payment plan")
]),

t(makeDate(2024, 4, 17), 50.00, emerge, visa3408, [
    p(50.00, "Health", "Couples therapy copay")
]),

t(makeDate(2024, 4, 18), 135.56, costco, visa8042, [
    p(5.99, "For Matt", "Celery"),
    p(3.49, "For Matt", "Blackberries"),
    p(5.79, "For Matt", "Broccoli"),
    p(5.59, "For Matt", "Mini peppers"),
    p(5.89, "For Matt", "Raspberries"),
    p(8.99, "For Matt", "Mediterranian salad blend"),
    p(5.59, "For Matt", "Strawberries"),
    p(3.99, "For Matt", "Spinach"),
    p(10.99, "For Matt", "3 berry medley frozen"),
    p(15.99, "For Matt", "Chicken breast meat"),
    p(5.99, "Groceries", "Celery"),
    p(9.99, "Groceries", "Mangos"),
    p(5.99, "Groceries", "4 lbs honeycrisp apples"),
    p(9.99, "Groceries", "3 pack whipped cream"),
    p(8.49, "Groceries", "8 cans black beans"),
    p(5.99, "Groceries", "4 lbs honeycrisp apples"),
    p(11.99, "Groceries", "Goldfish crackers"),
    p(1.34, "Groceries", "Tax")
]),

t(makeDate(2024, 4, 18), 50.00, elliot, visa3408, [
    p(50.00, "Health", "Therapy copay")
]),

t(makeDate(2024, 4, 19), 50.00, elliot, visa3408, [
    p(50.00, "Health", "Copay for appt with psych nurse")
]),

t(makeDate(2024, 4, 19), 82.40, water, chase, [
    p(82.40, "Utilities", "March water bill")
]),

t(makeDate(2024, 4, 19), 33.68, meijer, visa3408, [
    p(0.99, "Groceries", "Green onions"),
    p(1.39, "Groceries", "eggs"),
    p(1.68, "Groceries", "Dijon mustard"),
    p(2.29, "Groceries", "Bacon bits"),
    p(2.49, "Groceries", "Ketchup"),
    p(2.89, "Groceries", "Baby spinach"),
    p(3.19, "Groceries", "2 frozen pie shells"),
    p(3.29, "Groceries", "4 lbs granulated sugar"),
    p(3.55, "Groceries", "Heavy whipping cream"),
    p(3.59, "Groceries", "Mayonnaise"),
    p(5.99, "Groceries", "Sriracha"),
    p(2.00, "Groceries", "Shredded cheddar"),
    p(0.33, "Groceries", "Tax")
]),

t(makeDate(2024, 4, 20), 13.00, cvs, visa3408, [
    p(3.00, "Health", "Sertraline"),
    p(10.00, "Health", "Adderall"),
]),

t(makeDate(2024, 4, 21), 74.82, menards, visa3408, [
    p(29.20, "Garden", "2 rubber tree rings"),
    p(17.97, "Garden", "Sunflower bird seed blend"),
    p(7.50, "Garden", "3 cubic ft soil"),
    p(3.33, "For Ani", "Sweet basil plant"),
    p(3.33, "Garden", "Yellow pear cherry tomato plant"),
    p(3.33, "Garden", "Purple bell pepper plant"),
    p(2.99, "Garden", "Suet plug"),
    p(0.99, "Garden", "Sunny area flower seeds"),
    p(6.18, "Garden", "Tax")
]),

t(makeDate(2024, 4, 22), 8, new Vendor("Parchment"), visa3408, [
    p(8.00, "Meridith Fun Money", "Transcripts")
]),

t(makeDate(2024, 4, 22), 22.83, meijer, visa3408, [
    p(1.65, "Groceries", "Burger Buns"),
    p(4.58, "Groceries", "2 loaves garlic bread"),
    p(2.62, "Groceries", "1 gal 2% milk"),
    p(3.68, "Groceries", "1.23 lbs broccoli"),
    p(1.03, "Groceries", "1 tomato"),
    p(3.49-0.45, "Groceries", "Alfredo sauce"),
    p(2.00, "Groceries", "Italian cheese"),
    p(2.00, "Groceries", "Cheddar cheese"),
    p(2.00, "Groceries", "Mozzarella cheese"),
    p(0.23, "Groceries", "Tax")
]),

t(makeDate(2024, 4, 23), 79.99, i3, chase, [
    p(79.99, "Utilities", "April Internet")
]),

t(makeDate(2024, 4, 28), 13.82, new Vendor("Kunf Fu Tea"), visa3408, [
    p(6.30, "Dining", "Vishal's milk tea"),
    p(6.15, "Dining", "Meridith's lemonade"),
    p(1.37, "Dining", "Tax")
]),

t(makeDate(2024, 4, 28), 80.00, lamixteca, visa8042, [
    p(80.00, "Dining", "Dinner with Matt and Max")
]),

t(makeDate(2024, 4, 30), 14.94, meijer, visa3408, [
    p(1.39, "Groceries", "Eggs"),
    p(2.62, "Groceries", "1 gal milk"),
    p(5.29, "Groceries", "Life cereal"),
    p(5.49, "Groceries", "Reese's puffs"),
    p(0.15, "Groceries", "1% sales tax")
]),

t(makeDate(2024, 4, 30), 21.73, menards, visa3408, [
    p(9.99, "Garden", "Hose nozzle"),
    p(3.99, "Garden", "Garden wire"),
    p(5.96, "Garden", "Small metallic planters"),
    p(1.79, "Garden", "9% sales tax")
]),

t(makeTime(2024, 5, 2, 18, 28), 212.70, costco, visa8042, [
    p(15.99, "For Ani", "Peanut M&Ms"),
    p(10.99, "For Matt", "Frozen berries"),
    p(12.89, "For Matt", "Trail mix"),
    p(13.99, "For Matt", "Fruit Bars"),
    p(5.99, "For Matt", "Celery"),
    p(6.49, "For Matt", "Seedless cucumbers"),
    p(13.99, "For Matt", "Roasted chicken"),
    p(8.99, "For Matt", "Medeterranian salad"),
    p(6.79, "For Matt", "Sweet kale salad"),
    p(5.59, "For Matt", "Mini peppers"),
    p(19.89, "For Matt", "Protein bars"),
    p(3.49, "For Matt", "Blackberries"),
    p(3.49, "For Matt", "Blackberries"),
    p(3.49, "For Matt", "Blackberries"),
    p(4.79, "For Matt", "Strawberries"),
    p(5.89, "For Matt", "Raspberries"),
    p(5.69, "For Matt", "4 lbs honeycrisp apples"),
    p(9.99, "Groceries", "Boursin 3 pack"),
    p(10.99, "Groceries", "Choc chips"),
    p(9.89, "Groceries", "Cheez-its"),
    p(11.79, "Groceries", "Goldfish"),
    p(5.99, "Groceries", "Veggie Straws"),
    p(5.69, "Groceries", "4 lbs honeycrisp apples"),
    p(5.69, "Groceries", "5 lbs honeycrisp apples"),
    p(4.24, "Groceries", "Tax")
]),

t(makeTime(2024, 5, 2, 18, 42), 2.77, costco, visa3408, [
    p(2.49, "Dining", "choc ice cream sundae"),
    p(0.28, "Dining", "Tax")
]),

t(makeTime(2024, 5, 2, 18, 30), 3.89, costco, visa3408, [
    p(1.99, "Dining", "Slice of cheese pizza"),
    p(1.50, "Dining", "Hot dog combo"),
    p(0.40, "Dining", "tax")
]),

t(makeTime(2024, 5, 5, 18, 46), 32.00, new Vendor("El Toro"), visa3408, [
    p(32.00, "Dining", "Dinner with Emma and Ani")
]),

t(makeTime(2024, 5, 6, 18, 38), 17.74, dominos, visa3408, [
    p(15.14, "Dining", "Pepperoni pizza"),
    p(15.14, "Dining", "Pineapple pizza"),
    p(-14.30, "Dining", "Coupon promo"),
    p(1.76, "Dining", "Tax")
]),

t(makeTime(2024, 5, 8, 14, 13), 70.82, meijer, visa3408, [
    p(3.98, "Health", "2 tubes toothpaste"),
    p(4.89, "Health", "Decongentant tylenol"),
    p(22.99, "Health", "Flonase"),
    p(1.39, "Groceries", "eggs"),
    p(1.65, "Groceries", "Bell pepper"),
    p(2.62, "Groceries", "1 gal milk"),
    p(28.99, "Cats", "Cat litter"),
    p(0.99, "Groceries", "Strawberries"),
    p(2.97, "Cats", "9% sales tax"),
    p(0.35, "Groceries", "1% sales tax")
]),

t(makeTime(2024, 5, 8, 16, 24), 50.00, elliot, visa3408, [
    p(50.00, "Health", "M Therapy copay")
]),

t(makeTime(2024, 5, 8, 14, 5), 10.00, cvs, visa3408, [
    p(10.00, "Health", "Adderall copay")
]),

t(makeTime(2024, 5, 9, 18), 40.00, Ani, chase, [
    p(40.00, "Dining", "Dinner with Anishi")
]),

t(makeTime(2024, 5, 11, 11, 32), 14.02, new Vendor("Portillo's"), visa3408, [
    p(4.19, "Dining", "hot dog for Ani"),
    p(3.69, "Dining", "Fries for Ani"),
    p(4.69, "Dining", "Cake shake for Ani"),
    p(1.45, "Dining", "Tax")
]),

t(makeTime(2024, 5, 11, 18, 4), 27.92, prairieGardens, visa3408, [
    p(25.97, "Meridith Fun Money", "Hibiscus for mother's day"),
    p(1.95, "Meridith Fun Money", "Tax")
]),

t(makeTime(2024, 5, 12, 16, 41), 39.09, costco, visa3408, [
    p(39.09, "Car", "11.995 gal gas at $3.259 per gal")
]),

t(makeTime(2024, 5, 15, 5, 47), 34.57, new Vendor("HogSalt Burgers"), visa3408, [
    p(34.57, "Dining", "Dinner with Jonathan, Max, and Priyankka")
]),

t(makeTime(2024, 5, 13, 18, 26), 22.95, new Vendor("Jeni's Ice Cream"), visa3408, [
    p(8.65, "Dining", "Vishal's ice cream cone"),
    p(9.45, "Dining", "Meridith'd ice cream cone"),
    p(2.13, "Dining", "tax"),
    p(2.72, "Dining", "tip")
]),



t(makeTime(2024, 5, 13, 18), 10.00, new Vendor("IPASS"), visa3408, [
    p(10.00, "Car", "IPass refill")
]),

t(makeTime(2024, 5, 14, 18, 0), 11.90, costco, visa3408, [
    p(5.89, "Groceries", "4 lbs honeycrisp apples"),
    p(5.89, "Groceries", "4 lbs honeycrisp apples"),
    p(0.12, "Groceries", "tax")
]),

t(makeTime(2024, 5, 14, 17, 54), 35.81, costco, visa3408, [
    p(35.81, "Car", "10.854 gal gas at $3.299 per gal")
]),

t(makeTime(2024, 5, 14, 17, 17), 11.91, joann, visa3408, [
    p(10.97, "Garden", "5.5 yards bug netting"),
    p(0.94, "Garden", "tax")
]),

t(makeTime(2024, 5, 14, 18, 27), 2.65, meijer, visa3408, [
    p(2.62, "Groceries", "1 gal milk"),
    p(0.03, "Groceries", "1% sales tax")
]),

t(makeTime(2024, 5, 14, 17, 45), 24.80, menards, visa3408, [
    p(16.77, "Home Improvement", "3 cabinet handles"),
    p(5.98, "Both Fun Money", "Yankee whisks for Matt and Ani"),
    p(2.05, "Home Improvement", "Tax")
]),

t(makeDate(2024, 5, 15), 39.81, ameren, chase, [
    p(39.81, "Utilities", "Gas/elecgtric for 4-24")
]),

t(makeTime(2024, 5, 15, 10, 22), 100.00, elliot, visa3408, [
    p(100.00, "Health", "Old therapy copays")
]),

t(makeTime(2024, 5, 15, 17, 14), 50.00, elliot, visa3408, [
    p(50.00, "Health", "M therapy copay")
]),

t(makeTime(2024, 5, 16, 18), 16.34, amazon, visa3408, [
    p(16.34, "Fish", "seachem flourish excel")
]),

t(makeTime(2024, 5, 16, 18, 30), 165.74, carle, visa3408, [
    p(165.74, "Health", "Carle payment plan")
]),

t(makeTime(2024, 5, 20, 18), 69.05, water, chase, [
    p(69.05, "Utilities", "Water for 4-24")
]),

t(makeTime(2024, 5, 20, 20, 23), 130.07, costco, visa3408, [
    p(15.89-5, "For Matt", "Protein Bars"),
    p(4.99, "For Matt", "Mini peppers"),
    p(8.99, "For Matt", "Mediterranian salad mix"),
    p(5.99, "For Matt", "Celery"),
    p(5.99, "For Matt", "Brocolli"),
    p(5.99, "For Matt", "Tomato medley"),
    p(5.89, "For Matt", "4 lbs honeycrisp apples"),
    p(5.89, "For Matt", "Raspberries"),
    p(5.89, "For Matt", "Raspberries"),
    p(4.49, "For Matt", "Strawberries"),
    p(5.99, "For Matt", "French bread pack"),
    p(13.99-3.50, "Health", "Meridith's Multivitamins"),
    p(11.99, "Groceries", "Spinach ravioli"),
    p(7.49, "Groceries", "Nonstick spray 2 pack"),
    p(16.99, "Health", "Tissues"),
    p(9.49, "Groceries", "Pesto spread"),
    p(2.63, "Groceries", "tax")
]),

t(makeTime(2024, 5, 20, 20, 32), 36.62, costco, visa3408, [
    p(36.62, "Car", "10.934 gal gas at $3.349 per gal")
]),

t(makeTime(2024, 5, 20, 19, 56), 40.59, menards, visa3408, [
    p(8.96, "Garden", "4 herb plants"),
    p(2.99, "Garden", "6 pack bell pepper plants"),
    p(6.66, "Garden", "2 eggplant plants"),
    p(3.33, "Garden", "serrano pepper plant"),
    p(15.31, "Garden", "Chicken wire"),
    p(3.34, "Garden", "Tax")
]),

t(makeTime(2024, 5, 20, 18, 23), 120.23, new Vendor("Sushi Man"), visa3408, [
    p(89.95, "Dining", "Birthday AYCE sushi"),
    p(10.34, "For Matt", "Tax"),
    p(20.04, "For Matt", "Tip")
]),

t(makeTime(2024, 5, 21, 18, 5), 38.41, meijer, visa3408, [
    p(5.49, "Garden", "Bamboo stakes"),
    p(5.78, "Garden", "Thai basil plant"),
    p(2.59, "Both Fun Money", "Nail polish"),
    p(2.59-1.04, "Both Fun Money", "Nail polish"),
    p(2.99, "Both Fun Money", "Nail polish"),
    p(2.99, "Both Fun Money", "Nail polish"),
    p(3.39, "Both Fun Money", "Nail polish"),
    p(1.69, "Both Fun Money", "Nail polish"),
    p(0.69, "Groceries", "Garlic bulb"),
    p(1.39, "Groceries", "1 dozen eggs"),
    p(2.15, "Groceries", "Taco bell sauce"),
    p(5.24, "Groceries", "2 gal milk"),
    p(2.38, "Garden", "9% sales tax"),
    p(0.09, "Groceries", "1% sales tax")
]),

t(makeTime(2024, 5, 21, 17, 14), 7.72, prairieGardens, visa3408, [
    p(3.99-0.40, "Garden", "Tomatillo plant"),
    p(3.99-0.40, "Garden", "Tomatillo plant"),
    p(0.54, "Garden", "Tax")
]),

t(makeTime(2024, 5, 22, 14, 19), 5.00, new Vendor("Loyola"), capOne, [
    p(5.00, "Health", "Parking at loyola")
]),

t(makeTime(2024, 5, 24, 16, 42), 91.75, meijer, visa3408, [
    p(0.99-0.35, "Groceries", "Stewed tomatoes"),
    p(1.09, "Groceries", "1 lb ziti pasta"),
    p(1.99, "Groceries", "8 oz cream cheese"),
    p(2.29-0.45, "Groceries", "Shredded cheddar"),
    p(2.29, "Groceries", "Shredded italian cheese"),
    p(2.59, "Groceries", "Froen garlic bread"),
    p(3.05-0.50, "Groceries", "alfredo pasta sauce"),
    p(3.25-3.25, "Groceries", "4 lbs white sugar"),
    p(3.59, "Groceries", "potato bread"),
    p(3.59-1.00, "Groceries", "Ricotta cheese"),
    p(3.69-0.75, "Groceries", "baby spinach"),
    p(5.29, "Groceries", "Ground beef"),
    p(13.99-1.00, "Groceries", "trash bags for kitchen"),
    p(28.99, "Cats", "cat litter"),
    p(1.99, "Groceries", "chocolate bar"),
    p(3.49, "Groceries", "Bell peppers"),
    p(3.99, "Groceries", "Vegan marshmallows"),
    p(-5.00, "Groceries", "$5 off coupon"),
    p(4.17, "Cats", "9% sales tax"),
    p(0.45, "Groceries", "1% sales tax")
]),

t(makeTime(2024, 5, 25, 18, 26), 38.77, costco, visa3408, [
    p(38.77, "Car", "11.61 gal gas at $3.339 per gal")
]),

t(makeTime(2024, 5, 25, 10, 24), 34.96, costco, visa3408, [
    p(34.96, "Car", "10.47 gal gas at $3.339 per gal")
]),

t(makeTime(2024, 5, 25, 16, 57), 26.00, new Vendor("Urbana Park District"), visa3408, [
    p(26.00, "Both Fun Money", "1 hour rental for 2 canoes")
]),

t(makeTime(2024, 5, 26, 13, 5), 5.95, meijer, visa3408, [
    p(3.29-3.29, "Groceries", "Free bag of kettle chips"),
    p(5.89, "Groceries", "3 lbs potatoes"),
    p(0.06, "Groceries", "1% sales tax")
]),

t(makeTime(2024, 5, 27, 19, 36), 9.00, tacoBell, capOne, [
    p(1.99, "Dining", "Cheesy bean and rice burrito"),
    p(6.19, "Dining", "Steak grilled cheese burrito"),
    p(0.31, "Dining", "Donation round up"),
    p(0.51, "Dining", "tax")
]),

t(makeTime(2024, 5, 28, 6, 7), 89.99, i3, chase, [
    p(89.99, "Utilities", "Internet for 6-24")
]),

t(makeTime(2024, 5, 28, 17, 39), 82.15, costco, visa3408, [
    p(8.49, "Groceries", "25 lbs flour"),
    p(19.99, "Groceries", "Apple sauce"),
    p(12.49, "Groceries", "unsalted cashews"),
    p(14.00, "Clothing", "XL pair convertible pants"),
    p(5.89, "Groceries", "honeycrisp apples"),
    p(5.89, "Groceries", "4 lbs Honeycrisp apples"),
    p(12.49, "Groceries", "Choc chips"),
    p(2.91, "Groceries", "Tax")
]),

t(makeTime(2024, 5, 28, 16, 36), 39.13, costco, visa3408, [
    p(39.13, "Car", "11.719 gal gas at $3.339 per gal")
]),

t(makeTime(2024, 5, 28, 17, 15), 10.64, lowes, visa3408, [
    p(9.76, "Garden", "20 ct inline drippers")
]),

t(makeTime(2024, 5, 28, 16, 57), 4.49, menards, visa3408, [
    p(4.49, "Garden", "lawn staples")
]),

t(makeTime(2024, 5, 28, 17, 0), 6.20, menards, capOne, [
    p(6.20, "Housewares", "Softener salt")
]),

t(makeTime(2024, 5, 30, 18, 23), 29.14, olivegarden, capOne, [
    p(29.14, "Dining", "Dinner w/ Emma")
]),

t(makeTime(2024, 5, 31, 11, 2), 45.09, meijer, capOne, [
    p(4.19, "Garden", "Hose washers"),
    p(9.99, "Garden", "Hose adapter"),
    p(1.39, "Groceries", "1 dozen eggs"),
    p(2.62, "Groceries", "1 gal milk"),
    p(3.99, "Groceries", "2 lbs brown sugar"),
    p(5.49, "Groceries", "reese's puffs cereal"),
    p(0.13, "Groceries", "1% sales tax"),
    p(14.69, "Health", "Shampoo"),
    p(2.60, "Garden", "9% sales tax")
]),

t(makeTime(2024, 6, 3, 18, 48), 69.30, dosReales, capOne, [
    p(11.80, "Dining", "Vishal Veg F"),
    p(16.99, "Dining", "M carne asada"),
    p(13.75, "For Matt", "Enchiladas"),
    p(5.50, "For Matt", "Guacamole"),
    p(3.75, "Dining", "Horchata"),
    p(5.96, "Dining", "Tax"),
    p(11.55, "Dining", "tip")
])
]