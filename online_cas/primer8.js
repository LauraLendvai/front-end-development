function zaIspis(osoba) {
    return "Ime:" + osoba.ime + "\n"+
            "Prezime:" + osoba.prezime + "\n" +
            "Godiste:" + osoba.godiste + "\n" +
            "Email:" + osoba.mail + "\n" +
            "Adresa:\n"+
            "\tUlica: " + osoba.adresa.ulica + "\n" +
            "\tBroj: " + osoba.adresa.broj + "\n" +
            "\tGrad: " + osoba.adresa.grad + "\n" 
}



const pera = {
    "ime": "Petar",
    "prezime": "Petrovic",
    "godiste": 1995,
    "mail": "petar@example.com",
    "adresa": {
        "ulica": "Cara Dusana",
        "broj": 34,
        "grad": "Beograd"
    }
}

console.log(pera["adresa"]["ulica"])
console.log(pera.adresa.ulica)
console.log(zaIspis(pera))

