const tables = document.querySelectorAll('table');
const jsonString = `{
   "G1": [
      [
         "192.168.1.1",
         "Free",
         "G1"
      ],
      [
         "192.168.1.10",
         "In Use",
         "G1"
      ],
      [
         "192.168.1.2",
         "In Use",
         "G1"
      ],
      [
         "192.168.1.3",
         "In Use",
         "G1"
      ],
      [
         "192.168.1.4",
         "In Use",
         "G1"
      ],
      [
         "192.168.1.5",
         "Free",
         "G1"
      ],
      [
         "192.168.1.6",
         "Free",
         "G1"
      ],
      [
         "192.168.1.7",
         "Free",
         "G1"
      ],
      [
         "192.168.1.8",
         "In Use",
         "G1"
      ],
      [
         "192.168.1.9",
         "Free",
         "G1"
      ]
   ],
   "G2": [
      [
         "192.168.1.1",
         "Free",
         "G2"
      ],
      [
         "192.168.1.10",
         "In Use",
         "G2"
      ],
      [
         "192.168.1.2",
         "In Use",
         "G2"
      ],
      [
         "192.168.1.3",
         "In Use",
         "G2"
      ],
      [
         "192.168.1.4",
         "In Use",
         "G2"
      ],
      [
         "192.168.1.5",
         "Free",
         "G2"
      ],
      [
         "192.168.1.6",
         "Free",
         "G2"
      ],
      [
         "192.168.1.7",
         "Free",
         "G2"
      ],
      [
         "192.168.1.8",
         "In Use",
         "G2"
      ],
      [
         "192.168.1.9",
         "Free",
         "G2"
      ]
   ],
   "H1": [
      [
         "192.168.3.1",
         "In Use",
         "H1"
      ],
      [
         "192.168.3.10",
         "In Use",
         "H1"
      ],
      [
         "192.168.3.2",
         "Free",
         "H1"
      ],
      [
         "192.168.3.3",
         "In Use",
         "H1"
      ],
      [
         "192.168.3.4",
         "Free",
         "H1"
      ],
      [
         "192.168.3.5",
         "In Use",
         "H1"
      ],
      [
         "192.168.3.6",
         "In Use",
         "H1"
      ],
      [
         "192.168.3.7",
         "Free",
         "H1"
      ],
      [
         "192.168.3.8",
         "In Use",
         "H1"
      ],
      [
         "192.168.3.9",
         "In Use",
         "H1"
      ]
   ],
   "H2": [
      [
         "192.168.4.1",
         "In Use",
         "H2"
      ],
      [
         "192.168.4.10",
         "In Use",
         "H2"
      ],
      [
         "192.168.4.2",
         "Free",
         "H2"
      ],
      [
         "192.168.4.3",
         "In Use",
         "H2"
      ],
      [
         "192.168.4.4",
         "Free",
         "H2"
      ],
      [
         "192.168.4.5",
         "In Use",
         "H2"
      ],
      [
         "192.168.4.6",
         "In Use",
         "H2"
      ],
      [
         "192.168.4.7",
         "Free",
         "H2"
      ],
      [
         "192.168.4.8",
         "In Use",
         "H2"
      ],
      [
         "192.168.4.9",
         "In Use",
         "H2"
      ]
   ]
}`;

// const allData = JSON.parse(jsonString)
const allData = {{ results|tojson }};
console.log(allData) 
for (table in allData) {
      tableBody = document.querySelector(`#${table}-body`);
      let tableBodyHTML = '';
      // console.log(table)
      // console.log(allData[table])
      // console.log(table.length)
      // console.log(table)
      for (let i=0; i<allData[table].length; i++) {
         if (allData[table][i][1] === "In Use") {
            tableBodyHTML += `<tr class="bg-danger"><td>${allData[table][i][0]}</td><td>${allData[table][i][1]}</td></tr>`;
         } else {
            tableBodyHTML += `<tr class="bg-success"><td>${allData[table][i][0]}</td><td>${allData[table][i][1]}</td></tr>`;
         }
         
         console.log(tableBodyHTML);
      };
      tableBody.innerHTML = tableBodyHTML;
};

// console.log(tables)
console.log(Array.isArray(allData));
console.log(allData);