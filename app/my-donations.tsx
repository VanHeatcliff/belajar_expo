import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Mock data untuk riwayat donasi
const DONATION_HISTORY = [
    {
        id: '1',
        title: 'Bantu Operasi Adik Budi',
        amount: 'Rp 150.000',
        date: '10 Mei 2026',
        status: 'Berhasil',
        icon: 'medical'
    },
    {
        id: '2',
        title: 'Bantuan Air Bersih Desa X',
        amount: 'Rp 50.000',
        date: '28 Apr 2026',
        status: 'Berhasil',
        icon: 'water'
    },
    {
        id: '3',
        title: 'Bantu Pembangunan Panti Asuhan Y',
        amount: 'Rp 100.000',
        date: '15 Mar 2026',
        status: 'Berhasil',
        icon: 'home'
    },
    {
        id: '4',
        title: 'Sedekah Makanan Jumat',
        amount: 'Rp 25.000',
        date: '06 Mar 2026',
        status: 'Gagal',
        icon: 'restaurant'
    }
];

export default function MyDonations() {
    const renderItem = ({ item }: { item: any }) => (
        <View style={styles.card}>
            <View style={[
                styles.iconContainer, 
                { backgroundColor: item.status === 'Berhasil' ? '#d1fae5' : '#fee2e2' }
            ]}>
                <Ionicons 
                    name={item.icon as any} 
                    size={24} 
                    color={item.status === 'Berhasil' ? '#10b981' : '#ef4444'} 
                />
            </View>
            
            <View style={styles.cardContent}>
                <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.amount}>{item.amount}</Text>
            </View>

            <View style={styles.statusContainer}>
                <View style={[
                    styles.statusBadge, 
                    { backgroundColor: item.status === 'Berhasil' ? '#10b981' : '#ef4444' }
                ]}>
                    <Text style={styles.statusText}>{item.status}</Text>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.summaryContainer}>
                <Text style={styles.summaryTitle}>Total Donasi Sukses</Text>
                <Text style={styles.summaryAmount}>Rp 300.000</Text>
                <Text style={styles.summaryCount}>Dari 3 transaksi</Text>
            </View>

            <FlatList
                data={DONATION_HISTORY}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f4f6',
    },
    summaryContainer: {
        backgroundColor: '#10b981',
        padding: 24,
        alignItems: 'center',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        marginBottom: 16,
        elevation: 4,
        shadowColor: '#10b981',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },
    summaryTitle: {
        color: '#d1fae5',
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 8,
    },
    summaryAmount: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    summaryCount: {
        color: '#a7f3d0',
        fontSize: 12,
    },
    listContainer: {
        padding: 16,
        paddingBottom: 40,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    cardContent: {
        flex: 1,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 4,
    },
    date: {
        fontSize: 12,
        color: '#6b7280',
        marginBottom: 6,
    },
    amount: {
        fontSize: 14,
        fontWeight: '700',
        color: '#10b981',
    },
    statusContainer: {
        marginLeft: 8,
    },
    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    statusText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
});
