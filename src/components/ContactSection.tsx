import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-[#FFF6E5]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold uppercase tracking-wide text-[#1E1E1E] mb-4">
            Visit Us
          </h2>
          <div className="h-1 w-24 bg-[#FF4F9A] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-start gap-4"
            >
              <div className="bg-gradient-to-br from-[#7B2FF7] to-[#9F6BFF] p-3 rounded-xl">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#1E1E1E] mb-2">Address</h3>
                <p className="text-[#6B6B6B] leading-relaxed">
                  MVP Colony, Sector 1
                  <br />
                  Visakhapatnam, Andhra Pradesh
                  <br />
                  India - 530017
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-start gap-4"
            >
              <div className="bg-gradient-to-br from-[#7B2FF7] to-[#9F6BFF] p-3 rounded-xl">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#1E1E1E] mb-2">Phone</h3>
                <p className="text-[#6B6B6B] leading-relaxed">
                  +1 (213) 555-NUII
                  <br />
                  +1 (213) 555-7365
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-start gap-4"
            >
              <div className="bg-gradient-to-br from-[#7B2FF7] to-[#9F6BFF] p-3 rounded-xl">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#1E1E1E] mb-2">Email</h3>
                <p className="text-[#6B6B6B] leading-relaxed">
                  hello@nuinui.com
                  <br />
                  reservations@nuinui.com
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-start gap-4"
            >
              <div className="bg-gradient-to-br from-[#7B2FF7] to-[#9F6BFF] p-3 rounded-xl">
                <Clock size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#1E1E1E] mb-2">Hours</h3>
                <p className="text-[#6B6B6B] leading-relaxed">
                  Monday - Thursday: 11:00 AM - 10:00 PM
                  <br />
                  Friday - Saturday: 11:00 AM - 11:00 PM
                  <br />
                  Sunday: 12:00 PM - 9:00 PM
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.558937285477!2d83.3286984!3d17.7190393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39436dec7c1711%3A0xaa31f97c5d44cddc!2sNUINUI!5e0!3m2!1sen!2sus!4v1674234567890!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nui Nui Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}