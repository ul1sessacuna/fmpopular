// src/componentes/Programas/Programas.jsx
import React from 'react';
import './Programas.css';

const Programas = () => {
    const programas = [
        { dia: 'Lunes a Viernes', hora: '09:00 AM', nombre: 'Lo Mas Escuchado', conductor: 'Oscar Almiron', foto: '/oscar.jpg' },
        { dia: 'Lunes, Martes y Miercoles', hora: '16:00 AM', nombre: 'Especiales Retorno Eventos', conductor: 'Oscar Almiron', foto: '/oscar.jpg' },
        { dia: 'Sabado', hora: '08:00 AM', nombre: 'A Puro Folklore', conductor: 'Ariel Brollo', foto: '/ariel.jpg' },
        { dia: 'Sabado', hora: '14:00 PM', nombre: 'Sobremesa Chamamecera', conductor: 'Ismael Torres', foto: '/fm.jpg' },
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
