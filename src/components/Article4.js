import React from 'react';


function Article4() {
  return (
    <>
     <h1>Kāds ir piemērs ar skaidrojumu?</h1>
<div class="wrapper2">
  <div>
      <h1>Piemērs: Tiešsaistes veikals</h1>

  <h2>Aktori:</h2>
  <ul>
      <li><strong>Klients</strong></li>
      <li><strong>Administrators</strong></li>
  </ul>

  <h2>Use Cases (Lietošanas gadījumi):</h2>
  <ul>
      <li><strong>Reģistrēties</strong></li>
      <li><strong>Pirkt produktu</strong></li>
      <li><strong>Pievienot produktu</strong></li>
      <li><strong>Rediģēt produktu</strong></li>
  </ul>

  <h2>Attiecības:</h2>
  <ul>
      <li><strong>Klients</strong> ir saistīts ar <strong>Reģistrēties</strong> un <strong>Pirkt produktu</strong>.</li>
      <li><strong>Administrators</strong> ir saistīts ar <strong>Pievienot produktu</strong> un <strong>Rediģēt produktu</strong>.</li>
      <li><strong>Pirkt produktu</strong> <em>iekļauj</em> (<strong>Include</strong>) <strong>Reģistrēties</strong>, ja klients vēl nav reģistrējies.</li>
  </ul>

  <h2>Diagrammas skaidrojums:</h2>
  <ul>
      <li><strong>Klients</strong> var reģistrēties un iegādāties produktus.</li>
      <li><strong>Administrators</strong> pārvalda produktu katalogu, pievienojot un rediģējot produktus.</li>
  </ul>
  </div>
  <div>
    <img src={require("../img/hihi-good.png")} style={{width: '100%', height: '60%'}} />
  </div>
</div>
</>
  );

  }

export default Article4;

