import React from 'react';
import { Feather } from '@expo/vector-icons';
import { generateInterval } from './generateInterval';
import { ptBR } from './localeConfig';
import {Calendar as CustomCalendar, LocaleConfig, DateCallbackHandler} from 'react-native-calendars';
//pois nao vem a tipagem junta, entao temos que instalar como desenvolvimento
// yarn add @types/react-native-calendars -D

import { useTheme } from 'styled-components';
LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

interface MarketDateProps {
    [date: string]: {
        color: string;
        textColor: string;
        disabled?: boolean;
        //Para quando o usuario clicar em uma data aparecer nada ou aparecer alguma mensagem
        disabledTouchEvent?: boolean;
    }
}

interface CalendarProps {
    markedDates: MarketDateProps;
    onDayPress: DateCallbackHandler;
}

interface DayProps {
    dateString: string;
    day: number;
    month: number;
    year: number;
    timestamp: number;
}

function Calendar({ markedDates, onDayPress }: CalendarProps){
    const theme = useTheme();

  return (
    <CustomCalendar
        renderArrow={( direction ) => 
            <Feather 
                size={24}
                color={theme.colors.text}
                name={direction == 'left' ? "chevron-left" : "chevron-right"}
            />
        }
        headerStyle={{
            backgroundColor: theme.colors.background_secondary,
            borderBottomWidth: 0.5,
            borderBottomColor: theme.colors.text_detail,
            paddingBottom: 10,
            marginBottom: 10
        }}

        theme={{
            textDayFontFamily: theme.fonts.primary_400,
            textDayHeaderFontFamily: theme.fonts.primary_500,
            textDayHeaderFontSize: 10,
            textMonthFontFamily: theme.fonts.secondary_600,
            textMonthFontSize: 20,
            monthTextColor: theme.colors.title,
            arrowStyle: {
                marginHorizontal: -15
            }
        }}

        firstDay={1}
        minDate={new Date()}
        markingType="period"
        //quais datas estao selecionadas no periodo
        markedDates={markedDates}
        onDayPress={onDayPress}
    />
  );
}

export {
    //calendario como todo
    Calendar,
    //periodo todo selecionado
    MarketDateProps,
    //dia selecionado
    DayProps,
    generateInterval
}