import './App.css';
import Lottie from 'react-lottie';
import { useState } from 'react';
import animationData from './animation.json';

function App() {
  const [isLiked, setLikeState] = useState(false);
  const [animationState, setAnimationState] = useState({
    isStopped: true, isPaused: false,
    direction: -1,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="App">
      <button onClick={() => {
        const reverseAnimation = -1;
        const normalAnimation = 1;

        setAnimationState({
          ...animationState,
          isStopped: false,
          direction: animationState.direction === normalAnimation
            ? reverseAnimation
            : normalAnimation,
        })
        setLikeState(!isLiked);
      }} style={{ 'backgroundColor': 'transparent', 'border': '0 none' }}>
        <Lottie
          options={defaultOptions}
          width={400}
          height={400}
          direction={animationState.direction}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused} />

      </button>
    </div>
  );
}

export default App;
