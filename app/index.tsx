import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Alert } from 'react-native';
import Colors from '@/constants/colors';

export default function HomeScreen() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);

	async function handleSubmit() {
		if (!email || !message) {
			Alert.alert('Validation', 'Please provide an email and a message.');
			return;
		}

		setLoading(true);
		try {
			// Replace YOUR_FORM_ID with the value from SETUP.md (Formspree)
			const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, message }),
			});

			if (res.ok) {
				Alert.alert('Success', 'Message sent — thanks!');
				setName('');
				setEmail('');
				setMessage('');
			} else {
				Alert.alert('Error', 'Failed to send message.');
			}
		} catch (err) {
			Alert.alert('Error', String(err));
		} finally {
			setLoading(false);
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Contact</Text>
			<TextInput placeholder="Your name" value={name} onChangeText={setName} style={styles.input} />
			<TextInput placeholder="Your email" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" />
			<TextInput
				placeholder="Message"
				value={message}
				onChangeText={setMessage}
				style={[styles.input, styles.textArea]}
				multiline
			/>
			<Pressable style={styles.button} onPress={handleSubmit} disabled={loading}>
				<Text style={styles.buttonText}>{loading ? 'Sending...' : 'Send'}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: Colors.background,
		justifyContent: 'center',
	},
	title: {
		fontSize: 28,
		fontWeight: '700',
		color: Colors.primary,
		marginBottom: 20,
		textAlign: 'center',
	},
	input: {
		borderWidth: 1,
		borderColor: Colors.lightGray,
		backgroundColor: Colors.white,
		padding: 12,
		borderRadius: 8,
		marginBottom: 12,
	},
	textArea: {
		minHeight: 100,
		textAlignVertical: 'top',
	},
	button: {
		backgroundColor: Colors.accent,
		padding: 14,
		borderRadius: 8,
		alignItems: 'center',
	},
	buttonText: {
		color: Colors.white,
		fontWeight: '700',
	},
});