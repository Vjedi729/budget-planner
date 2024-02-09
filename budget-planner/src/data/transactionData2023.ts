import { ExternalTransaction } from "./transactions";
import { Account } from "./account"
import { BucketName } from "./enums"
import { Purchase } from "./purchase"
import { Vendor } from "./vendor"

const visa3408 = new Account("Meridith's Visa 3408")
const visa8042 = new Account("Vishal's Visa 8042")
const chase = new Account("Chase checking account")
const discover = new Account("Vishal's discover credit card")

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


function makeDate(year: number, month: number, day: number) {
    return new Date(year, month-1, day, 1)
}

export const sampleInitialDate = new Date(2023, 7);

export const sampleTransactions = [
new ExternalTransaction(makeDate(2023, 9, 2), 53.14, new Vendor("Sweet Basil Cafe"), visa8042, [
    {price: 17.00, bucket: "Dining", description: { name: "Philly Beef Sandwich", description: ""} },
    {price: 16.00, bucket: "Dining", description: {name: "California Stuffed Cheesecake", description: ""} },
    {price: 6.00, bucket: "Dining", description: {name:"Milkshake", description: ""} },
    {price: 3.51, bucket: "Dining", description: {name: "Taxes", description: ""} },
    {price: 10.63, bucket: "Dining", description: {name: "Tip", description: ""} }
]),

new ExternalTransaction(makeDate(2023, 9, 2), 38.15, new Vendor("Walnut Street Tea Co."), visa8042, [
    {price: 35.00, bucket: "Meridith Fun Money", description: {name: "Blue Zoku Water Bottle", description: ""} },
    {price: 3.15, bucket: "Meridith Fun Money", description: {name: "Taxes", description: ""} }
]),

new ExternalTransaction(makeDate(2023, 9, 5), 88.42, meijer, visa3408, [
    {price: 22.00, bucket: "Clothing", description: {name: "OR BLTD MAXI DRESS", description: "Green Maxi Dress, returned"} },
]),

new ExternalTransaction(makeDate(2023, 9, 5), 88.42, new Vendor("Meijer"), visa3408, [
    {price: 22.00, bucket: "Clothes", description: {name: "OR BLTD MAXI DRESS", description: "Green Maxi Dress, returned"} },
    {price: 1.70, bucket: "Groceries", description: {name: "CHILI BEANS", description:"8 oz canned chili beans"} },
    {price: 1.09, bucket: "Groceries", description: {name: "DRY PASTA", description: ""} },
    {price: 1.09, bucket: "Groceries", description: {name: "PASTA", description: ""} },
    {price: 1.59, bucket: "Groceries", description: {name: "NOODLES", description: "Ramen Noodles"} },
    {price: 2.79, bucket: "Groceries", description: {name: "HONEY WHEAT", description: "Wheat Bread"} },
    {price: 3.29, bucket: "Groceries", description: {name: "LIFEWAY KEFIR", description: "Yogurt Drink"} },
    {price: 3.79, bucket: "Groceries", description: {name: "MEIJER BUTTER", description: "Butter Sticks"} },
    {price: 4.69, bucket: "Groceries", description: {name: "OVALTINE", description: ""} },
    {price: 4.99, bucket: "Groceries", description: {name: "ICED COFFEE", description: ""} },
    {price: 6.49, bucket: "Groceries", description: {name: "METHOD TUB TILE", description: "Bathroom Cleaner"} },
    {price: 6.69, bucket: "Groceries", description: {name: "CEREAL", description: "Life Cinnamon Cereal"} },
    {price: 10.99, bucket: "Cats", description: {name: "PRNA DRY CAT", description: "Emergency cat kibble"} },
    {price: 15.99, bucket: "Cats", description: {name: "TIDY CATS", description: "Cat Litter"} },
    {price: 3.09, bucket: "Meridith Fun Money", description: {name: "KETTLE CHIPS", description: "Kettle potato chips"} },
    {price: 4.75, bucket: "Groceries", description: {name: "Taxes", description: ""} }
]),

new ExternalTransaction(makeDate(2023, 9, 6), 322.57, ameren, chase, [
    new Purchase(322.57, "Utilities", "Electric for August 2023")
]),

new ExternalTransaction(makeDate(2023, 9, 6), 72.96, carle, chase, [
    new Purchase(72.96, "Health", "Carle appt copay")
]),


new ExternalTransaction(makeDate(2023, 9, 7), 41.26, new Vendor("Papa Dels"), visa3408, [
    {price: 41.26, bucket: "Dining", description: {name: "Pizza dinner", description: ""}}
]),

new ExternalTransaction(makeDate(2023, 9, 8), 68.95, meijer, visa3408, [
    {price: 1.99, bucket: "Home Improvement", description: {name: "POSTER TACK", description: "Sticky tack for cabinet labels"}},
    {price: 3.99, bucket: "Home Improvement", description: {name: "WOOD SHAPES", description: "Wood shapes to make kitchen cabinet labels"}},
]),

new ExternalTransaction(makeDate(2023, 9, 8), 68.95, new Vendor("Meijer"), visa3408, [
    {price: 1.99, bucket: "Home Improvement", description: {name: "POSTER TACK", description: "Sticky tack for cabinet labels"}},
    {price: 3.99, bucket: "Home Improvement", description: {name: "WOOD SHAPES", description: "Wood shapes to make kitchen cabinet labels"}},
    {price: 4.99, bucket: "Meridith Fun Money", description: {name: "CRAFT WOOD", description: "Wooden box to put CCs in"}},
    {price: 1.09, bucket: "Groceries", description: {name: "EGGS", description: "dozen eggs"}},
    {price: 3.38, bucket: "Groceries", description: {name: "MILK", description: "2 gallons of 1% milk"}},
    {price: 1.79, bucket: "Groceries", description: {name: "CREAM CHEESE", description: "8 oz cream cheese"}},
    {price: 2.29, bucket: "Groceries", description: {name: "PRETZELS", description: ""}},
    {price: 2.39, bucket: "Groceries", description: {name: "MEIJER SYRUP", description: "Sugar Pancake Syrup"}},
    {price: 2.48, bucket: "Groceries", description: {name: "MILK", description: "Half gallon whole milk"}},
    {price: 3.69, bucket: "Groceries", description: {name: "STRAWBERRIES", description: ""}},
    {price: 3.99, bucket: "Groceries", description: {name: "PRETZEL STICKS", description: "Gluten free pretzels"}},
    {price: 5.19, bucket: "Groceries", description: {name: "BLUEBERRIES", description: ""}},
    {price: 12.58, bucket: "Groceries", description: {name: "BREAD MIX", description: "2 boxes Gluten free waffle mix"}},
    {price: 17.99, bucket: "Groceries", description: {name: "MEIJER SYRUP", description: "16 oz jug Maple Syrup"}},
    {price: 2.69, bucket: "Groceries", description: {name: "CANTALOUPES", description: "1 cantaloupe"}},
    {price: 6.99, bucket: "Groceries", description: {name: "VEGGIE STRAWS", description: ""}},
    {price: 0.58, bucket: "Groceries", description: {name: "1% Tax", description: ""}},
    {price: 0.86, bucket: "Home Improvement", description: {name: "9% Tax", description: ""}}
]),

new ExternalTransaction(makeDate(2023, 9, 8), 7.75, meijer, visa3408, [
    {price: 5.99, bucket: "Housewares", description: {name: "R+R CFT PILLOW", description: "Pillow for guest room"}},
    {price: 1.12, bucket: "Vishal Fun Money", description: {name: "XKITES", description: "Kite string reel"}},
    {price: 0.64, bucket: "Housewares", description: {name: "9% tax", description: ""}}
]),

new ExternalTransaction(makeDate(2023, 9, 8), 7.89, meijer, visa3408, [
    {price: 4.99, bucket: "Housewares", description: {name: "VERSACHALK", description: "Liquid chalk marker"}},
    {price: 2.25, bucket: "Housewares", description: {name: "SG CHALK EASEL", description: "Small chalk signs"}},
    {price: 0.65, bucket: "Housewares", description: {name: "9% tax", description: ""}}
]),

new ExternalTransaction(makeDate(2023, 9, 11), 35, new Vendor("Hair stylist"), chase, [
    new Purchase(35, "Health", "Haircut after hair donation")
]),

new ExternalTransaction(makeDate(2023, 9, 12), 120.00, costco, visa8042, [
    {price: 120.00, bucket: "Groceries", description: {name: "EXGS RENEW", description: "Costco membership renewal"}}
]),

new ExternalTransaction(makeDate(2023, 9, 12), 203.56, costco, visa3408, [
    {price: 10.79, bucket: "For Matt", description: {name: "ORG STRAWBRRY", description: "Organic Strawberries"}},
    {price: 10.99, bucket: "For Matt", description: {name: "PLACKERS FLS", description: ""}},
    {price: 11.99, bucket: "For Matt", description: {name: "KS TRAIL MIX", description: ""}},
    {price: 14.79, bucket: "For Matt", description: {name: "BRAZIL BITES", description: ""}},
    {price: 10.99, bucket: "For Matt", description: {name: "DRIED LYCHEE", description: ""}},
    {price: 14.79, bucket: "For Matt", description: {name: "EGG BITES", description: ""}},
    {price: 13.99, bucket: "For Matt", description: {name: "ORG PB PWDR", description: "Peanut Butter Powder"}},
    {price: 4.69, bucket: "For Matt", description: {name: "STRAWBERRIES", description: ""}},
    {price: 4.49, bucket: "For Matt", description: {name: "BLACKBERRIES", description: ""}},
    {price: 2.29, bucket: "For Matt", description: {name: "RASPBERRIES", description: ""}},
    {price: 27.98, bucket: "For Embrys", description: {name: "GODOG TOY", description: "Dragon dog toys for Chai and Kona"}},
    {price: 9.99, bucket: "Groceries", description: {name: "KS CHOC CHIP", description: "Chocolate Chips"}},
    {price: 12.49, bucket: "Groceries", description: {name: "KS CASHEWS", description: ""}},
    {price: 9.49, bucket: "Groceries", description: {name: "KS ALMONDS", description: ""}},
    {price: 11.99, bucket: "Groceries", description: {name: "GOLDFISH 66Z", description: "Goldfish 3 pack"}},
    {price: 19.98, bucket: BucketName.UNDEFINED, description: {name: "CV HC BOX", description: "Unknown"}},
    {price: 4.99, bucket: "Groceries", description: {name: "KS WHIP CRM", description: "Whipped cream"}},
    {price: 6.85, bucket: "Groceries", description: {name: "Taxes", description: ""}}
]),

new ExternalTransaction(makeDate(2023, 9, 12), 61.00, new Vendor("Oishi Steakhouse"), visa3408, [
    {price: 16.00, bucket: "For Matt", description: {name: "Matt's dinner", description: ""}},
    {price: 45.00, bucket: "Dining", description: {name: "Dinner", description: "sushi and ginger tofu"}},
]),

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
    {price: 17.49, bucket: "For Varsha", description: {name: "MAC & CHEESE", description: "Mac and cheese boxes"}},
    {price: 10.99, bucket: "For Varsha", description: {name: "KS CHS PIZZA", description: "Frozen cheese pizzas"}},
    {price: 45.99, bucket: "Health", description: {name: "ORAL-B X-FIL", description: "Toothbrush heads"}},
    {price: 45.99, bucket: "Health", description: {name: "ORAL-B X-FIL", description: "Toothbrush heads"}},
    {price: 69.99, bucket: "Health", description: {name: "NORELCOC06800", description: "New shaver"}},
    {price: 11.99, bucket: "For Varsha", description: {name: "KS SPIN RAV", description: "2 pack spinach ravioli"}},
    {price: 11.99, bucket: "For Varsha", description: {name: "KS SPIN RAV", description: "2 pack spinach ravioli"}},
    {price: 8.49, bucket: "For Varsha", description: {name: "ALLERCLR 365", description: "Allergy medicine"}},
    {price: 14.99, bucket: "Groceries", description: {name: "KS GUAC", description: "Guacamole"}},
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
]),

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

new ExternalTransaction(makeDate(2024, 1, 29), 5585, new Vendor("Modern Home Upgrades"), chase, [
    new Purchase(5585, "Home Improvement", "50% downpayment for kitchen remodel")
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
])
]