// src/componentes/Programas/Programas.jsx
import React from 'react';
import './Programas.css'; // Archivo CSS actualizado

const Programas = () => {
    const programas = [
        { dia: 'Lunes', hora: '09:00 AM', nombre: 'Mañanas con Sol', conductor: 'Juan Pérez', foto: 'https://concepto.de/wp-content/uploads/2018/08/persona-e1533759195177-800x400.jpg' },
        { dia: 'Martes', hora: '10:00 AM', nombre: 'Ritmo Urbano', conductor: 'Ana López', foto: '/ruta-a-la-foto2.jpg' },
        { dia: 'Miércoles', hora: '11:00 AM', nombre: 'Rock & Talk', conductor: 'Carlos Sánchez', foto: '/ruta-a-la-foto3.jpg' },
        { dia: 'Jueves', hora: '01:00 PM', nombre: 'Clásicos del Ayer', conductor: 'Laura Gómez', foto: '/ruta-a-la-foto4.jpg' },
        { dia: 'Viernes', hora: '03:00 PM', nombre: 'Hits del Momento', conductor: 'Pedro Torres', foto: '/ruta-a-la-foto5.jpg' },
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
