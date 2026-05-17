import './App.css';
import Calendar from './components/calendar/Calendar';
import ContentCards from './components/content-cards/ContentCards';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Stats from './components/stats/Stats';

function App() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-content">
        <Header />
        <ContentCards />

        <div className="bottom-row">
          <div className="left">
            <Stats />
          </div>

          <div className="right">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
