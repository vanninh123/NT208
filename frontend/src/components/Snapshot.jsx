import React from 'react';
import { getSnapshotApi } from '../apis/getSnapshotApi';


function Snapshot({ name, data }) {
  const utcDate = new Date(data.created_time);
  console.log(data.created_time);
  function convertToTimeZone(date, offset) {
    const localTime = new Date(date.getTime() + offset * 60 * 60 * 1000);
    return localTime;
  }

  async function getSnapshot() {
    const snapshot = await getSnapshotApi.get(data.snapshot_id);
    console.log(snapshot);
  }

  const vietnamOffset = 7;
  const vietnamTime = convertToTimeZone(utcDate, vietnamOffset);

  const formattedVietnamTime = vietnamTime.toISOString().slice(0, 19).replace('T', ' ');
  return (
    <div href={`/${data.snapshot_id}`} className='w-80 mx-auto h-40 bg-slate-200 text-black cursor-pointer py-5 px-3'>
      <a href={`/${data.snapshot_id}`}>
        <h3 className='mb-10'>Snapshot for {name}</h3>
        <p>Saved at: {formattedVietnamTime}</p>
      </a>
    </div>
  );
}

export default Snapshot;