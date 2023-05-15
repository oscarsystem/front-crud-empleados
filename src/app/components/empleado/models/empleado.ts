import { Cargo } from "./cargo";

export interface Empleado{
    id: string;
    nombres: string;
    edad: number;
    email: string;
    cargo: Cargo;
}