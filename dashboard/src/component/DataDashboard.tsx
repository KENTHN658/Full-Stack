// src/components/DataDashboard.js
import { useEffect, useState } from "react";
import axios from "axios";

type Item = { name: string }; // Adjust fields as needed

const DataDashboard = () => {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    axios.get<Item[]>("http://localhost:9080/data", {
      headers: {
        "X-API-KEY": "my-api-key"  // ต้องมีถ้าเปิด API Key Auth ใน Step 5
      }
    })
    .then(res => setData(res.data))
    .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Data from Backend</h1>
      <ul>
        {data.map((item, idx) => (
          <li key={idx}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataDashboard;
