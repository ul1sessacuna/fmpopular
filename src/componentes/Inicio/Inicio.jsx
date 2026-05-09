import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Inicio.css";
import "font-awesome/css/font-awesome.min.css";

const LOCUTOR_DEFAULT = { 
    nombre: "Sin Locutor", 
    programa: "Programación Habitual", 
    foto: "./fm.jpg",
    online: false // Marcamos que por defecto no hay vivo
};

const Inicio = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [locutorActual, setLocutorActual] = useState(LOCUTOR_DEFAULT);
    const [programaActual, setProgramaActual] = useState(LOCUTOR_DEFAULT.programa);
    const [currentAdIndex, setCurrentAdIndex] = useState(0);

    const locutores = [
        { dia: "lunes", horaInicio: 9, horaFin: 12, nombre: "Oscar Almiron", programa: "Lo Mas Escuchado", foto: "./oscar.jpg" },
        { dia: "lunes", horaInicio: 12, horaFin: 16, nombre: "Sin Locutor", programa: "Programacion Habitual", foto: "./fm.jpg" },
        { dia: "lunes", horaInicio: 18, horaFin: 24, nombre: "Sin Locutor", programa: "Programacion Habitual", foto: "./fm.jpg" },
        { dia: "martes", horaInicio: 9, horaFin: 12, nombre: "Oscar Almiron", programa: "Lo Mas Escuchado", foto: "./oscar.jpg" },
        { dia: "martes", horaInicio: 16, horaFin: 18, nombre: "Gilda Prieto", programa: "Tiempo Real", foto: "./gildapietro.jpg" },
        { dia: "miércoles", horaInicio: 9, horaFin: 12, nombre: "Oscar Almiron", programa: "Lo Mas Escuchado", foto: "./oscar.jpg" },
        { dia: "jueves", horaInicio: 9, horaFin: 12, nombre: "Oscar Almiron", programa: "Lo Mas Escuchado", foto: "./oscar.jpg" },
        { dia: "viernes", horaInicio: 8, horaFin: 12, nombre: "Oscar Almiron", programa: "Lo Mas Escuchado", foto: "./oscar.jpg" },
        { dia: "sábado", horaInicio: 9, horaFin: 12, nombre: "Abel Fernandez", programa: "Popularisimo", foto: "./pelusa.jpg" },
        { dia: "sábado", horaInicio: 12, horaFin: 17, nombre: "Ismael Torres", programa: "Sobremesa Chamamecera", foto: "./fm.jpg" },
        { dia: "domingo", horaInicio: 8, horaFin: 10, nombre: "Ariel Brollo", programa: "A Puro Folklore", foto: "./ariel1.jpg" },
        { dia: "domingo", horaInicio: 10, horaFin: 12, nombre: "Iglesia Evangelica", programa: "Iglesia Asamblea de Dios", foto: "./iglesia.jpg" },
    ];

    const publicidades = [
        { src: "./publcita.png", alt: "Publicidad 1" },
        { src: "./japones.png", alt: "Publicidad 2" },
        { src: "./hobby.png", alt: "Publicidad 3" },
        { src: "./norma.png", alt: "Publicidad 4" },
    ];

    const obtenerLocutorActual = () => {
        const ahora = new Date();
        const diaActual = ahora.toLocaleString("es-ES", { weekday: "long" }).toLowerCase();
        const horaActual = ahora.getHours();

        const locutor = locutores.find(
            (l) => l.dia === diaActual && horaActual >= l.horaInicio && horaActual < l.horaFin
        );

        // Si encontramos un locutor y NO es "Sin Locutor", lo marcamos como online
        if (locutor && locutor.nombre !== "Sin Locutor") {
            return { ...locutor, online: true };
        }
        return LOCUTOR_DEFAULT;
    };

    useEffect(() => {
        const actualizarLocutor = () => {
            const locutor = obtenerLocutorActual();
            setLocutorActual(locutor);
            setProgramaActual(locutor.programa);
        };

        actualizarLocutor();
        const intervalo = setInterval(actualizarLocutor, 60000);
        return () => clearInterval(intervalo);
    }, []);

    useEffect(() => {
        const intervaloPublicidad = setInterval(() => {
            setCurrentAdIndex((prevIndex) => (prevIndex + 1) % publicidades.length);
        }, 20000);
        return () => clearInterval(intervaloPublicidad);
    }, [publicidades.length]);

    return (
        <div className="inicio-container">
            <div className="overlay"></div>
            <div className="content">
                <div className="text-container">
                    <Link to="/inicio">
                        <img src="/fmlogo.png" alt="FM Popular Logo" className="logo-animado" />
                    </Link>
                    <p>"Donde vive la música"</p>
                </div>

                {!isPlaying ? (
                    <div className="button-container">
                        <button className="play-button" onClick={() => setIsPlaying(true)}>
                            ESCUCHAR AHORA!
                        </button>
                    </div>
                ) : (
                    <div className="player-container">
                        {locutorActual.online ? (
                            <iframe
                                src="https://server6.hostradios.com/cp/widgets/player/single/?p=8648"
                                height="110"
                                width="100%"
                                scrolling="no"
                                style={{ border: "none" }}
                                title="Reproductor FM Popular"
                            ></iframe>
                        ) : (
                            <div className="offline-message">
                                <i className="fa fa-microphone-slash fa-2x"></i>
                                <h3>FM POPULAR FUERA DE AIRE</h3>
                                <p>Regresamos con nuestra programación en vivo a la brevedad.</p>
                            </div>
                        )}
                    </div>
                )}

                <div className="ads-container">
                    <img
                        src={publicidades[currentAdIndex].src}
                        alt={publicidades[currentAdIndex].alt}
                        className="ads-image"
                    />
                </div>

                {locutorActual && (
                    <div className="locutor-container">
                        <div className="locutor-foto-container">
                            {locutorActual.online && <span className="en-vivo">EN VIVO</span>}
                            <img
                                src={locutorActual.foto}
                                alt={locutorActual.nombre}
                                className="locutor-foto"
                            />
                        </div>
                        <h3 className="locutor-programa">{programaActual}</h3>
                        <h4 className="locutor-nombre">{locutorActual.nombre}</h4>
                    </div>
                )}

                <div className="social-media-container">
                    <a href="https://www.instagram.com/fm_popular92.5/" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram fa-3x social-icon"></i>
                    </a>
                    <a href="https://www.facebook.com/radiopopular.villaana.5?locale=es_LA" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook fa-3x social-icon"></i>
                    </a>
                </div>
            </div>
            <footer className="footer">
                <p>© 2025 FM Popular. Desarrollado por <a href="https://www.instagram.com/ulisessacuna/">Ulises Acuña</a></p>
            </footer>
        </div>
    );
};

export default Inicio;