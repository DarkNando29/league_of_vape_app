import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';

const dataDumb = {
    dispositivos : [
        {
            articulo: 'Target 200 MOD',
            precio: '24.000',
            cantidad: '1000',
        },
        {
            articulo: 'Target 200 MOD',
            precio: '24.000',
            cantidad: '1000',
        },
        {
            articulo: 'Target 200 MOD',
            precio: '24.000',
            cantidad: '1000',
        }
    ],
    liquidos : [
        {
            articulo: 'data',
            precio: 'data',
            cantidad: 'data',
        },
        {
            articulo: 'data',
            precio: 'data',
            cantidad: 'data',
        },
        {
            articulo: 'data',
            precio: 'data',
            cantidad: 'data',
        }
    ],
    atomizadores : [
        {
            articulo: 'data',
            precio: 'data',
            cantidad: 'data',
        },
        {
            articulo: 'data',
            precio: 'data',
            cantidad: 'data',
        },
        {
            articulo: 'data',
            precio: 'data',
            cantidad: 'data',
        }
    ]
}


export default function CardTable({ typeProducts }) {
    return (
        <Card>
            <CardHeader color="purple" contentPosition="left">
                <h2 className="text-white text-2xl">Inventario</h2>
            </CardHeader>
            <CardBody>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Articulo
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Precio
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Cantidad
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Edicion
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataDumb.dispositivos.map((item) => 
                                <tr>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {item.articulo}
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        {item.precio}
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{' '}
                                        {item.cantidad}
                                    </th>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <Button
                                            color="transparent"
                                            buttonType="link"
                                            size="lg"
                                            iconOnly
                                            rounded
                                            ripple="light"
                                        >
                                            <Icon name="edit" size="2xl" color="blue" />
                                        </Button>
                                    </th>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
}
