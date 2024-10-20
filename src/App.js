import React, { useState } from 'react';
import MenteeUpload from './components/MenteeUpload';
import MentorUpload from './components/MentorUpload';
import MatchingResults from './components/MatchingResults';
import { processMatching } from './utils/matching';

function App() {
  const [mentees, setMentees] = useState(null);
  const [mentors, setMentors] = useState(null);
  const [results, setResults] = useState(null);

  const handleUpload = () => {
    const matchingResults = processMatching(mentees, mentors);
    setResults(matchingResults);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Mentor-Mentee Matching</h1>
      <MenteeUpload setMentees={setMentees} />
      <MentorUpload setMentors={setMentors} />
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4"
        onClick={handleUpload}
      >
        Match
      </button>
      {results && <MatchingResults results={results} />}
    </div>
  );
}

export default App;
