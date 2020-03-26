title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';

console.log("Bez formatowania:\n");
console.log(title + " " + name + " " + surname + "\nul." + street + "\n" + zip + " " + city + "\n" + country.toUpperCase());
console.log("\nZ formatowaniem:\n");
console.log(`${title} ${name} ${surname}\nul. ${street}\n${zip} ${city}\n${country.toUpperCase()}`);

/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/
