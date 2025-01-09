import React, { useState, useEffect } from "react";
import "./Inicio.css";
import "font-awesome/css/font-awesome.min.css"; // Importar los iconos de FontAwesome

const Inicio = () => {
    const [isPlaying, setIsPlaying] = useState(false); // Estado para el reproductor
    const [locutorActual, setLocutorActual] = useState(null); // Estado para el locutor actual

    // Lista de locutores según horario
    const locutores = [
        { hora: 0, nombre: "Locutor Nocturno", foto: "https://concepto.de/wp-content/uploads/2018/08/persona-e1533759195177-800x400.jpg" },
        { hora: 6, nombre: "Locutor Matutino", foto: "/locutor2.jpg" },
        { hora: 12, nombre: "Locutor del Mediodía", foto: "https://media.istockphoto.com/id/1090878494/es/foto/retrato-de-joven-sonriente-a-hombre-guapo-en-camiseta-polo-azul-aislado-sobre-fondo-gris-de.jpg?s=612x612&w=0&k=20&c=dHFsDEJSZ1kuSO4wTDAEaGOJEF-HuToZ6Gt-E2odc6U=" },
        { hora: 17, nombre: "Locutor Vespertino", foto: "https://concepto.de/wp-content/uploads/2018/08/persona-e1533759195177-800x400.jpg" },
        { hora: 22, nombre: "Locutor Nocturno 2", foto: "/locutor5.jpg" },
    ];

    // Función para obtener el locutor según la hora actual
    const obtenerLocutorActual = () => {
        const ahora = new Date();
        const horaActual = ahora.getHours();

        // Encuentra el locutor correspondiente
        const locutor = locutores.find(
            (l, index) =>
                horaActual >= l.hora &&
                (index === locutores.length - 1 || horaActual < locutores[index + 1].hora)
        );

        return locutor || { nombre: "Locutor Desconocido", foto: "/default.jpg" };
    };

    // Actualiza el locutor actual al cargar y cada hora
    useEffect(() => {
        setLocutorActual(obtenerLocutorActual());

        const intervalo = setInterval(() => {
            setLocutorActual(obtenerLocutorActual());
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
                    {/* Logo con animación */}
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
                        <img
                            src={locutorActual.foto}
                            alt={locutorActual.nombre}
                            className="locutor-foto"
                        />
                        <h3 className="locutor-nombre">{locutorActual.nombre}</h3>
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
        </div>
    );
};

export default Inicio;
