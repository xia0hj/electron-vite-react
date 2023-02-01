import { useState } from 'react'
import styles from './index.module.scss';

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

const App = ():JSX.Element => {

  // hooks
  const [path, setPath] = useState('');


  // event
  const onAdd = () => {

    window.nativeApi.add().then(({canceled, filePaths})=>{
      if(canceled || filePaths.length===0){
        return;
      }
      setPath(filePaths[0]);
    });
  }


  const onDevtools = () => window.nativeApi.openDevtools();

  const onWin32 = () => window.nativeApi.testWin32();


  // JSX
  return (
    <div className={styles.container}>
      <div>
        <button onClick={onAdd}>add</button>
        <button onClick={onDevtools}>devtools</button>
        <button onClick={onWin32}>win32</button>
      </div>
      <div className={styles['debug-output']}>
        <p>path: {path}</p>
      </div>
    </div>
  )
}

export default App;
