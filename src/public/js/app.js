const drivers = [

    {
        name: "Lewis Hamilton",
        nationality: "British",
        championships: 7,
        image: "images/hamilton.jpg",

        biography:
            "Lewis Hamilton is one of Formula 1's most successful drivers. He became a seven-time World Champion and established himself as one of the defining drivers of his generation."
    },

    {
        name: "Michael Schumacher",
        nationality: "German",
        championships: 7,
        image: "images/schumacher.jpg",

        biography:
            "Michael Schumacher dominated Formula 1 during parts of the 1990s and 2000s. His seven World Championships and exceptional consistency made him one of the sport's greatest drivers."
    },

    {
        name: "Ayrton Senna",
        nationality: "Brazilian",
        championships: 3,
        image: "images/senna.jpg",

        biography:
            "Ayrton Senna was renowned for his exceptional qualifying speed, wet-weather driving and intense competitive character. He won three World Championships."
    },

    {
        name: "Alain Prost",
        nationality: "French",
        championships: 4,
        image: "images/prost.jpg",

        biography:
            "Alain Prost was known for his calculated and analytical approach to racing. He won four World Championships and became one of the most successful drivers of his era."
    },

    {
        name: "Juan Manuel Fangio",
        nationality: "Argentine",
        championships: 5,
        image: "images/fangio.jpg",

        biography:
            "Juan Manuel Fangio dominated the early years of Formula 1. He won five World Championships during the 1950s and remained a benchmark for generations of drivers."
    },

    {
        name: "Sebastian Vettel",
        nationality: "German",
        championships: 4,
        image: "images/vettel.jpg",

        biography:
            "Sebastian Vettel became a four-time World Champion after establishing himself as one of Formula 1's leading drivers during the early 2010s."
    },

    {
        name: "Fernando Alonso",
        nationality: "Spanish",
        championships: 2,
        image: "images/alonso.jpg",

        biography:
            "Fernando Alonso won two World Championships and became known for his racecraft, adaptability and longevity across multiple generations of Formula 1."
    },

    {
        name: "Niki Lauda",
        nationality: "Austrian",
        championships: 3,
        image: "images/lauda.jpg",

        biography:
            "Niki Lauda was a three-time World Champion whose career was marked by extraordinary determination, technical understanding and an ability to return from serious adversity."
    },

    {
        name: "Jim Clark",
        nationality: "British",
        championships: 2,
        image: "images/clark.jpg",

        biography:
            "Jim Clark was one of the outstanding drivers of the 1960s. His natural speed and versatility established him as one of Formula 1's most respected champions."
    },

    {
        name: "Jackie Stewart",
        nationality: "British",
        championships: 3,
        image: "images/stewart.jpg",

        biography:
            "Jackie Stewart won three World Championships and later became an influential advocate for improved safety standards in Formula 1."
    }

];


const container =
    document.getElementById("drivers-container");


drivers.forEach(function(driver) {

    const card =
        document.createElement("article");

    card.className = "driver-card";


    card.innerHTML = `

        <img
            src="${driver.image}"
            alt="${driver.name}"
        >

        <div class="driver-information">

            <h3>${driver.name}</h3>

            <p>
                <strong>Nationality:</strong>
                ${driver.nationality}
            </p>

            <p>
                <strong>World Championships:</strong>
                ${driver.championships}
            </p>

            <p>
                ${driver.biography}
            </p>

        </div>

    `;


    container.appendChild(card);

});
