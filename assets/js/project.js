const projects = {

    stip: {
        title: "STIP Register System",

        company: "Sekolah Tinggi Ilmu Pelayaran",

        role: "Software Quality Assurance",

        period: "2023",

        cover: "assets/images/stip/cover.png",

        gallery: [
            "assets/images/stip/1.png",
            "assets/images/stip/2.png",
            "assets/images/stip/3.png"
        ],

        description: `
        Tuliskan deskripsi project STIP di sini.
        `
    }

};

const stipTabs = document.querySelectorAll(".stip-tab");
const stipContents = document.querySelectorAll(".stip-content");

stipTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        stipTabs.forEach(btn => btn.classList.remove("active"));
        stipContents.forEach(content => content.classList.remove("active"));

        tab.classList.add("active");

        document
            .getElementById(tab.dataset.tab)
            .classList.add("active");

    });

});