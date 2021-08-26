/**
 * @author: <sandeep className="gupta1@timesinternet.in
 * @desc: Test component with child routing example
 */

import React from "react";
import TLeft from './testpage/tleft';


export default function Testpage() {
  return (
      <div>
          This is Test page
          <div id="left3"><TLeft /></div>
      </div>
  );
}

