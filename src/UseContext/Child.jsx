import React, {useContext} from 'react';
import SuperChild from './SuperChild';
import { GlobalInfo } from '../UseContextApp';


export default function Child() {

  // const {appColor} = useContext(GlobalInfo);

  // console.log(appColor);

  return (
    <>
    <div>Child Component</div>

    <SuperChild/>

    </>
  )
}
