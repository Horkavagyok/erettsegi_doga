import fs from "fs";

const file = fs.readFileSync("uvegek.txt", { encoding: "UTF8" });
const content = file.trim().split(",");
const arr = content.map((e) => +e);
console.log("2. feladat: ");
const input = 25;
if (input > 200 || input < 0) {
  console.log("Hibás adat");
}
console.log(`Mari néni lekvárja (dl): ${input}`);
console.log("3. feladat");
let index = 1;
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  index += 1;
  if (max < arr[i]) {
    max = arr[i];
    console.log(`A legnagyobb üveg: ${max} dl és a ${index}. a sorban.`);
  }
}
console.log("4. feladat");

let ossz = 0;

for (let i = 0; i < arr.length; i++) {
  ossz += arr[i];
}

if (ossz < input) {
  console.log("Maradt lekvár.");
} else {
  console.log("Elegendő üveg volt.");
}
