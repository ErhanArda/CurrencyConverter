import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


class Converter extends Component {
    constructor(props) {
        super(props);

        this.state = { tr: '', usd: '', cad: '', jpy: '', eur: '', input: '' }
    }

    render() {
        const { converterWrapper, inputStyle, textStyle } = styles;
        const { input, tr, usd, cad, jpy, eur,btc } = this.state;

        return (
            <View style={converterWrapper}>
                <TextInput placeholder='Enter EUR Value '
                    style={inputStyle}
                    onChange={(text) => {
                        this.setState({
                            input: text
                        })
                    }}
                    value={this.state.input} />

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
        paddingTop:30,
        justifyContent: 'center',
        alignItems:'center',

    },
    inputStyle: {
        width:200,
        height:40,
        paddingBottom:30
    },
    textStyle: {
        width:190,
        height:50,
        fontWeight:'bold',
        fontSize:20

    }
});

export default Converter;