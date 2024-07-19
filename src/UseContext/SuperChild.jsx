import React, {useContext} from 'react';

import { GlobalInfo } from '../UseContextApp';

export default function SuperChild() {

    // Step 7 : uss Function ko "getDay" import karenge SuperChild me  

    const {data, getDay} = useContext(GlobalInfo);
    const day = "Sunday";

    
  return (
    <>
     {/* Step 8 : Day variable data ko button ke through getDay function ko pass karenge */}
     
    <div>SuperChild Component {data}</div>
    <button onClick={()=>getDay(day)}>Click me</button>
    </>
  )
}
