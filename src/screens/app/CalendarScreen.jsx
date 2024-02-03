// React
import { useState } from 'react';
// React Native
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// React Native Calendars
import { Calendar, LocaleConfig } from 'react-native-calendars';
// Components
import {
  CalendarHeader,
} from '../../components/app/headers';
// Theme
import { colors } from '../../theme';


LocaleConfig.locales['es'] = {
  monthNames: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],
  monthNamesShort: [
    'Ene.',
    'Feb.',
    'Mar.',
    'Abr.',
    'May.',
    'Jun.',
    'Jul.',
    'Ago.',
    'Sep.',
    'Oct.',
    'Nov.',
    'Dic.',
  ],
  dayNames: [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ],
  dayNamesShort: [
    'Dom.',
    'Lun.',
    'Mar.',
    'Mié.',
    'Jue.',
    'Vie.',
    'Sáb.'
  ],
  today: 'Hoy',
};

LocaleConfig.defaultLocale = 'es';

export const CalendarScreen = ({ navigation }) => {
  const [ selectedDate, setSelectedDate ] = useState( '' );
  const { top } = useSafeAreaInsets();

  const handleDateSelect = ( day ) => {
    setSelectedDate( day.dateString );
  }

  const handleSaveDate = () => {
    console.log( 'Fecha seleccionada:', selectedDate );
    // TODO: Save date on database
    navigation.navigate( 'BookingConfirmScreen' );
  }

  return (
    <View style={[ styles.container, { marginTop: top } ]}>
      <CalendarHeader
        navigation={ navigation }
        icon='notifications'
      />

      <View style={ styles.content }>
        <Text style={ styles.calendarTitle }>
          Reserva de horas
        </Text>

        <Text style={ styles.calendarSubtitle }>
          Elegir un día disponible
        </Text>

        <Calendar
          onDayPress={ handleDateSelect }
          markedDates={{
            [ selectedDate ]: {
              selected: true,
              selectedColor: colors.primary,
            }
          }}
          theme={{
            calendarBackground: 'transparent',
          }}
        />

        <TouchableOpacity
          style={ styles.saveButton }
          onPress={ handleSaveDate }
        >
          <Text style={ styles.buttonText }>
            Reservar Hora
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20
  },
  calendarTitle: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  calendarSubtitle: {
    fontSize: 18,
    marginBottom: 40
  },
  saveButton: {
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 25,
    padding: 15,
    marginTop: 10
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
