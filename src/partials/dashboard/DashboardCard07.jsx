import React from 'react';
import '../community/main.css';

function DashboardCard07() {
  return (
    <div className="col-span-full xl:col-span-8 bg-gradient shadow-lg rounded-sm">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-bold text-indigo-500">Startups Interested in You</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-gradient rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-bold text-center text-indigo-500">NAMES</div>
                </th>
                <th className="p-2">
                  <div className="font-bold text-center text-indigo-500">STAGE</div>
                </th>
                <th className="p-2">
                  <div className="font-bold text-center text-indigo-500">SECTOR</div>
                </th>
                <th className="p-2">
                  <div className="font-bold text-center text-indigo-500">TOTAL EMPLOYEES</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-md font-medium divide-y divide-slate-100">
              {/* Row */}
              <tr>
                <td className="p-2">
                 
                    <div className="text-center text-indigo-300">
                      <a
                      href="https://formi.co.in/"
                      >
                        Formi
                      </a></div>
                  
                </td>
                <td className="p-2">
                  <div className="text-center text-white">Early</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-white">IT</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-white">18-20</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  
                    
                    <div className="text-center text-indigo-300"><a
                      href='https://www.fundinc.in/'
                      >
                      Fundinc
                      </a></div>
                
                </td>
                <td className="p-2">
                  <div className="text-center text-white">Seed</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-white">FinTech</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-white">4-5</div>
                </td>
                
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  
                    
                    <div className="text-indigo-300 text-center"><a
                      href='https://www.zaubacorp.com/company/AION-HEALTH-SOLUTIONS-PRIVATE-LIMITED/U33302KA2022PTC157477'
                      >
                      Aion Health
                      </a></div>
                
                </td>
                <td className="p-2">
                  <div className="text-center text-white">Early</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-white">Health-Care</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-white">3-5</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  
                    
                    <div className="text-indigo-300  text-center"><a
                      href='https://www.instagram.com/goperch.in/'
                     
                      >
                      Go Perch
                      </a></div>
                 
                </td>
                <td className="p-2">
                  <div className="text-center text-white">Pre-Seed</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-white">IT</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-white">4-5</div>
                </td>
               
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  
                    
                    <div className="text-indigo-300 text-center"><a 
                      href='https://www.instagram.com/225.in/'
                      >
                      225
                      </a></div>
                
                </td>
                <td className="p-2">
                  <div className="text-center text-white">Pre-Seed</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-white">E-Commerce</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-white">8-10</div>
                </td>
              
              </tr>

              <tr>
                <td className="p-2">
                  
                    
                    <div className="text-indigo-300 text-center"><a 
                      href='https://www.instagram.com/mannkare.co/'
                      >
                      Mann Kare
                      </a></div>
                
                </td>
                <td className="p-2">
                  <div className="text-center text-white">Pre-Seed</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-white">E-Commerce</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-white">2-3</div>
                </td>
              
              </tr>

              <tr>
                <td className="p-2">
                  
                    
                    <div className="text-indigo-300  text-center"><a
                      href='https://peryton.in'
                      >
                      Peryton
                      </a></div>
                
                </td>
                <td className="p-2">
                  <div className="text-center text-white">Pre-Seed</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-white">IT</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-white">3-5</div>
                </td>
              
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
