// 1
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";
// 1 part
for (let i = 3; i < friends.length; i++) {
   string += ",";
console.log(friends);
}
// 2 part
string = friends.join(",")
console.log(string);

// 2

const cards = [
    "Карточка-1",
    "Карточка-2",
    "Карточка-3",
    "Карточка-4",
    "Карточка-5",
]
const cardToRemove = cards.splice(2, 1);
const cardToInsert = cards.splice(5, 0, "Карточка-6");
const cardTOUpdate = cards.splice(2, 1, "Карточка-4(NEW)");
console.log(cards);