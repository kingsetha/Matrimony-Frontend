import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Feather } from 'react-feather'; // or import specific icons if needed
import 'chart.js/auto'; // Import Chart.js styles and components

const Dashboard = () => {
  // Sample data for charts
  const lineChartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Sales',
        data: [30, 45, 40, 60],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const pieChartData = {
    labels: ['Package A', 'Package B', 'Package C'],
    datasets: [
      {
        data: [300, 500, 200],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="page-wrapper">
      <div className="page-breadcrumb">
        <div className="row">
          <div className="col-7 align-self-center">
            <h4 className="page-title text-truncate text-dark font-weight-medium mb-1">Dashboard</h4>
            <div className="d-flex align-items-center">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0 p-0">
                  <li className="breadcrumb-item text-muted active" aria-current="page">Dashboard</li>
                  <li className="breadcrumb-item text-muted" aria-current="page">Dashboard</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row admin-fa_icon">
          {[
            { title: 'Total Members', value: 91, icon: 'users' },
            { title: 'Total Active Members', value: 91, icon: 'users' },
            { title: 'Today Joined Members', value: 0, icon: 'users' },
            { title: 'Total Active Packages', value: 3, icon: 'cubes' },
            { title: "Today's Payment", value: '$0.00', icon: 'hand-holding-usd' },
            { title: "This Month's Payment", value: '$0.00', icon: 'hand-holding-usd' },
            { title: 'Total Payment', value: '$10,133.00', icon: 'hand-holding-usd' },
            { title: 'Payment Charge', value: '$10.50', icon: 'hand-holding-usd' },
          ].map((card, index) => (
            <div key={index} className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
              <div className="card shadow border-right">
                <div className="card-body">
                  <div className="d-flex d-lg-flex d-md-block align-items-center">
                    <div>
                      <div className="d-inline-flex align-items-center">
                        <h2 className="text-dark mb-1 font-weight-medium">{card.value}</h2>
                      </div>
                      <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">{card.title}</h6>
                    </div>
                    <div className="ml-auto mt-md-3 mt-lg-0">
                      <span className="opacity-7 text-muted">
                        <Feather icon={card.icon} size={24} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card shadow">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-8">
                    <h4 className="card-title">This Month's Summary</h4>
                    <div>
                      <Line data={lineChartData} height={150} />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <h4 className="card-title">Package Sale Statistics</h4>
                    <div>
                      <Pie data={pieChartData} height={280} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
