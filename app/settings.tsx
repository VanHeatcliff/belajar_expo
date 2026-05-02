import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Settings() {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [emailUpdatesEnabled, setEmailUpdatesEnabled] = useState(false);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Notifikasi</Text>
                
                <View style={styles.settingItem}>
                    <View style={styles.settingInfo}>
                        <Ionicons name="notifications-outline" size={24} color="#4b5563" />
                        <Text style={styles.settingText}>Notifikasi Push</Text>
                    </View>
                    <Switch 
                        value={notificationsEnabled} 
                        onValueChange={setNotificationsEnabled} 
                        trackColor={{ false: '#d1d5db', true: '#10b981' }}
                        thumbColor="#ffffff"
                    />
                </View>

                <View style={styles.settingItem}>
                    <View style={styles.settingInfo}>
                        <Ionicons name="mail-outline" size={24} color="#4b5563" />
                        <Text style={styles.settingText}>Pembaruan via Email</Text>
                    </View>
                    <Switch 
                        value={emailUpdatesEnabled} 
                        onValueChange={setEmailUpdatesEnabled} 
                        trackColor={{ false: '#d1d5db', true: '#10b981' }}
                        thumbColor="#ffffff"
                    />
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Akun</Text>
                
                <TouchableOpacity style={styles.actionItem}>
                    <Text style={styles.actionText}>Ubah Kata Sandi</Text>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionItem}>
                    <Text style={styles.actionText}>Bahasa (Indonesia)</Text>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Bantuan & Informasi</Text>
                
                <TouchableOpacity style={styles.actionItem}>
                    <Text style={styles.actionText}>Pusat Bantuan</Text>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionItem}>
                    <Text style={styles.actionText}>Syarat & Ketentuan</Text>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.actionItem, { borderBottomWidth: 0 }]}>
                    <Text style={styles.actionText}>Kebijakan Privasi</Text>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                </TouchableOpacity>
            </View>

            <View style={styles.dangerZone}>
                <TouchableOpacity style={styles.deleteBtn}>
                    <Text style={styles.deleteBtnText}>Hapus Akun</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f4f6',
    },
    section: {
        backgroundColor: '#ffffff',
        marginTop: 20,
        paddingHorizontal: 16,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e5e7eb',
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#6b7280',
        marginTop: 16,
        marginBottom: 8,
        textTransform: 'uppercase',
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f3f4f6',
    },
    settingInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    settingText: {
        fontSize: 16,
        color: '#1f2937',
        marginLeft: 12,
    },
    actionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f3f4f6',
    },
    actionText: {
        fontSize: 16,
        color: '#1f2937',
    },
    dangerZone: {
        padding: 20,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 40,
    },
    deleteBtn: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ef4444',
    },
    deleteBtnText: {
        color: '#ef4444',
        fontWeight: 'bold',
        fontSize: 14,
    },
});
