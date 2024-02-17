import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import logo from '../assets/images/sunbank.png';
import Loader from '../components/Loader';

const { width: WIDTH } = Dimensions.get('window');

const SignIn = ({ navigation }) => {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        password: '',
        showPass: true,
        press: false,
        loading: true
    });

    useEffect(() => {
        setTimeout(() => {
            setState(prevState => ({ ...prevState, loading: false }));
        }, 3000);
    }, []);

    const handleInputChange = (name, value) => {
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <React.Fragment>
            <ImageBackground style={styles.backgroundContainer}>
                <Loader loading={state.loading} />
                <KeyboardAwareScrollView>
                    <View style={styles.logoContainer}>
                        <Image source={logo} style={styles.logo} />
                        <Text style={styles.logoText}>Login with your credentials</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Entypo name={'email'} size={25} color={'white'} style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder={'Email'}
                            placeholderTextColor={'white'}
                            underlineColorAndroid='transparent'
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <MaterialCommunityIcons name={'textbox-password'} size={25} color={'white'} style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder={'Password'}
                            secureTextEntry={state.showPass}
                            placeholderTextColor={'white'}
                            underlineColorAndroid='transparent'
                        />

                        <TouchableOpacity style={styles.btnEye}>
                            <AntDesign name={'eye'} size={22} color={'white'} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('Main')}>
                        <Text style={styles.text}>Continue</Text>
                    </TouchableOpacity>
                    <Text style={styles.regText} onPress={() => navigation.navigate('SignUp')}>Don't have an account? Register here.</Text>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </React.Fragment>
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
        marginBottom: 30
    },
    logo: {
        width: 120,
        height: 190
    },
    logoText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
    },
    regText: {
        color: '#fcbb16',
        fontSize: 15,
        fontWeight: '500',
        marginTop: 10,
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
        marginHorizontal: 25
    },
    inputIcon: {
        position: 'absolute',
        top: 10,
        left: 37
    },
    inputContainer: {
        marginTop: 10
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
    },
    loaderStyle: {
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    }
};

export default SignIn;