const products = {
  simpleProducts: [
    {
      id: 1,
      productName: 'Jugo Natural',
      sellerName: 'Coca Cola',
      price: 5000,
      image: 'https://via.placeholder.com/300',
      stock: 100
    },
    {
      id: 2,
      productName: 'Pan Hojaldrado',
      sellerName: 'Panaderias El Ramito',
      price: 2000,
      image: 'https://via.placeholder.com/300',
      stock: 50
    },
    {
      id: 3,
      productName: 'Galletas de Chocolate',
      sellerName: 'La Condesa',
      price: 6000,
      image: 'https://via.placeholder.com/300',
      stock: 25
    },
    {
      id: 4,
      productName: 'Leche Deslactosada',
      sellerName: 'Nestle',
      price: 4500,
      image: 'https://via.placeholder.com/300',
      stock: 80
    },
    {
      id: 5,
      productName: 'Café Molido',
      sellerName: 'Starbucks',
      price: 8000,
      image: 'https://via.placeholder.com/300',
      stock: 120
    },
    {
      id: 6,
      productName: 'Té Verde',
      sellerName: 'Chedraui',
      price: 3000,
      image: 'https://via.placeholder.com/300',
      stock: 60
    },
    {
      id: 7,
      productName: 'Refresco de Naranja',
      sellerName: 'Walmart',
      price: 1500,
      image: 'https://via.placeholder.com/300',
      stock: 45
    },
    {
      id: 8,
      productName: 'Cerveza Artesanal',
      sellerName: 'Superama',
      price: 12000,
      image: 'https://via.placeholder.com/300',
      stock: 15
    },
    {
      id: 9,
      productName: 'Agua Mineral',
      sellerName: 'Soriana',
      price: 1000,
      image: 'https://via.placeholder.com/300',
      stock: 90
    },
    {
      id: 10,
      productName: 'Queso Crema',
      sellerName: 'Oxxo',
      price: 7500,
      image: 'https://via.placeholder.com/300',
      stock: 30
    }
  ],
  profitableProducts: [
    {
      id: 1,
      productName: 'Set de cubiertos',
      sellerName: 'Juan Pérez',
      price: 200,
      image: 'https://via.placeholder.com/300',
      typeOfRent: {
        perNight: false,
        perHour: true
      },
      availability: {
        Monday: true,
        Tuesday: false,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: true,
        Sunday: false
      }
    },
    {
      id: 2,
      productName: 'Mesero',
      sellerName: 'María Rodríguez',
      price: 500,
      image: 'https://via.placeholder.com/300',
      typeOfRent: {
        perNight: true,
        perHour: false
      },
      availability: {
        Monday: true,
        Tuesday: true,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: false,
        Sunday: false
      }
    },
    {
      id: 3,
      productName: 'Mesa rectangular',
      sellerName: 'Luis García',
      price: 300,
      image: 'https://via.placeholder.com/300',
      typeOfRent: {
        perNight: true,
        perHour: true
      },
      availability: {
        Monday: false,
        Tuesday: true,
        Wednesday: false,
        Thursday: true,
        Friday: true,
        Saturday: false,
        Sunday: true
      }
    },
    {
      id: 4,
      productName: 'Cubiertos de oro',
      sellerName: 'Pedro Hernández',
      price: 2000,
      image: 'https://via.placeholder.com/300',
      typeOfRent: {
        perNight: true,
        perHour: true
      },
      availability: {
        Monday: true,
        Tuesday: true,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: false,
        Sunday: false
      }
    },
    {
      id: 5,
      productName: 'Centro de mesa',
      sellerName: 'Ana Gómez',
      price: 250,
      image: 'https://via.placeholder.com/300',
      typeOfRent: {
        perNight: false,
        perHour: true
      },
      availability: {
        Monday: true,
        Tuesday: true,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: true,
        Sunday: false
      }
    },
    {
      id: 6,
      productName: 'Mesa redonda',
      sellerName: 'José Pérez',
      price: 400,
      image: 'https://via.placeholder.com/300',
      typeOfRent: {
        perNight: true,
        perHour: false
      },
      availability: {
        Monday: false,
        Tuesday: true,
        Wednesday: false,
        Thursday: true,
        Friday: true,
        Saturday: true,
        Sunday: false
      }
    },
    {
      id: 7,
      productName: 'Sillas doradas',
      sellerName: 'María Hernández',
      price: 100,
      image: 'https://via.placeholder.com/300',
      typeOfRent: {
        perNight: true,
        perHour: true
      },
      availability: {
        Monday: true,
        Tuesday: true,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: true,
        Sunday: false
      }
    },
    {
      id: 8,
      productName: 'Tarima',
      sellerName: 'Alquileres y Eventos',
      price: 10000,
      image: 'https://via.placeholder.com/300',
      typeOfRent: {
        perNight: false,
        perHour: true
      },
      availability: {
        Monday: false,
        Tuesday: true,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: true,
        Sunday: false
      }
    },
    {
      id: 9,
      productName: 'Proyector',
      sellerName: 'Tecnología y Alquiler',
      price: 3500,
      image: 'https://via.placeholder.com/300',
      typeOfRent: {
        perNight: true,
        perHour: false
      },
      availability: {
        Monday: false,
        Tuesday: false,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: true,
        Sunday: false
      }
    },
    {
      id: 10,
      productName: 'Guitarra Eléctrica',
      sellerName: 'Rock & Roll Music',
      price: 150000,
      image: 'https://via.placeholder.com/300',
      typeOfRent: {
        perNight: true,
        perHour: false
      },
      availability: {
        Monday: true,
        Tuesday: true,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: true,
        Sunday: true
      }
    },
    {
      id: 11,
      productName: 'Gorra Espacial',
      sellerName: 'La Tienda del Futuro',
      price: 5000,
      image: 'https://via.placeholder.com/300',
      typeOfRent: {
        perNight: false,
        perHour: true
      },
      availability: {
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: true,
        Saturday: true,
        Sunday: true
      }
    }
  ],
  spaces: [
    {
      id: 1,
      productName: 'Salón de Fiestas La Fiesta',
      sellerName: 'La Fiesta',
      price: 5000,
      image: 'https://via.placeholder.com/300',
      googleMapsAddress: 'Calle Falsa 123',
      availability: {
        Monday: false,
        Tuesday: true,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: true,
        Sunday: true
      }
    },
    {
      id: 2,
      productName: 'Quinta el Jardín',
      sellerName: 'Quinta el Jardín',
      price: 8000,
      image: 'https://via.placeholder.com/300',
      googleMapsAddress: 'Avenida Principal 456',
      availability: {
        Monday: false,
        Tuesday: false,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: true,
        Sunday: true
      }
    },
    {
      id: 3,
      productName: 'Jardín de Eventos Los Pinos',
      sellerName: 'Los Pinos',
      price: 6000,
      image: 'https://via.placeholder.com/300',
      googleMapsAddress: 'Calle del Bosque 789',
      availability: {
        Monday: false,
        Tuesday: false,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: true,
        Sunday: false
      }
    },
    {
      id: 4,
      productName: 'Hacienda San Carlos',
      sellerName: 'San Carlos',
      price: 10000,
      image: 'https://via.placeholder.com/300',
      googleMapsAddress: 'Camino Real 101',
      availability: {
        Monday: true,
        Tuesday: true,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: false,
        Sunday: false
      }
    },
    {
      id: 5,
      productName: 'Quinta las Rosas',
      sellerName: 'Las Rosas',
      price: 4000,
      image: 'https://via.placeholder.com/300',
      googleMapsAddress: 'Avenida de las Flores 222',
      availability: {
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: true,
        Saturday: true,
        Sunday: true
      }
    },
    {
      id: 6,
      productName: 'Jardín de Eventos La Gloria',
      sellerName: 'La Gloria',
      price: 5000,
      image: 'https://via.placeholder.com/300',
      googleMapsAddress: 'Calle Principal 789',
      availability: {
        Monday: true,
        Tuesday: true,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: true,
        Sunday: true
      }
    },
    {
      id: 7,
      productName: 'Hacienda Santa Ana',
      sellerName: 'Santa Ana',
      price: 12000,
      image: 'https://via.placeholder.com/300',
      googleMapsAddress: 'Camino de la Hacienda 456',
      availability: {
        Monday: true,
        Tuesday: true,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: false,
        Sunday: false
      }
    },
    {
      id: 8,
      productName: 'Villa Paraiso',
      sellerName: 'María Fernanda',
      price: 5000,
      image: 'https://via.placeholder.com/300',
      googleMapsAddress: 'Av. del Mar #123',
      availability: {
        Monday: true,
        Tuesday: true,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: true,
        Sunday: true
      }
    },
    {
      id: 9,
      productName: 'Hacienda San Juan',
      sellerName: 'Juan Rodríguez',
      price: 8000,
      image: 'https://via.placeholder.com/300',
      googleMapsAddress: 'Carretera Nacional #456',
      availability: {
        Monday: false,
        Tuesday: false,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: true,
        Sunday: false
      }
    },
    {
      id: 10,
      productName: 'Casa Blanca',
      sellerName: 'Miguel Hernández',
      price: 3000,
      image: 'https://via.placeholder.com/300',
      googleMapsAddress: 'Calle Rosas #789',
      availability: {
        Monday: false,
        Tuesday: true,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: true,
        Sunday: true
      }
    }
  ]
}

export default products
