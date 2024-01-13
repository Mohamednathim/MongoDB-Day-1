// MongoDB-Day-1

1.Find all the information about each products? 

       db.products.find().pretty();

Output:
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a0"),
    "id" : "1",
    "product_name" : "Intelligent Fresh Chips",
    "product_price" : 655,
    "product_material" : "Concrete",
    "product_color" : "mint green"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a1"),
    "id" : "2",
    "product_name" : "Practical Fresh Sausages",
    "product_price" : 911,
    "product_material" : "Cotton",
    "product_color" : "indigo"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a2"),
    "id" : "3",
    "product_name" : "Refined Steel Car",
    "product_price" : 690,
    "product_material" : "Rubber",
    "product_color" : "gold"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a3"),
    "id" : "4",
    "product_name" : "Gorgeous Plastic Pants",
    "product_price" : 492,
    "product_material" : "Soft",
    "product_color" : "plum"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a4"),
    "id" : "5",
    "product_name" : "Sleek Cotton Chair",
    "product_price" : 33,
    "product_material" : "Fresh",
    "product_color" : "black"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a5"),
    "id" : "6",
    "product_name" : "Awesome Wooden Towels",
    "product_price" : 474,
    "product_material" : "Plastic",
    "product_color" : "orange"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a6"),
    "id" : "7",
    "product_name" : "Practical Soft Shoes",
    "product_price" : 500,
    "product_material" : "Rubber",
    "product_color" : "pink"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a7"),
    "id" : "8",
    "product_name" : "Incredible Steel Hat",
    "product_price" : 78,
    "product_material" : "Rubber",
    "product_color" : "violet"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a8"),
    "id" : "9",
    "product_name" : "Awesome Wooden Ball",
    "product_price" : 28,
    "product_material" : "Soft",
    "product_color" : "azure"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a9"),
    "id" : "10",
    "product_name" : "Generic Wooden Pizza",
    "product_price" : 84,
    "product_material" : "Frozen",
    "product_color" : "indigo"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28aa"),
    "id" : "11",
    "product_name" : "Unbranded Wooden Cheese",
    "product_price" : 26,
    "product_material" : "Soft",
    "product_color" : "black"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28ab"),
    "id" : "12",
    "product_name" : "Unbranded Plastic Salad",
    "product_price" : 89,
    "product_material" : "Wooden",
    "product_color" : "pink"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28ac"),
    "id" : "13",
    "product_name" : "Gorgeous Cotton Keyboard",
    "product_price" : 37,
    "product_material" : "Concrete",
    "product_color" : "sky blue"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28ad"),
    "id" : "14",
    "product_name" : "Incredible Steel Shirt",
    "product_price" : 54,
    "product_material" : "Metal",
    "product_color" : "white"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28ae"),
    "id" : "15",
    "product_name" : "Ergonomic Cotton Hat",
    "product_price" : 43,
    "product_material" : "Rubber",
    "product_color" : "mint green"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28af"),
    "id" : "16",
    "product_name" : "Small Soft Chair",
    "product_price" : 47,
    "product_material" : "Cotton",
    "product_color" : "teal"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b0"),
    "id" : "17",
    "product_name" : "Incredible Metal Car",
    "product_price" : 36,
    "product_material" : "Fresh",
    "product_color" : "indigo"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b1"),
    "id" : "18",
    "product_name" : "Licensed Plastic Bacon",
    "product_price" : 88,
    "product_material" : "Steel",
    "product_color" : "yellow"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b2"),
    "id" : "19",
    "product_name" : "Intelligent Cotton Chips",
    "product_price" : 46,
    "product_material" : "Soft",
    "product_color" : "azure"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b3"),
    "id" : "20",
    "product_name" : "Handcrafted Wooden Bacon",
    "product_price" : 36,
    "product_material" : "Concrete",
    "product_color" : "lime"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b4"),
    "id" : "21",
    "product_name" : "Unbranded Granite Chicken",
    "product_price" : 90,
    "product_material" : "Metal",
    "product_color" : "gold"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b5"),
    "id" : "22",
    "product_name" : "Ergonomic Soft Hat",
    "product_price" : 99,
    "product_material" : "Rubber",
    "product_color" : "black"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b6"),
    "id" : "23",
    "product_name" : "Intelligent Steel Pizza",
    "product_price" : 95,
    "product_material" : "Cotton",
    "product_color" : "azure"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b7"),
    "id" : "24",
    "product_name" : "Tasty Rubber Cheese",
    "product_price" : 47,
    "product_material" : "Frozen",
    "product_color" : "orchid"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b8"),
    "id" : "25",
    "product_name" : "Licensed Steel Car",
    "product_price" : 20,
    "product_material" : "Cotton",
    "product_color" : "indigo"
}
 
2.Find the product price which are between 400 to 800?

   db.products.find({product_price:{$gte: 400, $lte: 800}}).pretty();

Output:
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a0"),
    "id" : "1",
    "product_name" : "Intelligent Fresh Chips",
    "product_price" : 655,
    "product_material" : "Concrete",
    "product_color" : "mint green"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a2"),
    "id" : "3",
    "product_name" : "Refined Steel Car",
    "product_price" : 690,
    "product_material" : "Rubber",
    "product_color" : "gold"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a3"),
    "id" : "4",
    "product_name" : "Gorgeous Plastic Pants",
    "product_price" : 492,
    "product_material" : "Soft",
    "product_color" : "plum"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a5"),
    "id" : "6",
    "product_name" : "Awesome Wooden Towels",
    "product_price" : 474,
    "product_material" : "Plastic",
    "product_color" : "orange"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a6"),
    "id" : "7",
    "product_name" : "Practical Soft Shoes",
    "product_price" : 500,
    "product_material" : "Rubber",
    "product_color" : "pink"
}

3.Find the product price which are not between 400 to 600?

    db.products.find({product_price:{$not: {$gte: 400, $lte: 600}}}).pretty();

Output:
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a0"),
    "id" : "1",
    "product_name" : "Intelligent Fresh Chips",
    "product_price" : 655,
    "product_material" : "Concrete",
    "product_color" : "mint green"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a1"),
    "id" : "2",
    "product_name" : "Practical Fresh Sausages",
    "product_price" : 911,
    "product_material" : "Cotton",
    "product_color" : "indigo"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a2"),
    "id" : "3",
    "product_name" : "Refined Steel Car",
    "product_price" : 690,
    "product_material" : "Rubber",
    "product_color" : "gold"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a4"),
    "id" : "5",
    "product_name" : "Sleek Cotton Chair",
    "product_price" : 33,
    "product_material" : "Fresh",
    "product_color" : "black"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a7"),
    "id" : "8",
    "product_name" : "Incredible Steel Hat",
    "product_price" : 78,
    "product_material" : "Rubber",
    "product_color" : "violet"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a8"),
    "id" : "9",
    "product_name" : "Awesome Wooden Ball",
    "product_price" : 28,
    "product_material" : "Soft",
    "product_color" : "azure"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a9"),
    "id" : "10",
    "product_name" : "Generic Wooden Pizza",
    "product_price" : 84,
    "product_material" : "Frozen",
    "product_color" : "indigo"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28aa"),
    "id" : "11",
    "product_name" : "Unbranded Wooden Cheese",
    "product_price" : 26,
    "product_material" : "Soft",
    "product_color" : "black"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28ab"),
    "id" : "12",
    "product_name" : "Unbranded Plastic Salad",
    "product_price" : 89,
    "product_material" : "Wooden",
    "product_color" : "pink"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28ac"),
    "id" : "13",
    "product_name" : "Gorgeous Cotton Keyboard",
    "product_price" : 37,
    "product_material" : "Concrete",
    "product_color" : "sky blue"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28ad"),
    "id" : "14",
    "product_name" : "Incredible Steel Shirt",
    "product_price" : 54,
    "product_material" : "Metal",
    "product_color" : "white"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28ae"),
    "id" : "15",
    "product_name" : "Ergonomic Cotton Hat",
    "product_price" : 43,
    "product_material" : "Rubber",
    "product_color" : "mint green"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28af"),
    "id" : "16",
    "product_name" : "Small Soft Chair",
    "product_price" : 47,
    "product_material" : "Cotton",
    "product_color" : "teal"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b0"),
    "id" : "17",
    "product_name" : "Incredible Metal Car",
    "product_price" : 36,
    "product_material" : "Fresh",
    "product_color" : "indigo"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b1"),
    "id" : "18",
    "product_name" : "Licensed Plastic Bacon",
    "product_price" : 88,
    "product_material" : "Steel",
    "product_color" : "yellow"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b2"),
    "id" : "19",
    "product_name" : "Intelligent Cotton Chips",
    "product_price" : 46,
    "product_material" : "Soft",
    "product_color" : "azure"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b3"),
    "id" : "20",
    "product_name" : "Handcrafted Wooden Bacon",
    "product_price" : 36,
    "product_material" : "Concrete",
    "product_color" : "lime"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b4"),
    "id" : "21",
    "product_name" : "Unbranded Granite Chicken",
    "product_price" : 90,
    "product_material" : "Metal",
    "product_color" : "gold"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b5"),
    "id" : "22",
    "product_name" : "Ergonomic Soft Hat",
    "product_price" : 99,
    "product_material" : "Rubber",
    "product_color" : "black"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b6"),
    "id" : "23",
    "product_name" : "Intelligent Steel Pizza",
    "product_price" : 95,
    "product_material" : "Cotton",
    "product_color" : "azure"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b7"),
    "id" : "24",
    "product_name" : "Tasty Rubber Cheese",
    "product_price" : 47,
    "product_material" : "Frozen",
    "product_color" : "orchid"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b8"),
    "id" : "25",
    "product_name" : "Licensed Steel Car",
    "product_price" : 20,
    "product_material" : "Cotton",
    "product_color" : "indigo"
}

4.List the four product which are grater than 500 in price ?

     db.products.find({product_price: {$gte: 500}}).limit(4).pretty();

output:
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a0"),
    "id" : "1",
    "product_name" : "Intelligent Fresh Chips",
    "product_price" : 655,
    "product_material" : "Concrete",
    "product_color" : "mint green"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a1"),
    "id" : "2",
    "product_name" : "Practical Fresh Sausages",
    "product_price" : 911,
    "product_material" : "Cotton",
    "product_color" : "indigo"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a2"),
    "id" : "3",
    "product_name" : "Refined Steel Car",
    "product_price" : 690,
    "product_material" : "Rubber",
    "product_color" : "gold"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a6"),
    "id" : "7",
    "product_name" : "Practical Soft Shoes",
    "product_price" : 500,
    "product_material" : "Rubber",
    "product_color" : "pink"
}

5.Find the product name and product material of each products?

    db.products.find({}, { product_name: 1, product_material : 1 }).pretty();

output:
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a0"),
    "product_name" : "Intelligent Fresh Chips",
    "product_material" : "Concrete"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a1"),
    "product_name" : "Practical Fresh Sausages",
    "product_material" : "Cotton"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a2"),
    "product_name" : "Refined Steel Car",
    "product_material" : "Rubber"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a3"),
    "product_name" : "Gorgeous Plastic Pants",
    "product_material" : "Soft"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a4"),
    "product_name" : "Sleek Cotton Chair",
    "product_material" : "Fresh"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a5"),
    "product_name" : "Awesome Wooden Towels",
    "product_material" : "Plastic"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a6"),
    "product_name" : "Practical Soft Shoes",
    "product_material" : "Rubber"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a7"),
    "product_name" : "Incredible Steel Hat",
    "product_material" : "Rubber"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a8"),
    "product_name" : "Awesome Wooden Ball",
    "product_material" : "Soft"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a9"),
    "product_name" : "Generic Wooden Pizza",
    "product_material" : "Frozen"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28aa"),
    "product_name" : "Unbranded Wooden Cheese",
    "product_material" : "Soft"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28ab"),
    "product_name" : "Unbranded Plastic Salad",
    "product_material" : "Wooden"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28ac"),
    "product_name" : "Gorgeous Cotton Keyboard",
    "product_material" : "Concrete"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28ad"),
    "product_name" : "Incredible Steel Shirt",
    "product_material" : "Metal"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28ae"),
    "product_name" : "Ergonomic Cotton Hat",
    "product_material" : "Rubber"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28af"),
    "product_name" : "Small Soft Chair",
    "product_material" : "Cotton"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b0"),
    "product_name" : "Incredible Metal Car",
    "product_material" : "Fresh"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b1"),
    "product_name" : "Licensed Plastic Bacon",
    "product_material" : "Steel"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b2"),
    "product_name" : "Intelligent Cotton Chips",
    "product_material" : "Soft"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b3"),
    "product_name" : "Handcrafted Wooden Bacon",
    "product_material" : "Concrete"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b4"),
    "product_name" : "Unbranded Granite Chicken",
    "product_material" : "Metal"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b5"),
    "product_name" : "Ergonomic Soft Hat",
    "product_material" : "Rubber"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b6"),
    "product_name" : "Intelligent Steel Pizza",
    "product_material" : "Cotton"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b7"),
    "product_name" : "Tasty Rubber Cheese",
    "product_material" : "Frozen"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b8"),
    "product_name" : "Licensed Steel Car",
    "product_material" : "Cotton"
}

6.Find the product with a row id of 10?

    db.products.find({id:"10"}).pretty();

output:
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a9"),
    "id" : "10",
    "product_name" : "Generic Wooden Pizza",
    "product_price" : 84,
    "product_material" : "Frozen",
    "product_color" : "indigo"
}

7.Find only the product name and product material?

      db.products.find({},{ _id:0,product_name: 1, product_material: 1}).pretty();

output:
{ "product_name" : "Intelligent Fresh Chips", "product_material" : "Concrete"}
{ "product_name" : "Practical Fresh Sausages", "product_material" : "Cotton"}
{ "product_name" : "Refined Steel Car", "product_material" : "Rubber" }
{ "product_name" : "Gorgeous Plastic Pants", "product_material" : "Soft" }
{ "product_name" : "Sleek Cotton Chair", "product_material" : "Fresh" }
{ "product_name" : "Awesome Wooden Towels", "product_material" : "Plastic" }
{ "product_name" : "Practical Soft Shoes", "product_material" : "Rubber" }
{ "product_name" : "Incredible Steel Hat", "product_material" : "Rubber" }
{ "product_name" : "Awesome Wooden Ball", "product_material" : "Soft" }
{ "product_name" : "Generic Wooden Pizza", "product_material" : "Frozen" }
{ "product_name" : "Unbranded Wooden Cheese", "product_material" : "Soft" }
{ "product_name" : "Unbranded Plastic Salad", "product_material" : "Wooden" }
{ "product_name" : "Gorgeous Cotton Keyboard", "product_material" : "Concrete"}
{ "product_name" : "Incredible Steel Shirt", "product_material" : "Metal" }
{ "product_name" : "Ergonomic Cotton Hat", "product_material" : "Rubber" }
{ "product_name" : "Small Soft Chair", "product_material" : "Cotton" }
{ "product_name" : "Incredible Metal Car", "product_material" : "Fresh" }
{ "product_name" : "Licensed Plastic Bacon", "product_material" : "Steel" }
{ "product_name" : "Intelligent Cotton Chips", "product_material" : "Soft" }
{ "product_name" : "Handcrafted Wooden Bacon", "product_material" : "Concrete"}
{ "product_name" : "Unbranded Granite Chicken", "product_material" : "Metal"}
{ "product_name" : "Ergonomic Soft Hat", "product_material" : "Rubber" }
{ "product_name" : "Intelligent Steel Pizza", "product_material" : "Cotton" }
{ "product_name" : "Tasty Rubber Cheese", "product_material" : "Frozen" }
{ "product_name" : "Licensed Steel Car", "product_material" : "Cotton" }

8.Find all products which contain the value of soft in product material?

      db.products.find({product_material : "Soft"}).pretty();

output:
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a3"),
    "id" : "4",
    "product_name" : "Gorgeous Plastic Pants",
    "product_price" : 492,
    "product_material" : "Soft",
    "product_color" : "plum"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a8"),
    "id" : "9",
    "product_name" : "Awesome Wooden Ball",
    "product_price" : 28,
    "product_material" : "Soft",
    "product_color" : "azure"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28aa"),
    "id" : "11",
    "product_name" : "Unbranded Wooden Cheese",
    "product_price" : 26,
    "product_material" : "Soft",
    "product_color" : "black"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b2"),
    "id" : "19",
    "product_name" : "Intelligent Cotton Chips",
    "product_price" : 46,
    "product_material" : "Soft",
    "product_color" : "azure"
}

9.Find products which contain product color indigo  and product price 492.00?

     db.products.find({$or :[{product_color:"indigo"} ,{product_price:492}]}).pretty();

output:
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a1"),
    "id" : "2",
    "product_name" : "Practical Fresh Sausages",
    "product_price" : 911,
    "product_material" : "Cotton",
    "product_color" : "indigo"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a3"),
    "id" : "4",
    "product_name" : "Gorgeous Plastic Pants",
    "product_price" : 492,
    "product_material" : "Soft",
    "product_color" : "plum"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28a9"),
    "id" : "10",
    "product_name" : "Generic Wooden Pizza",
    "product_price" : 84,
    "product_material" : "Frozen",
    "product_color" : "indigo"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b0"),
    "id" : "17",
    "product_name" : "Incredible Metal Car",
    "product_price" : 36,
    "product_material" : "Fresh",
    "product_color" : "indigo"
}
{
    "_id" : ObjectId("65a2757f129b0e7efdcd28b8"),
    "id" : "25",
    "product_name" : "Licensed Steel Car",
    "product_price" : 20,
    "product_material" : "Cotton",
    "product_color" : "indigo"
}

10.Delete the products which product price value are same?

    db.products.aggregate([
     {
       $group: {
         _id: "$product_price",
         count: { $sum: 1 },
         duplicates: { $addToSet: "$_id" }
       }
     },
     {
       $match: {
         count: { $gt: 1 }
       }
     }
    ]).forEach(function(doc) {
        doc.duplicates.shift(); 
         db.products.deleteMany({ _id: { $in: doc.duplicates } });
      });
  
    db.products.find({},{ product_price : 1}).pretty();

Output:
{ "_id" : ObjectId("65a2757f129b0e7efdcd28a0"), "product_price" : 655 }
{ "_id" : ObjectId("65a2757f129b0e7efdcd28a1"), "product_price" : 911 }
{ "_id" : ObjectId("65a2757f129b0e7efdcd28a2"), "product_price" : 690 }
{ "_id" : ObjectId("65a2757f129b0e7efdcd28a3"), "product_price" : 492 }
{ "_id" : ObjectId("65a2757f129b0e7efdcd28a4"), "product_price" : 33 }
{ "_id" : ObjectId("65a2757f129b0e7efdcd28a5"), "product_price" : 474 }
{ "_id" : ObjectId("65a2757f129b0e7efdcd28a6"), "product_price" : 500 }
{ "_id" : ObjectId("65a2757f129b0e7efdcd28a7"), "product_price" : 78 }
{ "_id" : ObjectId("65a2757f129b0e7efdcd28a8"), "product_price" : 28 }
{ "_id" : ObjectId("65a2757f129b0e7efdcd28a9"), "product_price" : 84 }
{ "_id" : ObjectId("65a2757f129b0e7efdcd28aa"), "product_price" : 26 }
{ "_id" : ObjectId("65a2757f129b0e7efdcd28ab"), "product_price" : 89 }
{ "_id" : ObjectId("65a2757f129b0e7efdcd28ac"), "product_price" : 37 }
{ "_id" : ObjectId("65a2757f129b0e7efdcd28ad"), "product_price" : 54 }
{ "_id" : ObjectId("65a2757f129b0e7efdcd28ae"), "product_price" : 43 }
{ "_id" : ObjectId("65a2757f129b0e7efdcd28b1"), "product_price" : 88 }
{ "_id" : ObjectId("65a2757f129b0e7efdcd28b2"), "product_price" : 46 }
{ "_id" : ObjectId("65a2757f129b0e7efdcd28b4"), "product_price" : 90 }
{ "_id" : ObjectId("65a2757f129b0e7efdcd28b5"), "product_price" : 99 }
{ "_id" : ObjectId("65a2757f129b0e7efdcd28b6"), "product_price" : 95 }
{ "_id" : ObjectId("65a2757f129b0e7efdcd28b8"), "product_price" : 20 }


          -------------------------x-------------------------------x----------------------------