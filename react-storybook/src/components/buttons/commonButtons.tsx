import { Button } from "react-bootstrap";

export interface ButtonProps {
    Texto: string;
    Habilitado : boolean;
    onClick?: () => void;
}


export const CommonButton = (props: ButtonProps) => {

    return (
        <Button
            className=""
            variant={(props.Habilitado) ? "success" : "primary"}
            disabled= {props.Habilitado}
            onClick={props.onClick}
        >
            {props.Texto}
        </Button>
    );

};
