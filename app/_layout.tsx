import React from 'react';
import { Stack } from 'expo-router';

// Root layout for the app. If you need to add Google Analytics, replace the
// placeholder in `SETUP.md` and inject the script in the web index or a
// platform-specific place instead of calling `window.gtag` here.
export default function RootLayout() {
	return <Stack />;
}