import { globalStyle } from "@vanilla-extract/css";

// Box-sizing rules
globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

// Remove default margin
globalStyle("body, h1, h2, h3, h4, p, figure, blockquote, dl, dd", {
  margin: 0,
});

// Set core root defaults
globalStyle("html:focus-within", {
  scrollBehavior: "smooth",
});

// Set core body defaults
globalStyle("body", {
  minHeight: "100vh",
  textRendering: "optimizeSpeed",
  lineHeight: 1.5,
  // ...
});

// Set core anchor settings
globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
});

// Set core anchor settings
globalStyle(".navigation", {
  backgroundColor: "#131414",
});

// Set for parallax effect
globalStyle(".parallax", {
  /* The image used */
  backgroundImage: "url('../assets/img/nasa.jpg')",

  /* Full height */
  minHeight: "70vh",

  /* Create the parallax scrolling effect */
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

// Hero section
globalStyle("#hero-section", {
  minHeight: "50vh",
  width: "100%",
  padding: "2rem 10rem",
});

globalStyle(`#hero-section > h1`, {
  fontWeight: "bolder",
  fontSize: "2em",
  textShadow: "#FC0 1px 0 3px",
  margin: "2rem 0",
});

globalStyle(`#hero-section > p`, {
  textShadow: "#FC0 1px 0 3px",
  fontWeight: "bold",
  margin: "1.5rem 0",
});

// Make images easier to work with
globalStyle("img, picture", {
  maxWidth: "100%",
  display: "block",
});

// Home page text box
globalStyle(".home-text", {
  height: "fit-content",
  padding: "2rem",
});
globalStyle(".parallax > .home-text", {
  padding: "2rem 10rem",
});

globalStyle(`.parallax > .home-text > h2`, {
  textShadow: "#FC0 1px 0 3px",
  marginTop: "2rem",
});

globalStyle(`.parallax > .home-text > p`, {
  textShadow: "#FC0 1px 0 3px",
  fontWeight: "bold",
});

// Inherit fonts for inputs and buttons
globalStyle("input, button, textarea, select", {
  font: "inherit",
});

// Footer style
globalStyle("footer", {
  padding: "1rem",
  textAlign: "center",
  color: "#FFFFFF",
  backgroundColor: "#131414",
});

// Page Not Found
globalStyle(".not-box", {
  display: "flex",
});

globalStyle(".not", {
  display: "block",
  width: "333px",
  height: "300px",
  margin: "50px auto",
});

globalStyle(".not-text", {
  fontSize: "10rem",
  display: "inline",
});

globalStyle(".not-img", {
  width: "150px",
  display: "inline",
});

globalStyle(".not-a", {
  marginTop: "15px",
  marginLeft: "90px",
});
