import Card from '@material-tailwind/react/Card';
import CardRow from '@material-tailwind/react/CardRow';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardStatus from '@material-tailwind/react/CardStatus';
import CardStatusFooter from '@material-tailwind/react/CardStatusFooter';
import Icon from '@material-tailwind/react/Icon';

export default function StatusCard({
    color,
    icon,
    title,
    amount,
    primaryLabel,
    secondLabel,
    dataStyle
}) {
    return (
        <div className="px-5 mb-10 text-orange-300 text-lg">
            <Card>
                <CardRow>
                    <CardHeader color={color} iconOnly className="mb-0">
                        <Icon name={icon} size="3xl" color="white" />
                    </CardHeader>
                    <CardStatus title={title} />
                </CardRow>

                <CardStatusFooter>
                    <CardStatus title={primaryLabel} amount={amount} />
                    <CardStatus title={secondLabel} amount={amount} />
                </CardStatusFooter>
            </Card>
        </div>
    );
}
