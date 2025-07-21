
/*
import React, { useState } from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  // Estilos para el contenedor del menú
`;

const BotonHamburguesa = styled.button`
  // Estilos para el botón de hamburguesa
`;

const MenuDesplegableContenedor = styled.div`
  //Estilos para el menú desplegable
`;

const MenuHamburguesa = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <MenuContainer>
      <BotonHamburguesa onClick={toggleMenu}>
        {Icono de hamburguesa (puedes usar un SVG o una imagen)}
        {menuAbierto ? 'X' : '☰'}
      </BotonHamburguesa>
      {menuAbierto && (
        <MenuDesplegableContenedor>
          {''}
          <ul>
            <li>Inicio</li>
            <li>Reglas</li>
            <li>Corredores</li>
            <li>Listas</li>
            <li>Resultados</li>
          </ul>
        </MenuDesplegableContenedor>
      )}
    </MenuContainer>
  );
};

export default MenuHamburguesa;

*/




function Home() {
    return (
        <>
        <nav>
        <h1>La porra del Monte</h1>
        <a href="registrarme">Registrarme</a>
        <a href="inicio_secion">Iniciar sesion</a>
        </nav>
        </>
    )
}

export default Home

