import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ModeloCarro from '../../assets/imagens/modelo.png';
import './EditarVeiculo.css';

function EditarVeiculo() {
    const { index } = useParams();
    const navigate = useNavigate();
    const [vehicle, setVehicle] = useState({ marca: '', modelo: '', portas: '', carroceria: '' });

    useEffect(() => {
        const storedVehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
        if (storedVehicles[index]) {
            setVehicle(storedVehicles[index]);
        }
    }, [index]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const storedVehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
        storedVehicles[index] = vehicle;
        localStorage.setItem('vehicles', JSON.stringify(storedVehicles));

        console.log("Veículo editado: ", vehicle);
        navigate('/');
    }


    return (
        <div>
            <form className="div-pai-form-edit" onSubmit={handleSubmit}>
                <div className="titulo-edit">
                    <div><img src={ModeloCarro} /></div>
                    <h2>Editar Veículos</h2>
                </div>

                <div>
                    <label className="label-form-edit">
                        Marca:
                    </label>
                    <input className="input-form-edit"
                        type="text"
                        value={vehicle.marca}
                        onChange={(e) => setVehicle({ ...vehicle, marca: e.target.value })}
                    />
                    <label className="label-form-edit">
                        Modelo:
                    </label>
                    <input className="input-form-edit"
                        type="text"
                        value={vehicle.modelo}
                        onChange={(e) => setVehicle({ ...vehicle, modelo: e.target.value })}
                    />
                    <label className="label-form-edit">
                        Quantidade de Portas:
                    </label>
                    <input className="input-form-edit"
                        type="number"
                        value={vehicle.portas}
                        onChange={(e) => setVehicle({ ...vehicle, portas: e.target.value })}
                    />
                    <label className="label-form-edit">
                        Tipo de Carroceria:
                    </label>
                    <input className="input-form-edit"
                        type="text"
                        value={vehicle.carroceria}
                        onChange={(e) => setVehicle({ ...vehicle, carroceria: e.target.value })}
                    />
                </div>

                <div className="botao-add-veiculo-edit"><button type="submit">Salvar alterações</button></div>
            </form>
        </div>
    );
}

export default EditarVeiculo;