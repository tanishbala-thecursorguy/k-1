import { motion } from 'motion/react';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1584278858536-52532423b9ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBiaWJpbWJhcCUyMGJvd2x8ZW58MXx8fHwxNzY4Nzk1ODAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Bibimbap Bowl',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1687966699414-095ca9c35593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBmcmllZCUyMGNoaWNrZW58ZW58MXx8fHwxNzY4ODkwNDI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Korean Fried Chicken',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1760020890915-ca605575b93b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjB0dGVva2Jva2tpJTIwc3RyZWV0JTIwZm9vZHxlbnwxfHx8fDE3Njg5MTE1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Tteokbokki',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1628610688436-e635552020fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjByYW1lbiUyMG5vb2RsZXN8ZW58MXx8fHwxNzY4OTExNTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Korean Ramen',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1708388064278-707e85eaddc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBraW1jaGklMjBzaWRlJTIwZGlzaHxlbnwxfHx8fDE3Njg3OTU4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Kimchi',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1708388065058-c12722616143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBiaW5nc3UlMjBkZXNzZXJ0fGVufDF8fHx8MTc2ODkxMTU4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Bingsu Dessert',
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold uppercase tracking-wide text-[#1E1E1E] mb-4">
            Gallery
          </h2>
          <div className="h-1 w-24 bg-[#FF4F9A] mx-auto mb-4" />
          <p className="text-[#6B6B6B] text-lg">
            Flavors worth sharing on your feed
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl aspect-square cursor-pointer"
            >
              <motion.img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
              
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-gradient-to-t from-[#FF4F9A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6"
              >
                <p className="text-white font-semibold text-lg">{image.alt}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
