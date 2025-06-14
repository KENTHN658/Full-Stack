import { useEffect, useState } from 'react';
import api from '../api/apisix';

function RouteList() {
  type Route = {
    uri: string;
    upstream_id: string;
    [key: string]: any;
  };
  const [routes, setRoutes] = useState<Route[]>([]);

  useEffect(() => {
    api.get('/routes').then((res: { data: any }) => {
      const list = Object.values(res.data.node?.nodes || {}).map((n: any) => n.value);
      setRoutes(list);
    });
  }, []);

  return (
    <div>
      <h2>📋 All Routes</h2>
      <ul>
        {routes.map((r, i) => (
          <li key={i}>{r.uri} → upstream ID: {r.upstream_id}</li>
        ))}
      </ul>
    </div>
  );
}

export default RouteList;
