import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";

const tours = [
  {
    id: "01",
    title: "La Ciudad Amurallada",
    city: "Cartagena",
    address:"Colombia",
    dpto:"Bolivar",
    distance: 300,
    price: 500000,
    maxGroupSize: 10,
    desc: "Cartagena, ubicada en la costa caribeña de Colombia, es una ciudad histórica y encantadora que combina magnífica arquitectura colonial, hermosas playas y una rica cultura.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "La Perla de America",
    city: "Santa Marta",
    address:'Colombia',
    dpto:"magdalena",
    distance: 400,
    price: 400000,
    maxGroupSize: 8,
    desc: "Santa Marta, ubicada en la costa norte de Colombia, es una encantadora ciudad costera con una combinación única de hermosas playas, paisajes naturales impresionantes y una rica historia.",
    reviews: [
      {
        name: "guerra",
        rating: 4.6,
      }, 
      {
        name: "guerra",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "La Fenix del Caribe",
    city: "Riohacha",
    address:'Colombia',
    dpto:"Guajira",
    distance: 55,
    price: 550000,
    maxGroupSize: 8,
    desc: "Riohacha, ubicada en la región caribeña de Colombia, es una ciudad con una rica historia, cultura indígena y una ubicación privilegiada cerca del mar Caribe.",
    reviews: [
      {
        name: "guerra",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "La Ciudad Magica",
    city: "La Virginia",
    address:'Colombia',
    dpto:"Risaralda",
    distance: 500,
    price: 990000,
    maxGroupSize: 8,
    desc: "Risaralda es un departamento ubicado en la región cafetera de Colombia, conocida por su exuberante paisaje montañoso, sus plantaciones de café y su rica biodiversidad. ",
    reviews: [
      {
        name: "guerra",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "La Capital Del Rio",
    city: "Rivera",
    address:'Colombia',
    dpto:"Huila",
    distance: 500,
    price: 1000000,
    maxGroupSize: 8,
    desc: "Tanto Neiva como Rivera ofrecen una combinación de belleza natural, historia y cultura. Desde el impresionante desierto de Tatacoa hasta el majestuoso río Magdalena y los misteriosos monumentos arqueológicos de San Agustín, estas ciudades te invitan a descubrir la diversidad y el encanto del departamento de Huila.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Ciudad de la Eterna Primavera",
    city: "Medellin",
    address:'Colombia',
    dpto:"Antioquia",
    distance: 90,
    price: 700000,
    maxGroupSize: 8,
    desc: "Medellín, ubicada en el departamento de Antioquia en Colombia, es una vibrante y moderna ciudad conocida por su belleza, su clima primaveral y su destacada transformación urbana.",
    reviews: [
      {
        name: "Guerra",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "La ciudad Sin Puertas",
    city: "Pereira",
    address:'Colombia',
    dpto:"Risaralda",
    distance: 80,
    price: 800000,
    maxGroupSize: 8,
    desc: "es una ciudad dinámica y moderna que combina la belleza natural de la región cafetera con un ambiente urbano vibrante.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Ciudad de los Santos Reyes",
    city: "Valledupar",
    address:'Colombia',
    dpto:"Cesar",
    distance: 500,
    price: 990000,
    maxGroupSize: 8,
    desc: "Valledupar, ubicada en el departamento de Cesar en Colombia, es una ciudad que se destaca por su rica cultura vallenata, su encanto colonial y su posición como la capital mundial del vallenato.",
    reviews: [
      {
        name: "Guerra",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
