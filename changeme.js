// Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi dimana array tersebut berisi value (pasti berurut dari kiri ke kanan) First Name, Last Name, Gender dan Birth Year . Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age. Nilai age didapatkan dari tahun sekarang dikurang tahun lahir. Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi 'Invalid Birth Year'

// Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]] maka output:

// Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
// John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }

function changeMe(arr) {
    var year= 2018
    for(var i=0; i<arr.length; i++) {
        var obj = {};
        obj.firstName = arr [i][0]
        obj.lastName = arr [i][1]
        obj.gender = arr [i][2]
        obj.age = arr [i][3]
        
        if(arr[i][3]=== undefined || arr[i][3] > year) {
            obj.age = 'Invalid Birth Year';
        } else {
            obj.age = 2018 - arr [i][3];
    
        }
        console.log (obj)
    } 

}


// TEST CASES
console.log(changeMe([['Christ', 'Evans', 'Male', 2020], ['Robert', 'Downey', 'Male']])); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
console.log(changeMe([])); // ""
 