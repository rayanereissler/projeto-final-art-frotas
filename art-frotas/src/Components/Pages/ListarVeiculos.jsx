import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ListarVeiculos.css';
import ModeloCarro from '../../assets/imagens/modelo.png';

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
        <div className='div-pai-edit-veiculos'>
            <div className="titulo-listar">
                <div><img src={ModeloCarro} /></div>
                <h2>Lista de Veículos</h2>
            </div>
            <ul className='lista-veiculos-edit'>
                {vehicles.map((veiculo, index) => (
                    <li className='itens-lista-edit' key={index}>
                        <div className='campo'>
                            <h4>Marca:</h4>
                            <p>{veiculo.marca}</p>
                        </div>

                        <div className='campo'>
                            <h4>Modelo:</h4>
                            <p>{veiculo.modelo}</p>
                        </div>

                        <div className='campo'>
                            <h4>Quantidade de portas: </h4>
                            <p>{veiculo.portas}</p>
                        </div>


                        <div className='campo'>
                            <h4>Tipo de carroceria:</h4>
                            <p>{veiculo.carroceria}</p>
                        </div>

                        <div className='conj-botoes'>
                            <Link to={`/edit/${index}`}>
                                <button className='botao-remover-editar'>
                                    Editar
                                </button>
                            </Link>
                            <button className='botao-remover-editar' onClick={() => handleRemoveVehicle(index)}>Remover</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListarVeiculos;