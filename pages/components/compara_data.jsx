export default function compara_data(a, b) {
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