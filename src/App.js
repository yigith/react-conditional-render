import { useState } from 'react';
import './App.css';
import Listele from './Listele';
import resim from './resim.png';

function App() {
  const mevsimler = ["İlkbahar", "Yaz", "Sonbahar", "Kış"];
  const ulkeler = [];
  const [goster, setGoster] = useState(false);

  return (
    <div className="App">
      <h2>Mevsimler</h2>
      <Listele ogeler={mevsimler} />
      <h2>Bu Yaz Gezeceğim Ülkeler</h2>
      <Listele ogeler={ulkeler} />

      <input type="checkbox" checked={goster} onChange={(e) => setGoster(e.target.checked)} /> Aşağıdaki resmi göster
      <div>
        {goster && <img src={resim} width="300" />}
      </div>
    </div>
  );
}

export default App;
