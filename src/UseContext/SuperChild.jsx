import React, {useContext} from 'react';

import { GlobalInfo } from '../UseContextApp';

export default function SuperChild() {
    const {data} = useContext(GlobalInfo);

    
  return (
    <div>SuperChild Component {data}</div>
  )
}
