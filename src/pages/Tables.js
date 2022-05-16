import React, {useState} from 'react';
import StatusCard from 'components/StatusCard';
import TableCard from 'components/TableCard';

const statesProducts = {
    liquido: 'LIQUIDO',
    dispositivo: 'DISPOSITIVO',
    atomizador: 'ATOMIZADOR'
}


export default function Dashboard() {
    const [type, setType] = useState(statesProducts.dispositivo)
    return (
        <>
            <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                        <StatusCard
                            color="green"
                            icon="check"
                            title="Dispositivos"
                            amount="100"
                            primaryLabel="Activos"
                            secondLabel="Inactivos"
                        />
                        <StatusCard
                            color="red"
                            icon="check"
                            title="Atomizadores"
                            amount="100"
                            primaryLabel="Activos"
                            secondLabel="Inactivos"
                        />
                        <StatusCard
                            color="purple"
                            icon="check"
                            title="Liquidos"
                            amount="100"
                            primaryLabel="Activos"
                            secondLabel="Inactivos"
                        />
                    </div>
                </div>
            </div>

            <div className="px-3 md:px-8 h-auto -mt-24">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 px-4 mb-16">
                        <TableCard />
                    </div>
                </div>
            </div>
        </>
    );
}
