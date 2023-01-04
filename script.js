function provjera() {
    let input = document.querySelector("#email");
    let vrijednost = input.value;

    // *! Provjerava da li vrijednost (string) sadrzi @ i .
    if (vrijednost.includes("@") && vrijednost.includes(".")) {
        
        let pozicijaEt = vrijednost.indexOf("@");  //*! uzimamo poziciju od @
        let pozicijaTocka = vrijednost.indexOf(".");  //*!uzimamo poziciju  od .

        // *!uzima vrijednost izmedju pozicija. Ne ukljucuje posljednju poziciju
        let izmedjuEtTocka = vrijednost.substring(pozicijaEt , pozicijaTocka);

        // *!da li izmedju @ i . imamo vise od 4 karaktera
        if(izmedjuEtTocka.length > 4) {

                let prijeEt = vrijednost.substring(0, pozicijaEt);

                // *!da li prije @ imamo vise od 2 karaktera
                if(prijeEt.length > 2) {
                    
                    let posljeTocke = vrijednost.substring(pozicijaTocka + 1, vrijednost.length);

                    //*! da li poslje . imamo vise od 1 karaktera
                    if(posljeTocke.length > 1) {
                        console.log("Email je validan");
                    } else {
                        console.log("Email nije validan");
                    }

                }   else {
                    console.log("Unesi minimalno 3 znaka ispred @");
                }
        
        } else {
            console.log("Email nije validan");
        }
         
    } else {
        console.log("Email mora imati @ i .");
    }
}