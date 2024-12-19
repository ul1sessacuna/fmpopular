import React, { useEffect, useState } from 'react';
import './Noticia.css';

const Noticias = () => {
    const [noticias, setNoticias] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const fetchNoticias = async () => {
            try {
                const response = await fetch(
                    'https://newsapi.org/v2/top-headlines?country=us&apiKey=135c931cfcab4ad7b2fc15104dc1f884'
                );
                const data = await response.json();

                // Verificar si 'articles' existe y es un arreglo
                if (Array.isArray(data.articles)) {
                    setNoticias(data.articles);
                } else {
                    console.error('Datos de noticias no válidos');
                    setNoticias([]);
                }

                setCargando(false);
            } catch (error) {
                console.error('Error al obtener las noticias:', error);
                setCargando(false);
            }
        };

        fetchNoticias();
    }, []);

    if (cargando) {
        return <div className="cargando">Cargando noticias...</div>;
    }

    if (!noticias || noticias.length === 0) {
        return <div className="sin-noticias">No hay noticias disponibles.</div>;
    }

    return (
        <div className="noticias-container">
            <h2>Últimas Noticias</h2>
            <div className="noticias-lista">
                {noticias.map((noticia, index) => (
                    <div className="noticia-card" key={index}>
                        {/* Mostrar imagen solo si existe */}
                        {noticia.urlToImage ? (
                            <img
                                src={noticia.urlToImage}
                                alt={noticia.title}
                                className="noticia-image"
                            />
                        ) : (
                            <div className="noticia-image-placeholder">
                                <p>Sin imagen disponible</p>
                            </div>
                        )}
                        <div className="noticia-info">
                            <h3>{noticia.title}</h3>
                            <p>{noticia.description || 'Sin descripción disponible.'}</p>
                            <a href={noticia.url} target="_blank" rel="noopener noreferrer">
                                Leer más
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Noticias;
