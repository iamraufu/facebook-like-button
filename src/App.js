import './App.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useState } from 'react';
function App() {
  const [likeColor, setLikeColor] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <ThumbUpAltIcon onClick={() => {
          const color = likeColor ? '' : 'primary'
          setLikeColor(color)
        }} color={likeColor}></ThumbUpAltIcon>
      </header>
    </div>
  );
}

export default App;
