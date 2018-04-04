let packageStyles = {
    die: [{
      num: '5010',
      name: 'Folding Carton',
      desc: 'E-Flute Internal Holds 1 CD in Jewel Case',
      comName: 'Tuck Box',
      finDim: "7.5'' x 1.5'' x 8.25''",
      stocks: ['sbs','flute']
    },
    {
      num: '2179',
      name: 'Folding Carton',
      desc: 'Holds 2 6-Panel CD Jackets and 2 8-Panel CD Jackets',
      comName: 'Tuck Box',
      finDim: "5.062'' x 1'' x 5.082''",
      stocks: ['sbs','flute']
    },
    {
      num: '5066',
      name: 'Book Style',
      desc: 'Software Box',
      comName: 'Tuck Box',
      finDim: "7.75'' x 1.502'' x 10''",
      stocks: ['sbs','flute']
    },
    {
      num: '6370',
      name: 'Book Style',
      desc: 'Software Box with Crash Lock Bottom',
      comName: 'Tuck Box',
      finDim: "8.25'' x 2'' x 9.25''",
      stocks: ['sbs','flute']
    },
    {
      num: '8002',
      name: 'Library Case',
      desc: 'Holds 3 Jewel Cases',
      comName: 'Sleeve',
      finDim: "5'' x 1.281'' x 5.687''",
      stocks: ['sbs','flute','turned-edge']
    },
    {
      num: '3048',
      name: 'Folding Carton',
      desc: 'Box with Crash Lock Bottom, Internal Glassine Window and Locking Tuck Tab',
      comName: 'Tuck Box',
      finDim: "5.875'' x 5.875'' x 5.875''",
      stocks: ['sbs','flute']
    },
    {
      num: '8154',
      name: 'O-Sleeve',
      desc: '4 Panel Wraps 1 CD Jewel',
      comName: 'Sleeve',
      finDim: "5.656'' x 4.427'' x 5.906''",
      stocks: ['sbs','flute','turned-edge']
    },
    {
      num: '2107',
      name: 'Folding Carton',
      desc: 'Holds 1 Quad Jewel',
      comName: 'Tuck Box',
      finDim: "4.937'' x 1.015'' x 5.598''",
      stocks: ['sbs','flute']
    },
    {
      num: '3029',
      name: 'Folding Carton',
      desc: 'Straight Tuck w/Inner-Platform',
      comName: 'Tuck Box',
      finDim: "6.75'' x 2'' x 9.018''",
      stocks: ['sbs','flute']
    },
    {
      num: '4028',
      name: 'Flush Cut',
      desc: 'Corrugated Box w/Handle',
      comName: 'Clamshell',
      finDim: "12.283'' x 9.842'' x 2.834''",
      stocks: ['sbs','flute']
    },
    {
      num:"6480", 
      name:"Book Style", 
      desc: "Box w/CD Slit", 
      comName:"Tuck Box", 
      finDim:" 6.0625'' x 0.3594'' x 9.0938''", 
      stocks:["sbs"]
    },
    {
      num:"1119", 
      name:"Pocket Folder", 
      desc:"2 Pockets w/Business Card Slot", 
      comName:"Folder", 
      finDim: " 9'' x 0.0625'' x 12''", 
      stocks: ["sbs"]
    },
    {
      num:"1416", 
      name:"Pocket Folder", 
      desc:"Capacity and Business Card Slot", 
      comName:"Folder", 
      finDim:" 9.25'' x 0.375'' x 12''", 
      stocks:["sbs" ]
    },
    {
      num:"5000", 
      name:"Jacket", 
      desc:"CD Quick Sleeve", 
      comName:"Sleeve", 
      finDim:" 5.138'' x 0.0625'' x 5.125''", 
      stocks: ["sbs"] 
    },
    {
      num:"4263", 
      name:"Game Board", 
      desc:"", 
      comName:"Turned Edge", 
      finDim:"11.0625'' x 11.75''", 
      stocks:["turned-edge"]
    },
    {
      num:"5018", 
      name:"Tuck Box", 
      desc:"Holds 1 VHS with Platform", 
      comName:"Tuck Box", 
      finDim:" 6.75'' x 2'' x 9''",
      stocks: ["sbs", "flute" ]
    },
    {
      num:"5160", 
      name:"Folding Carton", 
      desc: "Tuck Box with Crash Lock Bottom", 
      comName:"Tuck Box", 
      finDim:" 7.875'' x 1.5'' x 9.5''", 
      stocks:["sbs","flute"]
    },
    {
      num:"4220a",
      name: "Angle Box", 
      desc:"Angle Box for 4220 Slip Case", 
      comName:"Turned Edge", 
      finDim:" 8.8125'' x 4.5'' x 11.5312''", 
      stocks: ["sbs","flute","turned-edge"]
    },
    {
      num:"4220", 
      name:"Slip Case", 
      desc:"Slip Case for Angle Box Insert", 
      comName: "Turned Edge", 
      finDim:" 9.25'' x 4.8125'' x 11.75''", 
      stocks: ["sbs","flute","turned-edge"]
    },
    {
      num:"4245", 
      name:"Clamshell Box", 
      desc:"Insert Holds 13 CDs & Book", 
      comName:"Clamshell", 
      finDim:" 11.0625'' x 1.837'' x 14.25''", 
      stocks: ["sbs","flute"]
    },
    {
      num:"2107", 
      name:"Folding Carton", 
      desc: "Holds 1 Quad Jewel", 
      comName:"Tuck Box", 
      finDim:" 4.937'' x 1.015'' x 5.598''", 
      stocks: ["sbs","flute"]
    },
    {
      num:"6480", 
      name:"Book Style", 
      desc:"Box with CD Slit", 
      comName:"Tuck Box", 
      finDim:" 6.0625'' x 0.3594'' x 9.0938''",
      stocks: ["sbs"]
    },
    {
      num:"1429", 
      name:"Pocket Folder", 
      desc:"2 Capacity Pockets & Optional Disc Slot", 
      comName:"Folder", 
      finDim: " 9'' x .27'' x 12''",
      stocks: ["flat","sbs"]
    },
    {
      num:"1594", 
      name:"Business Card Mailer", 
      desc:"4 Panel, Holds 1 Business Card", 
      comName:"Business Card", 
      finDim:" 5.531'' x .25'' x 4.953''", 
      stocks: ["flat","sbs"]
    },
    {
      num:"5004", 
      name:"Mailer", 
      desc:"4 Panel CD Mailer with Zip Strip Holds 1 CD", 
      comName:"Mailer", 
      finDim: " 5.125'' x 0.0625'' x 5.125''", 
      stocks: ["flat","sbs"]
    },
    {
      num:"5002", 
      name:"Jacket", 
      desc: "4 Panel CD Sleeve Holds 1 CD", 
      comName:"Jacket", 
      finDim:" 5.138'' x 0.0625'' x 5.125''", 
      stocks:["flat","sbs" ]
    },
    {
      num:"5003", 
      name:"Jacket", 
      desc: "6 Panel Holds 1 CD", 
      comName:"Jacket", 
      finDim:" 5'' x 0.3125'' x 5''",
      stocks: ["flat","sbs"],
    },
    {
      num:"6453", 
      name:"Mailer", 
      desc:"4 Panel Holds 1 CD with Lock Tab", 
      comName:"Mailer", 
      finDim: " 5.531'' x 0.0625'' x 5.5''", 
      stocks: ["flat","sbs"],
    },
    {
      num:"5001", 
      name:"Wallet", 
      desc:"4 Panel CD Jacket Holds 2 CDs", 
      comName:"Jacket", 
      finDim: " 5'' x 0.125'' x 5''", 
      stocks: ["flat","sbs"],
    },
    {
      num:"2113", 
      name:"Mailer", 
      desc:"4 Panel Holds 1 CD with Pop Up Flap", 
      comName: "Mailer", 
      finDim: " 8'' x 0.125'' x 8''",
      stocks: ["flat","sbs"],
    },
    {
      num:"8121", 
      name:"Jacket", 
      desc: "6 Panel CD Folder Holds 1 CD in Digi Tray", 
      comName: "Jacket", 
      finDim: " 5.562'' x 0.25'' x 4.937''", 
      stocks: ["flat","sbs"],
    },
    {
      num:"8148", 
      name:"Jacket", 
      desc: "6 Panel CD Folder Holds 2 CDs in Digi Tray" , 
      comName: "Jacket", 
      finDim: " 5.468'' x 0.25'' x 4.937''", 
      stocks: ["flat","sbs"],
    },
    {
      num:"5008", 
      name:"Mailer", 
      desc:"4 Panel w/ 2 CD Pockets & Zip Strips Holds 2 CDs", 
      comName:"Mailer", 
      finDim:" 5.1094'' x 0.3125'' x 5.0938''", 
      stocks: ["flat","sbs"],
    },
    {
      num:"5012", 
      name:"Jacket", 
      desc: "6 Panel CD Holds 1 CD", 
      comName: "Jacket", 
      finDim:" 5.125'' x 0.25'' x 5.0625''", 
      stocks: ["flat","sbs"],
    },
    {
      num:"5236", 
      name:"Wallet", 
      desc:"8 Panel CD Jacket Holds 4 CDs", 
      comName:"Jacket", 
      finDim:" 5.500'' x 0.375'' x 5.25''", 
      stocks: ["flat","sbs"],
    },
    {
      num:"5007", 
      name:"Wallet", 
      desc: "6 Panel CD Jacket Holds 2 CDs", 
      comName: "Jacket", 
      finDim:" 5'' x 0.1875'' x 5''", 
      stocks: ["sbs"],
    },
    {
      num:"5005", 
      name:"Mailer", 
      desc:"4 Panel with Zip Strip Holds 1 CD", 
      comName:"Mailer", 
      finDim: " 5.2185'' x 0.1405'' x 5.117''", 
      stocks: ["flat","sbs"],
    },
    {
      num:"8124", 
      name:"Jacket", 
      desc: "4 Panel CD Folder Holds 1 CD in Digi Tray", 
      comName: "Jacket", 
      finDim: " 5.531'' x 0.25'' x 4.953''", 
      stocks: ["flat","sbs"] 
    }]
};