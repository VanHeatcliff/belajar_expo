import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
    return (
        <ScrollView style={styles.container}>
            {/* Header / Greeting */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.greeting}>Halo, Orang Baik!</Text>
                    <Text style={styles.subGreeting}>Mari bantu sesama hari ini</Text>
                </View>
                <TouchableOpacity style={styles.profileBtn}>
                    <Ionicons name="notifications-outline" size={24} color="#1f2937" />
                </TouchableOpacity>
            </View>

            {/* Impact Card */}
            <View style={styles.impactCard}>
                <Text style={styles.impactTitle}>Total Donasimu</Text>
                <Text style={styles.impactAmount}>Rp 1.250.000</Text>
                <TouchableOpacity style={styles.impactBtn}>
                    <Text style={styles.impactBtnText}>Lihat Riwayat</Text>
                </TouchableOpacity>
            </View>

            {/* Urgent Campaigns */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Bantuan Mendesak</Text>
                
                <View style={styles.campaignCard}>
                    <View style={styles.campaignImagePlaceholder}>
                        <Ionicons name="medical" size={40} color="#fff" />
                    </View>
                    <View style={styles.campaignInfo}>
                        <Text style={styles.campaignTitle}>Bantu Operasi Adik Budi</Text>
                        <Text style={styles.campaignOrganizer}>Yayasan Peduli Anak</Text>
                        
                        <View style={styles.progressContainer}>
                            <View style={[styles.progressBar, { width: '70%' }]} />
                        </View>
                        
                        <View style={styles.statsRow}>
                            <Text style={styles.statsText}>Terkumpul: Rp 35jt</Text>
                            <Text style={styles.statsText}>Sisa 3 Hari</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.campaignCard}>
                    <View style={[styles.campaignImagePlaceholder, { backgroundColor: '#f59e0b' }]}>
                        <Ionicons name="water" size={40} color="#fff" />
                    </View>
                    <View style={styles.campaignInfo}>
                        <Text style={styles.campaignTitle}>Bantuan Air Bersih Desa X</Text>
                        <Text style={styles.campaignOrganizer}>Aksi Cepat Tanggap</Text>
                        
                        <View style={styles.progressContainer}>
                            <View style={[styles.progressBar, { width: '40%' }]} />
                        </View>
                        
                        <View style={styles.statsRow}>
                            <Text style={styles.statsText}>Terkumpul: Rp 12jt</Text>
                            <Text style={styles.statsText}>Sisa 14 Hari</Text>
                        </View>
                    </View>
                </View>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    greeting: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1f2937',
    },
    subGreeting: {
        fontSize: 14,
        color: '#6b7280',
        marginTop: 4,
    },
    profileBtn: {
        padding: 8,
        backgroundColor: '#f3f4f6',
        borderRadius: 20,
    },
    impactCard: {
        margin: 20,
        padding: 24,
        backgroundColor: '#10b981', // Emerald primary
        borderRadius: 16,
        elevation: 4,
        shadowColor: '#10b981',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    impactTitle: {
        color: '#d1fae5',
        fontSize: 14,
        fontWeight: '600',
    },
    impactAmount: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 8,
        marginBottom: 16,
    },
    impactBtn: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        alignSelf: 'flex-start',
    },
    impactBtnText: {
        color: '#fff',
        fontWeight: '600',
    },
    section: {
        padding: 20,
        paddingTop: 0,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 16,
    },
    campaignCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
    },
    campaignImagePlaceholder: {
        height: 120,
        backgroundColor: '#3b82f6', // blue-500
        alignItems: 'center',
        justifyContent: 'center',
    },
    campaignInfo: {
        padding: 16,
    },
    campaignTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 4,
    },
    campaignOrganizer: {
        fontSize: 14,
        color: '#6b7280',
        marginBottom: 12,
    },
    progressContainer: {
        height: 8,
        backgroundColor: '#e5e7eb',
        borderRadius: 4,
        overflow: 'hidden',
        marginBottom: 8,
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#10b981',
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statsText: {
        fontSize: 12,
        color: '#6b7280',
        fontWeight: '500',
    },
});
