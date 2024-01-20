import { Card, Collapse, ListGroup } from "react-bootstrap";
import { useState } from "react";
import IconoMal from '../../Images/icons8-eliminar-escudo-80.png';
import IconoOk from '../../Images/icons8-seguridad-comprobado-80.png';
import { CommonButton, CommonButtonProps } from "../buttons/commonButtons";



export interface DataCardProps {
    Texto: string,
    Estado: boolean,
    Data: string[]

}


export const DataCard = (props: DataCardProps) => {

    const [open, setOpen] = useState(false);

    const icono = () => {
        if (props.Estado) {
            return (
                <Card.Img variant="top" style={{ width: 'fit-content', padding: '10px' }} src={IconoOk} />
            );
        }
        else {
            return (
                <Card.Img variant="top" style={{ width: 'fit-content', padding: '10px' }} src={IconoMal} />
            );
        }
    }

    const formatData = () => {
        if (props.Data) {
            if (props.Data.length > 0) {
                return <Collapse in={open}>
                    <ListGroup className="list-group-flush">
                        {props.Data.map((item: string) => <ListGroup.Item>{item}</ListGroup.Item>)}
                    </ListGroup>
                </Collapse>;
            }
            else {
                return (
                    <></>
                );
            }
        }
        else {
            return (
                <></>
            );
        }
    }

    const DetalleBotonPropiedades: CommonButtonProps = {
        Texto: "Detalle",
        Habilitado: !props.Estado,
        Propiedades: {
            onClick: () => {
                setOpen(!open);
            },
            variant: 'success',
            'aria-controls': "example-collapse-text",
            'aria-expanded': open,
            className: ((props.Estado || props.Data.length == 0) ? " d-none" : "")
        }
    }

    return (
        <Card style={{
            width: '18rem', padding: '10px'
        }}>
            {icono()}
            <Card.Body>
                <Card.Title>{(props.Estado) ? "Ok" : "Error"}</Card.Title>
                <Card.Text>
                    <div>
                        <p>
                            {props.Texto}
                        </p>
                    </div>
                    <span>

                        <CommonButton {...DetalleBotonPropiedades} />

                    </span>
                </Card.Text>
            </Card.Body>
            {formatData()}

        </Card >
    );

};