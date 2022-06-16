module.exports = {
    title: "/titulo referencia a la izquierda",
    description: "Protocolo de Comandancia Delitos tecnológicos 2022",

    head: [
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        [
            "meta",
            { name: "apple-mobile-web-app-status-bar-style", content: "black" },
        ],
    ],

    themeConfig: {
        editLinks: false,
        editLinkText: "",
        lastUpdated: false,
        dest: "docs",
        base: "/titulo referencia a la izquierda/",

        nav: [
            {
                text: "Guia",
                link: "/",
            },
            {
                text: "Config",
                link: "/config/",
            },
            {
                text: "VuePress",
                link: "https://v1.vuepress.vuejs.org",
            },
            {
                text: "Languages",
                ariaLabel: "Language Menu",
                items: [
                    { text: "Chinese", link: "/language/chinese/" },
                    { text: "Japanese", link: "/language/japanese/" },
                ],
            },
        ],

        sidebar: [
            "/",
            "/01-desafio/",
            "/02-desafio/",
            "/03-desafio/",
            "/04-desafio/",
            "/05-desafio/",
        ],
    },
    plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
