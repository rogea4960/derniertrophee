// CONFIGURATION
const API_KEY = "a12fa76ed3f5cc4d7e493444ba395dd7";
const LEAGUE_ID = 61;

const clubs = {
    "psg": { article: "le ", name: "Paris Saint Germain", date: "2026-08-12T23:00:00", trophy: "La Supercoupe de l'UEFA", topColor: "#001c39", bottomColor: "#004b87", logo: "img/psg.png", context: "Le club de la capitale continue d'enchaîner les trophées nationaux.", disette: "Après leur première Ligue des Champions, le club continue dominer et impose sa dictature sur le football français et européen." },
    "om": { article: "l'", name: "Olympique de Marseille", date: "2012-04-14T23:00:00", trophy: "Coupe de la Ligue", topColor: "#001da1", bottomColor: "#ffffff", logo: "img/om.png", context: "Un géant historique toujours en quête d'un nouveau trophée.", disette: "Depuis, le club a été Demi-Finaliste de la Ligue Europa Conference 2022, Ligue Europa 2024 et Finaliste de la Coupe de France en 2016, de la Ligue Europa en 2018, et des Trophée des Champions 2021 et 2025." },
    "ol": { article: "l'", name: "Olympique Lyonnais", date: "2012-04-28T23:00:00", trophy: "la Coupe de France", topColor: "#1d428a", bottomColor: "#d50032", logo: "img/ol.png", context: "L'ancien dominateur du football français attend un nouveau sacre.", disette: "Depuis, le club a fait l'exploit d'éliminer la Juventus de Cristiano Ronaldo et Manchester City et fini Demi-finaliste de la Ligue des Champions in 2020, de la Ligue Europa en 2017 et finaliste de la Coupe de France en 2024." },
    "asm": { article: "l'", name: "AS Monaco", date: "2017-05-17T23:00:00", trophy: "la Ligue 1", topColor: "#ffffff", bottomColor: "#d50032", logo: "img/asm.png", context: "Le club de la principauté rêve d'un nouveau titre.", disette: "Depuis, le club était Finaliste de la Coupe de France en 2021." },
    "losc": { article: "le ", name: "LOSC", date: "2021-08-01T23:00:00", trophy: "le Trophée des Champions", topColor: "#d71921", bottomColor: "#002b5c", logo: "img/losc.png", context: "Les Dogues restent compétitifs au plus haut niveau.", disette: "" },
    "lens": { article: "le ", name: "RC Lens", date: "2026-08-16T22:50:00", trophy: "le Trophée des Champions", topColor: "#ffd100", bottomColor: "#c8102e", logo: "img/lens.png", context: "Le peuple Sang et Or fête un nouveau titre majeur.", disette: "Depuis, le club a été Demi-finaliste de la Coupe de l'UEFA en 2000 et de la Coupe de France en 2010." },
    "nice": { article: "l'", name: "OGC Nice", date: "1997-05-10T23:00:00", trophy: "la Coupe de France", topColor: "#111111", bottomColor: "#d4af37", logo: "img/nice.png", context: "Le Gym espère retrouver les sommets.", disette: "Depuis, le a été Finaliste de la Coupe de la Ligue en 2006 et de la Coupe de France en 2022." },
    "rennes": { article: "le ", name: "Stade Rennais", date: "2019-04-27T23:00:00", trophy: "la Coupe de France", topColor: "#d50032", bottomColor: "#111111", logo: "img/rennes.png", context: "Depuis 2019, Rennes a enfin mis fin à des décennies sans trophée.", disette: "Depuis, Le club était Demi-finaliste de la Coupe de France en 2024." },
    "tfc": { article: "le ", name: "Toulouse FC", date: "2023-04-29T23:00:00", trophy: "la Coupe de France", topColor: "#6b2fa3", bottomColor: "#2c003e", logo: "img/tfc.png", context: "Le Téfécé a marqué l'histoire récente.", disette: "Les Violets ont fait vibrer le Stadium lors d'une campagne mémorable en Ligue Europa, tenant tête à Liverpool en 2023." },
    "strasbourg": { article: "le ", name: "RC Strasbourg", date: "2019-03-30T23:00:00", trophy: "la Coupe de la Ligue", topColor: "#009ee0", bottomColor: "#ffffff", logo: "img/strasbourg.png", context: "Le club alsacien garde un souvenir fort de 2019.", disette: "Le club était demi finaliste de la Ligue Conférence 2025-2026." },
    "brest": { article: "le ", name: "Stade Brestois 29", date: null, trophy: "aucun trophée", topColor: "#d31118", bottomColor: "#ffffff", logo: "img/brest.png", context: "Le club breton n'a jamais remporté de trophée majeur.", disette: "Après avoir fini troisième dans l'élite, les bretons ont ensuite imprésionné l'Europe durant leur campagne de Ligue des Champions." },
    "auxerre": { article: "l'", name: "AJ Auxerre", date: "2005-06-04T23:00:00", trophy: "la Coupe de France", topColor: "#005ca9", bottomColor: "#ffffff", logo: "img/auxerre.png", context: "L'AJA attend depuis 2005.", disette: "Depuis, le club a été Finaliste de la Coupe de France en 2015." },
    "angers": { article: "le ", name: "SCO Angers", date: null, trophy: "aucun trophée", topColor: "#000000", bottomColor: "#ffffff", logo: "img/angers.png", context: "Le SCO court toujours après son premier trophée.", disette: "le club a été Finaliste de la Coupe de France en 1957 et 2017." },
    "lehavre": { article: "", name: "Le Havre", date: "1959-05-18T23:00:00", trophy: "la Coupe de France", topColor: "#193a5a", bottomColor: "#7ec8e3", logo: "img/lehavre.png", context: "Le doyen des clubs français attend un nouveau titre.", disette: "Le club a été Demi-finaliste de la Coupe de la Ligue en 1999." },
    "parisfc": { article: "le ", name: "Paris FC", date: null, trophy: "aucun trophée", topColor: "#004092", bottomColor: "#6ec1ff", logo: "img/parisfc.png", context: "Le PFC rêve de s'imposer durablement en Ligue 1.", disette: "Le club a été Demi-finaliste de la Coupe de France en 1980." },
    "metz": { article: "le ", name: "FC Metz", date: "1988-05-18T23:00:00", trophy: "la Coupe de France", topColor: "#7a0026", bottomColor: "#d71920", logo: "img/metz.png", context: "Les Grenats continuent l'acenseur.", disette: "Depuis, le Finaliste de la Coupe de la Ligue en 1999 et Vice Champion du Championnat de France 1997-98 à egalité de point avec Lens!." },
    "lorient": { article: "le ", name: "FC Lorient", date: "2002-05-11T23:00:00", trophy: "la Coupe de France", topColor: "#ff6b00", bottomColor: "#111111", logo: "img/FC_Lorient_logo.svg.png", context: "Les Merlus restent marqués par leur victoire historique.", disette: "Le club a été plusieurs fois Demi-finaliste de la Coupe de France en 2006, 2013 et 2016." },
    "troyes": { article: "l'", name: "Estac Troyes", date: null, trophy: "aucun trophée", topColor: "#2100f7db", bottomColor: "#ecf79d", logo: "img/troyes.png", context: "L'ESTAC et ses supporters retrouvent l'élite 3 ans après!", disette: "le club ne possède pas de trophée majeur, cependant l'ESTAC est 3 fois Champions de Ligue 2 et Vainqueur de la Coupe Intertoto en 2001." },
    "mans": { article: "", name: "Le Mans FC", date: null, trophy: "aucun trophée", topColor:"#c60113", bottomColor:"#f6d95e", logo: "img/mans.png", context:"Les Sangs et Or retrouve La Ligue 1 16 ans après!" },
    "fcnantes": { article: "le ", name: "FC Nantes", date: "2022-05-07T23:00:00", trophy: "la Coupe de France", topColor: "#f7d800", bottomColor: "#00a651", logo: "img/fcnantes.png", context: "Les Canaris quittent l'élite 13 ans après", disette: " Les Canaris n'étaient pas loin du back to back en Coupe de France." },
    "mshc": { article: "", name: "Montpellier", date: "2012-05-20T23:00:00", trophy: "la Ligue 1", topColor: "#002a54", bottomColor: "#ff6b00", logo: "img/mshc.png", context: "Aujourd'hui en Ligue 2, Le titre surprise de 2012 reste historique.", disette: "Le club a été Demi-finaliste de la Coupe de France en 2021." },
    "asse": { article: "l'", name: "AS Saint-Étienne", date: "2013-04-20T23:00:00", trophy: "la Coupe de la Ligue", topColor: "#008a44", bottomColor: "#ffffff", logo: "img/asse.png", context: "Les Verts attendent un nouveau trophée.", disette: "Le club a été Finaliste de la Coupe de France en 2020." },
    "fcbordeaux": { article: "les ", name: "Girondins de Bordeaux", date: "2013-05-31T23:00:00", trophy: "la Coupe de France", topColor: "#002147", bottomColor: "#7ec8e3", logo: "img/fcbordeaux.png", context: "Un club historique aujourd'hui en mode survie.", disette: "le club a été Demi-finalistes de la Coupe de la Ligue en 2017 et 2019." },
    "reims": { article: "le ", name: "Stade de Reims", date: "1962-05-04T23:00:00", trophy: "la Division 1", topColor: "#d31118", bottomColor: "#ffffff", logo: "img/reims.png", context: "Le grand Reims des années 50 reste mythique.", disette: " le club a éte Finaliste de la Coupe de France en 2024-25." },
    "sochaux": { article: "le ", name: "FC Sochaux-Montbéliard", date: "2007-05-12T23:00:00", trophy: "la Coupe de France", topColor: "#004a99", bottomColor: "#ffd100", logo: "img/sochaux.png", context: "Les Lionceaux restent un club historique du football français.", disette: "Depuis, le club a été Demi-finaliste de la Coupe de France en 2016." },
    "eag": { article: "l'", name: "En Avant Guingamp", date: "2014-05-03T23:00:00", trophy: "la Coupe de France", topColor: "#e30613", bottomColor: "#000000", logo: "img/eag.png", context: "Le club breton a marqué l'histoire moderne des coupes nationales." },
    "redstar": { article: "le ", name: "Red Star", date: "1942-05-17T23:00:00", trophy: "la Coupe de France", topColor: "#044e0e", bottomColor: "#9a0606", logo: "img/redstar.png", context: "Ca fait un bail." }
};

// PAGE PRINCIPALE
if (document.getElementById('l1-grid')) {
    const l1Keys = ["psg", "om", "ol", "asm", "losc", "lens", "nice", "rennes", "tfc", "strasbourg", "brest", "auxerre", "angers", "lehavre", "parisfc", "lorient","troyes", "mans"];
    const otherKeys = ["mshc", "asse", "fcbordeaux", "reims", "sochaux", "eag", "fcnantes", "metz", "redstar"];

    const fillGrid = (keys, containerId) => {
        const grid = document.getElementById(containerId);
        keys.forEach(k => {
            if (clubs[k]) {
                const a = document.createElement('a');
                a.className = "club-link";
                a.href = `details.html?club=${k}`;
                a.innerText = clubs[k].name;
                a.style.setProperty('--bg-logo', `url('${clubs[k].logo}')`);
                grid.appendChild(a);
            }
        });
    };
    fillGrid(l1Keys, 'l1-grid');
    fillGrid(otherKeys, 'others-grid');
}

// PAGE DETAILS
if (document.getElementById('y')) {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('club');
    const club = clubs[id];

    if (club) {
        document.body.style.background = `linear-gradient(to bottom, ${club.topColor} 0%, ${club.bottomColor} 100%)`;
        document.body.style.backgroundAttachment = "fixed";
        document.getElementById('club-logo').src = club.logo;
        document.getElementById('title-text').innerText = `Depuis quand ${club.article}${club.name} n'a plus gagné de trophée ?`;

        function update() {
            let contextHtml = club.context ? `<br><span class="club-context">${club.context}</span>` : "";
            let disetteHtml = club.disette ? `<br><span class="club-disette">${club.disette}</span>` : "";

            if (!club.date) {
                document.querySelector('.timer-display').style.display = 'none';
                document.getElementById('desc').innerHTML = `${club.article}${club.name} n'a jamais remporté de trophée majeur.${contextHtml}${disetteHtml}`;
                return;
            }

            const diff = new Date() - new Date(club.date);
            const FORTY_EIGHT_HOURS = 48 * 60 * 60 * 1000;

            // Déclenchement uniquement si la victoire date de moins de 48 heures
            if (diff > 0 && diff <= FORTY_EIGHT_HOURS) { 
                if (!window.fireworksStarted) {
                    startFireworks();
                    window.fireworksStarted = true;
                    document.getElementById('congrats-message').innerText = `Félicitations ${club.name} 🎉`;
                }
            } else {
                document.getElementById('congrats-message').innerText = "";
            }

            if (diff <= 0) {
                document.getElementById('y').innerText = 0;
                document.getElementById('d').innerText = 0;
                document.getElementById('h').innerText = 0;
                document.getElementById('m').innerText = 0;
                document.getElementById('s').innerText = 0;
                document.getElementById('desc').innerHTML = `${club.article}${club.name} vient de remporter ${club.trophy} ! 🎉 `;
                return;
            }

            document.getElementById('y').innerText = Math.floor(diff / 31557600000);
            document.getElementById('d').innerText = Math.floor((diff % 31557600000) / 86400000);
            document.getElementById('h').innerText = Math.floor((diff % 86400000) / 3600000);
            document.getElementById('m').innerText = Math.floor((diff % 3600000) / 60000);
            document.getElementById('s').innerText = Math.floor((diff % 60000) / 1000);
            document.getElementById('desc').innerHTML = `Le dernier trophée remporté par ${club.article}${club.name} est ${club.trophy} le ${new Date(club.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}.${contextHtml}${disetteHtml}`;
        }
        setInterval(update, 1000);
        update();
    }
}

function startFireworks() {
    const canvas = document.getElementById('fireworks-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particles = [];

    function createFirework(x, y) {
        const colors = ['#ffe600', '#ff0000', '#00ff00', '#00a3e0', '#ffffff', '#ff00ff'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: x, y: y,
                vx: (Math.random() - 0.5) * 12,
                vy: (Math.random() - 0.5) * 12,
                life: 1, color: color
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, index) => {
            p.x += p.vx; p.y += p.vy; p.vy += 0.04; p.life -= 0.015;
            ctx.globalAlpha = Math.max(p.life, 0);
            ctx.fillStyle = p.color;
            ctx.beginPath(); ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2); ctx.fill();
            if (p.life <= 0) particles.splice(index, 1);
        });
        ctx.globalAlpha = 1;
        if (Math.random() < 0.08) {
            createFirework(Math.random() * canvas.width, Math.random() * (canvas.height / 2));
        }
        requestAnimationFrame(animate);
    }
    animate();
    window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });
}
