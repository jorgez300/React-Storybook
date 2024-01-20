import { Button, ButtonProps } from "react-bootstrap";

export interface CommonButtonProps {
    Texto: string;
    Habilitado: boolean;
    onClick?: () => void;
    Propiedades?: ButtonProps;
}


export const CommonButton = (props: CommonButtonProps) => {

    return (
        <Button
            disabled={!props.Habilitado}
            onClick={props.onClick}
            {...props.Propiedades}
        >
            {props.Texto}
        </Button>
    );

};
