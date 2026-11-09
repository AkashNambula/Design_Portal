import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calendar, ChevronDown, Minus, Plus, Lock, CheckCircle2, Sparkles } from 'lucide-react';

const MONTHS = [
  { short: 'Jan', full: 'January', num: '01' },
  { short: 'Feb', full: 'February', num: '02' },
  { short: 'Mar', full: 'March', num: '03' },
  { short: 'Apr', full: 'April', num: '04' },
  { short: 'May', full: 'May', num: '05' },
  { short: 'Jun', full: 'June', num: '06' },
  { short: 'Jul', full: 'July', num: '07' },
  { short: 'Aug', full: 'August', num: '08' },
  { short: 'Sep', full: 'September', num: '09' },
  { short: 'Oct', full: 'October', num: '10' },
  { short: 'Nov', full: 'November', num: '11' },
  { short: 'Dec', full: 'December', num: '12' },
];

export default function DobVerificationPage({ onVerifySuccess }) {
  const navigate = useNavigate();
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [isMonthPickerOpen, setIsMonthPickerOpen] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const dayInputRef = useRef(null);

  // Handle Day Input changes
  const handleDayInputChange = (e) => {
    const rawVal = e.target.value.replace(/\D/g, '').slice(0, 2);
    setError('');

    if (!rawVal) {
      setDay('');
      return;
    }

    const num = parseInt(rawVal, 10);
    if (num > 31) {
      setDay('31');
    } else {
      setDay(rawVal);
      if (rawVal.length === 2 && !month) {
        setIsMonthPickerOpen(true);
      }
    }
  };

  // Increment Day
  const handleDayStep = (delta) => {
    setError('');
    const current = parseInt(day, 10);
    if (isNaN(current)) {
      setDay(delta > 0 ? '18' : '1');
      return;
    }
    let next = current + delta;
    if (next < 1) next = 31;
    if (next > 31) next = 1;
    setDay(String(next));
  };

  // Select a month
  const handleSelectMonth = (monthItem) => {
    setMonth(monthItem.full);
    setIsMonthPickerOpen(false);
    setError('');
  };

  const handleVerify = (e) => {
    e.preventDefault();
    setError('');

    const isDayValid = parseInt(day, 10) === 18;
    const normalizedMonth = month.trim().toLowerCase();
    const isMonthValid =
      normalizedMonth === 'november' ||
      normalizedMonth === 'nov' ||
      normalizedMonth === '11';

    if (isDayValid && isMonthValid) {
      setIsSuccess(true);
      if (onVerifySuccess) {
        onVerifySuccess();
      }
      sessionStorage.setItem('dob_verified', 'true');
      setTimeout(() => {
        navigate('/invitation');
      }, 700);
    } else {
      setError('Date does not match. Please enter 18 November.');
    }
  };

  return (
    <div className="min-h-screen w-full bg-wine text-ivory flex flex-col items-center justify-center p-4 relative overflow-hidden select-none">
      {/* Ambient background glows */}
      <div 
        className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: '#C7A879' }} 
      />
      <div 
        className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: '#E8D5D0' }} 
      />

      {/* Outer Border */}
      <div className="absolute inset-3 sm:inset-6 border border-champagne/30 rounded-2xl pointer-events-none" />

      {/* Verification Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md bg-ivory text-charcoal rounded-2xl p-6 sm:p-9 shadow-[0_20px_50px_rgba(41,35,38,0.5)] border border-champagne/40 text-center"
      >
        <div className="absolute inset-3 border border-champagne/25 rounded-xl pointer-events-none" />

        {/* Top Eyebrow Tag */}
        <div className="mb-2">
          <span className="font-cinzel text-xs tracking-[0.24em] text-muted-rose uppercase font-semibold">
            Private Access
          </span>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="w-8 h-px bg-champagne/60" />
          <div className="w-1.5 h-1.5 rotate-45 bg-champagne" />
          <span className="w-8 h-px bg-champagne/60" />
        </div>

        {/* Heading */}
        <h1 className="font-cormorant text-3xl sm:text-4xl text-wine font-medium mb-2">
          Date of Birth Verification
        </h1>

        <p className="font-cormorant italic text-base sm:text-lg text-charcoal/80 mb-6 max-w-xs mx-auto">
          Please enter the birthday date to unlock your personal invitation experience.
        </p>

        <form onSubmit={handleVerify} className="space-y-4">
          {/* Dual Input Controls: Day & Month */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {/* DAY SELECTOR */}
            <div>
              <label className="block font-cinzel text-[10px] tracking-[0.18em] uppercase text-muted-rose mb-1.5 font-semibold">
                Day (DD)
              </label>
              <div className="flex items-center bg-[#F8F3EF] border border-champagne/60 rounded-xl px-2 py-1.5 shadow-sm transition-all focus-within:border-wine focus-within:ring-1 focus-within:ring-wine/20">
                <button
                  type="button"
                  onClick={() => handleDayStep(-1)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-wine hover:bg-dusty-rose/40 active:scale-95 transition-all"
                  aria-label="Decrease day"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>

                <input
                  ref={dayInputRef}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={2}
                  value={day}
                  onChange={handleDayInputChange}
                  placeholder="18"
                  className="w-full text-center font-cormorant text-2xl font-semibold text-wine bg-transparent focus:outline-none placeholder:text-muted-rose/40"
                  required
                />

                <button
                  type="button"
                  onClick={() => handleDayStep(1)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-wine hover:bg-dusty-rose/40 active:scale-95 transition-all"
                  aria-label="Increase day"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* MONTH SELECTOR */}
            <div>
              <label className="block font-cinzel text-[10px] tracking-[0.18em] uppercase text-muted-rose mb-1.5 font-semibold">
                Month
              </label>
              <button
                type="button"
                onClick={() => setIsMonthPickerOpen(!isMonthPickerOpen)}
                className={`w-full flex items-center justify-between bg-[#F8F3EF] border rounded-xl px-3 py-2 shadow-sm transition-all text-left ${
                  isMonthPickerOpen ? 'border-wine ring-1 ring-wine/20' : 'border-champagne/60 hover:border-wine/60'
                }`}
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <Calendar className="w-4 h-4 text-champagne shrink-0" />
                  <span className={`font-montserrat text-sm truncate ${month ? 'text-wine font-medium' : 'text-muted-rose/60'}`}>
                    {month || 'Select Month'}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-champagne shrink-0 transition-transform duration-200 ${
                    isMonthPickerOpen ? 'rotate-180 text-wine' : ''
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Month Picker Dropdown Grid (User-Friendly 12 Months) */}
          <AnimatePresence>
            {isMonthPickerOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="bg-dusty-rose/30 border border-champagne/60 rounded-xl p-3 mt-1 shadow-inner">
                  <div className="text-[10px] font-cinzel tracking-[0.18em] uppercase text-muted-rose font-semibold mb-2 text-center">
                    Select Month
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {MONTHS.map((m) => {
                      const isSelected = month === m.full;
                      return (
                        <button
                          key={m.short}
                          type="button"
                          onClick={() => handleSelectMonth(m)}
                          className={`py-2 px-1 rounded-lg text-xs font-cinzel tracking-wider transition-all duration-200 ${
                            isSelected
                              ? 'bg-wine text-ivory font-bold shadow-sm scale-102 border border-champagne'
                              : 'bg-ivory text-charcoal hover:bg-wine hover:text-ivory border border-champagne/40'
                          }`}
                        >
                          {m.short}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Selected Date Summary pill if both selected */}
          {day && month && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-1.5 px-3 rounded-lg bg-dusty-rose/25 border border-champagne/40 inline-flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-champagne" />
              <span className="font-cormorant text-base text-wine font-medium tracking-wide">
                {day} {month}
              </span>
            </motion.div>
          )}

          {/* Feedback Messages */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-xs text-wine font-montserrat p-2.5 rounded-lg bg-dusty-rose/50 border border-muted-rose/40 flex items-center justify-center gap-2"
              >
                <span>{error}</span>
              </motion.div>
            )}
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-wine font-montserrat font-medium p-2.5 rounded-lg bg-dusty-rose/70 border border-champagne flex items-center justify-center gap-2 shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-wine shrink-0" />
                <span>Verification Successful. Unlocking invitation...</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Unlock Invitation Button */}
          <div className="pt-2">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded-xl bg-wine text-ivory border border-champagne shadow-[0_6px_18px_rgba(84,45,56,0.22)] hover:bg-[#43232c] transition-all duration-300 font-cinzel text-xs tracking-[0.22em] uppercase font-semibold flex items-center justify-center gap-2"
            >
              <Lock className="w-3.5 h-3.5 text-champagne" />
              <span>Unlock Invitation</span>
              <div className="w-1.5 h-1.5 rotate-45 bg-champagne" />
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
