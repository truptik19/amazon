const products = [
    { 
        id: '1',
        url: 'https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
        category:'Accessories',
        title: {
            shortTitle: 'Home & Kitchen',
            longTitle: 'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)'
        }, 
        price: {
            mrp: 1195,
            cost: 625,
            discount: '47%'
        },
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off', 
        tagline: 'Home and Kitchen' 
    },
    { 
        id: '2',
        url: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
        category:'Accessories',
        title: {
            shortTitle: 'Sandwich Makers',
            longTitle: 'Flipkart SmartBuy Sandwich 01 Grill  (Black)'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        description: 'This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better',
        discount: 'From 99+5% Off', 
        tagline: 'Home and Kitchen' 
    },
    { 
        id: '3',
        url: 'https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        category:'Accessories',
        title: {
            shortTitle: 'Fitness Gear',
            longTitle: 'AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)'
        }, 
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        description: 'This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.',
        discount: 'Upto 70% Off', 
        tagline: 'Health & Fitness' 
    },
    { 
        id: '4',
        url: 'https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        category:'Accessories',
        title: {
            shortTitle: 'Smart Watches',
            longTitle: 'Molife Sense 500 Smartwatch  (Black Strap, Freesize)',
        }, 
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
        discount: 'Grab Now', 
        tagline: 'Electronics' 
    },
    { 
        id: '5',
        url: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70', 
        category:'Accessories',
        title: {
            shortTitle: 'Trimmers, Dryers & more',
            longTitle: 'Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)'
        }, 
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        description: '',
        discount: 'From ₹499', 
        tagline: 'Electronics' 
    },
    { 
        id: '6',
      
        url: 'https://m.media-amazon.com/images/I/51lVpMK6kGL._SX679_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/51lVpMK6kGL._SX679_.jpg', 
        category:'Accessories',
        title: {
            shortTitle: 'SAMSUNG A20',
            longTitle: 'Samsung A20 (128 GB, 6 GB)  (Colour: RoseGold)'
        }, 
        price: {
            mrp: 19000,
            cost: 18050,
            discount: '5%'
        },
        description: 'The design is wonderful, the phone is compact and handy, the One UI software is extremely likable, and the AMOLED display is gorgeous. At the same time, the choice of chipset and performance configuration limits the phone to very basic users especially if you are considering the Galaxy A20 in 2020.',
        discount: 'From ₹500', 
        tagline: 'Mobiles' 
    },
    { 
        id: '7',
        url: 'https://m.media-amazon.com/images/I/51OeTCeAIgL._SL1000_.jpg',
        detailUrl: 'https://m.media-amazon.com/images/I/51OeTCeAIgL._SL1000_.jpg', 
        
        title: {
            shortTitle: 'Mobile Cover SAMSUNG A20',
            longTitle: 'samsung note 20 ultra, miqilin series tranparent shock proof smooth rubberized matte hard back cover (dark green) - Green'
        }, 
        price: {
            mrp: 999,
            cost: 299,
            discount: '70%'
        },
        description: 'Design: New Crystal Clear Transparent with Colour Button Design and this stand-alone button is detachable. Protection: High-grade polycarbonate and TPU materials , soft siders and Air corners create enhanced security during drops and falls; case is 0.7mm higher than Phone and Camera Protection .',
        discount: 'From ₹500', 
        tagline: 'Accessories' 
    },

]

module.exports = products
