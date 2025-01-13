import React, { useState, useEffect } from "react";
import "./Inicio.css";
import "font-awesome/css/font-awesome.min.css"; // Importar los iconos de FontAwesome

const Inicio = () => {
    const [isPlaying, setIsPlaying] = useState(false); // Estado para el reproductor
    const [locutorActual, setLocutorActual] = useState(null); // Estado para el locutor actual
    const [programaActual, setProgramaActual] = useState(""); // Estado para el programa actual

    // Lista de locutores y programas según horario
    const locutores = [
        { dia: "lunes", hora: 9, nombre: "Oscar Almiron", programa: "Mañanas con Oscar", foto: "./oscar.jpg" },
        { dia: "lunes", hora: 18, nombre: "Lautaro", programa: "La Tarde de Lauty", foto: "./oscar.jpg" },
        { dia: "miercoles", hora: 18, nombre: "Lautaro", programa: "La Tarde de Lauty", foto: "/locutor2.jpg" },
        { dia: "martes", hora: 18, nombre: "Gilda Pietro", programa: "Tiempo Real", foto: "./gildapietro.jpg" },
        { dia: "viernes", hora: 18, nombre: "Carla Gómez", programa: "Almuerzo Radiante", foto: "/carla.jpg" },
        { dia: "viernes", hora: 18, nombre: "Lauty", programa: "La Tarde de Lauty", foto: "/carla.jpg" },



    ];


    // Función para obtener el locutor y programa según la hora actual
    const obtenerLocutorActual = () => {
        const ahora = new Date();
        const diaActual = ahora.toLocaleString("es-ES", { weekday: "long" }).toLowerCase();
        const horaActual = ahora.getHours();

        // Filtra locutores del día actual y selecciona el correspondiente a la hora
        const locutor = locutores
            .filter((l) => l.dia === diaActual)
            .find(
                (l, index, arr) =>
                    horaActual >= l.hora &&
                    (index === arr.length - 1 || horaActual < arr[index + 1].hora)
            );

        return locutor || { nombre: "Locutor Desconocido", programa: "Sin Programa", foto: "/default.jpg" };
    };


    // Actualiza el locutor y programa actuales
    useEffect(() => {
        const locutor = obtenerLocutorActual();
        setLocutorActual(locutor);
        setProgramaActual(locutor.programa);

        const intervalo = setInterval(() => {
            const locutor = obtenerLocutorActual();
            setLocutorActual(locutor);
            setProgramaActual(locutor.programa);
        }, 60 * 60 * 1000); // Actualiza cada hora

        return () => clearInterval(intervalo); // Limpia el intervalo al desmontar
    }, []);

    const handleClick = () => {
        setIsPlaying(true); // Mostrar el reproductor al hacer clic
    };

    return (
        <div className="inicio-container">
            <div className="overlay"></div> {/* Superposición para el degradado */}
            <div className="content">
                <div className="text-container">
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
                <p>© 2025 FM Popular. Desarollado por Ulises Acuña.</p>
            </footer>
        </div>
    );
};

export default Inicio;
