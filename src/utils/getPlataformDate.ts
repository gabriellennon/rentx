//No iphone o calendário retorna sempre a data - 1 e nao a atual.

import { addDays } from 'date-fns';
import { Platform } from 'react-native';

export function getPlataformDate(date: Date){
    if(Platform.OS === 'ios'){
        return addDays(date, 1);
    }else{
        return date;
    }
}