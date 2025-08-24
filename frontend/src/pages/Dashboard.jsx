import React, { useEffect, useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export default function Dashboard(){
  const [profile,setProfile] = useState(null);
  const [error,setError] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(!token){ navigate('/login'); return; }
    api.get('/api/user/profile')
      .then(res=> setProfile(res.data))
      .catch(err=>{
        console.error(err);
        setError('Failed to load profile');
        if(err?.response?.status===401 || err?.response?.status===403){
          localStorage.removeItem('token');
          navigate('/login');
        }
      });
  },[]);

  const logout = ()=>{
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <button className="text-sm text-red-600 underline" onClick={logout}>Logout</button>
        </div>
        {error && <div className="mb-3 text-red-600">{error}</div>}
        {profile ? (
          <div className="space-y-2">
            <div><span className="font-medium">Name:</span> {profile.name || profile.fullName || '-'}</div>
            <div><span className="font-medium">Email:</span> {profile.email}</div>
            <div><span className="font-medium">Role:</span> {profile.role}</div>
          </div>
        ) : !error ? <div>Loading…</div> : null}
      </div>
    </div>
  );
}
