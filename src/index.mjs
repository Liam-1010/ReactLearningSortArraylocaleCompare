import "./styles.css";


const employees = [
  { name: 'John', age: 29 },
  { name: 'Wayne', age: 36 },
  { name: 'David', age: 44 },
  { name: 'Bruce', age: 21 },
];

employees.sort((a, b) => a.name - b.name);

//console.log(employees);

function sortDescending(arr) 

{ arr.sort((a, b) => b.name.localeCompare(a.name)); 
return arr}

let resu = sortDescending(employees)

console.log(resu)

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
