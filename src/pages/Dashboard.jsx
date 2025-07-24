import { useState } from 'react';

const Dashboard = () => {
  const [showBases, setShowBases] = useState(false);
  const [showEtapas, setShowEtapas] = useState(false);
  const [showCorredores, setShowCorredores] = useState(false);

  return (
    <div>
      <nav>
        <button onClick={() => setShowBases(prev => !prev)}>Bases y condiciones</button>
        <button onClick={() => setShowEtapas(prev => !prev)}>Etapas</button>
        <button onClick={() => setShowCorredores(prev => !prev)}>Corredores</button>
      </nav>

      {showBases && (
        <section id="bases">
          {/* contenido bases */}
        </section>
      )}
      {showEtapas && (
        <section id="etapas">
          {/* contenido etapas */}
        </section>
      )}
      {showCorredores && (
        <section id="corredores">
          {/* contenido corredores */}
        </section>
      )}
    </div>
  );
};

export default Dashboard