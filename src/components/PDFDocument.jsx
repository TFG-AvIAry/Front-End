import React from 'react';
import { Page, Text, View, Document, Image, StyleSheet } from '@react-pdf/renderer';
import { Chart } from './Chart';

// Estilos del encabezado y pie de página con temática de aves
const headerFooterStyles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 20,
        left: 40,
        right: 40,
        textAlign: 'center',
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        left: 40,
        right: 40,
        textAlign: 'center',
        fontSize: 10,
    },
    birdImage: {
        width: 40,
        height: 40,
    },
});


const Footer = () => (
    <View style={headerFooterStyles.footer}>
        <Text style={{ color: '#449933' }}>www.aviary-app.me</Text>
    </View>
);

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#F7F7F7',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    image: {
        width: 555,
        height: 340,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginTop: 20,
    }
});

const totalConfidenceOfTop5 = (results) => {
    return results.slice(0, 5).reduce((total, result) => total + result.confidence, 0);
};

//<p>Confidence: {((result.confidence / totalConfidenceOfTop5(classificationResults)) * 100).toFixed(2)}%</p>

const ClassificationTable = ({ classificationData }) => {
    const top5 = classificationData.slice(0, 5);
    const totalConfidence = totalConfidenceOfTop5(top5);

    return (
        <View style={tableStyles.table}>
            <View style={tableStyles.row}>
                <Text style={tableStyles.cellLabelWithBorderRightBackground}>Specie</Text>
                <Text style={tableStyles.cellLabelBackground}>Confidence</Text>
            </View>
            {top5.map((row, index) => (
                <View style={tableStyles.row} key={index.toString()}>
                    <Text style={tableStyles.cellValueWithBorderRight}>{row.specie}</Text>
                    <Text style={tableStyles.cellValue}>
                        {((row.confidence / totalConfidence) * 100).toFixed(2)}%
                    </Text>
                </View>
            ))}
        </View>
    );
};


const Table = ({ rows }) => (
    <View style={tableStyles.table}>
        {rows.map((row, index) => (
            <View style={tableStyles.row} key={index.toString()}>
                <Text style={tableStyles.cellLabel}>{row.label}</Text>
                <Text style={tableStyles.cellValue}>{row.value}</Text>
            </View>
        ))}
    </View>
);

const tableStyles = StyleSheet.create({
    table: {
        border: '1 solid #000',
        width: '100%',
        borderWidth: 1,
        borderRightColor: '#000',
        borderBottomColor: '#000',
        marginTop: 15,
    },
    row: { flexDirection: 'row' },
    cellLabel: {
        flex: 1,
        padding: 5,
        fontSize: 12,
        textAlign: 'center',
        backgroundColor: '#a3dd6d',
    },
    cellLabelWithBorderRight: {
        flex: 1,
        padding: 5,
        fontSize: 12,
        textAlign: 'center',
        borderRightColor: '#000',
        borderRightWidth: 1,
    },
    cellLabelWithBorderRightBackground: {
        flex: 1,
        padding: 5,
        fontSize: 12,
        textAlign: 'center',
        borderRightColor: '#000',
        backgroundColor: '#6dbe5d',
        borderRightWidth: 1,
    },
    cellValue: {
        flex: 1,
        padding: 5,
        fontSize: 12,
        textAlign: 'center',
    },
    cellValueWithBorderRight: {
        flex: 1,
        padding: 5,
        fontSize: 12,
        textAlign: 'center',
        borderRightColor: '#000',
        borderRightWidth: 1,
    },
    cellLabelBackground: {
        flex: 1,
        padding: 5,
        fontSize: 12,
        textAlign: 'center',
        borderRightColor: '#000',
        backgroundColor: '#6dbe5d',
        borderRightWidth: 1,
    },
    cellValueHighlighted: {
        flex: 1,
        padding: 5,
        fontSize: 12,
        textAlign: 'center',
        textDecoration: 'underline', // Agregar subrayado
        color: '#oeo', // Cambiar a tu color preferido
      },
});


export const PDFDocument = ({ datosMostrados, dataFromIa3 }) => {
    const dataRows = [
        { label: 'Specie name', value: datosMostrados ? datosMostrados.name : '' },
        { label: 'Habitat', value: datosMostrados ? datosMostrados.habitat : '' },
        { label: 'Colors', value: datosMostrados ? datosMostrados.colores : '' },
        { label: 'Life Expectancy', value: datosMostrados ? datosMostrados.esperanza_de_vida : '' },
        { label: 'Feeding', value: datosMostrados ? datosMostrados.alimentación : '' },
        { label: 'Size', value: datosMostrados ? datosMostrados.tamaño : '' },
        { label: 'Weight', value: datosMostrados ? datosMostrados.peso : '' },
    ];

    const classificationData = dataFromIa3 ? dataFromIa3.map((result) => ({
        specie: result.class,
        confidence: result.confidence,
    })) : [];


    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Image src={datosMostrados ? datosMostrados.imagen : ''} style={styles.image} />
                    <Text style={styles.title}>SPECIE SHEET</Text>

                    <Table rows={dataRows} />

                    <Text style={styles.title}>CLASSIFICATION ANALYSIS</Text>
                    <ClassificationTable classificationData={classificationData} />
                </View>

                <Footer />
            </Page>
        </Document>
    );
};
