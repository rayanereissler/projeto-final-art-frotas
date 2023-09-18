import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormularioVeiculo(){
    const navigate = useNavigate();
    const [vehicle, setVehicle] = useState({ marca: '', modelo: '', portas: '', carroceria: ''});

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
            <h2>Adicionar Veículo</h2>
            <form onSubmit={handleSubmit} >
                <label>
                    Marca:
                    <input 
                        type="text" 
                        name="marca"
                        value={vehicle.marca} 
                        required
                        onChange={(e) => setVehicle({ ...vehicle, marca: e.target.value })} 
                    />
                </label>
                
                <label>
                    Modelo:
                    <input 
                        type="text" 
                        name="modelo" 
                        value={vehicle.carroceria} 
                        required
                        onChange={(e) => setVehicle({ ...vehicle, carroceria: e.target.value })} 
                    />
                </label>
                <label>
                    Quantidade de portas:
                    <input 
                        type="number" 
                        name="portas"
                        value={vehicle.portas} 
                        required
                        onChange={(e) => setVehicle({ ...vehicle, portas: e.target.value })} 
                    />
                </label>

                <label>
                    Tipo de carroceria:
                    <input 
                        type="text" 
                        name="carroceria"
                        value={vehicle.portas} 
                        required
                        onChange={(e) => setVehicle({ ...vehicle, portas: e.target.value })} 
                    />
                </label>

                <button type="submit"> Adicionar Veículo </button>
            </form>
        </div>
    )
}

export default FormularioVeiculo;