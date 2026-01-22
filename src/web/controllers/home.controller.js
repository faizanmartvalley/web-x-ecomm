export const homePage = async (req, res) => {
    res.render("pages/home.njk", {
        appName: "Web-X-MS-Ecomm",
        tagline: "A modern, scalable commerce platform",
    });
};