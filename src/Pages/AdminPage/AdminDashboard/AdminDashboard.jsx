import BarChartAdmin from "../Chart/BarChartAdmin/BarChartAdmin";
import PieChartAdmin from "../Chart/PieChartAdmin/PieChartAdmin";
import FourDiv from "./Compo/FourDiv";


const AdminDashboard = () => {
  return (
    <div>

      <FourDiv></FourDiv>
      <div>
        <BarChartAdmin></BarChartAdmin>
        <PieChartAdmin></PieChartAdmin>
      </div>

      <div className="p-10">
        <BarChartAdmin></BarChartAdmin>
      </div>
    </div>
  );
};

export default AdminDashboard;