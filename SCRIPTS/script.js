const properties = [
  {
    name: 'The Minimalist House',
    location: 'Sta. Maria, Zamboanga City',
    price: '₱10,000 / mo',
    beds: 5,
    baths: 3,
    size: '120m²',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwxfHxob3VzZXxlbnwwfHx8fDE2Nzk5MjAwMDA&ixlib=rb-4.0.3&q=80&w=400',
      'https://images.unsplash.com/photo-1564013799919-d80659be60ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwyfHxob3VzZXxlbnwwfHx8fDE2Nzk5MjAwMDA&ixlib=rb-4.0.3&q=80&w=400',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwzfHxob3VzZXxlbnwwfHx8fDE2Nzk5MjAwMDA&ixlib=rb-4.0.3&q=80&w=400',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHw0fHxob3VzZXxlbnwwfHx8fDE2Nzk5MjAwMDA&ixlib=rb-4.0.3&q=80&w=400'
    ],
    description: 'A beautifully designed minimalist house perfect for families seeking clean lines and open spaces. Features modern amenities and a quiet neighborhood.'
  },
  {
    name: 'The Cozy Apartment',
    location: 'Divisoria, Zamboanga City',
    price: '₱12,000 / mo',
    beds: 2,
    baths: 1,
    size: '65m²',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnR8ZW58MHx8fHwxNjc5OTIwMjAw&ixlib=rb-4.0.3&q=80&w=400',
      'https://images.unsplash.com/photo-1604999333679-b86d54738716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwyfHxhcGFydG1lbnR8ZW58MHx8fHwxNjc5OTIwMjAw&ixlib=rb-4.0.3&q=80&w=400',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwzfHxhcGFydG1lbnR8ZW58MHx8fHwxNjc5OTIwMjAw&ixlib=rb-4.0.3&q=80&w=400',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHw0fHxhcGFydG1lbnR8ZW58MHx8fHwxNjc5OTIwMjAw&ixlib=rb-4.0.3&q=80&w=400'
    ],
    description: 'Charming and cozy apartment located in the heart of Divisoria. Ideal for couples or small families looking for convenience and comfort.'
  },
  {
    name: 'Best Starter House',
    location: 'Tumaga, Zamboanga City',
    price: '₱15,000 / mo',
    beds: 3,
    baths: 2,
    size: '90m²',
    images: [
      'https://images.unsplash.com/photo-1598228723793-52df1bd0a9ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHw1fHxob3VzZXxlbnwwfHx8fDE2Nzk5MjAwMDA&ixlib=rb-4.0.3&q=80&w=400',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHw3fHxob3VzZXxlbnwwfHx8fDE2Nzk5MjAwMDA&ixlib=rb-4.0.3&q=80&w=400',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHw4fHxob3VzZXxlbnwwfHx8fDE2Nzk5MjAwMDA&ixlib=rb-4.0.3&q=80&w=400',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHw5fHxob3VzZXxlbnwwfHx8fDE2Nzk5MjAwMDA&ixlib=rb-4.0.3&q=80&w=400'
    ],
    description: 'An excellent starter home in a growing neighborhood. Offers a good balance of space and affordability, perfect for new families.'
  },
  {
    name: 'Family Townhouse',
    location: 'Guiwan, Zamboanga City',
    price: '₱18,000 / mo',
    beds: 4,
    baths: 2,
    size: '110m²',
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHw4fHxob3VzZXxlbnwwfHx8fDE2Nzk5MjAwMDA&ixlib=rb-4.0.3&q=80&w=400',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwxMXx8aG91c2V8ZW58MHx8fHwxNjc5OTIwMDAw&ixlib=rb-4.0.3&q=80&w=400',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
    ],
    description: 'Spacious townhouse suitable for larger families. Located in Guiwan, offering convenience and access to local amenities.'
  },
  {
    name: 'Urban Studio Loft',
    location: 'Tetuan, Zamboanga City',
    price: '₱9,500 / mo',
    beds: 1,
    baths: 1,
    size: '45m²',
    images: [
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwzfHxhcGFydG1lbnR8ZW58MHx8fHwxNjc5OTIwMjAw&ixlib=rb-4.0.3&q=80&w=400',
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHw5fHxhcGFydG1lbnR8ZW58MHx8fHwxNjc5OTIwMjAw&ixlib=rb-4.0.3&q=80&w=400',
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
    ],
    description: 'Modern and stylish studio loft in Tetuan. Perfect for students or young professionals seeking a compact yet functional living space.'
  },
  {
    name: 'Luxury Villa',
    location: 'Baliwasan, Zamboanga City',
    price: '₱45,000 / mo',
    beds: 5,
    baths: 4,
    size: '300m²',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3VzZXxlbnwwfHx8fDE2Nzk5MjA0MDA&ixlib=rb-4.0.3&q=80&w=400',
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBob3VzZXxlbnwwfHx8fDE2Nzk5MjA0MDA&ixlib=rb-4.0.3&q=80&w=400',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
    ],
    description: 'Exquisite luxury villa in the prestigious Baliwasan area. Offers premium finishes, ample space, and stunning views. For those seeking the best.'
  },
  {
    name: 'Modern Downtown Condo',
    location: 'City Proper, Zamboanga City',
    price: '₱22,000 / mo',
    beds: 2,
    baths: 2,
    size: '80m²',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHw0fHxhcGFydG1lbnR8ZW58MHx8fHwxNjc5OTIwMjAw&ixlib=rb-4.0.3&q=80&w=400',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHw3fHxhcGFydG1lbnR8ZW58MHx8fHwxNjc5OTIwMjAw&ixlib=rb-4.0.3&q=80&w=400',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
    ],
    description: 'Sleek and modern condo unit in the heart of the city proper. Enjoy urban living with easy access to shops, restaurants, and offices.'
  },
  {
    name: 'Quiet Suburban Home',
    location: 'Pasonanca, Zamboanga City',
    price: '₱16,500 / mo',
    beds: 3,
    baths: 2,
    size: '105m²',
    images: [
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwxMHx8aG91c2V8ZW58MHx8fHwxNjc5OTIwMDAw&ixlib=rb-4.0.3&q=80&w=400',
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjQwNTF8MHwxfHNlYXJjaHwxNHx8aG91c2V8ZW58MHx8fHwxNjc5OTIwMDAw&ixlib=rb-4.0.3&q=80&w=400',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
    ],
    description: 'A peaceful home located in the serene Pasonanca area, close to the park. Ideal for those who appreciate tranquility and nature.'
  },
  {
    name: 'Student Dormitory Near WMSU',
    location: 'Baliwasan, Zamboanga City',
    price: '₱4,500 / mo',
    beds: 1,
    baths: 1,
    size: '15m²',
    type: 'dormitory',
    images: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Affordable student dormitory with basic amenities, perfect for WMSU students. Includes free WiFi, study area, and common kitchen.'
  },
  {
    name: 'Ladies Dormitory',
    location: 'Tumaga, Zamboanga City',
    price: '₱3,800 / mo',
    beds: 1,
    baths: 1,
    size: '12m²',
    type: 'dormitory',
    images: [
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Female-only dormitory with 24/7 security, near universities. Includes bed, study table, and shared kitchen facilities.'
  },
  {
    name: 'Modern Studio Apartment',
    location: 'Sta. Maria, Zamboanga City',
    price: '₱8,500 / mo',
    beds: 1,
    baths: 1,
    size: '30m²',
    type: 'apartment',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Newly renovated studio apartment with modern furnishings. Perfect for young professionals.'
  },
  {
    name: 'Family Apartment Complex',
    location: 'Tetuan, Zamboanga City',
    price: '₱15,000 / mo',
    beds: 3,
    baths: 2,
    size: '85m²',
    type: 'apartment',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1522444195799-478538b28823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Spacious apartment in a family-friendly complex with playground and parking.'
  },
  {
    name: 'Executive Apartment',
    location: 'City Proper, Zamboanga City',
    price: '₱25,000 / mo',
    beds: 2,
    baths: 2,
    size: '90m²',
    type: 'apartment',
    images: [
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Luxury apartment with high-end finishes, security, and amazing city views.'
  },
  {
    name: 'Student-Friendly House',
    location: 'Pasonanca, Zamboanga City',
    price: '₱20,000 / mo',
    beds: 4,
    baths: 2,
    size: '120m²',
    type: 'house',
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Perfect for student sharing, near universities with study areas and fast internet.'
  },
  {
    name: 'Beachside Dormitory',
    location: 'Baliwasan, Zamboanga City',
    price: '₱5,500 / mo',
    beds: 1,
    baths: 1,
    size: '18m²',
    type: 'dormitory',
    images: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Comfortable dormitory rooms with sea view, perfect for students or young professionals.'
  },
  {
    name: 'Traditional Filipino House',
    location: 'Guiwan, Zamboanga City',
    price: '₱17,000 / mo',
    beds: 3,
    baths: 2,
    size: '130m²',
    type: 'house',
    images: [
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Beautiful traditional house with modern amenities, perfect for families who appreciate Filipino architecture.'
  },
  {
    name: 'Mixed Dormitory',
    location: 'Tumaga, Zamboanga City',
    price: '₱4,000 / mo',
    beds: 1,
    baths: 1,
    size: '14m²',
    type: 'dormitory',
    images: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Affordable mixed dormitory with separate floors for male and female residents. Near commercial areas.'
  },
  {
    name: 'Premium Apartment',
    location: 'Sta. Maria, Zamboanga City',
    price: '₱28,000 / mo',
    beds: 3,
    baths: 2,
    size: '110m²',
    type: 'apartment',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'High-end apartment with premium finishes, smart home features, and excellent security.'
  },
  {
    name: 'Luxury Beachfront Villa',
    location: 'Baliwasan, Zamboanga City',
    price: '₱55,000 / mo',
    beds: 5,
    baths: 4,
    size: '350m²',
    type: 'house',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Stunning beachfront villa with private access to beach, infinity pool, and modern luxury amenities. Perfect for exclusive living.'
  },
  {
    name: 'Budget Student Dorm',
    location: 'Tumaga, Zamboanga City',
    price: '₱3,500 / mo',
    beds: 1,
    baths: 1,
    size: '12m²',
    type: 'dormitory',
    images: [
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Affordable dormitory option for students with basic amenities, shared kitchen, and study area.'
  },
  {
    name: 'Modern Townhouse',
    location: 'Tetuan, Zamboanga City',
    price: '₱23,000 / mo',
    beds: 3,
    baths: 3,
    size: '140m²',
    type: 'house',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Contemporary townhouse with modern amenities, smart home features, and secure parking.'
  },
  {
    name: 'Premium Student Housing',
    location: 'Pasonanca, Zamboanga City',
    price: '₱7,500 / mo',
    beds: 1,
    baths: 1,
    size: '25m²',
    type: 'dormitory',
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Upscale student accommodation with private bathroom, study area, and premium amenities.'
  },
  {
    name: 'Garden Apartment',
    location: 'Guiwan, Zamboanga City',
    price: '₱18,500 / mo',
    beds: 2,
    baths: 2,
    size: '95m²',
    type: 'apartment',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Ground floor apartment with private garden, perfect for families with children or pet owners.'
  },
  {
    name: 'City View Penthouse',
    location: 'City Proper, Zamboanga City',
    price: '₱35,000 / mo',
    beds: 3,
    baths: 2,
    size: '150m²',
    type: 'apartment',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1522444195799-478538b28823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Luxurious penthouse apartment with panoramic city views, modern finishes, and roof deck access.'
  },
  {
    name: 'Eco-Friendly House',
    location: 'Pasonanca, Zamboanga City',
    price: '₱27,000 / mo',
    beds: 3,
    baths: 2,
    size: '120m²',
    type: 'house',
    images: [
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Sustainable home with solar panels, rainwater harvesting, and energy-efficient design.'
  },
  {
    name: 'Working Professional Dorm',
    location: 'Sta. Maria, Zamboanga City',
    price: '₱6,500 / mo',
    beds: 1,
    baths: 1,
    size: '20m²',
    type: 'dormitory',
    images: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Dormitory designed for working professionals with dedicated workspace and high-speed internet.'
  },
  {
    name: 'Heritage House',
    location: 'City Proper, Zamboanga City',
    price: '₱32,000 / mo',
    beds: 4,
    baths: 3,
    size: '200m²',
    type: 'house',
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Restored heritage house with modern amenities while maintaining its historic charm.'
  },
  {
    name: 'Couple\'s Apartment',
    location: 'Tetuan, Zamboanga City',
    price: '₱12,000 / mo',
    beds: 1,
    baths: 1,
    size: '55m²',
    type: 'apartment',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Cozy apartment perfect for couples, featuring modern amenities and romantic balcony.'
  },
  {
    name: 'Family Compound',
    location: 'Guiwan, Zamboanga City',
    price: '₱45,000 / mo',
    beds: 6,
    baths: 4,
    size: '300m²',
    type: 'house',
    images: [
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Large family compound with multiple units, shared garden, and entertainment areas.'
  },
  {
    name: 'Studio with Loft',
    location: 'Sta. Maria, Zamboanga City',
    price: '₱15,000 / mo',
    beds: 1,
    baths: 1,
    size: '45m²',
    type: 'apartment',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Modern studio apartment with loft bedroom, perfect for young professionals.'
  }
];


let cardsPerPage = window.innerWidth >= 992 ? 4 : (window.innerWidth >= 768 ? 3 : 2);
let detailModalInstance = null;
let modalCarouselInstance = null;
let bookingModalInstance = null;

function initializeBookingModal() {
  const bookingModal = document.getElementById('bookingModal');
  if (bookingModal) {
    bookingModalInstance = new bootstrap.Modal(bookingModal);
  }
}

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('contact-landlord')) {
    alert('Connecting you with the landlord...');
  }
});

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('book-property')) {
    if (bookingModalInstance) {
      bookingModalInstance.show();
    }
  }
});

document.getElementById('submitBooking')?.addEventListener('click', function() {
  const form = document.getElementById('bookingForm');
  if (form.checkValidity()) {
    alert('Booking request submitted successfully!');
    bookingModalInstance.hide();
  } else {
    form.reportValidity();
  }
});

let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

document.addEventListener('click', function(e) {
  if (e.target.closest('.add-to-favorites')) {
    const propertyIndex = e.target.closest('.add-to-favorites').dataset.propertyIndex;
    const button = e.target.closest('.add-to-favorites');
    
    if (favorites.includes(propertyIndex)) {
      favorites = favorites.filter(i => i !== propertyIndex);
      button.innerHTML = '<i class="far fa-heart"></i> Add to Favorites';
    } else {
      favorites.push(propertyIndex);
      button.innerHTML = '<i class="fas fa-heart"></i> Remove from Favorites';
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
});

function filterProperties() {
  const searchTerm = document.getElementById('locationInput').value.toLowerCase();
  const selectedBarangay = document.getElementById('barangaySelect').value;
  const propertyType = document.querySelector('input[name="propertyType"]:checked').id;
  const priceRange = document.getElementById('priceRange').value;

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.name.toLowerCase().includes(searchTerm) || 
                         property.location.toLowerCase().includes(searchTerm);
    const matchesBarangay = !selectedBarangay || property.location.includes(selectedBarangay);

    return matchesSearch && matchesBarangay;
  });

  renderFilteredProperties(filteredProperties);
}

document.getElementById('locationInput')?.addEventListener('input', filterProperties);
document.getElementById('barangaySelect')?.addEventListener('change', filterProperties);
document.querySelectorAll('input[name="propertyType"]').forEach(input => {
  input?.addEventListener('change', filterProperties);
});
document.getElementById('priceRange')?.addEventListener('change', filterProperties);

document.addEventListener('DOMContentLoaded', function() {
  initializeBookingModal();
});

function renderProperties() {
  const container = document.getElementById('propertyList');
  if (!container) return;
  container.innerHTML = '';

  const numProperties = properties.length;
  if (numProperties === 0) {
    container.innerHTML = '<p class="col-12 text-center">No properties found.</p>';
    return;
  }

  cardsPerPage = window.innerWidth >= 992 ? 4 : (window.innerWidth >= 768 ? 3 : 2);

  properties.forEach((property, index) => {
    const card = document.createElement('div');
    const lgCols = Math.max(1, Math.floor(12 / cardsPerPage));
    const mdCols = window.innerWidth >= 768 ? 4 : 6;
    const smCols = 6;
    card.className = `col-lg-${lgCols} col-md-${mdCols} col-sm-${smCols} mb-4`;

    const uniquePropertyId = `prop-${index}`;
    const carouselId = `carousel-${uniquePropertyId}`;

    card.innerHTML = `
      <div class="card shadow-sm h-100">
        <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
          <div class="carousel-inner">
            ${property.images.map((img, idx) => `
              <div class="carousel-item ${idx === 0 ? 'active' : ''}">
                <img src="${img}" class="d-block w-100 card-img-top" alt="${property.name} image ${idx + 1}" style="height: 200px; object-fit: cover;">
              </div>
            `).join('')}
          </div>
          ${property.images.length > 1 ? `
          <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>` : ''}
        </div>
        <div class="card-body d-flex flex-column">
          <h6 class="text-muted mb-1">${property.price}</h6>
          <h5 class="card-title">${property.name}</h5>
          <p class="text-muted mb-2"><i class="fas fa-map-marker-alt me-1"></i>${property.location}</p>
          <div class="property-info d-flex justify-content-between mt-auto pt-2">
            <span><i class="fa fa-bed"></i> ${property.beds} Beds</span>
            <span><i class="fa fa-bath"></i> ${property.baths} Baths</span>
            <span><i class="fa fa-expand"></i> ${property.size}</span>
          </div>
        </div>
        <div class="card-footer bg-transparent border-top-0 text-center pb-3">
          <button class="btn btn-success w-100 view-details" data-index="${index}">View Details</button>
        </div>
      </div>
    `;
    container.appendChild(card);

    const carouselElement = document.getElementById(carouselId);
    if (carouselElement && typeof bootstrap !== 'undefined') {
      new bootstrap.Carousel(carouselElement, { interval: false });
    }
  });
}

function showPropertyDetails(index) {
  if (index < 0 || index >= properties.length) {
    console.error("Invalid property index:", index);
    return;
  }
  const property = properties[index];
  const modalElement = document.getElementById('propertyDetailModal');
  const modalPropertyName = document.getElementById('modalPropertyName');
  const modalCarouselInner = document.getElementById('modalCarouselInner');
  const modalPropertyPrice = document.getElementById('modalPropertyPrice');
  const modalPropertyLocation = document.getElementById('modalPropertyLocation');
  const modalPropertyBeds = document.getElementById('modalPropertyBeds');
  const modalPropertyBaths = document.getElementById('modalPropertyBaths');
  const modalPropertySize = document.getElementById('modalPropertySize');
  const modalPropertyDescription = document.getElementById('modalPropertyDescription');
  const modalCarouselElement = document.getElementById('modalPropertyCarousel');

  modalPropertyName.textContent = property.name;
  modalPropertyPrice.textContent = property.price;
  modalPropertyLocation.textContent = property.location;
  modalPropertyBeds.textContent = property.beds;
  modalPropertyBaths.textContent = property.baths;
  modalPropertySize.textContent = property.size;
  modalPropertyDescription.textContent = property.description || 'No description available.';

  modalCarouselInner.innerHTML = '';
  property.images.forEach((img, idx) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = `carousel-item ${idx === 0 ? 'active' : ''}`;
    itemDiv.innerHTML = `<img src="${img}" class="d-block w-100" alt="${property.name} image ${idx + 1}" style="max-height: 400px; object-fit: cover;">`;
    modalCarouselInner.appendChild(itemDiv);
  });

  const controls = modalCarouselElement.querySelectorAll('.carousel-control-prev, .carousel-control-next');
  if (property.images.length <= 1) {
    controls.forEach(control => control.style.display = 'none');
  } else {
    controls.forEach(control => control.style.display = 'block');
  }

  if (!detailModalInstance) {
    detailModalInstance = new bootstrap.Modal(modalElement);
  }
  if (modalCarouselInstance) {
    modalCarouselInstance.dispose();
  }
  if (property.images.length > 0 && typeof bootstrap !== 'undefined') {
    modalCarouselInstance = new bootstrap.Carousel(modalCarouselElement, { interval: 10000 });
  }

  detailModalInstance.show();
}

const propertyListContainer = document.getElementById('propertyList');
if (propertyListContainer) {
  propertyListContainer.addEventListener('click', (event) => {
    const button = event.target.closest('.view-details');
    if (button) {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

      if (isLoggedIn) {
        const propertyIndex = parseInt(button.getAttribute('data-index'), 10);
        if (!isNaN(propertyIndex)) {
          showPropertyDetails(propertyIndex);
        } else {
            console.error("Could not parse property index from button.");
        }
      } else {
        window.location.href = 'login.html';
      }
    }
  });
}

renderProperties();

const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
if (nextBtn) nextBtn.style.display = 'none';
if (prevBtn) prevBtn.style.display = 'none';

const sections = document.querySelectorAll('main section[id]');
const navLi = document.querySelectorAll('header nav ul li a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= (sectionTop - 150)) {
      current = section.getAttribute('id');
    }
  })
  navLi.forEach(a => {
    a.classList.remove('active');
    const href = a.getAttribute('href');
    if (href === `#${current}`) {
      a.classList.add('active');
    }
  });
  if (pageYOffset < 400) {
    navLi.forEach(a => a.classList.remove('active'));
    const homeLink = document.querySelector('header nav ul li a[href="#top"]');
    if (homeLink) homeLink.classList.add('active');
  }
});

const filterButtons = document.querySelectorAll('.property-filters .btn-check');
filterButtons.forEach(button => {
  button.addEventListener('change', () => {
    console.log(`Filter changed: ${button.id} is ${button.checked}`);
  });
});

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const newCardsPerPage = window.innerWidth >= 992 ? 4 : (window.innerWidth >= 768 ? 3 : 2);
    if (newCardsPerPage !== cardsPerPage) {
      cardsPerPage = newCardsPerPage;
      renderProperties();
    }
  }, 250);
});

function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const loginSignupButtons = document.getElementById("loginSignupButtons");
  const userMenu = document.getElementById("userMenu");

  if (isLoggedIn) {
    if (loginSignupButtons) loginSignupButtons.classList.add("d-none");
    if (userMenu) userMenu.classList.remove("d-none");
  } else {
    if (loginSignupButtons) loginSignupButtons.classList.remove("d-none");
    if (userMenu) userMenu.classList.add("d-none");
  }
}

document.addEventListener('DOMContentLoaded', checkLoginStatus);

const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("isLoggedIn");
    checkLoginStatus();
    location.reload();
  });
}

const currentYearSpan = document.getElementById('currentYear');
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}

document.querySelectorAll('header nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId && targetId.length > 1) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = document.querySelector('header')?.offsetHeight || 0;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else if (targetId === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});