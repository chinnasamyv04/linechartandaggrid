import {useState} from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const AgGridTable = (props) => {

   const [columnDefs] = useState([
       { field: 'weekEnding', sortable:true },
       { field: 'retailSales' , sortable:true },
       { field: 'wholesaleSales', sortable:true  },
       { field: 'unitsSold', sortable:true  },
       { field: 'retailerMargin', sortable:true  }
   ])

   return (
       <div className="ag-theme-alpine" style={{height: 400, width: '100%', paddingTop: 30}}>
           <AgGridReact
               rowData={props.gridData}
               columnDefs={columnDefs}>
           </AgGridReact>
       </div>
   );
};

export default AgGridTable;