// src/componentes/Programas/Programas.jsx
import React, { useState } from 'react';
import './Programas.css';

const Programas = () => {
    const [filtro, setFiltro] = useState('Todos');

    const programas = [
        {
            nombre: 'Lo Más Escuchado',
            conductor: 'Oscar Almiron',
            foto: '/oscar.jpg',
            diasLabel: 'Lunes a Viernes',
            hora: '09:00',
            categoria: 'Semana',
            color: '#1E90FF',
        },
        {
            nombre: 'Abriendo Tranqueras',
            conductor: 'Eva Zapata',
            foto: '/eva.jpg',
            diasLabel: 'Lunes a Viernes',
            hora: '16:00',
            categoria: 'Semana',
            color: '#00BFFF',
        },
        {
            nombre: 'Tiempo Real',
            conductor: 'Gilda Prieto',
            foto: '/gildapietro.jpg',
            diasLabel: 'Martes y Jueves',
            hora: '18:00',
            categoria: 'Semana',
            color: '#4169E1',
        },
        {
            nombre: 'A Puro Folklore',
            conductor: 'Ariel Brollo',
            foto: '/ariel1.jpg',
            diasLabel: 'Viernes',
            hora: '11:00',
            categoria: 'Semana',
            color: '#1E90FF',
        },
        {
            nombre: 'Popularísimo',
            conductor: 'Abel Fernandez',
            foto: '/pelusa.jpg',
            diasLabel: 'Sábado',
            hora: '09:00',
            categoria: 'Finde',
            color: '#FFD700',
        },
        {
            nombre: 'Sobremesa Chamamecera',
            conductor: 'Ismael Torres',
            foto: '/fm.jpg',
            diasLabel: 'Sábado',
            hora: '12:00',
            categoria: 'Finde',
            color: '#FFA500',
        },
        {
            nombre: 'Iglesia Asamblea de Dios',
            conductor: 'Integrantes',
            foto: '/iglesia.jpg',
            diasLabel: 'Sábado',
            hora: '17:00',
            categoria: 'Finde',
            color: '#87CEEB',
        },
        {
            nombre: 'A Puro Folklore',
            conductor: 'Ariel Brollo',
            foto: '/ariel1.jpg',
            diasLabel: 'Domingo',
            hora: '09:00',
            categoria: 'Finde',
            color: '#1E90FF',
        },
    ];

    const categorias = ['Todos', 'Semana', 'Finde'];

    const programasFiltrados = filtro === 'Todos'
        ? programas
        : programas.filter(p => p.categoria === filtro);

    return (
        <div className="programas-container">
            <div className="overlay"></div>

            <div className="programas-inner">
                {/* Filtros */}
                <div className="filtros">
                    {categorias.map(cat => (
                        <button
                            key={cat}
                            className={`filtro-btn ${filtro === cat ? 'activo' : ''}`}
                            onClick={() => setFiltro(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Cards */}
                <div className="programas-grid">
                    {programasFiltrados.map((programa, index) => (
                        <div
                            key={index}
                            className="programa-card"
                            style={{ '--card-color': programa.color, animationDelay: `${index * 0.07}s` }}
                        >
                            <div className="card-foto-wrap">
                                <img src={programa.foto} alt={programa.conductor} className="card-foto" />
                                <div className="card-hora-badge">{programa.hora}</div>
                            </div>
                            <div className="card-body">
                                <h3 className="card-nombre">{programa.nombre}</h3>
                                <p className="card-conductor">
                                    <i className="fa fa-microphone" style={{ marginRight: '6px', color: 'var(--card-color)' }}></i>
                                    {programa.conductor}
                                </p>
                                <div className="card-dias">
                                    <i className="fa fa-calendar" style={{ marginRight: '6px', opacity: 0.7 }}></i>
                                    {programa.diasLabel}
                                </div>
                            </div>
                            <div className="card-accent" style={{ background: `var(--card-color)` }}></div>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="footer">
                <p>© 2025 FM Popular. Desarrollado por <a href="https://www.instagram.com/ulisessacuna/">Ulises Acuña</a></p>
            </footer>
        </div>
    );
};

export default Programas;