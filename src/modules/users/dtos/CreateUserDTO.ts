export interface CreateUserDTO {
    name: string,  
    email: string,
    password: string,
    grau_form: string,
    temp_form: string,
    qtd_mat: number,
    dat_inicio: Date,
    dat_final: Date,
}