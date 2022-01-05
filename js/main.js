alert ('Xush kelibsiz Xojaka');

var firstName = prompt("Ismingiz; Xojaka", "Ivan");

var surname = prompt ('Familiyangiz Xojaka :)', 'Ivanovich');

var age = Number(prompt('Nechchi Yoshdasiz?', '21'));

var isMarried = Boolean(prompt("Uylanganmisiz ?", 'ha') );

var hasChild = Boolean(prompt("Farzandlaringiz bormi ?", "ha"));

var childAmount = Number(prompt("Farnzandlardan nechta ?", "10"));

var carType = null;

var salary = undefined;

var homeland = prompt ("Qayerda tug'ilngansiz ? ", "Afg'oniston");

var job = prompt("Kasbingiz nima ?", "Tiktoker");

alert ("Suring endi " + firstName + ' ' + "aka")
console.log('Karochchi Xojaka! \n'+ "Ismingiz: " + firstName + '\n' + "Familiyangiz: " + surname + '\n' + "Yoshingiz: " + age + "\n" + "Sizda " + childAmount+ "ta farzand bor" +'\n'+ "Mashinangiz: " + carType + '\n' + "Oylik maoshingiz: " + salary + '\n' + "Tug'ilgan joyingiz: " + homeland + '\n' + "Sizning kasbingiz: " + job);