let n: number[] = [1, 2, 3, 4]
let user: {name: string; age: number} = {
    name: "Diana",
    age: 14
}
function my(name: string): void{
    console.log
}
interface IName{
    name: string;
    
}
type TAge = {
    name: string;
    age: number
}
type TColor = "white" | "dark"
type TAdmin = {role: "admin"}
type TUser = {role: "user"}
type TPerson = TAdmin | TUser
interface User {
  id: number;
  name: string;
  email?: string; // необязательное поле
}
type TRead = Readonly<User>
const ru: TRead = {
    id: 2,
    name: "Eve"
}

ru.name = "Danil"