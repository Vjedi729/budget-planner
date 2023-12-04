import { ExternalTransaction } from "./transactions";
import { Account } from "./account"
import { BucketName } from "./enums"
import { Purchase } from "./purchase"
import { Vendor } from "./vendor"

const visa3408 = new Account("Visa 3408")
const visa8042 = new Account("Visa 8042")

new ExternalTransaction(new Date(2023, 9, 2), 53.14, new Vendor("Sweet Basil Cafe"), visa8042, [
    {price: 17.00, bucket: "Dining", description: { name: "Philly Beef Sandwich", description: ""} },
    {price: 16.00, bucket: "Dining", description: {name: "California Stuffed Cheesecake", description: ""} },
    {price: 6.00, bucket: "Dining", description: {name:"Milkshake", description: ""} },
    {price: 3.51, bucket: "Dining", description: {name: "Taxes", description: ""} },
    {price: 10.63, bucket: "Dining", description: {name: "Tip", description: ""} }
])

new ExternalTransaction(new Date(2023, 9, 2), 38.15, new Vendor("Walnut Street Tea Co."), visa8042, [
    {price: 35.00, bucket: "Meridith Fun Money", description: {name: "Blue Zoku Water Bottle", description: ""} },
    {price: 3.15, bucket: "Meridith Fun Money", description: {name: "Taxes", description: ""} }
])

new ExternalTransaction(new Date(2023, 9, 5), 88.42, new Vendor("Meijer"), visa3408, [
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
])

new ExternalTransaction(new Date(2023, 9, 7), 41.26, new Vendor("Papa Dels"), visa3408, [
    {price: 41.26, bucket: "Dining", description: {name: "Pizza dinner", description: ""}}
])

new ExternalTransaction(new Date(2023, 9, 8), 68.95, new Vendor("Meijer"), visa3408, [
    {price: 1.99, bucket: "Home Improvements", description: {name: "POSTER TACK", description: "Sticky tack for cabinet labels"}},
    {price: 3.99, bucket: "Home Improvements", description: {name: "WOOD SHAPES", description: "Wood shapes to make kitchen cabinet labels"}},
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
    {price: 0.86, bucket: "Home Improvements", description: {name: "9% Tax", description: ""}}
])

new ExternalTransaction(new Date(2023, 9, 8), 7.75, new Vendor("Meijer"), visa3408, [
    {price: 5.99, bucket: "Housewares", description: {name: "R+R CFT PILLOW", description: "Pillow for guest room"}},
    {price: 1.12, bucket: "Vishal Fun Money", description: {name: "XKITES", description: "Kite string reel"}},
    {price: 0.64, bucket: "Housewares", description: {name: "9% tax", description: ""}}
])

new ExternalTransaction(new Date(2023, 9, 8), 7.89, new Vendor("Meijer"), visa3408, [
    {price: 4.99, bucket: "Housewares", description: {name: "VERSACHALK", description: "Liquid chalk marker"}},
    {price: 2.25, bucket: "Housewares", description: {name: "SG CHALK EASEL", description: "Small chalk signs"}},
    {price: 0.65, bucket: "Housewares", description: {name: "9% tax", description: ""}}
])

new ExternalTransaction(new Date(2023, 9, 12), 120.00, new Vendor("Costco"), visa8042, [
    {price: 120.00, bucket: "Groceries", description: {name: "EXGS RENEW", description: "Costco membership renewal"}}
])

new ExternalTransaction(new Date(2023, 9, 12), 203.56, new Vendor("Costco"), visa3408, [
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
])

new ExternalTransaction(new Date(2023, 9, 12), 61.00, new Vendor("Oishi Steakhouse"), visa3408, [
    {price: 16.00, bucket: "For Matt", description: {name: "Matt's dinner", description: ""}},
    {price: 45.00, bucket: "Dining", description: {name: "Dinner", description: "sushi and ginger tofu"}},
])

new ExternalTransaction(new Date(2023, 9, 22), 393.33, new Vendor("Costco"), visa3408, [
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
])

new ExternalTransaction(new Date(2023, 9, 22), 30.00, new Vendor("CVS"), visa3408, [
    new Purchase(10.00, "Health", "Acetalzolamide 15ct"),
    new Purchase(20.00, "Health", "Verapamil 90ct")
])

new ExternalTransaction(new Date(2023, 10, 2), 81.00, new Vendor("Aspen Tap House"), visa3408, [
    new Purchase(66.00, "Dining", "Dinner for V and M"),
    new Purchase(15.00, "For Anishi", "Dinner for Anishi")
])

new ExternalTransaction(new Date(2023, 10, 2), 114.25, new Vendor("Costco"), visa3408, [
    new Purchase(19.99, "Groceries", "GOGO SQUEEZE", "Applesauce Packets"),
    new Purchase(19.99, "For Anishi", "GOGO SQUEEZE", "Applesauce Packets"),
    new Purchase(14.99, "For Anishi", "KS COOK TIN", "Christmas Cookies"),
    new Purchase(14.99, "Meridith Fun Money", "KS COOK TIN", "Christmas Cookies"),
    new Purchase(39.99, "Housewares", "CUIS IMM BLE", "Immersion Blender"),
    new Purchase(3.60, "Housewares", "9% tax"),
    new Purchase(0.70, "Groceries", "1% tax")
])

new ExternalTransaction(new Date(2023, 10, 2), 33.46, new Vendor("Costco Gas"), visa3408, [
    new Purchase(33.46, "Car", "9.729 gallons at $3.439/gal")
])

new ExternalTransaction(new Date(2023, 10, 2), 29.77, new Vendor("Curtis Orchard"), visa8042, [
    new Purchase(10.00, "For Anishi", "Apples"),
    new Purchase(19.77, "Groceries", "Apples")
])

new ExternalTransaction(new Date(2023, 10, 2), 30.05, new Vendor("Joanne"), visa3408, [
    new Purchase(20.98, "Sewing", "UNBLEACHED MUSLIN 120IN", "3 yards muslin"),
    new Purchase(6.59, "Sewing", "DRIT CURVED SAFETY PIN ASSORTMENT"),
    new Purchase(2.48, "Sewing", "Taxes"),
])

new ExternalTransaction(new Date(2023, 10, 3), 111.40, new Vendor("Meijer"), visa3408, [
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
])

new ExternalTransaction(new Date(2023, 10, 7), 45.91, new Vendor("Costco"), visa8042, [
    new Purchase(11.99, "Groceries", "KS SPINACH RAV", "2 pack spinach ravioli"),
    new Purchase(8.99, "For Anishi", "KS BROC CHED", "Broccoli cheddar soup"),
    new Purchase(6.49, "Groceries", "TURTLE CHIPS"),
    new Purchase(17.99, "Groceries", "KS CASHEWS"),
    new Purchase(0.45, "Groceries", "1% tax")
])

new ExternalTransaction(new Date(2023, 10, 7), 37.00, new Vendor("El Toro"), visa3408, [
    new Purchase(31.20, "Dining", "Dinner"),
    new Purchase(5.80, "Dining", "Tip")
])

new ExternalTransaction(new Date(2023, 10, 13), 27.04, new Vendor("CVS"), visa3408, [
    new Purchase(0.00, "Health", "Ubrelvy 10ct"),
    new Purchase(7.04, "Health", "Acetalzolamide 30ct"),
    new Purchase(10.00, "Health", "Bupropion 30ct"),
    new Purchase(10.00, "Health", "Buspirone 60ct")
])

new ExternalTransaction(new Date(2023, 10, 13), 9.89, new Vendor("CVS"), visa3408, [
    new Purchase(8.79, "Health", "1mg Melatonin pills"),
    new Purchase(1.00, "Health", "5mg Melatonin pills"),
    new Purchase(0.10, "Health", "1% tax")
])

new ExternalTransaction(new Date(2023, 10, 13), 80.85, new Vendor("Meijer"), visa3408, [
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
])

new ExternalTransaction(new Date(2023, 10 ,16), 241.31, new Vendor("Costco"), visa3408, [
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
])

new ExternalTransaction(new Date(2023, 10, 19), 6.00, new Vendor("CVS"), visa3408, [
    new Purchase(6.00, "Health", "Sertraline 90ct")
])

new ExternalTransaction(new Date(2023, 10, 19), 115.66, new Vendor("Meijer"), visa3408, [
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
])

new ExternalTransaction(new Date(2023, 10, 19), 44.00, new Vendor("Urbana Family Dental"), visa3408, [
    new Purchase(44.00, "Health", "Teeth cleaning/sealing")
])

new ExternalTransaction(new Date(2023, 10, 20), 31.26, new Vendor("Annapoorna Stores"), visa8042, [
    new Purchase(9.99, "Groceries", "DEEP FAMILY PACK PARA", "Paratha"),
    new Purchase(2.99, "Groceries", "HALDIRAM ALOO KULCHA", "Aloo Kulcha frozen"),
    new Purchase(11.99, "Groceries", "SPINACH PANEER SAMOSA", "Saag Paneer Samosas"),
    new Purchase(2.99, "Groceries", "MTR PANEER BUTTER MAS", "Microwave paneer butter masala"),
    new Purchase(2.99, "Groceries", "MTR DAL FRY", "Microwave dal fry"),
    new Purchase(0.31, "Groceries", "Taxes")
])

new ExternalTransaction(new Date(2023, 10, 20), 16.61, new Vendor("Fresh International"), visa3408, [
    new Purchase(2.49, "Groceries", "Soybean Sprouts 12oz"),
    new Purchase(3.79, "Groceries", "Black Garlic Oil Noodle Soup"),
    new Purchase(4.99, "For Matt", "Szechuan Peppers"),
    new Purchase(2.99, "Groceries", "Mochiko Sweet Rice Flour"),
    new Purchase(2.19, "For Matt", "Dried Red Bean 12oz"),
    new Purchase(0.16, "Groceries", "taxes")
])

new ExternalTransaction(new Date(2023, 10, 23), 65.60, new Vendor("Meijer"), visa3408, [
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
]) 

new ExternalTransaction(new Date(2023, 10, 23), 39.86, new Vendor("Meijer Gas"), visa3408, [
    new Purchase(39.86, "Car", "11.937 gal of gas at $3.539/gal")
])

new ExternalTransaction(new Date(2023, 10, 23), 11.70, new Vendor("Slim Chickens"), visa3408, [
    new Purchase(11.70, "Meridith Fun Money", "Lunch with Emma")
])

new ExternalTransaction(new Date(2023, 10, 26), 15.30, new Vendor("Panera"), visa3408, [
    new Purchase(4.99, "Groceries", "1 Clssc Sourdough Loaf"),
    new Purchase(3.99, "Dining", "1 Chocolate Croissant"),
    new Purchase(3.99, "Dining", "1 Pecan Braid"),
    new Purchase(2.33, "Dining", "Tax and tip")
])

new ExternalTransaction(new Date(2023, 10, 27), 32.45, new Vendor("Schnucks"), visa3408, [
    new Purchase(5.99, "Health", "RICOLA ORG HRB DRP 45CT"),
    new Purchase(5.99, "Health", "RICOLA ORG HRB DRP 45CT"),
    new Purchase(3.00, "Groceries", "GM RESSE PNUT BTR PUFFS", "Reeses puffs cereal"),
    new Purchase(3.99, "Meridith Fun Money", "NAB FMSZ OREO MINT"),
    new Purchase(2.19, "Groceries", "SCH RSTRNT TORT CHIPS", "Tortilla chips"),
    new Purchase(4.99, "Groceries", "LOF AHA ROASTED TURKEY", "Turkey lunch meat"),
    new Purchase(2.99, "Groceries", "BGLBITE CHEZ/PEPPER", "Pepperoni Bagel Bites"),
    new Purchase(2.99, "Groceries", "BGLBITE CHEZ/PEPPER", "Pepperoni Bagel Bites"),
    new Purchase(0.32, "Groceries", "1% tax")
])

new ExternalTransaction(new Date(2023, 10, 29), 173.36, new Vendor("Costco"), visa3408, [
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
])

new ExternalTransaction(new Date(2023, 10, 29), 47.72, new Vendor("Costco"), visa3408, [
    new Purchase(14.79, "For Matt", "EGG BITES"),
    new Purchase(10.99, "Groceries", "CHOC STRBRY", "Chocolate covered strawberries"),
    new Purchase(9.49, "For Varsha", "BASIL PESTO"),
    new Purchase(8.99, "For Matt", "ORG RASPBERY", "Organic raspberries"),
    new Purchase(2.99, "For Matt", "RASPBERRIES"),
    new Purchase(0.47, "Groceries", "1% tax")
])

new ExternalTransaction(new Date(2023, 10, 29), 86.42, new Vendor("Meijer"), visa3408, [
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
])

new ExternalTransaction(new Date(2023, 10, 29), 7.76, new Vendor("Menards"), visa3408, [
    new Purchase(5.16, "Home Improvement", "Coupling nut .7 4mm", "4 coupling nuts for living room light fixture"),
    new Purchase(1.96, "Home Improvement", "Hxcap SW 4mm x 0.70 x 12mm m", "4 hexcap screws for living room light fixture"),
    new Purchase(0.64, "Home Improvement", "9% tax")
])

new ExternalTransaction(new Date(2023, 10, 31), 15.16, new Vendor("Meijer"), visa3408, [
    new Purchase(7.29, "Both Fun Money", "Halloween candy", "2 bags GF apple lollipops"),
    new Purchase(10.58, "Both Fun Money", "Halloween candy", "2 bags junior mints (GF)"),
    new Purchase(1.29, "Both Fun Money", "9% tax")
])

new ExternalTransaction(new Date(2023, 11, 03), 18.60, new Vendor("Meijer"), visa3408, [
    new Purchase(0.79, "Groceries", "Salt", "Iodized salt"),
    new Purchase(4.95, "Groceries", "Peppers", "2 bell peppers"),
    new Purchase(4.99, "Groceries", "Baking Yeast"),
    new Purchase(7.69, "Groceries", "Chunk cheese", "1/2 lb block cheddar"),
    new Purchase(0.18, "Groceries", "1% tax")
])

new ExternalTransaction(new Date(2023, 11, 6), 81.93, new Vendor("Meijer"), visa3408, [
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
])

new ExternalTransaction(new Date(2023, 11, 7), 164.09, new Vendor("Costco"), visa3408, [
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
])

new ExternalTransaction(new Date(2023, 11, 7), 1.68, new Vendor("Costco"), visa3408, [
    new Purchase(1.68, "Dining", "Hot dog")
])

new ExternalTransaction(new Date(2023, 11, 9), 60, new Vendor("Facebook Marketplace"), new Account("Chase Checking"), [
    new Purchase(60.00, "Vishal Fun Money", "Router Table")
])

new ExternalTransaction(new Date(2023, 11, 10), 18.65, new Vendor("Dunkin Donuts"), visa3408, [
    new Purchase(2.69, "Dining", "Coffee Cake muffin"),
    new Purchase(1.00, "Dining", "French cruller donut"),
    new Purchase(1.64, "Dining", "Maple frosted donut"),
    new Purchase(3.49, "Dining", "Mocha iced coffee"),
    new Purchase(6.39, "Dining", "Maple bacon croissant sandwich"),
    new Purchase(1.59, "Dining", "Hash browns"),
    new Purchase(1.85, "Dining", "Taxes")
])

new ExternalTransaction(new Date(2023, 11, 10), 80.05, new Vendor("Meijer"), visa3408, [
    new Purchase(7.49, "Meridith Fun Money", "Burts bees", "Unknown burts bees product"),
    new Purchase(8.00, "Meridith Fun Money", "Jewelry", "Small earring hoops"),
    new Purchase(4.19, "Meridith Fun Money", "Bubble bath"),
    new Purchase(5.79, "Housewares", "Bath cleaner"),
    new Purchase(15.99, "Cats", "Tidy cats", "Lemongrass cat litter"),
    new Purchase(41.98, "Cats", "Tidy cats", "Comfort care litter"),
    new Purchase(-10.00, "Cats", "Cat litter discount"),
    new Purchase(6.61, "Meridith Fun Money", "9% tax")
])

new ExternalTransaction(new Date(2023, 11, 13), 19.00, new Vendor("El Toro"), visa3408, [
    new Purchase(15.60, "Meridith Fun Money", "Lunch w/ Emma"),
    new Purchase(3.40, "Meridith Fun Money", "Tip")
])

new ExternalTransaction(new Date(2023, 11, 13), 62.11, new Vendor("Meijer"), visa3408) // TODO: Find detailed receipt (this was printed as a "short receipt")

new ExternalTransaction(new Date(2023, 11, 14), 24.70, new Vendor("Portillos"), visa3408, [
    new Purchase(3.89, "Dining", "Hot dog"),
    new Purchase(3.69, "Dining", "Large fries"),
    new Purchase(4.19, "Dining", "Garden dog"),
    new Purchase(10.38, "Dining", "2 peppermint cake shakes"),
    new Purchase(2.55, "Dining", "Taxes")
])

new ExternalTransaction(new Date(2023, 11, 15), 44.46, new Vendor("Costco"), visa3408, [
    new Purchase(17.99, "Housewares", "Measure set", "nesting measuring cups"),
    new Purchase(15.98, "Groceries", "4lb organic honeycrisp apples"),
    new Purchase(7.99, "Groceries", "Popcorn Zebra"),
    new Purchase(2.34, "Housewares", "9% tax"),
    new Purchase(0.16, "Groceries", "1% tax")
])

new ExternalTransaction(new Date(2023, 11, 15), 35.65, new Vendor("Costco Gas"), visa3408, [
    new Purchase(35.65, "Car", "11.143 gallons of gas at $3.199/gal")
])

new ExternalTransaction(new Date(2023, 11, 17), 63.31, new Vendor("Meijer"), visa3408, [
    
])