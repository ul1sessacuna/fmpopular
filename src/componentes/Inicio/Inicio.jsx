import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Inicio.css";
import "font-awesome/css/font-awesome.min.css";

const LOCUTOR_DEFAULT = { nombre: "Sin Locutor", programa: "Programacion Habitual", foto: "./fm.jpg" };

const Inicio = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [locutorActual, setLocutorActual] = useState(null);
    const [programaActual, setProgramaActual] = useState("");
    const [currentAdIndex, setCurrentAdIndex] = useState(0);

    // Lista de locutores ordenada por día y hora
    const locutores = [
        // Lunes
        { dia: "lunes", horaInicio: 9, horaFin: 12, nombre: "Oscar Almiron",       programa: "Lo Mas Escuchado",               foto: "./oscar.jpg" },
        { dia: "lunes", horaInicio: 12, horaFin: 16, nombre: "Sin Locutor",         programa: "Programacion Habitual",          foto: "./fm.jpg" },
        { dia: "lunes", horaInicio: 16, horaFin: 18, nombre: "Eva Zapata",          programa: "Abriendo Tranqueras",            foto: "./eva.jpg" },
        { dia: "lunes", horaInicio: 18, horaFin: 24, nombre: "Sin Locutor",         programa: "Programacion Habitual",          foto: "./fm.jpg" },

        // Martes
        { dia: "martes", horaInicio: 9, horaFin: 12, nombre: "Oscar Almiron",       programa: "Lo Mas Escuchado",              foto: "./oscar.jpg" },
        { dia: "martes", horaInicio: 12, horaFin: 16, nombre: "Sin Locutor",         programa: "Programacion Habitual",         foto: "./fm.jpg" },
        { dia: "martes", horaInicio: 16, horaFin: 18, nombre: "Eva Zapata",          programa: "Abriendo Tranqueras",           foto: "./eva.jpg" },
        { dia: "martes", horaInicio: 16, horaFin: 18, nombre: "Gilda Prieto",        programa: "Tiempo Real",                   foto: "./gildapietro.jpg" },

        // Miércoles
        { dia: "miércoles", horaInicio: 9, horaFin: 12, nombre: "Oscar Almiron",    programa: "Lo Mas Escuchado",              foto: "./oscar.jpg" },
        { dia: "miércoles", horaInicio: 12, horaFin: 16, nombre: "Sin Locutor",      programa: "Programacion Habitual",         foto: "./fm.jpg" },
        { dia: "miércoles", horaInicio: 16, horaFin: 18, nombre: "Eva Zapata",       programa: "Abriendo Tranqueras",           foto: "./eva.jpg" },
        { dia: "miércoles", horaInicio: 18, horaFin: 24, nombre: "Sin Locutor",      programa: "Programacion Habitual",         foto: "./fm.jpg" },

        // Jueves
        { dia: "jueves", horaInicio: 9, horaFin: 12, nombre: "Oscar Almiron",        programa: "Lo Mas Escuchado",             foto: "./oscar.jpg" },
        { dia: "jueves", horaInicio: 12, horaFin: 16, nombre: "Sin Locutor",          programa: "Programacion Habitual",        foto: "./fm.jpg" },
        { dia: "jueves", horaInicio: 16, horaFin: 18, nombre: "Eva Zapata",           programa: "Abriendo Tranqueras",          foto: "./eva.jpg" },

        // Viernes
        { dia: "viernes", horaInicio: 8, horaFin: 12, nombre: "Oscar Almiron",       programa: "Lo Mas Escuchado",             foto: "./oscar.jpg" },
        { dia: "viernes", horaInicio: 11,  horaFin: 13, nombre: "Ariel Brollo",       programa: "A Puro Folklore",              foto: "./ariel1.jpg" },
        { dia: "viernes", horaInicio: 13, horaFin: 16, nombre: "Sin Locutor",         programa: "Programacion Habitual",        foto: "./fm.jpg" },
        { dia: "viernes", horaInicio: 16, horaFin: 20, nombre: "Eva Zapata",          programa: "Abriendo Tranqueras",          foto: "./eva.jpg" },
        { dia: "viernes", horaInicio: 20, horaFin: 24, nombre: "Sin Locutor",         programa: "Programacion Habitual",        foto: "./fm.jpg" },

        // Sábado
        { dia: "sábado", horaInicio: 9,  horaFin: 12, nombre: "Abel Fernandez",      programa: "Popularisimo",                 foto: "./pelusa.jpg" },
        { dia: "sábado", horaInicio: 12, horaFin: 17, nombre: "Ismael Torres",        programa: "Sobremesa Chamamecera",        foto: "./fm.jpg" },
        { dia: "sábado", horaInicio: 17, horaFin: 24, nombre: "Iglesia Evangelica",   programa: "Iglesia Asamblea de Dios",    foto: "./iglesia.jpg" },

        // Domingo
        { dia: "domingo", horaInicio: 11, horaFin: 24, nombre: "Sin Locutor",         programa: "Programacion Habitual",        foto: "./fm.jpg" },
    ];

    // Publicidades
    const publicidades = [
        { src: "./publcita.png", alt: "Publicidad 1" },
        { src: "./japones.png",  alt: "Publicidad 2" },
        { src: "./hobby.png",    alt: "Publicidad 3" },
        { src: "./norma.png",    alt: "Publicidad 4" },
    ];

    // Función corregida: busca el bloque horario donde cae la hora actual
    const obtenerLocutorActual = () => {
        const ahora = new Date();
        const diaActual = ahora.toLocaleString("es-ES", { weekday: "long" }).toLowerCase();
        const horaActual = ahora.getHours();

        const locutor = locutores.find(
            (l) => l.dia === diaActual && horaActual >= l.horaInicio && horaActual < l.horaFin
        );

        return locutor || LOCUTOR_DEFAULT;
    };

    useEffect(() => {
        const actualizarLocutor = () => {
            const locutor = obtenerLocutorActual();
            setLocutorActual((prev) => (prev?.nombre !== locutor.nombre ? locutor : prev));
            setProgramaActual((prev) => (prev !== locutor.programa ? locutor.programa : prev));
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

    const handleClick = () => setIsPlaying(true);

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

                {/* Publicidades */}
                <div className="ads-container">
                    <img
                        src={publicidades[currentAdIndex].src}
                        alt={publicidades[currentAdIndex].alt}
                        className="ads-image"
                    />
                </div>

                {/* Información del locutor */}
                {locutorActual && (
                    <div className="locutor-container">
                        <div className="locutor-foto-container">
                            <span className="en-vivo">EN VIVO</span>
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

                {/* Redes sociales */}
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