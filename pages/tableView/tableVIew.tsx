import type { NextPage } from 'next';
import React from 'react';
import tableStyles from '../../styles/table.module.scss';
import { data } from './testData';

const TableView: NextPage = () => {
  return (
    <table className="table-auto">
      <thead className='bg-gray-300'>
        <tr>
          <th colSpan={5} className="border border-gray-500 text-left">
            <button className='mr-2'>←</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded">プロジェクト追加＋</button>
          </th>
        </tr>
        <tr>
          <th className="border border-gray-500"></th>
          <th className="border border-gray-500">件名</th>
          <th className="border border-gray-500">開始</th>
          <th className="border border-gray-500">終了</th>
          <th className="border border-gray-500">先行タスク</th>
        </tr>
      </thead>
      <tbody>
        {data.map(d => (
          d.projectA.map((a, index) => (
            <tr className="text-center">
              <td className="border border-gray-500">{index + 1}</td>
              <td className="border border-gray-500">
                <input type="checkbox"/>
                <span>{a.subject}</span>
              </td>
              <td className="border border-gray-500">{a.start}</td>
              <td className="border border-gray-500">{a.end}</td>
              <td className="border border-gray-500"></td>
            </tr>
          ))
        ))}
        <tr>
          <td className="border border-gray-500"></td>
          <td className="border border-gray-500">
            <button className="text-blue-500">タスク追加</button>
          </td>
          <td className="border border-gray-500"></td>
          <td className="border border-gray-500"></td>
          <td className="border border-gray-500"></td>
        </tr>
      </tbody>
    </table>
  )
}

export default TableView;
