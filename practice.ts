const aNumber = 1;
const aBoolean = true;
const aString = "some string";

const aChar: string = aString[aNumber];

type CoolCatName = "Callie" | "Linus" | "Squeaky";

type NewCoolCatName = "Sparky" | "Spot" | "Ruff";

type AllCoolCatNames = CoolCatName | NewCoolCatName;

const catNames: AllCoolCatNames[] = ["Callie", "Linus", "Squeaky"];

const addNewCatToHackerHouse = (newCat: NewCoolCatName) => {
  catNames.push(newCat);
};

addNewCatToHackerHouse("Spot");

console.log(catNames);

const doSomethingNTimes = (cb: any, n: 1 | 2 | 3) => {
  for (let i = 0; i < n; i++) {
    cb();
  }
};

doSomethingNTimes(() => console.log("hello"), 2);

type CatColor =
  | "black"
  | "white"
  | "calico"
  | "dilute-tortie"
  | "tortie"
  | "tabby"
  | "tuxedo";

interface Cat {
  name: string;
  age: number;
  color: CatColor;
}

interface CoolCat extends Cat {
  name: "Callie" | "Linus";
}

const callie: CoolCat = {
  name: "Callie",
  age: 17,
  color: "tuxedo",
};

const phoenix: Cat = {
  name: "Squeaky",
  age: 4,
  color: "dilute-tortie",
};

const linus: CoolCat = {
  name: "Linus",
  age: 1,
  color: "tabby",
};

const introduceCat = (cat: Cat) => {
  console.log(
    `${cat.name} is a ${cat.color} cat who has graced us with their presence ${cat.age} years`
  );
};

const introduceCoolestCats = (cat: CoolCat) => {
  introduceCat(cat);
  console.log("By the way, this is the best cat ever");
};

introduceCoolestCats(callie);
