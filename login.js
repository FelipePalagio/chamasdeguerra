document.addEventListener("DOMContentLoaded", () => {
    // Create container
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.justifyContent = "flex-start";
    container.style.minHeight = "100vh";
    container.style.backgroundColor = "black";
    container.style.color = "white";
    container.style.padding = "20px";
    document.body.appendChild(container);

    // Create tabs
    const tabContainer = document.createElement("div");
    tabContainer.style.display = "flex";
    tabContainer.style.justifyContent = "center";
    tabContainer.style.width = "100%";
    tabContainer.style.backgroundColor = "#444";
    tabContainer.style.marginBottom = "20px";
    container.appendChild(tabContainer);

    const tabs = ["INCIO", "SOBRE", "DOWNLOAD", "AGENDA"];
    const tabContent = {};
    const tabButtons = [];

    // Create tab buttons and contents
    tabs.forEach((tab, index) => {
        const tabButton = document.createElement("button");
        tabButton.textContent = tab;
        tabButton.style.flex = "1";
        tabButton.style.padding = "10px";
        tabButton.style.backgroundColor = index === 0 ? "#555" : "#333";
        tabButton.style.color = "white";
        tabButton.style.border = "none";
        tabButton.style.cursor = "pointer";
        tabButton.style.fontSize = "16px";
        tabButton.style.transition = "background-color 0.3s";
        tabButton.addEventListener("mouseenter", () => (tabButton.style.backgroundColor = "#666"));
        tabButton.addEventListener("mouseleave", () => (tabButton.style.backgroundColor = index === activeTab ? "#555" : "#333"));
        tabButton.addEventListener("click", () => activateTab(index));
        tabContainer.appendChild(tabButton);
        tabButtons.push(tabButton);

        const content = document.createElement("div");
        content.style.display = index === 0 ? "block" : "none";
        content.style.padding = "20px";
        content.style.textAlign = "center";
        content.style.flex = "1";
        tabContent[tab] = content;
        container.appendChild(content);
    });

    // Add content to tabs
    tabContent["INCIO"].innerHTML = `
        <h3>CHAMAS DE GUERRA ::: SANTA CRUZ DO SUL</h3>
        <h3>Novo E.P 2025</h3>
        <img src="/static/images/band.jpg" alt="Band" style="max-width: 300px; border: 3px solid white; border-radius: 10px; box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.2); margin-bottom: 20px;">
        <p>666</p>
    `;
    tabContent["SOBRE"].innerHTML = `
        <h3>Sobre a banda</h3>
        <p>Alguma coisa sobre a banda.</p>
    `;
    tabContent["AGENDA"].innerHTML = `
        <h3>DATAS DE SHOWS MARCADOS:</h3>
        <p>Ainda nao temos nenhum show 2.</p>
    `;

    // Song Titles and Files
    const songTitles = [
        "ScarFace",
        "Consumo",
        "Vazio",
        "Ultima Vez",
        "Manual para o recém falecido",
        "Smile"  // Add your new song here
    ];
    const songFiles = [
        "/static/music/ScarFace.mp3",
        "/static/music/Consumo.mp3",
        "/static/music/Vazio.mp3",
        "/static/music/Ultima Vez.mp3",
        "/static/music/Manual para o recém falecido.mp3",
        "/static/music/Smile.mp3"
    ];

    // Tab 3 with dynamic song download buttons
    let songLinksHTML = '<h3>Clique em um botão para baixar uma música do nosso álbum</p>';

    songTitles.forEach((title, index) => {
        songLinksHTML += `
            <a href="${songFiles[index]}" download="${title}.mp3" style="padding: 10px 20px; background-color: #444; color: white; text-decoration: none; font-size: 16px; border-radius: 5px; margin-top: 10px; display: inline-block;">${title}</a><br>
        `;
    });

    tabContent["DOWNLOAD"].innerHTML = songLinksHTML;

    // Tab activation logic
    let activeTab = 0;

    function activateTab(index) {
        tabButtons[activeTab].style.backgroundColor = "#333";
        tabContent[tabs[activeTab]].style.display = "none";

        activeTab = index;

        tabButtons[activeTab].style.backgroundColor = "#555";
        tabContent[tabs[activeTab]].style.display = "block";
    }
});
