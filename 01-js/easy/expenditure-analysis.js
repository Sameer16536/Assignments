/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
//Create  an object to store  the total spent by category.
let categoryMap ={}
//Iterate through  transactions
transactions.forEach(transaction=>{
  //If category already exists add price to existing total
  if(categoryMap.hasOwnProperty(transaction.category)){
    categoryMap[transaction.category] += transaction.price;
  }
  else{
    // If category doesn't exist, create it with current transaction's price
            categoryMap[transaction.category] = transaction.price;
  }
})

  // Convert categoryMap object into array of objects with category and totalSpent
  let result = Object.keys(categoryMap).map(category => ({
    category: category,
    totalSpent: categoryMap[category]
}));

return result;
}

module.exports = calculateTotalSpentByCategory;
