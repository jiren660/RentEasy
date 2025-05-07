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
  },
  {
    name: 'Modern Smart Home',
    location: 'Sta. Maria, Zamboanga City',
    price: '₱38,000 / mo',
    beds: 4,
    baths: 3,
    size: '180m²',
    type: 'house',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Ultra-modern smart home with integrated home automation, solar panels, and premium finishes. Features a home office and entertainment room.'
},
{
    name: 'Garden Paradise House',
    location: 'Pasonanca, Zamboanga City',
    price: '₱42,000 / mo',
    beds: 5,
    baths: 4,
    size: '250m²',
    type: 'house',
    images: [
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Stunning house with extensive gardens, outdoor kitchen, and pool. Perfect for nature lovers and families who enjoy outdoor living.'
},
{
    name: 'Seaside Family Home',
    location: 'Baliwasan, Zamboanga City',
    price: '₱35,000 / mo',
    beds: 4,
    baths: 3,
    size: '200m²',
    type: 'house',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Beautiful beachfront property with panoramic ocean views, private beach access, and modern coastal design.'
},
{
    name: 'Mountain View Residence',
    location: 'Pasonanca, Zamboanga City',
    price: '₱28,000 / mo',
    beds: 3,
    baths: 2,
    size: '150m²',
    type: 'house',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Serene mountain home with cool climate, perfect for those seeking peace and tranquility.'
},
{
    name: 'Contemporary Family Villa',
    location: 'Guiwan, Zamboanga City',
    price: '₱45,000 / mo',
    beds: 5,
    baths: 4,
    size: '280m²',
    type: 'house',
    images: [
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Luxurious family villa with modern amenities, home theater, game room, and staff quarters.'
},
{
    name: 'Starter Family Home',
    location: 'Tumaga, Zamboanga City',
    price: '₱18,000 / mo',
    beds: 3,
    baths: 2,
    size: '100m²',
    type: 'house',
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Perfect starter home for young families, featuring modern design and practical amenities.'
},
{
    name: 'Eco-Friendly Bungalow',
    location: 'Pasonanca, Zamboanga City',
    price: '₱25,000 / mo',
    beds: 2,
    baths: 2,
    size: '90m²',
    type: 'house',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Sustainable living space with solar power, rainwater harvesting, and organic garden.'
},
{
    name: 'Executive Family Home',
    location: 'Sta. Maria, Zamboanga City',
    price: '₱40,000 / mo',
    beds: 4,
    baths: 3,
    size: '220m²',
    type: 'house',
    images: [
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
    ],
    description: 'Prestigious home with high-end finishes, home office, and entertainment areas.'
},
{
  name: 'Luxury Sky Apartment',
  location: 'City Proper, Zamboanga City',
  price: '₱32,000 / mo',
  beds: 3,
  baths: 2,
  size: '120m²',
  type: 'apartment',
  images: [
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
  ],
  description: 'High-floor luxury apartment with panoramic city views, premium appliances, and 24/7 security.'
},
{
  name: 'Cozy Studio Plus',
  location: 'Tetuan, Zamboanga City',
  price: '₱12,000 / mo',
  beds: 1,
  baths: 1,
  size: '35m²',
  type: 'apartment',
  images: [
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
  ],
  description: 'Modern studio apartment with built-in furniture and smart space utilization.'
},
{
  name: 'Riverside Apartment',
  location: 'Guiwan, Zamboanga City',
  price: '₱18,000 / mo',
  beds: 2,
  baths: 1,
  size: '75m²',
  type: 'apartment',
  images: [
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    'https://images.unsplash.com/photo-1522444195799-478538b28823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
  ],
  description: 'Peaceful apartment with river views, modern amenities, and spacious balcony.'
},
{
  name: 'Professional\'s Haven',
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
  description: 'Perfect for young professionals, featuring home office space and modern amenities.'
},
{
  name: 'Family Comfort Suite',
  location: 'Tumaga, Zamboanga City',
  price: '₱22,000 / mo',
  beds: 3,
  baths: 2,
  size: '95m²',
  type: 'apartment',
  images: [
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    'https://images.unsplash.com/photo-1522444195799-478538b28823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
  ],
  description: 'Family-friendly apartment with children\'s play area and secure environment.'
},
{
  name: 'Urban Minimalist Flat',
  location: 'City Proper, Zamboanga City',
  price: '₱16,500 / mo',
  beds: 2,
  baths: 1,
  size: '60m²',
  type: 'apartment',
  images: [
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
  ],
  description: 'Contemporary minimalist design with smart storage solutions and modern fixtures.'
},
{
  name: 'Sunset View Apartment',
  location: 'Baliwasan, Zamboanga City',
  price: '₱25,000 / mo',
  beds: 2,
  baths: 2,
  size: '85m²',
  type: 'apartment',
  images: [
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    'https://images.unsplash.com/photo-1522444195799-478538b28823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
  ],
  description: 'Beautiful apartment with stunning sunset views, modern kitchen, and spacious living area.'
},
{
  name: 'Executive Loft',
  location: 'City Proper, Zamboanga City',
  price: '₱28,000 / mo',
  beds: 2,
  baths: 2,
  size: '100m²',
  type: 'apartment',
  images: [
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
  ],
  description: 'Modern loft-style apartment with high ceilings, premium finishes, and city views.'
},
{
  name: 'Premium Student Housing',
  location: 'Tumaga, Zamboanga City',
  price: '₱6,500 / mo',
  beds: 1,
  baths: 1,
  size: '20m²',
  type: 'dormitory',
  images: [
    'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
  ],
  description: 'High-end student accommodation with private bathroom, study area, and high-speed internet.'
},
{
  name: 'Co-Living Space',
  location: 'City Proper, Zamboanga City',
  price: '₱7,000 / mo',
  beds: 1,
  baths: 1,
  size: '18m²',
  type: 'dormitory',
  images: [
    'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
  ],
  description: 'Modern co-living space with shared kitchen, lounge areas, and community events.'
},
{
  name: 'Academic Haven',
  location: 'Sta. Maria, Zamboanga City',
  price: '₱5,500 / mo',
  beds: 1,
  baths: 1,
  size: '15m²',
  type: 'dormitory',
  images: [
    'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
  ],
  description: 'Study-focused dormitory with 24/7 quiet hours and dedicated study rooms.'
},
{
  name: 'Professional Dormitory',
  location: 'Tetuan, Zamboanga City',
  price: '₱8,000 / mo',
  beds: 1,
  baths: 1,
  size: '22m²',
  type: 'dormitory',
  images: [
    'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
  ],
  description: 'Upscale dormitory for working professionals with business center and gym.'
},
{
  name: 'Budget Student Dorm',
  location: 'Guiwan, Zamboanga City',
  price: '₱3,800 / mo',
  beds: 1,
  baths: 1,
  size: '12m²',
  type: 'dormitory',
  images: [
    'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
  ],
  description: 'Affordable student housing with basic amenities and convenient location.'
},
{
  name: 'Female Executive Dorm',
  location: 'Pasonanca, Zamboanga City',
  price: '₱7,500 / mo',
  beds: 1,
  baths: 1,
  size: '20m²',
  type: 'dormitory',
  images: [
    'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
  ],
  description: 'Female-only executive dormitory with premium amenities and security.'
},
{
  name: 'Student Community Living',
  location: 'Tumaga, Zamboanga City',
  price: '₱5,000 / mo',
  beds: 1,
  baths: 1,
  size: '16m²',
  type: 'dormitory',
  images: [
    'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
  ],
  description: 'Community-focused student housing with social spaces and study areas.'
},
{
  name: 'Modern Student Suite',
  location: 'City Proper, Zamboanga City',
  price: '₱6,800 / mo',
  beds: 1,
  baths: 1,
  size: '18m²',
  type: 'dormitory',
  images: [
    'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400'
  ],
  description: 'Modern student accommodation with private facilities and study space.'
}
];

let currentIndex = 0;
const itemsPerView = 10;
let cardsPerPage = window.innerWidth >= 992 ? 4 : (window.innerWidth >= 768 ? 3 : 2);
let detailModalInstance = null;
let modalCarouselInstance = null;
let bookingModalInstance = null;
let filteredProperties = [...properties];
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

properties.forEach(property => {
  if (!property.type) {
    if (property.name.toLowerCase().includes('house') || 
        property.name.toLowerCase().includes('villa')) {
      property.type = 'house';
    } else if (property.name.toLowerCase().includes('apartment') || 
               property.name.toLowerCase().includes('condo')) {
      property.type = 'apartment';
    } else if (property.name.toLowerCase().includes('dorm')) {
      property.type = 'dormitory';
    } else {
      property.type = 'house';
    }
  }
});

function getPriceValue(priceString) {
  return parseInt(priceString.replace(/[₱,\s/mo]/g, ''));
}

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

document.addEventListener('DOMContentLoaded', function() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // Previous button click handler
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex -= itemsPerView;
        if (currentIndex < 0) currentIndex = 0;
        renderProperties();
      }
    });
  }

  // Next button click handler
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentIndex + itemsPerView < filteredProperties.length) {
        currentIndex += itemsPerView;
        renderProperties();
      }
    });
  }
});

function filterProperties() {
  const propertyType = document.querySelector('input[name="propertyType"]:checked').id;
  const selectedBarangay = document.getElementById('barangaySelect').value;
  const styleKeyword = document.getElementById('styleInput').value.toLowerCase();
  const priceRange = document.getElementById('priceRange').value;

  filteredProperties = properties.filter(property => {
    // Type filter
    const matchesType = propertyType === property.type;
    
    // Barangay filter
    const matchesBarangay = !selectedBarangay || 
                           property.location.includes(selectedBarangay);
    
    // Style/Keyword filter
    const matchesStyle = !styleKeyword || 
                        property.name.toLowerCase().includes(styleKeyword) ||
                        property.description.toLowerCase().includes(styleKeyword);
    
    // Price range filter
    let matchesPrice = true;
    if (priceRange !== 'Any Price') {
      const propertyPrice = getPriceValue(property.price);
      if (priceRange === '₱30,000+') {
        matchesPrice = propertyPrice >= 30000;
      } else {
        const [min, max] = priceRange.split(' - ')
          .map(price => parseInt(price.replace(/[₱,]/g, '')));
        matchesPrice = propertyPrice >= min && propertyPrice <= max;
      }
    }

    return matchesType && matchesBarangay && matchesStyle && matchesPrice;
  });

  currentIndex = 0;
  renderProperties();
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

  if (filteredProperties.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <h3>No properties found</h3>
        <p>Try adjusting your filters to see more results.</p>
      </div>
    `;
    updateArrowButtons();
    return;
  }

  // Get current slice of properties
  const propertiesToShow = filteredProperties.slice(currentIndex, currentIndex + itemsPerView);

  propertiesToShow.forEach((property, index) => {
    const card = document.createElement('div');
    const lgCols = Math.max(1, Math.floor(12 / cardsPerPage));
    card.className = `col-lg-${lgCols} col-md-6 col-sm-6 mb-4`;

    const uniquePropertyId = `prop-${currentIndex + index}`;
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
          <div class="d-flex justify-content-between align-items-start">
            <h6 class="text-muted mb-1">${property.price}</h6>
            <span class="badge bg-${property.type === 'house' ? 'success' : 
                                    property.type === 'apartment' ? 'primary' : 
                                    'warning'}">${property.type}</span>
          </div>
          <h5 class="card-title">${property.name}</h5>
          <p class="text-muted mb-2"><i class="fas fa-map-marker-alt me-1"></i>${property.location}</p>
          <div class="property-info d-flex justify-content-between mt-auto pt-2">
            <span><i class="fa fa-bed"></i> ${property.beds} Beds</span>
            <span><i class="fa fa-bath"></i> ${property.baths} Baths</span>
            <span><i class="fa fa-expand"></i> ${property.size}</span>
          </div>
        </div>
        <div class="card-footer bg-transparent border-top-0 text-center pb-3">
          <button class="btn btn-success w-100 view-details" data-index="${currentIndex + index}">View Details</button>
        </div>
      </div>
    `;
    container.appendChild(card);

    const carouselElement = document.getElementById(carouselId);
    if (carouselElement && typeof bootstrap !== 'undefined') {
      new bootstrap.Carousel(carouselElement, { interval: false });
    }
  });

  updateArrowButtons();
}

// Update Arrow Buttons
function updateArrowButtons() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (prevBtn && nextBtn) {
    prevBtn.style.display = currentIndex > 0 ? 'block' : 'none';
    nextBtn.style.display = 
      currentIndex + itemsPerView < filteredProperties.length ? 'block' : 'none';
  }
}

function showPropertyDetails(index) {
  if (index < 0 || index >= filteredProperties.length) return;
  
  const property = filteredProperties[index];
  const modalElement = document.getElementById('propertyDetailModal');
  
  document.getElementById('modalPropertyName').textContent = property.name;
  document.getElementById('modalPropertyPrice').textContent = property.price;
  document.getElementById('modalPropertyLocation').textContent = property.location;
  document.getElementById('modalPropertyBeds').textContent = property.beds;
  document.getElementById('modalPropertyBaths').textContent = property.baths;
  document.getElementById('modalPropertySize').textContent = property.size;
  document.getElementById('modalPropertyDescription').textContent = 
    property.description || 'No description available.';

  const modalCarouselInner = document.getElementById('modalCarouselInner');
  modalCarouselInner.innerHTML = property.images.map((img, idx) => `
    <div class="carousel-item ${idx === 0 ? 'active' : ''}">
      <img src="${img}" class="d-block w-100" alt="${property.name} image ${idx + 1}" 
           style="max-height: 400px; object-fit: cover;">
    </div>
  `).join('');

  // Update favorites button
  const favButton = modalElement.querySelector('.add-to-favorites');
  if (favButton) {
    favButton.dataset.propertyIndex = index;
    if (favorites.includes(index.toString())) {
      favButton.innerHTML = '<i class="fas fa-heart"></i> Remove from Favorites';
    } else {
      favButton.innerHTML = '<i class="far fa-heart"></i> Add to Favorites';
    }
  }

  if (!detailModalInstance) {
    detailModalInstance = new bootstrap.Modal(modalElement);
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

// Initialize payment handling
document.addEventListener('DOMContentLoaded', function() {
  // Handle submit booking button
  document.getElementById('submitBooking').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Validate form
    const form = document.getElementById('bookingForm');
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Update payment modal with booking details
    updatePaymentModal();

    // Hide booking modal and show payment modal
    const bookingModal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
    bookingModal.hide();
    
    const paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
    paymentModal.show();
  });

  // Handle payment method selection
  document.querySelectorAll('input[name="paymentMethod"]').forEach(input => {
    input.addEventListener('change', function() {
      document.querySelectorAll('.payment-methods .form-check').forEach(check => {
        check.classList.remove('selected');
      });
      this.closest('.form-check').classList.add('selected');
      
      // Show/hide card element
      const cardElement = document.getElementById('cardElement');
      cardElement.classList.toggle('d-none', this.id !== 'cardPayment');
    });
  });

  // Handle confirm payment button
  document.getElementById('confirmPayment').addEventListener('click', processPayment);
});

function updatePaymentModal() {
  // Get booking details
  const checkIn = new Date(document.getElementById('checkInDate').value);
  const checkOut = new Date(document.getElementById('checkOutDate').value);
  const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
  
  // Update summary
  document.getElementById('summaryPropertyImage').src = document.querySelector('#modalPropertyCarousel .carousel-item.active img').src;
  document.getElementById('summaryPropertyName').textContent = document.getElementById('modalPropertyName').textContent;
  document.getElementById('summaryPropertyLocation').textContent = document.getElementById('modalPropertyLocation').textContent;
  document.getElementById('summaryCheckIn').textContent = formatDate(checkIn);
  document.getElementById('summaryCheckOut').textContent = formatDate(checkOut);
  
  // Update price breakdown
  const ratePerNight = 5000; // Replace with actual rate
  const subtotal = nights * ratePerNight;
  const serviceFee = subtotal * 0.1;
  const total = subtotal + serviceFee + 500;

  document.getElementById('nightCount').textContent = nights;
  document.getElementById('subtotalAmount').textContent = `₱${subtotal.toLocaleString()}`;
  document.getElementById('serviceFee').textContent = `₱${serviceFee.toLocaleString()}`;
  document.getElementById('totalAmount').textContent = `₱${total.toLocaleString()}`;
}

function processPayment() {
  const button = document.getElementById('confirmPayment');
  const spinner = button.querySelector('.spinner-border');
  
  // Show processing state
  button.disabled = true;
  spinner.classList.remove('d-none');
  
  // Hide payment modal and show processing modal
  const paymentModal = bootstrap.Modal.getInstance(document.getElementById('paymentModal'));
  paymentModal.hide();
  
  const processingModal = new bootstrap.Modal(document.getElementById('processingModal'));
  processingModal.show();

  // Simulate payment processing
  setTimeout(() => {
    processingModal.hide();
    
    // Generate booking reference
    const bookingRef = 'BK-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    document.getElementById('bookingReference').textContent = bookingRef;
    document.getElementById('confirmationEmail').textContent = document.getElementById('email').value;
    
    // Show success modal
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
    successModal.show();
    
    // Reset button state
    button.disabled = false;
    spinner.classList.add('d-none');
  }, 2000);
}

function showError(message) {
  document.getElementById('errorMessage').textContent = message;
  const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
  errorModal.show();
}

function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
}

// Check login status
checkLoginStatus();

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

