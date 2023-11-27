import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
        padding: 30,
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
        margin: 10,
        fontWeight: 'bold',
    },
    text: {
        margin: 10,
        fontSize: 14,
        textAlign: 'justify',
    },
    table: {
        display: 'table',
        width: 'auto',
        margin: 'auto',
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableCol: {
        width: '25%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#bfbfbf',
        padding: 5,
    },
    tableCol2: {
        width: '50%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#bfbfbf',
        padding: 5,
    },
});

const Resume = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.title}>John Doe</Text>
                <Text style={styles.subtitle}>Software Developer</Text>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    vestibulum, enim vel bibendum bibendum, ipsum sapien bibendum
                    mauris, vel lacinia sapien libero nec nisi. Nulla facilisi.
                    Suspendisse potenti. Donec euismod, velit vel pharetra
                    malesuada, enim sapien aliquam nunc, vel dictum elit sapien
                    vel augue. Sed euismod, quam eget rhoncus bibendum, velit
                    libero bibendum magna, in ornare nisl velit ut elit.
                </Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.subtitle}>Skills</Text>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                            <Text style={styles.text}>Skill 1</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <View style={styles.tableRow}>
                                <View style={styles.tableCol2}>
                                    <Text style={styles.text}>Subskill 1.1</Text>
                                </View>
                                <View style={styles.tableCol2}>
                                    <Text style={styles.text}>Subskill 1.2</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.tableRow}>
                        <View style={styles.tableCol}>
                            <Text style={styles.text}>Skill 2</Text>
                        </View>
                        <View style={styles.tableCol}>
                            <Text style={styles.text}>Subskill 2.1</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.subtitle}>Experience</Text>
                <Text style={styles.text}>
                    Software Developer at Acme Inc. (2019 - Present){'\n'}
                    - Developed and maintained web applications using React and
                    Node.js{'\n'}
                    - Collaborated with cross-functional teams to design and
                    implement new features{'\n'}
                    - Improved application performance by optimizing code and
                    reducing load times{'\n'}
                </Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.subtitle}>Education</Text>
                <Text style={styles.text}>
                    Bachelor of Science in Computer Science, XYZ University
                    (2015 - 2019){'\n'}
                    - Graduated with honors{'\n'}
                    - Relevant coursework: Data Structures, Algorithms, Web
                    Development, Database Systems{'\n'}
                </Text>
            </View>
        </Page>
    </Document>
);
export default Resume