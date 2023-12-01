import { ExternalTransaction } from "./transactions";
import { Account } from "./account"
import { BucketName } from "./enums"
import { Purchase } from "./purchase"
import { Vendor } from "./vendor"

new ExternalTransaction(new Date(2023, 9, 2), 53.14, new Vendor("Sweet Basil Cafe"), new Account("Visa 8042"), [
    {price: 17.00, bucket: "Dining", description: { name: "Philly Beef Sandwich", description: ""} },
    {price: 16.00, bucket: "Dining", description: {name: "California Stuffed Cheesecake", description: ""} },
    {price: 6.00, bucket: "Dining", description: {name:"Milkshake", description: ""} },
    {price: 3.51, bucket: "Dining", description: {name: "Taxes", description: ""} },
    {price: 10.63, bucket: "Dining", description: {name: "Tip", description: ""} }
])

new ExternalTransaction(new Date(2023, 9, 2), 38.15, new Vendor("Walnut Street Tea Co."), new Account("Visa 8042"), [
    {price: 35.00, bucket: "Meridith Fun Money", description: {name: "Blue Zoku Water Bottle", description: ""} },
    {price: 3.15, bucket: "Meridith Fun Money", description: {name: "Taxes", description: ""} }
])

new ExternalTransaction(new Date(2023, 9, 5), 88.42, new Vendor("Meijer"), new Account("Visa 3408"), [
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