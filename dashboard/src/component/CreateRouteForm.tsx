import { useState } from 'react';
import api from '../api/apisix';

function CreateRouteForm() {
  const [uri, setUri] = useState('');
  const [upstreamId, setUpstreamId] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const routeId = Date.now(); // ใช้ timestamp เป็น ID
    api.put(`/routes/${routeId}`, {
      uri,
      upstream_id: upstreamId,
    }).then(() => {
      alert('✅ Route created!');
      window.location.reload();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={uri} onChange={e => setUri(e.target.value)} placeholder="/api/xxx" required />
      <input value={upstreamId} onChange={e => setUpstreamId(e.target.value)} placeholder="upstream id" required />
      <button type="submit">Create Route</button>
    </form>
  );
}

export default CreateRouteForm;
