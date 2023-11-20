import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10,
    },
    text: {
        fontSize: 12,
        textAlign: 'justify',
        margin: 10,
    },
    field: {
        fontSize: 12,
        textAlign: 'left',
        margin: 10,
        borderBottom: '1pt solid black',
        paddingBottom: 5,
    },
});

const ComplaintForm = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.title}>Phản ánh của tôi</Text>
                <Text style={styles.subtitle}>Thông tin cá nhân</Text>
                <Text style={styles.text}>Họ và tên: </Text>
                <Text style={styles.field}></Text>
                <Text style={styles.text}>Địa chỉ: </Text>
                <Text style={styles.field}></Text>
                <Text style={styles.text}>Số điện thoại: </Text>
                <Text style={styles.field}></Text>
                <Text style={styles.text}>Email: </Text>
                <Text style={styles.field}></Text>
                <Text style={styles.subtitle}>Thông tin phản ánh</Text>
                <Text style={styles.text}>Nội dung phản ánh: </Text>
                <Text style={styles.field}></Text>
                <Text style={styles.text}>Thời gian phát hiện: </Text>
                <Text style={styles.field}></Text>
                <Text style={styles.text}>Địa điểm phát hiện: </Text>
                <Text style={styles.field}></Text>
                <Text style={styles.text}>Tên cơ quan, đơn vị liên quan: </Text>
                <Text style={styles.field}></Text>
                <Text style={styles.text}>Địa chỉ cơ quan, đơn vị liên quan: </Text>
                <Text style={styles.field}></Text>
                <Text style={styles.text}>Số điện thoại cơ quan, đơn vị liên quan: </Text>
                <Text style={styles.field}></Text>
                <Text style={styles.text}>Email cơ quan, đơn vị liên quan: </Text>
                <Text style={styles.field}></Text>
            </View>
        </Page>
    </Document>
);
export default ComplaintForm