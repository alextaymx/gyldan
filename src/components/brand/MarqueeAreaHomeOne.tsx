import React from 'react';

const MarqueeAreaHomeOne = () => {
  const movingCharacters = `Grandeur Coliving | Gyldan Properties |`;
  return (
    <>
      <div className="cs_moving_section_wrap cs_bold">
        <div className="cs_moving_section_in">
          <div className="cs_moving_section cs_stroke_text">{movingCharacters}</div>
          <div className="cs_moving_section cs_stroke_text">{movingCharacters}</div>
        </div>
      </div>
      <div className="cs_height_130 cs_height_lg_60"></div>
    </>
  );
};

export default MarqueeAreaHomeOne;
