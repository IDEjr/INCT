export function compara_string(a,b)
{
    if(a < b) return -1;
    else return 1;
}

export function compara_data(a, b) {
    if(a.ano < b.ano) {
        return -1;
    } else if(a.ano > b.ano) {
        return 1;
    } else {
        if(a.mes < b.mes) {
            return -1;
        } else if(a.mes > b.mes) {
            return 1;
        } else {
            if(a.dia < b.dia) {
                return -1;
            } else {
                return 1;
            } 
        }
    }
}