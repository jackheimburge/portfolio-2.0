import { Html, useProgress } from '@react-three/drei';
import '../index.css';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className='canvas-loader'></span>
      <p className='loading-text'>{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader