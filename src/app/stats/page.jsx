'use client'
import React from 'react'

import { Pie, PieChart, Cell, Tooltip } from 'recharts';
import { useData } from '@/context/DataContext';

export default function PieChartWithPaddingAngle({ isAnimationActive = true }) {

    const { checkIns } = useData();
    const obj = checkIns.reduce((acc, checkIn) => {
        const { type } = checkIn;
        if (!acc[type]) {
            acc[type] = 0;
        }
        acc[type]++;
        return acc;
    }, {});
    const data = Object.keys(obj).map((key) => {
        return { name: key, value: obj[key] };
    });



    const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];



    return (
        <>
            {
                checkIns.length > 0 ?

                    <div className='flex justify-center items-center flex-col'>

                        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '40vh', aspectRatio: 1 }} responsive>
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                itemStyle={{ color: '#333' }}
                            />
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"
                                // Corner radius is the rounded edge of each pie slice
                                cornerRadius="50%"
                                // fill="#8884d8"

                                // padding angle is the gap between each pie slice
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={isAnimationActive}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>

                        <div className='flex gap-2'>
                            {
                                data.map((d, i) => <p key={i} className='mr-3'><span style={{ backgroundColor: COLORS[i] }} className={`w-4 h-4 inline-block rounded-sm mr-2`}></span>{d.name}</p>)
                            }
                        </div>

                    </div>
                    :
                    <div className='flex flex-col items-center justify-center h-[40vh] bg-red-100/20 text-red-500'>
                        <p>NO Check-Ins yet</p>
                        <p className='text-xl'>Check up on your friedns first</p>
                    </div>
            }

        </>
    );
}
