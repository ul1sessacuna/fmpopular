import React, { useEffect, useState } from 'react';
import './Artistas.css';

const Artistas = () => {
    const artistas = [
        { id: 1, nombre: 'Los Forasteros', foto: 'forasteros.avif' },
        { id: 2, nombre: 'Angeles Romanticos', foto: 'angeles.jpg' },
        { id: 3, nombre: 'Angel Piciochi', foto: 'angelpiciochi.jpg' },
        { id: 4, nombre: 'Dario Sandrigo', foto: 'sandrigo.jpg' },
        { id: 5, nombre: 'El Gringo Ayunes', foto: 'ayunes.jpg' },
        { id: 5, nombre: 'La Cubana', foto: 'lacubana.PNG' },


    ];

    // Estado para la cuenta regresiva
    const [countdown, setCountdown] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const targetDate = new Date('2025-02-15T00:00:00');
            const now = new Date();
            const timeDiff = targetDate - now;

            if (timeDiff <= 0) {
                clearInterval(interval); // Detener el intervalo cuando llegue a cero
                setCountdown('¡Es el día!');
            } else {
                const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

                setCountdown(`${days} Dias | ${hours} Horas | ${minutes} Minutos | ${seconds} Segundos `);
            }
        }, 1000);

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    }, []);

    return (
        <div className="artistas-container">
            {/* Contenedor para el logo y el countdown */}
            <div className="header-container">
                <img src="quebrecho.png" alt="Logo de la radio" className="logo" />
                <div className="countdown">{countdown}</div>
            </div>

            {/* Contenedor para las cards */}
            <div className="cards-container">
                {artistas.map((artista) => (
                    <div className="artista-card" key={artista.id}>
                        <img src={artista.foto} alt={artista.nombre} />
                        <h3>{artista.nombre}</h3>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Artistas;
