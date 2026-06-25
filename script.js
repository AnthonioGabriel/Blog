const blogData = {
    title: "Forza Motorsport 6: A Racing Classic That Still Delivers",
    subtitle:
        "Exploring one of the most respected racing games ever released for Xbox.",

    introduction:
        "Forza Motorsport 6 remains a favorite among racing fans thanks to its realistic driving mechanics, impressive vehicle selection, and immersive racing environments.",

    overview:
        "Released for Xbox One, Forza Motorsport 6 combines simulation-style racing with accessible gameplay, making it enjoyable for both casual and competitive players.",

    features: [
        {
            title: "Massive Car Collection",
            description:
                "Drive hundreds of vehicles from legendary manufacturers around the world."
        },
        {
            title: "Dynamic Weather",
            description:
                "Rain races change track conditions and require careful driving."
        },
        {
            title: "Night Racing",
            description:
                "Race under realistic lighting conditions for added immersion."
        },
        {
            title: "Advanced Physics",
            description:
                "Responsive handling and realistic vehicle behavior."
        }
    ],

    gameplay: [
        {
            title: "Career Mode",
            description:
                "Progress through multiple championships and racing categories."
        },
        {
            title: "Multiplayer",
            description:
                "Challenge racers online in competitive events."
        },
        {
            title: "Drivatar AI",
            description:
                "Face intelligent opponents based on real player behavior."
        }
    ],

    strengths: [
        "Huge vehicle roster",
        "Excellent driving physics",
        "Strong replay value",
        "Immersive weather effects"
    ],

    weaknesses: [
        "Limited modern availability",
        "Graphics show their age compared to newer titles"
    ],

    worthPlaying:
        "Yes. Forza Motorsport 6 still offers a fantastic racing experience with deep content, realistic gameplay, and plenty of variety."
};

// Header
document.getElementById("blog-title").textContent = blogData.title;
document.getElementById("blog-subtitle").textContent = blogData.subtitle;

// Content
document.getElementById("intro").textContent =
    blogData.introduction;

document.getElementById("overview").textContent =
    blogData.overview;

document.getElementById("graphics").textContent =
    "Detailed car models, realistic lighting effects, and authentic engine sounds help create an immersive racing experience.";

document.getElementById("worth").textContent =
    blogData.worthPlaying;

// Features
const featureContainer = document.getElementById("features");

blogData.features.forEach(feature => {
    const card = document.createElement("div");
    card.classList.add("feature-card");

    card.innerHTML = `
        <h3>${feature.title}</h3>
        <p>${feature.description}</p>
    `;

    featureContainer.appendChild(card);
});

// Gameplay
const gameplayContainer = document.getElementById("gameplay");

blogData.gameplay.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("gameplay-card");

    card.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
    `;

    gameplayContainer.appendChild(card);
});

// Pros
const prosList = document.getElementById("pros");

blogData.strengths.forEach(pro => {
    const li = document.createElement("li");
    li.textContent = pro;
    prosList.appendChild(li);
});

// Cons
const consList = document.getElementById("cons");

blogData.weaknesses.forEach(con => {
    const li = document.createElement("li");
    li.textContent = con;
    consList.appendChild(li);
});