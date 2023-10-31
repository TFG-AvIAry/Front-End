import React, { useEffect } from 'react';
import * as echarts from 'echarts/core';
import { TitleComponent, LegendComponent } from 'echarts/components';
import { RadarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([TitleComponent, LegendComponent, RadarChart, CanvasRenderer]);

export const Chart = ({ classificationResults }) => {


    useEffect(() => {
        const chartDom = document.getElementById('radar-chart');
        const myChart = echarts.init(chartDom);

        const indicatorData = classificationResults.map(result => ({
            name: result.class,
            max: 10,
        }));
        const option = {
            legend: {
                data: classificationResults.map(result => result.class),
            },
            radar: {
                indicator: indicatorData,
            },
            series: {
                type: 'radar',
                data: classificationResults.map(result => ({
                    name: result.class,
                    value: [result.confidence],
                })),
            },
        };
        

        option && myChart.setOption(option);

        // Cleanup when the component unmounts
        return () => {
            myChart.dispose();
        };
    }, [classificationResults]);

    return (
        <div id="radar-chart" style={{ width: '100%', height: '400px' }}></div>
    );
};
