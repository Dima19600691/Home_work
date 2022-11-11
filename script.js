// Перше завдання
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials;
initials = userNames.map(element => element.split(' '))       
  	.map(names => names                                    
      .map(lastname => lastname[0] + '.')                                         
      .join("")
    )
    .sort();

console.log(initials);

//Друге завдання

const currentMaxValue = 4589;
let reverseMaxValue;
reverseMaxValue = String(currentMaxValue).split("").reverse().join("");
reverseMaxValue = + reverseMaxValue;
console.log (reverseMaxValue)

// Третє завдання

const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray.flat(Infinity);
const initValue = 1;
const multiplication = productOfArray.reduce(
(prev, current) => prev * current,
initValue
)
console.log(multiplication);