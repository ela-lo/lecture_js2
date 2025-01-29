// var surname = "berikashvili"
// var grade = 5
// var is_student = true

// const surname = "berikashvili"
// const grade = 5
// const is_student = true

// გადაეწერება ლილეს ზუკა, რადგან "რეესაინმენთი" თავიდან მივანიჭე მნიშვნელობა.
// let userName = "lile";
// userName = "zuka";
// console.log(userName);

// // ტიპის დასადგენად ვიყენებთ: "typeof"
// let username = "ana";
// let age = 5;
// console.log(typeof age);

// // ლექცია 2
// "რიცხვების ჯამი" იგივე იქნება გამოკლება, გამრავლების შემთხვევაში.
// var number1 = 53
// var number2 = 98
// var sum = (number1 + number2)
// console.log(sum);

// // სტრინგ ტიპის იწერება ბრჭყალებში, თუ რიცხვებს ჩავწერთ ბრჭყაშლებში მიუერტებს ერთმანეთს
// var number2 = "3"
// var number4 = "78"
// var sum = (number2+number4)
// console.log(sum);  ამ შემთხვავში დაიწერება378

// const- მუდმივია, მასზე არაფერი დაგაეწერება

// array  (მასივი) შემიძლია შევინახო განუსაზღვრელი რაოდენობის ელემენტები, რიცხვიც, ტექსტის, tru da false, სხვდსხვა ტიპის ინფორმაცია.

// დაითვლის რაოდენობას
//  let array = [4,7,9, "fruit" "berry" true, false]
//  console.log(length);

// მაისივიდან ბოლო ელემენტის დაბეჭდვა
// let array = [4, 7, 9, "fruit", "bery", true, false, 25];
// console.log(Array[Array.length - 1]);  (შეცდომას მიწერს!!!)

// 1. ელემენტის დამატება ბოლოში push, თავში დამატება - unshift
// let array = ["apple", "banana", "cherry"];
// array.push("orange");
// array.unshift("black");
// console.log(array);

// 2.წაშლა
// let numbers = [10, 20, 30, 40];
// numbers.shift(0);
// console.log(numbers);

// 3.ელემენტის დამატება კონკრეტუ; ინდექსზე
// let colors = ["red", "blue", "green"];
// let result = array.splice(1, 0, "yellow");     (1 ნიშნავს მერამდენე ინქსზე ჩაამატოს ელემენტი, 0 რამდენი ელემენტი წაშალოს, "yellow" რა ჩაამატოს)
// console.log(colors);

4. მასივის გაერთიანება 
let animals1 = ["cat", "dog"]; 

let animals2 = ["lion", "tiger"]; 

// 5. სორტირება
// let scores = [50, 30, 20, 10, 40];
// Array.sort()
// console.log(array);

// // 7. მასივის შებრუნება
// let letters = ["a", "b", "c", "d"];
// array.revesre();
// console.log(array);
