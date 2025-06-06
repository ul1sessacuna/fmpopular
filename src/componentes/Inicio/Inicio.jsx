import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Inicio.css";
import "font-awesome/css/font-awesome.min.css";

const Inicio = () => {
    const [isPlaying, setIsPlaying] = useState(false); // Estado para el reproductor
    const [locutorActual, setLocutorActual] = useState(null); // Estado para el locutor actual
    const [programaActual, setProgramaActual] = useState(""); // Estado para el programa actual
    const [currentAdIndex, setCurrentAdIndex] = useState(0); // Estado para el índice de la publicidad actual

    // Lista de locutores y programas según horario
    const locutores = [
        { dia: "lunes", hora: 8, nombre: "Dani Leiva", programa: "EL Fieston, A Pura Fiesta", foto: "./dani.jpg" },

        { dia: "lunes", hora: 10, nombre: "Oscar Almiron", programa: "Lo Mas Escuchado", foto: "./oscar.jpg" },
        { dia: "martes", hora: 8, nombre: "Dani Leiva", programa: "EL Fieston, A Pura Fiesta", foto: "./dani.jpg" },
        { dia: "martes", hora: 10, nombre: "Oscar Almiron", programa: "Lo Mas Escuchado", foto: "./oscar.jpg" },
        { dia: "martes", hora: 12, nombre: "Sin Locutor", programa: "Programacion Habitual", foto: "./fm.jpg" },
        { dia: "martes", hora: 16, nombre: "Gilda Prieto", programa: "Tiempo Real", foto: "./gildapietro.jpg" },
        { dia: "miércoles", hora: 8, nombre: "Dani Leiva", programa: "EL Fieston, A Pura Fiesta", foto: "./dani.jpg" },
        { dia: "miércoles", hora: 10, nombre: "Oscar Almiron", programa: "Lo Mas Escuchado", foto: "./oscar.jpg" },
        { dia: "jueves", hora: 8, nombre: "Dani Leiva", programa: "EL Fieston, A Pura Fiesta", foto: "./dani.jpg" },
        { dia: "jueves", hora: 10, nombre: "Oscar Almiron", programa: "Lo Mas Escuchado", foto: "./oscar.jpg" },
        { dia: "jueves", hora: 12, nombre: "Sin Locutor", programa: "Programacion Habitual", foto: "./fm.jpg" },
        { dia: "jueves", hora: 16, nombre: "Gilda Prieto", programa: "Tiempo Real", foto: "./gildapietro.jpg" },
        { dia: "viernes", hora: 10, nombre: "Oscar Almiron", programa: "Lo Mas Escuchado", foto: "./oscar.jpg" },
        { dia: "lunes", hora: 12, nombre: "Sin Locutor", programa: "Programacion Habitual", foto: "./fm.jpg" },
        { dia: "viernes", hora: 8, nombre: "Dani Leiva", programa: "EL Fieston, A Pura Fiesta", foto: "./dani.jpg" },
        { dia: "miércoles", hora: 12, nombre: "Sin Locutor", programa: "Programacion Habitual", foto: "./fm.jpg" },
        { dia: "viernes", hora: 12, nombre: "Sin Locutor", programa: "Programacion Habitual", foto: "./fm.jpg" },
        { dia: "lunes", hora: 18, nombre: "Sin Locutor", programa: "Programacion Habitual", foto: "./fm.jpg" },
        { dia: "martes", hora: 16, nombre: "Eva Zapata", programa: "Especiales Retorno Eventos", foto: "./eva.jpg" },
        { dia: "viernes", hora: 20, nombre: "Sin Locutor", programa: "Programacion habitual", foto: "./fm.jpg" },
        { dia: "miércoles", hora: 18, nombre: "Sin Locutor", programa: "Programacion Habitual", foto: "./fm.jpg" },
        { dia: "sábado", hora: 9, nombre: "Abel Fernandez", programa: "Popularisimo", foto: "./pelusa.jpg" },
        { dia: "sábado", hora: 12, nombre: "Ismael Torres", programa: "Sobremesa Chamamecera", foto: "./fm.jpg" },
        { dia: "sábado", hora: 17, nombre: "Iglesia Evangelica", programa: "Iglesia Asamblea de Dios", foto: "./iglesia.jpg" },
        { dia: "domingo", hora: 9, nombre: "Ariel Brollo", programa: "A Puro Folklore", foto: "./ariel1.jpg" },
        { dia: "domingo", hora: 11, nombre: "Sin Locutor", programa: "Programacion habitual", foto: "./fm.jpg" },

    ];

    // Publicidades
    const publicidades = [
        { src: "./publcita.png", alt: "Publicidad 1" },
        { src: "./japo.jpg", alt: "Publicidad 2" },
        { src: "./hobby.png", alt: "Publicidad 3" },
        { src: "./norma.png", alt: "Publicidad 4" },

    ];

    // Función para obtener el locutor actual
    const obtenerLocutorActual = () => {
        const ahora = new Date();
        const diaActual = ahora.toLocaleString("es-ES", { weekday: "long" }).toLowerCase();
        console.log("Día actual:", diaActual); // Verificar día
        const horaActual = ahora.getHours();

        const locutor = locutores
            .filter((l) => l.dia === diaActual)
            .find(
                (l, index, arr) =>
                    horaActual >= l.hora &&
                    (index === arr.length - 1 || horaActual < arr[index + 1].hora)
            );

        return locutor || { nombre: "Programacion", programa: "Sin Programa", foto: "/fm.jpg" };
    };

    useEffect(() => {
        const actualizarLocutor = () => {
            const locutor = obtenerLocutorActual();
            setLocutorActual((prevLocutor) => {
                // Solo actualiza si el locutor cambió para evitar renders innecesarios
                return prevLocutor?.nombre !== locutor.nombre ? locutor : prevLocutor;
            });
            setProgramaActual((prevPrograma) => {
                return prevPrograma !== locutor.programa ? locutor.programa : prevPrograma;
            });
        };

        actualizarLocutor(); // Llamado inicial

        const intervalo = setInterval(() => {
            actualizarLocutor();
        }, 60000); // Verifica cada minuto

        return () => clearInterval(intervalo);
    }, []);

    // Publicidades
    useEffect(() => {
        const intervaloPublicidad = setInterval(() => {
            setCurrentAdIndex((prevIndex) => (prevIndex + 1) % publicidades.length);
        }, 20000);

        return () => clearInterval(intervaloPublicidad);
    }, [publicidades.length]);

    const handleClick = () => {
        setIsPlaying(true);
    };

    return (
        <div className="inicio-container">
            <div className="overlay"></div>
            <div className="content">
                <div className="text-container">
                    <Link to="/inicio">
                        <img
                            src="/fmlogo.png"
                            alt="FM Popular Logo"
                            className="logo-animado"
                        />
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

                {/* Sección de redes sociales */}
                <div className="social-media-container">
                    <a
                        href="https://www.instagram.com/fm_popular92.5/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa fa-instagram fa-3x social-icon"></i>
                    </a>
                    <a
                        href="https://www.facebook.com/radiopopular.villaana.5?locale=es_LA"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
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
