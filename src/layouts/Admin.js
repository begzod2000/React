import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import Reestr from "views/admin/Reestr.js";
import iPolis from "views/admin/iPolis";
import Mail from "views/admin/Mail";
import CRM from "views/admin/CRM";
import Moodle from "views/admin/Moodle";
import Pegas from "views/admin/Pegas";
import Users from "../views/admin/Users";
import CardReyting from "../components/Cards/CardReyting";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Route path="/admin/reestr" exact component={Reestr} />
            <Route path="/admin/ipolis" exact component={iPolis} />
            <Route path="/admin/mail" exact component={Mail} />
            <Route path="/admin/crm" exact component={CRM} />
            <Route path="/admin/moodle" exact component={Moodle} />
            <Route path="/admin/pegas" exact component={Pegas} />
            <Route path="/admin/users" exact component={Users} />
            <Route path="/admin/reyting" exact component={CardReyting} />

            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
