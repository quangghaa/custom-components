import React from "react";
import DataTable from "./pages/data_table/DataTable";
import "./App.scss";
import CustomComponentLayout from "./layout/CustomComponentLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PDF from "./pages/PDF";
import AdminToolUI from "./pages/AdminToolUI";
import DataList from "./pages/data_list/DataList";
import DataTableDetail from "./pages/data_table_detail/DataTableDetail";
import DataCollapse from "./pages/data_collapse/DataCollapse";
import DataCard from "./pages/data_card/DataCard";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CustomComponentLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pdf" element={<PDF />} />
          <Route path="/admin-tool" element={<AdminToolUI />} />
          <Route path="/table-view" element={<DataTable />} />
          <Route path="/table-view/detail" element={<DataTableDetail />} />
          <Route path="/list-view" element={<DataList />} />
          <Route path="/collapse-view" element={<DataCollapse />} />
          <Route path="/card-view" element={<DataCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
