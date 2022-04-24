import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import styles from './ChangeTaskPageStyle';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import 'moment/locale/ru';
import {useMutation} from '@apollo/client';
import {UPD_TASK} from '../apollo/gqls/mutations';

const ChangeTaskPage = ({navigation, route}) => {
  const [text, onChangeText] = useState(null);
  const [id, setId] = useState(null);
  const [email, setEmail] = useState(null);
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const setData = () => {
      setId(route.params.id);
      setChecked(false);
      setEmail(route.params.email);
      onChangeText(route.params.text);
      setDate(route.params.deadline);
    };
    setData();
  }, [
    route.params.id,
    route.params.text,
    route.params.deadline,
    route.params.email,
  ]);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = selected => {
    setDate(selected.toISOString());
    hideDatePicker();
  };

  const [update] = useMutation(UPD_TASK, {
    onCompleted: () => {
      console.log('add task');
      navigation.navigate('ToDoList', {
        email: email,
      });
    },
    onError: ({message}) => {
      console.log(message);
    },
  });

  const updatedTask = () => {
    update({
      variables: {
        id: id,
        task: {
          text: text,
          createdBy: email,
          checked: checked,
          deadline: date,
        },
      },
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>Что должно быть сделано?</Text>
        <TextInput
          style={[styles.inputTask, styles.text]}
          onChangeText={onChangeText}
          value={text}
          placeholder="Введите текст"
        />

        <Text style={styles.text}>Срок</Text>
        <View style={styles.dateInputContainer}>
          <Text style={[styles.dateText, styles.text]}>
            {moment(date).format('dddd, D MMMM YYYY г.')}
          </Text>
          <TouchableOpacity style={styles.dateButton} onPress={showDatePicker}>
            <Text>Дата</Text>
          </TouchableOpacity>
        </View>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </ScrollView>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={updatedTask}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangeTaskPage;
