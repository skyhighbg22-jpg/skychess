import { useState } from 'react';

const courses = [
  { id: 1, title: 'Italian Game', level: 'Beginner', duration: '4 weeks' },
  { id: 2, title: 'Sicilian Defense', level: 'Intermediate', duration: '6 weeks' },
  { id: 3, title: 'Ruy Lopez', level: 'Advanced', duration: '8 weeks' },
  { id: 4, title: 'French Defense', level: 'Intermediate', duration: '5 weeks' },
  { id: 5, title: 'English Opening', level: 'Beginner', duration: '4 weeks' },
  { id: 6, title: 'Endgame Mastery', level: 'Advanced', duration: '10 weeks' },
];

export default function CoursesGrid() {
  const [filter, setFilter] = useState('All');
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  
  const filtered = filter === 'All' ? courses : courses.filter(c => c.level === filter);

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-neon-cyan">Chess Courses</h2>
        <p className="text-center text-muted-foreground mb-12">Master chess openings with AI-powered guidance</p>
        
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {levels.map(level => (
            <button
              key={level}
              onClick={() => setFilter(level)}
              className={`px-4 py-2 rounded-lg transition ${
                filter === level
                  ? 'bg-neon-cyan text-black font-bold'
                  : 'border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(course => (
            <div key={course.id} className="bg-gradient-to-br from-neon-darkblue/20 to-transparent border border-neon-cyan/30 rounded-lg p-6 hover:border-neon-cyan transition">
              <h3 className="text-xl font-bold text-neon-cyan mb-2">{course.title}</h3>
              <p className="text-neon-green mb-2">Level: {course.level}</p>
              <p className="text-muted-foreground mb-4">Duration: {course.duration}</p>
              <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-bold hover:shadow-lg hover:shadow-neon-cyan/50 transition">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
