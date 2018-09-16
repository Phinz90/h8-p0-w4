// Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang yang terjual pada hari itu.

// Barang-barang SALE yang akan dihitung penjualannya:

// Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
// Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
// Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1
// Function akan menerima array yang berisikan object pembeli (nama pembeli, barang yang ingin dibeli dan jumlah barang yang dibelinya). Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

// Function countProfit akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi objek-objek barang dari toko X tersebut yang berisikan info nama barang, siapa saja yang membeli, sisa stock barang dan total pemasukan untuk barang tersebut

function countProfit(shoppers) {
	let listBarang = [
		['Sepatu Stacattu', 1500000, 10],
		['Baju Zoro', 500000, 2],
		['Sweater Uniklooh', 175000, 1],
	];

	//console.log(shoppers);
	if (shoppers[0] === undefined) {
		return [];
	}
	//create object shoes
	var shoes = {};
	var shoesShoppers = [];
	var shoesAmount = 0;
	var shoesLeft = listBarang[0][2];
	//console.log(listBarang[0][2]);

	//create object baju
	var shirt = {};
	var shirtShoppers = [];
	var shirtAmount = 0;
	var shirtLeft = listBarang[1][2];

	//create object Sweater
	var sweater = {};
	var sweaterShoppers = [];
	var sweaterAmount = 0;
	var sweaterLeft = listBarang[2][2];

	//tampung semuah nilai object
	var result = [];

	for (var i = 0; i < 5; i++) {
		for (var j = 0; j < shoppers.length; j++) {
			//looping untuk object shoes
			if (i === 0) {
				shoes.product = listBarang[i][0];
				//console.log(shoes.product);
				if (shoppers[j].product === 'Sepatu Stacattu') {
					if (shoppers[j].amount <= shoesLeft && shoppers[j].amount > 0) {
						shoesShoppers.push(shoppers[j].name);
						shoesAmount = shoesAmount + shoppers[j].amount;
						shoesLeft = shoesLeft - shoppers[j].amount;
					}
				}
				shoes.shoppers = shoesShoppers;
				shoes.leftOver = shoesLeft;
				shoes.TotalProfit = listBarang[0][1] * shoesAmount;
			} else if (i === 1) {
				//looping untuk object shirt
				shirt.product = listBarang[i][0];
				//console.log(shirt.product);
				if (shoppers[j].product === 'Baju Zoro') {
					if (shoppers[j].amount <= shirtLeft && shoppers[j].amount > 0) {
						shirtShoppers.push(shoppers[j].name);
						shirtAmount = shirtAmount + shoppers[j].amount;
						shirtLeft = shirtLeft - shoppers[j].amount;
					}
				}
				shirt.shoppers = shirtShoppers;
				shirt.leftOver = shirtLeft;
				shirt.TotalProfit = listBarang[1][1] * shirtAmount;
			} else if (i === 2) {
				sweater.product = listBarang[i][0];
				//console.log(sweater.product);
				if (shoppers[j].product === 'Baju Zoro') {
					if (shoppers[j].amount <= sweaterLeft && shoppers[j].amount > 0) {
						sweaterShoppers.push(shoppers[j].name);
						sweaterAmount = sweaterAmount + shoppers[j].amount;
						sweaterLeft = sweaterLeft - shoppers[j].amount;
					}
				}
				sweater.shoppers = sweaterShoppers;
				sweater.leftOver = sweaterLeft;
				sweater.TotalProfit = listBarang[2][1] * sweaterAmount;
			}
		}
	}
	result.push(shoes, shirt, sweater);
	//console.log(result);
	return result;
}

  
// TEST CASESß
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]