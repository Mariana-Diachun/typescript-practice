let age: number;
age = 50;
let surname: string;
surname = "Max";
let toggle: boolean;
toggle = true;
let empty: null;
empty = null;
let notInitialize: undefined;
notInitialize = undefined;
let callback = (a: number) => a;
callback = (a) => {
  return 100 + a;
};

let anything: any;
anything = -20;
anything = "Text";
anything = {};

let some: unknown;
some = "Text";

let str: string;
if (typeof some === "string") {
  str = some;
}

let person: [string, number];
person = ["Max", 21];

enum Status {
  LOADING,
  READY,
}
const page = {
  status: Status.LOADING,
};
if (page.status === Status.LOADING) {
  console.log("Page is loading");
}
if (page.status === Status.READY) {
  console.log("Page is ready");
}

let hello: string | number;

let literal: "enable" | "disable";

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

type DataPage = {
  title: string;
  likes: number;
  accounts: string[];
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};

const page2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
