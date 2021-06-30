import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        products: [
            {
                name: "Rice",
                price: 1300,
                quantity: 20,
                typeQuantity: "Lb",
                description: "white handcrafted rice from our country",
                image: "./assets/arroz.jpg",
                category: "vegetals"
            },
            {
                name: "Black Beans",
                price: 800,
                quantity: 100,
                typeQuantity: "Lb",
                description: "Special beans from Venezuela",
                image: "./assets/frijolesnegros.jpeg",
                category: "grain"
            },
            {
                name: "Red Beans",
                price: 900,
                quantity: 60,
                typeQuantity: "Lb",
                description: "Beans for prepare a good bandeja paisa",
                image: "./assets/frijolesrojos.jpg",
                category: "grain"
            },
            {
                name: "white Beans",
                price: 1300,
                quantity: 20,
                typeQuantity: "Lb",
                description: "White beans to prepare a good soup or stew",
                image: "./assets/blanquillos.jpg",
                category: "grain"
            },
            {
                name: "Avocado",
                price: 6000,
                quantity: 20,
                typeQuantity: "unity",
                description: "Good food with good satured fats",
                image: "./assets/aguacate.jpg",
                category: "Fruits"
            },
            {
                name: "Garlic",
                price: 600,
                quantity: 400,
                typeQuantity: "Unity",
                description: "the best Garlic that you can found in our markets",
                image: "./assets/ajo.jpeg",
                category: "Vegetals"
            },
            {
                name: "Coffee",
                price: 2300,
                quantity: 300,
                typeQuantity: "Lb",
                description: "Colombian handcrafted coffee",
                image: "./assets/cafe.jpeg",
                category: "Drinks"
            },
            {
                name: "Head Onion",
                price: 1200,
                quantity: 100,
                typeQuantity: "Lb",
                description: "Onion from our farms",
                image: "./assets/cebolla.jpg",
                category: "Vegetals"
            },
            {
                name: "Scallion",
                price: 700,
                quantity: 100,
                typeQuantity: "Lb",
                description: "Onion from our farms",
                image: "./assets/cebolla-larga.jpg",
                category: "Vegetals"
            },
            {
                name: "Champignon",
                price: 1400,
                quantity: 20,
                typeQuantity: "package",
                description: "Mushrooms to compaign with spagettes",
                image: "./assets/champignon.jpg",
                category: "Mushrooms"

            },
            {
                name: "Chocolat",
                price: 2300,
                quantity: 20,
                typeQuantity: "package",
                description: "Good Chocolat to drink with bread or arepa",
                image: "./assets/chocolate.jpg",
                category: "Drinks"
            },
            {
                name: "Cilantro",
                price: 500,
                quantity: 1000,
                typeQuantity: "Lb",
                description: "It is not perejil is cilantro",
                image: "./assets/cilantro.jpg",
                category: "Vegetals"
            },
            {
                name: "Strawberries",
                price: 1300,
                quantity: 200,
                typeQuantity: "Lb",
                description: "beautyful strawberries from our andes farms",
                image: "./assets/fresas.png",
                category: "Fruits"
            },
            {
                name: "Green Beans",
                price: 800,
                quantity: 200,
                typeQuantity: "Lb",
                description: "Green beans to make salads and salt vegetals",
                image: "./assets/habichuelas.jpg",
                category: "vegetals"
            },
            {
                name: "Flour",
                price: 1200,
                quantity: 200,
                typeQuantity: "Lb",
                description: "flour to make arepas",
                image: "./assets/harina.jpg",
                category: "Flour"
            },
            {
                name: "Weath Flour",
                price: 1200,
                quantity: 200,
                typeQuantity: "Lb",
                description: "Weath flour to make pankages",
                image: "./assets/harinadetrigo.jpeg",
                category: "Flour"
            },
            {
                name: "Eggs",
                price: 12000,
                quantity: 100,
                typeQuantity: "packages",
                description: "big eggs sometimes with double bud",
                image: "./assets/huevos.jpeg",
                category: "dairy products"
            },
            {
                name: "Milk",
                price: 1300,
                quantity: 100,
                typeQuantity: "Lt",
                description: "Healthy artisan Milk",
                image: "./assets/leche.jpg",
                category: "dairy products"
            },
            {
                name: "Lettuce",
                price: 700,
                quantity: 100,
                typeQuantity: "Lb",
                description: "Lettuce from our farms",
                image: "./assets/lechuga.jpg",
                category: "Vegetals"
            },
            {
                name: "Lemon",
                price: 700,
                quantity: 400,
                typeQuantity: "Lb",
                description: "Tasty Lemon for salads or good lemonada",
                image: "./assets/limon.jpg",
                category: "Fruits"
            },
            {
                name: "Lulo",
                price: 1100,
                quantity: 400,
                typeQuantity: "Lb",
                description: "Native fruit with a magnificent flavour",
                image: "./assets/lulo.jpg",
                category: "Fruits"
            },
            {
                name: "Cacahuetes",
                price: 1200,
                quantity: 400,
                typeQuantity: "Lb",
                description: "Nuts for eat while you go to home or work",
                image: "./assets/lulo.jpg",
                category: "Nuts"
            },
            {
                name: "Maracuya",
                price: 700,
                quantity: 200,
                typeQuantity: "Lb",
                description: "Excellent fruit to drink and calm down the thirsty",
                image: "./assets/maracuya.jpg",
                category: "Fruits"
            },
            {
                name: "Cob",
                price: 1400,
                quantity: 200,
                typeQuantity: "Lb",
                description: "Corn to compaign with soups, vegetals",
                image: "./assets/mazorca.jpg",
                category: "Vegetals"
            },
            {
                name: "Blackberry",
                price: 1400,
                quantity: 200,
                typeQuantity: "Lb",
                description: "Tasty fruit to make drinks",
                image: "./assets/mora.jpg",
                category: "Fruits"
            },
            {
                name: "Naranja",
                price: 1200,
                quantity: 100,
                typeQuantity: "Lb",
                description: "Tasty fruit to make drinks",
                image: "./assets/naranja.jpg",
                category: "Fruits"
            },
            {
                name: "Bread",
                price: 2000,
                quantity: 100,
                typeQuantity: "Unity",
                description: "Tasty bread to eat with anithing that you want",
                image: "./assets/pan.jpg",
                category: "dairy products"
            },
            {
                name: "Potato",
                price: 1300,
                quantity: 100,
                typeQuantity: "Lb",
                description: "Excellente vegetal to compaign all foods that you can imagine",
                image: "./assets/papa.jpg",
                category: "Vegetals"
            },
            {
                name: "Papaya",
                price: 700,
                quantity: 60,
                typeQuantity: "Unity",
                description: "Excellent fruit to make fruit salads or drinks",
                image: "./assets/papaya.jpg",
                category: "Fruits"
            },
            {
                name: "Pepino",
                price: 700,
                quantity: 40,
                typeQuantity: "Unity",
                description: "Excellent Vegetal to make salads",
                image: "./assets/pepino.jpg",
                category: "vegetals"
            },
            {
                name: "Perejil",
                price: 200,
                quantity: 300,
                typeQuantity: "Lb",
                description: "Excellent vegetal to make soups",
                image: "./assets/perejil.jpg",
                category: "vegetals"
            },
            {
                name: "Peppers",
                price: 450,
                quantity: 200,
                typeQuantity: "Lb",
                description: "Excellent vegetal to make salads",
                image: "./assets/pimenton.jpg",
                category: "vegetals"
            },
            {
                name: "Porto Bello",
                price: 1200,
                quantity: 200,
                typeQuantity: "Lb",
                description: "Excellent mushrooms to make salads",
                image: "./assets/portobello.jpg",
                category: "Mushrooms"
            },
            {
                name: "Cheese",
                price: 1500,
                quantity: 200,
                typeQuantity: "Unity",
                description: "Good cheese for compaign chocolat and breakfast",
                image: "./assets/queso.jpg",
                category: "dairy products"
            },
            {
                name: "Tomato",
                price: 800,
                quantity: 200,
                typeQuantity: "Lb",
                description: "Base Vegetal to make tasty dishs",
                image: "./assets/tomate.jpg",
                category: "Vegetals"
            },
            {
                name: "Tomillo",
                price: 300,
                quantity: 200,
                typeQuantity: "packages",
                description: "Good plant to make teas",
                image: "./assets/tomillo.jpg",
                category: "Vegetals"
            },
            {
                name: "Vino",
                price: 25000,
                quantity: 200,
                typeQuantity: "Unity",
                description: "Good drink to compaign a good dinner",
                image: "./assets/vino.png",
                category: "Drinks"
            },
            {
                name: "Yuca",
                price: 1200,
                quantity: 200,
                typeQuantity: "Lb",
                description: "For a good sancocho",
                image: "./assets/yuca.jpg",
                category: "Vegetals"
            },
            {
                name: "Carrot",
                price: 1200,
                quantity: 120,
                typeQuantity: "Lb",
                description: "To make good salads",
                image: "./assets/zanahoria.jpg",
                category: "Vegetals"
            }
        ]
    })
});

export default router;