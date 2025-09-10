import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView, StyleSheet } from 'react-native';
import { routeIntent } from '../screens/logic/IntentRouter';
import { responses } from '../screens/logic/Responses';
import { detectTone } from '../screens/logic/ToneAnalyzer';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [emotionalState, setEmotionalState] = useState('neutral');

  const handleSend = () => {
    const tone = detectTone(input);
    setEmotionalState(tone);

    const intent = routeIntent(input, tone);
    const reply = responses[intent] || "I'm here for you. Tell me more.";

    setMessages([
      ...messages,
      { sender: 'You', text: input },
      { sender: 'EchoPath', text: reply }
    ]);
    setInput('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to EchoPath</Text>
      <Text style={styles.subtext}>Your emotionally intelligent companion</Text>

      <ScrollView style={styles.chatBox}>
        {messages.map((msg, index) => {
          const bubbleStyle =
            msg.sender === 'You'
              ? styles.userBubble
              : emotionalState === 'overwhelmed'
              ? styles.echoBubbleCalm
              : emotionalState === 'confused'
              ? styles.echoBubbleSoft
              : emotionalState === 'positive'
              ? styles.echoBubblePositive
              : styles.echoBubble;

          return (
            <View key={index} style={bubbleStyle}>
              <Text style={styles.sender}>{msg.sender}</Text>
              <Text style={styles.message}>{msg.text}</Text>
            </View>
          );
        })}
      </ScrollView>

      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Type how you're feeling..."
        style={styles.input}
      />
      <Button title="Send" onPress={handleSend} color="#5A67D8" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F3F4F6',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4C51BF',
    marginBottom: 4,
  },
  subtext: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 12,
  },
  chatBox: {
    flex: 1,
    marginBottom: 10,
  },
  userBubble: {
    backgroundColor: '#E2E8F0',
    padding: 10,
    borderRadius: 8,
    marginBottom: 6,
    alignSelf: 'flex-end',
    maxWidth: '80%',
  },
  echoBubble: {
    backgroundColor: '#C3DAFE',
    padding: 10,
    borderRadius: 8,
    marginBottom: 6,
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  echoBubbleCalm: {
    backgroundColor: '#FEEBC8', // warm peach
    padding: 10,
    borderRadius: 8,
    marginBottom: 6,
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  echoBubbleSoft: {
    backgroundColor: '#C6F6D5', // soft green
    padding: 10,
    borderRadius: 8,
    marginBottom: 6,
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  echoBubblePositive: {
    backgroundColor: '#B2F5EA', // teal
    padding: 10,
    borderRadius: 8,
    marginBottom: 6,
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  sender: {
    fontWeight: '600',
    marginBottom: 2,
    color: '#2D3748',
  },
  message: {
    fontSize: 16,
    color: '#1A202C',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CBD5E0',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 10,
  },
});
