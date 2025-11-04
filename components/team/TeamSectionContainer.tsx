'use client';

import { useState } from 'react';
import TeamCard from '../cards/TeamCard';
import { motion, AnimatePresence } from 'framer-motion';

interface TeamMember {
  name: string;
  title: string;
  imageSrc: string;
  linkedInUrl?: string;
  story: string;
}

interface TeamSectionContainerProps {
  teamTitle?: string;
  teamSubline?: string;
  teamCard: TeamMember[];
}

const TeamSectionContainer = ({ teamTitle, teamSubline, teamCard }: TeamSectionContainerProps) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h3 className="text-3xl font-bold text-gray-900">{teamTitle}</h3>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">{teamSubline}</p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamCard.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TeamCard
                name={member.name}
                title={member.title}
                imageSrc={member.imageSrc}
                linkedInUrl={member.linkedInUrl}
                onReadMore={() => setSelectedMember(member)}
              />
            </motion.div>
          ))}
        </div>

        {/* Animated Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-6 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedMember(null)} // close on backdrop click
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="bg-white rounded-2xl w-full max-w-xl max-h-[80vh] overflow-y-auto p-6 relative shadow-lg"
                onClick={(e) => e.stopPropagation()} // prevent close on content click
              >
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 text-gray-700 hover:text-black cursor-pointer"
                >
                  ✕
                </button>
                <h4 className="text-2xl font-semibold mb-2 text-gray-900">
                  {selectedMember.name}
                </h4>
                <p className="text-gray-600 mb-4">{selectedMember.title}</p>
                <p className="text-gray-700 leading-relaxed text-justify whitespace-pre-line">
                  {selectedMember.story}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TeamSectionContainer;
