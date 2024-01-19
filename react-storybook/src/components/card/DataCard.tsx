import { Button, Card, Collapse } from "react-bootstrap";
import { useState } from "react";
import IconoMal from '../../Images/icons8-eliminar-escudo-80.png';
import IconoOk from '../../Images/icons8-seguridad-comprobado-80.png';


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
                <img src={IconoOk} alt="Logo" />
            );
        }
        else {
            return (
                <img src={IconoMal} alt="Logo" />
            );
        }
    }

    const formatData = () => {
        if (props.Data) {
            return props.Data.map((item: string) => <tr><td>{item}</td></tr>);
        }
        else {
            return (
                <></>
            );
        }
    }



    return (
        <Card>
            <Card.Body>
                <h1>{props.Texto}</h1>

                {icono()}
                <span>
                    <Button
                        className={(props.Data) ? "" : "d-none"}
                        variant="primary"

                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        Detalle error
                    </Button>

                </span>

                <Collapse in={open}>
                    <div>
                        <table >
                            <tbody>
                                {formatData()}
                            </tbody>
                        </table>
                    </div>

                </Collapse>
            </Card.Body>
        </Card>
    );

};