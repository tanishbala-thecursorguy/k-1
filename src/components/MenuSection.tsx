import { useState } from 'react';
import { motion } from 'motion/react';
import { Leaf } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  isVeg?: boolean;
  image: string;
}

const menuData = {
  starters: [
    {
      id: 1,
      name: 'Korean Fried Chicken',
      description: 'Crispy chicken glazed with gochujang sauce, sesame seeds',
      price: '$14',
      image: 'https://images.unsplash.com/photo-1687966699414-095ca9c35593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBmcmllZCUyMGNoaWNrZW58ZW58MXx8fHwxNzY4ODkwNDI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 2,
      name: 'Tteokbokki',
      description: 'Spicy rice cakes in gochugaru sauce with fish cakes',
      price: '$12',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1760020890915-ca605575b93b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjB0dGVva2Jva2tpJTIwc3RyZWV0JTIwZm9vZHxlbnwxfHx8fDE3Njg5MTE1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 3,
      name: 'Kimchi Pancake',
      description: 'Crispy pancake with fermented kimchi and spring onions',
      price: '$10',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1708388064278-707e85eaddc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBraW1jaGklMjBzaWRlJTIwZGlzaHxlbnwxfHx8fDE3Njg3OTU4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ],
  tteokbokki: [
    {
      id: 9,
      name: 'Classic Tteokbokki',
      description: 'Chewy rice cakes in spicy gochujang sauce',
      price: '$10',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1760020890915-ca605575b93b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjB0dGVva2Jva2tpJTIwc3RyZWV0JTIwZm9vZHxlbnwxfHx8fDE3Njg5MTE1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 10,
      name: 'Rose Tteokbokki',
      description: 'Creamy pink (rose) sauce with rice cakes',
      price: '$12',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1760020890915-ca605575b93b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjB0dGVva2Jva2tpJTIwc3RyZWV0JTIwZm9vZHxlbnwxfHx8fDE3Njg5MTE1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 11,
      name: 'Mala Tteokbokki',
      description: 'Sichuan-style mala sauce with rice cakes',
      price: '$12',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1760020890915-ca605575b93b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjB0dGVva2Jva2tpJTIwc3RyZWV0JTIwZm9vZHxlbnwxfHx8fDE3Njg5MTE1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ],
  corndogs: [
    {
      id: 12,
      name: 'Classic Chicken Corn Dog',
      description: 'Korean-style corn dog with chicken sausage',
      price: '$8',
      image: 'https://images.unsplash.com/photo-1747228469031-c5fc60b9d9f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBjb3JuJTIwZG9nJTIwbW96emFyZWxsYXxlbnwxfHx8fDE3Njg5MTIyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 13,
      name: 'Classic Mozzarella Corn Dog',
      description: 'Stretchy mozzarella cheese in crispy coating',
      price: '$8',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1747228469031-c5fc60b9d9f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBjb3JuJTIwZG9nJTIwbW96emFyZWxsYXxlbnwxfHx8fDE3Njg5MTIyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 14,
      name: 'Crispy Chicken Corn Dog',
      description: 'Extra crispy coating with tender chicken',
      price: '$9',
      image: 'https://images.unsplash.com/photo-1747228469031-c5fc60b9d9f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBjb3JuJTIwZG9nJTIwbW96emFyZWxsYXxlbnwxfHx8fDE3Njg5MTIyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ],
  mains: [
    {
      id: 4,
      name: 'Bibimbap Bowl',
      description: 'Rice bowl with seasonal vegetables, gochujang, fried egg',
      price: '$16',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1584278858536-52532423b9ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBiaWJpbWJhcCUyMGJvd2x8ZW58MXx8fHwxNzY4Nzk1ODAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 5,
      name: 'Korean Ramen',
      description: 'Spicy broth with fresh noodles, soft egg, vegetables',
      price: '$18',
      image: 'https://images.unsplash.com/photo-1628610688436-e635552020fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjByYW1lbiUyMG5vb2RsZXN8ZW58MXx8fHwxNzY4OTExNTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 6,
      name: 'Korean BBQ Platter',
      description: 'Grilled marinated beef, pork belly, with banchan sides',
      price: '$28',
      image: 'https://images.unsplash.com/photo-1687966699414-095ca9c35593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBmcmllZCUyMGNoaWNrZW58ZW58MXx8fHwxNzY4ODkwNDI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ],
  desserts: [
    {
      id: 7,
      name: 'Bingsu',
      description: 'Shaved ice with sweetened condensed milk, fruit, mochi',
      price: '$12',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1708388065058-c12722616143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBiaW5nc3UlMjBkZXNzZXJ0fGVufDF8fHx8MTc2ODkxMTU4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 8,
      name: 'Korean Donuts',
      description: 'Fluffy twisted donuts dusted with cinnamon sugar',
      price: '$8',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1708388065058-c12722616143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBiaW5nc3UlMjBkZXNzZXJ0fGVufDF8fHx8MTc2ODkxMTU4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 15,
      name: 'Red Bean Bungeoppang',
      description: 'Fish-shaped pastry with sweet red bean filling',
      price: '$6',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1569641144685-f0c0edf4a8e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBidW5nZW9wcGFuZyUyMGZpc2glMjBwYXN0cnl8ZW58MXx8fHwxNzY4OTEyMjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 16,
      name: 'Custard Bungeoppang',
      description: 'Fish-shaped pastry with creamy custard filling',
      price: '$6',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1569641144685-f0c0edf4a8e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBidW5nZW9wcGFuZyUyMGZpc2glMjBwYXN0cnl8ZW58MXx8fHwxNzY4OTEyMjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ],
  drinks: [
    {
      id: 17,
      name: 'Blush Beam',
      description: 'Refreshing lemon ade with a citrus twist',
      price: '$6',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1711154319702-70f9e8c3a90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW1vbmFkZSUyMGRyaW5rJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY4OTEyMjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 18,
      name: 'Twilight Ruby',
      description: 'Sweet and tart pomegranate ade',
      price: '$6',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1727403423232-74e286740246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBkcmluayUyMGJldmVyYWdlfGVufDF8fHx8MTc2ODkxMjI0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 19,
      name: 'Sunset Drop',
      description: 'Tropical mango ade with fresh fruit',
      price: '$6',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1711154319702-70f9e8c3a90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW1vbmFkZSUyMGRyaW5rJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY4OTEyMjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 20,
      name: 'Mogu Mogu',
      description: 'Fruity drink with nata de coco jelly',
      price: '$5',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1727403423232-74e286740246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBkcmluayUyMGJldmVyYWdlfGVufDF8fHx8MTc2ODkxMjI0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 21,
      name: 'Coca Cola Vanilla',
      description: 'Classic Coca Cola with vanilla flavor',
      price: '$4',
      isVeg: true,
      image: 'https://images.unsplash.com/photo-1727403423232-74e286740246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBkcmluayUyMGJldmVyYWdlfGVufDF8fHx8MTc2ODkxMjI0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ],
};

type Category = 'starters' | 'tteokbokki' | 'corndogs' | 'mains' | 'desserts' | 'drinks';

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('starters');

  const categories: { key: Category; label: string }[] = [
    { key: 'starters', label: 'Starters' },
    { key: 'tteokbokki', label: 'Tteokbokki' },
    { key: 'corndogs', label: 'Corn Dogs' },
    { key: 'mains', label: 'Mains' },
    { key: 'desserts', label: 'Desserts' },
    { key: 'drinks', label: 'Drinks' },
  ];

  return (
    <section id="menu" className="py-32 bg-[#FFF6E5]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold uppercase tracking-wide text-[#1E1E1E] mb-4">
            Our Menu
          </h2>
          <div className="h-1 w-24 bg-[#FF4F9A] mx-auto" />
        </motion.div>

        {/* Category Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-6 mb-16 flex-wrap"
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.key)}
              className={`px-8 py-3 rounded-full font-semibold uppercase tracking-wide transition-all duration-500 ${
                activeCategory === category.key
                  ? 'bg-gradient-to-r from-[#7B2FF7] to-[#9F6BFF] text-white shadow-lg'
                  : 'bg-white text-[#1E1E1E] hover:shadow-md'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menuData[activeCategory].map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="h-56 overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-[#1E1E1E]">{item.name}</h3>
                  {item.isVeg && (
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="bg-[#4CAF50] rounded-full p-1.5"
                    >
                      <Leaf size={16} className="text-white" />
                    </motion.div>
                  )}
                </div>
                
                <p className="text-[#6B6B6B] mb-4 leading-relaxed">{item.description}</p>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-bold text-[#FF4F9A]"
                >
                  {item.price}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}