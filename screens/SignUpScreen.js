import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DateTimePicker from 'react-native-modal-datetime-picker';
import logo from '../assets/images/sunbank.png';
import Loader from '../components/Loader';

const { width: WIDTH } = Dimensions.get('window'); 

const SignUp = ({ navigation }) => {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        password: '',
        showPass: true,
        press: false,
        isVisible: false,
        chosenDate: '',
        loading: false
    });

    useEffect(() => {
        setTimeout(() => {
            setState(prevState => ({ ...prevState, loading: false }));
        }, 3000);
    }, []);

    const handleInputChange = (name, value) => {
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleDatePicker = (date) => {
        setState(prevState => ({
            ...prevState,
            isVisible: false,
            chosenDate: moment(date).format('MMMM, Do YYYY')
        }));
    };

    const toggleDateTimePicker = (isVisible) => {
        setState(prevState => ({ ...prevState, isVisible }));
    };

    return (
        <ImageBackground style={styles.backgroundContainer}>
            <Loader loading={state.loading} />
            <KeyboardAwareScrollView>
                <View style={styles.logoContainer}>
                    <Text style={styles.WelcomeText}>Welcome To Your One Customer Bank</Text>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.introText}>Let's set up your account real quick!</Text>
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesome name={'bank'} size={25} color={'white'} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Enter your BVN'}
                        placeholderTextColor={'white'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <Text style={styles.tipText}>Quick Tip: Dial *565*0# on your registered mobile number to get your BVN.</Text>
                <View style={styles.inputContainer}>
                    <Ionicons name={'ios-person'} size={25} color={'white'} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'First Name'}
                        placeholderTextColor={'white'}
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => handleInputChange('firstName', text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name={'ios-person'} size={25} color={'white'} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Last Name'}
                        placeholderTextColor={'white'}
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => handleInputChange('lastName', text)}
                    />
                </View>

                <TouchableOpacity style={styles.inputContainer} onPress={() => toggleDateTimePicker(true)}>
                    <MaterialIcons name={'date-range'} size={25} color={'white'} style={styles.inputIcon} />
                    <Text style={styles.dateText}>Date of birth</Text>
                    <Text style={styles.dateText}>{state.chosenDate}</Text>
                </TouchableOpacity>

                <DateTimePicker
                    isVisible={state.isVisible}
                    onConfirm={handleDatePicker}
                    onCancel={() => toggleDateTimePicker(false)}
                />

                <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('Main')}>
                    <Text style={styles.text}>Continue</Text>
                </TouchableOpacity>
                <Text style={styles.tipText} onPress={() => navigation.navigate('SignIn')}>Already have an account? Signin</Text>
            </KeyboardAwareScrollView>
        </ImageBackground>
    );
};

const styles = {
    backgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        backgroundColor: '#062b50',
        marginTop: 40
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 10
    },
    logo: {
        width: 120,
        height: 120 
    },
    logoText: {
        color: 'white',
        fontSize: 25,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5
    },
    WelcomeText: {
        color: 'white',
        fontSize: 25,
        marginTop: 50,
        padding: 5
    },
    introText: {
        color: 'white',
        fontSize: 15,
        marginTop: 10,
        padding: 5
    },
    tipText: {
        color: '#fcbb16',
        fontSize: 15,
        marginTop: 5,
        padding: 10,
        textDecorationLine: 'underline'
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 70,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'white',
        marginHoriontal: 25
    },
    dateText: {
        color: 'white',
        fontSize: 15,
        marginTop: 14,
        paddingLeft: 70
    },
    dateContainer: {
        borderColor: 'black',
        borderWidth: 1,
    },
    inputIcon: {
        position: 'absolute',
        top: 10,
        left: 37 
    },
    inputContainer: {
        marginTop: 5
    },
    btnEye: {
        position: 'absolute',
        top: 10,
        right: 37  
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        backgroundColor: '#fcbb16',
        justifyContent: 'center',
         marginTop: 20
    },
    text: {
        color: 'white',
         fontSize: 16,
         textAlign: 'center'

    }
}

 
export default SignUp;
