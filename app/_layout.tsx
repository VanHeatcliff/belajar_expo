import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen 
                name="my-donations" 
                options={{ 
                    title: 'Riwayat Donasi',
                    headerBackTitle: 'Profil' 
                }} 
            />
            <Stack.Screen 
                name="settings" 
                options={{ 
                    title: 'Pengaturan',
                    headerBackTitle: 'Profil' 
                }} 
            />
        </Stack>
    );
}
