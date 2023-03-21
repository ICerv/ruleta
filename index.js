let number = Number(prompt('Zadej cislo od 0 do 36'));


if ((number > 0 && number <= 10) || (number >= 19 && number <= 28)) {
  if (number % 2 === 1) {
    document.body.innerHTML = `
   <p> Zadane cislo <strong>${number}</strong> je liche a zaroven cervene cislo </p>
    `
  } else {
    document.body.innerHTML = `
   <p> Zadane cislo<strong> ${number} </strong>je sude a zaroven cerne cislo </p>
    `
  }
} else {
  if (number % 2 === 0) {
    document.body.innerHTML = `
    <p> Zadane cislo <strong>${number}</strong> je sude a zaroven cerne cislo </p>
     `
  } else {
    document.body.innerHTML = `
    <p> Zadane cislo <strong>${number}</strong> je liche a zaroven cervene cislo </p>
     `
  }
  if (number === 0) {
    document.body.innerHTML = `
    <p> Zadane cislo je <strong>${number}</strong></p>
     `
  }
}




