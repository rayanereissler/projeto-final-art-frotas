import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ListarVeiculos() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const storedVehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
        setVehicles(storedVehicles);
    }, []);

    const handleRemoveVehicle = (index) => {
        const updatedVehicles = vehicles.filter((_, i) => i !== index);
        localStorage.setItem('vehicles', JSON.stringify(updatedVehicles));
        setVehicles(updatedVehicles);
    };

    return (
        <div>
            <h2>Lista de Veículos</h2>
            <ul>
                {vehicles.map((veiculo, index) => (
                    <li key={index}>
                        Marca: {veiculo.marca}, Modelo: {veiculo.modelo}, Quantidade de portas: {veiculo.portas}, Tipo de carroceria: {veiculo.carroceria}
                        <Link to={`/edit/${index}`}>
                            <button>
                                Editar
                            </button>
                        </Link>
                        <button onClick={() => handleRemoveVehicle(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListarVeiculos;