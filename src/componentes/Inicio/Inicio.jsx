import React, { useState } from 'react';
import './Inicio.css';
import 'font-awesome/css/font-awesome.min.css'; // Importar los iconos de FontAwesome

const Inicio = () => {
    const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar la visibilidad del reproductor

    const handleClick = () => {
        setIsPlaying(true); // Mostrar el reproductor al hacer clic en el botón
    };

    return (
        <div className="inicio-container">
            <div className="overlay"></div> {/* Superposición para el degradado */}
            <div className="content">
                <div className="text-container">
                    {/* Cambiar texto por el logo con animación */}
                    <img
                        src="/fmlogo.png" // Reemplaza con la ruta de tu logo
                        alt="FM Popular Logo"
                        className="logo-animado"
                    />
                    <p>"Donde vive la música"</p>
                </div>

                {!isPlaying ? (
                    <div className="button-container">
                        <button className="play-button" onClick={handleClick}>
                            ESCUCHAR AHORA!
                        </button>
                    </div>
                ) : (
                    <div className="player-container">
                        <iframe
                            src="https://server6.hostradios.com/cp/widgets/player/single/?p=8648"
                            height="110"
                            width="100%"
                            scrolling="no"
                            style={{ border: "none" }}
                            title="Reproductor FM Popular"
                        ></iframe>
                    </div>
                )}

                {/* Sección de redes sociales */}
                <div className="social-media-container">
                    <a href="https://www.instagram.com/fm_popular92.5/" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram fa-3x social-icon"></i>
                    </a>
                    <a href="https://www.facebook.com/radiopopular.villaana.5?locale=es_LA" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook fa-3x social-icon"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Inicio;
