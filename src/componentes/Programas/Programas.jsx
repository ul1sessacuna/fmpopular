// src/componentes/Programas/Programas.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Programas.css'; // Archivo CSS para los estilos personalizados

const Programas = () => {
    const horarios = [
        '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM',
        '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM',
        '07:00 PM', '08:00 PM'
    ];

    const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

    return (
        <div className="programas-container">
            <div className="overlay">
                <h2 className="text-center mb-4 text-white">Programación Habitual</h2>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover table-dark">
                        <thead>
                            <tr>
                                <th>Hora</th>
                                {dias.map((dia, index) => (
                                    <th key={index}>{dia}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {horarios.map((hora, index) => (
                                <tr key={index}>
                                    <td>{hora}</td>
                                    {dias.map((dia, i) => (
                                        <td key={i} className="text-center">Sin programación</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Programas;
