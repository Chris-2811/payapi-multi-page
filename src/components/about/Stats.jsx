import React from 'react';

function Stats() {
  return (
    <div className="myContainer">
      <div className="text-center md:text-left flex flex-col md:flex-row  gap-8 py-4 border-y-2 border-secondary-100/25">
        <div className="md:w-[223px]">
          <h4 className="text-secondary-100/70">Team Members</h4>
          <div className="text-[3.5rem] text-primary-100 font-serif leading-tight">
            300+
          </div>
        </div>
        <div className="md:w-[223px]">
          <h4 className="text-secondary-100/70">Team Members</h4>
          <div className="text-[3.5rem] text-primary-100 font-serif leading-tight">
            3
          </div>
        </div>
        <div className="md:w-[223px]">
          <h4 className="text-secondary-100/70">Team Members</h4>
          <div className="text-[3.5rem] text-primary-100 font-serif leading-tight">
            10M+
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
