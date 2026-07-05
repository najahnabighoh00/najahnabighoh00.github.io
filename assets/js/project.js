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

// ===========================
// MAIN PROJECT TAB
// ===========================

const projectTabs = document.querySelectorAll(".project-tab");
const projectContents = document.querySelectorAll(".project-content");

// Fungsi membuka project
function openProject(projectId) {

    projectTabs.forEach(btn =>
        btn.classList.remove("active")
    );

    projectContents.forEach(content =>
        content.classList.remove("active")
    );

    const activeTab = document.querySelector(
        `.project-tab[data-tab="${projectId}"]`
    );

    const activeContent = document.getElementById(projectId);

    if (activeTab && activeContent) {

        activeTab.classList.add("active");
        activeContent.classList.add("active");

        // Update URL tanpa reload
        history.replaceState(
            null,
            "",
            "?project=" + projectId
        );

    }

}

// Event klik tab
projectTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        openProject(tab.dataset.tab);

    });

});

// Baca URL saat halaman pertama kali dibuka
const params = new URLSearchParams(window.location.search);
const currentProject = params.get("project");

if (currentProject) {

    openProject(currentProject);

} else {

    openProject("stip");

}


// ===========================
// SUB TAB
// ===========================

document.querySelectorAll(".project-content").forEach(project => {

    const tabs = project.querySelectorAll(".sub-tab");
    const contents = project.querySelectorAll(".sub-content");

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            tabs.forEach(btn =>
                btn.classList.remove("active")
            );

            contents.forEach(content =>
                content.classList.remove("active")
            );

            tab.classList.add("active");

            project
                .querySelector("#" + tab.dataset.tab)
                .classList.add("active");

        });

    });

});