tailwind.config = {
    theme: {
        container: {
            center: 'true',
            padding: '15px'
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1200px'
        },
        fontFamily: {
            primary: ["Bebas Neue", "sans-serif"],
            secondary: ["Outfit", "sans-serif"],
            cursive:["Edu AU VIC WA NT Pre","cursive"],
            marathi1:["Tiro Devanagari Marathi", "serif"],
            marathi2:["Kalam", "cursive"]
        },
      extend: {
        colors: {
            primary: '#10151f',
            secondary: '#475467',
            accent: {
                DEFAULT: '#7edad2',
                hover: '#79d3cc'
            }
        },
        boxShadow: {
            custom: '0px 14px 54px rgba(0,0,0,0.1)'
        },
        }
    }
}