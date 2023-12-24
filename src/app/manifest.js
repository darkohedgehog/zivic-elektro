export default function manifest() {
    return {
      name: 'Živić-Elektro',
      short_name: 'Živić-Elektro',
      description: 'Veleprodaja i maloprodaja elektro materijala',
      start_url: '/',
      display: 'standalone',
    //   background_color: '#fff',
    //   theme_color: '#fff',
      icons: [
        {
          src: '/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
          {
          src: '/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
         
      ],
    }
  }