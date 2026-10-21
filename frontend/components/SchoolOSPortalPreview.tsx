import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

type TabId = 'principal' | 'gradebook' | 'parent' | 'tenancy';

interface Tab {
  id: TabId;
  label: string;
}

interface Metric {
  id: string;
  label: string;
  value: string;
  subtext: string;
  valueColor: string;
  subtextColor?: string;
}

export const SchoolOSPortalPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('principal');

  const metrics: Metric[] = [
    {
      id: 'enrolled',
      label: 'Total Enrolled',
      value: '648 Students',
      subtext: '8 Grade Arms',
      valueColor: 'text-slate-900',
    },
    {
      id: 'rollcall',
      label: 'Roll Call Compliance',
      value: '94.2% Present',
      subtext: '6 of 8 Registers in',
      valueColor: 'text-emerald-600',
      subtextColor: 'text-emerald-600 font-medium',
    },
    {
      id: 'collections',
      label: 'Term Collections',
      value: '$142,500',
      subtext: '79.1% Target Achieved',
      valueColor: 'text-slate-900',
    },
    {
      id: 'staff',
      label: 'Staff On Duty',
      value: '38 / 42 Staff',
      subtext: 'Zero unassigned periods',
      valueColor: 'text-slate-900',
    },
  ];

  const tabs: Tab[] = [
    { id: 'principal', label: 'Principal Dashboard' },
    { id: 'gradebook', label: 'Teacher Gradebook & Roll Call' },
    { id: 'parent', label: 'Parent Portal & Fees' },
    { id: 'tenancy', label: 'Multi-Campus SaaS Tenancy' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 font-sans">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden transition-all">
        
        <div className="bg-[#0b1329] text-slate-300 px-4 py-3 flex items-center justify-between text-xs sm:text-sm select-none">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80 transition cursor-pointer"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500 hover:opacity-80 transition cursor-pointer"></span>
              <span className="w-3 h-3 rounded-full bg-green-500 hover:opacity-80 transition cursor-pointer"></span>
            </div>
            <div className="text-slate-400 font-mono tracking-wide hidden sm:block">
              schoolos.app/portal/apex-academy
            </div>
          </div>

          <div className="flex items-center space-x-2 bg-slate-800/80 text-slate-200 px-3 py-1 rounded-full text-xs border border-slate-700/50">
            <span className="text-slate-400">Tenant:</span>
            <span className="font-semibold text-white">Apex International Academy</span>
          </div>
        </div>

        <div className="bg-[#f8fafc] p-4 sm:p-6 space-y-6">
          
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-200/60 p-1.5 rounded-xl text-xs sm:text-sm font-medium">
            <div className="flex flex-wrap items-center gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  type="button"
                  className={`px-3.5 py-2 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-white text-slate-900 shadow-sm font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="flex items-center space-x-1.5 bg-[#0b1329] hover:bg-slate-800 text-white px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors shadow-sm ml-auto sm:ml-0"
            >
              <span>Open in Full Portal</span>
              <ExternalLink size={13} />
            </button>
          </div>

          <div className="bg-white rounded-xl border border-slate-200/70 p-5 sm:p-6 shadow-sm space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                  Principal's Executive Operations Overview
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  Apex International Academy • 2025/2026 Session • Term 1
                </p>
              </div>

              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                  Campus In Session
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {metrics.map((metric) => (
                <div
                  key={metric.id}
                  className="bg-slate-50/70 hover:bg-slate-50 border border-slate-200/80 rounded-xl p-4 transition-all duration-200"
                >
                  <p className="text-xs text-slate-500 font-medium mb-1.5">
                    {metric.label}
                  </p>
                  <h3 className={`text-xl sm:text-2xl font-bold ${metric.valueColor}`}>
                    {metric.value}
                  </h3>
                  <p className={`text-xs mt-1 ${metric.subtextColor ?? 'text-slate-400'}`}>
                    {metric.subtext}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-slate-50/50 border border-slate-200/80 rounded-xl p-4 space-y-2">
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                <span className="text-slate-800">Term Broadsheet Verifications</span>
                <span className="text-slate-600 font-medium">
                  <strong className="text-slate-900">2 of 5</strong> Approved
                </span>
              </div>

              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-[#0b1329] h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: '40%' }}
                ></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolOSPortalPreview;