// src/componentes/Programas/Programas.jsx
import React from 'react';
import './Programas.css';

const Programas = () => {
    const programas = [
        { dia: 'Lunes a Viernes', hora: '09:00 AM', nombre: 'El Fieston', conductor: 'Dani Leiva', foto: '/danileiva.jpg' },
        { dia: 'Lunes a Viernes', hora: '09:00 AM', nombre: 'Lo Mas Escuchado', conductor: 'Oscar Almiron', foto: '/oscar.jpg' },
        { dia: 'Martes', hora: '16:00 AM', nombre: 'Especiales Retorno Eventos', conductor: 'Eva Zapata', foto: '/evazapata.jpg' },
        { dia: 'Sabado', hora: '09:00 AM', nombre: 'Popularisimo', conductor: 'Abel Fernandez', foto: '/pelusa.jpg' },
        { dia: 'Martes, Jueves', hora: '16:00 PM', nombre: 'Tiempo Real', conductor: 'Gilda Prieto', foto: '/gilda1.jpg' },
        { dia: 'Sabado', hora: '17:00 PM', nombre: 'Iglesia Asamblea de Dios', conductor: 'Integrantes', foto: '/iglesia.jpg' },
        { dia: 'Lunes a Viernes', hora: '20:00 PM', nombre: 'Ayer Nomás', conductor: 'Marcelo Prado Lima', foto: '/ayernomas.jpg' },

        { dia: 'Domingo', hora: '09:00 AM', nombre: 'A Puro Folklore', conductor: 'Ariel Brollo', foto: '/ariel1.jpg' },
        { dia: 'Sabado', hora: '12:00 PM', nombre: 'Sobremesa Chamamecera', conductor: 'Ismael Torres', foto: '/ismael.jpg' },
    ];

    return (
        <div className="programas-container">
            <h2 className="text-center text-white mb-4">Programación Habitual</h2>
            <div className="programas-grid">
                {programas.map((programa, index) => (
                    <div key={index} className="programa-item">
                        <div className="foto-wrapper">
                            <img src={programa.foto} alt={programa.nombre} className="foto-circular" />
                        </div>
                        <div className="programa-info">
                            <h3 className="nombre-programa">{programa.nombre}</h3>
                            <p className="programa-dia-hora">{`${programa.dia}, ${programa.hora}`}</p>
                            <p className="programa-conductor">{`Conducido por ${programa.conductor}`}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Programas;
