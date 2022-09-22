var r = require('readline-sync')

class myClass {
   constructor() {
      var arr1 = []

      var limit = r.question('Enter the size of array ')
      console.log('Enter the elements of the array')
      getArray(arr1, limit)
      displayArray(arr1, limit)

      function getArray(arr, limit) {
         let elements = []

         for (let i = 0; i < limit; i++) {
            elements = []

            for (let j = 0; j < limit; j++) {
               elements[j] = Number(r.question())
            }
            arr[i] = elements
         }
      }

      function displayArray(arr, limit) {
         console.log('Array elements are :')

         let f = ''
         for (let i = 0; i < limit; i++) {
            for (let j = 0; j < limit; j++) {
               f += arr[i][j] + "\t"
            }
            console.log(f)
            f = ''
         }


      }

   }
}
