/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        dark1: "#100F0F",
        dark2: "#403F3F",
        dark3: "#706F6F",
        modalBtnBg: "#DC3545",
        BtnBg: "#FFC107",
        footerBg: "#FFC1070D",
      },
      fontFamily: {
        Poppins: "Poppins",
      },
    },
  },
  plugins: [require("daisyui")],
};
