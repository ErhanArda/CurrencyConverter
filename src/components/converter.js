import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import axios from 'axios';

class Converter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tr: '',
            usd: '',
            cad: '',
            jpy: '',
            eur: '',
            input: '',
            rates: []
        }

        this.getRates = this.getRates.bind(this);
    }

    getRates() {
        axios.get('http://data.fixer.io/api/latest?access_key=c54b6c4ff94ef2c682e58bfeb1ea0cf1&symbols=EUR,TRY,USD,CAD,JPY,BTC')
            .then(response => {
                console.log(response);
                const rates = response.data.rates;
                this.setState({
                    rates
                })
            })
    }

    componentDidMount() {
        this.getRates();
    }

    render() {
        const { converterWrapper, inputStyle, textStyle } = styles;
        const { input, tr, usd, cad, jpy, btc, eur, rates } = this.state;

        return (
            <View style={converterWrapper}>
                <TextInput placeholder='Enter EUR Value'
                    style={inputStyle}
                    keyboardType='numeric'
                    onChangeText={(text) => {
                        const i = parseFloat(text) || 0;

                        this.setState({
                            input: text,
                            tr: (i * rates['TRY']).toFixed(3),
                            usd: (i * rates['USD']).toFixed(3),
                            cad: (i * rates['CAD']).toFixed(3),
                            jpy: (i * rates['JPY']).toFixed(3),
                            btc: (i * rates['BTC']).toFixed(3),
                            eur: (i * rates['EUR']).toFixed(3),
                        })
                    }}
                    //value = {input}

                    value={`${input}`} />

                <Text style={textStyle}>TRY: {tr} </Text>
                <Text style={textStyle}>USD: {usd} </Text>
                <Text style={textStyle}>CAD: {cad} </Text>
                <Text style={textStyle}>JPY: {jpy} </Text>
                <Text style={textStyle}>BTC: {btc} </Text>
                <Text style={textStyle}>EUR: {eur} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    converterWrapper: {
        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center'

    },
    inputStyle: {
        width: 200,
        height: 60,
        fontSize: 20,
        paddingBottom: 20
    },
    textStyle: {
        width: 190,
        height: 50,
        fontWeight: 'bold',
        fontSize: 20

    }
});

export default Converter;