import "./css/styles";
import insert from "./js/insertBg";
import { multiply } from "Utilities/utilities";
console.log(multiply(1, 5));
// insert();

const foo = () => console.log("object");
foo();

const foo2 = async () => await Promise.resolve("asd");
foo2();

class U {
  static id = Date.now();
}
console.log("U", U.id);
