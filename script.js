const clubs = {
    // --- LIGUE 1 2025/2026 ---
    "psg": { name: "Paris Saint Germain", date: "2026-01-08", trophy: "le Trophée des Champions", bg: "#001c39", logo: "img/psg.png" },
    "om": { name: "Olympique de Marseille", date: "2012-04-14", trophy: "la Coupe de la Ligue", bg: "#00a3e0", logo: "img/om.png" },
    "ol": { name: "Olympique Lyonnais", date: "2012-04-28", trophy: "la Coupe de France", bg: "#111c4e", logo: "img/ol.png" },
    "asm": { name: "AS Monaco", date: "2017-05-17", trophy: "la Ligue 1", bg: "#e20e17", logo: "img/asm.png" },
    "losc": { name: "LOSC", date: "2021-08-01", trophy: "le Trophée des Champions", bg: "#d71921", logo: "img/losc.png" },
    "lens": { name: "RC Lens", date: "1999-05-08", trophy: "la Coupe de la Ligue", bg: "#e30613", logo: "img/lens.png" },
    "nice": { name: "OGC Nice", date: "1997-05-10", trophy: "la Coupe de France", bg: "#1a1a1a", logo: "img/nice.png" },
    "rennes": { name: "Stade Rennais", date: "2019-04-27", trophy: "la Coupe de France", bg: "#e30613", logo: "img/rennes.png" },
    "fcnantes": { name: "FC Nantes", date: "2022-05-07", trophy: "la Coupe de France", bg: "#fce300", logo: "img/fcnantes.png" },
    "tfc": { name: "Toulouse FC", date: "2023-04-29", trophy: "la Coupe de France", bg: "#4a2583", logo: "img/tfc.png" },
    "strasbourg": { name: "RC Strasbourg", date: "2019-03-30", trophy: "la Coupe de la Ligue", bg: "#009ee0", logo: "img/strasbourg.png" },
    "brest": { name: "Stade Brestois 29", date: null, trophy: "aucun trophée", bg: "#d31118", logo: "img/brest.png" },
    "auxerre": { name: "AJ Auxerre", date: "2005-06-04", trophy: "la Coupe de France", bg: "#005ca9", logo: "img/auxerre.png" },
    "angers": { name: "SCO Angers", date: null, trophy: "aucun trophée", bg: "#1a1a1a", logo: "img/angers.png" },
    "lehavre": { name: "Le Havre", date: "1959-05-18", trophy: "la Coupe de France", bg: "#193a5a", logo: "img/lehavre.png" },
    "parisfc": { name: "Paris FC", date: null, trophy: "aucun trophée", bg: "#004092", logo: "img/parisfc.png" },
    "metz": { name: "FC Metz", date: "1988-05-18", trophy: "la Coupe de France", bg: "#6e1b30", logo: "img/metz.png" },
    "lorient": { name: "FC Lorient", date: "2002-05-11", trophy: "la Coupe de France", bg: "#ff4a00", logo: "img/FC_Lorient_logo.svg.png" },

    // --- SELECTED OTHERS ---
    "mshc": { name: "Montpellier", date: "2012-05-20", trophy: "la Ligue 1", bg: "#002a54", logo: "img/mshc.png" },
    "asse": { name: "AS Saint-Étienne", date: "2013-04-20", trophy: "la Coupe de la Ligue", bg: "#008a44", logo: "img/asse.png" },
    "fcbordeaux": { name: "Girondins de Bordeaux", date: "2013-05-31", trophy: "la Coupe de France", bg: "#002147", logo: "img/fcbordeaux.png" },
    "reims": { name: "Stade de Reims", date: "1962-05-04", trophy: "le Championnat", bg: "#d31118", logo: "img/reims.png" },
    "socheaux": { name: "FC Sochaux-Montbéliard", date: "2007-05-12", trophy: "la Coupe de France", bg: "#004a99", logo: "img/socheaux.png" }
};

// 1. Remplissage des grilles (Index)
if (document.getElementById('l1-grid')) {
    const l1Keys = ["psg", "om", "ol", "asm", "losc", "lens", "nice", "rennes", "fcnantes", "tfc", "strasbourg", "brest", "auxerre", "angers", "lehavre", "parisfc", "metz", "lorient"];
    const otherKeys = ["mshc", "asse", "fcbordeaux", "reims", "socheaux"];

    const fillGrid = (keys, containerId) => {
        const grid = document.getElementById(containerId);
        keys.forEach(k => {
            if(clubs[k]) {
                const a = document.createElement('a');
                a.className = "club-link";
                a.href = `details.html?club=${k}`;
                a.innerText = clubs[k].name;
                grid.appendChild(a);
            }
        });
    };
    fillGrid(l1Keys, 'l1-grid');
    fillGrid(otherKeys, 'others-grid');
}

// 2. Gestion du Compteur (Détails)
if (document.getElementById('y')) {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('club');
    const club = clubs[id];

    if (club) {
        document.body.style.backgroundColor = club.bg;
        document.getElementById('club-logo').src = club.logo;
        document.getElementById('title-text').innerText = `Depuis quand ${club.name} n'a plus gagné de trophée ??`;

        function update() {
            if (!club.date) {
                document.querySelector('.timer-display').style.display = 'none';
                document.getElementById('desc').innerText = `${club.name} n'a jamais remporté de trophée majeur.`;
                return;
            }
            const diff = new Date() - new Date(club.date);
            document.getElementById('y').innerText = Math.floor(diff / 31557600000);
            document.getElementById('d').innerText = Math.floor((diff % 31557600000) / 86400000);
            document.getElementById('h').innerText = Math.floor((diff % 86400000) / 3600000);
            document.getElementById('m').innerText = Math.floor((diff % 3600000) / 60000);
            document.getElementById('s').innerText = Math.floor((diff % 60000) / 1000);
            document.getElementById('desc').innerText = `Le dernier trophée remporté par ${club.name} était  ${club.trophy} en ${new Date(club.date).getFullYear()}.`;
        }
        setInterval(update, 1000);
        update();
    }
}