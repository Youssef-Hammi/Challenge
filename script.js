let books = [
    {id: 1, titre: "titre1", auteur: "auteur", prix: 28},
    {id: 2, titre: "titre2", auteur: "auteur2", prix: 30},
    {id: 3, titre: "titre3", auteur: "auteur3", prix: 34}
];

let cAction = 'ajout';
let bookNum = -1; 

function show(action = 'ajout', index = -1) {
    cAction = action;
    bookNum = index;
    document.getElementById("form").style.display = 'flex';

    if (action === 'mod' && index !== -1) {
        const book = books[index];
        document.getElementById("id").value = book.id;
        document.getElementById("tit").value = book.titre;
        document.getElementById("aut").value = book.auteur;
        document.getElementById("prix").value = book.prix;
        document.getElementById("id").readOnly = true;
    } else {
        document.getElementById("id").value = '';
        document.getElementById("tit").value = '';
        document.getElementById("aut").value = '';
        document.getElementById("prix").value = '';
        document.getElementById("id").readOnly = false;
    }
}

function save() {
    const id = parseInt(document.getElementById("id").value);
    const titre = document.getElementById("tit").value;
    const auteur = document.getElementById("aut").value;
    const prix = parseInt(document.getElementById("prix").value);

    if (cAction === 'ajout') {
        books.push({id: id, titre: titre, auteur: auteur, prix: prix});
    } else if (cAction === 'mod' && bookNum !== -1) {
        books[bookNum] = {id: id, titre: titre, auteur: auteur, prix: prix};
    }

    hide();
    aff();
}

function hide() {
    document.getElementById("form").style.display = 'none';
}


function supp(index) {
    books.splice(index, 1);
    aff();
}

function aff() {
    const tab = document.getElementById("table");
    tab.innerHTML = "<tr><th>ID</th><th>Titre</th><th>Auteur</th><th>Prix</th><th>Actions</th></tr>";

    for (let i = 0; i < books.length; i++) {
        tab.innerHTML += `<tr>
            <td>${books[i].id}</td>
            <td>${books[i].titre}</td>
            <td>${books[i].auteur}</td>
            <td>${books[i].prix}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="show('mod', ${i})">Modifier</button>
                <button class="btn btn-danger btn-sm" onclick="supp(${i})">Supprimer</button>
            </td>
        </tr>`;
    }
}
