import React, { Component } from 'react';
import { Alert, View, TextInput, Button } from 'react-native';

class MessageInput extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Please write your text here.' };
    }
    render() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 100,
                    padding: 20,
                }}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
                <Button
                    onPress={()=>{Alert.alert(`you wrote: ${this.state.text}`)}}
                    title="Send"
                    color="#841584"
                    accessibilityLabel="Send"
                />
            </View>
        );
    }
}

export default MessageInput;