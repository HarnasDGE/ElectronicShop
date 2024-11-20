/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FED700",
        secondary: "#0068C8",
        background: "#fff",
        backgroundPrimary: "#fff",
        backgroundSecondary: "#DDE8E3",
        backgroundFooter: "#EFEFEF",
        backgroundComingSoon: "#93C2E0",
        backgroundSidebar: "#E8F1F7",
        mainText: "#fff",
        secondText: "#161616",
        menuText: "#2C2C2C",

        heroBackground: "#8CB1A0",

        selectedCategory: "#D9D9D9",
        borderCategory: "#D9D9D9",
        backgroundCategory: "#EFEFEF",
        searchBackground: "#f4f4f4",

        hoveredProdcutPrimary: "#F6f6f6",
        hoveredProdcutSecondary: "#C8E7F4",
        borderProduct: "#D9D9D9",
        discount: "#FF0c00",
        specialPricePrimary: "#CC0C39",
        specialPriceSecondary: "#FF6F68",
        oldPricePrimary: "#B8BDC1",
        oldPriceSecondary: "#000",
        productInfoPrimary: "#1A80E0",
        productInfoSecondary: "#CC0C39",
        avaible: "#4EC564",
        newProductPrimary: "#2A9D8",
        newProductSecondary: "#000",
        inStock: "#4EC564",
        hotSale: "#1E96FC",
        special: "#FC891E",
        procentOff: "#CC0C39",
        backgroundProductPrimary: "#F5F5F5",

        gray: "rgba(0, 45, 88, 0.20)",
        lightGray: "rgba(0, 45, 88, 0.05)",

        trendingCategories: "#EFEFEF",
        buttonPrimary: "#FED700",
        buttonSecondary: "#1A80E0",
        buttonThird: "#000",

        ctaPrimary: "#2D446E",
        ctaSecondary: "#1A1A19",

        activePagination: "#0083FF",
        backgroundPagination: "#F7F7F8",

        bannerPrimary: "#EEF4F9",
        bannerSecondary: "#0A0B0D",
        bannerThird: "#DBDBDB",
        bannerFourth: "#D6EBE7",
        bannerFifth: "#B7C5D7",
        specialProduct: "#CCE9F9",

        bannerPrimarySale: "#FDF4F4",
        bannerSecondarySale: "#FEF1F2",

        specialOffer: "#FF0000",
        backgroundFaq: "#F6F6F6",
        activeFaq: "#0083FF",
        bannerFaq: "#8CB1A0",

        infoBlog: "#0083FF",

        backgroundPrimaryReview: "#F6F6F6",
        backgroundSecondaryReview: "#8CB1A0",

        backgroundFooter: "#EFEFEF",
        dividerFooter: "#CFCFCF",

        backgroundInputComingSoon: "#000",

        silver: "#a3a3a3",
        black: "#000000",
        blue: "#1E73BE",
        pink: "#e439b0",
        roseGold: "#B76E79",
        red: "#EE0000",
      },
      fontSize: {
        xs: "10px",
        sm: "14px",
        base: "16px",
        xl: "20px",
        "2xl": "27px",
        "3xl": "30px",
        "4xl": "35px",
        "5xl": "50px",
      },
      backgroundImage: {
        heroGradient: "linear-gradient(90deg, #000, transparent 70%)",
        subPageGradient:
          "radial-gradient(circle, rgba(225,230,255,1) 0%, rgba(163,179,255,1) 70%)",
      },
      boxShadow: {
        normal: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },
    },
  },
  plugins: [],
};
