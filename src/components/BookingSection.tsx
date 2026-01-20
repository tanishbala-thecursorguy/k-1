import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Users } from 'lucide-react';

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Reservation request submitted! We will contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="book" className="py-32 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#7B2FF7] to-[#9F6BFF]"
        animate={{
          background: [
            'linear-gradient(135deg, #7B2FF7 0%, #9F6BFF 100%)',
            'linear-gradient(135deg, #9F6BFF 0%, #7B2FF7 100%)',
            'linear-gradient(135deg, #7B2FF7 0%, #9F6BFF 100%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 max-w-[600px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold uppercase tracking-wide text-white mb-4">
            Book a Table
          </h2>
          <div className="h-1 w-24 bg-white mx-auto mb-4" />
          <p className="text-white/90 text-lg">
            Reserve your spot for an unforgettable experience
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6"
          >
            <label htmlFor="name" className="block text-white mb-2 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white placeholder-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-500"
              placeholder="Your name"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-6"
          >
            <label htmlFor="email" className="block text-white mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white placeholder-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-500"
              placeholder="your.email@example.com"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-6"
          >
            <label htmlFor="date" className="block text-white mb-2 font-semibold">
              <Calendar className="inline mr-2" size={18} />
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-6"
          >
            <label htmlFor="time" className="block text-white mb-2 font-semibold">
              <Clock className="inline mr-2" size={18} />
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mb-8"
          >
            <label htmlFor="guests" className="block text-white mb-2 font-semibold">
              <Users className="inline mr-2" size={18} />
              Number of Guests
            </label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-500"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num} className="text-[#1E1E1E]">
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full px-8 py-4 bg-[#FF4F9A] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            Reserve Now
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
