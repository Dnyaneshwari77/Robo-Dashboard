import React from 'react';

export default function SummaryInfo({ icon, text, digit, last = false }) {
  return (
    <div className={`summaryElement ${last ? 'last' : ''}`}>
      <span>{icon}</span>
      <h3>{text}</h3>
      <p>{digit}</p>
    </div>
  );
}
