import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './FormularioVeiculo.css'
import ModeloCarro from '../../assets/imagens/modelo.png';

function FormularioVeiculo() {
    const navigate = useNavigate();
    const [vehicle, setVehicle] = useState({ marca: '', modelo: '', portas: '', carroceria: '' });

    const handleSubmit = (event) => {
        event.preventDefault();

        const storedVehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
        storedVehicles.push(vehicle);
        localStorage.setItem('vehicles', JSON.stringify(storedVehicles));

        console.log("Veículo adicionado com sucesso!", vehicle);
        navigate('/');
    }

    return (
        <div>
            <form className="div-pai-form" onSubmit={handleSubmit} >
                <div className="titulo-add">
                    <div><img src={ModeloCarro} /></div>
                    <h2>Adicionar Veículos</h2>
                </div>
                
                    <label className="label-form">
                        Marca:
                        <input className="input-form"
                            type="text"
                            name="marca"
                            value={vehicle.marca}
                            required
                            onChange={(e) => setVehicle({ ...vehicle, marca: e.target.value })}
                        />
                    </label>
                

                
                    <label className="label-form">
                        Modelo:
                        <input className="input-form"
                            type="text"
                            name="modelo"
                            value={vehicle.modelo}
                            required
                            onChange={(e) => setVehicle({ ...vehicle, modelo: e.target.value })}
                        />
                    </label>
                

                
                    <label className="label-form">
                        Quantidade de portas:
                        <input className="input-form"
                            type="number"
                            name="portas"
                            value={vehicle.portas}
                            required
                            onChange={(e) => setVehicle({ ...vehicle, portas: e.target.value })}
                        />
                    </label>
                

                
                    <label className="label-form">
                        Tipo de carroceria:
                        <input className="input-form"
                            type="text"
                            name="carroceria"
                            value={vehicle.carroceria}
                            required
                            onChange={(e) => setVehicle({ ...vehicle, carroceria: e.target.value })}
                        />
                    </label>
                

                <div className="botao-add-veiculo" ><button type="submit"> Adicionar Veículo </button></div>
            </form>
        </div>
    )
}

export default FormularioVeiculo;