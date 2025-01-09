import React, { useState } from 'react';
import './Candidatos.css';

const Candidato = ({ foto, nombre, lista }) => {
    const [mostrarLista, setMostrarLista] = useState(false);

    const toggleLista = () => {
        setMostrarLista(!mostrarLista);
    };

    return (
        <div className="card">
            <div className="card-content">
                <h2 className="card-name">{nombre}</h2>
                <p className="card-info">
                    Candidato con ideas innovadoras para mejorar la sociedad.
                </p>
                <button className="card-button" onClick={toggleLista}>
                    {mostrarLista ? 'Ocultar información' : 'Más información'}
                </button>
                {mostrarLista && (
                    <ul className="card-list">
                        {lista.map((item, index) => (
                            <li key={index} className="card-list-item">
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <img
                src={foto}
                alt={`Foto de ${nombre}`}
                className="card-image"
            />
        </div>
    );
};

const Candidatos = () => {
    const candidatos = [
        {
            foto: 'https://media.istockphoto.com/id/1090878494/es/foto/retrato-de-joven-sonriente-a-hombre-guapo-en-camiseta-polo-azul-aislado-sobre-fondo-gris-de.jpg?s=612x612&w=0&k=20&c=dHFsDEJSZ1kuSO4wTDAEaGOJEF-HuToZ6Gt-E2odc6U=',
            nombre: 'Jose Acuña',
            lista: ['Propuesta 1', 'Propuesta 2', 'Propuesta 3'],
        },
        {
            foto: 'https://media.istockphoto.com/id/1090878494/es/foto/retrato-de-joven-sonriente-a-hombre-guapo-en-camiseta-polo-azul-aislado-sobre-fondo-gris-de.jpg?s=612x612&w=0&k=20&c=dHFsDEJSZ1kuSO4wTDAEaGOJEF-HuToZ6Gt-E2odc6U=',
            nombre: 'Candidato 2',
            lista: ['Propuesta A', 'Propuesta B', 'Propuesta C'],
        },
    ];

    return (
        <div className="container">
            <h1 className="title">Lista de Candidatos</h1>
            {candidatos.map((candidato, index) => (
                <Candidato
                    key={index}
                    foto={candidato.foto}
                    nombre={candidato.nombre}
                    lista={candidato.lista}
                />
            ))}
        </div>
    );
};

export default Candidatos;
