import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function Profile() {
    return (
        <ScrollView style={styles.container}>
            {/* User Info */}
            <View style={styles.header}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>OB</Text>
                </View>
                <Text style={styles.name}>Orang Baik</Text>
                <Text style={styles.email}>orangbaik@example.com</Text>
                
                <TouchableOpacity style={styles.editBtn}>
                    <Text style={styles.editBtnText}>Edit Profil</Text>
                </TouchableOpacity>
            </View>

            {/* Menu Options */}
            <View style={styles.menuSection}>
                <Link href="/my-donations" asChild>
                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuIcon}>
                            <Ionicons name="heart" size={20} color="#10b981" />
                        </View>
                        <Text style={styles.menuText}>Donasi Saya</Text>
                        <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                    </TouchableOpacity>
                </Link>

                <TouchableOpacity style={styles.menuItem}>
                    <View style={styles.menuIcon}>
                        <Ionicons name="bookmark" size={20} color="#3b82f6" />
                    </View>
                    <Text style={styles.menuText}>Kampanye Tersimpan</Text>
                    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                </TouchableOpacity>

                <Link href="/settings" asChild>
                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuIcon}>
                            <Ionicons name="settings" size={20} color="#6b7280" />
                        </View>
                        <Text style={styles.menuText}>Pengaturan</Text>
                        <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
                    </TouchableOpacity>
                </Link>

                <TouchableOpacity style={[styles.menuItem, { borderBottomWidth: 0 }]}>
                    <View style={styles.menuIcon}>
                        <Ionicons name="log-out" size={20} color="#ef4444" />
                    </View>
                    <Text style={[styles.menuText, { color: '#ef4444' }]}>Keluar</Text>
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
    header: {
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#10b981',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    avatarText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 4,
    },
    email: {
        fontSize: 14,
        color: '#6b7280',
        marginBottom: 16,
    },
    editBtn: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#d1d5db',
        borderRadius: 20,
    },
    editBtnText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#4b5563',
    },
    menuSection: {
        marginTop: 20,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e5e7eb',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f3f4f6',
    },
    menuIcon: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#f9fafb',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    menuText: {
        flex: 1,
        fontSize: 16,
        color: '#1f2937',
        fontWeight: '500',
    },
});
