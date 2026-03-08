import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Calendar, User, Search, ChevronDown } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/destinations')
  }

  return (
    <section className="relative min-h-[100vh] lg:min-h-[95vh] flex flex-col items-center justify-center overflow-visible">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/paro-taksang.jpg"
          className="w-full h-full object-cover"
          alt="High-quality travel panorama"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Hero Copy */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center pt-20 pb-20 md:pt-32 md:pb-48">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-heading mb-6 leading-tight md:leading-[1.1] font-medium"
        >
          Experience the <br className="hidden md:block" /> Unforgettable
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-white/80 text-[10px] md:text-base font-light max-w-2xl mx-auto leading-relaxed tracking-[0.2em] uppercase px-4"
        >
          Curated luxury stays & bespoke adventures in the Dragon Kingdom.
        </motion.p>
      </div>

      {/* The Booking Search Card (Glassmorphism) */}
      <div className="absolute bottom-0 translate-y-1/2 left-0 w-full z-40 px-4 md:px-6">
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onSubmit={handleSearch}
          className="max-w-5xl mx-auto glass-panel p-3 md:p-6 lg:p-4 flex flex-col lg:flex-row items-stretch gap-2 lg:gap-2"
        >
          {/* Location Field */}
          <div className="flex-1 flex flex-col px-4 py-3 md:px-6 md:py-4 bg-white/40 hover:bg-white/60 transition-colors rounded-2xl cursor-text">
            <label className="flex items-center gap-2 text-[8px] md:text-[10px] font-bold text-primary uppercase tracking-widest mb-0.5 md:mb-1 opacity-70">
              <MapPin className="w-3 md:w-3.5 h-3 md:h-3.5 text-accent" />
              Location
            </label>
            <input
              type="text"
              placeholder="Where to next?"
              className="bg-transparent text-primary font-medium outline-none placeholder-primary/50 w-full text-sm md:text-lg font-heading"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Check-in / Check-out */}
          <div className="flex-1 flex flex-col px-4 py-3 md:px-6 md:py-4 bg-white/40 hover:bg-white/60 transition-colors rounded-2xl cursor-pointer">
            <label className="flex items-center gap-2 text-[8px] md:text-[10px] font-bold text-primary uppercase tracking-widest mb-0.5 md:mb-1 opacity-70">
              <Calendar className="w-3 md:w-3.5 h-3 md:h-3.5 text-accent" />
              Dates
            </label>
            <div className="flex items-center justify-between text-primary font-medium text-sm md:text-lg font-heading mt-0.5 md:mt-1">
              <span>Select Dates</span>
              <ChevronDown className="w-4 h-4 text-primary/50" />
            </div>
          </div>

          {/* Guests & Rooms */}
          <div className="flex-1 flex flex-col px-4 py-3 md:px-6 md:py-4 bg-white/40 hover:bg-white/60 transition-colors rounded-2xl cursor-pointer">
            <label className="flex items-center gap-2 text-[8px] md:text-[10px] font-bold text-primary uppercase tracking-widest mb-0.5 md:mb-1 opacity-70">
              <User className="w-3 md:w-3.5 h-3 md:h-3.5 text-accent" />
              Guests
            </label>
            <div className="flex items-center justify-between text-primary font-medium text-sm md:text-lg font-heading mt-0.5 md:mt-1">
              <span>2 Adults, 1 Room</span>
              <ChevronDown className="w-4 h-4 text-primary/50" />
            </div>
          </div>

          {/* Search CTA */}
          <button className="btn-primary !rounded-2xl lg:!px-12 !py-3.5 md:!py-4 !text-[10px] md:!text-sm lg:!w-auto w-full shadow-lg hover:shadow-xl mt-1 lg:mt-0 flex-shrink-0">
            <Search className="w-3 md:w-4 h-3 md:h-4 mr-2" />
            Search
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default Hero