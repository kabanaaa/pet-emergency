import React from 'react';
import { useState } from 'react';

const PrvniPomocBlok = (props) => {
  const [isOn, setIsOn] = useState(true);
  let zmenaTridy = !isOn ? 'div' : 'div div--schovat';
  return (
    <div className="nadpisyPrvniPomoc" onClick={() => setIsOn(!isOn)}>
      <h2>{props.nadpis}</h2>
      <div className={zmenaTridy}>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

/* <div className="nadpisyPrvniPomoc" onClick={() => setIsOn(!isOn)}>
<h2>{this.props.nadpis}</h2>
<div className={textClasses}>
{props.children}
</div>
</div> */

export default PrvniPomocBlok;
